import { createSession, getRenderModel, submitAnswer, isTerminal, type Session } from "../src/engine/interpreter.js";
import { FlowGraphSchema } from "../src/schema/flow.js";
import { BranchProfileSchema, type BranchProfile } from "../src/schema/profile.js";
import flowGraphRaw from "../src/flow/flow-graph.json" assert { type: "json" };
import coiffeurRaw from "../src/profiles/coiffeur.json" assert { type: "json" };
import treuhaenderRaw from "../src/profiles/treuhaender.json" assert { type: "json" };
import tatowiererRaw from "../src/profiles/tatowierer.json" assert { type: "json" };
import physiotherapieRaw from "../src/profiles/physiotherapie.json" assert { type: "json" };
import ernaehrungsberatungRaw from "../src/profiles/ernaehrungsberatung.json" assert { type: "json" };

/**
 * Diese Datei enthält ausschliesslich Rendering + Event-Wiring.
 * Jede Entscheidung ("welcher Knoten kommt als Nächstes", "wie tief ist
 * die Conversion-Frage", "wird F4-REG übersprungen") passiert im Motor
 * (src/engine/interpreter.ts). Hier wird nur dispatcht, WELCHES
 * Eingabe-Widget zu einem node.type gezeichnet wird, und WELCHES Profil
 * an createSession übergeben wird — beides Layout-/Navigationsentscheidung,
 * keine Geschäftslogik.
 */

const flow = FlowGraphSchema.parse(flowGraphRaw);

const profiles: { id: string; data: BranchProfile }[] = [
  { id: "coiffeur", data: BranchProfileSchema.parse(coiffeurRaw) },
  { id: "treuhaender", data: BranchProfileSchema.parse(treuhaenderRaw) },
  { id: "tatowierer", data: BranchProfileSchema.parse(tatowiererRaw) },
  { id: "physiotherapie", data: BranchProfileSchema.parse(physiotherapieRaw) },
  { id: "ernaehrungsberatung", data: BranchProfileSchema.parse(ernaehrungsberatungRaw) },
];

type Screen = { kind: "select" } | { kind: "flow"; profile: BranchProfile; session: Session };

let screen: Screen = { kind: "select" };
const path: string[] = [];

const app = document.getElementById("app")!;
const trail = document.getElementById("trail")!;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, props: Partial<HTMLElementTagNameMap[K]> = {}, children: (Node | string)[] = []): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  Object.assign(node, props);
  for (const child of children) node.append(child);
  return node;
}

function startFlow(profile: BranchProfile) {
  path.length = 0;
  screen = { kind: "flow", profile, session: createSession(flow, profile) };
  render();
}

function backToSelection() {
  path.length = 0;
  screen = { kind: "select" };
  render();
}

function advance(answer: unknown) {
  if (screen.kind !== "flow") return;
  screen = { ...screen, session: submitAnswer(screen.session, answer) };
  render();
}

function renderTrail() {
  trail.textContent = path.length > 0 ? "Pfad: " + path.join(" → ") : "";
}

function renderSelectScreen() {
  app.replaceChildren();
  app.append(el("h2", {}, ["Branche wählen"]));
  for (const p of profiles) {
    app.append(
      el("button", { onclick: () => startFlow(p.data) }, [
        `${p.data.branch_label.de} — conversion_class: ${p.data.conversion_class}, craft_slider: ${p.data.craft_slider}`,
      ])
    );
  }
}

function render() {
  if (screen.kind === "select") {
    renderTrail();
    renderSelectScreen();
    return;
  }

  const { profile, session } = screen;
  path.push(session.currentNodeId);
  renderTrail();
  app.replaceChildren();

  app.append(
    el("p", { className: "branch-switch" }, [
      el("button", { className: "link-button", onclick: backToSelection }, ["← Branche wechseln"]),
    ])
  );

  const model = getRenderModel(session) as Record<string, unknown>;
  app.append(
    el("p", { className: "node-id" }, [`Branche: ${profile.branch_label.de} · [${model.nodeId as string}] ${model.type as string}`])
  );

  switch (model.type) {
    case "branch_select": {
      app.append(el("h2", {}, [`Branche: ${model.branch_label as string}`]));
      app.append(el("button", { onclick: () => advance(undefined) }, ["Weiter"]));
      break;
    }

    case "confirm_default": {
      app.append(el("h2", {}, [model.purpose as string]));
      for (const choice of model.choices as string[]) {
        const labels: Record<string, string> = { exact: "Ja, genau", more: "Ja, aber mehr", no: "Nein" };
        app.append(el("button", { onclick: () => advance(choice) }, [labels[choice] ?? choice]));
      }
      break;
    }

    case "checklist": {
      app.append(el("h2", {}, ["Zusätzliche Bausteine?"]));
      const checkboxes: HTMLInputElement[] = [];
      for (const item of model.items as string[]) {
        const cb = el("input", { type: "checkbox", value: item }) as HTMLInputElement;
        checkboxes.push(cb);
        app.append(el("label", {}, [cb, item]));
      }
      app.append(
        el("button", {
          onclick: () => advance(checkboxes.filter((c) => c.checked).map((c) => c.value)),
        }, ["Weiter"])
      );
      break;
    }

    case "lookup_gate": {
      app.append(el("h2", {}, ["Was beschreibt Ihr Anliegen eher?"]));
      for (const opt of model.generic_options as string[]) {
        app.append(el("button", { onclick: () => advance({ kind: "generic", value: opt }) }, [opt]));
      }
      for (const sig of model.signal_options as string[]) {
        app.append(el("button", { onclick: () => advance({ kind: "signal", value: sig }) }, [sig]));
      }
      break;
    }

    case "gatekeeper": {
      app.append(el("h2", {}, ["Vormerken"]));
      app.append(el("p", {}, [model.message as string]));
      break;
    }

    case "purpose_reselect": {
      app.append(el("p", {}, [model.note as string]));
      app.append(el("button", { onclick: () => advance(undefined) }, ["Weiter"]));
      break;
    }

    case "trust_question": {
      app.append(el("h2", {}, ["Womit überzeugen Sie?"]));
      app.append(el("p", {}, [`Beleg-Typen: ${(model.proof_types as string[]).join(", ")}`]));
      app.append(el("p", {}, [`Spezialisierung relevant: ${model.specialization_relevant}`]));
      const facts = model.regulatory_facts as { question: string; placement: string; conversion_critical: boolean }[];
      if (facts.length === 0) {
        app.append(el("p", { className: "muted" }, ["(keine regulatorischen Pflicht-Fakten für diese Branche)"]));
      } else {
        for (const f of facts) {
          app.append(
            el("p", {}, [
              `Pflicht-Frage (placement: ${f.placement}, conversion_critical: ${f.conversion_critical}): ${f.question}`,
            ])
          );
        }
      }
      app.append(el("button", { onclick: () => advance({ proof_selected: model.proof_types }) }, ["Weiter"]));
      break;
    }

    case "scalable_question": {
      app.append(
        el("h2", {}, [
          `Wie sollen Kunden Kontakt aufnehmen? (Tiefe: ${model.depth as string}, branching: ${model.branching})`,
        ])
      );
      for (const opt of model.options as string[]) {
        app.append(el("button", { onclick: () => advance({ selected: opt }) }, [opt]));
      }
      if (model.branching) app.append(el("p", { className: "muted" }, ["(volle Tiefe: würde hier in eine Tool-Folgefrage verzweigen)"]));
      break;
    }

    case "character_question": {
      app.append(el("h2", {}, [`Was soll der Besucher spüren? (Emphase: ${model.emphasis as string})`]));
      const sets = model.character_set as { label: string; subtitle: string }[];
      sets.forEach((c, i) => {
        app.append(el("button", { onclick: () => advance({ selected_index: i }) }, [`${c.label} — ${c.subtitle}`]));
      });
      break;
    }

    case "facts_form": {
      app.append(el("h2", {}, ["Ein paar feste Fakten"]));
      const inputs: Record<string, HTMLInputElement> = {};
      for (const field of model.fields as string[]) {
        const input = el("input", { placeholder: field }) as HTMLInputElement;
        inputs[field] = input;
        app.append(el("label", {}, [field, input]));
      }
      app.append(
        el("button", {
          onclick: () => advance(Object.fromEntries(Object.entries(inputs).map(([k, v]) => [k, v.value]))),
        }, ["Weiter"])
      );
      break;
    }

    case "material_collect": {
      app.append(el("h2", {}, ["Material pro Baustein"]));
      const blocks = model.blocks as { block: string; mandatory: boolean }[];
      const selects: Record<string, HTMLSelectElement> = {};
      for (const b of blocks) {
        const select = el("select", {}, [
          el("option", { value: "liefern" }, ["liefern"]),
          ...(b.mandatory ? [] : [el("option", { value: "spaeter" }, ["später"]), el("option", { value: "macht_ihr" }, ["macht ihr"])]),
        ]) as HTMLSelectElement;
        selects[b.block] = select;
        app.append(el("label", {}, [`${b.block}${b.mandatory ? " (Pflicht: liefern)" : ""}`, select]));
      }
      app.append(
        el("button", {
          onclick: () => advance(Object.fromEntries(Object.entries(selects).map(([k, v]) => [k, v.value]))),
        }, ["Weiter"])
      );
      break;
    }

    case "review": {
      app.append(el("h2", {}, ["Review"]));
      app.append(el("pre", {}, [JSON.stringify(model.collected, null, 2)]));
      break;
    }

    default:
      app.append(el("p", {}, [`Unbekannter Knotentyp: ${String(model.type)}`]));
  }

  if (isTerminal(session)) {
    app.append(el("p", { className: "terminal-note" }, ["— Ende des Fragebogens —"]));
    app.append(el("button", { onclick: backToSelection }, ["Neue Branche wählen"]));
  }
}

render();

import { describe, it, expect } from "vitest";
import { FlowGraphSchema } from "../src/schema/flow.js";
import { BranchProfileSchema, type BranchProfile } from "../src/schema/profile.js";
import { createSession, getRenderModel, submitAnswer, isTerminal } from "../src/engine/interpreter.js";
import flowGraphRaw from "../src/flow/flow-graph.json" assert { type: "json" };
import coiffeurRaw from "../src/profiles/coiffeur.json" assert { type: "json" };
import treuhaenderRaw from "../src/profiles/treuhaender.json" assert { type: "json" };
import tatowiererRaw from "../src/profiles/tatowierer.json" assert { type: "json" };
import physiotherapieRaw from "../src/profiles/physiotherapie.json" assert { type: "json" };

/**
 * Testart B (Code-Test, Schema Teil 5B): Sackgassen werden hier direkt
 * behoben, nicht nur gemeldet. Jede Antwortkombination muss in einem
 * gültigen Terminalzustand enden (review oder gatekeeper).
 */

const flow = FlowGraphSchema.parse(flowGraphRaw);

const profiles: Record<string, BranchProfile> = {
  coiffeur: BranchProfileSchema.parse(coiffeurRaw),
  treuhaender: BranchProfileSchema.parse(treuhaenderRaw),
  tatowierer: BranchProfileSchema.parse(tatowiererRaw),
  physiotherapie: BranchProfileSchema.parse(physiotherapieRaw),
};

/** Generischer "plausibelster nächster Schritt" — wählt nie branchenspezifisch,
 * sondern liest nur aus dem Render-Modell, das der Motor selbst ausgegeben hat. */
function genericAnswerFor(render: Record<string, unknown>): unknown {
  switch (render.type) {
    case "branch_select":
      return undefined;
    case "confirm_default":
      return "exact";
    case "checklist":
      return [];
    case "trust_question":
      return { proof_selected: render.proof_types };
    case "scalable_question":
      return { selected: (render.options as string[])[0] };
    case "character_question":
      return { selected_index: 0 };
    case "facts_form":
      return { name: "Beispiel", ort: "Zürich", erreichbarkeit: "Tel", sprache: "DE" };
    case "material_collect": {
      const blocks = render.blocks as { block: string; mandatory: boolean }[];
      return Object.fromEntries(blocks.map((b) => [b.block, b.mandatory ? "liefern" : "spaeter"]));
    }
    default:
      return undefined;
  }
}

function runHappyPath(profile: BranchProfile, maxSteps = 30) {
  let session = createSession(flow, profile);
  const visited: string[] = [];
  const renders: Record<string, unknown>[] = [];

  for (let step = 0; step < maxSteps; step++) {
    visited.push(session.currentNodeId);
    if (isTerminal(session)) return { session, visited, renders };
    const render = getRenderModel(session) as Record<string, unknown>;
    renders.push(render);
    session = submitAnswer(session, genericAnswerFor(render));
  }
  throw new Error(`Kein Terminalzustand erreicht nach ${maxSteps} Schritten. Pfad: ${visited.join(" -> ")}`);
}

describe.each(Object.entries(profiles))("Pfad-Validität: %s (Happy Path F1=exact)", (name, profile) => {
  it("läuft ohne Exception bis review durch", () => {
    const { session } = runHappyPath(profile);
    expect(session.currentNodeId).toBe("F_review");
    expect(isTerminal(session)).toBe(true);
  });
});

describe("Pfad-Validität: Coiffeur — Verzweigungen", () => {
  const coiffeur = profiles.coiffeur;

  function runPath(answersOverride: Record<string, unknown> = {}, maxSteps = 30) {
    let session = createSession(flow, coiffeur);
    const visited: string[] = [];
    for (let step = 0; step < maxSteps; step++) {
      visited.push(session.currentNodeId);
      if (isTerminal(session)) return { session, visited };
      const render = getRenderModel(session) as Record<string, unknown>;
      const override = answersOverride[session.currentNodeId];
      session = submitAnswer(session, override !== undefined ? override : genericAnswerFor(render));
    }
    throw new Error(`Kein Terminalzustand erreicht. Pfad: ${visited.join(" -> ")}`);
  }

  it("F1 = more durchläuft die Checklist und landet trotzdem bei review", () => {
    const { session, visited } = runPath({ F1_zweck: "more", F1b_checklist: ["team", "booking"] });
    expect(visited).toContain("F1b_checklist");
    expect(session.currentNodeId).toBe("F_review");
    expect(session.activeOptionalBlocks).toEqual(["team", "booking"]);
  });

  it("F1 = no, generische Sorte 1 fliesst zurück in den Hauptpfad", () => {
    const { session, visited } = runPath({
      F1_zweck: "no",
      F1_NEIN_gate: { kind: "generic", value: "Anfrage statt direktem Erstgespräch" },
    });
    expect(visited).toContain("F1_NEIN_purpose_reselect");
    expect(visited).not.toContain("F1_NEIN_gatekeeper");
    expect(session.currentNodeId).toBe("F_review");
  });

  it("F1 = no, Signal aus out_of_scope_signals (Sorte 2) endet im Gatekeeper", () => {
    const { session, visited } = runPath({
      F1_zweck: "no",
      F1_NEIN_gate: { kind: "signal", value: "Online-Shop" },
    });
    expect(visited).toContain("F1_NEIN_gatekeeper");
    expect(session.currentNodeId).toBe("F1_NEIN_gatekeeper");
    expect(isTerminal(session)).toBe(true);
  });

  it("Vertrauens-Frage kommt vor der Conversion-Frage (fixe Reihenfolge)", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact");
    expect(getRenderModel(session).type).toBe("trust_question");
  });

  it("leeres regulatory_facts führt zu 0 Pflicht-Fakten-Fragen", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    const render = getRenderModel(session) as { regulatory_facts: unknown[] };
    expect(render.regulatory_facts).toHaveLength(0);
  });

  it("conversion_class=action liefert volle Tiefe (branching=true), Optionen kommen aus dem Profil", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact"); // F1_zweck -> F_vertrauen
    session = submitAnswer(session, { proof_selected: ["reviews"] });
    const render = getRenderModel(session) as { type: string; depth: string; branching: boolean; options: string[] };
    expect(render.type).toBe("scalable_question");
    expect(render.depth).toBe("full");
    expect(render.branching).toBe(true);
    expect(render.options).toEqual(["booking_tool", "contact_form", "call"]);
  });

  it("craft_slider=45 lässt F_character mit voller Emphase rendern (Schwelle bei 60)", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: ["reviews"] });
    session = submitAnswer(session, { selected: "booking_tool" });
    const render = getRenderModel(session) as { emphasis: string };
    expect(render.emphasis).toBe("full");
  });
});

describe("Pfad-Validität: Treuhänder (trust) — Kurzform, aber sichtbar", () => {
  const treuhaender = profiles.treuhaender;

  it("Conversion-Frage ist Kurzform, bleibt aber sichtbar (visible: true)", () => {
    let session = createSession(flow, treuhaender);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: treuhaender.proof_types });
    const render = getRenderModel(session) as { type: string; depth: string; branching: boolean; options: string[] };
    expect(render.type).toBe("scalable_question");
    expect(render.depth).toBe("short");
    expect(render.branching).toBe(false);
    expect(render.options.length).toBeGreaterThan(0);
    expect(render.options.length).toBeLessThanOrEqual(3);
  });
});

describe("Pfad-Validität: Tätowierer — craft_slider an beiden Wirkstellen", () => {
  const tatowierer = profiles.tatowierer;

  it("craft_slider=95 lässt F_character in den reduced-Bereich fallen", () => {
    let session = createSession(flow, tatowierer);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: tatowierer.proof_types });
    session = submitAnswer(session, { selected: tatowierer.conversion_type });
    const render = getRenderModel(session) as { emphasis: string };
    expect(render.emphasis).toBe("reduced");
  });

  it("craft_slider=95 macht gallery_portfolio in F_material verpflichtend (liefern, kein später)", () => {
    let session = createSession(flow, tatowierer);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: tatowierer.proof_types });
    session = submitAnswer(session, { selected: tatowierer.conversion_type });
    session = submitAnswer(session, { selected_index: 0 });
    session = submitAnswer(session, { name: "x", ort: "x", erreichbarkeit: "x", sprache: "DE" });
    const render = getRenderModel(session) as { blocks: { block: string; mandatory: boolean }[] };
    const gallery = render.blocks.find((b) => b.block === "gallery_portfolio");
    expect(gallery?.mandatory).toBe(true);
  });

  it("conversion_class=mixed liefert volle Tiefe für beide Fragen", () => {
    let session = createSession(flow, tatowierer);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: tatowierer.proof_types });
    const render = getRenderModel(session) as { depth: string; branching: boolean };
    expect(render.depth).toBe("full");
    expect(render.branching).toBe(true);
  });
});

describe("Pfad-Validität: Physiotherapie — regulatory_facts conversion-kritisch", () => {
  const physio = profiles.physiotherapie;

  it("gefüllte regulatory_facts erscheinen prominent und conversion_critical bei F_vertrauen", () => {
    let session = createSession(flow, physio);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    const render = getRenderModel(session) as {
      regulatory_facts: { question: string; placement: string; conversion_critical: boolean }[];
    };
    expect(render.regulatory_facts).toHaveLength(1);
    expect(render.regulatory_facts[0].placement).toBe("prominent");
    expect(render.regulatory_facts[0].conversion_critical).toBe(true);
  });

  it("Conversion-Frage ist Kurzform (trust), bleibt aber sichtbar", () => {
    let session = createSession(flow, physio);
    session = submitAnswer(session, undefined);
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: physio.proof_types });
    const render = getRenderModel(session) as { depth: string; branching: boolean; options: string[] };
    expect(render.depth).toBe("short");
    expect(render.branching).toBe(false);
    expect(render.options.length).toBeGreaterThan(0);
  });
});

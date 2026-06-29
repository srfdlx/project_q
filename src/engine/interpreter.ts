import type { BranchProfile, Localized } from "../schema/profile.js";
import type { FlowGraph, FlowNode } from "../schema/flow.js";

export interface Session {
  profile: BranchProfile;
  flow: FlowGraph;
  currentNodeId: string;
  collected: Record<string, unknown>;
  activeOptionalBlocks: string[];
}

export interface RenderModel {
  nodeId: string;
  type: FlowNode["type"];
  terminal: boolean;
  [key: string]: unknown;
}

export class UnknownNodeError extends Error {}
export class InvalidAnswerError extends Error {}

function findNode(flow: FlowGraph, id: string): FlowNode {
  const node = flow.nodes.find((n) => n.id === id);
  if (!node) throw new UnknownNodeError(`Knoten "${id}" nicht im Flow-Graph gefunden`);
  return node;
}

function pickLocalized(value: Localized, lang: string = "de"): string {
  return (value as Record<string, string | undefined>)[lang] ?? value.de;
}

function emphasisFor(slider: number, thresholds: { max: number; emphasis: "full" | "reduced" }[]): "full" | "reduced" {
  const sorted = [...thresholds].sort((a, b) => a.max - b.max);
  const hit = sorted.find((t) => slider <= t.max);
  return hit ? hit.emphasis : sorted[sorted.length - 1].emphasis;
}

function isMandatoryAbove(slider: number, rules: { threshold: number; block: string }[], block: string): boolean {
  return rules.some((r) => r.block === block && slider >= r.threshold);
}

export function createSession(flow: FlowGraph, profile: BranchProfile): Session {
  return {
    profile,
    flow,
    currentNodeId: flow.entry,
    collected: {},
    activeOptionalBlocks: [],
  };
}

export function isTerminal(session: Session): boolean {
  const node = findNode(session.flow, session.currentNodeId);
  return "terminal" in node && node.terminal === true;
}

/**
 * Übersetzt den aktuellen Knoten + das geladene Profil in ein reines
 * Render-Modell. Enthält keine Branchen-Fallunterscheidung (kein
 * `if profile.branch_id === ...`) — nur generische Auswertung von
 * Tabellen/Schwellen, die im Flow-Graph (Motor) oder Profil stehen.
 */
export function getRenderModel(session: Session): RenderModel {
  const { profile } = session;
  const node = findNode(session.flow, session.currentNodeId);

  switch (node.type) {
    case "branch_select":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        branch_label: pickLocalized(profile.branch_label),
      };

    case "confirm_default":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        purpose: pickLocalized(profile.default_purpose),
        choices: ["exact", "more", "no"],
      };

    case "checklist":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        items: profile.optional_blocks ?? [],
      };

    case "lookup_gate":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        generic_options: node.generic_options.map((o) => pickLocalized(o)),
        signal_options: profile.out_of_scope_signals ?? [],
      };

    case "gatekeeper":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: true,
        message: pickLocalized(node.message),
      };

    case "purpose_reselect":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        note: "Zweck neu eingeordnet — zurück in den Hauptpfad.",
      };

    case "trust_question": {
      const regulatoryFacts = profile.regulatory_facts ?? [];
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        proof_types: profile.proof_types,
        specialization_relevant: profile.specialization_relevant,
        // leeres Array → UI rendert 0 Fragen, kein Spezialfall nötig
        regulatory_facts: regulatoryFacts.map((f) => ({
          question: pickLocalized(f.question),
          options: f.options,
          placement: f.placement,
          conversion_critical: f.conversion_critical,
        })),
      };
    }

    case "scalable_question": {
      const cfg = node.depth_table[profile.conversion_class];
      // Fehlt conversion_fallbacks im Profil, ist der dokumentierte Default
      // "keine Fallbacks" — ausschliesslich conversion_type. Kein konkreter
      // Kontaktweg-String steht hier im Motor-Code.
      const allOptions = [profile.conversion_type, ...(profile.conversion_fallbacks ?? [])].filter(
        (v, i, arr) => arr.indexOf(v) === i
      );
      const options = cfg.depth === "short" && cfg.max_options ? allOptions.slice(0, cfg.max_options) : allOptions;
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        depth: cfg.depth,
        branching: cfg.branching,
        options,
      };
    }

    case "character_question": {
      const emphasis = emphasisFor(profile.craft_slider, node.emphasis_thresholds);
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        emphasis,
        character_set: profile.character_set.map((c) => ({
          label: pickLocalized(c.label),
          subtitle: pickLocalized(c.subtitle),
        })),
      };
    }

    case "facts_form":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        fields: node.fields,
      };

    case "material_collect": {
      const blocks = [...profile.default_blocks, ...session.activeOptionalBlocks];
      return {
        nodeId: node.id,
        type: node.type,
        terminal: false,
        blocks: blocks.map((block) => ({
          block,
          mandatory: isMandatoryAbove(profile.craft_slider, node.mandatory_above_threshold, block),
        })),
      };
    }

    case "review":
      return {
        nodeId: node.id,
        type: node.type,
        terminal: true,
        collected: session.collected,
      };

    default:
      throw new UnknownNodeError(`Unbekannter Knotentyp: ${(node as { type: string }).type}`);
  }
}

/**
 * Verarbeitet eine Antwort und liefert die Folge-Session. Die einzige
 * "Entscheidung" pro Fall ist generischer Dispatch auf node.type bzw.
 * auf Tabellen/Felder aus Profil oder Flow-Graph — niemals auf branch_id.
 */
export function submitAnswer(session: Session, answer: unknown): Session {
  const { profile } = session;
  const node = findNode(session.flow, session.currentNodeId);

  const next = (nodeId: string, collectedPatch: Record<string, unknown> = {}, optionalBlocksPatch?: string[]): Session => ({
    ...session,
    currentNodeId: nodeId,
    collected: { ...session.collected, ...collectedPatch },
    activeOptionalBlocks: optionalBlocksPatch ?? session.activeOptionalBlocks,
  });

  switch (node.type) {
    case "branch_select":
      return next(node.next);

    case "confirm_default": {
      if (answer === "exact") return next(node.on_exact, { f1_zweck: "exact" });
      if (answer === "more") return next(node.on_more, { f1_zweck: "more" });
      if (answer === "no") return next(node.on_no, { f1_zweck: "no" });
      throw new InvalidAnswerError(`F1 erwartet exact/more/no, erhalten: ${String(answer)}`);
    }

    case "checklist": {
      if (!Array.isArray(answer) || !answer.every((a) => typeof a === "string")) {
        throw new InvalidAnswerError("checklist erwartet string[]");
      }
      const allowed = profile.optional_blocks ?? [];
      const chosen = answer.filter((a) => allowed.includes(a as never));
      return next(node.next, { optional_blocks_chosen: chosen }, chosen);
    }

    case "lookup_gate": {
      if (typeof answer !== "object" || answer === null || !("kind" in answer)) {
        throw new InvalidAnswerError('lookup_gate erwartet { kind: "generic" | "signal", value: string }');
      }
      const a = answer as { kind: "generic" | "signal"; value: string };
      if (a.kind === "signal") return next(node.on_match, { f1_no_signal: a.value });
      return next(node.on_no_match, { f1_no_generic: a.value });
    }

    case "gatekeeper":
      throw new InvalidAnswerError("gatekeeper ist terminal, keine weitere Antwort möglich");

    case "purpose_reselect":
      return next(node.next);

    case "trust_question":
      return next(node.next, { trust_answer: answer });

    case "scalable_question":
      return next(node.next, { conversion_answer: answer });

    case "character_question":
      return next(node.next, { character_answer: answer });

    case "facts_form":
      return next(node.next, { facts: answer });

    case "material_collect":
      return next(node.next, { material: answer });

    case "review":
      throw new InvalidAnswerError("review ist terminal, keine weitere Antwort möglich");

    default:
      throw new UnknownNodeError(`Unbekannter Knotentyp: ${(node as { type: string }).type}`);
  }
}

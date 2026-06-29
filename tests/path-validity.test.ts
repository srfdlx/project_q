import { describe, it, expect } from "vitest";
import { FlowGraphSchema } from "../src/schema/flow.js";
import { BranchProfileSchema } from "../src/schema/profile.js";
import { createSession, getRenderModel, submitAnswer, isTerminal } from "../src/engine/interpreter.js";
import flowGraphRaw from "../src/flow/flow-graph.json" assert { type: "json" };
import coiffeurRaw from "../src/profiles/coiffeur.json" assert { type: "json" };

/**
 * Testart B (Code-Test, Schema Teil 5B): Sackgassen werden hier direkt
 * behoben, nicht nur gemeldet. Jede Antwortkombination muss in einem
 * gültigen Terminalzustand enden (review oder gatekeeper).
 */

const flow = FlowGraphSchema.parse(flowGraphRaw);
const coiffeur = BranchProfileSchema.parse(coiffeurRaw);

function answerFor(nodeType: string): unknown {
  switch (nodeType) {
    case "branch_select":
      return undefined;
    case "confirm_default":
      return "exact";
    case "checklist":
      return [];
    case "trust_question":
      return { proof_selected: ["reviews"] };
    case "scalable_question":
      return { selected: "booking_tool" };
    case "character_question":
      return { selected_index: 0 };
    case "facts_form":
      return { name: "Salon Beispiel", ort: "Zürich", erreichbarkeit: "Tel", sprache: "DE" };
    case "material_collect":
      return { gallery_portfolio: "liefern" };
    default:
      return undefined;
  }
}

function runPath(answersOverride: Record<string, unknown> = {}, maxSteps = 30) {
  let session = createSession(flow, coiffeur);
  const visited: string[] = [];

  for (let step = 0; step < maxSteps; step++) {
    visited.push(session.currentNodeId);
    if (isTerminal(session)) {
      return { session, visited };
    }
    const render = getRenderModel(session);
    const override = answersOverride[session.currentNodeId];
    const answer = override !== undefined ? override : answerFor(render.type);
    session = submitAnswer(session, answer);
  }
  throw new Error(`Kein Terminalzustand erreicht nach ${maxSteps} Schritten. Pfad: ${visited.join(" -> ")}`);
}

describe("Pfad-Validität: Coiffeur", () => {
  it("F1 = exact läuft bis review durch", () => {
    const { session, visited } = runPath({ F1_zweck: "exact" });
    expect(visited).toContain("F1_zweck");
    expect(visited).not.toContain("F1b_checklist");
    expect(session.currentNodeId).toBe("F_review");
  });

  it("F1 = more durchläuft die Checklist und landet trotzdem bei review", () => {
    const { session, visited } = runPath({ F1_zweck: "more", F1b_checklist: ["team", "booking"] });
    expect(visited).toContain("F1b_checklist");
    expect(session.currentNodeId).toBe("F_review");
    expect(session.activeOptionalBlocks).toEqual(["team", "booking"]);
  });

  it("F1 = no, generische Sorte 1 (im MVP-Quadranten) fliesst zurück in den Hauptpfad", () => {
    const { session, visited } = runPath({
      F1_zweck: "no",
      F1_NEIN_gate: { kind: "generic", value: "Anfrage statt direktem Erstgespräch" },
    });
    expect(visited).toContain("F1_NEIN_purpose_reselect");
    expect(visited).not.toContain("F1_NEIN_gatekeeper");
    expect(session.currentNodeId).toBe("F_review");
  });

  it("F1 = no, Signal aus out_of_scope_signals (Sorte 2) endet im Gatekeeper, nicht im Review", () => {
    const { session, visited } = runPath({
      F1_zweck: "no",
      F1_NEIN_gate: { kind: "signal", value: "Online-Shop" },
    });
    expect(visited).toContain("F1_NEIN_gatekeeper");
    expect(session.currentNodeId).toBe("F1_NEIN_gatekeeper");
    expect(isTerminal(session)).toBe(true);
  });

  it("conversion_class=action liefert volle Tiefe (branching=true) an F_conversion", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact"); // F1_zweck -> F_vertrauen
    session = submitAnswer(session, { proof_selected: ["reviews"] }); // F_vertrauen -> F_conversion
    const render = getRenderModel(session);
    expect(render.type).toBe("scalable_question");
    expect(render.depth).toBe("full");
    expect(render.branching).toBe(true);
  });

  it("Vertrauens-Frage kommt vor der Conversion-Frage (fixe Reihenfolge)", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact");
    expect(getRenderModel(session).type).toBe("trust_question");
  });

  it("leeres regulatory_facts führt zu 0 Pflicht-Fakten-Fragen (Auto-Skip statt Branchen-If)", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact");
    const render = getRenderModel(session) as { regulatory_facts: unknown[] };
    expect(render.regulatory_facts).toHaveLength(0);
  });

  it("craft_slider=45 lässt F_character mit voller Emphase rendern (Schwelle bei 60)", () => {
    let session = createSession(flow, coiffeur);
    session = submitAnswer(session, undefined); // F0_branch_select -> F1_zweck
    session = submitAnswer(session, "exact");
    session = submitAnswer(session, { proof_selected: ["reviews"] });
    session = submitAnswer(session, { selected: "booking_tool" });
    const render = getRenderModel(session) as { emphasis: string };
    expect(render.emphasis).toBe("full");
  });

  it("alle vier Pfade enden terminal und werfen keine Exception", () => {
    expect(() => runPath({ F1_zweck: "exact" })).not.toThrow();
    expect(() => runPath({ F1_zweck: "more", F1b_checklist: [] })).not.toThrow();
    expect(() =>
      runPath({ F1_zweck: "no", F1_NEIN_gate: { kind: "generic", value: "x" } })
    ).not.toThrow();
    expect(() =>
      runPath({ F1_zweck: "no", F1_NEIN_gate: { kind: "signal", value: "Online-Shop" } })
    ).not.toThrow();
  });
});

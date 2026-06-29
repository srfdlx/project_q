// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";

/**
 * Smoke-Test fürs UI: stellt sicher, dass ui/app.ts ohne Laufzeitfehler
 * durch den kompletten Coiffeur-Pfad klickt. Prüft NICHT auf
 * Verzweigungslogik in der UI (die gibt es nicht) — nur, dass Rendering
 * + submitAnswer-Aufrufe fehlerfrei zusammenspielen.
 */
function clickByText(text: string) {
  const buttons = [...document.querySelectorAll("button")];
  const btn = buttons.find((b) => b.textContent?.includes(text));
  if (!btn) {
    throw new Error(`Button "${text}" nicht gefunden. Vorhanden: ${buttons.map((b) => b.textContent).join(" | ")}`);
  }
  btn.click();
}

beforeEach(() => {
  document.body.innerHTML = `<div id="trail"></div><div id="app"></div>`;
});

describe("UI-Smoke: Coiffeur, F1=exact", () => {
  it("läuft ohne Exception bis zum Review durch", async () => {
    await import("../ui/app.ts?t=" + Date.now());
    await new Promise((r) => setTimeout(r, 0));

    expect(document.getElementById("app")!.textContent).toContain("branch_select");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("confirm_default");
    clickByText("Ja, genau");
    expect(document.getElementById("app")!.textContent).toContain("trust_question");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("scalable_question");
    clickByText("booking_tool");
    expect(document.getElementById("app")!.textContent).toContain("character_question");
    clickByText("gepflegt-gehoben");
    expect(document.getElementById("app")!.textContent).toContain("facts_form");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("material_collect");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("review");
    expect(document.getElementById("app")!.textContent).toContain("Ende des Fragebogens");
  });
});

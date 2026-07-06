// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from "vitest";

/**
 * Smoke-Test fürs UI: stellt sicher, dass ui/app.ts ohne Laufzeitfehler
 * durch Branchenauswahl + Fragefluss klickt. Prüft NICHT auf
 * Verzweigungslogik in der UI (die gibt es nicht) — nur, dass Rendering
 * + submitAnswer-Aufrufe fehlerfrei zusammenspielen.
 *
 * Nur EIN dynamischer import() pro Testlauf: ein zweiter import() mit
 * neuem Query-String führt im jsdom-Setup nicht zuverlässig zu einer
 * frischen Modul-Ausführung (die `app`-DOM-Referenz bleibt sonst an den
 * von beforeEach bereits ersetzten Knoten gebunden). Deshalb alle
 * UI-Smoke-Checks in einem einzigen Testlauf.
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

describe("UI-Smoke: Branchenauswahl + Fragefluss", () => {
  it("listet alle vier Branchen, durchläuft Coiffeur bis review, wechselt zu Treuhänder (Kurzform sichtbar)", async () => {
    await import("../ui/app.ts?t=" + Date.now());
    await new Promise((r) => setTimeout(r, 0));

    const selectText = document.getElementById("app")!.textContent ?? "";
    expect(selectText).toContain("Branche wählen");
    for (const label of ["Coiffeur", "Treuhänder", "Tätowierer", "Physiotherapie"]) {
      expect(selectText).toContain(label);
    }

    // Coiffeur: kompletter Happy Path bis Review
    clickByText("Coiffeur");
    expect(document.getElementById("app")!.textContent).toContain("branch_select");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("confirm_default");
    clickByText("Ja, genau");
    expect(document.getElementById("app")!.textContent).toContain("trust_question");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("scalable_question");
    clickByText("booking_tool");
    expect(document.getElementById("app")!.textContent).toContain("character_question");
    clickByText("Warm & nahbar");
    expect(document.getElementById("app")!.textContent).toContain("facts_form");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("material_collect");
    clickByText("Weiter");
    expect(document.getElementById("app")!.textContent).toContain("review");
    expect(document.getElementById("app")!.textContent).toContain("Ende des Fragebogens");

    // Zurück zur Auswahl über den Terminal-Button
    clickByText("Neue Branche wählen");
    expect(document.getElementById("app")!.textContent).toContain("Branche wählen");

    // Treuhänder: trust-Klasse, Kurzform-Conversion bleibt sichtbar
    clickByText("Treuhänder");
    clickByText("Weiter"); // branch_select -> F1_zweck
    clickByText("Ja, genau"); // -> F_vertrauen
    expect(document.getElementById("app")!.textContent).toContain("trust_question");
    clickByText("Weiter"); // -> F_conversion
    const conversionText = document.getElementById("app")!.textContent ?? "";
    expect(conversionText).toContain("Tiefe: short");
    expect(conversionText).toContain("branching: false");

    // Zurück zur Auswahl über den jederzeit verfügbaren Link
    clickByText("← Branche wechseln");
    expect(document.getElementById("app")!.textContent).toContain("Branche wählen");
  });
});

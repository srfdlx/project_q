import { describe, it, expect } from "vitest";
import { BranchProfileSchema } from "../src/schema/profile.js";
import coiffeur from "../src/profiles/coiffeur.json" assert { type: "json" };
import treuhaender from "../src/profiles/treuhaender.json" assert { type: "json" };
import tatowierer from "../src/profiles/tatowierer.json" assert { type: "json" };
import physiotherapie from "../src/profiles/physiotherapie.json" assert { type: "json" };
import ernaehrungsberatung from "../src/profiles/ernaehrungsberatung.json" assert { type: "json" };

/**
 * Testart A (Konzept-Test, Schema Teil 5A): Lücken werden gemeldet,
 * nicht im Test selbst geflickt. Ein fehlschlagender Test hier bedeutet
 * "Branche passt nicht sauber ins Schema" — eine Entscheidung für den
 * Menschen, nicht für den Code.
 */
describe("Schema-Vollständigkeit", () => {
  const profiles: Array<{ name: string; data: unknown }> = [
    { name: "coiffeur", data: coiffeur },
    { name: "treuhaender", data: treuhaender },
    { name: "tatowierer", data: tatowierer },
    { name: "physiotherapie", data: physiotherapie },
    { name: "ernaehrungsberatung", data: ernaehrungsberatung },
  ];

  for (const { name, data } of profiles) {
    it(`${name}: lässt sich vollständig und widerspruchsfrei als Profil ausdrücken`, () => {
      const result = BranchProfileSchema.safeParse(data);
      if (!result.success) {
        const issues = result.error.issues
          .map((i) => `  - Feld "${i.path.join(".")}": ${i.message}`)
          .join("\n");
        throw new Error(`${name} klemmt am Schema:\n${issues}`);
      }
      expect(result.success).toBe(true);
    });
  }
});

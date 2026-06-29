# Branchenprofil-Schema
## Die Datenstruktur, die den Fragebogen-Motor branchenspezifisch füllt

> **Lies zuerst `konzept-snapshot.md`.** Dieses Dokument setzt das dortige
> Modell voraus (A1–A8-Kern, 7 Stellschrauben, 4 Meta-Eigenschaften,
> Doppelwirkungs-Prinzip).

> **Grundprinzip:** Ein Fragebogen-**Motor** (Code) + N **Branchenprofile** (Daten).
> Der Motor ändert sich nie pro Branche. Eine neue Branche = eine neue Profil-
> Instanz nach diesem Schema. Profile sind Daten (z.B. je eine JSON-Datei),
> niemals Code.

---

## Teil 1 — Schema-Definition (die Felder eines Profils)

Jedes Branchenprofil hat genau diese Felder. Reihenfolge = die 7 Stellschrauben
aus dem Snapshot, plus Metadaten.

| Feld | Typ | Pflicht | Bedeutung | Wirkt auf |
|---|---|---|---|---|
| `branch_id` | string | ✅ | eindeutiger Schlüssel (z.B. `coiffeur`) | F0 |
| `branch_label` | string (lokalisiert) | ✅ | Anzeigename, ggf. DE/FR/IT | F0 |
| `branch_aliases` | string[] | – | Suchbegriffe/Synonyme fürs Auswahlfeld | F0 |
| **(1)** `default_purpose` | string (lokalisiert) | ✅ | der bestätigbare Default-Zweck-Satz | F1 |
| **(2a)** `conversion_type` | enum | ✅ | konkrete Conversion (s. Wertelisten) | Conversion-Frage |
| **(2b)** `conversion_class` | enum | ✅ | `action` / `trust` / `mixed` → steuert Reihenfolge UND Tiefe von Vertrauens-/Conversion-Frage (s. Teil 1b) | Reihenfolge + Tiefe |
| **(3)** `craft_slider` | int 0–100 | ✅ | dienstleistend(0) ↔ gestaltend(100) | F2-Gewicht, F7-Material |
| **(4)** `proof_types` | enum[] | ✅ | welche Beleg-Bausteine zur Auswahl stehen | F4 |
| `specialization_relevant` | bool | ✅ | ist Spezialisierung/Passung conversion-relevant? | F4 |
| **(5)** `default_blocks` | enum[] | ✅ | Struktur-Rohbau (Standard-Sektionen) | Struktur |
| `optional_blocks` | enum[] | – | zuschaltbar via F1b („ja, aber mehr") | F1b |
| **(6)** `semi_dynamic_modules` | enum[] | – | vorgebaute an/aus-Module (Pflege-Stufe 2) | Module |
| **(7)** `regulatory_facts` | object[] | – | regulatorische Pflicht-Fakten (s.u.) | F4-REG |
| `character_set` | object[] | ✅ | 3–4 Gefühlswelten (Label + Designtokens) | F2 |
| `out_of_scope_signals` | string[] | – | Antworten, die F1-NEIN→Sorte 2 (Türsteher) auslösen | F1-NEIN |

### Untertyp `regulatory_facts[]`
| Feld | Typ | Bedeutung |
|---|---|---|
| `question` | string (lokalisiert) | die zu stellende Frage |
| `options` | string[] | mögliche Antworten |
| `placement` | enum: `hero` / `prominent` / `standard` | **Doppelwirkung:** steuert Platzierung, nicht nur Inhalt |
| `conversion_critical` | bool | wenn true: weit oben, conversion-nah |

### Untertyp `character_set[]`
| Feld | Typ | Bedeutung |
|---|---|---|
| `label` | string (lokalisiert) | Gefühl, NICHT Designattribut (z.B. „seriös-etabliert") |
| `subtitle` | string (lokalisiert) | die „…damit er spürt: X"-Ergänzung |
| `design_tokens` | object | Typo/Farbe/Spacing/Bildstil-Korridor (vom Designer definiert) |

---

## Teil 1b — Reihenfolge & Tiefe von Vertrauens-/Conversion-Frage (löst Doku-Konflikt)

> Korrigiert eine frühere Unklarheit: Der Motor hat **keine** feste Sequenz
> „Conversion dann Vertrauen". Beides hängt von `conversion_class` ab.

**Reihenfolge:** Die **Vertrauens-Frage kommt VOR der Conversion-Frage** — einheitlich
für alle Branchen (Vertrauen schadet nie). Frühere F3/F4-Nummerierung ist damit
überholt; maßgeblich ist: *Vertrauen → Conversion*.

**Tiefe (das eigentliche Modell):** `conversion_class` ändert nicht nur die Position,
sondern **Inhalt und Tiefe** der Conversion-Frage:

| `conversion_class` | Conversion-Frage | Vertrauens-Frage |
|---|---|---|
| `action` | **voll entfaltet**, verzweigt (z.B. anrufen / Formular / Buchung → Tool-Frage) | leichter |
| `trust` | **Kurzform** — 1 ruhige Frage, 2–3 Optionen, KEINE Verzweigung; **bleibt sichtbar** | **voll** (inkl. Spezialisierung/Passung) |
| `mixed` | voll | voll (beide schwer) |

**Implementierungs-Vorgabe (Was, nicht Wie):**
- Die Conversion-Frage ist **eine** Entität, deren Tiefe parametrisch von
  `conversion_class` abhängt — **keine** zwei Sonderlogiken, **kein** stiller Default.
- Bei `trust` wird sie *schlanker, nicht unsichtbar*. Ein heimlicher Default
  widerspräche dem Produktversprechen „wir stellen die richtigen Fragen".
- *Wie* das modelliert wird (parametrisierter Knoten, weight_table mit
  Sichtbarkeits-/Tiefenflags o.ä.), ist Ingenieursentscheidung. Die Konzeptaussage
  ist nur: Reihenfolge fix (Vertrauen zuerst) + Tiefe klassenabhängig + immer sichtbar.
- *Spätere Ausnahme (erst nach echten Durchläufen):* Wenn `trust`-Branchen faktisch
  immer dieselbe Antwort wählen, darf die Kurzform zur Bestätigungsfrage kippen.

---

## Teil 2 — Kontrollierte Wertelisten (Enums)

Damit Profile vergleichbar/testbar bleiben, kommen diese Felder aus festen Listen.
Erweiterbar — aber jede Erweiterung ist eine bewusste Entscheidung, kein Ad-hoc-Wert.

**`conversion_type`:** `call` · `whatsapp` · `contact_form` · `inquiry_project`
· `booking_tool` · `first_consultation` · `store_visit` · `download` · `none_presence`

**`conversion_class`:** `action` · `trust` · `mixed`

**`proof_types`:** `qualification` · `certification` · `experience_years`
· `specialization` · `portfolio_images` · `reviews` · `testimonials`
· `references` · `hygiene_seriosity`

**`default_blocks` / `optional_blocks`:** `hero` · `services` · `pricing`
· `about_me` · `team` · `gallery_portfolio` · `specialization` · `contact`
· `location_map` · `opening_hours` · `booking` · `legal` (Impressum+Datenschutz, immer)
· `testimonials` · `qualifications`

**`semi_dynamic_modules`:** `promotion` · `news_notice` · `job_opening`
· `holiday_hours` · `guest_spot` · `availability_status` · `vacation_notice`

---

## Teil 3 — Referenzprofil: Coiffeur (der Lehrfall)

```
branch_id:            coiffeur
branch_label:         "Coiffeur / Friseur"
branch_aliases:       ["Friseur","Hairstylist","Salon","Barbier"]

(1) default_purpose:  "…dass neue Kunden Sie online finden und einfach einen
                       Termin oder Kontakt aufnehmen können"
(2a) conversion_type: booking_tool   (mit Fallback contact_form / call)
(2b) conversion_class: action
(3) craft_slider:     45             (Mitte: Fotos helfen, aber Anmutung verkauft mit)
(4) proof_types:      [portfolio_images, reviews, experience_years]
    specialization_relevant: false
(5) default_blocks:   [hero, services, pricing, about_me, gallery_portfolio,
                       contact, location_map, opening_hours, legal]
    optional_blocks:  [team, booking, testimonials]
(6) semi_dynamic_modules: [promotion, holiday_hours, job_opening]
(7) regulatory_facts: []             (unreguliert → leer)

character_set:
  - label: "gepflegt-gehoben"   subtitle: "hier bin ich in guten Händen"
  - label: "modern-minimal"     subtitle: "die sind auf der Höhe der Zeit"
  - label: "warm-nahbar"        subtitle: "hier fühl ich mich willkommen"
  - label: "trendig-mutig"      subtitle: "hier passiert was"

out_of_scope_signals: ["nur Pflegeprodukte verkaufen", "Online-Shop",
                        "Mitglieder-/Login-Bereich"]
```

**Was hier zu sehen ist (für die anderen Profile als Muster):**
- `conversion_class: action` → im Motor trägt F3 das Gewicht, F4 ist leichter.
- `craft_slider: 45` → F2 (Charakter) trägt noch voll; Bildmaterial hilfreich, nicht zwingend.
- `regulatory_facts: []` → F4-REG wird übersprungen.
- `team` ist *optional*, nicht default → wird erst durch F1b/Folgefrage aktiviert
  (erinnert an die Team↔Buchung-Querverbindung im Snapshot).

---

## Teil 4 — Drei weitere erprobte Profile (Kurzform, zum Abfüllen)

Nur die unterscheidenden Felder, als Vorlage:

**Treuhänder** — `conversion_class: trust` · `craft_slider: 5`
· `proof_types: [qualification, certification, specialization, experience_years, testimonials]`
· `specialization_relevant: true` · `regulatory_facts: []` (Zulassung = proof, nicht reg.)
· character_set: seriös-etabliert / modern-transparent / persönlich-nahbar (kein „mutig")

**Tätowierer** — `conversion_class: mixed` · `craft_slider: 95`
· `proof_types: [portfolio_images, specialization, hygiene_seriosity, reviews]`
· `specialization_relevant: true` (Stil-Passung)
· `semi_dynamic_modules: [guest_spot, availability_status]`
· **F2 tritt zurück** (craft_slider hoch) · Portfolio-Bilder = unverzichtbares Material

**Physiotherapie** — `conversion_class: trust` · `craft_slider: 10`
· `proof_types: [qualification, specialization, experience_years]`
· `specialization_relevant: true`
· `regulatory_facts:` [{ question: "Rechnen Sie über die Krankenkasse ab?",
  options: [Grundversicherung, nur Zusatz, Selbstzahler, Verordnung nötig],
  placement: prominent, conversion_critical: true }]
· `semi_dynamic_modules: [vacation_notice, availability_status]`

---

## Teil 5 — Testauftrag für die Implementierung (Claude Code)

Zwei **verschiedene** Testarten. Die Grenze dazwischen ist wichtig:

### A) Schema-Vollständigkeit (Konzept-Test — Lücken NICHT selbst flicken)
Für jede vorgesehene Branche: Lässt sie sich vollständig und widerspruchsfrei als
Profil nach diesem Schema ausdrücken?
- Wenn ein Branchen-Merkmal in **keine** Stellschraube passt → **melden, nicht
  erfinden.** Das ist eine Entscheidung für den Menschen (neue Stellschraube?
  Sonderfall? Branche raus aus MVP?).
- Output: Liste der Branchen mit „passt sauber" / „klemmt bei Feld X, weil …".
- Hintergrund: Genau diese Lücken-Suche haben die manuellen Stresstests gemacht
  (Verein → Mehrzweck-Weiche, Treuhänder → Conversion-Klasse, Tätowierer →
  craft_slider, Physio → regulatory_facts). Der Test automatisiert das.

### B) Pfad-Validität (Code-Test — Sackgassen DÜRFEN behoben werden)
Für jede Branche × jede plausible Antwortkombination: Entsteht ein kohärenter,
sackgassenfreier Fragefluss?
- Jede Verzweigung (F1→Ja/Ja-aber/Nein, F1-NEIN Sorte 1/2, F3b, F6-mehrsprachig)
  muss in einem gültigen Zustand enden.
- Keine verwaisten Bausteine, keine widersprüchlichen Kombinationen
  (z.B. `conversion_class: trust` + nur `action`-Conversion-Type).
- Prüfen: schaltet `conversion_class` wirklich das F3/F4-Gewicht? Überspringt ein
  leeres `regulatory_facts` F4-REG? Tritt F2 bei hohem `craft_slider` zurück?
- Sackgassen/Inkonsistenzen hier → **direkt beheben**, das ist Code-Qualität.

### Architektur-Vorgaben
- **Motor und Profile strikt trennen.** Profile als Daten (JSON o.ä.), nicht im Code.
- Erst **Coiffeur** lauffähig machen (durchklickbarer Fragefluss mit echter
  Verzweigung) — **nicht** UI-Politur, **nicht** Website-Generierung. Beweisziel:
  der Motor lebt.
- Danach die 3 weiteren Profile als Daten nachschieben und gegen denselben Motor
  laufen lassen.
- Lokalisierung (DE/FR/IT) im Schema vorsehen, aber im ersten Prototyp DE genügt.

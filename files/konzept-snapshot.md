# Website-Generator für Schweizer Einzelunternehmer & KMU
## Konzept-Snapshot (Stand: Sparring-Session)

---

## 1. Produktkern in einem Satz

Ein geführter Fragebogen, der die Diagnose-Arbeit eines guten Webdesigners im
Erstgespräch automatisiert: Er übersetzt die *Beschreibung eines Geschäfts* in
eine *zweckmässige Website-Struktur* — ohne dass der Nutzer je eine
Design-Entscheidung treffen muss.

**Der Fragebogen ist das Produkt.** Die Website ist der sichtbare Output.

---

## 2. Differenzierung (Burggraben)

| Gegenüber | Unterschied |
|---|---|
| Wix/Squarespace/Jimdo | Nicht Design-Baukasten, sondern Zweck-Diagnose. Design wird nie zur Wahl gestellt. |
| Lovable & KI-Generatoren | Geführte, gezielte Fragen statt offenem Prompt. Kein stundenlanges Design-Rumschrauben möglich (bewusste Leitplanke). |
| Alle | Hybrid KI + Mensch: ein echter UX-Designer gibt frei / springt bei qualitativen Wünschen ein. |

**Der eigentliche Burggraben ist die Verzweigungslogik**, nicht der Output.
Der Output ist kopierbar, sobald man ihn sieht. Die Regel „welche Frage triggert
welche Folgefrage, welche Antwort schliesst welche Struktur aus" ist das
explizit gemachte Experten-Wissen — und unsichtbar im Resultat.

→ Konsequenz: Fragen werden **nie als flache Liste** gedacht, immer als
**Entscheidungs-Graph mit Bedingungen** (inkl. Querverbindungen).

---

## 3. Die drei Komplexitäts-Achsen

Jede mögliche Website lässt sich entlang dreier unabhängiger Achsen verorten.
Sie sind gleichzeitig **Diagnose-Logik** und **Roadmap-Priorisierung**.

1. **Einzweckig ↔ Mehrzweckig**
   Ein dominanter Zweck (Coiffeur) vs. mehrere gleichwertige parallel
   (Verein: aussen akquirieren + innen verwalten).

2. **Statisch ↔ Lebend** *(Spektrum, kein Schalter — siehe Pflege-Stufen)*
   Einmal gebaut vs. laufend redaktionell gepflegt.

3. **Öffentlich ↔ Geschützt**
   Frei zugänglich vs. Login/Rollen/Personendaten (Datenschutz-Klasse).

**MVP-Quadrant = einzweckig · (überwiegend) statisch · öffentlich.**
Das ist der „Coiffeur-Quadrant". Alles, was auf einer Achse ins Komplexe kippt,
ist bewusst Post-MVP — und wird im MVP **sauber abgewiesen** (Vormerk-Funktion
+ Wizard-of-Oz-Kanal), nicht halbherzig gebaut.

---

## 4. Das verallgemeinerte Diagnose-Muster

### Teil A — Universeller Kern (jede MVP-Branche, immer, in dieser Reihenfolge)

| # | Schritt | Funktion |
|---|---|---|
| A1 | **Brancheneinstieg** | Billig einsteigen; Hypothesen-Set + Branchenprofil laden |
| A2 | **Zweck-Bestätigung** | Schwerste Frage in Ja/Nein verwandeln; offengelegter Default; **Nein = eigene Mini-Diagnose** (siehe 4c), nicht Dead-End |
| A3 | **Charakterfrage** | Designwelt wählen ohne Design-Entscheidung; „Was soll der Besucher *spüren*?"; genau 1 Frage |
| A4 | **Identitäts-Fakten** | Harte Fakten mitlaufend sammeln (Name, Ort, Erreichbarkeit, Sprache = CH-Pflichtcheck) |
| A5 | **Conversion-Frage** | „Was soll der Besucher *tun* — und wie?"; nach Verhalten, nicht Feature; Gewicht hängt von Conversion-**Klasse** ab (Aktion vs. Vertrauen, siehe 4d) |
| A6 | **Vertrauens-/Beleg-Frage** | „Womit überzeugen Sie — und passen Sie zu *mir*?"; Beleg **+ Spezialisierung/Passung**; schaltet Galerie/Testimonials/Zertifikate ein; bei Vertrauens-Conversion das Schwergewicht |
| A7 | **Schnitt → Material** | Moduswechsel isolieren; schweres Material gebündelt; immer *liefern / später / macht ihr* |
| A8 | **Review + Annotation** | Kontrolle ohne Selbstbau; Wizard-of-Oz dahinter |

### Teil B — Branchenprofil (die „Konfiguration" des Kerns)

Der Brancheneinstieg lädt ein Profil mit **6 Stellschrauben**. Neue Branche =
neue Profilzeile, **kein neuer Code**.

1. **Default-Zweck** → füllt A2
2. **Conversion-Typ + Klasse** → besetzt A5; **Klasse** (Aktion vs. Vertrauen) steuert das A5/A6-Gewicht
3. **Beleg-Typ** → besetzt A6 (Bilder / Bewertungen / Zertifikate / Erfahrung)
4. **Charakter-Set** → besetzt A3 (welche 3–4 Welten + ihr branchenspezifisches Aussehen)
5. **Baustein-Default-Liste** → Struktur-Rohbau
6. **Typische halb-dynamische Module** → vorgebaute optionale Blöcke (siehe Pflege-Stufe 2)
7. **Regulatorische Pflicht-Fakten** → meist leer; in regulierten Branchen (Gesundheit/
   Recht/Finanz) gefüllt und **conversion-kritisch** (z.B. Physio: Krankenkassen-
   Anerkennung, Verordnung). Sind Transaktionsbedingung, nicht nur Beleg — prominent platziert.

→ **Ein Fragebogen-Motor + N Branchenprofile.** Strukturell identisch für alle
MVP-Branchen; es variiert nur die Füllung der 6 Stellschrauben.

### Teil C — A2-Nein ist eine Mini-Diagnose (kein Dead-End)

A2-Nein bedeutet fast immer: *der Kunde will eine andere Conversion als der
Branchen-Default unterstellt.* Das Nein zerfällt in zwei Sorten, die
unterschiedlich behandelt werden:

- **Sorte 1 — anderer Zweck, aber noch im MVP-Quadranten**
  (z.B. „nur Präsenz/Legitimation, keine Akquise"; „Anfrage statt Erstgespräch").
  → **kein** Türsteher. Führt in eine kurze Zweck-Auswahl, die **A5/A6 neu
  besetzt** und in den Hauptpfad zurückfliesst.

- **Sorte 2 — Geschäft verlässt den Quadranten**
  (Mandantenportal = geschützt; Produktverkauf = anderer Zweck-Typ; mehrzweckig).
  → **echter MVP-Türsteher** → „dafür noch nicht gebaut, vormerken?".

**A2 hat damit drei Ausgänge:**
- *Ja, genau* → Hauptpfad, Default-Conversion
- *Ja, aber mehr* → Hauptpfad + Zusatzmodul-Zweig
- *Nein* → Mini-Diagnose → Sorte 1 (zurück, A5/A6 neu besetzt) · Sorte 2 (Türsteher)

→ Unterscheidung wichtig: A2-Nein ist eine **Weiche** (welcher Baum?), nicht die
A5/A6-**Gewichtung** (Feinmechanik *innerhalb* eines bestätigten Zwecks).

### Teil D — Zwei Conversion-Klassen (steuern das A5/A6-Gewicht)

A5 ist nicht universell gleich schwer. Die **Conversion-Klasse** (in Stellschraube 2)
entscheidet, wo das diagnostische Schwergewicht liegt:

| Klasse | Hürde des Besuchers | Schwergewicht | Beispiel |
|---|---|---|---|
| **Aktions-Conversion** | *Mechanik* — wie löse ich die Handlung aus? | **A5** (Kontakt/Buchung) | Coiffeur (Termin) |
| **Vertrauens-Conversion** | *Passung/Glaubwürdigkeit* — ist der richtig für *mich*? | **A6** (Beleg + Spezialisierung) | Treuhänder (Erstgespräch) |

Bei Vertrauens-Conversion schrumpft A5 zur Nebenfrage (Kontaktmechanik ist
trivial), und A6 wird der diagnostische Kern — inkl. **Spezialisierung/Passung**
als eigenem Baustein (beim Coiffeur unsichtbar, beim Treuhänder conversion-kritisch).

**Reihenfolge im Fragebogen: Vertrauen (A6/F4) VOR Conversion (A5/F3)** — einheitlich
für alle Branchen, da Vertrauen nie schadet. *(entschieden)*

**Die Conversion-Frage skaliert mit der Klasse — sie ändert nicht nur Position,
sondern Inhalt & Tiefe:**

| Klasse | Conversion-Frage | Vertrauens-Frage |
|---|---|---|
| `action` (Coiffeur) | **voll entfaltet** — verzweigt (anrufen / Formular / Buchung → Tool-Frage) | leichter |
| `trust` (Treuhänder, Physio) | **Kurzform** — eine ruhige Frage, 2–3 Optionen, keine Verzweigung; *bleibt sichtbar* | **voll** (inkl. Passung) |
| `mixed` (Tätowierer) | voll | voll — beide schwer |

→ **Wichtig (Konzeptentscheidung):** Bei `trust` wird die Conversion-Frage *schlanker,
aber nicht unsichtbar*. Kein stiller Default — das widerspräche dem Versprechen
„wir stellen die richtigen Fragen". Sie schrumpft auf das, was zählt (Kontaktweg),
statt zu verschwinden oder aufzublähen. Modelliert als **eine** parametrisierbare
Frage, deren Tiefe von `conversion_class` abhängt (nicht zwei Sonderlogiken).
→ *Spätere Ausnahme:* Wenn echte Durchläufe zeigen, dass `trust`-Branchen *immer*
dieselbe Antwort wählen, darf die Kurzform pragmatisch zur Bestätigung kippen
(„Wir richten ein Kontaktformular für Erstgespräche ein — passt das?"). Erst nach
Beobachtung, nicht jetzt.

### Teil E — Vier Meta-Eigenschaften (steuern, wie der Kern sich gewichtet)

Aus vier Stresstests (Coiffeur, Verein, Treuhänder, Tätowierer, Physio) destilliert.
Keine bricht das A1–A8-Gerüst — jede ist ein **Gewicht/Regler im Branchenprofil**,
keine Architektur-Revision.

| # | Meta-Eigenschaft | aus | Wirkung im Kern |
|---|---|---|---|
| 1 | einzweckig ↔ mehrzweckig | Verein | Architektur-Weiche vor A2? (markiert Post-MVP-Grenze) |
| 2 | Aktion ↔ Vertrauen *(Conversion-Klasse)* | Treuhänder | A5/A6-Gewicht; Mischklassen erlaubt (Tattoo) |
| 3 | dienstleistend ↔ gestaltend *(Regler)* | Tätowierer | A3-Gewicht vs. Portfolio; Material (un)verzichtbar |
| 4 | reguliert? *(Pflicht-Fakten)* | Physio | eigene Faktenkategorie, conversion-kritisch platziert |

**Zu #3 (Regler, nicht Schalter):** „Lässt das Werk sprechen" ist branchenübergreifend.
Treuhänder = ganz dienstleistend (A3 trägt voll). Coiffeur = Mitte. Tätowierer =
ganz gestaltend (Portfolio diktiert Anmutung, A3 fast überflüssig, Bildmaterial
unverzichtbar statt „liefern/später/macht ihr"). A3 bekommt also *Gewicht* je
nach Reglerstellung, kein Ja/Nein.

---

## 5. Design-Varianz ohne Design-Entscheidungen

Spannung: Je weniger der Nutzer sich mit Design befasst, desto ähnlicher die
Resultate. Lösung — Varianz aus drei Quellen, *ohne* dass der Nutzer
Design wählt:

- **Quelle 1 — Charakter-Sets:** pro Branche 3–4 Designwelten, eine
  Positionierungs-/Gefühlsfrage entscheidet. Etikett gleich, Ausführung
  branchenspezifisch (entschärft Uniformität).
- **Quelle 2 — Inhalt selbst (Hauptquelle):** echte Fotos, Logo-Farben, eigene
  Texte/Angebote erzeugen die meiste Individualität. → Materialsammlung ist die
  *Differenzierungsmaschine*, nicht nur Pflichtübung.
- **Quelle 3 — Parametrik (später):** kuratierte Variation innerhalb der
  Leitplanken (Spacing, Schriftpaarung, Akzentnuance). System würfelt, Nutzer nicht.

**Reframe:** Es wird keine *Design-Auswahl* gebaut, sondern eine
*Positionierungs-Frage, die Design als Nebenprodukt festlegt.*
Aufwand fällt **einmal pro Branche** an (Senior-Design vorne), nicht pro Kunde.

---

## 6. Pflege — drei Stufen (universeller Bedarf!)

Korrektur einer früheren Annahme: Pflegebedarf ist **nicht** an Komplexität
gekoppelt — er ist universell, nur der *Umfang* variiert. Selbst die einfachste
Site braucht mal eine neue Telefonnummer.

| Stufe | Was | Lösung | MVP? |
|---|---|---|---|
| 1 | **Feste Fakten ändern** (Tel, Preis, Öffnungszeiten) | Generiertes Mini-**Settings-Panel** (10–15 feste Felder, aus Diagnose abgeleitet) | ✅ Ja |
| 2 | **Vorgeformte Blöcke ein/aus + befüllen** (Aktion, News, „Wir stellen ein", Feiertagszeiten) | Vorgebaute optionale Module mit an/aus + Zeitraum | ✅ Teilweise (billig, häufig) |
| 3 | **Beliebige Seiten/Struktur anlegen** | Echtes CMS → lebender Quadrant | ❌ Post-MVP; im MVP via Wizard-of-Oz abfangen |

**Leitprinzip: „Same engine, bespoke surface."**
Die Editier-Oberfläche ist Teil der **Diagnose**, nicht des CMS. Der Nutzer sieht
nie Content-Types/Felder, sondern „Deine Preisliste", „Ihre Telefonnummer" —
exakt die Felder, die sein Fragebogen erzeugt hat.

- Engine-Wahl (Strapi vs. Eigenbau) = **niedriges Risiko, später entscheidbar**.
  Für 12 feste MVP-Felder ist Strapi überdimensioniert; relevant erst im
  lebenden Quadranten.
- Editier-**UX** = **Kernkompetenz, nicht an ein CMS delegierbar**.

---

## 7. Review-Weiche & Wizard-of-Oz

Annotationen im Review werden **nach Art klassifiziert** (nicht nach Anzahl):

| Klasse | Beispiel | Wer löst es | Pricing |
|---|---|---|---|
| **Parametrisch** | Akzentfarbe, Bild tauschen, Sektion verschieben | System automatisch, beliebig oft | Basis / Self-Service |
| **Qualitativ** | „wirkt zu billig", „zu kühl" | **Mensch (du)** — echte Designkompetenz | Premium |
| **Strukturell/Scope** | „doch noch ein Shop", „mehrsprachig" | Mensch / Vertriebssignal; sprengt MVP | Premium / Vormerk |

- Dieselbe Weiche, die Wizard-of-Oz steuert, ist der **Pricing-Trennstrich**.
- Jede manuell korrigierte Klassifikation = **Trainingsdaten** → Weiche wird
  mit der Zeit besser.
- Erzählung bewusst **positiv** framen: „Jede Website wird von einem echten
  UX-Designer freigegeben" (Qualitätsgarantie), nicht „Mensch repariert
  KI-Fehler" (Schadensbegrenzung).

---

## 7b. Nach dem Review: Generierung, Lead-Sorten, Pricing, Hosting

Der Fragebogen endet mit einem Strukturvorschlag. Was danach passiert, entscheidet
sich an einer Frage: **Ist dieser Fall automatisierbar — und wenn nicht, warum?**
Grundhaltung: Der Fragebogen *weiss schon am Ende*, in welche Sorte ein Fall fällt
(die Komplexitätsachsen kodieren es). Kein Scheitern-dann-Lead, sondern Vorab-Weiche.

### Die drei Lead-/Reibungs-Sorten

| Sorte | Auslöser | Reaktion | Ist es ein Lead? |
|---|---|---|---|
| **A — Out of Scope** | Komplexität sprengt MVP-Quadrant (mehrzweckig / lebend+CMS / geschützt) | bestehender F1-NEIN-**Gatekeeper**: „bauen wir, noch nicht" | **Ja**, echter Lead |
| **B — Material fehlt** | Fall *wäre* automatisierbar, aber Rohmaterial fehlt/unbrauchbar | *Generieren-statt-Liefern*-Gabel: trotzdem bauen mit generiertem Content → **Upsell** (Content-Service). Nur wenn *unverzichtbares* Kernmaterial fehlt (Tattoo-Portfolio) → Lead | meist **nein** (Upsell) |
| **C — Qualitäts-/Vertrauensschwelle** | technisch machbar, aber riskant: regulierte Branche (heikle Pflicht-Fakten) oder kein erprobtes Profil (Freitext-Branche) | **Pflicht-Review** vor Live-Gang | **nein**, menschlicher Check im Premium-Pfad |

**Konsequenz:** Nur Sorte A ist ein echter „geht nicht automatisch"-Lead. B ist meist
Upsell, C ist abgesicherter Premium-Pfad. Die „nicht automatisierbaren" Fälle sind
*seltener* als zunächst gedacht — die meiste Reibung ist Upsell-Gelegenheit.

### Sorte C im Detail — Human-in-the-loop ist Pflicht

Bei regulierten Branchen geht **nie** etwas ungeprüft live. Mechanik:
- **Generierte Checkliste** (kein generisches Formular): aus den Profil-Antworten
  abgeleitet, speziell aus `regulatory_facts` mit `conversion_critical: true`.
  Beispiel Physio: „Stimmt die angezeigte Abrechnungsart? Zulassungsnummer korrekt?"
  → kurz, relevant, wird gelesen. Nebenprodukt der Diagnose, kein neues System.
- **Verantwortung vs. Prüfung getrennt:** Kunde trägt die *inhaltliche* Verantwortung
  (nur er kann die Fragen beantworten), Ersteller garantiert *handwerkliche* Qualität.
  Du garantierst „korrekt gebaut", nicht „inhaltlich wahr".
- **Dokumentierte Kundenfreigabe:** aktives, protokolliertes Abnicken der Checkliste
  vor Live-Gang — nicht nur angezeigte Liste. Das ist die juristisch relevante Geste.
- ⚠️ **Vor Launch anwaltlich klären** (AGB/Haftung, speziell regulierte Branchen).

### Pricing (grobes Mapping, Detail später)

- **Basic:** sauberer automatischer Fall. Vollautomatische Website, parametrische
  Self-Service-Anpassungen (s. Abschnitt 7).
- **Premium:** menschliches Sparring/Politur (qualitative + strukturelle
  Annotationen) **plus** abgesicherte Sorte-C-Fälle. Positiv geframt als
  „Designer-Freigabe/Qualitätsgarantie", **nicht** als „Auto gescheitert".
- **Support** gehört ins Pricing (Stufe noch offen).
- Leitlinie: Premium ist *zusätzlicher Wert*, in den man freiwillig geht — nicht der
  Fehlerfall, in den man fällt.

### Hosting

- **Erstellungsphase** auf eigenem Server/Provider.
- **Default-Gedanke: Hosting selbst anbieten**, nicht nur Übergabe. Die Übergabe auf
  Kundenserver (Domains, DNS, Mail, N Schweizer Provider) ist der unterschätzte
  Support-Albtraum. Selbst-Hosting erspart den Schmerz *und* bringt wiederkehrenden
  Umsatz → als Default denken, Übergabe als Ausnahme/Option.

---

## 7c. Generierung: Wow-Schichten & Held-Logik

### Generierungs-Ansatz: Variante 2 mit Leitplanken

Drei mögliche Welten: (1) Komposition aus fertigen Bausteinen, (2) freie
Code-Generierung, (3) Template + Theming. Gewählt: **Variante 2, aber innerhalb
eines Design-Systems.** Begründung: (1) und (3) sehen trotz unterschiedlicher
Befüllung immer gleich aus → kein Wow. Freie Generierung (2) liefert Varianz, ist
aber unberechenbar (= Lovable-Falle).

**Lösung — kuratierte Freiheit:** LLM generiert *innerhalb* fester Design-Tokens
(Typo-Skala, Spacing, Farb-Logik, Grid) und erlaubter Sektions-*Muster*, aber mit
freier Komposition/Anordnung/Proportion darin. Analogie: nicht Bausteine
zusammenstecken, sondern frei schreiben — in einer definierten Sprache mit
Grammatik. Überrascht (Wow), ohne zu entgleisen (Garantie).
→ Die Leitplanken zu bauen ist **anspruchsvolle Design-System-Arbeit** (Senior,
einmal pro System) und **Voraussetzung**, nicht Beiwerk. Ohne sie = Lovable. Das
ist der Burggraben — entspricht „Quelle 3 / kuratierte Parametrik" aus Abschnitt 5.

### Die drei Wow-Schichten (Budget 70/30 zugunsten Passung)

| Schicht | Quelle | Liefert | Risiko |
|---|---|---|---|
| **Basis** | Design-System/Leitplanken | „nie hässlich, immer professionell" | gering (kontrolliert) |
| **Gestalterisches Wow** (≈30%) | kuratierte Freiheit (Q3) + echtes Material (Q2: Fotos, Logo-Farben) | „sieht aus wie teure Agentur" | schwankend, kopierbar, geschmacksabhängig |
| **Passungs-Wow** (≈70%) | **die Diagnose selbst**, prominent inszeniert | „die haben *mein* Geschäft verstanden" | gering — niemand widerspricht eigener Passung |

**Kernsatz:** Passungs-Wow ist seltener, billiger und unkopierbar — und großteils
**schon gebaut** (steckt in der Diagnose). Die Engine muss es nur *inszenieren*,
nicht erzeugen. Ästhetik muss nur zuverlässig die Schwelle „professionell"
überspringen (das leisten die Leitplanken); den emotionalen Treffer landet die Passung.

### Held-Logik (was auf der Seite zum Helden wird)

**Definition:** Der Held ist **nicht** „das Wichtigste am Geschäft", sondern
**das, was die Conversion-Hürde dieser Branche knackt** — die Info, deren Fehlen
den Besucher zögern lässt. 1–2 Helden pro Branche.

**Ableitungsregel (statt manuell pro Branche):**
- `conversion_class: trust` → Held 1 = stärkster `proof_type`, Held 2 = **Spezialisierung/Passung**
  (Vertrauensbranchen leben davon, dass der Kunde sich *gemeint* fühlt).
- `conversion_class: action` → Held 1 = Können/Beleg zeigen, Held 2 = Conversion-Weg.
- `conversion_class: mixed` → beide Achsen, je nach dominantem proof_type.

**Erprobte Helden:**
| Branche | Klasse | Held 1 | Held 2 |
|---|---|---|---|
| Coiffeur | action | Arbeit zeigen (Galerie/Stil) | reibungsloser Termin-Weg |
| Treuhänder | trust | Qualifikation/Zulassung | Spezialisierung/Passung |
| Tätowierer | mixed | Portfolio (dominant) | Stil-Passung |
| Physio | trust+reg. | Krankenkassen-Abrechnung | Spezialisierung |
| Sanitär | (urgency) | Leistungsumfang + **Erreichbarkeit/Notdienst** | Einzugsgebiet |
| Fensterbauer | action/beleg | Referenzen/Arbeiten (Bilder) | Leistungsspektrum |
| Maler | action/beleg | Portfolio/Referenzobjekte | Leistungsart (innen/außen) |

### Neuer Fund: Dringlichkeit/Verfügbarkeit (fehlende Dimension)

Sanitär deckt eine Lücke auf: **Notdienst/Dringlichkeit** passt in keine
bestehende Stellschraube. Vorschlag: Flag `urgency_driven` (oder Modul
„Notfall/Soforthilfe"). Wenn gesetzt → **Erreichbarkeit wird Held UND wandert in
den Hero** (jede Sekunde Scrollen verliert den Panik-Kunden).

**Platzierung des Helden hängt an Dringlichkeit, nicht fix above-the-fold:**
- dringlich (Sanitär-Notfall) → Held MUSS in den Hero.
- nicht dringlich (Maler, Physio-Abrechnung) → Held garantiert prominent, aber
  Höhe flexibel (Kunde vergleicht in Ruhe, darf zweite Sektion sein).

→ Held großteils **aus Profil ableitbar** (`conversion_class` + stärkster
`proof_type` + Dringlichkeits-Flag) statt manuell — entspricht „ein Motor, N Profile".
„Handwerker" ist *keine* einheitliche Klasse: Sanitär = verfügbarkeitsgetrieben,
Fensterbauer/Maler = beleg-/passungsgetrieben.

---

## 7d. Constraint-/Hierarchie-Schicht (Schritt 1+2: Invarianten & Held-Durchsetzung)

**Ordnungsprinzip:** Jede Regel muss *maschinell prüfbar* sein — eine unprüfbare
Regel ist ein Wunsch, keine Leitplanke. Erarbeitungs-Reihenfolge der Gesamtschicht:
(1) Invarianten → (2) Held-Durchsetzung → (3) Struktur-Grammatik → (4) Freiheitsgrade
explizit → (5) Tokens → (6) Validator. Bewusst invarianten-first: Wer mit Tokens
beginnt, baut Vokabeln ohne Satzbau.

### Schritt 1 — Invarianten (nie verletzbar)

| # | Regel | Prüfbar via |
|---|---|---|
| I1 | Impressum + Datenschutz vorhanden & erreichbar | Link-Existenz |
| I2 | Jeder Profil-Held als eigenständiges Element (nicht Nebensatz) | Element-Zuordnung |
| I3 | `urgency_driven` → Erreichbarkeit im Hero-Viewport, klickbar (tel:) | Position + Link-Typ |
| I4 | Conversion-Element von überall in ≤ 1 Scroll+Klick (sticky/wiederholt) | Element-Abstände |
| I5 | **Null-Freiheits-Zone:** `regulatory_facts` (conversion_critical) erscheinen **wörtlich**, Engine darf nicht umformulieren | String-Match |
| I6 | Kontrast ≥ WCAG AA, Fliesstext ≥ 16px, Zeilenlänge 45–90 Zeichen | berechenbar |
| I7 | **Token-Treue:** nur Werte der gewählten Charakter-Welt; **2 gestalterische Schriftfamilien (Display+Body) + optional 1 funktionale Utility-Schrift nur für Fakten** (Preise, Regulatorik — nie Fliesstext/Headlines); Spacing aus Skala | Ist ⊆ Token-Menge |
| I8 | Texte in Profil-Sprache(n), keine Platzhalter-Reste | Pattern-Check |
| I9 | **Responsive-Boden:** kein horizontaler Overflow ab 320px Breite; mehrspaltige Grids kollabieren mobil zu einer Spalte (Ausnahme: kleine Galerie-Kacheln dürfen 2-spaltig bleiben, wenn sie sauber passen); Überlappungs-/Versatz-Effekte (FR1) deaktivieren sich mobil | Viewport-Screenshot-Prüfung (320/375/768px), analog H1 — erst nach Rendering hart prüfbar, keine HTML-Analyse |

### Schritt 2 — Held-Durchsetzung (Hierarchie-Mechanik)

| # | Regel | Prüfbar |
|---|---|---|
| H1 | **Visuelle Masse:** Held dominiert seine Sektion flächenmässig, nichts Dekoratives grösser | Flächenvergleich |
| H2 | **Positions-Rang:** Held 1 vor allen Nicht-Held-Sektionen (ausser Hero); Held 2 obere Seitenhälfte; Ausnahme I3 zieht Held in Hero | Sektions-Reihenfolge |
| H3 | **Konkurrenz-Verbot:** ein Held pro Viewport — kein zweites Element gleichen Gewichts, kein zweiter CTA | Gewichts-Heuristik |
| H4 | **Klassen-Tonalität:** trust-Helden ruhig (Fakten, keine Superlative); action-Helden handlungsnah (Held + CTA im selben Viewport) | teilw. (CTA-Nähe hart, Tonalität weich) |

### Zwei Prinzipien daraus

1. **Harte Constraints vs. weiche Direktiven:** Nicht alles ist maschinell prüfbar
   (z.B. Tonalität). Harte Regeln erzwingt der Validator; weiche laufen als
   Prompt-Direktiven + menschliches Review. Die Grenze *bewusst* ziehen — damit
   klar ist, was garantiert vs. kuratiert wird.
2. **Null-Freiheits-Zonen (Verallgemeinerung von I5):** Kreative Freiheit der
   Engine ist **umgekehrt proportional zur Haftungsrelevanz** des Inhalts.
   Stimmungstexte: frei. Preise, Öffnungszeiten, Regulatorik: wörtlich.

**Physio-Referenzfall:** Abrechnungs-Block als eigene Sektion (I2), darf zweite
Sektion sein, nie unter „Über mich"/Galerie (H2), sachlich-klar statt Banner (H4),
Wortlaut exakt wie vom Kunden bestätigt (I5).

### Schritt 3 — Struktur-Grammatik (erlaubte Kompositionen)

| # | Regel | Prüfbar via |
|---|---|---|
| G1 | **Feste Ränder, freie Mitte:** Seite beginnt mit Hero, endet mit Kontakt/Conversion + Footer (legal); dazwischen Reihenfolge frei (innerhalb H2) | erste/letzte Sektion |
| G2 | **Seitenlänge folgt Klasse:** urgency → max. 4–5 Sektionen; action → 5–7; trust → 6–9 (Vergleichs-Kunde liest) | Sektions-Zählung |
| G3 | **Rhythmus:** keine zwei gleichartigen Sektionstypen hintereinander; visuell-dicht und text-dicht wechseln ab | Typ-Sequenz |
| G4 | **Ein-Zweck-Sektionen:** jede Sektion genau eine Aufgabe, keine Misch-Sektionen | Inhaltstyp-Zuordnung |
| G5 | **Galerie nach craft_slider:** hoch → Portfolio direkt nach Hero erwünscht; niedrig → keine eigenständige Galerie vor den Helden | Position × Slider |

### Schritt 4 — Freiheitsgrade (was die Engine variieren DARF)

Quelle: *„Was würde ein mutiger Designer variieren, was ein Template nie täte?"*

| # | Freiheit | Grenze |
|---|---|---|
| FR1 | **Layout-Asymmetrie:** 60/40-Splits, versetzte Raster, angeschnittene Elemente | I6 Lesbarkeit, H1 Held-Masse |
| FR2 | **Skalensprünge:** dramatische Typo-Sprünge (Display neben Klein) statt braver Stufen | nur Skalen-Werte (I7) |
| FR3 | **Sektions-Übergänge:** Hintergrundwechsel, Farbflächen, Bildanschnitte | Farben aus Charakter-Welt |
| FR4 | **Held-Inszenierungsform:** grosse Zahl, Zitat-Karte, Vollbild-Statement — H1 verlangt Dominanz, nicht eine Form | H1–H4 |
| FR5 | **Bildbehandlung:** Zuschnitt, Duotone in Weltfarben, Freisteller, Überlappung | Regulatorik-/Personenbilder unverfremdet |
| FR6 | **Micro-Varianz:** Radien, Linienstärken, Akzent-Nuancen im Welt-Korridor (= Quelle-3-Parametrik) | Korridor |

**Meta-Regel (wichtigster Satz):** Die Freiheitsliste wird der Engine **aktiv als
Auftrag** mitgegeben („nutze mind. zwei dieser Freiheiten pro Seite deutlich"),
nicht nur als Erlaubnis. Bloss erlaubte Freiheit wird aus Sicherheit nicht
genutzt → uniforme Mitte → kein Wow. **Mut muss beauftragt werden.**

**Erkenntnisse aus Generierungs-Versuch 1 (Physio, bestanden):** Passungs-Wow
zündete am härtesten Fall (trockene Branche, Regulatorik-Held) — 70/30-Wette
bestätigt. Zwei Regel-Lerneffekte: (a) I7 kalibriert auf 2+1-Schriftenregel — die
funktionale Mono machte die Fakten-Karte semantisch stark („Schrift sagt: das ist
Fakt, nicht Marketing"); (b) **H1 ist erst nach Rendering hart prüfbar** — der
Validator braucht Layout-Rendering, nicht nur HTML-Analyse. Gestalterisches Wow
hängt erwartungsgemäss an Quelle 2 (echtes Material) + Token-Politur.

**Erkenntnis aus Responsive-Durchgang (Ernährungsberatung, alle Welten/Skins):**
I9 (Responsive-Boden) ist wie H1 **erst nach Rendering hart prüfbar** — ein Grid
sieht in der HTML-Analyse korrekt aus, läuft aber erst bei 320px sichtbar aus dem
Viewport. Für den Validator: I9 braucht dieselbe Viewport-Screenshot-Prüfung wie
H1 (320/375/768px je Welt × Skin), keine statische Regel-Prüfung.

**Erkenntnisse aus Generierungs-Versuch 2 (Coiffeur A/B, Varianz-Test NICHT
bestanden):** Trotz anderer Tokens erinnerte der Coiffeur an den Physio — die
Ähnlichkeit kommt aus der **Komposition** (gleiches Skelett: Hero-Anatomie,
Sektions-Aufbau, 2:3-Grids), nicht aus den Tokens. Der Generator entwickelt eine
eigene Handschrift = uniforme Mitte eine Ebene höher. Zwei Korrekturen:
(a) **Charakter-Welten definieren Tokens + Formsprache/Kompositions-Direktiven**
(z.B. warm-nahbar: organische Formen, Überlappungen, geschwungene Übergänge;
modern-transparent: strenges Raster, harte Kanten, Weissraum). `design_tokens`
im character_set bekommt diese Ebene dazu. (b) **Meta-Regel präzisiert:** nicht
„nutze zwei beliebige Freiheiten", sondern „nutze die Freiheiten, die deine Welt
vorschreibt, auf die Art, die sie vorschreibt" — beauftragter Mut *mit Richtung*.

**Stand der Schicht:** Schritte 1–4 konzeptionell komplett (nie / immer / Satzbau /
beauftragter Mut). Offen: Schritt 5 **Tokens** (Figma-/Claude-Design-Arbeit pro
Charakter-Welt, Ziel „Tokens raus, nicht Frames") + Schritt 6 **Validator** (Code,
mit Claude Code). Natürlicher nächster Meilenstein: **erster Generierungs-Versuch**
(Physio oder Coiffeur) gegen diese Regeln, auch mit provisorischen Tokens — erst
am echten Output zeigt sich, ob die Freiheitsgrade Wow erzeugen oder die
Grammatik zu eng ist.

### Mengenadaptive Komposition

**Kernproblem:** Dieselbe Sektion (Zitate, Galerie, Leistungen, Fakten) wird mit
1 oder 8 Elementen befüllt — ein statisches Layout funktioniert an beiden Extremen
selten. Ein einzelnes Zitat sieht in einer 3-Karten-Reihe verloren aus; 8 Zitate
sprengen dasselbe Layout.

**Lösung:** Jede Welt definiert pro mengenvariablem Sektionstyp eine geordnete Liste
von `quantity_rules`. Jede Regel beschreibt einen Mengenbereich (`min`/`max`) und
die zugehörige Layout-Variante (`layout`). Die Generierungs-Engine wählt automatisch
die passende Variante — nie eine globale Standardlösung.

**Obergrenzen sind Regeln, keine Fehler:** Wenn der Inhalt das Maximum einer Variante
überschreitet, greift `overflow: "discard"` — das System zeigt die Top-N, Rest fällt
weg. Das ist eine Gestaltungsentscheidung, keine Fehlerbehandlung. Beispiel Zitate:
4+ Einträge → `top3_select` (3 beste), Rest stumm. Der Nutzer kann priorisieren;
der Renderer zeigt nie mehr als das weltdefinierte Maximum.

**Layout-Varianten sind welt-spezifisch:** `card_row` sieht in `warm-nahbar`
(gerundete Karten, warme Farben) anders aus als in `trendig-mutig` (scharfe Kanten,
grosses Zitat-Border). Der Identifier ist welt-übergreifend stabil; das konkrete
Rendering ist welt-spezifisch. Dasselbe Prinzip wie Token-Treue: der Name ist der
Vertrag, die Ausprägung ist die Welt.

**Mengenvariable Sektionstypen (MVP):**

| Typ | Felder |
|---|---|
| `quotes` | Kundenstimmen / Testimonials |
| `gallery_items` | Portfolio-/Galerie-Fotos |
| `services` | Leistungen / Angebote |
| `facts` | Regulatorische Fakten, Qualifikationen |

**Befüllungs-Stufen für die Spielwiese:**

| Stufe | Quotes | Gallery | Services | Facts |
|---|---|---|---|---|
| `minimal` | 1 | 2 | 2 | 1 |
| `typical` | 2 | 5 | 4 | 2 |
| `maximal` | 6 | 9 | 8 | 4 |

Die Spielwiese schaltet zwischen Stufen um — so wird sichtbar, ob eine Welt bei
beiden Extremen hält oder bricht.

---

## 8. Durchgängige Prinzipien (Leitplanken)

- **Defaults werden immer offengelegt, nie versteckt** („Die meisten Coiffeure
  wollen X — stimmt das?"). Transparenz = Vertrauenssignal = Produktmarketing.
- **Nach Verhalten fragen, nie nach Features** („Wie sollen Kunden einen Termin
  bekommen?", nicht „Wollen Sie ein Buchungs-Widget?").
- **Design nie zur Wahl stellen** — nur Anwesenheit von Bausteinen, nie ihr Aussehen.
- **Diagnose und Materialsammlung sauber trennen** (Denken vs. Zuliefern = zwei
  mentale Modi).
- **„Macht ihr das" ist immer eine gleichwertige Option** (Brücke zur späteren
  Content-Strategie).
- **CH-Spezifika eingebaut:** Impressum + Datenschutz automatisch;
  Mehrsprachigkeit DE/FR/IT/EN als regionaler Check.
- **Jede Frage hat eine Doppelwirkung:** sie *sammelt Inhalt* und/oder *trifft eine
  Struktur-/Platzierungs-Entscheidung*. Reiner Inhalt (Telefonnummer) und reine
  Diagnose (Conversion-Klasse) sind die Pole; viele Fragen liegen dazwischen.
  Regulatorische Fragen liegen auf **beidem**: Antwort = Inhalt, *aber* die Frage
  entscheidet auch Prominenz/Platzierung — und ihr blosses Gestelltwerden ist der
  Wert (der Nutzer hätte selbst nicht daran gedacht). → Fragen nie als blosse
  Inhalts-Container behandeln.

---

## 9. Langfrist-Vision (nach Beweis des Kerns)

**Content-Erstellung & -Strategie** als Erweiterung. Es ist dieselbe
Differenzierung — „die richtigen Fragen stellen, damit etwas seinen Zweck
erfüllt" — angewendet auf *Inhalte* statt *Struktur*. Adressiert die Schwachstelle
jedes Generators: die schönste Struktur ist wertlos, wenn „Herzlich willkommen
auf unserer Website" in den Feldern steht. Der Website-Generator ist der
Einstieg, der Kunden + Daten bringt; Content könnte das eigentliche Langfrist-
Produkt sein.

---

## 10. Wichtigste offene Punkte

- [ ] **Branchenprofile abfüllen:** die 7 Stellschrauben pro MVP-Branche
      (Coiffeur, Treuhänder, Tätowierer, Physio erprobt → als erste Profile).
- [ ] **Reihenfolge Vertrauen vor Conversion** im Fragebogen: bei
      Vertrauensbranchen kommt F4 (Vertrauen) **vor** F3 (Conversion). Einheitlich
      für alle Branchen, da Vertrauen nie schadet. *(entschieden)*
- [ ] **Early E-Mail-Capture = Hypothese, nicht gesetzt.** Funnel-Logik will E-Mail
      früh (abgesprungene Leads zurückholbar); Tonalität eines Vertrauensprodukts
      will sie *nicht* zu früh (wirkt pushy). Vorerst: Kontaktdaten in F5, kein
      Early-Capture. Im Prototyping testen, ob ein „Fortschritt sichern"-Frame nach
      F2 ohne Vertrauensverlust funktioniert.
- [ ] **Hosting / Domain:** Grobrichtung geklärt (Selbst-Hosting als Default, s. 7b).
      Detail: Provider-Wahl, Übergabe-Prozess als Option, Domain-Handling offen.
- [ ] **Engine-Entscheidung** Stufe-2/3-Pflege (Strapi vs. Eigenbau) — bewusst
      vertagt bis lebender Quadrant.
- [ ] **Pricing-Modell** Grobrichtung geklärt (Basic auto / Premium human+Sorte-C,
      s. 7b). Detail: Preispunkte, Support-Stufen, Hosting-/Content-Module, Wartungs-Abo.
- [ ] **Generierungs-Engine:** vom Strukturvorschlag zur echten Website — der grosse
      ungebaute Brocken. Ansatz geklärt (Variante 2 mit Leitplanken, s. 7c), aber
      Design-System/Leitplanken noch zu bauen (Senior-Arbeit, Voraussetzung).
- [ ] **Neue Profil-Dimension „Dringlichkeit/Verfügbarkeit"** (`urgency_driven`):
      von Sanitär aufgedeckt, noch nicht im Schema. Mit Claude Code einpflegen,
      sobald bestätigt. Steuert Held-Platzierung (Hero bei Dringlichkeit).
- [ ] **Erst-Erleben / Usability-Tests:** möglich erst, wenn eine generierte Website
      als Resultat vorliegt (nicht nur der Fragefluss).

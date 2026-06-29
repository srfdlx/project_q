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
- [ ] **Hosting / Domain:** noch nicht entschieden.
- [ ] **Engine-Entscheidung** Stufe-2/3-Pflege (Strapi vs. Eigenbau) — bewusst
      vertagt bis lebender Quadrant.
- [ ] **Pricing-Modell** ausarbeiten (Basis/Premium entlang der Review-Weiche;
      evtl. Wartungs-Abo für Pflege).

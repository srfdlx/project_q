# project_q

Geführter Diagnose-Fragebogen für Schweizer Einzelunternehmer → ermittelt eine massgeschneiderte Website-Struktur.

## Architektur-Prinzip (nie verletzen)

**Motor / Profil-Trennung:** `src/engine/interpreter.ts` enthält null branchenspezifische Logik (`if branch === 'coiffeur'` ist verboten). Der Motor dispatcht nur auf `node.type`. Alle Branchenentscheide stecken in den Profil-JSON-Dateien.

## Verzeichnisse

| Pfad | Inhalt |
|---|---|
| `src/engine/interpreter.ts` | Generischer Graph-Walker |
| `src/schema/profile.ts` | Zod-Schema für Branchenprofile |
| `src/schema/flow.ts` | Zod-Schema für den Flow-Graph |
| `src/flow/flow-graph.json` | Frage-Graph F0–F8 (Motor-Daten) |
| `src/profiles/*.json` | Branchenprofile (coiffeur, treuhaender, tatowierer, physiotherapie) |
| `worlds/*.json` | Globale Charakter-Welten mit design_tokens + form_language + quantity_rules |
| `ui/app.ts` | Reiner Renderer — keine Verzweigungslogik, nur dispatch auf node.type |
| `worlds-playground.html` | Design-System-Labor: 4 Welten × 2 Skins × 3 Füllstufen |
| `diagnose-prototyp.html` | Eigenständiger Demo-Prototyp (nicht integrieren) |
| `tests/` | vitest: schema-completeness (A) + path-validity (B) + ui-smoke |

## Server

- **Playground:** `http://localhost:8766/worlds-playground.html` (launch: `worlds-playground`)
- **Fragebogen-UI:** `http://localhost:8765/index.html` (launch: `project_q-ui`)

## Tests

```bash
npx vitest run   # alle 22 Tests müssen grün sein
```

## Bundle bauen (nach UI-Änderungen)

```bash
npx esbuild ui/app.ts --bundle --format=esm --outfile=ui/app.bundle.js
```

## Schlüsselkonzepte

- `offered_worlds` im Profil: geordnete Liste globaler Welten, Index 0 = Default
- `urgency_driven`: Flag für dringlichkeitsgetriebene Branchen (Held → Hero)
- `quantity_rules` in Welt-JSONs: je Sektionstyp Bereiche + Layout-Varianten
- Befüllungsstufen: minimal (1,2,2,1) / typisch (2,5,4,2) / maximal (6,9,8,4)

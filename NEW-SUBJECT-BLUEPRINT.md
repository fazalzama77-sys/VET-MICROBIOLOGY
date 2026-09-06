# NEW SUBJECT STUDIO — BUILD BLUEPRINT (give this whole file to the AI)

**What this file is:** the complete construction brief for building a new IVRI subject
study site. It is a clone of the proven **Veterinary Pathology Studio** architecture. An
AI reading this file must be able to generate the ENTIRE working app skeleton — shell,
theme, engines, routing, data scaffolds — with **zero content written**, so the student
only has to fill the content files afterwards.

> **AI: read this whole file before writing a single line.** Then do exactly what
> "YOUR JOB" says. Do not invent features, do not invent colours, do not ask what the
> project is.

---

## 0. FILL THIS IN FIRST (the only thing that changes per subject)

Copy this block, fill it, and put it at the top of your request to the AI.

```yaml
SUBJECT_NAME:      "Veterinary Biochemistry"        # full display name
SHORT_NAME:        "Biochemistry"                   # used in nav/breadcrumbs
BRAND_MARK:        "VB"                             # 2 letters for the logo square
STORE_PREFIX:      "vbioc-"                         # localStorage prefix, MUST be unique
CACHE_PREFIX:      "vbioc"                          # service-worker cache id -> "vbioc-v1"
FOLDER:            "D:/BIOCHEMISTRY APPLICATION/"   # working folder
GITHUB_REPO:       "https://github.com/fazalzama77-sys/BIOCHEMISTRY"
YEAR:              "B.V.Sc & A.H. — First Year"
CREDITS:           "3 + 1 = 4"
THEORY_UNITS:      5          # how many theory units in the VCI syllabus
PRACTICAL_UNITS:   5
PAPERS:            # exam structure — drives the quiz paper modes
  - { id: "paper-1", name: "Paper I",  units: [1, 2, 3], theoryMarks: 100, practicalMarks: 60, weightage: 20 }
  - { id: "paper-2", name: "Paper II", units: [4, 5],    theoryMarks: 100, practicalMarks: 60, weightage: 20 }
SECTION_ACCENTS:   # DO NOT change the hex values — only reassign which section uses which
  theory: blue     practical: teal     quiz: amber     why: purple     dashboard: blue
```

### Planned sister sites (all share one theme)

Anatomy (live) · Pathology (live) · **Veterinary Biochemistry** · **Veterinary
Microbiology** · **Animal Nutrition** · **Animal Genetics & Breeding**

Each gets its own folder, its own repo, its own `STORE_PREFIX`. **Everything else is
identical.**

---

## 1. WHO I AM (unchanged for every subject)

- **Name:** Fazal Zama — B.V.Sc & A.H. UG student, IVRI Bareilly (Roll No. B0-350-2025)
- **NOT a coder.** Explain in plain English, with concrete file paths and simple steps.
- **Tools:** Windows PC, GitHub Desktop, File Explorer. **I do not use a terminal.**
  Give me GUI steps or one-click `.bat` files.
- Credit line used in the About modal: `Mr. Fazal Zama · Developer · B.V.Sc & A.H. UG ·
  Roll No. B0-350-2025 · vet.fazalzama@gmail.com`

---

## 2. YOUR JOB (what to generate)

Build the app **structure only**, at `FOLDER`, exactly as specified in sections 3–9.

**DO generate, fully working:**

- `index.html` shell with sidebar, topbar, bottom nav, search palette, About modal,
  onboarding modal, install banner, toast and offline pill — all wired up
- All 6 CSS files, with `tokens.css` **copied verbatim** from the Pathology project
- All 8 JS engine files, fully functional (router, store, quiz, dashboard, glossary,
  search, deep-guide, events)
- `manifest.json`, `service-worker.js` (with the correct `CACHE_PREFIX`)
- **Empty but syntactically valid** data files for every unit, with the syllabus index
  filled from the official VCI syllabus and one commented template block per section
- The 4 `.bat` helper scripts and the `repo/` mirror folder
- `README.md` (non-coder content guide), `REPO.md` (GitHub guide) and
  `CLAUDE-CONTEXT.md` (the project's own living context file, in this same style)

**DO NOT generate:** lesson text, key points, tables, quiz questions, Q&A answers or WHY
entries. I write those. Ship every content field as `""` or `[]`.

**Definition of done:** I open `index.html`, every route renders with **zero console
errors**, every section shows an honest "no content yet" empty state, the quiz reports
0 questions (not a fake number) and the dashboard shows 0% — nothing lies about content
that does not exist.

---

## 3. FILE STRUCTURE (create exactly this)

```
FOLDER/
├── index.html                 Single-page app shell. All sections live here.
├── manifest.json              PWA manifest
├── service-worker.js          Offline cache — BUMP CACHE_VERSION EVERY RELEASE
├── README.md                  Non-coder guide to adding content
├── REPO.md                    Student repository & GitHub guide
├── CLAUDE-CONTEXT.md          The project's living context file (AI reads this first)
├── 1-CLICK-PUSH-TO-GITHUB.bat 🌟 sync -> stage -> commit -> push, in one double-click
├── SYNC-TO-REPO.bat           mirrors all files into repo/ (offline only)
│
├── repo/                      📦 PRISTINE MIRROR for drag-and-drop upload / USB sharing
│   └── (exact copy of assets/ data/ images/ js/ tools/ + all root files)
│
├── data/                      ← ALL CONTENT LIVES HERE
│   ├── data-syllabus.JS         Master index: units, topic titles, exam papers
│   ├── data-theory-unit1.JS     …one file per theory unit, up to THEORY_UNITS
│   ├── data-theory-unitN.JS
│   ├── data-practical.JS        All practical units in one file
│   ├── data-why.JS              Mechanism-first "WHY" entries
│   ├── data-qa.JS               Written-exam question bank
│   ├── data-quiz.JS             MCQ / True-False / Fill-blank bank
│   └── events-data.js           Scenario challenge cards
│
├── js/
│   ├── store.js               localStorage layer — ALL keys prefixed STORE_PREFIX
│   ├── app.js                 Router + shell + section renderers + highlighter
│   ├── quiz.js                Quiz engine (window.quizApp)
│   ├── dashboard.js           Analytics (window.dashboardApp)
│   ├── glossary.js            Subject dictionary + hover tooltips + SpeechSynthesis
│   ├── search.js              Global Ctrl+K search across every data source
│   ├── deep-guide.js          Deep guide overlay controller
│   └── events.js              Scenario-based challenge cards
│
├── assets/css/
│   ├── tokens.css             ★ SHARED IVRI THEME — copy verbatim, never edit per subject
│   ├── main.css               Reset, layout, shared components, tooltips, sidebar
│   ├── sections.css           Per-screen styles (lesson, quiz, dashboard…)
│   ├── animations.css         Micro-interactions (transform/opacity only)
│   ├── deep-guide.css
│   └── events.css
│
├── images/                    theory/ practical/ why/ qa/ + app icons
└── tools/
    ├── start-server.bat       Double-click → http://localhost:5177
    ├── make-data-files.bat    Double-click → scaffolds new topic blocks
    ├── make-data-files.py
    └── sync-repo.bat
```

**Extension rule:** data files use the mixed-case **`.JS`** extension; engine files in
`js/` use lowercase **`.js`**. (`events-data.js` is the one deliberate exception.)
Keep it — it matches the anatomy and pathology projects.

---

## 4. THE SHARED IVRI THEME — READ BEFORE TOUCHING ANY COLOUR

I am building a **series** of subject sites. A different colour scheme per site was
creating clutter and killing my productivity, so on **2026-09-04 we standardised on one
theme for every subject site.** It is the "Academic" light theme: institutional medical
blue on a soft blue-grey ground, Inter + JetBrains Mono.

### The rules — non-negotiable

1. **`assets/css/tokens.css` is the single source of truth.** Every colour, font size
   and spacing value in the whole app comes from it.
2. **Copy `tokens.css` byte-for-byte** from
   `D:/PATHOLOGY APPLICATION/assets/css/tokens.css`. **Do not re-theme per subject.**
   Do not "make biochemistry green."
3. **Never hard-code a hex value** anywhere else. Need a colour? Use an existing token.
4. **Light is the default and canonical theme.** Dark exists only as a night-reading
   option the student selects in Settings. There is **no** `system` option and no
   `prefers-color-scheme` switching.
5. Only the **brand mark letters** (`BRAND_MARK`), the **site title** and the
   **`<meta name="theme-color">`** change between subjects.

### The palette (token names — reference only; they are already in the file)

| Token | Value (light) | Used for |
|---|---|---|
| `--ivri-blue` | `#1565c0` | **Primary.** Theory, Dashboard, links, brand mark |
| `--ivri-teal` | `#00897b` | Practical / lab |
| `--ivri-purple` | `#6a48b5` | WHY / concepts |
| `--ivri-amber` | `#b25e00` | Quiz / assessment |
| `--ivri-coral` | `#d84315` | Warning / important |
| `--ivri-sage` | `#2e7d32` | Success / healthy |
| `--bg` | `#f0f4f8` | Page ground (soft blue-grey, never stark white) |
| `--surface` | `#ffffff` | Cards |
| `--border` | `rgba(21,101,192,.15)` | Subtle **blue** borders, not grey |
| `--text` | `#263238` | Dark blue-grey body text |
| `--text-muted` | `#546e7a` | Secondary text |

`--bg-image` adds the faint blue dot-grid and gradient behind the app. Shadows are
blue-tinted, not black. `--ivri-amber-fill` (`#ffa726`) and `--ivri-purple-fill` exist
for **fills and gradients only** — the darker `--ivri-amber` / `--ivri-purple` are the
readable text and accent versions.

**Section accents** are set by `document.body[data-section]` in `app.route()`:
Theory = blue, Practical = teal, Quiz = amber, WHY = purple, Dashboard = blue.
**Do not add a sixth accent or invent a new hue.**

The theme is applied **before first paint** by an inline script in `<head>` that reads
`STORE_PREFIX + "theme"`, so there is no white flash on load.

---

## 5. THE SECTIONS (build all eight)

1. **Theory** — Units 1…`THEORY_UNITS` of the VCI theory syllabus
2. **Practical** — Units 1…`PRACTICAL_UNITS` of the practical syllabus
3. **WHY** — mechanism-first explanations ("why does this happen")
4. **Question & Answer** — written-exam practice: short notes, long answers,
   differentiate-between tables, definitions, practical spotting
5. **Quiz** — MCQ / True-False / Fill-blank, with unit-wise, paper-wise, grand test,
   practical, **Exam Mode** (timed) and **Smart Review** (spaced repetition)
6. **Dashboard** — coverage by unit, accuracy, streak, 12-week heatmap, Leitner boxes
7. **Library** — Bookmarks · Notes · Highlights · Glossary
8. **Settings** — theme, backup/restore, about

---

## 6. DATA SHAPES (copy these exactly — the engines depend on them)

### 6.1 Master index — `data-syllabus.JS`

```js
var syllabus = {
  meta: {
    subject:   "SUBJECT_NAME",
    course:    "YEAR",
    credits:   "CREDITS",
    institute: "ICAR — Indian Veterinary Research Institute, Izatnagar, Bareilly",
    papers: [ /* the PAPERS block from section 0 */ ]
  },
  theory: [
    { no: 1, id: "unit-1", title: "", short: "", blurb: "", icon: "", paper: "paper-1",
      topics: [ { id: "u1-t01", title: "" } ] }
  ],
  practical: [ /* same shape, ids "p1-t01" */ ]
};
```

At load the app builds `syllabus.unitById` and `syllabus.topicById`, and stamps
`stream`, `unitId`, `unitNo` and `index` onto every topic. Everything else reads from
those lookups.

### 6.2 Lesson content — `data-theory-unit*.JS`, `data-practical.JS`

```js
theoryData["unit-1"] = {
  "u1-t01": {
    summary:   "",   // one line, large type at the top
    desc:      "",   // STANDARD view — the complete UG exam answer
    eliteDesc: "",   // DEEP view — mechanism depth; falls back to desc if empty
    keyPoints: [],   // marks-scoring lines, rendered as a highlighted block
    clinical:  "",   // green "Clinical note" block at the bottom
    tables:    [],   // [{ title, headers: [], rows: [[]] }]
    img:       "",
    tags:      []
  }
};
```

`practicalData["unit-1"]` uses the identical shape.

### 6.3 Quiz bank — `data-quiz.JS`

```js
quizBank["unit-1"] = {
  mcq: [ { q: "", o: ["", "", "", ""], a: 0, e: "", topicId: "", diff: "easy" } ],
  tf:  [ { q: "", a: true, e: "", topicId: "", diff: "easy" } ],
  fib: [ { q: "", a: ["accepted", "spellings"], e: "", topicId: "", diff: "easy" } ]
};
```

### 6.4 Q&A bank — `data-qa.JS`

```js
qaBank["unit-1"] = [
  { id: "", type: "short|long|diff|define|spot", marks: 5, question: "",
    topicId: "", answer: "", keyPoints: [], diagram: "", table: null, pyq: [] }
];
```

### 6.5 WHY — `data-why.JS`

```js
whyData = [
  { id: "", title: "", category: "mechanism|process|species|diagnostic|clinical",
    unit: "unit-1", comparison: "", why: "", mechanism: [], clinical: "",
    analogy: "", img: "",
    quiz: { question: "", options: [], correctIndex: 0, explanation: "" } }
];
```

### 6.6 The empty-template rule — **the #1 bug in this codebase**

Every data file ships with a template block whose `q` / `question` / `title` is `""`.
`app.questionCount()`, `app.qaCount()` and the WHY renderer **must filter these out**.
**If you add any new counter anywhere, filter empty rows the same way** — otherwise the
UI promises questions the quiz cannot find. (This exact bug bit the Pathology project on
2026-09-04.)

---

## 7. KEY ARCHITECTURE FACTS (reproduce these behaviours)

- **Hash routing.** `#/theory`, `#/unit/unit-1`, `#/topic/u1-t09`,
  `#/quiz/paper/paper-1`, `#/library/glossary`, `#/me`. Works from `file://` and any host
  with no server config. `app.route()` is the single entry point; `state.params.a` and
  `.b` are the two path segments after the route name.
- **Content and structure are separate.** Topic *titles* live in `data-syllabus.JS`;
  topic *text* lives in the unit files, matched by `id`. Adding a topic in one place and
  not the other is the most likely cause of a blank page.
- **localStorage keys** — all prefixed `STORE_PREFIX`, all declared in `store.KEYS`:
  `theme, detail, read, bookmarks, notes, highlights, hl-color, quiz, srs, activity,
  visits, onboarded, last-topic, qa-done, notify-srs, notify-time, nav-pos,
  deep-guide-seen, topic-guide-seen, event-announcements-seen, install-dismissed,
  sidebar-collapsed`.
  **Add any new key to `store.KEYS`** — `backupKeys()` derives from it, so a key added
  there is automatically covered by Backup/Restore.
- **Highlights are objects, not strings.** `{ text, color }`, colour being one of
  `yellow green blue pink orange purple` (`store.VALID_HL_COLORS`).
  `store.addHighlight()` still accepts legacy plain strings and upgrades them, so old
  backups keep working. Inline rendering wraps matches in
  `<mark data-hl-color data-hl-text>`.
- **SRS is a 5-box Leitner system.** Right → box up, review in 1/2/4/8/16 days.
  Wrong → straight back to box 1, review tomorrow. Lives in `store.gradeSrs()`.
- **Quiz state must always be reset.** `quizApp.resetRun()` is called on hub render, on
  setup render, and after `finish()`. The `exam` flag and the `timer` interval are the
  two things that leak if a path is missed — the anatomy project was burned twice by
  exactly this. **Always clear the interval before dropping the run.**
- **Read-aloud** uses the browser `speechSynthesis` API — free, offline, no API key. It
  must be **stopped inside `app.route()`** so a lesson never keeps talking after you
  navigate away.
- **Script order in `index.html` matters:** data files first (they only declare
  variables) → `store.js` → `quiz.js`, `dashboard.js`, `glossary.js`, `search.js`,
  `deep-guide.js`, `events.js` → **`app.js` last** (it boots the whole site).

### The lesson page (two-pane)

| Region | Contents |
|---|---|
| **Left rail** (`.lesson__rail`) | Back-to-unit link, progress bar, all topics in the unit with read-ticks, current topic highlighted. Collapses to a horizontal strip of numbered chips below 1100px. |
| **Card header** | Mono kicker (`/// THEORY // UNIT 1 // TOPIC 09`), title, read-aloud button, summary line |
| **Toolbar** | Mark read · Save · Highlight (colour picker) · Note · Share · Standard/Deep toggle |
| **Content blocks** (`.block`) | Description → Key points (accent tint) → Tables → Figure → Clinical note (green) |
| **Pager** | Previous / Next topic within the unit |

### Navigation model — 3 layers

| Layer | Purpose | Where |
|---|---|---|
| **L1 — Primary** | Desktop: full sidebar. Mobile: **5-slot** bottom bar — Theory · Practical · **Quiz (FAB)** · Q&A · Progress | `.sidebar` / `.bottomnav` in `index.html` |
| **L2 — Contextual** | Per-screen actions (Mark read, Save, Highlight, Note, Standard/Deep) | `.toolbar` inside the lesson card |
| **L3 — Settings & meta** | Theme, backup, reset, about, search | `#/me` route + `Ctrl+K` palette |

**Do not add a 6th bottom-nav slot.** Five is the proven limit — nest new things under
Library or Settings. Contextual actions go in the L2 toolbar, never the bottom nav. The
bottom nav auto-hides on scroll-down and returns on scroll-up — that is intentional.

The desktop sidebar is **hideable**: a `< Hide Sidebar` button, the `#menubtn` hamburger,
and <kbd>Ctrl</kbd>+<kbd>B</kbd>, with a smooth `0.25s` animated reflow. The state
persists in `STORE_PREFIX + "sidebar-collapsed"`.

---

## 8. CODE CONVENTIONS

- **Vanilla JS only.** No frameworks, no npm, no bundlers, no build step. Static files.
- **Don't add features I didn't ask for.** Bound your work to exactly what I requested.
- **Scope CSS changes carefully.** "Fix the quiz result screen" does not mean touch the
  lesson page styles.
- **Use `.innerHTML` for any field that may contain `<b>` / `<br>` / `<i>`** — that is
  every content field. Use `app.esc()` for titles and user-typed text.
- HTML allowed inside content fields: `<b> <i> <br> <ul> <li> <ol> <p> <sup>`.
- **GPU-friendly animations only** — `transform` and `opacity`. No `box-shadow` or
  `filter` inside `@keyframes` (it causes jank on Android).
- **Always reset state flags in cleanup paths.**
- **Touch targets ≥ 44×44 px.** Three taps maximum to any feature.
- After any bulk data edit, verify: copy the file to `.js` and run `node --check`.
  **A syntax error in one `data-*.JS` blanks the entire site.**

---

## 9. CONTENT WRITING STANDARD (for when I start filling content)

**Target: enough for rank 1 and 10 CGPA at UG level. No PhD detail unless it genuinely
explains something. Complete UG coverage, but nothing irrelevant.**

- **`desc` (Standard view) = the complete exam answer.** Well organised, scannable,
  everything needed to write a full-marks answer. This is what I actually revise from.
- **`eliteDesc` (Deep view) = mechanism depth for toppers.** Put the extra here so it
  never clutters the answer I would write. Only where it explains *why*.
- **`keyPoints` = marks-scoring lines**, written so they can be lifted straight into an
  answer. Aim for **10–18 per topic**.
- **`tables` = comparisons that get asked directly** (X vs Y). Aim for **2–3 per topic**.
- **`clinical` = a clinical or applied note at the bottom of EVERY topic.** Written for
  Indian practice: name what I will actually meet in the field, and say what to do.
- Use ALL-CAPS bold for section headers inside `desc`, and `<ul><li>` for lists.

### Indian-practice bias (deliberate — keep it, adapted per subject)

Name the diseases, deficiencies, feeds, breeds, agents and field conditions actually met
in Indian veterinary practice — not the Western textbook default example.

### Mandatory content boundaries (apply to EVERY subject site)

- **No Darwinian theory, evolutionary-origin explanations, ancestry narratives or
  phylogenetic speculation.** Do not say a structure "evolved from" an ancestral species.
  Keep explanations on established embryological development, present structure and
  function, mechanism, species comparison and clinical relevance. The descriptive term
  "vestigial" is acceptable without an ancestral narrative.
- **Religious and mythological neutrality.** No deities, worship stories or
  mythology-based explanations, and no decorative images of idols or worship figures.
- **Analogy boundary.** Do not use alcohol, intoxication or alcoholic drinks as
  analogies, mnemonics or examples. (Ethanol as a *reagent, fixative or chemical agent*
  is fine — the boundary is about analogies and examples.)
- These apply to all text, quizzes, Q&A answers, WHY entries, analogies, captions and
  image prompts. **Never weaken accurate scientific or clinical content to satisfy the
  wording boundary** — rewrite only the unnecessary origin narrative, mythology or
  analogy.

### Preserving content depth

- **Never replace a complete `desc`, `eliteDesc`, `clinical` or `answer` field with a
  shorter audit summary.** An accuracy audit corrects the inaccurate sentence and
  preserves every unrelated teaching detail.
- **Never add a runtime whole-field replacement layer** (`Object.assign(item, fields)`
  or similar). Make targeted edits to the original field.
- Before completing any content audit, compare every pre-existing field before and
  after. Investigate every unexpected drop in length.

### How to fill a whole empty unit efficiently

Write the **entire data file with `Write`**, not block-by-block with `Edit` — patching
duplicates the template text in both `old_string` and `new_string` and is roughly twice
as slow. For a large unit, work in two or three passes:

1. `Write` the file: declaration + the first batch of topics, ending `};`
2. `Edit`: match the last topic's closing `tags: [...]` line plus `\n  }\n\n};`, and
   replace with `tags: [...]`, `},` + the next batch + `};`

**Verify after each pass** with `node --check` on a `.js` copy, then eval it and count
the filled topics.

---

## 10. DEPLOYMENT & GITHUB WORKFLOW (generate these scripts too)

I do **not** use command-line git. Two one-click batch files plus a clean mirror folder:

### 🌟 `1-CLICK-PUSH-TO-GITHUB.bat` — the daily workflow

Double-click it. Three automatic steps, under 5 seconds:

1. **Auto-Sync** — robocopy mirrors all latest files into `repo/`, keeping the clean
   subdirectory nesting (`assets/`, `data/`, `images/`, `js/`, `tools/`)
2. **Package & Commit** — detects modified files and records a timestamped commit
   (e.g. `Update SHORT_NAME Studio content (05-09-2026 10:33)`)
3. **Push** — pushes to `origin main` at `GITHUB_REPO`

Then it shows a green `[SUCCESS] ALL CHANGES UPLOADED TO GITHUB!` banner. Cloudflare /
GitHub Pages rebuilds and deploys the live site within 1–2 minutes.

### 📁 `SYNC-TO-REPO.bat` — local clean mirror, offline only

Mirrors the root into `repo/` with strict nesting, cleaning out stale and orphan files.
**No internet, no push.** You do NOT need to run it if you use the 1-click script — it is
Step 1 there. Use it for: manual drag-and-drop web upload · USB sharing with friends and
professors (no `.git` / `.claude` metadata) · offline work.

### Strict rules for AI assistants

1. **Always edit in `FOLDER`** (e.g. `data/data-theory-unit4.JS`, `js/app.js`).
2. **Never drop flat, unorganised files into `repo/`.** It must exactly mirror the root.
3. After any major update, remind me to double-click `1-CLICK-PUSH-TO-GITHUB.bat`.
4. **Before every release: bump `CACHE_VERSION` in `service-worker.js`**
   (`CACHE_PREFIX-v1` → `-v2`). Otherwise returning students keep the cached old version.

---

## 11. KNOWN PITFALLS (do not reintroduce)

- **Counting empty template rows** as real questions or topics — filter on non-empty text.
- **A syntax error in any `data-*.JS` blanks the whole site**, because the shell cannot
  boot. Always `node --check` after a bulk edit.
- **Service worker serving stale files** during development — unregister it and clear
  caches in DevTools, or bump `CACHE_VERSION`.
- **Quiz `exam` flag and `timer` interval leaking** between runs.
- **A shared `STORE_PREFIX` between two subject sites** — if both are ever served from
  one domain their localStorage collides and progress is corrupted. Each site gets a
  unique prefix. That is why the rule exists.

---

## 12. HOW TO WORK WITH ME

1. **Read this whole file first.** Don't ask "what's the project?"
2. **Be specific** — list file paths and exact changes.
3. **Don't over-explore.** I'll tell you what's wrong; go straight to the file.
4. **If unsure between two approaches**, ask ONE short question. Don't write it both ways.
5. **For big features**, give me a 5-line plan first and wait for "yes go".
6. **End with a "what to test" checklist** so I can verify quickly.
7. **Tell me honestly how much is left.** Don't thin the content to make it fit.

---

## 13. BUILD ORDER (follow this sequence)

1. `assets/css/tokens.css` — copied verbatim from the Pathology project
2. `assets/css/` — `main.css`, `sections.css`, `animations.css`, `deep-guide.css`,
   `events.css`
3. `data/data-syllabus.JS` — the real VCI syllabus for this subject, **titles only**
4. `js/store.js` — with the new `STORE_PREFIX` and the full `KEYS` list
5. `index.html` — shell, nav, modals, correct script order
6. `js/app.js` — router + all section renderers + empty states + highlighter
7. `js/quiz.js`, `js/dashboard.js`
8. Empty data scaffolds: theory units, practical, why, qa, quiz, events
9. `js/glossary.js`, `js/search.js`, `js/deep-guide.js`, `js/events.js`
10. `manifest.json`, `service-worker.js`
11. `tools/*.bat`, `1-CLICK-PUSH-TO-GITHUB.bat`, `SYNC-TO-REPO.bat`, `repo/`
12. `README.md`, `REPO.md`, `CLAUDE-CONTEXT.md`

---

## 14. ACCEPTANCE CHECKLIST (run before saying "done")

- [ ] `index.html` opens from `file://` with **zero console errors**
- [ ] Every sidebar link and every bottom-nav slot routes correctly
- [ ] Every theory unit and practical unit lists its topics from `data-syllabus.JS`
- [ ] Opening a topic renders the two-pane lesson page with an honest empty state
- [ ] Quiz hub reports **0 questions** (empty template rows filtered, not counted)
- [ ] Q&A and WHY show empty states, not blank screens or fake counts
- [ ] Dashboard renders with 0% coverage — no NaN, no crash
- [ ] Theme toggle works; **no white flash** on reload; light is the default
- [ ] `Ctrl+K` search palette opens and closes; `Ctrl+B` toggles the sidebar
- [ ] Highlight, Note, Bookmark and Mark-read all persist across a refresh
- [ ] Settings → Backup produces a JSON file; Restore reads it back
- [ ] Every localStorage key uses `STORE_PREFIX` and appears in `store.KEYS`
- [ ] `service-worker.js` `CACHE_VERSION` is `CACHE_PREFIX-v1`, and PRECACHE lists every
      real file (no 404s in the Network tab)
- [ ] `repo/` mirrors the root exactly, with nesting preserved
- [ ] **No hard-coded hex value exists outside `tokens.css`** (grep to confirm)
- [ ] Mobile at 375px: the bottom nav has exactly 5 slots, all targets ≥ 44px

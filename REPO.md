# 📚 Veterinary Microbiology Studio — GitHub Repository Guide

Welcome to the **Veterinary Microbiology Studio** GitHub repository. This folder contains all the core source code, content files, stylesheets, scripts, tools, and configuration needed to run and deploy the web application.

---

## 🗂️ Sequential Directory & File Layout

```text
repo/ (or VET MICROBIOLOGY APPLICATION/)
│
├── assets/                     ← STYLESHEETS & DESIGN TOKENS
│   └── css/
│       ├── tokens.css          ← Shared IVRI academic medical blue palette & design tokens
│       ├── main.css            ← CSS reset, layout, hideable sidebar & navigation
│       ├── sections.css        ← Section styles (Theory, Quiz, WHY, Q&A, Dashboard)
│       ├── deep-guide.css      ← Diagnostic orientation guide styles
│       ├── events.css          ← Department announcements & seminar styles
│       └── animations.css      ← Smooth transitions & micro-interactions
│
├── data/                       ← ALL SYLLABUS, THEORY & QUESTION DATA
│   ├── data-syllabus.JS        ← Master index: 5 units, 106 theory + 55 practical topics
│   ├── data-theory-unit1.JS    ← General & Systematic Bacteriology (34 topics)
│   ├── data-theory-unit2.JS    ← Veterinary Mycology (10 topics)
│   ├── data-theory-unit3.JS    ← Microbial Biotechnology (10 topics)
│   ├── data-theory-unit4.JS    ← Veterinary Immunology & Serology (19 topics)
│   ├── data-theory-unit5.JS    ← General & Systematic Veterinary Virology (33 topics)
│   ├── data-practical.JS       ← Practical Microbiology syllabus (55 topics)
│   ├── data-why.JS             ← Mechanism-first WHY comparative reasoning entries
│   ├── data-qa.JS              ← Written question bank (short notes, long answers, differences)
│   ├── data-quiz.JS            ← Quiz bank (MCQs, True/False, Fill-in-the-blanks)
│   └── events-data.js          ← Academic schedule & department announcements
│
├── images/                     ← LESSON & DIAGNOSTIC IMAGES
│   ├── theory/                 ← Bacterial morphology, staining, and culture figures
│   ├── practical/              ← Slide smears, media plates, and serological assays
│   ├── why/                    ← Mechanism diagrams & comparison charts
│   ├── qa/                     ← Question-related diagrams & illustrations
│   └── README.txt              ← Instructions for placing image files
│
├── js/                         ← APPLICATION LOGIC & INTERACTION ENGINES
│   ├── app.js                  ← Single-page router, navigation, rendering & views
│   ├── store.js                ← LocalStorage persistence layer (vmicro- prefix)
│   ├── quiz.js                 ← Quiz engine with Paper I & II modes, timer & SRS logic
│   ├── dashboard.js            ← Progress analytics, streak calculator & 12-week heatmap
│   ├── glossary.js             ← 209+ term Veterinary Microbiology dictionary & speech engine
│   ├── search.js               ← Full-text deep search across theory, practical, quiz & glossary
│   ├── deep-guide.js           ← Interactive study guide reader
│   └── events.js               ← Academic calendar & events viewer
│
├── tools/                      ← HELPER TOOLS & SHORTCUTS
│   ├── start-server.bat        ← Double-click to launch local server at http://localhost:5177
│   ├── make-data-files.bat     ← Helper script to scaffold new data blocks
│   ├── make-data-files.py      ← Scaffolding Python script
│   └── sync-repo.bat           ← Double-click to refresh the repo folder
│
├── 1-CLICK-PUSH-TO-GITHUB.bat  ← One-click upload: syncs repo, stages, commits, and pushes
├── SYNC-TO-REPO.bat            ← Offline mirror synchronization script
├── index.html                  ← Standalone web application entry point
├── manifest.json               ← Progressive Web App (PWA) manifest configuration
├── service-worker.js           ← Offline cache-first service worker (vmicro-v1)
├── README.md                   ← Student guide & documentation
└── REPO.md                     ← This repository guide
```

---

## 🚀 One-Click GitHub Upload

To publish your latest edits, double-click:
```
1-CLICK-PUSH-TO-GITHUB.bat
```
This automatically:
1. Synchronizes all project files into `repo/`.
2. Stages and commits your changes with a local timestamp.
3. Pushes to `https://github.com/fazalzama77-sys/VET-MICROBIOLOGY`.

---

## Developer Contact

**Mr. Fazal Zama**  
B.V.Sc & A.H. Undergraduate  
ICAR — Indian Veterinary Research Institute (IVRI), Bareilly  
Roll No: B0-350-2025 · Email: vet.fazalzama@gmail.com

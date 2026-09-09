/* ============================================================
   data-qa.JS  —  WRITTEN-EXAM QUESTION & ANSWER BANK
   Veterinary Microbiology Studio
   ------------------------------------------------------------
   Units 1 to 5 written exam practice: 2-Mark Definitions,
   5-Mark Short Notes & Differences, and 12-Mark Long Essays.
   Calibrated strictly to ICAR-IVRI / VCI 2nd Year Examination Standards.
   ============================================================ */

var qaBank = {
  "unit-1": [
    {
      "id": "u1-q01",
      "type": "define",
      "marks": 2,
      "question": "Define Koch's Postulates and state Falkow's Molecular Koch's Postulates.",
      "topicId": "u1-t01",
      "answer": "<p><strong>Koch's Postulates</strong> are four criteria established by Robert Koch (1884) to establish a causative relationship between a microbe and a specific disease:</p><ol><li>The microorganism must be found in abundance in all organisms suffering from the disease, but not in healthy organisms.</li><li>The microorganism must be isolated from a diseased organism and grown in pure culture.</li><li>The cultured microorganism should cause disease when introduced into a healthy organism.</li><li>The microorganism must be re-isolated from the inoculated, diseased experimental host and identified as being identical to the original specific causative agent.</li></ol><p><strong>Falkow's Molecular Koch's Postulates (1988)</strong> re-frame these criteria at the genetic level: (1) The virulence trait/gene should be associated with pathogenic strains; (2) Inactivation of the gene should lead to a measurable loss in virulence; and (3) Reversion or allelic replacement of the mutated gene must restore full pathogenicity.</p>",
      "keyPoints": [
        "Original 4 postulates: Association, Isolation in pure culture, Inoculation reproducing disease, and Re-isolation.",
        "Molecular postulates (Stanley Falkow): Virulence gene presence, specific gene inactivation reducing virulence, and complementation/allelic replacement restoring virulence."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "GADVASU 2020",
        "IVRI 2019"
      ]
    },
    {
      "id": "u1-q02",
      "type": "define",
      "marks": 2,
      "question": "Define Peptidoglycan (Murein Sacculus) and describe the transpeptidation reaction.",
      "topicId": "u1-t05",
      "answer": "<p><strong>Peptidoglycan (Murein)</strong> is an essential, rigid heteropolymer meshwork surrounding the bacterial cytoplasmic membrane, composed of alternating $\\beta$-(1,4)-linked <em>N-acetylglucosamine</em> (NAG) and <em>N-acetylmuramic acid</em> (NAM) glycan strands cross-linked by short peptide stems.</p><p><strong>Transpeptidation</strong> is the final enzymatic cross-linking reaction catalyzed by membrane-bound <em>Penicillin-Binding Proteins (PBPs / transpeptidases)</em>. The terminal D-Ala of the D-Ala-D-Ala pentapeptide stem is cleaved, providing free energy to cross-link the penultimate D-Ala to the amino group of m-DAP (Gram-negative) or an L-lysine pentaglycine bridge (Gram-positive), giving tensile strength against osmotic lysis.</p>",
      "keyPoints": [
        "Polymer of alternating NAG and NAM via beta-(1,4) glycosidic bonds.",
        "Cross-linking via transpeptidase / PBPs cleaving terminal D-Ala-D-Ala, the primary molecular target of beta-lactam antibiotics."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "WBUAFS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u1-q03",
      "type": "define",
      "marks": 2,
      "question": "Define Bacterial Endospore and explain the role of Dipicolinic Acid.",
      "topicId": "u1-t05",
      "answer": "<p>A <strong>Bacterial Endospore</strong> is a highly resistant, cryptobiotic (metabolically dormant) specialized survival structure formed inside mother cells (sporangia) by certain Gram-positive rods, notably <em>Bacillus</em> and <em>Clostridium</em> species, under environmental nutrient deprivation.</p><p><strong>Dipicolinic Acid (DPA, pyridine-2,6-dicarboxylic acid)</strong> comprises 5–15% of the spore dry weight, chelated with calcium ions ($\text{Ca}^{2+}\text{-DPA}$) in the dehydrated core. This complex intercalates into and stabilizes bacterial DNA, lowers water activity, and confers phenomenal resistance to boiling (100°C), desiccation, UV radiation, and chemical disinfectants.</p>",
      "keyPoints": [
        "Cryptobiotic resting structure produced by Bacillus and Clostridium during nutrient depletion.",
        "Calcium dipicolinate complex (5–15% core weight) confers profound heat and desiccation resistance by dehydrating the protoplast."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "LUVAS 2022",
        "MAFSU 2021",
        "IVRI 2023"
      ]
    },
    {
      "id": "u1-q04",
      "type": "define",
      "marks": 2,
      "question": "Define Bacterial Capsule and Glycocalyx with significant veterinary examples.",
      "topicId": "u1-t05",
      "answer": "<p>A <strong>Bacterial Capsule</strong> is an organized, firmly adherent gelatinous envelope located external to the cell wall, consisting predominantly of high-molecular-weight polysaccharides (e.g., <em>Streptococcus pneumoniae</em>, <em>Klebsiella pneumoniae</em>) or poly-D-glutamic acid polypeptide (pathognomonic of <em>Bacillus anthracis</em>).</p><p>It acts as a prime virulence factor by preventing complement deposition (C3b opsonization) and phagocytosis by neutrophils and macrophages. <em>Glycocalyx / Slime layer</em> is a loose, unorganized, easily detachable polysaccharide matrix mediating adherence and biofilm formation (e.g., <em>Staphylococcus epidermidis</em> on surgical implants).</p>",
      "keyPoints": [
        "Outer gelatinous protective layer: Polysaccharide in most bacteria; Poly-D-glutamic acid in Bacillus anthracis.",
        "Function: Antiphagocytic, prevents complement-mediated lysis, and promotes tissue adherence."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "DUVASU 2022",
        "NDVSU 2021"
      ]
    },
    {
      "id": "u1-q05",
      "type": "define",
      "marks": 2,
      "question": "Define Bacterial Plasmids and R-factors.",
      "topicId": "u1-t11",
      "answer": "<p>A <strong>Plasmid</strong> is an extrachromosomal, covalently closed circular, double-stranded DNA molecule capable of autonomous self-replication independent of the bacterial chromosome, carrying accessory genes that confer selective survival advantages.</p><p>An <strong>R-factor (Resistance plasmid)</strong> is a specialized conjugative plasmid that carries genes encoding resistance to multiple antimicrobial agents (e.g., $\\beta$-lactamases, aminoglycoside-modifying enzymes, tetracycline efflux pumps). It typically consists of two functional regions: the <em>Resistance Transfer Factor (RTF)</em> directing conjugative sex pilus assembly and transfer, and the <em>r-determinant</em> encoding actual antibiotic resistance genes.</p>",
      "keyPoints": [
        "Extrachromosomal, autonomously replicating circular double-stranded DNA.",
        "R-factors contain Resistance Transfer Factor (RTF) for conjugation and r-determinants encoding multi-drug resistance enzymes."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "RAJUVAS 2021",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u1-q06",
      "type": "define",
      "marks": 2,
      "question": "Define Bacteriophage and Lysogenic Conversion with a veterinary example.",
      "topicId": "u1-t11",
      "answer": "<p>A <strong>Bacteriophage</strong> is an obligate intracellular virus that specifically infects and replicates within bacterial hosts, existing either as a lytic (virulent) phage causing cell lysis, or a temperate phage integrating into the host genome.</p><p><strong>Lysogenic Conversion</strong> is the phenomenon wherein a temperate bacteriophage integrates its genome into the bacterial chromosome as a stable <em>prophage</em>, conferring novel phenotypic properties (frequently potent virulence factors or exotoxins) upon the bacterium. <strong>Veterinary Example:</strong> <em>Corynebacterium diphtheriae</em> producing diphtheria toxin via $\\beta$-phage; <em>Clostridium botulinum</em> types C and D neurotoxin production mediated by pseudolysogenic bacteriophages.</p>",
      "keyPoints": [
        "Bacterial virus that can integrate as a prophage in the lysogenic cycle.",
        "Phenotypic alteration of the bacterial host by prophage genes, e.g., Botulinum C/D neurotoxin production."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2021",
        "IVRI 2020",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u1-q07",
      "type": "define",
      "marks": 2,
      "question": "Define Bacterial Biofilm and Quorum Sensing.",
      "topicId": "u1-t09",
      "answer": "<p>A <strong>Bacterial Biofilm</strong> is a structured consortium of microbial cells enclosed within a self-produced matrix of <em>extracellular polymeric substances (EPS)</em> (polysaccharides, extracellular DNA, proteins) irreversibly adherent to biotic (mucosa, heart valves) or abiotic surfaces (catheters, teat cannulas), conferring up to 1000-fold resistance to antibiotics and host immune clearance.</p><p><strong>Quorum Sensing</strong> is the cell-density-dependent bacterial cell-cell communication system mediated by diffusible autoinducer signaling molecules (e.g., <em>Acyl-homoserine lactones [AHL]</em> in Gram-negative bacteria and <em>autoinducing peptides [AIP]</em> in Gram-positive bacteria) that coordinate virulence gene expression and biofilm maturation.</p>",
      "keyPoints": [
        "Sessile community of microbes embedded in self-secreted extracellular polymeric substance (EPS).",
        "Quorum sensing: Intercellular chemical signaling via autoinducers (AHL/AIP) regulating density-dependent gene expression."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "LUVAS 2023",
        "DUVASU 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u1-q08",
      "type": "define",
      "marks": 2,
      "question": "Define Endotoxin and Toxoid.",
      "topicId": "u1-t10",
      "answer": "<p>An <strong>Endotoxin</strong> is an integral structural constituent of the outer membrane of all Gram-negative bacteria, chemically comprising <em>Lipopolysaccharide (LPS)</em>. The toxic moiety is <strong>Lipid A</strong>, which is released upon bacterial cell lysis and binds to TLR4/MD-2 complexes on macrophages, triggering massive release of pyrogenic cytokines (IL-1, TNF-$\\alpha$, IL-6) leading to endotoxic shock and DIC.</p><p>A <strong>Toxoid</strong> is a modified bacterial exotoxin that has been detoxified (rendered non-toxic) by chemical treatment (typically 0.2–0.4% formalin at 37°C for several weeks) or heat, while retaining its original three-dimensional antigenic epitope configuration, making it safe and effective for active immunization (e.g., Tetanus toxoid, Clostridial enterotoxaemia toxoid).</p>",
      "keyPoints": [
        "Endotoxin: Lipopolysaccharide (LPS) with toxic Lipid A moiety released upon lysis of Gram-negative bacteria.",
        "Toxoid: Formalin-detoxified exotoxin stripped of pathogenicity but retaining protective immunogenicity."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2022",
        "GADVASU 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u1-q09",
      "type": "define",
      "marks": 2,
      "question": "Define Minimum Inhibitory Concentration (MIC) and Minimum Bactericidal Concentration (MBC).",
      "topicId": "u1-t12",
      "answer": "<p><strong>Minimum Inhibitory Concentration (MIC)</strong> is the lowest concentration of an antimicrobial agent (expressed in $\\mu\\text{g/mL}$ or $\\text{mg/L}$) that visibly inhibits the in vitro growth of a standardized inoculum ($5 \\times 10^5\\text{ CFU/mL}$) of a bacterial isolate following overnight incubation (18–24 hours at 35–37°C).</p><p><strong>Minimum Bactericidal Concentration (MBC)</strong> is the lowest concentration of an antimicrobial agent that kills $\\ge 99.9\\%$ ($3\\log_{10}$ reduction) of the initial bacterial inoculum, determined by subculturing clear broth tubes from the MIC assay onto antibiotic-free agar plates. An antibiotic is classified as bactericidal if $\\text{MBC}/\\text{MIC} \\le 4$.</p>",
      "keyPoints": [
        "MIC: Lowest antibiotic concentration preventing visible bacterial turbidity in broth/agar dilution.",
        "MBC: Lowest concentration killing >= 99.9% of the viable bacterial inoculum. Ratio MBC/MIC <= 4 denotes bactericidal action."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "WBUAFS 2023",
        "KVAFSU 2021",
        "IVRI 2022"
      ]
    },
    {
      "id": "u1-q10",
      "type": "define",
      "marks": 2,
      "question": "Define M'Fadyean Reaction and describe its diagnostic significance in Anthrax.",
      "topicId": "u1-t17",
      "answer": "<p>The <strong>M'Fadyean Reaction (Polychrome Methylene Blue Staining)</strong> is a presumptive diagnostic staining technique introduced by Sir John M'Fadyean (1903) for rapid identification of <em>Bacillus anthracis</em> in peripheral blood smears or edematous fluid from freshly dead animals.</p><p><strong>Microscopic Appearance & Significance:</strong> Smears are fixed by heat or dipped in absolute methanol and stained with aged, polychrome (oxidized) methylene blue. The truncated, square-ended <em>Bacillus anthracis</em> rods stain deep blue, surrounded by a distinct, amorphous, pinkish-purple capsular halo consisting of poly-D-glutamic acid against a pale blue background. It provides rapid field confirmation of anthrax without opening the carcass.</p>",
      "keyPoints": [
        "Polychrome (ripened/oxidized) methylene blue staining of peripheral blood smears.",
        "Microscopic hallmark: Deep blue square-ended bacillary rods enclosed in an amorphous purplish-pink poly-D-glutamic acid capsule."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u1-q11",
      "type": "define",
      "marks": 2,
      "question": "Define the CAMP Phenomenon and name the organism it identifies.",
      "topicId": "u1-t14",
      "answer": "<p>The <strong>CAMP Phenomenon</strong> (named after Christie, Atkins, and Munch-Petersen, 1944) is an accentuated synergistic hemolytic reaction that occurs when the extracellular, heat-stable diffusible <strong>CAMP factor (protein B)</strong> produced by <em>Streptococcus agalactiae</em> interacts with the $\\beta$-lysin (sphingomyelinase C) of <em>Staphylococcus aureus</em> on 5% sheep blood agar.</p><p><strong>Observation:</strong> A characteristic sharp, arrowhead-shaped zone of complete (clear) $\\beta$-hemolysis develops at the perpendicular junction between the <em>S. aureus</em> streak and the <em>Streptococcus agalactiae</em> streak, specifically identifying <em>Streptococcus agalactiae</em> (Lancefield Group B), the classical contagious bovine mastitis pathogen.</p>",
      "keyPoints": [
        "Synergistic hemolysis between Streptococcus agalactiae CAMP factor and Staphylococcus aureus beta-lysin.",
        "Produces a pathognomonic clear arrowhead zone of complete hemolysis on sheep blood agar."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2021",
        "LUVAS 2020",
        "MAFSU 2022"
      ]
    },
    {
      "id": "u1-q12",
      "type": "define",
      "marks": 2,
      "question": "Define the Prozone Phenomenon and explain how to avoid it in Brucella serology.",
      "topicId": "u1-t26",
      "answer": "<p>The <strong>Prozone Phenomenon (Antibody Excess)</strong> is a false-negative serological agglutination reaction observed in low dilutions (high concentrations) of antiserum, where excess bivalent antibodies rapidly saturate all available antigen epitopes individually, preventing the cross-linking required to form a visible lattice network.</p><p><strong>Prevention in Brucellosis:</strong> In the Standard Tube Agglutination Test (STAT) for bovine brucellosis, the prozone phenomenon frequently occurs due to high titers of blocking antibodies ($\text{IgA}$ or non-agglutinating $\text{IgG}_1$). It is eliminated by testing serial twofold serum dilutions out to $1:640$ or higher, or by using the acidified Rose Bengal Plate Test (RBPT, pH 3.65) which minimizes blocking effects.</p>",
      "keyPoints": [
        "False-negative agglutination caused by antibody excess preventing lattice formation.",
        "Overcome by running serial twofold dilutions (up to 1:640) and using acidified antigen (RBPT pH 3.65)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "DUVASU 2023",
        "KVAFSU 2019"
      ]
    },
    {
      "id": "u1-q13",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Gram-positive and Gram-negative bacterial cell wall architecture with a structured comparison table.",
      "topicId": "u1-t05",
      "answer": "<p>Bacterial cell walls exhibit two fundamentally distinct structural architectures that dictate Gram staining behavior, pathogenic mechanisms, and antibiotic sensitivity profiles:</p>",
      "keyPoints": [
        "Thick multi-layered peptidoglycan (20-80 nm) with teichoic acids in Gram-positive vs thin monolayer (2-7 nm) in Gram-negative.",
        "Gram-negative possesses an asymmetric outer membrane rich in lipopolysaccharide (LPS / endotoxin).",
        "Periplasmic space is prominent in Gram-negative containing hydrolytic enzymes and beta-lactamases.",
        "Crystal violet-iodine complex is trapped by thick dehydrated Gram-positive peptidoglycan; outer lipid dissolved by alcohol in Gram-negative."
      ],
      "diagram": "",
      "table": {
        "title": "Structural Comparison: Gram-Positive vs Gram-Negative Cell Wall",
        "headers": [
          "Feature / Parameter",
          "Gram-Positive Cell Wall",
          "Gram-Negative Cell Wall"
        ],
        "rows": [
          [
            "Peptidoglycan Layer",
            "Thick, multilayered (20–80 nm), accounts for 60–90% of dry weight",
            "Thin, single/double layer (2–7 nm), accounts for 10–20% of dry weight"
          ],
          [
            "Teichoic & Lipoteichoic Acids",
            "Present (provide negative charge and antigenicity)",
            "Completely absent"
          ],
          [
            "Outer Membrane",
            "Absent",
            "Present (asymmetric lipid bilayer with phospholipids and LPS)"
          ],
          [
            "Lipopolysaccharide (LPS / Endotoxin)",
            "Absent",
            "Abundant in outer leaflet (Lipid A + Core + O-antigen)"
          ],
          [
            "Periplasmic Space",
            "Narrow or virtually nonexistent",
            "Broad, prominent gel-filled space (hydrolytic enzymes, PBPs)"
          ],
          [
            "Lipid & Protein Content",
            "Low lipid content (1–4%)",
            "High lipid content (11–22%) and abundant outer porin proteins"
          ],
          [
            "Susceptibility to Lysozyme & Penicillin",
            "High (lysozyme directly cleaves beta-1,4 glycosidic bonds)",
            "Low/resistant (outer membrane acts as a molecular permeability barrier)"
          ],
          [
            "Gram Stain Outcome",
            "Retains Crystal Violet-Iodine (Purple/Blue)",
            "Decolorized by alcohol; counterstained pink/red by Safranin"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u1-q14",
      "type": "short",
      "marks": 5,
      "question": "Describe the phases of the Bacterial Growth Curve in a closed (batch) system and state their clinical significance.",
      "topicId": "u1-t06",
      "answer": "<p>When inoculated into a fresh, closed liquid medium, a bacterial population exhibits a characteristic sigmoidal growth curve consisting of four sequential phases:</p><ol><li><strong>Lag Phase:</strong> Period of physiological adaptation. No cell division occurs ($N = N_0$). Bacteria actively synthesize essential metabolic enzymes, RNA, and structural cofactors to adapt to the new medium. Length depends on inoculum size, cell age, and substrate shock.</li><li><strong>Log (Exponential) Phase:</strong> Cells divide at their maximal genetic growth rate by binary fission. Population doubles at a constant generation time: $N_t = N_0 \\cdot 2^n$. Morphologically, bacteria are most uniform, biologically hyperactive, and maximally susceptible to cell-wall active antimicrobials (penicillins).</li><li><strong>Stationary Phase:</strong> Growth rate slows until rate of cell division equals rate of cell death. Triggered by nutrient exhaustion (carbon/nitrogen source), space limitation, and accumulation of inhibitory metabolic wastes (lactic acid, alcohols). Sporulation in <em>Bacillus</em> and production of secondary metabolites (antibiotics, exotoxins) are initiated.</li><li><strong>Decline (Death) Phase:</strong> Exponential death phase where viable count plunges: death rate exceeds multiplication rate. Cells undergo autolysis and morphological pleomorphism (involution forms).</li></ol><p><strong>Clinical & Diagnostic Significance:</strong> Antimicrobial susceptibility testing (Kirby-Bauer) strictly mandates actively growing log-phase cultures (0.5 McFarland). Bacterial vaccines (bacterins) are harvested at late-log or early-stationary phase for maximum antigen and toxin yield.</p>",
      "keyPoints": [
        "Four distinct phases: Lag (enzyme synthesis/adaptation), Log (binary fission, max antibiotic sensitivity), Stationary (spore/toxin production), Death (autolysis).",
        "Generation time derivation: Nt = N0 * 2^n.",
        "Practical application: In vitro ABST requires log-phase culture; commercial vaccines harvested at late log/early stationary phase."
      ],
      "diagram": "Growth Curve: Lag (flat) -> Log (steep rise) -> Stationary (plateau) -> Decline (steep fall)",
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "LUVAS 2022",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u1-q15",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Bacterial Exotoxins and Endotoxins with a comprehensive comparison table.",
      "topicId": "u1-t10",
      "answer": "<p>Bacterial toxins are categorized into two major classes based on origin, chemical nature, and pathological mechanisms:</p>",
      "keyPoints": [
        "Exotoxins: Secreted proteins from Gram-positive and Gram-negative bacteria; highly potent with specific enzymatic targets.",
        "Endotoxins: Integral LPS structural components of Gram-negative outer membrane; toxic Lipid A released upon lysis.",
        "Heat stability: Exotoxins are heat-labile (destroyed at 60-80C) except Staphylococcal enterotoxin; endotoxins are heat-stable (withstand 100C for hours).",
        "Toxoid conversion: Exotoxins readily convert to immunogenic toxoids with formalin; endotoxins cannot form toxoids."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Exotoxins vs Endotoxins",
        "headers": [
          "Feature / Criterion",
          "Exotoxins",
          "Endotoxins"
        ],
        "rows": [
          [
            "Source Organisms",
            "Excreted by living Gram-positive and Gram-negative bacteria",
            "Integral component of outer membrane of Gram-negative bacteria only"
          ],
          [
            "Chemical Nature",
            "Soluble proteins or polypeptides (molecular weight 10–900 kDa)",
            "Lipopolysaccharide complex (LPS); toxic moiety is Lipid A"
          ],
          [
            "Gene Location",
            "Plasmid DNA, bacteriophage genome, or pathogenicity islands",
            "Chromosomal bacterial DNA"
          ],
          [
            "Potency / Lethal Dose",
            "Extremely potent; lethal in microgram or nanogram quantities ($LD_{50}$ tiny)",
            "Moderately toxic; lethal in milligram amounts ($LD_{50}$ high)"
          ],
          [
            "Mechanism of Action",
            "Highly specific pharmacological receptors (e.g., neurotoxic, enterotoxic, cytotoxic)",
            "Non-specific cytokine storm via TLR4 activation (pyrexia, leukopenia, shock, DIC)"
          ],
          [
            "Heat Stability",
            "Heat-labile (denatured at 60–80°C for 30 min, except Staph enterotoxin)",
            "Heat-stable (withstands autoclaving at 121°C for 30 min or 100°C for 1 hr)"
          ],
          [
            "Immunogenicity & Toxoid",
            "Highly immunogenic; neutralized by antitoxin; convertible to toxoids by formalin",
            "Weakly immunogenic; antibodies not protective; cannot be converted to toxoid"
          ],
          [
            "Veterinary Hallmarks",
            "Tetanus toxin (C. tetani), Botulinum toxin, Anthrax lethal toxin",
            "Endotoxic shock in Coliform mastitis, Shipping fever endotoxemia"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2022",
        "WBUAFS 2022",
        "RAJUVAS 2020",
        "IVRI 2021"
      ]
    },
    {
      "id": "u1-q16",
      "type": "short",
      "marks": 5,
      "question": "Explain the mechanisms of Horizontal Gene Transfer (HGT) in bacteria: Transformation, Transduction, and Conjugation.",
      "topicId": "u1-t11",
      "answer": "<p>Horizontal Gene Transfer (HGT) is the lateral acquisition of foreign genetic material between non-parental bacterial cells, driving rapid evolution, virulence acquisition, and multidrug resistance dissemination:</p><ul><li><strong>1. Transformation (Griffith, 1928):</strong> Uptake and stable chromosomal incorporation of naked exogenous DNA fragments from the surrounding extracellular environment by <em>naturally competent</em> cells (e.g., <em>Streptococcus pneumoniae</em>, <em>Bacillus subtilis</em>, <em>Haemophilus</em>). Requires competence proteins (Com machinery) that bind DNA, degrade one strand, and transport single-stranded DNA into the cytoplasm for RecA-mediated homologous recombination.</li><li><strong>2. Transduction (Zinder and Lederberg, 1952):</strong> DNA transfer from a donor to a recipient cell mediated by a <em>bacteriophage</em> vector. Divided into:<ul><li><em>Generalized Transduction:</em> Any arbitrary chromosomal segment is accidentally packaged inside a pseudo-capsid during virulent lytic phage packaging (e.g., P22, P1).</li><li><em>Specialized Transduction:</em> In temperate lysogenic phages (e.g., $\\lambda$), imprecise prophage excision carries adjacent host chromosomal genes.</li></ul></li><li><strong>3. Conjugation (Lederberg and Tatum, 1946):</strong> Direct one-way transfer of conjugative plasmid DNA (e.g., F-plasmid or R-factor) from a donor ($\text{F}^+$) to a recipient ($\text{F}^-$) through physical cell-to-cell contact via a sex pilus (Type IV secretion system). Tra enzymes nick the origin of transfer ($oriT$) and rolling-circle replication drives single-stranded DNA transfer into the recipient, synthesizing complementary strands in both cells.</li></ul>",
      "keyPoints": [
        "Transformation: Uptake of free naked environmental DNA by competent cells via Com system and RecA.",
        "Transduction: Bacteriophage-mediated transfer (generalized by lytic phages; specialized by lysogenic temperate phages).",
        "Conjugation: Direct sex-pilus mediated transfer of conjugative plasmids via rolling circle replication."
      ],
      "diagram": "Donor F+ [sex pilus] -> Recipient F- => rolling circle replication gives 2 F+ cells",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "MAFSU 2021",
        "KVAFSU 2023"
      ]
    },
    {
      "id": "u1-q17",
      "type": "short",
      "marks": 5,
      "question": "Describe the pathogenesis, pathognomonic lesions, and laboratory diagnosis of Blackquarter (BQ) in cattle.",
      "topicId": "u1-t19",
      "answer": "<p><strong>Blackquarter (Blackleg)</strong> is an acute, non-contagious, highly fatal, endogenous clostridial infection of young, healthy cattle (6 months to 2 years) caused by <strong>Clostridium chauvoei</strong>.</p><p><strong>Pathogenesis:</strong> Latent spores ingested from contaminated pastures penetrate the intestinal mucosa, enter circulation via macrophages, and lodge dormantly in heavy skeletal muscles. When muscular trauma, bruising, or exertion creates local tissue ischemia and anaerobiosis (low redox potential $E_h$), spores germinate into vegetative rods. Rapid multiplication produces necrotizing and hemolytic toxins:</p><ul><li><em>Alpha toxin:</em> Potent hemolysin, necrotizing and lethal.</li><li><em>Beta toxin:</em> DNase aiding cellular degradation.</li><li><em>Gamma & Delta toxins:</em> Hyaluronidase and hemolysin causing widespread myonecrosis, gas production, and toxemic shock.</li></ul><p><strong>Pathognomonic Lesions:</strong> Crepitant, hot, painful swelling in heavy muscle masses (thigh, shoulder, loin), turning cold, painless, and edematous. On incising the affected muscle: blackish-red, dry, porous, spongy muscle filled with gas bubbles, exuding a characteristic <em>rancid butter / sour milk odor</em> (due to butyric acid fermentation).</p><p><strong>Laboratory Diagnosis:</strong></p><ol><li><em>Impression Smears:</em> Smears from affected muscle stained by Gram stain show Gram-positive, pleomorphic rods with oval, central to sub-terminal spores ('lemon-shaped' or 'citron bodies').</li><li><em>Fluorescent Antibody Test (FAT):</em> Direct FAT on muscle impression smears using FITC-conjugated anti-<em>C. chauvoei</em> globulin is the international gold standard for rapid, specific identification.</li><li><em>Anaerobic Culture:</em> Inoculation in Robertson's Cooked Meat (RCM) broth shows saccharolytic reaction (meat reddened with butyric odor, no digestion) and blood agar under anaerobic jar ($37^\\circ\\text{C}$ for 48 hr) yielding small, irregular colonies with a zone of $\\beta$-hemolysis.</li></ol>",
      "keyPoints": [
        "Etiology: Clostridium chauvoei, ingested latent pasture spores activated by muscular trauma/anoxia.",
        "Hallmark lesions: Dry, dark-red/black porous muscle with crepitus and rancid butter odor.",
        "Gold standard diagnosis: Direct Fluorescent Antibody Test (FAT) on muscle impression smears."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2021",
        "RAJUVAS 2019"
      ]
    },
    {
      "id": "u1-q18",
      "type": "short",
      "marks": 5,
      "question": "Outline the diagnostic protocol for Bovine Tuberculosis caused by Mycobacterium bovis.",
      "topicId": "u1-t18",
      "answer": "<p><strong>Bovine Tuberculosis (bTB)</strong> is a chronic, debilitating granulomatous disease of cattle and buffaloes caused by <strong>Mycobacterium bovis</strong>, posing severe zoonotic risks.</p><p><strong>Ante-Mortem Field Diagnosis (Allergic Hypersensitivity):</strong></p><ul><li><em>Single Intradermal Test (SID):</em> 0.1 mL of Bovine Purified Protein Derivative (Bovine PPD tuberculin, 2000–3000 IU) injected intradermally in the caudal fold or mid-cervical skin. Skin thickness measured with calipers before and at <strong>72 hours ($\\pm 4$ hr)</strong> post-injection. An increase of $\\ge 4\text{ mm}$ or diffuse painful swelling denotes a positive reactor.</li><li><em>Comparative Cervical Tuberculin (CCT) Test:</em> Dual intradermal injection of Bovine PPD and Avian PPD (12 cm apart on the neck) to eliminate non-specific sensitization by environmental mycobacteria (*M. avium*).</li><li><em>Interferon-Gamma (IFN-$\\gamma$) Assay (Bovigam):</em> Heparinized whole blood incubated with bovine and avian PPD; released IFN-$\\gamma$ quantitated by sandwich ELISA within 24 hours. Detects early cellular immunity earlier than skin testing.</li></ul><p><strong>Post-Mortem & Confirmatory Laboratory Diagnosis:</strong></p><ol><li><em>Pathological Lesions:</em> Caseo-calcareous nodular granulomas (tubercles) in bronchial, mediastinal, and mesenteric lymph nodes and lungs.</li><li><em>Acid-Fast Staining (Ziehl-Neelsen):</em> Direct smears from caseous nodules stained by ZN stain demonstrate slender, slightly curved, acid-fast rods (bright red/pink) against a blue background, resisting 3% acid-alcohol decolorization due to cell wall mycolic acids.</li><li><em>Culture (Gold Standard):</em> Inoculation on Lowenstein-Jensen (LJ) medium containing pyruvate (without glycerol, as <em>M. bovis</em> is dysgonic and glycerol-inhibited) or Stonebrink's medium; slow growth after 4–8 weeks yielding smooth, flat, white/buff crumbly colonies.</li><li><em>Molecular Confirmation:</em> Real-time PCR targeting insertion sequence <strong>IS6110</strong> and region of difference (RD4) deletion profiling.</li></ol>",
      "keyPoints": [
        "Ante-mortem gold standard: Single Intradermal (SID) and Comparative Cervical Tuberculin (CCT) skin tests read at 72 hours.",
        "Laboratory ZN staining: Bright pink acid-fast bacilli resisting acid-alcohol due to lipid-rich mycolic acids.",
        "Culture requirement: Pyruvate-supplemented Lowenstein-Jensen medium (glycerol-intolerant dysgonic growth).",
        "Molecular confirmation: IS6110 PCR and RD4 deletion typing."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "WBUAFS 2020",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u1-q19",
      "type": "diff",
      "marks": 5,
      "question": "Tabulate the biochemical differentiation of major Enterobacteriaceae using IMViC and Triple Sugar Iron (TSI) reactions.",
      "topicId": "u1-t21",
      "answer": "<p>Members of the family <em>Enterobacteriaceae</em> are Gram-negative, oxidase-negative, facultatively anaerobic rods that ferment glucose. Accurate genus differentiation relies on IMViC (Indole, Methyl Red, Voges-Proskauer, Citrate) and TSI patterns:</p>",
      "keyPoints": [
        "E. coli is IMViC positive-positive-negative-negative (++--) with A/A + Gas on TSI.",
        "Enterobacter / Klebsiella is IMViC negative-negative-positive-positive (--++) with A/A on TSI.",
        "Salmonella exhibits K/A with abundant H2S blackening in butt and gas production.",
        "Proteus exhibits rapid urease production and swarming motility on nutrient agar."
      ],
      "diagram": "",
      "table": {
        "title": "Biochemical Profiles: IMViC and TSI Reactions of Major Enterobacteriaceae",
        "headers": [
          "Bacterial Genus / Species",
          "Indole",
          "Methyl Red",
          "Voges-Proskauer",
          "Citrate",
          "TSI Slant / Butt",
          "H2S Production",
          "Gas from Glucose"
        ],
        "rows": [
          [
            "Escherichia coli",
            "Positive (+)",
            "Positive (+)",
            "Negative (-)",
            "Negative (-)",
            "Acid / Acid (A/A, Yellow/Yellow)",
            "Negative (-)",
            "Abundant gas (++)"
          ],
          [
            "Klebsiella pneumoniae",
            "Negative (-)",
            "Negative (-)",
            "Positive (+)",
            "Positive (+)",
            "Acid / Acid (A/A, Mucoid yellow)",
            "Negative (-)",
            "Abundant gas (++)"
          ],
          [
            "Salmonella enterica",
            "Negative (-)",
            "Positive (+)",
            "Negative (-)",
            "Positive (+)",
            "Alkaline / Acid (K/A, Red/Yellow)",
            "Positive (+, Black butt)",
            "Positive (+)"
          ],
          [
            "Proteus vulgaris",
            "Positive (+)",
            "Positive (+)",
            "Negative (-)",
            "Variable (d)",
            "Alkaline or Acid / Acid (K or A/A)",
            "Positive (+++, Heavy black)",
            "Positive (+)"
          ],
          [
            "Proteus mirabilis",
            "Negative (-)",
            "Positive (+)",
            "Negative (-)",
            "Positive (+)",
            "Alkaline / Acid (K/A)",
            "Positive (+++, Heavy black)",
            "Positive (+)"
          ],
          [
            "Yersinia enterocolitica",
            "Variable (d)",
            "Positive (+)",
            "Negative (-)",
            "Negative (-)",
            "Acid / Acid (A/A, no gas)",
            "Negative (-)",
            "Negative (-)"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2022",
        "RAJUVAS 2023",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u1-q20",
      "type": "short",
      "marks": 5,
      "question": "Describe the pathogenesis, clinical manifestations, and serological diagnosis of Bovine Brucellosis.",
      "topicId": "u1-t26",
      "answer": "<p><strong>Bovine Brucellosis (Bang's Disease)</strong> is a classical contagious zoonotic infection caused predominantly by <strong>Brucella abortus</strong>.</p><p><strong>Pathogenesis:</strong> Ingestion of contaminated feed/water or licking aborted fetuses. Organisms penetrate pharyngeal/oral mucosa, engulfed by macrophages, and traffic to regional lymph nodes. As facultative intracellular pathogens, they evade phagolysosomal fusion via Type IV secretion system (VirB) and lipopolysaccharide O-chains. Bacteremic dissemination targets the gravid uterus, fetal membranes, and mammary glands due to high concentrations of <strong>erythritol</strong>, a four-carbon sugar alcohol synthesized by the bovine placenta that dramatically stimulates <em>Brucella</em> growth.</p><p><strong>Clinical Manifestations:</strong> Third-trimester abortion (between 6th to 8th month of gestation), retention of placenta, acute necrotic placentitis with 'Morocco-leather' thickened cotyledons, and subsequent chronic metritis leading to temporary or permanent infertility. In bulls: severe orchitis, epididymitis, and testicular atrophy.</p><p><strong>Serological Diagnosis:</strong></p><ol><li><strong>Rose Bengal Plate Test (RBPT):</strong> Rapid field herd-screening test using <em>B. abortus</em> antigen stained with Rose Bengal dye buffered at pH 3.65. Agglutination within 4 minutes indicates a reactor; the low pH blocks non-specific IgM agglutinins while permitting specific IgG1 binding.</li><li><strong>Standard Tube Agglutination Test (STAT):</strong> Quantitative serology using serial twofold serum dilutions; titers of $\\ge 80\\text{ IU/mL}$ (or $\\ge 1:40$ in vaccinated cattle) are diagnostic. Must be read past prozone effect.</li><li><strong>Milk Ring Test (MRT):</strong> Bulk milk screening test where hematoxylin-stained killed <em>B. abortus</em> cells agglutinate with colostral/milk antibodies, rising with fat globules to form a distinct deep blue/purple cream ring on top of white milk.</li><li><strong>Indirect & Competitive ELISA:</strong> Distinguishes natural infection antibodies from S19 vaccine strain antibodies.</li></ol>",
      "keyPoints": [
        "Etiology: Brucella abortus, facultative intracellular replication in macrophages.",
        "Tissue tropism: Placental erythritol stimulates explosive replication leading to 3rd-trimester abortion.",
        "Serology protocol: RBPT (buffered at pH 3.65 for screening) followed by STAT / ELISA for confirmation, and MRT for bulk milk herds."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "TANUVAS 2020",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u1-q21",
      "type": "long",
      "marks": 12,
      "question": "Write a comprehensive account of Bacillus anthracis under the following headings: (a) Morphology & Plasmids, (b) Pathogenesis & Virulence Factors, (c) Clinical Signs & Post-Mortem Hallmarks, (d) Laboratory Diagnosis, and (e) Prevention & Post-Mortem Precautions.",
      "topicId": "u1-t17",
      "answer": "<h3>(a) Morphology and Virulence Plasmids</h3><p><em>Bacillus anthracis</em> is a large, Gram-positive, non-motile, sporulating rod ($1.0\text{--}1.5\\ \\mu\\text{m} \\times 3.0\text{--}8.0\\ \\mu\\text{m}$), arranged in long chains ('bamboo stick' appearance). In clinical specimens, it is encapsulated with square ends (cut-glass appearance). Spores are central, oval, and do not cause sporangial swelling; spores <em>never form in living animal tissues or unopened intact carcasses</em> because spore formation mandates atmospheric oxygen ($\text{O}_2$).</p><p>Virulence is strictly governed by two essential, large virulence plasmids:</p><ul><li><strong>pXO1 (182 kb):</strong> Encodes the tripartite anthrax exotoxin complex: <em>Protective Antigen (PA, 83 kDa)</em>, <em>Edema Factor (EF, 89 kDa)</em>, and <em>Lethal Factor (LF, 90 kDa)</em>.</li><li><strong>pXO2 (96 kb):</strong> Encodes the <em>poly-D-glutamic acid capsule</em> (capB, capC, capA genes), which carries negative electrostatic charges that completely inhibit phagocytosis. Loss of either plasmid renders the strain non-pathogenic (e.g., Sterne vaccine strain lacks pXO2, retained pXO1).</li></ul><h3>(b) Pathogenesis and Toxin Mechanisms</h3><p>Endospores enter through ingestion (soil grazing), inhalation, or skin abrasions. Spores are taken up by tissue macrophages, germinate, and release vegetative bacilli that disseminate through lymphatics into bloodstream, producing catastrophic bacteremia and toxemia. The tripartite toxin operates synergistically:</p><ol><li><strong>Protective Antigen (PA):</strong> Binds to host cellular receptors (TEM8 / CMG2). Surface furin protease cleaves PA83 into PA63, which oligomerizes into a heptameric ring ('pre-pore').</li><li><strong>Edema Factor (EF):</strong> Calmodulin-dependent adenylate cyclase. EF binds to the PA pre-pore, enters cytosol via receptor-mediated endocytosis, and hyper-elevates intracellular cyclic AMP (cAMP), causing massive efflux of ions and water resulting in profound clinical edema.</li><li><strong>Lethal Factor (LF):</strong> Zinc metalloprotease that cleaves mitogen-activated protein kinase kinases (MAPKK/MEK), disabling cell signaling pathways, triggering macrophage apoptosis, massive release of TNF-$\\alpha$ and IL-1$\\beta$, and cardiovascular collapse.</li></ol><h3>(c) Clinical Signs & Post-Mortem Hallmarks</h3><p>In ruminants, peracute/acute forms dominate: sudden death, high fever (41.5°C), severe dyspnea, and terminal convulsions.</p><p><strong>Pathognomonic Post-Mortem Signs:</strong></p><ul><li>Incomplete or completely absent rigor mortis.</li><li>Dark, tarry, uncoagulated blood oozing from all natural body orifices (mouth, nostrils, anus, vulva).</li><li>Rapid, marked post-mortem gaseous tympany and decomposition.</li><li>Enormous, dark-red, liquefied 'raspberry jam' splenomegaly.</li></ul><h3>(d) Comprehensive Laboratory Diagnosis Flowchart</h3><ol><li><strong>Specimen Collection:</strong> Peripheral blood smear from the tip of the ear or tail vein. <em>Opening of an anthrax-suspected carcass is strictly prohibited</em> to avoid vegetative cell sporulation.</li><li><strong>Direct Microscopy:</strong><ul><li><em>M'Fadyean Reaction:</em> Polychrome methylene blue stain demonstrates blue rods enclosed in an amorphous purplish-pink poly-D-glutamic acid capsule.</li><li><em>Gram Stain:</em> Gram-positive large rods with square ends in chains.</li></ul></li><li><strong>Cultural Characteristics:</strong> Inoculation on 5% sheep blood agar: non-hemolytic (or very weakly $\\gamma$-hemolytic), rough, flat, opaque grayish-white colonies with irregular curled margins resembling a <strong>Medusa head</strong>. In nutrient agar deep stabs: <strong>inverted fir-tree appearance</strong>.</li><li><strong>Ascoli's Thermo-Precipitation Test:</strong> Ring precipitation test using boiled carcass tissue extract layered over hyperimmune anthrax antiserum; formation of a white precipitin ring at the meniscus within 15 minutes confirms anthrax antigens even in putrefied tissues.</li><li><strong>Confirmatory Tests:</strong> Gamma bacteriophage susceptibility (clear plaque lysis) and PCR targeting PA gene (pXO1) and cap gene (pXO2).</li></ol><h3>(e) Prevention, Biosecurity, and Precautions</h3><ul><li><em>Carcass Disposal:</em> Strict carcass burial at least 2 meters deep with quicklime ($\text{CaO}$) or complete incineration. Contaminated soil disinfected with 10% formalin or 5% sodium hydroxide.</li><li><em>Vaccination:</em> Annual subcutaneous immunization using <strong>Sterne 34F2 live spore vaccine</strong> (avirulent non-capsulated strain $\text{pXO1}^+\\text{pXO2}^-$) in endemic pastoral zones, 1 month before summer grazing.</li></ul>",
      "keyPoints": [
        "Morphology: Square-ended chains with poly-D-glutamic acid capsule; spores central and require O2 to form.",
        "Plasmids: pXO1 encodes tripartite toxins (PA, EF, LF); pXO2 encodes antiphagocytic capsule.",
        "Tripartite toxin action: PA heptamer pore transports EF (adenylate cyclase raising cAMP => edema) and LF (metalloprotease cleaving MAPKK => necrosis/shock).",
        "Post-mortem hallmarks: Lack of rigor mortis, dark uncoagulated tarry blood discharge from orifices, massive soft 'blackberry jam' spleen. NEVER open carcass.",
        "Diagnosis: M'Fadyean capsular reaction, Medusa-head non-hemolytic colonies, inverted fir-tree gelatin stab, Ascoli thermoprecipitation test."
      ],
      "diagram": "Spores -> Macrophage -> Vegetative rods -> Toxin assembly: PA + EF (Edema) & PA + LF (Lethality/Shock) -> Death",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u1-q22",
      "type": "long",
      "marks": 12,
      "question": "Discuss Pasteurella multocida and Hemorrhagic Septicemia (HS) in cattle and buffaloes with respect to: (a) Serological Classification, (b) Pathogenesis of HS & Shipping Fever, (c) Lesions, (d) Laboratory Diagnosis, and (e) Vaccines.",
      "topicId": "u1-t24",
      "answer": "<h3>(a) Serological Classification</h3><p><em>Pasteurella multocida</em> is classified into distinct serological types based on two major surface antigen systems:</p><ul><li><strong>Capsular Serogroups (Carter's Indirect Hemagglutination System):</strong> Five groups based on acidic capsular polysaccharides:<ul><li><em>Serogroup A:</em> Hyaluronic acid capsule; causes Avian Cholera and Bovine Pneumonic Pasteurellosis (Shipping fever).</li><li><em>Serogroup B:</em> Dominant Asian serogroup causing <strong>Hemorrhagic Septicemia (HS)</strong> in cattle and Asian water buffaloes.</li><li><em>Serogroup D:</em> Heparin-like capsule; causes Atrophic Rhinitis in swine and snuffles in rabbits.</li><li><em>Serogroup E:</em> African serogroup causing Hemorrhagic Septicemia in cattle.</li><li><em>Serogroup F:</em> Chondroitin sulfate capsule; turkeys.</li></ul></li><li><strong>Somatic Serotypes (Heddleston's Gel Diffusion Precipitin System):</strong> 16 lipopolysaccharide (LPS) serotypes designated 1 to 16. The classical Asian HS strain is <strong>Carter B : Heddleston 2 (B:2)</strong>, while the African HS strain is <strong>E:2</strong>.</li></ul><h3>(b) Pathogenesis of HS and Shipping Fever</h3><p><em>P. multocida</em> B:2 normally resides as a commensal inhabitant in the upper respiratory tract and nasopharynx of healthy carrier animals (carrier rate 3–5%).</p><ol><li><strong>Predisposing Trigger:</strong> High humidity, monsoon rains, poor nutrition, overcrowding, and strenuous draught work depress mucosal immunity.</li><li><strong>Multiplication & Invasion:</strong> Bacteria rapidly proliferate in the nasopharynx, downregulate ciliary clearance, and breach mucosal barriers into the submucosa.</li><li><strong>Virulence Mediators:</strong> Thick polysaccharide capsule prevents phagocytic engulfment; lipopolysaccharide (LPS) activates endotoxemia; sialidases and outer membrane proteins (OmpA, OmpH) facilitate tissue adherence and vascular endothelial damage.</li><li><strong>Catastrophic Septicemia:</strong> Explosive intravascular multiplication releases massive quantities of endotoxin, inducing widespread capillary permeability, diffuse petechial hemorrhages, intravascular coagulation, and rapid hypovolemic/endotoxic shock. In <em>Shipping Fever</em> (associated with <em>Mannheimia haemolytica</em> serotype A1 and <em>P. multocida</em> A), viral pre-infections (IBR, PI-3) clear the pathway for severe fibrinous pleuropneumonia.</li></ol><h3>(c) Clinical Signs & Necropsy Pathology</h3><ul><li><strong>Clinical Picture:</strong> Sudden onset of high fever (41–42°C), severe depression, profuse salivation, lacrimation, and rapid development of hot, painful, inflammatory subcutaneous edema localized in the submandibular region, extending down the brisket and neck. Animals exhibit severe respiratory distress with stertorous breathing and open-mouth panting, dying within 12–36 hours. Buffaloes are significantly more susceptible than cattle.</li><li><strong>Gross Lesions:</strong> Massive yellow gelatinous edema in the subcutaneous connective tissue of the throat, dewlap, and brisket. Generalized subserosal petechial and ecchymotic hemorrhages across epicardium, pleura, and endocardium. Severe blood-tinged serofibrinous thoracic and pericardial effusions.</li></ul><h3>(d) Laboratory Diagnosis</h3><ol><li><strong>Direct Staining:</strong> Blood smears or edematous fluid stained with Leishman, Wright, or Giemsa stains reveal pathognomonic <strong>bipolar staining ('safety-pin appearance')</strong>: small Gram-negative coccobacilli with darker colored poles and a lighter, unstained central area.</li><li><strong>Cultural Examination:</strong> Inoculation on 5% sheep blood agar: non-hemolytic, small, smooth, grayish, glistening circular colonies with a characteristic sweetish <strong>musty / sperm-like odor</strong>. <em>Does not grow on MacConkey agar</em> (critical diagnostic criterion differentiating it from <em>Mannheimia haemolytica</em>).</li><li><strong>Biochemical Profile:</strong> Oxidase-positive, catalase-positive, Indole-positive, and ferment glucose, sucrose, and mannitol with acid only (no gas).</li><li><strong>Molecular Confirmation:</strong> Species-specific PCR targeting the <em>kmt1</em> gene (460 bp product) and HS-specific multiplex PCR targeting the B:2 specific sequence (KTSP61/KTT2 primers, 560 bp).</li></ol><h3>(e) Immunoprophylaxis and Control</h3><ul><li><strong>Alum-Precipitated HS Vaccine:</strong> Traditional bacterin providing 4–6 months immunity, administered before monsoon onset.</li><li><strong>Oil-Adjuvant HS Vaccine (IVRI):</strong> Formalin-killed bacterin blended in mineral oil and lanolin; confers robust protective immunity for 10–12 months. Single annual intramuscular dose ($2\text{ mL}$) mandatory in endemic zones.</li></ul>",
      "keyPoints": [
        "Classification: Carter capsular groups A to F; Heddleston somatic 1 to 16. Asian HS is B:2; African HS is E:2.",
        "Pathogenesis: Stress/monsoon triggers carrier commensal replication -> septicemia -> massive endotoxemia and vascular leak.",
        "Hallmarks: Submandibular and brisket gelatinous edema, stertorous breathing; buffaloes highly susceptible.",
        "Diagnosis: Bipolar 'safety-pin' staining with Giemsa/Leishman; grows on blood agar with musty odor; NO growth on MacConkey.",
        "Vaccines: Oil-adjuvant vaccine gives 10-12 months protection; alum-precipitated vaccine provides 4-6 months."
      ],
      "diagram": "Stress/Rain -> Carrier nasopharynx -> Bacteremic invasion -> Gelatinous brisket edema + Endotoxic shock",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u1-q23",
      "type": "long",
      "marks": 12,
      "question": "Compare and contrast Tetanus (Clostridium tetani) and Botulism (Clostridium botulinum) with respect to: (a) Morphological Characteristics, (b) Molecular Mechanism of Neurotoxin Action, (c) Pathogenesis & Clinical Manifestations, (d) Laboratory Diagnosis, and (e) Treatment & Immunoprophylaxis.",
      "topicId": "u1-t19",
      "answer": "<p>Clostridial neurotoxicoses represent the two most devastating neurological bacterial intoxications in veterinary medicine, mediated by the most lethal biological toxins known to science.</p><h3>(a) Comparative Morphology & Spore Characteristics</h3><p>Both organisms are Gram-positive, strictly anaerobic, motile sporulating rods, but exhibit distinctly different spore architectures:</p><ul><li><strong>Clostridium tetani:</strong> Slender, long rod with round, terminal spore that distends the vegetative cell wall, giving the classic <strong>'drumstick' or 'squash racket' appearance</strong>. Highly motile with peritrichous flagella, forming thin rhizoid swarming films over anaerobic blood agar.</li><li><strong>Clostridium botulinum:</strong> Straight to slightly curved large rod with oval, sub-terminal spore that causes slight sporangial swelling. Types A, B, C, D, E, F, and G based on neurotoxin serotype (Types C and D cause forage poisoning and loin disease in animals).</li></ul><h3>(b) Molecular Mechanism of Neurotoxin Action</h3><p>Both <strong>Tetanospasmin (TeNT)</strong> and <strong>Botulinum Neurotoxin (BoNT)</strong> are synthesized as 150 kDa inactive single-chain polypeptides cleaved by proteases into an active dichain: a Heavy Chain (100 kDa) and a Light Chain (50 kDa) linked by a single critical disulfide bond.</p>",
      "keyPoints": [
        "Morphology: C. tetani has round terminal spore ('drumstick'); C. botulinum has oval sub-terminal spore.",
        "TeNT mechanism: Retrograde axonal transport to spinal inhibitory Renshaw interneurons -> cleaves synaptobrevin -> blocks GABA/glycine -> rigid spastic paralysis.",
        "BoNT mechanism: Acts locally at neuromuscular junctions -> cleaves SNARE proteins (SNAP-25/syntaxin) -> blocks acetylcholine -> flaccid motor paralysis.",
        "Clinical contrast: Tetanus = hyperreflexia, locked jaw, risus sardonicus, saw-horse posture. Botulism = progressive ascending motor paralysis, limberneck, tongue protrusion.",
        "Tetanus control: Tetanus toxoid and antitoxin. Botulism control: Carcass clearance, mineral supplementation, bivalent C/D toxoid."
      ],
      "diagram": "TeNT: Motor axon -> Retrograde to CNS -> Blocks GABA/Glycine -> Spastic Paralysis\nBoNT: Ingestion -> Circulation -> Peripheral NMJ -> Blocks Acetylcholine -> Flaccid Paralysis",
      "table": {
        "title": "Comprehensive Comparison: Tetanus vs Botulism",
        "headers": [
          "Feature / Dimension",
          "Tetanus (Clostridium tetani)",
          "Botulism (Clostridium botulinum)"
        ],
        "rows": [
          [
            "Mode of Acquisition",
            "Wound contamination (puncture, castration, tail docking, umbilical stump)",
            "Ingestion of preformed toxin in decaying carcasses, contaminated silage/forage"
          ],
          [
            "Site of Toxin Action",
            "Central Nervous System (spinal cord Renshaw cells and brainstem)",
            "Peripheral cholinergic neuromuscular junctions and autonomic synapses"
          ],
          [
            "Axonal Transport",
            "Retrograde intra-axonal transport from peripheral nerve to CNS motor neuron soma",
            "No retrograde transport; acts directly at the peripheral nerve terminal"
          ],
          [
            "Target Molecular Substrate",
            "Cleaves VAMP / Synaptobrevin (SNARE complex) in inhibitory interneurons",
            "Cleaves SNAP-25, Syntaxin, or Synaptobrevin at presynaptic membrane"
          ],
          [
            "Neurotransmitter Blocked",
            "Inhibitory neurotransmitters: Glycine and GABA ($\\gamma$-aminobutyric acid)",
            "Excitatory neurotransmitter: Acetylcholine (ACh)"
          ],
          [
            "Type of Paralysis",
            "<strong>Rigid, Spastic Paralysis</strong> (uncontrolled continuous motor firing)",
            "<strong>Flaccid, Atonic Paralysis</strong> (loss of muscle tone and contractility)"
          ],
          [
            "Clinical Hallmarks",
            "Trismus (lockjaw), risus sardonicus, prolapse of third eyelid, saw-horse stance",
            "Ascending weakness, downer cow, tongue protrusion, limberneck in fowl"
          ],
          [
            "Cause of Death",
            "Exhaustion, hyperthermia, and asphyxiation due to rigid spasm of diaphragmatic muscles",
            "Respiratory failure due to flaccid paralysis of intercostal and diaphragmatic muscles"
          ],
          [
            "Species Susceptibility",
            "Horses > Humans > Sheep/Goats > Cattle > Swine > Dogs (Cats/Birds resistant)",
            "Horses, Waterfowl (Limberneck), Cattle (Forage poisoning) > Sheep > Dogs"
          ],
          [
            "Therapy & Prevention",
            "Tetanus antitoxin (TAT) + Penicillin + Muscle relaxants + Tetanus Toxoid",
            "Polyvalent antitoxin + Purgatives + Types C/D Toxoid vaccine"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2020",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u1-q24",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive essay on Bovine Mastitis under the following heads: (a) Major Bacterial Pathogens (Contagious vs Environmental), (b) Pathogenesis and Leukocytic Response, (c) California Mastitis Test (CMT) & Somatic Cell Count (SCC), (d) Laboratory Isolation Protocol, and (e) Prevention and Control.",
      "topicId": "u1-t13",
      "answer": "<h3>(a) Etiological Classification of Mastitis Pathogens</h3><p>Bovine mastitis (inflammation of the mammary gland parenchyma) is classified into two major epidemiological categories:</p><ul><li><strong>1. Contagious Pathogens:</strong> Primary reservoir is the infected bovine mammary gland and teat skin; transmitted from cow to cow during milking via contaminated milkers' hands, teat cup liners, and udder cloths.<ul><li><em>Staphylococcus aureus:</em> Alpha/beta toxins, protein A, biofilm formation; causes chronic subclinical mastitis with deep-seated parenchymal micro-abscesses and fibrous scarring.</li><li><em>Streptococcus agalactiae:</em> Highly contagious, obligate udder parasite; CAMP-positive; colonizes teat canal and milk ducts, causing chronic catarrhal galactophoritis.</li><li><em>Mycoplasma bovis:</em> Highly contagious, causes purulent mastitis involving multiple quarters, unresponsive to $\\beta$-lactams.</li></ul></li><li><strong>2. Environmental Pathogens:</strong> Reservoirs are housing bedding, feces, soil, and mud; enter the relaxed teat sphincter between milkings.<ul><li><em>Coliforms (Escherichia coli, Klebsiella pneumoniae):</em> Release massive endotoxin (LPS) producing peracute toxemic mastitis with severe systemic signs.</li><li><em>Streptococcus uberis & Streptococcus dysgalactiae:</em> Hydrolyze esculin; cause both clinical and subclinical environmental mastitis.</li><li><em>Pseudomonas aeruginosa</em> and <em>Trueperella pyogenes</em> (Summer mastitis with thick, foul-smelling purulent exudate).</li></ul></li></ul><h3>(b) Pathogenesis and Leukocytic Response</h3><ol><li><strong>Invasion:</strong> Microbes breach teat duct keratin barrier (rich in esterified fatty acids) following milking when the teat canal sphincter remains dilated for 1–2 hours.</li><li><strong>Establishment:</strong> Organisms adhere to mammary epithelial cells and milk duct lining using adhesins and fibronectin-binding proteins.</li><li><strong>Inflammatory Cascades:</strong> Bacterial toxins damage alveolar secretory epithelium, triggering release of chemoattractants (IL-8, TNF-$\\alpha$, leukotriene B4). Blood-milk barrier permeability increases, allowing massive influx of polymorphonuclear neutrophils (PMNs) from systemic circulation.</li><li><strong>Milk Alterations:</strong> Damaged tight junctions cause leakage of blood components (sodium, chloride, serum albumin) into milk, while potassium and lactose decrease. Somatic Cell Count (SCC) elevates exponentially from normal ($< 200{,}000\\text{ cells/mL}$) to millions.</li></ol><h3>(c) California Mastitis Test (CMT) and Somatic Cell Count</h3><ul><li><strong>CMT Principle:</strong> CMT reagent contains an anionic surfactant (3% Sodium Lauryl Sulfate) and a pH indicator (Bromocresol purple). The detergent lyses somatic cell membranes, releasing high-molecular-weight genomic DNA. Uncoiled DNA strands cross-link to form a distinctive gelatinous slime/viscous gel directly proportional to somatic cell concentration.</li><li><strong>CMT Scoring:</strong><ul><li><em>Negative (-):</em> No slime formation; SCC $< 200{,}000\\text{ cells/mL}$.</li><li><em>Trace (T):</em> Slight slime visible on tip-tilting; SCC $200{,}000\text{--}400{,}000\\text{ cells/mL}$.</li><li><em>1+ (Positive):</em> Distinct slime but no gel formation; SCC $400{,}000\text{--}1{,}200{,}000\\text{ cells/mL}$.</li><li><em>2+ (Positive):</em> Viscous gel thickening immediately in the center; SCC $1{,}200{,}000\text{--}5{,}000{,}000\\text{ cells/mL}$.</li><li><em>3+ (Strong Positive):</em> Heavy convex gel forming a central peak; SCC $> 5{,}000{,}000\\text{ cells/mL}$. Bromocresol color shift from yellow (acidic) to deep purple reflects alkaline pH ($> 6.8$) typical of mastitic milk.</li></ul></li></ul><h3>(d) Laboratory Isolation and Identification Protocol</h3><ol><li><strong>Aseptic Milk Sampling:</strong> Teat apex scrubbed with 70% ethanol; fore-milk discarded; mid-stream milk collected into sterile vials and shipped at 4°C.</li><li><strong>Primary Plating:</strong> Inoculate $0.01\\text{ mL}$ milk onto 5% Sheep Blood Agar and MacConkey Agar; incubate at 37°C for 24–48 hours.</li><li><strong>Identification:</strong><ul><li><em>Golden-yellow, double-zone hemolysis colonies:</em> Catalase-positive, tube coagulase-positive (rabbit plasma clotting) $\to$ <em>Staphylococcus aureus</em>.</li><li><em>Pinpoint $\\beta$-hemolytic colonies:</em> Catalase-negative, CAMP-positive $\to$ <em>Streptococcus agalactiae</em>.</li><li><em>Pink, mucoid lactose-fermenting colonies on MacConkey:</em> Oxidase-negative, IMViC ++-- $\to$ <em>Escherichia coli</em>.</li></ul></li><li><strong>Antimicrobial Susceptibility Testing:</strong> Direct disk diffusion on Mueller-Hinton agar according to CLSI guidelines.</li></ol><h3>(e) Five-Point Mastitis Control Plan</h3><ol><li>Post-milking teat disinfection (dipping in 0.5–1% iodophor with emollient).</li><li>Dry cow therapy (infusion of long-acting antibiotic intramammary formulations into all quarters at dry-off).</li><li>Proper maintenance and sanitization of milking machines (vacuum stability 42–48 kPa, pulsation ratio 60:40).</li><li>Prompt identification and treatment of clinical cases with targeted ABST-directed therapy.</li><li>Culling of chronic, incurable cows infected with <em>Staphylococcus aureus</em> or <em>Mycoplasma</em>.</li></ol>",
      "keyPoints": [
        "Contagious pathogens: S. aureus (coagulase+, micro-abscesses), S. agalactiae (CAMP+, obligate udder parasite), M. bovis.",
        "Environmental pathogens: E. coli (endotoxin shock), S. uberis, S. dysgalactiae, T. pyogenes.",
        "CMT mechanism: Alkyl aryl sulfonate detergent lyses somatic cells, releasing viscous DNA proportional to SCC.",
        "Laboratory diagnostic tree: Aseptic milk -> Blood agar + MacConkey -> Catalase/Coagulase/CAMP/IMViC -> CLSI ABST.",
        "Standard 5-point control program: Post-milking teat dipping, universal dry cow therapy, machine testing, rapid treatment, culling."
      ],
      "diagram": "Teat Canal breach -> Epithelial colonization -> Leukocytic influx (PMNs) -> Tissue fibrosis & Drop in milk quality",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u1-q25",
      "type": "long",
      "marks": 12,
      "question": "Provide an in-depth account of Bacterial Antimicrobial Resistance (AMR) in veterinary medicine: (a) Genetic Bases, (b) Biochemical Mechanisms of Resistance, (c) Extended-Spectrum Beta-Lactamases (ESBL) and Methicillin-Resistant Staphylococcus aureus (MRSA), (d) Kirby-Bauer Disk Diffusion Method, and (e) One Health Implications and Containment.",
      "topicId": "u1-t12",
      "answer": "<h3>(a) Genetic Bases of Antimicrobial Resistance</h3><p>Bacterial resistance to antimicrobial agents is broadly classified into:</p><ul><li><strong>Intrinsic (Inherent) Resistance:</strong> Natural structural or functional attribute shared by an entire bacterial genus or species (e.g., <em>Mycoplasma</em> lacking a peptidoglycan cell wall are intrinsically resistant to $\\beta$-lactams; Gram-negative outer membrane excludes glycopeptides like vancomycin; <em>Pseudomonas aeruginosa</em> low porin permeability).</li><li><strong>Acquired Resistance:</strong> Development of resistance by a previously susceptible bacterium via:<ul><li><em>Mutational Resistance:</em> Spontaneous chromosomal point mutations in target genes (e.g., <em>gyrA</em> or <em>parC</em> mutations conferring fluoroquinolone resistance; <em>rpoB</em> mutations for rifampicin).</li><li><em>Horizontal Gene Transfer (HGT):</em> Acquisition of exogenous resistance genes via conjugative plasmids (R-plasmids), transposons ('jumping genes'), integrons, and insertion sequences across species boundaries.</li></ul></li></ul><h3>(b) Biochemical Mechanisms of Resistance</h3><p>Bacteria exploit four primary biochemical pathways to neutralize antibiotics:</p><ol><li><strong>Enzymatic Inactivation or Destruction:</strong> Synthesis of specific enzymes that hydrolyze or modify the antimicrobial molecule:<ul><li><em>$\\beta$-Lactamases:</em> Hydrolyze the cyclic amide bond of the four-membered $\\beta$-lactam ring (penicillins, cephalosporins).</li><li><em>Aminoglycoside-Modifying Enzymes (AMEs):</em> Adenylyltransferases, acetyltransferases, and phosphotransferases that inactivate gentamycin and streptomycin.</li><li><em>Chloramphenicol acetyltransferase (CAT).</em></li></ul></li><li><strong>Target Modification or Protection:</strong> Structural mutation or chemical modification of the antibiotic binding target:<ul><li>Altered Penicillin-Binding Protein 2a (<strong>PBP2a</strong>) encoded by the <em>mecA</em> gene in MRSA, possessing extremely low binding affinity for all $\\beta$-lactams.</li><li>Ribosomal methylation by <em>erm</em> genes modifying 23S rRNA, conferring resistance to Macrolides, Lincosamides, and Streptogramin B ($\text{MLS}_B$ phenotype).</li></ul></li><li><strong>Efflux Pumps (Active Drug Extrusion):</strong> Membrane-spanning protein complexes that actively pump antibiotics out of the cytoplasm at the expense of ATP or proton-motive force (e.g., <em>TetA</em> efflux pumps expelling tetracyclines; RND superfamily pumps in <em>Pseudomonas</em>).</li><li><strong>Decreased Membrane Permeability:</strong> Downregulation or loss of outer membrane porin channels (e.g., OprD loss in <em>Pseudomonas</em>), restricting hydrophilic antibiotic entry.</li></ol><h3>(c) High-Priority Resistant Pathogens: ESBL and MRSA</h3><ul><li><strong>Extended-Spectrum $\\beta$-Lactamases (ESBLs):</strong> Plasmid-encoded enzymes (TEM, SHV, CTX-M families) predominantly found in <em>Escherichia coli</em> and <em>Klebsiella pneumoniae</em> that hydrolyze first-, second-, and third-generation cephalosporins (ceftiofur, cefotaxime, ceftriaxone) and monobactams, but are inhibited by clavulanic acid. CTX-M-15 is widespread in dairy calves and canine companion animals.</li><li><strong>Methicillin-Resistant Staphylococcus aureus (MRSA):</strong> Strains carrying the mobile genetic element <strong>Staphylococcal Cassette Chromosome mec (SCCmec)</strong> harboring the <em>mecA</em> or <em>mecC</em> gene. Encodes PBP2a, rendering the organism resistant to all $\\beta$-lactam antibiotics (penicillins, ampicillin, cloxacillin, cephalosporins). <em>Staphylococcus pseudintermedius</em> (MRSP) is a major counterpart in canine pyoderma.</li></ul><h3>(d) Standard Kirby-Bauer Agar Disk Diffusion Procedure (CLSI)</h3><ol><li><strong>Medium:</strong> Mueller-Hinton Agar (MHA) prepared at a uniform depth of <strong>$4\\text{ mm}$</strong> (approx. 25 mL in 90 mm petri dish) with a pH between 7.2 and 7.4.</li><li><strong>Inoculum Standardization:</strong> 3–5 isolated colonies suspended in sterile saline or broth and adjusted turbidimetrically to equal the <strong>0.5 McFarland Standard</strong> ($1.5 \\times 10^8\\text{ CFU/mL}$).</li><li><strong>Inoculation:</strong> A sterile cotton swab dipped into the standardized suspension is streaked evenly in three planes over the entire MHA surface to obtain a uniform confluent lawn.</li><li><strong>Disk Application:</strong> Antimicrobial discs placed using sterile forceps or multi-disk dispensers ($15\\text{ mm}$ apart, at least $24\\text{ mm}$ center-to-center). Invert plates and incubate at <strong>$35\\pm 2^\\circ\\text{C}$ for 16–18 hours</strong>.</li><li><strong>Measurement:</strong> Zones of complete growth inhibition measured in millimeters using a caliper, compared against Clinical and Laboratory Standards Institute (CLSI M31-A4 / VET01) interpretive breakpoint tables to report: <em>Susceptible (S)</em>, <em>Intermediate (I)</em>, or <em>Resistant (R)</em>.</li></ol><h3>(e) One Health Dimensions & Containment</h3><p>Agricultural misuse of critically important antimicrobials (CIAs) for growth promotion and metaphylaxis selects for resistant commensals that transfer resistance determinants to human zoonotic pathogens via food chain (milk, meat), slurry runoff, and direct animal contact. Containment mandates strict veterinary prescription oversight, complete prohibition of prophylactic growth promoters (e.g., colistin, fluoroquinolones), active AMR surveillance programs (ICAR-INFAAR network in India), and rapid molecular diagnostics.</p>",
      "keyPoints": [
        "Genetic mechanisms: Intrinsic vs acquired (mutations in gyrA/rpoB, horizontal gene transfer via R-plasmids/transposons).",
        "Four biochemical pathways: Inactivating enzymes (beta-lactamases), target alteration (PBP2a via mecA in MRSA), efflux pumps (TetA), reduced porin permeability.",
        "ESBL & MRSA: Plasmid-mediated CTX-M hydrolyzing 3rd-gen cephalosporins; SCCmec conferring PBP2a beta-lactam insensitivity.",
        "Kirby-Bauer CLSI protocol: MHA (4 mm depth, pH 7.2-7.4), 0.5 McFarland inoculum, 16-18 hr at 35C, zone measurement against CLSI VET01 standards.",
        "One Health strategy: Banning colistin/quinolone growth promoters, veterinary prescription enforcement, ICAR-INFAAR surveillance."
      ],
      "diagram": "Target modification (mecA) | Inactivation (beta-lactamase) | Efflux pump (TetA) | Reduced Porins",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "WBUAFS 2021"
      ]
    }
  ],
  "unit-2": [
    {
      "id": "u2-q01",
      "type": "define",
      "marks": 2,
      "question": "Define Dimorphic Fungi and state the environmental and host morphological forms.",
      "topicId": "u2-t01",
      "answer": "<p><strong>Dimorphic Fungi</strong> are thermally dimorphic fungal pathogens capable of existing in two distinct morphological phenotypes depending strictly on environmental temperature:</p><ul><li><strong>Saprophytic / Mold Phase ($25^\\circ\\text{C}$):</strong> Characterized by multicellular, branching septate hyphae bearing infectious spores (conidia), prevailing in ambient soil and natural vegetation.</li><li><strong>Parasitic / Yeast Phase ($37^\\circ\\text{C}$):</strong> Characterized by unicellular, budding yeast cells (or endosporulating spherules in <em>Coccidioides</em>), prevailing in infected animal host tissues. <strong>Veterinary Examples:</strong> <em>Histoplasma capsulatum</em>, <em>Blastomyces dermatitidis</em>, <em>Sporothrix schenckii</em>.</li></ul>",
      "keyPoints": [
        "Thermal dimorphism: Multicellular mycelial mold phase at 25C; unicellular yeast/spherule phase at 37C in host tissue.",
        "Classic veterinary examples: Histoplasma capsulatum, Blastomyces dermatitidis, Sporothrix schenckii."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "GADVASU 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u2-q02",
      "type": "define",
      "marks": 2,
      "question": "Define Ergosterol and explain the mechanism of Polyene and Azole antifungals.",
      "topicId": "u2-t01",
      "answer": "<p><strong>Ergosterol</strong> is the primary, essential sterol constituent of the fungal cytoplasmic membrane, serving the analogous structural and fluidity-regulating role that cholesterol plays in mammalian membranes.</p><p><strong>Antifungal Mechanisms:</strong></p><ul><li><em>Polyenes (Amphotericin B, Nystatin):</em> Bind irreversibly to membrane ergosterol, creating transmembrane transmembrane aqueous pores that leak intracellular potassium ($\\text{K}^+$) and essential ions, causing rapid osmotic lysis.</li><li><em>Azoles (Ketoconazole, Itraconazole):</em> Competitively inhibit the fungal cytochrome P450 enzyme <strong>$14\\alpha$-demethylase</strong> (encoded by <em>CYP51</em>), halting the conversion of lanosterol to ergosterol and causing accumulation of toxic methylated sterols.</li></ul>",
      "keyPoints": [
        "Ergosterol is the vital sterol regulating fungal cytoplasmic membrane fluidity and permeability.",
        "Polyenes bind ergosterol to create lethal membrane pores; Azoles inhibit 14-alpha-demethylase to block ergosterol synthesis."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "LUVAS 2021",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u2-q03",
      "type": "define",
      "marks": 2,
      "question": "Define Dermatophytes and explain Keratinophilic activity.",
      "topicId": "u2-t05",
      "answer": "<p><strong>Dermatophytes</strong> are a specialized group of taxonomically related, keratinophilic molds belonging to the genera <em>Microsporum</em>, <em>Trichophyton</em>, and <em>Epidermophyton</em> that infect keratinized epidermal cornified structures (stratum corneum of skin, hair shafts, feathers, and claws) causing <em>ringworm</em> (dermatophytosis).</p><p><strong>Keratinophilic Activity:</strong> They produce extracellular <strong>keratinases (sulfite reductases and endoproteases)</strong> that cleave the rigid disulfide (-S-S-) bonds of structural keratin into assimilable peptides. They remain strictly confined to non-viable cornified layers and do not invade living deep dermis due to serum inhibitory factors (transferrin) and host body temperature.</p>",
      "keyPoints": [
        "Specialized fungi of genera Microsporum, Trichophyton, and Epidermophyton invading keratinized structures.",
        "Keratinases cleave disulfide bonds to degrade hair, skin, and claws; restricted to non-living cornified layers."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "WBUAFS 2022",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u2-q04",
      "type": "define",
      "marks": 2,
      "question": "Define the Germ Tube (Reynolds-Braude Phenomenon) and state its diagnostic utility.",
      "topicId": "u2-t03",
      "answer": "<p>The <strong>Germ Tube (Reynolds-Braude Phenomenon)</strong> is the rapid emergence of a slender, tube-like hyphal outgrowth directly from the yeast blastoconidium cell wall without any constriction or pinch at the point of origin, observed within <strong>2 to 3 hours</strong> of incubation in mammalian serum (fetal bovine or sheep serum) at $37^\\circ\\text{C}$.</p><p><strong>Diagnostic Utility:</strong> It provides a definitive, rapid, presumptive diagnostic test specifically differentiating pathogenic <strong>Candida albicans</strong> and <em>Candida dubliniensis</em> from all other non-albicans <em>Candida</em> species (which remain in blastoconidial yeast form).</p>",
      "keyPoints": [
        "Continuous hyphal extension from yeast cell without constriction at the base within 2-3 hours at 37C in serum.",
        "Specific rapid identification test distinguishing Candida albicans from non-albicans Candida species."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2020",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u2-q05",
      "type": "define",
      "marks": 2,
      "question": "Define Chlamydospores and describe their formation in Candida albicans.",
      "topicId": "u2-t02",
      "answer": "<p>A <strong>Chlamydospore (Chlamydoconidium)</strong> is a thick-walled, large, refringent, non-deciduous asexual resting spore formed by rounding off and swelling of a terminal or intercalary hyphal cell, designed for long-term survival under unfavorable environmental conditions.</p><p><strong>Formation in C. albicans:</strong> When cultured on nutritionally deficient, microaerophilic media (such as <strong>Cornmeal Agar with 1% Tween-80</strong>) at $25^\\circ\\text{C}$ for 24–48 hours, <em>Candida albicans</em> develops characteristic large, spherical, thick-walled, single or clustered terminal chlamydospores supported by pseudohyphae, serving as an absolute confirmatory taxonomic hallmark.</p>",
      "keyPoints": [
        "Thick-walled, highly resistant asexual resting spore produced within or at the tip of hyphae.",
        "Diagnostic hallmark of Candida albicans formed on Cornmeal Agar with Tween-80 at 25C."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2021",
        "KVAFSU 2020",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u2-q06",
      "type": "define",
      "marks": 2,
      "question": "Define Sabouraud Dextrose Agar (SDA) and state the role of Chloramphenicol and Cycloheximide.",
      "topicId": "u2-t01",
      "answer": "<p><strong>Sabouraud Dextrose Agar (SDA / Sabouraud's Agar)</strong> is the standard basal mycological culture medium formulated by Raymond Sabouraud (1894), containing 4% dextrose (energy source), 1% mycological peptone (nitrogen source), and 1.5% agar, with an adjusted acidic pH of <strong>5.4 to 5.6</strong> to inhibit bacterial growth while supporting fungal proliferation.</p><p><strong>Selective Additives:</strong></p><ul><li><em>Chloramphenicol ($0.05\\text{ g/L}$):</em> Broad-spectrum, heat-stable antibacterial antibiotic that suppresses rapidly multiplying bacterial contaminants from skin scrapings.</li><li><em>Cycloheximide / Actidione ($0.5\\text{ g/L}$):</em> Antifungal agent that selectively suppresses saprophytic environmental molds (e.g., <em>Mucor</em>, <em>Rhizopus</em>, <em>Penicillium</em>) while permitting slow-growing pathogenic dermatophytes to emerge.</li></ul>",
      "keyPoints": [
        "Acidic medium (pH 5.4-5.6) with 4% dextrose and 1% peptone for fungal isolation.",
        "Chloramphenicol inhibits bacterial contaminants; Cycloheximide (Actidione) suppresses saprophytic airborne molds."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "LUVAS 2023",
        "GADVASU 2022",
        "IVRI 2021"
      ]
    },
    {
      "id": "u2-q07",
      "type": "define",
      "marks": 2,
      "question": "Explain the diagnostic mechanism of Dermatophyte Test Medium (DTM).",
      "topicId": "u2-t05",
      "answer": "<p><strong>Dermatophyte Test Medium (DTM)</strong> is a specialized, differential and selective screening medium for clinical veterinary dermatophytosis, containing peptones, dextrose, cycloheximide, gentamicin, chlortetracycline, and <strong>phenol red</strong> as a pH indicator.</p><p><strong>Mechanism of Color Shift:</strong> Pathogenic dermatophytes (<em>Microsporum</em>, <em>Trichophyton</em>) preferentially utilize <strong>peptones / proteins first</strong> as an energy source, releasing alkaline by-products (ammonia and amine compounds) that shift the medium pH from an initial acidic 5.5 to alkaline ($> 6.8$), triggering the phenol red to turn from <strong>amber/yellow to bright red</strong> within 3 to 7 days, coinciding with early white/buff colony growth. In contrast, contaminating saprophytic molds utilize carbohydrates first, turning the medium red only after prolonged incubation.</p>",
      "keyPoints": [
        "Selective medium with antibiotics and phenol red pH indicator for rapid ringworm screening.",
        "Dermatophytes utilize proteins first, releasing alkaline ammonia which turns medium from yellow to bright red in 3-7 days."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "DUVASU 2023",
        "MAFSU 2022"
      ]
    },
    {
      "id": "u2-q08",
      "type": "define",
      "marks": 2,
      "question": "Define Wood's Lamp Examination and state the chemical cause of fluorescence in Ringworm.",
      "topicId": "u2-t05",
      "answer": "<p><strong>Wood's Lamp Examination</strong> is an ante-mortem diagnostic screening tool using a low-pressure mercury arc lamp fitted with a nickel oxide-barium silicate filter (Wood's glass) that emits long-wave ultraviolet radiation (UV-A, wavelength <strong>320–400 nm</strong>, peak at 365 nm).</p><p><strong>Mechanism & Fluorescence:</strong> When directed onto hairs in a darkened room, approximately 50% of <em>Microsporum canis</em> (and <em>M. audouinii</em>) infections emit a characteristic <strong>brilliant apple-green (yellow-green) fluorescence</strong>. This fluorescence is caused by <strong>pteridine</strong>, a metabolic chemical metabolite produced by the fungal mycelium inside actively parasitized hair shafts. <em>Trichophyton</em> species do not fluoresce under Wood's lamp.</p>",
      "keyPoints": [
        "Screening tool emitting UV-A light (peak 365 nm) through nickel oxide filter in a dark room.",
        "Apple-green fluorescence in ~50% of Microsporum canis hairs caused by pteridine metabolite; Trichophyton does not fluoresce."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2021",
        "WBUAFS 2020",
        "IVRI 2019"
      ]
    },
    {
      "id": "u2-q09",
      "type": "define",
      "marks": 2,
      "question": "Define Aflatoxicosis and name the most hepatotoxic aflatoxin metabolite.",
      "topicId": "u2-t10",
      "answer": "<p><strong>Aflatoxicosis</strong> is an acute or chronic, non-contagious intoxication of livestock, poultry, and humans resulting from the ingestion of feed or grain contaminated with toxic secondary metabolites (aflatoxins) produced predominantly by <strong>Aspergillus flavus</strong> and <strong>Aspergillus parasiticus</strong>.</p><p><strong>Most Toxic Metabolite:</strong> <strong>Aflatoxin $\\text{B}_1$ ($\\text{AFB}_1$)</strong> is the most potent, prevalent, and carcinogenic naturally occurring mycotoxin. In the hepatic endoplasmic reticulum, cytochrome P450 monooxygenases (CYP1A2/CYP3A4) bioactivate $\\text{AFB}_1$ into a reactive electrophilic intermediate, <strong>aflatoxin $\\text{B}_1$-8,9-epoxide</strong>, which covalently intercalates with guanine residues in DNA (forming $\\text{AFB}_1$-N7-guanine adducts), inducing transversion mutations ($G \\to T$) in the <em>p53</em> tumor suppressor gene, acute centrilobular hepatic necrosis, and hepatocellular carcinoma.</p>",
      "keyPoints": [
        "Mycotoxicosis caused by secondary metabolites of Aspergillus flavus and Aspergillus parasiticus on feed.",
        "Aflatoxin B1 is the most potent natural hepatocarcinogen, forming AFB1-8,9-epoxide DNA adducts causing p53 mutations."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2021",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u2-q10",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Eumycetoma and Actinomycetoma.",
      "topicId": "u2-t08",
      "answer": "<p>A <strong>Mycetoma</strong> is a chronic, granulomatous, subcutaneous pseudo-tumorous swelling characterized by the triad of <em>indurated swelling, multiple draining sinus tracts, and macroscopic granules (grains)</em> discharged in purulent exudate:</p><ul><li><strong>Eumycetoma (True Fungal Mycetoma):</strong> Caused by true filamentous fungi with broad ($2\\text{--}6\\\\ \\\\mu\\\\text{m}$), septate hyphae (e.g., <em>Madurella mycetomatis</em>, <em>Curvularia</em>, <em>Pseudoallescheria boydii</em>). Grains are black or white, composed of fungal hyphae and chlamydoconidia, and resistant to antibacterial antibiotics.</li><li><strong>Actinomycetoma (Bacterial Mycetoma):</strong> Caused by higher, branching filamentous Gram-positive bacteria (e.g., <em>Actinomadura madurae</em>, <em>Streptomyces somaliensis</em>, <em>Nocardia brasiliensis</em>). Filaments are very thin ($0.5\\text{--}1.0\\\\ \\\\mu\\\\text{m}$), grains are white/yellow/red, and respond to antibacterials (sulfonamides, streptomycin).</li></ul>",
      "keyPoints": [
        "Triad: Subcutaneous swelling, multiple draining sinuses, and grain discharge.",
        "Eumycetoma: True fungi (thick 2-6 um septate hyphae), resistant to antibiotics. Actinomycetoma: Filamentous bacteria (thin 0.5-1 um filaments), sensitive to antibacterials."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "KVAFSU 2021",
        "LUVAS 2020",
        "DUVASU 2022"
      ]
    },
    {
      "id": "u2-q11",
      "type": "define",
      "marks": 2,
      "question": "Define Zygospores and Sporangiospores in the phylum Zygomycota.",
      "topicId": "u2-t08",
      "answer": "<p>Members of the order <em>Mucorales</em> (phylum Zygomycota, e.g., <em>Mucor</em>, <em>Rhizopus</em>, <em>Absidia</em>) produce both sexual and asexual spore forms:</p><ul><li><strong>Zygospore (Sexual Spore):</strong> A large, thick-walled, darkly pigmented, highly ornamented resting spore formed by the sexual fusion (gametangial copulation) of two compatible morphologically similar hyphal gametangia ($+$ and $-$ mating types). Confers long-term survival in harsh environmental conditions.</li><li><strong>Sporangiospores (Asexual Spores):</strong> Non-motile, unicellular, thin-walled asexual spores produced endogenously within a swollen, sac-like terminal structure called a <strong>sporangium</strong> supported by a sporangiophore, centered around an internal columella. Released upon rupture of the sporangial wall to propagate airborne dispersion.</li></ul>",
      "keyPoints": [
        "Zygospores: Thick-walled sexual resting spores formed by gametangial copulation.",
        "Sporangiospores: Endogenous asexual spores produced inside a sac-like sporangium around a columella."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "MAFSU 2020",
        "TANUVAS 2019"
      ]
    },
    {
      "id": "u2-q12",
      "type": "define",
      "marks": 2,
      "question": "Define Asteroid Bodies (Splendore-Hoeppli Phenomenon) in Sporotrichosis.",
      "topicId": "u2-t07",
      "answer": "<p>An <strong>Asteroid Body (Splendore-Hoeppli Phenomenon)</strong> is a distinct histological structure observed in chronic granulomatous lesions of <strong>Sporotrichosis</strong> (caused by <em>Sporothrix schenckii</em>).</p><p><strong>Morphology & Composition:</strong> It consists of a central, spherical or cigar-shaped fungal yeast cell ($3\\text{--}5\\\\ \\\\mu\\\\text{m}$) surrounded by a prominent, radiating corona of eosinophilic, petal-like or star-shaped clubbed projections (rays). These radiating eosinophilic deposits are not fungal structures, but host-derived <strong>antigen-antibody complexes, major basic protein from degranulated eosinophils, and serum proteins</strong> deposited around the pathogen as a frustrated host immune response.</p>",
      "keyPoints": [
        "Histological hallmark of Sporothrix schenckii: Central yeast surrounded by radiating eosinophilic club-like projections.",
        "Splendore-Hoeppli phenomenon represents host antigen-antibody complexes and degranulated eosinophil proteins."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2020",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u2-q13",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Microsporum canis and Trichophyton mentagrophytes with a comprehensive comparison table.",
      "topicId": "u2-t05",
      "answer": "<p><em>Microsporum canis</em> and <em>Trichophyton mentagrophytes</em> are the two most prevalent zoophilic dermatophytes responsible for clinical ringworm in dogs, cats, and rodents, exhibiting distinctive macroscopic, microscopic, and diagnostic features:</p>",
      "keyPoints": [
        "Macroconidia: M. canis produces abundant spindle-shaped, thick-walled, echinulate/rough macroconidia with 6-12 septa and curved terminal knob.",
        "T. mentagrophytes produces rare, cigar/pencil-shaped, thin-walled, smooth macroconidia with abundant spherical microconidia in grapelike clusters.",
        "Wood's lamp: M. canis exhibits apple-green fluorescence (~50%); T. mentagrophytes is non-fluorescent.",
        "Special structures: Spiral hyphae and chlamydospores are classic in T. mentagrophytes."
      ],
      "diagram": "",
      "table": {
        "title": "Comparative Features: Microsporum canis vs Trichophyton mentagrophytes",
        "headers": [
          "Feature / Criterion",
          "Microsporum canis",
          "Trichophyton mentagrophytes"
        ],
        "rows": [
          [
            "Primary Animal Hosts",
            "Cats (subclinical reservoir) and Dogs; highly zoonotic to humans",
            "Rodents (mice, guinea pigs), Rabbits, Dogs, Horses, and Humans"
          ],
          [
            "Wood's Lamp Fluorescence",
            "Positive (brilliant apple-green fluorescence in ~50% of active cases)",
            "Completely negative (no fluorescence)"
          ],
          [
            "Hair Invasion Pattern",
            "Ectothrix (small arthrospores forming a mosaic sheath outside hair shaft)",
            "Ectothrix (chains of arthrospores outside the hair shaft)"
          ],
          [
            "Colonial Morphology (SDA)",
            "Fast-growing, flat, white-to-cream feathery/cottony colony with bright <strong>golden-yellow to orange reverse pigment</strong>",
            "Granular/powdery to downy white-to-buff colony with <strong>tan, yellow-brown to deep mahogany-red reverse</strong>"
          ],
          [
            "Macroconidia Morphology",
            "Abundant, large, spindle-shaped, thick-walled ($> 2\\ \\mu\\text{m}$), rough/verrucose, 6–12 septa, with a distinct curved apical terminal knob",
            "Rare, pencil- or cigar-shaped, thin-walled ($< 2\\ \\mu\\text{m}$), smooth-walled, with 3–6 septa"
          ],
          [
            "Microconidia Characteristics",
            "Few, clavate to pyriform, sessile along the hyphae",
            "Abundant, small, spherical/globose, arranged in dense <strong>grape-like clusters</strong> (en grappe)"
          ],
          [
            "Special Fungal Structures",
            "Rare or absent",
            "Classic <strong>spiral/coiled hyphae</strong> and spherical chlamydospores"
          ],
          [
            "In Vitro Hair Perforation Test",
            "Negative (does not produce wedge-shaped hair perforations)",
            "Positive (produces characteristic wedge-shaped transverse hair perforations)"
          ],
          [
            "Urease Activity (Christensen's)",
            "Negative or delayed ($> 7$ days)",
            "Rapidly positive (turns pink within 2–4 days)"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-q14",
      "type": "short",
      "marks": 5,
      "question": "Describe the pathogenesis, clinical cytology, and diagnostic hallmarks of Malassezia dermatitis in dogs.",
      "topicId": "u2-t05",
      "answer": "<p><strong>Malassezia Dermatitis (Canine Pityrosporosis)</strong> is a chronic, highly pruritic, superficial opportunistic cutaneous infection caused by the lipophilic, non-lipid-dependent budding yeast <strong>Malassezia pachydermatis</strong>.</p><p><strong>Pathogenesis & Predisposing Factors:</strong> <em>M. pachydermatis</em> resides as a normal commensal organism in canine external ear canals, lip folds, interdigital webs, and anal sacs. Overgrowth is triggered by underlying allergic skin disease (canine atopic dermatitis, flea allergy, food hypersensitivity), endocrine disorders (hypothyroidism, hyperadrenocorticism), or excessive sebum production. Yeasts release extracellular lipases, phospholipases, and proteases that hydrolyze skin surface lipids into free fatty acids, damaging the epidermal barrier. Fungal cell wall zymosan and antigen activation induce intense pruritus, self-trauma, erythema, and epidermal hyperplasia.</p><p><strong>Clinical Manifestations:</strong> Intense, intractable pruritus, diffuse erythema, greasy exudation (seborrhea oleosa), alopecia, lichenification, hyperpigmentation, and a pathognomonic <strong>rancid, sweetish 'goat-like' / sour corn-chip odor</strong>. Primary sites: ventral neck, axillae, groins, interdigital spaces, and perianal region. Concurrently causes stubborn <em>otitis externa</em> with dark-brown ceruminous discharge.</p><p><strong>Cytological Diagnosis (Gold Standard):</strong></p><ol><li><em>Sample Collection:</em> Clear adhesive tape strip technique or direct impression smears onto a clean glass slide from lichenified, greasy lesions.</li><li><em>Staining:</em> Heat-fixed and stained with modified Wright-Giemsa (Diff-Quik) stain.</li><li><em>Microscopic Hallmarks:</em> Demonstration of deep-blue/purple, unipolar-budding, thick-walled yeast cells displaying a classic <strong>'footprint', 'peanut-shell', or 'bowling-pin' shape</strong> ($2\\text{--}5\\\\ \\\\mu\\\\text{m} \\\\times 2\\text{--}7\\\\ \\\\mu\\\\text{m}$). Cytological count of $\\ge 2\\text{--}3\\\\text{ yeasts per high-power field (1000}\\times\\text{ oil immersion)}$ on skin or $\\ge 5\\text{ per HPF}$ in ear canals confirms clinical dermatitis.</li></ol>",
      "keyPoints": [
        "Etiology: Malassezia pachydermatis, lipophilic opportunistic commensal yeast of canine skin and ears.",
        "Clinical signs: Pruritus, greasy seborrhea, lichenification, and pathognomonic rancid goat-like odor.",
        "Cytological hallmark: Diff-Quik tape impression showing unipolar budding yeasts with 'peanut' or 'footprint' appearance (>=2-3/HPF)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2022",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u2-q15",
      "type": "short",
      "marks": 5,
      "question": "Discuss Aspergillus fumigatus as the cause of Brooder Pneumonia in poultry and Mycotic Abortion in cattle.",
      "topicId": "u2-t04",
      "answer": "<p><strong>Aspergillus fumigatus</strong> is a ubiquitous, thermotolerant filamentous mold found in decaying vegetation, moldy straw, and feed, acting as a major opportunistic veterinary pathogen.</p><h3>1. Brooder Pneumonia (Aspergillosis in Chicks)</h3><p><strong>Pathogenesis:</strong> Inhalation of massive concentrations of airborne conidia originating from contaminated hatchery incubator eggs, moldy bedding, or feed. Due to their minute aerodynamic diameter ($2\\text{--}3\\\\ \\\\mu\\\\text{m}$), conidia bypass avian upper respiratory ciliated defenses and lodge directly in air sacs and pulmonary parabronchi. At avian core body temperature (41–42°C), conidia rapidly germinate into branching septate hyphae.</p><p><strong>Lesions:</strong> Gasps for breath ('open-mouth breathing'), cyanosis, and anorexia. Necropsy reveals pathognomonic <strong>miliary yellow-white caseous nodules (1–3 mm)</strong> scattered throughout lungs and air sacs. Chronic cases show velvet-like blue-green/gray mycelial mats lining air sac surfaces with active conidiophore heads.</p><h3>2. Mycotic Abortion in Cattle</h3><p><strong>Pathogenesis:</strong> Ingestion or inhalation of moldy hay/silage during winter stabling. Fungal hyphae breach maternal mucosal barriers, enter circulation (hematogenous spread), and establish localized placentitis with strong predilection for the gravid uterus. Hyphae invade placental vasculature, causing severe obliterative vasculitis, thrombosis, and infarction.</p><p><strong>Hallmark Lesions:</strong> Late-term abortion (6th to 8th month). Pathognomonic necrotic placentitis: cotyledons become markedly enlarged, necrotic, dry, and leathery with a brownish-red 'Morocco-leather' appearance. The aborted fetus frequently displays circumscribed, elevated, gray-white, ringworm-like cutaneous plaques on the head, neck, and back.</p><p><strong>Diagnosis:</strong> Direct 10% KOH or Lactophenol Cotton Blue (LPCB) examination of cotyledon smears or fetal abomasal contents reveals uniform, dichotomously branching (at $45^\\circ$ angles), parallel, septate hyphae ($3\\text{--}6\\\\ \\\\mu\\\\text{m}$).</p>",
      "keyPoints": [
        "Poultry Brooder Pneumonia: Inhalation of conidia into air sacs producing yellow caseous lung nodules and dyspnea.",
        "Bovine Mycotic Abortion: Ingestion/inhalation -> hematogenous spread -> necrotic leathery placentitis and fetal ringworm-like skin lesions.",
        "Microscopic hallmark: Uniform, septate hyphae displaying acute dichotomous 45-degree branching."
      ],
      "diagram": "Inhaled Conidia -> Parabronchi/Air Sacs -> Hyphal Angioinvasion -> Yellow Granulomas",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2021",
        "RAJUVAS 2022",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u2-q16",
      "type": "short",
      "marks": 5,
      "question": "Describe the virulence factors and pathogenesis of Candida albicans in domestic animals and poultry.",
      "topicId": "u2-t03",
      "answer": "<p><strong>Candida albicans</strong> is a polymorphic opportunistic yeast present as a normal commensal on gastrointestinal, upper respiratory, and genital mucosa of healthy animals, transforming into a pathogenic invader upon host debilitation, prolonged antibiotic therapy, or immunosuppression.</p><p><strong>Key Molecular Virulence Factors:</strong></p><ol><li><strong>Yeast-to-Hypha Morphogenetic Switching:</strong> The ability to transition reversibly between unicellular oval blastoconidia ($3\\text{--}6\\\\ \\\\mu\\\\text{m}$) and invasive, elongated pseudohyphae/true hyphae. Hyphae exert mechanical piercing force through epithelial cell membranes.</li><li><strong>Adhesins:</strong> Agglutinin-Like Sequence (ALS family, especially Als3) and Hwp1 proteins that mediate avid attachment to host mucosal cadherins and fibronectin.</li><li><strong>Secreted Hydrolases:</strong> Secreted Aspartyl Proteinases (Saps 1–10) that degrade host collagen, keratin, and immunoglobulins; Phospholipase B that hydrolyzes host membrane phospholipids.</li><li><strong>Candidalysin:</strong> A cytolytic 31-amino-acid helical peptide toxin secreted by hyphae that directly punctures host epithelial membranes, inducing calcium influx and cell lysis.</li><li><strong>Phenotypic Switching & Biofilm Formation:</strong> Formation of dense, drug-resistant biofilms on indwelling catheters and damaged mucosal surfaces.</li></ol><p><strong>Veterinary Diseases:</strong></p><ul><li><em>Poultry Thrush (Crop Mycosis / Sour Crop):</em> In young birds following prolonged antibiotic therapy; white, circular, elevated caseous plaques resembling 'Turkish towel' appearance on crop and esophageal mucosa.</li><li><em>Equine & Canine Candidiasis:</em> Cutaneous candidiasis in dogs; oral thrush and mycotic keratitis in horses.</li><li><em>Bovine Mycotic Mastitis:</em> Secondary to unhygienic intramammary antibiotic infusions.</li></ul>",
      "keyPoints": [
        "Morphogenetic switching: Reversible transition between yeast and invasive hyphae/pseudohyphae.",
        "Virulence factors: Als3 adhesins, Secreted Aspartyl Proteinases (Saps), Phospholipase B, and Candidalysin pore-forming toxin.",
        "Poultry disease: Thrush / Crop mycosis characterized by 'Turkish towel' pseudo-membranes."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "DUVASU 2021",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u2-q17",
      "type": "short",
      "marks": 5,
      "question": "Describe Cryptococcus neoformans with emphasis on its polysaccharide capsule, environmental reservoir, and feline cryptococcosis.",
      "topicId": "u2-t03",
      "answer": "<p><strong>Cryptococcus neoformans</strong> is an encapsulated, basidiomycetous environmental opportunistic yeast causing life-threatening localized or disseminated mycoses, primarily in cats, dogs, and immunocompromised humans.</p><p><strong>Environmental Reservoir:</strong> The organism is tightly associated with <strong>pigeon droppings (avian guano)</strong> and decaying eucalyptus trees (*Eucalyptus camaldulensis*). Pigeons do not contract the infection due to high core body temperature (42°C), but their nitrogen- and creatinine-rich alkaline droppings serve as an ideal selective enrichment medium for cryptococcal propagation.</p><p><strong>The Polysaccharide Capsule (Prime Virulence Factor):</strong></p><ul><li>Chemically composed of <strong>Glucuronoxylomannan (GXM, 90%)</strong> and Galactoxylomannan (GalGXM, 10%).</li><li>Confers intense negative electrostatic charge, completely blocking opsonization and phagocytosis by neutrophils and alveolar macrophages.</li><li>Inhibits leukocyte migration, depletes complement components, and suppresses cell-mediated immunity.</li><li><em>Melanin Production:</em> Phenoloxidase / laccase enzyme synthesizes antioxidant melanin from diphenolic compounds, protecting yeast cells against host reactive oxygen species (ROS).</li></ul><p><strong>Feline Cryptococcosis:</strong> Cats are the most frequently affected domestic species. Conidia are inhaled into the nasal cavity, establishing chronic granulomatous rhinitis. Clinical hallmarks include: chronic unilateral or bilateral mucopurulent to bloody nasal discharge, sneezing, and development of a firm, subcutaneous swelling over the bridge of the nose resulting in a classic <strong>'Roman nose' deformity</strong>. Fleshy, polypoid granulomas protrude from external nares, frequently extending to the central nervous system (meningoencephalitis) and eyes (chorioretinitis/blindness).</p><p><strong>Diagnostic Hallmarks:</strong> Direct negative staining of nasal discharge or CSF using <strong>India Ink</strong> reveals round, spherical budding yeast cells ($4\\text{--}10\\\\ \\\\mu\\\\text{m}$) surrounded by a massive, clear, halo-like negative capsule refracting light against a black background. Urease-positive on Christensen's urea agar.</p>",
      "keyPoints": [
        "Reservoir: Weathered pigeon droppings rich in creatinine; pigeons themselves unaffected due to 42C body temperature.",
        "Glucuronoxylomannan (GXM) polysaccharide capsule inhibits phagocytosis and complement.",
        "Feline hallmark: Granulomatous rhinitis with 'Roman nose' bridge swelling and fleshy nasal polyps.",
        "Laboratory diagnostic: India ink negative staining demonstrating wide refracting clear capsular halos; Urease-positive."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u2-q18",
      "type": "short",
      "marks": 5,
      "question": "Describe Rhinosporidium seeberi, clinical rhinosporidiosis in cattle and dogs, and its characteristic histological morphology.",
      "topicId": "u2-t07",
      "answer": "<p><strong>Rhinosporidiosis</strong> is a chronic, non-fatal granulomatous infection of the mucosal membranes of domestic animals (cattle, horses, dogs) and humans, historically considered a fungus but now phylogenetically re-classified under the class <strong>Mesomycetozoea (DRIP clade)</strong>, an aquatic protistan group intermediate between animals and fungi.</p><p><strong>Epidemiology & Transmission:</strong> Endemic in tropical and subtropical regions, particularly India and Sri Lanka. Infection is contracted through traumatic contact or swimming in stagnant, muddy pond water where natural reservoir spores reside.</p><p><strong>Clinical Hallmarks:</strong></p><ul><li>Development of soft, friable, highly vascular, pedunculated or sessile polyps in the nasal cavity, nasopharynx, and ocular conjunctiva.</li><li>Polyps are bright red to pink, bleed profusely on slight touch, and exhibit a pathognomonic <strong>'strawberry-like' granular surface</strong> studded with numerous macroscopic white pinhead spots representing mature subepithelial sporangia.</li><li>Causes unilateral nasal obstruction, stertorous breathing, serosanguinous nasal discharge, and dyspnea.</li></ul><p><strong>Histopathological Morphology:</strong> <em>R. seeberi</em> cannot be cultured on artificial microbiological media. Diagnosis relies strictly on biopsy histopathology stained with H&E, PAS, or Gomori's methenamine silver (GMS):</p><ul><li>Demonstration of enormous, thick-walled, spherical structures called <strong>sporangia</strong> measuring <strong>$100\\text{--}350\\\\ \\\\mu\\\\text{m}$</strong> in diameter.</li><li>A mature sporangium possesses a thick bi-layered wall and an operculum (germ pore), containing up to <strong>16,000 to 20,000 small, spherical sporangiospores (endospores)</strong> measuring $6\\text{--}9\\\\ \\\\mu\\\\text{m}$.</li><li>Upon reaching maturity, the sporangium ruptures through its pore, releasing thousands of endospores into the submucosa, each eliciting intense histiocytic and foreign-body giant-cell granulomatous infiltration.</li></ul>",
      "keyPoints": [
        "Etiology: Rhinosporidium seeberi, Mesomycetozoea protist (cannot be cultured in vitro).",
        "Clinical signs: Bleeding, pedunculated, strawberry-like nasal polyps with white pinhead sporangia dots.",
        "Histopathology: Massive sporangia (100-350 um) containing up to 20,000 mature endospores with an operculum."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2021",
        "WBUAFS 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u2-q19",
      "type": "short",
      "marks": 5,
      "question": "Describe Zygomycosis (Mucormycosis) in livestock: Etiology, pathogenesis of angioinvasion, and gross pathology.",
      "topicId": "u2-t08",
      "answer": "<p><strong>Zygomycosis (Mucormycosis / Phycomycosis)</strong> is an acute to subacute, destructive opportunistic mycotic infection of domestic livestock caused by members of the order <em>Mucorales</em>, primarily <strong>Mucor</strong>, <strong>Rhizopus</strong>, and <strong>Absidia (Lichtheimia)</strong>.</p><p><strong>Etiology & Morphology:</strong> Ubiquitous, fast-growing saprophytic molds found in soil, rotting feed, and damp forage. Microscopically characterized by <strong>wide ($6\\text{--}15\\\\ \\\\mu\\\\text{m}$), ribbon-like, non-septate (coenocytic) or sparsely septate hyphae with irregular, wide-angle ($90^\\circ$) branching</strong>.</p><p><strong>Pathogenesis of Angioinvasion:</strong></p><ol><li><em>Entry:</em> Ingestion or inhalation of sporangiospores, especially following mucosal abrasion or ruminal acidosis (which lowers mucosal pH and creates ideal fungal proliferation conditions).</li><li><em>Angioinvasion:</em> Hyphae possess an intense affinity for vascular endothelial walls. They physically penetrate and invade blood vessel lumens (angiotropism), causing vascular endothelial denudation and platelet aggregation.</li><li><em>Infarction & Necrosis:</em> Widespread fungal thrombosis obliterates arterial blood flow, producing extensive ischemic infarction, coagulative necrosis, and tissue gangrene. Fungi utilize host free iron for rapid hyphal elongation.</li></ol><p><strong>Gross Pathology & Clinical Forms:</strong></p><ul><li><em>Mycotic Ruminitis (Acidosis Sequel):</em> Large, well-demarcated, circular, black-to-dark-red hemorrhagic ulcers on ruminal and omasal pillars with thick, raised thrombosed margins.</li><li><em>Mycotic Abortion in Cattle:</em> Placental infarction with swollen, necrotic, leathery cotyledons.</li><li><em>Mycotic Lymphadenitis:</em> Caseocalcareous enlargement of mesenteric and mediastinal lymph nodes resembling bovine tuberculosis.</li></ul>",
      "keyPoints": [
        "Etiology: Mucor, Rhizopus, Absidia; non-septate ribbon-like hyphae with wide 90-degree branching.",
        "Pathogenesis: Ruminal acidosis predisposes; marked angioinvasion and vascular thrombosis lead to ischemic necrosis.",
        "Pathology: Hemorrhagic ruminal ulcers, leathery placental infarction, and mesenteric lymphadenitis."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2023",
        "RAJUVAS 2021",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u2-q20",
      "type": "diff",
      "marks": 5,
      "question": "Tabulate the comparative characteristics of major agricultural mycotoxins: Aflatoxins, Ochratoxins, Fumonisin, and Zearalenone.",
      "topicId": "u2-t10",
      "answer": "<p>Mycotoxins are toxic secondary fungal metabolites produced on agricultural commodities, feedstuffs, and silage that induce severe organ-specific pathology in livestock and poultry:</p>",
      "keyPoints": [
        "Aflatoxins (A. flavus): Hepatotoxic, carcinogenic epoxide DNA adducts causing fatty liver and jaundice.",
        "Ochratoxin A (A. ochraceus, P. verrucosum): Nephrotoxic, causes proximal tubule degeneration and visceral gout in chicks.",
        "Fumonisin B1 (F. verticillioides): Inhibits ceramide synthase, causing Equine Leukoencephalomalacia (ELEM) and Porcine Pulmonary Edema (PPE).",
        "Zearalenone (F. graminearum): Estrogenic mycotoxin binding estrogen receptors causing vulvovaginitis and rectal prolapse in gilts."
      ],
      "diagram": "",
      "table": {
        "title": "Comparative Profiles: Major Agricultural Mycotoxins in Animal Health",
        "headers": [
          "Mycotoxin Group",
          "Fungal Species Source",
          "Favorable Substrates",
          "Primary Target Organ",
          "Molecular Mechanism",
          "Pathognomonic Veterinary Disease"
        ],
        "rows": [
          [
            "Aflatoxins (AFB1, AFB2, AFG1, AFG2)",
            "Aspergillus flavus, Aspergillus parasiticus",
            "Maize, groundnut cake, cotton seed, cereals",
            "Liver (Hepatotoxic)",
            "Bioactivated to 8,9-epoxide; binds DNA guanine, inhibiting protein synthesis and inducing p53 mutations",
            "Centrilobular hepatic necrosis, jaundice, ascites, bile duct hyperplasia, decreased egg production"
          ],
          [
            "Ochratoxin A (OTA)",
            "Aspergillus ochraceus, Penicillium verrucosum",
            "Barley, wheat, oats, maize, poultry feed",
            "Kidney (Nephrotoxic)",
            "Competitive inhibition of phenylalanyl-tRNA synthetase; oxidative cellular stress",
            "Enlarged pale kidneys, proximal tubule necrosis, visceral and articular gout in broilers"
          ],
          [
            "Fumonisin B1 (FB1)",
            "Fusarium verticillioides (moniliforme), F. proliferatum",
            "Maize (corn) and corn by-products",
            "Brain (Equine), Lung (Porcine), Liver",
            "Disrupts sphingolipid biosynthesis by inhibiting <strong>ceramide synthase</strong> (sphinganine/sphingosine elevation)",
            "<strong>Equine Leukoencephalomalacia (ELEM)</strong> (liquefactive necrosis of cerebral white matter); <strong>Porcine Pulmonary Edema (PPE)</strong>"
          ],
          [
            "Zearalenone (ZEN / F-2 toxin)",
            "Fusarium graminearum, Fusarium culmorum",
            "Maize, wheat, barley, damp pasture grass",
            "Reproductive tract (Estrogenic)",
            "Chemical mimic of $17\beta$-estradiol; competitively binds cytoplasmic estrogen receptors",
            "Hyperestrogenism in swine: swollen edematous vulva (vulvovaginitis), vaginal/rectal prolapse, ovarian atrophy, nymphomania"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u2-q21",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Dermatophytosis (Ringworm) in domestic animals covering: (a) Etiological Agents across Species, (b) Pathogenesis of Keratin Invasion, (c) Clinical Lesions, (d) Laboratory Diagnosis (Sampling to Speciation), and (e) Treatment and Environmental Control.",
      "topicId": "u2-t05",
      "answer": "<h3>(a) Etiological Classification and Host Specificity</h3><p><strong>Dermatophytosis (Ringworm / Tinea)</strong> is a contagious, superficial fungal zoonosis of keratinized tissues (stratum corneum, hair, nails) caused by specialized filamentous molds of the genera <em>Microsporum</em> and <em>Trichophyton</em>:</p><ul><li><strong>Cattle & Buffaloes:</strong> <strong>Trichophyton verrucosum</strong> (dominant agent in $>95\\%$ cases); occasionally <em>T. mentagrophytes</em>.</li><li><strong>Dogs & Cats:</strong> <strong>Microsporum canis</strong> (accounts for $>90\\%$ feline and $>70\\%$ canine cases; cats serve as asymptomatic chronic carrier reservoirs); <em>Microsporum gypseum</em> (geophilic); <em>Trichophyton mentagrophytes</em> (rodent contact).</li><li><strong>Horses:</strong> <strong>Trichophyton equinum</strong> and <em>Microsporum equinum</em>; spread via infected grooming gear, saddles, and bridles.</li><li><strong>Swine:</strong> <strong>Microsporum nanum</strong>; produces brownish crusts on the back and behind ears.</li><li><strong>Poultry (Favus / White Comb):</strong> <strong>Microsporum gallinae</strong>; causes powdery white crusts on the comb and wattle.</li></ul><h3>(b) Pathogenesis of Keratin Degradation and Lesion Genesis</h3><ol><li><strong>Transmission:</strong> Direct animal-to-animal contact or indirect transmission via environmental <em>arthrospores</em> clinging to fence posts, grooming brushes, and barn walls, remaining viable in dry conditions for up to <strong>18 to 24 months</strong>.</li><li><strong>Attachment & Adhesion:</strong> Arthrospores adhere to corneocytes using fungal cell wall glycoprotein adhesins within 2–6 hours post-exposure. Minor skin abrasions and moisture dramatically facilitate entry.</li><li><strong>Enzymatic Keratinolysis:</strong> Spores germinate, producing fungal hyphae that secrete specialized extracellular endoproteases and sulfite reductases: <strong>Keratinases</strong>. Keratinases break disulfide linkages (-S-S-) in hard fibrous keratin, digesting the cortex and cuticle of hair shafts.</li><li><strong>Hair Invasion Patterns:</strong> Hyphae grow downward into the hair follicle, stopping just above the hair bulb matrix (at <strong>Adamson's fringe</strong>, where nucleated living cells reside).<ul><li><em>Ectothrix Invasion:</em> Fungal hyphae grow inside the shaft, but fragmentation into masses of round, infectious arthrospores occurs exclusively on the outer hair surface (e.g., <em>M. canis</em>, <em>T. verrucosum</em>).</li><li><em>Endothrix Invasion:</em> Arthrospores form completely within the hair shaft interior without external crusts.</li></ul></li><li><strong>Centrifugal Clearance:</strong> Fungi expand radially outward in search of un-cleaved keratin. Host inflammatory reactions (erythema, leukocytic infiltration) in the center clear the organism, generating the classical <strong>annular, expanding 'ring-like' lesion</strong> with an active, erythematous periphery.</li></ol><h3>(c) Clinical Manifestations across Species</h3><ul><li><strong>Cattle (T. verrucosum):</strong> Non-pruritic, well-circumscribed, thick, grayish-white, raised, asbestos-like or cement-like crusts and plaques, predominantly distributed around the peri-orbital region, face, neck, and dewlap. Common in winter-housed calves.</li><li><strong>Dogs & Cats (M. canis):</strong> Circular, focal alopecic patches with mild erythema, scaling, and brittle broken hairs ('stubbled hairs'). Cats often present with minimal inflammation but massive environmental spore dissemination.</li><li><strong>Horses (T. equinum):</strong> Girth itch and saddle-zone ringworm presenting as circular alopecic scaling lesions, papules, and crusts that mat the hair.</li></ul><h3>(d) Comprehensive Laboratory Diagnostic Flowchart</h3><ol><li><strong>Wood's Lamp Screening:</strong> Darkened room examination. Apple-green fluorescence of hair shafts indicates <em>Microsporum canis</em> (pteridine metabolite). Negative in <em>Trichophyton</em>.</li><li><strong>Diagnostic Sampling:</strong> Wipe lesion margin with 70% alcohol to remove saprophytes. Scrape the <strong>active, outer erythematous advancing margin</strong> using a dull scalpel blade; pluck broken, dull, fluorescing hairs from follicle roots with forceps.</li><li><strong>Direct Microscopic Examination (KOH Mount):</strong> Place scrapings/hairs in a drop of <strong>10–20% Potassium Hydroxide (KOH)</strong>, gently warm for 5–10 minutes (do not boil). KOH digests host keratin and cellular debris, leaving intact fungal chitin. Microscopic examination under $400\\\\times$ reveals: ectothrix chains or mosaic sheaths of spherical arthrospores ($2\\text{--}8\\\\ \\\\mu\\\\text{m}$) coating fractured hair shafts.</li><li><strong>Fungal Culture & Isolation:</strong> Inoculate onto <strong>Sabouraud Dextrose Agar (SDA)</strong> containing Chloramphenicol ($0.05\\text{ g/L}$) and Cycloheximide ($0.5\\text{ g/L}$) and <strong>Dermatophyte Test Medium (DTM)</strong>. Incubate at $25\\text{--}28^\\circ\\text{C}$ for 1 to 3 weeks (except <em>T. verrucosum</em> which requires <strong>$37^\\circ\\text{C}$ and inositol/thiamine supplementation</strong>). DTM turns from amber to bright red simultaneously with early white/buff colony growth.</li><li><strong>Microscopic Speciation (LPCB Mount):</strong> Tease mount stained with Lactophenol Cotton Blue:<ul><li><em>M. canis:</em> Spindle-shaped, thick-walled, verrucose macroconidia with 6–12 septa and curved apical knob.</li><li><em>T. mentagrophytes:</em> Pencil/cigar-shaped macroconidia with grape-like microconidial clusters and spiral hyphae.</li><li><em>T. verrucosum:</em> Chains of chlamydospores in young cultures; microconidia and clavate macroconidia on enriched media.</li></ul></li></ol><h3>(e) Therapeutic Management and Biosecurity</h3><ul><li><em>Topical Therapy:</em> Whole-body dips or rinses using Enilconazole (0.2%), Lime sulfur (2–4%), or Miconazole-chlorhexidine shampoo twice weekly to reduce environmental spore shedding.</li><li><em>Systemic Antifungal Therapy:</em> Oral administration of <strong>Itraconazole</strong> ($5\\text{--}10\\text{ mg/kg}$ daily) or <strong>Griseofulvin</strong> ($25\\text{--}50\\text{ mg/kg}$ with a fatty meal; contraindicated in pregnant animals due to teratogenicity) for 4–6 weeks until two consecutive negative fungal cultures are achieved.</li><li><em>Environmental Decontamination:</em> Scrubbing premises and grooming equipment with <strong>0.5% Sodium Hypochlorite (1:10 household bleach)</strong> or enilconazole fogging.</li><li><em>Immunoprophylaxis:</em> Live attenuated vaccines (e.g., LTF-130 live vaccine for <em>T. verrucosum</em> in cattle) are highly effective in reducing disease incidence and lesion severity in calves.</li></ul>",
      "keyPoints": [
        "Etiology: T. verrucosum in cattle; M. canis in dogs/cats; T. equinum in horses; M. gallinae (favus) in poultry.",
        "Pathogenesis: Keratinases digest -S-S- bonds in keratin; hyphae grow down to Adamson's fringe; ectothrix arthrospores coat hair.",
        "Diagnosis: Wood's lamp (green in M. canis) -> 10-20% KOH mount (ectothrix arthrospores) -> DTM (yellow to red shift) -> LPCB mount.",
        "Culture specifics: T. verrucosum requires 37C and thiamine/inositol; other dermatophytes grow at 25-28C.",
        "Control: Topical enilconazole/lime sulfur, systemic itraconazole/griseofulvin, 1:10 bleach environmental disinfection, and calf ringworm vaccines."
      ],
      "diagram": "Arthrospore adhesion -> Keratinase invasion -> Ectothrix spore sheath -> Centrifugal spread -> Alopecic crusted ring",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020",
        "WBUAFS 2019"
      ]
    },
    {
      "id": "u2-q22",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive comparative review of Systemic Dimorphic Mycoses (Histoplasmosis, Blastomycosis, and Coccidioidomycosis) with respect to: (a) Geographical Distribution & Ecological Niche, (b) Thermal Dimorphic Transitions, (c) Pathogenesis & Clinical Pathology in Domestic Animals, (d) Microscopic Diagnostic Morphology in Tissue, and (e) Biosafety and Laboratory Isolation Protocol.",
      "topicId": "u2-t06",
      "answer": "<h3>(a) Ecological Niche & Geographical Distribution</h3><p>Systemic dimorphic mycoses are primary, non-contagious fungal infections acquired via inhalation of infectious microconidia/arthroconidia from endemic soil reservoirs:</p><ul><li><strong>Histoplasma capsulatum:</strong> Endemic in river valleys (Ohio, Mississippi in USA; riverine basins in India). Enriched in soil contaminated with <strong>bat guano (caves) and bird droppings (starling roosts)</strong> having high nitrogen content.</li><li><strong>Blastomyces dermatitidis:</strong> Endemic in moist, acidic, decaying wood and sandy loam soils bordering waterways and lakes. Highly prevalent in sporting/hunting dogs.</li><li><strong>Coccidioides immitis & C. posadasii:</strong> Endemic in semi-arid, alkaline desert soils of the Southwestern USA ('Valley Fever') and parts of South America.</li></ul><h3>(b) Thermal Dimorphism and Cellular Transitions</h3><p>All three species exhibit complete morphological transformation governed by ambient temperature ($25^\\circ\\text{C}$ mold vs $37^\\circ\\text{C}$ parasitic tissue phase):</p>",
      "keyPoints": [
        "Ecological niches: H. capsulatum in bat/bird guano soils; B. dermatitidis in acidic soil near water; Coccidioides in alkaline desert soils.",
        "Dimorphic transitions: 25C mycelium with conidia converts to 37C intracellular yeasts (Histoplasma), broad-based budding yeasts (Blastomyces), or thick-walled spherules with endospores (Coccidioides).",
        "Target organs: Lungs, reticuloendothelial system, bones, skin, and eyes; dogs are primary companion animal victims.",
        "Tissue hallmarks: Histoplasma (tiny intracellular yeasts in macrophages); Blastomyces (thick double-contoured wall, broad base); Coccidioides (massive spherule with endospores).",
        "Biosafety: Highly hazardous BSL-3 agents; mycelial cultures produce aerosol infectious conidia and must NEVER be smelled or opened outside a BSC Class II."
      ],
      "diagram": "Inhaled Conidia -> Alveolar Macrophage Phagocytosis -> Phase Transition to 37C Tissue Form -> Granulomatous Dissemination",
      "table": {
        "title": "Comparative Pathology: Histoplasmosis vs Blastomycosis vs Coccidioidomycosis",
        "headers": [
          "Characteristic / Parameter",
          "Histoplasma capsulatum",
          "Blastomyces dermatitidis",
          "Coccidioides immitis / posadasii"
        ],
        "rows": [
          [
            "Saprophytic Phase ($25^\\circ\text{C}$)",
            "Septate hyphae with large, round, tuberculate macroconidia ($8\text{--}15\\ \\mu\\text{m}$) and smooth microconidia",
            "Septate hyphae with small, globose, sessile microconidia ('lollipops on a stick')",
            "Branching septate hyphae producing barrel-shaped <strong>arthroconidia</strong> alternating with empty cells"
          ],
          [
            "Tissue / Parasitic Phase ($37^\\circ\text{C}$)",
            "Small ($2\text{--}4\\ \\mu\\text{m}$), oval, unicellular budding yeasts clustered <strong>intracellularly inside macrophages</strong>",
            "Large ($8\text{--}15\\ \\mu\\text{m}$), spherical, extracellular yeasts with a thick, double-contoured, refractile wall and <strong>broad-based budding</strong>",
            "Enormous ($20\text{--}200\\ \\mu\\text{m}$), round, thick-walled <strong>spherules filled with hundreds of endospores</strong> ($2\text{--}5\\ \\mu\\text{m}$)"
          ],
          [
            "Primary Cellular Target",
            "Monocyte-macrophage reticuloendothelial system (facultative intracellular)",
            "Extracellular pyogranulomatous inflammation in tissues",
            "Extracellular rupture of spherules eliciting acute purulent reaction followed by granuloma"
          ],
          [
            "Clinical Signs in Dogs",
            "Chronic intractable diarrhea, severe emaciation, hepatosplenomegaly, lymphadenopathy, cough, anemia",
            "Chronic harsh cough, dyspnea, draining ulcerated cutaneous nodules, uveitis, lameness/osteomyelitis",
            "Chronic cough, persistent fever, profound lameness (fungal osteomyelitis), draining skin sinuses"
          ],
          [
            "Cytological Staining Hallmark",
            "Wright-Giemsa / Diff-Quik: Dozens of tiny yeasts with clear halos packed inside macrophage cytoplasm",
            "H&E / PAS / GMS: Single broad-based buds joined by a wide neck, double-ring contoured cell wall",
            "H&E / GMS: Gigantic round spherules, with ruptured empty shells surrounded by released endospores"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u2-q23",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive account of Aspergillosis in veterinary medicine under the following headings: (a) Etiology & Mycelial Architecture, (b) Pathogenesis and Toxic Virulence Mediators, (c) Clinical Syndromes (Avian, Bovine, Equine, Canine), (d) Laboratory Diagnosis, and (e) Therapeutic Management.",
      "topicId": "u2-t04",
      "answer": "<h3>(a) Etiology and Mycelial Architecture</h3><p><em>Aspergillus</em> species are ubiquitous, saprophytic, rapidly multiplying filamentous molds belonging to the phylum Ascomycota. The primary veterinary pathogen is <strong>Aspergillus fumigatus</strong> (responsible for $>90\\%$ animal infections), followed by <em>A. flavus</em>, <em>A. niger</em>, and <em>A. terreus</em>.</p><p><strong>Morphological Hallmarks (LPCB):</strong> Characterized by smooth, unbranched conidiophores arising from specialized, thick-walled vegetative 'foot cells'. The conidiophore apex expands into a large, hemispherical or globose <strong>vesicle</strong>. In <em>A. fumigatus</em>, fertile <strong>phialides</strong> arise directly from the upper half of the vesicle in a single series (uniseriate), producing long, columnar, parallel chains of small, spherical, echinulate green conidia ($2\\text{--}3\\\\ \\\\mu\\\\text{m}$) that sweep upward like a paintbrush.</p><h3>(b) Pathogenesis and Virulence Factors</h3><ol><li><strong>Thermotolerance:</strong> <em>A. fumigatus</em> grows aggressively at temperatures up to <strong>$45\\text{--}50^\\circ\\text{C}$</strong>, allowing it to proliferate unimpeded at avian body core temperatures ($41\\text{--}42^\\circ\\text{C}$) and in composting litter.</li><li><strong>Small Aerodynamic Spore Size:</strong> Conidia ($2\\text{--}3\\\\ \\\\mu\\\\text{m}$) bypass respiratory filtration barriers, depositing directly into lower alveoli and avian caudal air sacs.</li><li><strong>Gliotoxin Production:</strong> An immunomodulatory epipolythiodioxopiperazine mycotoxin that selectively inhibits host macrophage phagocytosis, induces neutrophil apoptosis, halts T-cell proliferation, and destroys mucosal cilia.</li><li><strong>Extracellular Enzymes:</strong> Serine and metalloproteinases (elastases, alkaline proteases) degrade host elastin in pulmonary tissues and blood vessel walls, driving catastrophic <strong>angioinvasion, thrombosis, tissue infarction, and hematogenous dissemination</strong>.</li></ol><h3>(c) Major Veterinary Clinical Syndromes</h3><ul><li><strong>1. Poultry (Brooder Pneumonia):</strong> Acute respiratory distress in chicks and poults up to 6 weeks old; gasping, open-mouth breathing, anorexia, and high flock mortality. Necropsy reveals miliary yellow-white caseous nodules in lungs and air sacs.</li><li><strong>2. Bovine (Mycotic Abortion):</strong> Acquired via ingestion/inhalation of moldy hay; hematogenous invasion of the placenta during mid-to-late gestation causes severe necrotizing cotyledonitis with leathery brownish-red 'Morocco-leather' cotyledons and fetal ringworm-like skin lesions.</li><li><strong>3. Equine (Guttural Pouch Mycosis):</strong> Fungal plaques (typically <em>A. nidulans</em> or <em>A. fumigatus</em>) colonize the mucosal lining over the internal carotid artery and cranial nerves within the guttural pouch. Erosion of the internal carotid wall produces sudden, fatal <strong>epistaxis (exsanguinating nasal hemorrhage)</strong>; cranial nerve damage causes dysphagia and laryngeal hemiplegia ('roaring').</li><li><strong>4. Canine (Sino-Nasal Aspergillosis):</strong> Chronic necrotizing rhinitis predominantly affecting dolichocephalic and mesaticephalic dogs; persistent unilateral or bilateral mucopurulent/sanguineous nasal discharge, ulceration and depigmentation of nasal planum, and destruction of nasal turbinates visible on CT/rhinoscopy.</li></ul><h3>(d) Laboratory Diagnosis</h3><ol><li><strong>Direct Microscopy (KOH / LPCB):</strong> Tissue biopsy, abomasal fluid, or guttural pouch exudate cleared with 10–20% KOH demonstrates uniform, slender ($3\\text{--}6\\\\ \\\\mu\\\\text{m}$), parallel-walled, septate hyphae branching dichotomously at characteristic <strong>acute angles ($45^\\circ$)</strong>.</li><li><strong>Culture:</strong> Rapid growth on SDA without cycloheximide (as <em>Aspergillus</em> is cycloheximide-sensitive) at $25^\\circ\\text{C}$ and $37^\\circ\\text{C}$. Colonies emerge within 48 hours as flat, velvety, blue-green to smoky gray colonies with a pale/cream reverse.</li><li><strong>Serology & Biomarkers:</strong> Detection of circulating <strong>Galactomannan antigen</strong> using double-sandwich ELISA or $(1\\to 3)\\text{-}\\beta\\text{-D-glucan}$ detection assays. AGID used for canine nasal aspergillosis.</li></ol><h3>(e) Treatment and Control</h3><ul><li><em>Canine Nasal Aspergillosis:</em> Topical infusion of <strong>1% Clotrimazole</strong> emulsion or Enilconazole via surgically placed catheters or non-invasive trephination into frontal sinuses for 1 hour.</li><li><em>Equine Guttural Pouch:</em> Surgical transarterial coil embolization or balloon catheter occlusion of the internal carotid artery to prevent fatal hemorrhage, combined with topical enilconazole lavages.</li><li><em>Poultry & Cattle:</em> Discarding moldy straw and silage; treating poultry hatchery equipment with antifungal biocides (thiabendazole or enilconazole smoke generators); improving ventilation.</li></ul>",
      "keyPoints": [
        "Etiology: Aspergillus fumigatus, thermotolerant up to 50C, uniseriate columnar phialides with conidia chains.",
        "Pathogenesis: Small spores penetrate air sacs -> gliotoxin immunosuppression -> elastases drive severe angioinvasion and thrombosis.",
        "Clinical syndromes: Brooder pneumonia in chicks; Guttural pouch mycosis in horses (fatal epistaxis via carotid erosion); Sino-nasal aspergillosis in dogs; Mycotic abortion in cows.",
        "Diagnosis: 45-degree acute branching septate hyphae in KOH mount; rapid smoky green colonies on SDA without cycloheximide; galactomannan ELISA.",
        "Therapy: 1% Clotrimazole sinus infusion for dogs; transarterial coil embolization for equine guttural pouch."
      ],
      "diagram": "Inhaled Conidia -> Elastase/Gliotoxin -> Vascular Invasion -> Thrombosis -> Infarctive Necrosis",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u2-q24",
      "type": "long",
      "marks": 12,
      "question": "Write a comprehensive account of Mycotoxins and Major Mycotoxicoses in livestock and poultry: (a) Definition & Toxigenic Fungi, (b) Aflatoxicosis (Sources, Pathology, Aflatoxin M1 in Milk), (c) Ochratoxicosis, (d) Fusarium Toxicoses (ELEM, PPE, Hyperestrogenism), and (e) Detection & Prevention in Feed.",
      "topicId": "u2-t10",
      "answer": "<h3>(a) Definition & Conditions Favoring Mycotoxin Synthesis</h3><p><strong>Mycotoxins</strong> are low-molecular-weight, toxic secondary chemical metabolites produced by filamentous fungi (molds) growing on cereal grains, oilseeds, and stored animal feedstuffs, which elicit acute or chronic pathological syndromes (mycotoxicoses) in animals and humans at very low concentrations ($\\mu\\text{g/kg}$ or $\\text{ppb}$).</p><p><strong>Favorable Conditions:</strong> High grain moisture ($>14\\text{--}15\\%$), high ambient humidity ($>70\\%$), temperatures between 20°C and 35°C, grain insect damage, and unseasonal rains during harvest.</p><h3>(b) Aflatoxicosis (Aspergillus flavus / A. parasiticus)</h3><ul><li><strong>Toxin Chemistry:</strong> Aflatoxins $\\text{B}_1$, $\\text{B}_2$, $\\text{G}_1$, and $\\text{G}_2$ (based on blue or green fluorescence under 365 nm UV light). $\\text{AFB}_1$ is the most potent natural hepatocarcinogen.</li><li><strong>Pathology & Lesions:</strong> Acute toxicity produces severe anorexia, icterus, ascites, generalized hemorrhages, and sudden death. Subacute/chronic toxicity causes fatty liver syndrome, centrilobular hepatic necrosis, extensive bile duct proliferation, hepatic cirrhosis, immunosuppression (lymphoid depletion), and marked drops in egg and milk production. Ducks and turkey poults are hyper-susceptible.</li><li><strong>Aflatoxin $\\text{M}_1$ ($\\text{AFM}_1$) in Dairy Milk:</strong> When dairy cows ingest $\\text{AFB}_1$-contaminated feed, hepatic cytochrome P450 hydroxylates $\\text{AFB}_1$ into <strong>Aflatoxin $\\text{M}_1$</strong>, which is excreted into cow's milk within 12–24 hours (carryover rate approx. 1–2%). $\\text{AFM}_1$ is heat-stable and survives pasteurization, posing severe hepatocarcinogenic risks to human consumers (action level: $0.5\\\\ \\\\mu\\\\text{g/kg}$ in milk).</li></ul><h3>(c) Ochratoxicosis (Aspergillus ochraceus / Penicillium verrucosum)</h3><ul><li><strong>Target Organ & Pathology:</strong> Primarily <strong>Ochratoxin A (OTA)</strong>. Potent nephrotoxin causing severe degeneration and necrosis of proximal renal convoluted tubules, tubular atrophy, and interstitial cortical fibrosis.</li><li><strong>Lesions in Poultry:</strong> Enormous, pale, tan-colored swollen kidneys, polyuria, dramatic feed refusal, reduced eggshell quality, and severe <strong>visceral and articular gout</strong> due to hyperuricemia from renal clearance failure.</li></ul><h3>(d) Fusarium Toxicoses</h3><ul><li><strong>1. Fumonisin $\\text{B}_1$ ($\\text{FB}_1$):</strong> Produced by <em>Fusarium verticillioides</em> on corn. Inhibits <em>ceramide synthase</em>, disrupting sphingolipid metabolism:<ul><li><em>Equine Leukoencephalomalacia (ELEM / 'Blind Staggers'):</em> Liquefactive necrosis, softening, and cavitation of cerebral white matter in horses; depression, head pressing, circling, blindness, and death within 48 hours.</li><li><em>Porcine Pulmonary Edema (PPE):</em> Sudden pulmonary transudation, severe dyspnea, cyanosis, and frothy pleural effusion in swine.</li></ul></li><li><strong>2. Zearalenone (ZEN / F-2 Toxin):</strong> Produced by <em>Fusarium graminearum</em>. Estrogenic mycotoxin binding $17\\beta$-estradiol receptors. Causes severe <strong>hyperestrogenism in swine</strong>: swollen, hyperemic, edematous vulva (vulvovaginitis) in prepubertal gilts, mammary enlargement, vaginal and rectal prolapse, nymphomania, and embryonic mortality.</li><li><strong>3. Trichothecenes (T-2 Toxin & Vomitoxin / Deoxynivalenol - DON):</strong> Potent protein synthesis inhibitors (binding 60S ribosomal subunit); cause severe oral mucosal necrosis, contact stomatitis, radiomimetic lymphoid necrosis, and feed refusal.</li></ul><h3>(e) Diagnostic Detection & Feed Decontamination</h3><ol><li><strong>Analytical Detection:</strong> High-Performance Liquid Chromatography (HPLC) with fluorescence detection (Gold Standard); Liquid Chromatography-Tandem Mass Spectrometry (LC-MS/MS); commercial competitive ELISA test kits for rapid on-site feed screening.</li><li><strong>Black Light Test:</strong> Presumptive field screening of corn kernels under 365 nm UV light for bright greenish-yellow fluorescence (BGYF) caused by kojic acid produced alongside aflatoxin.</li><li><strong>Prevention & Management:</strong><ul><li><em>Moisture Control:</em> Dry harvested grain to $< 13\\%$ moisture within 24–48 hours.</li><li><em>Chemical Mold Inhibitors:</em> Treatment of feed with <strong>propionic acid, calcium propionate, or sorbic acid</strong> ($0.5\\text{--}1.0\\text{ kg/ton}$).</li><li><em>Mycotoxin Binders (Toxin Binders):</em> Incorporation of broad-spectrum adsorbents in feed: <strong>Hydrated Sodium Calcium Aluminosilicate (HSCAS)</strong>, bentonite clay, and esterified glucomannans (yeast cell wall extracts of <em>Saccharomyces cerevisiae</em>) that irreversibly bind mycotoxins in the gastrointestinal tract, preventing systemic absorption.</li></ul></li></ol>",
      "keyPoints": [
        "Aflatoxins: AFB1 bioactivated to 8,9-epoxide, severe hepatotoxicity, bile duct hyperplasia, excreted as AFM1 in dairy milk.",
        "Ochratoxin A: Nephrotoxic, proximal tubule necrosis, pale enlarged kidneys, visceral gout in broilers.",
        "Fusarium toxins: Fumonisin B1 (ceramide synthase inhibition => ELEM in horses, PPE in pigs); Zearalenone (hyperestrogenism and vulvovaginitis in gilts); T-2 toxin (oral necrosis and feed refusal).",
        "Detection: HPLC-MS/MS, competitive ELISA kits, and UV 365 nm black light BGYF test.",
        "Prevention: Drying grain to <13% moisture, propionic acid preservatives, and HSCAS / yeast glucomannan toxin binders."
      ],
      "diagram": "Feed Spoilage -> Mycotoxin Ingestion -> Liver (AFB1) / Kidney (OTA) / Brain (FB1) / Repro (ZEN) -> Clinical Toxicity",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u2-q25",
      "type": "long",
      "marks": 12,
      "question": "Discuss Mycotic Mastitis and Mycotic Abortion in livestock with respect to: (a) Etiological Spectrum, (b) Predisposing Factors & Pathogenesis, (c) Pathological Lesions in Placenta & Udder, (d) Laboratory Isolation Protocol, and (e) Clinical Management.",
      "topicId": "u2-t09",
      "answer": "<h3>(a) Etiological Spectrum of Agents</h3><p>Fungal infections of the reproductive and mammary systems of dairy cattle represent significant reproductive failures and production losses:</p><ul><li><strong>Mycotic Abortion Agents:</strong> <strong>Aspergillus fumigatus</strong> (causes 60–80% of mycotic abortions); followed by Zygomycetes (<em>Absidia corymbifera / Lichtheimia</em>, <em>Mucor</em>, <em>Rhizopus</em>); and <strong>Mortierella wolfii</strong> (highly virulent agent in New Zealand and temperate pastoral zones causing abortion followed by fatal mycotic pneumonia).</li><li><strong>Mycotic Mastitis Agents:</strong> Yeasts dominate: <strong>Candida albicans</strong>, <em>Candida krusei</em>, <em>Candida tropicalis</em>; <em>Cryptococcus neoformans</em>; <em>Malassezia</em>; and occasionally molds (<em>Aspergillus fumigatus</em>, <em>Trichosporon</em>).</li></ul><h3>(b) Predisposing Factors & Pathogenic Mechanisms</h3><ol><li><strong>Predisposing Factors:</strong><ul><li><em>Antibiotic Abuse:</em> Indiscriminate, prolonged intramammary infusion of broad-spectrum antibacterial combinations (especially tetracyclines, penicillins, aminoglycosides) destroys protective normal bacterial flora of the teat canal, creating an empty ecological niche for yeast colonization.</li><li><em>Contaminated Teat Infusion Cannulas:</em> Unhygienic multi-dose tubes, contaminated diluents, and lack of teat apex sanitization.</li><li><em>Feeding Moldy Forage:</em> Ingestion or inhalation of spoiled silage or hay containing high fungal spore counts during winter stabling.</li></ul></li><li><strong>Pathogenesis of Mycotic Abortion:</strong> Spores inhaled into lungs or ingested into the digestive tract penetrate inflamed mucous membranes, enter systemic circulation, and establish hematogenous metastasis to the caruncular capillary bed of the gravid uterus. Fungi invade fetal cotyledonary capillaries, inducing extensive obliterative arteritis, thrombosis, and necrosis. The resulting placental detachment deprives the fetus of oxygen and nutrients, culminating in third-trimester abortion (between 6th to 8th month of gestation). In <em>Mortierella wolfii</em>, post-abortion hematogenous dissemination to the maternal lungs induces acute fatal fibrino-purulent pulmonary edema.</li><li><strong>Pathogenesis of Mycotic Mastitis:</strong> Yeasts colonize teat canal keratin, ascend into the gland cistern, adhere to mammary ductular epithelium via adhesins, and form dense biofilms. Yeast hyphae/pseudohyphae elicit an intense infiltration of polymorphonuclear neutrophils, leading to purulent galactophoritis, ductal occlusion, and parenchymal induration.</li></ol><h3>(c) Pathological Lesions</h3><ul><li><strong>Placenta & Fetus in Mycotic Abortion:</strong> Cotyledons are severely enlarged, swollen, thickened, friable, and grayish-brown to dark-red with a characteristic <strong>leathery, 'Morocco-leather' appearance</strong>. Intercotyledonary areas are markedly thickened, edematous, and leathery. The aborted fetus is well-preserved (not macerated) and often displays circumscribed, elevated, grayish-white, ringworm-like plaques on the skin of the head and shoulders.</li><li><strong>Udder in Mycotic Mastitis:</strong> Markedly swollen, firm, indurated, painless or painful quarter, with regional supramammary lymph node enlargement. Milk is altered: thick, grayish-white, containing clotty mucus, flocs, or resembling water with curdled sediment. Unresponsive to conventional antibiotic therapy.</li></ul><h3>(d) Laboratory Diagnostic Protocol</h3><ol><li><strong>Specimen Collection:</strong> Aborted fetal abomasal contents, cotyledon tissue, uterine discharge, and aseptic mid-stream milk samples collected into sterile containers.</li><li><strong>Direct Microscopic Examination:</strong> Wet mount cleared with <strong>10% KOH</strong> or stained with Lactophenol Cotton Blue (LPCB):<ul><li><em>Aspergillus:</em> Parallel, septate hyphae with $45^\\circ$ acute-angle dichotomous branching.</li><li><em>Zygomycetes:</em> Broad, ribbon-like, non-septate hyphae branching at $90^\\circ$ angles.</li><li><em>Mortierella wolfii:</em> Slender, pleomorphic, non-septate branching hyphae.</li><li><em>Yeasts (Candida / Cryptococcus):</em> Round to oval budding blastoconidia with pseudohyphae; India ink mount for cryptococcal capsules.</li></ul></li><li><strong>Culture & Isolation:</strong> Inoculate onto Sabouraud Dextrose Agar (SDA) with chloramphenicol (avoid cycloheximide, as <em>Aspergillus</em> and zygomycetes are inhibited). Incubate at $25^\\circ\\text{C}$ and $37^\\circ\\text{C}$ for 3–7 days.</li><li><strong>Biochemical Speciation of Yeasts:</strong> Carbohydrate assimilation (API 20C AUX), germ tube test in serum, and growth on CHROMagar Candida.</li></ol><h3>(e) Therapeutic Management & Prevention</h3><ul><li><em>Mycotic Mastitis:</em> Immediate cessation of all antibacterial intramammary therapy. Thorough milking out (with oxytocin aid). Intramammary infusion of <strong>Nystatin</strong> (100,000–500,000 units) or <strong>Miconazole</strong>, or systemic fluconazole in severe companion cattle. Spontaneous self-cure occurs in 20–30% of cases if antibiotics are halted.</li><li><em>Control & Biosecurity:</em> Complete prohibition of moldy hay and silage to pregnant dairy cows; strict aseptic technique during intramammary infusions; single-use teat cannulas; thorough cleaning and disinfection of milking machines.</li></ul>",
      "keyPoints": [
        "Etiology: Abortion mainly by Aspergillus fumigatus, Zygomycetes, Mortierella wolfii; Mastitis by Candida, Cryptococcus, Malassezia.",
        "Predisposing factors: Indiscriminate intramammary antibiotic use kills normal flora; unhygienic teat cannulas; moldy winter silage.",
        "Placental lesions: Leathery, dark-red 'Morocco-leather' necrotic cotyledons with fetal cutaneous ringworm-like plaques.",
        "Diagnosis: Fetal abomasal contents and cotyledon KOH mount (septate 45-deg hyphae vs non-septate 90-deg hyphae); milk SDA culture.",
        "Control: Stop all antibacterial therapy; intramammary nystatin/miconazole; eliminate spoiled feed."
      ],
      "diagram": "Antibiotic abuse / Moldy feed -> Fungal overgrowth -> Hematogenous metastasis to uterus / Teat canal ascension -> Necrotic abortion / Mastitis",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2021",
        "RAJUVAS 2019"
      ]
    }
  ],
  "unit-3": [
    {
      "id": "u3-q01",
      "type": "define",
      "marks": 2,
      "question": "Define Recombinant DNA (rDNA) Technology and state its primary tools.",
      "topicId": "u3-t01",
      "answer": "<p><strong>Recombinant DNA (rDNA) Technology (Genetic Engineering)</strong> is the deliberate in vitro manipulation, cleavage, and joining of genetic material from two different biological sources or species to construct novel, chimeric, recombinant DNA molecules capable of replication and expression inside a living host organism.</p><p><strong>Core Molecular Tools:</strong> (1) <em>Enzymes:</em> Restriction endonucleases (molecular scissors), DNA ligase (molecular glue), alkaline phosphatase, and DNA polymerase; (2) <em>Cloning Vectors:</em> Plasmids, bacteriophages, cosmids; and (3) <em>Competent Host Cells:</em> <em>Escherichia coli</em>, yeast (<em>Pichia pastoris</em>), and insect/mammalian cell lines.</p>",
      "keyPoints": [
        "In vitro joining of DNA from different sources to create functional chimeric recombinant molecules.",
        "Core toolkit: Restriction endonucleases, DNA ligase, cloning vectors (plasmids), and competent host cells."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u3-q02",
      "type": "define",
      "marks": 2,
      "question": "Define Type II Restriction Endonucleases and explain Palindromic Recognition Sequences.",
      "topicId": "u3-t01",
      "answer": "<p><strong>Type II Restriction Endonucleases</strong> are bacterial defense enzymes that recognize specific, short, symmetrical nucleotide sequences (typically 4 to 8 base pairs) and cleave phosphodiester bonds at defined, reproducible sites <em>within or immediately adjacent to</em> the recognition sequence, requiring only $\\text{Mg}^{2+}$ cofactors without ATP consumption (e.g., <em>EcoRI</em>, <em>HindIII</em>, <em>BamHI</em>).</p><p>A <strong>Palindromic Sequence (Inverted Repeat)</strong> reads identically in the $5' \\to 3'$ direction on both complementary antiparallel DNA strands (e.g., EcoRI recognition site: $5'\\text{-GAATTC-}3'$ paired with $3'\\text{-CTTAAG-}5'$), allowing the enzyme homodimer to cleave symmetrically, yielding <em>cohesive (sticky)</em> or <em>blunt</em> termini.</p>",
      "keyPoints": [
        "Type II enzymes cleave within or adjacent to specific 4-8 bp palindromes requiring only Mg2+ cofactors.",
        "Palindromes read identically in 5' to 3' direction on both strands (e.g., 5'-GAATTC-3' for EcoRI)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u3-q03",
      "type": "define",
      "marks": 2,
      "question": "Define DNA Ligase and describe Phosphodiester Bond Formation.",
      "topicId": "u3-t01",
      "answer": "<p><strong>DNA Ligase (T4 DNA Ligase)</strong> is an essential recombinant enzyme that catalyzes the covalent repair or joining of adjacent broken DNA strands by synthesizing a stable <strong>$3'\\to 5'$ phosphodiester bond</strong> between an adjacent $3'\\text{-hydroxyl (-OH)}$ group and a $5'\\text{-phosphate}$ group of double-stranded DNA.</p><p><strong>Reaction Mechanism:</strong> In bacteriophage T4 ligase, the reaction is strictly dependent on <strong>ATP</strong> as an energy cofactor. T4 ligase forms a covalent enzyme-AMP intermediate, transfers AMP to the $5'\\text{-phosphate}$ of the nicked DNA strand, and facilitates attack by the adjacent $3'\\text{-OH}$ nucleophile, sealing nicks in both cohesive (sticky) and blunt-ended DNA duplexes.</p>",
      "keyPoints": [
        "Catalyzes covalent sealing of adjacent 3'-OH and 5'-phosphate ends via phosphodiester bond formation.",
        "T4 DNA ligase utilizes ATP as a cofactor to seal both cohesive (sticky) and blunt DNA termini."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "WBUAFS 2021",
        "TANUVAS 2020"
      ]
    },
    {
      "id": "u3-q04",
      "type": "define",
      "marks": 2,
      "question": "Define Multiple Cloning Site (MCS / Polylinker) and state its advantages in cloning vectors.",
      "topicId": "u3-t02",
      "answer": "<p>A <strong>Multiple Cloning Site (MCS / Polylinker)</strong> is a synthetic, engineered oligonucleotide tract inserted within a cloning vector that contains closely spaced, unique recognition cleavage sites for multiple (typically 10 to 25) different restriction endonucleases (e.g., <em>EcoRI</em>, <em>BamHI</em>, <em>HindIII</em>, <em>SalI</em>, <em>XbaI</em>).</p><p><strong>Advantages:</strong></p><ul><li>Allows unidirectional, directional cloning when the insert is digested with two distinct restriction enzymes having non-compatible sticky ends (preventing vector self-ligation).</li><li>Provides maximum flexibility to clone diverse target DNA fragments without altering other functional vector modules (origin of replication, antibiotic marker).</li><li>Often embedded within the <em>lacZ'</em> gene to facilitate simultaneous insertional inactivation and blue-white colony screening.</li></ul>",
      "keyPoints": [
        "Engineered DNA cassette in vectors containing multiple unique restriction enzyme recognition sites.",
        "Enables directional cloning with two enzymes, prevents self-ligation, and allows blue-white selection."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "KVAFSU 2022",
        "IVRI 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u3-q05",
      "type": "define",
      "marks": 2,
      "question": "Explain Blue-White Colony Selection based on Alpha-Complementation of LacZ.",
      "topicId": "u3-t03",
      "answer": "<p><strong>Blue-White Selection</strong> is a convenient one-step visual screening method used to identify bacterial colonies harboring recombinant plasmids:</p><ul><li>The cloning vector (e.g., pUC19) carries the <strong>lacZ'</strong> gene encoding the <em>$\\alpha$-peptide</em> of $\\beta$-galactosidase, while the mutant host <em>E. coli</em> strain (e.g., DH5$\\\\alpha$) produces the inactive $\\omega$-fragment. Together, they achieve functional enzymatic assembly via <strong>$\\alpha$-complementation</strong>.</li><li>Plating on agar containing <strong>X-gal</strong> (chromogenic substrate) and <strong>IPTG</strong> (inducer):<ul><li><em>Non-Recombinant Plasmids (Self-ligated):</em> Intact <em>lacZ'</em> produces active $\\beta$-galactosidase, which cleaves X-gal into an insoluble deep-blue dye $\\to$ <strong>Blue Colonies</strong>.</li><li><em>Recombinant Plasmids (With Insert):</em> Insertion of foreign DNA into the MCS disrupts the <em>lacZ'</em> open reading frame (<strong>insertional inactivation</strong>), abolishing $\\alpha$-complementation $\\to$ <strong>White / Cream Colonies</strong> (positive clones).</li></ul></li></ul>",
      "keyPoints": [
        "Screening based on alpha-complementation between vector-encoded alpha-peptide and host omega-fragment of beta-galactosidase.",
        "Insertional inactivation of lacZ' by cloned gene abolishes X-gal cleavage, yielding desired white recombinant colonies."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-q06",
      "type": "define",
      "marks": 2,
      "question": "Define Competent Cells and describe the Calcium Chloride Heat Shock method.",
      "topicId": "u3-t03",
      "answer": "<p><strong>Competent Cells</strong> are bacterial cells physically or chemically conditioned to transiently alter cell wall and membrane permeability, enabling them to take up foreign extracellular plasmid DNA from their surrounding environment.</p><p><strong>Calcium Chloride ($\\text{CaCl}_2$) Heat Shock Protocol:</strong></p><ol><li>Log-phase <em>E. coli</em> cells incubated in ice-cold $0.1\\\\text{ M}\\\\ \\\\text{CaCl}_2$. Divalent calcium cations ($\\text{Ca}^{2+}$) neutralize negative electrostatic repulsions between the phosphate backbones of plasmid DNA and host outer membrane lipopolysaccharides/phospholipids.</li><li>DNA-cell mixture subjected to a sudden <strong>thermal heat shock at $42^\\circ\\text{C}$ for 45 to 90 seconds</strong>, followed by rapid chilling on ice. The temperature differential generates transient thermal convection pores across the relaxed membrane, driving DNA influx.</li></ol>",
      "keyPoints": [
        "Bacterial cells conditioned to transiently accept exogenous plasmid DNA through their membranes.",
        "Ice-cold CaCl2 neutralizes electrostatic repulsion; heat shock at 42C for 45-90 sec creates transient pores for DNA uptake."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "LUVAS 2020",
        "DUVASU 2022"
      ]
    },
    {
      "id": "u3-q07",
      "type": "define",
      "marks": 2,
      "question": "Define Primer Melting Temperature (Tm) and state the Wallace Formula.",
      "topicId": "u3-t05",
      "answer": "<p><strong>Primer Melting Temperature ($T_m$)</strong> is the specific temperature at which <strong>50%</strong> of the oligonucleotide primer-template DNA duplexes are dissociated (denatured) into single strands, governed strictly by nucleotide length, base composition ($\\text{GC}\\%$) and salt concentration.</p><p><strong>The Wallace Rule Formula (for short primers of 14–20 bases):</strong></p><p>$$T_m = 2^\\circ\\text{C} \\\\times (A + T) + 4^\\circ\\text{C} \\\\times (G + C)$$</p><p>where $A, T, G, C$ represent the number of respective bases. In standard PCR, the optimal <strong>Annealing Temperature ($T_a$)</strong> is chosen approximately <strong>$3^\\circ\\text{C to } 5^\\circ\\text{C}$ below</strong> the lower primer $T_m$ to ensure stringent, specific target binding without non-specific primer mispriming.</p>",
      "keyPoints": [
        "Temperature at which 50% of primer-template duplexes dissociate into single strands.",
        "Wallace formula: Tm = 2*(A+T) + 4*(G+C); PCR annealing temperature is set 3-5C below primer Tm."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2021",
        "WBUAFS 2022",
        "IVRI 2019"
      ]
    },
    {
      "id": "u3-q08",
      "type": "define",
      "marks": 2,
      "question": "Define Taq DNA Polymerase and state its biological source and enzymatic properties.",
      "topicId": "u3-t05",
      "answer": "<p><strong>Taq DNA Polymerase</strong> is a thermostable, single-subunit DNA polymerase enzyme ($94\\text{ kDa}$) isolated from the thermophilic eubacterium <strong>Thermus aquaticus</strong>, which inhabits hydrothermal hot springs ($70\\text{--}75^\\circ\\text{C}$).</p><p><strong>Enzymatic Properties:</strong></p><ul><li>Maintains extraordinary thermal stability: half-life exceeding 40 minutes at $95^\\circ\\text{C}$, allowing it to survive repeated boiling denaturation steps of PCR without re-addition.</li><li>Optimal DNA synthesis rate of 60 nucleotides/second at <strong>$72^\\circ\\text{C}$</strong>.</li><li>Possesses $5' \\to 3'$ polymerase and $5' \\to 3'$ exonuclease activities, but <strong>lacks $3' \\to 5'$ proofreading exonuclease activity</strong> (error rate $\\sim 1\\times 10^{-4}$), adding a non-templated single adenine (A) nucleotide overhang at the $3'$ ends (used in TA cloning).</li></ul>",
      "keyPoints": [
        "Thermostable DNA polymerase from Thermus aquaticus with half-life >40 min at 95C.",
        "Operates optimally at 72C; lacks 3' to 5' proofreading exonuclease activity; adds single 3'-A overhangs."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "RAJUVAS 2020",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u3-q09",
      "type": "define",
      "marks": 2,
      "question": "Define Reverse Transcription PCR (RT-PCR) and state its veterinary applications.",
      "topicId": "u3-t05",
      "answer": "<p><strong>Reverse Transcription PCR (RT-PCR)</strong> is a specialized two-step enzymatic variant of PCR used to amplify and detect specific ribonucleic acid (RNA) targets by initially converting single-stranded RNA into complementary DNA (<strong>cDNA</strong>) catalyzed by <strong>Reverse Transcriptase</strong> (e.g., Moloney Murine Leukemia Virus M-MLV or AMV reverse transcriptase) using oligo(dT), random hexamer, or gene-specific primers, followed by conventional PCR amplification of the synthesized cDNA.</p><p><strong>Veterinary Applications:</strong> Gold-standard diagnostic tool for all RNA viral epizootics: Foot-and-Mouth Disease (FMD), Avian Influenza (H5N1), Classical Swine Fever (CSF), Newcastle Disease (NDV), Canine Distemper, and Rabies virus.</p>",
      "keyPoints": [
        "Enzymatic conversion of target RNA to cDNA by Reverse Transcriptase followed by standard PCR amplification.",
        "Vital for diagnosing RNA viruses: FMDV, Avian Influenza, NDV, Rabies, and Canine Distemper."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u3-q10",
      "type": "define",
      "marks": 2,
      "question": "Define DNA Microarray and explain its diagnostic principle.",
      "topicId": "u3-t06",
      "answer": "<p>A <strong>DNA Microarray (DNA Chip / Biochip)</strong> is a solid microscopic platform (chemically treated glass slide, silicon wafer, or nylon membrane) upon which thousands of specific, microscopic, single-stranded oligonucleotide probes or cDNA fragments are immobilized in a high-density, precise two-dimensional addressable grid.</p><p><strong>Diagnostic Principle:</strong> Fluorescently labeled target cDNA or DNA fragments synthesized from clinical samples are denatured and hybridized onto the chip. Target sequences bind specifically to their complementary immobilized probes following Watson-Crick base pairing. Unbound targets are washed away, and laser scanning detects localized fluorescence intensity, allowing simultaneous parallel expression profiling of thousands of microbial virulence genes or multi-pathogen screening on a single chip.</p>",
      "keyPoints": [
        "High-density addressable grid of thousands of immobilized oligonucleotide probes on a glass/silicon chip.",
        "Watson-Crick hybridization of fluorescently labeled target cDNA measured by laser scanner for high-throughput profiling."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "LUVAS 2021",
        "WBUAFS 2020",
        "DUVASU 2023"
      ]
    },
    {
      "id": "u3-q11",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between a Genomic DNA Library and a cDNA Library.",
      "topicId": "u3-t07",
      "answer": "<p>A <strong>DNA Library</strong> is a comprehensive collection of cloned DNA fragments representing an organism's genetic repertoire stored in recombinant host vectors:</p><ul><li><strong>Genomic DNA Library:</strong> Contains clones representing the <em>entire total nuclear and organellar genome</em> of an organism, constructed by partial restriction endonuclease digestion of total genomic DNA. It includes coding exons, non-coding introns, promoters, telomeres, and intergenic repetitive elements.</li><li><strong>cDNA Library:</strong> Contains clones synthesized exclusively from <em>purified messenger RNA (mRNA)</em> via reverse transcriptase. It represents only the active, functionally transcribed genes (exons only, without introns or promoters) expressed in a specific tissue at a specific physiological developmental stage.</li></ul>",
      "keyPoints": [
        "Genomic library: Total genomic DNA (introns, promoters, exons) cloned in vectors.",
        "cDNA library: Synthesized from mature mRNA via reverse transcriptase; contains only expressed coding exons."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2020",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u3-q12",
      "type": "define",
      "marks": 2,
      "question": "Define the Budapest Treaty and describe its role in patenting biological microorganisms.",
      "topicId": "u3-t10",
      "answer": "<p>The <strong>Budapest Treaty on the International Recognition of the Deposit of Microorganisms for the Purposes of Patent Procedure (1977)</strong> is an international intellectual property treaty administered by WIPO.</p><p><strong>Key Role:</strong> For patenting biological inventions involving microorganisms or cell lines that cannot be sufficiently disclosed in written text, the treaty stipulates that depositing a viable culture of the biological material with an officially recognized <strong>International Depositary Authority (IDA)</strong> (e.g., MTCC Chandigarh in India, ATCC in USA) on or before the patent filing date satisfies the statutory disclosure requirement across all contracting member states, eliminating the burden of depositing in multiple individual countries.</p>",
      "keyPoints": [
        "WIPO international treaty for the legal deposit of patentable microorganisms with an International Depositary Authority (IDA).",
        "Single deposit at an IDA (e.g., MTCC Chandigarh, ATCC) satisfies patent disclosure requirements across all member nations."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2022",
        "KVAFSU 2020",
        "IVRI 2021"
      ]
    },
    {
      "id": "u3-q13",
      "type": "short",
      "marks": 5,
      "question": "Enumerate and describe the essential properties of an ideal Plasmid Cloning Vector with a labeled structural diagram/features of pBR322 / pUC19.",
      "topicId": "u3-t02",
      "answer": "<p>An <strong>ideal plasmid cloning vector</strong> is an engineered, double-stranded circular extrachromosomal DNA vehicle designed to transport foreign target DNA into host cells and replicate faithfully. It must possess four indispensable structural modules:</p><ol><li><strong>Origin of Replication (oriC):</strong> A dedicated nucleotide sequence that initiates independent plasmid replication using host enzymatic machinery, determining the plasmid's <em>host range</em> and <em>copy number</em> (e.g., relaxed <em>pUC</em> ori yields 500–700 copies per cell; stringent <em>pMB1</em> ori in pBR322 yields 15–20 copies).</li><li><strong>Selectable Genetic Markers:</strong> Genes that confer a readily identifiable phenotype (typically antibiotic resistance) to distinguish transformed host cells from non-transformed cells:<ul><li><em>pBR322:</em> Encodes Ampicillin resistance ($amp^r$ / $\\beta$-lactamase) and Tetracycline resistance ($tet^r$).</li><li><em>pUC19:</em> Encodes $amp^r$ marker.</li></ul></li><li><strong>Multiple Cloning Site (MCS / Polylinker):</strong> A cluster of unique restriction enzyme cleavage sites located in a non-essential region. In pUC19, an MCS with 13 unique sites is nested within the 5' region of the <em>lacZ'</em> gene.</li><li><strong>Screenable Marker (Insertional Inactivation):</strong> Insertion of a foreign DNA fragment into a restriction site located within a marker gene disrupts its coding sequence:<ul><li>In pBR322, cloning into the <em>BamHI</em> site inactivates $tet^r$, allowing replica plating screening (Ampicillin-resistant, Tetracycline-sensitive).</li><li>In pUC19, cloning disrupts <em>lacZ'</em>, yielding white recombinant colonies on X-gal/IPTG plates.</li></ul></li><li><strong>Small Molecular Size ($< 5\\text{--}10\\text{ kb}$):</strong> Facilitates high transformation efficiency, resistance to physical shearing during isolation, and accommodates larger exogenous inserts.</li></ol>",
      "keyPoints": [
        "Origin of replication (ori): Governs copy number and autonomous replication.",
        "Selectable markers: Antibiotic resistance genes (amp^r, tet^r) for survivor selection on selective media.",
        "Multiple cloning site (MCS): Unique restriction enzyme sites enabling directional cloning.",
        "Screenable marker / Insertional inactivation: Distinguishes recombinants from non-recombinants (pBR322 replica plating, pUC19 blue-white screening)."
      ],
      "diagram": "Plasmid Vector: [ori] --- [amp^r] --- [MCS inside lacZ']",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-q14",
      "type": "diff",
      "marks": 5,
      "question": "Compare Southern, Northern, and Western Blotting techniques with a structured comparative table.",
      "topicId": "u3-t04",
      "answer": "<p>Blotting techniques are analytical macromolecular transfer methods used to resolve, immobilize, and detect specific DNA, RNA, or protein molecules from complex biological mixtures:</p>",
      "keyPoints": [
        "Southern: DNA target, agarose gel, DNA/RNA labeled probe detection (invented by Edwin Southern).",
        "Northern: RNA target, denaturing agarose gel, labeled probe detection for gene expression.",
        "Western: Protein target, SDS-PAGE separation, specific antibody-enzyme conjugate detection."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Southern, Northern, and Western Blotting",
        "headers": [
          "Parameter / Feature",
          "Southern Blotting",
          "Northern Blotting",
          "Western Blotting"
        ],
        "rows": [
          [
            "Target Molecule",
            "<strong>DNA</strong> (genomic DNA or restriction fragments)",
            "<strong>RNA</strong> (mRNA, rRNA, viral RNA)",
            "<strong>Proteins</strong> (antigens, viral structural proteins)"
          ],
          [
            "Inventor / Origin",
            "Edwin Southern (1975)",
            "Alwine, Kemp & Stark (1977, pun on Southern)",
            "Towbin et al. / Burnette (1979/1981)"
          ],
          [
            "Electrophoresis Medium",
            "Agarose gel electrophoresis (neutral or alkaline)",
            "Formaldehyde or glyoxal denaturing agarose gel",
            "Discontinuous <strong>SDS-PAGE</strong> (Laemmli buffer system)"
          ],
          [
            "Pre-transfer Treatment",
            "Depurination (dilute HCl) and alkaline denaturation (0.5 M NaOH) into single strands",
            "None (RNA already single-stranded; kept denatured by formaldehyde)",
            "Equilibration in Towbin transfer buffer (Tris-glycine-methanol)"
          ],
          [
            "Blotting Membrane",
            "Nitrocellulose or positively charged Nylon membrane",
            "Positively charged Nylon membrane",
            "Nitrocellulose or <strong>PVDF (polyvinylidene difluoride)</strong>"
          ],
          [
            "Transfer Mechanism",
            "Capillary upward transfer using high-salt buffer (20X SSC)",
            "Capillary upward transfer using 20X SSC",
            "<strong>Electroblotting</strong> (electric field transfer in a tank or semi-dry system)"
          ],
          [
            "Detection Probe / Ligand",
            "Radioactive ($^{32}\text{P}$) or DIG-labeled single-stranded DNA/RNA probe",
            "Radioactive ($^{32}\text{P}$) or DIG-labeled antisense RNA/cDNA probe",
            "Primary specific antibody + Enzyme-conjugated secondary antibody (HRP or AP)"
          ],
          [
            "Detection Readout",
            "Autoradiography or chemiluminescent X-ray film exposure",
            "Autoradiography or chemiluminescent imaging",
            "Chromogenic substrate (DAB/TMB) or enhanced chemiluminescence (ECL)"
          ],
          [
            "Veterinary Application",
            "RFLP genotyping, transgene verification in livestock",
            "Quantitating cytokine or viral gene expression",
            "Confirmatory diagnosis of BSE prions, Equine Infectious Anemia, Canine Distemper"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u3-q15",
      "type": "short",
      "marks": 5,
      "question": "Describe the three fundamental steps of a standard Polymerase Chain Reaction (PCR) thermal cycle and the exponential amplification equation.",
      "topicId": "u3-t05",
      "answer": "<p>The <strong>Polymerase Chain Reaction (PCR)</strong>, conceived by Kary Mullis (1983), is an in vitro enzymatic method for the exponential amplification of a specific target DNA sequence across repeated automated thermal cycles:</p><ol><li><strong>1. Denaturation Step ($94^\\circ\\text{C}\\text{ to }95^\\circ\\text{C}$ for 30–60 seconds):</strong> Thermal energy disrupts the non-covalent hydrogen bonds between complementary base pairs of double-stranded template DNA, unwinding the duplex into two single-stranded DNA templates without breaking covalent phosphodiester backbones.</li><li><strong>2. Primer Annealing Step ($50^\\circ\\text{C}\\text{ to }65^\\circ\\text{C}$ for 30–45 seconds):</strong> Reaction temperature is dropped to allow forward and reverse oligonucleotide primers to anneal specifically to their complementary target sequences flanking the region of interest. Optimal temperature ($T_a$) is maintained $3\\text{--}5^\\circ\\text{C}$ below the primer $T_m$.</li><li><strong>3. Primer Extension / Elongation Step ($72^\\circ\\text{C}$ for 1 minute per kilobase):</strong> Temperature is elevated to the enzymatic optimum for <em>Taq DNA polymerase</em> ($72^\\circ\\text{C}$). The polymerase binds to the primed $3'\\text{-OH}$ terminus and synthesizes complementary daughter strands in the $5' \\to 3'$ direction using free deoxynucleotide triphosphates (dNTPs) and $\\text{Mg}^{2+}$ cofactors.</li></ol><p><strong>Exponential Kinetics:</strong> Following $n$ thermal cycles, the theoretical yield of target DNA amplicons is given by the formula:</p><p>$$Y = N_0 \\\\times (1 + E)^n$$</p><p>where $N_0$ is the initial copy number and $E$ is reaction efficiency ($0 \\le E \\le 1.0$). Assuming 100% efficiency ($E=1$), theoretical amplification follows $Y = N_0 \\\\cdot 2^n$. After 30 cycles, a single target copy is amplified over $10^9$-fold ($2^{30} \\approx 1.07 \\\\times 10^9$ copies).</p>",
      "keyPoints": [
        "Three steps: Denaturation (94-95C, hydrogen bond disruption), Annealing (50-65C, primer binding), Extension (72C, Taq synthesis).",
        "Taq extends in 5' to 3' direction at 1 kb/min.",
        "Mathematical yield: Y = N0 * (1 + E)^n; 30 cycles yields >1 billion copies (2^30)."
      ],
      "diagram": "Denature (95C) -> Anneal (55C) -> Extend (72C) [Repeated 30-35x] -> Amplicon",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "RAJUVAS 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u3-q16",
      "type": "diff",
      "marks": 5,
      "question": "Compare SYBR Green Dye and TaqMan Hydrolysis Probes in Real-Time Quantitative PCR (qPCR).",
      "topicId": "u3-t05",
      "answer": "<p>Real-Time Quantitative PCR (qPCR) monitors target amplification continuously during cycling using fluorescent chemistries categorized into non-specific intercalating dyes and sequence-specific fluorogenic probes:</p>",
      "keyPoints": [
        "SYBR Green: Non-specific double-stranded DNA intercalating dye; inexpensive; mandates melting curve (Tm) analysis to rule out primer-dimers.",
        "TaqMan: Fluorogenic dual-labeled sequence-specific probe (reporter + quencher); high specificity; allows multiplexing in single tube.",
        "TaqMan mechanism: 5' to 3' exonuclease activity of Taq cleaves probe, liberating reporter dye from FRET quenching."
      ],
      "diagram": "",
      "table": {
        "title": "Comparison: SYBR Green vs TaqMan Hydrolysis Probes in Real-Time qPCR",
        "headers": [
          "Feature / Dimension",
          "SYBR Green I Dye Chemistry",
          "TaqMan Fluorogenic Hydrolysis Probe"
        ],
        "rows": [
          [
            "Chemistry Type",
            "Non-specific double-stranded DNA (dsDNA) intercalating fluorophore",
            "Sequence-specific oligonucleotide dual-labeled probe (Reporter + Quencher)"
          ],
          [
            "Mechanism of Fluorescence",
            "Binds minor groove of any dsDNA; fluorescence increases 1000-fold upon binding",
            "Förster Resonance Energy Transfer (FRET); 5' exonuclease of Taq cleaves probe, separating Reporter (FAM) from Quencher (BHQ-1)"
          ],
          [
            "Specificity",
            "Moderate; binds target amplicons as well as non-specific artifacts (primer-dimers)",
            "Extremely high; fluorescence generated only when both primers AND probe hybridize specifically"
          ],
          [
            "Post-PCR Melting Curve ($T_m$)",
            "<strong>Mandatory (Melt Curve / Dissociation Analysis)</strong> to differentiate true target peak from primer-dimers",
            "Not required (inherently sequence-specific)"
          ],
          [
            "Multiplexing Capability",
            "Difficult or impossible (cannot distinguish amplicons of different targets in the same tube)",
            "Excellent; multiple distinct targets amplified in a single well using distinct fluorophores (FAM, VIC, ROX, Cy5)"
          ],
          [
            "Cost & Design Complexity",
            "Low cost; uses standard PCR primers without specialized probe design",
            "High cost; requires custom dual-labeled probe synthesis for each target gene"
          ],
          [
            "Veterinary Applications",
            "Routine laboratory research, pathogen quantification",
            "National reference diagnosis for ASF, Avian Influenza, and FMDV typing"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u3-q17",
      "type": "short",
      "marks": 5,
      "question": "Describe the principle and operational mechanics of Sodium Dodecyl Sulfate Polyacrylamide Gel Electrophoresis (SDS-PAGE) under the Laemmli buffer system.",
      "topicId": "u3-t04",
      "answer": "<p><strong>SDS-PAGE (Laemmli System, 1970)</strong> is a high-resolution discontinuous electrophoretic technique used to separate proteins strictly according to their <strong>molecular mass ($\\text{kDa}$)</strong>, independent of intrinsic charge or tertiary conformation.</p><p><strong>Core Chemical Principles:</strong></p><ol><li><strong>Denaturation & Negative Charge Coating (SDS):</strong> Sodium Dodecyl Sulfate (an anionic detergent) binds to polypeptide backbones at a constant stoichiometric ratio of <strong>$1.4\\text{ g SDS per gram of protein}$</strong> (approx. one SDS molecule per two amino acids). SDS imparts an overwhelming, uniform negative charge density that completely swamps intrinsic charges, giving all proteins identical charge-to-mass ratios and converting them into linearized rod-like shapes.</li><li><strong>Disulfide Reduction:</strong> Heating sample buffer with <strong>$\\beta$-mercaptoethanol ($\\beta$-ME) or Dithiothreitol (DTT)</strong> at 95°C reduces covalent disulfide bonds (-S-S-), dissociating multi-subunit complexes into individual polypeptide monomers.</li></ol><p><strong>The Discontinuous Gel Architecture:</strong></p><ul><li><em>Stacking Gel (Top layer, 4% acrylamide, pH 6.8):</em> Large pore size. Operates by <strong>isotachophoresis</strong>: Glycine molecules exist primarily as zwitterions (net neutral charge) with very slow mobility (trailing ions), while chloride ions ($\\text{Cl}^-$) from Tris-HCl possess high negative mobility (leading ions). Proteins are compressed between leading $\\text{Cl}^-$ and trailing glycine into an ultra-thin, concentrated starting band before entering the resolving gel.</li><li><em>Resolving (Separating) Gel (Bottom layer, 10–12% acrylamide, pH 8.8):</em> At alkaline pH 8.8, glycine becomes fully ionized ($\\text{glycinate}^-$), speeding past the proteins. Proteins enter the molecular sieving matrix, where their migration rate is <strong>inversely proportional to the logarithm of their molecular weight ($\\log_{10}\\text{MW}$)</strong>. Visualized by Coomassie Brilliant Blue R-250 or Silver staining.</li></ul>",
      "keyPoints": [
        "SDS coats proteins at 1.4 g SDS/g protein, conferring uniform negative charge-to-mass ratio and linear shape.",
        "Beta-mercaptoethanol reduces disulfide bonds into individual monomers.",
        "Discontinuous system: 4% Stacking gel (pH 6.8) stacks proteins via isotachophoresis between leading Cl- and trailing glycine.",
        "Resolving gel (pH 8.8) separates proteins by molecular sieving inversely proportional to log molecular weight."
      ],
      "diagram": "Stacking Gel (pH 6.8: Cl- -> Proteins -> Glycine) => Resolving Gel (pH 8.8: Sieving by Size)",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2021",
        "KVAFSU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u3-q18",
      "type": "short",
      "marks": 5,
      "question": "Describe the Sanger Dideoxy DNA Sequencing method (Chain Termination) and compare it with Next-Generation Sequencing (NGS).",
      "topicId": "u3-t08",
      "answer": "<p>The <strong>Sanger Sequencing Method (Dideoxy Chain Termination)</strong>, developed by Frederick Sanger (1977), is the classical gold-standard method for determining the precise linear nucleotide sequence of a DNA molecule.</p><p><strong>Principle & Mechanism:</strong></p><ul><li>In vitro DNA synthesis using a single-stranded DNA template, a specific primer, DNA polymerase, and a mixture of normal <strong>deoxynucleotide triphosphates (dNTPs: dATP, dCTP, dGTP, dTTP)</strong>.</li><li>Crucially, the reaction includes a low concentration of specialized <strong>$2',3'\\text{-dideoxynucleotide triphosphates (ddNTPs: ddATP, ddCTP, ddGTP, ddTTP)}$</strong>.</li><li>ddNTPs lack the <strong>$3'\\text{-hydroxyl (-OH) group}$</strong> required for phosphodiester bond formation with the incoming nucleotide. Whenever a DNA polymerase incorporates a ddNTP into the growing chain, <strong>irreversible chain termination</strong> occurs at that specific base.</li><li>In modern automated Sanger sequencing, each of the four ddNTPs is labeled with a distinct, non-overlapping <strong>fluorescent dye</strong> (e.g., green for ddA, blue for ddC, black/yellow for ddG, red for ddT) in a single reaction tube. The resulting nested terminated fragments are separated by capillary gel electrophoresis, and an argon laser excites the passing dyes to generate a four-color <strong>electropherogram sequence trace</strong> with read lengths up to 800–1000 bp.</li></ul><p><strong>Comparison with Next-Generation Sequencing (NGS):</strong> While Sanger sequencing processes single DNA fragments with high accuracy ($99.99\\%$) and long read lengths, <strong>Next-Generation Sequencing (Illumina, Oxford Nanopore)</strong> performs massive parallel sequencing of millions to billions of short DNA reads simultaneously, enabling whole-genome sequencing of animal pathogens (e.g., FMDV, African Swine Fever) within hours.</p>",
      "keyPoints": [
        "Chain termination: ddNTPs lack 3'-OH group, halting DNA polymerase elongation upon incorporation.",
        "Automated sequencing uses four distinct fluorophore-tagged ddNTPs run on capillary electrophoresis, generating electropherograms.",
        "Sanger is low-throughput/high-accuracy gold standard (up to 1000 bp); NGS performs massively parallel high-throughput whole-genome sequencing."
      ],
      "diagram": "Normal dNTP (has 3'-OH => extends) vs ddNTP (lacks 3'-OH => terminates chain)",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u3-q19",
      "type": "short",
      "marks": 5,
      "question": "Describe the applications of DNA Fingerprinting techniques (RFLP and RAPD) in veterinary parentage verification, forensics, and epidemiological outbreak tracing.",
      "topicId": "u3-t08",
      "answer": "<p><strong>DNA Fingerprinting (Molecular Profiling)</strong> relies on detecting polymorphic variations in genomic nucleotide sequences across individuals within animal populations:</p><ol><li><strong>Restriction Fragment Length Polymorphism (RFLP):</strong><ul><li><em>Principle:</em> Genomic DNA digested with specific restriction endonucleases produces variable-sized fragments due to mutations (substitutions, insertions, deletions) that create or abolish restriction enzyme cleavage sites.</li><li><em>Detection:</em> DNA fragments separated by agarose gel electrophoresis, transferred to nylon membranes by Southern blotting, and hybridized with labeled probes targeting Variable Number Tandem Repeats (VNTRs) or specific genes (PCR-RFLP).</li><li><em>Applications:</em> Molecular differentiation of field vaccine strains from virulent field strains (e.g., differentiation of <em>Brucella abortus</em> S19 vaccine from wild field strains); strain typing of <em>Mycobacterium bovis</em>.</li></ul></li><li><strong>Random Amplified Polymorphic DNA (RAPD):</strong><ul><li><em>Principle:</em> PCR amplification using single, short (typically 10-mer) arbitrary oligonucleotide primers under low-stringency annealing conditions ($35\\text{--}37^\\circ\\text{C}$). The primer anneals to multiple random sites across the genome; amplification occurs wherever two primer binding sites lie on opposite strands within amplifiable distance ($< 2\\text{ kb}$).</li><li><em>Applications:</em> Rapid genetic diversity analysis without prior sequence knowledge; epidemiological outbreak tracking of <em>Pasteurella multocida</em> serotypes and <em>Salmonella</em> outbreaks in poultry flocks.</li></ul></li><li><strong>Short Tandem Repeats (STRs / Microsatellites):</strong> Multiplex PCR of hypervariable di-, tri-, or tetra-nucleotide repeats (e.g., $(\\text{CA})_n$) standardized by the International Society for Animal Genetics (ISAG) for equine, bovine, and canine pedigree parentage certification and wildlife forensics (poaching verification).</li></ol>",
      "keyPoints": [
        "RFLP: Restriction site loss or gain produces distinct band patterns; PCR-RFLP differentiates vaccine from field strains.",
        "RAPD: Single arbitrary 10-mer primer at low stringency annealing for rapid outbreak strain fingerprinting.",
        "STR Microsatellites: ISAG-standardized multiplex markers for animal parentage verification and forensic tracking."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "TANUVAS 2021",
        "MAFSU 2022",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u3-q20",
      "type": "short",
      "marks": 5,
      "question": "Discuss Recombinant Vaccines in veterinary medicine: Classification, advantages over conventional vaccines, and hallmark veterinary examples.",
      "topicId": "u3-t01",
      "answer": "<p><strong>Recombinant Vaccines</strong> are third-generation biologicals developed using recombinant DNA technology to elicit robust, targeted protective immunity while eliminating the hazards of live virulent revertants and incomplete inactivation associated with conventional vaccines.</p><p><strong>Major Classes & Veterinary Hallmarks:</strong></p><ol><li><strong>Recombinant Subunit Vaccines:</strong> Protective viral/bacterial surface immunogens are cloned and expressed in heterologous expression systems (yeast, baculovirus, or <em>E. coli</em>). The purified protein is formulated with adjuvants. <em>Veterinary Example:</em> Recombinant Porcine Circovirus Type 2 (PCV2) Cap protein expressed in baculovirus; FMDV VP1 subunit vaccine.</li><li><strong>Live Recombinant Vectored Vaccines:</strong> The gene encoding a foreign protective immunogen is inserted into the non-essential genomic region of a safe, replication-competent or replication-deficient viral vector. <em>Veterinary Examples:</em> Canarypox-vectored Canine Distemper and Rabies vaccines (Recombitek); Turkey Herpesvirus (HVT) vector expressing VP2 gene of Infectious Bursal Disease Virus (IBDV) administered in ovo to chicks.</li><li><strong>DNA (Nucleic Acid) Vaccines:</strong> Bacterial plasmids engineered with a eukaryotic promoter (CMV) driving expression of the target antigen gene are injected intramuscularly. Host myocytes and antigen-presenting cells express the antigen endogenously, triggering both MHC-I (CD8+ cytotoxic T cells) and MHC-II (antibodies) responses. <em>Example:</em> DNA vaccine against West Nile Virus in horses.</li><li><strong>Gene-Deleted Marker Vaccines (DIVA):</strong> Targeted deletion of a non-essential virulence gene (e.g., $gE$ gene deleted from Pseudorabies / Aujeszky's virus or Bovine Herpesvirus-1). Enables <strong>Differentiating Infected from Vaccinated Animals (DIVA)</strong> via companion diagnostic ELISAs.</li></ol>",
      "keyPoints": [
        "Subunit vaccines: Heterologous expression of immunogenic capsid/surface proteins (e.g., PCV2 baculovirus subunit).",
        "Vectored vaccines: Canarypox or HVT vectors carrying foreign antigen genes (e.g., HVT-IBD for in ovo poultry vaccination).",
        "DNA vaccines: Plasmids with eukaryotic promoters driving endogenous expression of antigen via MHC-I and MHC-II.",
        "Gene-deleted DIVA vaccines: Deletion of non-essential virulence genes (e.g., gE deletion in BHV-1) to distinguish field infection from vaccination."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u3-q21",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive, step-by-step account of Recombinant DNA Cloning Strategy for expressing a protective viral antigen gene in an E. coli expression host: (a) Gene Identification & PCR Amplification, (b) Restriction Cleavage & Directional Ligation, (c) Competent Cell Preparation & Heat Shock Transformation, (d) Selection of Recombinants (Blue-White & Colony PCR), and (e) Protein Expression Analysis.",
      "topicId": "u3-t01",
      "answer": "<h3>(a) Target Gene Identification and PCR Primer Design</h3><p>To produce a recombinant veterinary subunit immunogen (e.g., the <strong>VP2 capsid protein of Canine Parvovirus</strong> or <strong>FMDV VP1</strong>):</p><ol><li><strong>Template Retrieval:</strong> Viral genomic RNA or DNA is isolated from clinical tissue. For RNA viruses, reverse transcription (RT) synthesizes first-strand cDNA.</li><li><strong>Primer Engineering:</strong> Forward and reverse primers are designed flanking the complete open reading frame (ORF). To ensure <strong>directional (unidirectional) cloning</strong>, distinct non-compatible restriction enzyme recognition sequences (e.g., <em>BamHI</em> on forward primer and <em>HindIII</em> on reverse primer) are appended to the $5'$ ends, prefixed by 4–6 protective flanking base pairs to facilitate endonuclease binding.</li><li><strong>High-Fidelity Amplification:</strong> PCR is conducted using a high-fidelity proofreading DNA polymerase (e.g., <em>Pfu</em> or <em>Q5</em>) to prevent amplification errors. The specific amplicon is validated by 1% agarose gel electrophoresis and purified using a silica spin-column.</li></ol><h3>(b) Restriction Endonuclease Digestion and Directional Ligation</h3><ul><li><strong>Double Digestion:</strong> Both the purified PCR amplicon and the plasmid expression vector (e.g., <strong>pET-28a(+)</strong> harboring a T7 promoter, kanamycin resistance marker, and N-terminal $6\\times\\text{His-tag}$) are digested simultaneously with <em>BamHI</em> and <em>HindIII</em> at $37^\\circ\\text{C}$ for 2 hours.</li><li><strong>Alkaline Phosphatase Treatment:</strong> The linearized vector is treated with <em>Calf Intestinal Alkaline Phosphatase (CIAP)</em> to remove $5'\\text{-phosphate}$ groups, preventing vector self-ligation.</li><li><strong>Ligation Reaction:</strong> Purified linearized vector and insert are combined at a stoichiometric <strong>vector-to-insert molar ratio of 1:3</strong> in the presence of <strong>T4 DNA Ligase</strong> and $1\\times$ ligation buffer containing ATP, incubated overnight at $16^\\circ\\text{C}$. The complementary asymmetric sticky ends align, and T4 ligase seals the phosphodiester backbones.</li></ul><h3>(c) Competent Cell Preparation and Transformation</h3><ol><li><strong>Host Preparation:</strong> Cloning host <em>E. coli</em> DH5$\\\\alpha$ cells are grown to mid-log phase ($\\text{OD}_{600} = 0.4\\text{--}0.5$) and made chemically competent by washing with ice-cold $0.1\\\\text{ M}\\\\ \\\\text{CaCl}_2$.</li><li><strong>Transformation:</strong> $5\\\\ \\\\mu\\\\text{L}$ of ligation mixture is added to $100\\\\ \\\\mu\\\\text{L}$ of competent cells and incubated on ice for 30 minutes.</li><li><strong>Heat Shock:</strong> The suspension is subjected to a precise heat shock at <strong>$42^\\circ\\text{C}$ for 60 seconds</strong>, then rapidly returned to ice for 2 minutes.</li><li><strong>Phenotypic Outgrowth:</strong> $900\\\\ \\\\mu\\\\text{L}$ of warm SOC or Luria-Bertani (LB) broth is added, and cells are incubated at $37^\\circ\\text{C}$ with vigorous shaking (200 rpm) for 1 hour to allow expression of the plasmid antibiotic resistance gene ($\\beta$-lactamase or aminoglycoside phosphotransferase).</li></ol><h3>(d) Screening and Identification of Recombinant Clones</h3><ul><li><strong>Antibiotic Selection:</strong> Transformed culture is plated onto selective LB agar containing Kanamycin ($50\\\\ \\\\mu\\\\text{g/mL}$) or Ampicillin ($100\\\\ \\\\mu\\\\text{g/mL}$). Non-transformed cells lack the resistance plasmid and are killed.</li><li><strong>Blue-White Selection (if using pUC vectors):</strong> Plated on LB with X-gal ($40\\\\ \\\\mu\\\\text{g/mL}$) and IPTG ($0.1\\\\text{ mM}$). Disruption of <em>lacZ'</em> by the insert yields white recombinant colonies, while intact self-ligated vectors form blue colonies.</li><li><strong>Colony PCR:</strong> Individual white colonies are picked directly with a sterile pipette tip, touched onto a master plate, and lysed in a PCR tube. PCR amplification using vector-specific universal primers (e.g., T7 promoter and T7 terminator) confirms the presence and exact molecular size of the inserted gene without prior plasmid extraction.</li><li><strong>Sanger Sequencing:</strong> Plasmids extracted via alkaline lysis are sequenced to verify reading frame continuity, absence of point mutations, and correct in-frame alignment with the $6\\times\\text{His-tag}$.</li></ul><h3>(e) Recombinant Protein Induction and Expression Analysis</h3><ol><li><strong>Expression Host Transformation:</strong> Validated recombinant plasmid transformed into expression host <strong>E. coli BL21(DE3)</strong>, which harbors the bacteriophage T7 RNA polymerase gene under control of the lacUV5 promoter.</li><li><strong>Induction:</strong> Cells grown in LB broth to $\\text{OD}_{600} = 0.6$, then induced with <strong>$1.0\\\\text{ mM IPTG (Isopropyl }\\beta\\text{-D-1-thiogalactopyranoside)}$</strong> at $37^\\circ\\text{C}$ for 4 hours. IPTG binds the LacI repressor, inducing explosive transcription of the target gene by T7 RNA polymerase.</li><li><strong>SDS-PAGE & Western Blot:</strong> Bacterial lysates separated on 12% SDS-PAGE show an overexpressed, distinct target protein band. Western blotting using anti-His-tag monoclonal antibodies or convalescent animal antiserum confirms the target antigen's identity and immunogenicity.</li></ol>",
      "keyPoints": [
        "Primer engineering: Appending non-compatible restriction sites (BamHI/HindIII) for directional cloning.",
        "Ligation: 1:3 vector-to-insert molar ratio with T4 DNA ligase and CIAP dephosphorylation to prevent self-ligation.",
        "Transformation: CaCl2 ice-cold incubation followed by 42C heat shock for 60 seconds into DH5-alpha.",
        "Selection: Antibiotic plate selection, blue-white screening, colony PCR, and Sanger sequencing confirmation.",
        "Expression: BL21(DE3) host induced with IPTG; protein validated via SDS-PAGE and Western blot."
      ],
      "diagram": "PCR Target -> Double Digest -> Vector Ligation -> CaCl2 Heat Shock -> White Colony -> IPTG Induction",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u3-q22",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive treatise on the Polymerase Chain Reaction (PCR) and its Diagnostic Variants in veterinary clinical microbiology: (a) Reaction Components & Kinetics, (b) Nested PCR, (c) Multiplex PCR, (d) Real-Time Quantitative PCR (qPCR), and (e) Quality Control & Contamination Prevention.",
      "topicId": "u3-t05",
      "answer": "<h3>(a) Standard PCR Components & Thermal Kinetics</h3><p>PCR is an automated enzymatic target amplification system requiring five indispensable biochemical components assembled in a master mix:</p><ul><li><strong>1. DNA Template ($1\\text{--}50\\text{ ng}$):</strong> Highly purified, inhibitor-free viral or bacterial nucleic acid.</li><li><strong>2. Oligonucleotide Primers ($0.2\\text{--}0.5\\\\ \\\\mu\\\\text{M}$):</strong> Paired forward and reverse single-stranded synthetic primers (18–25 nucleotides long, GC content 40–60%, $T_m 55\\text{--}65^\\circ\\text{C}$).</li><li><strong>3. Thermostable DNA Polymerase (1–2.5 U):</strong> <em>Taq DNA polymerase</em> or high-fidelity proofreading enzymes.</li><li><strong>4. Deoxynucleoside Triphosphates (dNTPs, $200\\\\ \\\\mu\\\\text{M}$ each):</strong> Equimolar blend of dATP, dCTP, dGTP, and dTTP serving as building blocks and energy sources.</li><li><strong>5. Reaction Buffer with Divalent Cations ($\\text{Mg}^{2+}$, $1.5\\text{--}2.5\\\\text{ mM}$):</strong> $\\text{Mg}^{2+}$ acts as an essential cofactor for polymerase activity and stabilizes primer-template duplexes.</li></ul><h3>(b) Nested PCR</h3><p><strong>Principle & Mechanism:</strong> Designed to dramatically enhance amplification <strong>sensitivity and specificity</strong> when target DNA is present at extremely low copy numbers in clinical specimens (e.g., latent <em>Herpesvirus</em> or blood-borne <em>Theileria</em> / <em>Babesia</em>):</p><ul><li>Two sequential PCR rounds utilizing <strong>two separate sets of primers</strong>:<ul><li><em>First Round:</em> An 'outer' primer pair amplifies a larger primary amplicon (e.g., 600 bp) over 25 cycles.</li><li><em>Second Round:</em> An aliquot ($1\\\\ \\\\mu\\\\text{L}$) of the first round product is inoculated into a fresh master mix with an 'inner' (nested) primer pair that anneals internal to the first amplicon, producing a shorter secondary amplicon (e.g., 300 bp).</li></ul></li><li><em>Advantage:</em> Even if non-specific amplicons are generated in the first round, the internal primers will not bind them, eliminating non-specific products while detecting single-copy targets.</li></ul><h3>(c) Multiplex PCR</h3><p><strong>Principle & Clinical Utility:</strong> Simultaneous amplification of two or more distinct target DNA sequences within a <strong>single reaction vessel</strong> using multiple unique primer pairs.</p><ul><li><em>Optimization Requirements:</em> All primer pairs must have closely matched melting temperatures ($T_m \\\\pm 1^\\circ\\text{C}$), demonstrate zero cross-hybridization (no primer-dimers), and generate amplicons with distinctly different, resolvable base-pair sizes on a 1.5–2.0% agarose gel (e.g., 150 bp, 320 bp, 540 bp).</li><li><em>Veterinary Applications:</em> Simultaneous differential diagnosis of syndromic diseases:<ul><li>Differential identification of Bovine Abortion pathogens (<em>Brucella abortus</em>, <em>Leptospira</em>, and Bovine Herpesvirus-1) in a single test.</li><li>Toxin typing of <em>Clostridium perfringens</em> (Alpha, Beta, Epsilon, Iota toxins).</li><li>Differentiation of <em>Pasteurella multocida</em> capsular serogroups (A, B, D, E, F).</li></ul></li></ul><h3>(d) Real-Time Quantitative PCR (RT-qPCR)</h3><p>Monitors target amplification during the exponential phase in real time using fluorogenic reporters (SYBR Green I or TaqMan probes):</p><ul><li><strong>Cycle Threshold ($C_t$ / $C_q$):</strong> The specific cycle number at which the target reporter fluorescence exceeds a defined background threshold. The $C_t$ value is <strong>inversely proportional to the logarithm of the starting template copy number</strong>: lower $C_t$ values ($< 20$) indicate heavy pathogen burdens, while high $C_t$ ($> 35$) reflects trace amounts.</li><li><strong>Absolute Quantitation:</strong> Comparing sample $C_t$ against a standard curve constructed from tenfold serial dilutions of known plasmid copy numbers quantifies viral load (e.g., African Swine Fever or Avian Influenza viral copy numbers per mL of blood).</li><li><strong>Closed-Tube System:</strong> Eliminates post-PCR agarose gel electrophoresis, removing the primary source of laboratory amplicon carryover contamination.</li></ul><h3>(e) Quality Control, Validation, and Contamination Prevention</h3><ol><li><strong>Controls:</strong> Every diagnostic PCR run must strictly include: (1) <em>No-Template Negative Control (NTC):</em> Reagent water substituted for template to detect reagent contamination; (2) <em>Positive Control:</em> Known authenticated pathogen DNA; and (3) <em>Internal Amplification Control (IAC):</em> Housekeeping gene (e.g., $\\beta$-actin, 16S rRNA) to rule out PCR inhibitors (heme, heparin, bile salts).</li><li><strong>Unidirectional Laboratory Workflow:</strong> Physical separation into three distinct, dedicated positive/negative pressure rooms:<ul><li><em>Pre-PCR Room 1 (Clean):</em> Master mix preparation under laminar flow hood (positive air pressure).</li><li><em>Room 2:</em> DNA extraction and sample addition.</li><li><em>Post-PCR Room 3:</em> Amplification and gel analysis (negative air pressure).</li></ul></li><li><strong>Aerosol-Barrier Tips & Enzymatic Decontamination:</strong> Use of aerosol-resistant filter pipette tips and incorporation of <strong>dUTP and Uracil-DNA Glycosylase (UDG / UNG)</strong> in master mixes to selectively destroy carryover amplicons from previous runs.</li></ol>",
      "keyPoints": [
        "PCR components: Template, paired primers (18-25 bp), Taq polymerase, dNTPs (200 uM), and Mg2+ cofactor.",
        "Nested PCR: Two sequential rounds with outer and internal primers for extreme sensitivity and specificity.",
        "Multiplex PCR: Multiple primer pairs in one tube with matched Tm for syndromic differential diagnosis (e.g., bovine abortion panel).",
        "Real-time qPCR: Ct value is inversely proportional to log starting target; closed-tube eliminates amplicon contamination.",
        "Quality control: Three-room physical separation, NTC and internal controls, filter tips, and dUTP/UNG carryover prevention."
      ],
      "diagram": "Nested: Outer Primers (Round 1) -> Inner Primers (Round 2) => Single Target Specificity\nMultiplex: Target A (200 bp) + Target B (400 bp) + Target C (600 bp) in one gel lane",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "LUVAS 2022",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-q23",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive account of Western Blotting (Immunoblotting) under the following headings: (a) Scientific Principle, (b) Detailed Step-by-Step Laboratory Procedure, (c) Electrotransfer Mechanics (Tank vs Semi-Dry), (d) Immunodetection & Enzyme Substrates, and (e) Diagnostic Applications in Veterinary Medicine.",
      "topicId": "u3-t04",
      "answer": "<h3>(a) Scientific Principle of Western Blotting</h3><p><strong>Western Blotting (Immunoblotting)</strong> is a sensitive analytical protein detection technique that combines the molecular mass resolving power of <strong>SDS-PAGE</strong> with the exquisite antigenic specificity of <strong>enzyme-linked antibodies</strong>. Proteins are separated by size, electrotransferred onto a solid micro-porous membrane (Nitrocellulose or PVDF), and probed with specific primary antibodies to detect and quantify target antigens.</p><h3>(b) Detailed Step-by-Step Procedure</h3><ol><li><strong>Sample Preparation & Denaturation:</strong> Tissue homogenate or viral lysate boiled at 95°C for 5 minutes in Laemmli sample buffer containing SDS (negative charge coating) and $\\beta$-mercaptoethanol (disulfide bond reduction).</li><li><strong>Discontinuous SDS-PAGE:</strong> Samples resolved on a 4% stacking gel (pH 6.8) and 10–12% resolving gel (pH 8.8) alongside prestained molecular weight markers.</li><li><strong>Electrotransfer:</strong> The polyacrylamide gel is placed in direct, bubble-free contact with an activated membrane within a transfer cassette submerged in Towbin transfer buffer (25 mM Tris, 192 mM Glycine, 20% Methanol, pH 8.3). An electric field drives negatively charged proteins out of the gel onto the membrane.</li><li><strong>Membrane Blocking:</strong> Unoccupied hydrophobic binding sites on the membrane are saturated by incubating with <strong>5% Bovine Serum Albumin (BSA) or 5% non-fat dry skim milk</strong> in TBST (Tris-Buffered Saline with 0.1% Tween-20) for 1 hour at room temperature. This completely prevents non-specific background binding of antibodies.</li><li><strong>Primary Antibody Incubation:</strong> The blocked membrane is incubated with specific primary antibody (e.g., hyperimmune bovine serum or mouse monoclonal IgG) directed against the target protein for 1–2 hours at room temperature or overnight at 4°C, followed by three washes in TBST to remove unbound antibodies.</li><li><strong>Secondary Antibody-Enzyme Conjugate:</strong> Incubated with an anti-species secondary antibody (e.g., goat anti-bovine IgG) covalently conjugated to an enzyme: <strong>Horseradish Peroxidase (HRP)</strong> or <strong>Alkaline Phosphatase (AP)</strong> for 1 hour.</li><li><strong>Signal Detection:</strong> Membrane incubated with appropriate substrate to visualize immobilized antigen bands.</li></ol><h3>(c) Electrotransfer Mechanics: Tank (Wet) vs Semi-Dry Transfer</h3><ul><li><strong>Tank (Wet) Transfer:</strong> The gel-membrane sandwich is fully submerged vertically in an insulated tank filled with chilled transfer buffer with an ice cooling core. Operates at 30–100 V for 1–2 hours or overnight at 30 V. Ideal for large molecular weight proteins ($> 100\\text{ kDa}$) and quantitative transfers.</li><li><strong>Semi-Dry Transfer:</strong> The sandwich is placed horizontally between buffer-wetted extra-thick filter paper sheets directly between flat plate electrodes (anode on bottom, cathode on top). Operates at higher current ($0.8\\text{--}1.5\\text{ mA/cm}^2$) for 15–45 minutes using minimal buffer. Highly rapid, though less efficient for high molecular weight proteins.</li><li><strong>Membrane Choice:</strong> <strong>PVDF (Polyvinylidene difluoride)</strong> possesses higher mechanical strength, greater protein binding capacity ($100\\text{--}200\\\\ \\\\mu\\\\text{g/cm}^2$), and superior retention of hydrophobic proteins compared to traditional Nitrocellulose ($80\\\\ \\\\mu\\\\text{g/cm}^2$), but requires pre-wetting in 100% methanol before use.</li></ul><h3>(d) Immunodetection Chemistries</h3><ul><li><strong>Enhanced Chemiluminescence (ECL - Gold Standard):</strong> HRP enzyme oxidizes <strong>luminol</strong> substrate in the presence of hydrogen peroxide ($\\text{H}_2\\text{O}_2$) and chemical enhancers, emitting blue light at 428 nm. Emitted photons are captured on X-ray film or digital CCD camera imaging systems, delivering extreme picogram-level sensitivity.</li><li><strong>Chromogenic Detection:</strong> Produces an insoluble colored precipitate directly on the membrane:<ul><li><em>HRP Substrates:</em> 3,3'-Diaminobenzidine (DAB) yields an insoluble dark-brown band; 4-chloro-1-naphthol (4-CN) yields blue-purple bands.</li><li><em>AP Substrates:</em> 5-Bromo-4-chloro-3-indolyl phosphate (BCIP) and Nitroblue Tetrazolium (NBT) react synergistically to form an intense dark-purple / indigo precipitate.</li></ul></li></ul><h3>(e) Diagnostic Applications in Veterinary Medicine</h3><ol><li><strong>Bovine Spongiform Encephalopathy (BSE / Mad Cow Disease):</strong> Definitive post-mortem confirmatory test (Prionics-Check Western). Demonstrates the proteinase K-resistant core fragment of pathological prion protein ($\\text{PrP}^{\\text{Sc}}$, $27\\text{--}30\\text{ kDa}$) from obex tissue showing three distinct un-, mono-, and di-glycosylated bands.</li><li><strong>Equine Infectious Anemia (EIA):</strong> Confirmatory immunoblotting for viral capsid protein <strong>p26</strong> and envelope glycoproteins (gp90, gp45) when Coggins (AGID) test results are equivocal.</li><li><strong>Lyme Disease (Borrelia burgdorferi):</strong> In dogs and horses, differentiates natural infection from vaccination by demonstrating antibodies against outer surface proteins OspA, OspB, OspC, and p41.</li></ol>",
      "keyPoints": [
        "Principle: Combination of SDS-PAGE size separation with antibody-antigen specificity on a solid membrane.",
        "Steps: SDS-PAGE -> Towbin electrotransfer to PVDF/nitrocellulose -> 5% BSA/milk blocking -> Primary antibody -> Secondary HRP conjugate -> Substrate.",
        "Transfer methods: Tank transfer (submerged, best for high MW proteins) vs Semi-dry (fast horizontal plate transfer).",
        "Detection: Chemiluminescent ECL (HRP + luminol emitting 428 nm light) or chromogenic DAB/BCIP-NBT.",
        "Veterinary hallmarks: Confirmatory BSE prion diagnosis (PrP-Sc 27-30 kDa), EIA p26 confirmation, and Canine Lyme disease differentiation."
      ],
      "diagram": "Gel (separated bands) -> Electrotransfer -> PVDF Membrane -> Block -> 1 Ab -> 2 Ab-HRP -> ECL Light -> Film Band",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u3-q24",
      "type": "long",
      "marks": 12,
      "question": "Compare and contrast the construction and screening of Genomic DNA Libraries versus Complementary DNA (cDNA) Libraries: (a) Source Material & Nucleic Acid Isolation, (b) Enzymatic Processing & Reverse Transcription, (c) Cloning Vectors & In Vitro Packaging, (d) Screening Methods, and (e) Merits & Limitations in Veterinary Biotechnology.",
      "topicId": "u3-t07",
      "answer": "<h3>(a) Source Material & Starting Nucleic Acid Isolation</h3><p>A <strong>DNA Library</strong> is an indexed collection of recombinant vector clones that collectively harbor the entire genetic complexity of an organism:</p><ul><li><strong>Genomic DNA Library:</strong> Starting material is <strong>total genomic DNA</strong> extracted from animal tissues, bacteria, or viruses. Cells are lysed with SDS and Proteinase K, extracted with phenol-chloroform-isoamyl alcohol (25:24:1), and precipitated with ethanol. Contains total genomic sequences: coding exons, non-coding introns, promoter/enhancer regulatory sequences, and repetitive heterochromatin.</li><li><strong>cDNA Library:</strong> Starting material is <strong>total messenger RNA (mRNA)</strong> isolated from specialized, actively transcribing tissues (e.g., mammary gland, liver, hybridoma cells). Total RNA is extracted using guanidinium thiocyanate-phenol-chloroform (TRIzol reagent). Mature eukaryotic mRNA molecules possess a $3'\\text{-poly(A) tail}$, allowing purification from total cellular RNA via <strong>oligo(dT)-cellulose affinity chromatography</strong>. Represents only the active transcriptome (expressed exons only, zero introns).</li></ul><h3>(b) Enzymatic Processing and Library Construction</h3>",
      "keyPoints": [
        "Genomic library: Total genomic DNA fragmented by partial Sau3AI digestion into 15-20 kb fragments; contains introns and promoters.",
        "cDNA library: Purified poly(A)+ mRNA reverse transcribed by M-MLV into cDNA using oligo(dT) primers and RNase H; contains only coding exons.",
        "Vectors: Lambda phage (EMBL3, ZAP) and cosmids used for genomic libraries; plasmid/phagemid expression vectors for cDNA.",
        "Screening: Colony/plaque hybridization with radiolabeled probes, antibody screening in expression libraries, and functional complementation.",
        "Application contrast: Genomic library used for gene sequencing, intron-exon mapping, and promoters; cDNA library essential for expressing eukaryotic proteins in prokaryotic bacteria."
      ],
      "diagram": "Genomic: Total DNA -> Partial Sau3AI digest -> Lambda vector ligation -> Total Library\ncDNA: mRNA -> Reverse Transcriptase -> cDNA Duplex -> Plasmid Vector -> Expressed Library",
      "table": {
        "title": "Comprehensive Comparison: Genomic DNA Library vs cDNA Library",
        "headers": [
          "Feature / Dimension",
          "Genomic DNA Library",
          "Complementary DNA (cDNA) Library"
        ],
        "rows": [
          [
            "Starting Genetic Material",
            "Total cellular genomic double-stranded DNA",
            "Purified messenger RNA (mRNA) with $3'\text{-poly(A) tail}$"
          ],
          [
            "Enzymes Required for Assembly",
            "Restriction Endonucleases (e.g., partial <em>Sau3AI</em> digestion) and T4 DNA Ligase",
            "<strong>Reverse Transcriptase</strong> (M-MLV), RNase H, DNA Polymerase I, T4 DNA Ligase"
          ],
          [
            "Introns & Promoters",
            "<strong>Present</strong> (contains full genomic architecture: introns, exons, promoters, enhancers, intergenic spacers)",
            "<strong>Completely Absent</strong> (contains only processed coding exons; lacks promoters and introns)"
          ],
          [
            "Tissue & Stage Specificity",
            "<strong>Constant</strong> (identical in every somatic cell of an individual animal throughout life)",
            "<strong>Dynamic & Tissue-Specific</strong> (varies dramatically according to tissue type, developmental stage, and hormonal state)"
          ],
          [
            "Cloning Vector Utilized",
            "High-capacity vectors: $\\lambda$ replacement vectors (15–23 kb), <strong>Cosmids</strong> (30–45 kb), BACs (100–300 kb)",
            "Plasmid vectors (pUC, pET) or $\\lambda$ insertion vectors ($\\lambda\text{ZAP}$, $\\lambda\text{gt11}$) (0.5–5 kb inserts)"
          ],
          [
            "Expression in Bacterial Hosts",
            "Generally <strong>cannot</strong> be expressed in bacterial hosts (bacteria lack machinery to splice eukaryotic introns)",
            "<strong>Can be directly expressed</strong> in bacterial expression hosts (<em>E. coli</em>) to produce recombinant animal proteins"
          ],
          [
            "Library Size Required",
            "Very large (millions of clones required to represent the mammalian genome)",
            "Small to moderate (thousands to tens of thousands of clones representing active mRNA transcripts)"
          ],
          [
            "Primary Veterinary Utility",
            "Gene sequencing, genomic mapping, promoter identification, studying intron-exon boundary structure",
            "Recombinant vaccine antigen production (e.g., IFN-$\\gamma$, cytokines, viral envelope antigens)"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u3-q25",
      "type": "long",
      "marks": 12,
      "question": "Provide an in-depth account of Bioinformatics, Biological Databases, and Molecular Phylogenetics in veterinary microbiology: (a) Major Biological Databases (NCBI, GenBank, UniProt), (b) Sequence Alignment Algorithms (BLASTn vs BLASTp), (c) In Silico Primer Design Criteria, (d) Phylogenetic Tree Construction Methods, and (e) Molecular Epidemiology of Animal Pathogens.",
      "topicId": "u3-t09",
      "answer": "<h3>(a) Primary Biological Databases and Accession Systems</h3><p><strong>Bioinformatics</strong> is the interdisciplinary application of computational tools, algorithms, and statistical techniques to manage, analyze, and interpret biological macromolecular sequence data:</p><ul><li><strong>NCBI (National Center for Biotechnology Information):</strong> Central biomedical database portal hosting PubMed, Taxonomy, and BLAST search suites.</li><li><strong>GenBank:</strong> The primary international nucleotide sequence repository maintained by the International Nucleotide Sequence Database Collaboration (INSDC: NCBI / EMBL-EBI / DDBJ). Each deposited sequence is assigned a permanent, unique alphanumeric <strong>Accession Number</strong> (e.g., `AF027001`).</li><li><strong>UniProt (Universal Protein Resource):</strong> Comprehensive, expertly curated database of protein sequences and functional annotations, comprising <em>Swiss-Prot</em> (manually annotated, non-redundant) and <em>TrEMBL</em> (computationally translated).</li></ul><h3>(b) Sequence Alignment & The BLAST Algorithm</h3><p><strong>BLAST (Basic Local Alignment Search Tool, Altschul, 1990):</strong> Heuristic local alignment algorithm that compares a query sequence against a database to find regions of local similarity, calculating statistical significance via the <strong>Expectation Value ($E\\text{-value}$)</strong>: the number of random matches expected by chance alone (lower $E\\text{-values} < 10^{-5}$ denote highly significant homologous matches).</p><ul><li><strong>BLASTn:</strong> Compares a nucleotide query sequence directly against a nucleotide sequence database (used to identify unknown bacterial PCR amplicons).</li><li><strong>BLASTp:</strong> Compares an amino acid protein query against a protein database using substitution scoring matrices (<strong>BLOSUM62</strong> or PAM250) that account for conservative amino acid replacements based on physicochemical properties.</li><li><strong>BLASTx:</strong> Translates a nucleotide query in all six reading frames and searches a protein database.</li></ul><h3>(c) In Silico Primer Design Parameters (Primer3 Guidelines)</h3><ol><li><strong>Primer Length:</strong> 18 to 24 nucleotides (conferring unique locus binding in genomes).</li><li><strong>Melting Temperature ($T_m$):</strong> 55°C to 65°C, with forward and reverse primer $T_m$ matched within <strong>$1^\\circ\\text{C}$</strong> of each other.</li><li><strong>GC Content:</strong> 40% to 60%, with uniform base distribution.</li><li><strong>$3'\\text{-End GC Clamp:}$</strong> Presence of one or two G or C bases at the $3'$ terminal five nucleotides to stabilize polymerase binding.</li><li><strong>Absence of Secondary Structures:</strong> Must be devoid of internal self-complementarity:<ul><li><em>Hairpins:</em> Intramolecular loops ($\\Delta G < -2\\text{ kcal/mol}$ must be avoided).</li><li><em>Self-Dimers & Primer-Dimers:</em> Intermolecular hybridization between forward and reverse primers, which deplete reagents and generate non-specific primer-dimer artifacts ($< 100\\text{ bp}$).</li></ul></li></ol><h3>(d) Phylogenetic Tree Construction Methods</h3><p>Phylogenetics infers evolutionary relationships and ancestral divergence among animal pathogens using alignment algorithms (Clustal Omega, MUSCLE):</p><ul><li><strong>Distance-Matrix Methods:</strong> Converts aligned sequence divergences into pairwise numerical distances:<ul><li><em>Neighbor-Joining (NJ, Saitou & Nei):</em> Fast, algorithmic bottom-up clustering method that does not assume an equal evolutionary rate (molecular clock); the standard choice for large pathogen outbreak datasets in <strong>MEGA (Molecular Evolutionary Genetics Analysis)</strong> software.</li><li><em>UPGMA:</em> Assumes strict ultrametric molecular clock rates (rarely biologically valid).</li></ul></li><li><strong>Character-Based (Probabilistic) Methods:</strong> Considers individual aligned nucleotide/amino acid columns:<ul><li><em>Maximum Parsimony (MP):</em> Searches for the tree topology that minimizes the total number of evolutionary mutational steps.</li><li><em>Maximum Likelihood (ML) & Bayesian Inference:</em> Uses explicit nucleotide substitution models (e.g., Jukes-Cantor, Kimura-2P, General Time Reversible GTR) to calculate the highest statistical probability of observing the sequence data.</li></ul></li><li><strong>Bootstrap Validation:</strong> Statistical resampling with replacement (typically <strong>1,000 bootstrap replicates</strong>). Branch nodes with bootstrap values $\\ge 70\\text{--}90\\%$ indicate robust evolutionary lineage support.</li></ul><h3>(e) Molecular Epidemiology of Animal Pathogens</h3><p>Bioinformatics is indispensable for tracing animal transboundary epidemics:</p><ul><li><strong>FMDV Serotyping & Lineage Tracking:</strong> Phylogenetic analysis of the VP1 coding sequence assigns Foot-and-Mouth Disease isolates to topotypes and lineages (e.g., FMDV Serotype O, Middle East-South Asia topotype, Ind2001 lineage), identifying international transboundary transmission corridors.</li><li><strong>Avian Influenza (H5N1) Clade Classification:</strong> Sequencing the hemagglutinin (HA) cleavage site reveals mutations from low-pathogenic (monobasic motif) to highly pathogenic (polybasic cleavage motif $\\text{R-X-R/K-R}$), while phylogenetic trees trace wild waterfowl migratory routes.</li><li><strong>Rabies Virus Phylogeography:</strong> Nucleoprotein (N) gene sequencing tracks terrestrial canine vs chiropteran (bat) rabies virus spillover and geographical lineages.</li></ul>",
      "keyPoints": [
        "Databases: NCBI GenBank for nucleotides (Accession IDs); UniProt/Swiss-Prot for curated protein sequences.",
        "BLAST tools: BLASTn (nucleotide-nucleotide), BLASTp (protein-protein via BLOSUM62 matrix); E-value < 10^-5 indicates true homology.",
        "Primer3 criteria: 18-24 bp length, 40-60% GC, matched Tm (within 1C), 3' GC clamp, and zero hairpins/primer-dimers.",
        "Phylogenetic methods: Neighbor-Joining (NJ) distance method in MEGA; Maximum Likelihood; validated by 1,000 bootstrap replicates.",
        "Veterinary molecular epidemiology: FMDV VP1 lineage tracking, Avian Influenza HA polybasic cleavage site analysis, and Rabies virus N-gene phylogeography."
      ],
      "diagram": "FASTA Sequences -> Multiple Sequence Alignment (Clustal) -> Distance Matrix / ML -> MEGA NJ Tree with 1000 Bootstraps",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2021",
        "RAJUVAS 2020"
      ]
    }
  ],
  "unit-4": [
    {
      "id": "u4-q01",
      "type": "define",
      "marks": 2,
      "question": "Define Antigen, Immunogen, and Hapten with examples.",
      "topicId": "u4-t04",
      "answer": "<p><strong>Antigen:</strong> Any substance capable of specifically binding to the antigen-recognition receptors of the adaptive immune system (B-cell receptor / antibody or T-cell receptor presented by MHC).</p><p><strong>Immunogen:</strong> A substance that is capable of <em>actively inducing</em> a de novo adaptive humoral or cell-mediated immune response. All immunogens are antigens, but not all antigens are immunogens.</p><p><strong>Hapten:</strong> A low-molecular-weight chemical substance ($< 1000\\text{ Da}$, e.g., dinitrophenol, penicillin, drugs) that is <strong>antigenic but non-immunogenic</strong> on its own; it cannot provoke an immune response unless covalently conjugated to a large macromolecular <em>carrier protein</em> (e.g., Bovine Serum Albumin).</p>",
      "keyPoints": [
        "Antigen binds specifically to antibodies/TCR; Immunogen independently provokes an active immune response.",
        "Hapten is a small molecule that is antigenic but non-immunogenic unless coupled to a high-molecular-weight carrier protein."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "GADVASU 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u4-q02",
      "type": "define",
      "marks": 2,
      "question": "Define Epitope (Antigenic Determinant) and Paratope.",
      "topicId": "u4-t04",
      "answer": "<p>An <strong>Epitope (Antigenic Determinant)</strong> is the smallest, structurally distinct immunologically active surface unit or sub-molecular region of an antigen molecule (typically 5 to 8 amino acids or carbohydrate residues) that is directly recognized and bound by a specific antibody binding site or T-cell receptor.</p><ul><li><em>Conformational (Discontinuous) Epitopes:</em> Composed of distant amino acids brought together by 3D protein folding (recognized by B cells).</li><li><em>Linear (Sequential) Epitopes:</em> Composed of contiguous amino acid sequences (recognized by T cells).</li></ul><p>A <strong>Paratope (Antigen-Binding Site)</strong> is the complementary structural cleft located at the hypervariable tip of an antibody's variable domains ($\\text{V}_H$ and $\\text{V}_L$ complementary determining regions, CDRs) that specifically locks onto the epitope via non-covalent bonds.</p>",
      "keyPoints": [
        "Epitope: Specific 5-8 amino acid region on an antigen recognized by immune receptors (linear vs conformational).",
        "Paratope: Antigen-binding site on the variable domains of an antibody (CDRs) complementary to the epitope."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "RAJUVAS 2023",
        "LUVAS 2021",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u4-q03",
      "type": "define",
      "marks": 2,
      "question": "Define Adjuvant and differentiate Freund's Complete from Incomplete Adjuvant.",
      "topicId": "u4-t06",
      "answer": "<p>An <strong>Adjuvant</strong> (from Latin <em>adjuvare</em>, to help) is any substance that, when formulated and administered concurrently with a specific vaccine antigen, non-specifically enhances, accelerates, potentiates, and prolongs the antigen-specific immune response without possessing intrinsic antigenic specificity of its own.</p><p><strong>Freund's Adjuvants:</strong></p><ul><li><strong>Freund's Incomplete Adjuvant (FIA):</strong> A water-in-oil emulsion comprising a light mineral oil (Bayol F) and an emulsifier (Mannide monooleate). Acts primarily by creating a slow-release antigen depot at the injection site.</li><li><strong>Freund's Complete Adjuvant (FCA):</strong> Consists of FIA plus <strong>heat-killed Mycobacterium tuberculosis (or M. butyricum)</strong> ($0.5\\text{--}1.0\\text{ mg/mL}$). The mycobacterial cell wall muramyl dipeptide (MDP) activates macrophage TLR2/TLR4, inducing explosive IL-1, IL-12, and Th1-skewed cell-mediated immunity. Restricted to laboratory research (prohibited in food animals due to severe sterile granulomas).</li></ul>",
      "keyPoints": [
        "Adjuvant: Non-specific enhancer of antigen-specific immune responses.",
        "FIA: Water-in-oil depot emulsion. FCA: FIA supplemented with heat-killed Mycobacterium tuberculosis delivering powerful Th1/macrophage stimulation."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u4-q04",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Antibody Affinity and Antibody Avidity.",
      "topicId": "u4-t07",
      "answer": "<p><strong>Antibody Affinity:</strong> The quantitative thermodynamic strength of the non-covalent interaction between a <strong>single paratope</strong> (antigen-binding site) of an antibody and its corresponding <strong>single monovalent epitope</strong>, expressed mathematically by the association equilibrium constant $K_a = [\\text{Ab-Ag}] / ([\\text{Ab}][\\text{Ag}])$ (in $\\text{L/mol}$). Reflects the intrinsic steric and chemical fit.</p><p><strong>Antibody Avidity (Functional Affinity):</strong> The <strong>overall total functional binding strength</strong> of an antibody with a multivalent antigen, taking into account the simultaneous synergistic binding of multiple antigen-binding arms (valencies). For example, while monomeric <strong>IgM</strong> paratopes may possess only low-to-moderate intrinsic affinity, its pentameric structure (10 functional binding valencies) confers enormous, tenfold-to-thousandfold higher <strong>avidity</strong> for agglutinating particulate pathogens compared to bivalent IgG.</p>",
      "keyPoints": [
        "Affinity: Binding strength of a single paratope to a single monovalent epitope (Ka).",
        "Avidity: Total accumulated binding strength across all valencies of a multivalent antibody (e.g., pentameric IgM has huge avidity)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "WBUAFS 2021",
        "MAFSU 2022"
      ]
    },
    {
      "id": "u4-q05",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Primary and Secondary Lymphoid Organs with veterinary examples.",
      "topicId": "u4-t02",
      "answer": "<p>Lymphoid organs are functionally partitioned into two anatomical tiers:</p><ul><li><strong>Primary (Generative / Central) Lymphoid Organs:</strong> Microenvironments where immature lymphoid progenitor cells undergo antigen-independent proliferation, maturation, T/B-cell receptor gene rearrangement, and positive/negative selection to acquire immunocompetence and self-tolerance. <strong>Examples:</strong> <em>Thymus</em> (T-cell maturation in all mammals), <em>Bursa of Fabricius</em> (B-cell maturation in birds), <em>Bone Marrow</em> (B cells in primates and rodents), and <em>Ileal Peyer's Patches</em> (primary B-cell organ in ruminants and pigs).</li><li><strong>Secondary (Peripheral) Lymphoid Organs:</strong> Highly organized filters where mature, immunocompetent, naive lymphocytes encounter foreign antigens presented by APCs, initiating active immune responses. <strong>Examples:</strong> <em>Lymph nodes</em> (filtering lymph), <em>Spleen</em> (filtering blood), and <em>Mucosa-Associated Lymphoid Tissue (MALT: tonsils, gut Peyer's patches)</em>.</li></ul>",
      "keyPoints": [
        "Primary organs: Antigen-independent maturation and education of lymphocytes (Thymus, Bursa, Bone marrow, Ileal Peyer's patch).",
        "Secondary organs: Sites of antigen encounter and immune activation (Lymph nodes, Spleen, MALT)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2022",
        "DUVASU 2021"
      ]
    },
    {
      "id": "u4-q06",
      "type": "define",
      "marks": 2,
      "question": "Describe the anatomical location and function of the Bursa of Fabricius in avian species.",
      "topicId": "u4-t02",
      "answer": "<p>The <strong>Bursa of Fabricius (Bursa cloacalis)</strong> is a unique, primary blind-sac lymphoid organ found exclusively in avian species, located dorsally to the proctodeal wall of the cloaca.</p><p><strong>Function:</strong> It is the exclusive generative site for <strong>B lymphocyte differentiation and antibody repertoire diversification</strong> in birds. Pre-bursal stem cells migrate from embryonic yolk sac and fetal liver to bursal follicles during embryonic development (days 8–15 of incubation), where they undergo massive clonal expansion and diversify their immunoglobulin genes via <strong>somatic gene conversion</strong>.</p><p><strong>Clinical Hallmarks:</strong> Surgical bursectomy or viral destruction of bursal follicles by <strong>Infectious Bursal Disease Virus (IBDV / Gumboro Disease)</strong> in chicks under 3 weeks of age leads to complete, permanent pan-B-cell aplasia, severe humoral immunodeficiency, and failure of vaccine responses.</p>",
      "keyPoints": [
        "Avian primary lymphoid organ located dorsal to the cloaca.",
        "Exclusive site for B-cell maturation and somatic gene conversion diversification.",
        "Target of IBDV (Gumboro disease), causing devastating bursal atrophy and humoral immunosuppression."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "LUVAS 2020",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u4-q07",
      "type": "define",
      "marks": 2,
      "question": "Define the Membrane Attack Complex (MAC) and state its molecular composition.",
      "topicId": "u4-t14",
      "answer": "<p>The <strong>Membrane Attack Complex (MAC)</strong> is the final terminal, lytic multiprotein end-product assembled on target cell membranes following activation of the complement cascade by either the Classical, Lectin, or Alternative pathway.</p><p><strong>Molecular Assembly & Composition:</strong> Assembled sequentially from five serum complement proteins: <strong>$\\text{C5b} + \\text{C6} + \\text{C7} + \\text{C8} + \\text{poly-C9}$ ($C5b\\text{-}9$)</strong>.</p><ol><li>C5b forms a stable soluble complex with C6 and C7 ($\\text{C5b67}$).</li><li>The lipophilic hairpin loop of C7 inserts into the target lipid bilayer.</li><li>C8 binds, penetrating deeper into the membrane.</li><li>This nucleates the rapid binding and polymerization of <strong>10 to 18 molecules of C9</strong>, which form a hollow, rigid cylindrical transmembrane pore with an internal diameter of <strong>$10\\text{ nm}$</strong>.</li></ol><p><strong>Lytic Consequence:</strong> The unregulated pore permits free bidirectional leakage of water, $\\text{Na}^+$, and ions down electrochemical gradients, resulting in immediate colloid-osmotic cellular swelling and lytic burst of Gram-negative bacteria, enveloped viruses, or foreign erythrocytes.</p>",
      "keyPoints": [
        "Terminal complement effector pore composed of C5b-6-7-8 and polymerized C9 (10-18 molecules).",
        "Inserts a 10 nm transmembrane pore causing colloid-osmotic swelling and lysis of Gram-negative bacteria and enveloped viruses."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u4-q08",
      "type": "define",
      "marks": 2,
      "question": "Define Opsonization and name the primary opsonins in serum.",
      "topicId": "u4-t03",
      "answer": "<p><strong>Opsonization</strong> (from Greek <em>opsonion</em>, to prepare for eating) is the immunological process whereby foreign particulate antigens (encapsulated bacteria, cellular debris) are coated with specialized host serum proteins (<strong>opsonins</strong>) that dramatically enhance their recognition, attachment, and engulfment by professional phagocytic cells (neutrophils and macrophages).</p><p><strong>Primary Serum Opsonins:</strong></p><ol><li><strong>Immunoglobulin G (IgG, especially $\\text{IgG}_1$ and $\\text{IgG}_2$):</strong> The Fab arms bind surface bacterial antigens, while the exposed crystallizable fragment (Fc region) binds high-affinity <strong>$\\text{Fc}\\gamma\\text{R}$ (CD64, CD32, CD16)</strong> receptors on phagocyte membranes.</li><li><strong>Complement Component C3b (and iC3b):</strong> Covalent deposition of C3b on bacterial surfaces engages <strong>Complement Receptor 1 (CR1 / CD35)</strong> and CR3 (CD11b/CD18) on phagocytes, triggering active pseudopod extension and phagocytosis.</li></ol>",
      "keyPoints": [
        "Coating of pathogens by host serum molecules to facilitate recognition and ingestion by phagocytes.",
        "Primary opsonins: IgG antibodies (binding Fc-gamma receptors) and complement fragments C3b/iC3b (binding CR1/CR3)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2021",
        "WBUAFS 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-q09",
      "type": "define",
      "marks": 2,
      "question": "Define Cytokines and explain Pleiotropy and Redundancy.",
      "topicId": "u4-t15",
      "answer": "<p><strong>Cytokines</strong> are low-molecular-weight, secreted soluble regulatory proteins or glycoproteins ($8\\text{--}40\\text{ kDa}$) produced by leukocytes and stromal cells that act as non-enzymatic intercellular chemical messengers in picomolar concentrations via autocrine, paracrine, or endocrine signaling pathways to coordinate innate and adaptive immune responses.</p><p><strong>Key Functional Hallmarks:</strong></p><ul><li><strong>Pleiotropy:</strong> The ability of a <em>single cytokine</em> to act on multiple distinctly different target cell types and elicit diverse biological effects (e.g., <strong>IL-4</strong> stimulates B-cell class switching to IgE, promotes Th2 differentiation, and suppresses macrophage inflammatory cytokine production).</li><li><strong>Redundancy:</strong> The phenomenon wherein <em>two or more different cytokines</em> exert identical or overlapping biological functions on a target cell (e.g., <strong>IL-2, IL-4, and IL-15</strong> all independently stimulate T-cell proliferation).</li></ul>",
      "keyPoints": [
        "Low-molecular-weight intercellular messenger proteins acting in picomolar concentrations.",
        "Pleiotropy: Single cytokine exerting multiple distinct effects on different target cells (e.g., IL-4).",
        "Redundancy: Multiple distinct cytokines performing the same biological function (e.g., IL-2, IL-4, IL-15 stimulating T cells)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2021",
        "LUVAS 2022",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u4-q10",
      "type": "define",
      "marks": 2,
      "question": "Define Anaphylaxis and describe the primary chemical mediators of Type I Hypersensitivity.",
      "topicId": "u4-t16",
      "answer": "<p><strong>Anaphylaxis</strong> is an acute, life-threatening, systemic, multi-organ <strong>Type I (immediate) hypersensitivity reaction</strong> resulting from the sudden, massive, explosive release of preformed and newly synthesized chemical mediators from sensitized tissue mast cells and basophils, triggered by cross-linking of surface-bound <strong>IgE</strong> molecules by a specific multivalent allergen.</p><p><strong>Primary Chemical Mediators:</strong></p><ul><li><em>Histamine:</em> Preformed in granules; binds $\\text{H}_1$ receptors causing intense smooth muscle contraction (bronchospasm), widespread peripheral vasodilation, and profound increase in microvascular permeability leading to circulatory hypovolemic shock.</li><li><em>Serotonin (5-HT):</em> Particularly dominant in ruminants and rodents, driving severe pulmonary vasoconstriction and systemic hypotension.</li><li><em>Leukotrienes ($\\text{LTC}_4, \\text{LTD}_4, \\text{LTE}_4$ / SRS-A):</em> Metabolites of arachidonic acid; 1000-fold more potent than histamine in causing prolonged bronchoconstriction and mucus secretion.</li></ul>",
      "keyPoints": [
        "Acute systemic Type I hypersensitivity triggered by IgE cross-linking on mast cells and basophils.",
        "Key mediators: Histamine (vasodilation, vascular leak, bronchospasm), Serotonin (ruminants), and Leukotrienes (prolonged bronchoconstriction)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "GADVASU 2022",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u4-q11",
      "type": "define",
      "marks": 2,
      "question": "Define Immunological Tolerance and Central Clonal Deletion.",
      "topicId": "u4-t17",
      "answer": "<p><strong>Immunological Tolerance</strong> is a state of specific, unresponsiveness of the adaptive immune system to a particular antigen (most importantly self-antigens), actively established following prior exposure to that antigen, preventing autoimmune destruction while maintaining full responsiveness to foreign microbial pathogens.</p><p><strong>Central Clonal Deletion (Negative Selection):</strong> The primary mechanism of central tolerance operating in primary generative lymphoid organs:</p><ul><li>In the <strong>Thymus</strong>, developing immature double-positive T cells that bind self-peptide-MHC complexes with <em>high affinity / avidity</em> receive strong apoptotic death signals and are eliminated via programmed cell death (apoptosis), mediated by the autoimmune regulator (AIRE) transcription factor.</li><li>In the <strong>Bone Marrow / Bursa</strong>, immature B cells that cross-link multivalent self-antigens with high affinity undergo apoptotic clonal deletion or receptor editing.</li></ul>",
      "keyPoints": [
        "Specific unresponsiveness to antigens (especially self-antigens) induced by prior exposure.",
        "Central clonal deletion: High-affinity self-reactive immature T cells in the thymus and B cells in the marrow undergo apoptotic death."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "RAJUVAS 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u4-q12",
      "type": "define",
      "marks": 2,
      "question": "Explain the DIVA Principle (Differentiating Infected from Vaccinated Animals) and cite a veterinary vaccine example.",
      "topicId": "u4-t19",
      "answer": "<p>The <strong>DIVA Principle (Differentiating Infected from Vaccinated Animals)</strong>, introduced by J.T. van Oirschot, refers to a marker vaccine-diagnostic companion strategy that enables serological discrimination between animals that have been vaccinated and those that are naturally infected with wild virulent field pathogens within a herd.</p><p><strong>Mechanism & Veterinary Hallmark:</strong></p><ul><li><strong>Marker Vaccine:</strong> A genetically engineered vaccine where a non-essential structural or non-structural protein gene has been deliberately deleted (e.g., <strong>Glycoprotein E (gE) deleted vaccine</strong> for <em>Bovine Herpesvirus-1 / IBR</em> or <em>Pseudorabies / Aujeszky's Disease</em> in pigs). Vaccinated animals generate antibodies against all viral antigens <em>except gE</em>.</li><li><strong>Companion Diagnostic Assay:</strong> A blocking/competitive ELISA specifically detects <strong>anti-gE antibodies</strong>. Animals testing positive for anti-gE antibodies are classified as naturally infected field reactors and culled, while animals testing negative for anti-gE (but positive for other viral neutralizing antibodies) are recognized as safely vaccinated, allowing disease eradication without wholesale herd culling.</li></ul>",
      "keyPoints": [
        "Strategy enabling serological distinction between vaccinated and naturally infected animals in a herd.",
        "Marker vaccine lacks a non-essential marker gene (e.g., gE deletion in BHV-1 or Pseudorabies).",
        "Companion ELISA detects antibodies against the deleted marker to identify true field-infected animals."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u4-q13",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Innate Immunity and Acquired (Adaptive) Immunity with a structured comparison table.",
      "topicId": "u4-t03",
      "answer": "<p>The host immune system is organized into two interconnected, complementary functional arms that protect animals against microbial invasion:</p>",
      "keyPoints": [
        "Innate immunity: Fast (minutes/hours), germline-encoded PRRs recognizing conserved PAMPs, lacks immunological memory.",
        "Acquired immunity: Delayed (days/weeks), somatic gene rearrangement (V(D)J) generating extreme clonal diversity, creates robust immunological memory.",
        "Cellular players: Innate uses neutrophils, macrophages, NK cells, and complement; Adaptive uses B and T lymphocytes."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Innate vs Acquired (Adaptive) Immunity",
        "headers": [
          "Parameter / Feature",
          "Innate (Natural / Native) Immunity",
          "Acquired (Adaptive / Specific) Immunity"
        ],
        "rows": [
          [
            "Response Kinetics",
            "Immediate; rapid deployment within minutes to hours of microbial exposure",
            "Delayed; requires 5 to 14 days for clonal expansion and differentiation upon primary exposure"
          ],
          [
            "Receptor Diversity",
            "Limited; fixed germline-encoded Pattern Recognition Receptors (PRRs, e.g., TLRs, NOD)",
            "Extremely vast ($> 10^{11}$ variants); generated by somatic V(D)J gene recombination and junctional diversity"
          ],
          [
            "Target Specificity",
            "Broad; recognizes invariant, conserved <strong>Pathogen-Associated Molecular Patterns (PAMPs)</strong> (e.g., LPS, peptidoglycan, flagellin)",
            "Exquisitely fine; recognizes distinct, unique conformational or linear <strong>epitopes</strong> on specific antigens"
          ],
          [
            "Immunological Memory",
            "<strong>Completely Absent</strong>; repeat exposure produces identical kinetics and magnitude of response",
            "<strong>Prominent Memory</strong>; memory B and T cells generate an accelerated, heightened, high-affinity secondary response"
          ],
          [
            "Major Cellular Elements",
            "Neutrophils, Macrophages, Dendritic cells, Natural Killer (NK) cells, Mast cells",
            "<strong>B lymphocytes</strong> (plasma cells) and <strong>T lymphocytes</strong> (CD4+ Helper, CD8+ Cytotoxic)"
          ],
          [
            "Humoral Mediators",
            "Complement cascade proteins, Lysozyme, Acute Phase Proteins (CRP), Interferons ($\u0007lpha/\beta$)",
            "Specific <strong>Immunoglobulins (Antibodies: IgG, IgM, IgA, IgE)</strong>"
          ],
          [
            "Self / Non-self Discrimination",
            "Perfect; host mammalian cells express regulatory molecules (CD55, CD59, sialic acid) that prevent auto-attack",
            "Normally excellent; regulated by central and peripheral tolerance; breakdowns result in autoimmune disease"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "IVRI 2020"
      ]
    },
    {
      "id": "u4-q14",
      "type": "diff",
      "marks": 5,
      "question": "Compare the structural characteristics and biological effector functions of Immunoglobulin G (IgG) and Immunoglobulin M (IgM).",
      "topicId": "u4-t07",
      "answer": "<p>Immunoglobulin G (IgG) and Immunoglobulin M (IgM) are the two major immunoglobulin isotypes governing systemic humoral protection in domestic animals:</p>",
      "keyPoints": [
        "Structure: IgG is a 150 kDa monomer with 2 antigen-binding valencies; IgM is a 900 kDa pentamer linked by a J-chain with 10 theoretical valencies.",
        "Serum abundance: IgG is the most abundant systemic immunoglobulin (70-80%); IgM is the earliest produced primary antibody (5-10%).",
        "Maternal transfer: IgG is the exclusive colostral immunoglobulin transferred to neonates; IgM is restricted to vascular spaces.",
        "Effector functions: IgM is 1000-fold more efficient at agglutination and complement activation; IgG excels at opsonization, ADCC, and toxin neutralization."
      ],
      "diagram": "",
      "table": {
        "title": "Comparative Profiles: Immunoglobulin G (IgG) vs Immunoglobulin M (IgM)",
        "headers": [
          "Feature / Characteristic",
          "Immunoglobulin G (IgG)",
          "Immunoglobulin M (IgM)"
        ],
        "rows": [
          [
            "Molecular Conformation",
            "<strong>Monomer</strong> ($H_2L_2$ basic unit) having 2 identical antigen-binding sites",
            "<strong>Pentamer</strong> (five $H_2L_2$ units joined by disulfide bonds and a <strong>J-chain</strong>)"
          ],
          [
            "Molecular Mass",
            "Approx. $150\text{ kDa}$ (sedimentation coefficient 7S)",
            "Approx. $900\text{ kDa}$ (sedimentation coefficient 19S)"
          ],
          [
            "Heavy Chain Constant Domains",
            "Three constant domains ($\text{C}_H1, \text{C}_H2, \text{C}_H3$) with a flexible <strong>hinge region</strong>",
            "Four constant domains ($\text{C}_H1, \text{C}_H2, \text{C}_H3, \text{C}_H4$); <strong>lacks a hinge region</strong>"
          ],
          [
            "Antigen-Binding Valency",
            "Bivalent (2 functional binding sites)",
            "Decavalent (10 theoretical valencies; functionally 5 due to steric hindrance)"
          ],
          [
            "Serum Half-Life",
            "Longest half-life: <strong>21 to 23 days</strong> in domestic ruminants and horses",
            "Short half-life: <strong>4 to 6 days</strong>"
          ],
          [
            "Primary vs Secondary Response",
            "Dominant antibody of the <strong>secondary (anamnestic)</strong> immune response",
            "First antibody class synthesized during a <strong>primary</strong> immune response and neonatal life"
          ],
          [
            "Complement Activation",
            "Effective complement activator (requires 2 adjacent IgG monomers on the cell membrane)",
            "<strong>Super-potent complement activator</strong> (a single IgM pentamer bound to target activates C1q)"
          ],
          [
            "Agglutinating Efficiency",
            "Moderate agglutinating and precipitating capacity",
            "Extremely high agglutinating efficiency (up to 1000-fold higher than IgG)"
          ],
          [
            "Opsonization & ADCC",
            "Excellent opsonin; binds $\text{Fc}\\gamma\text{R}$ on neutrophils and macrophages; mediates ADCC via NK cells",
            "Weak direct opsonin (macrophages lack high-affinity Fc$\\mu$R; opsonizes indirectly via C3b)"
          ],
          [
            "Passive Neonatal Transfer",
            "Primary immunoglobulin concentrated in <strong>colostrum</strong>; absorbed across neonatal gut in ungulates",
            "Present in low concentrations in colostrum; acts purely locally within neonatal gut lumen"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u4-q15",
      "type": "short",
      "marks": 5,
      "question": "Describe Hybridoma Technology for the production of Monoclonal Antibodies (Kohler and Milstein method) and explain the principle of HAT medium selection.",
      "topicId": "u4-t09",
      "answer": "<p><strong>Hybridoma Technology</strong>, discovered by Georges Köhler and César Milstein (1975), is a bio-engineering method used to generate immortalized hybrid cell lines (<strong>hybridomas</strong>) that produce indefinite quantities of identical, monospecific <strong>Monoclonal Antibodies (mAbs)</strong> directed against a single specific epitope.</p><p><strong>Step-by-Step Methodology:</strong></p><ol><li><strong>Immunization:</strong> A mouse is hyperimmunized with the target antigen. Spleen cells containing antibody-producing, mortal plasma B cells are harvested.</li><li><strong>Myeloma Cell Partner:</strong> An immortal murine <strong>myeloma cell line</strong> (e.g., SP2/0) is used, selected for being <em>hypoxanthine-guanine phosphoribosyltransferase-deficient ($\\text{HGPRT}^-$)</em> and non-immunoglobulin-secreting.</li><li><strong>Somatic Cell Fusion:</strong> Splenocytes and myeloma cells are fused in the presence of <strong>Polyethylene Glycol (PEG 1500)</strong> or electrofusion, generating a mixture of unfused B cells, unfused myelomas, B-B hybrids, myeloma-myeloma hybrids, and desired <strong>B-myeloma hybridomas</strong>.</li><li><strong>HAT Selective Medium:</strong> Culture is transferred to medium containing <strong>Hypoxanthine, Aminopterin, and Thymidine (HAT)</strong>:<ul><li><em>Aminopterin</em> is a folic acid antagonist that irreversibly blocks the de novo nucleotide synthesis pathway.</li><li>Cells must rely on the <strong>salvage pathway</strong>, which requires the enzyme <strong>HGPRT</strong> (utilizing hypoxanthine) and <em>thymidine kinase (TK)</em> (utilizing thymidine).</li><li><em>Unfused Myeloma cells:</em> Are $\\text{HGPRT}^-$; with the de novo pathway blocked by aminopterin, they cannot utilize the salvage pathway and <strong>die within 7–10 days</strong>.</li><li><em>Unfused B cells:</em> Are $\\text{HGPRT}^+$ but have a limited natural lifespan and <strong>die naturally within a few days</strong>.</li><li><em>B-Myeloma Hybridomas:</em> Inherit immortality from the myeloma parent and functional $\\text{HGPRT}^+$ from the spleen B cell parent, enabling them to survive and proliferate indefinitely on HAT medium.</li></ul></li><li><strong>Cloning & Screening:</strong> Surviving hybridomas are screened by indirect ELISA for specific antibody secretion, and positive master wells are cloned by <strong>limiting dilution</strong> (1 cell/well) to guarantee monoclonality.</li></ol>",
      "keyPoints": [
        "Fusion of antibody-producing splenocytes with immortal HGPRT-deficient myeloma cells using PEG.",
        "HAT selection principle: Aminopterin blocks de novo nucleotide synthesis; only HGPRT+ hybridomas survive via salvage pathway.",
        "Unfused myelomas die because they lack HGPRT; unfused B cells die due to short natural lifespan.",
        "Screening by ELISA and single-cell cloning by limiting dilution yields permanent monoclonal antibody-secreting cell lines."
      ],
      "diagram": "Splenocytes (HGPRT+, Mortal) + Myeloma (HGPRT-, Immortal) --[PEG]--> HAT Medium Selection => Immortal Hybridoma",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u4-q16",
      "type": "diff",
      "marks": 5,
      "question": "Compare the Classical Pathway and Alternative Pathway of Complement Activation with a comprehensive table.",
      "topicId": "u4-t14",
      "answer": "<p>The Complement system operates via three distinct biochemical trigger cascades that converge at the central cleavage of C3, driving inflammation, opsonization, and pathogen lysis:</p>",
      "keyPoints": [
        "Classical pathway: Triggered by antibody-antigen complexes (IgM, IgG) binding C1q; C3 convertase is C4b2a.",
        "Alternative pathway: Antibody-independent; triggered by spontaneous C3 tick-over and microbial surfaces (LPS, zymosan); stabilized by Properdin; C3 convertase is C3bBb.",
        "Both pathways converge to cleave C3 into C3a (anaphylatoxin) and C3b (opsonin/C5 convertase assembly)."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Classical vs Alternative Pathway of Complement",
        "headers": [
          "Feature / Criterion",
          "Classical Pathway",
          "Alternative Pathway"
        ],
        "rows": [
          [
            "Discovery & Evolutionary Status",
            "Discovered first by Jules Bordet (1890s); phylogenetically younger (adaptive link)",
            "Discovered by Louis Pillemer (1954); phylogenetically ancient (innate defense)"
          ],
          [
            "Primary Initiating Trigger",
            "<strong>Antigen-Antibody Complexes</strong> (immune complexes containing $\text{IgM}$ or clustered $\text{IgG}_1/\text{IgG}_2$) binding to C1q",
            "<strong>Antibody-independent</strong>; microbial cell surface components (LPS, bacterial peptidoglycan, fungal zymosan, cobra venom factor)"
          ],
          [
            "Initial Recognition Complex",
            "<strong>C1 macromolecular complex ($\text{C1q, C1r}_2\text{, C1s}_2$)</strong>",
            "Spontaneous low-level fluid-phase hydrolysis of C3 (<strong>C3 tick-over</strong> producing $\text{C3(H}_2\text{O)}$)"
          ],
          [
            "C3 Convertase Enzyme",
            "<strong>C4b2a</strong> (formerly written C4b2b)",
            "<strong>C3bBb</strong> (stabilized by plasma <strong>Factor P / Properdin</strong>)"
          ],
          [
            "C5 Convertase Enzyme",
            "<strong>C4b2a3b</strong>",
            "<strong>C3bBb3b</strong> ($\text{C3b}_2\text{Bb}$)"
          ],
          [
            "Divalent Cation Requirements",
            "Strictly dependent on <strong>$\text{Ca}^{2+}$</strong> (maintains C1 complex) and <strong>$\text{Mg}^{2+}$</strong>",
            "Requires only <strong>$\text{Mg}^{2+}$</strong> (for Factor B binding to C3b); active in EDTA-chelated/calcium-free conditions"
          ],
          [
            "Unique Factor Components",
            "C1, C4, C2",
            "<strong>Factor B, Factor D, and Properdin (Factor P)</strong>"
          ],
          [
            "Physiological Role",
            "Effector arm of adaptive humoral immunity and immune complex clearance",
            "First line of immediate innate defense against invading pathogens prior to antibody formation"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "LUVAS 2021",
        "WBUAFS 2021"
      ]
    },
    {
      "id": "u4-q17",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between MHC Class I and MHC Class II molecules with a detailed comparative table.",
      "topicId": "u4-t11",
      "answer": "<p>Major Histocompatibility Complex (MHC) molecules are polymorphic cell-surface glycoproteins that present peptide antigens for T-lymphocyte surveillance:</p>",
      "keyPoints": [
        "MHC Class I: Polymorphic alpha chain non-covalently linked to invariant beta-2 microglobulin; presents 8-10 aa endogenous peptides to CD8+ cytotoxic T cells.",
        "MHC Class II: Heterodimer of polymorphic alpha and beta chains; presents 13-25 aa exogenous peptides to CD4+ helper T cells.",
        "Cellular expression: MHC-I is on all nucleated cells; MHC-II is restricted to professional APCs (dendritic cells, macrophages, B cells)."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: MHC Class I vs MHC Class II Molecules",
        "headers": [
          "Parameter / Feature",
          "MHC Class I Molecules",
          "MHC Class II Molecules"
        ],
        "rows": [
          [
            "Polypeptide Chain Architecture",
            "One polymorphic heavy <strong>$\u0007lpha$-chain (45 kDa)</strong> non-covalently associated with invariant <strong>$\beta_2$-microglobulin (12 kDa)</strong>",
            "Heterodimer of two transmembrane polymorphic chains: <strong>$\u0007lpha$-chain (33 kDa)</strong> and <strong>$\beta$-chain (28 kDa)</strong>"
          ],
          [
            "Peptide-Binding Cleft Composition",
            "Formed exclusively by the <strong>$\u0007lpha_1$ and $\u0007lpha_2$ domains</strong> of the $\u0007lpha$-chain; closed at both ends",
            "Formed jointly by the <strong>$\u0007lpha_1$ and $\beta_1$ domains</strong> of both chains; open at both ends"
          ],
          [
            "Length of Bound Peptides",
            "Short peptides, strictly <strong>8 to 10 amino acids</strong> (anchored by conserved terminal residues)",
            "Longer, flexible peptides, typically <strong>13 to 25 amino acids</strong> (hanging out of open ends)"
          ],
          [
            "Source of Presented Antigens",
            "<strong>Endogenous / Cytosolic antigens</strong> (synthesized inside host cell: viral proteins, intracellular bacteria, tumor antigens)",
            "<strong>Exogenous antigens</strong> (extracellular pathogens internalized via phagocytosis or endocytosis)"
          ],
          [
            "Processing Pathway",
            "Cytosolic proteasomal degradation $\to$ <strong>TAP transporter</strong> translocation into ER",
            "Endosomal/lysosomal acidic protease degradation $\to$ fusion with MIIC containing MHC-II"
          ],
          [
            "Responding T-Lymphocyte Subtype",
            "<strong>$\text{CD8}^+$ Cytotoxic T Lymphocytes (CTLs)</strong> (CD8 coreceptor binds invariant $\u0007lpha_3$ domain)",
            "<strong>$\text{CD4}^+$ T Helper Lymphocytes ($\text{Th}_1, \text{Th}_2, \text{Th}_{17}$</strong>) (CD4 coreceptor binds invariant $\beta_2$ domain)"
          ],
          [
            "Tissue Cellular Distribution",
            "Expressed on <strong>virtually all nucleated cells</strong> and platelets (absent on mammalian mature non-nucleated RBCs)",
            "Restricted expression: <strong>Professional Antigen-Presenting Cells (APCs)</strong> (Dendritic cells, Macrophages, B cells, thymic epithelial cells)"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2022"
      ]
    },
    {
      "id": "u4-q18",
      "type": "diff",
      "marks": 5,
      "question": "Tabulate the Gell and Coombs Classification of Hypersensitivity Reactions (Types I, II, III, and IV) with immunological mechanisms and veterinary disease examples.",
      "topicId": "u4-t16",
      "answer": "<p>Hypersensitivity reactions are inappropriate or exaggerated adaptive immune responses that result in host tissue injury and inflammatory pathology, classified into four major types by Philip Gell and Robin Coombs (1963):</p>",
      "keyPoints": [
        "Type I: Immediate, IgE-mediated, mast cell degranulation releasing histamine (e.g., atopy, anaphylaxis).",
        "Type II: Cytotoxic, IgG/IgM against cell-surface antigens activating complement/ADCC (e.g., neonatal isoerythrolysis, blood transfusion reaction).",
        "Type III: Immune complex-mediated, soluble Ag-Ab deposits in microvasculature activating complement (e.g., blue eye in dogs, glomerulonephritis).",
        "Type IV: Delayed-type, cell-mediated, Th1/macrophages and CD8+ T cells without antibodies (e.g., tuberculin test, contact dermatitis)."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Gell and Coombs Classification of Hypersensitivity Reactions",
        "headers": [
          "Type / Designator",
          "Immune Reactant & Mediator",
          "Pathological Mechanism",
          "Onset Kinetics",
          "Veterinary Disease Examples"
        ],
        "rows": [
          [
            "Type I (Immediate / Anaphylactic)",
            "<strong>$\text{IgE}$ antibodies</strong> bound to $\text{Fc}\\epsilon\text{RI}$ on mast cells & basophils",
            "Allergen cross-links IgE $\to$ explosive release of histamine, serotonin, leukotrienes, and PAF $\to$ vasodilation, edema, smooth muscle spasm",
            "Immediate: <strong>minutes (15–30 min)</strong>",
            "Canine atopic dermatitis, sweet itch in horses (Culicoides), bovine anaphylaxis, acute urticaria"
          ],
          [
            "Type II (Cytotoxic / Antibody-Mediated)",
            "<strong>$\text{IgG}$ and $\text{IgM}$ antibodies</strong> directed against cell surface or tissue-bound antigens",
            "Antibody binds cellular antigen $\to$ activates complement MAC lysis, C3b opsonization/phagocytosis, or $\text{Fc}\\gamma\text{R}$-mediated ADCC by NK cells",
            "Hours to days (<strong>6–24 hours</strong>)",
            "<strong>Neonatal Isoerythrolysis (NI)</strong> in foals, Canine Immune-Mediated Hemolytic Anemia (IMHA), incompatible blood transfusion reactions"
          ],
          [
            "Type III (Immune Complex-Mediated)",
            "Soluble <strong>$\text{IgG} / \text{IgM}$ immune complexes</strong> in slight antigen excess",
            "Circulating complexes deposit in vascular basements (glomeruli, synovium) $\to$ activates complement C5a $\to$ neutrophil influx $\to$ lysosomal enzyme release $\to$ necrotizing vasculitis",
            "Subacute: <strong>4 to 10 hours</strong>",
            "<strong>'Blue Eye' corneal edema</strong> in dogs (Infectious Canine Hepatitis virus), Purpura Hemorrhagica in horses (post-Strangles), immune complex glomerulonephritis"
          ],
          [
            "Type IV (Delayed-Type / Cell-Mediated)",
            "<strong>Sensitized T-cells</strong> ($\text{Th}_1$ CD4+ cells and $\text{CD8}^+$ CTLs); <strong>zero antibody involvement</strong>",
            "Sensitized Th1 cells secrete IFN-$\\gamma$ and TNF-$\\alpha$ $\to$ massive recruitment and activation of macrophages $\to$ release of proteases, ROS, and granuloma formation",
            "Delayed: <strong>24 to 72 hours</strong> (peak at 48–72 hr)",
            "<strong>Tuberculin skin reaction</strong> (bovine TB), Johnin test in paratuberculosis, Allergic contact dermatitis (flea collar chemicals, poison ivy)"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-q19",
      "type": "short",
      "marks": 5,
      "question": "Describe the immunological principle, procedure, and interpretation of the Tuberculin Skin Test in cattle (Single Intradermal vs Comparative Cervical Test).",
      "topicId": "u4-t16",
      "answer": "<p>The <strong>Tuberculin Skin Test</strong> is the statutory international ante-mortem screening test for bovine tuberculosis (*Mycobacterium bovis*), based on eliciting an in vivo <strong>Type IV (Delayed-Type Hypersensitivity - DTH)</strong> cellular immune response.</p><p><strong>Immunological Mechanism:</strong> In infected cattle, <em>M. bovis</em> antigens stimulate memory $\\text{CD4}^+\\\\text{ Th}_1$ lymphocytes. When <strong>Bovine Purified Protein Derivative (Bovine PPD)</strong> is injected intradermally, tissue dendritic cells present tuberculin peptides to circulating sensitized memory T cells. Over 24–72 hours, activated Th1 cells secrete <strong>Interferon-gamma (IFN-$\\\\gamma$)</strong> and chemokines (MCP-1), recruiting a massive influx of circulating blood monocytes and macrophages into the dermis. The resulting cellular infiltration, vascular permeability, and local edema produce a palpable, firm, indurated swelling peaking at <strong>72 hours</strong>.</p><p><strong>Test Procedures & Interpretation:</strong></p><ol><li><strong>Single Intradermal (SID) Test (Caudal Fold Test):</strong><ul><li><em>Procedure:</em> $0.1\\\\text{ mL}$ Bovine PPD ($2000\\\\text{ IU}$) injected intradermally into the caudal fold at the base of the tail using a tuberculin syringe with 26-gauge needle.</li><li><em>Reading:</em> Palpated and measured with Vernier calipers at <strong>$72\\pm 4\\\\text{ hours}$</strong>. Any visible or palpable increase in skin fold thickness $\\ge 4\\\\text{ mm}$ or circumscribed painful edema classifies the animal as a positive reactor.</li></ul></li><li><strong>Comparative Cervical Tuberculin (CCT) Test:</strong><ul><li><em>Purpose:</em> Resolves false-positive reactors caused by cross-sensitization to non-pathogenic environmental mycobacteria (<em>Mycobacterium avium</em>).</li><li><em>Procedure:</em> Two shaved sites on the side of the neck (12 cm apart) injected intradermally: Upper site with $0.1\\\\text{ mL}$ <strong>Avian PPD</strong> ($2500\\\\text{ IU}$); Lower site with $0.1\\\\text{ mL}$ <strong>Bovine PPD</strong> ($2500\\\\text{ IU}$). Skin thickness measured before and at 72 hours.</li><li><em>Interpretation:</em><ul><li><strong>Positive (bTB Reactor):</strong> Bovine skin fold increase exceeds avian skin fold increase by <strong>$> 4\\\\text{ mm}$</strong> ($B - A > 4\\\\text{ mm}$) or clinical signs of edema/necrosis are present.</li><li><strong>Negative:</strong> Bovine increase $\\le$ Avian increase, or $B - A < 2\\\\text{ mm}$.</li><li><strong>Inconclusive / Suspect:</strong> $B - A$ between $2\\\\text{ and }4\\\\text{ mm}$; re-tested after 60 days.</li></ul></li></ul></li></ol>",
      "keyPoints": [
        "Type IV DTH reaction: Memory Th1 cells secrete IFN-gamma recruiting macrophages over 24-72 hours to create indurated swelling.",
        "SID test: Caudal fold injection of Bovine PPD read at 72 hours; >=4 mm increase denotes reactor.",
        "CCT test: Comparative cervical test with Bovine PPD and Avian PPD; Bovine reaction > Avian reaction by >4 mm confirms M. bovis."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u4-q20",
      "type": "short",
      "marks": 5,
      "question": "Describe Colostral Transfer of Maternal Immunoglobulins in farm animals and explain the pathogenesis, diagnosis, and management of Failure of Passive Transfer (FPT) in neonatal calves.",
      "topicId": "u4-t07",
      "answer": "<p>Due to the impermeable <strong>synepitheliochorial placenta</strong> in cattle and sheep (and epitheliochorial placenta in horses and pigs), maternal immunoglobulins cannot cross the placental barrier during gestation. Consequently, neonates are born essentially <strong>agammaglobulinemic</strong> and rely entirely on passive transfer of maternal antibodies via <strong>colostrum</strong> for early survival.</p><p><strong>Physiology of Colostral Transfer:</strong></p><ul><li>During late gestation, maternal circulating <strong>$\\text{IgG}_1$</strong> is selectively transported across mammary alveolar epithelium via FcRn receptors, concentrating in colostrum (up to $50\\text{--}100\\text{ mg/mL}$).</li><li>Neonatal enterocytes express specialized Fc receptors that absorb intact immunoglobulins by non-selective pinocytosis into lacteals and systemic circulation.</li><li><strong>Gut Closure Phenomenon:</strong> Macromolecular absorption is maximal during the first 4–6 hours of life, declining progressively until complete 'gut closure' occurs by <strong>24 hours post-birth</strong> due to enterocyte replacement by mature, non-absorptive epithelial cells.</li></ul><p><strong>Failure of Passive Transfer (FPT):</strong> Occurs when a calf fails to absorb adequate concentrations of protective maternal immunoglobulins, defined as a serum <strong>$\\text{IgG} < 10\\text{ g/L (1000 mg/dL)}$</strong> at 24 to 48 hours of age.</p><ul><li><em>Predisposing Causes:</em> Delayed colostrum ingestion ($> 6$ hours), ingestion of poor-quality colostrum ($< 50\\text{ g/L IgG}$ on Colostrometer / Brix refractometer $< 22\\%$), insufficient volume ($< 10\\%$ of body weight), maternal pre-partum leakage, or poor mothering.</li><li><em>Consequences:</em> Exponentially increases susceptibility to lethal neonatal calf diarrhea (Enterotoxigenic <em>E. coli</em> K99, Rotavirus, Coronavirus) and septicemia (Colisepticemia).</li><li><em>Diagnosis:</em> Direct Radial Immunodiffusion (SRID, Gold Standard); Brix Refractometry (serum Brix $< 8.4\\%$ denotes FPT); Zinc Sulfate Turbidity (ZST) test; or Sodium Sulfite precipitation.</li><li><em>Therapy:</em> If calf is $< 18$ hours old: immediate bottle/esophageal feeding of 3–4 liters of high-quality thawed colostrum. If $> 24$ hours (gut closed): intravenous transfusion of 1–2 liters of donor bovine plasma or whole blood.</li></ul>",
      "keyPoints": [
        "Synepitheliochorial placenta prevents in utero antibody transfer; calves born agammaglobulinemic.",
        "Gut closure occurs at 24 hours; colostrum (IgG1) must be ingested within first 4-6 hours (10% body weight).",
        "FPT defined as serum IgG < 10 g/L (< 1000 mg/dL) at 24-48 hours.",
        "Diagnosis: Direct SRID, serum Brix refractometry (<8.4%), or ZST test.",
        "Treatment: Colostrum if <18 hr; IV plasma transfusion if >24 hr."
      ],
      "diagram": "Mammary IgG1 accumulation -> Ingestion <6 hr -> Pinocytotic absorption -> Gut closure at 24 hr",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "KVAFSU 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-q21",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Immunoglobulins (Antibodies) covering: (a) Basic Y-Shaped Monomeric Structural Architecture (Chains, Domains, CDRs, Hinge Region), (b) Enzymatic Cleavage by Papain and Pepsin, (c) Biological Effector Functions, (d) Detailed Comparative Characteristics of the Five Immunoglobulin Classes (IgG, IgM, IgA, IgE, IgD), and (e) Species-Specific Nuances in Veterinary Immunology.",
      "topicId": "u4-t07",
      "answer": "<h3>(a) Basic Structural Architecture of Immunoglobulins</h3><p>An <strong>Immunoglobulin (Antibody)</strong> is a heterodimeric glycoprotein synthesized by plasma cells, composed of four polypeptide chains linked by covalent interchain disulfide bonds (-S-S-):</p><ul><li><strong>Two Identical Heavy (H) Chains ($50\\text{--}75\\text{ kDa}$):</strong> Designate the immunoglobulin class ($\\gamma, \\mu, \\alpha, \\epsilon, \\delta$).</li><li><strong>Two Identical Light (L) Chains ($25\\text{ kDa}$):</strong> Either Kappa ($\\kappa$) or Lambda ($\\lambda$), shared across all classes.</li><li><strong>Domain Organization:</strong> Polypeptide chains fold into globular compact <strong>immunoglobulin domains</strong> ($\\sim 110$ amino acids) with a sandwich $\\beta$-barrel conformation:<ul><li><em>Light Chain Domains:</em> One Variable domain ($\\text{V}_L$) and one Constant domain ($\\text{C}_L$).</li><li><em>Heavy Chain Domains:</em> One Variable domain ($\\text{V}_H$) and three or four Constant domains ($\\text{C}_H1, \\text{C}_H2, \\text{C}_H3$ in IgG/IgA; plus $\\text{C}_H4$ in IgM/IgE).</li></ul></li><li><strong>Hypervariable Regions (Complementarity Determining Regions - CDRs):</strong> Within each variable domain ($\\text{V}_H$ and $\\text{V}_L$), three hypervariable loops (CDR1, CDR2, CDR3) cluster at the tip. Together, the 3 CDRs of $\\text{V}_H$ and 3 CDRs of $\\text{V}_L$ form the <strong>Paratope (Antigen-Binding Site)</strong>. CDR3 of the heavy chain exhibits the highest sequence and structural diversity.</li><li><strong>Hinge Region:</strong> A proline- and cysteine-rich flexible peptide segment located between $\\text{C}_H1$ and $\\text{C}_H2$ in IgG, IgA, and IgD. Confers segmental flexibility, allowing the two Fab arms to open at variable angles ($0^\\circ\\text{ to }180^\\circ$) to cross-link epitopes spaced at varying distances on microbial surfaces. (Absent in IgM and IgE).</li></ul><h3>(b) Enzymatic Cleavage by Papain and Pepsin</h3><p>Historical proteolytic cleavage experiments by Rodney Porter and Alfred Nisonoff established the modular domain organization of antibodies:</p><ol><li><strong>Papain Digestion:</strong> Cleaves heavy chains on the <em>amino-terminal side</em> of the hinge interchain disulfide bonds. Yields three independent fragments:<ul><li><strong>Two Fab Fragments (Fragment antigen-binding, 50 kDa each):</strong> Monovalent; each possesses one complete L chain and the $\\text{V}_H\\text{-C}_H1$ portion of the H chain. Retains antigen binding ability but <em>cannot precipitate or agglutinate</em> antigens or activate complement.</li><li><strong>One Fc Fragment (Fragment crystallizable, 50 kDa):</strong> Composed of the paired carboxy-terminal halves ($\\text{C}_H2\\text{-C}_H3$) joined by disulfide bonds. Mediates effector functions: binds $\\text{Fc}$ receptors on leukocytes, fixes C1q complement, and directs placental/colostral transfer.</li></ul></li><li><strong>Pepsin Digestion:</strong> Cleaves heavy chains on the <em>carboxy-terminal side</em> of the hinge disulfide bonds. Yields:<ul><li><strong>One $\\text{F(ab')}_2$ Fragment (100 kDa):</strong> Bivalent fragment containing both Fab arms joined by the intact hinge disulfide bond. Can specifically bind, cross-link, precipitate, and agglutinate antigens, but lacks Fc effector functions.</li><li><strong>Multiple degraded Fc' peptide fragments</strong> (digested into small inactive peptides).</li></ul></li></ol><h3>(c) Biological Effector Functions of Antibodies</h3><ul><li><strong>1. Neutralization:</strong> Steric hindrance blocking viral attachment proteins (e.g., Rabies G protein) or neutralizing bacterial exotoxins (e.g., Tetanus toxin) from binding host cellular receptors.</li><li><strong>2. Opsonization:</strong> Coated antibodies expose their Fc domains to engage $\\text{Fc}\\gamma\\text{R}$ on neutrophils and macrophages, triggering phagocytosis.</li><li><strong>3. Complement Activation:</strong> Binding of multiple IgG molecules or a single IgM pentamer exposes C1q binding sites on $\\text{C}_H2$ (IgG) or $\\text{C}_H3$ (IgM), initiating the classical complement cascade leading to MAC ($C5b\\text{-}9$) lysis.</li><li><strong>4. Antibody-Dependent Cellular Cytotoxicity (ADCC):</strong> Target cells coated with IgG are bound by $\\text{Fc}\\gamma\\text{RIII (CD16)}$ on Natural Killer (NK) cells, triggering targeted release of perforin and granzymes, inducing apoptosis.</li><li><strong>5. Mucosal Defense (sIgA):</strong> Dimeric secretory IgA with secretory component resists proteolytic cleavage in gut and respiratory secretions, mediating immune exclusion of pathogens.</li></ul><h3>(d) Detailed Comparative Profiles of the Five Classes</h3>",
      "keyPoints": [
        "Structure: Heterotetramer (2H + 2L); variable domains (VH/VL) contain 3 CDRs each forming paratope.",
        "Enzymatic cleavage: Papain yields 2 monovalent Fab + 1 Fc; Pepsin yields 1 bivalent F(ab')2 + degraded Fc' fragments.",
        "Effector functions: Neutralization, opsonization (via Fc-gamma-R), complement fixation (C1q binding), and ADCC (via NK cells).",
        "Classes: IgG (systemic/colostrum, 7S), IgM (primary pentamer with J-chain, 19S), IgA (mucosal dimer with secretory component), IgE (reaginic, mast cell Fc-epsilon-RI), IgD (naive B-cell BCR).",
        "Veterinary nuances: Bovine/equine lack transplacental transfer; camelids possess unique heavy-chain-only antibodies (HCAbs / nanobodies)."
      ],
      "diagram": "Y-Shape: [Fab Arm (VH+VL)] --- [Hinge] --- [Fc Stem (CH2+CH3)]",
      "table": {
        "title": "Comprehensive Characteristics of the Five Immunoglobulin Classes",
        "headers": [
          "Property / Feature",
          "IgG",
          "IgM",
          "IgA",
          "IgE",
          "IgD"
        ],
        "rows": [
          [
            "Heavy Chain Class",
            "Gamma ($\\gamma$)",
            "Mu ($\\mu$)",
            "Alpha ($\u0007lpha$)",
            "Epsilon ($\\epsilon$)",
            "Delta ($\\delta$)"
          ],
          [
            "Molecular Form",
            "Monomer",
            "<strong>Pentamer</strong> (with J-chain) in serum",
            "Monomer in serum; <strong>Dimer</strong> (with J-chain + Secretory Component) in secretions",
            "Monomer",
            "Monomer"
          ],
          [
            "Molecular Mass ($\text{kDa}$)",
            "150",
            "900",
            "160 (monomer) / 385 (sIgA dimer)",
            "190",
            "180"
          ],
          [
            "Number of Constant Domains",
            "Three ($\text{C}_H1, \text{C}_H2, \text{C}_H3$)",
            "Four ($\text{C}_H1\text{--}\text{C}_H4$)",
            "Three ($\text{C}_H1, \text{C}_H2, \text{C}_H3$)",
            "Four ($\text{C}_H1\text{--}\text{C}_H4$)",
            "Three ($\text{C}_H1, \text{C}_H2, \text{C}_H3$)"
          ],
          [
            "Hinge Region",
            "Present (flexible)",
            "Absent",
            "Present",
            "Absent",
            "Present (very long)"
          ],
          [
            "Antigen-Binding Valency",
            "2 (Bivalent)",
            "10 (Decavalent)",
            "4 (Tetravalent in sIgA)",
            "2 (Bivalent)",
            "2 (Bivalent)"
          ],
          [
            "Serum Concentration (% total)",
            "Dominant (75–85%)",
            "Moderate (5–10%)",
            "Low in serum (5–10%); <strong>Dominant in mucosal secretions</strong>",
            "Trace ($< 0.002\\%$)",
            "Trace ($< 0.1\\%$)"
          ],
          [
            "Classical Complement Fixation",
            "Yes (strong; $\text{IgG}_1, \text{IgG}_2$)",
            "<strong>Extremely Potent</strong> (highest efficiency)",
            "No (activates alternative pathway)",
            "No",
            "No"
          ],
          [
            "Primary Biological Function",
            "Major secondary systemic defense; opsonization, ADCC, colostral transfer",
            "Earliest primary response; potent agglutination and complement lysis",
            "Mucosal immunity (gut, respiratory, milk, tears); prevents adherence",
            "Mediates Type I hypersensitivity (allergies); defense against parasitic helminths",
            "Co-expressed with IgM on naive mature B-cell surfaces; BCR signaling"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2023",
        "GADVASU 2022",
        "LUVAS 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u4-q22",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive account of Antigen Processing and Presentation Pathways: (a) Endogenous / Cytosolic Pathway (MHC Class I), (b) Exogenous / Endocytic Pathway (MHC Class II), (c) Cross-Presentation Mechanism, and (d) Comparative Table of Pathways.",
      "topicId": "u4-t13",
      "answer": "<h3>(a) Endogenous / Cytosolic Antigen Processing Pathway (MHC Class I)</h3><p>Operates in virtually all nucleated cells to sample and display internal peptides derived from <strong>intracellular pathogens (viruses, intracellular bacteria) and mutated tumor proteins</strong> to $\\text{CD8}^+$ Cytotoxic T Lymphocytes (CTLs):</p><ol><li><strong>Antigen Ubiquitination & Proteasomal Cleavage:</strong> Endogenous proteins in the cytosol are covalently tagged with chains of <em>ubiquitin</em> molecules. The tagged proteins are recognized and degraded into short oligopeptides (8–15 amino acids) by the <strong>Immunoproteasome</strong> (a 26S proteasome variant induced by IFN-$\\\\gamma$ having LMP2, LMP7, and MECL-1 catalytic subunits).</li><li><strong>Peptide Translocation via TAP:</strong> Cleaved peptides are actively translocated from the cytosol into the lumen of the Rough Endoplasmic Reticulum (RER) by the <strong>Transporter associated with Antigen Processing (TAP1 and TAP2)</strong>, an ATP-binding cassette transporter with substrate specificity for 8–16 aa peptides with hydrophobic or basic carboxy termini.</li><li><strong>MHC Class I Assembly & Peptide Loading:</strong> Newly synthesized MHC Class I $\\alpha$-chains assemble in the RER membrane with the chaperone <em>calnexin</em>. Upon association with <strong>$\\beta_2$-microglobulin</strong>, calnexin dissociates, and the heterodimer binds the <strong>Peptide Loading Complex (PLC)</strong> comprising <em>calreticulin</em>, <em>ERp57</em>, and <em>tapasin</em> (which bridges MHC-I directly to TAP). Peptides are trimmed at their N-termini by ER aminopeptidase (ERAP) to precisely <strong>8 to 10 amino acids</strong> and loaded into the $\\alpha_1/\\alpha_2$ cleft.</li><li><strong>Cell Surface Export:</strong> Stable peptide-MHC-I trimers dissociate from the PLC, transit through the Golgi apparatus via secretory vesicles, and are displayed on the plasma membrane for recognition by the TCR of $\\text{CD8}^+$ T cells.</li></ol><h3>(b) Exogenous / Endocytic Antigen Processing Pathway (MHC Class II)</h3><p>Operates exclusively in <strong>Professional Antigen-Presenting Cells (Dendritic cells, Macrophages, B lymphocytes)</strong> to sample extracellular pathogens (bacteria, fungi, extracellular toxins) for presentation to $\\text{CD4}^+$ T Helper Lymphocytes:</p><ol><li><strong>Endocytosis & Endosomal Proteolysis:</strong> Extracellular antigens are internalized via receptor-mediated endocytosis, phagocytosis, or macropinocytosis. Endocytic vesicles fuse with lysosomes to form <em>endolysosomes</em>, where progressive acidification (pH 6.0 $\\to$ 4.5) activates acidic lysosomal hydrolases: <strong>Cathepsins (S, L, B, D)</strong>, which digest proteins into 13–25 amino acid fragments.</li><li><strong>MHC Class II Assembly & Invariant Chain ($I_i$):</strong> In the RER, newly synthesized MHC Class II $\\alpha\\beta$ heterodimers assemble with a specialized trimeric chaperone: the <strong>Invariant Chain (Ii / CD74)</strong>. The invariant chain serves two functions: (1) Its <em>CLIP (Class II-associated Invariant Chain Peptide)</em> region sits directly inside the peptide-binding cleft, blocking premature binding of endogenous ER peptides; and (2) Its cytoplasmic tail carries an endosomal sorting signal directing the complex to the endocytic pathway.</li><li><strong>Endosomal Fusion & CLIP Removal:</strong> The MHC-II-Ii complex is routed to the <strong>MHC Class II Compartment (MIIC)</strong>. In this acidic vesicle, cathepsins degrade the invariant chain, leaving only the small <strong>CLIP fragment</strong> blocking the cleft. A specialized non-classical chaperone, <strong>HLA-DM (in animals, BoLA-DM/EqLA-DM)</strong>, binds to MHC Class II, inducing conformational changes that release CLIP.</li><li><strong>Peptide Exchange & Presentation:</strong> With the cleft vacant, high-affinity exogenous peptides (13–25 amino acids) bind stably to the $\\alpha_1/\\beta_1$ cleft. Stable peptide-MHC-II complexes are transported to the cell surface for presentation to $\\text{CD4}^+$ T cells.</li></ol><h3>(c) Cross-Presentation Phenomenon</h3><p><strong>Cross-Presentation</strong> is the specialized immunological mechanism wherein professional <strong>Dendritic Cells (DCs)</strong> internalize <em>exogenous</em> viral or tumor antigens, divert them from endosomes into the cytosol, process them via the proteasome/TAP machinery, and load them onto <strong>MHC Class I molecules</strong> to activate naive $\\text{CD8}^+$ Cytotoxic T cells. This is absolutely indispensable for initiating cytotoxic immunity against viruses that do not directly infect dendritic cells.</p>",
      "keyPoints": [
        "Endogenous pathway: Ubiquitinated cytosolic proteins cleaved by immunoproteasome -> TAP transport into ER -> loaded onto MHC-I via tapasin/PLC -> presented to CD8+ CTLs.",
        "Exogenous pathway: Internalized in endosomes -> cathepsins degrade antigen -> Invariant chain (CD74) blocks ER cleft until MIIC -> HLA-DM removes CLIP -> loaded onto MHC-II -> presented to CD4+ Th cells.",
        "Cross-presentation: Dendritic cells divert exogenous viral antigens onto MHC Class I to prime CD8+ T cells against viruses that don't infect DCs."
      ],
      "diagram": "Endogenous: Cytosol -> Proteasome -> TAP -> ER (MHC-I) -> Golgi -> CD8+ CTL\nExogenous: Endosome -> Cathepsins -> MIIC (HLA-DM removes CLIP) -> MHC-II -> CD4+ Th",
      "table": {
        "title": "Comprehensive Comparison: Endogenous vs Exogenous Antigen Processing Pathways",
        "headers": [
          "Feature / Dimension",
          "Endogenous (MHC Class I) Pathway",
          "Exogenous (MHC Class II) Pathway"
        ],
        "rows": [
          [
            "Antigen Origin",
            "Intracellular / Cytosolic (viral proteins, tumor antigens)",
            "Extracellular (bacteria, parasites, soluble toxins)"
          ],
          [
            "Degradation Machinery",
            "<strong>26S Immunoproteasome</strong> in the cytosol",
            "<strong>Cathepsins (acidic proteases)</strong> in endolysosomes"
          ],
          [
            "Peptide Transporter",
            "<strong>TAP1 and TAP2</strong> heterodimeric transporter complex",
            "No TAP involved; vesicles fuse directly with endosomes"
          ],
          [
            "Chaperone Molecules",
            "Calnexin, Calreticulin, ERp57, <strong>Tapasin</strong>",
            "<strong>Invariant Chain ($I_i$ / CD74)</strong> and <strong>HLA-DM</strong>"
          ],
          [
            "Site of Peptide-MHC Binding",
            "Lumen of the <strong>Rough Endoplasmic Reticulum (RER)</strong>",
            "Late endosome / <strong>MIIC compartment</strong>"
          ],
          [
            "Length of Bound Peptide",
            "Strictly <strong>8 to 10 amino acids</strong>",
            "Longer, flexible <strong>13 to 25 amino acids</strong>"
          ],
          [
            "Responding T-Cell Subtype",
            "<strong>$\text{CD8}^+$ Cytotoxic T Lymphocytes (CTLs)</strong>",
            "<strong>$\text{CD4}^+$ T Helper Lymphocytes (Th cells)</strong>"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "RAJUVAS 2022"
      ]
    },
    {
      "id": "u4-q23",
      "type": "long",
      "marks": 12,
      "question": "Write an extensive treatise on the Complement System: (a) Nomenclature & Biosynthesis, (b) Activation Pathways (Classical, Lectin, Alternative), (c) Generation of C3 and C5 Convertases, (d) Assembly of Membrane Attack Complex (MAC), (e) Biological Consequences, and (f) Regulatory Control Proteins.",
      "topicId": "u4-t14",
      "answer": "<h3>(a) Nomenclature and Biosynthesis</h3><p>The <strong>Complement System</strong> is an enzymatic cascade of over 30 soluble serum and cell-surface glycoproteins, constituting approx. 10% of total plasma globulins. First identified by Jules Bordet (1895) as a heat-labile substance (destroyed at 56°C for 30 minutes) that 'complements' antibody-mediated bacteriolysis. Most complement proteins are synthesized constitutively by <strong>hepatocytes</strong> in the liver, with significant local contributions by tissue macrophages, monocytes, and epithelial cells. They circulate as inactive proenzymes (zymogens) designated C1 to C9. Cleavage yields a smaller activation peptide (designated suffix 'a', e.g., C3a, which diffuses away) and a larger active fragment (designated suffix 'b', e.g., C3b, which binds to the pathogen surface).</p><h3>(b) The Three Activation Cascades</h3><ol><li><strong>1. The Classical Pathway (Antibody-Dependent):</strong> Initiated when the hexameric recognition unit <strong>C1q</strong> binds to the Fc domains of antigen-bound $\\text{IgM}$ (requires 1 pentamer) or $\\text{IgG}$ (requires $\\ge 2$ closely spaced monomers, $\\text{IgG}_1/\\text{IgG}_2$). C1q undergoes a conformational change that auto-activates <strong>C1r</strong>, which in turn cleaves and activates <strong>C1s</strong>. Activated C1s serine protease cleaves <strong>C4</strong> (into C4a and C4b) and then cleaves <strong>C2</strong> (into C2b and C2a). The fragments assemble on the membrane to form the Classical C3 Convertase: <strong>C4b2a</strong>.</li><li><strong>2. The Lectin (MBL) Pathway (Innate):</strong> Triggered independently of antibodies. Circulating <strong>Mannose-Binding Lectin (MBL)</strong> or ficolins bind conserved terminal mannose/fucose carbohydrates on microbial cell walls. MBL-Associated Serine Proteases (<strong>MASP-1, MASP-2</strong>) are activated, cleaving C4 and C2 to form the identical C3 convertase: <strong>C4b2a</strong>.</li><li><strong>3. The Alternative Pathway (Innate Properdin Pathway):</strong> Operates continuously at low basal levels via spontaneous water hydrolysis of circulating C3: <strong>C3 tick-over</strong> ($C3 \\to C3(H_2O)$). $C3(H_2O)$ binds plasma <strong>Factor B</strong>, allowing plasma serine protease <strong>Factor D</strong> to cleave Factor B into Ba and Bb. This forms the initial fluid-phase C3 convertase ($C3(H_2O)Bb$). On microbial surfaces lacking host sialic acid, deposited C3b binds Factor B, cleaved by Factor D to form the membrane Alternative C3 Convertase: <strong>C3bBb</strong>. <strong>Properdin (Factor P)</strong> binds and stabilizes this enzyme, increasing its half-life tenfold.</li></ol><h3>(c) Convergence at C3 and Formation of C5 Convertases</h3><p>Both C3 convertases (C4b2a and C3bBb) act as extraordinarily powerful serine proteases, cleaving thousands of native C3 molecules into:</p><ul><li><strong>C3a:</strong> Released into fluid phase; acts as a potent anaphylatoxin.</li><li><strong>C3b:</strong> Opsonin that binds covalently via its exposed reactive thioester bond to microbial amino/hydroxyl groups.</li></ul><p>A molecule of C3b binds back to the C3 convertases, shifting their substrate specificity from C3 to C5, forming the <strong>C5 Convertases</strong>:</p><ul><li>Classical / Lectin C5 Convertase: <strong>C4b2a3b</strong></li><li>Alternative C5 Convertase: <strong>C3bBb3b ($\\text{C3b}_2\\text{Bb}$)</strong></li></ul><h3>(d) Assembly of the Membrane Attack Complex (MAC / C5b-9)</h3><p>C5 convertase cleaves native C5 into <strong>C5a</strong> (the most potent anaphylatoxin and neutrophil chemoattractant) and <strong>C5b</strong>. C5b is unstable and immediately binds <strong>C6</strong>, then <strong>C7</strong>. The lipophilic $\\text{C5b67}$ complex inserts into the outer lipid bilayer of the target membrane. <strong>C8</strong> binds next, penetrating deeper into the membrane. This triggers the binding and rapid polymerization of <strong>10 to 18 molecules of C9</strong>, assembling a rigid, hollow cylindrical pore (internal diameter $10\\text{ nm}$). Unregulated influx of water and $\\text{Na}^+$ causes immediate colloid-osmotic lysis.</p><h3>(e) Major Biological Consequences</h3><ul><li><strong>Cytolysis:</strong> MAC ($C5b\\text{-}9$) insertion destroys Gram-negative bacteria, enveloped virions, and mycoplasmas.</li><li><strong>Opsonization:</strong> C3b and iC3b coat pathogens, engaging CR1 (CD35) and CR3 on phagocytes, producing a 1000-fold increase in phagocytic uptake.</li><li><strong>Inflammation & Anaphylatoxins:</strong> <strong>C5a, C3a, and C4a</strong> (in potency order: $\\text{C5a} > \\text{C3a} \\gg \\text{C4a}$) bind G-protein coupled receptors on mast cells and basophils, triggering explosive degranulation (histamine release), smooth muscle contraction, and capillary permeability. C5a is a potent chemoattractant directing neutrophils to infection foci.</li><li><strong>Immune Complex Solubilization:</strong> C3b deposition disrupts large insoluble antigen-antibody lattices into small soluble complexes, binding erythrocyte CR1 for transport to splenic macrophages.</li></ul><h3>(f) Regulatory Proteins (Self-Protection)</h3><p>Host cells express tight regulatory mechanisms to prevent autologous destruction: <strong>C1-Inhibitor (C1-INH)</strong> halts C1r/C1s; <strong>Factor H</strong> and <strong>Factor I</strong> degrade alternative pathway C3b into inactive iC3b; <strong>Decay-Accelerating Factor (DAF / CD55)</strong> accelerates dissociation of C3 convertases; and <strong>Protectin (CD59)</strong> binds C8/C9 on host membranes, physically preventing polymerization of the MAC pore.</p>",
      "keyPoints": [
        "Activation: Classical (C1q binds IgM/IgG -> C4b2a); Lectin (MBL/MASP -> C4b2a); Alternative (C3 tick-over + Factor B/D/P -> C3bBb).",
        "C3 convertase cleaves C3 into C3a (anaphylatoxin) and C3b (opsonin); C5 convertase (C4b2a3b / C3bBb3b) cleaves C5.",
        "MAC assembly: C5b + C6 + C7 + C8 + poly-C9 (10-18 monomers) forming 10 nm lytic pore.",
        "Biological functions: Colloid-osmotic lysis, C3b opsonization via CR1, C5a/C3a anaphylatoxins and chemotaxis, immune complex clearance.",
        "Regulation: C1-INH, DAF (CD55), Factor H/I, and CD59 (protectin blocking MAC)."
      ],
      "diagram": "Classical (Ag-Ab) / MBL / Alternative (C3 tick-over) => C3 Convertase => C5 Convertase => MAC (C5b-9) Lysis",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-q24",
      "type": "long",
      "marks": 12,
      "question": "Provide a comprehensive comparative account of Major Serological Reactions in veterinary diagnosis: (a) Agglutination Assays (RBPT, STAT), (b) Precipitation Assays (AGID / Ouchterlony), (c) Enzyme-Linked Immunosorbent Assays (Indirect, Sandwich, Competitive ELISA), and (d) Diagnostic Pitfalls (Cross-Reactivity, Prozone Phenomenon).",
      "topicId": "u4-t10",
      "answer": "<h3>(a) Agglutination Reactions</h3><p><strong>Principle:</strong> Interaction between multivalent antibodies (agglutinins) and <strong>insoluble, particulate antigens</strong> (whole bacterial cells, erythrocytes, latex beads) to cross-link into visible, macroscopic clumping lattices.</p><ol><li><strong>Rose Bengal Plate Test (RBPT):</strong> Rapid field herd-screening agglutination test for bovine brucellosis (*Brucella abortus*). 0.03 mL serum mixed with 0.03 mL Rose Bengal stained killed antigen buffered at <strong>pH 3.65</strong>. Low pH blocks non-specific agglutinins while favoring specific IgG1 binding. Agglutination within 4 minutes indicates a reactor.</li><li><strong>Standard Tube Agglutination Test (STAT):</strong> Quantitative tube agglutination measuring serum antibody titer against <em>Brucella</em>. Serial twofold dilutions of serum mixed with killed antigen and incubated at 37°C for 24–48 hours. Agglutination titer of $\\ge 80\\text{ IU/mL}$ is diagnostic.</li><li><strong>Hemagglutination (HA) & Hemagglutination Inhibition (HI):</strong> Certain viruses (NDV, Avian Influenza, Parvovirus) possess surface hemagglutinins that naturally agglutinate red blood cells. In the <strong>HI Test</strong>, specific antibodies neutralize the viral hemagglutinins, inhibiting hemagglutination (yielding a compact 'button' of RBCs instead of a diffused 'shield' pattern), providing quantitative diagnostic antibody titers.</li></ol><h3>(b) Precipitation Reactions (AGID / Ouchterlony Double Diffusion)</h3><p><strong>Principle:</strong> Interaction between antibodies (precipitins) and <strong>soluble, molecular antigens</strong> in liquid or semi-solid gel media, forming a visible insoluble white precipitin line at the <strong>zone of equivalence</strong>.</p><ul><li><strong>Agar Gel Immunodiffusion (AGID):</strong> Carried out in 1% noble agar plates. A central well is surrounded by six peripheral wells. Antigen and antibodies diffuse radially toward each other:<ul><li><em>Line of Identity:</em> Continuous smooth arc where two adjacent wells contain identical antigens.</li><li><em>Line of Non-Identity:</em> Crossed intersecting lines where antigens share zero epitopes.</li><li><em>Line of Partial Identity:</em> Continuous arc with a spur formation, indicating shared common epitopes plus unique additional epitopes.</li></ul></li><li><em>Veterinary Hallmark:</em> The <strong>Coggins Test</strong> is the statutory international gold-standard AGID assay for <strong>Equine Infectious Anemia (EIA)</strong>, detecting antibodies against viral capsid protein p26. Also standard for Avian Influenza and IBDV.</li></ul><h3>(c) Enzyme-Linked Immunosorbent Assays (ELISA)</h3><ol><li><strong>Indirect ELISA (Antibody Detection):</strong> Solid-phase wells coated with purified antigen $\\to$ test serum added (primary antibody binds) $\\to$ wash $\\to$ enzyme-conjugated anti-species secondary antibody (e.g., goat anti-bovine IgG-HRP) added $\\to$ wash $\\to$ substrate (TMB) added $\\to$ color change stopped with $\\text{H}_2\\text{SO}_4$, optical density read at 450 nm on spectrophotometer. Highly sensitive for herd sero-surveillance (Brucellosis, IBR, Leptospirosis).</li><li><strong>Sandwich ELISA (Antigen Capture):</strong> Wells coated with specific capture monoclonal antibody $\\to$ clinical sample containing viral antigen added $\\to$ wash $\\to$ enzyme-labeled detecting antibody added $\\to$ substrate. Optical density directly proportional to antigen concentration (e.g., Canine Parvovirus fecal antigen detection, BVDV antigen capture).</li><li><strong>Competitive / Blocking ELISA (DIVA Diagnostics):</strong> Test serum and a labeled monoclonal antibody compete for a limited number of immobilized antigen epitopes. If the animal's serum contains high-affinity antibodies, they block the labeled mAb from binding, resulting in an <strong>inverse relationship</strong> (low optical density = positive test). Ideal for species-independent testing and DIVA marker vaccines (e.g., anti-gE in BHV-1, FMDV non-structural protein NSP 3ABC detection).</li></ol><h3>(d) Diagnostic Pitfalls and Mitigation Strategies</h3><ul><li><strong>Prozone Phenomenon:</strong> False-negative agglutination in concentrated serum due to antibody excess saturating epitopes without cross-linking. Mitigated by testing serial twofold dilutions out to $1:640$.</li><li><strong>Postzone Phenomenon:</strong> False-negative due to antigen excess; resolved by adding more antibody.</li><li><strong>Cross-Reactivity:</strong> False-positive reactions caused by shared heterophile epitopes (e.g., cross-reactions between <em>Brucella abortus</em> and <em>Yersinia enterocolitica</em> O:9). Differentiated by competitive ELISA targeting specific non-overlapping epitopes.</li></ul>",
      "keyPoints": [
        "Agglutination: Particulate antigens; RBPT (pH 3.65 screening) and STAT (quantitative titer) for Brucella; HI for NDV.",
        "Precipitation: Soluble antigens; AGID (Coggins test for EIA p26) demonstrating lines of identity, non-identity, and partial identity (spur).",
        "ELISA variants: Indirect (antibody detection), Sandwich (antigen capture), and Competitive (inverse OD, species-independent DIVA testing).",
        "Pitfalls: Prozone phenomenon (antibody excess false negative; avoided by serial dilutions) and cross-reactions (e.g., Brucella with Yersinia O:9)."
      ],
      "diagram": "Indirect ELISA: [Ag] + [Test Ab] + [Anti-species Ab-HRP] + [TMB Substrate] => Color OD 450nm\nCompetitive ELISA: [Ag] + [Test Ab] vs [mAb-HRP] => Inverse Color (Low OD = Positive)",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "WBUAFS 2020"
      ]
    },
    {
      "id": "u4-q25",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Veterinary Vaccines and Immunization: (a) Detailed Classification (Live Attenuated, Inactivated, Toxoids, Recombinant Subunit, Vectored, DNA, DIVA), (b) Adjuvants and Formulations, (c) Host and Management Factors Leading to Vaccination Failure, and (d) Recommended Vaccination Schedules for Dairy Cattle and Canines.",
      "topicId": "u4-t19",
      "answer": "<h3>(a) Comprehensive Classification of Veterinary Vaccines</h3><p>Vaccines are immunological preparations administered to stimulate active protective immunity against specific infectious pathogens:</p><ul><li><strong>1. Live Attenuated Vaccines:</strong> Intact, viable microbes rendered non-pathogenic by repeated in vitro passaging (in embryonated eggs, tissue culture, foreign hosts) or targeted gene deletion. Replicate within the host, stimulating both MHC-I (CD8+ CTLs) and MHC-II (antibodies) responses. <em>Examples:</em> Sterne 34F2 Anthrax vaccine, Live PPR attenuated goat vaccine (Sungri 96 strain), Brucella abortus S19, Modified Live Canine Distemper-Parvovirus vaccine.</li><li><strong>2. Inactivated (Killed) Vaccines / Bacterins:</strong> Virulent organisms killed by physical heat or chemical agents (0.2–0.5% formalin, $\\beta$-propiolactone, binary ethyleneimine BEI). Cannot replicate; safe in pregnant animals, but stimulate primarily humoral immunity and require adjuvants and booster doses. <em>Examples:</em> Inactivated Foot-and-Mouth Disease (FMD) vaccine, Alum-precipitated Hemorrhagic Septicemia (HS) bacterin, Inactivated Rabies vaccine.</li><li><strong>3. Toxoids:</strong> Formalin-detoxified bacterial exotoxins retaining immunogenicity. <em>Examples:</em> Tetanus toxoid, Clostridial enterotoxemia ($\\epsilon$-toxoid) vaccine.</li><li><strong>4. Recombinant Subunit Vaccines:</strong> Protective surface immunogens cloned and overexpressed in heterologous expression systems (yeast, baculovirus). Completely non-infectious. <em>Example:</em> Baculovirus-expressed PCV2 Cap protein.</li><li><strong>5. Vectored Recombinant Vaccines:</strong> Live viral vectors (Canarypox, HVT, Adenovirus) engineered to carry foreign protective genes. <em>Example:</em> HVT-vectored IBD vaccine (Vaxxitek) administered in ovo.</li><li><strong>6. DNA Vaccines:</strong> Plasmids encoding protective antigens under a eukaryotic CMV promoter. Injected intramuscularly; taken up by host myocytes for endogenous processing. <em>Example:</em> West Nile Virus DNA vaccine in horses.</li><li><strong>7. Marker / DIVA Vaccines:</strong> Deletion of non-essential virulence genes (e.g., $gE$ deletion in Bovine Herpesvirus-1 or Pseudorabies) accompanied by companion diagnostic ELISAs.</li></ul><h3>(b) Adjuvants and Delivery Systems</h3><ol><li><strong>Mineral Salts (Depot Effect):</strong> <em>Aluminum Hydroxide ($\\text{Al(OH)}_3$)</em> and <em>Aluminum Phosphate</em>. Form an insoluble gel depot at the injection site that slowly releases antigen, while causing local micro-inflammation that attracts APCs. Skews immunity toward Th2 humoral responses.</li><li><strong>Oil Emulsions:</strong> Water-in-oil (W/O) and oil-in-water (O/W) emulsions (mineral oil, Montanide ISA). Confers prolonged depot release and superior cell-mediated and humoral protection (e.g., IVRI Oil-Adjuvant HS and FMD vaccines).</li><li><strong>Microbial Immunostimulants:</strong> Toll-Like Receptor (TLR) agonists: Saponins (Quil-A, QS-21, ISCOMs), monophosphoryl lipid A (MPLA, TLR4 agonist), and unmethylated CpG dinucleotide oligonucleotides (TLR9 agonist) that drive potent Th1-polarized cytotoxic responses.</li></ol><h3>(c) Factors Causing Vaccination Failure</h3><ul><li><strong>1. Maternal Antibody Interference (MAb):</strong> High titers of colostral IgG in young animals neutralize live attenuated vaccine viruses before they replicate to stimulate active immunity, leaving a critical <strong>'immunity gap'</strong>.</li><li><strong>2. Cold Chain Breakdown:</strong> Inactivation of heat-labile live vaccines (e.g., PPR, Canine Distemper) due to exposure to ambient temperatures ($> 8^\\circ\\text{C}$) or sunlight during transit and storage.</li><li><strong>3. Host Immunosuppression:</strong> Concomitant parasitic infections (helminthiasis, hemoparasites), malnutrition/vitamin deficiencies (Vitamin A, E, Zinc), high ambient thermal stress, or concurrent immunosuppressive viral infections (IBDV in chicks, BVDV in cattle, CPV in dogs).</li><li><strong>4. Antigenic Variation / Strain Mismatch:</strong> Occurrence of field pathogen serotypes or escape mutants not covered by the vaccine strain (e.g., FMDV serotype mismatch between vaccine and field outbreak; Canine Parvovirus CPV-2c variants).</li><li><strong>5. Improper Administration:</strong> Incorrect anatomical route, chemically contaminated syringes/needles (disinfectant residue destroying live vaccines), or failure to administer statutory booster doses.</li></ul><h3>(d) Recommended Standard Vaccination Schedules</h3><ul><li><strong>Dairy Cattle (Pastoral / Indian Standard):</strong><ul><li><em>Foot-and-Mouth Disease (FMD):</em> Inactivated trivalent (O, A, Asia-1) BEI vaccine; primary dose at 4 months, booster after 1 month, followed by <strong>semi-annual revaccination (every 6 months)</strong>.</li><li><em>Hemorrhagic Septicemia (HS):</em> Oil-adjuvant or alum-precipitated bacterin; single annual dose in May–June prior to monsoon.</li><li><em>Blackquarter (BQ):</em> Formalin-killed alum-precipitated *C. chauvoei* bacterin; single annual dose at 6 months of age before monsoon.</li><li><em>Brucellosis:</em> <em>Brucella abortus</em> Strain 19 live vaccine; administered <strong>exclusively once in a lifetime to female calf-hood heifers between 4 to 8 months of age</strong> (strictly contraindicated in adult cows or bulls).</li><li><em>Anthrax:</em> Sterne 34F2 spore vaccine; annually in endemic pastoral zones.</li></ul></li><li><strong>Canines (Companion Animal Schedule):</strong><ul><li><em>Core DHPPiL (Distemper, Hepatitis, Parvovirus, Parainfluenza, Leptospira):</em> Primary vaccination at <strong>6–8 weeks</strong>, followed by booster doses every 3–4 weeks at <strong>10–12 weeks</strong> and <strong>14–16 weeks</strong> of age (to overcome maternal antibody decay), followed by annual booster.</li><li><em>Rabies:</em> Inactivated cell-culture rabies vaccine ($1\\text{ mL}$ SC/IM); primary dose at <strong>12 weeks (3 months)</strong> of age, booster at 1 year, and <strong>annually thereafter</strong>.</li></ul></li></ul>",
      "keyPoints": [
        "Vaccine classes: Live attenuated (strong CTL/humoral), killed bacterins (safe, humoral), toxoids, recombinant subunits, vectored (HVT-IBD), DNA, and DIVA (gE-deleted).",
        "Adjuvants: Aluminum hydroxide (depot Th2 skewing), Montanide oil emulsions (prolonged depot), and saponins/CpG motifs (Th1 skewing).",
        "Vaccination failure: Maternal antibody neutralization, cold chain breakdown, malnutrition/stress, serotype mismatch, and immunosuppression.",
        "Cattle schedule: FMD biannually, HS and BQ annually pre-monsoon, Brucella S19 once in lifetime for 4-8 month female calves.",
        "Canine schedule: DHPPiL at 6-8, 10-12, 14-16 weeks; Rabies at 12 weeks with annual revaccination."
      ],
      "diagram": "Vaccination Failure: Maternal Antibodies | Cold Chain Failure | Stress/Malnutrition | Serotype Mismatch",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2021"
      ]
    }
  ],
  "unit-5": [
    {
      "id": "u5-q01",
      "type": "define",
      "marks": 2,
      "question": "Define Virion, Capsid, and Capsomer.",
      "topicId": "u5-t02",
      "answer": "<p><strong>Virion:</strong> The complete, physically intact, mature, infectious viral particle in the extracellular phase, comprising an inner nucleic acid core (RNA or DNA) enclosed within a protein shell (capsid), with or without an outer host-derived lipid envelope.</p><p><strong>Capsid:</strong> The protective macromolecular protein coat surrounding the viral nucleic acid genome, functioning to shield viral genetic material from nucleases, mediate attachment to specific host receptors in naked viruses, and determine antigenic specificity.</p><p><strong>Capsomer (Capsomere):</strong> The morphologically identifiable, regular surface structural subunit of the capsid visible under transmission electron microscopy, assembled from stoichiometric clusters of individual viral structural polypeptides (protomers).</p>",
      "keyPoints": [
        "Virion: Complete, mature, infectious extracellular viral particle.",
        "Capsid: Protein shell surrounding viral genome mediating protection, attachment, and antigenicity.",
        "Capsomer: Morphological structural building block of the capsid visible under electron microscopy."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "IVRI 2021",
        "GADVASU 2020"
      ]
    },
    {
      "id": "u5-q02",
      "type": "define",
      "marks": 2,
      "question": "Define the Baltimore Classification of Viruses and state its seven groups.",
      "topicId": "u5-t03",
      "answer": "<p>The <strong>Baltimore Classification System</strong>, formulated by David Baltimore (1971), is a fundamental taxonomic scheme that classifies all viruses into <strong>seven distinct groups</strong> based on their genetic genome type (DNA or RNA, single- or double-stranded) and the specific biochemical pathway used to generate messenger RNA (<strong>$(+)$mRNA</strong>):</p><ul><li><strong>Group I:</strong> Double-stranded DNA (dsDNA) viruses (e.g., Poxviridae, Herpesviridae, Adenoviridae).</li><li><strong>Group II:</strong> Single-stranded DNA (ssDNA) viruses (e.g., Parvoviridae, Circoviridae).</li><li><strong>Group III:</strong> Double-stranded RNA (dsRNA) viruses (e.g., Reoviridae, Birnaviridae).</li><li><strong>Group IV:</strong> Positive-sense single-stranded RNA ($(+)\\text{ssRNA}$) viruses (e.g., Picornaviridae, Coronaviridae, Flaviviridae).</li><li><strong>Group V:</strong> Negative-sense single-stranded RNA ($(-)\\text{ssRNA}$) viruses (e.g., Rhabdoviridae, Paramyxoviridae, Orthomyxoviridae).</li><li><strong>Group VI:</strong> Single-stranded RNA with a DNA intermediate (Retroviridae).</li><li><strong>Group VII:</strong> Double-stranded DNA with an RNA intermediate / Reverse transcribing (Hepadnaviridae).</li></ul>",
      "keyPoints": [
        "System classifying viruses into 7 groups based on genome type and pathway of (+)mRNA synthesis.",
        "Groups: I (dsDNA), II (ssDNA), III (dsRNA), IV (+ssRNA), V (-ssRNA), VI (ssRNA-RT), VII (dsDNA-RT)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "RAJUVAS 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u5-q03",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Viral Hemagglutination (HA) and Hemadsorption (HAD).",
      "topicId": "u5-t06",
      "answer": "<p><strong>Hemagglutination (HA):</strong> The physical cross-linking and clumping of red blood cells (erythrocytes) in suspension into a diffuse, lattice-like 'shield' or 'mat' pattern, triggered by surface <strong>hemagglutinin glycoproteins (HA spikes)</strong> of free viral particles (e.g., Newcastle Disease Virus, Avian Influenza, Canine Parvovirus) binding sialic acid receptors on RBC membranes.</p><p><strong>Hemadsorption (HAD):</strong> The adherence and clustering of erythrocytes directly onto the surface of an <strong>intact cell culture monolayer or tissue macrophage infected with virus</strong>. Occurs before cell lysis because viral hemagglutinins are inserted into the infected host cell plasma membrane during late replication. <strong>Veterinary Hallmark:</strong> Pathognomonic diagnostic feature of <strong>African Swine Fever Virus (ASFV)</strong>, where red blood cells adhere in 'mulberry / rosette' clusters around infected swine alveolar macrophages.</p>",
      "keyPoints": [
        "Hemagglutination (HA): Free viral particles clumping RBCs in suspension (NDV, Influenza, Parvovirus).",
        "Hemadsorption (HAD): RBCs adhering as rosettes to the surface of virus-infected cell monolayers (hallmark of African Swine Fever Virus)."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "GADVASU 2021",
        "WBUAFS 2022"
      ]
    },
    {
      "id": "u5-q04",
      "type": "define",
      "marks": 2,
      "question": "Define Syncytium (Multinucleated Giant Cell) and name two veterinary viruses that induce it.",
      "topicId": "u5-t06",
      "answer": "<p>A <strong>Syncytium (Polykarion / Multinucleated Giant Cell)</strong> is a distinctive cytopathic effect (CPE) characterized by the fusion of multiple adjacent infected and uninfected host cell plasma membranes into an enormous, confluent cytoplasmic mass containing dozens to hundreds of nuclei, without cell division.</p><p><strong>Molecular Mechanism & Veterinary Examples:</strong> Driven by viral <strong>fusion (F) glycoproteins</strong> inserted into the host cell membrane that become active at neutral physiological pH, allowing viruses to spread directly from cell to cell while evading neutralizing antibodies in extracellular fluids. <strong>Examples:</strong> (1) <strong>Peste des Petits Ruminants Virus (PPRV)</strong>; (2) <strong>Canine Distemper Virus (CDV)</strong>; (3) <strong>Bovine Respiratory Syncytial Virus (BRSV)</strong>; (4) <strong>Newcastle Disease Virus (NDV)</strong>.</p>",
      "keyPoints": [
        "Multinucleated giant cell formed by membrane fusion of adjacent host cells driven by viral fusion (F) proteins.",
        "Enables direct cell-to-cell spread shielded from extracellular antibodies; classic in PPRV, CDV, BRSV, and NDV."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2022",
        "KVAFSU 2021",
        "MAFSU 2022"
      ]
    },
    {
      "id": "u5-q05",
      "type": "define",
      "marks": 2,
      "question": "Define Viral Inclusion Bodies and describe Negri Bodies in Rabies.",
      "topicId": "u5-t06",
      "answer": "<p><strong>Viral Inclusion Bodies</strong> are distinctive, microscopically visible, circumscribed intracellular structures that form within the cytoplasm or nucleus of virus-infected cells, representing active viral factories (aggregates of viral structural proteins, viral replication complexes, or degenerative cellular organelles).</p><p><strong>Negri Bodies:</strong> Pathognomonic intracytoplasmic inclusion bodies discovered by Adelchi Negri (1903), diagnostic of <strong>Rabies Virus (Lyssavirus, Rhabdoviridae)</strong> infection. They are sharply defined, round to oval, eosinophilic (magenta-pink), measuring <strong>$2\\text{--}10\\\\ \\\\mu\\\\text{m}$</strong> in diameter, containing characteristic internal, basophilic (dark blue) granules. Located predominantly within the pyramidal neurons of the <strong>Ammon's horn (Hippocampus)</strong> in carnivores and <strong>Purkinje cells of the Cerebellum</strong> in herbivores, visualized by Sellers' stain or Mann's stain.</p>",
      "keyPoints": [
        "Microscopically visible viral factories or protein aggregates inside cytoplasm or nucleus.",
        "Negri bodies: Pathognomonic intracytoplasmic, eosinophilic (magenta) inclusions with internal basophilic granules in pyramidal neurons of Ammon's horn and Purkinje cells."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2023",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q06",
      "type": "define",
      "marks": 2,
      "question": "Define Tissue Culture Infective Dose 50 (TCID50) and state the Reed-Muench formula.",
      "topicId": "u5-t08",
      "answer": "<p><strong>Tissue Culture Infective Dose 50 ($\\text{TCID}_{50}$)</strong> is the quantitative endpoint dilution of a viral suspension that produces cytopathic effects (CPE) or cell death in exactly <strong>50%</strong> of inoculated cell culture wells or replicates.</p><p><strong>The Reed and Muench Formula (Proportionate Distance - PD):</strong></p><p>$$\\text{Proportionate Distance (PD)} = \\\\frac{\\\\%\\\\text{ CPE at dilution immediately above } 50\\\\% - 50\\\\%}{\\\\%\\\\text{ CPE above } 50\\\\% - \\\\%\\\\text{ CPE immediately below } 50\\\\%}$$</p><p>The endpoint titer exponent is calculated as:</p><p>$$\\\\log_{10}\\\\text{ Endpoint Dilution} = \\\\log_{10}\\\\text{ Dilution above } 50\\\\% - (\\\\text{PD} \\\\times \\\\text{Dilution factor})$$</p><p>Enables accurate quantitation of viral infectivity without counting individual physical plaques.</p>",
      "keyPoints": [
        "Viral titer dilution that produces cytopathic effect (CPE) in exactly 50% of inoculated cell culture replicates.",
        "Calculated mathematically using the Reed and Muench proportionate distance (PD) interpolation formula."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "LUVAS 2021",
        "DUVASU 2022"
      ]
    },
    {
      "id": "u5-q07",
      "type": "define",
      "marks": 2,
      "question": "Define Plaque-Forming Unit (PFU) and describe the principle of a Plaque Assay.",
      "topicId": "u5-t08",
      "answer": "<p>A <strong>Plaque-Forming Unit (PFU)</strong> is a functional microbiological measure of viral infectivity, representing a single viable, infectious viral particle capable of lysing host cells and forming a discrete, macroscopic, circular clearing zone (<strong>plaque</strong>) in a cell culture monolayer.</p><p><strong>Principle of Plaque Assay (Dulbecco, 1952):</strong> Confluent cell monolayers are infected with serial tenfold dilutions of viral stock and overlaid with a semi-solid immobilizing matrix (e.g., <strong>$1\\\\%$ carboxymethylcellulose or low-melting agarose</strong>). The overlay restricts viral diffusion solely to contiguous adjacent cells. Each initiating virion lyses surrounding cells, forming a focal clear zone stained with 0.1% crystal violet or neutral red. Viral titer is calculated as:</p><p>$$\\\\text{Titer (PFU/mL)} = \\\\frac{\\\\text{Number of Plaques}}{\\\\text{Volume Inoculated (mL)} \\\\times \\\\text{Dilution Factor}}$$</p>",
      "keyPoints": [
        "PFU: Number of infectious virions forming discrete lytic plaques in a monolayer.",
        "Plaque assay: Semi-solid agar/cellulose overlay restricts viral spread to adjacent cells; visible clear zones stained by crystal violet."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u5-q08",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Antigenic Drift and Antigenic Shift in Influenza viruses.",
      "topicId": "u5-t15",
      "answer": "<p>Orthomyxoviruses (Influenza A viruses) undergo two fundamentally distinct forms of antigenic variation in their surface glycoproteins (<strong>Hemagglutinin - HA</strong> and <strong>Neuraminidase - NA</strong>):</p><ul><li><strong>Antigenic Drift:</strong> Minor, gradual, continuous antigenic variation resulting from <strong>spontaneous point mutations</strong> in the HA or NA genes during viral RNA-dependent RNA polymerase replication (which lacks proofreading). Produces minor antigenic differences allowing seasonal escape from herd immunity (requires periodic vaccine updating). Occurs in all Influenza types (A, B, C).</li><li><strong>Antigenic Shift:</strong> Major, sudden, discontinuous genetic overhaul resulting from <strong>genetic reassortment (recombination)</strong> of complete segmented genomic RNA molecules when two different influenza strains (e.g., avian and human) simultaneously co-infect a single intermediate animal host ('mixing vessel', classically the <strong>pig</strong>). Yields an entirely novel HA or NA subtype against which populations have zero pre-existing immunity, triggering catastrophic global pandemics. Restricted exclusively to <strong>Influenza A</strong>.</li></ul>",
      "keyPoints": [
        "Antigenic Drift: Minor, gradual point mutations in HA/NA during replication causing annual epidemics.",
        "Antigenic Shift: Major, sudden reassortment of RNA segments between co-infecting strains in swine 'mixing vessels', causing pandemics."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-q09",
      "type": "define",
      "marks": 2,
      "question": "Define Defective Interfering (DI) Particles and state their biological significance.",
      "topicId": "u5-t05",
      "answer": "<p><strong>Defective Interfering (DI) Particles</strong> are non-infectious, deletion-mutant viral particles generated spontaneously during high-multiplicity viral replication cycles that have lost critical structural or enzymatic gene segments from their genome but retain terminal replication signals.</p><p><strong>Biological Significance:</strong></p><ul><li>They are replication-defective: they cannot multiply independently, requiring a complete, homologous <strong>helper (wild-type) virus</strong> to supply the missing proteins.</li><li>They vigorously <strong>interfere with</strong> the replication of the standard wild-type virus by out-competing it for viral polymerase and structural capsid machinery.</li><li>Attenuates acute viral virulence, driving the establishment and maintenance of <strong>chronic, persistent, and latent viral infections</strong> in animal hosts.</li></ul>",
      "keyPoints": [
        "Spontaneous viral deletion mutants lacking essential genes that require helper virus to replicate.",
        "Interfere with wild-type virus replication by competing for polymerase; promote viral persistence and latency."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "LUVAS 2021",
        "WBUAFS 2021",
        "MAFSU 2020"
      ]
    },
    {
      "id": "u5-q10",
      "type": "define",
      "marks": 2,
      "question": "Define Prion and differentiate cellular PrPC from pathological PrPSc.",
      "topicId": "u5-t32",
      "answer": "<p>A <strong>Prion (Proteinaceous Infectious Particle)</strong>, defined by Stanley Prusiner (1982), is an unconventional, protein-only transmissible neurodegenerative infectious pathogen completely devoid of nucleic acid (neither DNA nor RNA).</p><p><strong>Conformational Duality:</strong></p><ul><li><strong>$\\text{PrP}^\\text{C}$ (Cellular Prion Protein):</strong> Normal, non-pathogenic host glycoprotein expressed constitutively on neuronal membranes. Rich in <strong>$\\alpha$-helices (42%)</strong>, with virtually no $\\beta$-sheets (3%). Soluble in non-denaturing detergents and rapidly degraded by <strong>Proteinase K</strong>.</li><li><strong>$\\text{PrP}^\\text{Sc}$ (Scrapie / Pathological Prion Protein):</strong> Identical in primary amino acid sequence to $\\text{PrP}^\\text{C}$, but misfolded into a pathogenic conformation rich in <strong>$\\beta$-pleated sheets (43%)</strong> with reduced $\\alpha$-helices (30%). It is insoluble in detergents, resistant to heat (withstands autoclaving at 121°C), UV radiation, formalin, and exhibits <strong>partial resistance to Proteinase K</strong> (yielding a 27–30 kDa resistant core fragment). It acts as a conformational template that catalyzes the conversion of normal $\\text{PrP}^\\text{C}$ into $\\text{PrP}^\\text{Sc}$, aggregating into neurotoxic amyloid plaques.</li></ul>",
      "keyPoints": [
        "Proteinaceous infectious particle devoid of nucleic acids causing spongiform encephalopathies.",
        "PrPC: Alpha-helix rich (42%), soluble, proteinase K sensitive. PrPSc: Beta-sheet rich (43%), insoluble, proteinase K resistant amyloid form."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021"
      ]
    },
    {
      "id": "u5-q11",
      "type": "define",
      "marks": 2,
      "question": "Enumerate the primary routes of Embryonated Chicken Egg Inoculation with specific viral examples.",
      "topicId": "u5-t08",
      "answer": "<p>Specific-Pathogen-Free (SPF) embryonated chicken eggs (typically 9 to 12 days old) provide sterile, vascularized biological chambers for viral cultivation:</p><ol><li><strong>Chorioallantoic Membrane (CAM) Route (10–12 day eggs):</strong> Inoculated via the dropped CAM window method. Hallmarked by development of focal proliferative, necrotic <strong>pock lesions</strong>. <em>Examples:</em> <strong>Fowlpox Virus</strong>, <strong>Infectious Laryngotracheitis Virus (ILTV)</strong>, Canarypox.</li><li><strong>Allantoic Cavity Route (9–11 day eggs):</strong> Inoculated into the allantoic sac; high yields of virus harvested in allantoic fluid. <em>Examples:</em> <strong>Newcastle Disease Virus (NDV)</strong>, <strong>Avian Influenza Virus (AIV)</strong>, Infectious Bronchitis Virus (IBV).</li><li><strong>Amniotic Cavity Route (7–9 day eggs):</strong> Inoculated directly around the developing embryo. <em>Examples:</em> Primary isolation of mammalian <strong>Influenza A viruses</strong>.</li><li><strong>Yolk Sac Route (5–7 day eggs):</strong> Inoculated into the nutrient yolk. <em>Examples:</em> <strong>Avian Encephalomyelitis Virus</strong>, <em>Chlamydia psittaci</em>.</li></ol>",
      "keyPoints": [
        "CAM route (10-12 days): Pock lesion formation for Fowlpox and ILTV.",
        "Allantoic route (9-11 days): High fluid yields for NDV and Avian Influenza.",
        "Amniotic route (7-9 days): Mammalian influenza primary isolation.",
        "Yolk sac route (5-7 days): Avian encephalomyelitis and Chlamydia."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "RAJUVAS 2021",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u5-q12",
      "type": "define",
      "marks": 2,
      "question": "Differentiate between Primary Cell Culture and Continuous Cell Line with veterinary examples.",
      "topicId": "u5-t08",
      "answer": "<p>Cell cultures are essential in vitro host systems for isolating, propagating, and titering animal viruses:</p><ul><li><strong>Primary Cell Culture:</strong> Cells freshly derived directly from enzymatic dissociation (trypsinization) of normal embryonic or neonatal animal tissues (e.g., <strong>Primary Chick Embryo Fibroblasts [CEF]</strong>, <strong>Primary Lamb Kidney [LK] cells</strong>). They retain normal diploid chromosome numbers ($2n$), contact inhibition, and normal in vivo morphology, but have a finite lifespan, senescing and dying after <strong>5 to 10 subcultures (Hayflick limit)</strong>. Ideal for primary viral isolation and vaccine production.</li><li><strong>Continuous (Established / Immortalized) Cell Line:</strong> Transformed or malignant cells capable of indefinite, infinite subculturing in vitro (e.g., <strong>Vero</strong> [African green monkey kidney], <strong>BHK-21</strong> [Baby hamster kidney], <strong>MDBK</strong> [Madin-Darby bovine kidney]). They are aneuploid/heteroploid, have lost contact inhibition, grow in multiple layers or suspension, and provide convenient, standardized substrates for diagnostic virology.</li></ul>",
      "keyPoints": [
        "Primary cell culture: Freshly dissociated diploid tissue cells (CEF, LK); finite lifespan (5-10 passages).",
        "Continuous cell line: Immortalized heteroploid cells with infinite lifespan (Vero, BHK-21, MDBK); convenient and standardized."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "GADVASU 2022",
        "WBUAFS 2021",
        "DUVASU 2020"
      ]
    },
    {
      "id": "u5-q13",
      "type": "diff",
      "marks": 5,
      "question": "Tabulate the comparative characteristics of major DNA Viruses versus RNA Viruses of veterinary importance.",
      "topicId": "u5-t02",
      "answer": "<p>Animal viruses are categorized based on genome nature, directing transcription strategy, replication site, and mutational kinetics:</p>",
      "keyPoints": [
        "Genome: DNA viruses are mostly double-stranded (except Parvo/Circoviridae); RNA viruses are mostly single-stranded (except Reo/Birnaviridae).",
        "Replication site: DNA viruses replicate in the host nucleus (except Poxviridae in cytoplasm); RNA viruses replicate in cytoplasm (except Retro and Orthomyxoviridae in nucleus).",
        "Replication fidelity: DNA polymerases have 3' proofreading (low mutation rate, stable antigens); RNA-dependent RNA polymerases lack proofreading (high mutation rate, antigenic drift).",
        "Oncogenesis: Several DNA viruses (Herpes, Papilloma) and Retroviridae induce tumors by integrating into the host genome."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: DNA Viruses vs RNA Viruses in Veterinary Medicine",
        "headers": [
          "Feature / Dimension",
          "DNA Viruses of Veterinary Importance",
          "RNA Viruses of Veterinary Importance"
        ],
        "rows": [
          [
            "Genome Architecture",
            "Mostly <strong>Double-Stranded (dsDNA)</strong>; Single-stranded only in <em>Parvoviridae</em> and <em>Circoviridae</em>",
            "Mostly <strong>Single-Stranded (ssRNA)</strong>; Double-stranded only in <em>Reoviridae</em> and <em>Birnaviridae</em>"
          ],
          [
            "Genome Polarity / Structure",
            "Linear (Herpes, Pox, Parvo) or Circular (Papilloma, Circovirus); Non-segmented",
            "Positive-sense ($+$), Negative-sense ($-$), or Segmented (Reo, Orthomyxo, Bunya)"
          ],
          [
            "Primary Intracellular Site of Replication",
            "<strong>Host Cell Nucleus</strong> (utilizes host transcription machinery)<br><em>Notable Exception:</em> <strong>Poxviridae</strong> (replicates entirely in cytoplasm using its own viral RNA polymerase)",
            "<strong>Host Cell Cytoplasm</strong> (carries/encodes viral RdRp)<br><em>Notable Exceptions:</em> <strong>Retroviridae</strong> and <strong>Orthomyxoviridae</strong> (replicate in the nucleus)"
          ],
          [
            "Replication Polymerase & Mutation Rate",
            "Host or viral <strong>DNA Polymerase</strong> possessing $3'\to 5'$ proofreading; extremely low mutation rate, genetically stable serotypes",
            "Viral <strong>RNA-Dependent RNA Polymerase (RdRp)</strong> lacking proofreading; high mutation rate ($10^{-4}$), quasi-species, antigenic drift/shift"
          ],
          [
            "Temporal Gene Regulation",
            "Highly regulated sequential cascade: <em>Immediate-Early (IE)</em> $\to$ <em>Early (E)</em> $\to$ <em>Late (L)</em> structural proteins",
            "Simultaneous translation and processing of polyproteins (Picornaviridae) or subgenomic mRNAs"
          ],
          [
            "Latency & Genomic Integration",
            "Commonly establish lifelong latency (e.g., <em>Herpesviridae</em> in sensory ganglia) or episomal persistence",
            "Generally acute, self-limiting clearance; except <em>Retroviridae</em> (proviral integration) and pestiviruses"
          ],
          [
            "Major Veterinary Families",
            "<em>Poxviridae, Herpesviridae, Adenoviridae, Papillomaviridae, Parvoviridae, Asfarviridae</em>",
            "<em>Picornaviridae, Rhabdoviridae, Paramyxoviridae, Orthomyxoviridae, Coronaviridae, Flaviviridae, Reoviridae, Retroviridae</em>"
          ]
        ]
      },
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2021",
        "RAJUVAS 2020"
      ]
    },
    {
      "id": "u5-q14",
      "type": "short",
      "marks": 5,
      "question": "Describe the sequential steps of the Viral Replication Cycle: Attachment, Penetration, Uncoating, Biosynthesis, Assembly, Maturation, and Release.",
      "topicId": "u5-t04",
      "answer": "<p>Viral replication is obligatorily intracellular and proceeds through seven coordinated biochemical stages:</p><ol><li><strong>1. Attachment (Adsorption):</strong> Highly specific, electrostatic and stereo-chemical collision where viral surface attachment proteins (VAPs / spikes) bind specific cell-surface receptors:<ul><li>Rabies G protein binds <em>Nicotinic acetylcholine receptors (nAChR)</em> and NCAM.</li><li>Influenza HA binds <em>sialic acid</em> residues on host glycoproteins.</li><li>FMDV VP1 binds <em>integrin $\\alpha_v\\beta_6$</em> receptors.</li></ul></li><li><strong>2. Penetration (Entry):</strong> Transfer of the virion into the host cell interior:<ul><li><em>Membrane Fusion:</em> Enveloped viruses (e.g., Paramyxoviruses, Retroviruses) fuse their viral lipid envelope directly with the host plasma membrane via fusion (F) proteins.</li><li><em>Receptor-Mediated Endocytosis (Viropexis):</em> Enveloped and non-enveloped virions engulfed into clathrin-coated pits/endosomes.</li></ul></li><li><strong>3. Uncoating:</strong> Disassembly of the capsid shell by host lysosomal enzymes or endosomal acidification (low pH triggering conformational shifts), releasing the viral naked genome into the cytosol or nucleus.</li><li><strong>4. Biosynthesis (Macromolecular Synthesis):</strong> Two coordinated arms:<ul><li><em>Transcription & Translation:</em> Synthesis of viral $(+)\\text{mRNA}$, followed by translation into early non-structural proteins (enzymes, polymerases) and late structural capsid proteins.</li><li><em>Genome Replication:</em> Copying of parental genomes into daughter viral genomes.</li></ul></li><li><strong>5. Assembly:</strong> Packaging of newly replicated genomic nucleic acids into preformed procapsid shells.</li><li><strong>6. Maturation:</strong> Proteolytic cleavage of structural precursor proteins converting the non-infectious procapsid into an infectious virion.</li><li><strong>7. Release:</strong><ul><li><em>Lysis:</em> Non-enveloped viruses (e.g., Parvovirus, FMDV) burst and destroy the host cell.</li><li><em>Budding:</em> Enveloped viruses (e.g., Rabies, Influenza) acquire their host-derived outer lipid envelope by budding through the plasma membrane, trans-Golgi, or ER, preserving host cell viability temporarily.</li></ul></li></ol>",
      "keyPoints": [
        "Seven steps: Attachment (receptor binding), Penetration (fusion/endocytosis), Uncoating (genome release), Biosynthesis (transcription/replication), Assembly, Maturation, and Release (lysis vs budding).",
        "Receptor specificity examples: Rabies G protein to nAChR; FMDV VP1 to alpha-v-beta-6 integrin.",
        "Release mechanism: Non-enveloped burst via lysis; enveloped viruses bud through cellular membranes."
      ],
      "diagram": "Attachment -> Penetration -> Uncoating -> Biosynthesis (mRNA/Genomes) -> Assembly -> Budding/Lysis",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "LUVAS 2022"
      ]
    },
    {
      "id": "u5-q15",
      "type": "short",
      "marks": 5,
      "question": "Describe Infectious Bursal Disease Virus (IBDV / Gumboro Disease): Viral characteristics, target cells, pathogenesis of immunosuppression, and gross pathology in poultry.",
      "topicId": "u5-t09",
      "answer": "<p><strong>Infectious Bursal Disease (Gumboro Disease)</strong> is an acute, highly contagious immunosuppressive viral disease of young chickens (3 to 6 weeks old) caused by <strong>Infectious Bursal Disease Virus (IBDV)</strong>, belonging to the family <em>Birnaviridae</em> (non-enveloped, bi-segmented double-stranded RNA genome: Segments A and B).</p><p><strong>Target Cells & Pathogenesis:</strong></p><ol><li><strong>Fecal-Oral Transmission:</strong> Ingestion of feed and water contaminated with viral feces. Due to its non-enveloped capsid, IBDV is exceptionally stable in poultry houses, resisting heat (56°C/5 hr) and disinfectants.</li><li><strong>B-Cell Tropism:</strong> The virus enters gut mucosa and targets actively dividing <strong>immature $\\text{IgM}^+$ B lymphocytes</strong> inside the lymphoid follicles of the <strong>Bursa of Fabricius</strong>.</li><li><strong>Bursal Necrosis & Immunosuppression:</strong> Viral replication induces massive apoptosis and cytolytic destruction of bursal follicular B cells. Loss of B cells leads to severe, irreversible humoral <strong>immunosuppression</strong> in chicks under 3 weeks of age. Affected flocks exhibit complete failure to respond to Newcastle Disease (NDV) and Marek's disease vaccines, experiencing high mortality from secondary opportunistic infections (<em>E. coli</em> colisepticemia, Inclusion Body Hepatitis).</li></ol><p><strong>Pathognomonic Lesions:</strong></p><ul><li><strong>Bursal Kinetics:</strong> By Day 3–4 post-infection, the Bursa of Fabricius is severely enlarged, swollen, hyperemic, and edematous, covered in a yellowish gelatinous transudate. By Day 5, it turns hemorrhagic with necrotic striations. By Day 8, rapid, permanent <strong>atrophy</strong> occurs, shrinking to one-third or one-fourth normal size.</li><li><strong>Muscular Hemorrhages:</strong> Severe petechial and ecchymotic hemorrhages scattered across the thigh, breast, and leg pectoral muscles (due to immune-mediated thrombocytopenia and clotting derangements).</li><li><strong>Kidney Swelling:</strong> Dehydration and uric acid crystal deposition resulting in swollen, pale kidneys with distended urate-filled tubules.</li></ul>",
      "keyPoints": [
        "Etiology: Birnaviridae, bi-segmented dsRNA, non-enveloped, exceptionally resistant.",
        "Pathogenesis: Lytic destruction of immature IgM+ B cells in the Bursa of Fabricius causing severe humoral immunosuppression.",
        "Gross pathology: Initial bursal swelling and yellow gelatinous edema followed by rapid bursal atrophy; thigh/breast muscle hemorrhages."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q16",
      "type": "short",
      "marks": 5,
      "question": "Describe Bluetongue Virus (BTV): Orbivirus taxonomy, Culicoides vector transmission, clinical signs in sheep, and pathognomonic lesions.",
      "topicId": "u5-t10",
      "answer": "<p><strong>Bluetongue (Catarrhal Fever of Sheep)</strong> is an infectious, non-contagious, vector-borne viral disease primarily of sheep, caused by <strong>Bluetongue Virus (BTV)</strong>, the prototype species of the genus <em>Orbivirus</em> (family <em>Reoviridae</em>).</p><p><strong>Viral Characteristics:</strong> Non-enveloped, icosahedral virion with a unique triple-layered protein capsid enclosing a <strong>10-segmented double-stranded RNA (dsRNA)</strong> genome. Demonstrates 29 distinct serotypes worldwide based on the outer capsid neutralization protein <strong>VP2</strong>.</p><p><strong>Vector Transmission:</strong> Transmitted exclusively by biting midges of the genus <strong>Culicoides</strong> (especially <em>C. oxystoma</em> in India, <em>C. imicola</em>, <em>C. sonorensis</em>). Midges ingest virus while feeding on viraemic hosts. After extrinsic replication in midge salivary glands (8–14 days), the virus is transmitted during subsequent blood meals. Cattle act as silent, chronic viraemic reservoir hosts (viraemia lasts up to 60 days bound to erythrocytes without overt clinical disease).</p><p><strong>Pathogenesis & Vascular Endotheliotropism:</strong> BTV has an exquisite affinity for <strong>vascular endothelial cells</strong> and pericytes. Viral replication directly lyses endothelial cells, activating platelet aggregation and microvascular thrombosis. The resulting widespread capillary fragility causes diffuse edema, microvascular congestion, hemorrhage, tissue hypoxia, and ischemic necrosis.</p><p><strong>Clinical Signs & Pathognomonic Lesions in Sheep:</strong></p><ul><li>Biphasic fever (41–42°C), severe depression, and rapid weight loss.</li><li>Excessive salivation, hyperemic oral mucosa, progressing to extensive erosions and ulcers on dental pad, lips, and tongue.</li><li>Severe facial, lip, and submandibular edema extending down the neck, giving a 'bottle jaw' appearance. Severe tongue cyanosis occurs in a minority of cases, giving the pathognomonic <strong>'Blue Tongue'</strong> moniker.</li><li><strong>Coronitis:</strong> Marked hyperemic band (coronary band congestion) at the hoof-skin junction; hoof shedding and severe lameness (walking on knees).</li><li><strong>Pathognomonic Necropsy Lesion:</strong> <strong>Hemorrhage at the base of the pulmonary artery</strong> (conus arteriosus), considered pathognomonic of BTV on post-mortem examination.</li></ul>",
      "keyPoints": [
        "Etiology: Orbivirus (Reoviridae), 10-segmented dsRNA, triple-layered capsid with 29 VP2 serotypes.",
        "Transmission: Biting midges (Culicoides); cattle act as prolonged viraemic reservoir hosts.",
        "Pathogenesis: Vascular endothelial tropism causing microvascular thrombosis, edema, and ischemic necrosis.",
        "Lesions: Facial edema, tongue cyanosis, coronitis with lameness, and pathognomonic hemorrhage at the base of the pulmonary artery."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2022",
        "KVAFSU 2021"
      ]
    },
    {
      "id": "u5-q17",
      "type": "short",
      "marks": 5,
      "question": "Describe Peste des Petits Ruminants (PPR / Goat Plague) with respect to: Etiology, clinical pathology, post-mortem hallmarks, and eradication strategy.",
      "topicId": "u5-t12",
      "answer": "<p><strong>Peste des Petits Ruminants (PPR / Ovine Rinderpest / Goat Plague)</strong> is an acute, highly contagious, statutory transboundary viral disease of sheep and goats (goats significantly more severely affected) characterized by high morbidity ($80\\text{--}100\\%$) and mortality ($50\\text{--}90\\%$).</p><p><strong>Etiology:</strong> <strong>PPR Virus (PPRV)</strong>, belonging to the genus <em>Morbillivirus</em>, family <em>Paramyxoviridae</em>. Enveloped, pleomorphic virion enclosing a non-segmented, negative-sense single-stranded RNA ($(-)\\text{ssRNA}$) genome. Possesses surface Fusion (F) and Hemagglutinin (H) glycoproteins.</p><p><strong>Pathogenesis:</strong> Inhalation of viral aerosols from close contact with infected nasal/ocular secretions. Virus enters pharyngeal mucosa and replicates in regional retro-pharyngeal lymph nodes. It exhibits dual <strong>lymphotropism and epitheliotropism</strong>: destroys lymphoid tissue (severe leukopenia and immunosuppression) and infects epithelial lining of the entire digestive and respiratory tracts.</p><p><strong>Clinical Manifestations:</strong> High fever ($41^\\circ\\text{C}$), bilateral serous-to-mucopurulent ocular and nasal discharge with crusting of nostrils and eyelid matting. Acute necrotizing stomatitis: necrotic erosions covered in white cheesy exudate ('curd-like' pseudo-membranes) inside the mouth, producing a foul, fetid halitosis. Severe, watery, profuse, blood-stained diarrhea leading to rapid emaciation and dehydration. Terminal bronchopneumonia with dyspnea and coughing.</p><p><strong>Post-Mortem Hallmarks:</strong></p><ul><li>Necrotic, erosive stomatitis throughout lips, gums, and dental pad.</li><li>Pathognomonic <strong>'Zebra Striping' (Zebra mark lesions)</strong>: Linear, dark-red to black hemorrhagic streaks along the longitudinal mucosal folds of the posterior ileocecal valve, cecum, colon, and rectum.</li><li>Consolidated, dark-red catarrhal bronchopneumonia in anterior lung lobes.</li></ul><p><strong>Control and Eradication:</strong> The <strong>IVRI Sungri 96 live attenuated homologous PPR vaccine</strong> confers lifelong protective immunity in sheep and goats with a single subcutaneous dose ($1\\text{ mL}$). India and the WOAH/FAO have targeted global PPR eradication by 2030 through mass vaccination and sero-monitoring.</p>",
      "keyPoints": [
        "Etiology: Morbillivirus (Paramyxoviridae), enveloped (-)ssRNA; goats more susceptible than sheep.",
        "Clinical picture: High fever, mucopurulent oculonasal discharge, erosive stomatitis, fetid diarrhea, and dyspnea.",
        "Necropsy hallmark: Pathognomonic 'Zebra striping' longitudinal hemorrhages in colon/rectum.",
        "Vaccine: Sungri 96 live attenuated vaccine confers lifelong immunity; targeted for global eradication by 2030."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "RAJUVAS 2022",
        "LUVAS 2020"
      ]
    },
    {
      "id": "u5-q18",
      "type": "short",
      "marks": 5,
      "question": "Describe Canine Distemper Virus (CDV): Pantropic pathogenesis, clinical phases, hyperkeratosis ('Hard Pad Disease'), and central nervous system signs.",
      "topicId": "u5-t12",
      "answer": "<p><strong>Canine Distemper</strong> is an acute to subacute, highly contagious, multi-systemic viral disease of domestic canines, wild canids, and mustelids, caused by <strong>Canine Distemper Virus (CDV)</strong>, genus <em>Morbillivirus</em>, family <em>Paramyxoviridae</em>.</p><p><strong>Pantropic Pathogenesis:</strong></p><ol><li><strong>Inhalation & Lymphoid Tropism:</strong> Aerosol droplet inhalation. Virus binds signaling lymphocytic activation molecule (<strong>SLAM / CD150</strong>) on alveolar macrophages and dendritic cells, trafficking to bronchial lymph nodes. Within 2–4 days, viral replication causes massive lymphoid depletion (pan-leukopenia) and profound immunosuppression.</li><li><strong>Epithelial Tropism:</strong> Hematogenous viremia disseminates virus via cell-adhesion molecule <strong>Nectin-4</strong> to all epithelial tissues: gastrointestinal, respiratory, integumentary, and urinary systems.</li><li><strong>Neurotropism:</strong> In dogs with inadequate humoral immunity, virus breaches the blood-brain barrier via infected leukocytes, directly infecting astrocytes and oligodendrocytes.</li></ol><p><strong>Clinical Hallmarks:</strong></p><ul><li><strong>Biphasic Fever:</strong> Initial spike (Day 3–6) during lymphoid viremia, subsiding, followed by a second prolonged fever accompanying mucosal and epithelial invasion.</li><li><strong>Catarrhal Signs:</strong> Bilateral mucopurulent oculonasal discharge, keratoconjunctivitis sicca, coughing, dyspnea, vomiting, and foul-smelling diarrhea.</li><li><strong>Cutaneous Signs ('Hard Pad Disease'):</strong> Severe, painful <strong>hyperkeratosis of digital footpads and nasal planum</strong>, which become dry, fissured, calloused, and stone-hard. Enamel hypoplasia occurs in puppies due to ameloblast necrosis in developing teeth.</li><li><strong>Neurological Signs:</strong> Onset 2 to 3 weeks later: characteristic rhythmic localized muscle twitches (<strong>myoclonus / 'chewing gum fits'</strong>), circling, ataxia, paresis, and epileptiform grand mal seizures ending in death.</li></ul>",
      "keyPoints": [
        "Etiology: Morbillivirus (Paramyxoviridae), pantropic targeting SLAM (lymphoid) and Nectin-4 (epithelial/neural).",
        "Clinical signs: Biphasic fever, mucopurulent discharge, catarrhal enteritis/pneumonia.",
        "Pathognomonic features: 'Hard pad disease' (digital hyperkeratosis), dental enamel hypoplasia, and rhythmic myoclonus ('chewing gum fits')."
      ],
      "diagram": "",
      "table": null,
      "pyq": [
        "TANUVAS 2023",
        "IVRI 2022",
        "GADVASU 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q19",
      "type": "diff",
      "marks": 5,
      "question": "Differentiate between Classical Swine Fever (CSF) and African Swine Fever (ASF) with a comprehensive diagnostic table.",
      "topicId": "u5-t21",
      "answer": "<p>Classical Swine Fever (Hog Cholera) and African Swine Fever are two devastating, clinically indistinguishable, highly contagious hemorrhagic viral epizootics of domestic pigs and wild boars:</p>",
      "keyPoints": [
        "Etiology: CSF is an enveloped (+)ssRNA Pestivirus (Flaviviridae); ASF is a massive enveloped dsDNA Asfavirus (Asfarviridae) transmitted by soft ticks.",
        "Lesions: Both cause turkey-egg petechiated kidneys, infarcted spleen, and button ulcers, but ASF produces hyper-severe gross splenomegaly.",
        "Hemadsorption: ASFV shows positive hemadsorption (HAD) rosette formation around swine macrophages; CSFV is HAD negative.",
        "Vaccination: Highly effective live attenuated vaccines exist for CSF (Lapinized / C-strain); no commercial universal vaccine exists for ASF."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Classical Swine Fever (CSF) vs African Swine Fever (ASF)",
        "headers": [
          "Parameter / Dimension",
          "Classical Swine Fever (Hog Cholera)",
          "African Swine Fever (ASF)"
        ],
        "rows": [
          [
            "Etiological Agent & Family",
            "<strong>Classical Swine Fever Virus (CSFV)</strong><br>Genus <em>Pestivirus</em>, Family <strong>Flaviviridae</strong>",
            "<strong>African Swine Fever Virus (ASFV)</strong><br>Genus <em>Asfivirus</em>, Family <strong>Asfarviridae</strong>"
          ],
          [
            "Viral Genome Architecture",
            "Positive-sense single-stranded RNA (<strong>$(+)\text{ssRNA}$</strong>), non-segmented, $12.3\text{ kb}$",
            "Double-stranded DNA (<strong>dsDNA</strong>), large linear genome ($170\text{--}190\text{ kb}$) encoding over 150 proteins"
          ],
          [
            "Arthropod Vector Transmission",
            "<strong>None</strong>; direct contact, swill feeding, and fomites",
            "<strong>Biological Vector:</strong> Soft ticks of the genus <strong>Ornithodoros</strong> (e.g., <em>O. moubata</em>)"
          ],
          [
            "Splenic Gross Pathology",
            "Marginal triangular infarcts; spleen is usually normal in size or only slightly enlarged",
            "<strong>Enormous, dark-purple to black, friable, liquefied Splenomegaly</strong> (enlarged up to 3–6 times normal size)"
          ],
          [
            "Kidney & Bladder Lesions",
            "Petechial hemorrhages producing pathognomonic <strong>'Turkey-Egg Kidney'</strong>; petechiae on bladder mucosa",
            "'Turkey-egg' petechial hemorrhages with profound perirenal cortical hemorrhage and edema"
          ],
          [
            "Intestinal Hallmarks",
            "Pathognomonic concentric <strong>'Button Ulcers'</strong> at ileocecal valve and colon",
            "Severe diffuse hemorrhagic gastroenteritis with button-like ulcers"
          ],
          [
            "In Vitro Hemadsorption (HAD)",
            "<strong>Completely Negative</strong>",
            "<strong>Positive (HAD Hallmark):</strong> Red blood cells form characteristic mulberry rosettes around swine macrophages"
          ],
          [
            "Immunological Protection & Vaccine",
            "<strong>Highly Effective Vaccine Available:</strong> Live attenuated <em>Lapinized vaccine</em> or Cell-culture adapted C-strain confers lifelong immunity",
            "<strong>No Commercial Universal Vaccine:</strong> Non-neutralizing antibodies; strict biosecurity, stamping-out, and culling mandatory"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2021",
        "WBUAFS 2022",
        "MAFSU 2021"
      ]
    },
    {
      "id": "u5-q20",
      "type": "diff",
      "marks": 5,
      "question": "Compare Scrapie in sheep and Bovine Spongiform Encephalopathy (BSE) in cattle with a structured comparative table.",
      "topicId": "u5-t32",
      "answer": "<p>Transmissible Spongiform Encephalopathies (TSEs) are fatal neurodegenerative diseases caused by prions ($\\text{PrP}^{\\text{Sc}}$) characterized by progressive vacuolation of cerebral gray matter without inflammatory cell infiltration:</p>",
      "keyPoints": [
        "Etiology: Prions (PrP-Sc) causing spongiform vacuolation of brainstem and neuronal perikarya.",
        "Transmission: Scrapie is horizontally and vertically transmitted via fetal fluids; BSE is acquired via feed (Meat and Bone Meal - MBM).",
        "Zoonotic risk: Scrapie has zero human zoonotic potential; BSE causes fatal variant Creutzfeldt-Jakob Disease (vCJD) in humans.",
        "Clinical contrast: Scrapie produces intense pruritus and wool scraping; BSE causes apprehension, hyperesthesia, and kicking."
      ],
      "diagram": "",
      "table": {
        "title": "Comprehensive Comparison: Scrapie (Sheep) vs Bovine Spongiform Encephalopathy (Cattle)",
        "headers": [
          "Feature / Dimension",
          "Scrapie",
          "Bovine Spongiform Encephalopathy (BSE / Mad Cow)"
        ],
        "rows": [
          [
            "Primary Animal Host",
            "Sheep and Goats",
            "Adult Cattle (predominantly dairy cows 4–6 years old)"
          ],
          [
            "Mode of Transmission",
            "<strong>Horizontal and Vertical:</strong> Ingestion of infected placenta, fetal fluids, pasture contamination, and perinatal transmission",
            "<strong>Food-Borne Only:</strong> Ingestion of contaminated ruminant-derived <strong>Meat and Bone Meal (MBM)</strong>; no horizontal contact spread"
          ],
          [
            "Genetic Susceptibility",
            "Strongly governed by <strong>PrP gene polymorphisms</strong> at codons 136 (A/V), 154 (R/H), and 171 (Q/R/H). Allele <em>ARR/ARR</em> is resistant",
            "No major breed or genetic susceptibility polymorphism identified"
          ],
          [
            "Dominant Clinical Hallmark",
            "<strong>Intense, intractable pruritus:</strong> Sheep rub against fence posts, scraping off wool (nibble reflex on pinching lumbar skin); ataxia, tremors",
            "<strong>Hyperesthesia & Behavioral Alterations:</strong> Nervousness, apprehension, kicking during milking, teeth grinding, abnormal posture, ataxia, hindlimb weakness"
          ],
          [
            "Human Zoonotic Risk",
            "<strong>Completely Non-Zoonotic:</strong> Zero evidence of transmission to humans despite centuries of sheep meat consumption",
            "<strong>Highly Zoonotic:</strong> Consumption of BSE-contaminated beef products causes fatal <strong>variant Creutzfeldt-Jakob Disease (vCJD)</strong> in humans"
          ],
          [
            "Target Neuropathological Site",
            "Spongiform vacuolation and neuronal loss in the <strong>obex of the medulla oblongata</strong>",
            "Spongiform change, neuropil vacuolation, and astrocytosis in the <strong>solitary and spinal tract nuclei of the obex</strong>"
          ],
          [
            "Diagnostic Confirmation",
            "Prionics Western blot, ELISA, and immunohistochemistry (IHC) on brainstem (obex) tissue",
            "Rapid ELISA, Western blot (three distinct PrP-Sc bands), and IHC of obex tissue"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2022",
        "GADVASU 2021",
        "KVAFSU 2020"
      ]
    },
    {
      "id": "u5-q21",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Foot-and-Mouth Disease Virus (FMDV) under the following headings: (a) Viral Architecture & Structural Proteins, (b) Antigenic Serotypes & Topotypes, (c) Pathogenesis & Lesion Genesis in Cloven-Hoofed Animals, (d) Laboratory Diagnosis, and (e) National Control Programme & Vaccination.",
      "topicId": "u5-t18",
      "answer": "<h3>(a) Viral Architecture & Structural Proteins</h3><p><strong>Foot-and-Mouth Disease Virus (FMDV)</strong> is the prototype species of the genus <em>Aphthovirus</em>, belonging to the family <em>Picornaviridae</em>. It is an extremely small ($25\\text{--}30\\text{ nm}$), non-enveloped, icosahedral virus enclosing a single-stranded positive-sense RNA genome ($( + )\\text{ssRNA}$, $8.4\\text{ kb}$) with a $5'\\text{-VPg}$ protein and $3'\\text{-poly(A)}$ tail.</p><p><strong>Capsid Organization:</strong> The icosahedral capsid ($T=1$, pseudo $T=3$) is assembled from <strong>60 copies of each of four structural proteins: VP1, VP2, VP3, and VP4</strong>:</p><ul><li><strong>VP1 (1D):</strong> Exposed prominently on the virion surface; contains the critical, hypervariable <strong>G-H loop</strong> (amino acids 135–160) harboring the conserved <strong>Arginine-Glycine-Aspartic acid (RGD) motif</strong>. The RGD motif binds host cell-surface <strong>$\\alpha_v\\beta_6$ integrin receptors</strong>, mediating viral attachment. VP1 carries the principal neutralizing epitopes.</li><li><strong>VP2 (1B) & VP3 (1C):</strong> Located on the outer surface, contributing to structural stability and antigenicity.</li><li><strong>VP4 (1A):</strong> Located internally on the inner capsid face, myristoylated at its N-terminus; interacts directly with the genomic RNA core and mediates membrane pore formation during uncoating.</li></ul><h3>(b) Antigenic Serotypes and Global Topotypes</h3><p>FMDV demonstrates phenomenal antigenic diversity, classified into <strong>seven immunologically distinct serotypes</strong>: <strong>O, A, C, Asia-1, SAT 1, SAT 2, and SAT 3</strong> (South African Territories):</p><ul><li><em>Serotype Distribution in India:</em> Serotypes <strong>O, A, and Asia-1</strong> are prevalent. <strong>Serotype O</strong> is overwhelmingly dominant, accounting for $>85\\text{--}90\\%$ of all field outbreaks (particularly the Middle East-South Asia topotype, lineage <em>Ind2001</em>). Serotype C has not been isolated globally since 2004.</li><li><strong>Zero Cross-Immunity:</strong> Infection or vaccination with one serotype confers <strong>complete zero cross-protection</strong> against any of the other six serotypes, and even within a single serotype, intratypic sublineages/topotypes can escape neutralization, mandating continuous antigenic matching (r1-value determination by two-dimensional neutralization).</li></ul><h3>(c) Pathogenesis & Lesion Genesis</h3><ol><li><strong>Inhalation & Primary Replication:</strong> Inhalation of viral micro-droplets (cattle are hyper-susceptible, requiring $< 10$ infectious virions). Primary viral replication occurs in the pharyngeal and soft palate mucosa and regional retro-pharyngeal lymph nodes.</li><li><strong>Viremia & Secondary Epithelial Metastasis:</strong> Within 24–48 hours, high-titer viremia disseminates the virus throughout systemic circulation. FMDV displays absolute tropism for <strong>cornified stratified squamous epithelium</strong> subjected to mechanical friction or pressure (tongue, dental pad, gums, interdigital cleft, coronary band, and teat skin).</li><li><strong>Vesicle (Aphtha) Formation:</strong> Viral replication in the stratum spinosum induces ballooning degeneration, acantholysis, and intercellular edema. Adjacent cells lyse, coalescing into macroscopic, fluid-filled <strong>vesicles (aphthae)</strong>. Due to mechanical friction (chewing, walking), vesicles rupture within 24 hours, leaving raw, excruciatingly painful, red erosions and ulcers with ragged epithelial borders.</li><li><strong>Myocardial Necrosis in Young Animals:</strong> In neonatal calves, lambs, and piglets under 6 months of age, FMDV causes acute, fatal <strong>malignant myocarditis</strong> without developing oral or foot vesicles. Necropsy demonstrates greyish-yellow necrotic streaks and patches in the left ventricular myocardium, termed <strong>'Tiger Heart' (Cor Tigris)</strong>, leading to acute heart failure.</li></ol><h3>(d) Comprehensive Laboratory Diagnosis Flowchart</h3><ol><li><strong>Diagnostic Specimen Collection:</strong> Fresh, unruptured or freshly ruptured epithelial flaps (at least $1\\text{ g}$) from tongue or interdigital vesicles, collected in <strong>50% phosphate-buffered glycerin (pH 7.2–7.6)</strong> on ice packs. (FMDV is acid-labile, irreversibly inactivated below pH 6.8).</li><li><strong>Antigen Detection & Typing (Gold Standard Serotyping):</strong> <strong>Multiplex Antigen-Detection Sandwich ELISA (Sandwich ELISA):</strong> Microplate wells coated with rabbit anti-FMDV serotype-specific capture antibodies (O, A, Asia-1), incubated with tissue homogenate, probed with guinea pig detection antibodies and anti-guinea pig IgG-HRP conjugate, identifying the exact serotype within 4 hours.</li><li><strong>Molecular Detection & Sequencing:</strong> Real-time RT-PCR targeting the conserved $5'\\text{-UTR}$ or 3D polymerase gene for pan-FMDV detection, followed by conventional RT-PCR and Sanger sequencing of the <strong>VP1 coding region</strong> for molecular topotype lineage tracing.</li><li><strong>Differentiation of Infected from Vaccinated Animals (DIVA):</strong> Detection of antibodies against <strong>Non-Structural Proteins (NSPs: 3ABC, 2C, 3AB)</strong> using competitive ELISA. Since commercial killed vaccines are purified to remove NSPs, only animals with active viral replication (infected carriers) develop anti-3ABC antibodies.</li></ol><h3>(e) National Control Programme and Vaccination</h3><ul><li><strong>National Animal Disease Control Programme (NADCP):</strong> Flagship Government of India program aiming for 100% vaccination coverage of all cattle, buffaloes, sheep, goats, and pigs, targeting complete FMD control by 2025 and eradication with WOAH-certified freedom by 2030.</li><li><strong>Vaccine Composition:</strong> Inactivated, purified, <strong>trivalent (O, A, Asia-1)</strong> oil-adjuvant or aluminum hydroxide-gel vaccine. The virus is grown in BHK-21 suspension culture, inactivated with <strong>Binary Ethyleneimine (BEI)</strong>, and formulated with Montanide ISA 206 mineral oil adjuvant.</li><li><strong>Vaccination Schedule:</strong> Primary vaccination at 4 months of age, booster dose after 3–4 weeks, followed by <strong>semi-annual revaccination (every 6 months)</strong> nationwide.</li></ul>",
      "keyPoints": [
        "Virology: Aphthovirus (Picornaviridae), (+)ssRNA, non-enveloped, VP1 has RGD motif binding alpha-v-beta-6 integrin.",
        "Serotypes: 7 serotypes (O, A, C, Asia-1, SAT 1-3) with zero cross-immunity; Serotype O dominates in India (>85%).",
        "Pathogenesis: Ballooning degeneration of stratum spinosum -> vesicles (aphthae) on tongue, feet, teats; 'Tiger Heart' myocarditis in calves.",
        "Laboratory diagnosis: Sandwich ELISA for serotyping, 5'-UTR RT-PCR, VP1 sequencing, and anti-3ABC NSP ELISA for DIVA.",
        "National Programme (NADCP): Inactivated trivalent (O, A, Asia-1) BEI vaccine administered biannually (every 6 months)."
      ],
      "diagram": "Inhaled Droplet -> Pharyngeal Replication -> Viremia -> Vesicles (Tongue/Feet) + Tiger Heart (Calves)",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q22",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Rabies Virus (Rhabdoviridae) covering: (a) Bullet-Shaped Architecture & Structural Proteins, (b) Centripetal & Centrifugal Neuro-Pathogenesis, (c) Clinical Syndromes (Furious vs Dumb Rabies), (d) Laboratory Diagnosis (Sellers' Stain vs dFAT), and (e) Post-Exposure Prophylaxis (PEP) Protocol in Domestic Animals.",
      "topicId": "u5-t13",
      "answer": "<h3>(a) Bullet-Shaped Architecture & Structural Proteins</h3><p><strong>Rabies Virus</strong> is the prototype neurotropic pathogen of the genus <em>Lyssavirus</em>, family <em>Rhabdoviridae</em>. It is an enveloped, cylindrical, <strong>bullet-shaped virion</strong> ($180\\\\text{ nm} \\\\times 75\\\\text{ nm}$) with one flat and one rounded hemispherical end, enclosing an unsegmented negative-sense single-stranded RNA ($( - )\\text{ssRNA}$, $12\\text{ kb}$) genome.</p><p><strong>Structural Proteins (5 Proteins):</strong></p><ol><li><strong>Glycoprotein (G, 65 kDa):</strong> Forms 400 trimeric surface spikes projecting from the lipid envelope. Mediates viral attachment to host cell receptors, induces and binds virus-neutralizing antibodies (VNA), and is the sole target of protective rabies vaccines.</li><li><strong>Matrix Protein (M, 25 kDa):</strong> Internal peripheral membrane protein that bridges the envelope with the nucleocapsid core; regulates viral budding and transcription-to-replication switching.</li><li><strong>Nucleoprotein (N, 50 kDa):</strong> Tightly encapsidates the genomic RNA in a protective ribonucleoprotein (RNP) core; provides species and phylogroup group-specific antigenicity; major target for diagnostic immunofluorescence (dFAT).</li><li><strong>Phosphoprotein (P, 35 kDa):</strong> Non-catalytic cofactor for the polymerase; inhibits host interferon responses by binding STAT1.</li><li><strong>Large Polymerase (L, 240 kDa):</strong> RNA-dependent RNA polymerase carrying transcription, capping, and polyadenylation activities.</li></ol><h3>(b) Centripetal and Centrifugal Neuro-Pathogenesis</h3><ol><li><strong>Inoculation:</strong> Inoculation of infectious saliva via a bite wound from a rabid carnivore into skeletal muscle subcutaneous tissue.</li><li><strong>Local Sequestration & Neuromuscular Binding:</strong> The virus may replicate locally in myocytes or bind directly without replication to high-affinity neuronal receptors: <strong>Nicotinic Acetylcholine Receptors (nAChR)</strong> at the neuromuscular junction, Neural Cell Adhesion Molecule (NCAM / CD56), and p75 neurotrophin receptor (p75NTR).</li><li><strong>Centripetal Retrograde Axonal Transport:</strong> Virions enter motor or sensory axon terminals via endocytosis. Uncoated RNPs undergo active, retrograde axoplasmic transport toward the central nervous system along microtubule dynein motors at a constant velocity of <strong>$50\\text{--}100\\\\text{ mm per day}$</strong>. <em>Crucially, the virus remains sequestered inside axons, completely shielded from host circulating antibodies and immune surveillance</em> (explaining the variable incubation period: 2 weeks to 6 months depending on bite distance from the brain).</li><li><strong>Central Nervous System Replication:</strong> Upon reaching the spinal cord dorsal root ganglia, the virus ascends rapidly to the brain, establishing explosive replication inside the limbic system, cerebral cortex, hippocampus, and cerebellum.</li><li><strong>Centrifugal Anterograde Dissemination:</strong> From the brain, the virus spreads centrifugally outward along peripheral autonomic nerves to highly innervated tissues: primarily the <strong>acinar cells of the submandibular salivary glands</strong>, where massive quantities of virions are shed into saliva just prior to death. Also spreads to cornea, skin follicles, and heart.</li></ol><h3>(c) Clinical Manifestations across Domestic Species</h3><ul><li><strong>1. Furious Rabies (Classic Form, predominantly dogs and cats):</strong> Manifests in three phases:<ul><li><em>Prodromal Phase (1–3 days):</em> Subtle temperament change, alertness, shyness, licking the bite site, mild fever, and pupillary dilation.</li><li><em>Excitative (Furious) Phase (2–4 days):</em> Intense hyperesthesia, photophobia, wandering aimlessly, depraved appetite (pica: eating stones, sticks, dirt), aggressive unprovoked biting of imaginary objects ('fly catching'), inability to swallow due to pharyngeal muscle paralysis (causing salivation and hydro-phobia fear of water in humans), and hoarse, altered phonation (laryngeal paralysis).</li><li><em>Paralytic Phase:</em> Lower jaw drops (dropped jaw), incoordination, ascending hindlimb paralysis, coma, and death from respiratory failure within 7–10 days of clinical onset.</li></ul></li><li><strong>2. Dumb (Paralytic) Rabies (dominant in cattle, horses, sheep):</strong> Excitative phase is abbreviated or absent. Early onset of progressive paralysis starting in the head and neck: inability to chew/swallow, profound drooling, bloat (ruminal tympany due to vagal paralysis, frequently mistaken by owners for choke), hindlimb weakness, recumbency, and death within 3–5 days.</li></ul><h3>(d) Laboratory Diagnostic Protocol</h3><ol><li><strong>Specimen Collection:</strong> Intact head or brain removed and shipped refrigerated (or in 50% glycerol saline) in a double-sealed biohazard container. <em>Necropsy must target the Ammon's horn (Hippocampus) in carnivores and Cerebellum in herbivores</em>.</li><li><strong>Direct Fluorescent Antibody Test (dFAT - International Gold Standard):</strong> Direct impression smears of hippocampus, medulla, and cerebellum fixed in cold acetone ($-20^\\circ\\text{C}$ for 1 hour), stained with FITC-conjugated monoclonal anti-rabies nucleoprotein (N) globulin. Examined under epifluorescence microscopy: <strong>brilliant apple-green fluorescent granular aggregates and oval foci</strong> inside neurons confirm rabies with $>99\\%$ sensitivity.</li><li><strong>Histochemical Demonstration of Negri Bodies (Sellers' Stain):</strong> Fresh brain impression smears stained with Sellers' reagent (methylene blue + basic fuchsin in methanol) without prior fixation: <strong>Negri bodies appear magenta-pink with internal basophilic dark-blue granules</strong> within large blue neurons. (Negative in 20–30% of rabid brains; dFAT is superior).</li><li><strong>Molecular & In Vivo Assays:</strong> RT-PCR targeting the N-gene; Mouse Inoculation Test (MIT) in 3-week-old Swiss albino mice (intracerebral inoculation).</li></ol><h3>(e) Post-Exposure Prophylaxis (PEP) Protocol</h3><ul><li><strong>Local Wound Management (Most Critical Step):</strong> Immediate, vigorous flushing and washing of all bite wounds with running water and <strong>soap or detergent for at least 15 minutes</strong>, followed by application of virucidal povidone-iodine (70% alcohol). Inactivates lipid-enveloped virus at the entry portal.</li><li><strong>Active Immunization (Cell-Culture Vaccines):</strong> Inactivated tissue-culture vaccines (e.g., Rabipur, Nobivac Rabies). Standard post-exposure schedule for domestic animals: <strong>Days 0, 3, 7, 14, and 28</strong> post-exposure intramuscularly in the neck or semitendinosus muscle.</li><li><strong>Rabies Immunoglobulin (RIG):</strong> Equine or human rabies immunoglobulin infiltrated locally around bite margins on Day 0 to provide immediate passive neutralizing coverage before active vaccine antibodies develop.</li></ul>",
      "keyPoints": [
        "Virology: Lyssavirus (Rhabdoviridae), bullet-shaped (-)ssRNA, surface G protein mediates receptor binding and vaccine protection.",
        "Pathogenesis: Inoculation -> binds nAChR -> retrograde axonal transport (50-100 mm/day) hidden from immune system -> CNS replication -> centrifugal spread to salivary glands.",
        "Clinical: Furious rabies (aggressiveness, pica, dropped jaw, paralysis) vs Dumb rabies (paralytic bloat/drooling in cattle).",
        "Diagnosis: dFAT on hippocampus/cerebellum (FITC apple-green granules, Gold Standard); Sellers' stain demonstrating magenta Negri bodies.",
        "PEP: 15-minute soap-water wash immediately, cell-culture vaccine on Days 0, 3, 7, 14, 28, and local RIG infiltration."
      ],
      "diagram": "Bite -> nAChR binding -> Retrograde Axonal Transport to Brain -> Centrifugal spread to Salivary Gland",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q23",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive treatise on Newcastle Disease Virus (NDV / Ranikhet Disease) in poultry: (a) Taxonomy & Structural Morphology, (b) Pathotypic Classification & Molecular Virulence Basis (F-Protein Cleavage Site), (c) Clinical Signs & Post-Mortem Hallmarks, (d) Laboratory Diagnosis (Egg Inoculation, HA, HI), and (e) Standard Poultry Vaccination Schedule.",
      "topicId": "u5-t11",
      "answer": "<h3>(a) Taxonomy & Structural Morphology</h3><p><strong>Newcastle Disease (Ranikhet Disease / Avian Pneumoencephalitis)</strong> is an acute, highly contagious, statutory transboundary avian viral disease of chickens and other avian species caused by <strong>Newcastle Disease Virus (NDV / Avian Orthoavulavirus 1)</strong>, genus <em>Orthoavulavirus</em>, family <em>Paramyxoviridae</em>.</p><p><strong>Morphology:</strong> Enveloped, pleomorphic (predominantly spherical, $150\\text{--}300\\text{ nm}$) virion enclosing a non-segmented negative-sense single-stranded RNA ($( - )\\text{ssRNA}$, $15.2\\text{ kb}$) genome. The envelope is studded with two surface glycoprotein spikes: the combined <strong>Hemagglutinin-Neuraminidase (HN)</strong> protein (mediates attachment to sialic acid receptors and neuraminidase elution) and the <strong>Fusion (F)</strong> protein (mediates viral penetration, cell fusion, and hemolysis).</p><h3>(b) Pathotypic Classification and Molecular Virulence Determinant</h3><p>NDV strains are classified into five pathotypes based on clinical severity and in vivo pathogenicity indices:</p><ol><li><strong>Doyle's Form (Velogenic Viscerotropic NDV - vvNDV):</strong> Acute, lethal infection with severe hemorrhagic gastrointestinal lesions and mortality approaching 100%.</li><li><strong>Beach's Form (Velogenic Neurotropic NDV - vnNDV):</strong> Acute lethal disease dominated by severe central nervous system (CNS) signs (torticollis, paralysis) following respiratory distress.</li><li><strong>Beaudette's Form (Mesogenic NDV):</strong> Intermediate virulence; acute respiratory and neurological signs with low mortality ($< 10\\%$), causing severe drops in egg production in layers. (Used as live secondary booster vaccines, e.g., <em>Mukteswar / R2B strain</em>).</li><li><strong>Hitchner's Form (Lentogenic NDV):</strong> Mild or asymptomatic respiratory infection with near-zero mortality; used worldwide as safe primary live vaccines in young chicks (e.g., <em>LaSota</em> and <em>Hitchner B1 strains</em>).</li><li><strong>Asymptomatic Enteric Form:</strong> Apathogenic gut-tropic virus.</li></ol><p><strong>Molecular Virulence Basis (F-Protein Cleavage Site):</strong> The <strong>Fusion (F) protein</strong> is synthesized as an inactive precursor, <strong>$F_0$</strong>, which must be cleaved proteolytically into active disulfide-linked $F_1$ and $F_2$ subunits for the virus to become infectious:</p><ul><li><em>Lentogenic / Apathogenic Strains:</em> Possess a <strong>monobasic cleavage motif</strong>: $^{112}\\text{G-R/K-Q-G-R-L}^{117}$. This motif can only be cleaved by <em>extracellular trypsin-like proteases</em> present exclusively in the respiratory and gastrointestinal tracts, restricting infection to local mucosal surfaces.</li><li><em>Velogenic & Mesogenic Strains:</em> Possess a <strong>polybasic cleavage motif</strong> with multiple basic residues (arginine/lysine) and a phenylalanine at position 117: $^{112}\\text{R-R-Q-K/R-R-F}^{117}$. This motif is recognized and cleaved by ubiquitous intracellular <strong>furin proteases</strong> present in all organ tissues, allowing explosive, fatal systemic pan-organ replication.</li></ul><h3>(c) Clinical Signs & Post-Mortem Hallmarks</h3><ul><li><strong>Clinical Signs:</strong> Depression, greenish-white watery diarrhea, facial and periorbital edema, gasping, coughing, and classic nervous signs: <strong>torticollis ('twisted neck')</strong>, circling, tremors, and complete wing/leg paralysis.</li><li><strong>Gross Necropsy Hallmarks (vvNDV):</strong><ul><li>Pathognomonic <strong>pinpoint petechial hemorrhages at the tips of the proventricular glands</strong> (mucosal papillae of the proventriculus).</li><li>Severe hemorrhagic and necrotic ulcerations of the <strong>cecal tonsils</strong> and <strong>Peyer's patches</strong> along the intestinal mucosa.</li><li>Severe catarrhal tracheitis with hemorrhagic mucosal streaks.</li></ul></li></ul><h3>(d) Laboratory Diagnosis</h3><ol><li><strong>Viral Isolation:</strong> Inoculation of clarified tracheal/cloacal swab suspension into the <strong>allantoic cavity of 9 to 11-day-old SPF embryonated chicken eggs</strong>. Incubate at 37°C for 48–96 hours. Embryo death within 48–72 hours with generalized cutaneous hemorrhages is typical of velogenic strains.</li><li><strong>Hemagglutination (HA) Assay:</strong> Harvested clear allantoic fluid mixed with equal volume of <strong>1% washed chicken RBCs</strong> in 96-well U-bottom microtiter plates. NDV agglutinates RBCs within 30 minutes, forming a diffuse 'mat / shield' across the bottom (negative control forms a tight, sharp 'button'). Determines the HA titer (1 HAU).</li><li><strong>Hemagglutination Inhibition (HI) Assay:</strong> Definitive serological identification. Known NDV-specific hyperimmune antiserum inhibits viral hemagglutination, confirming the identity of the isolated virus or quantitating maternal/vaccine antibody titers in flock sera.</li><li><strong>Pathogenicity Indices:</strong> Intracerebral Pathogenicity Index (ICPI in 1-day-old chicks: Velogenic $> 1.5$; Lentogenic $< 0.5$) and Mean Death Time (MDT).</li></ol><h3>(e) Standard Poultry Vaccination Schedule</h3><ul><li><strong>Day 1 to Day 7 (Primary Dose):</strong> Live lentogenic <strong>Hitchner B1 or LaSota strain</strong> administered via <strong>intra-ocular (eye drop) or intra-nasal route</strong> (ensures mucosal sIgA priming in Harderian gland).</li><li><strong>Day 21 to Day 28 (Booster Dose):</strong> Live <strong>LaSota strain</strong> administered via drinking water or eye drop.</li><li><strong>Week 8 to Week 10 (Grower Dose):</strong> Live mesogenic <strong>Mukteswar (R2B) strain</strong> ($0.5\\text{ mL}$ subcutaneously / intramuscularly). (Strictly contraindicated in chicks under 6 weeks).</li><li><strong>Week 16 to Week 18 (Pre-Lay Booster in Layers/Breeders):</strong> Inactivated, emulsified oil-adjuvant NDV vaccine administered intramuscularly to ensure prolonged high antibody titers and maternal antibody transfer to eggs.</li></ul>",
      "keyPoints": [
        "Virology: Orthoavulavirus (Paramyxoviridae), (-)ssRNA, surface HN (attachment) and F (fusion) glycoproteins.",
        "Pathotypes: Velogenic (vvNDV Doyle viscerotropic; vnNDV Beach neurotropic), Mesogenic (Beaudette), Lentogenic (Hitchner B1, LaSota).",
        "F-protein cleavage site: Polybasic motif (R-R-Q-K/R-R-F) cleaved by ubiquitous furin dictates velogenic systemic lethality.",
        "Lesions: Petechiae on tips of proventricular glands, hemorrhagic cecal tonsils, torticollis (twisted neck).",
        "Vaccination: LaSota/B1 eye drop at Day 1-7, booster at Day 21-28; R2B mesogenic subcutaneous at 8-10 weeks."
      ],
      "diagram": "F-Protein: Monobasic (Cleaved by trypsin in gut/lung only -> Lentogenic) vs Polybasic (Cleaved by systemic furin -> Velogenic)",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2022",
        "LUVAS 2021"
      ]
    },
    {
      "id": "u5-q24",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive account of Canine Parvovirus (CPV-2): (a) Viral Taxonomy & Emergence of Antigenic Variants, (b) Cellular Tropism for Rapidly Dividing Cells, (c) Pathogenesis & Clinical Pathology (Enteric vs Myocardial Forms), (d) Laboratory Diagnosis (LFIA, PCR, Hemagglutination), and (e) Immunoprophylaxis & MAb Window.",
      "topicId": "u5-t30",
      "answer": "<h3>(a) Viral Taxonomy and Emergence of Antigenic Variants</h3><p><strong>Canine Parvovirus (CPV-2)</strong> is a devastating, highly contagious, life-threatening pathogen of canines belonging to the genus <em>Protoparvovirus</em>, family <em>Parvoviridae</em>. It is an extraordinarily small ($25\\text{ nm}$), non-enveloped, icosahedral virus enclosing a single-stranded negative-sense DNA ($( - )\\text{ssDNA}$, $5.2\\text{ kb}$) genome.</p><p><strong>Evolutionary Antigenic Variants:</strong></p><ul><li>The original strain (<strong>CPV-2</strong>) emerged in 1978 via cross-species mutation from Feline Panleukopenia Virus (FPV), driven by just two amino acid substitutions in the capsid protein <strong>VP2</strong> (residues 93 and 323).</li><li>Between 1979 and 2000, the original CPV-2 was completely replaced in global canine populations by evolutionary antigenic variants based on amino acid mutations at residue <strong>426 of VP2</strong>:<ul><li><strong>CPV-2a:</strong> Asparagine (Asn) at residue 426.</li><li><strong>CPV-2b:</strong> Aspartic acid (Asp) at residue 426.</li><li><strong>CPV-2c (Glu-426):</strong> Discovered in Italy (2000), carrying Glutamic acid (Glu) at residue 426; now co-circulating with CPV-2a and 2b across India and worldwide, possessing expanded tropism for domestic cats as well.</li></ul></li><li>The non-enveloped capsid is exceptionally resistant to environmental desiccation, heat, and common disinfectants, surviving on fomites and kennel floors for <strong>over 6 to 12 months</strong>.</li></ul><h3>(b) Cellular Tropism for Rapidly Dividing Cells</h3><p>Because parvoviruses possess an extremely small genome lacking their own DNA polymerase, they <strong>cannot replicate in quiescent (resting) cells</strong>. They are strictly dependent on host cellular enzymes synthesized during the <strong>S-phase of the mitotic cell cycle</strong>. Consequently, CPV-2 displays an absolute predilection for tissues with high mitotic indices:</p><ol><li><strong>Intestinal Crypts of Lieberkühn</strong> (intestinal mucosal epithelium).</li><li><strong>Bone Marrow and Lymphoid Organs</strong> (hematopoietic progenitor cells).</li><li><strong>Neonatal Myocardium</strong> (actively dividing cardiomyocytes in puppies $< 6$ weeks old).</li></ol><h3>(c) Pathogenesis & Clinical Manifestations</h3><ul><li><strong>1. Enteric Form (Classic Syndrome, 6 weeks to 6 months puppies):</strong> Ingestion via fecal-oral route $\\to$ primary viral replication in pharyngeal lymphoid tissue $\\to$ high viremia (Days 3–5) $\\to$ homing to intestinal crypts. Viral lytic replication destroys the generative crypt epithelial cells. Normal epithelial turnover ceases; as mature absorptive enterocytes are shed from villus tips, they cannot be replaced, leading to total <strong>villus blunting, collapse, and sloughing of mucosal lining</strong>. The denuded intestinal surface causes massive fluid/electrolyte loss and permits normal coliform bacteria to breach systemic circulation (Gram-negative sepsis). Concurrently, destruction of bone marrow myeloid and erythroid progenitors causes severe, pathognomonic <strong>pan-leukopenia</strong> (neutrophil counts dropping to $< 500\\text{--}1000/\\\\mu\\\\text{L}$).<ul><li><em>Clinical Picture:</em> Severe depression, intractable vomiting, anorexia, profound dehydration, hypothermia, and projectile, foul-smelling, bloody, dark-red/black diarrhea ('strawberry jam / hemorrhagic diarrhea'). Death results from hypovolemic and endotoxic septic shock.</li></ul></li><li><strong>2. Myocardial Form (Neonatal Puppies $< 6$ weeks old):</strong> Occurs when non-immune pregnant bitches transfer virus to fetuses, or pups are infected before 4–6 weeks of age when cardiomyocytes are still actively replicating. Virus destroys cardiac myofibers, producing acute heart failure, dyspnea, hypothermia, and sudden collapse without preceding enteritis.</li></ul><h3>(d) Laboratory Diagnostic Protocol</h3><ol><li><strong>Point-of-Care Lateral Flow Immunochromatographic Assay (LFIA):</strong> Rapid pen-side test kit detecting CPV-2 fecal antigen using colloidal gold-conjugated monoclonal anti-VP2 antibodies. Results available within 10 minutes (detects CPV-2a, 2b, 2c).</li><li><strong>Fecal Hemagglutination (HA) Assay:</strong> Serial dilutions of fecal extract mixed with <strong>1% Rhesus macaque or porcine RBCs</strong> at 4°C (pH 6.5). Agglutination confirms active viral shedding.</li><li><strong>Molecular Detection (PCR - Gold Standard):</strong> Conventional or Real-Time qPCR targeting the <em>VP2</em> gene (583 bp product). Multiplex real-time PCR or sequencing of residue 426 differentiates CPV-2a, 2b, and 2c variants.</li></ol><h3>(e) Immunoprophylaxis and the 'Immunity Gap' Window</h3><ul><li><strong>Maternal Antibody Interference:</strong> Colostral IgG antibodies protect puppies initially, with an antibody half-life of approx. 10 days. However, a critical <strong>'Window of Susceptibility' (Immunity Gap)</strong> occurs between <strong>6 and 10 weeks of age</strong>: circulating maternal antibody titers (HI titer 1:20 to 1:40) are too low to protect the puppy against wild virulent field infection, yet sufficiently high to neutralize live attenuated vaccine viruses.</li><li><strong>Puppy Vaccination Protocol:</strong> Administer modified live CPV-2 high-titer vaccines at <strong>6–8 weeks</strong>, booster at <strong>10–12 weeks</strong>, and a final booster at <strong>14–16 weeks</strong> of age (ensures seroconversion after complete decay of maternal antibodies), followed by an annual booster.</li></ul>",
      "keyPoints": [
        "Virology: Protoparvovirus (Parvoviridae), (-)ssDNA, non-enveloped, highly resistant; VP2 residue 426 defines variants 2a, 2b, 2c.",
        "Tropism: Strictly requires S-phase host cells: Intestinal crypts of Lieberkühn, bone marrow progenitors, neonatal myocardium.",
        "Pathogenesis: Crypt cell lysis -> total villous atrophy + pan-leukopenia -> projectile bloody diarrhea and endotoxic septic shock.",
        "Diagnosis: Rapid fecal LFIA antigen test, porcine RBC hemagglutination (HA), and VP2 PCR.",
        "Vaccination: Window of susceptibility (6-10 weeks) overcome by serial vaccination at 6-8, 10-12, 14-16 weeks."
      ],
      "diagram": "Crypt Cell Destruction -> Villous Collapse -> Fluid Loss & Bacterial Sepsis + Bone Marrow Panleukopenia",
      "table": null,
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "LUVAS 2022",
        "RAJUVAS 2021"
      ]
    },
    {
      "id": "u5-q25",
      "type": "long",
      "marks": 12,
      "question": "Write an exhaustive account of Marek's Disease Virus (MDV) in poultry: (a) Herpesviral Classification & Oncogenic Serotypes, (b) Four Phases of Pathogenesis in Lymphocytes, (c) Clinical Syndromes & Post-Mortem Lesions, (d) Differential Diagnosis from Lymphoid Leukosis, and (e) In Ovo Vaccination.",
      "topicId": "u5-t26",
      "answer": "<h3>(a) Herpesviral Classification and Oncogenic Serotypes</h3><p><strong>Marek's Disease (Fowl Paralysis / Neurolymphomatosis)</strong> is an acute, economically devastating lymphoproliferative and oncogenic disease of domestic chickens caused by <strong>Marek's Disease Virus (MDV / Gallid alphaherpesvirus 2)</strong>, genus <em>Mardivirus</em>, subfamily <em>Alphaherpesvirinae</em>, family <em>Herpesviridae</em>.</p><p><strong>Serotypic Classification:</strong></p><ul><li><strong>Serotype 1 (Gallid alphaherpesvirus 2):</strong> Includes all <strong>oncogenic</strong> virulent and very virulent ($vv\\text{MDV}, vv+\\text{MDV}$) field strains that produce T-cell lymphomas and neural enlargement, as well as their attenuated vaccine derivatives (e.g., CVI988 / Rispens strain). Encodes the primary oncogene <strong>Meq</strong> (Marek's EcoRI-Q-encoded bZIP protein) and viral telomerase RNA (vTR).</li><li><strong>Serotype 2 (Gallid alphaherpesvirus 3):</strong> Naturally non-oncogenic chicken herpesviruses (e.g., SB-1 strain), used in bivalent vaccines.</li><li><strong>Serotype 3 (Meleagrid alphaherpesvirus 1 / Herpesvirus of Turkeys - HVT):</strong> Naturally apathogenic turkey herpesvirus (FC126 strain) widely used globally as a monovalent or recombinant vector vaccine.</li></ul><h3>(b) Four Sequential Phases of Pathogenesis</h3><ol><li><strong>1. Early Productive-Restrictive Phase (Days 3–7 post-infection):</strong> Inhalation of viral-laden poultry dust/dander. Macrophages transport virus to lymphoid organs (bursa, thymus, spleen). Cytolytic replication in <strong>B lymphocytes</strong>, producing lymphoid atrophy and transient immunosuppression.</li><li><strong>2. Latent Phase (Days 7–10):</strong> Virus transitions from lytic replication to stable latency, switching tropism predominantly to activated <strong>$\\text{CD4}^+$ T lymphocytes</strong>.</li><li><strong>3. Second Productive Cytolytic & Immunosuppressive Phase (Days 14–21):</strong> In chickens with inadequate immunity, a secondary wave of lytic infection destroys both B and T lymphocytes, causing severe permanent immunosuppression.</li><li><strong>4. Non-Productive Proliferative / Lymphomatous Phase (Weeks 3–12+):</strong> Transformation of latently infected $\\text{CD4}^+$ T cells driven by the viral <strong>Meq oncoprotein</strong>, which heterodimerizes with c-Jun and represses apoptosis. Transformed malignant T-cell lymphoblasts infiltrate peripheral nerves, visceral organs, iris, and skin.</li><li><strong>5. Fully Productive Shedding (Feather Follicle Epithelium):</strong> The <em>only</em> anatomical site where complete, enveloped, cell-free infectious virions are assembled and shed is the non-malignant <strong>feather follicle epithelium (FFE)</strong>. Infectious dander sheds into poultry house litter, remaining viable for months.</li></ol><h3>(c) Clinical Syndromes & Post-Mortem Pathology</h3><ul><li><strong>Classical (Neural) Form ('Range Paralysis'):</strong> Progressive unilateral paralysis of the legs and wings resulting from lymphoid infiltration into peripheral nerve trunks. Affected birds display a classic pathognomonic posture: <strong>one leg stretched forward and the other stretched backward</strong>. Necropsy reveals pathognomonic <strong>unilateral enlargement, loss of cross-striations, and edematous yellowish-grey discoloration of the Sciatic, Brachial, and Vagus nerve plexuses</strong> (enlarged 2 to 3 times normal caliber).</li><li><strong>Acute (Visceral) Form:</strong> Rapid development of diffuse or nodular lymphomas in visceral organs (liver, spleen, heart, kidneys, proventriculus, gonads/ovaries).</li><li><strong>Ocular Form ('Gray Eye' / Pearl Eye):</strong> Infiltration of neoplastic lymphoblasts into the iris causing irregular, constricted pupils, depigmentation of the iris (turning dull gray), and blindness.</li><li><strong>Cutaneous Form:</strong> Nodular lymphoid tumors surrounding feather follicles ('skin leukosis').</li></ul><h3>(d) Differential Diagnosis: Marek's Disease vs Lymphoid Leukosis</h3>",
      "keyPoints": [
        "Virology: Mardivirus (Alphaherpesvirinae), Meq oncoprotein transforms CD4+ T cells; enveloped cell-free virus shed solely from feather follicle epithelium.",
        "Four phases: Early lytic B-cell infection -> Latency in CD4+ T cells -> Secondary lytic immunosuppression -> T-cell lymphomatous transformation.",
        "Hallmarks: Classical neural paralysis (one leg forward, one backward) with massive unilateral sciatic nerve enlargement; ocular 'gray eye'.",
        "Differential diagnosis: MD affects birds 3-16 weeks, T-cell tumors, neural lesions present; LL affects birds >16 weeks, B-cell bursal tumors, neural lesions absent.",
        "Vaccination: In ovo automated injection at Day 18 of incubation using HVT / Rispens (CVI988) vaccine."
      ],
      "diagram": "Inhaled Dander -> B-cell lysis -> CD4+ T-cell Latency -> Meq Transformation -> Sciatic Nerve Lymphoma & Feather Shedding",
      "table": {
        "title": "Differential Diagnosis: Marek's Disease (MD) vs Lymphoid Leukosis (LL)",
        "headers": [
          "Diagnostic Criterion",
          "Marek's Disease (MD)",
          "Lymphoid Leukosis (LL)"
        ],
        "rows": [
          [
            "Etiological Agent",
            "<strong>Marek's Disease Virus</strong> (Alphaherpesvirinae, dsDNA)",
            "<strong>Avian Leukosis Virus</strong> (Retroviridae, Alpharetrovirus, ssRNA)"
          ],
          [
            "Age of Susceptibility",
            "Young birds: <strong>3 to 16 weeks of age</strong> (can occur as early as 3 weeks)",
            "Mature adult birds: <strong>$> 16\text{ to }24\text{ weeks of age}$</strong> (sexually mature)"
          ],
          [
            "Transformed Neoplastic Cell Type",
            "<strong>$\text{CD4}^+$ T Lymphocytes</strong> (T-cell lymphoma)",
            "<strong>$\text{IgM}^+$ B Lymphocytes</strong> (B-cell lymphoma)"
          ],
          [
            "Peripheral Nerve Enlargement",
            "<strong>Consistently Present</strong> (Sciatic, brachial, vagus nerves enlarged 2–3x; pathognomonic)",
            "<strong>Completely Absent</strong> (nerves are completely normal)"
          ],
          [
            "Bursa of Fabricius Involvement",
            "Diffuse interfollicular atrophy or enlargement; individual follicles non-tumorous",
            "<strong>Intrafollicular Nodular Tumors</strong>; discrete macroscopic nodular 'grape-like' clusters"
          ],
          [
            "Ocular & Skin Lesions",
            "Frequent: <strong>'Gray Eye'</strong> (pupillary distortion) and feather follicle tumors",
            "Completely absent"
          ],
          [
            "Cellular Pleomorphism in Tumors",
            "<strong>Pleomorphic</strong> mixture: small, medium, large lymphoblasts, reticulum cells, plasma cells",
            "<strong>Monomorphic</strong> uniform population of large, immature blast cells (lymphoblasts)"
          ]
        ]
      },
      "pyq": [
        "IVRI 2023",
        "TANUVAS 2023",
        "GADVASU 2022",
        "RAJUVAS 2021",
        "WBUAFS 2020"
      ]
    }
  ]
};

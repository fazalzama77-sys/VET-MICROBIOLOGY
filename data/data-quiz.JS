/* ============================================================
   data-quiz.JS  —  THE VETERINARY MICROBIOLOGY QUIZ BANK
   ------------------------------------------------------------
   Units 1 to 5: 900 Curriculum-Standard Questions (180 Qs / Unit)
   Strict 2 : 1 : 1 Ratio (90 MCQ : 45 True/False : 45 Fill-in-the-Blank)
   Calibrated for B.V.Sc & A.H. 2nd Year ICAR-IVRI / VCI MSVE 2016 Exam
   ============================================================ */

var quizBank = {
  "unit-1": {
    "mcq": [
      {
        "q": "The primary rigidity and mechanical strength of the eubacterial cell wall is provided by which macromolecule?",
        "o": [
          "Peptidoglycan (Murein)",
          "Lipopolysaccharide",
          "Teichoic acid",
          "Phospholipid bilayer"
        ],
        "a": 0,
        "e": "Peptidoglycan (murein), a meshwork of alternating NAM and NAG linked by beta-1,4 glycosidic bonds and cross-linked by peptide bridges, provides osmotic protection and mechanical shape.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which enzyme specifically cleaves the beta-1,4 glycosidic bond between N-acetylmuramic acid (NAM) and N-acetylglucosamine (NAG) in bacterial peptidoglycan?",
        "o": [
          "Lysozyme",
          "Beta-lactamase",
          "Transpeptidase",
          "Amylase"
        ],
        "a": 0,
        "e": "Lysozyme (muramidase), present in tears, saliva, and egg white, hydrolyzes the beta-1,4 glycosidic linkages between NAM and NAG residues.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In the Gram staining protocol, what is the chemical role of Gram's iodine?",
        "o": [
          "Mordant forming an insoluble Crystal Violet-Iodine complex",
          "Primary stain",
          "Decolorizing agent",
          "Counterstain"
        ],
        "a": 0,
        "e": "Gram's iodine acts as a chemical mordant that binds with crystal violet inside the cell wall to form large, insoluble CV-I precipitates.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which component is present exclusively in the cell wall of Gram-positive bacteria and absent in Gram-negative bacteria?",
        "o": [
          "Lipoteichoic and wall teichoic acids",
          "Periplasmic space",
          "Lipopolysaccharide (LPS)",
          "Porin trimers"
        ],
        "a": 0,
        "e": "Teichoic acids and lipoteichoic acids are polyol phosphate polymers anchored to peptidoglycan or the plasma membrane exclusively in Gram-positive bacteria.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Acid-fastness of the genus Mycobacterium is primarily attributed to high concentrations of which cell wall constituent?",
        "o": [
          "Mycolic acids",
          "Dipicolinic acid",
          "Diaminopimelic acid",
          "Hyaluronic acid"
        ],
        "a": 0,
        "e": "Mycolic acids are long-chain beta-hydroxy fatty acids (up to C60–C90) forming a waxy, hydrophobic lipid barrier that resists acid-alcohol decolorization.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "What is the primary chemical compound responsible for the extreme heat and desiccation resistance of bacterial endospores?",
        "o": [
          "Calcium dipicolinate (dipicolinic acid chelated with Ca2+)",
          "Poly-beta-hydroxybutyrate",
          "Magnesium sulfate",
          "Trehalose dimycolate"
        ],
        "a": 0,
        "e": "Dipicolinic acid (DPA) comprises 5–15% of spore dry weight, chelating calcium ions to dehydrate the core and stabilize bacterial DNA against thermal denaturation.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Which differential staining method is standard for demonstrating bacterial endospores where spores appear bright green?",
        "o": [
          "Schaeffer-Fulton stain",
          "Ziehl-Neelsen stain",
          "Albert's stain",
          "Fontana silver stain"
        ],
        "a": 0,
        "e": "In the Schaeffer-Fulton method, malachite green is driven into the impermeable spore coat using steam heat, followed by safranin counterstaining for vegetative cells.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "A bacterium possessing a single flagellum located at one pole is described as having which flagellar arrangement?",
        "o": [
          "Monotrichous",
          "Lophotrichous",
          "Amphitrichous",
          "Peritrichous"
        ],
        "a": 0,
        "e": "Monotrichous refers to a single polar flagellum (e.g., Pseudomonas aeruginosa or Vibrio cholerae).",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The flagella of bacteria are composed of polymer subunits of which globular protein?",
        "o": [
          "Flagellin",
          "Pilin",
          "Tubulin",
          "Actin"
        ],
        "a": 0,
        "e": "Bacterial flagella consist of helical filaments composed of the protein flagellin, which forms the basis of H-antigen serotyping in enterobacteria.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Which capsule is unique among pathogenic bacteria for being composed of a polypeptide (poly-D-glutamic acid) rather than a polysaccharide?",
        "o": [
          "Bacillus anthracis",
          "Klebsiella pneumoniae",
          "Streptococcus pneumoniae",
          "Pasteurella multocida"
        ],
        "a": 0,
        "e": "Bacillus anthracis is unique in possessing a non-immunogenic poly-D-glutamic acid capsule encoded on the pXO2 plasmid.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The M'Fadyean capsule reaction used for rapid presumptive diagnosis of Anthrax utilizes which staining reagent?",
        "o": [
          "Polychrome methylene blue",
          "Crystal violet",
          "Carbol fuchsin",
          "Malachite green"
        ],
        "a": 0,
        "e": "In the M'Fadyean reaction, polychrome methylene blue stains B. anthracis bacilli blue, surrounded by a distinct purplish-pink disintegrated capsular halo.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Albert's stain is specifically employed to demonstrate which bacterial anatomical structures?",
        "o": [
          "Metachromatic (volutin) granules",
          "Endospores",
          "Flagella",
          "Capsules"
        ],
        "a": 0,
        "e": "Albert's stain (using toluidine blue and malachite green) stains metachromatic volutin (polyphosphate) granules bluish-black against light green cytoplasm in Corynebacterium.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Which bacterial structure mediates specific twitching motility across moist solid surfaces independently of flagella?",
        "o": [
          "Type IV pili (fimbriae)",
          "Endoflagella",
          "Capsule",
          "Mesosome"
        ],
        "a": 0,
        "e": "Type IV pili undergo ATP-dependent extension and retraction to propel bacteria via twitching motility (seen in Dichelobacter nodosus and Pseudomonas).",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "Bacteria that naturally lack a rigid peptidoglycan cell wall and are bounded solely by a sterol-stabilized triple-layered membrane belong to which class?",
        "o": [
          "Mollicutes (Mycoplasma)",
          "Firmicutes",
          "Gracilicutes",
          "Actinobacteria"
        ],
        "a": 0,
        "e": "Mycoplasma (class Mollicutes) lack genes for peptidoglycan synthesis; their cell membranes incorporate exogenous sterols (cholesterol) from host fluids.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In the Ziehl-Neelsen acid-fast staining procedure, what is the exact decolorizing solution used?",
        "o": [
          "3% (v/v) hydrochloric acid in 95% ethyl alcohol",
          "95% ethyl alcohol alone",
          "Acetone-alcohol (1:1)",
          "1% sulfuric acid in water"
        ],
        "a": 0,
        "e": "Standard ZN staining uses acid-alcohol (3% concentrated HCl in 95% ethanol), which readily decolorizes non-acid-fast bacteria while mycobacteria retain carbol fuchsin.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "What term describes bacteria that undergo extreme morphological variation in size and shape due to absence of a rigid cell wall?",
        "o": [
          "Pleomorphic",
          "Monomorphic",
          "Heterotrophic",
          "Siderophilic"
        ],
        "a": 0,
        "e": "Pleomorphism describes bacteria lacking rigid wall architecture (e.g., Mycoplasma, Corynebacterium) exhibiting variable coccoid, filamentous, and pear shapes.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "What optical microscopic technique is required to visualize unstained, extremely thin living spirochetes like Leptospira in clinical urine or fluids?",
        "o": [
          "Dark-field microscopy",
          "Bright-field microscopy",
          "Fluorescence microscopy",
          "Confocal microscopy"
        ],
        "a": 0,
        "e": "Dark-field microscopy utilizes a central light stop so only light diffracted by the thin spirochetes enters the objective, rendering them brilliant silver against a dark field.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The periplasmic flagella (axial filaments) responsible for corkscrew flexuous motility in spirochetes are located in which anatomical space?",
        "o": [
          "Between the peptidoglycan layer and outer membrane (periplasmic space)",
          "Protruding freely from the cell poles",
          "Inside the central cytoplasm",
          "Anchored to the capsule outer surface"
        ],
        "a": 0,
        "e": "In spirochetes (Leptospira, Borrelia, Treponema), endoflagella reside entirely within the periplasmic space, wrapping around the protoplasmic cylinder.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "In which phase of the bacterial growth curve is cell division occurring at the maximal and constant geometric rate?",
        "o": [
          "Logarithmic (Exponential) phase",
          "Lag phase",
          "Stationary phase",
          "Decline (Death) phase"
        ],
        "a": 0,
        "e": "During the logarithmic (exponential) phase, bacteria synthesize cellular components at maximum velocity, doubling geometrically with constant generation time.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The horizontal gene transfer mechanism that involves direct uptake of naked, free environmental DNA by a competent bacterial cell is termed:",
        "o": [
          "Transformation",
          "Transduction",
          "Conjugation",
          "Transposition"
        ],
        "a": 0,
        "e": "Transformation, first demonstrated by Frederick Griffith (1928) using Streptococcus pneumoniae, requires physiological competence to transport exogenous naked DNA into the cell.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Which horizontal gene transfer process is mediated specifically by bacteriophages (bacterial viruses)?",
        "o": [
          "Transduction",
          "Transformation",
          "Conjugation",
          "Electroporation"
        ],
        "a": 0,
        "e": "Transduction occurs when a bacteriophage accidentally packages bacterial host DNA instead of viral DNA and injects it into a recipient bacterium.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Methicillin-resistant Staphylococcus aureus (MRSA) confers resistance to all beta-lactam antibiotics via acquisition of the mecA gene, which encodes which altered penicillin-binding protein?",
        "o": [
          "PBP2a (PBP2')",
          "PBP1",
          "PBP3",
          "PBP4"
        ],
        "a": 0,
        "e": "The mecA gene (located on Staphylococcal Cassette Chromosome SCCmec) encodes PBP2a, which has extremely low binding affinity for all beta-lactams.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "What is the standard McFarland turbidity standard utilized to standardize bacterial inocula for Kirby-Bauer disk diffusion antimicrobial susceptibility testing?",
        "o": [
          "0.5 McFarland (approx. 1.5 x 10^8 CFU/mL)",
          "1.0 McFarland",
          "2.0 McFarland",
          "0.1 McFarland"
        ],
        "a": 0,
        "e": "A 0.5 McFarland standard (prepared from 0.05 mL 1.175% BaCl2 + 9.95 mL 1% H2SO4) equals approximately 1.5 x 10^8 CFU/mL, ensuring standard inoculum density.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "What is the standard agar medium and depth specified by CLSI for performing the Kirby-Bauer disk diffusion susceptibility test?",
        "o": [
          "Mueller-Hinton agar (MHA) at 4 mm depth",
          "Nutrient agar at 2 mm depth",
          "Blood agar at 6 mm depth",
          "Brain Heart Infusion agar at 8 mm depth"
        ],
        "a": 0,
        "e": "CLSI mandates Mueller-Hinton agar poured to a uniform depth of exactly 4 mm (pH 7.2–7.4); depths <4 mm cause falsely large zones, while >4 mm cause falsely small zones.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Bacteria that require reduced oxygen concentrations (typically 5% O2) and elevated carbon dioxide (5–10% CO2) for optimal growth are classified as:",
        "o": [
          "Microaerophiles",
          "Obligate aerobes",
          "Facultative anaerobes",
          "Capnophiles alone"
        ],
        "a": 0,
        "e": "Microaerophiles (e.g., Campylobacter fetus, Helicobacter) thrive at lower oxygen tensions (3–5% O2) and are inhibited by atmospheric 21% O2.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Which type of bacterial culture system maintains cells in continuous logarithmic growth by continuously adding fresh sterile medium while siphoning spent culture at an equal rate?",
        "o": [
          "Chemostat (continuous culture)",
          "Batch culture",
          "Semi-solid slant",
          "Stab culture"
        ],
        "a": 0,
        "e": "A chemostat controls bacterial growth rate by limiting a single nutrient in continuous fresh feed, balancing growth rate with dilution rate.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Which enzyme inactivates penicillins and cephalosporins by hydrolyzing the cyclic amide bond of the four-membered beta-lactam ring?",
        "o": [
          "Beta-lactamase",
          "DNA gyrase",
          "Acetyltransferase",
          "Phosphotransferase"
        ],
        "a": 0,
        "e": "Beta-lactamase breaks the four-membered beta-lactam ring, converting penicillins into microbiologically inactive penicilloic acid.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Mobile genetic elements that encode transposase enzymes and can excise and re-insert themselves into different loci within bacterial chromosomes or plasmids are called:",
        "o": [
          "Transposons ('jumping genes')",
          "Pathogenicity islands",
          "Introns",
          "Exons"
        ],
        "a": 0,
        "e": "Transposons carry inverted terminal repeats flanking transposase and often resistance determinants, translocating between plasmids and the chromosome.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "In high-frequency recombination (Hfr) bacterial strains, what is the precise genomic status of the F (fertility) factor?",
        "o": [
          "Integrated into the bacterial host circular chromosome",
          "Replicating autonomously in the cytoplasm as a small episome",
          "Encapsidated within a bacteriophage head",
          "Degraded into single nucleotides"
        ],
        "a": 0,
        "e": "An Hfr strain arises when an F plasmid integrates into the main circular bacterial chromosome via homologous recombination at IS elements.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The lowest concentration of an antimicrobial agent that visibly inhibits the in vitro growth of a microorganism after overnight incubation is the:",
        "o": [
          "Minimum Inhibitory Concentration (MIC)",
          "Minimum Bactericidal Concentration (MBC)",
          "Break-point concentration",
          "Therapeutic index"
        ],
        "a": 0,
        "e": "MIC represents the lowest antimicrobial concentration preventing turbidity in standard broth or agar dilution after 18–24 hours incubation.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Which mechanism mediates fluoroquinolone (e.g., enrofloxacin, ciprofloxacin) resistance in bacteria?",
        "o": [
          "Point mutations in DNA gyrase (gyrA) and topoisomerase IV (parC) genes",
          "Hydrolysis by metallo-beta-lactamase",
          "Ribosomal methylation by erm genes",
          "Acetylation by AAC(6') enzyme"
        ],
        "a": 0,
        "e": "Fluoroquinolone resistance develops via mutations in the quinolone resistance-determining regions (QRDR) of gyrA and parC, preventing drug-target binding.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Plasmids that carry genes conferring simultaneous resistance to multiple diverse classes of antibacterial drugs are known as:",
        "o": [
          "R plasmids (Resistance factors)",
          "Col plasmids",
          "Degradative plasmids",
          "Ti plasmids"
        ],
        "a": 0,
        "e": "R plasmids (resistance factors) typically possess an RTF (resistance transfer factor) region for conjugative transfer and an r-determinant bearing multiple drug resistance genes.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Which bacterial enzyme catalyzes the relaxation of supercoiled DNA and is the primary molecular target of fluoroquinolone antimicrobials?",
        "o": [
          "DNA gyrase (Topoisomerase II)",
          "DNA ligase",
          "RNA polymerase",
          "Peptidyl transferase"
        ],
        "a": 0,
        "e": "DNA gyrase introduces negative supercoils into bacterial DNA; fluoroquinolones trap the enzyme-DNA cleavage complex, inducing lethal double-strand DNA breaks.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Cold-loving bacteria that can replicate at refrigerated temperatures (0–7°C) with an optimum growth temperature between 20–30°C (e.g., Listeria) are termed:",
        "o": [
          "Psychrotrophs (Psychrotolerant)",
          "Thermophiles",
          "Mesophiles",
          "Extreme halophiles"
        ],
        "a": 0,
        "e": "Psychrotrophs can replicate at refrigerator temperatures (0–7°C), allowing Listeria monocytogenes and Yersinia enterocolitica to multiply in chilled foods and cold enrichment media.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Generalized transduction differs from specialized transduction in that generalized transduction:",
        "o": [
          "Can transfer any random gene from the donor bacterial chromosome",
          "Transfers only specific genes adjacent to the phage prophage insertion site",
          "Requires direct cell-to-cell contact through a sex pilus",
          "Is mediated exclusively by virulent RNA bacteriophages"
        ],
        "a": 0,
        "e": "Generalized transduction occurs during lytic phage cycles when random fragments of host chromosome are packaged; specialized transduction transfers only adjacent flanking genes upon prophage excision.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "What is the mode of action of aminoglycoside antibiotics (e.g., streptomycin, gentamicin) in sensitive bacteria?",
        "o": [
          "Irreversible binding to the 30S ribosomal subunit causing mistranslation and membrane disruption",
          "Inhibition of cell wall transpeptidation",
          "Inhibition of bacterial RNA polymerase",
          "Disruption of outer membrane lipids"
        ],
        "a": 0,
        "e": "Aminoglycosides bind to 16S rRNA within the 30S subunit, inducing misreading of genetic code and generating toxic aberrant proteins that damage the cell membrane.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Which major cell wall-associated surface protein of Staphylococcus aureus binds specifically to the Fc region of host IgG, thereby preventing opsonization and phagocytosis?",
        "o": [
          "Protein A",
          "Protein G",
          "M protein",
          "Fibronectin-binding protein"
        ],
        "a": 0,
        "e": "Protein A binds the Fc region of IgG molecules in an inverted orientation, preventing Fc-receptor recognition by host neutrophils and macrophages.",
        "topicId": "u1-t13",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "In the CAMP test used to identify Streptococcus agalactiae, an arrowhead of synergistic complete beta-hemolysis is observed adjacent to the streak of which organism?",
        "o": [
          "Staphylococcus aureus (beta-toxin / sphingomyelinase C producing strain)",
          "Escherichia coli",
          "Pseudomonas aeruginosa",
          "Bacillus cereus"
        ],
        "a": 0,
        "e": "Streptococcus agalactiae produces diffusible CAMP factor that synergizes with S. aureus beta-lysin (sphingomyelinase C) to lyse sheep erythrocytes in an arrowhead pattern.",
        "topicId": "u1-t14",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which bacterial pathogen is the causative agent of 'Strangles' in horses, characterized by acute purulent pharyngitis and suppurative abscessation of the submandibular and retropharyngeal lymph nodes?",
        "o": [
          "Streptococcus equi subsp. equi",
          "Streptococcus equi subsp. zooepidemicus",
          "Rhodococcus equi",
          "Corynebacterium pseudotuberculosis"
        ],
        "a": 0,
        "e": "Streptococcus equi subsp. equi (Lancefield group C) is the obligate equine pathogen causing Strangles, guttural pouch empyema, and metastatic 'bastard strangles'.",
        "topicId": "u1-t14",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Why is performing a post-mortem necropsy strictly contraindicated in an animal suspected to have died from Anthrax (Bacillus anthracis)?",
        "o": [
          "Exposure of vegetative bacilli in blood to atmospheric oxygen triggers rapid formation of resistant, persistent endospores",
          "The carcass blood is non-infectious until opened",
          "Bacilli multiply only in buried carcasses",
          "The carcass produces lethal gas when cut"
        ],
        "a": 0,
        "e": "B. anthracis bacilli sporulate upon exposure to atmospheric oxygen; opening the carcass contaminates the soil with spores that survive for decades.",
        "topicId": "u1-t15",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The tripartite exotoxin complex of Bacillus anthracis consists of Protective Antigen (PA) combined with which two catalytic subunits?",
        "o": [
          "Edema Factor (EF, adenylate cyclase) and Lethal Factor (LF, zinc metalloprotease)",
          "Alpha toxin and Beta toxin",
          "Exfoliative toxin A and B",
          "Pneumolysin and Streptolysin O"
        ],
        "a": 0,
        "e": "Anthrax toxin has three components: PA binds host receptors and translocates EF (calmodulin-dependent adenylate cyclase causing edema) and LF (cleaves MAPK kinases causing necrosis).",
        "topicId": "u1-t15",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "What characteristic in vitro reaction is demonstrated by Bacillus anthracis when cultured on nutrient agar containing 0.05–0.5 IU/mL of penicillin?",
        "o": [
          "'String of pearls' reaction (chains of spherical, swollen protoplasts)",
          "Medusa-head colonies",
          "Inverted fir-tree liquefaction",
          "CAMP arrowhead reaction"
        ],
        "a": 0,
        "e": "Low levels of penicillin inhibit cell wall synthesis in B. anthracis, causing young bacilli to round up into chains resembling a string of pearls.",
        "topicId": "u1-t15",
        "subSection": "u1-s3",
        "diff": 3
      },
      {
        "q": "Which Clostridium species is the etiological agent of Blackquarter (Blackleg) in cattle, characterized by crepitant swelling, dark dry gangrenous muscle, and a rancid butter odor?",
        "o": [
          "Clostridium chauvoei",
          "Clostridium septicum",
          "Clostridium perfringens",
          "Clostridium novyi"
        ],
        "a": 0,
        "e": "Clostridium chauvoei spores germinate in bruised, anoxic skeletal muscle, producing necrotizing toxins that cause emphysematous, crepitant myonecrosis with a rancid butyric odor.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "What is the cellular mechanism of action of tetanospasmin, the potent neurotoxin produced by Clostridium tetani?",
        "o": [
          "Retrograde axonal transport to spinal cord where it cleaves synaptobrevin, blocking inhibitory glycine and GABA release from Renshaw cells",
          "Inhibition of acetylcholine release at the peripheral neuromuscular junction",
          "Pore formation in vascular endothelial cells",
          "ADP-ribosylation of elongation factor 2"
        ],
        "a": 0,
        "e": "Tetanospasmin cleaves VAMP/synaptobrevin in inhibitory Renshaw interneurons, abolishing glycine and GABA release and resulting in spastic paralysis and tetanus.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "In contrast to tetanus, botulinum neurotoxin produced by Clostridium botulinum induces which clinical hallmark?",
        "o": [
          "Flaccid paralysis due to inhibition of acetylcholine release at peripheral neuromuscular junctions",
          "Spastic muscular tetany and lockjaw",
          "Severe watery enterotoxemic diarrhea",
          "Extensive subcutaneous edema"
        ],
        "a": 0,
        "e": "Botulinum toxin blocks presynaptic acetylcholine release at the motor endplate, resulting in generalized lower motor neuron flaccid paralysis (limberneck in birds, shaker foal syndrome).",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Pulpy kidney disease (Enterotoxemia in sheep) is primarily caused by which type of Clostridium perfringens producing the trypsin-activated epsilon protoxin?",
        "o": [
          "Clostridium perfringens Type D",
          "Clostridium perfringens Type A",
          "Clostridium perfringens Type B",
          "Clostridium perfringens Type C"
        ],
        "a": 0,
        "e": "Type D C. perfringens proliferates upon grain overeating; its epsilon protoxin is cleaved by trypsin into a potent vascular toxin that causes rapid post-mortem kidney autolysis.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The Nagler reaction used to identify Clostridium perfringens demonstrates inhibition of lecithinase (alpha-toxin) activity on egg yolk agar by:",
        "o": [
          "Specific Clostridium perfringens alpha-antitoxin",
          "Penicillin G",
          "Normal horse serum",
          "Zinc sulfate"
        ],
        "a": 0,
        "e": "In the Nagler reaction, opalescence (lecithinase) around C. perfringens on egg yolk agar is selectively inhibited on the half of the plate spread with alpha-antitoxin.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which organism causes 'Caseous Lymphadenitis' (CLA) in sheep and goats, characterized by 'onion-ring' lamellated caseous necrosis of superficial and visceral lymph nodes?",
        "o": [
          "Corynebacterium pseudotuberculosis",
          "Actinomyces bovis",
          "Mycobacterium bovis",
          "Rhodococcus equi"
        ],
        "a": 0,
        "e": "Corynebacterium pseudotuberculosis produces phospholipase D and a waxy lipid coat, establishing chronic granulomatous abscesses with concentric laminated 'onion-ring' rings.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Salmon-pink or coral-red mucoid colonies on nutrient agar isolated from a foal suffering from severe suppurative bronchopneumonia and pulmonary abscesses are characteristic of:",
        "o": [
          "Rhodococcus equi",
          "Streptococcus equi",
          "Pasteurella multocida",
          "Klebsiella pneumoniae"
        ],
        "a": 0,
        "e": "Rhodococcus equi is an obligate aerobe, partially acid-fast coccobacillus that produces distinctive salmon-pink/coral colonies and causes pyogranulomatous pneumonia in young foals.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Listeria monocytogenes exhibits which characteristic motility pattern when examined in a wet mount or semi-solid motility agar incubated at 22–25°C?",
        "o": [
          "Tumbling motility in broth and umbrella-shaped growth in semi-solid agar",
          "Darting motility",
          "Gliding motility",
          "Rapid swarming across the entire agar surface"
        ],
        "a": 0,
        "e": "L. monocytogenes expresses 1–4 peritrichous flagella at 20–25°C (exhibiting tumbling motility and sub-surface umbrella growth), but flagella synthesis is downregulated at 37°C.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which clinical hallmark is characteristically observed in pigs infected with Erysipelothrix rhusiopathiae (Swine Erysipelas)?",
        "o": [
          "Rhomboid or diamond-shaped erythematous cutaneous urticarial plaques",
          "Severe flaccid paralysis",
          "Profuse bloody mucoid diarrhea",
          "Severe subcutaneous crepitant gas formation"
        ],
        "a": 0,
        "e": "Erysipelothrix rhusiopathiae causes cutaneous vasculitis and thrombosis, producing pathognomonic raised, red-purple rhomboid or 'diamond-skin' lesions in pigs.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "In Lowenstein-Jensen (LJ) medium used for primary isolation of Mycobacterium bovis, what chemical compound acts as the selective inhibitor of non-mycobacterial contaminants?",
        "o": [
          "Malachite green",
          "Crystal violet",
          "Sodium azide",
          "Bile salts"
        ],
        "a": 0,
        "e": "Malachite green (0.025 g/100 mL) in LJ medium suppresses fast-growing Gram-positive and Gram-negative bacteria while tolerating slow-growing mycobacteria.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Johne's disease (Paratuberculosis) in ruminants is caused by Mycobacterium avium subsp. paratuberculosis, which requires which iron-chelating growth factor for in vitro culture?",
        "o": [
          "Mycobactin (Mycobactin J)",
          "Hemin (X factor)",
          "NAD (V factor)",
          "Erythritol"
        ],
        "a": 0,
        "e": "M. avium subsp. paratuberculosis cannot synthesize the iron-transporting compound mycobactin and requires supplementation with exogenous Mycobactin J for in vitro growth.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 3
      },
      {
        "q": "In the Comparative Cervical Tuberculin (CCT) test in cattle, what two tuberculin purified protein derivatives (PPD) are injected at separate sites in the mid-cervical region?",
        "o": [
          "Bovine PPD (PPD-B) and Avian PPD (PPD-A)",
          "Bovine PPD and Human PPD",
          "PPD-B and Mallein",
          "PPD-B and Brucellin"
        ],
        "a": 0,
        "e": "The CCT test compares skin-thickness reactions to Bovine PPD and Avian PPD at 72 hours to differentiate true M. bovis infection from cross-reactivity with environmental mycobacteria.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Which fimbrial adhesin is most commonly associated with Enterotoxigenic Escherichia coli (ETEC) strains causing neonatal watery diarrhea (white scours) in calves?",
        "o": [
          "F5 (K99)",
          "F4 (K88)",
          "F18",
          "F41"
        ],
        "a": 0,
        "e": "F5 (formerly K99) pilus antigen mediates adherence of ETEC to specific glycoprotein receptors on the microvilli of small intestinal enterocytes in neonatal calves.",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "On MacConkey agar, Escherichia coli colonies appear bright pink due to the fermentation of lactose and absorption of which pH indicator?",
        "o": [
          "Neutral red",
          "Phenol red",
          "Bromothymol blue",
          "Methyl red"
        ],
        "a": 0,
        "e": "MacConkey agar uses neutral red as a pH indicator; lactose fermentation produces acid, causing neutral red to turn deep pink/red.",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "What characteristic colony appearance does Escherichia coli exhibit on Eosin Methylene Blue (EMB) agar?",
        "o": [
          "Dark purple colonies with a distinctive green metallic sheen",
          "Colorless translucent colonies",
          "Bright yellow mucoid colonies",
          "Snow-white chalky colonies"
        ],
        "a": 0,
        "e": "Rapid vigorous fermentation of lactose by E. coli precipitates the eosin-methylene blue dye complex, producing an unmistakable iridescent green metallic sheen.",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which Salmonella serotype is non-motile, host-adapted to poultry, and causes 'Fowl Typhoid' characterized by bronze-colored liver enlargement?",
        "o": [
          "Salmonella enterica serovar Gallinarum",
          "Salmonella enterica serovar Typhimurium",
          "Salmonella enterica serovar Enteritidis",
          "Salmonella enterica serovar Dublin"
        ],
        "a": 0,
        "e": "Salmonella Gallinarum is non-motile and causes Fowl Typhoid in adult poultry, marked by greenish-bronze enlarged livers and focal necrotic hepatitis.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The Kauffmann-White scheme classifies Salmonella serotypes based on the antigenic diversity of which surface structures?",
        "o": [
          "Somatic O antigen, flagellar H antigen (phases 1 & 2), and capsular Vi antigen",
          "Capsular K antigen and fimbriae alone",
          "Exotoxin serotypes and enterotoxin types",
          "Cell wall teichoic acids and peptidoglycan"
        ],
        "a": 0,
        "e": "The Kauffmann-White scheme categorizes >2,500 Salmonella serovars based on lipopolysaccharide somatic O antigens and biphasic flagellar protein H antigens.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "What is the standard IMViC reaction pattern for pure cultures of Escherichia coli?",
        "o": [
          "++-- (Indole +, Methyl Red +, Voges-Proskauer -, Citrate -)",
          "--++",
          "+-+-",
          "-+-+"
        ],
        "a": 0,
        "e": "E. coli produces indole from tryptophan (++), ferments mixed acids (MR +), does not form acetoin (VP -), and cannot use citrate as sole carbon source (Citrate -).",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "What is the characteristic IMViC biochemical profile of Klebsiella pneumoniae?",
        "o": [
          "--++ (Indole -, Methyl Red -, Voges-Proskauer +, Citrate +)",
          "++--",
          "+-+-",
          "+--+"
        ],
        "a": 0,
        "e": "Klebsiella pneumoniae is indole-negative, methyl red-negative, VP-positive (acetoin producer), and citrate-positive (--++), exactly opposite to typical E. coli.",
        "topicId": "u1-t21",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Pasteurella multocida exhibits which classic staining pattern in blood smears from animals that died acutely of Hemorrhagic Septicemia (HS)?",
        "o": [
          "Bipolar staining ('safety-pin' appearance) with methylene blue or Giemsa",
          "Beaded acid-fast bacilli",
          "Gram-positive chains with square ends",
          "Club-shaped palisades with metachromatic granules"
        ],
        "a": 0,
        "e": "Pasteurella multocida shows dense accumulation of dye at both poles with a clear unstained center, producing a 'safety-pin' appearance in peripheral blood smears.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Which Carter's capsular type of Pasteurella multocida is the predominant cause of Asian bovine Hemorrhagic Septicemia (HS)?",
        "o": [
          "Capsular Type B (Heddleston serotype B:2)",
          "Capsular Type A",
          "Capsular Type D",
          "Capsular Type E"
        ],
        "a": 0,
        "e": "Carter's Type B (specifically B:2) causes Asian hemorrhagic septicemia in cattle and buffaloes; Type E causes African HS; Type A causes fowl cholera.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which organism, formerly classified as Pasteurella haemolytica, produces a ruminant leukocyte-specific leukotoxin and causes 'Shipping Fever' (bovine pneumonic pasteurellosis)?",
        "o": [
          "Mannheimia haemolytica",
          "Bibersteinia trehalosi",
          "Histophilus somni",
          "Actinobacillus pleuropneumoniae"
        ],
        "a": 0,
        "e": "Mannheimia haemolytica (serotype A1) expresses a potent repeats-in-toxin (RTX) leukotoxin that specifically lyses bovine alveolar macrophages and neutrophils in shipping fever.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The marked tissue tropism of Brucella abortus for the pregnant bovine placenta and fetal cotyledons is primarily driven by the high concentration of which growth stimulant?",
        "o": [
          "Erythritol",
          "Glucose-6-phosphate",
          "Lactose",
          "Cholesterol"
        ],
        "a": 0,
        "e": "Erythritol, a four-carbon polyol synthesized in high concentrations in ungulate placenta and chorionic trophoblasts, preferentially stimulates the growth of Brucella.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "In the Milk Ring Test (ABRT) for Brucella surveillance, what indicates a positive reaction in a pooled whole milk sample?",
        "o": [
          "A distinct blue or purple ring in the risen cream layer with white milk below",
          "Uniformly blue milk with a white cream layer",
          "Formation of a dark yellow precipitate at the bottom of the tube",
          "A bright red disc floating on top of the milk"
        ],
        "a": 0,
        "e": "In the Milk Ring Test, hematoxylin-stained Brucella antigen binds to fat-associated secretory IgA antibodies; agglutinated complexes rise with cream globules to form a blue top ring.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which Brucella species is the most invasive and hazardous to humans, causing severe undulant fever (Malta fever) and transmitted predominantly by sheep and goats?",
        "o": [
          "Brucella melitensis",
          "Brucella abortus",
          "Brucella suis",
          "Brucella ovis"
        ],
        "a": 0,
        "e": "Brucella melitensis is the most pathogenic and zoonotic Brucella species; unpasteurized goat milk or cheese is a major vehicle of transmission.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which microaerophilic, curved, comma- or gull wing-shaped bacterium is transmitted venereally in cattle, causing early embryonic death, repeat breeding, and infertility?",
        "o": [
          "Campylobacter fetus subsp. venerealis",
          "Campylobacter jejuni",
          "Helicobacter pylori",
          "Brucella abortus"
        ],
        "a": 0,
        "e": "Campylobacter fetus subsp. venerealis colonizes the preputial crypts of bulls and produces subacute endometritis and early embryonic mortality in cows.",
        "topicId": "u1-t24",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Infectious Bovine Keratoconjunctivitis (IBK or 'Pinkeye') in cattle is caused by which fimbriated Gram-negative coccobacillus, often transmitted by the face fly (Musca autumnalis)?",
        "o": [
          "Moraxella bovis",
          "Pasteurella multocida",
          "Haemophilus somnus",
          "Mannheimia haemolytica"
        ],
        "a": 0,
        "e": "Moraxella bovis uses type IV fimbriae to adhere to corneal epithelial cells, producing an RTX corneal hemolysin that ulcerates the cornea and causes blindness.",
        "topicId": "u1-t25",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "What allergic hypersensitivity test is the official diagnostic standard for detecting Glanders (Burkholderia mallei) in equines?",
        "o": [
          "Intradermo-palpebral Mallein test",
          "Ascoli test",
          "Tuberculin skin test",
          "Strauss test"
        ],
        "a": 0,
        "e": "The intradermo-palpebral mallein test involves injecting mallein into the lower eyelid; positive cases exhibit marked palpebral edema and purulent conjunctival discharge at 48 hours.",
        "topicId": "u1-t26",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The Strauss reaction, observed following intraperitoneal inoculation of Burkholderia mallei into male guinea pigs, consists of:",
        "o": [
          "Severe purulent periorchitis and testicular swelling with scrotal ulceration",
          "Generalized flaccid paralysis",
          "Extensive subcutaneous crepitant gas formation",
          "Enlargement and blackening of the spleen"
        ],
        "a": 0,
        "e": "The Strauss reaction is severe purulent inflammation of the tunica vaginalis and testicles in male guinea pigs within 3–4 days after IP inoculation with B. mallei.",
        "topicId": "u1-t26",
        "subSection": "u1-s4",
        "diff": 3
      },
      {
        "q": "Pseudomonas aeruginosa produces which phenazine pigment that imparts a characteristic blue-green color and possesses redox-active cytotoxic properties?",
        "o": [
          "Pyocyanin",
          "Prodigiosin",
          "Violacein",
          "Pyoverdine alone"
        ],
        "a": 0,
        "e": "Pyocyanin is a blue-green chloroform-soluble phenazine toxin produced by P. aeruginosa that generates reactive oxygen species and damages host cilia.",
        "topicId": "u1-t27",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Which anaerobic, non-sporing, pleomorphic Gram-negative filamentous rod produces a potent leukotoxin and causes 'Calf Diphtheria' (necrotic laryngitis) and hepatic abscesses in feedlot cattle?",
        "o": [
          "Fusobacterium necrophorum",
          "Dichelobacter nodosus",
          "Bacteroides fragilis",
          "Clostridium perfringens"
        ],
        "a": 0,
        "e": "Fusobacterium necrophorum produces leukotoxin and endotoxin, causing necrotic lesions in mucous membranes (calf diphtheria) and metastatic liver abscesses secondary to rumenitis.",
        "topicId": "u1-t28",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "In contagious ovine foot rot, Dichelobacter nodosus functions as the primary transmitting and underrunning agent by producing which extracellular enzyme?",
        "o": [
          "Elastase (heat-stable protease)",
          "Lecithinase",
          "Coagulase",
          "Hyaluronidase"
        ],
        "a": 0,
        "e": "Virulent D. nodosus produces heat-stable acidic elastase and extracellular proteases that digest hoof horn keratin and soft tissue, underrunning the hoof sole.",
        "topicId": "u1-t28",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Under dark-field microscopy, Leptospira interrogans is distinguished by which morphological feature?",
        "o": [
          "Extremely thin, tightly coiled spirals with one or both ends bent into a distinct hook",
          "Broad loose irregular waves without hooks",
          "Rigid straight rods with terminal spores",
          "Pleomorphic coccobacilli in chains"
        ],
        "a": 0,
        "e": "Leptospira measures 0.1 x 6–20 um with tight regular coils and hooked terminal ends resembling a question mark or umbrella handle.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "What specialized liquid or semi-solid culture medium incorporating rabbit serum, bovine serum albumin, and polysorbate (Tween 80) is standard for isolating Leptospira?",
        "o": [
          "Ellinghausen-McCullough-Johnson-Harris (EMJH) medium",
          "Lowenstein-Jensen medium",
          "PPLO broth",
          "Sabouraud dextrose broth"
        ],
        "a": 0,
        "e": "EMJH medium contains Tween 80 as a source of long-chain fatty acids (the sole energy and carbon source for Leptospira) and BSA to bind toxic free fatty acids.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "What serological assay is regarded as the international gold-standard reference test for diagnosis and serovar identification of Leptospira?",
        "o": [
          "Microscopic Agglutination Test (MAT)",
          "Rose Bengal Plate Test",
          "Standard Tube Agglutination Test",
          "Direct Immunofluorescence Assay"
        ],
        "a": 0,
        "e": "The MAT measures agglutination and lysis of live leptospiral reference cultures by patient sera under dark-field microscopy, determining serovar-specific titers.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Which spirochete is the causative agent of Avian Spirochetosis ('Tick Fever' in chickens and turkeys), characterized by severe anemia, green diarrhea, and marked splenomegaly with mottling?",
        "o": [
          "Borrelia anserina",
          "Borrelia burgdorferi",
          "Borrelia theileri",
          "Treponema paraluiscuniculi"
        ],
        "a": 0,
        "e": "Borrelia anserina is transmitted by the soft fowl tick Argas persicus; infected birds display severe depression, hyperthermia, yellowish-green feces, and huge mottled spleens.",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "What biological vector transmits Borrelia anserina to poultry flocks?",
        "o": [
          "Argas persicus (Soft fowl tick)",
          "Dermanyssus gallinae (Red mite)",
          "Menacanthus stramineus (Shaft louse)",
          "Musca domestica (House fly)"
        ],
        "a": 0,
        "e": "Argas persicus (the blue bug or fowl tick) is the biological vector and reservoir; it transmits B. anserina through its salivary secretions during nocturnal blood feeding.",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Lyme borreliosis in dogs, horses, and humans is caused by Borrelia burgdorferi and is transmitted by which genus of hard ticks?",
        "o": [
          "Ixodes (e.g., Ixodes scapularis, Ixodes ricinus)",
          "Rhipicephalus",
          "Amblyomma",
          "Hyalomma"
        ],
        "a": 0,
        "e": "Hard ticks of the genus Ixodes (black-legged ticks) transmit B. burgdorferi after attachment and feeding for >=24–48 hours.",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Rabbit Syphilis (Venereal spirochetosis or 'vent disease'), characterized by crusting ulcerations of the perineum and genitalia in domestic rabbits, is caused by:",
        "o": [
          "Treponema paraluiscuniculi",
          "Treponema pallidum",
          "Borrelia burgdorferi",
          "Leptospira interrogans"
        ],
        "a": 0,
        "e": "Treponema paraluiscuniculi is an unculturable spirochete transmitted venereally among rabbits, producing papules, vesicles, and scabs on external genitalia and muzzle.",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "What microscopic colony morphology is uniquely diagnostic of Mycoplasma species when grown on solid PPLO agar and viewed under low-power magnification?",
        "o": [
          "'Fried-egg' appearance (dense central zone penetrating agar surrounded by a flat translucent peripheral zone)",
          "Medusa-head colony",
          "String of pearls colony",
          "Rough cauliflower-like colony"
        ],
        "a": 0,
        "e": "Mycoplasma colonies penetrate the agar at their center and grow laterally at the surface, creating a classic fried-egg appearance best seen under a stereomicroscope.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Which major respiratory pathogen causes Contagious Bovine Pleuropneumonia (CBPP), marked by unilateral serofibrinous pleuropneumonia, marbled lung parenchyma, and necrotic sequestra?",
        "o": [
          "Mycoplasma mycoides subsp. mycoides",
          "Mycoplasma bovis",
          "Pasteurella multocida",
          "Mannheimia haemolytica"
        ],
        "a": 0,
        "e": "Mycoplasma mycoides subsp. mycoides causes CBPP, producing massive interlobular edema, hepatization leading to a 'marbled' lung appearance, and encapsulated sequestra.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Contagious Caprine Pleuropneumonia (CCPP), a devastating classical pleuropneumonia restricted to goats, is caused by which organism?",
        "o": [
          "Mycoplasma capricolum subsp. capripneumoniae",
          "Mycoplasma agalactiae",
          "Mycoplasma mycoides subsp. capri",
          "Mycoplasma putrefaciens"
        ],
        "a": 0,
        "e": "Mycoplasma capricolum subsp. capripneumoniae (formerly F38-like biotype) is the primary cause of true CCPP, characterized by severe fibrinous pleuropneumonia.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Why are Mycoplasma species entirely unaffected by penicillin, ampicillin, cephalosporins, and other beta-lactam antibiotics?",
        "o": [
          "They completely lack a peptidoglycan cell wall and penicillin-binding proteins",
          "They produce hyper-potent beta-lactamases that rapidly destroy all penicillins",
          "Their outer membrane porins exclude beta-lactam molecules",
          "They active efflux all beta-lactams within seconds"
        ],
        "a": 0,
        "e": "Beta-lactam antibiotics target cell wall peptidoglycan transpeptidases; because Mycoplasma lack peptidoglycan entirely, they possess complete intrinsic resistance.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "In the developmental cycle of the genus Chlamydia, which morphological form represents the small, metabolically inactive, extracellular, infectious unit?",
        "o": [
          "Elementary Body (EB)",
          "Reticulate Body (RB)",
          "Initial Body",
          "Inclusion Body"
        ],
        "a": 0,
        "e": "The Elementary Body (EB, 0.2–0.3 um) has a rigid cross-linked protein envelope, enabling it to survive extracellularly and attach to host cells to initiate infection.",
        "topicId": "u1-t32",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "In the Chlamydia developmental cycle, what is the intracellular, metabolically active, non-infectious form that divides by binary fission inside host cytoplasmic vacuoles?",
        "o": [
          "Reticulate Body (RB)",
          "Elementary Body (EB)",
          "Morula",
          "Spheroplast"
        ],
        "a": 0,
        "e": "Inside the host phagosome, EBs differentiate into Reticulate Bodies (RBs, 0.8–1.0 um), which replicate by binary fission before condensing back into infective EBs.",
        "topicId": "u1-t32",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Enzootic Abortion of Ewes (EAE), characterized by late-term abortion and extensive necrotic placentitis with dirty reddish-brown cotyledons, is caused by:",
        "o": [
          "Chlamydia abortus",
          "Chlamydia psittaci",
          "Brucella ovis",
          "Coxiella burnetii"
        ],
        "a": 0,
        "e": "Chlamydia abortus selectively invades placental trophoblasts during late gestation, inducing diffuse necrotic placentitis, edema, and fetal death in sheep and goats.",
        "topicId": "u1-t32",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Which zoonotic pathogen is the etiological agent of Q fever in animals and humans, surviving standard environmental stresses due to a spore-like Small Cell Variant (SCV)?",
        "o": [
          "Coxiella burnetii",
          "Rickettsia rickettsii",
          "Anaplasma marginale",
          "Ehrlichia canis"
        ],
        "a": 0,
        "e": "Coxiella burnetii produces small cell variants (SCV) that resist heat, drying, and disinfectants, contaminating sheep and goat milk, placenta, and birth fluids.",
        "topicId": "u1-t33",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Which intra-erythrocytic rickettsial organism causes bovine anaplasmosis ('Gall Sickness'), manifested by severe progressive anemia, fever, and jaundice WITHOUT hemoglobinuria?",
        "o": [
          "Anaplasma marginale",
          "Babesia bigemina",
          "Theileria annulata",
          "Trypanosoma evansi"
        ],
        "a": 0,
        "e": "Anaplasma marginale invades mature erythrocytes; infected RBCs undergo extravascular phagocytosis in the spleen, causing severe anemia and icterus without free hemoglobin in urine.",
        "topicId": "u1-t34",
        "subSection": "u1-s5",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Gram-negative bacteria possess a thick multi-layered peptidoglycan layer that contains abundant lipoteichoic acids.",
        "a": false,
        "e": "False. Gram-negative bacteria possess a thin (2–7 nm) single-sheet peptidoglycan layer and completely lack teichoic or lipoteichoic acids.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Bacterial endospores are reproductive structures that result in net multiplication of bacterial numbers.",
        "a": false,
        "e": "False. Endospores are dormant survival structures; one vegetative cell forms one endospore, and one endospore germinates into one vegetative cell (no net multiplication).",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Lipopolysaccharide (LPS), also known as endotoxin, is exclusively located in the outer membrane of Gram-negative bacteria.",
        "a": true,
        "e": "True. LPS forms the outer leaflet of the asymmetric outer membrane of Gram-negative bacteria; Lipid A represents the toxic endotoxin moiety.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "In Gram staining, over-decolorization with acetone-alcohol can cause Gram-positive bacteria to appear Gram-negative (pink/red).",
        "a": true,
        "e": "True. Excessive washing with decolorizer strips crystal violet even from thick Gram-positive walls, causing them to take up safranin and appear falsely Gram-negative.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "India ink preparation is a positive staining technique where the bacterial capsule absorbs the acidic colloidal carbon particles.",
        "a": false,
        "e": "False. India ink is a negative stain; carbon particles are repelled by the negative charges of the capsule, producing a clear refractive halo against a dark background.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "Mesosomes are true specialized eukaryotic-like cytoplasmic organelles observed in live, unfixed bacterial cells.",
        "a": false,
        "e": "False. Electron microscopic and cryo-fixation studies have proven that mesosomes are chemical fixation artifacts formed by invagination of damaged plasma membranes.",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Peritrichous bacteria possess flagella projecting in all directions over the entire surface of the cell body.",
        "a": true,
        "e": "True. Organisms like Proteus mirabilis and Salmonella enterica possess peritrichous flagella distributed across the whole cell body.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "L-forms of bacteria are cell wall-deficient bacterial variants capable of replication in hypertonic media.",
        "a": true,
        "e": "True. L-forms (named after the Lister Institute) lose peptidoglycan through penicillin or lysozyme action but survive and divide in osmotically protective environments.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "In the Schaeffer-Fulton spore stain, vegetative cells stain bright green while spores stain red.",
        "a": false,
        "e": "False. Endospores retain the primary dye malachite green (appearing green), while vegetative cells decolorize with water and counterstain pink/red with safranin.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "During the lag phase of bacterial growth, cells are metabolically quiescent and do not synthesize any enzymes or macromolecules.",
        "a": false,
        "e": "False. In the lag phase, bacteria are intensely active metabolically, synthesizing enzymes, ATP, and structural components to adapt to new nutrients, though cell number does not increase.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Bacteriostatic antibiotics kill 99.9% of bacteria within a 24-hour in vitro incubation period.",
        "a": false,
        "e": "False. Bacteriostatic agents merely inhibit growth and replication without killing the organism, relying on the host immune system for clearance; bactericidal agents achieve >=99.9% killing.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Extensive beta-lactamase production can be counteracted clinically by combining penicillins with beta-lactamase inhibitors such as clavulanic acid or sulbactam.",
        "a": true,
        "e": "True. Clavulanic acid acts as a suicide inhibitor of beta-lactamase enzymes, sparing amoxicillin from hydrolysis (e.g., Co-amoxiclav).",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Bacterial conjugation requires living donor and recipient cells to establish direct physical contact via a conjugative sex pilus.",
        "a": true,
        "e": "True. Unlike transformation and transduction, conjugation is strictly contact-dependent and driven by the plasmid-encoded tra operon.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Macrolide resistance mediated by the erm gene occurs through active enzymatic degradation of the 14-membered lactone ring.",
        "a": false,
        "e": "False. The erm (erythromycin ribosome methylation) genes encode methyltransferases that methylate adenine in 23S rRNA (50S subunit), blocking drug binding without degrading the drug.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Facultative anaerobes generate energy via aerobic respiration in the presence of oxygen, but can switch to fermentation or anaerobic respiration in its absence.",
        "a": true,
        "e": "True. Most enteric pathogens (E. coli, Salmonella) are facultative anaerobes, growing more rapidly with O2 but surviving and dividing in anoxic gut environments.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "A minimum bactericidal concentration (MBC) is by definition always lower than the minimum inhibitory concentration (MIC) for any given organism.",
        "a": false,
        "e": "False. MBC is either equal to or higher than MIC (typically 2- to 4-fold higher); it can never be lower than the concentration required to inhibit growth.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Bacterial plasmids are self-replicating, extrachromosomal circular dsDNA molecules that usually carry non-essential genes conferring selective survival advantages.",
        "a": true,
        "e": "True. Plasmids replicate independently of the bacterial chromosome and encode traits such as antimicrobial resistance, bacteriocins, and exotoxins.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "In disc diffusion testing, a larger zone of inhibition around an antibiotic disc always indicates that the drug has greater in vivo clinical efficacy than one with a smaller zone.",
        "a": false,
        "e": "False. Zone diameter depends on drug molecular weight, solubility, agar diffusion rate, and protein binding; interpretation must follow CLSI breakpoint tables, not raw diameter comparisons.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Staphylococcus epidermidis is coagulase-positive and consistently exhibits vigorous beta-hemolysis on sheep blood agar.",
        "a": false,
        "e": "False. S. epidermidis is coagulase-negative (CoNS) and typically non-hemolytic on sheep blood agar, functioning primarily as a commensal or biofilm former on implants.",
        "topicId": "u1-t13",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Ascoli's thermoprecipitation test is a rapid diagnostic ring precipitation test used to detect heat-stable Anthrax antigens in decaying animal hides or tissues.",
        "a": true,
        "e": "True. Ascoli's test detects boiling-resistant B. anthracis polysaccharide antigen in extracts of putrefied hides using hyperimmune rabbit anti-anthrax serum.",
        "topicId": "u1-t15",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Clostridium tetani spores are characteristically round and situated terminally, giving the bacillus a classic 'drumstick' or 'tennis-racket' appearance.",
        "a": true,
        "e": "True. The round, terminal, bulging endospore creates the classic drumstick morphology of C. tetani on microscopic examination.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "Listeria monocytogenes can readily proliferate within host phagocytes by using the pore-forming hemolysin listeriolysin O (LLO) to escape from phagolysosomes into the host cytosol.",
        "a": true,
        "e": "True. LLO lyses the phagosomal membrane at acidic pH, allowing L. monocytogenes to escape into the cytosol and spread via actin polymerization (ActA).",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Erysipelothrix rhusiopathiae is a Gram-positive rod that is completely negative for hydrogen sulfide (H2S) production in Triple Sugar Iron (TSI) agar.",
        "a": false,
        "e": "False. Erysipelothrix rhusiopathiae is uniquely H2S-positive among non-sporing Gram-positive bacilli, producing blackening along the stab line in TSI agar.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Mycobacterium bovis colonies on Lowenstein-Jensen medium are typically rough, crumbly, and pigmented a bright bright-yellow within 24 hours of incubation.",
        "a": false,
        "e": "False. M. bovis is a slow-growing organism requiring 3 to 8 weeks for growth, forming small, smooth, off-white to cream-colored non-pigmented colonies.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Greasy pig disease (exudative epidermitis) in suckling and weaned piglets is caused by exfoliative toxin-producing strains of Staphylococcus hyicus.",
        "a": true,
        "e": "True. Staphylococcus hyicus produces exfoliative epidermolytic toxins that cleave desmoglein-1, causing generalized dark brown greasy epidermal exudation.",
        "topicId": "u1-t13",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Black disease (infectious necrotic hepatitis) in sheep is triggered by migrating immature liver flukes (Fasciola hepatica) creating anaerobic necrosis where Clostridium novyi Type B spores germinate.",
        "a": true,
        "e": "True. Liver fluke tunnels create localized hepatic anoxia, triggering dormant C. novyi Type B spores to germinate and produce lethal alpha-toxin.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Streptococcus pneumoniae is bile-insoluble and completely resistant to ethylhydrocupreine hydrochloride (optochin).",
        "a": false,
        "e": "False. S. pneumoniae is specifically optochin-sensitive (zone >=14 mm) and lysed by bile salts (bile solubility positive), differentiating it from viridans streptococci.",
        "topicId": "u1-t14",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Pasteurella multocida grows luxuriantly on MacConkey agar, forming bright pink lactose-fermenting colonies.",
        "a": false,
        "e": "False. Pasteurella multocida is completely inhibited by bile salts and crystal violet in MacConkey agar; failure to grow on MacConkey differentiates it from Mannheimia and enteric rods.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Rose Bengal Plate Test (RBPT) is an acidified antigen agglutination test (pH 3.65) designed to minimize non-specific agglutination while preserving diagnostic IgG1 antibody reactivity in brucellosis.",
        "a": true,
        "e": "True. At pH 3.65, non-specific IgM and agglutinins are inhibited, allowing specific Brucella-binding IgG1 to form visible agglutinates within 4 minutes.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Salmonella Pullorum causes acute pullorum disease (bacillary white diarrhea) in young chicks and is transmitted vertically through the egg.",
        "a": true,
        "e": "True. S. Pullorum infects the ovary of carrier hens, leading to vertical transovarial transmission into hatching chicks with high mortality.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Campylobacter jejuni grows optimally under standard atmospheric air containing 21% oxygen at a temperature of 25°C.",
        "a": false,
        "e": "False. C. jejuni is thermophilic (grows at 42°C, not 25°C) and microaerophilic (requiring 5% O2, 10% CO2, 85% N2).",
        "topicId": "u1-t24",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Burkholderia mallei is a highly motile bacterium propelled by numerous peritrichous flagella.",
        "a": false,
        "e": "False. Unlike most pseudomonads and Burkholderia pseudomallei (which is motile), Burkholderia mallei is completely non-motile.",
        "topicId": "u1-t26",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Pseudomonas aeruginosa is cytochrome oxidase-positive, which differentiates it from members of the family Enterobacteriaceae.",
        "a": true,
        "e": "True. P. aeruginosa is oxidase-positive (turns tetramethyl-p-phenylenediamine reagent deep purple in 10 seconds), whereas all Enterobacteriaceae are oxidase-negative.",
        "topicId": "u1-t27",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Shiga toxin-producing Escherichia coli (STEC / EHEC) serotype O157:H7 typically ferments sorbitol within 24 hours on Sorbitol MacConkey (SMAC) agar.",
        "a": false,
        "e": "False. E. coli O157:H7 is sorbitol-negative (colorless colonies on SMAC agar at 24 hr), unlike >95% of commensal E. coli which ferment sorbitol (pink colonies).",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Mannheimia haemolytica colonies produce a distinct narrow zone of beta-hemolysis on ruminant blood agar and can grow on MacConkey agar.",
        "a": true,
        "e": "True. M. haemolytica produces clear beta-hemolysis on sheep blood agar and pinpoint lactose-fermenting colonies on MacConkey agar, distinguishing it from P. multocida.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Brucella ovis is a smooth Brucella species that expresses abundant O-polysaccharide chains on its outer membrane lipopolysaccharide.",
        "a": false,
        "e": "False. Brucella ovis and Brucella canis are naturally rough species lacking O-polysaccharide chains, giving rough colonies on crystal violet and 2-mercaptoethanol tests.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 3
      },
      {
        "q": "Fusobacterium necrophorum is an obligate aerobe that can only proliferate on the well-oxygenated surfaces of epithelial tissues.",
        "a": false,
        "e": "False. Fusobacterium necrophorum is an obligate anaerobe; it requires low oxidation-reduction potential (Eh) and necrotic, devitalized tissue to initiate infection.",
        "topicId": "u1-t28",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Leptospires can penetrate intact host mucous membranes or abraded skin and rapidly disseminate hematogenously to the kidneys and liver.",
        "a": true,
        "e": "True. Motile leptospires penetrate moist mucosal barriers or water-softened skin, producing leptospiremia and localizing in renal proximal convoluted tubules.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Avian spirochetosis caused by Borrelia anserina is characterized by profound thrombocytopenia and a remarkably shrunken, atrophic pale spleen at necropsy.",
        "a": false,
        "e": "False. Marked splenomegaly (2 to 6 times normal size) with prominent mottled, marbled or petechiated parenchyma is pathognomonic of B. anserina infection.",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Mycoplasmas require sterols (such as cholesterol) in their culture media because sterols are essential for stabilizing their single cytoplasmic membrane against osmotic lysis.",
        "a": true,
        "e": "True. Because they lack a rigid peptidoglycan wall, mycoplasmas incorporate exogenously supplied cholesterol into their membrane bilayer to provide mechanical stability.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Chlamydia psittaci infection in psittacine birds and turkeys is non-zoonotic and presents zero respiratory risk to human veterinarians or poultry workers.",
        "a": false,
        "e": "False. C. psittaci is a dangerous zoonotic pathogen; aerosol inhalation of dried bird droppings or feather dust causes severe psittacosis (atypical pneumonia) in humans.",
        "topicId": "u1-t32",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Coxiella burnetii is so heat-resistant that standard commercial milk high-temperature short-time (HTST) pasteurization protocols (71.7°C for 15 seconds) were specifically designed to ensure its destruction.",
        "a": true,
        "e": "True. C. burnetii is the most heat-tolerant non-spore-forming pathogen in raw milk; industrial pasteurization parameters are calibrated to achieve complete thermal inactivation of C. burnetii.",
        "topicId": "u1-t33",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Anaplasma marginale causes severe intravascular hemolysis with massive hemoglobinuria, resulting in bright red urine in adult dairy cattle.",
        "a": false,
        "e": "False. Anaplasmosis causes extravascular hemolysis (phagocytosis of parasitized RBCs in the spleen), producing marked icterus and anemia WITHOUT hemoglobinuria ('redwater' is seen in Babesia).",
        "topicId": "u1-t34",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Ehrlichia canis replicates inside canine circulating monocytes, forming distinctive membrane-bound intracytoplasmic microcolony clusters known as morulae.",
        "a": true,
        "e": "True. In Romanowsky-stained blood or buffy coat smears, E. canis appears as dark blue or purple mulberries (morulae) inside the cytoplasm of infected monocytes.",
        "topicId": "u1-t34",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Fontana's silver impregnation staining stains spirochetes brownish-black by reducing and depositing metallic silver salts onto the bacterial surface.",
        "a": true,
        "e": "True. Because spirochetes are too thin to resolve well under standard bright-field optics with basic dyes, silver impregnation coats the cells, increasing their optical diameter.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 2
      }
    ],
    "fib": [
      {
        "q": "The lipid anchor of Gram-negative lipopolysaccharide responsible for endotoxic shock and pyrogenicity is known as ______.",
        "a": [
          "lipid a",
          "lipida"
        ],
        "a_display": "Lipid A",
        "e": "Lipid A consists of phosphorylated glucosamine disaccharides linked to fatty acids, triggering massive release of TNF-alpha and IL-1 from macrophages.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The alternating amino sugars that form the glycan backbone of bacterial peptidoglycan are N-acetylglucosamine (NAG) and ______.",
        "a": [
          "n-acetylmuramic acid",
          "n acetylmuramic acid",
          "nam"
        ],
        "a_display": "N-acetylmuramic acid (NAM)",
        "e": "NAM carries the lactyl ether side chain to which the tetrapeptide stems are attached for cross-linking.",
        "topicId": "u1-t02",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The primary stain utilized in the Ziehl-Neelsen acid-fast staining procedure is ______.",
        "a": [
          "carbol fuchsin",
          "carbolfuchsin",
          "strong carbol fuchsin"
        ],
        "a_display": "Carbol fuchsin",
        "e": "Carbol fuchsin is a phenolic solution of basic fuchsin that penetrates the lipid-rich mycolic acid cell wall when assisted by steam heat.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The bacterial motility test in which a drop of culture is suspended beneath a coverslip over a concave cavity slide is the ______ preparation.",
        "a": [
          "hanging drop",
          "hanging-drop"
        ],
        "a_display": "Hanging drop",
        "e": "Hanging drop examination distinguishes true directional bacterial motility from non-directional Brownian motion.",
        "topicId": "u1-t05",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The toxic oxygen radical converting enzyme present in obligate aerobes that converts superoxide radicals (O2-) into hydrogen peroxide and molecular oxygen is ______.",
        "a": [
          "superoxide dismutase",
          "sod"
        ],
        "a_display": "Superoxide dismutase (SOD)",
        "e": "Superoxide dismutase protects aerobic cells from toxic superoxide radicals generated during respiratory electron transport.",
        "topicId": "u1-t07",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The specialized, hollow proteinaceous appendage through which conjugative donor bacteria transfer plasmid DNA to recipient cells is the ______.",
        "a": [
          "sex pilus",
          "f pilus",
          "conjugative pilus",
          "f-pilus"
        ],
        "a_display": "Sex pilus (F-pilus)",
        "e": "The sex pilus, encoded by the tra operon on the F plasmid, establishes physical contact between F+ and F- cells.",
        "topicId": "u1-t03",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "Bacterial endospore cortex consists of a loosely cross-linked layer of ______.",
        "a": [
          "peptidoglycan",
          "murein"
        ],
        "a_display": "Peptidoglycan",
        "e": "The spore cortex contains modified peptidoglycan lacking peptide side chains, which maintains core dehydration and heat resistance.",
        "topicId": "u1-t04",
        "subSection": "u1-s1",
        "diff": 3
      },
      {
        "q": "The counterstain routinely applied at the conclusion of the Gram staining technique is ______.",
        "a": [
          "safranin",
          "basic fuchsin",
          "dilute carbol fuchsin"
        ],
        "a_display": "Safranin",
        "e": "Safranin stains decolorized Gram-negative cells pink or red without masking the purple crystal violet in Gram-positive cells.",
        "topicId": "u1-t06",
        "subSection": "u1-s1",
        "diff": 1
      },
      {
        "q": "The bacterial cell arrangement described as cocci dividing in three perpendicular planes to form regular cubical packets of eight is termed ______.",
        "a": [
          "sarcina",
          "sarcinae"
        ],
        "a_display": "Sarcina",
        "e": "Sarcina divides in three regular planes to generate cuboidal packets of 8, 16, or 32 cells (e.g., Sarcina lutea).",
        "topicId": "u1-t01",
        "subSection": "u1-s1",
        "diff": 2
      },
      {
        "q": "The time required for a bacterial population to double in number through binary fission during the exponential phase is termed the ______ time.",
        "a": [
          "generation",
          "doubling"
        ],
        "a_display": "Generation (Doubling) time",
        "e": "Generation time varies by species, ranging from ~20 minutes in E. coli to ~20 hours in Mycobacterium tuberculosis.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The transfer of bacterial genetic material through direct physical contact mediated by a sex pilus is called ______.",
        "a": [
          "conjugation"
        ],
        "a_display": "Conjugation",
        "e": "Conjugation is the primary mode of spreading multidrug-resistant R plasmids among enterobacteria.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The physiological state of a bacterial cell that enables it to bind and take up exogenous naked DNA during transformation is termed ______.",
        "a": [
          "competence",
          "competency"
        ],
        "a_display": "Competence",
        "e": "Competence can be natural (e.g., Bacillus subtilis, Streptococcus) or induced artificially via CaCl2 treatment and heat shock or electroporation.",
        "topicId": "u1-t10",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The enzyme produced by aerobic and facultative bacteria that decomposes toxic hydrogen peroxide into water and molecular oxygen gas is ______.",
        "a": [
          "catalase"
        ],
        "a_display": "Catalase",
        "e": "The catalase test (2H2O2 -> 2H2O + O2) produces vigorous effervescence in staphylococci but is negative in streptococci.",
        "topicId": "u1-t07",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "Bacterial enzymes that hydrolyze extended-spectrum penicillins, 3rd generation cephalosporins, and monobactams are termed ______ beta-lactamases (ESBLs).",
        "a": [
          "extended-spectrum",
          "extended spectrum"
        ],
        "a_display": "Extended-spectrum beta-lactamases (ESBLs)",
        "e": "ESBL-producing enterobacteria (e.g., E. coli, Klebsiella) resist cefotaxime, ceftriaxone, and aztreonam, but are inhibited by clavulanic acid.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The phase of the bacterial growth curve where the rate of bacterial cell division equals the rate of cell death is the ______ phase.",
        "a": [
          "stationary",
          "stationary phase"
        ],
        "a_display": "Stationary phase",
        "e": "In the stationary phase, nutrient exhaustion and accumulation of toxic metabolic by-products cause viable cell counts to reach a plateau.",
        "topicId": "u1-t08",
        "subSection": "u1-s2",
        "diff": 1
      },
      {
        "q": "The active efflux system in bacteria that pumps antimicrobial molecules out of the cytoplasm across the outer membrane is driven by transmembrane ______ pumps.",
        "a": [
          "efflux",
          "multidrug efflux"
        ],
        "a_display": "Efflux pumps",
        "e": "Efflux pumps (such as AcrAB-TolC) actively expel tetracyclines, fluoroquinolones, and macrolides, conferring multidrug resistance.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "Discrete clusters of bacterial genes acquired by horizontal transfer that encode specific virulence factors such as toxins and adhesins are called ______ islands.",
        "a": [
          "pathogenicity",
          "pathogenicity islands",
          "pai"
        ],
        "a_display": "Pathogenicity islands (PAIs)",
        "e": "Pathogenicity islands differ in G+C content from the host genome and are often flanked by direct repeats and tRNA genes.",
        "topicId": "u1-t11",
        "subSection": "u1-s2",
        "diff": 3
      },
      {
        "q": "Antimicrobial agents that inhibit the synthesis of bacterial folic acid by competitively antagonizing para-aminobenzoic acid (PABA) are the ______.",
        "a": [
          "sulfonamides",
          "sulphonamides",
          "sulfa drugs"
        ],
        "a_display": "Sulfonamides (Sulfa drugs)",
        "e": "Sulfonamides structurally mimic PABA to inhibit dihydropteroate synthase in the bacterial tetrahydrofolate synthesis pathway.",
        "topicId": "u1-t12",
        "subSection": "u1-s2",
        "diff": 2
      },
      {
        "q": "The test that differentiates pathogenic Staphylococcus aureus from other staphylococci based on the enzymatic clotting of citrated rabbit plasma is the ______ test.",
        "a": [
          "coagulase",
          "tube coagulase"
        ],
        "a_display": "Coagulase test",
        "e": "Coagulase reacts with plasma coagulase-reacting factor (CRF) to convert fibrinogen into an insoluble fibrin clot.",
        "topicId": "u1-t13",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "In gelatin stab culture, Bacillus anthracis produces an inverted ______ tree pattern of liquefaction without rapid surface digestion.",
        "a": [
          "fir",
          "inverted fir",
          "fir-tree",
          "fir tree"
        ],
        "a_display": "Inverted fir-tree",
        "e": "Lateral spikes of growth with greatest length near the surface produce the classic inverted fir-tree pattern in gelatin stabs.",
        "topicId": "u1-t15",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The primary clinical presentation of bovine listeriosis characterized by unilateral facial paralysis, head pressing, and unidirectional walking is commonly termed ______ disease.",
        "a": [
          "circling",
          "silage sickness",
          "circling disease"
        ],
        "a_display": "Circling disease (Silage sickness)",
        "e": "L. monocytogenes migrates via cranial nerves to cause microabscesses in the brainstem, producing unilateral ataxia and circular walking.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The intestinal lesions of Johne's disease (paratuberculosis) in cattle feature pathognomonic thickened, transverse ______ of the ileal mucosa that cannot be smoothed by stretching.",
        "a": [
          "corrugations",
          "corrugation",
          "folds"
        ],
        "a_display": "Corrugations",
        "e": "Massive infiltration of the lamina propria and submucosa by epithelioid macrophages creates permanent, cerebriform mucosal corrugations.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The selective and differential medium containing 7.5% sodium chloride, mannitol, and phenol red used to isolate pathogenic staphylococci is ______ Agar.",
        "a": [
          "mannitol salt",
          "msa",
          "mannitol salt agar"
        ],
        "a_display": "Mannitol Salt Agar (MSA)",
        "e": "S. aureus tolerates 7.5% NaCl and ferments mannitol, turning the phenol red indicator from red to bright yellow.",
        "topicId": "u1-t13",
        "subSection": "u1-s3",
        "diff": 1
      },
      {
        "q": "The primary exotoxin responsible for the alpha-hemolytic, gas gangrene, and dermonecrotic lesions of Clostridium perfringens Type A is ______ (lecithinase C).",
        "a": [
          "alpha toxin",
          "alpha-toxin",
          "lecithinase"
        ],
        "a_display": "Alpha-toxin (Phospholipase C / Lecithinase)",
        "e": "Alpha-toxin hydrolyzes phosphatidylcholine and sphingomyelin in host cell membranes, causing massive cell lysis and vascular permeability.",
        "topicId": "u1-t16",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The bacterium responsible for 'pigeon breast' or ulcerative lymphangitis in horses and caseous lymphadenitis in small ruminants is Corynebacterium ______.",
        "a": [
          "pseudotuberculosis"
        ],
        "a_display": "Corynebacterium pseudotuberculosis",
        "e": "C. pseudotuberculosis causes pectoral abscesses ('pigeon fever') in equids and chronic suppurative lymphadenitis in sheep and goats.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "In the Single Intradermal (SID) tuberculin test in cattle, Bovine PPD is injected into the skin of the ______ fold.",
        "a": [
          "caudal",
          "caudal fold"
        ],
        "a_display": "Caudal fold",
        "e": "In the caudal fold test, 0.1 mL of Bovine PPD is injected intradermally at the base of the tail, evaluating skin fold induration at 72 hours.",
        "topicId": "u1-t18",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "Erysipelothrix rhusiopathiae displays a characteristic test-tube ______ appearance of radiating growth in gelatin stab cultures.",
        "a": [
          "brush",
          "pipe cleaner",
          "pipe-cleaner",
          "bottle brush"
        ],
        "a_display": "Test-tube brush (Pipe-cleaner)",
        "e": "In 12% gelatin stabs incubated at 22°C, E. rhusiopathiae produces fine lateral filaments resembling a test-tube cleaning brush.",
        "topicId": "u1-t17",
        "subSection": "u1-s3",
        "diff": 2
      },
      {
        "q": "The heat-labile enterotoxin (LT) produced by Enterotoxigenic E. coli increases intracellular ______ in intestinal mucosal cells, stimulating profuse chloride and water secretion.",
        "a": [
          "camp",
          "cyclic amp",
          "cyclic adenosine monophosphate"
        ],
        "a_display": "Cyclic AMP (cAMP)",
        "e": "LT ADP-ribosylates the Gs regulatory protein, activating adenylate cyclase to produce excess cAMP, driving hypersecretion of electrolytes and water.",
        "topicId": "u1-t19",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The primary selective enrichment broth used for isolating Salmonella from fecal specimens by suppressing coliforms is ______ broth.",
        "a": [
          "selenite f",
          "tetrathionate",
          "rappaport-vassiliadis",
          "rv"
        ],
        "a_display": "Selenite F (or Tetrathionate) broth",
        "e": "Selenite F and Tetrathionate broths selectively suppress commensal coliforms while allowing rapid multiplying of Salmonella before plating.",
        "topicId": "u1-t20",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The capsular antigen of Klebsiella pneumoniae is responsible for giving its colonies a prominent thick, mucoid, sticky appearance, designated as the ______ antigen.",
        "a": [
          "k",
          "k antigen",
          "capsular"
        ],
        "a_display": "K antigen",
        "e": "The thick acidic polysaccharide capsule (K antigen) prevents phagocytosis and forms massive glistening mucoid colonies on agar.",
        "topicId": "u1-t21",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "Pasteurella multocida produces a characteristic sweetish, musty, or ______-like odor when grown on blood agar plates.",
        "a": [
          "mousy",
          "mouse-like",
          "mouse"
        ],
        "a_display": "Mousy odor",
        "e": "Fresh colonies of P. multocida produce an indole-associated musty or mousy aroma that is recognizable during diagnostic plating.",
        "topicId": "u1-t22",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The live attenuated vaccine strain widely used globally for mass immunization of female calves against bovine brucellosis is Brucella abortus Strain ______.",
        "a": [
          "19",
          "s19",
          "strain 19"
        ],
        "a_display": "Strain 19 (S19)",
        "e": "B. abortus S19 is a smooth attenuated vaccine given subcutaneously to 4–8 month old female calves to protect against abortion.",
        "topicId": "u1-t23",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The characteristic rapid, shooting motility exhibited by Campylobacter species when viewed in fresh wet mounts is described as ______ motility.",
        "a": [
          "darting",
          "corkscrew"
        ],
        "a_display": "Darting motility",
        "e": "Single unsheathed polar flagella at one or both poles propel Campylobacter in rapid, tumbling darting movements.",
        "topicId": "u1-t24",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The cutaneous, chronic form of Glanders characterized by nodules and tortuous ulcers along the lymphatic vessels of the limbs is termed ______.",
        "a": [
          "farcy"
        ],
        "a_display": "Farcy",
        "e": "Farcy represents the lymphatic and cutaneous form of B. mallei infection, showing 'farcy pipes' (thickened lymphatics) and 'farcy buds' (abscesses).",
        "topicId": "u1-t26",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "Pseudomonas aeruginosa produces a sweet, fruity, ______-like odor in culture due to the synthesis of 2-aminoacetophenone.",
        "a": [
          "grape",
          "grape-like",
          "corn-taco"
        ],
        "a_display": "Grape-like (Fruity) odor",
        "e": "Production of 2-aminoacetophenone gives P. aeruginosa cultures an unmistakable sweet grape juice aroma.",
        "topicId": "u1-t27",
        "subSection": "u1-s4",
        "diff": 1
      },
      {
        "q": "The yellow-green fluorescent siderophore pigment synthesized by Pseudomonas aeruginosa that chelates ferric iron under iron-limited conditions is ______.",
        "a": [
          "pyoverdine",
          "fluorescein"
        ],
        "a_display": "Pyoverdine (Fluorescein)",
        "e": "Pyoverdine fluoresces bright yellow-green under ultraviolet illumination (366 nm) and scavenges host iron to supply P. aeruginosa.",
        "topicId": "u1-t27",
        "subSection": "u1-s4",
        "diff": 2
      },
      {
        "q": "The primary clinical disease caused by Fusobacterium necrophorum in young calves characterized by necrotic ulceration of the vocal cords and larynx is calf ______.",
        "a": [
          "diphtheria",
          "laryngeal necrobacillosis",
          "necrotic laryngitis"
        ],
        "a_display": "Calf diphtheria (Necrotic laryngitis)",
        "e": "F. necrophorum invades damaged mucous membranes to form deep necrotic ulcers on the arytenoid cartilages, causing roaring and dyspnea.",
        "topicId": "u1-t28",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "Leptospires localize and chronically persist in the brush border of epithelial cells lining the ______ tubules of the mammalian kidney, leading to prolonged shedding in urine.",
        "a": [
          "proximal convoluted",
          "proximal",
          "renal",
          "convoluted"
        ],
        "a_display": "Proximal convoluted tubules",
        "e": "Maintenance hosts harbor leptospires within proximal renal tubular lumens, shedding millions of viable organisms into the environment.",
        "topicId": "u1-t29",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The biological vector that transmits the spirochete Borrelia theileri to cattle and horses is the hard tick of the genus ______.",
        "a": [
          "rhipicephalus",
          "boophilus"
        ],
        "a_display": "Rhipicephalus (Boophilus)",
        "e": "Borrelia theileri is transmitted transovarially and transstadially by one-host cattle ticks (Rhipicephalus microplus/decoloratus).",
        "topicId": "u1-t30",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The solid medium base routinely used for the in vitro cultivation of Mycoplasma species is known as ______ agar.",
        "a": [
          "pplo",
          "pleuropneumonia-like organism",
          "hayflick"
        ],
        "a_display": "PPLO agar",
        "e": "PPLO (Pleuropneumonia-Like Organisms) agar supplemented with 20% horse serum, yeast extract, and penicillin/thallium acetate supports mycoplasmal growth.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The characteristic post-mortem appearance of the lungs in Contagious Bovine Pleuropneumonia (CBPP), featuring varied stages of red and grey hepatization with wide white interlobular septa, is described as ______ lung.",
        "a": [
          "marbled",
          "marbling",
          "marble"
        ],
        "a_display": "Marbled lung",
        "e": "Distension of interlobular lymphatics by organizing fibrin alongside consolidation of adjacent lobules generates the classic marbled lung appearance.",
        "topicId": "u1-t31",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "In Romanowsky- or Giemsa-stained blood smears of cattle suffering from anaplasmosis, Anaplasma marginale bodies are located near the ______ of the red blood cell.",
        "a": [
          "margin",
          "periphery",
          "edge"
        ],
        "a_display": "Margin (Periphery)",
        "e": "A. marginale appears as dense round purplish inclusions situated right on the margin of the erythrocyte, distinguishing it from central A. centrale.",
        "topicId": "u1-t34",
        "subSection": "u1-s5",
        "diff": 1
      },
      {
        "q": "The special diagnostic staining method utilizing carbol fuchsin with malachite green counterstain commonly used to identify Chlamydia elementary bodies in smear preparations is ______ stain.",
        "a": [
          "stamp's",
          "stamp",
          "gimenez",
          "stamps"
        ],
        "a_display": "Stamp's (or Gimenez) stain",
        "e": "Stamp's stain uses dilute carbol fuchsin with 0.5% acetic acid; obligate intracellular chlamydial elementary bodies stain bright red against a green background.",
        "topicId": "u1-t32",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "The primary vector that transmits canine monocytic ehrlichiosis (Ehrlichia canis) between dogs is the brown dog tick, ______ sanguineus.",
        "a": [
          "rhipicephalus",
          "rhipicephalus sanguineus"
        ],
        "a_display": "Rhipicephalus sanguineus",
        "e": "The brown dog tick Rhipicephalus sanguineus transmits E. canis transstadially during larval, nymphal, and adult feeding.",
        "topicId": "u1-t34",
        "subSection": "u1-s5",
        "diff": 2
      },
      {
        "q": "Q fever in ruminants and humans is caused by the small intracellular bacterium ______ burnetii.",
        "a": [
          "coxiella",
          "coxiella burnetii"
        ],
        "a_display": "Coxiella burnetii",
        "e": "Coxiella burnetii replicates within eukaryotic phagolysosomes at acidic pH, shedding in milk and lochia.",
        "topicId": "u1-t33",
        "subSection": "u1-s5",
        "diff": 1
      }
    ]
  },

  "unit-2": {
    "mcq": [
      {
        "q": "The primary structural sterol located within the fungal cytoplasmic plasma membrane that serves as the principal target for polyene and azole antifungals is:",
        "o": [
          "Ergosterol",
          "Cholesterol",
          "Stigmasterol",
          "Lanosterol alone"
        ],
        "a": 0,
        "e": "Ergosterol regulates fluidity and permeability in fungal membranes, functioning analogously to cholesterol in mammalian membranes.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Which major cell wall polymer of filamentous fungi is composed of linear beta-1,4-linked homopolymers of N-acetylglucosamine (NAG)?",
        "o": [
          "Chitin",
          "Beta-glucan",
          "Mannan",
          "Peptidoglycan"
        ],
        "a": 0,
        "e": "Fungal chitin consists of unbranched chains of beta-1,4-linked N-acetylglucosamine, providing tensile strength to the fungal cell wall.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "What is the primary carbohydrate constituent of standard Sabouraud Dextrose Agar (SDA) and at what concentration is it routinely formulated?",
        "o": [
          "Dextrose (Glucose) at 4% (40 g/L)",
          "Dextrose at 1%",
          "Sucrose at 5%",
          "Maltose at 10%"
        ],
        "a": 0,
        "e": "SDA contains 4% dextrose and 1% peptone with an acidic pH of 5.4–5.6, which favors fungal growth over bacterial proliferation.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In the formulation of selective mycology media, what antibiotic is routinely added to inhibit saprophytic environmental contaminant molds without inhibiting dermatophytes?",
        "o": [
          "Cycloheximide (Actidione)",
          "Chloramphenicol",
          "Penicillin G",
          "Gentamicin"
        ],
        "a": 0,
        "e": "Cycloheximide (0.5 g/L) suppresses fast-growing airborne saprophytic molds (e.g., Rhizopus, Mucor) while dermatophytes remain resistant.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In a Lactophenol Cotton Blue (LPCB) mounting solution, what is the exact function of the lactic acid component?",
        "o": [
          "Preserves and clarifies fungal structures by clearing internal cellular debris",
          "Kills the fungal elements instantly",
          "Stains the chitin cell wall blue",
          "Prevents evaporation of the mounting fluid"
        ],
        "a": 0,
        "e": "In LPCB: phenol kills fungi, lactic acid clears and preserves internal architecture, glycerol prevents drying, and cotton blue stains chitin deep blue.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "What is the chief diagnostic advantage of Riddell's slide culture technique over a routine wet mount preparation?",
        "o": [
          "Preserves undisturbed spatial arrangements of conidiophores, vesicles, and spore chains intact",
          "Accelerates fungal growth rate by fourfold",
          "Differentiates viable from non-viable spores",
          "Eliminates the requirement for incubator heating"
        ],
        "a": 0,
        "e": "Slide culture allows molds to sporulate directly between slide and coverslip, preserving fragile spore heads (e.g., Aspergillus, Penicillium) intact.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "What molecular mechanism of action distinguishes the polyene class of antifungals (e.g., Amphotericin B, Nystatin)?",
        "o": [
          "Direct binding to membrane ergosterol creating trans-membrane ion channels and lethal cytoplasmic leakage",
          "Inhibition of squalene epoxidase",
          "Inhibition of 14-alpha-demethylase",
          "Inhibition of beta-1,3-glucan synthase"
        ],
        "a": 0,
        "e": "Amphotericin B binds ergosterol molecules to form hydrophilic transmembrane pores, causing rapid leakage of monovalent ions (K+, Na+) and cell death.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Azole antifungals (e.g., Ketoconazole, Itraconazole, Fluconazole) exert their fungistatic action by selectively inhibiting which fungal cytochrome P450 enzyme?",
        "o": [
          "14-alpha-demethylase (CYP51 / ERG11)",
          "Squalene epoxidase",
          "Thymidylate synthase",
          "Topoisomerase II"
        ],
        "a": 0,
        "e": "Azoles inhibit lanosterol 14-alpha-demethylase, depleting ergosterol and accumulating toxic 14-methylated sterols that disrupt membrane function.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The echinocandin class of antifungals (e.g., Caspofungin, Micafungin) exerts targeted antifungal therapy by inhibiting which biosynthetic enzyme?",
        "o": [
          "Beta-1,3-D-glucan synthase",
          "Chitin synthase",
          "Lanosterol demethylase",
          "Squalene epoxidase"
        ],
        "a": 0,
        "e": "Echinocandins inhibit 1,3-beta-glucan synthase, weakening cell wall integrity and inducing osmotic lysis in Candida and Aspergillus.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "What phenomenon is defined by a fungus growing as a filamentous mycelial mold at ambient environmental temperature (25°C) and converting into a parasitic yeast phase at mammalian body temperature (37°C)?",
        "o": [
          "Thermal dimorphism",
          "Pleomorphism",
          "Heterothallism",
          "Schizogony"
        ],
        "a": 0,
        "e": "Thermal dimorphism is exhibited by systemic fungal pathogens (Histoplasma, Blastomyces, Coccidioides, Sporothrix): mold in soil, yeast in host tissue.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Which clearing reagent is routinely mixed with clinical skin scrapings or hair clippings to dissolve host keratin without destroying fungal hyphae and arthroconidia?",
        "o": [
          "10–20% Potassium hydroxide (KOH)",
          "70% Ethyl alcohol",
          "0.1 N Hydrochloric acid",
          "Concentrated formalin"
        ],
        "a": 0,
        "e": "A 10–20% KOH wet mount hydrolyzes proteinaceous epithelial keratin and cellular debris, leaving alkali-resistant fungal chitin clear for examination.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Asexual fungal spores produced by direct fragmentation of septate vegetative hyphae into thick-walled individual rectangular or barrel-shaped cells are:",
        "o": [
          "Arthroconidia (Arthrospores)",
          "Blastospores",
          "Chlamydospores",
          "Sporangiospores"
        ],
        "a": 0,
        "e": "Arthroconidia form by the disarticulation of vegetative hyphal septa, seen in Coccidioides immitis and dermatophytes in hair shafts.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Thick-walled, resting fungal survival spores formed either terminally, laterally, or intercalarily within hyphal strands under adverse conditions are:",
        "o": [
          "Chlamydospores",
          "Ascospores",
          "Basidiospores",
          "Microconidia"
        ],
        "a": 0,
        "e": "Chlamydospores are enlarged, thick-walled asexual survival spores packed with nutrient reserves, characteristic of Candida albicans on cornmeal agar.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Which sexual spore type is produced endogenously inside a specialized sac-like structure called an ascus?",
        "o": [
          "Ascospores",
          "Basidiospores",
          "Zygospores",
          "Oospores"
        ],
        "a": 0,
        "e": "In the phylum Ascomycota, karyogamy and meiosis result in the formation of typically eight endogenous ascospores within a sac-like ascus.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Sexual spores formed exogenously upon the tips of club-shaped microscopic projection structures called sterigmata belong to which phylum?",
        "o": [
          "Basidiomycota",
          "Ascomycota",
          "Zygomycota",
          "Chytridiomycota"
        ],
        "a": 0,
        "e": "Basidiomycota (e.g., Cryptococcus neoformans, mushrooms) produce sexual basidiospores on the exterior of a basidium.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Which allylamine antifungal drug acts by selectively inhibiting the fungal enzyme squalene epoxidase, blocking the first step in ergosterol biosynthesis?",
        "o": [
          "Terbinafine",
          "Fluconazole",
          "Griseofulvin",
          "Flucytosine"
        ],
        "a": 0,
        "e": "Terbinafine inhibits squalene epoxidase, accumulating toxic intracellular squalene and depleting downstream ergosterol synthesis in dermatophytes.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "What is the specific antifungal mechanism of action of Griseofulvin in treating clinical dermatophytosis?",
        "o": [
          "Disruption of the mitotic spindle apparatus by binding to fungal tubulin dimers",
          "Inhibition of chitin synthase",
          "Direct pore formation in ergosterol membranes",
          "Inhibition of RNA polymerase"
        ],
        "a": 0,
        "e": "Griseofulvin concentrates in newly formed keratin precursor cells and binds to fungal tubulin, disrupting mitotic spindle microtubules and arresting mitosis.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Flucytosine (5-fluorocytosine / 5-FC) is converted inside fungal cells into 5-fluorouracil by which fungal-specific enzyme absent in mammalian cells?",
        "o": [
          "Cytosine deaminase",
          "Uracil phosphoribosyltransferase",
          "Thymidylate kinase",
          "Ribonucleotide reductase"
        ],
        "a": 0,
        "e": "Fungi express cytosine deaminase, converting non-toxic 5-FC into 5-fluorouracil (5-FU), which inhibits thymidylate synthase and halts fungal DNA synthesis.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "Hyphae that lack internal cross-walls (septa), containing continuous multinucleate cytoplasm, are properly termed:",
        "o": [
          "Coenocytic (Aseptate)",
          "Septate",
          "Pseudohyphae",
          "Dimorphic"
        ],
        "a": 0,
        "e": "Coenocytic hyphae (seen in Mucorales such as Rhizopus and Mucor) are broad and lack regular septa, forming continuous multi-nucleated tubes.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "What optical feature distinguishes pseudohyphae produced by budding yeasts from true fungal hyphae?",
        "o": [
          "Constrictions at branch points and septal junctions with terminal blastoconidia",
          "Uniform parallel cell walls without constrictions",
          "Presence of clamp connections",
          "Absence of any nuclei"
        ],
        "a": 0,
        "e": "Pseudohyphae consist of chains of elongated budding blastoconidia that remain attached, exhibiting distinct constrictions at every cell junction.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "In the CLSI M27 microdilution standard for testing yeasts, what synthetic buffered liquid medium is universally specified?",
        "o": [
          "RPMI-1640 broth buffered with MOPS",
          "Mueller-Hinton broth",
          "Brain Heart Infusion broth",
          "Sabouraud dextrose broth"
        ],
        "a": 0,
        "e": "CLSI M27-A3 specifies RPMI-1640 buffered to pH 7.0 with morpholinepropanesulfonic acid (MOPS) for reproducible in vitro antifungal MIC determination.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "The asexual reproductive spores of molds that are produced enclosed inside a swollen globular sac called a sporangium are termed:",
        "o": [
          "Sporangiospores",
          "Conidiospores",
          "Arthrospores",
          "Zygospores"
        ],
        "a": 0,
        "e": "Sporangiospores (characteristic of Zygomycetes / Mucorales) form internally within a sac-like sporangium supported by a central columella.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Which fluorescent whitening agent selectively binds to chitin in fungal cell walls, emitting brilliant apple-green fluorescence under UV light in direct smears?",
        "o": [
          "Calcofluor White",
          "Acridine orange",
          "Auramine O",
          "Fluorescein isothiocyanate"
        ],
        "a": 0,
        "e": "Calcofluor White binds specifically to beta-1,3 and beta-1,4 polysaccharides (cellulose and chitin), providing rapid, sensitive fluorescent detection of fungi.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "What rapid diagnostic screening test differentiates Candida albicans from other Candida species when yeast cells are incubated in mammalian serum at 37°C for 2–3 hours?",
        "o": [
          "Germ tube test (Reynolds-Braude phenomenon)",
          "India ink preparation",
          "Urease test",
          "Sugar assimilation test"
        ],
        "a": 0,
        "e": "In serum at 37°C within 2–3 hours, C. albicans produces true germ tubes (slender, parallel-walled hyphal outgrowths lacking constrictions at origin).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "When cultivated on cornmeal agar supplemented with 1% Tween 80 at 25°C, Candida albicans characteristically develops which diagnostic structures?",
        "o": [
          "Thick-walled spherical terminal chlamydospores",
          "Arthroconidia in chains",
          "Endospores inside spherules",
          "Macroconidia with verrucose walls"
        ],
        "a": 0,
        "e": "Cornmeal agar + Tween 80 stimulates C. albicans to form pseudohyphae with clusters of blastospores and distinctive thick-walled terminal chlamydospores.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "On differential CHROMagar Candida medium, colonies of Candida albicans characteristically appear:",
        "o": [
          "Light to emerald green",
          "Deep metallic blue",
          "Pale pink with whitish borders",
          "Dark brown to black"
        ],
        "a": 0,
        "e": "C. albicans cleaves chromogenic beta-galactosidase/hexosaminidase substrates in CHROMagar to produce light green colonies, distinguishing it from C. tropicalis (blue) and C. krusei (pink).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which clinical condition in young poultry (chickens, turkeys) is caused by Candida albicans proliferation, characterized by thick white pseudomembranous 'Turkish towel' lesions in the upper digestive tract?",
        "o": [
          "Crop mycosis ('Sour Crop' or Thrush)",
          "Brooder pneumonia",
          "Aspergillosis",
          "Favus"
        ],
        "a": 0,
        "e": "Avian candidiasis ('sour crop' or moniliasis) produces corrugated, curd-like diphtheritic patches resembling a Turkish towel on crop and esophageal mucosa.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The prominent extracellular virulence structure of Cryptococcus neoformans that repels phagocytosis and is readily demonstrated as a clear halo using India ink is composed of:",
        "o": [
          "Glucuronoxylomannan (GXM) polysaccharide capsule",
          "Lipoteichoic acid",
          "Hyaluronic acid",
          "Poly-D-glutamic acid"
        ],
        "a": 0,
        "e": "Cryptococcus neoformans possesses a thick acidic polysaccharide capsule consisting of glucuronoxylomannan (GXM, 90%) and galactoxylomannan (GalXM).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "What avian environmental reservoir is classical for the high-density accumulation and global dissemination of Cryptococcus neoformans?",
        "o": [
          "Pigeon droppings (guano) and roosting sites",
          "Duck ponds",
          "Parrot feather dander",
          "Chicken litter alone"
        ],
        "a": 0,
        "e": "Pigeon droppings contain abundant creatinine, urea, and salts that favor C. neoformans growth without sickening the birds (whose 42°C body temp protects them).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "On Birdseed agar (Staib agar / Guizotia abyssinica seed agar), Cryptococcus neoformans develops dark brown to black colonies due to the activity of which enzyme?",
        "o": [
          "Phenoloxidase (Laccase) converting caffeic acid into melanin",
          "Urease",
          "Coagulase",
          "Amylase"
        ],
        "a": 0,
        "e": "C. neoformans expresses laccase (phenoloxidase), an essential virulence factor that oxidizes diphenolic compounds (caffeic acid) into protective melanin pigment.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which clinical manifestation of Cryptococcus neoformans infection is classical in domestic cats?",
        "o": [
          "Nasal granulomas producing firm subcutaneous bridge-of-the-nose swelling ('Roman nose')",
          "Severe chronic diarrhea",
          "Profuse generalized skin scaling without swelling",
          "Crepitant muscle gangrene"
        ],
        "a": 0,
        "e": "Feline cryptococcosis primarily invades the nasal cavity, causing chronic mucopurulent discharge, polypoid nasal masses, and firm facial swelling ('Roman nose').",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which characteristic unipolar-budding, lipophilic yeast exhibits a classic 'peanut', 'footprint', or 'bottle' shape and is a primary cause of canine otitis externa and pruritic dermatitis?",
        "o": [
          "Malassezia pachydermatis",
          "Candida albicans",
          "Cryptococcus neoformans",
          "Trichosporon beigelii"
        ],
        "a": 0,
        "e": "Malassezia pachydermatis is a commensal of canine skin and ears; overgrowth produces pruritic, greasy, malodorous dermatitis and otitis with classic footprint-shaped budding yeasts.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Unlike most other Malassezia species (e.g., M. furfur), Malassezia pachydermatis is unique in that it:",
        "o": [
          "Is non-lipid-dependent and can grow on routine Sabouraud Dextrose Agar without olive oil supplementation",
          "Requires long-chain fatty acid supplementation for any in vitro growth",
          "Forms abundant ascospores",
          "Lacks a cell wall entirely"
        ],
        "a": 0,
        "e": "M. pachydermatis can synthesize its own fatty acids, allowing it to grow on plain SDA, unlike lipid-obligate species (M. furfur, M. sympodialis) requiring lipid overlays.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which opportunistic filamentous mold produces septate hyphae branching dichotomously at acute 45° angles and causes 'Brooder Pneumonia' in poultry chicks?",
        "o": [
          "Aspergillus fumigatus",
          "Rhizopus microsporus",
          "Mucor circinelloides",
          "Candida albicans"
        ],
        "a": 0,
        "e": "Aspergillus fumigatus produces slender (3–5 um) septate hyphae with progressive 45-degree branching, causing acute mycotic pneumonia and yellow nodular lung granulomas in brooder chicks.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "What microscopic conidial head morphology is characteristic of Aspergillus fumigatus?",
        "o": [
          "Dome-shaped terminal vesicle with a single row of phialides (uniseriate) restricted to the upper two-thirds, bearing green columnar chains of conidia",
          "Biseriate phialides radiating 360 degrees around a globose vesicle",
          "Branched penicillus resembling a paint brush",
          "Terminal sporangium with an apophysis"
        ],
        "a": 0,
        "e": "A. fumigatus conidiophores terminate in a conical to dome-shaped vesicle with uniseriate phialides covering the upper half to two-thirds, producing compact columnar spore chains.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Guttural Pouch Mycosis in equids is most commonly caused by which opportunistic fungal pathogen eroding the internal carotid artery?",
        "o": [
          "Aspergillus species (primarily Aspergillus fumigatus / A. nidulans)",
          "Candida albicans",
          "Cryptococcus neoformans",
          "Fusarium solani"
        ],
        "a": 0,
        "e": "Aspergillus plaques on the caudodorsal roof of the guttural pouch invade the internal or external carotid arteries, precipitating fatal epistaxis (nasal bleeding).",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "In cattle, mycotic abortion occurring during the third trimester is most frequently associated with hematogenous placentitis caused by:",
        "o": [
          "Aspergillus fumigatus",
          "Malassezia pachydermatis",
          "Histoplasma capsulatum",
          "Blastomyces dermatitidis"
        ],
        "a": 0,
        "e": "Aspergillus fumigatus accounts for >60–75% of bovine mycotic abortions; fungal hyphae invade maternal caruncles and fetal cotyledons, causing thickened leathery placentitis.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "What microscopic feature clearly distinguishes members of the order Mucorales (e.g., Rhizopus, Mucor, Lichtheimia) from Aspergillus in histological tissue sections?",
        "o": [
          "Broad (6–15 um), irregular, non-septate (coenocytic) ribbon-like hyphae branching at wide angles (approx. 90°)",
          "Narrow (3–5 um) regularly septate hyphae branching at 45°",
          "Spherical broad-based budding yeasts",
          "Small intracellular yeast clusters in macrophages"
        ],
        "a": 0,
        "e": "Mucorales hyphae are broad, pleomorphic, thin-walled, non-septate ribbons that branch irregularly at 90-degree angles and show intense angioinvasion and infarction.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which anatomical structure is present in Rhizopus species that differentiates it microscopically from Mucor?",
        "o": [
          "Root-like rhizoids situated directly opposite the unbranched sporangiophores",
          "Uniseriate phialides on a vesicle",
          "Sterigmata bearing basidiospores",
          "Terminal chlamydospores in chains"
        ],
        "a": 0,
        "e": "Rhizopus possesses root-like rhizoids arising at nodes directly opposite the sporangiophores, whereas Mucor completely lacks rhizoids and stolons.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Mycotic rumenitis in feedlot cattle commonly occurs secondary to which predisposing metabolic condition?",
        "o": [
          "Acute lactic ruminal acidosis (grain overload)",
          "Hypocalcemia (milk fever)",
          "Bovine ketosis",
          "Hypomagnesemia (grass tetany)"
        ],
        "a": 0,
        "e": "Lactic acidosis damages the ruminal stratified squamous epithelium, allowing ingested Mucorales and Aspergillus spores to invade blood vessels, causing thrombosis and necrosis.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which rapid biochemical test differentiates Cryptococcus neoformans (positive) from Candida albicans (negative) within 2 to 4 hours?",
        "o": [
          "Urease test",
          "Catalase test",
          "Oxidase test",
          "Germ tube test"
        ],
        "a": 0,
        "e": "Cryptococcus neoformans produces active urease, splitting urea to ammonia and turning Christensen's urea agar bright pink, while Candida albicans is urease-negative.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "In canine nasal aspergillosis, what is the most common Aspergillus species isolated from destroyed nasal turbinates?",
        "o": [
          "Aspergillus fumigatus",
          "Aspergillus flavus",
          "Aspergillus niger",
          "Aspergillus terreus"
        ],
        "a": 0,
        "e": "A. fumigatus causes canine sinonasal aspergillosis in dolichocephalic breeds, marked by profuse sanguinopurulent discharge, turbinate destruction, and ulceration.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which non-invasive serological biomarker test detects fungal cell wall galactomannan antigen in serum for the early diagnosis of invasive aspergillosis?",
        "o": [
          "Platelia Aspergillus sandwich ELISA",
          "Coggins AGID test",
          "Rose Bengal test",
          "Microscopic Agglutination Test"
        ],
        "a": 0,
        "e": "The serum galactomannan ELISA detects circulating fungal cell wall polysaccharide released by Aspergillus hyphae during angioinvasion.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 3
      },
      {
        "q": "The thermal tolerance of Aspergillus fumigatus enables it to grow vigorously at temperatures as high as:",
        "o": [
          "45–50°C",
          "20–25°C only",
          "30°C maximum",
          "65–70°C"
        ],
        "a": 0,
        "e": "A. fumigatus is thermotolerant, growing rapidly between 37°C and 50°C, which explains its proliferation in self-heating agricultural compost and grain piles.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Which pigment produced by Aspergillus niger produces dense, jet-black conidial heads that obscure the underlying vesicle?",
        "o": [
          "Aspergilline (melanin-like black pigment)",
          "Pyocyanin",
          "Prodigiosin",
          "Rhodotorulic acid"
        ],
        "a": 0,
        "e": "Aspergillus niger produces biseriate phialides with dense, carbon-black conidia covering the entire spherical vesicle.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The primary mode of transmission of Cryptococcus neoformans into companion animals and humans is:",
        "o": [
          "Inhalation of aerosolized basidiospores or desiccated, poorly encapsulated yeast cells",
          "Direct skin contact with infected animal scabs",
          "Ingestion of contaminated meat",
          "Bite of Ixodes ticks"
        ],
        "a": 0,
        "e": "Inhalation of small (1–2 um) unencapsulated yeasts or basidiospores from pigeon roosts into the respiratory tract initiates cryptococcal infection.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Which dermatophyte is the primary causative agent of ringworm in dogs and cats, exhibiting bright apple-green fluorescence under Wood's lamp examination (365 nm UV)?",
        "o": [
          "Microsporum canis",
          "Microsporum gypseum",
          "Trichophyton mentagrophytes",
          "Trichophyton verrucosum"
        ],
        "a": 0,
        "e": "Microsporum canis produces a fluorescent pteridine metabolite in hair shafts, causing approximately 50% of active feline infections to glow bright green under Wood's light.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "What microscopic morphology characterizes the macroconidia of Microsporum canis on Lactophenol Cotton Blue mounts?",
        "o": [
          "Spindle-shaped, thick-walled, rough (verrucose) with a curved asymmetrical terminal knob and 6–12 internal cells",
          "Smooth-walled, thin-walled, cigar-shaped with 2–5 cells",
          "Globose single-celled microconidia in grape-like clusters",
          "Barrel-shaped alternating arthrospores"
        ],
        "a": 0,
        "e": "M. canis produces large spindle-shaped macroconidia with thick, distinctly echinulate/verrucose walls, >6 internal septa, and a terminal curved knob.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which dermatophyte is a geophilic organism inhabiting rich soils, producing abundant thin-walled, symmetrical, ellipsoidal macroconidia with 4–6 cells and rounded ends?",
        "o": [
          "Microsporum gypseum",
          "Microsporum canis",
          "Trichophyton verrucosum",
          "Epidermophyton floccosum"
        ],
        "a": 0,
        "e": "Microsporum gypseum is geophilic; its macroconidia are thin-walled, finely verrucose, symmetrical, and contain fewer cells (4–6) than M. canis.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Cattle ringworm, characterized by thick, raised, circumscribed asbestos-like or chalky-white crusts predominantly on the face and periorbital regions, is caused by:",
        "o": [
          "Trichophyton verrucosum",
          "Trichophyton equinum",
          "Microsporum canis",
          "Trichophyton mentagrophytes"
        ],
        "a": 0,
        "e": "Trichophyton verrucosum is the principal agent of bovine dermatophytosis, causing heavy, coalescing, circumscribed crusts around the eyes and dewlap in calves.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "For in vitro growth, Trichophyton verrucosum has an absolute nutritional requirement for which vitamin supplements in culture media?",
        "o": [
          "Inositol and thiamine",
          "Nicotinic acid and biotin",
          "Pyridoxine and riboflavin",
          "Folic acid and cyanocobalamin"
        ],
        "a": 0,
        "e": "Most strains of T. verrucosum require both inositol and thiamine for growth; addition of yeast extract or specific vitamins to SDA is essential for isolation.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "Which microscopic feature is characteristic of Trichophyton mentagrophytes in culture?",
        "o": [
          "Abundant spherical microconidia arranged in grape-like clusters alongside spiral hyphae",
          "Giant spindle-shaped rough macroconidia with 12 cells",
          "Thick-walled tuberculate macroconidia",
          "Large endospore-filled spherules"
        ],
        "a": 0,
        "e": "T. mentagrophytes produces innumerable spherical microconidia in dense clusters, spiral hyphal coils, and smooth, thin-walled cigar-shaped macroconidia.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "What diagnostic hair test differentiates Trichophyton mentagrophytes (positive) from Trichophyton rubrum (negative)?",
        "o": [
          "In vitro hair perforation test (forming wedge-shaped transverse perforations)",
          "Wood's lamp fluorescence",
          "Germ tube test",
          "India ink mount"
        ],
        "a": 0,
        "e": "T. mentagrophytes produces wedge-shaped conical perforations penetrating perpendicular to the hair shaft in vitro, while T. rubrum merely erodes the hair surface.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "Dermatophyte Test Medium (DTM) indicates the growth of a dermatophyte by changing color from yellow to bright red due to which biochemical process?",
        "o": [
          "Preferential utilization of peptones/proteins producing alkaline amine metabolites that raise the pH",
          "Vigorous acid fermentation of dextrose lowering the pH",
          "Direct reduction of potassium tellurite into black tellurium",
          "Production of hydrogen sulfide reacting with iron"
        ],
        "a": 0,
        "e": "Dermatophytes preferentially consume proteins, releasing alkaline ammonium ions that shift the phenol red indicator from yellow to red within 3–7 days.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "In ectothrix hair invasion by dermatophytes, where do the arthroconidia accumulate relative to the host hair shaft?",
        "o": [
          "Forming a dense sheath or crust on the external outer surface of the hair shaft while hyphae penetrate within",
          "Confined strictly inside the internal hair medulla without outer surface growth",
          "Exclusively within the dermal papilla",
          "Within the sebaceous gland lumen only"
        ],
        "a": 0,
        "e": "Ectothrix fungi (e.g., M. canis, T. verrucosum) produce arthroconidia on the exterior surface of the hair shaft, destroying the cuticle; endothrix spores stay internal.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which thermally dimorphic fungus causes systemic histoplasmosis in dogs, cats, and humans, characterized by small (2–4 um) oval intracellular yeasts within macrophages?",
        "o": [
          "Histoplasma capsulatum",
          "Blastomyces dermatitidis",
          "Coccidioides immitis",
          "Cryptococcus neoformans"
        ],
        "a": 0,
        "e": "Histoplasma capsulatum replicates as tiny (2–4 um) oval budding yeasts inside host reticuloendothelial macrophages, causing chronic granulomatous organomegaly.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "What diagnostic macroconidial structure is produced by the mycelial phase of Histoplasma capsulatum when grown at 25°C on Sabouraud agar?",
        "o": [
          "Large, spherical, thick-walled macroconidia covered with finger-like projections (tuberculate macroconidia)",
          "Smooth-walled cigar-shaped macroconidia",
          "Spindle-shaped macroconidia with a terminal knob",
          "Flask-shaped phialides with collarettes"
        ],
        "a": 0,
        "e": "At 25°C, H. capsulatum produces characteristic large (8–15 um) tuberculate macroconidia with prominent rounded, finger-like projections.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Blastomyces dermatitidis is microscopically recognized in purulent tissue exudates by which morphological feature?",
        "o": [
          "Large (8–15 um) spherical yeasts with a thick double-contoured wall and a broad-based single bud",
          "Small intracellular oval yeasts inside monocytes",
          "Endospore-filled giant spherules",
          "Multiple narrow-based budding yeast cells resembling a pilot's wheel"
        ],
        "a": 0,
        "e": "B. dermatitidis yeasts possess a thick refractile double wall and form daughter buds connected by a broad, flat neck of attachment.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which dimorphic fungal pathogen endemic to arid alkaline desert soils produces thick-walled spherules (20–100 um) filled with endospores inside infected animal tissues?",
        "o": [
          "Coccidioides immitis (and C. posadasii)",
          "Histoplasma capsulatum",
          "Blastomyces dermatitidis",
          "Sporothrix schenckii"
        ],
        "a": 0,
        "e": "In tissue, inhaled barrel-shaped arthroconidia of Coccidioides enlarge into giant thick-walled spherules filled with hundreds of internal endospores.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "What morphological spore type is produced by the saprophytic mycelial phase of Coccidioides immitis in the environment or on culture media, representing an extreme biohazard?",
        "o": [
          "Barrel-shaped, alternating arthroconidia separated by clear empty disjunctor cells",
          "Tuberculate macroconidia",
          "Sporangiospores inside a columella",
          "Blastospores in clusters"
        ],
        "a": 0,
        "e": "Coccidioides hyphae fragment into barrel-shaped arthroconidia separated by thin, non-viable disjunctor cells; these airborne arthrospores are highly infectious BSL-3 agents.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which clinical entity, commonly termed 'Rose Gardener's Disease' and presenting as nodular, ulcerating lymphocutaneous cord lesions in cats and horses, is caused by:",
        "o": [
          "Sporothrix schenckii",
          "Histoplasma capsulatum",
          "Rhinosporidium seeberi",
          "Microsporum canis"
        ],
        "a": 0,
        "e": "Sporothrix schenckii is inoculated via thorn punctures or scratches, spreading up regional lymphatic channels as nodular, ulcerating pyogranulomas.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "What is the microscopic morphology of Sporothrix schenckii in its mold phase grown at 25°C?",
        "o": [
          "Slender, delicate conidiophores bearing clusters of tear-shaped or oval conidia arranged like a 'flower' or 'rosette'",
          "Large tuberculate macroconidia",
          "Spindle-shaped multi-septate macroconidia",
          "Broad ribbon-like aseptate hyphae"
        ],
        "a": 0,
        "e": "At 25°C, S. schenckii produces delicate hyphae with conidiophores bearing clusters of conidia on denticles resembling a daisy head or rosette.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "In histological sections of feline sporotrichosis, the parasitic yeast cells of Sporothrix schenckii classically appear as:",
        "o": [
          "Pleomorphic, elongated, round to oval 'cigar-shaped' budding yeasts",
          "Giant round spherules filled with endospores",
          "Chains of square arthroconidia",
          "Large broad-based budding spherical yeasts"
        ],
        "a": 0,
        "e": "S. schenckii tissue yeasts (especially abundant in domestic cats) are characteristically elongated, oval to cigar-shaped budding cells (2–6 um).",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Rhinosporidiosis in cattle, horses, and dogs is characterized by large, friable, strawberry-like polypoid growths on the nasal mucosa, caused by Rhinosporidium seeberi, which is taxonomically classified as a:",
        "o": [
          "Mesomycetozoan (Ichthyosporean protist)",
          "True Ascomycete fungus",
          "Zygomycete mold",
          "Basidiomycete yeast"
        ],
        "a": 0,
        "e": "Molecular phylogenetic analysis of 18S rDNA demonstrated that Rhinosporidium seeberi is an aquatic mesomycetozoan fish parasite, not a true fungus.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "In histological biopsy sections of nasal polyps from an animal with rhinosporidiosis, what pathognomonic structures are visualized?",
        "o": [
          "Giant, thick-walled sporangia (up to 350 um in diameter) containing thousands of mature and immature endospores",
          "Tiny intracellular yeasts inside macrophages",
          "Broad non-septate hyphae invading arteries",
          "Multiple branching sulfur granules"
        ],
        "a": 0,
        "e": "Rhinosporidium seeberi develops enormous mature sporangia (100–350 um) filled with up to 16,000 endospores, which exit through an apical pore.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Paracoccidioidomycosis (South American blastomycosis) is microscopically diagnosed in tissue exudates by the pathognomonic presence of:",
        "o": [
          "Large round yeast cells with multiple peripheral daughter buds resembling a 'ship's wheel' or 'mariner's wheel'",
          "Intracellular yeasts in monocytes",
          "Cigar-shaped yeasts inside asteroid bodies",
          "Chains of macroconidia"
        ],
        "a": 0,
        "e": "Paracoccidioides brasiliensis produces a large central yeast surrounded by multiple narrow-necked radiating buds, resembling a ship's steering wheel.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "Equine ringworm is most commonly caused by which host-adapted dermatophyte that requires nicotinic acid supplementation for growth in culture?",
        "o": [
          "Trichophyton equinum",
          "Trichophyton verrucosum",
          "Microsporum canis",
          "Microsporum nanum"
        ],
        "a": 0,
        "e": "Trichophyton equinum is the primary cause of equine dermatophytosis (girth itch) and typically requires nicotinic acid (niacin) for in vitro growth.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Swine ringworm, characterized by thin brownish crusting circular lesions on the back and flanks of adult pigs, is caused by:",
        "o": [
          "Microsporum nanum",
          "Trichophyton verrucosum",
          "Microsporum canis",
          "Trichophyton mentagrophytes"
        ],
        "a": 0,
        "e": "Microsporum nanum is a geophilic dermatophyte host-adapted to pigs, producing small two-celled pear-shaped (pyriform) macroconidia.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Which major mycotoxin produced by Aspergillus flavus and Aspergillus parasiticus on stored grains is the most potent naturally occurring hepatotoxin and hepatocarcinogen?",
        "o": [
          "Aflatoxin B1",
          "Ochratoxin A",
          "Zearalenone",
          "T-2 toxin"
        ],
        "a": 0,
        "e": "Aflatoxin B1 is epoxidized by hepatic cytochrome P450 into reactive aflatoxin-8,9-epoxide, which binds DNA guanine residues, causing acute liver necrosis and hepatocellular carcinoma.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "When dairy cattle ingest feed contaminated with Aflatoxin B1, which hydroxylated metabolite is excreted into the milk, posing a critical public health and regulatory food safety hazard?",
        "o": [
          "Aflatoxin M1",
          "Aflatoxin G1",
          "Aflatoxicol",
          "Aflatoxin Q1"
        ],
        "a": 0,
        "e": "Hepatic 4-hydroxylation of Aflatoxin B1 in lactating ruminants generates Aflatoxin M1, which is directly secreted into milk.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Under long-wave ultraviolet light (365 nm), Aflatoxin B1 and Aflatoxin G1 fluoresce which respective colors on thin-layer chromatography plates?",
        "o": [
          "Blue (B1) and Green (G1)",
          "Yellow (B1) and Red (G1)",
          "Green (B1) and Blue (G1)",
          "Orange (B1) and Purple (G1)"
        ],
        "a": 0,
        "e": "Aflatoxins are designated B and G based on their fluorescence under 365 nm UV light: B toxins fluoresce bright Blue, G toxins fluoresce Green.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Which estrogenic mycotoxin produced by Fusarium graminearum in moldy corn causes hyperestrogenism, swollen vulva, vaginal prolapse, and infertility in prepubertal gilts?",
        "o": [
          "Zearalenone (F-2 toxin)",
          "Fumonisin B1",
          "Ochratoxin A",
          "T-2 toxin"
        ],
        "a": 0,
        "e": "Zearalenone binds host cytoplasmic estrogen receptors with high affinity, inducing clinical estrus, vulvovaginitis, mammary enlargement, and rectal prolapse in pigs.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Equine Leukoencephalomalacia (ELEM), characterized by liquefactive necrosis of the cerebral white matter, blindness, head pressing, and death in horses, is caused by ingestion of corn contaminated with:",
        "o": [
          "Fumonisin B1 (produced by Fusarium verticillioides)",
          "Aflatoxin B1",
          "Ergot alkaloids",
          "Sporidesmin"
        ],
        "a": 0,
        "e": "Fumonisin B1 inhibits ceramide synthase, disrupting sphingolipid metabolism in equine cerebral vascular endothelium, causing edema, liquefactive malacia, and death.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "In swine, ingestion of Fumonisin B1-contaminated corn causes which pathognomonic acute cardiopulmonary condition?",
        "o": [
          "Porcine Pulmonary Edema (PPE) and hydrothorax",
          "Diamond skin disease",
          "Necrotic laryngitis",
          "Proliferative enteropathy"
        ],
        "a": 0,
        "e": "Fumonisins induce acute left-sided heart failure and pulmonary hypertension in pigs, leading to fatal acute pulmonary edema and heavy hydrothorax.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Which trichothecene mycotoxin produced by Fusarium sporotrichioides is a potent inhibitor of eukaryotic protein synthesis, causing severe oral necrosis, alimentary hemorrhages, and bone marrow aplasia?",
        "o": [
          "T-2 toxin",
          "Zearalenone",
          "Aflatoxin M1",
          "Patulin"
        ],
        "a": 0,
        "e": "T-2 toxin binds the 60S ribosomal subunit to block peptidyl transferase, causing radiomimetic damage: contact necrosis, enteritis, and lymphoid depletion.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Ochratoxin A, produced primarily by Aspergillus ochraceus and Penicillium verrucosum in stored cereal grains, acts as a primary target toxin for which organ?",
        "o": [
          "Kidney (inducing porcine nephropathy and proximal tubular degeneration)",
          "Heart",
          "Brain",
          "Skeletal muscle"
        ],
        "a": 0,
        "e": "Ochratoxin A is primarily nephrotoxic; it impairs phenylalanine-tRNA synthetase and promotes lipid peroxidation, causing tubular atrophy and interstitial fibrosis in pigs.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Classical Ergotism in cattle grazing parasitized rye or pasture grasses is caused by the sclerotia of Claviceps purpurea producing ergot alkaloids that induce:",
        "o": [
          "Intense peripheral vasoconstriction leading to dry gangrene and sloughing of hooves, ears, and tail tips",
          "Generalized flaccid motor paralysis",
          "Severe pulmonary edema and emphysema",
          "Excessive salivation and sweating alone"
        ],
        "a": 0,
        "e": "Ergot alkaloids (ergotamine, ergocristine) stimulate alpha-1 adrenergic receptors, causing persistent peripheral arteriolar spasm, endothelial thrombosis, and ischemic dry gangrene.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Facial Eczema in grazing sheep is a secondary photosensitization disease caused by sporidesmin, a hepatotoxin produced by the saprophytic pasture fungus:",
        "o": [
          "Pithomyces chartarum",
          "Claviceps purpurea",
          "Fusarium oxysporum",
          "Stachybotrys chartarum"
        ],
        "a": 0,
        "e": "Pithomyces chartarum produces sporidesmin in dead rye pasture litter; the toxin causes cholangiohepatitis and biliary occlusion, preventing excretion of the photodynamic agent phylloerythrin.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "In facial eczema of sheep, what photodynamic chlorophyll breakdown metabolite accumulates in the peripheral bloodstream to trigger acute solar skin ulceration?",
        "o": [
          "Phylloerythrin",
          "Porphobilinogen",
          "Bilirubin",
          "Hematin"
        ],
        "a": 0,
        "e": "Rumen microbes degrade chlorophyll into phylloerythrin, normally cleared by the liver; biliary occlusion by sporidesmin leads to cutaneous accumulation and solar photosensitization.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Pythiosis ('Swamp Cancer', 'Florida Horse Leech', or 'Kunkers') in horses and dogs is caused by Pythium insidiosum, an aquatic organism belonging to the class:",
        "o": [
          "Oomycetes (water molds, stramenopiles)",
          "Zygomycetes",
          "Basidiomycetes",
          "Deuteromycetes"
        ],
        "a": 0,
        "e": "Pythium insidiosum is an Oomycete (Kingdom Stramenopila); it possesses cellulose and beta-glucan in its wall but completely lacks chitin and ergosterol.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Why are standard antifungal drugs (e.g., Amphotericin B, Fluconazole) completely ineffective in the clinical treatment of Pythium insidiosum infections?",
        "o": [
          "Pythium insidiosum cell membranes contain cholesterol and completely lack ergosterol",
          "The cell wall excludes all small molecules",
          "The organism destroys antifungals with metallo-enzymes",
          "The organism is strictly intracellular"
        ],
        "a": 0,
        "e": "As an Oomycete, P. insidiosum incorporates host or exogenous sterols into its plasma membrane and does NOT synthesize ergosterol, conferring intrinsic resistance to polyenes and azoles.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "What pathognomonic macroscopic structures are found embedded within the ulcerating, granulomatous cutaneous tracts of horses suffering from pythiosis?",
        "o": [
          "'Kunkers' (hard, irregular, coral-like yellowish-white necrotic masses)",
          "Sulfur granules containing club-like bacteria",
          "Black grain eumycetoma granules",
          "Transparent cystic spherules"
        ],
        "a": 0,
        "e": "Kunkers are irregular, coral-like calcified necrotic masses (1–5 cm) composed of degranulated eosinophils, necrotic debris, and embedded Pythium hyphae.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Eumycetoma (true fungal mycetoma) is clinically distinguished from actinomycetoma (bacterial mycetoma) by:",
        "o": [
          "Presence of thick, true septate fungal hyphae (>=2–4 um wide) with chlamydospores inside draining tissue granules",
          "Presence of delicate branching Gram-positive filaments (<1 um wide)",
          "Rapid acute purulent liquefaction without granules",
          "Zero subcutaneous swelling"
        ],
        "a": 0,
        "e": "Eumycetoma granules contain wide (2–6 um) true septate fungal hyphae and swollen chlamydospores, whereas actinomycetoma granules contain thin (<1 um) bacterial filaments.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Stachybotryotoxicosis in horses and cattle is caused by Stachybotrys chartarum ('black mold') growing on damp straw, producing which class of toxins?",
        "o": [
          "Macrocyclic trichothecenes (e.g., Satratoxins)",
          "Aflatoxins",
          "Ergot alkaloids",
          "Fumonisins"
        ],
        "a": 0,
        "e": "Stachybotrys chartarum synthesizes macrocyclic trichothecenes (satratoxins G and H) that cause severe mucosal ulceration, hemorrhage, and severe pancytopenia.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "The tremorgenic mycotoxins (e.g., Penitrem A, Roquefortine C) produced by Penicillium crustosum on moldy garbage and food scraps cause which clinical syndrome in dogs?",
        "o": [
          "Acute muscle tremors, hyperthermia, ataxia, and severe extensor seizures",
          "Generalized flaccid paralysis",
          "Profuse bloody diarrhea without neurological signs",
          "Chronic renal failure"
        ],
        "a": 0,
        "e": "Penitrem A inhibits calcium-activated potassium channels and GABA transmission, triggering severe muscle tremors, ataxia, paddling, and seizures in dogs.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "In canine disseminated aspergillosis, what non-fumigatus species is most frequently isolated, particularly in female German Shepherd dogs?",
        "o": [
          "Aspergillus terreus",
          "Aspergillus fumigatus",
          "Aspergillus flavus",
          "Aspergillus niger"
        ],
        "a": 0,
        "e": "Aspergillus terreus possesses an affinity for bone and intervertebral discs, causing osteomyelitis and discospondylitis predominantly in German Shepherd dogs.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Lupinosis in grazing sheep is a hepatotoxic disease caused by the ingestion of lupin plants infected with the fungus Diaporthe toxica, which produces:",
        "o": [
          "Phomopsins (microtubule-disrupting hexapeptides)",
          "Aflatoxin B1",
          "Zearalenone",
          "Ochratoxin A"
        ],
        "a": 0,
        "e": "Diaporthe toxica (formerly Phomopsis leptostromiformis) produces phomopsins that arrest mitosis in hepatic parenchymal cells, causing severe liver atrophy and jaundice.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "Which deep subcutaneous mycosis produces chronic, verrucous, crusted, cauliflower-like skin granulomas containing pathognomonic dark brown, thick-walled 'muriform' (medlar) bodies?",
        "o": [
          "Chromoblastomycosis",
          "Sporotrichosis",
          "Pythiosis",
          "Rhinosporidiosis"
        ],
        "a": 0,
        "e": "Chromoblastomycosis (caused by dematiaceous fungi like Fonsecaea, Cladophialophora) features pigmented muriform (sclerotic / medlar) bodies dividing by internal septation.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "What is the primary pathological lesion observed in poultry suffering from acute aflatoxicosis?",
        "o": [
          "Severe enlarged, pale yellow, friable liver with petechial hemorrhages and bile duct hyperplasia",
          "Severe pulmonary consolidation with nodules",
          "Softening and liquefaction of the cerebrum",
          "Hardened gangrenous comb and wattles"
        ],
        "a": 0,
        "e": "Aflatoxicosis causes acute hepatic steatosis, centrilobular necrosis, intense bile duct hyperplasia, and coagulopathy in young broilers and ducklings.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Slaframine, an indolizidine alkaloid mycotoxin produced by Rhizoctonia leguminicola on red clover ('black patch disease'), causes which characteristic clinical sign in horses and cattle?",
        "o": [
          "Copious, uncontrolled salivation ('Slobbers' syndrome)",
          "Severe alopecia and skin cracking",
          "Flaccid paralysis of the tongue",
          "Dry gangrene of the tail tip"
        ],
        "a": 0,
        "e": "Slaframine is converted by hepatic metabolism into a potent muscarinic acetylcholine agonist that stimulates extreme exocrine salivary hypersecretion ('slobbers').",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Fungi are prokaryotic microorganisms that lack true membrane-bound nuclei and mitochondria.",
        "a": false,
        "e": "False. Fungi are strictly eukaryotic organisms with membrane-bound nuclei, linear chromosomes, mitochondria, and an endoplasmic reticulum.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Standard Sabouraud Dextrose Agar has an alkaline pH of 8.5 to encourage fungal sporulation while suppressing bacteria.",
        "a": false,
        "e": "False. SDA is formulated at an acidic pH (5.4–5.6) to inhibit bacterial contamination while supporting fungal vegetative growth.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Cycloheximide in selective mycology media inhibits eukaryotic protein synthesis by targeting the 60S ribosomal subunit of contaminant saprophytic molds.",
        "a": true,
        "e": "True. Cycloheximide binds the 60S ribosomal subunit, blocking translocation; dermatophytes are inherently resistant to this concentration.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The cotton blue dye in LPCB stains fungal cell walls by binding electrostatically to the basic amino groups of chitin.",
        "a": true,
        "e": "True. Cotton blue (an acid dye) binds strongly to the chitinous polymers of the fungal cell wall, coloring hyphae and spores deep blue.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Polyene antifungals exhibit selective toxicity because they bind with significantly higher affinity to fungal ergosterol than to mammalian cholesterol.",
        "a": true,
        "e": "True. Amphotericin B binds ergosterol with ~10-fold greater affinity than cholesterol, though high doses can still cross-react and cause mammalian nephrotoxicity.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Thermal dimorphic fungi grow as unicellular yeasts in soil at 25°C and transform into filamentous molds inside animal tissues at 37°C.",
        "a": false,
        "e": "False. The reverse is true: dimorphic pathogens exist as molds (mycelium) at 25°C in soil and convert into yeasts (or spherules) at 37°C in host tissue.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Potassium hydroxide (KOH) mounts clear human and animal clinical specimens because the beta-1,4-linked chitin in fungal cell walls resists alkali hydrolysis.",
        "a": true,
        "e": "True. While host keratin, proteins, and cellular membranes are saponified and cleared by 10–20% KOH, fungal chitin remains intact and visible.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Echinocandins are actively bactericidal against Gram-negative bacteria due to outer membrane disruption.",
        "a": false,
        "e": "False. Echinocandins target fungal 1,3-beta-D-glucan synthase; bacteria lack glucan entirely and are completely unaffected.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Conidiophores are specialized reproductive hyphae that support and bear non-motile asexual spores termed conidia.",
        "a": true,
        "e": "True. Conidiophores differentiate from vegetative hyphae to elevate conidiogenous cells (phialides) and release conidia into the air.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Fungal hyphae with complete, unperforated cross-walls that prevent any cytoplasmic or organellar exchange are the hallmark of all Ascomycota.",
        "a": false,
        "e": "False. Septa in Ascomycota possess a central simple pore guarded by Woronin bodies, permitting regular cytoplasmic and organelle flow between cells.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "A macroconidium is a large, multicellular, often spindle- or club-shaped asexual conidium divided by transverse or longitudinal septa.",
        "a": true,
        "e": "True. Macroconidia (abundant in Microsporum and Trichophyton) are multi-celled spores that provide primary taxonomic criteria for dermatophyte identification.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "Antifungal E-test strips determine the Minimum Inhibitory Concentration (MIC) by creating a continuous stable exponential concentration gradient of the drug on an agar plate.",
        "a": true,
        "e": "True. The intersection of the symmetrical elliptical zone of inhibition with the calibrated plastic strip indicates the exact quantitative MIC value.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Candida albicans is an obligate environmental mold that cannot survive as a normal commensal on mammalian mucosal surfaces.",
        "a": false,
        "e": "False. C. albicans is a common mucosal commensal of the mammalian digestive and genital tracts, transforming into a pathogen when host defenses or flora are disrupted.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The germ tube test is positive when Candida albicans produces tubular hyphal extensions with distinct constrictions at their point of emergence from the blastoconidium.",
        "a": false,
        "e": "False. True germ tubes have parallel walls and NO constriction at the origin; pseudohyphal budding exhibits definite constrictions.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Cryptococcus neoformans is an encapsulated yeast that forms extensive mycelial mats and aerial conidiophores in infected mammalian tissues.",
        "a": false,
        "e": "False. In host tissues, C. neoformans grows exclusively as a round to oval, single or narrow-based budding yeast surrounded by a wide gelatinous capsule (no hyphae).",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Cryptococcal capsular polysaccharide glucuronoxylomannan (GXM) directly suppresses host T-cell proliferation and inhibits leukocyte migration into the lesion.",
        "a": true,
        "e": "True. Soluble GXM sheds into host fluids, impairing neutrophil chemotaxis, reducing phagocytosis, and inducing immune tolerance.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Malassezia pachydermatis infection in dogs is typically contagious and spreads rapidly from dog to dog via direct contact in boarding kennels.",
        "a": false,
        "e": "False. M. pachydermatis is a normal non-contagious skin commensal; clinical disease is triggered by underlying allergic dermatitis (atopy, food allergy) or endocrine disease.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Aspergillus fumigatus produces abundant, heavy chlamydospores that are spread solely through standing water puddles.",
        "a": false,
        "e": "False. A. fumigatus produces trillions of tiny (2–3 um) airborne conidia that are inhaled deep into alveoli and avian air sacs.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Brooder pneumonia in poultry chicks is characterized by nodular yellowish-white granulomas throughout the lungs and air sacs, caused by Aspergillus fumigatus.",
        "a": true,
        "e": "True. Inhaled spores germinate in warm, humid brooders, causing acute mycotic pneumonia and airsacculitis with high chick mortality.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "In guttural pouch mycosis of horses, profuse epistaxis results from mycotic erosion through the wall of the internal or external carotid arteries.",
        "a": true,
        "e": "True. Aspergillus hyphae invade through the guttural pouch roof directly into the carotid arterial wall, creating aneurysm and catastrophic hemorrhage.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Members of the order Mucorales (Zygomycetes) are characteristically susceptible to voriconazole in clinical therapy.",
        "a": false,
        "e": "False. Mucorales fungi are inherently resistant to voriconazole; amphotericin B and posaconazole or isavuconazole are required for clinical treatment.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 3
      },
      {
        "q": "In direct tape strip cytology of canine skin, Malassezia pachydermatis cells appear as characteristic dark purple, peanut-shaped unipolar budding yeasts with Diff-Quik stain.",
        "a": true,
        "e": "True. Tape strip cytology readily visualizes the characteristic footprint- or peanut-shaped budding yeasts adhering to keratinocytes.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Candida glabrata readily produces long pseudohyphae and abundant terminal chlamydospores on cornmeal agar.",
        "a": false,
        "e": "False. Unlike C. albicans, Candida glabrata produces strictly yeast cells and never forms pseudohyphae or chlamydospores.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "Microsporum canis macroconidia are thin-walled, smooth, and possess 2 to 4 cells with blunt rounded ends.",
        "a": false,
        "e": "False. M. canis macroconidia are thick-walled, distinctly rough/verrucose, spindle-shaped with an asymmetrical curved terminal beak, and contain 6–12 cells.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "A negative Wood's lamp examination completely rules out dermatophyte infection in a cat exhibiting circular alopecia and scaling.",
        "a": false,
        "e": "False. Only ~50% of M. canis strains fluoresce, and other dermatophytes (e.g., Trichophyton) never fluoresce under Wood's light; fungal culture is required.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Dermatophytes are keratinophilic fungi capable of utilizing keratin as their sole nitrogen and carbon source via specialized keratinase enzymes.",
        "a": true,
        "e": "True. Dermatophytes secrete endo- and exo-keratinases and sulfitolytic enzymes that break disulfide bonds and digest insoluble cornified keratin.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Histoplasma capsulatum yeasts survive and proliferate inside host phagolysosomes by actively raising the phagosomal pH and capturing host iron.",
        "a": true,
        "e": "True. H. capsulatum maintains an alkaline intraphagosomal pH (approx. 6.5) to neutralize lysosomal acid hydrolases, proliferating inside macrophages.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "Blastomyces dermatitidis yeast cells are distinguished in tissue cytology by their extremely narrow, thread-like neck of daughter bud attachment.",
        "a": false,
        "e": "False. B. dermatitidis is pathognomonic for BROAD-based budding, where the junction between parent cell and daughter bud is wide and flat (4–5 um).",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Coccidioides immitis arthroconidia are easily killed by routine room-temperature drying and pose zero aerosol biohazard in diagnostic mycology laboratories.",
        "a": false,
        "e": "False. Coccidioides arthroconidia are extremely resistant, light, airborne, and infectious (BSL-3 pathogen); opening petri plates can cause lethal laboratory-acquired infection.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "Domestic cats infected with Sporothrix schenckii shed large quantities of viable yeast cells from cutaneous ulcers, representing a serious zoonotic risk to veterinary staff.",
        "a": true,
        "e": "True. Unlike dogs and humans (where organisms are scarce), cats harbor millions of infectious yeasts in exudates, transmitting sporotrichosis via scratches or bites.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Rhinosporidium seeberi can be readily grown on routine Sabouraud Dextrose Agar incubated at 37°C within 48 hours.",
        "a": false,
        "e": "False. Rhinosporidium seeberi has never been successfully cultivated on artificial cell-free media; diagnosis relies entirely on histopathology and microscopy.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Trichophyton verrucosum ringworm is common in housed dairy calves during winter, spreading via contaminated grooming tools and barn walls.",
        "a": true,
        "e": "True. T. verrucosum arthroconidia remain viable on wooden stanchions and fences for years, spreading rapidly in crowded, unlit winter housing.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The presence of an asteroid body (Splendore-Hoeppli phenomenon) surrounding an extracellular yeast is pathognomonic for sporotrichosis in tissue sections.",
        "a": true,
        "e": "True. Asteroid bodies represent radiant eosinophilic deposits of host immunoglobulin and complement complexes coating the central yeast cell.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "In fungal wet mounts of dermatophyte skin scrapings, the addition of dimethyl sulfoxide (DMSO) to KOH accelerates keratin dissolution without requiring heat.",
        "a": true,
        "e": "True. Formulations containing 20% KOH in 40% DMSO rapidly penetrate and clear thick keratin flakes in 5–10 minutes without bunsen burner heating.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Aflatoxins are heat-stable molecules that easily survive standard cooking, baking, and feed pelleting temperatures.",
        "a": true,
        "e": "True. Aflatoxins resist thermal destruction up to 250–300°C; standard feed extrusion and cooking processes fail to inactivate them.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Zearalenone toxicity causes acute hepatic failure and severe pulmonary edema in adult dairy cows.",
        "a": false,
        "e": "False. Zearalenone is non-hepatotoxic and acts as an estrogen analog, producing vulvovaginitis, nymphomania, and reproductive dysfunction in swine.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Fumonisin B1 inhibits ceramide synthase, causing the intracellular accumulation of toxic free sphinganine and sphingosine.",
        "a": true,
        "e": "True. Fumonisin B1 is a structural analog of sphingoid bases; its competitive inhibition of ceramide synthase elevates the sphinganine-to-sphingosine ratio.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 3
      },
      {
        "q": "Ergot sclerotia represent the hardened, dark purple overwintering resting bodies of Claviceps purpurea that replace normal grass seeds in the seed head.",
        "a": true,
        "e": "True. Sclerotia (ergots) are compact masses of hardened fungal mycelium that mimic grain kernels and contain high concentrations of ergot alkaloids.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Sporidesmin causes primary photosensitization by directly absorbing ultraviolet light in non-pigmented skin without liver involvement.",
        "a": false,
        "e": "False. Facial eczema is a secondary (hepatogenous) photosensitization: sporidesmin damages bile ducts, preventing phylloerythrin biliary excretion.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Pythium insidiosum produces motile, biflagellate aquatic zoospores that are chemotactically attracted to mammalian hair and damaged skin.",
        "a": true,
        "e": "True. In warm water bodies, P. insidiosum releases motile biflagellate zoospores that encyst upon horse or dog skin, invading tissues.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Aflatoxin M1 in dairy milk is completely destroyed by routine commercial batch or HTST pasteurization.",
        "a": false,
        "e": "False. Aflatoxin M1 is heat-stable and survives pasteurization and cheese-making, requiring strict regulatory limits in raw milk (<0.5 ppb).",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Ochratoxin A is primarily excreted unchanged by the kidneys and causes prominent degeneration of renal proximal convoluted tubules.",
        "a": true,
        "e": "True. Ochratoxin A concentrates in proximal renal tubular epithelial cells, causing progressive tubular atrophy, interstitial fibrosis, and glycosuria.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Pythiosis lesions in dogs typically manifest as non-healing cutaneous ulcerations and severe segmental transmural eosinophilic gastrointestinal granulomas.",
        "a": true,
        "e": "True. Ingested zoospores penetrate the canine gastric or intestinal wall, forming dense transmural fibrotic granulomas causing chronic obstruction.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Trichothecene mycotoxins (such as T-2 toxin) are dangerous solely through chronic ingestion and cannot be absorbed through intact skin.",
        "a": false,
        "e": "False. T-2 toxin is a potent dermal contact toxin that rapidly penetrates intact skin, producing contact dermatitis, blistering, and systemic toxicity.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Slaframine toxicity ('slobbers') in horses is life-threatening and causes immediate bilateral blindness within hours of ingestion.",
        "a": false,
        "e": "False. Slaframine toxicity is rarely fatal; it produces profuse salivation that resolves spontaneously within 24–48 hours upon removing moldy red clover hay.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      }
    ],
    "fib": [
      {
        "q": "The principal sterol found in fungal cell membranes that regulates membrane fluidity and serves as the molecular target of polyene antifungals is ______.",
        "a": [
          "ergosterol"
        ],
        "a_display": "Ergosterol",
        "e": "Ergosterol is uniquely synthesized by fungi through the squalene-lanosterol pathway, making it an ideal antifungal target.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The major structural polysaccharide component of the fungal cell wall composed of unbranched chains of beta-1,4-linked N-acetylglucosamine is ______.",
        "a": [
          "chitin"
        ],
        "a_display": "Chitin",
        "e": "Chitin microfibrils provide tensile strength, rigidity, and resistance to osmotic lysis in fungal cell walls.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The standard primary growth medium used worldwide for the routine isolation and cultivation of pathogenic fungi is ______ Dextrose Agar.",
        "a": [
          "sabouraud",
          "sda"
        ],
        "a_display": "Sabouraud Dextrose Agar (SDA)",
        "e": "Formulated by Raymond Sabouraud in 1892, SDA remains the international benchmark fungal isolation medium.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "In Lactophenol Cotton Blue mounting fluid, the chemical component responsible for killing the living fungus and inactivating lytic enzymes is ______.",
        "a": [
          "phenol"
        ],
        "a_display": "Phenol",
        "e": "Phenol denatures proteins instantly, killing potentially infectious fungal elements and preserving cell morphology.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The slide culture method that allows observation of undisturbed conidiophore and spore morphology under a coverslip is known as ______ slide culture.",
        "a": [
          "riddell's",
          "riddell",
          "riddells"
        ],
        "a_display": "Riddell's slide culture",
        "e": "Riddell's agar block slide culture technique maintains intact the spatial arrangement of fungal reproductive structures.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "The fungal enzyme lanosterol 14-alpha-demethylase, which is selectively inhibited by azole antifungals, is encoded by the ______ gene.",
        "a": [
          "cyp51",
          "erg11"
        ],
        "a_display": "CYP51 (ERG11)",
        "e": "Point mutations or overexpression of CYP51/ERG11 represent a major mechanism of acquired clinical resistance to azole drugs.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 3
      },
      {
        "q": "A chemical clearing agent commonly used at 10% to 20% concentration to dissolve animal epithelial keratin in skin scrapings is potassium ______.",
        "a": [
          "hydroxide",
          "koh"
        ],
        "a_display": "Potassium hydroxide (KOH)",
        "e": "KOH clears tissue keratin without degrading the alkali-resistant fungal chitin cell wall.",
        "topicId": "u2-t02",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The antifungal drug class that selectively inhibits fungal beta-1,3-D-glucan synthesis, causing cell wall collapse, is the ______ class.",
        "a": [
          "echinocandins",
          "echinocandin"
        ],
        "a_display": "Echinocandins (e.g., Caspofungin)",
        "e": "Echinocandins are lipopeptides that act as non-competitive inhibitors of the beta-1,3-glucan synthase enzyme complex.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Asexual fungal spores produced by direct disarticulation and fragmentation of vegetative hyphae into individual cylindrical cells are termed ______.",
        "a": [
          "arthroconidia",
          "arthrospores"
        ],
        "a_display": "Arthroconidia (Arthrospores)",
        "e": "Arthroconidia represent the infectious form of dermatophytes inside hair shafts and Coccidioides in the environment.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Fungi that exist as multicellular filamentous molds at room temperature (25°C) and convert to unicellular yeasts in host tissue (37°C) are termed ______ fungi.",
        "a": [
          "dimorphic",
          "thermal dimorphic",
          "thermally dimorphic"
        ],
        "a_display": "Dimorphic (Thermal dimorphic)",
        "e": "Pathogens such as Histoplasma, Blastomyces, and Sporothrix exhibit thermal dimorphism regulated by temperature-sensitive transcription factors.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The antifungal medication that concentrates in keratinized tissues and disrupts the fungal mitotic spindle apparatus by binding to tubulin is ______.",
        "a": [
          "griseofulvin"
        ],
        "a_display": "Griseofulvin",
        "e": "Griseofulvin halts dermatophyte mitosis in metaphase and is incorporated into newly developing keratin.",
        "topicId": "u2-t03",
        "subSection": "u2-s1",
        "diff": 2
      },
      {
        "q": "Hyphae that possess no transverse cross-walls throughout their length are described as aseptate or ______ hyphae.",
        "a": [
          "coenocytic"
        ],
        "a_display": "Coenocytic (Aseptate)",
        "e": "Zygomycetous fungi (Rhizopus, Mucor) possess coenocytic hyphae containing hundreds of shared nuclei in a continuous cytoplasm.",
        "topicId": "u2-t01",
        "subSection": "u2-s1",
        "diff": 1
      },
      {
        "q": "The rapid phenotypic test in which Candida albicans forms slender germ tubes within 2 to 3 hours of incubation in mammalian serum at 37°C is the ______ phenomenon.",
        "a": [
          "reynolds-braude",
          "reynolds braude",
          "germ tube"
        ],
        "a_display": "Reynolds-Braude phenomenon (Germ tube test)",
        "e": "Described by Reynolds and Braude in 1956, germ tube production in serum differentiates C. albicans and C. dubliniensis from other yeasts.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The thick-walled asexual survival spores produced terminally by Candida albicans on cornmeal agar with Tween 80 are ______.",
        "a": [
          "chlamydospores",
          "chlamydoconidia"
        ],
        "a_display": "Chlamydospores",
        "e": "Terminal chlamydospores are spherical, thick-walled, and highly refractile, serving as a diagnostic hallmark of C. albicans.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The prominent mucopolysaccharide capsule of Cryptococcus neoformans is best demonstrated microscopically as a clear refractive halo using a negative mount of ______ ink.",
        "a": [
          "india",
          "india ink",
          "nigrosin"
        ],
        "a_display": "India ink",
        "e": "Colloidal carbon particles in India ink cannot penetrate the large polysaccharide capsule, delineating it clearly against a dark field.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The birdseed agar medium used to demonstrate brown-black melanin production by Cryptococcus neoformans is also known as ______ agar.",
        "a": [
          "staib",
          "staib's",
          "guizotia abyssinica"
        ],
        "a_display": "Staib (Birdseed) agar",
        "e": "Guizotia abyssinica seeds contain caffeic acid, which cryptococcal phenoloxidase converts into melanin, coloring colonies dark brown.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The unipolar budding, lipophilic yeast that exhibits a characteristic peanut or footprint shape and causes canine otitis externa is Malassezia ______.",
        "a": [
          "pachydermatis"
        ],
        "a_display": "Malassezia pachydermatis",
        "e": "M. pachydermatis displays a broad budding base with a distinct collar, producing the classic 'footprint' appearance.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The acute mycotic pneumonia of day-old poultry chicks caused by Aspergillus fumigatus is commonly called ______ pneumonia.",
        "a": [
          "brooder",
          "brooder pneumonia"
        ],
        "a_display": "Brooder pneumonia",
        "e": "Aspergillus fumigatus spores proliferating in damp, warm brooder bedding cause high mortality from nodular pneumonic aspergillosis.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "Aspergillus fumigatus hyphae exhibit regular septation and branch dichotomously at an acute angle of approximately ______ degrees.",
        "a": [
          "45",
          "forty five",
          "45°"
        ],
        "a_display": "45 degrees",
        "e": "Progressive, symmetric 45-degree dichotomous branching distinguishes Aspergillus from Mucorales (which branch at 90 degrees).",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The catastrophic clinical complication of equine Guttural Pouch Mycosis caused by Aspergillus eroding into the internal carotid artery is severe ______ (nasal bleeding).",
        "a": [
          "epistaxis",
          "nasal bleeding",
          "hemorrhage"
        ],
        "a_display": "Epistaxis (Nasal hemorrhage)",
        "e": "Mycotic invasion degrades the arterial wall elastic lamina, producing sudden, massive, and potentially fatal epistaxis.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The order of fungi that produce broad, aseptate ribbon-like hyphae and cause mycotic rumenitis following grain overload in cattle is the ______.",
        "a": [
          "mucorales",
          "zygomycetes"
        ],
        "a_display": "Mucorales (Zygomycetes)",
        "e": "Rhizopus, Mucor, and Lichtheimia invade necrotic ruminal blood vessels after acidosis, causing infarction and thrombosis.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The root-like structures present at the nodes of Rhizopus that distinguish it from Mucor are termed ______.",
        "a": [
          "rhizoids"
        ],
        "a_display": "Rhizoids",
        "e": "Rhizoids anchor the fungus to the substrate and arise directly opposite the sporangiophores in Rhizopus.",
        "topicId": "u2-t05",
        "subSection": "u2-s2",
        "diff": 2
      },
      {
        "q": "The clinical condition in poultry where Candida albicans overgrowth causes a curd-like, 'Turkish towel' pseudomembrane on the crop mucosa is known as ______ crop.",
        "a": [
          "sour",
          "sour crop"
        ],
        "a_display": "Sour crop (Moniliasis)",
        "e": "Sour crop occurs after prolonged oral antibiotic therapy or malnutrition, allowing commensal C. albicans to form diphtheritic plaques.",
        "topicId": "u2-t04",
        "subSection": "u2-s2",
        "diff": 1
      },
      {
        "q": "The handheld ultraviolet light device emitting a wavelength of 365 nm used for rapid clinical screening of feline Microsporum canis ringworm is the ______ lamp.",
        "a": [
          "wood's",
          "wood",
          "woods"
        ],
        "a_display": "Wood's lamp",
        "e": "Wood's lamp utilizes a nickel oxide filter emitting long-wave UV (365 nm) to excite pteridine pigments in M. canis-infected hair.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The dermatophyte species that causes circumscribed, heavily crusted periocular ringworm lesions in calves and requires inositol and thiamine is Trichophyton ______.",
        "a": [
          "verrucosum"
        ],
        "a_display": "Trichophyton verrucosum",
        "e": "T. verrucosum produces large arthrospores in chains (ectothrix) around hair shafts in cattle.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "In Dermatophyte Test Medium (DTM), the pH indicator that shifts from yellow to deep red upon dermatophyte growth is ______ red.",
        "a": [
          "phenol",
          "phenol red"
        ],
        "a_display": "Phenol red",
        "e": "Alkaline nitrogenous metabolites released from peptone breakdown shift the phenol red indicator from acidic yellow to red.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The characteristic finger-like, knobby projections decorating the large spherical macroconidia of Histoplasma capsulatum at 25°C are termed ______ macroconidia.",
        "a": [
          "tuberculate"
        ],
        "a_display": "Tuberculate macroconidia",
        "e": "Tuberculate macroconidia (7–15 um) with distinct cylindrical protuberances are diagnostic of H. capsulatum mycelial culture.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The mode of yeast budding in Blastomyces dermatitidis where the daughter bud is attached to the parent cell by a wide, flat junction is ______-based budding.",
        "a": [
          "broad",
          "broad-based",
          "broad based"
        ],
        "a_display": "Broad-based budding",
        "e": "The broad neck of attachment (4–5 um) and thick refractile double-contoured wall are characteristic of B. dermatitidis.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "In animal tissues, Coccidioides immitis forms large, thick-walled, spherical structures (20–100 um) filled with numerous endospores called ______.",
        "a": [
          "spherules",
          "spherule"
        ],
        "a_display": "Spherules",
        "e": "Rupture of mature spherules releases hundreds of infectious endospores, each capable of developing into a new spherule.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The classical tissue yeast morphology of Sporothrix schenckii in feline lesions is described as oval to ______-shaped budding yeasts.",
        "a": [
          "cigar",
          "cigar-shaped",
          "cigar shaped"
        ],
        "a_display": "Cigar-shaped",
        "e": "Pleomorphic elongated yeasts measuring 2–3 x 4–6 um resemble cigars inside and outside macrophages in feline exudates.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "The aquatic mesomycetozoan organism responsible for chronic bleeding polyps on the nasal mucous membranes of cattle and horses is ______ seeberi.",
        "a": [
          "rhinosporidium",
          "rhinosporidium seeberi"
        ],
        "a_display": "Rhinosporidium seeberi",
        "e": "R. seeberi produces giant friable strawberry-like nasal polyps containing visible white sporangial pinpoints.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The type of dermatophyte hair invasion where fungal arthroconidia form a dense sheath on the outside of the hair shaft is termed ______ invasion.",
        "a": [
          "ectothrix"
        ],
        "a_display": "Ectothrix",
        "e": "In ectothrix infections (e.g., M. canis, T. verrucosum), hyphae grow inside the shaft while chains of arthrospores coat the outside cuticle.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 2
      },
      {
        "q": "Microsporum gypseum is an ecological example of a ______ dermatophyte, naturally living as a free saprophyte in soil.",
        "a": [
          "geophilic"
        ],
        "a_display": "Geophilic",
        "e": "Geophilic dermatophytes inhabit soil, decomposing animal keratin; dogs acquire M. gypseum by digging in contaminated dirt.",
        "topicId": "u2-t06",
        "subSection": "u2-s3",
        "diff": 1
      },
      {
        "q": "The eosinophilic, radiating proteinaceous deposit surrounding Sporothrix yeasts in chronic granulomas is known as the Splendore-______ phenomenon.",
        "a": [
          "hoeppli",
          "hoeppli phenomenon"
        ],
        "a_display": "Splendore-Hoeppli phenomenon (Asteroid body)",
        "e": "The Splendore-Hoeppli phenomenon forms radiating club-like eosinophilic projections (antigen-antibody complexes) around fungal or parasitic elements.",
        "topicId": "u2-t07",
        "subSection": "u2-s3",
        "diff": 3
      },
      {
        "q": "The specific chemical metabolite of Aflatoxin B1 that is excreted in the milk of lactating dairy cows consuming contaminated feed is Aflatoxin ______.",
        "a": [
          "m1",
          "m-1"
        ],
        "a_display": "Aflatoxin M1",
        "e": "Aflatoxin M1 (M for milk) is a toxic 4-hydroxy metabolite regulated with strict zero-tolerance or <0.5 ppb limits in commercial dairy supplies.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The estrogenic mycotoxin produced by Fusarium species on corn that causes severe vulvovaginitis and rectal prolapse in pigs is ______.",
        "a": [
          "zearalenone",
          "f-2 toxin",
          "f2 toxin"
        ],
        "a_display": "Zearalenone (F-2 toxin)",
        "e": "Zearalenone mimics 17-beta-estradiol, inducing precocious estrus, ovarian atrophy, and uterine hyperplasia in prepubertal swine.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Equine Leukoencephalomalacia (ELEM), characterized by liquefactive necrosis of white matter in the horse brain, is caused by ______ B1.",
        "a": [
          "fumonisin",
          "fumonisin b1"
        ],
        "a_display": "Fumonisin B1",
        "e": "Fumonisin B1 disrupts sphingolipid metabolism, causing necrosis in cerebral white matter (ELEM in horses) and acute pulmonary edema (PPE in swine).",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The mycotoxin produced by Claviceps purpurea that causes peripheral vasoconstriction, ischemia, and dry gangrene of the extremities is ______.",
        "a": [
          "ergot",
          "ergot alkaloids",
          "ergotamine"
        ],
        "a_display": "Ergot alkaloids (Ergotamine)",
        "e": "Ergot alkaloids stimulate alpha-adrenergic receptors and serotonin receptors, inducing intense sustained peripheral arterial vasoconstriction.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "Facial eczema in grazing sheep is caused by the mycotoxin ______ produced by the saprophytic fungus Pithomyces chartarum.",
        "a": [
          "sporidesmin"
        ],
        "a_display": "Sporidesmin",
        "e": "Sporidesmin causes severe pericholangitis and obliterative cholangitis in the liver, leading to phylloerythrin retention and facial photosensitization.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The photodynamic pigment derived from bacterial chlorophyll degradation that accumulates in the blood during facial eczema is ______.",
        "a": [
          "phylloerythrin"
        ],
        "a_display": "Phylloerythrin",
        "e": "Phylloerythrin is a potent endogenous photosensitizing porphyrin that absorbs sunlight in non-pigmented skin, generating cytotoxic free radicals.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The water mold organism belonging to the class Oomycetes that causes 'Swamp Cancer' or cutaneous granulomas with 'kunkers' in horses is Pythium ______.",
        "a": [
          "insidiosum"
        ],
        "a_display": "Pythium insidiosum",
        "e": "Pythium insidiosum is an aquatic stramenopile whose motile zoospores encyst in equine skin wounds, producing chronic granulomas.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The hard, irregular, yellowish-white coral-like necrotic masses embedded in equine pythiosis granulomatous tracts are known as ______.",
        "a": [
          "kunkers",
          "leeches"
        ],
        "a_display": "Kunkers (Leeches)",
        "e": "Kunkers are firm masses of eosinophilic major basic protein, necrotic cells, and Pythium hyphae that can be enucleated from sinus tracts.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "Ochratoxin A is a nephrotoxic mycotoxin that primarily damages the proximal convoluted ______ of the kidney in pigs and poultry.",
        "a": [
          "tubules",
          "tubule"
        ],
        "a_display": "Tubules",
        "e": "Ochratoxin A causes progressive loss of tubular brush borders, interstitial fibrosis, and renal failure in swine (porcine nephropathy).",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 2
      },
      {
        "q": "The mycotoxic disease of horses and cattle caused by Rhizoctonia leguminicola on red clover producing profuse drooling is commonly termed ______ syndrome.",
        "a": [
          "slobbers",
          "slobber"
        ],
        "a_display": "Slobbers syndrome",
        "e": "Slaframine acts as a parasympathomimetic secretagogue, inducing excessive salivary flow (slobbering) within hours of hay consumption.",
        "topicId": "u2-t08",
        "subSection": "u2-s4",
        "diff": 1
      },
      {
        "q": "The dark brown, thick-walled, muriform (medlar) bodies that divide by internal septation in chromoblastomycosis are also known as ______ bodies.",
        "a": [
          "sclerotic",
          "medlar",
          "muriform"
        ],
        "a_display": "Sclerotic (Medlar / Muriform) bodies",
        "e": "Sclerotic cells (medlar bodies) are chestnut-brown, thick-walled cells dividing by internal cleavage rather than budding.",
        "topicId": "u2-t09",
        "subSection": "u2-s4",
        "diff": 3
      }
    ]
  },

  "unit-3": {
    "mcq": [
      {
        "q": "Type II restriction endonucleases are preferred in recombinant DNA technology over Type I and Type III enzymes primarily because they:",
        "o": [
          "Cleave DNA at precise, predictable phosphodiester positions within or immediately adjacent to their specific palindromic recognition sequences without requiring ATP",
          "Cleave at random non-specific sites several thousand base pairs away",
          "Require both ATP and S-adenosylmethionine for endonucleolytic activity",
          "Act solely as exonucleases degrading from the 3' end"
        ],
        "a": 0,
        "e": "Type II enzymes recognize symmetrical palindromic sequences (4–8 bp) and cleave predictably within them, requiring only Mg2+ as a cofactor without ATP.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "What is the specific 6-base pair palindromic recognition sequence and cleavage pattern of the classical Type II restriction enzyme EcoRI?",
        "o": [
          "5'-G^AATTC-3' (generating 5' overhang cohesive ends)",
          "5'-A^AGCTT-3'",
          "5'-G^GATCC-3'",
          "5'-CCC^GGG-3'"
        ],
        "a": 0,
        "e": "EcoRI (isolated from E. coli RY13) cleaves between G and A in 5'-GAATTC-3', producing 4-nucleotide 5' cohesive (sticky) overhangs.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Restriction endonucleases that recognize identical nucleotide sequences but cleave at different positions within that sequence to yield different terminus types are called:",
        "o": [
          "Neoschizomers",
          "Isoschizomers",
          "Isocaudomers",
          "Epimers"
        ],
        "a": 0,
        "e": "Neoschizomers share the same recognition sequence but cleave at different phosphodiester bonds (e.g., SmaI cleaves CCC^GGG blunt, while XmaI cleaves C^CCGGG sticky).",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In plasmid cloning vectors, the synthetic DNA segment containing closely spaced, unique recognition sites for multiple restriction endonucleases is termed the:",
        "o": [
          "Multiple Cloning Site (MCS or Polylinker)",
          "Origin of replication (ori)",
          "Selectable marker cassette",
          "Promoter-operator region"
        ],
        "a": 0,
        "e": "An MCS (polylinker) provides unique restriction enzyme cleavage sites within the lacZ alpha-peptide gene, allowing flexible insertion of foreign DNA.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "In blue-white colony screening with pUC series plasmids, why do bacterial colonies containing recombinant plasmids containing inserts appear white on X-gal agar?",
        "o": [
          "Insertional inactivation of the lacZ alpha-peptide gene prevents functional alpha-complementation of beta-galactosidase",
          "The inserted gene destroys the ampicillin resistance protein",
          "X-gal is destroyed by bacterial exonucleases",
          "Foreign DNA prevents uptake of IPTG"
        ],
        "a": 0,
        "e": "Insertion of foreign DNA into the MCS disrupts the lacZ alpha-peptide open reading frame; without alpha-complementation, inactive beta-galactosidase cannot cleave X-gal to form blue indigo.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In blue-white screening, what is the exact biochemical function of Isopropyl-beta-D-1-thiogalactopyranoside (IPTG)?",
        "o": [
          "Non-metabolizable gratuitous inducer that binds and inactivates the LacI repressor protein",
          "Chromogenic substrate that turns blue upon enzymatic cleavage",
          "Selective antibiotic killing non-transformed bacteria",
          "Osmotic stabilizer during heat shock"
        ],
        "a": 0,
        "e": "IPTG acts as a non-metabolizable gratuitous inducer; it binds the LacI repressor to induce lac promoter transcription without being degraded by beta-galactosidase.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "What chromogenic substrate is cleaved by active beta-galactosidase in blue-white screening to yield an insoluble 5,5'-dibromo-4,4'-dichloro-indigo blue precipitate?",
        "o": [
          "X-gal (5-bromo-4-chloro-3-indolyl-beta-D-galactopyranoside)",
          "ONPG",
          "Fluorescein di-beta-D-galactopyranoside",
          "NBT/BCIP"
        ],
        "a": 0,
        "e": "Active beta-galactosidase hydrolyzes X-gal to galactose and a substituted indoxyl monomer that spontaneously dimerizes into an intense blue insoluble indigo dye.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which enzyme catalyzes the ATP-dependent covalent formation of a phosphodiester bond between adjacent 5'-phosphate and 3'-hydroxyl termini in nicked double-stranded DNA?",
        "o": [
          "T4 DNA Ligase",
          "DNA Polymerase I",
          "Polynucleotide kinase",
          "Alkaline phosphatase"
        ],
        "a": 0,
        "e": "Bacteriophage T4 DNA ligase joins both cohesive sticky ends and blunt ends by forming phosphodiester bonds using ATP as a high-energy cofactor.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "To prevent self-ligation of linearized cloning vector plasmids during a recombinant ligation reaction, vectors are pre-treated with which enzyme?",
        "o": [
          "Alkaline phosphatase (e.g., Calf Intestinal Alkaline Phosphatase - CIAP)",
          "Polynucleotide kinase",
          "Exonuclease III",
          "Terminal deoxynucleotidyl transferase"
        ],
        "a": 0,
        "e": "Alkaline phosphatase removes 5'-phosphate groups from linearized vector ends; lacking 5'-phosphates, the vector cannot self-ligate, forcing insertion of phosphorylated foreign DNA.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "What is the maximum theoretical foreign DNA insert capacity of standard plasmid cloning vectors (e.g., pBR322, pUC19)?",
        "o": [
          "Up to 10–15 kilobase pairs (kb)",
          "Up to 45 kb",
          "Up to 300 kb",
          "Up to 2,000 kb"
        ],
        "a": 0,
        "e": "Standard plasmids become unstable and suffer drastically reduced transformation efficiency when inserts exceed 10–15 kb in size.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Cosmid cloning vectors are engineered hybrids combining standard plasmid elements with which specialized sequence from bacteriophage lambda?",
        "o": [
          "cos (cohesive end) sites",
          "attP integration site",
          "cro gene",
          "cI repressor gene"
        ],
        "a": 0,
        "e": "Cosmids contain lambda phage cos sites (cohesive ends), enabling them to be packaged in vitro into lambda phage heads with insert capacities of 35–45 kb.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "What is the typical foreign DNA insert packaging capacity of cosmid vectors?",
        "o": [
          "35 to 45 kilobase pairs (kb)",
          "5 to 10 kb",
          "100 to 300 kb",
          "1,000 to 2,000 kb"
        ],
        "a": 0,
        "e": "Lambda phage heads require 37–52 kb of DNA between cos sites; subtracting the 5 kb cosmid vector leaves an insert cloning capacity of 35–45 kb.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Bacterial Artificial Chromosomes (BACs), used to clone large genomic fragments (100–300 kb), are constructed based on the low-copy-number replication machinery of which natural plasmid?",
        "o": [
          "Escherichia coli F (Fertility) episome",
          "ColE1 plasmid",
          "pSC101",
          "R100 resistance plasmid"
        ],
        "a": 0,
        "e": "BACs utilize the parA, parB, and repE replication and partitioning system of the F factor, maintaining strictly 1–2 stable copies per host cell to prevent recombination.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Yeast Artificial Chromosomes (YACs) can clone massive DNA fragments (up to 1,000–2,000 kb) because they contain which three essential eukaryotic chromosomal elements?",
        "o": [
          "Centromere (CEN), Telomeres (TEL), and Autonomously Replicating Sequences (ARS / origin)",
          "Origin, promoter, and enhancer",
          "Long terminal repeats, gag, and pol",
          "Histones, nuclear pore, and polyA tail"
        ],
        "a": 0,
        "e": "YACs function as linear eukaryotic mini-chromosomes in yeast by incorporating telomeres (TEL), a yeast centromere (CEN), and an origin of replication (ARS).",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In the classical Birnboim and Doly alkaline lysis plasmid mini-preparation method, what is the composition and role of Solution II?",
        "o": [
          "0.2 M NaOH and 1% Sodium Dodecyl Sulfate (SDS); denatures chromosomal DNA and lyses cells",
          "Glucose, Tris-HCl, and EDTA; resuspends pellets and chelates divalent ions",
          "3 M Potassium acetate pH 4.8; renatures plasmids and precipitates SDS-protein-gDNA complexes",
          "Isopropanol; precipitates pure plasmid DNA"
        ],
        "a": 0,
        "e": "Solution II lyses cell membranes with SDS and denatures both linear chromosomal DNA and circular plasmids into single strands via alkaline pH (NaOH, pH ~12.5).",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Why does plasmid DNA remain soluble after neutralization with Solution III (3 M potassium acetate, pH 4.8) while genomic chromosomal DNA precipitates?",
        "o": [
          "Covalently closed circular (ccc) plasmid strands remain physically topologically intertwined and rapidly re-anneal, while long linear chromosomal DNA tangles into an insoluble SDS-protein clot",
          "Plasmids contain no nitrogenous bases",
          "Chromosomal DNA is degraded into single nucleotides by acetate",
          "Plasmids migrate out of the tube"
        ],
        "a": 0,
        "e": "Topological interlocking of supercoiled circular plasmid strands allows instantaneous re-annealing at acidic pH; linear chromosomal DNA tangles with SDS and potassium to precipitate.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 3
      },
      {
        "q": "In preparing chemically competent Escherichia coli for plasmid transformation, cells are washed in ice-cold solutions of which divalent cation?",
        "o": [
          "Calcium chloride (CaCl2)",
          "Magnesium sulfate (MgSO4)",
          "Sodium chloride (NaCl)",
          "Potassium chloride (KCl)"
        ],
        "a": 0,
        "e": "Calcium ions (Ca2+) shield negatively charged phosphate groups on both plasmid DNA and bacterial outer membrane lipopolysaccharides, facilitating DNA binding.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "What is the standard physical parameters for the brief heat-shock step in transformation of chemically competent E. coli cells?",
        "o": [
          "42°C for 45 to 90 seconds followed by immediate return to ice",
          "55°C for 5 minutes",
          "37°C for 30 minutes",
          "100°C for 10 seconds"
        ],
        "a": 0,
        "e": "A rapid thermal pulse at 42°C for 45–90 seconds creates transient pores across the calcium-destabilized bacterial membrane through which plasmids enter.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Electroporation introduces recombinant DNA into bacterial host cells by applying:",
        "o": [
          "A high-voltage electrical pulse (e.g., 1.8–2.5 kV) for a few milliseconds to create transient membrane micropores",
          "Continuous low-voltage ultrasonic sound waves",
          "Intense microwave thermal radiation",
          "Alternating magnetic polarity shifts"
        ],
        "a": 0,
        "e": "Electroporation subjects cells to a brief high-voltage electric field (12.5–15 kV/cm), inducing temporary physical dielectric breakdown and nanopore formation in the membrane.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which enzyme is added to synthetic oligonucleotide linkers or foreign DNA to add single protruding 3'-adenine (A) overhangs for non-restriction 'TA cloning'?",
        "o": [
          "Taq DNA Polymerase (terminal transferase activity)",
          "Pfu DNA Polymerase",
          "T4 Polynucleotide Kinase",
          "Klenow fragment"
        ],
        "a": 0,
        "e": "Taq polymerase possesses template-independent terminal transferase activity, adding a single non-templated deoxyadenosine (A) to the 3' ends of PCR amplicons for TA cloning.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In affinity chromatography purification of recombinant fusion proteins, a 6xHistidine (His-tag) fusion peptide binds specifically to:",
        "o": [
          "Immobilized nickel (Ni2+) or cobalt (Co2+) affinity resin (Ni-NTA)",
          "Glutathione-agarose beads",
          "Protein A sepharose",
          "Avidin-conjugated cellulose"
        ],
        "a": 0,
        "e": "The imidazole rings of six consecutive histidine residues form coordination bonds with immobilized divalent nickel ions (Ni2+-nitrilotriacetic acid / Ni-NTA).",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Recombinant proteins expressed with a Glutathione S-Transferase (GST) tag are purified by binding specifically to which immobilized matrix and eluted with which competitor?",
        "o": [
          "Immobilized glutathione matrix and eluted with reduced free glutathione",
          "Nickel resin eluted with EDTA",
          "Heparin column eluted with high salt",
          "Dextran beads eluted with maltose"
        ],
        "a": 0,
        "e": "The GST tag binds immobilized reduced glutathione beads; competitive elution with excess free reduced glutathione displaces the recombinant fusion protein.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which expression vector promoter system utilizes IPTG induction to drive ultra-high level transcription via a bacteriophage-specific RNA polymerase?",
        "o": [
          "T7 RNA polymerase / T7 promoter system (e.g., pET vectors in BL21(DE3))",
          "pUC lac promoter system alone",
          "SV40 early promoter",
          "CMV immediate early promoter"
        ],
        "a": 0,
        "e": "In pET vectors, the gene is under a T7 promoter; IPTG derepresses lacUV5 in BL21(DE3) hosts to express T7 RNA polymerase, which transcribes target mRNA at extreme rates.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "What is the biological function of the selectable marker gene beta-lactamase (bla / ampR) present on cloning vectors like pBR322?",
        "o": [
          "Confers resistance to ampicillin, allowing only successfully transformed bacteria to form colonies on ampicillin-containing agar",
          "Hydrolyzes tetracycline to allow selection",
          "Synthesizes X-gal to turn colonies blue",
          "Stimulates plasmid DNA replication"
        ],
        "a": 0,
        "e": "The bla gene encodes periplasmic beta-lactamase that degrades ampicillin, killing untransformed plasmid-free bacterial cells during antibiotic selection.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Which restriction enzyme generates blunt ends upon cleaving its recognition sequence 5'-CCC^GGG-3'?",
        "o": [
          "SmaI",
          "EcoRI",
          "BamHI",
          "HindIII"
        ],
        "a": 0,
        "e": "SmaI (from Serratia marcescens) cleaves symmetrically between the central C and G in 5'-CCCGGG-3', producing blunt ends without single-stranded overhangs.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "What is the primary role of the origin of replication (ori) in a plasmid cloning vector?",
        "o": [
          "Directs the host bacterial DNA replication machinery to initiate autonomous plasmid DNA synthesis and regulates plasmid copy number",
          "Encodes resistance to kanamycin",
          "Provides multiple unique cleavage sites for enzymes",
          "Directs integration into the host chromosome"
        ],
        "a": 0,
        "e": "The ori sequence (e.g., pMB1 or ColE1 origin) is recognized by host replication proteins (DnaA, DNA pol III), dictating autonomous replication and copy number.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Bacteriophage lambda insertion vectors differ from replacement vectors in that insertion vectors:",
        "o": [
          "Have a single unique restriction site for cloning smaller foreign DNA fragments (0–5 kb)",
          "Contain two flanking restriction sites to replace a disposable central 'stuffer' fragment with large inserts (up to 20 kb)",
          "Can only replicate inside mammalian cells",
          "Completely lack cos sites"
        ],
        "a": 0,
        "e": "Insertion vectors possess a single cloning site for smaller inserts; replacement vectors have paired sites flanking a dispensable stuffer fragment for larger inserts (up to 20–25 kb).",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Which enzyme is utilized in recombinant DNA technology to remove single-stranded sticky overhangs or fill in recessed 3' ends to create blunt ends?",
        "o": [
          "Klenow fragment of DNA Polymerase I",
          "T4 RNA ligase",
          "Reverse transcriptase",
          "Taq polymerase alone"
        ],
        "a": 0,
        "e": "The Klenow fragment retains 5'->3' DNA polymerase and 3'->5' proofreading exonuclease activities but lacks 5'->3' exonuclease, filling in 5' overhangs to blunt ends.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 3
      },
      {
        "q": "What chemical method is routinely employed to precipitate pure nucleic acids from aqueous solutions during mini-preparation protocols?",
        "o": [
          "Addition of 2.0 to 2.5 volumes of ice-cold absolute ethanol (or 0.7 volumes of isopropanol) in the presence of 0.3 M monovalent salt",
          "Addition of concentrated hydrochloric acid",
          "Boiling at 100°C for 20 minutes",
          "Filtration through whatman paper alone"
        ],
        "a": 0,
        "e": "Ethanol/isopropanol lowers the dielectric constant of water, allowing monovalent cations (Na+, K+, NH4+) to neutralize phosphate charges, precipitating DNA.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In recombinant protein expression, an inclusion body refers to:",
        "o": [
          "Dense, insoluble aggregates of misfolded recombinant protein accumulating in the host cytoplasm",
          "A membrane-bound secretory vesicle",
          "A viral capsid packaging recombinant DNA",
          "A chromatin clump inside the nucleus"
        ],
        "a": 0,
        "e": "High-level overexpression in E. coli often overwhelms host molecular chaperones, causing recombinant polypeptides to aggregate into insoluble inclusion bodies.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The Southern blotting technique, invented by Edwin Southern in 1975, involves the transfer and hybridization analysis of which macromolecule?",
        "o": [
          "DNA fragments transferred from an agarose gel to a membrane",
          "RNA fragments transferred from a denaturing gel",
          "Proteins transferred from an SDS-PAGE gel",
          "Lipopolysaccharides transferred from a TLC plate"
        ],
        "a": 0,
        "e": "Southern blotting transfers restriction-digested DNA fragments from an agarose gel to a nitrocellulose or nylon membrane, followed by hybridizing with labeled DNA/RNA probes.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Why must an agarose gel containing double-stranded DNA fragments be soaked in an alkaline solution (0.5 M NaOH) prior to Southern blot transfer?",
        "o": [
          "To denature double-stranded DNA into single-stranded targets accessible for probe hybridization",
          "To stain the DNA fragments bright orange",
          "To fragment the DNA into small oligonucleotides",
          "To remove agarose from the gel pores"
        ],
        "a": 0,
        "e": "Alkaline treatment disrupts hydrogen bonds, converting double-stranded DNA into single-stranded targets that can bind the single-stranded labeled hybridization probe.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Which molecular blotting method is specifically employed to analyze cellular messenger RNA (mRNA) transcripts and evaluate gene expression levels?",
        "o": [
          "Northern blotting",
          "Southern blotting",
          "Western blotting",
          "Eastern blotting"
        ],
        "a": 0,
        "e": "Northern blotting separates RNA on formaldehyde-agarose denaturing gels and transfers it to nylon membranes to measure transcript size and abundance.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Western blotting, proteins resolved by SDS-PAGE are transferred onto which membrane and detected by which specific probes?",
        "o": [
          "PVDF or nitrocellulose membrane, detected by primary and secondary labeled antibodies",
          "Nylon membrane, detected by radiolabeled cDNA",
          "Cellulose acetate, detected by Coomassie blue",
          "Dialysis membrane, detected by ninhydrin"
        ],
        "a": 0,
        "e": "Western blotting transfers proteins from SDS-PAGE to PVDF or nitrocellulose membranes, using specific antibodies (primary antibody + enzyme-conjugated secondary antibody) for detection.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "What is the primary function of the blocking step (e.g., using 5% non-fat dry milk or bovine serum albumin) in Western blotting protocols?",
        "o": [
          "To saturate unreacted non-specific protein-binding sites on the membrane, preventing non-specific antibody background binding",
          "To denature the transferred target proteins",
          "To fix the proteins covalently to the membrane",
          "To inactivate the secondary antibody enzyme conjugate"
        ],
        "a": 0,
        "e": "Blocking prevents non-specific adsorption of antibodies to free membrane binding sites, eliminating background noise and false-positive signals.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Which molecular blotting variant is specifically designed to study sequence-specific DNA-protein interactions using labeled double-stranded DNA probes?",
        "o": [
          "Southwestern blotting",
          "Northwestern blotting",
          "Far-Western blotting",
          "Eastern blotting"
        ],
        "a": 0,
        "e": "Southwestern blotting detects DNA-binding proteins (e.g., transcription factors) separated by SDS-PAGE and blotted onto membranes by probing with labeled double-stranded DNA.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 3
      },
      {
        "q": "In the standard 3-step Polymerase Chain Reaction (PCR), what is the typical temperature range and purpose of the denaturation step?",
        "o": [
          "94–95°C; disrupts hydrogen bonds to melt double-stranded template DNA into single strands",
          "50–60°C; allows primers to anneal to template",
          "72°C; optimal activity for Taq polymerase extension",
          "4°C; stores the reaction mix"
        ],
        "a": 0,
        "e": "Denaturation at 94–95°C melts the hydrogen bonds between complementary strands, producing single-stranded DNA templates for primer binding.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Taq DNA polymerase, originally isolated from the thermophilic bacterium Thermus aquaticus, operates with an optimal elongation temperature of:",
        "o": [
          "72°C",
          "37°C",
          "55°C",
          "95°C"
        ],
        "a": 0,
        "e": "Taq polymerase has an enzymatic temperature optimum of 72–75°C, synthesizing approximately 1,000 bases per minute at this temperature.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "What major enzymatic proofreading activity is notably absent in standard Taq DNA polymerase, resulting in a relatively high error rate (approx. 1 in 10,000 bp)?",
        "o": [
          "3' to 5' exonuclease proofreading activity",
          "5' to 3' exonuclease activity",
          "5' to 3' polymerase activity",
          "Terminal transferase activity"
        ],
        "a": 0,
        "e": "Taq polymerase possesses 5'->3' exonuclease activity (nicking translation) but lacks 3'->5' exonuclease proofreading, causing misincorporations.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "According to the empirical Wallace rule, what is the approximate calculation for the melting temperature (Tm) of a short oligonucleotide primer?",
        "o": [
          "Tm = 2(A + T) + 4(G + C) degrees Celsius",
          "Tm = 4(A + T) + 2(G + C)",
          "Tm = (A + T + G + C) x 3",
          "Tm = 64.9 + 41(G + C - 16.4) / N"
        ],
        "a": 0,
        "e": "The Wallace rule estimates Tm for oligonucleotides <=20 nt by counting 2°C for each A or T (two H-bonds) and 4°C for each G or C (three H-bonds).",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "As a standard rule of thumb in PCR optimization, what should the primer annealing temperature (Ta) be set relative to the primer melting temperature (Tm)?",
        "o": [
          "Approximately 3°C to 5°C below the lowest calculated Tm of the primer pair",
          "Exactly 10°C above the primer Tm",
          "Equal to the extension temperature (72°C)",
          "At 95°C"
        ],
        "a": 0,
        "e": "Setting the annealing temperature 3–5°C below the lowest primer Tm ensures stable hybrid formation while minimizing non-specific secondary priming.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In Reverse Transcription PCR (RT-PCR), what specialized enzyme is utilized first to synthesize complementary DNA (cDNA) from an RNA template?",
        "o": [
          "Reverse transcriptase (RNA-directed DNA polymerase, e.g., M-MuLV or AMV)",
          "Taq DNA polymerase",
          "RNA polymerase II",
          "DNA Ligase"
        ],
        "a": 0,
        "e": "Reverse transcriptase uses an oligo(dT) primer, random hexamers, or specific reverse primer to synthesize a first-strand cDNA copy of RNA genomes or transcripts.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Real-Time Quantitative PCR (qPCR), what defines the Cycle Threshold (Ct) or Cq value?",
        "o": [
          "The cycle number at which the reporter fluorescence signal crosses a statistically significant threshold above background baseline",
          "The maximum cycle number before the plateau phase",
          "The temperature at which 50% of the DNA amplicon is melted",
          "The time required to complete 30 cycles"
        ],
        "a": 0,
        "e": "The Ct value is the fractional PCR cycle number at which the fluorescent signal emerges above the calculated baseline threshold; lower Ct indicates higher starting target copy number.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "How does the initial target nucleic acid copy number relate to the observed Cycle Threshold (Ct) value in a qPCR assay?",
        "o": [
          "Ct is inversely proportional to the logarithm of the initial target copy number (higher target DNA = lower Ct value)",
          "Ct is directly proportional to target copy number",
          "Ct remains constant regardless of target concentration",
          "Ct is independent of cycle number"
        ],
        "a": 0,
        "e": "Because PCR amplifies exponentially, a sample with 10-fold more starting template reaches the threshold ~3.32 cycles earlier (lower Ct value).",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "What is the primary diagnostic disadvantage of using non-specific DNA intercalating dyes (such as SYBR Green I) in Real-Time PCR?",
        "o": [
          "Binds non-specifically to any double-stranded DNA, including primer-dimers and non-target artefacts",
          "Inhibits Taq polymerase enzymatic activity completely",
          "Emits toxic radioactive particles",
          "Degrades the template DNA during extension"
        ],
        "a": 0,
        "e": "SYBR Green I fluoresces upon binding the minor groove of ANY double-stranded DNA; non-specific amplicons or primer-dimers generate false-positive fluorescence.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "How is the sequence specificity and purity of a SYBR Green Real-Time PCR amplicon verified at the conclusion of cycling?",
        "o": [
          "Performing a post-PCR Dissociation (Melt Curve) Analysis",
          "Running a Southern blot",
          "Measuring optical density at 280 nm",
          "Adding excessive EDTA"
        ],
        "a": 0,
        "e": "A melt curve gradually heats the product; specific amplicons melt cooperatively at a single characteristic Tm peak, whereas primer-dimers melt earlier at lower temperatures.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "TaqMan real-time fluorogenic probes rely on which biophysical principle between the 5' reporter fluorophore and 3' quencher dye?",
        "o": [
          "Förster (Fluorescence) Resonance Energy Transfer (FRET)",
          "Surface plasmon resonance",
          "Chemiluminescence",
          "Phosphorescence"
        ],
        "a": 0,
        "e": "In intact TaqMan probes, the 3' quencher absorbs the emission energy of the 5' fluorophore via FRET; cleavage by Taq's 5'->3' exonuclease separates them, releasing fluorescence.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Which enzymatic activity of Taq DNA polymerase is required to cleave the hybridized TaqMan probe and generate a fluorescent signal in real-time PCR?",
        "o": [
          "5' to 3' exonuclease activity",
          "3' to 5' exonuclease activity",
          "Endonuclease activity",
          "Reverse transcriptase activity"
        ],
        "a": 0,
        "e": "As Taq polymerizes the new strand, its 5'->3' exonuclease activity cleaves the downstream dual-labeled TaqMan probe annealed to the target template.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "What PCR variant utilizes two sequential rounds of amplification, where the second round uses 'inner' primers targeting an internal region within the first-round amplicon?",
        "o": [
          "Nested PCR",
          "Multiplex PCR",
          "Touchdown PCR",
          "Inverse PCR"
        ],
        "a": 0,
        "e": "Nested PCR uses two primer sets; even if non-specific products are primed in the first round, the inner primers amplify only the authentic target, providing ultra-high sensitivity and specificity.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Which PCR modification enables the simultaneous amplification and detection of multiple distinct pathogen targets in a single reaction tube?",
        "o": [
          "Multiplex PCR (using multiple primer pairs simultaneously)",
          "Touchdown PCR",
          "Hot-start PCR alone",
          "Asymmetric PCR"
        ],
        "a": 0,
        "e": "Multiplex PCR incorporates multiple distinct primer pairs in one tube, producing amplicons of different sizes distinguishable on gel or distinct fluorescent probes in qPCR.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "What is the primary mechanism of Touchdown PCR in eliminating non-specific primer binding during early reaction cycles?",
        "o": [
          "Starting with an initial annealing temperature several degrees above the calculated Tm and incrementally lowering it in subsequent cycles",
          "Doubling the concentration of Taq polymerase every cycle",
          "Starting with a low temperature and raising it to 95°C",
          "Adding high concentrations of urea"
        ],
        "a": 0,
        "e": "Touchdown PCR initiates at an annealing temperature higher than primer Tm; only perfectly matched duplexes prime, outcompeting non-specific products as temperature steps down.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "What is the primary purpose of 'Hot-Start' PCR formulations?",
        "o": [
          "To inhibit DNA polymerase activity during reaction setup at ambient temperature, preventing non-specific priming and primer-dimer formation",
          "To accelerate cycle extension speed at 72°C",
          "To preserve template DNA during storage",
          "To allow PCR without thermal cycling"
        ],
        "a": 0,
        "e": "Hot-start uses antibodies, aptamers, or chemical modifications to block Taq polymerase activity at room temperature; Taq is activated only after the initial 95°C heating step.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In standard agarose gel electrophoresis, what is the standard tracking dye that migrates at approximately the same rate as a 300–500 bp DNA fragment in a 1% agarose gel?",
        "o": [
          "Bromophenol blue",
          "Xylene cyanol FF",
          "Orange G",
          "Cresol red"
        ],
        "a": 0,
        "e": "Bromophenol blue runs at ~300–500 bp in 1% agarose, providing a visible blue tracking band to monitor electrophoretic progress; xylene cyanol runs at ~4,000 bp.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Ethidium bromide (EtBr) intercalates into double-stranded DNA and fluoresces under UV illumination (302 nm) with an emission peak at what color?",
        "o": [
          "Orange-red (approx. 590 nm)",
          "Bright green (520 nm)",
          "Deep violet (400 nm)",
          "Yellow (570 nm)"
        ],
        "a": 0,
        "e": "Ethidium bromide inserts between stacked planar base pairs; excitation by UV light transfers energy to the dye, producing intense orange-red fluorescence.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "What is the critical role of magnesium chloride (MgCl2, typically 1.5–2.5 mM) in a PCR reaction mixture?",
        "o": [
          "Essential catalytic cofactor for Taq DNA polymerase activity and stabilizes primer-template duplexes",
          "Acts as a primary energy source",
          "Provides buffering capacity at pH 8.3",
          "Inactivates contaminant nucleases"
        ],
        "a": 0,
        "e": "Mg2+ coordinates with dNTPs and active-site aspartate residues in Taq polymerase; insufficient Mg2+ yields no product, while excess Mg2+ causes non-specific amplification.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Artifactual low-molecular-weight double-stranded DNA products formed by the hybridization and extension of overlapping forward and reverse primers are called:",
        "o": [
          "Primer-dimers",
          "Concatemers",
          "Palindromes",
          "Satellite bands"
        ],
        "a": 0,
        "e": "Primer-dimers result when primers anneal to each other at their 3' ends and are extended by Taq polymerase, creating short (~30–50 bp) competing artifacts.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "What is the theoretical amplification factor of a PCR reaction operating at 100% efficiency after 'n' thermal cycles?",
        "o": [
          "2^n",
          "n^2",
          "10^n",
          "2 x n"
        ],
        "a": 0,
        "e": "Because each cycle ideally doubles the target DNA template, the amplification factor after n cycles is 2^n (yielding ~10^9-fold amplification after 30 cycles).",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Loop-Mediated Isothermal Amplification (LAMP) amplifies target DNA with high specificity at a constant temperature (60–65°C) using which strand-displacing DNA polymerase?",
        "o": [
          "Bst DNA Polymerase",
          "Taq DNA Polymerase",
          "Pfu DNA Polymerase",
          "T7 DNA Polymerase"
        ],
        "a": 0,
        "e": "LAMP utilizes Bst polymerase (from Geobacillus stearothermophilus), which has high strand-displacement activity, synthesizing loop-forming concatemers isothermally without a thermocycler.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 3
      },
      {
        "q": "In a diagnostic PCR laboratory, which physical control tube containing all master mix reagents except template DNA is mandatory to rule out false-positive reagent contamination?",
        "o": [
          "No-Template Control (NTC / Negative Control)",
          "Positive Control",
          "Extraction Control",
          "Internal Amplification Control (IAC)"
        ],
        "a": 0,
        "e": "The NTC (containing sterile water instead of DNA) must remain completely free of amplification to confirm that reagents and workspace are uncontaminated.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Western blotting, what substrate is commonly oxidized by Horseradish Peroxidase (HRP) conjugate to produce blue-violet bands on the membrane in chromogenic assays?",
        "o": [
          "3,3'-Diaminobenzidine (DAB)",
          "NBT/BCIP",
          "X-gal",
          "TMB in ELISA alone"
        ],
        "a": 0,
        "e": "DAB is oxidized by HRP in the presence of hydrogen peroxide to form an insoluble brown-black precipitate directly at the site of the immobilized target protein.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "What unique chemical structural modification distinguishes 2',3'-dideoxynucleoside triphosphates (ddNTPs) from normal dNTPs in the Sanger sequencing method?",
        "o": [
          "ddNTPs lack a 3'-hydroxyl (-OH) group on the deoxyribose sugar, terminating phosphodiester chain elongation upon incorporation",
          "ddNTPs lack the 5'-triphosphate group",
          "ddNTPs lack a nitrogenous base",
          "ddNTPs contain ribose instead of deoxyribose"
        ],
        "a": 0,
        "e": "DNA polymerases require a free 3'-OH group to attack the incoming 5'-phosphate; incorporation of a ddNTP terminates chain elongation.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In automated modern Sanger DNA sequencing, how are the four individual termination reactions (ddATP, ddCTP, ddGTP, ddTTP) distinguished in a single capillary tube?",
        "o": [
          "Each of the four ddNTPs is conjugated to a distinct fluorophore that emits light at a characteristic wavelength upon laser excitation",
          "By using four radioactive isotopes",
          "By varying the capillary temperature",
          "By running four separate gels in sequence"
        ],
        "a": 0,
        "e": "Dye-terminator chemistry labels ddATP (green), ddCTP (blue), ddGTP (black/yellow), and ddTTP (red) with distinct fluorescent dyes, analyzed by laser capillary electrophoresis.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Next-Generation Sequencing (NGS) on Illumina platforms utilizes which amplification technology to generate dense clonal clusters on a glass flow cell surface?",
        "o": [
          "Bridge amplification (solid-phase PCR generating localized clusters)",
          "Emulsion PCR on magnetic beads",
          "Rolling circle amplification",
          "Standard liquid tube PCR"
        ],
        "a": 0,
        "e": "Illumina sequencing relies on bridge amplification, where adapter-ligated DNA fragments arch over to hybridize to adjacent flow cell primers, producing dense clonal clusters.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In 454 Pyrosequencing, what enzymatic cascade converts released inorganic pyrophosphate (PPi) into detectable visible light?",
        "o": [
          "ATP sulfurylase converts PPi into ATP, which fuels firefly luciferase oxidation of luciferin to emit light",
          "Alkaline phosphatase cleaves PPi directly to release photons",
          "Peroxidase oxidizes luminol in the presence of PPi",
          "Taq polymerase excites fluorescent probes"
        ],
        "a": 0,
        "e": "Upon dNTP incorporation, DNA polymerase releases PPi; ATP sulfurylase converts PPi + APS into ATP, which fuels luciferase-mediated bioluminescent light emission.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 3
      },
      {
        "q": "Oxford Nanopore sequencing decodes nucleotide sequences in real time by measuring:",
        "o": [
          "Disruptions in characteristic ionic current as an intact single-stranded DNA molecule threads through a protein nanopore",
          "Fluorescent pulses of dye-labeled dNTPs",
          "Release of hydrogen ions using a pH sensor chip",
          "Radioactive decay of phosphorus-32"
        ],
        "a": 0,
        "e": "As single-stranded DNA translocates through an engineered protein nanopore, each k-mer base combination creates a distinct blockade in ionic current, read by a sensor chip.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which molecular typing technique analyzes variations in the lengths of restriction fragments visualized by Southern hybridization or PCR?",
        "o": [
          "Restriction Fragment Length Polymorphism (RFLP)",
          "Random Amplified Polymorphic DNA (RAPD)",
          "Multilocus Sequence Typing (MLST)",
          "Fluorescence in situ hybridization (FISH)"
        ],
        "a": 0,
        "e": "RFLP detects single-nucleotide polymorphisms or insertions/deletions that create or abolish specific restriction enzyme recognition sites.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "What key feature distinguishes Random Amplified Polymorphic DNA (RAPD) from conventional PCR typing?",
        "o": [
          "Uses short arbitrary oligonucleotide primers (approx. 10 nt) at low annealing temperatures without any prior knowledge of target genome sequence",
          "Requires complete genomic sequence data beforehand",
          "Uses four specific primers with high GC content",
          "Uses fluorescent labeled ddNTPs"
        ],
        "a": 0,
        "e": "RAPD uses single 10-mer primers of arbitrary sequence that anneal at low stringency (35–40°C) across random loci throughout unsequenced genomes.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Multilocus Sequence Typing (MLST) characterizes bacterial isolates into Sequence Types (ST) based on the nucleotide sequence variations of:",
        "o": [
          "Internal fragments (approx. 450–500 bp) of seven conserved housekeeping genes",
          "Hypervariable plasmid virulence genes",
          "Complete ribosomal RNA operons",
          "The entire circular chromosome"
        ],
        "a": 0,
        "e": "MLST sequences ~500 bp internal fragments of seven conserved housekeeping genes; each distinct allele is assigned an integer, generating an allelic profile (Sequence Type).",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which primary nucleotide sequence database is maintained by the National Center for Biotechnology Information (NCBI) in the United States?",
        "o": [
          "GenBank",
          "EMBL Nucleotide Archive (ENA)",
          "DNA Data Bank of Japan (DDBJ)",
          "Swiss-Prot"
        ],
        "a": 0,
        "e": "GenBank is the NIH genetic sequence database, collaborating through the International Nucleotide Sequence Database Collaboration (INSDC) with EMBL-EBI and DDBJ.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "What is the primary protein sequence and functional annotation database renowned for non-redundant, manually reviewed, expert-curated records?",
        "o": [
          "UniProtKB / Swiss-Prot",
          "GenBank",
          "PDB (Protein Data Bank)",
          "Pfam"
        ],
        "a": 0,
        "e": "UniProtKB/Swiss-Prot contains manually annotated, non-redundant protein records with verified biochemical and structural data, unlike automated TrEMBL.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "What does the E-value (Expect value) signify in a BLAST search output?",
        "o": [
          "The number of different alignment hits one can 'expect' to see by random chance when searching a database of a particular size",
          "The percentage of identical amino acid residues",
          "The thermodynamic stability of the duplex",
          "The total length of the query sequence"
        ],
        "a": 0,
        "e": "The E-value decreases exponentially with alignment score; an E-value close to zero (e.g., e-50) indicates that the match is non-random and statistically significant.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which BLAST algorithm variant compares a translated nucleotide query sequence against a protein sequence database?",
        "o": [
          "blastx",
          "blastn",
          "blastp",
          "tblastn"
        ],
        "a": 0,
        "e": "blastx translates a nucleotide query in all six reading frames and compares it directly against a protein reference database, ideal for finding coding genes in raw DNA.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In molecular phylogenetics, what computational resampling method is universally used to assess the statistical confidence and stability of clades on a phylogenetic tree?",
        "o": [
          "Bootstrap analysis (typically 1,000 pseudo-replicate datasets)",
          "Principal component analysis",
          "Markov chain Monte Carlo alone",
          "Student's t-test"
        ],
        "a": 0,
        "e": "Bootstrapping randomly resamples columns of the sequence alignment with replacement to build hundreds of trees; bootstrap values >=70–80% indicate robust clade support.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which distance-based phylogenetic tree construction algorithm calculates a tree by iteratively joining pairs of nearest operational taxonomic units (OTUs) based on pairwise distance matrices?",
        "o": [
          "Neighbor-Joining (NJ) method",
          "Maximum Likelihood method",
          "Maximum Parsimony method",
          "Bayesian inference"
        ],
        "a": 0,
        "e": "Saitou and Nei's Neighbor-Joining algorithm is a fast distance-based heuristic that clusters nearest neighbors without assuming a constant molecular clock rate.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The landmark United States Supreme Court decision in Diamond v. Chakrabarty (1980) established what precedent in biotechnology patent law?",
        "o": [
          "Genetically engineered living microorganisms are patentable subject matter ('anything under the sun made by man')",
          "Living organisms can never be patented under any circumstances",
          "Only plant seeds may be patented",
          "Patents on genetic sequences are granted for 100 years"
        ],
        "a": 0,
        "e": "The US Supreme Court ruled (5–4) that Ananda Chakrabarty's genetically engineered, crude-oil-degrading Pseudomonas bacterium was a patentable human-made manufacture.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Under standard patent legislation worldwide, what are the three indispensable criteria that an invention must satisfy to be granted a patent?",
        "o": [
          "Novelty, Non-obviousness (Inventive step), and Industrial applicability (Utility)",
          "Novelty, High commercial profitability, and Academic publication",
          "Public popularity, Trademark protection, and Copyright registration",
          "Chemical purity, Natural occurrence, and Clinical trials"
        ],
        "a": 0,
        "e": "Patentability requires: Novelty (new worldwide), Inventive step (non-obvious to a person skilled in the art), and Industrial applicability (practical utility).",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "What international treaty facilitates biological patent applications by allowing the deposit of a microorganism culture with an International Depository Authority (IDA) to satisfy disclosure requirements?",
        "o": [
          "Budapest Treaty (1977)",
          "Paris Convention",
          "Patent Cooperation Treaty (PCT)",
          "Cartagena Protocol"
        ],
        "a": 0,
        "e": "The Budapest Treaty ensures that depositing a viable microbial strain in one recognized IDA satisfies the physical disclosure requirement in all member patent offices.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which institution serves as an officially recognized International Depository Authority (IDA) under the Budapest Treaty in India?",
        "o": [
          "Microbial Type Culture Collection and Gene Bank (MTCC), Chandigarh",
          "National Institute of Virology (NIV), Pune",
          "Indian Veterinary Research Institute (IVRI), Izatnagar",
          "Central Research Institute (CRI), Kasauli"
        ],
        "a": 0,
        "e": "The MTCC at the Institute of Microbial Technology (IMTECH), Chandigarh (and the NCMR/MCC, Pune) are recognized IDAs under the Budapest Treaty in India.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In India, what apex statutory committee under the Ministry of Environment, Forest and Climate Change (MoEFCC) is empowered to approve environmental release of Genetically Modified Organisms (GMOs)?",
        "o": [
          "Genetic Engineering Appraisal Committee (GEAC)",
          "Review Committee on Genetic Manipulation (RCGM)",
          "Institutional Biosafety Committee (IBSC)",
          "Recombinant DNA Advisory Committee (RDAC)"
        ],
        "a": 0,
        "e": "GEAC is the apex regulatory body under the Environment (Protection) Act 1986 authorized to approve field trials and commercial release of GM organisms in India.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "At the institutional level (e.g., veterinary college or research institute), which committee reviews and oversees all recombinant DNA research proposals to ensure biological safety?",
        "o": [
          "Institutional Biosafety Committee (IBSC)",
          "Genetic Engineering Appraisal Committee (GEAC)",
          "Department of Biotechnology (DBT)",
          "Recombinant DNA Advisory Committee (RDAC)"
        ],
        "a": 0,
        "e": "Every Indian institution conducting r-DNA research must establish an IBSC, which includes a DBT nominee to approve safety protocols and monitor lab containment.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The Cartagena Protocol on Biosafety to the Convention on Biological Diversity specifically regulates the international:",
        "o": [
          "Transboundary movement, transit, handling, and safe use of Living Modified Organisms (LMOs) resulting from modern biotechnology",
          "Trade of endangered wild animals under CITES",
          "Patent duration on pharmaceutical vaccines",
          "Standardization of international laboratory reagents"
        ],
        "a": 0,
        "e": "Adopted in 2000, the Cartagena Protocol provides the Advance Informed Agreement (AIA) procedure to ensure safe transboundary movement and handling of LMOs.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In bioinformatics, what standard text-based format represents nucleotide or amino acid sequences preceded by a single-line description starting with a '>' symbol?",
        "o": [
          "FASTA format",
          "GenBank format",
          "EMBL format",
          "PDB format"
        ],
        "a": 0,
        "e": "FASTA format uses a header line starting with '>' followed by sequence identifiers, followed by lines of sequence codes, standard across bioinformatic tools.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Which computational software program is universally used for multiple sequence alignment (MSA) of homologous protein or nucleotide sequences?",
        "o": [
          "Clustal Omega (or ClustalW)",
          "BLAST alone",
          "Primer3",
          "NEBcutter"
        ],
        "a": 0,
        "e": "Clustal Omega aligns multiple divergent protein or nucleotide sequences using seeded guide trees and HMM profile-profile techniques to highlight conserved motifs.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The standard legal duration (term) of a granted patent in most World Trade Organization (WTO) TRIPS-compliant countries, calculated from the filing date, is:",
        "o": [
          "20 years",
          "10 years",
          "50 years",
          "7 years"
        ],
        "a": 0,
        "e": "Under the WTO TRIPS Agreement, patent protection is granted for a term of exactly 20 years from the official international application filing date.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Which molecular marker system involves digestion of genomic DNA with two restriction enzymes, ligation of double-stranded adapters, and selective PCR amplification?",
        "o": [
          "Amplified Fragment Length Polymorphism (AFLP)",
          "Random Amplified Polymorphic DNA (RAPD)",
          "Southern blotting",
          "DNA barcoding"
        ],
        "a": 0,
        "e": "AFLP combines restriction digestion (rare cutter + frequent cutter) with adapter ligation and selective PCR, generating hundreds of reproducible polymorphic bands.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In high-throughput sequencing, what is 'coverage' or 'sequencing depth'?",
        "o": [
          "The average number of times a given nucleotide in the genome is sequenced by independent overlapping reads (e.g., 30x coverage)",
          "The physical length of the sequencing read in base pairs",
          "The number of flow cell lanes used",
          "The total size of the organism's genome"
        ],
        "a": 0,
        "e": "Depth of coverage (e.g., 30X) indicates how many distinct sequenced reads cover each base position, ensuring high base-calling accuracy and assembly confidence.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which bioinformatics resource at NCBI is the primary repository for high-throughput Next-Generation Sequencing raw read archives?",
        "o": [
          "Sequence Read Archive (SRA)",
          "GenBank",
          "RefSeq",
          "dbSNP"
        ],
        "a": 0,
        "e": "The SRA stores raw sequencing data and alignment files (FASTQ, BAM) generated by Illumina, Oxford Nanopore, and PacBio platforms.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Biological containment in recombinant DNA guidelines refers to:",
        "o": [
          "The use of genetically disabled host organisms (e.g., auxotrophic E. coli K-12) and specialized vectors that cannot survive outside controlled laboratory media",
          "HEPA air filtration and glove boxes",
          "Sterilization by autoclaving",
          "Vaccination of laboratory staff"
        ],
        "a": 0,
        "e": "Biological containment minimizes escape risks by engineering bacterial hosts that require specialized nutrients (e.g., diaminopimelic acid) absent in natural environments.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Which BLAST program compares a protein query sequence against a translated nucleotide database (translated in all six reading frames)?",
        "o": [
          "tblastn",
          "blastp",
          "blastn",
          "blastx"
        ],
        "a": 0,
        "e": "tblastn translates an entire nucleotide database into all six reading frames and compares a protein query sequence against it, identifying homologous unannotated genes.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In bioinformatics, an Open Reading Frame (ORF) is identified by:",
        "o": [
          "A continuous stretch of codons starting with a translation initiation codon (AUG) and ending with an in-frame stop codon (UAA, UAG, UGA)",
          "A sequence containing only purines",
          "Any region with multiple restriction sites",
          "A stretch of poly-A residues"
        ],
        "a": 0,
        "e": "An ORF begins with a start codon (typically AUG), continues in-frame without premature stops for at least 100 codons, and concludes with a stop codon.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "Type II restriction endonucleases require ATP hydrolysis as an indispensable cofactor for cleaving double-stranded DNA.",
        "a": false,
        "e": "False. Type II restriction enzymes require only divalent magnesium (Mg2+) as a cofactor and do NOT require ATP hydrolysis.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "A DNA palindrome is a double-stranded nucleotide sequence that reads identically in the 5' to 3' direction on both complementary strands.",
        "a": true,
        "e": "True. For example, 5'-GAATTC-3' reads 5'-GAATTC-3' on the antiparallel complementary strand, exhibiting twofold rotational symmetry.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "In blue-white screening, bacterial colonies harboring empty vector plasmids without any foreign insert develop an intense blue color on X-gal plates.",
        "a": true,
        "e": "True. Empty vectors maintain an intact lacZ gene; alpha-complementation occurs, producing active beta-galactosidase that cleaves X-gal into blue indigo.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "T4 DNA ligase can join blunt-ended DNA fragments as well as cohesive cohesive-ended fragments.",
        "a": true,
        "e": "True. While cohesive end ligation is thermodynamically favored, high concentrations of T4 DNA ligase and PEG can efficiently join blunt DNA ends.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Alkaline phosphatase treatment of foreign insert DNA prior to ligation enhances the rate of recombinant plasmid formation.",
        "a": false,
        "e": "False. Alkaline phosphatase is applied to the VECTOR to prevent self-circularization; dephosphorylating the insert would prevent any phosphodiester bond formation.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Cosmids replicate inside host bacterial cells as lytic bacteriophages, eventually lysing the host cell to release infectious virions.",
        "a": false,
        "e": "False. Cosmids replicate strictly as non-lytic plasmids inside E. coli using their plasmid origin and antibiotic marker; they contain no lambda viral replication or lysis genes.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Bacterial Artificial Chromosomes (BACs) maintain high copy numbers of 500 to 1,000 copies per host cell.",
        "a": false,
        "e": "False. BACs are strictly single-copy or low-copy vectors (1–2 copies/cell) driven by the F plasmid replicon, which prevents homologous recombination of large inserts.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In alkaline lysis plasmid purification, the high pH (~12.5) of Solution II denatures both chromosomal DNA and supercoiled plasmid DNA into single strands.",
        "a": true,
        "e": "True. High pH disrupts hydrogen bonding in all DNA; however, the closed circular topology of plasmids keeps complementary strands intertwined.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Transformation efficiency of competent bacteria is defined as the number of transformed colony-forming units (CFU) generated per microgram of plasmid DNA.",
        "a": true,
        "e": "True. Transformation efficiency is expressed as CFU/ug of DNA; high-efficiency electrocompetent cells typically yield 10^9 to 10^10 CFU/ug.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Pfu DNA polymerase is preferred over Taq DNA polymerase for cloning genes requiring absolute sequence fidelity because Pfu possesses 3' to 5' exonuclease proofreading.",
        "a": true,
        "e": "True. Pfu polymerase (from Pyrococcus furiosus) has 3'->5' exonuclease proofreading activity, yielding an error rate ~10-fold lower than non-proofreading Taq.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Histidine-tagged recombinant proteins can be gently eluted from Ni-NTA affinity chromatography columns using high concentrations of free imidazole.",
        "a": true,
        "e": "True. Imidazole structurally resembles the histidine side chain and competitively displaces the polyhistidine-tagged protein from the coordinated nickel ions.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Electroporation cuvettes must contain high concentrations of sodium chloride to maximize electrical conduction through the cell suspension.",
        "a": false,
        "e": "False. High salt concentrations cause violent electrical arcing and immediate thermal cell destruction; cells and DNA for electroporation must be in low-ionic deionized water.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The lacZ gene segment used for alpha-complementation encodes only the first ~146 amino acids (alpha-peptide) of beta-galactosidase.",
        "a": true,
        "e": "True. The plasmid supplies the short N-terminal alpha-peptide, while the host chromosome supplies the defective omega fragment (lacZDeltaM15) to reconstitute active tetrameric enzyme.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 3
      },
      {
        "q": "In recombinant expression vectors, the Shine-Dalgarno sequence provides the specific binding site for the host bacterial 30S ribosomal subunit on the transcribed mRNA.",
        "a": true,
        "e": "True. The polypurine Shine-Dalgarno consensus (5'-AGGAGG-3') base-pairs with the 16S rRNA 3' end to align the ribosome on the AUG start codon.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Inclusion bodies composed of aggregated recombinant protein can be solubilized using strong denaturing agents such as 6 M guanidine-HCl or 8 M urea.",
        "a": true,
        "e": "True. High concentrations of chaotropic denaturants unfold aggregated protein chains; subsequent controlled dialysis allows refolding into biologically active native conformations.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Northern blotting uses intact genomic double-stranded DNA to detect specific restriction enzyme fragment lengths.",
        "a": false,
        "e": "False. Southern blotting analyzes DNA; Northern blotting specifically analyzes cellular RNA to evaluate gene expression and transcript size.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "During PCR cycling, the DNA extension step is typically performed at 72°C because this corresponds to the optimal enzymatic activity of Taq DNA polymerase.",
        "a": true,
        "e": "True. 72°C represents the catalytic optimum where Taq incorporates ~1,000 nucleotides per minute with maximum processivity.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Real-Time PCR, a higher starting copy number of target template produces a higher Cycle Threshold (Ct) value.",
        "a": false,
        "e": "False. Higher starting target template copies reach the fluorescence threshold in FEWER cycles, resulting in a LOWER Ct value.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "TaqMan hydrolysis probes produce a fluorescent signal only after the probe is cleaved by the 5' to 3' exonuclease activity of Taq DNA polymerase.",
        "a": true,
        "e": "True. Cleavage physically separates the 5' reporter fluorophore from the 3' quencher, ending FRET and liberating fluorescence proportional to amplicon accumulation.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "SYBR Green I dye discriminates between authentic target PCR amplicons and primer-dimer artifacts, fluorescing only with the authentic target.",
        "a": false,
        "e": "False. SYBR Green I binds non-specifically to the minor groove of ANY double-stranded DNA; primer-dimers fluoresce identically, necessitating melting curve analysis.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Reverse transcriptase enzyme possesses DNA-dependent RNA polymerase activity.",
        "a": false,
        "e": "False. Reverse transcriptase is an RNA-dependent DNA polymerase; it uses an RNA template to synthesize complementary DNA (cDNA).",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Nested PCR requires two separate, consecutive rounds of PCR amplification using two distinct sets of oligonucleotide primers.",
        "a": true,
        "e": "True. The second round uses 'internal' primers that anneal inside the first-round amplicon, ensuring that only genuine target sequences amplify.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In primer design, the 3' end of the primer must have significant complementarity with itself to promote primer-dimer formation.",
        "a": false,
        "e": "False. Primer 3' self-complementarity must be strictly avoided because 3' complementarity drives severe primer-dimer artifacts and template amplification failure.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "A single discrete peak on a SYBR Green dissociation melt curve indicates a pure, homogenous PCR amplicon.",
        "a": true,
        "e": "True. A sharp, single melting curve peak confirms that a single specific double-stranded DNA product with uniform melting temperature was generated.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In Western blotting, secondary antibodies are commonly conjugated to enzymes such as Horseradish Peroxidase (HRP) or Alkaline Phosphatase (AP) for signal detection.",
        "a": true,
        "e": "True. Enzyme-conjugated secondary antibodies recognize the Fc region of the primary antibody, catalyzing chemiluminescent (ECL) or chromogenic reactions.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Touchdown PCR increases reaction specificity by gradually increasing the annealing temperature from 50°C to 70°C over successive cycles.",
        "a": false,
        "e": "False. Touchdown PCR DECREASES the annealing temperature (e.g., from 65°C down to 55°C) across initial cycles to favor specific priming first.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Ethidium bromide is a known potent mutagen and teratogen because it intercalates between adjacent stacked planar base pairs of double-stranded DNA.",
        "a": true,
        "e": "True. Intercalation unwinds the DNA helix and distorts its spatial geometry, causing frameshift mutations during replication and transcription.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "Hot-Start PCR is accomplished by adding Taq polymerase to the reaction tube after the denaturation step has already been completed.",
        "a": false,
        "e": "False. Modern hot-start uses chemical or antibody inhibitors that release active Taq upon heating to 95°C, allowing all reagents to be assembled in advance.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Loop-Mediated Isothermal Amplification (LAMP) requires a sophisticated automated thermal cycler to alternate temperatures between 95°C and 55°C.",
        "a": false,
        "e": "False. LAMP operates ISOTHERMALLY at a single steady temperature (60–65°C) in a simple water bath or heating block, eliminating the need for a thermocycler.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In Western blotting, transfer of proteins from polyacrylamide gel to PVDF membrane is driven by an electric current flowing toward the positive anode.",
        "a": true,
        "e": "True. Because SDS coats proteins with a uniform negative charge, proteins migrate toward the positive electrode (anode), embedding into the membrane.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "In Sanger dideoxy sequencing, ddNTPs completely replace normal dNTPs in the reaction mixture.",
        "a": false,
        "e": "False. Normal dNTPs are present in large molar excess; a small ratio of ddNTPs (~1:100) is added so that chain termination occurs randomly across all fragment lengths.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Illumina next-generation sequencing uses reversible fluorescent terminators that allow single-base incorporation followed by imaging and cleavage of the terminator.",
        "a": true,
        "e": "True. Reversible terminators permit step-wise addition of a single fluorescent base per cycle; after imaging, the fluorophore and block are cleaved for the next cycle.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "A BLAST E-value of 1.0 indicates a significantly more reliable and homologous sequence alignment than an E-value of 1e-50.",
        "a": false,
        "e": "False. LOWER E-values indicate higher statistical significance; an E-value of 1e-50 represents an authentic biological homology, while 1.0 can happen by chance.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Multilocus Sequence Typing (MLST) relies on sequencing hypervariable outer surface protein genes that change rapidly under host immune pressure.",
        "a": false,
        "e": "False. MLST analyzes highly CONSERVED essential housekeeping metabolic genes that accumulate neutral point mutations slowly, establishing stable evolutionary lineages.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Naturally occurring wild-type bacterial species isolated directly from soil or water are patentable in their natural unmodified state under Indian Patent Law.",
        "a": false,
        "e": "False. Section 3(c) and 3(j) of the Indian Patents Act prohibits patenting naturally occurring microorganisms or discoveries of living things in nature.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The Budapest Treaty eliminates the legal requirement to physically deposit a viable microorganism culture when applying for a patent on that microbe.",
        "a": false,
        "e": "False. The Budapest Treaty MANDATES the physical deposit of a viable culture in an authorized IDA to guarantee public access and reproducible disclosure.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In molecular phylogenetics, a bootstrap value of 95% at an internal node indicates that the grouping occurred in 95% of the 1,000 resampled replicate trees.",
        "a": true,
        "e": "True. High bootstrap percentages (>=70–80%) indicate strong statistical support for that particular taxonomic clade from the underlying sequence alignment.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Oxford Nanopore sequencing requires fluorescent labeling of dNTPs and optical laser scanning during nucleotide translocation.",
        "a": false,
        "e": "False. Nanopore sequencing is an electrical, label-free method measuring picoampere shifts in ionic current through the nanopore, requiring zero lasers or dyes.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "GenBank, the EMBL Nucleotide Archive, and DDBJ synchronize and exchange newly submitted sequence data on a daily basis.",
        "a": true,
        "e": "True. Under the International Nucleotide Sequence Database Collaboration (INSDC), data submitted to any of the three repositories is synchronized daily.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The Genetic Engineering Appraisal Committee (GEAC) in India operates under the administrative authority of the Department of Biotechnology (DBT).",
        "a": false,
        "e": "False. GEAC is housed under the Ministry of Environment, Forest and Climate Change (MoEFCC); RCGM is under the Department of Biotechnology (DBT).",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In FASTA sequence files, the definition line containing sequence metadata must begin with a greater-than ('>') symbol as the very first character.",
        "a": true,
        "e": "True. The '>' symbol is the universal header identifier in FASTA formatting, followed immediately by accession numbers and descriptive titles.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "Pyrosequencing detects the release of inorganic pyrophosphate (PPi) during nucleotide polymerization using a chemiluminescent enzymatic reaction.",
        "a": true,
        "e": "True. PPi released upon dNTP incorporation is converted to ATP by sulfurylase, which fuels firefly luciferase to emit light proportional to incorporated bases.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The Cartagena Protocol on Biosafety provides an Advance Informed Agreement (AIA) procedure prior to intentional transboundary transfer of living modified organisms.",
        "a": true,
        "e": "True. The AIA procedure ensures that importing countries have prior notice, assessment, and consent before accepting living modified organisms for environmental release.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "Random Amplified Polymorphic DNA (RAPD) markers are codominant markers capable of distinguishing heterozygotes from homozygotes on an agarose gel.",
        "a": false,
        "e": "False. RAPD markers are DOMINANT markers (presence vs absence of a band); they cannot differentiate between homozygous present and heterozygous individuals.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 3
      },
      {
        "q": "In phylogenetic trees, a rooted tree includes a unique common ancestral node from which all operational taxonomic units in the tree diverge.",
        "a": true,
        "e": "True. A rooted tree establishes an evolutionary timescale and direction of descent by specifying a basal outgroup or ancestral root node.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "Type II restriction endonucleases recognize specific symmetrical nucleotide sequences termed ______ sequences that read identically 5' to 3' on both strands.",
        "a": [
          "palindromic",
          "palindrome",
          "palindromes"
        ],
        "a_display": "Palindromic sequences",
        "e": "Palindromes (e.g., 5'-GAATTC-3') possess inverted terminal symmetry that matches the two identical subunits of homodimeric restriction enzymes.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The restriction enzyme isolated from Escherichia coli that cleaves at 5'-G^AATTC-3' generating 5' sticky overhangs is ______.",
        "a": [
          "ecori",
          "eco ri"
        ],
        "a_display": "EcoRI",
        "e": "EcoRI was one of the first restriction enzymes discovered and remains the quintessential tool in recombinant cloning.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "Restriction endonucleases that recognize identical target DNA sequences and cleave at the exact same position are termed ______.",
        "a": [
          "isoschizomers"
        ],
        "a_display": "Isoschizomers",
        "e": "Isoschizomers (e.g., SphI and BbuI, both cleaving GCATG^C) originate from different bacterial species but yield identical fragments.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In pUC plasmids, the multiple cloning site is strategically positioned within the coding region of the ______ alpha-peptide gene.",
        "a": [
          "lacz",
          "beta-galactosidase"
        ],
        "a_display": "lacZ (Beta-galactosidase)",
        "e": "Foreign DNA insertion disrupts the lacZ reading frame, abolishing alpha-complementation and forming white colonies on X-gal.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The chromogenic chemical substrate cleaved by active beta-galactosidase to form a distinctive deep blue precipitate is ______.",
        "a": [
          "x-gal",
          "xgal"
        ],
        "a_display": "X-gal (5-bromo-4-chloro-3-indolyl-beta-D-galactopyranoside)",
        "e": "X-gal cleavage releases free indoxyl monomers that oxidize to form an insoluble 5,5'-dibromo-4,4'-dichloro-indigo blue pigment.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The non-metabolizable synthetic inducer of the lac operon added to blue-white selection plates is ______.",
        "a": [
          "iptg"
        ],
        "a_display": "IPTG (Isopropyl-beta-D-1-thiogalactopyranoside)",
        "e": "IPTG binds the lac repressor without being broken down by beta-galactosidase, ensuring sustained promoter transcription.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The enzyme used to dephosphorylate linearized vector DNA at its 5' ends to prevent self-ligation is ______ phosphatase.",
        "a": [
          "alkaline",
          "ciap",
          "alkaline phosphatase"
        ],
        "a_display": "Alkaline phosphatase (CIAP)",
        "e": "Removing 5'-phosphates prevents vector self-circularization, ensuring only recombinant vector-insert molecules are ligated.",
        "topicId": "u3-t01",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Hybrid cloning vectors constructed by inserting lambda phage cos sites into a plasmid backbone are called ______.",
        "a": [
          "cosmids",
          "cosmid"
        ],
        "a_display": "Cosmids",
        "e": "Cosmids accommodate inserts up to 45 kb and can be packaged into lambda heads for highly efficient transduction.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "In alkaline lysis plasmid purification, the high molecular weight genomic DNA precipitates alongside potassium ______ sulfate complexes.",
        "a": [
          "dodecyl",
          "sds",
          "lauryl"
        ],
        "a_display": "Dodecyl (Potassium dodecyl sulfate / SDS)",
        "e": "Addition of potassium acetate precipitates insoluble potassium dodecyl sulfate (KDS), trapping chromosomal DNA and denatured proteins.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 3
      },
      {
        "q": "Bacterial cells treated with ice-cold CaCl2 to render their cell walls temporarily permeable to plasmid DNA are described as ______ cells.",
        "a": [
          "competent",
          "chemically competent"
        ],
        "a_display": "Competent cells",
        "e": "Competent cells are capable of taking up foreign DNA upon a brief 42°C heat-shock treatment.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The method of transformation that uses high-voltage electrical pulses to introduce plasmid DNA into bacteria is ______.",
        "a": [
          "electroporation",
          "electrotransformation"
        ],
        "a_display": "Electroporation",
        "e": "Electroporation transiently permeabilizes the lipid bilayer, achieving transformation efficiencies >10^9 CFU/ug.",
        "topicId": "u3-t03",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The affinity purification tag consisting of six consecutive histidine residues that coordinates with divalent nickel ions is the ______ tag.",
        "a": [
          "his",
          "his-tag",
          "polyhistidine",
          "6xhis"
        ],
        "a_display": "His-tag (6xHis)",
        "e": "His-tagged proteins are bound to Ni-NTA agarose beads and eluted using competitive concentrations of imidazole.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 1
      },
      {
        "q": "The competitive chemical compound used to elute His-tagged fusion proteins from Ni-NTA affinity columns is ______.",
        "a": [
          "imidazole"
        ],
        "a_display": "Imidazole",
        "e": "Imidazole mimics the histidine side chain and displaces polyhistidine tags from coordinated Ni2+ ions on the resin.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The high-capacity bacterial cloning vector system based on the low-copy Escherichia coli F factor is the ______ Artificial Chromosome.",
        "a": [
          "bacterial",
          "bac"
        ],
        "a_display": "Bacterial Artificial Chromosome (BAC)",
        "e": "BACs maintain 100–300 kb inserts stably at 1–2 copies per cell, avoiding chimeric rearrangements.",
        "topicId": "u3-t02",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "Insoluble aggregates of misfolded recombinant protein that accumulate in the cytoplasm of bacterial expression hosts are known as ______ bodies.",
        "a": [
          "inclusion",
          "inclusion bodies"
        ],
        "a_display": "Inclusion bodies",
        "e": "Inclusion bodies require solubilization with denaturants (urea or guanidine-HCl) and refolding to recover native enzymatic activity.",
        "topicId": "u3-t04",
        "subSection": "u3-s1",
        "diff": 2
      },
      {
        "q": "The molecular technique invented by Edwin Southern used to detect specific DNA fragments immobilized on a membrane using labeled probes is ______ blotting.",
        "a": [
          "southern",
          "southern blot",
          "southern blotting"
        ],
        "a_display": "Southern blotting",
        "e": "Southern blotting revolutionized molecular genetics by permitting identification of specific restriction fragments among millions of genomic fragments.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The blotting method used to analyze separated cellular messenger RNA (mRNA) transcripts transferred onto a nylon membrane is ______ blotting.",
        "a": [
          "northern",
          "northern blot",
          "northern blotting"
        ],
        "a_display": "Northern blotting",
        "e": "Northern blotting measures gene transcription, alternative splicing variants, and mRNA size in target tissues.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The blotting technique used to detect specific proteins immobilized on a membrane using labeled antibodies is ______ blotting.",
        "a": [
          "western",
          "western blot",
          "western blotting"
        ],
        "a_display": "Western blotting",
        "e": "Western blotting (immunoblotting) confirms diagnostic antibody responses (e.g., in Lyme disease, BSE, and retroviral infections).",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The thermostable DNA polymerase originally isolated from the hot-spring bacterium Thermus aquaticus is ______ DNA polymerase.",
        "a": [
          "taq",
          "taq polymerase"
        ],
        "a_display": "Taq DNA polymerase",
        "e": "Isolated by Thomas Brock and Chien, Taq polymerase remains stable at 95°C, automating PCR cycling.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In PCR cycling, the step where reaction temperature drops to 50–60°C to permit short oligonucleotide primers to bind complementary template sequences is ______.",
        "a": [
          "annealing",
          "primer annealing"
        ],
        "a_display": "Annealing",
        "e": "During annealing, thermodynamic conditions allow forward and reverse primers to hybridize specifically to flanking template regions.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The formula used to estimate primer melting temperature (Tm) as 2(A+T) + 4(G+C) degrees Celsius is the ______ rule.",
        "a": [
          "wallace",
          "wallace rule",
          "the wallace rule"
        ],
        "a_display": "Wallace rule",
        "e": "The Wallace rule estimates oligonucleotide Tm by accounting for 2 hydrogen bonds in AT pairs and 3 in GC pairs.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The cycle number at which reporter fluorescence exceeds a defined threshold above background baseline in Real-Time PCR is the ______ threshold (Ct).",
        "a": [
          "cycle",
          "cycle threshold",
          "ct",
          "cq"
        ],
        "a_display": "Cycle threshold (Ct / Cq)",
        "e": "Ct values are inversely proportional to target quantity; lower Ct values reflect higher initial target DNA copies.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The fluorescent dye that binds non-specifically to the minor groove of all double-stranded DNA in real-time PCR is ______ Green I.",
        "a": [
          "sybr",
          "sybr green",
          "sybr green i"
        ],
        "a_display": "SYBR Green I",
        "e": "SYBR Green I fluoresces >1,000-fold more when bound to dsDNA than when free in solution, tracking bulk amplicon accumulation.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "TaqMan probes rely on the biophysical phenomenon known as Förster Resonance ______ Transfer (FRET) between reporter and quencher dyes.",
        "a": [
          "energy",
          "energy transfer"
        ],
        "a_display": "Energy (FRET)",
        "e": "In FRET, excitation energy of the 5' reporter fluorophore is non-radiatively absorbed by the nearby 3' quencher molecule.",
        "topicId": "u3-t07",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The PCR variant that uses two sequential sets of primers, with the second pair annealing inside the first-round amplicon, is ______ PCR.",
        "a": [
          "nested",
          "nested pcr"
        ],
        "a_display": "Nested PCR",
        "e": "Nested PCR dramatically increases diagnostic sensitivity and specificity, detecting single pathogen copies.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "The PCR technique that simultaneously amplifies multiple distinct target sequences in a single reaction vessel using multiple primer pairs is ______ PCR.",
        "a": [
          "multiplex",
          "multiplex pcr"
        ],
        "a_display": "Multiplex PCR",
        "e": "Multiplex PCR permits simultaneous detection of multiple viral or bacterial pathogens in a single clinical diagnostic run.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "The PCR modification that begins with an elevated annealing temperature that decreases incrementally across early cycles to eliminate non-specific amplification is ______ PCR.",
        "a": [
          "touchdown",
          "touchdown pcr"
        ],
        "a_display": "Touchdown PCR",
        "e": "Touchdown PCR enriches for specific target amplicons in early high-stringency cycles before lower-stringency extension.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 2
      },
      {
        "q": "Artifactual short double-stranded products formed when primers anneal to each other at their 3' ends and are extended by polymerase are termed primer-______.",
        "a": [
          "dimers",
          "dimer"
        ],
        "a_display": "Primer-dimers",
        "e": "Primer-dimers compete with the target template for Taq polymerase and dNTPs, reducing target detection sensitivity.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Western blotting, the blocking reagent commonly prepared at 5% concentration to saturate non-specific protein binding sites on the membrane is non-fat dry ______.",
        "a": [
          "milk",
          "bovine serum albumin",
          "bsa"
        ],
        "a_display": "Milk (or BSA)",
        "e": "Casein proteins in non-fat dry milk coat vacant membrane binding sites, blocking non-specific antibody adsorption.",
        "topicId": "u3-t05",
        "subSection": "u3-s2",
        "diff": 1
      },
      {
        "q": "In Loop-Mediated Isothermal Amplification (LAMP), the strand-displacing DNA polymerase enzyme derived from Geobacillus stearothermophilus is ______ DNA polymerase.",
        "a": [
          "bst",
          "bst polymerase"
        ],
        "a_display": "Bst DNA polymerase",
        "e": "Bst polymerase displaces downstream DNA strands during synthesis, enabling isothermal loop-mediated exponential amplification.",
        "topicId": "u3-t06",
        "subSection": "u3-s2",
        "diff": 3
      },
      {
        "q": "The classic DNA sequencing technique invented by Frederick Sanger that utilizes 2',3'-dideoxynucleoside triphosphates is known as the dideoxy chain ______ method.",
        "a": [
          "termination",
          "chain termination"
        ],
        "a_display": "Chain termination method",
        "e": "The Sanger method terminates polymerization whenever a 2',3'-ddNTP lacking a 3'-OH is incorporated into the growing strand.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In Sanger sequencing, dideoxynucleotides lack a ______ group at the 3' position of the ribose ring, preventing subsequent phosphodiester bond formation.",
        "a": [
          "hydroxyl",
          "oh",
          "-oh"
        ],
        "a_display": "Hydroxyl (-OH) group",
        "e": "Without a 3'-OH group, DNA polymerase cannot add the next nucleotide, terminating the chain at that specific base.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The Next-Generation Sequencing method that detects bioluminescent visible light produced by luciferase upon pyrophosphate release is ______.",
        "a": [
          "pyrosequencing",
          "454 pyrosequencing"
        ],
        "a_display": "Pyrosequencing",
        "e": "Developed by Ronaghi and Nygren, pyrosequencing measures real-time light emission proportional to the number of incorporated nucleotides.",
        "topicId": "u3-t08",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The molecular typing method that characterizes bacterial isolates by sequencing internal ~500 bp fragments of seven conserved housekeeping genes is ______.",
        "a": [
          "mlst",
          "multilocus sequence typing"
        ],
        "a_display": "Multilocus Sequence Typing (MLST)",
        "e": "MLST profiles define discrete Sequence Types (ST), providing global molecular epidemiology standards for Salmonella, MRSA, and Campylobacter.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The primary international nucleotide sequence repository maintained by the National Center for Biotechnology Information (NCBI) is ______.",
        "a": [
          "genbank"
        ],
        "a_display": "GenBank",
        "e": "GenBank contains publicly available nucleotide sequences for over 400,000 formally described species.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The curated, non-redundant protein sequence database that forms the gold standard of protein annotation within UniProt is ______.",
        "a": [
          "swiss-prot",
          "swissprot"
        ],
        "a_display": "Swiss-Prot",
        "e": "Swiss-Prot records are manually evaluated and annotated by biological curators with verified literature evidence.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "In a BLAST search, the statistical parameter that describes the number of random chance hits expected in a database search is the ______ value.",
        "a": [
          "e",
          "e-value",
          "expect"
        ],
        "a_display": "E-value (Expect value)",
        "e": "Lower E-values reflect higher statistical significance; an E-value of zero denotes an exact match.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The international treaty that permits the physical deposit of a viable microbial strain in an International Depository Authority for patent purposes is the ______ Treaty.",
        "a": [
          "budapest",
          "budapest treaty"
        ],
        "a_display": "Budapest Treaty",
        "e": "Adopted in 1977, the Budapest Treaty allows a single deposit in a recognized IDA to satisfy disclosure requirements in all member nations.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "In India, the apex statutory committee that grants approval for the environmental release of Genetically Modified Organisms (GMOs) is the ______.",
        "a": [
          "geac",
          "genetic engineering appraisal committee"
        ],
        "a_display": "Genetic Engineering Appraisal Committee (GEAC)",
        "e": "GEAC assesses environmental, animal, and human health biosafety before approving field trials or commercialization of GMOs.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The global protocol governing the safe transfer, handling, and transboundary movement of Living Modified Organisms (LMOs) is the ______ Protocol on Biosafety.",
        "a": [
          "cartagena",
          "cartagena protocol"
        ],
        "a_display": "Cartagena Protocol",
        "e": "The Cartagena Protocol protects biological diversity from potential risks posed by modern biotechnology products.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "The standard single-letter code text format for nucleotide or protein sequences where the header begins with a '>' symbol is ______ format.",
        "a": [
          "fasta",
          "fasta format"
        ],
        "a_display": "FASTA format",
        "e": "FASTA is the universal standard format used by alignment programs, tree-building algorithms, and sequence databases.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The standard legal duration of patent protection granted from the date of filing under the WTO TRIPS Agreement is ______ years.",
        "a": [
          "20",
          "twenty"
        ],
        "a_display": "20 years",
        "e": "Patent rights grant a 20-year monopoly to exclude others from commercially making, using, or selling the patented invention.",
        "topicId": "u3-t10",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The statistical resampling technique used to assess branch reliability in molecular phylogenetic trees is ______ analysis.",
        "a": [
          "bootstrap",
          "bootstrapping"
        ],
        "a_display": "Bootstrap analysis",
        "e": "Bootstrapping randomly samples alignment columns with replacement to calculate the percentage of trees reproducing a given clade.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      },
      {
        "q": "A continuous sequence of DNA that begins with an ATG start codon and ends with an in-frame stop codon, potentially encoding a protein, is an Open ______ Frame.",
        "a": [
          "reading",
          "reading frame"
        ],
        "a_display": "Reading Frame (ORF)",
        "e": "ORFs represent putative protein-coding genes identified during microbial genomic annotation.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 1
      },
      {
        "q": "The molecular typing technique that uses short (approx. 10 bp) arbitrary primers to amplify random genomic segments without prior sequence knowledge is ______.",
        "a": [
          "rapd",
          "random amplified polymorphic dna"
        ],
        "a_display": "RAPD",
        "e": "RAPD quickly generates DNA fingerprints across unsequenced bacterial or fungal genomes at low annealing temperatures.",
        "topicId": "u3-t09",
        "subSection": "u3-s3",
        "diff": 2
      }
    ]
  },

  "unit-4": {
    "mcq": [
      {
        "q": "Which primary lymphoid organ in birds is responsible for B-cell diversification and development through somatic gene conversion?",
        "o": [
          "Bursa of Fabricius",
          "Thymus",
          "Harderian gland",
          "Cecal tonsils"
        ],
        "a": 0,
        "e": "The Bursa of Fabricius, a dorsal diverticulum of the proctodaeum in birds, provides the specialized microenvironment for B-cell maturation and somatic gene conversion.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "In young ruminants (calves and lambs) and pigs, which specialized gut-associated lymphoid tissue serves as a major primary lymphoid organ for B-lymphocyte generation?",
        "o": [
          "Ileal Peyer's patch",
          "Jejunal Peyer's patch",
          "Mesenteric lymph node",
          "Palatine tonsil"
        ],
        "a": 0,
        "e": "The ileal Peyer's patch functions as a primary lymphoid organ in sheep, cattle, and swine; it reaches peak cellularity around birth and involutes by maturity.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "What unique anatomical feature characterizes the lymph nodes of domestic swine (pigs) compared to all other domestic mammals?",
        "o": [
          "Inverted architecture where cortical follicles are located internally and the lymph sinus/medulla is located peripherally",
          "Complete absence of germinal centers",
          "Absence of any afferent lymphatic vessels",
          "Lymph enters at the hilus and exits over the capsule"
        ],
        "a": 0,
        "e": "Porcine lymph nodes have an inverted layout: lymphoid nodules and germinal centers reside in the center, while lymph cords and sinuses surround the periphery.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "In the mammalian spleen, T lymphocytes are primarily concentrated within which specific anatomical compartment of the white pulp?",
        "o": [
          "Periarteriolar Lymphoid Sheaths (PALS) surrounding central arterioles",
          "Splenic cords of Billroth",
          "Primary lymphoid follicles",
          "Marginal zone"
        ],
        "a": 0,
        "e": "The PALS forms a cylindrical sheath of mature T lymphocytes encircling the central arterioles within the splenic white pulp.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Which Toll-Like Receptor (TLR) is localized on the host cell surface and specifically recognizes Gram-negative bacterial lipopolysaccharide (LPS)?",
        "o": [
          "TLR4",
          "TLR2",
          "TLR3",
          "TLR9"
        ],
        "a": 0,
        "e": "TLR4, in complex with myeloid differentiation protein-2 (MD-2) and CD14, binds the Lipid A moiety of Gram-negative LPS to trigger NF-kappa-B activation.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Which Toll-Like Receptor resides intracellularly within endosomal membranes and specifically detects viral double-stranded RNA (dsRNA)?",
        "o": [
          "TLR3",
          "TLR4",
          "TLR5",
          "TLR2"
        ],
        "a": 0,
        "e": "TLR3 localizes to endosomes where it recognizes viral dsRNA (such as Reovirus or viral replication intermediates), inducing Type I interferons via TRIF.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "During phagocytosis, what multicomponent membrane enzyme complex catalyzes the 'respiratory burst' by reducing molecular oxygen into toxic superoxide radicals (O2-)?",
        "o": [
          "NADPH oxidase",
          "Myeloperoxidase",
          "Catalase",
          "Superoxide dismutase"
        ],
        "a": 0,
        "e": "NADPH oxidase transfers electrons from cytoplasmic NADPH to oxygen in the phagosome lumen, generating toxic superoxide anion radicals.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "In neutrophil azurophilic granules, which heme enzyme utilizes hydrogen peroxide and chloride ions to synthesize highly microbicidal hypochlorous acid (HOCl / bleach)?",
        "o": [
          "Myeloperoxidase (MPO)",
          "Lysozyme",
          "Alkaline phosphatase",
          "Defensin synthase"
        ],
        "a": 0,
        "e": "Myeloperoxidase (MPO) converts H2O2 and Cl- into hypochlorous acid (HOCl), the most potent oxidant produced by activated neutrophils.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "In the classical pathway of complement activation, which multi-subunit protein complex initiates the cascade by binding to the Fc regions of antigen-bound IgM or IgG?",
        "o": [
          "C1 complex (C1q, C1r, C1s)",
          "C3 convertase",
          "Factor B",
          "Mannose-binding lectin"
        ],
        "a": 0,
        "e": "The collagenous stalks of C1q bind to adjacent Fc domains of antigen-complexed IgM or clustered IgG, activating C1r and C1s serine proteases.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "What is the exact molecular composition of the C3 convertase enzyme in the classical and lectin pathways of complement activation?",
        "o": [
          "C4b2a",
          "C3bBb",
          "C4b2a3b",
          "C5b678"
        ],
        "a": 0,
        "e": "Cleavage of C4 and C2 by C1s produces C4b and C2a, which assemble upon the microbial membrane to form active C4b2a (classical C3 convertase).",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "In the alternative complement pathway, what stabilized bimolecular complex functions as the active C3 convertase enzyme on microbial surfaces?",
        "o": [
          "C3bBb (stabilized by Properdin)",
          "C4b2a",
          "C1qrs",
          "C5b6"
        ],
        "a": 0,
        "e": "Hydrolyzed or deposited C3b binds Factor B, which is cleaved by Factor D to yield C3bBb; association with properdin (Factor P) stabilizes this active C3 convertase.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Which low-molecular-weight complement activation peptide is the most potent anaphylatoxin and chemoattractant for neutrophils and macrophages?",
        "o": [
          "C5a",
          "C3a",
          "C4a",
          "C3b"
        ],
        "a": 0,
        "e": "C5a is a potent anaphylatoxin that stimulates mast cell histamine release, vascular permeability, smooth muscle contraction, and chemotaxis of neutrophils.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The final lytic structure formed by the terminal complement cascade that inserts a 10 nm pore into lipid bilayer membranes is the:",
        "o": [
          "Membrane Attack Complex (MAC: C5b-C6-C7-C8-polyC9)",
          "C3 convertase",
          "C5 convertase",
          "Properdin complex"
        ],
        "a": 0,
        "e": "C5b recruits C6, C7, and C8; C8 mediates membrane penetration, polymerizing 12–18 molecules of C9 into a hollow cylindrical lytic transmembrane pore (MAC).",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Which complement cleavage fragment acts as the primary opsonin, coating microbial targets to facilitate recognition by CR1 receptors on phagocytes?",
        "o": [
          "C3b",
          "C5a",
          "C4a",
          "C1q"
        ],
        "a": 0,
        "e": "C3b covalently binds hydroxyl and amino groups on microbial cell walls via its reactive internal thioester bond, acting as a major opsonin.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "What major regulatory protein in mammalian cell membranes protects host cells from accidental lysis by binding C8 and preventing the polymerization of C9 into the MAC?",
        "o": [
          "CD59 (Protectin)",
          "Decay-Accelerating Factor (DAF / CD55)",
          "Factor H",
          "Factor I"
        ],
        "a": 0,
        "e": "CD59 (protectin) incorporates into host membranes, binding C8 and C9 to physically inhibit poly-C9 assembly and prevent autologous complement lysis.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 3
      },
      {
        "q": "Which antiviral cytokines are classified as Type I Interferons, synthesized rapidly by virally infected cells to induce an antiviral state in neighboring uninfected cells?",
        "o": [
          "Interferon-alpha (IFN-alpha) and Interferon-beta (IFN-beta)",
          "Interferon-gamma (IFN-gamma)",
          "Interleukin-2",
          "Tumor Necrosis Factor-alpha"
        ],
        "a": 0,
        "e": "Type I IFNs (IFN-alpha/beta) bind IFNAR receptors on adjacent cells to activate the JAK-STAT pathway, inducing enzymes like 2',5'-oligoadenylate synthetase and PKR.",
        "topicId": "u4-t04",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Natural Killer (NK) cells identify and selectively lyse abnormal host cells (tumor or virally infected cells) that have downregulated which cell-surface molecule?",
        "o": [
          "MHC Class I molecules ('missing-self' recognition)",
          "CD4 receptors",
          "Toll-like receptors",
          "Complement receptor 1"
        ],
        "a": 0,
        "e": "Inhibitory Killer Immunoglobulin-like Receptors (KIRs) on NK cells bind normal self-MHC Class I; loss of MHC I relieves inhibition, triggering NK cell cytotoxicity.",
        "topicId": "u4-t04",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The specialized, non-ciliated epithelial cells situated in follicle-associated epithelium over Peyer's patches that transport luminal antigens via transcytosis are:",
        "o": [
          "Microfold (M) cells",
          "Paneth cells",
          "Goblet cells",
          "Enterochromaffin cells"
        ],
        "a": 0,
        "e": "M cells lack microvilli and mucus, taking up intact macromolecules and microorganisms from the gut lumen and delivering them to underlying dendritic cells.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "A small non-immunogenic chemical compound that cannot elicit an antibody response on its own, but can do so when covalently coupled to a high-molecular-weight carrier protein, is a:",
        "o": [
          "Hapten",
          "Epitope",
          "Adjuvant",
          "Superantigen"
        ],
        "a": 0,
        "e": "Karl Landsteiner demonstrated that haptens (e.g., dinitrophenol, penicillin) possess antigenicity (binding antibodies) but lack immunogenicity until coupled to a carrier protein.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Bacterial superantigens (such as Staphylococcal Enterotoxin B) induce massive systemic cytokine release ('cytokine storm') by which mechanism?",
        "o": [
          "Binding directly and simultaneously to the outer invariant region of MHC Class II and the V-beta domain of T-cell receptors without internal processing",
          "Cleaving host immunoglobulins into Fab fragments",
          "Forming pores in macrophage cell membranes",
          "Inactivating complement C3 directly"
        ],
        "a": 0,
        "e": "Superantigens bypass normal processing, binding outside the peptide groove to activate up to 20% of all systemic T cells simultaneously.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Digestion of an IgG antibody molecule with the proteolytic plant enzyme papain cleaves the heavy chains above the hinge region, yielding:",
        "o": [
          "Two identical Fab fragments (monovalent) and one Fc fragment",
          "One F(ab')2 fragment and fragmented pFc' pieces",
          "Four separate polypeptide chains",
          "Intact light chains and degraded heavy chains"
        ],
        "a": 0,
        "e": "Papain cleaves on the amino-terminal side of the inter-heavy chain disulfide bonds, producing two univalent antigen-binding Fab fragments and one crystallizable Fc fragment.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "In contrast to papain, digestion of an IgG molecule with pepsin cleaves on the carboxy-terminal side of the hinge disulfide bonds, generating:",
        "o": [
          "One bivalent F(ab')2 fragment and multiple small degraded pFc' peptides",
          "Two separate Fab fragments",
          "Intact Fc fragment alone",
          "Individual heavy and light chain monomers"
        ],
        "a": 0,
        "e": "Pepsin leaves the inter-heavy chain disulfide bonds intact, yielding a single bivalent F(ab')2 fragment capable of precipitation and agglutination.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Which immunoglobulin isotype exists predominantly as a pentamer linked by a joining (J) chain, possessing ten theoretical antigen-binding sites, and is the first antibody produced during a primary immune response?",
        "o": [
          "IgM",
          "IgG",
          "IgA",
          "IgE"
        ],
        "a": 0,
        "e": "IgM is secreted as a pentamer with high avidity (10 binding sites) and a J chain; it is the earliest antibody class synthesized upon primary exposure to antigen.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Which antibody class is the principal immunoglobulin present in mucosal secretions (saliva, tears, bile, colostrum) and is protected from proteolytic cleavage by a Secretory Component?",
        "o": [
          "Secretory IgA (sIgA)",
          "IgM",
          "IgE",
          "IgD"
        ],
        "a": 0,
        "e": "Dimeric IgA acquires the Secretory Component (cleaved from the pIgR receptor) during epithelial transcytosis, shielding it from luminal digestive proteases.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Which immunoglobulin isotype binds with extremely high affinity to FcepsilonRI receptors on tissue mast cells and blood basophils, mediating Type I hypersensitivity and anti-helminth immunity?",
        "o": [
          "IgE",
          "IgG4",
          "IgA",
          "IgM"
        ],
        "a": 0,
        "e": "IgE heavy chains (epsilon chains, with 4 constant domains) bind FcepsilonRI on mast cells; antigen cross-linking triggers immediate allergic degranulation.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "In camelids (camels, llamas, alpacas), a unique subclass of functional heavy-chain-only antibodies (HCAbs) naturally exists that completely lacks:",
        "o": [
          "Light chains and the CH1 constant domain of the heavy chain",
          "The Fc domain",
          "Antigen-binding variable domains",
          "The hinge region"
        ],
        "a": 0,
        "e": "Camelid HCAbs are homodimers of heavy chains devoid of light chains and CH1 domains; their single variable domains (VHH or nanobodies) retain full antigen binding.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "What is the primary avian systemic serum immunoglobulin that serves as the functional homologue of mammalian IgG and is actively transferred into egg yolks?",
        "o": [
          "IgY",
          "IgM",
          "IgA",
          "IgD"
        ],
        "a": 0,
        "e": "Avian IgY has four constant domains and lacks a flexible hinge region; it is transported from maternal serum into the developing egg yolk to provide passive immunity to chicks.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "The three hypervariable loops located within the variable domains of both heavy and light chains that directly contact the antigen epitope are termed:",
        "o": [
          "Complementarity-Determining Regions (CDR1, CDR2, CDR3)",
          "Framework regions (FR1 to FR4)",
          "Constant domains (CH1 to CH3)",
          "Hinge regions"
        ],
        "a": 0,
        "e": "CDRs exhibit extreme amino acid diversity; three on VH and three on VL fold together to form the specific three-dimensional antigen-binding paratope.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "In the classical hybridoma technique developed by Georges Köhler and César Milstein (1975), monoclonal antibodies are produced by fusing:",
        "o": [
          "Immunized mouse splenic B lymphocytes with immortal HGPRT-deficient myeloma cells",
          "T lymphocytes with macrophage cell lines",
          "Plasma cells with dendritic cells",
          "B lymphocytes with transformed fibroblasts"
        ],
        "a": 0,
        "e": "Hybridomas inherit antibody specificity from primary splenic B cells and immortal in vitro proliferation from the myeloma fusion partner.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "What chemical fusogen agent is routinely added to promote cell membrane fusion between B cells and myeloma cells in hybridoma production?",
        "o": [
          "Polyethylene glycol (PEG)",
          "Dimethyl sulfoxide (DMSO)",
          "Calcium chloride",
          "Sodium dodecyl sulfate (SDS)"
        ],
        "a": 0,
        "e": "PEG (typically 40–50% solution, MW 1500) dehydrates cell surfaces and promotes lipid membrane merging between adjacent cells to form heterokaryons.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "In the selective HAT culture medium used in hybridoma production, what is the specific biochemical role of Aminopterin?",
        "o": [
          "Blocks the de novo pathway of purine and pyrimidine nucleotide synthesis by inhibiting dihydrofolate reductase",
          "Provides an exogenous purine source for salvage",
          "Provides an exogenous pyrimidine source for salvage",
          "Directly kills unfused splenic B cells"
        ],
        "a": 0,
        "e": "Aminopterin is a folic acid analog that blocks dihydrofolate reductase, shutting down de novo nucleotide synthesis and forcing cells to use the salvage pathway.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Why do unfused myeloma cells die in HAT selective medium?",
        "o": [
          "They are deficient in hypoxanthine-guanine phosphoribosyltransferase (HGPRT-) and cannot utilize the salvage pathway when de novo synthesis is blocked",
          "They are sensitive to hypoxanthine toxicity",
          "They lack thymidine kinase",
          "They are destroyed by normal B-cell antibodies"
        ],
        "a": 0,
        "e": "Because myeloma cells lack HGPRT, they cannot use exogenous hypoxanthine to synthesize purines via the salvage pathway and starve when aminopterin blocks de novo synthesis.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Why do unfused primary splenic B lymphocytes die in HAT culture within 7 to 10 days?",
        "o": [
          "They have a naturally limited lifespan in in vitro culture and cannot divide indefinitely",
          "They are killed by aminopterin",
          "They are HGPRT-deficient",
          "They are killed by polyethylene glycol"
        ],
        "a": 0,
        "e": "Primary normal B lymphocytes have a finite programmed lifespan and die naturally in culture, ensuring only immortal hybridomas survive in HAT medium.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Antibody affinity describes the binding strength between:",
        "o": [
          "A single antigen-binding site (paratope) on an antibody and a single monovalent epitope on an antigen",
          "The overall functional strength of all binding sites combined",
          "The cross-reactivity between different antigens",
          "The rate of antibody catabolism"
        ],
        "a": 0,
        "e": "Affinity is the thermodynamic association constant (Ka) between a single paratope and its complementary epitope, whereas avidity is the overall multivalent binding strength.",
        "topicId": "u4-t07",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "The overall functional binding strength of a multivalent antibody molecule (such as pentameric IgM) to a multivalent particulate antigen is termed:",
        "o": [
          "Avidity",
          "Affinity",
          "Specificity",
          "Valency"
        ],
        "a": 0,
        "e": "Avidity reflects the synergistic binding power of multiple antigen-binding sites operating simultaneously, far exceeding the sum of individual intrinsic affinities.",
        "topicId": "u4-t07",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Which chemical substance is formulated into vaccines to create an antigen depot and stimulate innate pattern-recognition receptors, non-specifically enhancing the immune response?",
        "o": [
          "Adjuvant",
          "Hapten",
          "Epitope",
          "Toxoid"
        ],
        "a": 0,
        "e": "Adjuvants (e.g., alum, emulsions, saponins) prolong antigen exposure and activate innate PRRs on dendritic cells to stimulate robust adaptive responses.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "MHC Class I molecules present endogenous peptide antigens to which subset of T lymphocytes?",
        "o": [
          "CD8+ Cytotoxic T Lymphocytes (CTLs)",
          "CD4+ T helper cells",
          "B lymphocytes",
          "Natural Killer cells alone"
        ],
        "a": 0,
        "e": "MHC Class I alpha-3 domains bind the CD8 coreceptor, presenting 8–10 amino acid endogenous peptides to CD8+ CTLs.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "MHC Class II molecules present exogenous peptide antigens to which subset of T lymphocytes?",
        "o": [
          "CD4+ T helper cells",
          "CD8+ Cytotoxic T lymphocytes",
          "Gamma-delta T cells",
          "Neutrophils"
        ],
        "a": 0,
        "e": "MHC Class II beta-2 domains bind the CD4 coreceptor, presenting 13–18 amino acid exogenous peptides to CD4+ T helper cells.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "What is the molecular composition of the invariant light chain non-covalently associated with the heavy alpha chain of all MHC Class I molecules?",
        "o": [
          "Beta-2 microglobulin (beta2m)",
          "Alpha-2 macroglobulin",
          "J chain",
          "Secretory component"
        ],
        "a": 0,
        "e": "Beta-2 microglobulin (12 kDa, encoded outside the MHC locus) stabilizes the MHC Class I alpha-chain for surface expression.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Which molecular complex inside the host cytoplasm degrades endogenous ubiquitinated viral and self-proteins into peptides for MHC Class I presentation?",
        "o": [
          "26S Proteasome (Immunoproteasome)",
          "Lysosome",
          "Endosome",
          "Peroxisome"
        ],
        "a": 0,
        "e": "The immunoproteasome cleaves cytosolic viral or tumoral proteins into 8–10 amino acid peptides for translocation into the ER.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Which ATP-dependent transporter pumps cytosolic peptides across the endoplasmic reticulum membrane for loading onto newly assembled MHC Class I molecules?",
        "o": [
          "TAP (Transporter associated with Antigen Processing: TAP1/TAP2)",
          "ABC transporter B1",
          "Sec61 translocon",
          "Calnexin"
        ],
        "a": 0,
        "e": "TAP1 and TAP2 form a heterodimeric peptide channel in the ER membrane, selectively pumping 8–16 aa peptides into the ER lumen.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "In the exogenous MHC Class II antigen processing pathway, what chaperone molecule blocks the peptide-binding groove in the ER to prevent premature endogenous peptide binding?",
        "o": [
          "Invariant chain (Ii / CD74)",
          "Calreticulin",
          "Tapasin",
          "Beta-2 microglobulin"
        ],
        "a": 0,
        "e": "The invariant chain occupies the MHC II groove in the ER, directing the complex to endosomal compartments where it is digested to leave CLIP.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Which non-classical MHC molecule catalyzes the removal of the CLIP peptide fragment from MHC Class II, facilitating the loading of processed antigenic peptides?",
        "o": [
          "HLA-DM (BoLA-DM in cattle)",
          "HLA-DO",
          "TAP1",
          "Calnexin"
        ],
        "a": 0,
        "e": "HLA-DM acts as a peptide exchanger in endosomes, displacing the residual CLIP fragment to allow high-affinity antigenic peptides to bind MHC II.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 3
      },
      {
        "q": "What is the official international designation for the Major Histocompatibility Complex (MHC) gene cluster in cattle?",
        "o": [
          "BoLA (Bovine Leukocyte Antigen)",
          "ELA",
          "SLA",
          "DLA"
        ],
        "a": 0,
        "e": "Bovine MHC is termed BoLA (Bovine Leukocyte Antigen), located on bovine chromosome 23 and associated with mastitis and leukemia susceptibility.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "What is the official international designation for the swine Major Histocompatibility Complex?",
        "o": [
          "SLA (Swine Leukocyte Antigen)",
          "BoLA",
          "ELA",
          "DLA"
        ],
        "a": 0,
        "e": "Swine MHC is SLA (Swine Leukocyte Antigen), located on chromosome 7, encoding classical Class I and Class II loci.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Which cytokine secreted predominantly by T-helper 1 (Th1) cells is the master activator of macrophages and promotes cell-mediated immunity against intracellular pathogens?",
        "o": [
          "Interferon-gamma (IFN-gamma)",
          "Interleukin-4 (IL-4)",
          "Interleukin-10 (IL-10)",
          "Interleukin-13 (IL-13)"
        ],
        "a": 0,
        "e": "IFN-gamma is the signature Th1 cytokine; it activates microbicidal nitric oxide (iNOS) and ROI synthesis in macrophages to eliminate intracellular microbes.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Which T-helper subset secretes Interleukin-4 (IL-4), IL-5, and IL-13, stimulating B-cell immunoglobulin class switching to IgE and activating eosinophils against helminths?",
        "o": [
          "Th2 cells",
          "Th1 cells",
          "Th17 cells",
          "Treg cells"
        ],
        "a": 0,
        "e": "Th2 cells coordinate humoral and anti-parasitic responses: IL-4 induces IgE switching, IL-5 activates eosinophils, and IL-13 increases mucosal peristalsis.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Regulatory T cells (Tregs) that maintain peripheral immune tolerance and prevent autoimmune disease are defined by which cell-surface and intracellular marker profile?",
        "o": [
          "CD4+ CD25+ FoxP3+",
          "CD8+ CD28+ Perforin+",
          "CD3- CD56+ NK1.1+",
          "CD19+ CD20+ IgM+"
        ],
        "a": 0,
        "e": "Tregs express CD4, high levels of IL-2 receptor alpha chain (CD25), and the master lineage transcription factor FoxP3 (Forkhead box P3).",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Cytotoxic T Lymphocytes (CTLs) induce programmed apoptotic cell death in target cells via the directed exocytosis of which two cytotoxic granule proteins?",
        "o": [
          "Perforin and Granzymes (e.g., Granzyme B)",
          "Lysozyme and Defensins",
          "Histamine and Heparin",
          "Interferon and Interleukin-2"
        ],
        "a": 0,
        "e": "Perforin polymerizes in the target membrane to create pores through which serine proteases (granzymes) enter, cleaving caspases to trigger apoptosis.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "In cattle, sheep, and pigs, what unconventional T-lymphocyte population represents up to 60% of all circulating blood lymphocytes in neonatal animals?",
        "o": [
          "Gamma-delta (gammadelta) T cells",
          "CD4+ T helper cells",
          "Natural Killer cells",
          "B-1 cells"
        ],
        "a": 0,
        "e": "Young ruminants and swine have large populations of circulating gamma-delta T cells (60% in calves/piglets), which respond to non-peptide antigens at mucosal surfaces.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Which cytokine produced by Th17 lymphocytes recruits large numbers of neutrophils to mucosal and cutaneous sites of fungal and extracellular bacterial infection?",
        "o": [
          "Interleukin-17A (IL-17A)",
          "Interleukin-4",
          "Interleukin-10",
          "Transforming Growth Factor-beta (TGF-beta)"
        ],
        "a": 0,
        "e": "IL-17 induces epithelial and stromal cells to secrete G-CSF and CXCL8/IL-8, driving massive neutrophil production and recruitment.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "What is the second costimulatory signal required for full activation of naive T cells, provided by the interaction between CD28 on the T cell and which molecules on the APC?",
        "o": [
          "CD80 (B7-1) and CD86 (B7-2)",
          "CD40 and CD40L",
          "ICAM-1 and LFA-1",
          "Fas and FasL"
        ],
        "a": 0,
        "e": "Signal 1 is TCR-MHC recognition; Signal 2 is costimulation between T-cell CD28 and APC CD80/CD86. Antigen recognition without Signal 2 leads to clonal anergy.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Which inhibitory receptor is upregulated on activated T cells to deliver a negative shutdown signal by competitively binding CD80/CD86 with higher affinity than CD28?",
        "o": [
          "CTLA-4 (CD152)",
          "CD4",
          "CD8",
          "CD3"
        ],
        "a": 0,
        "e": "CTLA-4 binds CD80/CD86 with ~20-fold higher affinity than CD28, outcompeting costimulation and terminating T-cell proliferation.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 3
      },
      {
        "q": "What master transcription factor regulates the development and lineage commitment of naive CD4+ T cells into the Th1 phenotype?",
        "o": [
          "T-bet",
          "GATA-3",
          "ROR-gamma-t",
          "FoxP3"
        ],
        "a": 0,
        "e": "T-bet induces IFN-gamma synthesis and Th1 differentiation (GATA-3 directs Th2; ROR-gamma-t directs Th17; FoxP3 directs Treg).",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 3
      },
      {
        "q": "Type I hypersensitivity (immediate / anaphylactic hypersensitivity) is mediated by the cross-linking of which antibody class bound to surface receptors on mast cells and basophils?",
        "o": [
          "IgE",
          "IgG1",
          "IgM",
          "IgA"
        ],
        "a": 0,
        "e": "Allergen-mediated cross-linking of membrane-bound IgE on FcepsilonRI triggers rapid degranulation of mast cells and basophils within minutes.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Which preformed primary chemical mediator stored in mast cell granules causes rapid arteriolar vasodilation, increased capillary permeability, and smooth muscle bronchoconstriction during anaphylaxis?",
        "o": [
          "Histamine",
          "Leukotriene C4",
          "Prostaglandin D2",
          "Interleukin-5"
        ],
        "a": 0,
        "e": "Histamine acts via H1 receptors to trigger immediate endothelial contraction, vasodilation, wheal-and-flare formation, and bronchial constriction.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "What is the primary shock organ that suffers acute venous pooling and hepatic congestion during systemic anaphylaxis in the dog?",
        "o": [
          "Liver and hepatic veins (hepatic hepatic outflow sphincter constriction)",
          "Lungs (pulmonary bronchoconstriction)",
          "Right atrium",
          "Urinary bladder"
        ],
        "a": 0,
        "e": "In the dog, the primary anaphylactic shock organ is the liver; constriction of hepatic veins causes massive splanchnic pooling, vomiting, and collapse.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "In domestic cattle, sheep, and cats, what is the primary shock organ during systemic anaphylaxis?",
        "o": [
          "Lungs (severe pulmonary venoconstriction and acute asphyxiating dyspnea)",
          "Kidneys",
          "Spleen",
          "Pancreas"
        ],
        "a": 0,
        "e": "In ruminants and cats, the lungs are the primary shock organ; pulmonary vasoconstriction and edema produce severe respiratory distress and asphyxia.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Culicoides hypersensitivity ('Sweet Itch' or Queensland itch) in domestic horses is an itchy, seasonal, pruritic skin disorder mediated by which hypersensitivity mechanism?",
        "o": [
          "Type I and delayed Type IV hypersensitivity to salivary antigens of biting midges (Culicoides spp.)",
          "Type II cytotoxic reaction to red blood cells",
          "Type III immune complex deposition in joints",
          "Graft-versus-host disease"
        ],
        "a": 0,
        "e": "Salivary proteins from Culicoides midges trigger IgE-mediated Type I immediate mast cell degranulation and late-phase Type IV eosinophilic dermatitis along the mane and tail.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Neonatal Isoerythrolysis (NI) in newborn foals is a life-threatening hemolytic disease classified as which type of hypersensitivity reaction?",
        "o": [
          "Type II Cytotoxic Hypersensitivity",
          "Type I Anaphylactic Hypersensitivity",
          "Type III Immune Complex Disease",
          "Type IV Delayed-Type Hypersensitivity"
        ],
        "a": 0,
        "e": "NI is a Type II cytotoxic reaction: the foal inherits stallion erythrocyte antigens (e.g., Aa, Qa) absent in the mare; maternal alloantibodies absorbed from colostrum lyse foal RBCs.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "What diagnostic serological assay detects IgG or C3b bound to the surface of a patient's red blood cells in suspected Canine Immune-Mediated Hemolytic Anemia (IMHA)?",
        "o": [
          "Direct Antiglobulin Test (Direct Coombs' test)",
          "Indirect Coombs' test",
          "Agar gel immunodiffusion",
          "Rose Bengal plate test"
        ],
        "a": 0,
        "e": "The direct Coombs' test uses anti-canine IgG/IgM/C3 antiserum; cross-linking of antibody-coated erythrocytes in vitro produces macroscopic agglutination.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Type III hypersensitivity is initiated by the vascular and tissue deposition of:",
        "o": [
          "Soluble circulating antigen-antibody (immune) complexes activating complement",
          "Cell-bound IgE cross-linking allergens",
          "Activated CD8+ cytotoxic T cells",
          "Anti-platelet autoantibodies alone"
        ],
        "a": 0,
        "e": "Slight antigen excess produces intermediate-sized soluble immune complexes that lodge in vessel walls (glomeruli, joints, skin), activating complement and recruiting neutrophils.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The transient bilateral corneal edema ('Blue Eye' phenomenon) observed in dogs infected with or vaccinated with unmodified live Canine Adenovirus Type 1 (CAV-1) is a manifestation of:",
        "o": [
          "Type III Hypersensitivity (immune complex deposition in the anterior uvea and corneal endothelium)",
          "Type I Hypersensitivity",
          "Type II cytotoxic lysis of corneal keratocytes",
          "Type IV delayed-type granuloma"
        ],
        "a": 0,
        "e": "CAV-1 antigen-antibody complexes deposit in the filtration angle and corneal endothelium, activating complement and causing endothelial fluid pump failure and corneal edema ('blue eye').",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "The localized necrotic cutaneous vasculitis reaction that occurs 4 to 8 hours after intradermal injection of antigen into an animal with high levels of circulating precipitating IgG is the:",
        "o": [
          "Arthus reaction",
          "Schultz-Dale reaction",
          "Koch phenomenon",
          "Prausnitz-Küstner reaction"
        ],
        "a": 0,
        "e": "Nicolas Maurice Arthus (1903) described localized Type III immune complex deposition in vessel walls with complement activation, thrombosis, and hemorrhagic necrosis.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "The Tuberculin skin test (evaluating delayed swelling at 72 hours following intradermal injection of Purified Protein Derivative) is the classical diagnostic example of:",
        "o": [
          "Type IV (Delayed-Type) Hypersensitivity (DTH)",
          "Type I Anaphylactic Hypersensitivity",
          "Type II Cytotoxic Hypersensitivity",
          "Type III Immune Complex Disease"
        ],
        "a": 0,
        "e": "Type IV DTH involves sensitized memory Th1 cells that release IFN-gamma, attracting and activating a mononuclear macrophage infiltrate that creates hard induration at 48–72 hr.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Pemphigus foliaceus, the most common autoimmune skin disease of domestic dogs and cats, is caused by autoantibodies targeting which epidermal adhesion glycoprotein?",
        "o": [
          "Desmocollin-1 (and Desmoglein-1)",
          "Collagen Type VII",
          "Keratin 10",
          "Integrin alpha-6"
        ],
        "a": 0,
        "e": "Autoantibodies against desmosomal adhesion proteins (desmocollin-1 in dogs) cause acantholysis: detachment of keratinocytes and intraepidermal subcorneal pustule formation.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 3
      },
      {
        "q": "Myasthenia Gravis in dogs and cats causes progressive muscular weakness exacerbated by exercise, resulting from pathogenic autoantibodies directed against:",
        "o": [
          "Nicotinic acetylcholine receptors (AChR) on the postsynaptic neuromuscular junction",
          "Voltage-gated calcium channels",
          "Ryanodine receptors",
          "Muscarinic receptors in the heart"
        ],
        "a": 0,
        "e": "Anti-AChR autoantibodies block neuromuscular transmission and induce complement-mediated motor endplate destruction, causing muscle weakness, megaesophagus, and collapse.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Severe Combined Immunodeficiency (SCID) in Arabian foals is an inherited autosomal recessive fatal disorder caused by a defect in which gene?",
        "o": [
          "DNA-dependent protein kinase catalytic subunit (DNA-PKcs)",
          "CD18 beta-integrin",
          "Gamma-c cytokine receptor chain",
          "Recombination activating gene 1 (RAG1)"
        ],
        "a": 0,
        "e": "A 5-base-pair frameshift deletion in DNA-PKcs prevents non-homologous end joining during V(D)J recombination, resulting in complete absence of mature B and T lymphocytes.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Bovine Leukocyte Adhesion Deficiency (BLAD) in Holstein calves is caused by a point mutation in the gene encoding which cell adhesion molecule?",
        "o": [
          "CD18 (beta-2 integrin subunit)",
          "L-selectin (CD62L)",
          "ICAM-1",
          "PECAM-1"
        ],
        "a": 0,
        "e": "BLAD is an autosomal recessive mutation in CD18; neutrophils cannot form functional beta-2 integrins (LFA-1/Mac-1) to extravasate through capillaries, causing severe leukocytosis and ulcers.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Canine Systemic Lupus Erythematosus (SLE) is classically characterized by the production of autoantibodies targeting:",
        "o": [
          "Nuclear components, particularly double-stranded DNA (Antinuclear Antibodies - ANA)",
          "Red blood cell glycophorin alone",
          "Thyroid peroxidase alone",
          "Myelin basic protein"
        ],
        "a": 0,
        "e": "SLE is a prototype multisystem autoimmune disease characterized by high-titer circulating Antinuclear Antibodies (ANA) and systemic immune complex deposition.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Central immunological tolerance is established through the negative selection (clonal deletion) of strongly self-reactive developing lymphocytes within the:",
        "o": [
          "Thymus (for T cells) and Bone Marrow (for B cells)",
          "Spleen and lymph nodes",
          "Peyer's patches",
          "Liver"
        ],
        "a": 0,
        "e": "Central tolerance physically eliminates or edits immature developing lymphocytes in primary lymphoid organs if their antigen receptors bind self-antigens with high affinity.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "What transcription factor expressed in medullary thymic epithelial cells drives the ectopic expression of peripheral tissue-specific antigens to mediate negative selection of autoreactive T cells?",
        "o": [
          "Autoimmune Regulator (AIRE)",
          "FoxP3",
          "NF-kappa-B",
          "AP-1"
        ],
        "a": 0,
        "e": "AIRE drives expression of organ-specific self-proteins (e.g., insulin, thyroglobulin) in the thymic medulla, eliminating self-reactive thymocytes.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 3
      },
      {
        "q": "In Single Radial Immunodiffusion (SRID / Mancini technique) used to quantify calf IgG, how does the diameter of the precipitin ring correlate with immunoglobulin concentration?",
        "o": [
          "The square of the ring diameter (d^2) is directly proportional to the antigen concentration",
          "The diameter is inversely proportional to concentration",
          "Ring diameter is completely independent of concentration",
          "The cube of the ring diameter is proportional to concentration"
        ],
        "a": 0,
        "e": "In the Mancini technique, antigen diffuses radially into an antibody-containing agarose gel; at equilibrium, ring diameter squared (d^2) is linear with antigen concentration.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "In Agar Gel Immunodiffusion (AGID / Ouchterlony assay), what precipitin line pattern is observed when two adjacent antigen wells contain identical, cross-reactive epitopes?",
        "o": [
          "A smooth, continuous arc of identity without any spur formation",
          "Two crossed lines of non-identity",
          "A continuous line with a prominent projecting spur",
          "Zero precipitation lines"
        ],
        "a": 0,
        "e": "When two antigens share identical epitopes, their diffusing fronts fuse into a smooth continuous circular arc of identity with no projection.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "The official diagnostic Coggins test, universally mandated for international movement and surveillance of Equine Infectious Anemia (EIA), is an:",
        "o": [
          "Agar Gel Immunodiffusion (AGID) assay detecting antibodies against p26 core antigen",
          "Indirect fluorescent antibody test",
          "Standard tube agglutination test",
          "Western blot test alone"
        ],
        "a": 0,
        "e": "Developed by Leroy Coggins in 1970, the Coggins AGID test detects precipitating antibodies against the major 26 kDa capsid core antigen (p26) of EIA lentivirus.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "In diagnostic serology, what false-negative phenomenon occurs in tube agglutination tests when extreme antibody excess inhibits cross-linking and precipitation?",
        "o": [
          "Prozone phenomenon",
          "Postzone phenomenon",
          "Zone of equivalence",
          "Hemadsorption"
        ],
        "a": 0,
        "e": "The prozone phenomenon occurs at high antibody concentrations where every antigen epitope is saturated by univalent antibody binding, preventing multivalent cross-linking.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "What is the primary chromogenic enzyme substrate paired with Horseradish Peroxidase (HRP) in standard microplate ELISA assays?",
        "o": [
          "3,3',5,5'-Tetramethylbenzidine (TMB)",
          "p-Nitrophenyl phosphate (pNPP)",
          "X-gal",
          "Bromocresol purple"
        ],
        "a": 0,
        "e": "TMB is oxidized by HRP and H2O2 to form a blue diimine product, which turns yellow upon addition of sulfuric acid stop solution, absorbing at 450 nm.",
        "topicId": "u4-t17",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "A competitive ELISA designed to Differentiate Infected from Vaccinated Animals (DIVA) operates on which diagnostic principle?",
        "o": [
          "Antibodies in patient serum compete with a labeled monoclonal antibody for binding to a specific diagnostic epitope",
          "Direct sandwich capture of all host immunoglobulins",
          "Precipitation of immune complexes in agar",
          "Hemolysis of sheep red blood cells"
        ],
        "a": 0,
        "e": "In competitive DIVA ELISA, antibodies in infected animals displace labeled monoclonal antibodies; higher patient antibody levels produce a LOWER optical density.",
        "topicId": "u4-t17",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "What type of placentation is present in the mare and sow, possessing all six maternal-fetal tissue layers and completely preventing any transplacental transfer of maternal IgG?",
        "o": [
          "Epitheliochorial placentation",
          "Synepitheliochorial placentation",
          "Endotheliochorial placentation",
          "Hemochorial placentation"
        ],
        "a": 0,
        "e": "Epitheliochorial placentation retains all 6 tissue layers between maternal and fetal blood; 0% of maternal IgG crosses the placenta, making colostrum intake vital.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Failure of Passive Transfer (FPT) in neonatal calves is clinically defined as a serum IgG concentration of less than what threshold at 24 to 48 hours of life?",
        "o": [
          "< 1,000 mg/dL (10 g/L)",
          "< 500 mg/dL",
          "< 2,000 mg/dL",
          "< 100 mg/dL"
        ],
        "a": 0,
        "e": "Serum IgG <1000 mg/dL (10 g/L) at 24–48 hours defines Failure of Passive Transfer, dramatically predisposing calves to septicemia and fatal enteritis.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Why must newborn calves, foals, and piglets ingest maternal colostrum within the first 12 to 24 hours after birth?",
        "o": [
          "Specialized neonatal intestinal enterocytes absorb macromolecular intact immunoglobulins via non-selective pinocytosis before 'gut closure' occurs",
          "Colostrum is digested into amino acids by gastric acid",
          "Calves develop an allergy to milk after 24 hours",
          "Maternal antibodies are only produced for 2 hours"
        ],
        "a": 0,
        "e": "Enterocytes express high levels of macromolecular endocytic receptors during the first 6–12 hours; enterocyte replacement causes progressive 'gut closure' by 24 hours.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "What chemical compound is universally used to convert active, lethal bacterial exotoxins (e.g., Clostridium tetani toxin) into safe, immunogenic toxoids?",
        "o": [
          "Formaldehyde (Formalin)",
          "Beta-propiolactone",
          "Glutaraldehyde",
          "Acetone"
        ],
        "a": 0,
        "e": "Formaldehyde cross-links lysine amino groups in protein toxins, abolishing enzymatic toxicity while preserving three-dimensional antigenic epitopes to create toxoids.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Which mineral adjuvant is the most widely approved and utilized adjuvant in domestic veterinary and human vaccines, functioning by creating an antigen depot and promoting Th2 responses?",
        "o": [
          "Aluminum hydroxide / Aluminum phosphate (Alum)",
          "Freund's Complete Adjuvant",
          "Squalene alone",
          "Lipopolysaccharide"
        ],
        "a": 0,
        "e": "Alum adjuvants adsorb protein antigens, providing slow sustained antigen release and activating the NLRP3 inflammasome to induce strong antibody titers.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Freund's Complete Adjuvant (FCA) is strictly prohibited in food-producing livestock and routine companion animal vaccines because it contains:",
        "o": [
          "Heat-killed Mycobacterium tuberculosis suspended in mineral oil, causing severe granulomatous injection-site abscesses and false-positive tuberculin reactions",
          "Live rabies virus",
          "Toxic mercury salts",
          "Arsenic trioxide"
        ],
        "a": 0,
        "e": "FCA induces severe chronic granulomas, sterile abscesses, and sensitizes animals to bovine PPD, ruining national tuberculosis eradication testing.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "The Bacillus anthracis Sterne strain vaccine used to immunize livestock against anthrax is an example of what type of vaccine?",
        "o": [
          "Live attenuated bacterial spore vaccine (lacking the pXO2 capsule plasmid)",
          "Formalin-killed whole-cell bacterin",
          "Recombinant subunit vaccine",
          "Toxoid vaccine"
        ],
        "a": 0,
        "e": "The Sterne strain (34F2) possesses plasmid pXO1 (encoding lethal and edema toxins) but lacks plasmid pXO2 (capsule synthesis), rendering it non-encapsulated and attenuated.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "A DIVA (Differentiating Infected from Vaccinated Animals) vaccine approach for Pseudorabies (Aujeszky's Disease) in swine typically utilizes a gene-deleted vaccine missing which glycoprotein?",
        "o": [
          "Glycoprotein E (gE)",
          "Glycoprotein B",
          "Glycoprotein D",
          "Thymidine kinase alone"
        ],
        "a": 0,
        "e": "gE-deleted vaccines allow swine herds to be vaccinated while companion gE-ELISAs detect antibodies against gE, which are present only in field-virus-infected pigs.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "What is the primary advantage of live attenuated viral vaccines over inactivated (killed) vaccines?",
        "o": [
          "Replicate inside host cells, presenting endogenous viral peptides on MHC Class I to stimulate robust CD8+ Cytotoxic T Lymphocyte (CTL) memory",
          "100% stable at room temperature without cold chain",
          "Zero risk of reversion to virulence in immunosuppressed animals",
          "Can be safely administered to pregnant females without risk"
        ],
        "a": 0,
        "e": "Live attenuated viruses infect host cells and synthesize viral proteins in the cytosol, driving endogenous MHC Class I presentation and powerful long-lived CTL responses.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "DNA vaccines elicit immune responses in domestic animals by delivering a bacterial plasmid that contains:",
        "o": [
          "A eukaryotic promoter (e.g., CMV promoter) driving the expression of a pathogen gene inside host muscle cells and dendritic cells",
          "A live attenuated virus in plasmid form",
          "Synthetic peptide fragments coupled to BSA",
          "Pre-formed viral capsids"
        ],
        "a": 0,
        "e": "Intramuscularly injected plasmid DNA enters host myocytes and APCs; the CMV promoter directs transcription and translation of the foreign antigen, inducing both CMI and antibodies.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Which rapid field turbidity test is commonly performed on foal or calf serum to detect Failure of Passive Transfer based on precipitation by a heavy metal sulfate solution?",
        "o": [
          "Zinc Sulfate Turbidity (ZST) test",
          "Ascoli test",
          "Schirmer tear test",
          "California mastitis test"
        ],
        "a": 0,
        "e": "Low-ionic zinc sulfate solution precipitates serum immunoglobulins; cloudiness measured by spectrophotometer or newsprint visibility quantifies passive transfer.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "In a classical quantitative serum agglutination assay, the antibody titer is defined as the:",
        "o": [
          "Reciprocal of the highest dilution of serum that produces visible, detectable agglutination",
          "Concentration of total serum protein in g/dL",
          "Optical density multiplied by 100",
          "Volume of antigen added to the first tube"
        ],
        "a": 0,
        "e": "Titer is the reciprocal of the greatest serum dilution showing positive reaction (e.g., if agglutination occurs up to 1:640 dilution, the titer is 640).",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      }
    ],
    "tf": [
      {
        "q": "The thymus gland is a secondary peripheral lymphoid organ where mature B lymphocytes encounter antigen and undergo affinity maturation.",
        "a": false,
        "e": "False. The thymus is a PRIMARY central lymphoid organ where immature thymocytes undergo T-cell receptor gene rearrangement and positive/negative selection.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "In chickens, surgical removal of the Bursa of Fabricius on the day of hatching abolishes humoral antibody responses while leaving cell-mediated immunity intact.",
        "a": true,
        "e": "True. Classic experiments by Bruce Glick demonstrated that neonatal bursectomy prevents B-cell development, abolishing antibody synthesis without impairing T cells.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "All mammalian species possess identical lymph node histology where lymphatic fluid enters at the peripheral capsule and exits at the central hilus.",
        "a": false,
        "e": "False. Domestic pigs possess inverted lymph nodes: afferent lymph enters at the hilus and efferent lymph exits from the periphery of the capsule.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "Toll-Like Receptors (TLRs) are clonally distributed on lymphocytes and undergo somatic hypermutation during an immune response.",
        "a": false,
        "e": "False. TLRs are non-clonal, germline-encoded Pattern Recognition Receptors expressed uniformly across innate immune cells that never undergo somatic hypermutation.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The alternative pathway of complement activation is dependent on the prior formation of specific antigen-antibody complexes.",
        "a": false,
        "e": "False. The alternative pathway is antibody-independent; it is activated spontaneously by tick-over hydrolysis of C3 and binds directly to foreign microbial surfaces.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "C3b coating of a pathogen enhances phagocytosis because macrophages and neutrophils express surface Complement Receptor 1 (CR1 / CD35).",
        "a": true,
        "e": "True. Phagocytic CR1 binds C3b-opsonized targets, triggering actin polymerization and receptor-mediated phagocytosis.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Natural Killer (NK) cells express antigen-specific T-cell receptors (TCR) and require antigen presentation on MHC Class II to become activated.",
        "a": false,
        "e": "False. NK cells are innate lymphoid cells lacking CD3 and TCRs; they kill targets based on the balance between activating and inhibitory surface signals.",
        "topicId": "u4-t04",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "Myeloperoxidase (MPO) is responsible for the characteristic greenish tint of purulent exudates and phlegmon.",
        "a": true,
        "e": "True. The green heme pigment of myeloperoxidase abundant in degenerate neutrophils imparts a characteristic green color to pus.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The terminal Membrane Attack Complex (MAC) consists of the assembled multimolecular complex C5b-C6-C7-C8-poly(C9).",
        "a": true,
        "e": "True. Polymerization of up to 18 C9 molecules around the C5b-8 core creates a 10 nm transmembrane hydrophilic pore that induces colloid-osmotic lysis.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "A hapten is both immunogenic and antigenic on its own without needing a carrier protein.",
        "a": false,
        "e": "False. Haptens are antigenic (can bind antibodies) but are NOT immunogenic (cannot stimulate de novo antibody production alone without a carrier).",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Superantigens require extensive intracellular lysosomal processing into small peptides before they can be presented to T lymphocytes.",
        "a": false,
        "e": "False. Superantigens bind intact as unprocessed whole proteins directly to the exterior surfaces of MHC Class II and the V-beta chain of TCRs.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Papain cleavage of an IgG antibody yields two monovalent Fab fragments and one crystallizable Fc fragment.",
        "a": true,
        "e": "True. Papain cuts above the hinge disulfide bridge, generating two separate 50 kDa Fab fragments and one 50 kDa Fc fragment.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "The secretory component of secretory IgA is synthesized directly by B lymphocytes alongside the heavy and light chains.",
        "a": false,
        "e": "False. The secretory component is synthesized by mucosal EPITHELIAL cells as part of the polymeric immunoglobulin receptor (pIgR).",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "IgM has a theoretical valence of 10, but its functional valence for large particulate antigens is often limited to 5 due to steric hindrance.",
        "a": true,
        "e": "True. The large physical size of pentameric IgM and particulate antigens causes steric crowding, preventing all ten Fab arms from binding simultaneously.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "In camelid heavy-chain-only antibodies (HCAbs), antigen binding is mediated by a single isolated variable domain termed a VHH or nanobody.",
        "a": true,
        "e": "True. Camelid VHH single-domain antibodies (~15 kDa) retain high antigen specificity and stability, forming valuable diagnostic and therapeutic nanobodies.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Unfused myeloma cells survive indefinitely in HAT selection medium because they synthesize purines via the de novo pathway.",
        "a": false,
        "e": "False. Aminopterin in HAT medium completely blocks the de novo pathway; because myelomas lack HGPRT, they cannot use the salvage pathway and die.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Monoclonal antibodies recognize a single specific epitope on an antigen, whereas polyclonal antisera contain a heterogeneous mixture of antibodies targeting multiple epitopes.",
        "a": true,
        "e": "True. Monoclonal antibodies are identical immunoglobulins derived from a single cloned hybridoma cell line, ensuring monospecificity.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Avian egg yolk is a rich and convenient source of polyclonal IgY antibodies for diagnostic reagent production.",
        "a": true,
        "e": "True. Immunized laying hens continuously transfer grams of pure polyclonal IgY into their egg yolks, providing a non-invasive, high-yield antibody source.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "MHC Class I molecules are expressed exclusively on professional antigen-presenting cells (dendritic cells, macrophages, and B cells).",
        "a": false,
        "e": "False. MHC Class I is expressed on ALL nucleated cells and platelets; MHC Class II is restricted to professional APCs.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The peptide-binding groove of MHC Class I molecules is closed at both ends, strictly limiting bound peptide length to 8 to 10 amino acids.",
        "a": true,
        "e": "True. Closed groove ends in MHC Class I anchor the amino- and carboxy-termini of peptides, restricting size to 8–10 residues.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Beta-2 microglobulin is encoded within the core Major Histocompatibility Complex genetic locus on chromosome 6 in mammals.",
        "a": false,
        "e": "False. Beta-2 microglobulin is invariant and encoded on a completely different, unlinked chromosome (chromosome 15 in humans and mice).",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "In the MHC Class II pathway, extracellular protein antigens are internalized via endocytosis or phagocytosis into acidified endosomes.",
        "a": true,
        "e": "True. Exogenous proteins are degraded into 13–25 aa peptides by endosomal and lysosomal acid proteases (cathepsins).",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Equine Leukocyte Antigen (ELA) designates the Major Histocompatibility Complex in domestic horses.",
        "a": true,
        "e": "True. ELA (Equine Leukocyte Antigen) is located on equine chromosome 20.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "T-helper 1 (Th1) cells produce high levels of Interleukin-4 and Interleukin-5 to stimulate IgE synthesis.",
        "a": false,
        "e": "False. IL-4 and IL-5 are produced by Th2 cells; Th1 cells produce IFN-gamma and IL-2 to stimulate cell-mediated immunity and IgG2a/IgG2b production.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Cytotoxic T cells (CTLs) kill virally infected target cells primarily by releasing histamine and serotonin.",
        "a": false,
        "e": "False. CTLs kill targets through directed exocytosis of perforin and granzymes, or via Fas-Fas ligand (CD95-CD95L) induction of apoptosis.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "Gamma-delta T lymphocytes in ruminants can recognize phosphorylated non-peptide antigens and stress proteins without classical MHC restriction.",
        "a": true,
        "e": "True. Gamma-delta T cells do not require conventional MHC I or II presentation, recognizing lipid, phospho-, and heat-shock antigens directly.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "FoxP3 gene deficiency in mammals results in lethal systemic multiorgan autoimmune disease due to the failure of regulatory T-cell development.",
        "a": true,
        "e": "True. Loss of FoxP3 causes IPEX syndrome (immune dysregulation, polyendocrinopathy, enteropathy), marked by runaway autoreactive T-cell proliferation.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Type I hypersensitivity reactions develop over a period of 48 to 72 hours after allergen exposure.",
        "a": false,
        "e": "False. Type I is an IMMEDIATE reaction occurring within minutes; Type IV (delayed-type) takes 24–72 hours to manifest.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "In dogs experiencing acute systemic anaphylaxis, the lungs are the primary shock organ, exhibiting severe bronchial spasms.",
        "a": false,
        "e": "False. In DOGS, the primary anaphylactic shock organ is the LIVER and portal circulation; hepatic vein sphincter constriction causes gastrointestinal venous pooling.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Neonatal Isoerythrolysis occurs when a mare that is negative for red blood cell antigen Aa nurses a foal that inherited the Aa antigen from its stallion sire.",
        "a": true,
        "e": "True. Transplacental exposure or previous parturition sensitizes the Aa-negative mare; high-titer anti-Aa colostral antibodies lyse the newborn foal's RBCs.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "A positive direct Coombs' test in a dog with anemia demonstrates the presence of host autoantibodies or complement bound directly to patient erythrocytes.",
        "a": true,
        "e": "True. The Coombs' reagent agglutinates red cells pre-coated in vivo with IgG, IgM, or C3b, confirming immune-mediated hemolytic anemia.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Type III hypersensitivity reactions involve the direct attack of cytotoxic CD8+ T cells against parenchymal epithelial cells.",
        "a": false,
        "e": "False. Type III is mediated by soluble IMMUNE COMPLEXES (antigen-antibody precipitates) depositing in vascular basement membranes, activating complement and neutrophils.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Tuberculin skin testing relies on a Type IV Delayed-Type Hypersensitivity reaction mediated by memory Th1 lymphocytes and recruited macrophages.",
        "a": true,
        "e": "True. Injected tuberculin PPD triggers Th1 cells to secrete IFN-gamma, recruiting monocytes that produce a firm palpable induration peaking at 72 hours.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Arabian foals affected with Severe Combined Immunodeficiency (SCID) demonstrate normal serum immunoglobulin levels and normal lymphoid follicles in the spleen.",
        "a": false,
        "e": "False. SCID foals completely lack functional B and T lymphocytes; lymph nodes and splenic white pulp show total lymphoid hypoplasia, and pre-colostral IgM is zero.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Calves suffering from Bovine Leukocyte Adhesion Deficiency (BLAD) present with marked persistent neutrophilia (extreme high white blood cell count in circulation) despite having no pus in tissue ulcers.",
        "a": true,
        "e": "True. Because neutrophils lack CD18, they cannot adhere to endothelium and migrate into tissues; they accumulate in blood, causing severe neutrophilia (>100,000/uL) without tissue pus.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "Canine Myasthenia Gravis is diagnosed by detecting high circulating titers of autoantibodies against desmocollin-1.",
        "a": false,
        "e": "False. Myasthenia Gravis is caused by autoantibodies against NICOTINIC ACETYLCHOLINE RECEPTORS (AChR); anti-desmocollin-1 is found in pemphigus foliaceus.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "In Single Radial Immunodiffusion (SRID), the antibody is incorporated uniformly into molten agarose gel before pouring, while the antigen is added to circular wells.",
        "a": true,
        "e": "True. In the Mancini SRID technique, monospecific antiserum is mixed with molten agarose; antigen placed in wells diffuses radially, forming a precipitin ring at equivalence.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "The Coggins test detects equine infectious anemia antibodies by hemagglutination inhibition in microtiter plates.",
        "a": false,
        "e": "False. The Coggins test is an Agar Gel Immunodiffusion (AGID) precipitation assay performed in agarose petri plates, not an HI test.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The prozone phenomenon can cause a false-negative result in agglutination tests when undiluted patient serum contains an extremely high concentration of specific antibodies.",
        "a": true,
        "e": "True. High antibody excess saturates all antigen epitopes univalently, preventing cross-linked lattice formation; serial dilution resolves the prozone.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "In domestic carnivores (dogs and cats), endotheliochorial placentation permits approximately 5% to 10% of maternal IgG to be transferred transplacentally before birth.",
        "a": true,
        "e": "True. With only 4 placental layers, 5–10% of systemic IgG transfers transplacentally in dogs and cats; the remaining 90–95% must still be acquired via colostrum.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Gut closure in newborn calves is complete within 30 minutes after birth, making colostrum intake after 1 hour useless.",
        "a": false,
        "e": "False. Macromolecular enterocyte pinocytosis operates efficiently for the first 6–12 hours, declining gradually until final physiological gut closure at 24 hours.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "A toxoid is an inactivated bacterial toxin that has lost all its toxic biological effects while preserving its specific protective immunogenicity.",
        "a": true,
        "e": "True. Formaldehyde inactivation alters catalytic domains while preserving tertiary antigenic epitopes (e.g., Tetanus toxoid).",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Live attenuated vaccines can be administered safely to severely immunocompromised or immunosuppressed animals without any risk of causing clinical disease.",
        "a": false,
        "e": "False. Live attenuated organisms can cause severe or fatal disseminated disease in immunocompromised hosts lacking functional T or B cells.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "DIVA vaccines allow national veterinary disease eradication programs to distinguish vaccinated disease-free animals from naturally infected carriers using companion diagnostic ELISAs.",
        "a": true,
        "e": "True. DIVA marker vaccines lack a specific non-essential protein (e.g., Aujeszky gE, FMD non-structural protein 3ABC), allowing serological differentiation.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "Adjuvants are only necessary in live viral vaccines and are never formulated into killed whole-cell bacterial bacterins.",
        "a": false,
        "e": "False. Inactivated (killed) vaccines and subunit vaccines REQUIRE adjuvants to enhance immunogenicity; live attenuated vaccines generally do not require adjuvants.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      }
    ],
    "fib": [
      {
        "q": "The primary central lymphoid organ in birds responsible for the maturation and diversification of B lymphocytes is the Bursa of ______.",
        "a": [
          "fabricius"
        ],
        "a_display": "Bursa of Fabricius",
        "e": "The Bursa of Fabricius was the organ in which B cells were first identified and named.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "In young calves, lambs, and piglets, the major continuous gut-associated lymphoid tissue functioning as a primary B-cell organ is the ______ Peyer's patch.",
        "a": [
          "ileal",
          "ileal peyer's patch"
        ],
        "a_display": "Ileal Peyer's patch",
        "e": "The ileal Peyer's patch produces billions of naive B cells before undergoing physiological involution after puberty.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The domestic animal species that exhibits an inverted lymph node architecture with central germinal centers and peripheral sinuses is the ______.",
        "a": [
          "pig",
          "swine",
          "porcine"
        ],
        "a_display": "Pig (Swine)",
        "e": "Pigs possess inverted lymph nodes; lymphocytes exit directly into blood capillaries rather than through efferent lymphatic vessels.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "The cell surface receptor TLR4 recognizes the ______ moiety of Gram-negative bacterial lipopolysaccharide (LPS).",
        "a": [
          "lipid a",
          "lipida"
        ],
        "a_display": "Lipid A",
        "e": "Lipid A is the toxic hydrophobic anchor of LPS that cross-links TLR4/MD-2 complexes to trigger septic shock.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The enzyme complex that generates superoxide radicals during the phagocytic respiratory burst is ______ oxidase.",
        "a": [
          "nadph",
          "nadph oxidase"
        ],
        "a_display": "NADPH oxidase",
        "e": "Deficiencies in NADPH oxidase subunits cause Chronic Granulomatous Disease (CGD), marked by recurrent bacterial infections.",
        "topicId": "u4-t02",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The active C3 convertase of the classical and lectin complement pathways is the enzyme complex designated as ______.",
        "a": [
          "c4b2a",
          "c4b2b"
        ],
        "a_display": "C4b2a",
        "e": "C4b2a cleaves thousands of C3 molecules into C3a (anaphylatoxin) and C3b (opsonin).",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "The terminal pore-forming lytic structure of the complement system assembled from C5b, C6, C7, C8, and multiple C9 monomers is the Membrane ______ Complex.",
        "a": [
          "attack",
          "membrane attack complex",
          "mac"
        ],
        "a_display": "Membrane Attack Complex (MAC)",
        "e": "MAC forms a non-gated pore that permits free water influx, resulting in osmotic lysis of target bacteria and erythrocytes.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "The small, highly potent complement peptide fragment that acts as a major anaphylatoxin and neutrophil chemoattractant is ______.",
        "a": [
          "c5a"
        ],
        "a_display": "C5a",
        "e": "C5a binds C5aR1 on granulocytes, driving chemotaxis and vascular permeability.",
        "topicId": "u4-t03",
        "subSection": "u4-s1",
        "diff": 1
      },
      {
        "q": "The specialized intestinal epithelial cells overlying lymphoid follicles that sample and transport luminal antigens via transcytosis are ______ cells.",
        "a": [
          "m",
          "m cells",
          "microfold"
        ],
        "a_display": "M (Microfold) cells",
        "e": "M cells possess an invaginated basal pocket containing dendritic cells and lymphocytes for rapid mucosal antigen uptake.",
        "topicId": "u4-t01",
        "subSection": "u4-s1",
        "diff": 2
      },
      {
        "q": "A low-molecular-weight chemical entity that cannot stimulate an immune response alone but can bind antibodies and becomes immunogenic when conjugated to a carrier protein is a ______.",
        "a": [
          "hapten"
        ],
        "a_display": "Hapten",
        "e": "Haptens (e.g., penicillin breakdown products) become complete immunogens only upon binding to host self-proteins.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "Toxins such as Staphylococcal enterotoxins that activate up to 20% of the entire T-cell repertoire by cross-linking MHC II and TCR V-beta chains are termed ______.",
        "a": [
          "superantigens",
          "superantigen"
        ],
        "a_display": "Superantigens",
        "e": "Superantigens trigger massive systemic release of IL-1, IL-2, and TNF-alpha, resulting in toxic shock syndrome.",
        "topicId": "u4-t05",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "Enzymatic cleavage of IgG with the protease papain produces two antigen-binding Fab fragments and one crystallizable ______ fragment.",
        "a": [
          "fc",
          "fc fragment"
        ],
        "a_display": "Fc fragment",
        "e": "The Fc fragment mediates effector functions, including C1q complement activation and binding to macrophage Fc receptors.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "The polypeptide chain that covalently joins individual monomers into polymeric IgM pentamers and dimeric IgA is the ______ chain.",
        "a": [
          "j",
          "j chain",
          "joining"
        ],
        "a_display": "J chain (Joining chain)",
        "e": "The 15 kDa cysteine-rich J chain cross-links secretory tailpieces, allowing polymerization of IgM and IgA.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "The polypeptide wrapper acquired by dimeric IgA during mucosal transcytosis that protects it from digestive enzymes is the ______ Component.",
        "a": [
          "secretory",
          "secretory component",
          "sc"
        ],
        "a_display": "Secretory Component",
        "e": "Secretory component confers enzymatic resistance, allowing sIgA to function in harsh proteolytic intestinal environments.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "The single variable heavy-chain antigen-binding domain derived from camelid heavy-chain-only antibodies is commonly termed a ______ (or VHH).",
        "a": [
          "nanobody",
          "vhh"
        ],
        "a_display": "Nanobody (VHH)",
        "e": "Nanobodies are small (~15 kDa), highly stable, and capable of binding recessed enzymatic catalytic clefts inaccessible to conventional antibodies.",
        "topicId": "u4-t06",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "In hybridoma technology, the chemical polymer used to induce cell membrane fusion between splenic B cells and myeloma cells is ______ glycol (PEG).",
        "a": [
          "polyethylene",
          "polyethylene glycol",
          "peg"
        ],
        "a_display": "Polyethylene glycol (PEG)",
        "e": "PEG alters membrane fluidity and surface hydration, promoting membrane merging to form hybridomas.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "In HAT selection medium, the enzyme inhibitor that blocks de novo synthesis of purines and pyrimidines is ______.",
        "a": [
          "aminopterin"
        ],
        "a_display": "Aminopterin",
        "e": "Aminopterin shuts down de novo nucleotide synthesis, forcing cells to rely on the HGPRT-dependent salvage pathway.",
        "topicId": "u4-t08",
        "subSection": "u4-s2",
        "diff": 2
      },
      {
        "q": "The functional binding strength of an entire multivalent antibody molecule with all its binding sites engaged with a multivalent antigen is termed ______.",
        "a": [
          "avidity"
        ],
        "a_display": "Avidity",
        "e": "Avidity represents the accumulated synergistic strength of multiple affinities, accounting for the high agglutinating power of IgM.",
        "topicId": "u4-t07",
        "subSection": "u4-s2",
        "diff": 1
      },
      {
        "q": "MHC Class I molecules present intracellular peptide antigens to CD8+ ______ T lymphocytes.",
        "a": [
          "cytotoxic",
          "ctl",
          "cytotoxic t"
        ],
        "a_display": "Cytotoxic T Lymphocytes (CTLs)",
        "e": "CTLs recognize viral or intracellular bacterial peptides on MHC I and destroy infected target cells via perforin/granzymes.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "MHC Class II molecules present processed exogenous peptides to CD4+ ______ T lymphocytes.",
        "a": [
          "helper",
          "t helper",
          "th"
        ],
        "a_display": "T helper cells",
        "e": "CD4+ T helper cells coordinate the adaptive immune response through cytokine secretion.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The invariant light chain associated with the heavy alpha chain of all MHC Class I molecules is beta-2 ______.",
        "a": [
          "microglobulin"
        ],
        "a_display": "Beta-2 microglobulin",
        "e": "Beta-2 microglobulin is essential for stabilizing the folded conformation of the MHC Class I heavy chain.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The official genetic designation for the Bovine Major Histocompatibility Complex is ______.",
        "a": [
          "bola"
        ],
        "a_display": "BoLA (Bovine Leukocyte Antigen)",
        "e": "BoLA genes determine disease resistance and vaccine responses in cattle.",
        "topicId": "u4-t09",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The signature cytokine produced by Th1 lymphocytes that activates macrophage microbicidal killing is Interferon-______.",
        "a": [
          "gamma",
          "ifn-gamma",
          "interferon-gamma"
        ],
        "a_display": "Interferon-gamma (IFN-gamma)",
        "e": "IFN-gamma stimulates nitric oxide synthesis and lysosomal acidification in macrophages.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The pore-forming protein released from cytotoxic T cell and NK cell granules that inserts into target cell membranes is ______.",
        "a": [
          "perforin"
        ],
        "a_display": "Perforin",
        "e": "Perforin polymerizes in the target cell lipid bilayer to create transmembrane channels that allow granzymes to enter.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 1
      },
      {
        "q": "The master lineage-defining transcription factor essential for the development and suppressive function of CD4+ CD25+ regulatory T cells is ______.",
        "a": [
          "foxp3",
          "forkhead box p3"
        ],
        "a_display": "FoxP3",
        "e": "FoxP3 represses IL-2 transcription and maintains dominant peripheral immune tolerance.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "Antigen recognition by the T-cell receptor without the second costimulatory signal (CD28 binding CD80/CD86) induces functional unresponsiveness termed clonal ______.",
        "a": [
          "anergy"
        ],
        "a_display": "Clonal anergy",
        "e": "Anergy is a peripheral tolerance mechanism that prevents autoreactive T cells from proliferating in non-inflammatory contexts.",
        "topicId": "u4-t10",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "In neonatal calves and piglets, unconventional ______-delta T cells constitute over half of all circulating peripheral blood lymphocytes.",
        "a": [
          "gamma",
          "gamma-delta",
          "gammadelta"
        ],
        "a_display": "Gamma-delta (gammadelta)",
        "e": "Ruminants and pigs are 'gammadelta-high' species, utilizing gamma-delta T cells as primary sentinels at epithelial surfaces.",
        "topicId": "u4-t11",
        "subSection": "u4-s3",
        "diff": 2
      },
      {
        "q": "The high-affinity receptor for IgE expressed abundantly on the surface of mast cells and basophils is ______.",
        "a": [
          "fcepsilonri",
          "fc epsilon ri",
          "fc-epsilon-ri"
        ],
        "a_display": "FcepsilonRI",
        "e": "FcepsilonRI binds monomeric IgE with sub-nanomolar affinity, sensitizing mast cells for allergic triggering.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "In the domestic dog, the primary anaphylactic shock organ is the ______ and its portal venous system.",
        "a": [
          "liver",
          "hepatic"
        ],
        "a_display": "Liver",
        "e": "Severe constriction of canine hepatic vein muscular sphincters causes acute portal hypertension and visceral pooling.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The fatal hemolytic disease of newborn foals caused by maternal colostral alloantibodies destroying the foal's red blood cells is Neonatal ______.",
        "a": [
          "isoerythrolysis",
          "isoerythrolysis (ni)"
        ],
        "a_display": "Neonatal Isoerythrolysis (NI)",
        "e": "Incompatible stallion erythrocyte antigens (Aa, Qa) sensitize the mare, producing lethal hemolytic alloantibodies.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The diagnostic test that detects anti-erythrocyte autoantibodies bound in vivo to patient red blood cells using anti-species globulin is the ______ test.",
        "a": [
          "coombs'",
          "coombs",
          "direct antiglobulin"
        ],
        "a_display": "Coombs' test (Direct Antiglobulin Test)",
        "e": "The Coombs' test bridges autoantibodies bound to adjacent RBCs, producing diagnostic agglutination in IMHA.",
        "topicId": "u4-t13",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The localized necrotic vasculitis induced by intradermal antigen injection into an animal with circulating precipitating IgG antibodies is the ______ reaction.",
        "a": [
          "arthus",
          "arthus reaction"
        ],
        "a_display": "Arthus reaction",
        "e": "The Arthus reaction is the classical experimental model of localized Type III immune complex-mediated necrotizing vasculitis.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "The corneal cloudiness observed in dogs following CAV-1 infection caused by Type III immune complex deposition is commonly termed '______ Eye'.",
        "a": [
          "blue",
          "blue eye"
        ],
        "a_display": "Blue Eye",
        "e": "CAV-1 antigen-antibody complexes damage the corneal endothelium, causing stromal edema and a cloudy blue appearance.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The classical diagnostic in vivo skin test evaluated at 72 hours in cattle that exemplifies Type IV Delayed-Type Hypersensitivity is the ______ test.",
        "a": [
          "tuberculin",
          "tuberculin skin"
        ],
        "a_display": "Tuberculin skin test",
        "e": "Intradermal PPD injection triggers memory Th1 cells to recruit a mononuclear indurated swelling.",
        "topicId": "u4-t14",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "The genetic immunodeficiency in Arabian foals caused by a defect in DNA-PKcs is Severe ______ Immunodeficiency (SCID).",
        "a": [
          "combined",
          "combined immunodeficiency",
          "scid"
        ],
        "a_display": "Severe Combined Immunodeficiency (SCID)",
        "e": "SCID foals cannot execute V(D)J recombination, leaving them devoid of functional B and T lymphocytes.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 1
      },
      {
        "q": "Bovine Leukocyte Adhesion Deficiency (BLAD) is caused by a point mutation in the gene encoding the cell surface adhesion molecule ______ (beta-2 integrin).",
        "a": [
          "cd18"
        ],
        "a_display": "CD18",
        "e": "CD18 deficiency prevents neutrophils from adhering to ICAM-1 on inflamed vessel walls, halting tissue extravasation.",
        "topicId": "u4-t15",
        "subSection": "u4-s4",
        "diff": 2
      },
      {
        "q": "The quantitative immunodiffusion assay where the square of the precipitin ring diameter is directly proportional to antigen concentration is the ______ technique (or SRID).",
        "a": [
          "mancini",
          "mancini technique",
          "srid"
        ],
        "a_display": "Mancini technique (SRID)",
        "e": "Devised by Roberto Mancini in 1965, SRID is the reference quantitative technique for measuring serum IgG and failure of passive transfer.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "The official Agar Gel Immunodiffusion (AGID) assay used worldwide to diagnose Equine Infectious Anemia is the ______ test.",
        "a": [
          "coggins",
          "coggins test"
        ],
        "a_display": "Coggins test",
        "e": "The Coggins test detects precipitating antibodies against the retroviral p26 capsid antigen.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The false-negative agglutination reaction caused by antibody excess that is resolved by serially diluting the serum is the ______ phenomenon.",
        "a": [
          "prozone",
          "prozone phenomenon"
        ],
        "a_display": "Prozone phenomenon",
        "e": "Excess antibody molecules bind antigen epitopes univalently, preventing cross-linked lattice formation.",
        "topicId": "u4-t16",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The chromogenic substrate commonly used with Horseradish Peroxidase in ELISA that yields a blue color shifting to yellow upon acidification is ______.",
        "a": [
          "tmb",
          "tetramethylbenzidine"
        ],
        "a_display": "TMB (3,3',5,5'-Tetramethylbenzidine)",
        "e": "TMB is non-carcinogenic and sensitive, forming yellow diimine products readable at 450 nm.",
        "topicId": "u4-t17",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The type of placenta found in mares and sows that possesses all six maternal and fetal layers, preventing any transplacental transfer of IgG, is ______ placentation.",
        "a": [
          "epitheliochorial",
          "epithelio-chorial"
        ],
        "a_display": "Epitheliochorial placentation",
        "e": "Intact maternal and fetal epithelia prevent immunoglobulin passage; newborns depend 100% on colostrum.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 2
      },
      {
        "q": "Failure of Passive Transfer (FPT) in neonatal calves is clinically defined as serum IgG concentration falling below ______ mg/dL at 24 to 48 hours of life.",
        "a": [
          "1000",
          "1,000",
          "1000 mg/dl"
        ],
        "a_display": "1,000 mg/dL (10 g/L)",
        "e": "Calves with <1000 mg/dL IgG have inadequate passive protection and suffer high morbidity from colibacillosis and septicemia.",
        "topicId": "u4-t18",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The bacterial exotoxin that has been detoxified with formaldehyde while preserving its antigenic immunogenicity is known as a ______.",
        "a": [
          "toxoid"
        ],
        "a_display": "Toxoid",
        "e": "Tetanus toxoid and botulinum toxoid elicit neutralizing antitoxin antibodies without causing disease.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "The most common mineral adjuvant incorporated into veterinary vaccines to form an antigen depot is aluminum ______ (alum).",
        "a": [
          "hydroxide",
          "phosphate",
          "oxide"
        ],
        "a_display": "Hydroxide (Alum)",
        "e": "Alum precipitates antigen into microscopic particles that recruit dendritic cells and stimulate high antibody titers.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      },
      {
        "q": "A vaccine and companion diagnostic test system that allows the Differentiation of Infected from Vaccinated Animals is abbreviated as a ______ vaccine.",
        "a": [
          "diva",
          "diva vaccine"
        ],
        "a_display": "DIVA vaccine",
        "e": "DIVA strategies are central to national eradication of Aujeszky's disease, IBR, and Foot-and-Mouth Disease.",
        "topicId": "u4-t19",
        "subSection": "u4-s5",
        "diff": 1
      }
    ]
  },

  "unit-5": {
    "mcq": [
      {
        "q": "An icosahedral viral capsid exhibits which exact geometric arrangement of faces, vertices, and axes of rotational symmetry?",
        "o": [
          "20 equilateral triangular faces, 12 vertices, and 5:3:2 rotational symmetry",
          "12 pentagonal faces and 20 vertices",
          "24 square faces and 8 vertices",
          "30 diamond faces and 6 vertices"
        ],
        "a": 0,
        "e": "An icosahedron is a regular polyhedron composed of 20 identical equilateral triangular faces meeting at 12 vertices, exhibiting 5-fold, 3-fold, and 2-fold rotational axes.",
        "topicId": "u5-t02",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Why are non-enveloped (naked) viruses (e.g., Parvoviruses, Circoviruses, Picornaviruses) significantly more resistant to lipid solvents, detergents, and environmental drying than enveloped viruses?",
        "o": [
          "They possess a dense, rigid proteinaceous capsid shell and lack a delicate host-derived lipid bilayer envelope",
          "Their nucleic acid is double-stranded DNA",
          "They encode lipid-destroying enzymes",
          "They replicate only at freezing temperatures"
        ],
        "a": 0,
        "e": "Enveloped viruses rely on their fragile host-derived lipid bilayer envelope for infectivity; ether, chloroform, or bile salts dissolve the lipids, while naked protein capsids survive.",
        "topicId": "u5-t02",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "In the Baltimore virus classification scheme, Class IV viruses possess which genome type and replication strategy?",
        "o": [
          "Positive-sense single-stranded RNA (+)ssRNA that can function directly as mRNA inside host ribosomes",
          "Negative-sense single-stranded RNA requiring virion-associated RdRp",
          "Double-stranded RNA requiring transcription",
          "Single-stranded DNA converting to dsDNA"
        ],
        "a": 0,
        "e": "Class IV (+)ssRNA genomes (e.g., Picornaviridae, Coronaviridae) are directly infectious; host ribosomes translate them immediately upon uncoating without needing a virion polymerase.",
        "topicId": "u5-t03",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Which enzyme must be packaged within the mature virion of all negative-sense single-stranded RNA (-)ssRNA viruses to initiate infection in host cells?",
        "o": [
          "RNA-dependent RNA Polymerase (RdRp / Transcriptase)",
          "DNA-dependent DNA polymerase",
          "Reverse transcriptase",
          "RNA Ligase"
        ],
        "a": 0,
        "e": "Host cells lack enzymes to transcribe (-)ssRNA; therefore, (-)ssRNA viruses (Rhabdo, Paramyxo, Orthomyxo) must carry an active RdRp inside the virion to synthesize (+)mRNA.",
        "topicId": "u5-t04",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "What cytopathic effect (CPE) is defined by the fusion of infected neighboring cell membranes, producing massive multinucleated giant cells?",
        "o": [
          "Syncytium formation (Polykayocyte formation)",
          "Cell rounding and pyknosis",
          "Plaque formation",
          "Cellular detachment alone"
        ],
        "a": 0,
        "e": "Viral fusion (F) glycoproteins expressed on the infected host plasma membrane fuse with adjacent uninfected cells, generating large multinucleated syncytia (seen in Paramyxoviruses).",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Negri bodies, the pathognomonic diagnostic inclusion bodies of Rabies virus infection, are cytologically characterized as:",
        "o": [
          "Eosinophilic, intracytoplasmic inclusions containing basophilic internal granules in hippocampal Ammon's horn neurons and cerebellar Purkinje cells",
          "Basophilic intranuclear inclusions",
          "Cowdry Type A inclusions in the nucleus",
          "Large extracellular amyloid plaques"
        ],
        "a": 0,
        "e": "Described by Adelchi Negri in 1903, Negri bodies are sharp, round to oval magenta-red intracytoplasmic viral replication complexes (0.5–20 um) with dark basophilic inner granules.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "In avian virology, large intracytoplasmic lipophilic inclusion bodies found in feather follicles and cutaneous lesions of Fowlpox are known as:",
        "o": [
          "Bollinger bodies (containing elementary Borrel bodies)",
          "Guarnieri bodies",
          "Cowdry Type B bodies",
          "Torres bodies"
        ],
        "a": 0,
        "e": "Bollinger bodies are giant intracytoplasmic inclusions in fowlpox-infected epithelial cells; treatment with ether dissolves their lipid matrix to reveal minute infectious Borrel bodies.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Cowdry Type A inclusion bodies, produced by Alphaherpesviruses (e.g., IBR, EHV-1, Pseudorabies), are located in which cellular compartment?",
        "o": [
          "Intranuclear (eosinophilic, amorphous, surrounded by a clear halo with margination of chromatin)",
          "Intracytoplasmic exclusively",
          "Intramitochondrial",
          "Peroxisomal"
        ],
        "a": 0,
        "e": "Cowdry Type A inclusions are dense eosinophilic intranuclear bodies separated from the condensed, marginated nuclear chromatin ring by a distinct clear halo.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Which route of inoculation in 10- to 12-day-old embryonated chicken eggs is specifically utilized to cultivate Poxviruses and observe discrete pock lesions?",
        "o": [
          "Chorioallantoic Membrane (CAM) route",
          "Allantoic cavity route",
          "Yolk sac route",
          "Amniotic cavity route"
        ],
        "a": 0,
        "e": "Inoculation onto the dropped CAM produces discrete focal proliferative opaque necrotic lesions ('pocks') characteristic of Poxviruses and Herpesviruses.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Newcastle Disease Virus (NDV) and Avian Influenza Virus are routinely cultivated in 9- to 11-day-old embryonated eggs via which route, yielding high-titer viral fluids?",
        "o": [
          "Allantoic cavity route",
          "Yolk sac route",
          "Intracerebral route",
          "Intravenous route"
        ],
        "a": 0,
        "e": "The allantoic cavity route yields large volumes (5–10 mL per egg) of sterile, high-titer viral allantoic fluid for diagnostic hemagglutination and vaccine harvesting.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "What primary tissue source is classically digested with trypsin to prepare Primary Chick Embryo Fibroblast (CEF) cell cultures?",
        "o": [
          "9- to 11-day-old decapitated, eviscerated chick embryos",
          "Avian liver alone",
          "Adult chicken bone marrow",
          "Egg albumen"
        ],
        "a": 0,
        "e": "CEF cells are prepared by mincing 9–11 day decapitated chick embryo carcasses and dissociating with warm 0.25% trypsin-EDTA to seed monolayer cultures.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Continuous (immortalized) cell lines such as Vero (African green monkey kidney) and BHK-21 (Baby hamster kidney) differ from primary cell cultures in that they:",
        "o": [
          "Can be subcultured indefinitely through infinite serial passages without undergoing senescence",
          "Die after exactly 5 passages",
          "Retain a strictly normal diploid karyotype",
          "Require chicken serum to grow"
        ],
        "a": 0,
        "e": "Continuous cell lines possess transformed or aneuploid karyotypes that bypass the Hayflick limit of replicative senescence, permitting endless subculturing.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "In viral titration, the Tissue Culture Infective Dose 50 (TCID50) endpoint titer is calculated mathematically from quantal microplate assay data using which formula?",
        "o": [
          "Reed and Muench formula (or Kärber method)",
          "Michaelis-Menten equation",
          "Henderson-Hasselbalch equation",
          "Scatchard plot"
        ],
        "a": 0,
        "e": "The Reed-Muench proportionate distance formula calculates the exact dilution that produces cytopathic effect in exactly 50% of inoculated culture wells.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "In a Plaque Assay for enumerating infectious virions, what is the function of the semi-solid agarose or carboxymethyl cellulose (CMC) overlay applied onto the cell monolayer?",
        "o": [
          "Prevents fluid convection currents so that progeny virions spread only to adjacent neighboring cells to form localized focal plaques",
          "Provides essential glucose nutrients",
          "Stains the living cells blue",
          "Inactivates non-infectious defective particles"
        ],
        "a": 0,
        "e": "The solid/semi-solid overlay restricts viral diffusion to adjacent cells, converting each initial infectious virion into a discrete localized clearing (plaque).",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Viruses belonging to which family replicate their DNA genomes exclusively within the cytoplasm of host cells rather than inside the host cell nucleus?",
        "o": [
          "Poxviridae",
          "Herpesviridae",
          "Adenoviridae",
          "Parvoviridae"
        ],
        "a": 0,
        "e": "Poxviruses are unique large DNA viruses that encode their own complete transcription and replication machinery, forming complex cytoplasmic 'viral factories'.",
        "topicId": "u5-t04",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "The hemagglutination (HA) phenomenon, where certain viruses clump mammalian or avian erythrocytes, is mediated by viral surface proteins binding to which host cell surface receptor?",
        "o": [
          "Sialic acid (N-acetylneuraminic acid) residues",
          "Phosphatidylserine",
          "Fibronectin",
          "Heparan sulfate"
        ],
        "a": 0,
        "e": "Viral hemagglutinins (e.g., in Influenza, Paramyxo, Parvoviruses) bind terminal sialic acid sugars on red blood cell glycoproteins, forming a cross-linked agglutinated lattice.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "What term describes the exchange of entire, intact genomic segments between two different influenza or reovirus strains coinfecting the same host cell?",
        "o": [
          "Genetic reassortment (Antigenic shift)",
          "Antigenic drift",
          "Homologous recombination",
          "Complementation"
        ],
        "a": 0,
        "e": "In segmented RNA viruses (Orthomyxo, Reo, Birna), coinfection allows random packaging of heterologous segments, causing abrupt antigenic shifts.",
        "topicId": "u5-t05",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Defective Interfering (DI) particles are spontaneous viral deletion mutants that:",
        "o": [
          "Lack essential replication genes and require a coinfecting homologous helper virus to replicate, competing with and attenuating wild-type virus growth",
          "Can replicate completely autonomously",
          "Produce toxic antibiotics that kill bacteria",
          "Lack a protein capsid entirely"
        ],
        "a": 0,
        "e": "DI particles carry truncated genomes that replicate rapidly by parasiting wild-type helper virus replication enzymes, interfering with normal viral yields.",
        "topicId": "u5-t05",
        "subSection": "u5-s1",
        "diff": 3
      },
      {
        "q": "Infectious Bursal Disease Virus (IBDV / Gumboro Disease), belonging to the family Birnaviridae, possesses which unique genomic architecture?",
        "o": [
          "Non-enveloped, bisegmented double-stranded RNA (dsRNA: segments A and B)",
          "Single-stranded negative RNA",
          "Enveloped segmented DNA",
          "Single-stranded positive DNA"
        ],
        "a": 0,
        "e": "IBDV is a non-enveloped icosahedral birnavirus containing two segments of double-stranded RNA: Segment A encodes polyprotein (VP2-VP4-VP3) and VP5; Segment B encodes RdRp (VP1).",
        "topicId": "u5-t09",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Which structural capsid protein of IBDV contains the hypervariable domain that determines serotype specificity, virulence, and neutralizing antibody epitopes?",
        "o": [
          "VP2",
          "VP1",
          "VP3",
          "VP4"
        ],
        "a": 0,
        "e": "VP2 forms the outward-facing spikes of the icosahedral capsid; mutations in its hypervariable region (aa 206–350) generate very virulent (vvIBDV) antigenic variants.",
        "topicId": "u5-t09",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "What is the primary target organ of pathology and cellular destruction in young chicks (3–6 weeks old) infected with Infectious Bursal Disease Virus?",
        "o": [
          "Bursa of Fabricius (selective lysis of dividing IgM+ B lymphocytes)",
          "Thymus alone",
          "Pancreas",
          "Gizzard"
        ],
        "a": 0,
        "e": "IBDV infects immature B lymphocytes in the bursa, causing early gelatinous bursal edema followed by follicular necrosis, severe bursal atrophy, and profound immunosuppression.",
        "topicId": "u5-t09",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Bluetongue Virus (BTV), an Orbivirus of the family Reoviridae, contains a segmented genome composed of how many double-stranded RNA segments?",
        "o": [
          "10 dsRNA segments",
          "8 segments",
          "11 segments",
          "12 segments"
        ],
        "a": 0,
        "e": "Orbiviruses (Bluetongue, African Horse Sickness) possess exactly 10 dsRNA segments encoding 7 structural (VP1–VP7) and 5 non-structural proteins.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "What biological vector is responsible for the transmission of Bluetongue Virus and African Horse Sickness Virus between domestic and wild ungulates?",
        "o": [
          "Culicoides biting midges (e.g., Culicoides oxystoma, C. imicola)",
          "Ixodes hard ticks",
          "Musca domestica houseflies",
          "Tabanus horseflies"
        ],
        "a": 0,
        "e": "Female Culicoides biting midges (family Ceratopogonidae) transmit BTV and AHSV biologically after viral replication in salivary glands.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Which clinical hallmark gives Bluetongue its name, resulting from severe endothelial damage, vascular thrombosis, and hypoxia in sheep?",
        "o": [
          "Cyanosis and edema of the tongue and oral mucous membranes",
          "Severe bright-red conjunctival injection",
          "Hardening of the ear tips",
          "Greenish discoloration of the hooves"
        ],
        "a": 0,
        "e": "BTV replicates in microvascular endothelial cells, causing vascular thrombosis, extravasation, and cyanosis that colors the swollen tongue deep blue/purple.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The acute pulmonary form ('Dunkop' or thin head) of African Horse Sickness (AHSV) in susceptible horses is characterized clinically by:",
        "o": [
          "Sudden severe paroxysmal coughing with profuse white or yellowish frothy fluid discharging from both nostrils, with mortality exceeding 95%",
          "Marked subcutaneous swelling of the supraorbital fossae and head alone",
          "Chronic watery diarrhea without fever",
          "Generalized skin warts"
        ],
        "a": 0,
        "e": "The Dunkop form causes acute alveolar and interlobular pulmonary edema; horses die within hours from drowning in frothy tracheobronchial exudate (>95% mortality).",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The cardiac form ('Dikkop' or thick head) of African Horse Sickness is distinguished by which striking physical lesion in equines?",
        "o": [
          "Marked gelatinous edema filling the supraorbital fossae, eyelids, face, and neck",
          "Severe pulmonary rales without head swelling",
          "Cyanosis of the tongue",
          "Bloody diarrhea"
        ],
        "a": 0,
        "e": "Dikkop features prominent edema of the supraorbital fossae, conjunctiva, and intermandibular space with petechiae under the tongue (mortality ~50%).",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Rotaviruses exhibit a distinct electron microscopic morphology resembling a:",
        "o": [
          "Wheel with sharp hub, radiating spokes, and a well-defined outer rim",
          "Bullet with one flat end",
          "Brick with lateral bodies",
          "Crown with petal-shaped spikes"
        ],
        "a": 0,
        "e": "Rotaviruses (from Latin rota = wheel) appear by negative-contrast EM as 70 nm wheel-like particles with an inner hub, spokes, and smooth outer rim.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "What is the primary pathological mechanism by which Rotavirus causes severe watery diarrhea in neonatal calves and piglets?",
        "o": [
          "Selective destruction of mature enterocytes on the tips of small intestinal villi, causing villus atrophy and osmotic malabsorption",
          "Production of a lethal hepatotoxin",
          "Necrosis of colonic crypts of Lieberkühn",
          "Systemic intravascular thrombosis"
        ],
        "a": 0,
        "e": "Rotavirus infects and lyses mature absorptive enterocytes on villous tips; replacement by immature crypt cells deficient in lactase causes osmotic diarrhea.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Newcastle Disease Virus (NDV / Ranikhet Disease) belongs to which viral genus and family?",
        "o": [
          "Genus Orthoavulavirus, Family Paramyxoviridae",
          "Genus Morbillivirus, Family Paramyxoviridae",
          "Genus Influenzavirus, Family Orthomyxoviridae",
          "Genus Aphthovirus, Family Picornaviridae"
        ],
        "a": 0,
        "e": "NDV (Avian Paramyxovirus-1) is classified in the genus Orthoavulavirus within the family Paramyxoviridae.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "What is the primary molecular determinant governing the high virulence of Velogenic Newcastle Disease Virus strains?",
        "o": [
          "A multi-basic amino acid cleavage site in the Fusion (F) glycoprotein cleaved by ubiquitous intracellular furin",
          "The length of the hemagglutinin gene",
          "Absence of a viral envelope",
          "Presence of double-stranded DNA"
        ],
        "a": 0,
        "e": "Velogenic NDV strains possess multi-basic motifs (^112R-R-Q-K-R-F^117) cleaved by ubiquitous host furin in all organs, allowing fatal systemic replication.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 3
      },
      {
        "q": "At post-mortem examination, what pathognomonic necropsy lesion is classically observed in poultry infected with Viscerotropic Velogenic Newcastle Disease (VVND)?",
        "o": [
          "Petechial to ecchymotic hemorrhages and button-like ulcerations on the proventricular papillae and cecal tonsils",
          "Severe enlargement of the liver alone",
          "Dry caseous scabs on the comb",
          "Thickened corrugations of the crop"
        ],
        "a": 0,
        "e": "Hemorrhages on the summits of proventricular mucosal papillae and necrotic ulceration of the cecal tonsils are classic diagnostic hallmarks of Velogenic NDV.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Peste des Petits Ruminants (PPR / 'Goat Plague') is caused by a virus belonging to which genus?",
        "o": [
          "Morbillivirus",
          "Avulavirus",
          "Respirovirus",
          "Rubulavirus"
        ],
        "a": 0,
        "e": "PPRV is a Morbillivirus closely related genetically to Rinderpest virus, Canine Distemper virus, and Human Measles virus.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "What distinctive post-mortem pathognomonic lesion in the large intestine of goats that died of PPR is described as 'zebra striping'?",
        "o": [
          "Parallel dark red or black longitudinal streaks of mucosal hemorrhage and congestion along the rugae of the posterior colon and rectum",
          "Transverse white chalky bands across the cecum",
          "Concentric circular rings in the ileum",
          "Yellow necrosis in the gall bladder"
        ],
        "a": 0,
        "e": "Zebra marking or striping represents linear mucosal congestion and hemorrhage along the longitudinal folds of the colon and rectum in acute PPR.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "What historic milestone was achieved in June 2011 when the WOAH (OIE) and FAO declared global eradication of which devastating livestock viral disease?",
        "o": [
          "Rinderpest (Cattle Plague)",
          "Foot-and-Mouth Disease",
          "Contagious Bovine Pleuropneumonia",
          "African Horse Sickness"
        ],
        "a": 0,
        "e": "Rinderpest was officially declared eradicated worldwide in 2011 (the first animal disease and second infectious disease after human smallpox to be eliminated).",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Canine Distemper Virus (CDV) infection in dogs is characterized by which clinical dermatological hallmark in animals that survive the acute respiratory phase?",
        "o": [
          "Hyperkeratosis of the digital footpads and nasal planum ('Hardpad Disease')",
          "Rhomboid urticarial diamond plaques",
          "Extensive alopecia with circular crusts",
          "Subcutaneous crepitant emphysema"
        ],
        "a": 0,
        "e": "CDV replicates in epithelial basal cells, inducing marked hyperkeratosis of the nose and footpads ('Hardpad Disease'), often preceding neurological distemper.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "In puppies surviving Canine Distemper infection during tooth development, what permanent enamel defect is characteristically observed?",
        "o": [
          "Enamel hypoplasia (irregular pitting, brown discoloration, and loss of enamel on permanent teeth)",
          "Supernumerary teeth",
          "Complete absence of tooth roots",
          "Continuous tooth elongation"
        ],
        "a": 0,
        "e": "CDV destroys ameloblasts in developing tooth buds, leading to severe enamel hypoplasia with rough, pitted, stained dentin on erupted adult teeth.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Rabies virus, the prototype neurotropic Lyssavirus in the family Rhabdoviridae, exhibits which characteristic morphology under electron microscopy?",
        "o": [
          "Bullet-shaped virions with one planar flat end and one rounded hemispherical end",
          "Icosahedral non-enveloped capsid",
          "Brick-shaped complex virion",
          "Filamentous branched particle"
        ],
        "a": 0,
        "e": "Rabies virions measure 75 x 180 nm and have a classic bullet shape, consisting of an envelope covered by G-protein spikes and an internal helical ribonucleoprotein core.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Which viral surface glycoprotein of Rabies virus mediates attachment to nicotinic acetylcholine receptors (nAChR) and neuronal cell adhesion molecules (NCAM)?",
        "o": [
          "Glycoprotein G",
          "Matrix protein M",
          "Nucleoprotein N",
          "Phosphoprotein P"
        ],
        "a": 0,
        "e": "The trimeric G glycoprotein spikes bind acetylcholine receptors at the neuromuscular junction, inducing endocytosis and retrograde axoplasmic transport.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Following peripheral bite inoculation, Rabies virus migrates centripetally from the neuromuscular junction to the central nervous system via which pathway?",
        "o": [
          "Retrograde axoplasmic flow along peripheral sensory and motor nerve axons at 8 to 20 mm per day",
          "Rapid hematogenous spread through circulating monocytes",
          "Dissemination through the lymphatic duct",
          "Cerebrospinal fluid circulation alone"
        ],
        "a": 0,
        "e": "Rabies travels via retrograde fast axonal transport (8–20 mm/day) through peripheral nerves to spinal ganglia and the brainstem.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "The gold-standard international reference diagnostic test for post-mortem confirmation of Rabies in fresh brain smears is the:",
        "o": [
          "Direct Fluorescent Antibody Test (dFAT) on brainstem and cerebellum/hippocampus",
          "Enzyme-linked immunosorbent assay (ELISA)",
          "Agar gel immunodiffusion test",
          "Serum virus neutralization test"
        ],
        "a": 0,
        "e": "Direct FAT using FITC-conjugated anti-rabies monoclonal or polyclonal antibodies provides >99% diagnostic sensitivity and specificity on fresh brain impression smears.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Influenza A viruses belong to the family Orthomyxoviridae and contain how many segments of negative-sense single-stranded RNA in their virion?",
        "o": [
          "8 segments",
          "10 segments",
          "11 segments",
          "7 segments"
        ],
        "a": 0,
        "e": "Influenza A and B viruses possess exactly 8 segments of (-)ssRNA encoding 11–12 proteins, including HA (segment 4) and NA (segment 6).",
        "topicId": "u5-t14",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "In the influenza virion, what is the enzymatic role of the surface glycoprotein Neuraminidase (NA)?",
        "o": [
          "Cleaves terminal sialic acid residues from host cell surface glycoproteins, permitting newly assembled budding virions to detach and disperse",
          "Binds sialic acid to initiate entry",
          "Transcribes viral RNA into cDNA",
          "Pores open host nuclear membranes"
        ],
        "a": 0,
        "e": "Neuraminidase is a sialidase that removes terminal sialic acid from host receptors and viral envelopes, preventing virion clumping and facilitating dissemination.",
        "topicId": "u5-t14",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Why are domestic swine classically referred to as the 'mixing vessel' for the generation of pandemic influenza virus strains?",
        "o": [
          "Swine tracheal respiratory epithelium simultaneously expresses both alpha-2,3 (avian-type) and alpha-2,6 (human-type) linked sialic acid receptors",
          "Swine do not develop antibodies against influenza",
          "Swine produce 12 segments of RNA",
          "Swine transmit influenza venereally"
        ],
        "a": 0,
        "e": "Pigs express both alpha-2,3 and alpha-2,6 sialyloligosaccharide receptors, allowing avian and human influenza strains to coinfect the same cell and reassort.",
        "topicId": "u5-t14",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Foot-and-Mouth Disease Virus (FMDV), an Aphthovirus in the family Picornaviridae, is classified into how many distinct immunological serotypes that offer zero cross-protection?",
        "o": [
          "7 serotypes (O, A, C, Asia-1, SAT-1, SAT-2, SAT-3)",
          "4 serotypes",
          "9 serotypes",
          "2 serotypes"
        ],
        "a": 0,
        "e": "FMDV has 7 immunologically distinct serotypes: O, A, C, Asia-1, and South African Territories SAT-1, SAT-2, and SAT-3; vaccination with one serotype confers no protection against others.",
        "topicId": "u5-t15",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "In young calves, piglets, and lambs infected with Foot-and-Mouth Disease Virus, sudden death without blister formation is caused by acute acute myocardial necrosis producing which pathognomonic lesion?",
        "o": [
          "'Tiger Heart' (myocarditis with grayish-yellow striped myocardial degeneration)",
          "Pulpy kidney",
          "Cirrhosis of the liver",
          "Enlarged splenic infarcts"
        ],
        "a": 0,
        "e": "Acute FMDV replication in neonatal cardiac myocytes causes focal myocardial necrosis and striped degeneration resembling tiger stripes ('tiger heart').",
        "topicId": "u5-t15",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever Virus (CSFV / Hog Cholera), a Pestivirus of the family Flaviviridae, produces which classic necropsy lesion on the cortical surface of porcine kidneys?",
        "o": [
          "Petechial hemorrhages giving a 'turkey-egg' appearance",
          "Diffuse amyloidosis",
          "Hydronephrosis",
          "Large solitary cysts"
        ],
        "a": 0,
        "e": "CSFV infects capillary endothelial cells, causing vascular fragility and petechiae across the kidney cortex, resembling a mottled turkey egg.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "In the large intestine of pigs that died of subacute or chronic Classical Swine Fever, what pathognomonic necropsy lesions are observed around the ileocecal valve?",
        "o": [
          "'Button ulcers' (raised, concentric, circular necrotic ulcers)",
          "Continuous diphtheritic pseudomembrane",
          "Diffuse polypoid adenomas",
          "Multiple linear longitudinal tears"
        ],
        "a": 0,
        "e": "Button ulcers result from ischemic necrosis and secondary bacterial infection of intestinal lymphoid follicles around the ileocecal valve in chronic CSFV.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "In Bovine Viral Diarrhea Virus (BVDV) pathogenesis, when a pregnant cow is infected with a non-cytopathic (NCP) strain between 40 and 120 days of gestation, the resulting calf:",
        "o": [
          "Is born Persistently Infected (PI), immunotolerant to BVDV, and continually sheds large quantities of virus",
          "Is born completely immune to all BVDV strains",
          "Aborts immediately within 12 hours",
          "Develops immediate fatal mucosal disease at birth"
        ],
        "a": 0,
        "e": "Infection before fetal immunocompetence (40–120 days) causes the fetal immune system to recognize the NCP virus as 'self', generating a seronegative, persistently infected (PI) shedder.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "In a persistently infected (PI) BVDV calf, fatal Mucosal Disease is triggered when the animal is superinfected with which viral entity?",
        "o": [
          "A homologous cytopathic (CP) BVDV strain (often arising via de novo mutation of the endogenous NCP strain)",
          "Foot-and-Mouth Disease virus",
          "Bovine rotavirus",
          "Bovine coronavirus"
        ],
        "a": 0,
        "e": "Because the PI calf is immunotolerant to the non-cytopathic virus, an antigenically similar cytopathic (CP) strain replicates unchecked, destroying mucosal crypts and causing fatal mucosal disease.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 3
      },
      {
        "q": "What structural feature gives Coronaviruses their characteristic 'crown-like' appearance under negative-contrast electron microscopy?",
        "o": [
          "Large, club-shaped, petal-like Spike (S) glycoprotein projections",
          "Icosahedral vertices",
          "A dense peptidoglycan shell",
          "Helical fibers without an envelope"
        ],
        "a": 0,
        "e": "The trimeric Spike (S) glycoproteins form a prominent halo of bulbous projections resembling the solar corona around the viral envelope.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The wet (effusive) form of Feline Infectious Peritonitis (FIP), caused by mutated feline coronavirus in macrophages, is clinically characterized by:",
        "o": [
          "Abdominal distension with clear, highly viscous, straw-yellow, protein-rich peritoneal effusion that froths upon shaking",
          "Severe watery diarrhea without effusion",
          "Generalized skin crusting",
          "Dry gangrene of the tail"
        ],
        "a": 0,
        "e": "Wet FIP features immune complex-mediated pyogranulomatous vasculitis, leaking high-protein, straw-colored peritoneal fluid containing fibrinous clots.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "In laying hens, Avian Infectious Bronchitis Virus (IBV), a Gammacoronavirus, induces which reproductive abnormality alongside respiratory rales?",
        "o": [
          "Marked decline in egg production with thin-shelled, rough, misshapen, and watery-albumen eggs",
          "Bloody cloacal discharge",
          "Ovarian cancer",
          "Production of hard, giant eggs"
        ],
        "a": 0,
        "e": "IBV replicates in the oviduct magnum and uterus, causing permanent hypoplasia, misshapen eggs with corrugated shells, and watery albumen.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Equine Viral Arteritis (EAV), an Arterivirus, establishes persistent long-term carrier states in which equine sex category, where the virus is maintained and shed in semen?",
        "o": [
          "Intact adult stallions (localized in the accessory sex glands / ampullae)",
          "Mares in the uterus",
          "Castrated geldings",
          "Weaned foals"
        ],
        "a": 0,
        "e": "Testosterone maintains EAV persistence in the ampulla and bulbourethral glands of asymptomatic carrier stallions, who transmit it to mares during breeding.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Which alphavirus transmitted by mosquitoes produces the highest equine and human case-fatality rate (70–90%) among the equine encephalitides?",
        "o": [
          "Eastern Equine Encephalomyelitis Virus (EEEV)",
          "Western Equine Encephalomyelitis Virus (WEEV)",
          "Venezuelan Equine Encephalomyelitis Virus (VEEV)",
          "Japanese Encephalitis Virus"
        ],
        "a": 0,
        "e": "EEEV causes severe necrotizing panencephalitis with mortality exceeding 90% in horses, characterized by fever, blindness, head-pressing, and death.",
        "topicId": "u5-t19",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Lumpy Skin Disease Virus (LSDV), Sheep Pox Virus (SPPV), and Goat Pox Virus (GTPV) are classified within which genus of the family Poxviridae?",
        "o": [
          "Capripoxvirus",
          "Orthopoxvirus",
          "Parapoxvirus",
          "Avipoxvirus"
        ],
        "a": 0,
        "e": "Capripoxviruses are major transboundary animal pathogens causing severe cutaneous pock diseases in domestic ruminants.",
        "topicId": "u5-t21",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Lumpy Skin Disease in cattle is clinically characterized by the sudden eruption of:",
        "o": [
          "Multiple, well-circumscribed, firm, painful cutaneous nodules (2 to 5 cm) involving the full thickness of the skin and necrotic cores ('sitfasts')",
          "Superficial pustules restricted to the lips alone",
          "Linear ulcers along the limbs",
          "Generalized hair loss without swelling"
        ],
        "a": 0,
        "e": "LSDV produces full-thickness dermis nodules ('lumps') with swollen lymph nodes; the central core sloughs out, leaving deep ulcerated craters ('sitfasts').",
        "topicId": "u5-t21",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Contagious Ecthyma (Orf / Sore Mouth), a zoonotic parapoxvirus infection in sheep and goats, produces proliferative scabby lesions primarily upon which anatomical location?",
        "o": [
          "Muzzle, lips, gums, and oral commissures",
          "Dorsal rump alone",
          "Horn base",
          "Tail tip alone"
        ],
        "a": 0,
        "e": "Orf produces papules, vesicles, and proliferative thick brown crusts along the lips, dental pad, and gums in nursing lambs, transmissible to human shearers.",
        "topicId": "u5-t30",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Under negative-contrast electron microscopy, Parapoxviruses (such as Orf virus) are morphologically distinguished from Orthopoxviruses by having an:",
        "o": [
          "Ovoid shape with a distinctive regular criss-cross / spiral thread-like surface pattern resembling a ball of yarn",
          "Irregular rectangular shape without pattern",
          "Icosahedral symmetry",
          "Spherical shape with peplomers"
        ],
        "a": 0,
        "e": "Parapoxviruses are ovoid (160 x 260 nm) and feature a unique spiral filament wrapped around the capsid in a continuous criss-cross yarn-like pattern.",
        "topicId": "u5-t30",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Infectious Bovine Rhinotracheitis (IBR), caused by Bovine Herpesvirus-1 (BHV-1), establishes lifelong latent infection within which sensory neural structure?",
        "o": [
          "Trigeminal ganglia",
          "Ventral horn motor neurons",
          "Celiac plexus",
          "Optic nerve"
        ],
        "a": 0,
        "e": "Following upper respiratory replication, BHV-1 undergoes retrograde axonal transport to establish quiescent latency inside trigeminal neuronal nuclei.",
        "topicId": "u5-t23",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Which clinical manifestation of Marek's Disease Virus (MDV / Gallid alphaherpesvirus 2) in poultry is caused by asymmetric lymphoid infiltration of the sciatic nerve?",
        "o": [
          "Classic 'range paralysis' where one leg is stretched forward and the other backward",
          "Complete flaccid paralysis of the neck alone",
          "Spastic lockjaw",
          "Bilateral blindness without leg signs"
        ],
        "a": 0,
        "e": "T-lymphoblast infiltration into sciatic and brachial nerve plexuses causes asymmetric enlargement, loss of striations, and classic range paralysis.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The ocular lymphomatosis form of Marek's Disease, characterized by irregular pupil borders and loss of normal iris pigmentation, is commonly known as:",
        "o": [
          "'Gray eye'",
          "Pink eye",
          "Blue eye",
          "Cataract"
        ],
        "a": 0,
        "e": "Lymphoma cells infiltrate the avian iris, turning the normal orange-red iris pale gray or white ('gray eye') and causing an eccentric pupil.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "What live herpesvirus vaccine of turkeys (HVT / Meleagrid alphaherpesvirus 1) is routinely administered in ovo at 18 days of egg incubation to protect broilers against Marek's Disease?",
        "o": [
          "HVT (Herpesvirus of Turkeys - FC126 strain)",
          "LaSota strain",
          "Sterne strain",
          "Sungri 96 strain"
        ],
        "a": 0,
        "e": "HVT is non-pathogenic in chickens and antigenically related to MDV serotype 1; automated in ovo injection into 18-day eggs protects chicks.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Infectious Laryngotracheitis (ILT) in poultry is clinically diagnosed at post-mortem examination by which pathognomonic lesion?",
        "o": [
          "Hemorrhagic tracheitis with expectoration of bloody mucus and obstructive caseous/fibrinous tracheal plugs",
          "Enlarged sciatic nerves",
          "Corrugated crop mucosa",
          "White pocks on the heart alone"
        ],
        "a": 0,
        "e": "ILTV causes necrosis of the tracheal mucosa; gasping birds violently shake their heads and cough bloody tracheal casts, producing high mortality.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "In non-porcine secondary hosts (cattle, sheep, dogs, cats), Pseudorabies (Aujeszky's Disease) is clinically characterized by which hallmark neurological presentation?",
        "o": [
          "'Mad Itch' (frenzied, unbearable localized pruritus leading to severe self-mutilation and death within 48 hours)",
          "Flaccid paralysis without scratching",
          "Excessive salivation without scratching",
          "Chronic weight loss over months"
        ],
        "a": 0,
        "e": "Pseudorabies in dead-end hosts triggers intense localized sensory ganglioneuritis; animals scratch and bite the affected dermatome until raw ('Mad Itch').",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Malignant Catarrhal Fever (MCF) in cattle and deer is caused by Macaviruses carried subclinically by which domestic and wild reservoir species?",
        "o": [
          "Sheep (Ovine Herpesvirus-2) and Wildebeest (Alcelaphine Herpesvirus-1)",
          "Horses and donkeys",
          "Domestic chickens",
          "Feral dogs"
        ],
        "a": 0,
        "e": "OvHV-2 is carried subclinically by sheep (lambing time transmission), and AlHV-1 is carried by wildebeest, transmitting cross-species to cattle and deer.",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "What pathognomonic ocular lesion is observed in the 'head-and-eye' form of Malignant Catarrhal Fever in cattle?",
        "o": [
          "Bilateral centripetal corneal opacity (edema advancing from the limbus inward to the center)",
          "Retinal detachment alone",
          "Complete lens luxation",
          "Unilateral conjunctivitis with no corneal haze"
        ],
        "a": 0,
        "e": "Vasculitis of the ciliary arteries produces progressive bilateral centripetal corneal edema starting at the corneoscleral limbus and advancing centrally.",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Which adenoviral disease in laying hens causes sudden, severe loss of eggshell pigment followed by the production of soft-shelled and completely shell-less eggs?",
        "o": [
          "Egg Drop Syndrome-76 (EDS-76 / Atadenovirus)",
          "Infectious Bronchitis",
          "Newcastle Disease",
          "Avian Encephalomyelitis"
        ],
        "a": 0,
        "e": "EDS-76 virus infects the pouch shell gland (uterus), causing complete cessation of calcium shell deposition, producing shell-less, rubbery eggs.",
        "topicId": "u5-t26",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Why does Canine Parvovirus-2 (CPV-2) exhibit a strict tissue tropism for intestinal crypts of Lieberkühn and bone marrow hematopoietic precursors?",
        "o": [
          "It is a small autonomous single-stranded DNA virus that lacks a DNA polymerase and requires host cellular factors present only during S-phase of the cell cycle",
          "It binds only to keratin receptors",
          "It replicates solely in anaerobic environments",
          "It infects only mature enterocytes"
        ],
        "a": 0,
        "e": "Parvoviruses depend on host DNA polymerases active during the mitotic S-phase, selectively destroying rapidly multiplying crypt cells and bone marrow blasts.",
        "topicId": "u5-t27",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "In young puppies under 8 weeks of age infected in utero or during early neonacy, Canine Parvovirus-2 can cause sudden death due to:",
        "o": [
          "Acute non-suppurative myocarditis with basophilic intranuclear inclusion bodies",
          "Hepatic cirrhosis",
          "Renal tubular necrosis",
          "Pulmonary hypertension"
        ],
        "a": 0,
        "e": "Rapidly dividing neonatal cardiomyocytes permit CPV-2 replication, causing acute non-suppurative myocarditis, pulmonary edema, and sudden heart failure.",
        "topicId": "u5-t27",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "What cerebellar developmental defect is characteristically produced in newborn kittens when their queen is infected during late pregnancy with Feline Panleukopenia Virus (FPV)?",
        "o": [
          "Cerebellar hypoplasia (due to lytic destruction of dividing external germinal layer neurons)",
          "Hydrocephalus",
          "Anencephaly",
          "Spina bifida"
        ],
        "a": 0,
        "e": "FPV destroys dividing neuroblasts in the subplasial external germinal layer of the neonatal cerebellum, resulting in permanent cerebellar hypoplasia and ataxia.",
        "topicId": "u5-t27",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Postweaning Multisystemic Wasting Syndrome (PMWS) in nursery and grower pigs (6–16 weeks old) is caused by which virus?",
        "o": [
          "Porcine Circovirus Type 2 (PCV-2)",
          "Porcine Parvovirus",
          "Swine Pox Virus",
          "Pseudorabies Virus"
        ],
        "a": 0,
        "e": "PCV-2 targets monocytes and dendritic cells, causing lymphoid depletion, progressive emaciation (PMWS), and massive mesenteric lymphadenopathy.",
        "topicId": "u5-t28",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "In cattle, Bovine Papillomavirus Type 2 (BPV-2) and Type 4 (BPV-4) act as co-carcinogens with which toxic pasture plant to induce bladder cancer and Enzootic Hematuria?",
        "o": [
          "Bracken fern (Pteridium aquilinum / ptaquiloside)",
          "Lupinus albus",
          "Senecio jacobaea",
          "Cestrum diurnum"
        ],
        "a": 0,
        "e": "Ptaquiloside in bracken fern causes immunosuppression and DNA adducts, synergizing with BPV to induce chronic enzootic hematuria and bladder carcinomas.",
        "topicId": "u5-t29",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "African Swine Fever Virus (ASFV), the sole member of the family Asfarviridae, is unique among all known arboviruses because it is the only:",
        "o": [
          "Arbovirus possessing a double-stranded DNA genome",
          "Arbovirus that infects birds",
          "Virus lacking a capsid",
          "Virus that cannot replicate in cell culture"
        ],
        "a": 0,
        "e": "ASFV is the only known DNA arbovirus; it contains a large (~180 kb) enveloped icosahedral dsDNA genome and is transmitted by soft ticks of the genus Ornithodoros.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "What biological vector transmits African Swine Fever Virus between wild African suids (warthogs) and domestic pigs?",
        "o": [
          "Soft ticks of the genus Ornithodoros (e.g., Ornithodoros moubata)",
          "Hard ticks of the genus Rhipicephalus",
          "Stomoxys calcitrans biting flies alone",
          "Culiseta mosquitoes"
        ],
        "a": 0,
        "e": "Ornithodoros moubata (eyeless tampan) soft ticks live in warthog burrows and pigsties, transmitting ASFV transovarially and transstadially.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "What pathognomonic phenomenon is observed when peripheral blood mononuclear cells or alveolar macrophages infected with African Swine Fever Virus are cultured with red blood cells?",
        "o": [
          "Hemadsorption (HAD) phenomenon (erythrocytes adhere to the surface of infected macrophages in a rosette / mulberry pattern)",
          "Direct erythrocyte lysis",
          "Syncytial giant cell formation",
          "Complete inhibition of bacterial growth"
        ],
        "a": 0,
        "e": "ASFV CD2v protein expressed on infected macrophage surfaces binds swine red blood cells, causing them to cluster in characteristic rosettes (hemadsorption).",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "At necropsy of a domestic pig that died acutely of African Swine Fever, which striking macroscopic lesion is consistently observed in the spleen?",
        "o": [
          "Massive splenomegaly (spleen enlarged up to 3 to 6 times, dark purplish-black, extremely friable, and congested)",
          "Severely shrunken atrophic spleen",
          "Multiple small white nodules without enlargement",
          "Absence of spleen"
        ],
        "a": 0,
        "e": "ASFV causes extensive vascular destruction and pooling of blood in splenic red pulp, producing massive, dark friable splenomegaly.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Why has the development of an effective commercial vaccine against African Swine Fever remained elusive for decades?",
        "o": [
          "ASFV does not elicit classic neutralizing antibodies and encodes multiple complex immunosuppressive evasion genes that inhibit apoptosis and interferon pathways",
          "The virus cannot be cultured in laboratories",
          "The virus lacks a protein capsid",
          "Pigs produce no antibodies against any DNA viruses"
        ],
        "a": 0,
        "e": "ASFV encodes over 160 proteins that subvert host immune pathways (e.g., A238L, I329L); infected swine do not produce neutralizing antibodies that clear infection.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Bovine Leukemia Virus (BLV), a Deltaretrovirus, is the etiological agent of Enzootic Bovine Leukosis (EBL), which characteristically causes multicentric lymphosarcomas in which predilection sites?",
        "o": [
          "Abomasum, right atrium of the heart, uterus, and peripheral lymph nodes (HAUL sites)",
          "Brain and cerebellum exclusively",
          "Lungs and trachea only",
          "Skeletal muscle alone"
        ],
        "a": 0,
        "e": "BLV lymphomas classically infiltrate the Heart (right atrium), Abomasum, Uterus, and Lymph nodes (the 'HAUL' predilection sites) in adult cattle.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "The genomic organization of simple Retroviruses classically consists of which three major structural genes arranged from 5' to 3' between the Long Terminal Repeats (LTRs)?",
        "o": [
          "gag - pol - env",
          "pol - gag - env",
          "env - pol - gag",
          "tat - rev - nef"
        ],
        "a": 0,
        "e": "All retroviruses share the canonical order: gag (group-specific capsid/matrix antigens), pol (reverse transcriptase/integrase), and env (envelope glycoproteins).",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Equine Infectious Anemia Virus (EIAV), a Lentivirus in the family Retroviridae, establishes lifelong persistent infection targeting which host cells?",
        "o": [
          "Monocytes and tissue macrophages",
          "B lymphocytes alone",
          "Erythrocytes directly",
          "Epidermal keratinocytes"
        ],
        "a": 0,
        "e": "EIAV selectively infects and persists inside circulating monocytes and mature tissue macrophages, causing recurring cyclical bouts of fever, anemia, and thrombocytopenia.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Which vector acts as the primary mechanical transmitter of Equine Infectious Anemia Virus between horses in field conditions?",
        "o": [
          "Large biting flies of the family Tabanidae (Horseflies and Deerflies)",
          "Ixodes ticks",
          "Culicoides midges",
          "Houseflies"
        ],
        "a": 0,
        "e": "Interrupted feeding by tabanid horseflies transfers virus-contaminated blood on mouthparts mechanically from infected carrier horses to susceptible equines.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Caprine Arthritis-Encephalitis Virus (CAEV) and Maedi-Visna Virus (MVV) are small ruminant lentiviruses that produce chronic, progressive lesions in which target organs?",
        "o": [
          "Lungs ('Maedi' chronic interstitial pneumonia), Brain ('Visna' encephalitis), Joints (carpal arthritis / 'big knee'), and Mammary gland ('hard bag' indurative mastitis)",
          "Liver and gallbladder exclusively",
          "Intestinal crypts of Lieberkühn alone",
          "Cornea and iris"
        ],
        "a": 0,
        "e": "Small ruminant lentiviruses cause chronic progressive lymphocytic infiltration in lungs (Maedi), CNS (Visna), synovial membranes (arthritis), and udder (indurative mastitis).",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "According to the Prion Hypothesis formulated by Stanley Prusiner (1982), the infectious agent of Transmissible Spongiform Encephalopathies (TSEs) consists entirely of:",
        "o": [
          "A misfolded, proteinase K-resistant isoform (PrPSc) of a normal host-encoded cellular glycoprotein (PrPC), lacking any nucleic acid genome",
          "A small circular single-stranded RNA viroid",
          "A defective interfering DNA virus",
          "A retrotransposon coated in lipid"
        ],
        "a": 0,
        "e": "Prions are proteinaceous infectious particles devoid of nucleic acids; PrPSc acts as a conformational template that converts alpha-helical PrPC into beta-sheet-rich PrPSc.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "At the molecular level, what structural transition distinguishes the pathogenic scrapie prion protein (PrPSc) from the normal cellular prion protein (PrPC)?",
        "o": [
          "Marked increase in beta-sheet secondary structure content and acquired resistance to proteolytic digestion by Proteinase K",
          "Conversion from beta-sheet to alpha-helix",
          "Complete loss of all amino acids",
          "Acquisition of an RNA primer"
        ],
        "a": 0,
        "e": "Normal PrPC is ~43% alpha-helical and monomeric/soluble; pathogenic PrPSc is ~43% beta-sheet, highly insoluble, aggregate-prone, and resistant to Proteinase K digestion.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "What is the characteristic clinical hallmark that gives Scrapie in sheep its historical name?",
        "o": [
          "Compulsive, intense pruritus causing the animal to repeatedly scrape and rub its fleece against fences, posts, and rocks, leading to extensive wool loss",
          "Sudden acute coughing",
          "Severe watery green diarrhea",
          "Rapid blindness with corneal opacity"
        ],
        "a": 0,
        "e": "Spongiform neurodegeneration in the spinal cord and brainstem produces intractable itching (pruritus); sheep rub their wool raw, chew their legs, and develop ataxia.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "What specific anatomical region of the brainstem is harvested at post-mortem examination for statutory diagnostic confirmation of Scrapie and Bovine Spongiform Encephalopathy (BSE)?",
        "o": [
          "The Obex region of the medulla oblongata (specifically the solitary tract nucleus and spinal trigeminal nucleus)",
          "The cerebral cortex",
          "The olfactory bulbs",
          "The pituitary gland"
        ],
        "a": 0,
        "e": "The obex of the medulla oblongata displays the earliest and most severe spongiform vacuolation and PrPSc accumulation, serving as the official statutory testing site.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Bovine Spongiform Encephalopathy (BSE / 'Mad Cow Disease') was amplified and transmitted through the British cattle population during the 1980s primarily via:",
        "o": [
          "Feeding cattle Meat and Bone Meal (MBM) derived from ruminant carcasses processed with reduced solvent/heat rendering methods",
          "Direct animal-to-animal aerosol transmission in barns",
          "Bites from infected soft ticks",
          "Contaminated drinking water wells"
        ],
        "a": 0,
        "e": "Changes in industrial rendering (lowering temperatures and omitting hydrocarbons) allowed heat-stable prions from scrapie sheep or spontaneous BSE cows to contaminate cattle feed (MBM).",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "What fatal human neurodegenerative disease was linked epidemiologically and molecularly to the consumption of beef contaminated with Bovine Spongiform Encephalopathy prions?",
        "o": [
          "Variant Creutzfeldt-Jakob Disease (vCJD)",
          "Classic sporadic CJD",
          "Kuru",
          "Gerstmann-Sträussler-Scheinker syndrome"
        ],
        "a": 0,
        "e": "vCJD appeared in young patients in the UK in 1996, sharing identical neuropathology (florid amyloid plaques) and Western blot glycoform profiles with BSE prions.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Chronic Wasting Disease (CWD), an infectious prion disease affecting cervids (deer, elk, moose), differs uniquely from BSE in that CWD prions:",
        "o": [
          "Are shed in high concentrations in saliva, urine, and feces, permitting direct animal-to-animal and environmental transmission through contaminated pastures",
          "Are transmitted exclusively through tick bites",
          "Are destroyed by boiling water in 5 minutes",
          "Affect only aged animals over 15 years"
        ],
        "a": 0,
        "e": "CWD prions shed in bodily secretions and bind tightly to soil clay particles, creating infectious environmental reservoirs that transmit horizontally among free-ranging deer.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Which zoonotic bat-borne Henipavirus caused outbreaks of fatal acute respiratory distress and severe encephalitis in pig-farm workers and abattoir workers in Malaysia (1998–1999)?",
        "o": [
          "Nipah Virus",
          "Hendra Virus",
          "Menangle Virus",
          "Marburg Virus"
        ],
        "a": 0,
        "e": "Nipah virus spilled over from Pteropus fruit bats to pigs (causing 'barking pig syndrome' respiratory illness) and transmitted to pig handlers, causing severe human encephalitis.",
        "topicId": "u5-t32",
        "subSection": "u5-s5",
        "diff": 2
      }
    ],
    "tf": [
      {
        "q": "Viruses are living microorganisms capable of independent autonomous metabolic energy production and protein synthesis outside host cells.",
        "a": false,
        "e": "False. Viruses are obligate intracellular molecular parasites lacking ribosomes, metabolic enzymes, and ATP-generating machinery.",
        "topicId": "u5-t01",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Negative-sense single-stranded RNA extracted in pure form from a rhabdovirus is immediately infectious when microinjected into host cytoplasm.",
        "a": false,
        "e": "False. Pure (-)ssRNA cannot be translated by host ribosomes and lacks the essential virion RdRp enzyme; positive-sense (+)ssRNA is infectious, but (-)ssRNA is not.",
        "topicId": "u5-t04",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Syncytia formation occurs when viral fusion proteins expressed on the host plasma membrane promote fusion between adjacent uninfected cells.",
        "a": true,
        "e": "True. Paramyxoviruses (NDV, PPR, CDV) express F proteins that fuse plasma membranes at physiological pH, forming multinucleated giant syncytia.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Negri bodies are diagnostic pathognomonic inclusion bodies found exclusively within the cell nuclei of infected sensory neurons.",
        "a": false,
        "e": "False. Negri bodies are strictly INTRACYTOPLASMIC inclusions formed by viral replication complexes in neurons.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "In embryonated eggs, Poxviruses and Infectious Laryngotracheitis virus produce discrete focal pock lesions on the chorioallantoic membrane (CAM).",
        "a": true,
        "e": "True. Inoculation onto the dropped CAM induces focal epithelial hyperplasia and necrosis visible macroscopically as circular white pocks.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Primary cell cultures derived directly from fresh animal tissues can be passaged indefinitely for hundreds of years in the laboratory.",
        "a": false,
        "e": "False. Primary cell cultures possess a finite lifespan (the Hayflick limit, surviving only 5–10 passages) before undergoing irreversible senescence.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Antigenic drift in Influenza viruses is caused by gradual accumulation of point mutations within the hemagglutinin gene due to high error rates of RNA polymerase.",
        "a": true,
        "e": "True. Viral RdRp lacks proofreading, introducing ~1 error per 10,000 bases; selective immune pressure selects escape mutants (antigenic drift).",
        "topicId": "u5-t05",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Enveloped animal viruses are released from host cells exclusively through explosive cell lysis and never via membrane budding.",
        "a": false,
        "e": "False. Enveloped viruses acquire their membrane envelope by BUDDING through host plasma membranes or internal ER/Golgi membranes without immediate lysis.",
        "topicId": "u5-t04",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The Reed-Muench formula determines the 50% endpoint titer (TCID50 or LD50) by calculating proportionate distances between dilutions above and below 50% response.",
        "a": true,
        "e": "True. Reed and Muench developed an interpolation method using cumulative infected and uninfected scores to establish the 50% infective dilution.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "Infectious Bursal Disease Virus produces lifelong persistent infection in adult laying hens without damaging the Bursa of Fabricius.",
        "a": false,
        "e": "False. IBDV targets young chicks (3–6 weeks) whose bursa is actively developing; in older adult chickens whose bursa has involuted, clinical disease is rare.",
        "topicId": "u5-t09",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Bluetongue Virus is transmitted directly from sheep to sheep through nose-to-nose contact and aerosolized coughing droplets.",
        "a": false,
        "e": "False. BTV is an arbovirus transmitted strictly by hematophagous Culicoides midges; it is non-contagious between sheep through direct contact.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The VP2 outer capsid protein of Bluetongue Virus determines the specific viral serotype and induces neutralizing antibody protection.",
        "a": true,
        "e": "True. VP2 forms the outermost surface spikes of BTV, determining the 29 known serotypes and eliciting protective neutralizing antibodies.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Rotavirus enters mature small intestinal villous enterocytes, producing an enterotoxin (NSP4) that induces secretory and malabsorptive diarrhea.",
        "a": true,
        "e": "True. Rotavirus non-structural protein 4 (NSP4) is a viral enterotoxin that mobilizes intracellular calcium, stimulating chloride secretion.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Lentogenic strains of Newcastle Disease Virus (such as LaSota and Hitchner B1) cause fatal encephalitis and high mortality in commercial broilers.",
        "a": false,
        "e": "False. Lentogenic strains cause mild, asymptomatic respiratory infections and are widely used worldwide as safe live vaccines.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The intracerebral pathogenicity index (ICPI) of velogenic Newcastle disease virus approaches the maximum theoretical score of 2.0 in day-old chicks.",
        "a": true,
        "e": "True. ICPI measures clinical illness over 8 days in day-old chicks; velogenic strains score 1.5–2.0, whereas lentogenic vaccine strains score 0.0–0.5.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 3
      },
      {
        "q": "Peste des Petits Ruminants (PPR) affects domestic sheep and goats, causing severe necrotizing stomatitis, erosive enteritis, and catarrhal pneumonia.",
        "a": true,
        "e": "True. PPR produces high morbidity and mortality in small ruminants, characterized by necrotic oral erosions, profuse diarrhea, and bronchopneumonia.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Canine Distemper Virus causes both intracytoplasmic and intranuclear eosinophilic inclusion bodies in epithelial and glial cells.",
        "a": true,
        "e": "True. CDV is unique in forming BOTH intracytoplasmic and intranuclear eosinophilic inclusions in respiratory, urinary, and brain tissues.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "African Horse Sickness is endemic throughout Northern Europe and North America in feral horses.",
        "a": false,
        "e": "False. AHSV is endemic to sub-Saharan Africa, with occasional outbreaks in North Africa and southern Europe, maintained by Culicoides and zebras.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Rabies virus can be isolated from the saliva of clinical animals because it undergoes centrifugal axonal transport from the CNS to the salivary glands.",
        "a": true,
        "e": "True. After replicating in the brain, rabies virus travels centrifugally along autonomic nerves to the salivary glands, shedding in high titers in saliva.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Foot-and-Mouth Disease infects horses, producing severe vesicular stomatitis and hooves sloughing.",
        "a": false,
        "e": "False. Equids (horses, donkeys, mules) possess natural physiological resistance to FMDV and NEVER contract Foot-and-Mouth Disease.",
        "topicId": "u5-t15",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The 3ABC non-structural protein ELISA differentiates FMD-vaccinated animals from field-infected animals in a DIVA strategy.",
        "a": true,
        "e": "True. Purified inactivated vaccines lack non-structural proteins (NSPs), whereas replicating field virus induces antibodies to 3ABC.",
        "topicId": "u5-t15",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Highly Pathogenic Avian Influenza (HPAI) strains possess a monobasic cleavage site in their hemagglutinin protein that restricts replication to the respiratory tract.",
        "a": false,
        "e": "False. HPAI strains possess a MULTI-BASIC cleavage site (cleaved by ubiquitous furin in all organs), causing fatal systemic infection and cyanosis.",
        "topicId": "u5-t14",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Bovine Ephemeral Fever ('Three-day sickness') is a non-fatal, insect-transmitted rhabdoviral disease characterized by sudden fever, joint stiffness, and recovery within 72 hours.",
        "a": true,
        "e": "True. BEFV causes an acute, high-morbidity, low-mortality febrile disease of cattle that typically resolves spontaneously in 3 days.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever Virus causes marked peripheral leukopenia and thrombocytopenia during the acute phase of infection.",
        "a": true,
        "e": "True. CSFV destroys bone marrow precursors and circulating lymphocytes, causing profound leukopenia (<4,000/uL) and widespread hemorrhages.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Persistently infected (PI) BVDV calves test strongly positive for high circulating titers of neutralizing antibodies against BVDV.",
        "a": false,
        "e": "False. PI calves are IMMUNOTOLERANT; their immune system regards BVDV as self-protein, testing antigen-positive and antibody-negative.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Feline Coronavirus undergoes spontaneous de novo mutation within an individual cat's monocytes/macrophages to give rise to Feline Infectious Peritonitis virus.",
        "a": true,
        "e": "True. FIP is not typically transmitted directly; it arises in vivo from internal mutations in the spike or 3c/7b accessory genes of feline enteric coronavirus.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "Porcine Epidemic Diarrhea Virus (PEDV) is a DNA virus that causes fatal respiratory pneumonia in adult breeding sows.",
        "a": false,
        "e": "False. PEDV is an Alphacoronavirus (RNA virus) that replicates in villous enterocytes, producing acute dehydration and up to 100% mortality in neonatal piglets.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Capripoxviruses are transmitted exclusively through contaminated water and can never be spread by mechanical insect vectors.",
        "a": false,
        "e": "False. Lumpy Skin Disease Virus is spread primarily by mechanical biting vectors (Stomoxys calcitrans, Aedes mosquitoes, and hard ticks).",
        "topicId": "u5-t21",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Bovine Herpesvirus-1 can remain latent inside trigeminal nerve ganglia for the entire lifetime of a recovered animal, reactivating during corticosteroid stress.",
        "a": true,
        "e": "True. Latency-related transcripts maintain BHV-1 in sensory neurons; transport of corticosteroids during shipping stress reactivates infectious viral shedding.",
        "topicId": "u5-t23",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Marek's Disease is an immunosuppressive and oncogenic herpesvirus disease characterized by T-cell lymphomas and peripheral nerve enlargement in poultry.",
        "a": true,
        "e": "True. MDV integrates its meq oncogene into host CD4+ T lymphocytes, producing visceral lymphomas and neural infiltration.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "In swine, Pseudorabies (Aujeszky's Disease) causes severe, frenzied 'Mad Itch' with intense pruritus in adult breeding sows.",
        "a": false,
        "e": "False. Adult swine are the NATURAL reservoir and develop respiratory signs or abortions WITHOUT pruritus; 'Mad Itch' occurs ONLY in secondary aberrant hosts.",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Canine Parvovirus-2 is readily inactivated by standard quaternary ammonium disinfectants within 30 seconds of contact.",
        "a": false,
        "e": "False. CPV-2 is non-enveloped and extremely resistant to quaternary ammonium and alcohol disinfectants; 1:30 household bleach (sodium hypochlorite) is required.",
        "topicId": "u5-t27",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Porcine Circovirus Type 2 virions possess a circular single-stranded DNA genome within a small non-enveloped icosahedral capsid.",
        "a": true,
        "e": "True. PCV-2 is one of the smallest autonomous mammalian viruses (17 nm), containing a 1.76 kb circular ssDNA genome.",
        "topicId": "u5-t28",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Equine sarcoids are locally aggressive fibroblastic cutaneous tumors of horses caused by cross-species infection with Bovine Papillomavirus Type 1 and 2.",
        "a": true,
        "e": "True. BPV-1 and BPV-2 DNA is detected in >90% of equine sarcoids, producing non-metastatic but locally invasive cutaneous tumors.",
        "topicId": "u5-t29",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Malignant Catarrhal Fever is highly contagious between cattle, spreading rapidly from sick cows to healthy cows through aerosol droplets.",
        "a": false,
        "e": "False. Cattle are DEAD-END hosts; cattle-to-cattle transmission does not occur. Cattle acquire infection from reservoir sheep (OvHV-2) or wildebeest.",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Vaccinating dogs with Canine Adenovirus Type 2 (CAV-2) confers cross-protective immunity against CAV-1 without inducing the 'blue eye' corneal opacity reaction.",
        "a": true,
        "e": "True. CAV-2 stimulates protective cross-reactive antibodies against CAV-1 (hepatitis) while avoiding the immune complex uveitis ('blue eye') caused by CAV-1 vaccines.",
        "topicId": "u5-t26",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "African Swine Fever Virus produces a protective neutralizing antibody response that confers lifelong immunity in recovered domestic pigs.",
        "a": false,
        "e": "False. ASFV does NOT induce classical virus-neutralizing antibodies; chronically infected pigs maintain persistent viremia despite circulating non-neutralizing antibodies.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Swill feeding (feeding untreated food waste, kitchen scraps, or swill to pigs) is the primary historical vehicle for transboundary introduction of African Swine Fever into disease-free countries.",
        "a": true,
        "e": "True. ASFV survives for months in chilled, frozen, or smoked pork; feeding untreated swill to domestic pigs initiates catastrophic national outbreaks.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Bovine Leukemia Virus (BLV) is transmitted primarily through contaminated blood on shared needles, dehorning gouges, and veterinary rectal examination gloves.",
        "a": true,
        "e": "True. BLV is cell-associated; iatrogenic transfer of small amounts of infected blood via needles, ear-taggers, or shared sleeves readily transmits EBL between cows.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "In Equine Infectious Anemia, horses that recover from acute clinical episodes eliminate the lentivirus completely and are no longer infectious.",
        "a": false,
        "e": "False. Infected equines remain LIFELONG inapparent carriers; integrated proviral DNA persists in macrophages, serving as reservoirs for mechanical insect transmission.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Prions contain a tiny fragment of circular single-stranded DNA that encodes the abnormal proteinase-resistant conformation.",
        "a": false,
        "e": "False. Prions contain NO nucleic acids (zero DNA or RNA); they replicate solely by inducing conformational templating of host-encoded normal PrPC protein.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Standard hospital autoclaving at 121°C for 15 minutes completely inactivates all scrapie and BSE prion infectivity.",
        "a": false,
        "e": "False. Prions survive 121°C autoclaving, routine formalin, and radiation; autoclaving at 134°C for 18–60 minutes in 1 M sodium hydroxide (NaOH) is required.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "In sheep, genetic susceptibility to classical Scrapie is strongly linked to polymorphisms at codons 136, 154, and 171 of the prion protein (PrP) gene.",
        "a": true,
        "e": "True. Allele VRQ (Valine-136, Arginine-154, Glutamine-171) confers extreme scrapie susceptibility, while ARR (Alanine, Arginine, Arginine) confers scrapie resistance.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Hendra virus was first discovered in Australia, causing acute respiratory illness and fatal neurological disease in horses and incontact veterinarians.",
        "a": true,
        "e": "True. In 1994, Hendra virus spilled over from flying foxes (bats) to thoroughbred horses and stable workers in Hendra, Australia.",
        "topicId": "u5-t32",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "Rift Valley Fever Virus is a phlebovirus transmitted by mosquitoes that causes catastrophic 'abortion storms' in pregnant sheep and acute hepatic necrosis in lambs.",
        "a": true,
        "e": "True. RVFV causes nearly 100% abortion in pregnant ewes ('abortion storms') and high mortality in newborn lambs, accompanied by severe zoonotic hemorrhagic fever in humans.",
        "topicId": "u5-t32",
        "subSection": "u5-s5",
        "diff": 2
      }
    ],
    "fib": [
      {
        "q": "The protein shell that encloses and protects the viral nucleic acid genome is the ______.",
        "a": [
          "capsid"
        ],
        "a_display": "Capsid",
        "e": "Capsids are assembled from individual morphological protein subunits termed capsomers.",
        "topicId": "u5-t02",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "An icosahedral capsid possesses exactly ______ equilateral triangular faces and 12 vertices.",
        "a": [
          "20",
          "twenty"
        ],
        "a_display": "20 faces",
        "e": "Twenty equilateral triangular facets enclose the maximal internal volume for a given surface area.",
        "topicId": "u5-t02",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The pathognomonic eosinophilic intracytoplasmic inclusion bodies observed in neurons of rabies-infected animals are ______ bodies.",
        "a": [
          "negri",
          "negri bodies"
        ],
        "a_display": "Negri bodies",
        "e": "Discovered by Adelchi Negri in 1903, Negri bodies are diagnostic viral replication complexes in Ammon's horn and Purkinje cells.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The egg inoculation route where viruses like Fowlpox are applied onto a dropped artificial air cell to produce pock lesions is the ______ membrane (CAM) route.",
        "a": [
          "chorioallantoic",
          "cam"
        ],
        "a_display": "Chorioallantoic membrane (CAM)",
        "e": "The vascular CAM supports focal pock formation for poxviruses and herpesviruses.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The mathematical formula commonly used to calculate the 50% tissue culture infective dose (TCID50) endpoint is the ______-Muench formula.",
        "a": [
          "reed",
          "reed-muench",
          "reed muench"
        ],
        "a_display": "Reed-Muench formula",
        "e": "The Reed-Muench method interpolates between dilutions bracketing 50% mortality or CPE.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "The formation of giant multinucleated cells resulting from viral fusion protein activity is termed ______ formation.",
        "a": [
          "syncytium",
          "syncytia",
          "polykaryocyte"
        ],
        "a_display": "Syncytium (Syncytia)",
        "e": "Syncytium formation enables direct cell-to-cell viral spread shielded from neutralizing antibodies.",
        "topicId": "u5-t06",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The genetic variation in segmented RNA viruses that results from the reassortment of entire gene segments between co-infecting strains is termed antigenic ______.",
        "a": [
          "shift"
        ],
        "a_display": "Antigenic shift",
        "e": "Antigenic shift introduces novel hemagglutinin subtypes into naive animal or human populations, precipitating pandemics.",
        "topicId": "u5-t05",
        "subSection": "u5-s1",
        "diff": 2
      },
      {
        "q": "The clear discrete circular zones of cellular lysis formed in a cell culture monolayer under a semi-solid overlay are called ______.",
        "a": [
          "plaques",
          "plaque"
        ],
        "a_display": "Plaques",
        "e": "Plaque assays quantify infectious viral particles as Plaque-Forming Units (PFU) per mL.",
        "topicId": "u5-t08",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "The viral enzyme required to convert single-stranded RNA into double-stranded DNA in Retroviruses is ______ transcriptase.",
        "a": [
          "reverse",
          "reverse transcriptase"
        ],
        "a_display": "Reverse transcriptase",
        "e": "Reverse transcriptase synthesizes a cDNA copy of the viral RNA genome, which integrates into host chromosomes.",
        "topicId": "u5-t04",
        "subSection": "u5-s1",
        "diff": 1
      },
      {
        "q": "Infectious Bursal Disease Virus (IBDV) belongs to the virus family ______.",
        "a": [
          "birnaviridae",
          "birnavirus"
        ],
        "a_display": "Birnaviridae",
        "e": "Birnaviridae is characterized by a bi-segmented double-stranded RNA genome in a non-enveloped icosahedral capsid.",
        "topicId": "u5-t09",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Bluetongue Virus and African Horse Sickness Virus are biologically transmitted between ungulates by biting midges of the genus ______.",
        "a": [
          "culicoides"
        ],
        "a_display": "Culicoides",
        "e": "Culicoides midges transmit Orbiviruses during nocturnal blood feeding.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The pulmonary, highly lethal form of African Horse Sickness characterized by frothy nasal discharge is commonly called ______ (or thin head).",
        "a": [
          "dunkop"
        ],
        "a_display": "Dunkop",
        "e": "Dunkop (Afrikaans for 'thin head') causes acute pulmonary edema and sudden death without prominent head swelling.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Rotaviruses possess an 11-segmented double-stranded RNA genome that resembles a ______ under negative-stain electron microscopy.",
        "a": [
          "wheel",
          "cartwheel"
        ],
        "a_display": "Wheel (Cartwheel)",
        "e": "The name Rotavirus derives from Latin rota (wheel), describing the hub, spokes, and rim appearance.",
        "topicId": "u5-t10",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The virulent Newcastle Disease Virus pathotype that causes severe hemorrhagic lesions in the digestive tract is ______ velogenic NDV.",
        "a": [
          "viscerotropic",
          "vvnd",
          "viscerotropic velogenic"
        ],
        "a_display": "Viscerotropic velogenic NDV",
        "e": "VVND causes hemorrhagic necrosis in the proventriculus, intestines, and cecal tonsils.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "The signature post-mortem lesion of linear mucosal congestion in the rectum of goats suffering from PPR is described as ______ striping.",
        "a": [
          "zebra",
          "zebra striping",
          "zebra marking"
        ],
        "a_display": "Zebra striping",
        "e": "Zebra markings represent dark red streaks of congestion and hemorrhage along colonic folds in PPR.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "Canine Distemper Virus belongs to the genus ______ in the family Paramyxoviridae.",
        "a": [
          "morbillivirus"
        ],
        "a_display": "Morbillivirus",
        "e": "Morbilliviruses include Measles, Rinderpest, PPR, and Canine Distemper.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The footpad hyperkeratosis observed in dogs following Canine Distemper infection is colloquially known as ______ disease.",
        "a": [
          "hardpad",
          "hard pad",
          "hardpad disease"
        ],
        "a_display": "Hardpad disease",
        "e": "Hardpad results from epithelial proliferation in digital pads caused by persistent CDV infection.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 1
      },
      {
        "q": "The live attenuated vaccine strain developed in India widely used for mass prophylaxis against Peste des Petits Ruminants is Sungri ______.",
        "a": [
          "96",
          "sungri 96",
          "sungri-96"
        ],
        "a_display": "Sungri 96",
        "e": "The Sungri 96 vaccine (developed at IVRI) provides long-lasting immunity against all four PPRV lineages.",
        "topicId": "u5-t11",
        "subSection": "u5-s2",
        "diff": 2
      },
      {
        "q": "Rabies virus belongs to the genus ______ within the family Rhabdoviridae.",
        "a": [
          "lyssavirus"
        ],
        "a_display": "Lyssavirus",
        "e": "The genus Lyssavirus contains classical rabies virus and related European and Australian bat lyssaviruses.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The standard diagnostic post-mortem test used globally for rabies confirmation in brain smears is the Direct ______ Antibody Test (dFAT).",
        "a": [
          "fluorescent",
          "immunofluorescence"
        ],
        "a_display": "Fluorescent (dFAT)",
        "e": "FAT visualizes bright apple-green fluorescent viral antigen aggregates inside neurons.",
        "topicId": "u5-t12",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The segmented RNA virus family that includes Avian, Swine, and Equine Influenza viruses is ______.",
        "a": [
          "orthomyxoviridae",
          "orthomyxovirus"
        ],
        "a_display": "Orthomyxoviridae",
        "e": "Orthomyxoviridae possess 8 segments of negative-sense single-stranded RNA.",
        "topicId": "u5-t14",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The characteristic cardiac necropsy lesion in young calves that died acutely of Foot-and-Mouth Disease is commonly known as '______ heart'.",
        "a": [
          "tiger",
          "tiger heart"
        ],
        "a_display": "Tiger heart",
        "e": "Tiger heart describes yellowish-gray stripes of myocardial necrosis alternating with dark red muscle.",
        "topicId": "u5-t15",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Classical Swine Fever Virus belongs to the genus ______ in the family Flaviviridae.",
        "a": [
          "pestivirus"
        ],
        "a_display": "Pestivirus",
        "e": "Pestiviruses include Classical Swine Fever, Bovine Viral Diarrhea, and Border Disease virus of sheep.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The circular necrotic lesions seen around the ileocecal valve in chronic Classical Swine Fever are termed ______ ulcers.",
        "a": [
          "button",
          "button ulcers"
        ],
        "a_display": "Button ulcers",
        "e": "Button ulcers are necrotic lymphoid patches surrounded by concentric rings of fibrous proliferation.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Calves that contract non-cytopathic BVDV in utero between 40 and 120 days of gestation become ______ infected (PI) shedders.",
        "a": [
          "persistently",
          "persistently infected",
          "pi"
        ],
        "a_display": "Persistently infected (PI)",
        "e": "PI calves shed billions of viral particles in saliva, tears, and feces, maintaining the virus in cattle herds.",
        "topicId": "u5-t18",
        "subSection": "u5-s3",
        "diff": 2
      },
      {
        "q": "The effusive form of Feline Infectious Peritonitis is also commonly referred to as the ______ form.",
        "a": [
          "wet",
          "wet form"
        ],
        "a_display": "Wet form",
        "e": "The wet form is characterized by fibrinous ascites and pleural effusion.",
        "topicId": "u5-t17",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "The primary vector responsible for transmitting Eastern and Western Equine Encephalomyelitis viruses between birds and equines is the ______.",
        "a": [
          "mosquito",
          "culicidae",
          "mosquitoes"
        ],
        "a_display": "Mosquito",
        "e": "Culiseta and Aedes mosquitoes maintain the bird cycle and transmit Alphaviruses to dead-end equine hosts.",
        "topicId": "u5-t19",
        "subSection": "u5-s3",
        "diff": 1
      },
      {
        "q": "Lumpy Skin Disease Virus belongs to the genus ______ in the family Poxviridae.",
        "a": [
          "capripoxvirus"
        ],
        "a_display": "Capripoxvirus",
        "e": "Capripoxviruses include Lumpy Skin Disease virus, Sheep Pox virus, and Goat Pox virus.",
        "topicId": "u5-t21",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The primary live attenuated vaccine strain used worldwide for the control of Lumpy Skin Disease in cattle is the ______ strain.",
        "a": [
          "neethling",
          "neethling strain"
        ],
        "a_display": "Neethling strain",
        "e": "The Neethling strain of Capripoxvirus was originally isolated in South Africa and attenuated in tissue culture.",
        "topicId": "u5-t21",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Bovine Herpesvirus-1 establishes lifelong latency in the sensory neurons of the ______ ganglia.",
        "a": [
          "trigeminal"
        ],
        "a_display": "Trigeminal ganglia",
        "e": "Latent viral genomes persist as circular episomes in sensory neurons of the trigeminal ganglia.",
        "topicId": "u5-t23",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "Marek's Disease Virus integrates its oncogene designated as ______ into host T lymphocytes to induce lymphomas.",
        "a": [
          "meq"
        ],
        "a_display": "meq (Marek's EcoRI Q)",
        "e": "The Meq protein is a basic leucine zipper oncoprotein that halts apoptosis and transforms avian T cells.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 3
      },
      {
        "q": "The intense localized pruritus leading to self-mutilation caused by Pseudorabies in non-swine hosts is commonly termed 'Mad ______'.",
        "a": [
          "itch",
          "mad itch"
        ],
        "a_display": "Mad Itch",
        "e": "Mad Itch is the common name for the frantic self-mutilation observed in cattle, sheep, and dogs with Aujeszky's disease.",
        "topicId": "u5-t25",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "The severe chicken disease characterized by coughing up bloody tracheal exudate caused by Gallid alphaherpesvirus-1 is Infectious ______ (ILT).",
        "a": [
          "laryngotracheitis",
          "ilt"
        ],
        "a_display": "Infectious Laryngotracheitis (ILT)",
        "e": "ILTV targets the upper respiratory tract, causing diphtheritic tracheitis and airway obstruction.",
        "topicId": "u5-t24",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Canine Parvovirus-2 destroys the rapidly multiplying enterocytes located within the ______ of Lieberkühn in the small intestine.",
        "a": [
          "crypts",
          "crypt"
        ],
        "a_display": "Crypts of Lieberkühn",
        "e": "Crypt cell necrosis halts enterocyte renewal, causing total villus collapse and hemorrhagic enteritis.",
        "topicId": "u5-t27",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Postweaning Multisystemic Wasting Syndrome (PMWS) in nursery pigs is caused by Porcine ______ Type 2 (PCV-2).",
        "a": [
          "circovirus",
          "pcv-2",
          "pcv2"
        ],
        "a_display": "Circovirus Type 2 (PCV-2)",
        "e": "PCV-2 causes severe lymphoid depletion, granulomatous lymphadenitis, and progressive emaciation.",
        "topicId": "u5-t28",
        "subSection": "u5-s4",
        "diff": 1
      },
      {
        "q": "Bovine Papillomaviruses cause chronic Enzootic Hematuria and urinary bladder cancer when cattle graze on ______ fern.",
        "a": [
          "bracken",
          "bracken fern"
        ],
        "a_display": "Bracken fern (Pteridium aquilinum)",
        "e": "Bracken fern ptaquiloside toxin acts synergistically with BPV to induce transitional cell carcinomas of the bladder.",
        "topicId": "u5-t29",
        "subSection": "u5-s4",
        "diff": 2
      },
      {
        "q": "African Swine Fever Virus is the sole member of the virus family ______.",
        "a": [
          "asfarviridae",
          "asfarvirus"
        ],
        "a_display": "Asfarviridae",
        "e": "Asfarviridae derives from African Swine Fever And Related viruses.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The soft tick genus that serves as the natural biological vector and reservoir for African Swine Fever Virus is ______.",
        "a": [
          "ornithodoros",
          "ornithodorus"
        ],
        "a_display": "Ornithodoros",
        "e": "Ornithodoros moubata soft ticks maintain ASFV in a sylvatic cycle with African warthogs.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "The in vitro diagnostic phenomenon where red blood cells adhere in rosettes around ASFV-infected macrophages is ______.",
        "a": [
          "hemadsorption",
          "had"
        ],
        "a_display": "Hemadsorption (HAD)",
        "e": "Hemadsorption is pathognomonic for African Swine Fever in primary swine alveolar macrophage cultures.",
        "topicId": "u5-t22",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "The viral retroviral enzyme that synthesizes double-stranded DNA from single-stranded genomic RNA is ______ transcriptase.",
        "a": [
          "reverse",
          "reverse transcriptase"
        ],
        "a_display": "Reverse transcriptase",
        "e": "Reverse transcriptase enables retroviruses to insert proviral DNA into host chromosomes.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "Bovine Leukemia Virus causes adult multicentric lymphosarcomas in cattle, commonly termed Enzootic Bovine ______ (EBL).",
        "a": [
          "leukosis",
          "leukosis (ebl)"
        ],
        "a_display": "Leukosis (EBL)",
        "e": "EBL causes progressive B-cell lymphocytosis and lymphomas infiltrating the heart, abomasum, and uterus.",
        "topicId": "u5-t20",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The abnormal, beta-sheet-rich, proteinase K-resistant isoform of the host prion protein that causes scrapie and BSE is designated as ______.",
        "a": [
          "prpsc",
          "prp-sc",
          "prp sc"
        ],
        "a_display": "PrPSc (Scrapie prion protein)",
        "e": "PrPSc acts as an infectious template, forcing normal cellular PrPC to adopt the pathological beta-sheet fold.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The statutory anatomical region of the brainstem collected for post-mortem surveillance of Bovine Spongiform Encephalopathy is the ______ of the medulla oblongata.",
        "a": [
          "obex"
        ],
        "a_display": "Obex",
        "e": "The obex contains the dorsal vagal and solitary tract nuclei where spongiform vacuolation first concentrates.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 2
      },
      {
        "q": "The feeding of ruminant-derived Meat and ______ Meal (MBM) to cattle was the primary transmission route of Bovine Spongiform Encephalopathy.",
        "a": [
          "bone",
          "meat and bone meal"
        ],
        "a_display": "Bone (Meat and Bone Meal)",
        "e": "Recycling rendered sheep and cow offal into cattle feed initiated the British BSE epidemic.",
        "topicId": "u5-t31",
        "subSection": "u5-s5",
        "diff": 1
      },
      {
        "q": "The bat-borne Henipavirus that spilled over into Malaysian pig farms causing 'barking pig syndrome' and human encephalitis is ______ virus.",
        "a": [
          "nipah",
          "nipah virus"
        ],
        "a_display": "Nipah virus",
        "e": "Nipah virus is an emerging BSL-4 paramyxovirus carried by fruit bats that transmits to swine and humans.",
        "topicId": "u5-t32",
        "subSection": "u5-s5",
        "diff": 2
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.quizBank = quizBank;
}

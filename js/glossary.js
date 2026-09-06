// =========================================================
// GLOSSARY — B.V.Sc UG-Level Tooltip Term Dictionary
// Veterinary Microbiology Studio
// =========================================================
// Usage: glossary.decorate(rootElement) scans rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {
    // Category mapping for A-Z browsing & filtering
    categories: {
        "General Bacteriology & Morphology": [
                "peptidoglycan",
                "lipopolysaccharide",
                "endotoxin",
                "exotoxin",
                "toxoid",
                "capsule",
                "flagella",
                "pili",
                "fimbriae",
                "endospore",
                "sporulation",
                "germination",
                "biofilm",
                "binary fission",
                "mesosome",
                "teichoic acid",
                "periplasmic space",
                "spheroplast",
                "protoplast",
                "l-form",
                "obligate aerobe",
                "obligate anaerobe",
                "facultative anaerobe",
                "microaerophile",
                "capnophile",
                "psychrophile",
                "mesophile",
                "thermophile",
                "exponential phase",
                "stationary phase",
                "lag phase",
                "death phase",
                "generation time",
                "bacteremia",
                "septicaemia",
                "toxaemia",
                "quorum sensing"
        ],
        "Systematic Bacteriology": [
                "coagulase",
                "catalase",
                "hemolysin",
                "alpha-hemolysis",
                "beta-hemolysis",
                "gamma-hemolysis",
                "camp test",
                "strangles",
                "botryomycosis",
                "caseous lymphadenitis",
                "anthrax",
                "blackleg",
                "pulpy kidney",
                "tetanus",
                "tetanospasmin",
                "botulism",
                "acid-fastness",
                "cord factor",
                "tuberculin test",
                "johnin test",
                "paratuberculosis",
                "wooden tongue",
                "lumpy jaw",
                "colibacillosis",
                "swarming motility",
                "glanders",
                "fowl cholera",
                "hemorrhagic septicemia",
                "infectious bovine keratoconjunctivitis",
                "contagious bovine pleuropneumonia",
                "anaplasmosis",
                "heartwater",
                "q fever"
        ],
        "Veterinary Mycology": [
                "hypha",
                "mycelium",
                "blastoconidia",
                "arthroconidia",
                "chlamydospore",
                "sporangiospore",
                "dimorphic fungi",
                "sabouraud dextrose agar",
                "lactophenol cotton blue",
                "dermatophyte",
                "microsporum",
                "trichophyton",
                "favus",
                "ringworm",
                "malassezia",
                "candidiasis",
                "germ tube test",
                "cryptococcosis",
                "indian ink preparation",
                "aspergillosis",
                "brooder pneumonia",
                "aflatoxin",
                "ochratoxin",
                "zearalenone",
                "fumonisin",
                "ergotism",
                "mycotic mastitis",
                "mycotic abortion",
                "rhinosporidiosis",
                "sporotrichosis",
                "zygomycosis"
        ],
        "Microbial Biotechnology & Genetics": [
                "recombinant dna",
                "restriction endonuclease",
                "dna ligase",
                "vector",
                "expression vector",
                "transformation",
                "competent cells",
                "electroporation",
                "transfection",
                "southern blotting",
                "northern blotting",
                "western blotting",
                "pcr",
                "taq polymerase",
                "primer",
                "real-time pcr",
                "reverse transcription pcr",
                "cdna",
                "genomic library",
                "sanger sequencing",
                "dna fingerprinting",
                "rflp",
                "bioinformatics",
                "blast",
                "genbank",
                "biosafety level"
        ],
        "Veterinary Immunology & Serology": [
                "bursa of fabricius",
                "thymus",
                "spleen",
                "lymph node",
                "peyer's patches",
                "epitope",
                "hapten",
                "adjuvant",
                "antibody",
                "immunoglobulin",
                "igg",
                "igm",
                "iga",
                "ige",
                "igd",
                "fab fragment",
                "fc fragment",
                "hybridoma",
                "monoclonal antibody",
                "opsonization",
                "agglutination",
                "precipitation",
                "prozone phenomenon",
                "agar gel immunodiffusion",
                "radial immunodiffusion",
                "elisa",
                "mhc",
                "bcr",
                "tcr",
                "complement",
                "membrane attack complex",
                "cytokine",
                "interferon",
                "hypersensitivity",
                "anaphylaxis",
                "arthus reaction",
                "delayed type hypersensitivity",
                "autoimmunity",
                "immunological tolerance",
                "colostrum",
                "passive immunity",
                "active immunity",
                "attenuated vaccine",
                "toxoid vaccine",
                "herd immunity"
        ],
        "General & Systematic Virology": [
                "virion",
                "capsid",
                "capsomere",
                "nucleocapsid",
                "envelope",
                "peplomer",
                "baltimore classification",
                "syncytium",
                "inclusion body",
                "negri bodies",
                "cytopathic effect",
                "plaque assay",
                "tcid50",
                "embryonated egg",
                "continuous cell line",
                "primary cell culture",
                "viremia",
                "oncogenic virus",
                "reverse transcriptase",
                "antigenic drift",
                "antigenic shift",
                "prion",
                "scrapie",
                "bovine spongiform encephalopathy",
                "rhabdovirus",
                "paramyxovirus",
                "orthomyxovirus",
                "coronavirus",
                "birnavirus",
                "reovirus",
                "picornavirus",
                "flavivirus",
                "asfarvirus",
                "poxvirus",
                "herpesvirus",
                "parvovirus",
                "circovirus"
        ]
},

    // Full definitions for tooltip overlays & detail drawer
    terms: {
        "peptidoglycan": "Rigid mesh-like polymer of alternating NAG and NAM cross-linked by amino acids, forming the primary structural exoskeleton of bacterial cell walls.",
        "lipopolysaccharide": "Major surface glycolipid of Gram-negative bacterial outer membranes consisting of Lipid A (endotoxin), core oligosaccharide, and O-antigen repeat units.",
        "endotoxin": "Heat-stable toxic lipopolysaccharide component (Lipid A) integral to Gram-negative outer cell walls, released primarily upon bacterial lysis to trigger shock and pyrexia.",
        "exotoxin": "Diffusible, highly potent protein toxin secreted by living Gram-positive or Gram-negative bacteria into surrounding tissues (e.g. tetanus, botulinum, anthrax toxins).",
        "toxoid": "Inactivated exotoxin chemically treated (typically with formaldehyde) or heat-denatured to eliminate toxicity while retaining complete immunogenicity for vaccination.",
        "capsule": "Gelatinous glycocalyx layer exterior to bacterial cell wall (usually polysaccharide, poly-D-glutamate in B. anthracis) mediating anti-phagocytic virulence.",
        "flagella": "Helical filamentous protein appendages driven by rotary basal bodies that provide active motility to bacteria.",
        "pili": "Hair-like surface protein appendages (pilin); specialised F-pili mediate horizontal gene transfer during bacterial conjugation.",
        "fimbriae": "Short, numerous filamentous protein projections on bacterial surfaces facilitating specific adherence to host mucosal epithelial cells.",
        "endospore": "Dormant, highly resistant, dehydrated resting structure produced intracellularly by Bacillus and Clostridium during harsh environmental conditions.",
        "sporulation": "Multi-stage process by which vegetative bacterial cells form resistant endospores in response to nutrient exhaustion or desiccation.",
        "germination": "Outgrowth of a dormant bacterial endospore into a metabolically active vegetative cell upon exposure to favorable nutritional conditions and heat activation.",
        "biofilm": "Structured community of bacterial cells enclosed in a self-produced extracellular polymeric substance (EPS) matrix adherent to biological or inert surfaces.",
        "binary fission": "Asexual reproductive division of a single bacterial cell into two genetically identical daughter cells following genomic replication.",
        "mesosome": "Invagination of bacterial plasma membrane involved in cellular respiration, secretion, and cell division cross-wall formation.",
        "teichoic acid": "Glycerol or ribitol phosphate polymers embedded in the thick peptidoglycan layer of Gram-positive bacterial cell walls.",
        "periplasmic space": "Gel-filled compartment located between the cytoplasmic membrane and outer membrane of Gram-negative bacteria containing enzymes and transport proteins.",
        "spheroplast": "Gram-negative bacterium partially stripped of its peptidoglycan layer by lysozyme or penicillin but retaining its outer membrane.",
        "protoplast": "Gram-positive bacterial cell completely devoid of its cell wall, bounded solely by its cytoplasmic membrane and osmotically fragile.",
        "l-form": "Wall-deficient bacterial variant capable of growth and replication, often induced by antibiotic stress against cell wall synthesis.",
        "obligate aerobe": "Organism that strictly requires atmospheric oxygen for aerobic cellular respiration and survival (e.g. Mycobacterium, Pseudomonas).",
        "obligate anaerobe": "Organism unable to utilize oxygen and poisoned by toxic oxygen radicals due to lack of catalase and superoxide dismutase (e.g. Clostridium).",
        "facultative anaerobe": "Organism capable of growing in the presence or absence of oxygen, utilizing aerobic respiration or fermentation (e.g. E. coli, Staphylococcus).",
        "microaerophile": "Bacterium requiring reduced levels of oxygen (2\u201310%) and elevated CO2 for optimal growth (e.g. Campylobacter, Brucella).",
        "capnophile": "Microorganism that thrives in the presence of high concentrations of carbon dioxide (5\u201310% CO2).",
        "psychrophile": "Cold-adapted microorganism capable of growth and reproduction at cold temperatures ranging from 0\u00b0C to 15\u00b0C.",
        "mesophile": "Microorganism with optimum growth temperature between 20\u00b0C and 45\u00b0C, including the vast majority of mammalian pathogens.",
        "thermophile": "Heat-tolerant microorganism flourishing at elevated temperatures between 45\u00b0C and 70\u00b0C.",
        "exponential phase": "Logarithmic growth phase during which bacteria divide at their maximal constant rate, highly susceptible to cell-wall acting antibiotics.",
        "stationary phase": "Culture growth phase where cell multiplication equals cell death rate due to nutrient depletion and toxic metabolite accumulation.",
        "lag phase": "Initial period following bacterial inoculation where cells adjust to media and synthesize enzymes with no increase in cell number.",
        "death phase": "Decline phase where rate of bacterial cell death exceeds cell division due to exhausted resources and severe toxic accumulation.",
        "generation time": "Time required for a bacterial population to double in number through binary fission under optimal physiological conditions.",
        "bacteremia": "Transient presence of viable bacteria circulating in the bloodstream without active multiplication.",
        "septicaemia": "Systemic bacteremia with active multiplication of pathogenic bacteria and dissemination of their toxic products in the blood, leading to high fever and collapse.",
        "toxaemia": "Presence and systemic dissemination of bacterial toxins in the blood circulation, with or without localized bacterial multiplication.",
        "quorum sensing": "Bacterial cell-to-cell communication mechanism utilizing secreted autoinducer signaling molecules to coordinate gene expression and virulence as population density increases.",
        "coagulase": "Enzyme produced by Staphylococcus aureus that converts host soluble fibrinogen into insoluble fibrin clots, insulating bacteria from host phagocytes.",
        "catalase": "Enzyme that decomposes toxic hydrogen peroxide into water and oxygen; distinguishes Staphylococci (positive) from Streptococci (negative).",
        "hemolysin": "Lipid- or protein-based toxin produced by bacteria that causes lysis of host red blood cell membranes.",
        "alpha-hemolysis": "Partial, green or brownish discoloration and incomplete clearing of red blood cells around colonies on blood agar (e.g. Streptococcus pneumoniae).",
        "beta-hemolysis": "Complete, clear zone of erythrocyte lysis around bacterial colonies on blood agar (e.g. Streptococcus equi, Staphylococcus aureus).",
        "gamma-hemolysis": "Absence of hemolysis or clearing on blood agar media around bacterial colonies.",
        "camp test": "Christie-Atkins-Munch-Petersen test demonstrating synergistic enhanced beta-hemolysis when Group B Streptococci (S. agalactiae) meet S. aureus beta-lysin on blood agar.",
        "strangles": "Acute, highly contagious equine upper respiratory infection caused by Streptococcus equi subsp. equi, characterized by purulent lymphadenitis of submandibular lymph nodes.",
        "botryomycosis": "Chronic granulomatous suppurative bacterial infection usually caused by Staphylococcus aureus, producing characteristic macroscopic granules in equine tissues.",
        "caseous lymphadenitis": "Chronic contagious disease of sheep and goats caused by Corynebacterium pseudotuberculosis, characterized by suppurative laminated 'onion-ring' caseous abscesses in lymph nodes.",
        "anthrax": "Peracute, zoonotic, septicemic disease of herbivores caused by Bacillus anthracis, presenting with sudden death, splenomegaly, and non-clotting dark blood from orifices.",
        "blackleg": "Acute, non-contagious gas gangrene of skeletal muscle in cattle caused by Clostridium chauvoei, resulting in crepitant swelling and lameness.",
        "pulpy kidney": "Acute enterotoxemia in sheep caused by Clostridium perfringens type D epsilon toxin, characterized by rapid post-mortem autolysis of renal tissue and glucosuria.",
        "tetanus": "Neurological intoxication caused by tetanospasmin of Clostridium tetani, characterized by persistent spastic muscle paralysis and hyperreflexia.",
        "tetanospasmin": "Potent neurotoxin produced by Clostridium tetani that retrograde-transports to the CNS and cleaves synaptobrevin, preventing release of inhibitory GABA and glycine.",
        "botulism": "Flaccid neuromuscular paralysis caused by ingestion of preformed botulinum neurotoxin from Clostridium botulinum, preventing acetylcholine release at motor endplates.",
        "acid-fastness": "Physical property of bacteria having cell walls rich in mycolic acids (e.g. Mycobacterium) that resist decolorization by acid-alcohol after carbol fuchsin staining.",
        "cord factor": "Trehalose 6,6'-dimycolate, an important glycolipid virulence factor on virulent Mycobacterium tuberculosis strains responsible for serpentine cord-like growth.",
        "tuberculin test": "Delayed-type hypersensitivity (DTH) intradermal diagnostic skin test using purified protein derivative (PPD) to detect cellular immune sensitization to Mycobacterium bovis.",
        "johnin test": "Diagnostic intradermal hypersensitivity test using M. paratuberculosis culture filtrate extract (Johnin PPD) to detect Johne's disease in cattle.",
        "paratuberculosis": "Johne's disease; chronic granulomatous enteritis in ruminants caused by Mycobacterium avium subsp. paratuberculosis, causing intractable diarrhea and emaciation.",
        "wooden tongue": "Chronic granulomatous infection of the bovine tongue and soft tissues caused by Actinobacillus lignieresii, resulting in severe induration and dysphagia.",
        "lumpy jaw": "Chronic rarefying osteomyelitis of the bovine mandible and maxilla caused by Actinomyces bovis, characterized by bone proliferation and sinus drainage with sulfur granules.",
        "colibacillosis": "Infection caused by pathogenic strains of Escherichia coli, manifesting as neonatal diarrhea, edema disease in pigs, or systemic septicemia in poultry and calves.",
        "swarming motility": "Coordinated multicellular movement across solid agar surface producing concentric wave-like growth patterns, characteristic of Proteus species.",
        "glanders": "Fatal, contagious zoonotic disease of solipeds caused by Burkholderia mallei, producing nodular ulcers in the respiratory tract and cutaneous lymphatic chain ('farcy').",
        "fowl cholera": "Highly contagious avian pasteurellosis caused by Pasteurella multocida, presenting with septicemia, high mortality, and cyanosis of comb and wattles.",
        "hemorrhagic septicemia": "Acute, fatal septicemic disease of cattle and water buffalo caused by Pasteurella multocida serotypes B:2 and E:2, marked by high fever and submandibular edema.",
        "infectious bovine keratoconjunctivitis": "'Pinkeye'; acute contagious ocular infection of cattle caused by Moraxella bovis, characterized by corneal ulceration, photophobia, and opacity.",
        "contagious bovine pleuropneumonia": "Severe contagious pulmonary disease of cattle caused by Mycoplasma mycoides subsp. mycoides, characterized by fibrinous pleuropneumonia and marbled lung appearance.",
        "anaplasmosis": "Tick-borne rickettsial infection of ruminants caused by Anaplasma marginale, causing severe extravascular hemolytic anemia and icterus without hemoglobinuria.",
        "heartwater": "Tick-borne rickettsial disease of ruminants caused by Ehrlichia ruminantium, presenting with nervous signs, hydropericardium ('heartwater'), and pulmonary edema.",
        "q fever": "Zoonotic infection caused by Coxiella burnetii, an obligate intracellular bacterium resistant to drying, causing reproductive failure and abortion in ruminants.",
        "hypha": "Microscopic branching thread-like tubular filament of a fungal mould, either septate or aseptate (coenocytic).",
        "mycelium": "Intertwined, macroscopic vegetative or aerial mass composed of numerous hyphal filaments constituting the thallus of a fungus.",
        "blastoconidia": "Asexual fungal spores formed by the budding process from a parent yeast or fungal cell (e.g. Candida, Malassezia).",
        "arthroconidia": "Asexual fungal spores produced by fragmentation and thickening of pre-existing vegetative hyphal compartments (e.g. Dermatophytes, Coccidioides).",
        "chlamydospore": "Thick-walled, highly resistant resting asexual fungal spore formed terminal or intercalary within a vegetative hypha (e.g. Candida albicans).",
        "sporangiospore": "Asexual fungal spore produced within an enclosed, sac-like structure termed a sporangium (characteristic of Zygomycetes).",
        "dimorphic fungi": "Fungi capable of transitioning between two morphological states: mould phase at environmental temperatures (25\u00b0C) and yeast phase at host body temperature (37\u00b0C).",
        "sabouraud dextrose agar": "Selective culture medium with acidic pH (5.6) and high dextrose content for the isolation and cultivation of pathogenic fungi and yeasts.",
        "lactophenol cotton blue": "Mounting and staining fluid for fungal microscopy: phenol kills cells, lactic acid preserves structure, and cotton blue stains chitin and cellulose in fungal walls.",
        "dermatophyte": "Mould fungus capable of invading keratinized tissues (skin, hair, claws, feathers) using extracellular keratinases (Microsporum, Trichophyton).",
        "microsporum": "Genus of dermatophytes characteristically producing abundant large, rough-walled, multi-septate macroconidia (e.g. M. canis causes ringworm in cats/dogs).",
        "trichophyton": "Genus of dermatophytes producing predominantly smooth, thin-walled microconidia and rare pencil-shaped macroconidia (e.g. T. verrucosum causes ringworm in cattle).",
        "favus": "Severe, chronic dermatophyte infection producing yellow cup-shaped crusts ('scutula') on skin and feathers, caused by Microsporum gallinae or Trichophyton schoenleinii.",
        "ringworm": "Common dermatophytosis of domestic animals characterized by circular, expanding alopecic patches, crusting, and broken hairs.",
        "malassezia": "Lipophilic opportunistic yeast causing pruritic otitis externa and dermatitis in dogs (primarily Malassezia pachydermatis).",
        "candidiasis": "Opportunistic fungal infection ('thrush') caused by Candida albicans affecting mucous membranes of digestive and urogenital tracts.",
        "germ tube test": "Rapid diagnostic screen for Candida albicans: yeast forms germ tubes when incubated in mammalian serum at 37\u00b0C for 2\u20133 hours.",
        "cryptococcosis": "Subacute or chronic fungal infection caused by encapsulated yeast Cryptococcus neoformans, targeting feline nasal cavity, skin, and central nervous system.",
        "indian ink preparation": "Negative staining diagnostic technique where colloidal carbon particles are excluded by the prominent mucopolysaccharide capsule of Cryptococcus neoformans.",
        "aspergillosis": "Infection caused by Aspergillus species (mainly A. fumigatus), causing mycotic pneumonia in poultry ('brooder pneumonia') and nasal plaques in dogs.",
        "brooder pneumonia": "Acute, fatal pulmonary aspergillosis of young chicks and poults caused by inhaling spore-laden dust from contaminated litter or incubators.",
        "aflatoxin": "Hepatotoxic and carcinogenic mycotoxins produced by Aspergillus flavus and Aspergillus parasiticus on stored grains, causing hepatic necrosis and lipidosis.",
        "ochratoxin": "Nephrotoxic mycotoxin produced by Aspergillus and Penicillium species, causing porcine nephropathy and visceral gout in poultry.",
        "zearalenone": "Estrogenic mycotoxin produced by Fusarium species on maize, causing vulvovaginitis, rectal prolapse, and reproductive disorders in swine.",
        "fumonisin": "Mycotoxin produced by Fusarium verticillioides that inhibits sphingolipid biosynthesis, causing equine leukoencephalomalacia and porcine pulmonary edema.",
        "ergotism": "Mycotoxicosis caused by ingesting sclerotia of Claviceps purpurea on cereal grasses containing ergot alkaloids, leading to peripheral gangrene and agalactia.",
        "mycotic mastitis": "Chronic, refractory inflammation of the bovine mammary gland caused by fungal agents such as Candida, Aspergillus, or Prototheca.",
        "mycotic abortion": "Sporadic bovine abortion occurring in the second or third trimester caused by haematogenous spread of Aspergillus or Zygomycetes to the placenta.",
        "rhinosporidiosis": "Chronic granulomatous infection of mucosal surfaces (chiefly nasal cavity) in dogs, horses, and cattle, producing vascular, polypoid masses with sporangia.",
        "sporotrichosis": "Chronic, granulomatous subcutaneous and lymphatic fungal infection caused by dimorphic Sporothrix schenckii ('rose gardener's disease') in cats and horses.",
        "zygomycosis": "Invasive fungal infection caused by mucoralean moulds (Mucor, Rhizopus, Absidia) with broad, non-septate hyphae exhibiting predilection for vascular invasion.",
        "recombinant dna": "Genetically engineered DNA molecules created in vitro by joining genetic sequences from distinct biological sources.",
        "restriction endonuclease": "Bacterial enzyme that cleaves double-stranded DNA at specific palindromic recognition sequences, generating sticky or blunt ends for gene cloning.",
        "dna ligase": "Enzyme that covalently seals single-stranded nicks in double-stranded DNA by catalyzing phosphodiester bond formation between 3'-OH and 5'-phosphate ends.",
        "vector": "Autonomous DNA molecule (plasmid, virus, cosmid) used as a vehicle to artificially carry foreign genetic material into another cell for replication or expression.",
        "expression vector": "Cloning plasmid engineered with strong promoter, ribosome binding site, and termination sequences to achieve high-level transcription and translation of cloned genes.",
        "transformation": "Uptake and functional incorporation of naked exogenous DNA molecules by competent bacterial cells from their surrounding environment.",
        "competent cells": "Bacterial cells chemically or physically treated (e.g. cold CaCl2 or electroporation) to transiently enhance membrane permeability for DNA uptake.",
        "electroporation": "Technique employing high-voltage electrical pulses to create transient nanometer-sized pores in cell membranes, enabling foreign DNA entry.",
        "transfection": "Introduction of foreign nucleic acids into eukaryotic cells by non-viral physical, chemical, or lipid-mediated means.",
        "southern blotting": "Molecular technique for transferring electrophoretically separated DNA fragments from an agarose gel to a membrane filter for hybridisation detection.",
        "northern blotting": "Laboratory technique for separating and immobilizing RNA molecules on nylon membranes to measure gene expression levels with specific nucleic acid probes.",
        "western blotting": "Analytical method for detecting specific proteins in tissue extracts by gel electrophoresis, membrane transfer, and enzyme-labeled antibody probing.",
        "pcr": "Polymerase chain reaction; in vitro enzymatic technique for exponential amplification of specific target DNA sequences through repeated cycles of denaturation, annealing, and extension.",
        "taq polymerase": "Thermostable DNA polymerase isolated from thermophilic bacterium Thermus aquaticus capable of withstanding the 95\u00b0C denaturation step in PCR.",
        "primer": "Short, single-stranded oligonucleotide sequence (18\u201325 nt) designed to hybridize specifically to flanking target DNA and prime DNA polymerase synthesis.",
        "real-time pcr": "Quantitative PCR (qPCR) measuring amplicon accumulation continuously during cycling via fluorescent dyes or probe-based chemistry (TaqMan).",
        "reverse transcription pcr": "Molecular method (RT-PCR) utilizing reverse transcriptase enzyme to synthesize cDNA from RNA templates prior to standard PCR amplification.",
        "cdna": "Complementary DNA synthesized enzymatically from an mRNA template by reverse transcriptase, representing the expressed exon sequences without introns.",
        "genomic library": "Collection of cloned DNA fragments representing the entire genomic sequence of a particular organism inserted into cloning vectors.",
        "sanger sequencing": "Dideoxy chain termination method for determining exact nucleotide order in DNA using 2',3'-dideoxynucleoside triphosphates (ddNTPs).",
        "dna fingerprinting": "Molecular identification profiling based on polymorphic tandem repeat sequences (VNTRs/STRs) or restriction fragment profiles unique to individual organisms.",
        "rflp": "Restriction fragment length polymorphism; genetic variation in DNA fragment patterns generated by specific restriction endonuclease digestion.",
        "bioinformatics": "Interdisciplinary field combining computational tools, mathematics, and molecular biology to acquire, store, analyze, and interpret biological data.",
        "blast": "Basic Local Alignment Search Tool; algorithmic software comparing query protein or nucleotide sequences against vast international sequence databases.",
        "genbank": "Comprehensive NIH/NCBI genetic sequence database containing publicly accessible annotated collections of all DNA and RNA sequences.",
        "biosafety level": "Hierarchical biocontainment containment levels (BSL-1 to BSL-4) specifying laboratory facilities, safety equipment, and operating practices.",
        "bursa of fabricius": "Primary lymphoid organ in avian species situated on the dorsal wall of the cloaca, responsible for B-cell maturation and immunoglobulin gene diversification.",
        "thymus": "Primary bilobed lymphoid organ situated in the anterior mediastinum and neck, responsible for T-lymphocyte maturation and positive/negative selection.",
        "spleen": "Largest secondary lymphoid organ, containing red pulp for erythrocyte filtration and white pulp (PALS) for immune surveillance against blood-borne pathogens.",
        "lymph node": "Encapsulated secondary lymphoid organ filtering lymph, organized into outer cortex (B-cells), paracortex (T-cells), and inner medulla (plasma cells).",
        "peyer's patches": "Organized aggregated lymphoid follicles embedded within the lamina propria and submucosa of the small intestine, monitoring gut microbial antigens.",
        "epitope": "Antigenic determinant; specific molecular surface feature or sequence of an antigen recognized directly by an antibody paratope, BCR, or TCR.",
        "hapten": "Small, non-immunogenic chemical molecule capable of binding antibodies but unable to stimulate an immune response alone unless conjugated to a carrier protein.",
        "adjuvant": "Substance added to vaccines that non-specifically enhances the magnitude, duration, and quality of antigen-specific immune responses.",
        "antibody": "Y-shaped immunoglobulin glycoprotein secreted by plasma cells in response to foreign immunogens, neutralizing pathogens and tagging them for destruction.",
        "immunoglobulin": "Class of structurally related globular glycoproteins (IgG, IgM, IgA, IgE, IgD) functioning as circulating antibodies or membrane-bound B-cell receptors.",
        "igg": "Predominant immunoglobulin isotype in mammalian serum and colostrum providing long-term systemic immunity, opsonization, and complement activation.",
        "igm": "Pentameric high-molecular-weight immunoglobulin produced first during primary immune responses, highly efficient at agglutination and complement fixation.",
        "iga": "Dimeric mucosal immunoglobulin equipped with a secretory component, protecting respiratory, gastrointestinal, and urogenital mucosal surfaces.",
        "ige": "Immunoglobulin isotype that binds high-affinity Fc receptors on mast cells and basophils, mediating Type I hypersensitivity and anti-helminth immunity.",
        "igd": "Co-expressed with IgM on the surface of mature naive B-lymphocytes as an antigen receptor, present in negligible concentrations in serum.",
        "fab fragment": "Antigen-binding fragment produced by papain cleavage of an immunoglobulin monomer, containing variable heavy and light chains.",
        "fc fragment": "Crystallizable constant fragment of an antibody molecule mediating biological effector functions (complement binding, Fc receptor attachment on phagocytes).",
        "hybridoma": "Immortal hybrid cell created by fusing an antigen-primed antibody-producing B-lymphocyte with a cancerous myeloma cell, producing monoclonal antibodies.",
        "monoclonal antibody": "Homogeneous population of antibody molecules produced by a single hybridoma clone, binding with identical affinity to one specific epitope.",
        "opsonization": "Immune process coating foreign pathogens with opsonins (IgG antibodies or C3b complement) to greatly facilitate recognition and engulfment by phagocytes.",
        "agglutination": "Visible clumping reaction occurring when multivalent antibodies cross-link particulate antigens (bacteria or erythrocytes) into visible aggregates.",
        "precipitation": "Serological reaction where soluble antibodies cross-link soluble antigens at an optimal equivalence ratio, forming an insoluble visible precipitate.",
        "prozone phenomenon": "False-negative serological precipitation or agglutination test result caused by extreme antibody excess preventing lattice formation.",
        "agar gel immunodiffusion": "Ouchterlony AGID; serological diagnostic test where antigen and antibody diffuse toward each other through agar to form a precipitin line of identity.",
        "radial immunodiffusion": "Mancini technique; quantitative serological assay measuring the diameter of precipitation rings formed as antigen diffuses into antibody-impregnated agar.",
        "elisa": "Enzyme-Linked Immunosorbent Assay; sensitive diagnostic serological method utilizing enzyme-labeled antibodies and chromogenic substrates to quantify antigens or antibodies.",
        "mhc": "Major Histocompatibility Complex; cell-surface glycoproteins presenting processed peptide fragments to T-cells (MHC-I presents to CD8+, MHC-II to CD4+).",
        "bcr": "B-cell receptor; membrane-bound immunoglobulin monomer paired with Ig-alpha/Ig-beta signaling heterodimers on B-lymphocyte membranes.",
        "tcr": "T-cell receptor; heterodimeric surface protein (alpha-beta or gamma-delta) associated with CD3 complex on T-lymphocytes that recognizes peptide-MHC complexes.",
        "complement": "System of heat-labile plasma proteins and membrane receptors activating in a cascading sequence to mediate opsonization, inflammation, and cell lysis.",
        "membrane attack complex": "Terminal complement complex (C5b-6-7-8-9) that inserts into microbial lipid bilayers to create transmembrane pores, inducing osmotic lysis.",
        "cytokine": "Low-molecular-weight soluble regulatory signaling protein secreted by immune and stromal cells mediating intercellular communication and inflammation.",
        "interferon": "Family of antiviral and immunomodulatory cytokines (IFN-alpha, IFN-beta, IFN-gamma) induced during viral infection that stimulate an intracellular antiviral state.",
        "hypersensitivity": "Exaggerated or inappropriate immune response to an antigen that results in tissue damage, categorized into Coombs & Gell Types I to IV.",
        "anaphylaxis": "Acute, life-threatening systemic Type I hypersensitivity reaction characterized by widespread mast cell degranulation, bronchoconstriction, and shock.",
        "arthus reaction": "Localized Type III hypersensitivity response occurring in tissues with high levels of circulating antibody when challenged with intradermal antigen.",
        "delayed type hypersensitivity": "Cell-mediated Type IV hypersensitivity reaction taking 24\u201372 hours to manifest, mediated by sensitized CD4+ Th1 cells and recruited macrophages.",
        "autoimmunity": "Pathological immune response wherein the host immune system generates antibodies or cytotoxic T-cells targeting its own self-antigens.",
        "immunological tolerance": "State of specific unresponsiveness of the immune system to substances (particularly self-antigens) that would otherwise elicit an immune attack.",
        "colostrum": "First milk secreted postpartum by the mammary gland, densely concentrated with maternal immunoglobulins (predominantly IgG) critical for passive neonatal immunity.",
        "passive immunity": "Transfer of active humoral immunity in the form of pre-made antibodies from an immune donor to a non-immune recipient (e.g. colostrum or antisera).",
        "active immunity": "Immunity stimulated directly in an individual following exposure to a live pathogen or immunization with a vaccine antigen.",
        "attenuated vaccine": "Vaccine containing viable microorganisms whose virulence has been deliberately weakened through laboratory passaging while retaining immunogenicity.",
        "toxoid vaccine": "Vaccine containing a detoxified bacterial exotoxin that stimulates protective neutralizing antitoxin antibodies.",
        "herd immunity": "Indirect protection of susceptible individuals within a population when a critical proportion of the population is immune to an infectious agent.",
        "virion": "Complete, infectious, extracellular physical viral particle consisting of a nucleic acid genome surrounded by a protein capsid and optional envelope.",
        "capsid": "Symmetrical protein shell enclosing and protecting the viral nucleic acid genome from extracellular environmental inactivation.",
        "capsomere": "Morphological protein subunit visible under electron microscopy that self-assembles to form the viral capsid structure.",
        "nucleocapsid": "Integrated structural complex composed of the viral nucleic acid genome enclosed directly within its protein capsid shell.",
        "envelope": "Host-derived lipid bilayer membrane surrounding certain viral capsids, acquired by budding through host cellular membranes and studded with viral glycoproteins.",
        "peplomer": "Glycoprotein spike projecting outward from the lipid bilayer envelope of enveloped viruses, mediating host receptor binding and membrane fusion.",
        "baltimore classification": "Virological classification scheme grouping viruses into seven distinct classes based on genome type (DNA/RNA, ss/ds) and pathway to mRNA synthesis.",
        "syncytium": "Multinucleated giant cell formed by the fusion of adjacent host cell membranes induced by viral fusion glycoproteins (e.g. Paramyxoviridae).",
        "inclusion body": "Discrete microscopic aggregates of viral proteins or virions visible within the host cell cytoplasm or nucleus during specific viral infections.",
        "negri bodies": "Pathognomonic eosinophilic intracytoplasmic viral inclusion bodies found in neurons of animals infected with Rabies virus (Rhabdoviridae).",
        "cytopathic effect": "Morphological changes, structural alterations, and degenerative destruction observable in host cell cultures resulting from viral infection (CPE).",
        "plaque assay": "Quantitative virological assay measuring the number of infectious viral units (PFU) based on focal areas of cell lysis in a monolayer culture.",
        "tcid50": "Tissue Culture Infectious Dose 50; statistical dilution of virus required to produce cytopathic effects in 50% of inoculated cell culture replicates.",
        "embryonated egg": "Fertile avian egg (usually 9\u201311 day old chicken embryo) utilized for the isolation, propagation, and titration of animal viruses.",
        "continuous cell line": "Immortalized cell culture capable of infinite in vitro passages without senescence (e.g. Vero, BHK-21, MDBK).",
        "primary cell culture": "Cell culture established directly from freshly dissociated embryonic or animal tissues, surviving for only a finite number of passages in vitro.",
        "viremia": "Dissemination and presence of infectious viral particles circulating within the host bloodstream.",
        "oncogenic virus": "Virus capable of transforming normal host cells into malignant neoplastic cells by integrating viral oncogenes or perturbing cell cycle controls.",
        "reverse transcriptase": "RNA-dependent DNA polymerase enzyme encoded by retroviruses that transcribes single-stranded viral RNA into double-stranded complementary DNA.",
        "antigenic drift": "Minor, gradual point mutations in viral surface glycoprotein genes (e.g. influenza hemagglutinin) that allow escape from existing host immunity.",
        "antigenic shift": "Major, abrupt genetic reassortment between distinct influenza viral strains yielding novel surface glycoproteins capable of causing pandemics.",
        "prion": "Small, infectious, proteinaceous particle devoid of nucleic acid; the misfolded isoform (PrPSc) induces pathogenic conformational change in normal host PrPC.",
        "scrapie": "Transmissible spongiform encephalopathy of sheep and goats characterized by pruritus, ataxia, wasting, and bilateral vacuolation of brainstem neurons.",
        "bovine spongiform encephalopathy": "'Mad Cow Disease'; fatal neurodegenerative prion disease of cattle caused by feeding meat-and-bone meal contaminated with scrapie or BSE prions.",
        "rhabdovirus": "Bullet-shaped, enveloped negative-sense single-stranded RNA virus family including Rabies virus and Bovine Ephemeral Fever virus.",
        "paramyxovirus": "Enveloped, pleomorphic negative-sense single-stranded RNA virus family responsible for Newcastle disease, Rinderpest, PPR, and Canine Distemper.",
        "orthomyxovirus": "Segmented, enveloped negative-sense single-stranded RNA virus family encoding hemagglutinin and neuraminidase, causing Avian, Equine, and Swine Influenza.",
        "coronavirus": "Large, enveloped positive-sense single-stranded RNA virus family with club-shaped surface spikes, causing Infectious Bronchitis in poultry and TGE in pigs.",
        "birnavirus": "Non-enveloped, bi-segmented double-stranded RNA virus family containing Infectious Bursal Disease Virus (IBDV / Gumboro disease).",
        "reovirus": "Non-enveloped icosahedral double-stranded RNA virus family with segmented genomes, including Bluetongue Virus and African Horse Sickness Virus.",
        "picornavirus": "Small, non-enveloped positive-sense single-stranded RNA virus family containing Aphthovirus, the causative agent of Foot-and-Mouth Disease (FMD).",
        "flavivirus": "Enveloped positive-sense single-stranded RNA virus family containing Pestiviruses: Classical Swine Fever Virus (Hog Cholera) and Bovine Viral Diarrhea Virus.",
        "asfarvirus": "Large, enveloped double-stranded DNA virus family containing African Swine Fever Virus (ASFV), the only known DNA arbovirus of vertebrates.",
        "poxvirus": "Large, complex brick-shaped double-stranded DNA virus family that replicates in host cytoplasm, causing Sheep Pox, Goat Pox, and Lumpy Skin Disease.",
        "herpesvirus": "Enveloped, icosahedral double-stranded DNA virus family capable of establishing life-long latency in sensory ganglia (IBR/BHV-1, Marek's disease, ILTV).",
        "parvovirus": "Small, non-enveloped, resilient single-stranded DNA virus family with affinity for rapidly dividing host cells, causing severe feline and canine enteritis.",
        "circovirus": "Smallest non-enveloped circular single-stranded DNA viruses of vertebrates, causing Chicken Anemia and Porcine Circovirus Associated Disease (PCVAD)."
},

    _regex: null,
    _lookup: null,
    _scrollHooked: false,

    _buildIndex() {
        this._lookup = {};
        const termKeys = Object.keys(this.terms);
        // Sort descending by string length to match multi-word expressions first
        termKeys.sort((a, b) => b.length - a.length);

        termKeys.forEach(t => {
            this._lookup[t.toLowerCase()] = this.terms[t];
        });

        // Safe regex escaping
        const escaped = termKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        this._regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    },

    _positionTooltip(termSpan) {
        const rect = termSpan.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = 12;

        const ttWidth = Math.min(320, vw - margin * 2);
        let left = rect.left + rect.width / 2 - ttWidth / 2;
        let top = rect.bottom + 8;
        const ttEstHeight = 90;

        if (left + ttWidth > vw - margin) left = vw - ttWidth - margin;
        if (left < margin) left = margin;

        if (top + ttEstHeight > vh - margin) {
            const above = rect.top - ttEstHeight - 8;
            if (above >= margin) top = above;
        }

        termSpan.style.setProperty('--tt-left', left + 'px');
        termSpan.style.setProperty('--tt-top', top + 'px');
        termSpan.style.setProperty('--tt-width', ttWidth + 'px');
    },

    // Safely decorate text nodes without touching interactive or existing nodes
    decorate(root) {
        if (!root) return;
        if (!this._regex) this._buildIndex();
        if (!this._regex) return;

        const SKIP = new Set(['SCRIPT', 'STYLE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'CODE', 'PRE', 'SELECT']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!this._regex.test(text)) return;
            this._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = this._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                const def = this._lookup[m[0].toLowerCase()] || '';
                span.dataset.def = def;
                span.setAttribute('tabindex', '0');
                span.setAttribute('role', 'button');
                span.setAttribute('aria-label', `Definition of ${m[0]}: ${def}`);

                const onShow = (e) => this._positionTooltip(e.currentTarget);
                span.addEventListener('mouseenter', onShow);
                span.addEventListener('focus', onShow);
                span.addEventListener('touchstart', onShow, { passive: true });

                // Double-click to pronounce aloud via SpeechSynthesis
                span.addEventListener('dblclick', (e) => {
                    e.preventDefault();
                    if (window.app && typeof window.app.speak === 'function') {
                        window.app.speak(e.currentTarget.textContent);
                    }
                });

                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }

            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }

            textNode.parentNode.replaceChild(frag, textNode);
        });

        if (!this._scrollHooked) {
            this._scrollHooked = true;
            const reposition = () => {
                const active = document.querySelector('.gloss-term:hover, .gloss-term:focus');
                if (active) this._positionTooltip(active);
            };
            window.addEventListener('scroll', reposition, { passive: true, capture: true });
            window.addEventListener('resize', reposition, { passive: true });
        }
    },

    define(term) {
        if (!this._lookup) this._buildIndex();
        return this._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') {
    window.glossary = glossary;
}

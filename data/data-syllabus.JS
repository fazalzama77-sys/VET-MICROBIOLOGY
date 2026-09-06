/* ============================================================
   data-syllabus.JS  —  THE MASTER INDEX
   ------------------------------------------------------------
   This file defines the SHAPE of the whole site: which units
   exist, what they are called, and which topics sit inside them.

   The actual lesson text does NOT live here. It lives in:
     data/data-theory-unit1.JS  ...  data-theory-unit5.JS
     data/data-practical.JS

   Topics are matched between the two by their `id`.
   If you add a topic here, add a matching block in the unit file.

   VCI syllabus: Veterinary Microbiology, Credit Hours 3+2 = 5
   Exam papers:  Paper-I = Units 1,2,3   |   Paper-II = Units 4,5
   ============================================================ */

var syllabus = {

  meta: {
    subject:   "Veterinary Microbiology",
    course:    "B.V.Sc & A.H. — Second Year",
    credits:   "3 + 2 = 5",
    institute: "ICAR — Indian Veterinary Research Institute, Izatnagar, Bareilly",
    papers: [
      { id: "paper-1", name: "Paper I",  units: [1, 2, 3], theoryMarks: 100, practicalMarks: 60, weightage: 20 },
      { id: "paper-2", name: "Paper II", units: [4, 5],    theoryMarks: 100, practicalMarks: 60, weightage: 20 }
    ]
  },

  /* ---------------------------------------------------------
     THEORY — 5 UNITS
     --------------------------------------------------------- */
  theory: [
    {
      no: 1,
      id: "unit-1",
      title: "General & Systematic Veterinary Bacteriology",
      short: "Bacteriology",
      blurb: "Bacterial morphology, staining, physiology, genetics, virulence determinants, and systematic study of major animal bacterial pathogens.",
      icon: "cell",
      paper: "paper-1",
      topics: [
        { id: "u1-t01", title: "Introduction and History of Microbiology" },
        { id: "u1-t02", title: "Classification and Nomenclature of Bacteria" },
        { id: "u1-t03", title: "Microscopy and Micrometry" },
        { id: "u1-t04", title: "Bacterial Stains and Staining Techniques" },
        { id: "u1-t05", title: "Structure and Morphology of Bacterial Cells" },
        { id: "u1-t06", title: "Growth and Nutritional Requirements of Aerobic and Anaerobic Bacteria" },
        { id: "u1-t07", title: "Normal, Opportunistic and Saprophytic Bacterial Flora" },
        { id: "u1-t08", title: "Infection: Types, Sources and Methods of Transmission" },
        { id: "u1-t09", title: "Pathogenicity, Virulence and Determinants of Virulence" },
        { id: "u1-t10", title: "Bacteremia, Septicaemia, Toxaemia, Endotoxins, Exotoxins, Antitoxins and Toxoids" },
        { id: "u1-t11", title: "Bacterial Genetics: Mutation, Transformation, Transduction, Conjugation and Plasmids" },
        { id: "u1-t12", title: "Antibiotic Resistance and Mechanisms in Bacteria" },
        { id: "u1-t13", title: "Staphylococcus" },
        { id: "u1-t14", title: "Streptococcus and Enterococcus" },
        { id: "u1-t15", title: "Corynebacterium, Trueperella and Rhodococcus" },
        { id: "u1-t16", title: "Listeria and Erysipelothrix" },
        { id: "u1-t17", title: "Bacillus (Bacillus anthracis and other species)" },
        { id: "u1-t18", title: "Mycobacterium (M. bovis, M. avium, M. paratuberculosis)" },
        { id: "u1-t19", title: "Clostridium (Neurotoxic, Histotoxic and Enterotoxigenic)" },
        { id: "u1-t20", title: "Actinomyces, Nocardia, Streptomyces and Dermatophilus" },
        { id: "u1-t21", title: "Family Enterobacteriaceae: Escherichia coli and Klebsiella" },
        { id: "u1-t22", title: "Family Enterobacteriaceae: Salmonella, Yersinia and Proteus" },
        { id: "u1-t23", title: "Pseudomonas and Burkholderia" },
        { id: "u1-t24", title: "Pasteurella and Mannheimia" },
        { id: "u1-t25", title: "Actinobacillus and Haemophilus" },
        { id: "u1-t26", title: "Brucella (B. abortus, B. melitensis, B. suis, B. canis)" },
        { id: "u1-t27", title: "Vibrio and Campylobacter" },
        { id: "u1-t28", title: "Bordetella and Moraxella" },
        { id: "u1-t29", title: "Gram-Negative Anaerobes: Bacteroides, Dichelobacter and Fusobacterium" },
        { id: "u1-t30", title: "Leptospira and Other Spirochaetes (Borrelia, Treponema, Brachyspira)" },
        { id: "u1-t31", title: "Mycoplasma and Ureaplasma" },
        { id: "u1-t32", title: "Rickettsiales: Coxiella, Neorickettsia, Ehrlichia, Anaplasma and Rickettsia" },
        { id: "u1-t33", title: "Chlamydia and Chlamydophila" },
        { id: "u1-t34", title: "Emerging, Re-emerging and Transboundary Bacterial Pathogens" }
      ]
    },

    {
      no: 2,
      id: "unit-2",
      title: "Veterinary Mycology",
      short: "Mycology",
      blurb: "General properties of fungi, cultivation, dermatophytes, dimorphic fungi, mycoses, and mycotoxicoses.",
      icon: "feather",
      paper: "paper-1",
      topics: [
        { id: "u2-t01", title: "Introduction, Classification and General Properties of Fungi" },
        { id: "u2-t02", title: "Growth and Reproduction of Fungi" },
        { id: "u2-t03", title: "Candida and Cryptococcus (Candidiasis and Cryptococcosis)" },
        { id: "u2-t04", title: "Aspergillus and Penicillium (Aspergillosis and Penicilliosis)" },
        { id: "u2-t05", title: "Dermatophytes (Microsporum, Trichophyton) and Malassezia" },
        { id: "u2-t06", title: "Dimorphic Fungi (Histoplasma, Blastomyces, Coccidioides, Paracoccidioides)" },
        { id: "u2-t07", title: "Rhinosporidium and Sporothrix (Rhinosporidiosis and Sporotrichosis)" },
        { id: "u2-t08", title: "Mycetoma and Zygomycetes (Mucor, Rhizopus, Absidia)" },
        { id: "u2-t09", title: "Mycotic Mastitis and Mycotic Abortion in Livestock" },
        { id: "u2-t10", title: "Mycotoxins and Mycotoxicoses (Aflatoxins, Ochratoxins, Fumonisin, T-2, Zearalenone)" }
      ]
    },

    {
      no: 3,
      id: "unit-3",
      title: "Microbial Biotechnology",
      short: "Biotechnology",
      blurb: "Recombinant DNA technology, gene cloning, PCR, blotting, sequencing, bioinformatics, and regulatory ethics in animal biotechnology.",
      icon: "dna",
      paper: "paper-1",
      topics: [
        { id: "u3-t01", title: "Basic Concepts and Scope of Recombinant DNA Technology" },
        { id: "u3-t02", title: "Gene Cloning, Cloning Vectors and Expression Vectors" },
        { id: "u3-t03", title: "Transformation, Transfection and Selection of Recombinants" },
        { id: "u3-t04", title: "Blotting Techniques: Southern, Northern and Western Blotting" },
        { id: "u3-t05", title: "Polymerase Chain Reaction (PCR) and Diagnostic Variants" },
        { id: "u3-t06", title: "Nucleic Acid Hybridization and Diagnostic Probes" },
        { id: "u3-t07", title: "DNA Libraries: Genomic and cDNA Libraries" },
        { id: "u3-t08", title: "DNA Sequencing and DNA Fingerprinting" },
        { id: "u3-t09", title: "Bioinformatics, Biological Databases and Gene Banks" },
        { id: "u3-t10", title: "Intellectual Property Rights (IPR), Ethics and Regulatory Issues in Biotechnology" }
      ]
    },

    {
      no: 4,
      id: "unit-4",
      title: "Veterinary Immunology and Serology",
      short: "Immunology",
      blurb: "Immune mechanisms, lymphoid architecture, antibodies, complement, MHC, hypersensitivity, serological reactions, and vaccines.",
      icon: "shield",
      paper: "paper-2",
      topics: [
        { id: "u4-t01", title: "History and Milestones in Immunology" },
        { id: "u4-t02", title: "Lymphoid Organs, Tissues and Cells of the Immune System" },
        { id: "u4-t03", title: "Types of Immunity: Innate and Acquired Immunity" },
        { id: "u4-t04", title: "Antigens, Haptens, Epitopes, Mitogens and Immunogenicity Factors" },
        { id: "u4-t05", title: "T-Dependent vs T-Independent, Heterophile and Blood Group Antigens" },
        { id: "u4-t06", title: "Adjuvants: Classification, Mechanisms and Veterinary Applications" },
        { id: "u4-t07", title: "Antibodies (Immunoglobulins): Structure, Classes and Biological Functions" },
        { id: "u4-t08", title: "Theories of Antibody Production and Generation of Diversity" },
        { id: "u4-t09", title: "Hybridoma Technology and Monoclonal Antibodies" },
        { id: "u4-t10", title: "Serological Reactions: Principles and Applications" },
        { id: "u4-t11", title: "Major Histocompatibility Complex (MHC): Structure and Function" },
        { id: "u4-t12", title: "Structure and Function of BCR and TCR" },
        { id: "u4-t13", title: "Antigen Processing and Presentation Pathways" },
        { id: "u4-t14", title: "The Complement System: Pathways and Biological Consequences" },
        { id: "u4-t15", title: "Cytokines: Properties, Major Classes and Biological Functions" },
        { id: "u4-t16", title: "Hypersensitivity Reactions: Types I, II, III and IV" },
        { id: "u4-t17", title: "Immunological Tolerance and Autoimmunity" },
        { id: "u4-t18", title: "Mechanisms of Immunity to Microbial Infections" },
        { id: "u4-t19", title: "Veterinary Vaccines, Vaccination Schedules and Biologicals" }
      ]
    },

    {
      no: 5,
      id: "unit-5",
      title: "General and Systematic Veterinary Virology",
      short: "Virology",
      blurb: "Viral architecture, replication, pathogenesis, oncogenesis, and systematic study of DNA/RNA viruses and prions.",
      icon: "virus",
      paper: "paper-2",
      topics: [
        { id: "u5-t01", title: "History and General Properties of Viruses" },
        { id: "u5-t02", title: "Structure, Symmetry and Morphology of Viruses" },
        { id: "u5-t03", title: "Classification and Nomenclature of Viruses" },
        { id: "u5-t04", title: "Viral Replication Cycle: From Attachment to Release" },
        { id: "u5-t05", title: "Genetic and Non-Genetic Viral Interactions" },
        { id: "u5-t06", title: "Virus-Cell Interactions and Cytopathic Effects (CPE)" },
        { id: "u5-t07", title: "Viral Pathogenesis, Latency, Oncogenesis and Immunopathology" },
        { id: "u5-t08", title: "Cultivation of Viruses: Host Systems, Eggs and Cell Cultures" },
        { id: "u5-t09", title: "Birnaviridae: Infectious Bursal Disease (Gumboro Disease) Virus" },
        { id: "u5-t10", title: "Reoviridae: Bluetongue Virus, African Horse Sickness Virus and Rotaviruses" },
        { id: "u5-t11", title: "Paramyxoviridae: Newcastle Disease Virus (NDV)" },
        { id: "u5-t12", title: "Paramyxoviridae: PPR Virus and Canine Distemper Virus (CDV)" },
        { id: "u5-t13", title: "Rhabdoviridae: Rabies Virus and Bovine Ephemeral Fever Virus" },
        { id: "u5-t14", title: "Bornaviridae: Borna Disease Virus" },
        { id: "u5-t15", title: "Orthomyxoviridae: Avian, Swine and Equine Influenza Viruses" },
        { id: "u5-t16", title: "Coronaviridae: Infectious Bronchitis Virus (IBV) and TGE Virus" },
        { id: "u5-t17", title: "Arteriviridae: Equine Viral Arteritis Virus" },
        { id: "u5-t18", title: "Picornaviridae: Foot-and-Mouth Disease (FMD) Virus and Duck Viral Hepatitis" },
        { id: "u5-t19", title: "Caliciviridae: Feline Calicivirus" },
        { id: "u5-t20", title: "Togaviridae: Equine Encephalomyelitis Viruses (EEE, WEE, VEE)" },
        { id: "u5-t21", title: "Flaviviridae: Classical Swine Fever (CSF) and Bovine Viral Diarrhea (BVD)" },
        { id: "u5-t22", title: "Retroviridae: Bovine Leukemia, Avian Leukosis, Visna/Maedi and EIA" },
        { id: "u5-t23", title: "Poxviridae: Capripox (Sheep/Goat Pox, LSD), Avipox and Cowpox" },
        { id: "u5-t24", title: "Asfarviridae: African Swine Fever (ASF) Virus" },
        { id: "u5-t25", title: "Herpesviridae (Part 1): Bovine Herpesviruses (IBR/BHV-1) and Equine Herpesviruses" },
        { id: "u5-t26", title: "Herpesviridae (Part 2): Marek's Disease Virus, ILTV and Duck Plague" },
        { id: "u5-t27", title: "Herpesviridae (Part 3): Pseudorabies and Malignant Catarrhal Fever (MCF)" },
        { id: "u5-t28", title: "Adenoviridae: Infectious Canine Hepatitis, EDS-76 and Fowl Adenovirus" },
        { id: "u5-t29", title: "Papillomaviridae: Bovine and Canine Papillomatosis" },
        { id: "u5-t30", title: "Parvoviridae: Canine Parvovirus (CPV-2) and Feline Panleukopenia" },
        { id: "u5-t31", title: "Circoviridae: Chicken Anemia Virus (CAV) and Porcine Circovirus" },
        { id: "u5-t32", title: "Prions: Scrapie and Bovine Spongiform Encephalopathy (BSE)" },
        { id: "u5-t33", title: "Emerging, Re-emerging and Transboundary Viral Infections" }
      ]
    }
  ],

  /* ---------------------------------------------------------
     PRACTICAL — 5 UNITS
     --------------------------------------------------------- */
  practical: [
    {
      no: 1,
      id: "prac-1",
      title: "General & Systematic Veterinary Bacteriology",
      short: "Practical Bacteriology",
      blurb: "Laboratory orientation, sterilization, media preparation, aerobic/anaerobic cultivation, stains, ABST, and clinical pathogen isolation.",
      icon: "lab",
      paper: "paper-1",
      topics: [
        { id: "p1-t01", title: "Orientation to Bacteriology Laboratory, Safety and Equipment" },
        { id: "p1-t02", title: "Methods of Sterilization and Disinfection in Bacteriology" },
        { id: "p1-t03", title: "Preparation of Culture Media for Aerobic and Anaerobic Bacteria" },
        { id: "p1-t04", title: "Methods of Inoculation and Cultivation of Bacteria" },
        { id: "p1-t05", title: "Isolation of Bacteria in Pure Culture" },
        { id: "p1-t06", title: "Simple Staining and Negative Staining Techniques" },
        { id: "p1-t07", title: "Differential Staining: Gram's Staining Technique" },
        { id: "p1-t08", title: "Differential Staining: Acid-Fast (Ziehl-Neelsen) Staining" },
        { id: "p1-t09", title: "Special Staining: Capsule and Endospore Staining" },
        { id: "p1-t10", title: "Bacterial Motility Determination (Hanging Drop Method)" },
        { id: "p1-t11", title: "Antibiotic Sensitivity Testing (Kirby-Bauer Disc Diffusion Method)" },
        { id: "p1-t12", title: "Collection, Transport and Processing of Diagnostic Bacteriological Samples" },
        { id: "p1-t13", title: "Characterization of Staphylococcus and Streptococcus" },
        { id: "p1-t14", title: "Characterization of Enterobacteriaceae: E. coli, Salmonella, Klebsiella, Proteus" },
        { id: "p1-t15", title: "Characterization of Pseudomonas, Pasteurella and Clostridium" },
        { id: "p1-t16", title: "Isolation and Identification from Clinical Cases (Mastitis, Abortion, Enteric, Respiratory, Pyogenic)" }
      ]
    },

    {
      no: 2,
      id: "prac-2",
      title: "Veterinary Mycology",
      short: "Practical Mycology",
      blurb: "Diagnostic sample collection, culture media preparation, slide culture, LPCB staining, antifungal sensitivity, and pathogen identification.",
      icon: "cell",
      paper: "paper-1",
      topics: [
        { id: "p2-t01", title: "Collection, Transportation and Processing of Fungal Samples" },
        { id: "p2-t02", title: "Preparation of Fungal Culture Media (SDA) and Cultivation" },
        { id: "p2-t03", title: "Slide Culture Technique for Microscopic Study of Fungi" },
        { id: "p2-t04", title: "Lactophenol Cotton Blue (LPCB) Mount and Staining" },
        { id: "p2-t05", title: "Antifungal Culture Sensitivity Testing" },
        { id: "p2-t06", title: "Laboratory Diagnosis of Aspergillosis and Candidiasis" },
        { id: "p2-t07", title: "Demonstration of Dermatophytes, Important Yeasts and Moulds" }
      ]
    },

    {
      no: 3,
      id: "prac-3",
      title: "Microbial Biotechnology",
      short: "Practical Biotechnology",
      blurb: "Nucleic acid extraction and quantitation, plasmid profiling, agarose gel electrophoresis, SDS-PAGE, and molecular diagnostic aids.",
      icon: "pulse",
      paper: "paper-1",
      topics: [
        { id: "p3-t01", title: "Extraction and Quantitation of Microbial Nucleic Acids" },
        { id: "p3-t02", title: "Plasmid DNA Isolation and Plasmid Profiling" },
        { id: "p3-t03", title: "Agarose Gel Electrophoresis (AGE) for Microbial DNA Analysis" },
        { id: "p3-t04", title: "SDS-PAGE Electrophoresis for Microbial Protein Profiling" },
        { id: "p3-t05", title: "Use of Multimedia and Audio-Visual Aids for Molecular Biology Aspects" },
        { id: "p3-t06", title: "Polymerase Chain Reaction (PCR) Demonstration and Amplicon Analysis" }
      ]
    },

    {
      no: 4,
      id: "prac-4",
      title: "Veterinary Immunology and Serology",
      short: "Practical Immunology",
      blurb: "Lab animal inoculations, antigen preparation, raising antisera, agglutination, precipitation, ELISA, and DTH skin test.",
      icon: "microscope",
      paper: "paper-2",
      topics: [
        { id: "p4-t01", title: "Inoculation Routes in Laboratory Animals and Handling" },
        { id: "p4-t02", title: "Preparation of Bacterial Antigen for Immunization" },
        { id: "p4-t03", title: "Raising of Antisera, Serum Separation and Preservation" },
        { id: "p4-t04", title: "Concentration and Purification of Immunoglobulins" },
        { id: "p4-t05", title: "Agglutination Tests: Slide and Tube Agglutination (STAT)" },
        { id: "p4-t06", title: "Haemagglutination (HA) and Haemagglutination Inhibition (HI) Tests" },
        { id: "p4-t07", title: "Precipitation Tests: Agar Gel Immunodiffusion (AGID)" },
        { id: "p4-t08", title: "Single Radial Immunodiffusion (SRID) and Immunoelectrophoresis" },
        { id: "p4-t09", title: "Enzyme-Linked Immunosorbent Assay (ELISA) Demonstration" },
        { id: "p4-t10", title: "Evaluation of Cell-Mediated Immunity: Delayed-Type Hypersensitivity (DTH)" },
        { id: "p4-t11", title: "Visit and Appraisal of Veterinary Biological Production Institute" }
      ]
    },

    {
      no: 5,
      id: "prac-5",
      title: "General and Systematic Veterinary Virology",
      short: "Practical Virology",
      blurb: "Virology biosafety, sample handling, egg inoculation, cell culture maintenance, cytopathic effects, virus titration, and serological assays.",
      icon: "feather",
      paper: "paper-2",
      topics: [
        { id: "p5-t01", title: "Orientation to Virology Laboratory, Biosafety and Equipment" },
        { id: "p5-t02", title: "Collection, Preservation and Transport of Virology Diagnostic Samples" },
        { id: "p5-t03", title: "Inoculation and Cultivation of Viruses in Embryonated Chicken Eggs" },
        { id: "p5-t04", title: "Preparation of Media and Reagents for Cell Culture" },
        { id: "p5-t05", title: "Subculture and Maintenance of Continuous Cell Lines" },
        { id: "p5-t06", title: "Viable Cell Count and Cell Quantitation in Haemocytometer" },
        { id: "p5-t07", title: "Cryopreservation and Recovery (Thawing) of Cell Cultures" },
        { id: "p5-t08", title: "Preparation of Primary Cell Cultures (CEF / Lamb Kidney)" },
        { id: "p5-t09", title: "Demonstration of Cytopathic Effect (CPE) in Cell Cultures" },
        { id: "p5-t10", title: "Virus Titration by TCID50 (Reed-Muench) and Plaque Assay" },
        { id: "p5-t11", title: "Serum Neutralization Test (SNT) in Cell Cultures" },
        { id: "p5-t12", title: "Agar Gel Precipitation Test (AGPT) for Viral Infection Detection" },
        { id: "p5-t13", title: "Titration of Newcastle Disease Virus by Haemagglutination (HA) Test" },
        { id: "p5-t14", title: "Haemagglutination Inhibition (HI) Test for NDV Antibodies" },
        { id: "p5-t15", title: "ELISA and Molecular Techniques for Viral Disease Diagnosis" }
      ]
    }
  ]
};

/* -----------------------------------------------------------
   LOOKUP INDEXES
   ----------------------------------------------------------- */
syllabus.allUnits = syllabus.theory.concat(syllabus.practical);
syllabus.unitById = {};
syllabus.topicById = {};

(function () {
  syllabus.allUnits.forEach(function (u) {
    syllabus.unitById[u.id] = u;
    u.stream = (u.id.indexOf("prac-") === 0) ? "practical" : "theory";
    (u.topics || []).forEach(function (t, i) {
      t.stream = u.stream;
      t.unitId = u.id;
      t.unitNo = u.no;
      t.index = i + 1;
      syllabus.topicById[t.id] = t;
    });
  });
})();


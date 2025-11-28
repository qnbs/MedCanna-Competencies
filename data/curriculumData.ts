
import { CompetencyDomain, QuizQuestion, PlantCompound, PatientCase } from '../types';

// --- ENGLISH DATA ---

const COMPETENCIES_EN: CompetencyDomain[] = [
  {
    id: 1,
    title: "1. Understand the basics of the endocannabinoid system.",
    shortTitle: "Endocannabinoid System",
    description: "Foundational knowledge regarding receptors, production, function, and physiological regulation.",
    points: [
      {
        letter: "a",
        text: "Understand the basic function and distribution of main cannabinoid receptors."
      },
      {
        letter: "b",
        text: "Describe the basics of endocannabinoid production, function, enzyme inhibition, and activation, and how endocannabinoid tone is maintained."
      },
      {
        letter: "c",
        text: "Understand the role of the endocannabinoid system in regulating core physiologic functions (e.g., stress, sleep, appetite, pain, immunity)."
      }
    ]
  },
  {
    id: 2,
    title: "2. Describe the main components of the Cannabis plant and their biological effects.",
    shortTitle: "Plant Pharmacology",
    description: "Botany, major/minor cannabinoids, terpenes, the entourage effect, and pharmaceutical differences.",
    points: [
      {
        letter: "a",
        text: "Understand Cannabis plant parts (e.g., stem, leaves, flowers, trichomes), species, cultivars, and their use in medicine and industry."
      },
      {
        letter: "b",
        text: "Understand the basic effects of major and minor cannabinoids, terpenes, and flavonoids, including the concept of the entourage effect, as well as current evidence for anti-inflammatory, immune, metabolic, and neuroprotective properties of cannabinoids."
      },
      {
        letter: "c",
        text: "Learn how pharmaceutical and whole-plant cannabis-based products differ."
      },
      {
        letter: "d",
        text: "Understand the effect of different cannabinoids on the endocannabinoid system."
      }
    ]
  },
  {
    id: 3,
    title: "3. Review the legal and regulatory landscape of cannabis in the US.",
    shortTitle: "Law & Regulation",
    description: "History, prohibition, structural racism, federal/state conflicts, and access challenges.",
    points: [
      {
        letter: "a",
        text: "Review U.S. history and law pertaining to cannabis.",
        subPoints: [
          { label: "i", text: "Describe the historic landscape of cannabis policy and prohibition." },
          { label: "ii", text: "Learn how drug policy has disproportionally affected marginalized communities." },
          { label: "iii", text: "Recognize the impact of federal policy on cannabis research." }
        ]
      },
      {
        letter: "b",
        text: "Review U.S. Federal, state, and local regulations regarding medical and adult-use cannabis.",
        subPoints: [
          { label: "i", text: "Discuss ethical considerations for healthcare professionals." },
          { label: "ii", text: "Understand what qualifies patients for medical cannabis access." },
          { label: "iii", text: "Describe medical cannabis access challenges for qualified patients." },
          { label: "iv", text: "Review the U.S. Schedule of Controlled Substances." },
          { label: "v", text: "Review state and local regulations for medical and adult-use cannabis." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4. Describe the evidence base for health conditions that are commonly managed with cannabis.",
    shortTitle: "Evidence Base",
    description: "Strength of evidence for symptoms/conditions, FDA-approved medications, and opioid sparing.",
    points: [
      {
        letter: "a",
        text: "Describe the most common symptoms and conditions managed with medicinal cannabis, and the associated strength of evidence, including:",
        subPoints: [
            { label: "i", text: "Palliative care." },
            { label: "ii", text: "Gastrointestinal disorders and symptoms." },
            { label: "iii", text: "Neurodegenerative and neurologic disorders, e.g., seizures and neuropathy." },
            { label: "iv", text: "Oncologic-related conditions." },
            { label: "v", text: "Pain conditions." },
            { label: "vi", text: "Psychiatric disorders and symptoms." }
        ]
      },
      {
        letter: "b",
        text: "Describe FDA-approved cannabinoid-based medications and their indications."
      },
      {
        letter: "c",
        text: "Discuss the role that cannabis may potentially have in the cessation or reduction of medications, e.g., opioids and benzodiazepines."
      }
    ]
  },
  {
    id: 5,
    title: "5. Understand the potential risks of medical cannabis use.",
    shortTitle: "Risk Assessment",
    description: "Side effects, use disorders, contamination, occupational risks, and drug interactions.",
    points: [
      {
        letter: "a",
        text: "Describe acute and chronic side effects of cannabis use with respect to the following factors:",
        subPoints: [
            { label: "i", text: "Physical and mental side effects." },
            { label: "ii", text: "Driving and operating machinery." },
            { label: "iii", text: "Route-specific adverse reactions." },
            { label: "iv", text: "Pediatric and adolescent patients, including accidental ingestion." },
            { label: "v", text: "Pregnant and lactating women and their infants." },
            { label: "vi", text: "Older adults." }
        ]
      },
      {
        letter: "b",
        text: "Understand cannabis-related disorders and other substance misuse.",
        subPoints: [
            { label: "i", text: "Describe Cannabis Use Disorder, Cannabis Withdrawal Syndrome, Cannabinoid Hyperemesis Syndrome, and Substance Use Disorder." },
            { label: "ii", text: "Be familiar with DSM 5 criteria, CPT, and ICD10 codes for cannabis-related disorders." },
            { label: "iii", text: "Describe testing and management of cannabis overdose and intoxication." }
        ]
      },
      {
        letter: "c",
        text: "Review medical cannabis production quality concerns.",
        subPoints: [
            { label: "i", text: "Learn about contamination risks with mycotoxins, pesticides, heavy metals, bacteria, and solvents in cannabis cultivation and processing." }
        ]
      },
      {
        letter: "d",
        text: "Learn about the risks of novel synthetic and laced cannabinoids, for example, Delta-8 THC."
      },
      {
        letter: "e",
        text: "Summarize the financial and occupational implications of medical cannabis use.",
        subPoints: [
            { label: "i", text: "Know the occupational risks of cannabis use for federal, state, and local employees." },
            { label: "ii", text: "Learn about travel restrictions and regulations regarding cannabis." },
            { label: "iii", text: "Understand the logistics and financial obstacles for patients obtaining medical cannabis certification and purchasing products from dispensaries." }
        ]
      },
      {
        letter: "f",
        text: "Understand utilization and implication of toxicology screening tests for cannabis."
      },
      {
        letter: "g",
        text: "Understand the roles of multidisciplinary healthcare professionals in treating cannabis-related disorders and harm reduction."
      }
    ]
  },
  {
    id: 6,
    title: "6. Understand basic clinical management with medical cannabis.",
    shortTitle: "Clinical Management",
    description: "Dosing strategies, monitoring, interactions, pharmacokinetics, and special populations.",
    points: [
      {
        letter: "a",
        text: "Understand cannabis routes, dosing, and monitoring.",
        subPoints: [
            { label: "i", text: "Understand cannabis routes, dosing, and monitoring needed with regard to efficacy and safety." },
            { label: "ii", text: "Differentiate pharmaceutical cannabinoids from botanical sources with respect to clinical indications and dosing parameters." },
            { label: "iii", text: "Describe the effects of medical cannabis in naive versus experienced users." }
        ]
      },
      {
        letter: "b",
        text: "Describe clinical differences between THC-predominant, CBD-predominant, and CBD/THC combination products."
      },
      {
        letter: "c",
        text: "Understand potential effects from the combination of cannabinoids, terpenes, flavonoids, and other biologically active constituents."
      },
      {
        letter: "d",
        text: "Describe therapeutic drug monitoring, interactions, pharmacokinetics, titration to effect, and drug testing.",
        subPoints: [
            { label: "i", text: "Describe hepatic cytochrome p450 enzymes utilized by exogenous cannabinoids and how they impact the metabolism of commonly used medications." },
            { label: "ii", text: "Describe potential competing effects between cannabinoids and immunotherapy in cancer treatments." }
        ]
      },
      {
        letter: "e",
        text: "Understand the roles of interdisciplinary healthcare professionals in medical cannabis management."
      },
      {
        letter: "f",
        text: "Understand the use of medical cannabis in special populations:",
        subPoints: [
            { label: "i", text: "Geriatrics." },
            { label: "ii", text: "Pediatrics." },
            { label: "iii", text: "Pregnancy and lactation." },
            { label: "iv", text: "Palliative." },
            { label: "v", text: "Pre/peri-operative." }
        ]
      }
    ]
  }
];

const SAMPLE_QUIZ_EN: QuizQuestion[] = [
  {
    id: 1,
    domainId: 1,
    question: "Which of the following describes the role of the endocannabinoid system (ECS)?",
    options: [
      "It primarily functions to metabolize glucose.",
      "It regulates core physiologic functions such as stress, sleep, appetite, and pain.",
      "It is only present in humans and not other mammals.",
      "It is activated solely by exogenous plant cannabinoids."
    ],
    correctIndex: 1,
    explanation: "Competency 1.c states the ECS regulates core physiologic functions including stress, sleep, appetite, pain, and immunity."
  },
  {
    id: 2,
    domainId: 2,
    question: "What is the 'Entourage Effect'?",
    options: [
      "The side effect of dizziness when standing up too quickly.",
      "The legal implication of transporting cannabis across state lines.",
      "The enhanced biological effect resulting from the combination of cannabinoids, terpenes, and flavonoids.",
      "The process of converting THCa to THC through heat."
    ],
    correctIndex: 2,
    explanation: "Competency 2.b highlights the concept of the entourage effect as the synergy between major/minor cannabinoids, terpenes, and flavonoids."
  },
  {
    id: 3,
    domainId: 5,
    question: "Which population is specifically noted for risks regarding accidental ingestion?",
    options: [
      "Geriatric patients",
      "Pediatric and adolescent patients",
      "Patients with chronic pain",
      "Patients undergoing chemotherapy"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.iv specifically mentions pediatric and adolescent patients, including accidental ingestion, as a key risk factor."
  },
  {
    id: 4,
    domainId: 6,
    question: "Regarding drug interactions, which enzyme system is primarily involved in cannabinoid metabolism?",
    options: [
      "Renal Angiotensin System",
      "Hepatic Cytochrome p450",
      "Digestive Protease System",
      "Lymphatic Filtration"
    ],
    correctIndex: 1,
    explanation: "Competency 6.d.i requires describing hepatic cytochrome p450 enzymes utilized by exogenous cannabinoids."
  }
];

const PLANT_COMPOUNDS_EN: PlantCompound[] = [
  {
    id: 'thc',
    name: 'Delta-9-Tetrahydrocannabinol (THC)',
    category: 'cannabinoid',
    description: 'The primary psychoactive compound in cannabis. It acts as a partial agonist at CB1 and CB2 receptors.',
    therapeuticEffects: ['Analgesic', 'Anti-emetic', 'Appetite Stimulant', 'Spasticity Reduction', 'Sleep Aid'],
    commonConditions: ['Chronic Pain', 'Chemotherapy-Induced Nausea', 'Multiple Sclerosis', 'Insomnia', 'PTSD'],
    entourageRole: 'Effect modulated by CBD (reduces anxiety/intoxication) and terpenes like Myrcene (sedation).',
    boilingPoint: '157°C (315°F)'
  },
  {
    id: 'cbd',
    name: 'Cannabidiol (CBD)',
    category: 'cannabinoid',
    description: 'Non-intoxicating phytocannabinoid. Negative allosteric modulator of CB1 receptor. Anti-inflammatory and anxiolytic properties.',
    therapeuticEffects: ['Anti-inflammatory', 'Anxiolytic', 'Anti-convulsant', 'Neuroprotective'],
    commonConditions: ['Epilepsy (Dravet/Lennox-Gastaut)', 'Anxiety Disorders', 'Inflammatory Pain', 'Psychosis'],
    entourageRole: 'Mitigates THC-induced tachycardia and anxiety. Synergizes with Linalool for calming effects.',
    boilingPoint: '180°C (356°F)'
  },
  {
    id: 'cbg',
    name: 'Cannabigerol (CBG)',
    category: 'cannabinoid',
    description: 'The "mother cannabinoid" (via CBGa). Non-intoxicating. Interacts with alpha-2 adrenergic receptors.',
    therapeuticEffects: ['Antibacterial', 'Anti-inflammatory (Gut)', 'Neuroprotective', 'Glaucoma relief (IOP reduction)'],
    commonConditions: ['IBD/Crohns', 'Glaucoma', 'Bacterial Infections'],
    entourageRole: 'May enhance analgesic effects without contributing to intoxication.',
    boilingPoint: '52°C (126°F) - theoretical'
  },
  {
    id: 'myrcene',
    name: 'Myrcene',
    category: 'terpene',
    description: 'Earthy, musky aroma. Found in mangoes, hops, and thyme. The most common terpene in commercial cannabis.',
    therapeuticEffects: ['Sedative', 'Muscle Relaxant', 'Analgesic', 'Anti-inflammatory'],
    commonConditions: ['Insomnia', 'Muscle Spasms', 'Pain'],
    entourageRole: 'Increases cell membrane permeability, potentially aiding cannabinoid absorption ("Couch-lock" effect with THC).',
    boilingPoint: '167°C (334°F)'
  },
  {
    id: 'limonene',
    name: 'Limonene',
    category: 'terpene',
    description: 'Citrus aroma. Found in lemon rinds and juniper. associated with mood elevation.',
    therapeuticEffects: ['Anxiolytic', 'Antidepressant', 'Anti-fungal', 'Gastric Reflux relief'],
    commonConditions: ['Depression', 'Anxiety', 'Acid Reflux'],
    entourageRole: 'Increases serotonin and dopamine levels, potentially counteracting depressive states.',
    boilingPoint: '176°C (349°F)'
  },
  {
    id: 'pinene',
    name: 'Alpha-Pinene',
    category: 'terpene',
    description: 'Pine aroma. Found in pine needles, rosemary, basil.',
    therapeuticEffects: ['Bronchodilator', 'Anti-inflammatory', 'Memory Aid (Acetylcholinesterase inhibitor)'],
    commonConditions: ['Asthma', 'Memory Loss', 'Inflammation'],
    entourageRole: 'May counteract short-term memory impairment associated with THC.',
    boilingPoint: '155°C (311°F)'
  },
  {
    id: 'cannaflavin-a',
    name: 'Cannaflavin A',
    category: 'flavonoid',
    description: 'A flavone unique to Cannabis sativa. Research suggests it may be 30 times more potent than aspirin as an anti-inflammatory.',
    therapeuticEffects: ['Anti-inflammatory (Potent)', 'Neuroprotective', 'Antioxidant'],
    commonConditions: ['Inflammation', 'Pain', 'Neurodegenerative Conditions'],
    entourageRole: 'Synergizes with cannabinoids and terpenes to reduce systemic inflammation.',
    boilingPoint: 'Unknown'
  },
  {
    id: 'quercetin',
    name: 'Quercetin',
    category: 'flavonoid',
    description: 'A bitter pigment found in many plants including cannabis, oak, and onions. Known for antioxidant properties.',
    therapeuticEffects: ['Antioxidant', 'Antiviral', 'Anti-histamine'],
    commonConditions: ['Allergies', 'Inflammation', 'Viral infections'],
    entourageRole: 'Enhances the bioavailability of other compounds and provides general antioxidant support.',
    boilingPoint: 'Unknown'
  }
];

const PATIENT_CASES_EN: PatientCase[] = [
  {
    id: 'case-1',
    name: "Elena R.",
    age: 72,
    condition: "Osteoarthritis & Insomnia",
    tags: ["Geriatrics", "Pain", "Fall Risk"],
    history: "History of hypertension and mild balance issues. Naive to cannabis. Reports chronic knee pain (6/10) keeping her awake.",
    medications: ["Lisinopril (BP)", "Atorvastatin"],
    interactions: [
       { medication: 'Lisinopril', severity: 'Moderate', mechanism: 'Potential additive hypotensive effect.' },
       { medication: 'Atorvastatin', severity: 'Low', mechanism: 'Minor CYP3A4 competition.' }
    ],
    cannabisHistory: 'Naive',
    goals: "Reduce pain to sleep better. Wants to avoid feeling 'high' or dizzy due to fall risk.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 8, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['CBD-Dominant', 'Balanced 1:1'],
      routes: ['Sublingual (Tincture)', 'Oral (Edible/Capsule)'],
      minDose: 1,
      maxDose: 5
    },
    feedback: {
      success: "Excellent choice. For a geriatric, naive patient with fall risks, 'Start Low, Go Slow' is critical. A CBD-dominant or low-dose balanced tincture allows for precise titration and minimizes intoxication/dizziness.",
      failure: "Review Competency 6.f.i (Geriatrics). High THC doses or inhalation can cause dizziness/orthostatic hypotension, increasing fall risk. Oral/Sublingual routes with CBD-heavy ratios are safer starting points."
    },
    followUp: {
      scenario: "1 Week Follow-up: Elena reports she is sleeping better (6 hours continuous sleep), but feels 'foggy' and slightly unsteady when she wakes up to use the restroom at night. Her knee pain is manageable.",
      options: [
        { label: "Increase dose to maximize pain relief", isCorrect: false, feedback: "Incorrect. Increasing the dose would likely worsen the 'fogginess' and fall risk, which is the primary safety concern here." },
        { label: "Decrease dose or switch to earlier administration", isCorrect: true, feedback: "Correct. Reducing the dose or taking it earlier can mitigate the hangover effect/morning grogginess, prioritizing safety (fall risk) while maintaining some benefit." },
        { label: "Add a THC-dominant vape for breakthrough pain", isCorrect: false, feedback: "Contraindicated. Inhalation and high THC significantly increase fall risk and dizziness in geriatric patients." }
      ]
    }
  },
  {
    id: 'case-2',
    name: "Marcus T.",
    age: 35,
    condition: "Chemotherapy-Induced Nausea",
    tags: ["Oncology", "Acute Care", "Nausea"],
    history: "Undergoing cisplatin-based chemo. Zofran not fully effective. Difficulty swallowing pills due to emesis.",
    medications: ["Ondansetron", "Dexamethasone"],
    interactions: [
        { medication: 'Dexamethasone', severity: 'Moderate', mechanism: 'CYP3A4 substrate; Cannabinoids may increase serum levels.' }
    ],
    cannabisHistory: 'Experienced',
    goals: "Immediate relief from nausea to enable eating.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 9, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['THC-Dominant', 'Balanced 1:1'],
      routes: ['Inhalation (Vaporized)', 'Sublingual (Tincture)'],
      minDose: 5,
      maxDose: 15
    },
    feedback: {
      success: "Correct. For acute CINV (Nausea/Vomiting), rapid onset is needed. Inhalation or sublingual routes bypass the gut (which is compromised). THC is the primary anti-emetic agent here.",
      failure: "Review Competency 4.a.iv (Oncologic). Oral routes are poor choices for active vomiting. CBD alone is less effective for nausea than THC. Immediate relief is the priority."
    },
    followUp: {
      scenario: "2 Week Follow-up: Marcus reports significant improvement in nausea and is gaining weight. However, he feels too sedated during the day to work remotely.",
      options: [
        { label: "Switch to a CBD-isolate product", isCorrect: false, feedback: "Incorrect. While less sedating, CBD isolate is likely insufficient for severe chemotherapy-induced nausea." },
        { label: "Add a terpene-rich Sativa strain (e.g., Limonene/Pinene) or lower daytime THC dose", isCorrect: true, feedback: "Correct. Modulating the profile with uplifting terpenes (Limonene) or titrating the THC dose down during the day can help manage sedation while retaining anti-emetic effects." },
        { label: "Discontinue cannabis immediately", isCorrect: false, feedback: "Incorrect. Sudden cessation would likely cause the severe nausea to return, impacting his nutrition and chemo adherence." }
      ]
    }
  },
  {
    id: 'case-3',
    name: "Sarah J.",
    age: 28,
    condition: "General Anxiety Disorder",
    tags: ["Psychiatry", "Anxiety", "Interactions"],
    history: "Reports high daily anxiety. Historically sensitive to THC (reports panic attacks).",
    medications: ["Sertraline (SSRI)"],
    interactions: [
        { medication: 'Sertraline', severity: 'High', mechanism: 'CYP2C19/CYP3A4 Inhibition. CBD may significantly increase Sertraline levels, risking serotonin syndrome.' }
    ],
    cannabisHistory: 'Experienced',
    goals: "Calm anxiety without psychoactivity or panic.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 7, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['CBD-Dominant', 'CBD-Isolate'],
      routes: ['Sublingual (Tincture)', 'Oral (Edible/Capsule)'],
      minDose: 10,
      maxDose: 50
    },
    feedback: {
      success: "Spot on. Patients with THC sensitivity or anxiety history should avoid high THC. CBD is anxiolytic and non-intoxicating. Note the potential CYP450 interaction with Sertraline (Competency 6.d.i).",
      failure: "Caution. THC can exacerbate anxiety in sensitive individuals (biphasic effect). A CBD-dominant preparation is indicated. Always check interactions with SSRIs."
    },
    followUp: {
      scenario: "1 Month Follow-up: Sarah feels calmer but reports her Sertraline seems 'stronger' or she feels more side effects from it.",
      options: [
        { label: "Ignore it, it's unrelated", isCorrect: false, feedback: "Incorrect. This is a classic drug interaction sign." },
        { label: "Check CYP450 interactions; CBD may be inhibiting metabolism of Sertraline", isCorrect: true, feedback: "Correct. CBD inhibits CYP2C19 and CYP3A4, potentially increasing serum levels of Sertraline. Dose adjustment of the SSRI (under psychiatrist supervision) or CBD may be needed." },
        { label: "Increase THC to balance it out", isCorrect: false, feedback: "Incorrect. THC will not fix a metabolic enzyme interaction and may worsen anxiety." }
      ]
    }
  }
];

// --- GERMAN DATA ---

const COMPETENCIES_DE: CompetencyDomain[] = [
  {
    id: 1,
    title: "1. Verstehen Sie die Grundlagen des Endocannabinoid-Systems.",
    shortTitle: "Endocannabinoid-System",
    description: "Grundlegendes Wissen über Rezeptoren, Produktion, Funktion und physiologische Regulation.",
    points: [
      {
        letter: "a",
        text: "Verstehen Sie die grundlegende Funktion und Verteilung der wichtigsten Cannabinoid-Rezeptoren."
      },
      {
        letter: "b",
        text: "Beschreiben Sie die Grundlagen der Endocannabinoid-Produktion, -Funktion, Enzymhemmung und -aktivierung sowie die Aufrechterhaltung des Endocannabinoid-Tonus."
      },
      {
        letter: "c",
        text: "Verstehen Sie die Rolle des Endocannabinoid-Systems bei der Regulierung zentraler physiologischer Funktionen (z. B. Stress, Schlaf, Appetit, Schmerz, Immunität)."
      }
    ]
  },
  {
    id: 2,
    title: "2. Beschreiben Sie die Hauptbestandteile der Cannabispflanze und ihre biologischen Wirkungen.",
    shortTitle: "Pflanzenpharmakologie",
    description: "Botanik, Haupt-/Neben-Cannabinoide, Terpene, der Entourage-Effekt und pharmazeutische Unterschiede.",
    points: [
      {
        letter: "a",
        text: "Verstehen Sie Pflanzenteile von Cannabis (z. B. Stängel, Blätter, Blüten, Trichome), Spezies, Kultivare und deren Verwendung in Medizin und Industrie."
      },
      {
        letter: "b",
        text: "Verstehen Sie die grundlegenden Wirkungen von Haupt- und Neben-Cannabinoiden, Terpenen und Flavonoiden, einschließlich des Konzepts des Entourage-Effekts sowie der aktuellen Evidenz für entzündungshemmende, immunologische, metabolische und neuroprotektive Eigenschaften von Cannabinoiden."
      },
      {
        letter: "c",
        text: "Lernen Sie, wie sich pharmazeutische und auf der ganzen Pflanze basierende Cannabisprodukte unterscheiden."
      },
      {
        letter: "d",
        text: "Verstehen Sie die Wirkung verschiedener Cannabinoide auf das Endocannabinoid-System."
      }
    ]
  },
  {
    id: 3,
    title: "3. Überprüfen Sie die rechtliche und regulatorische Landschaft von Cannabis in den USA (und global).",
    shortTitle: "Recht & Regulierung",
    description: "Geschichte, Prohibition, struktureller Rassismus, Konflikte zwischen Bund/Ländern und Zugangsprobleme.",
    points: [
      {
        letter: "a",
        text: "Überprüfen Sie Geschichte und Gesetzgebung in Bezug auf Cannabis.",
        subPoints: [
          { label: "i", text: "Beschreiben Sie die historische Landschaft der Cannabispolitik und Prohibition." },
          { label: "ii", text: "Lernen Sie, wie die Drogenpolitik marginalisierte Gemeinschaften unverhältnismäßig betroffen hat." },
          { label: "iii", text: "Erkennen Sie die Auswirkungen der Bundespolitik auf die Cannabisforschung." }
        ]
      },
      {
        letter: "b",
        text: "Überprüfen Sie Vorschriften bezüglich medizinischem Cannabis und dem Gebrauch durch Erwachsene.",
        subPoints: [
          { label: "i", text: "Diskutieren Sie ethische Überlegungen für medizinisches Fachpersonal." },
          { label: "ii", text: "Verstehen Sie, was Patienten für den Zugang zu medizinischem Cannabis qualifiziert." },
          { label: "iii", text: "Beschreiben Sie Zugangsherausforderungen für qualifizierte Patienten." },
          { label: "iv", text: "Überprüfen Sie Betäubungsmittelgesetze." },
          { label: "v", text: "Überprüfen Sie staatliche und lokale Vorschriften." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4. Beschreiben Sie die Evidenzbasis für Gesundheitszustände, die häufig mit Cannabis behandelt werden.",
    shortTitle: "Evidenzbasis",
    description: "Evidenzstärke für Symptome/Zustände, FDA-zugelassene Medikamente und Opioid-Einsparung.",
    points: [
      {
        letter: "a",
        text: "Beschreiben Sie die häufigsten Symptome und Zustände, die mit medizinischem Cannabis behandelt werden, und die zugehörige Evidenzstärke, einschließlich:",
        subPoints: [
            { label: "i", text: "Palliativmedizin." },
            { label: "ii", text: "Gastrointestinale Störungen und Symptome." },
            { label: "iii", text: "Neurodegenerative und neurologische Störungen, z. B. Anfälle und Neuropathie." },
            { label: "iv", text: "Onkologische Erkrankungen." },
            { label: "v", text: "Schmerzzustände." },
            { label: "vi", text: "Psychiatrische Störungen und Symptome." }
        ]
      },
      {
        letter: "b",
        text: "Beschreiben Sie zugelassene Cannabinoid-Medikamente und deren Indikationen."
      },
      {
        letter: "c",
        text: "Diskutieren Sie die Rolle, die Cannabis potenziell bei der Beendigung oder Reduzierung von Medikamenten (z. B. Opioide und Benzodiazepine) spielen kann."
      }
    ]
  },
  {
    id: 5,
    title: "5. Verstehen Sie die potenziellen Risiken des medizinischen Cannabisgebrauchs.",
    shortTitle: "Risikobewertung",
    description: "Nebenwirkungen, Gebrauchsstörungen, Kontamination, berufliche Risiken und Wechselwirkungen.",
    points: [
      {
        letter: "a",
        text: "Beschreiben Sie akute und chronische Nebenwirkungen des Cannabiskonsums in Bezug auf:",
        subPoints: [
            { label: "i", text: "Physische und psychische Nebenwirkungen." },
            { label: "ii", text: "Fahren und Bedienen von Maschinen." },
            { label: "iii", text: "Routenspezifische Nebenwirkungen." },
            { label: "iv", text: "Pädiatrische und jugendliche Patienten, einschließlich versehentlicher Einnahme." },
            { label: "v", text: "Schwangere und stillende Frauen und deren Säuglinge." },
            { label: "vi", text: "Ältere Erwachsene." }
        ]
      },
      {
        letter: "b",
        text: "Verstehen Sie cannabisbedingte Störungen und anderen Substanzmissbrauch.",
        subPoints: [
            { label: "i", text: "Beschreiben Sie Cannabiskonsumstörung, Entzugssyndrom, Cannabinoid-Hyperemesis-Syndrom." },
            { label: "ii", text: "Seien Sie vertraut mit Diagnosekriterien (DSM-5/ICD-10)." },
            { label: "iii", text: "Beschreiben Sie Testung und Management von Cannabis-Überdosis und -Intoxikation." }
        ]
      },
      {
        letter: "c",
        text: "Überprüfen Sie Bedenken hinsichtlich der Qualität der medizinischen Cannabisproduktion (Kontaminationen).",
      },
      {
        letter: "d",
        text: "Lernen Sie die Risiken neuer synthetischer Cannabinoide kennen (z. B. Delta-8 THC)."
      },
      {
        letter: "e",
        text: "Fassen Sie die finanziellen und beruflichen Auswirkungen zusammen.",
      },
      {
        letter: "f",
        text: "Verstehen Sie Nutzen und Implikation von Toxikologie-Screening-Tests."
      },
      {
        letter: "g",
        text: "Verstehen Sie die Rollen multidisziplinärer Fachkräfte."
      }
    ]
  },
  {
    id: 6,
    title: "6. Verstehen Sie das grundlegende klinische Management mit medizinischem Cannabis.",
    shortTitle: "Klinisches Management",
    description: "Dosierungsstrategien, Überwachung, Interaktionen, Pharmakokinetik und spezielle Populationen.",
    points: [
      {
        letter: "a",
        text: "Verstehen Sie Cannabis-Routen, Dosierung und Überwachung.",
        subPoints: [
            { label: "i", text: "Verstehen Sie Routen, Dosierung und Überwachung hinsichtlich Wirksamkeit und Sicherheit." },
            { label: "ii", text: "Unterscheiden Sie pharmazeutische Cannabinoide von botanischen Quellen." },
            { label: "iii", text: "Beschreiben Sie die Effekte bei naiven vs. erfahrenen Nutzern." }
        ]
      },
      {
        letter: "b",
        text: "Beschreiben Sie klinische Unterschiede zwischen THC-dominanten, CBD-dominanten und Kombinationsprodukten."
      },
      {
        letter: "c",
        text: "Verstehen Sie potenzielle Effekte der Kombination von Cannabinoiden, Terpenen und Flavonoiden."
      },
      {
        letter: "d",
        text: "Beschreiben Sie therapeutisches Drug Monitoring, Interaktionen und Pharmakokinetik.",
        subPoints: [
            { label: "i", text: "Beschreiben Sie CYP450-Enzyme und deren Einfluss auf den Metabolismus." },
            { label: "ii", text: "Beschreiben Sie konkurrierende Effekte bei Immuntherapien." }
        ]
      },
      {
        letter: "e",
        text: "Verstehen Sie die Rollen interdisziplinärer Fachkräfte."
      },
      {
        letter: "f",
        text: "Verstehen Sie den Gebrauch in speziellen Populationen:",
        subPoints: [
            { label: "i", text: "Geriatrie." },
            { label: "ii", text: "Pädiatrie." },
            { label: "iii", text: "Schwangerschaft und Stillzeit." },
            { label: "iv", text: "Palliativmedizin." },
            { label: "v", text: "Prä-/Perioperativ." }
        ]
      }
    ]
  }
];

const SAMPLE_QUIZ_DE: QuizQuestion[] = [
  {
    id: 1,
    domainId: 1,
    question: "Welche der folgenden Aussagen beschreibt die Rolle des Endocannabinoid-Systems (ECS)?",
    options: [
      "Es dient primär der Verstoffwechselung von Glukose.",
      "Es reguliert physiologische Kernfunktionen wie Stress, Schlaf, Appetit und Schmerz.",
      "Es kommt nur bei Menschen und nicht bei anderen Säugetieren vor.",
      "Es wird ausschließlich durch exogene Pflanzen-Cannabinoide aktiviert."
    ],
    correctIndex: 1,
    explanation: "Kompetenz 1.c besagt, dass das ECS physiologische Kernfunktionen wie Stress, Schlaf, Appetit, Schmerz und Immunität reguliert."
  },
  {
    id: 2,
    domainId: 2,
    question: "Was ist der 'Entourage-Effekt'?",
    options: [
      "Die Nebenwirkung von Schwindel beim zu schnellen Aufstehen.",
      "Die rechtliche Implikation beim Transport von Cannabis über Staatsgrenzen.",
      "Der verstärkte biologische Effekt durch die Kombination von Cannabinoiden, Terpenen und Flavonoiden.",
      "Der Prozess der Umwandlung von THCa zu THC durch Hitze."
    ],
    correctIndex: 2,
    explanation: "Kompetenz 2.b hebt das Konzept des Entourage-Effekts als Synergie zwischen Haupt-/Nebencannabinoiden, Terpenen und Flavonoiden hervor."
  },
  {
    id: 3,
    domainId: 5,
    question: "Welche Population ist besonders für Risiken bezüglich versehentlicher Einnahme bekannt?",
    options: [
      "Geriatrische Patienten",
      "Pädiatrische und jugendliche Patienten",
      "Patienten mit chronischen Schmerzen",
      "Patienten unter Chemotherapie"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.iv erwähnt spezifisch pädiatrische und jugendliche Patienten, einschließlich versehentlicher Einnahme, als Hauptrisikofaktor."
  },
  {
    id: 4,
    domainId: 6,
    question: "Welches Enzymsystem ist primär am Cannabinoid-Stoffwechsel beteiligt?",
    options: [
      "Renin-Angiotensin-System",
      "Hepatisches Cytochrom P450",
      "Verdauungsproteasen",
      "Lymphatische Filtration"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 6.d.i erfordert die Beschreibung der hepatischen Cytochrom-P450-Enzyme, die von exogenen Cannabinoiden genutzt werden."
  }
];

const PLANT_COMPOUNDS_DE: PlantCompound[] = [
  {
    id: 'thc',
    name: 'Delta-9-Tetrahydrocannabinol (THC)',
    category: 'cannabinoid',
    description: 'Die primäre psychoaktive Verbindung in Cannabis. Wirkt als partieller Agonist an CB1- und CB2-Rezeptoren.',
    therapeuticEffects: ['Analgetisch', 'Anti-emetisch', 'Appetitanregend', 'Spastik-Reduktion', 'Schlafhilfe'],
    commonConditions: ['Chronische Schmerzen', 'Chemotherapie-induzierte Übelkeit', 'Multiple Sklerose', 'Schlaflosigkeit', 'PTBS'],
    entourageRole: 'Wirkung moduliert durch CBD (reduziert Angst/Rausch) und Terpene wie Myrcen (Sedierung).',
    boilingPoint: '157°C (315°F)'
  },
  {
    id: 'cbd',
    name: 'Cannabidiol (CBD)',
    category: 'cannabinoid',
    description: 'Nicht berauschendes Phytocannabinoid. Negativer allosterischer Modulator des CB1-Rezeptors. Entzündungshemmende und anxiolytische Eigenschaften.',
    therapeuticEffects: ['Entzündungshemmend', 'Anxiolytisch', 'Antikonvulsiv', 'Neuroprotektiv'],
    commonConditions: ['Epilepsie (Dravet/Lennox-Gastaut)', 'Angststörungen', 'Entzündungsschmerzen', 'Psychose'],
    entourageRole: 'Mildert THC-induzierte Tachykardie und Angst. Synergiert mit Linalool für beruhigende Effekte.',
    boilingPoint: '180°C (356°F)'
  },
  {
    id: 'cbg',
    name: 'Cannabigerol (CBG)',
    category: 'cannabinoid',
    description: 'Die "Mutter der Cannabinoide" (via CBGa). Nicht berauschend. Interagiert mit Alpha-2-Adrenozeptoren.',
    therapeuticEffects: ['Antibakteriell', 'Entzündungshemmend (Darm)', 'Neuroprotektiv', 'Glaukom-Linderung'],
    commonConditions: ['IBD/Morbus Crohn', 'Glaukom', 'Bakterielle Infektionen'],
    entourageRole: 'Kann analgetische Effekte verstärken, ohne zur Intoxikation beizutragen.',
    boilingPoint: '52°C (126°F) - theoretisch'
  },
  {
    id: 'myrcene',
    name: 'Myrcen',
    category: 'terpene',
    description: 'Erdiges, moschusartiges Aroma. In Mangos, Hopfen und Thymian. Das häufigste Terpen in kommerziellem Cannabis.',
    therapeuticEffects: ['Sedativ', 'Muskelrelaxans', 'Analgetisch', 'Entzündungshemmend'],
    commonConditions: ['Schlaflosigkeit', 'Muskelkrämpfe', 'Schmerzen'],
    entourageRole: 'Erhöht die Zellmembranpermeabilität, was potenziell die Cannabinoidaufnahme unterstützt ("Couch-Lock"-Effekt mit THC).',
    boilingPoint: '167°C (334°F)'
  },
  {
    id: 'limonene',
    name: 'Limonen',
    category: 'terpene',
    description: 'Zitrusaroma. In Zitronenschalen und Wacholder. Assoziiert mit Stimmungsaufhellung.',
    therapeuticEffects: ['Anxiolytisch', 'Antidepressiv', 'Antimykotisch', 'Reflux-Linderung'],
    commonConditions: ['Depression', 'Angst', 'Sodbrennen'],
    entourageRole: 'Erhöht Serotonin- und Dopaminspiegel, wirkt potenziell depressiven Zuständen entgegen.',
    boilingPoint: '176°C (349°F)'
  },
  {
    id: 'pinene',
    name: 'Alpha-Pinen',
    category: 'terpene',
    description: 'Kiefernaroma. In Kiefernnadeln, Rosmarin, Basilikum.',
    therapeuticEffects: ['Bronchodilatator', 'Entzündungshemmend', 'Gedächtnishilfe (Acetylcholinesterase-Hemmer)'],
    commonConditions: ['Asthma', 'Gedächtnisverlust', 'Entzündung'],
    entourageRole: 'Kann kurzzeitige Gedächtnisstörungen durch THC entgegenwirken.',
    boilingPoint: '155°C (311°F)'
  },
  {
    id: 'cannaflavin-a',
    name: 'Cannaflavin A',
    category: 'flavonoid',
    description: 'Ein für Cannabis sativa einzigartiges Flavon. Forschung deutet darauf hin, dass es 30-mal stärker entzündungshemmend als Aspirin sein könnte.',
    therapeuticEffects: ['Entzündungshemmend (Potent)', 'Neuroprotektiv', 'Antioxidativ'],
    commonConditions: ['Entzündung', 'Schmerzen', 'Neurodegenerative Erkrankungen'],
    entourageRole: 'Synergiert mit Cannabinoiden und Terpenen zur Reduktion systemischer Entzündungen.',
    boilingPoint: 'Unbekannt'
  },
  {
    id: 'quercetin',
    name: 'Quercetin',
    category: 'flavonoid',
    description: 'Ein bitteres Pigment in vielen Pflanzen, inkl. Cannabis und Eichen. Bekannt für antioxidative Eigenschaften.',
    therapeuticEffects: ['Antioxidativ', 'Antiviral', 'Antihistamin'],
    commonConditions: ['Allergien', 'Entzündungen', 'Virusinfektionen'],
    entourageRole: 'Verbessert die Bioverfügbarkeit anderer Verbindungen und bietet allgemeine antioxidative Unterstützung.',
    boilingPoint: 'Unbekannt'
  }
];

const PATIENT_CASES_DE: PatientCase[] = [
  {
    id: 'case-1',
    name: "Elena R.",
    age: 72,
    condition: "Osteoarthritis & Schlaflosigkeit",
    tags: ["Geriatrie", "Schmerz", "Sturzrisiko"],
    history: "Anamnese von Hypertonie und leichten Gleichgewichtsproblemen. Cannabis-naiv. Berichtet über chronische Knieschmerzen (6/10), die sie wach halten.",
    medications: ["Lisinopril (Blutdruck)", "Atorvastatin"],
    interactions: [
       { medication: 'Lisinopril', severity: 'Moderate', mechanism: 'Potenziell additiver hypotensiver Effekt.' },
       { medication: 'Atorvastatin', severity: 'Low', mechanism: 'Geringfügige CYP3A4-Konkurrenz.' }
    ],
    cannabisHistory: 'Naive',
    goals: "Schmerzen reduzieren, um besser zu schlafen. Möchte nicht 'high' oder schwindelig sein (Sturzrisiko).",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 8, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['CBD-Dominant', 'Balanced 1:1'],
      routes: ['Sublingual (Tincture)', 'Oral (Edible/Capsule)'],
      minDose: 1,
      maxDose: 5
    },
    feedback: {
      success: "Exzellente Wahl. Für eine geriatrische, naive Patientin mit Sturzrisiko ist 'Start Low, Go Slow' kritisch. Eine CBD-dominante oder niedrig dosierte 1:1-Tinktur ermöglicht präzise Titration und minimiert Intoxikation/Schwindel.",
      failure: "Überprüfen Sie Kompetenz 6.f.i (Geriatrie). Hohe THC-Dosen oder Inhalation können Schwindel/orthostatische Hypotonie verursachen und das Sturzrisiko erhöhen. Orale/Sublinguale Routen mit CBD-lastigen Verhältnissen sind sicherere Startpunkte."
    },
    followUp: {
      scenario: "1 Woche Follow-up: Elena berichtet, dass sie besser schläft (6 Std. durchgehend), sich aber 'benebelt' und leicht unsicher fühlt, wenn sie nachts aufwacht. Knieschmerzen sind handhabbar.",
      options: [
        { label: "Dosis erhöhen, um Schmerzlinderung zu maximieren", isCorrect: false, feedback: "Falsch. Dosiserhöhung würde wahrscheinlich 'Benebelung' und Sturzrisiko verschlimmern." },
        { label: "Dosis verringern oder Einnahmezeit vorverlegen", isCorrect: true, feedback: "Korrekt. Dosisreduktion oder frühere Einnahme kann den 'Hangover'-Effekt mindern und Sicherheit priorisieren, während der Nutzen erhalten bleibt." },
        { label: "THC-dominanten Vape für Durchbruchschmerzen hinzufügen", isCorrect: false, feedback: "Kontraindiziert. Inhalation und hohes THC erhöhen Sturzrisiko und Schwindel bei geriatrischen Patienten signifikant." }
      ]
    }
  },
  {
    id: 'case-2',
    name: "Marcus T.",
    age: 35,
    condition: "Chemotherapie-induzierte Übelkeit",
    tags: ["Onkologie", "Akutversorgung", "Übelkeit"],
    history: "Cisplatin-basierte Chemo. Zofran nicht voll wirksam. Schwierigkeiten beim Schlucken von Pillen wegen Emesis.",
    medications: ["Ondansetron", "Dexamethason"],
    interactions: [
        { medication: 'Dexamethason', severity: 'Moderate', mechanism: 'CYP3A4-Substrat; Cannabinoide können Serumspiegel erhöhen.' }
    ],
    cannabisHistory: 'Experienced',
    goals: "Sofortige Linderung der Übelkeit, um Essen zu ermöglichen.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 9, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['THC-Dominant', 'Balanced 1:1'],
      routes: ['Inhalation (Vaporized)', 'Sublingual (Tincture)'],
      minDose: 5,
      maxDose: 15
    },
    feedback: {
      success: "Korrekt. Für akute CINV (Übelkeit/Erbrechen) ist schneller Wirkeintritt nötig. Inhalation oder sublinguale Routen umgehen den Darm. THC ist hier das primäre anti-emetische Agens.",
      failure: "Überprüfen Sie Kompetenz 4.a.iv (Onkologie). Orale Routen sind bei aktivem Erbrechen schlecht. CBD allein ist weniger wirksam gegen Übelkeit als THC."
    },
    followUp: {
      scenario: "2 Wochen Follow-up: Marcus berichtet über signifikante Verbesserung der Übelkeit und nimmt an Gewicht zu. Er fühlt sich jedoch tagsüber zu sediert zum Arbeiten.",
      options: [
        { label: "Auf ein CBD-Isolat-Produkt wechseln", isCorrect: false, feedback: "Falsch. CBD-Isolat ist wahrscheinlich unzureichend für schwere Chemotherapie-induzierte Übelkeit." },
        { label: "Terpenreiche Sativa-Sorte (z.B. Limonen) hinzufügen oder Tages-THC-Dosis senken", isCorrect: true, feedback: "Korrekt. Modulation des Profils mit belebenden Terpenen oder Reduktion der THC-Dosis kann Sedierung managen bei Erhalt der anti-emetischen Wirkung." },
        { label: "Cannabis sofort absetzen", isCorrect: false, feedback: "Falsch. Plötzliches Absetzen würde wahrscheinlich schwere Übelkeit zurückbringen." }
      ]
    }
  },
  {
    id: 'case-3',
    name: "Sarah J.",
    age: 28,
    condition: "Generalisierte Angststörung",
    tags: ["Psychiatrie", "Angst", "Interaktionen"],
    history: "Berichtet hohe tägliche Angst. Historisch empfindlich gegenüber THC (berichtet Panikattacken).",
    medications: ["Sertralin (SSRI)"],
    interactions: [
        { medication: 'Sertralin', severity: 'High', mechanism: 'CYP2C19/CYP3A4-Inhibition. CBD kann Sertralin-Spiegel signifikant erhöhen (Serotonin-Syndrom).' }
    ],
    cannabisHistory: 'Experienced',
    goals: "Angst beruhigen ohne Psychoaktivität oder Panik.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 7, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['CBD-Dominant', 'CBD-Isolate'],
      routes: ['Sublingual (Tincture)', 'Oral (Edible/Capsule)'],
      minDose: 10,
      maxDose: 50
    },
    feedback: {
      success: "Genau. Patienten mit THC-Empfindlichkeit oder Angstanamnese sollten hohes THC meiden. CBD ist anxiolytisch und nicht berauschend. Beachten Sie die potenzielle CYP450-Interaktion mit Sertralin.",
      failure: "Vorsicht. THC kann Angst bei empfindlichen Personen verschlimmern (biphasischer Effekt). Eine CBD-dominante Zubereitung ist indiziert."
    },
    followUp: {
      scenario: "1 Monat Follow-up: Sarah fühlt sich ruhiger, berichtet aber, dass ihr Sertralin 'stärker' wirkt oder sie mehr Nebenwirkungen spürt.",
      options: [
        { label: "Ignorieren, ist nicht verbunden", isCorrect: false, feedback: "Falsch. Dies ist ein klassisches Zeichen einer Arzneimittelwechselwirkung." },
        { label: "CYP450-Interaktionen prüfen; CBD könnte Metabolismus von Sertralin hemmen", isCorrect: true, feedback: "Korrekt. Dosisanpassung des SSRI (unter ärztlicher Aufsicht) oder CBD kann nötig sein." },
        { label: "THC erhöhen zum Ausgleich", isCorrect: false, feedback: "Falsch. THC behebt keine metabolische Enzyminteraktion und kann Angst verschlimmern." }
      ]
    }
  }
];

// --- DATA ACCESSOR ---

export const getCurriculumData = (lang: 'en' | 'de') => {
  return {
    competencies: lang === 'de' ? COMPETENCIES_DE : COMPETENCIES_EN,
    quiz: lang === 'de' ? SAMPLE_QUIZ_DE : SAMPLE_QUIZ_EN,
    plantCompounds: lang === 'de' ? PLANT_COMPOUNDS_DE : PLANT_COMPOUNDS_EN,
    patientCases: lang === 'de' ? PATIENT_CASES_DE : PATIENT_CASES_EN
  };
};

// Default export for backward compatibility if needed, though mostly unused now
export const COMPETENCIES = COMPETENCIES_EN;
export const SAMPLE_QUIZ = SAMPLE_QUIZ_EN;
export const PLANT_COMPOUNDS = PLANT_COMPOUNDS_EN;
export const PATIENT_CASES = PATIENT_CASES_EN;

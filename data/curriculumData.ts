
import { CompetencyDomain, QuizQuestion, PlantCompound, PatientCase } from '../types';

// --- ENGLISH DATA ---

const COMPETENCIES_EN: CompetencyDomain[] = [
  {
    id: 1,
    title: "1. Understand the basics of the endocannabinoid system.",
    shortTitle: "Endocannabinoid System",
    description: "Foundational knowledge regarding receptors, production, function, and physiological regulation of the endocannabinoid system (ECS) — one of the most widespread neuromodulatory networks in mammalian physiology.",
    learningObjectives: [
      "Identify the two primary cannabinoid receptors (CB1, CB2) and their tissue distribution.",
      "Explain the synthesis, release, and degradation of key endocannabinoids (AEA, 2-AG).",
      "Describe how the ECS modulates pain, immune function, mood, appetite, and sleep.",
      "Recognize the concept of 'endocannabinoid tone' and its clinical relevance."
    ],
    keyTakeaways: [
      "The ECS is a lipid-based retrograde signaling system active throughout the body.",
      "CB1 predominates in the CNS; CB2 predominates in immune tissues — but both are widely expressed.",
      "Endocannabinoid tone reflects baseline ECS activity and may underlie conditions like migraine, IBS, and fibromyalgia (Clinical Endocannabinoid Deficiency hypothesis).",
      "Pharmacological modulation of the ECS is the mechanistic basis for all cannabinoid therapeutics."
    ],
    points: [
      {
        letter: "a",
        text: "Understand the basic function and distribution of main cannabinoid receptors (CB1 and CB2), including their coupling to G-proteins and downstream signaling cascades.",
        clinicalPearl: "CB1 inverse agonist rimonabant was withdrawn (2008) due to psychiatric adverse events — illustrating why CB1 receptor distribution in limbic circuits matters clinically.",
        evidenceLevel: "Level 2a – Narrative review of receptor pharmacology",
        citation: "Zou S, Kumar U. Cannabinoid receptors and the endocannabinoid system: signaling and function in the central nervous system. Int J Mol Sci. 2018;19(3):833.",
        subPoints: [
          {
            label: "i",
            text: "CB1 receptors: Predominantly expressed in the central nervous system (cortex, basal ganglia, hippocampus, cerebellum, hypothalamus) and peripheral tissues (adipose, liver, GI tract). Coupled to Gi/o proteins — inhibit adenylyl cyclase, reduce cAMP, modulate ion channels (activate GIRK, inhibit VGCC).",
            evidenceLevel: "Level 2a",
            citation: "Mackie K. Cannabinoid receptors: where they are and what they do. J Neuroendocrinol. 2008;20 Suppl 1:10-14."
          },
          {
            label: "ii",
            text: "CB2 receptors: Primarily found on immune cells (microglia, macrophages, B-cells, T-cells, NK cells), spleen, tonsils, and bone marrow. Also expressed at lower levels in CNS neurons (brainstem, cortex). Activation modulates cytokine release, immune cell migration, and neuroinflammation.",
            evidenceLevel: "Level 2a",
            citation: "Turcotte C, Blanchet MR, Laviolette M, Bhilement N. The CB2 receptor and its role as a regulator of inflammation. Cell Mol Life Sci. 2016;73(23):4449-4470."
          },
          {
            label: "iii",
            text: "Beyond CB1/CB2: Emerging evidence for cannabinoid activity at GPR55 ('CB3 candidate'), TRPV1 (vanilloid receptor), PPARγ (nuclear receptor), and 5-HT1A (serotonin receptor) — expanding the 'cannabinoid receptorome'.",
            evidenceLevel: "Level 3 – Preclinical + early translational",
            citation: "Morales P, Reggio PH. An update on non-CB1, non-CB2 cannabinoid related G-protein-coupled receptors. Cannabis Cannabinoid Res. 2017;2(1):265-273."
          }
        ]
      },
      {
        letter: "b",
        text: "Describe the basics of endocannabinoid production, function, enzyme inhibition, and activation — including how endocannabinoid tone is maintained through on-demand synthesis and rapid degradation.",
        clinicalPearl: "FAAH inhibitors (e.g., PF-04457845) are in clinical trials for PTSD and cannabis use disorder — targeting endocannabinoid tone is a growing pharmacological strategy.",
        evidenceLevel: "Level 1b – Systematic reviews of ECS biochemistry",
        citation: "Lu HC, Mackie K. Review of the endocannabinoid system. Biol Psychiatry Cogn Neurosci Neuroimaging. 2021;6(6):607-615.",
        subPoints: [
          {
            label: "i",
            text: "Anandamide (AEA): Synthesized on-demand from membrane phospholipid N-arachidonoyl phosphatidylethanolamine (NAPE) by NAPE-PLD. Partial agonist at CB1, weaker at CB2. Also activates TRPV1. Degraded primarily by fatty acid amide hydrolase (FAAH).",
            evidenceLevel: "Level 2a",
            citation: "Devane WA et al. Isolation and structure of a brain constituent that binds to the cannabinoid receptor. Science. 1992;258(5090):1946-1949."
          },
          {
            label: "ii",
            text: "2-Arachidonoylglycerol (2-AG): The most abundant endocannabinoid in the brain. Synthesized by diacylglycerol lipase (DAGLα/β) from diacylglycerol. Full agonist at both CB1 and CB2. Degraded predominantly by monoacylglycerol lipase (MAGL), with contributions from ABHD6 and ABHD12.",
            evidenceLevel: "Level 2a",
            citation: "Sugiura T et al. 2-Arachidonoylglycerol: a possible endogenous cannabinoid receptor ligand in brain. Biochem Biophys Res Commun. 1995;215(1):89-97."
          },
          {
            label: "iii",
            text: "Retrograde signaling: Endocannabinoids are synthesized postsynaptically and travel backward across the synapse to activate presynaptic CB1 receptors, suppressing neurotransmitter release (both excitatory and inhibitory). This underlies depolarization-induced suppression of inhibition (DSI) and excitation (DSE).",
            evidenceLevel: "Level 1b",
            citation: "Kano M et al. Endocannabinoid-mediated control of synaptic transmission. Physiol Rev. 2009;89(1):309-380."
          },
          {
            label: "iv",
            text: "Endocannabinoid tone: The balance of synthesis (NAPE-PLD, DAGL) and degradation (FAAH, MAGL) enzymes determines baseline ECS signaling. The 'Clinical Endocannabinoid Deficiency' (CED) theory proposes that reduced tone may underlie migraine, fibromyalgia, and irritable bowel syndrome.",
            evidenceLevel: "Level 3 – Hypothesis with growing clinical support",
            citation: "Russo EB. Clinical endocannabinoid deficiency reconsidered. Cannabis Cannabinoid Res. 2016;1(1):154-165."
          }
        ]
      },
      {
        letter: "c",
        text: "Understand the role of the endocannabinoid system in regulating core physiologic functions — including pain processing, immune modulation, stress/anxiety, appetite/metabolism, sleep, and neuroprotection.",
        clinicalPearl: "The ECS modulates virtually every physiological system, which explains both the broad therapeutic potential of cannabinoids and their broad side-effect profile.",
        evidenceLevel: "Level 1a – Multiple systematic reviews",
        citation: "Pacher P, Bátkai S, Kunos G. The endocannabinoid system as an emerging target of pharmacotherapy. Pharmacol Rev. 2006;58(3):389-462.",
        subPoints: [
          {
            label: "i",
            text: "Pain: ECS modulates nociception at peripheral, spinal, and supraspinal levels. CB1 activation in dorsal horn and PAG suppresses ascending pain signals. Peripheral CB2 activation reduces inflammatory pain mediators.",
            evidenceLevel: "Level 1a",
            citation: "Woodhams SG et al. The role of the endocannabinoid system in pain. Handb Exp Pharmacol. 2015;227:119-143."
          },
          {
            label: "ii",
            text: "Immune function: CB2 activation on immune cells modulates cytokine release (reduces TNF-α, IL-1β, IL-6), inhibits immune cell migration, and shifts T-helper balance from Th1 toward Th2. Microglial CB2 activation attenuates neuroinflammation.",
            evidenceLevel: "Level 2a",
            citation: "Nagarkatti P et al. Cannabinoids as novel anti-inflammatory drugs. Future Med Chem. 2009;1(7):1333-1349."
          },
          {
            label: "iii",
            text: "Stress and anxiety: AEA signaling in the amygdala and prefrontal cortex regulates the stress response (HPA axis). Acute stress rapidly mobilizes 2-AG (anxiolytic) while chronic stress depletes AEA (anxiogenic). CB1 knockout mice show enhanced anxiety and impaired fear extinction.",
            evidenceLevel: "Level 2b",
            citation: "Hill MN et al. Endogenous cannabinoid signaling is essential for stress adaptation. Proc Natl Acad Sci. 2010;107(20):9406-9411."
          },
          {
            label: "iv",
            text: "Appetite and metabolism: Hypothalamic CB1 activation stimulates appetite (orexigenic). Peripheral CB1 in liver and adipose tissue influences lipogenesis, insulin sensitivity, and energy storage. CB1 antagonism reduces food intake and body weight (cf. rimonabant).",
            evidenceLevel: "Level 1b",
            citation: "Di Marzo V et al. Leptin-regulated endocannabinoids are involved in maintaining food intake. Nature. 2001;410(6830):822-825."
          },
          {
            label: "v",
            text: "Sleep: AEA increases adenosine levels in the basal forebrain, promoting NREM sleep. 2-AG levels fluctuate with circadian rhythm. THC acutely decreases sleep latency but may suppress REM sleep with chronic use; CBD (≥160 mg) may increase total sleep time.",
            evidenceLevel: "Level 2b",
            citation: "Kesner AJ, Lovinger DM. Cannabinoids, endocannabinoids and sleep. Front Mol Neurosci. 2020;13:125."
          },
          {
            label: "vi",
            text: "Neuroprotection: ECS activation reduces excitotoxicity (glutamate overflow), oxidative stress, and neuroinflammation. Relevant in traumatic brain injury, multiple sclerosis, Parkinson's, and Alzheimer's disease models. Both CB1 and CB2 pathways are implicated.",
            evidenceLevel: "Level 2b – Mostly preclinical with emerging clinical data",
            citation: "Fernández-Ruiz J et al. Cannabinoids as neuroprotective agents. In: Handbook of Cannabis. Oxford Univ Press; 2014:363-379."
          }
        ]
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
  },
  // --- Domain 5: Risk Assessment (15 questions, progressive difficulty) ---
  {
    id: 5,
    domainId: 5,
    question: "Which of the following is the MOST common acute side effect of THC-dominant cannabis?",
    options: [
      "Seizures",
      "Tachycardia and anxiety",
      "Renal failure",
      "Hyperglycemia"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.i: THC commonly causes tachycardia, anxiety, dizziness, and dry mouth acutely. Seizures and organ failure are not typical THC effects. (Volkow ND et al. NEJM. 2014;370:2219-2227.)"
  },
  {
    id: 6,
    domainId: 5,
    question: "Cannabis smoke exposure is associated with which respiratory effect?",
    options: [
      "No respiratory effects whatsoever",
      "Chronic bronchitis symptoms (cough, phlegm, wheeze)",
      "Pulmonary fibrosis in most users",
      "Improved lung function via bronchodilation"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.iii: Smoked cannabis is associated with chronic bronchitis symptoms. Vaporization reduces but does not eliminate respiratory irritation. (Tashkin DP. Ann Am Thorac Soc. 2013;10(3):239-247.)"
  },
  {
    id: 7,
    domainId: 5,
    question: "How long after inhaled cannabis use is driving ability significantly impaired?",
    options: [
      "10 minutes only",
      "2–4 hours (up to 6 for naive users)",
      "Exactly 24 hours",
      "Cannabis does not impair driving"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.ii: Acute THC impairment of psychomotor function lasts 2–4 hours after inhalation, longer in naive users. (Hartman RL, Huestis MA. Clin Chem. 2013;59(3):478-492.)"
  },
  {
    id: 8,
    domainId: 5,
    question: "According to DSM-5, which is a criterion for Cannabis Use Disorder?",
    options: [
      "Using cannabis at least once",
      "Persistent desire or unsuccessful efforts to cut down or control use",
      "Developing any tolerance",
      "Experiencing euphoria"
    ],
    correctIndex: 1,
    explanation: "Competency 5.b.i–ii: DSM-5 criteria for CUD include persistent desire to cut down, continued use despite problems, tolerance, withdrawal, and craving. Single use or euphoria alone do not qualify. (APA. DSM-5-TR. 2022.)"
  },
  {
    id: 9,
    domainId: 5,
    question: "What are the hallmark symptoms of Cannabinoid Hyperemesis Syndrome (CHS)?",
    options: [
      "Weight gain and constipation",
      "Cyclic vomiting, abdominal pain, and compulsive hot bathing",
      "Chronic diarrhea and dehydration",
      "Psychosis and seizures"
    ],
    correctIndex: 1,
    explanation: "Competency 5.b.i: CHS presents with cyclic nausea/vomiting, abdominal pain, and relief from hot showers, typically in chronic heavy users. Cessation is the definitive treatment. (Sorensen CJ et al. J Med Toxicol. 2017;13(1):71-87.)"
  },
  {
    id: 10,
    domainId: 5,
    question: "What is the primary concern regarding cannabis use during pregnancy?",
    options: [
      "Increased maternal appetite",
      "Association with low birth weight, preterm birth, and potential neurodevelopmental effects",
      "Cannabis is proven safe in pregnancy",
      "It reduces morning sickness without risk"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.v: Cannabis use in pregnancy is associated with lower birth weight, preterm birth, and may affect fetal brain development. ACOG and AAP recommend against use during pregnancy/lactation. (Corsi DJ et al. JAMA. 2019;322(2):145-152.)"
  },
  {
    id: 11,
    domainId: 5,
    question: "Which contaminant is MOST commonly found in improperly cultivated cannabis products?",
    options: [
      "Prions",
      "Mycotoxins (aflatoxins, ochratoxin A)",
      "Radioactive isotopes",
      "Antibiotics"
    ],
    correctIndex: 1,
    explanation: "Competency 5.c.i: Mycotoxins (especially from Aspergillus and Penicillium molds) are the most common biological contaminants, alongside pesticides and heavy metals (lead, cadmium, arsenic). (McPartland JM, McKernan KJ. J Cannabis Res. 2021;3:21.)"
  },
  {
    id: 12,
    domainId: 5,
    question: "What is a significant risk associated with Delta-8 THC products?",
    options: [
      "They have no psychoactive effect",
      "They are all FDA-approved and regulated",
      "Unregulated synthesis may produce harmful byproducts, and they cause psychoactive effects despite marketing claims",
      "Delta-8 is identical to CBD"
    ],
    correctIndex: 2,
    explanation: "Competency 5.d: Delta-8 THC is often synthetically converted from CBD with unreliable processes, producing unknown byproducts. It IS psychoactive despite misleading marketing and remains largely unregulated. (FDA Consumer Update. 2022; Meehan-Atrash J, Rahman I. Chem Res Toxicol. 2022;35(3):420-430.)"
  },
  {
    id: 13,
    domainId: 5,
    question: "A construction worker with a valid medical cannabis prescription tests positive for THC on a routine workplace drug screen. What is CORRECT regarding his situation?",
    options: [
      "Medical cannabis prescriptions override all workplace drug testing policies",
      "Federal employees and safety-sensitive positions may still face consequences; protections vary by state",
      "Employers cannot test for THC under any circumstances",
      "A medical card guarantees immunity in all workplaces"
    ],
    correctIndex: 1,
    explanation: "Competency 5.e.i: Occupational risks are significant — federal law does not recognize medical cannabis, and safety-sensitive positions (DOT-regulated) typically have zero-tolerance policies regardless of state medical programs. (Dunn KE et al. J Occup Environ Med. 2020;62(8):605-611.)"
  },
  {
    id: 14,
    domainId: 5,
    question: "Cannabis withdrawal syndrome typically presents with which symptom cluster?",
    options: [
      "Seizures and delirium tremens",
      "Irritability, insomnia, decreased appetite, and anxiety typically peaking at 2–6 days after cessation",
      "Hallucinations and psychosis",
      "No withdrawal symptoms exist"
    ],
    correctIndex: 1,
    explanation: "Competency 5.b.i: Cannabis Withdrawal Syndrome (DSM-5) includes irritability, anxiety, insomnia, decreased appetite, restlessness, and depressed mood. Onset within 1 week, peak 2–6 days, lasting up to 2 weeks. Unlike alcohol/benzodiazepines, seizures are not a feature. (Bonnet U, Preuss UW. Dtsch Arztebl Int. 2017;114:174-181.)"
  },
  {
    id: 15,
    domainId: 5,
    question: "A standard urine immunoassay for cannabis detects which metabolite?",
    options: [
      "THC itself (parent compound)",
      "11-nor-9-carboxy-THC (THC-COOH)",
      "Cannabidiol (CBD)",
      "Anandamide (AEA)"
    ],
    correctIndex: 1,
    explanation: "Competency 5.f: Standard urine assays detect THC-COOH, a non-psychoactive metabolite. Detection windows: occasional users 3–4 days; chronic users up to 30+ days. CBD and endocannabinoids are NOT detected. Confirmatory testing uses GC-MS or LC-MS/MS. (Huestis MA. Clin Chem. 2007;53(6):1194-1209.)"
  },
  {
    id: 16,
    domainId: 5,
    question: "Which statement about cannabis use in older adults (≥65 years) is MOST accurate?",
    options: [
      "Older adults are resistant to cannabis side effects",
      "Age-related pharmacokinetic changes (reduced hepatic/renal clearance, increased fat stores) increase sensitivity and prolong effects, raising fall and cognitive impairment risk",
      "Dosing is identical to younger adults",
      "THC-dominant vaporizers are the safest option"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.vi: Older adults have altered pharmacokinetics (↓ metabolism, ↑ fat storage, ↑ blood-brain barrier permeability) that increase cannabinoid sensitivity. Falls, orthostatic hypotension, cognitive impairment, and drug interactions are particular concerns. (van den Elsen GAH et al. Drugs Aging. 2014;31(11):781-790.)"
  },
  {
    id: 17,
    domainId: 5,
    question: "Heavy adolescent cannabis use (before age 18) is associated with which long-term risk?",
    options: [
      "No recognized neurodevelopmental effects",
      "Reduced IQ, impaired executive function, and increased risk of psychotic disorders (OR ~1.4–2.0 for schizophrenia)",
      "Accelerated brain maturation",
      "Improved academic performance"
    ],
    correctIndex: 1,
    explanation: "Competency 5.a.iv: Adolescent cannabis use during neurodevelopment is associated with reduced cognitive function, lower educational attainment, and a dose-dependent increased risk of psychotic disorders (Marconi A et al. Schizophr Bull. 2016;42(5):1262-1269). The developing endocannabinoid system is particularly vulnerable to exogenous perturbation."
  },
  {
    id: 18,
    domainId: 5,
    question: "In a harm reduction framework, which professional role is MOST important in managing cannabis-related disorders?",
    options: [
      "Only psychiatrists can be involved",
      "Multidisciplinary teams including addiction medicine, mental health, primary care, pharmacy, and social work",
      "Cannabis counselors exclusively",
      "No professional intervention is needed"
    ],
    correctIndex: 1,
    explanation: "Competency 5.g: Multidisciplinary healthcare teams — including addiction medicine, psychiatry, primary care, clinical pharmacy, nursing, and social work — are recommended for treating cannabis-related disorders and implementing harm reduction strategies. (Zolotov Y et al. JAMA Netw Open. 2025;8(10):e2535049.)"
  },
  {
    id: 19,
    domainId: 5,
    question: "A patient traveling from Colorado (legal recreational) to Texas (no adult-use) with THC products risks which consequence?",
    options: [
      "No legal risk; state-issued cards are universally recognized",
      "Federal and state criminal charges for interstate transport of a controlled substance",
      "Only a small fine",
      "Automatic confiscation without criminal liability"
    ],
    correctIndex: 1,
    explanation: "Competency 5.e.ii: Transporting cannabis across state lines is a federal offense regardless of state-level legality. Most states do not honor out-of-state medical cannabis cards. Patients must be counseled about travel restrictions. (Congressional Research Service. Marijuana: Federal vs. State Law. 2024.)"
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
  },
  {
    id: 'case-4',
    name: "Thomas K.",
    age: 58,
    condition: "Diabetic Peripheral Neuropathy",
    tags: ["Neuropathy", "CYP450", "Polypharmacy", "Pain", "MedCanG"],
    history: "Type 2 diabetes for 15 years. Bilateral burning/tingling pain in feet (NRS 7/10) despite gabapentin 1800 mg/day and duloxetine 60 mg/day. HbA1c 7.2%. Mild hepatic steatosis on ultrasound. Failed pregabalin trial (edema). Cannabis-naive. No psychiatric history. Lives in Germany — eligible under MedCanG (Medizinal-Cannabisgesetz, April 2024): any physician may prescribe; no prior BfArM approval required; dispensed via pharmacy; cost coverage by statutory health insurance (GKV) requires prior approval by Krankenkasse.",
    medications: ["Gabapentin 1800 mg/d", "Duloxetine 60 mg/d", "Metformin 2000 mg/d", "Empagliflozin 25 mg/d", "Rosuvastatin 20 mg/d"],
    interactions: [
      { medication: 'Gabapentin', severity: 'Moderate', mechanism: 'Pharmacodynamic: additive CNS depression (sedation, dizziness). No direct CYP450 interaction (gabapentin is renally cleared), but combined sedation risk requires dose monitoring.' },
      { medication: 'Duloxetine', severity: 'High', mechanism: 'CYP1A2 substrate + CYP2D6 substrate/inhibitor. CBD inhibits CYP2D6 → may increase duloxetine serum levels 20–50%, risking serotonin syndrome, hypertension, and hepatotoxicity. THC is a weak CYP2D6 substrate.' },
      { medication: 'Metformin', severity: 'Low', mechanism: 'No significant CYP450 interaction (renally eliminated). THC may transiently affect glucose via CB1-mediated hepatic glucose output; monitor BG.' },
      { medication: 'Empagliflozin', severity: 'Low', mechanism: 'Primarily UGT-metabolized; minimal CYP interaction. Theoretical additive orthostatic hypotension with THC — monitor in elderly.' },
      { medication: 'Rosuvastatin', severity: 'Moderate', mechanism: 'Rosuvastatin partly CYP2C9/BCRP transported. CBD inhibits CYP2C9 weakly and BCRP → may modestly increase statin levels. Monitor for myalgia/CK elevation.' }
    ],
    cannabisHistory: 'Naive',
    goals: "Reduce neuropathic pain from 7/10 to ≤4/10 without excessive sedation. Maintain ability to drive (important for work). Willing to try inhaled and oral routes.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 7, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['Balanced 1:1', 'CBD-Dominant'],
      routes: ['Sublingual (Tincture)', 'Inhalation (Vaporized)'],
      minDose: 2,
      maxDose: 10
    },
    feedback: {
      success: "Excellent clinical reasoning. A balanced THC:CBD or CBD-dominant product via sublingual route is evidence-based for neuropathic pain (NASEM 2017, Level 1b) while minimizing driving impairment. The 'Start Low, Go Slow' approach (1–2.5 mg THC evening, titrate over 2–4 weeks) is crucial given polypharmacy and the CYP2D6 interaction with duloxetine. Under German MedCanG, any physician can prescribe — no specialist required. GKV cost coverage should be applied for early. Monitor: sedation, BG, statin side effects, duloxetine AEs.",
      failure: "Review Competencies 4.a.iii (Neuropathic pain evidence), 6.a.i (dosing/monitoring), and 6.d.i (CYP450 interactions). Key concerns: (1) Duloxetine + CBD = CYP2D6 inhibition → serotonin syndrome risk; (2) Gabapentin + THC = additive sedation; (3) High-dose THC impairs driving — a fitness-to-drive assessment (Fahreignung) is mandatory in Germany. A balanced or CBD-dominant sublingual tincture with cautious titration is the safest starting approach."
    },
    followUp: {
      scenario: "4-Week Follow-up: Thomas reports pain improved to 5/10 on a balanced 1:1 tincture (5 mg THC / 5 mg CBD sublingual at bedtime). Sleep has improved. However, he reports new morning drowsiness and his wife says he seems 'more unsteady' when rising. His latest HbA1c dropped slightly to 6.9%. He asks about driving to work.",
      options: [
        { label: "Double the dose to 10 mg THC / 10 mg CBD for faster pain reduction", isCorrect: false, feedback: "Incorrect. Doubling the dose with existing drowsiness and unsteadiness would worsen CNS depression (gabapentin synergy) and potentially impair driving. Dose increases should be ≤2.5 mg THC per step every 3–7 days (Competency 6.a.i). Also problematic for Fahreignung." },
        { label: "Reduce gabapentin by 300 mg, keep cannabis dose stable, reassess in 2 weeks, and counsel on driving regulations", isCorrect: true, feedback: "Correct. The drowsiness is likely additive CNS depression from gabapentin + THC. Reducing gabapentin (with prescribing physician coordination) while maintaining the cannabinoid dose may reduce sedation. Under German law (§ 24a StVG + CanG), patients on prescribed cannabis are not automatically unfit to drive, but must demonstrate no impairment (Fahreignung). A 6-week stable-dose period and THC blood level monitoring are recommended before resuming driving. Document counseling in chart." },
        { label: "Switch entirely to high-dose CBD isolate (200 mg/d) and discontinue THC", isCorrect: false, feedback: "Suboptimal. While CBD alone has some analgesic properties, the NNT for neuropathic pain with CBD-only is poorly established. THC is the primary analgesic component supported by evidence (Aviram & Samuelly-Leichtag 2017). High-dose CBD also increases the CYP2D6 inhibition of duloxetine. A balanced approach with dose optimization is preferred." },
        { label: "Add a THC-dominant vaporizer for daytime breakthrough pain", isCorrect: false, feedback: "Risky. Adding inhaled THC during daytime would almost certainly impair driving and is contraindicated for a cannabis-naive patient with occupational driving needs. Not aligned with the patient's goals or Fahreignung requirements." }
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
    description: "Grundlegendes Wissen über Rezeptoren, Produktion, Funktion und physiologische Regulation des Endocannabinoid-Systems (ECS) — eines der am weitesten verbreiteten neuromodulatorischen Netzwerke in der Säugetierphysiologie.",
    learningObjectives: [
      "Die beiden primären Cannabinoid-Rezeptoren (CB1, CB2) und ihre Gewebeverteilung identifizieren.",
      "Die Synthese, Freisetzung und den Abbau wichtiger Endocannabinoide (AEA, 2-AG) erklären.",
      "Beschreiben, wie das ECS Schmerz, Immunfunktion, Stimmung, Appetit und Schlaf moduliert.",
      "Das Konzept des 'Endocannabinoid-Tonus' und seine klinische Relevanz erkennen."
    ],
    keyTakeaways: [
      "Das ECS ist ein lipidbasiertes retrogrades Signalsystem, das im gesamten Körper aktiv ist.",
      "CB1 dominiert im ZNS; CB2 dominiert in Immungeweben — aber beide sind weit verbreitet exprimiert.",
      "Der Endocannabinoid-Tonus reflektiert die basale ECS-Aktivität und könnte Erkrankungen wie Migräne, Reizdarmsyndrom und Fibromyalgie zugrunde liegen (Hypothese des klinischen Endocannabinoid-Mangels).",
      "Die pharmakologische Modulation des ECS ist die mechanistische Grundlage aller Cannabinoid-Therapeutika."
    ],
    points: [
      {
        letter: "a",
        text: "Verstehen Sie die grundlegende Funktion und Verteilung der wichtigsten Cannabinoid-Rezeptoren (CB1 und CB2), einschließlich ihrer Kopplung an G-Proteine und nachgeschalteter Signalkaskaden.",
        clinicalPearl: "Der CB1-inverse Agonist Rimonabant wurde 2008 wegen psychiatrischer Nebenwirkungen zurückgezogen — dies verdeutlicht, warum die CB1-Rezeptorverteilung in limbischen Schaltkreisen klinisch relevant ist.",
        evidenceLevel: "Level 2a – Narratives Review der Rezeptorpharmakologie",
        citation: "Zou S, Kumar U. Cannabinoid receptors and the endocannabinoid system: signaling and function in the central nervous system. Int J Mol Sci. 2018;19(3):833.",
        subPoints: [
          {
            label: "i",
            text: "CB1-Rezeptoren: Vorwiegend im zentralen Nervensystem exprimiert (Kortex, Basalganglien, Hippocampus, Kleinhirn, Hypothalamus) sowie in peripheren Geweben (Fettgewebe, Leber, GI-Trakt). Gekoppelt an Gi/o-Proteine — hemmen Adenylylcyclase, reduzieren cAMP, modulieren Ionenkanäle (aktivieren GIRK, hemmen VGCC).",
            evidenceLevel: "Level 2a",
            citation: "Mackie K. Cannabinoid receptors: where they are and what they do. J Neuroendocrinol. 2008;20 Suppl 1:10-14."
          },
          {
            label: "ii",
            text: "CB2-Rezeptoren: Primär auf Immunzellen (Mikroglia, Makrophagen, B-Zellen, T-Zellen, NK-Zellen), Milz, Mandeln und Knochenmark. Auch in geringerem Maße in ZNS-Neuronen exprimiert (Hirnstamm, Kortex). Aktivierung moduliert Zytokinfreisetzung, Immunzellmigration und Neuroinflammation.",
            evidenceLevel: "Level 2a",
            citation: "Turcotte C, Blanchet MR, Laviolette M, Bhilement N. The CB2 receptor and its role as a regulator of inflammation. Cell Mol Life Sci. 2016;73(23):4449-4470."
          },
          {
            label: "iii",
            text: "Jenseits von CB1/CB2: Wachsende Evidenz für Cannabinoid-Aktivität an GPR55 ('CB3-Kandidat'), TRPV1 (Vanilloid-Rezeptor), PPARγ (Kernrezeptor) und 5-HT1A (Serotonin-Rezeptor) — Erweiterung des 'Cannabinoid-Rezeptoroms'.",
            evidenceLevel: "Level 3 – Präklinisch + früh translational",
            citation: "Morales P, Reggio PH. An update on non-CB1, non-CB2 cannabinoid related G-protein-coupled receptors. Cannabis Cannabinoid Res. 2017;2(1):265-273."
          }
        ]
      },
      {
        letter: "b",
        text: "Beschreiben Sie die Grundlagen der Endocannabinoid-Produktion, -Funktion, Enzymhemmung und -aktivierung — einschließlich der Aufrechterhaltung des Endocannabinoid-Tonus durch bedarfsgesteuerte Synthese und schnellen Abbau.",
        clinicalPearl: "FAAH-Inhibitoren (z. B. PF-04457845) befinden sich in klinischen Studien für PTBS und Cannabiskonsumstörung — die gezielte Modulation des Endocannabinoid-Tonus ist eine wachsende pharmakologische Strategie.",
        evidenceLevel: "Level 1b – Systematische Reviews der ECS-Biochemie",
        citation: "Lu HC, Mackie K. Review of the endocannabinoid system. Biol Psychiatry Cogn Neurosci Neuroimaging. 2021;6(6):607-615.",
        subPoints: [
          {
            label: "i",
            text: "Anandamid (AEA): Bedarfsgesteuert aus dem Membranphospholipid N-Arachidonoylphosphatidylethanolamin (NAPE) durch NAPE-PLD synthetisiert. Partialagonist an CB1, schwächer an CB2. Aktiviert auch TRPV1. Wird primär durch Fettsäureamidhydrolase (FAAH) abgebaut.",
            evidenceLevel: "Level 2a",
            citation: "Devane WA et al. Isolation and structure of a brain constituent that binds to the cannabinoid receptor. Science. 1992;258(5090):1946-1949."
          },
          {
            label: "ii",
            text: "2-Arachidonoylglycerol (2-AG): Das häufigste Endocannabinoid im Gehirn. Synthetisiert durch Diacylglycerollipase (DAGLα/β) aus Diacylglycerol. Vollagonist an CB1 und CB2. Primär durch Monoacylglycerollipase (MAGL) abgebaut, mit Beiträgen von ABHD6 und ABHD12.",
            evidenceLevel: "Level 2a",
            citation: "Sugiura T et al. 2-Arachidonoylglycerol: a possible endogenous cannabinoid receptor ligand in brain. Biochem Biophys Res Commun. 1995;215(1):89-97."
          },
          {
            label: "iii",
            text: "Retrograde Signalübertragung: Endocannabinoide werden postsynaptisch synthetisiert und wandern rückwärts über den synaptischen Spalt, um präsynaptische CB1-Rezeptoren zu aktivieren und die Neurotransmitterfreisetzung zu unterdrücken (sowohl exzitatorisch als auch inhibitorisch). Dies liegt der depolarisationsinduzierten Unterdrückung der Inhibition (DSI) und Exzitation (DSE) zugrunde.",
            evidenceLevel: "Level 1b",
            citation: "Kano M et al. Endocannabinoid-mediated control of synaptic transmission. Physiol Rev. 2009;89(1):309-380."
          },
          {
            label: "iv",
            text: "Endocannabinoid-Tonus: Das Gleichgewicht von Synthese- (NAPE-PLD, DAGL) und Abbauenzymen (FAAH, MAGL) bestimmt die basale ECS-Signalgebung. Die Theorie des 'Klinischen Endocannabinoid-Mangels' (CED) postuliert, dass ein reduzierter Tonus Migräne, Fibromyalgie und Reizdarmsyndrom zugrunde liegen könnte.",
            evidenceLevel: "Level 3 – Hypothese mit wachsender klinischer Unterstützung",
            citation: "Russo EB. Clinical endocannabinoid deficiency reconsidered. Cannabis Cannabinoid Res. 2016;1(1):154-165."
          }
        ]
      },
      {
        letter: "c",
        text: "Verstehen Sie die Rolle des Endocannabinoid-Systems bei der Regulierung zentraler physiologischer Funktionen — einschließlich Schmerzverarbeitung, Immunmodulation, Stress/Angst, Appetit/Stoffwechsel, Schlaf und Neuroprotektion.",
        clinicalPearl: "Das ECS moduliert praktisch jedes physiologische System, was sowohl das breite therapeutische Potenzial von Cannabinoiden als auch ihr breites Nebenwirkungsprofil erklärt.",
        evidenceLevel: "Level 1a – Mehrere systematische Reviews",
        citation: "Pacher P, Bátkai S, Kunos G. The endocannabinoid system as an emerging target of pharmacotherapy. Pharmacol Rev. 2006;58(3):389-462.",
        subPoints: [
          {
            label: "i",
            text: "Schmerz: Das ECS moduliert die Nozizeption auf peripherer, spinaler und supraspinaler Ebene. CB1-Aktivierung im Hinterhorn und PAG unterdrückt aufsteigende Schmerzsignale. Periphere CB2-Aktivierung reduziert entzündliche Schmerzmediatoren.",
            evidenceLevel: "Level 1a",
            citation: "Woodhams SG et al. The role of the endocannabinoid system in pain. Handb Exp Pharmacol. 2015;227:119-143."
          },
          {
            label: "ii",
            text: "Immunfunktion: CB2-Aktivierung auf Immunzellen moduliert die Zytokinfreisetzung (reduziert TNF-α, IL-1β, IL-6), hemmt die Immunzellmigration und verschiebt das T-Helfer-Gleichgewicht von Th1 Richtung Th2. Mikrogliale CB2-Aktivierung dämpft Neuroinflammation.",
            evidenceLevel: "Level 2a",
            citation: "Nagarkatti P et al. Cannabinoids as novel anti-inflammatory drugs. Future Med Chem. 2009;1(7):1333-1349."
          },
          {
            label: "iii",
            text: "Stress und Angst: AEA-Signalgebung in der Amygdala und dem präfrontalen Kortex reguliert die Stressreaktion (HPA-Achse). Akuter Stress mobilisiert rasch 2-AG (anxiolytisch), während chronischer Stress AEA abbaut (anxiogen). CB1-Knockout-Mäuse zeigen erhöhte Angst und beeinträchtigte Furchtextinktion.",
            evidenceLevel: "Level 2b",
            citation: "Hill MN et al. Endogenous cannabinoid signaling is essential for stress adaptation. Proc Natl Acad Sci. 2010;107(20):9406-9411."
          },
          {
            label: "iv",
            text: "Appetit und Stoffwechsel: Hypothalamische CB1-Aktivierung stimuliert den Appetit (orexigen). Peripheres CB1 in Leber und Fettgewebe beeinflusst Lipogenese, Insulinsensitivität und Energiespeicherung. CB1-Antagonismus reduziert Nahrungsaufnahme und Körpergewicht (vgl. Rimonabant).",
            evidenceLevel: "Level 1b",
            citation: "Di Marzo V et al. Leptin-regulated endocannabinoids are involved in maintaining food intake. Nature. 2001;410(6830):822-825."
          },
          {
            label: "v",
            text: "Schlaf: AEA erhöht Adenosinspiegel im basalen Vorderhirn und fördert NREM-Schlaf. 2-AG-Spiegel schwanken mit dem zirkadianen Rhythmus. THC reduziert akut die Einschlaflatenz, kann aber bei chronischem Gebrauch den REM-Schlaf unterdrücken; CBD (≥160 mg) kann die Gesamtschlafzeit verlängern.",
            evidenceLevel: "Level 2b",
            citation: "Kesner AJ, Lovinger DM. Cannabinoids, endocannabinoids and sleep. Front Mol Neurosci. 2020;13:125."
          },
          {
            label: "vi",
            text: "Neuroprotektion: ECS-Aktivierung reduziert Exzitotoxizität (Glutamat-Überlauf), oxidativen Stress und Neuroinflammation. Relevant bei Schädel-Hirn-Trauma, Multipler Sklerose, Parkinson und Alzheimer in Tiermodellen. Sowohl CB1- als auch CB2-Signalwege sind beteiligt.",
            evidenceLevel: "Level 2b – Überwiegend präklinisch mit aufkommenden klinischen Daten",
            citation: "Fernández-Ruiz J et al. Cannabinoids as neuroprotective agents. In: Handbook of Cannabis. Oxford Univ Press; 2014:363-379."
          }
        ]
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
  },
  // --- Domain 5: Risikobewertung (15 Fragen, progressive Schwierigkeit) ---
  {
    id: 5,
    domainId: 5,
    question: "Welche ist die HÄUFIGSTE akute Nebenwirkung von THC-dominantem Cannabis?",
    options: [
      "Krampfanfälle",
      "Tachykardie und Angst",
      "Nierenversagen",
      "Hyperglykämie"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.i: THC verursacht akut häufig Tachykardie, Angst, Schwindel und Mundtrockenheit. Krampfanfälle und Organversagen sind keine typischen THC-Effekte. (Volkow ND et al. NEJM. 2014;370:2219-2227.)"
  },
  {
    id: 6,
    domainId: 5,
    question: "Cannabis-Rauchexposition ist mit welchem respiratorischen Effekt verbunden?",
    options: [
      "Keinerlei respiratorische Effekte",
      "Chronische Bronchitis-Symptome (Husten, Auswurf, Giemen)",
      "Lungenfibrose bei den meisten Konsumenten",
      "Verbesserte Lungenfunktion durch Bronchodilatation"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.iii: Gerauchtes Cannabis ist mit chronischen Bronchitis-Symptomen assoziiert. Vaporisation reduziert, eliminiert aber nicht die Atemwegsreizung. (Tashkin DP. Ann Am Thorac Soc. 2013;10(3):239-247.)"
  },
  {
    id: 7,
    domainId: 5,
    question: "Wie lange nach inhalativem Cannabiskonsum ist die Fahrtauglichkeit signifikant beeinträchtigt?",
    options: [
      "Nur 10 Minuten",
      "2–4 Stunden (bis zu 6 bei Erstanwendern)",
      "Exakt 24 Stunden",
      "Cannabis beeinträchtigt das Fahren nicht"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.ii: Akute THC-Beeinträchtigung der Psychomotorik dauert 2–4 Stunden nach Inhalation, länger bei Erstanwendern. (Hartman RL, Huestis MA. Clin Chem. 2013;59(3):478-492.)"
  },
  {
    id: 8,
    domainId: 5,
    question: "Gemäß DSM-5, welches ist ein Kriterium für eine Cannabis-Konsumstörung?",
    options: [
      "Mindestens einmaliger Cannabiskonsum",
      "Anhaltender Wunsch oder erfolglose Versuche, den Konsum zu reduzieren oder zu kontrollieren",
      "Jegliche Toleranzentwicklung",
      "Euphorieerleben"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.b.i–ii: DSM-5-Kriterien für CUD umfassen anhaltenden Wunsch zur Reduktion, fortgesetzten Konsum trotz Problemen, Toleranz, Entzug und Craving. Einmaliger Konsum oder Euphorie allein qualifizieren nicht. (APA. DSM-5-TR. 2022.)"
  },
  {
    id: 9,
    domainId: 5,
    question: "Was sind die Leitsymptome des Cannabinoid-Hyperemesis-Syndroms (CHS)?",
    options: [
      "Gewichtszunahme und Obstipation",
      "Zyklisches Erbrechen, Bauchschmerzen und zwanghaftes heißes Baden",
      "Chronische Diarrhö und Dehydratation",
      "Psychose und Krampfanfälle"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.b.i: CHS präsentiert sich mit zyklischer Übelkeit/Erbrechen, Bauchschmerzen und Linderung durch heiße Duschen, typisch bei chronisch starken Konsumenten. Abstinenz ist die definitive Therapie. (Sorensen CJ et al. J Med Toxicol. 2017;13(1):71-87.)"
  },
  {
    id: 10,
    domainId: 5,
    question: "Was ist die Hauptsorge bezüglich Cannabiskonsum in der Schwangerschaft?",
    options: [
      "Gesteigerter mütterlicher Appetit",
      "Assoziation mit niedrigem Geburtsgewicht, Frühgeburt und potenziellen neurodevelopmentalen Effekten",
      "Cannabis ist nachweislich sicher in der Schwangerschaft",
      "Es reduziert Morgenübelkeit ohne Risiko"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.v: Cannabiskonsum in der Schwangerschaft ist mit niedrigerem Geburtsgewicht, Frühgeburt und möglichen Auswirkungen auf die fetale Gehirnentwicklung assoziiert. ACOG und AAP raten vom Konsum während Schwangerschaft/Stillzeit ab. (Corsi DJ et al. JAMA. 2019;322(2):145-152.)"
  },
  {
    id: 11,
    domainId: 5,
    question: "Welcher Kontaminant wird am HÄUFIGSTEN in unsachgemäß angebautem Cannabis gefunden?",
    options: [
      "Prionen",
      "Mykotoxine (Aflatoxine, Ochratoxin A)",
      "Radioaktive Isotope",
      "Antibiotika"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.c.i: Mykotoxine (insbesondere von Aspergillus- und Penicillium-Schimmelpilzen) sind die häufigsten biologischen Kontaminanten, neben Pestiziden und Schwermetallen (Blei, Cadmium, Arsen). (McPartland JM, McKernan KJ. J Cannabis Res. 2021;3:21.)"
  },
  {
    id: 12,
    domainId: 5,
    question: "Was ist ein bedeutsames Risiko von Delta-8-THC-Produkten?",
    options: [
      "Sie haben keine psychoaktive Wirkung",
      "Sie sind alle FDA-zugelassen und reguliert",
      "Unregulierte Synthese kann schädliche Nebenprodukte erzeugen, und sie wirken psychoaktiv trotz irreführender Vermarktung",
      "Delta-8 ist identisch mit CBD"
    ],
    correctIndex: 2,
    explanation: "Kompetenz 5.d: Delta-8-THC wird oft synthetisch aus CBD mit unzuverlässigen Verfahren konvertiert, wobei unbekannte Nebenprodukte entstehen. Es IST psychoaktiv trotz irreführender Vermarktung und bleibt weitgehend unreguliert. (FDA Consumer Update. 2022; Meehan-Atrash J, Rahman I. Chem Res Toxicol. 2022;35(3):420-430.)"
  },
  {
    id: 13,
    domainId: 5,
    question: "Ein Bauarbeiter mit gültigem Cannabis-Rezept testet bei einem routinemäßigen Drogenscreening positiv auf THC. Welche Aussage zu seiner Situation ist KORREKT?",
    options: [
      "Cannabis-Rezepte setzen alle Arbeitsplatz-Drogentestrichtlinien außer Kraft",
      "Bundesmitarbeiter und sicherheitssensible Positionen können trotzdem Konsequenzen haben; Schutz variiert nach Bundesstaat/Land",
      "Arbeitgeber dürfen unter keinen Umständen auf THC testen",
      "Ein Cannabis-Ausweis garantiert Immunität an allen Arbeitsplätzen"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.e.i: Berufliche Risiken sind erheblich. In Deutschland: Unter dem MedCanG haben Patienten mit ärztlichem Rezept grundsätzlich Recht auf Medikation, aber sicherheitsrelevante Tätigkeiten erfordern Fahreignung/Arbeitsfähigkeit. Arbeitgeber können in begründeten Fällen Untersuchungen anordnen."
  },
  {
    id: 14,
    domainId: 5,
    question: "Cannabis-Entzugssyndrom präsentiert sich typischerweise mit welchem Symptomcluster?",
    options: [
      "Krampfanfälle und Delirium tremens",
      "Reizbarkeit, Schlaflosigkeit, verminderter Appetit und Angst mit Spitzenwerten 2–6 Tage nach Abstinenz",
      "Halluzinationen und Psychose",
      "Es gibt keine Entzugssymptome"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.b.i: Cannabis-Entzugssyndrom (DSM-5) umfasst Reizbarkeit, Angst, Schlaflosigkeit, Appetitverlust, Unruhe und depressive Stimmung. Beginn innerhalb 1 Woche, Spitze 2–6 Tage, Dauer bis 2 Wochen. Anders als bei Alkohol/Benzodiazepinen sind Krampfanfälle kein Merkmal. (Bonnet U, Preuss UW. Dtsch Arztebl Int. 2017;114:174-181.)"
  },
  {
    id: 15,
    domainId: 5,
    question: "Ein Standard-Urin-Immunoassay für Cannabis weist welchen Metaboliten nach?",
    options: [
      "THC selbst (Muttersubstanz)",
      "11-Nor-9-Carboxy-THC (THC-COOH)",
      "Cannabidiol (CBD)",
      "Anandamid (AEA)"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.f: Standard-Urinassays weisen THC-COOH nach, einen nicht-psychoaktiven Metaboliten. Nachweisfenster: Gelegenheitskonsumenten 3–4 Tage; chronische Konsumenten bis 30+ Tage. CBD und Endocannabinoide werden NICHT nachgewiesen. Bestätigungstest via GC-MS oder LC-MS/MS. (Huestis MA. Clin Chem. 2007;53(6):1194-1209.)"
  },
  {
    id: 16,
    domainId: 5,
    question: "Welche Aussage über Cannabiskonsum bei älteren Erwachsenen (≥65 Jahre) ist am ZUTREFFENDSTEN?",
    options: [
      "Ältere Erwachsene sind resistent gegen Cannabis-Nebenwirkungen",
      "Altersbedingte pharmakokinetische Veränderungen (reduzierte hepatische/renale Clearance, erhöhte Fettspeicher) steigern Empfindlichkeit und verlängern Wirkung, erhöhen Sturz- und kognitive Beeinträchtigungsrisiken",
      "Dosierung ist identisch mit jüngeren Erwachsenen",
      "THC-dominante Vaporizer sind die sicherste Option"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.vi: Ältere Erwachsene haben veränderte Pharmakokinetik (↓ Metabolismus, ↑ Fettspeicherung, ↑ Blut-Hirn-Schranken-Permeabilität), die die Cannabinoid-Empfindlichkeit erhöht. Stürze, orthostatische Hypotonie, kognitive Beeinträchtigung und Arzneimittelinteraktionen sind besondere Bedenken. (van den Elsen GAH et al. Drugs Aging. 2014;31(11):781-790.)"
  },
  {
    id: 17,
    domainId: 5,
    question: "Starker Cannabiskonsum bei Jugendlichen (vor dem 18. Lebensjahr) ist mit welchem Langzeitrisiko verbunden?",
    options: [
      "Keine anerkannten neurodevelopmentalen Effekte",
      "Reduzierter IQ, beeinträchtigte Exekutivfunktion und erhöhtes Risiko für psychotische Störungen (OR ~1,4–2,0 für Schizophrenie)",
      "Beschleunigte Hirnreifung",
      "Verbesserte schulische Leistung"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.a.iv: Jugendlicher Cannabiskonsum während der Neuroentwicklung ist mit reduzierter kognitiver Funktion, niedrigerem Bildungsniveau und dosisabhängig erhöhtem Risiko für psychotische Störungen assoziiert (Marconi A et al. Schizophr Bull. 2016;42(5):1262-1269)."
  },
  {
    id: 18,
    domainId: 5,
    question: "Im Rahmen der Schadensminimierung (Harm Reduction) — welche professionelle Rolle ist bei Cannabis-bezogenen Störungen am WICHTIGSTEN?",
    options: [
      "Nur Psychiater können beteiligt sein",
      "Multidisziplinäre Teams inkl. Suchtmedizin, psychische Gesundheit, Hausarztmedizin, Pharmazie und Sozialarbeit",
      "Ausschließlich Cannabis-Berater",
      "Keine professionelle Intervention nötig"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.g: Multidisziplinäre Gesundheitsteams — inkl. Suchtmedizin, Psychiatrie, Allgemeinmedizin, Klinische Pharmazie, Pflege und Sozialarbeit — werden für die Behandlung Cannabis-bezogener Störungen und die Umsetzung von Harm-Reduction-Strategien empfohlen. (Zolotov Y et al. JAMA Netw Open. 2025;8(10):e2535049.)"
  },
  {
    id: 19,
    domainId: 5,
    question: "Ein Patient reist von einem Bundesland mit liberaler Cannabis-Regelung in ein restriktiveres. Was riskiert er mit THC-Produkten?",
    options: [
      "Kein rechtliches Risiko; Cannabis-Rezepte gelten überall gleich",
      "In Deutschland unter MedCanG mit ärztlichem Rezept und Apotheken-Abgabenachweis ist Transport legal; international variieren Gesetze drastisch und Transport über Landesgrenzen kann strafbar sein",
      "Nur ein geringes Bußgeld",
      "Automatische Konfiszierung ohne strafrechtliche Haftung"
    ],
    correctIndex: 1,
    explanation: "Kompetenz 5.e.ii: In Deutschland ist der Transport von ärztlich verschriebenem Cannabis mit Rezeptnachweis legal. International ist der Transport über Landesgrenzen jedoch oft strafbar. Patienten müssen über Reisebeschränkungen aufgeklärt werden. Schengen-Bescheinigung (Art. 75) für 30-Tage-Reisen in EU-Staaten möglich."
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
  },
  {
    id: 'case-4',
    name: "Thomas K.",
    age: 58,
    condition: "Diabetische periphere Neuropathie",
    tags: ["Neuropathie", "CYP450", "Polypharmazie", "Schmerz", "MedCanG"],
    history: "Typ-2-Diabetes seit 15 Jahren. Bilaterale brennende/kribbelnde Fußschmerzen (NRS 7/10) trotz Gabapentin 1800 mg/d und Duloxetin 60 mg/d. HbA1c 7,2%. Milde Lebersteatose im Ultraschall. Pregabalin-Versuch gescheitert (Ödeme). Cannabis-naiv. Keine psychiatrische Anamnese. Lebt in Deutschland — berechtigt unter MedCanG (Medizinal-Cannabisgesetz, April 2024): Jeder Arzt darf verschreiben; keine vorherige BfArM-Genehmigung nötig; Abgabe über Apotheke; GKV-Kostenübernahme erfordert vorherige Krankenkassen-Genehmigung.",
    medications: ["Gabapentin 1800 mg/d", "Duloxetin 60 mg/d", "Metformin 2000 mg/d", "Empagliflozin 25 mg/d", "Rosuvastatin 20 mg/d"],
    interactions: [
      { medication: 'Gabapentin', severity: 'Moderate', mechanism: 'Pharmakodynamisch: additive ZNS-Depression (Sedierung, Schwindel). Keine direkte CYP450-Interaktion (renal eliminiert), aber kombiniertes Sedierungsrisiko erfordert Dosisüberwachung.' },
      { medication: 'Duloxetin', severity: 'High', mechanism: 'CYP1A2-Substrat + CYP2D6-Substrat/-Inhibitor. CBD hemmt CYP2D6 → kann Duloxetin-Serumspiegel um 20–50% erhöhen, Risiko für Serotonin-Syndrom, Hypertension und Hepatotoxizität. THC ist schwaches CYP2D6-Substrat.' },
      { medication: 'Metformin', severity: 'Low', mechanism: 'Keine signifikante CYP450-Interaktion (renal eliminiert). THC kann vorübergehend Glukose über CB1-vermittelte hepatische Glukoseproduktion beeinflussen; BZ überwachen.' },
      { medication: 'Empagliflozin', severity: 'Low', mechanism: 'Primär UGT-metabolisiert; minimale CYP-Interaktion. Theoretische additive orthostatische Hypotension mit THC — bei älteren Patienten überwachen.' },
      { medication: 'Rosuvastatin', severity: 'Moderate', mechanism: 'Rosuvastatin teilweise CYP2C9/BCRP-transportiert. CBD hemmt CYP2C9 schwach und BCRP → kann Statin-Spiegel moderat erhöhen. Auf Myalgie/CK-Erhöhung überwachen.' }
    ],
    cannabisHistory: 'Naive',
    goals: "Neuropathischen Schmerz von 7/10 auf ≤4/10 senken ohne übermäßige Sedierung. Fahrtauglichkeit erhalten (wichtig für Arbeit). Bereit, inhalative und orale Wege zu versuchen.",
    historyData: [
        { week: 0, doseMg: 0, symptomScore: 7, sideEffectScore: 0 }
    ],
    idealTreatment: {
      productTypes: ['Balanced 1:1', 'CBD-Dominant'],
      routes: ['Sublingual (Tincture)', 'Inhalation (Vaporized)'],
      minDose: 2,
      maxDose: 10
    },
    feedback: {
      success: "Ausgezeichnetes klinisches Denken. Ein ausgewogenes THC:CBD- oder CBD-dominantes Produkt sublingual ist evidenzbasiert für neuropathischen Schmerz (NASEM 2017, Level 1b) bei Minimierung von Fahrbeeinträchtigung. 'Start Low, Go Slow' (1–2,5 mg THC abends, Titration über 2–4 Wochen) ist entscheidend bei Polypharmazie und CYP2D6-Interaktion mit Duloxetin. Unter deutschem MedCanG kann jeder Arzt verschreiben — kein Facharzt nötig. GKV-Kostenübernahme frühzeitig beantragen. Überwachung: Sedierung, BZ, Statin-NW, Duloxetin-UAW.",
      failure: "Überprüfen Sie Kompetenzen 4.a.iii (Neuropathischer Schmerz), 6.a.i (Dosierung/Monitoring) und 6.d.i (CYP450-Interaktionen). Hauptbedenken: (1) Duloxetin + CBD = CYP2D6-Hemmung → Serotonin-Syndrom-Risiko; (2) Gabapentin + THC = additive Sedierung; (3) Hohes THC beeinträchtigt Fahrtauglichkeit — Fahreignungsbegutachtung in Deutschland obligatorisch. Ein ausgewogener oder CBD-dominanter sublingualer Ansatz mit vorsichtiger Titration ist am sichersten."
    },
    followUp: {
      scenario: "4 Wochen Follow-up: Thomas berichtet Schmerzreduktion auf 5/10 unter ausgewogener 1:1-Tinktur (5 mg THC / 5 mg CBD sublingual abends). Schlaf verbessert. Jedoch neue morgendliche Schläfrigkeit; seine Frau sagt, er sei 'wackeliger' beim Aufstehen. Letzter HbA1c leicht gesunken auf 6,9%. Er fragt nach Autofahren zur Arbeit.",
      options: [
        { label: "Dosis auf 10 mg THC / 10 mg CBD verdoppeln für schnellere Schmerzreduktion", isCorrect: false, feedback: "Falsch. Dosisverdopplung bei bestehender Schläfrigkeit und Unsicherheit würde ZNS-Depression verschlimmern (Gabapentin-Synergie) und Fahrtauglichkeit gefährden. Dosissteigerungen ≤2,5 mg THC pro Schritt alle 3–7 Tage (Kompetenz 6.a.i)." },
        { label: "Gabapentin um 300 mg reduzieren, Cannabis-Dosis stabil halten, in 2 Wochen re-evaluieren, Fahreignungsberatung durchführen", isCorrect: true, feedback: "Korrekt. Die Schläfrigkeit ist wahrscheinlich additive ZNS-Depression aus Gabapentin + THC. Gabapentin-Reduktion (in Abstimmung mit dem verschreibenden Arzt) bei stabiler Cannabinoid-Dosis kann Sedierung reduzieren. Nach deutschem Recht (§ 24a StVG + CanG) sind Patienten mit verschriebenem Cannabis nicht automatisch fahrunfähig, müssen aber Beeinträchtigungsfreiheit nachweisen (Fahreignung). Eine 6-wöchige stabile Dosierungsphase und THC-Blutspiegelkontrolle werden vor Wiederaufnahme des Fahrens empfohlen. Beratung dokumentieren." },
        { label: "Komplett auf hochdosiertes CBD-Isolat (200 mg/d) umstellen, THC absetzen", isCorrect: false, feedback: "Suboptimal. CBD allein hat einige analgetische Eigenschaften, aber NNT für neuropathischen Schmerz mit CBD-only ist unzureichend belegt. THC ist die primäre evidenzbasierte analgetische Komponente (Aviram & Samuelly-Leichtag 2017). Hochdosiertes CBD verstärkt zudem die CYP2D6-Inhibition von Duloxetin." },
        { label: "THC-dominanten Vaporizer für Durchbruchschmerzen tagsüber hinzufügen", isCorrect: false, feedback: "Riskant. Inhaliertes THC tagsüber würde fast sicher die Fahrtauglichkeit beeinträchtigen und ist bei einem Cannabis-naiven Patienten mit beruflicher Fahrnotwendigkeit kontraindiziert. Nicht vereinbar mit Patientenzielen oder Fahreignungsanforderungen." }
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

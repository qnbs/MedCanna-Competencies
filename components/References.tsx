
import React, { useState, useMemo } from 'react';
import { X, Search, BookOpen, ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Reference {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  domain: number[];
  tags: string[];
}

const REFERENCES: Reference[] = [
  // --- Domain 1: Endocannabinoid System ---
  {
    id: 'ref-1',
    authors: 'Zolotov Y, Temple LM, Isralowitz R, et al.',
    title: 'Developing medical cannabis competencies: a consensus statement',
    journal: 'JAMA Netw Open. 2025;8(10):e2535049',
    year: 2025,
    doi: '10.1001/jamanetworkopen.2025.35049',
    domain: [1, 2, 3, 4, 5, 6],
    tags: ['consensus', 'competencies', 'curriculum', 'education']
  },
  {
    id: 'ref-2',
    authors: 'Zou S, Kumar U.',
    title: 'Cannabinoid receptors and the endocannabinoid system: signaling and function in the central nervous system',
    journal: 'Int J Mol Sci. 2018;19(3):833',
    year: 2018,
    doi: '10.3390/ijms19030833',
    domain: [1],
    tags: ['CB1', 'CB2', 'receptors', 'signaling', 'ECS']
  },
  {
    id: 'ref-3',
    authors: 'Mackie K.',
    title: 'Cannabinoid receptors: where they are and what they do',
    journal: 'J Neuroendocrinol. 2008;20 Suppl 1:10-14',
    year: 2008,
    doi: '10.1111/j.1365-2826.2008.01671.x',
    domain: [1],
    tags: ['CB1', 'receptor distribution', 'CNS']
  },
  {
    id: 'ref-4',
    authors: 'Turcotte C, Blanchet MR, Laviolette M, Bhilement N.',
    title: 'The CB2 receptor and its role as a regulator of inflammation',
    journal: 'Cell Mol Life Sci. 2016;73(23):4449-4470',
    year: 2016,
    doi: '10.1007/s00018-016-2300-4',
    domain: [1],
    tags: ['CB2', 'inflammation', 'immune', 'cytokines']
  },
  {
    id: 'ref-5',
    authors: 'Morales P, Reggio PH.',
    title: 'An update on non-CB1, non-CB2 cannabinoid related G-protein-coupled receptors',
    journal: 'Cannabis Cannabinoid Res. 2017;2(1):265-273',
    year: 2017,
    doi: '10.1089/can.2017.0036',
    domain: [1],
    tags: ['GPR55', 'TRPV1', 'PPARγ', 'receptorome']
  },
  {
    id: 'ref-6',
    authors: 'Devane WA, Hanus L, Breuer A, et al.',
    title: 'Isolation and structure of a brain constituent that binds to the cannabinoid receptor',
    journal: 'Science. 1992;258(5090):1946-1949',
    year: 1992,
    doi: '10.1126/science.1470919',
    domain: [1],
    tags: ['anandamide', 'AEA', 'discovery', 'endocannabinoid']
  },
  {
    id: 'ref-7',
    authors: 'Sugiura T, Kondo S, Sukagawa A, et al.',
    title: '2-Arachidonoylglycerol: a possible endogenous cannabinoid receptor ligand in brain',
    journal: 'Biochem Biophys Res Commun. 1995;215(1):89-97',
    year: 1995,
    doi: '10.1006/bbrc.1995.2437',
    domain: [1],
    tags: ['2-AG', 'endocannabinoid', 'discovery']
  },
  {
    id: 'ref-8',
    authors: 'Lu HC, Mackie K.',
    title: 'Review of the endocannabinoid system',
    journal: 'Biol Psychiatry Cogn Neurosci Neuroimaging. 2021;6(6):607-615',
    year: 2021,
    doi: '10.1016/j.bpsc.2020.07.016',
    domain: [1],
    tags: ['ECS', 'review', 'FAAH', 'MAGL', 'endocannabinoid tone']
  },
  {
    id: 'ref-9',
    authors: 'Kano M, Ohno-Shosaku T, Hashimotodani Y, et al.',
    title: 'Endocannabinoid-mediated control of synaptic transmission',
    journal: 'Physiol Rev. 2009;89(1):309-380',
    year: 2009,
    doi: '10.1152/physrev.00019.2008',
    domain: [1],
    tags: ['retrograde signaling', 'DSI', 'DSE', 'synaptic']
  },
  {
    id: 'ref-10',
    authors: 'Russo EB.',
    title: 'Clinical endocannabinoid deficiency reconsidered: current research supports the theory in migraine, fibromyalgia, irritable bowel, and other treatment-resistant syndromes',
    journal: 'Cannabis Cannabinoid Res. 2016;1(1):154-165',
    year: 2016,
    doi: '10.1089/can.2016.0009',
    domain: [1, 4],
    tags: ['CED', 'endocannabinoid deficiency', 'migraine', 'fibromyalgia', 'IBS']
  },
  {
    id: 'ref-11',
    authors: 'Pacher P, Bátkai S, Kunos G.',
    title: 'The endocannabinoid system as an emerging target of pharmacotherapy',
    journal: 'Pharmacol Rev. 2006;58(3):389-462',
    year: 2006,
    doi: '10.1124/pr.58.3.2',
    domain: [1],
    tags: ['pharmacotherapy', 'ECS', 'target', 'comprehensive review']
  },
  {
    id: 'ref-12',
    authors: 'Woodhams SG, Sagar DR, Burston JJ, Chapman V.',
    title: 'The role of the endocannabinoid system in pain',
    journal: 'Handb Exp Pharmacol. 2015;227:119-143',
    year: 2015,
    doi: '10.1007/978-3-662-46450-2_7',
    domain: [1, 4],
    tags: ['pain', 'nociception', 'CB1', 'analgesia']
  },
  {
    id: 'ref-13',
    authors: 'Nagarkatti P, Pandey R, Rieder SA, et al.',
    title: 'Cannabinoids as novel anti-inflammatory drugs',
    journal: 'Future Med Chem. 2009;1(7):1333-1349',
    year: 2009,
    doi: '10.4155/fmc.09.93',
    domain: [1, 2],
    tags: ['anti-inflammatory', 'CB2', 'immune', 'cytokines']
  },
  {
    id: 'ref-14',
    authors: 'Hill MN, McLaughlin RJ, Pan B, et al.',
    title: 'Endogenous cannabinoid signaling is essential for stress adaptation',
    journal: 'Proc Natl Acad Sci. 2010;107(20):9406-9411',
    year: 2010,
    doi: '10.1073/pnas.0914661107',
    domain: [1],
    tags: ['stress', 'HPA axis', 'anxiety', 'amygdala', 'AEA']
  },
  {
    id: 'ref-15',
    authors: 'Di Marzo V, Goparaju SK, Wang L, et al.',
    title: 'Leptin-regulated endocannabinoids are involved in maintaining food intake',
    journal: 'Nature. 2001;410(6830):822-825',
    year: 2001,
    doi: '10.1038/35071088',
    domain: [1],
    tags: ['appetite', 'leptin', 'food intake', 'hypothalamus']
  },
  {
    id: 'ref-16',
    authors: 'Kesner AJ, Lovinger DM.',
    title: 'Cannabinoids, endocannabinoids and sleep',
    journal: 'Front Mol Neurosci. 2020;13:125',
    year: 2020,
    doi: '10.3389/fnmol.2020.00125',
    domain: [1, 4],
    tags: ['sleep', 'circadian', 'REM', 'adenosine']
  },
  {
    id: 'ref-17',
    authors: 'Fernández-Ruiz J, Moro MA, Martínez-Orgado J.',
    title: 'Cannabinoids as neuroprotective agents',
    journal: 'In: Handbook of Cannabis. Oxford Univ Press; 2014:363-379',
    year: 2014,
    domain: [1, 4],
    tags: ['neuroprotection', 'excitotoxicity', 'TBI', 'MS', 'neuroinflammation']
  },
  // --- Domain 4 & 5: Evidence & Risks ---
  {
    id: 'ref-18',
    authors: 'National Academies of Sciences, Engineering, and Medicine.',
    title: 'The health effects of cannabis and cannabinoids: the current state of evidence and recommendations for research',
    journal: 'Washington, DC: National Academies Press; 2017',
    year: 2017,
    doi: '10.17226/24625',
    domain: [4, 5],
    tags: ['NASEM', 'evidence review', 'comprehensive', 'pain', 'nausea']
  },
  {
    id: 'ref-19',
    authors: 'Volkow ND, Baler RD, Compton WM, Weiss SRB.',
    title: 'Adverse health effects of marijuana use',
    journal: 'N Engl J Med. 2014;370(23):2219-2227',
    year: 2014,
    doi: '10.1056/NEJMra1402309',
    domain: [5],
    tags: ['adverse effects', 'THC', 'risks', 'cognitive', 'addiction']
  },
  {
    id: 'ref-20',
    authors: 'Tashkin DP.',
    title: 'Effects of marijuana smoking on the lung',
    journal: 'Ann Am Thorac Soc. 2013;10(3):239-247',
    year: 2013,
    doi: '10.1513/AnnalsATS.201212-127FR',
    domain: [5],
    tags: ['respiratory', 'smoking', 'bronchitis', 'lung']
  },
  {
    id: 'ref-21',
    authors: 'Hartman RL, Huestis MA.',
    title: 'Cannabis effects on driving skills',
    journal: 'Clin Chem. 2013;59(3):478-492',
    year: 2013,
    doi: '10.1373/clinchem.2012.194381',
    domain: [5],
    tags: ['driving', 'impairment', 'psychomotor', 'traffic safety']
  },
  {
    id: 'ref-22',
    authors: 'Sorensen CJ, DeSanto K, Borgelt L, et al.',
    title: 'Cannabinoid hyperemesis syndrome: diagnosis, pathophysiology, and treatment — a systematic review',
    journal: 'J Med Toxicol. 2017;13(1):71-87',
    year: 2017,
    doi: '10.1007/s13181-016-0595-z',
    domain: [5],
    tags: ['CHS', 'hyperemesis', 'cyclic vomiting', 'hot bathing']
  },
  {
    id: 'ref-23',
    authors: 'Corsi DJ, Walsh L, Weiss D, et al.',
    title: 'Association between self-reported prenatal cannabis use and maternal, perinatal, and neonatal outcomes',
    journal: 'JAMA. 2019;322(2):145-152',
    year: 2019,
    doi: '10.1001/jama.2019.8734',
    domain: [5],
    tags: ['pregnancy', 'prenatal', 'birth weight', 'neonatal']
  },
  {
    id: 'ref-24',
    authors: 'Marconi A, Di Forti M, Lewis CM, et al.',
    title: 'Meta-analysis of the association between the level of cannabis use and risk of psychosis',
    journal: 'Schizophr Bull. 2016;42(5):1262-1269',
    year: 2016,
    doi: '10.1093/schbul/sbw003',
    domain: [5],
    tags: ['psychosis', 'schizophrenia', 'adolescent', 'dose-response']
  },
  {
    id: 'ref-25',
    authors: 'Bonnet U, Preuss UW.',
    title: 'The cannabis withdrawal syndrome: current insights',
    journal: 'Dtsch Arztebl Int. 2017;114(49):174-181',
    year: 2017,
    doi: '10.3238/arztebl.2017.0174',
    domain: [5],
    tags: ['withdrawal', 'CUD', 'DSM-5', 'cessation']
  },
  {
    id: 'ref-26',
    authors: 'Huestis MA.',
    title: 'Human cannabinoid pharmacokinetics',
    journal: 'Chem Biodivers. 2007;4(8):1770-1804',
    year: 2007,
    doi: '10.1002/cbdv.200790152',
    domain: [5, 6],
    tags: ['pharmacokinetics', 'THC-COOH', 'drug testing', 'urine']
  },
  {
    id: 'ref-27',
    authors: 'van den Elsen GAH, Ahmed AIA, Cremers RJ, et al.',
    title: 'Efficacy and safety of medical cannabinoids in older subjects: a systematic review',
    journal: 'Drugs Aging. 2014;31(11):781-790',
    year: 2014,
    doi: '10.1007/s40266-014-0211-0',
    domain: [5, 6],
    tags: ['geriatrics', 'elderly', 'falls', 'pharmacokinetics']
  },
  {
    id: 'ref-28',
    authors: 'McPartland JM, McKernan KJ.',
    title: 'Contaminants of concern in cannabis: microbes, heavy metals and pesticides',
    journal: 'J Cannabis Res. 2021;3:21',
    year: 2021,
    domain: [5],
    tags: ['contamination', 'mycotoxins', 'pesticides', 'heavy metals', 'quality']
  },
  {
    id: 'ref-29',
    authors: 'Meehan-Atrash J, Rahman I.',
    title: 'Novel Delta-8 THC vape products: concerns regarding unregulated production and unknown chemical byproducts',
    journal: 'Chem Res Toxicol. 2022;35(3):420-430',
    year: 2022,
    domain: [5],
    tags: ['Delta-8', 'synthetic', 'vaping', 'byproducts', 'unregulated']
  },
  // --- Domain 6: Clinical Management ---
  {
    id: 'ref-30',
    authors: 'MacCallum CA, Russo EB.',
    title: 'Practical considerations in medical cannabis administration and dosing',
    journal: 'Eur J Intern Med. 2018;49:12-19',
    year: 2018,
    doi: '10.1016/j.ejim.2018.01.004',
    domain: [6],
    tags: ['dosing', 'titration', 'start low go slow', 'administration']
  },
  {
    id: 'ref-31',
    authors: 'Nasrin S, Watson CJW, Perez-Paramo YX, Lazarus P.',
    title: 'Cannabinoid metabolites as inhibitors of major hepatic CYP450 enzymes, with implications for cannabis-drug interactions',
    journal: 'Clin Pharmacol Ther. 2021;109(6):1506-1517',
    year: 2021,
    doi: '10.1002/cpt.2097',
    domain: [6],
    tags: ['CYP450', 'drug interactions', 'metabolism', 'CBD', 'THC']
  },
  {
    id: 'ref-32',
    authors: 'Aviram J, Samuelly-Leichtag G.',
    title: 'Efficacy of cannabis-based medicines for pain management: a systematic review and meta-analysis of randomized controlled trials',
    journal: 'Pain Physician. 2017;20(6):E755-E796',
    year: 2017,
    domain: [4, 6],
    tags: ['pain', 'neuropathic', 'meta-analysis', 'RCT', 'efficacy']
  },
];

interface ReferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

const References: React.FC<ReferencesProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  const domainLabels = language === 'de'
    ? ['Alle', '1 – ECS', '2 – Pflanzenpharmakologie', '3 – Recht', '4 – Evidenzbasis', '5 – Risiken', '6 – Klinik']
    : ['All', '1 – ECS', '2 – Plant Pharmacology', '3 – Law', '4 – Evidence', '5 – Risks', '6 – Clinical'];

  const filteredRefs = useMemo(() => {
    let refs = REFERENCES;

    if (selectedDomain !== null) {
      refs = refs.filter(r => r.domain.includes(selectedDomain));
    }

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      refs = refs.filter(r =>
        r.authors.toLowerCase().includes(lower) ||
        r.title.toLowerCase().includes(lower) ||
        r.journal.toLowerCase().includes(lower) ||
        r.tags.some(t => t.toLowerCase().includes(lower)) ||
        r.year.toString().includes(lower)
      );
    }

    return refs.sort((a, b) => a.authors.localeCompare(b.authors));
  }, [searchTerm, selectedDomain]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 md:p-6 border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              {language === 'de' ? 'Referenzen & Bibliographie' : 'References & Bibliography'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder={language === 'de' ? 'Suche nach Autor, Titel, Schlagwort...' : 'Search by author, title, keyword...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Domain Filter */}
          <div className="flex flex-wrap gap-1.5">
            <Filter className="w-4 h-4 text-slate-400 mt-1 mr-1" />
            {domainLabels.map((label, idx) => {
              const domainNum = idx === 0 ? null : idx;
              const isActive = selectedDomain === domainNum;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDomain(domainNum)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reference List */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <p className="text-xs text-slate-400 mb-4">
            {filteredRefs.length} {language === 'de' ? 'Referenzen' : 'references'}
            {selectedDomain !== null && ` · Domain ${selectedDomain}`}
            {searchTerm && ` · "${searchTerm}"`}
          </p>

          <div className="space-y-4">
            {filteredRefs.map((ref, idx) => (
              <div key={ref.id} className="border border-slate-100 rounded-lg p-4 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-slate-300 mt-1 w-6 text-right flex-shrink-0">
                    [{idx + 1}]
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-800 leading-relaxed">
                      <span className="font-medium">{ref.authors}</span>{' '}
                      {ref.title}.{' '}
                      <span className="italic text-slate-600">{ref.journal}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {ref.doi && (
                        <a
                          href={`https://doi.org/${ref.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <ExternalLink className="w-2.5 h-2.5" />
                          doi:{ref.doi}
                        </a>
                      )}
                      {ref.domain.map(d => (
                        <span key={d} className="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-medium rounded">
                          D{d}
                        </span>
                      ))}
                      {ref.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRefs.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-20" />
              <p className="text-sm">{language === 'de' ? 'Keine Referenzen gefunden.' : 'No references found.'}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-400 text-center flex-shrink-0">
          {language === 'de'
            ? 'Primäre Quelle: Zolotov Y et al. JAMA Netw Open. 2025;8(10):e2535049. Alle Zitate im APA/Vancouver-Stil.'
            : 'Primary source: Zolotov Y et al. JAMA Netw Open. 2025;8(10):e2535049. All citations in APA/Vancouver style.'}
        </div>
      </div>
    </div>
  );
};

export default References;

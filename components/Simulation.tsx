
import React, { useState } from 'react';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { PatientCase, ProductType, RouteOfAdmin, FollowUpOption } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { User, Activity, AlertCircle, CheckCircle, Pill, Stethoscope, FileText, ClipboardList, Calendar, Zap, AlertTriangle, ShieldCheck, RefreshCcw, ArrowLeft } from 'lucide-react';

const Simulation: React.FC = () => {
  const { language, t } = useLanguage();
  const { patientCases } = getCurriculumData(language);

  const [activeCase, setActiveCase] = useState<PatientCase | null>(null);
  const [step, setStep] = useState<'select' | 'assess' | 'treat' | 'feedback-initial' | 'follow-up' | 'feedback-final'>('select');
  const [chartTab, setChartTab] = useState<'overview' | 'meds' | 'notes'>('overview');
  
  // Treatment State
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<RouteOfAdmin | null>(null);
  const [dose, setDose] = useState<number>(5);
  const [terpeneProfile, setTerpeneProfile] = useState<number>(50); // 0 (Sedating) to 100 (Uplifting)

  // Interaction Checklist State
  const [checkedInteractions, setCheckedInteractions] = useState<string[]>([]);

  // Follow Up State
  const [selectedFollowUpOption, setSelectedFollowUpOption] = useState<FollowUpOption | null>(null);
  
  // Side Effect Tracker State
  const [currentSideEffectScore, setCurrentSideEffectScore] = useState<number>(0);
  const [currentSymptomScore, setCurrentSymptomScore] = useState<number>(5);

  const resetSim = () => {
    setActiveCase(null);
    setStep('select');
    setSelectedProduct(null);
    setSelectedRoute(null);
    setDose(5);
    setTerpeneProfile(50);
    setSelectedFollowUpOption(null);
    setCheckedInteractions([]);
    setChartTab('overview');
    setCurrentSideEffectScore(0);
  };

  const handleCaseSelect = (patient: PatientCase) => {
    setActiveCase(patient);
    setStep('assess');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleInteraction = (med: string) => {
    setCheckedInteractions(prev => 
      prev.includes(med) ? prev.filter(m => m !== med) : [...prev, med]
    );
  };

  const submitTreatment = () => {
    setStep('feedback-initial');
    if (activeCase) {
        // Set initial post-treatment scores based on correctness for the graph preview
        setCurrentSymptomScore(activeCase.historyData[0].symptomScore - 2); 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitFollowUp = (option: FollowUpOption) => {
    setSelectedFollowUpOption(option);
    setStep('feedback-final');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const evaluateTreatment = () => {
    if (!activeCase || !selectedProduct || !selectedRoute) return { status: 'error', text: "Incomplete data", issues: [] };
    
    const isProductCorrect = activeCase.idealTreatment.productTypes.includes(selectedProduct);
    const isRouteCorrect = activeCase.idealTreatment.routes.includes(selectedRoute);
    const isDoseSafe = dose <= activeCase.idealTreatment.maxDose;
    const interactionsIdentified = activeCase.interactions.every(i => checkedInteractions.includes(i.medication));

    if (isProductCorrect && isRouteCorrect && isDoseSafe) {
      return { status: 'success', text: activeCase.feedback.success, issues: interactionsIdentified ? [] : [language === 'de' ? 'Hinweis: Stellen Sie sicher, dass alle Interaktionen dokumentiert sind.' : 'Note: Ensure you have documented all drug interactions in the chart.'] };
    } else {
        let issues = [];
        if (!isProductCorrect) issues.push(language === 'de' ? `Produkttyp-Fehler: ${selectedProduct}` : `Product Type Mismatch: ${selectedProduct}`);
        if (!isRouteCorrect) issues.push(language === 'de' ? `Routen-Fehler: ${selectedRoute}` : `Route Mismatch: ${selectedRoute}`);
        if (!isDoseSafe) issues.push(language === 'de' ? `Sicherheitswarnung: Dosis ${dose}mg zu hoch.` : `Safety Alert: Starting dose of ${dose}mg exceeds recommended 'Start Low' guidelines.`);
        if (!interactionsIdentified && activeCase.interactions.length > 0) issues.push(language === 'de' ? `Kritisch: Arzneimittelwechselwirkungen übersehen.` : `Critical: You missed identifying potential drug interactions with current medications.`);
        
        return { status: 'failure', text: activeCase.feedback.failure, issues };
    }
  };

  // Generate Graph Data
  const getGraphData = () => {
      if (!activeCase) return [];
      const baseData = [...activeCase.historyData];
      
      baseData.push({
          week: 1,
          doseMg: dose,
          symptomScore: currentSymptomScore,
          sideEffectScore: currentSideEffectScore
      });

      if (step === 'feedback-final' && selectedFollowUpOption) {
          const isImprovement = selectedFollowUpOption.isCorrect;
          baseData.push({
              week: 4,
              doseMg: isImprovement ? dose : dose + 5, 
              symptomScore: isImprovement ? Math.max(0, currentSymptomScore - 2) : Math.min(10, currentSymptomScore + 2),
              sideEffectScore: isImprovement ? Math.max(0, currentSideEffectScore - 1) : Math.min(10, currentSideEffectScore + 3)
          });
      }

      return baseData;
  };

  // --- View: Case Selection & Quick Start ---
  if (step === 'select') {
    return (
      <div className="max-w-6xl mx-auto animate-fade-in pb-10">
        <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{t('simulator.title')}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                {t('simulator.intro')}
            </p>
        </div>

        {/* Quick Start Scenarios */}
        <div className="mb-10">
            <h3 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{t('simulator.quickStart')}</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                {patientCases.map((pc) => (
                    <button 
                        key={`qs-${pc.id}`}
                        onClick={() => handleCaseSelect(pc)}
                        className="flex-shrink-0 px-5 py-3 bg-white border border-slate-200 rounded-full hover:border-emerald-500 hover:shadow-md transition-all text-sm font-medium text-slate-700 whitespace-nowrap flex items-center gap-2"
                    >
                        <Zap size={16} className="text-amber-500" />
                        {pc.tags[0]}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientCases.map(patient => (
                <button 
                    key={patient.id}
                    onClick={() => handleCaseSelect(patient)}
                    className="bg-white hover:border-emerald-500 border border-slate-200 rounded-xl overflow-hidden transition-all hover:shadow-xl group flex flex-col h-full text-left"
                >
                    <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                        <span className="font-mono text-xs text-slate-400">MRN: {Math.floor(Math.random() * 100000)}</span>
                        <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${patient.cannabisHistory === 'Naive' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                            {patient.cannabisHistory}
                        </div>
                    </div>
                    <div className="p-6 flex-1">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <User size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{patient.name}</h3>
                                <p className="text-slate-500 text-sm">{patient.age} y/o</p>
                            </div>
                        </div>
                        <p className="text-emerald-700 font-medium text-sm mb-2 flex items-center">
                            <Activity size={14} className="mr-1" /> {patient.condition}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2 mb-3">
                            {patient.tags.map(t => (
                                <span key={t} className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">{t}</span>
                            ))}
                        </div>
                        <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                            {patient.history}
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-sm font-medium text-emerald-600 group-hover:underline">
                        {t('simulator.openChart')} &rarr;
                    </div>
                </button>
            ))}
        </div>
      </div>
    );
  }

  // --- View: Assessment (EHR Style) ---
  if ((step === 'assess' || step === 'treat') && activeCase) {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in flex flex-col h-full md:h-[calc(100vh-140px)]">
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <button onClick={resetSim} className="text-slate-500 hover:text-slate-800 text-sm flex items-center font-medium bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
                    <ArrowLeft size={16} className="mr-1" /> {t('simulator.exit')}
                </button>
                <div className="flex gap-2">
                     <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center shadow-sm">
                         <Calendar size={14} className="mr-1" /> {t('simulator.visit1')}
                     </span>
                </div>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                {/* EHR Sidebar - Collapsible or Compact on Mobile */}
                <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-4 md:p-6 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 flex-shrink-0">
                    <div className="flex items-center gap-3 md:block md:text-center">
                        <div className="w-12 h-12 md:w-20 md:h-20 bg-white border border-slate-200 rounded-full md:mx-auto md:mb-3 flex items-center justify-center text-slate-400 shadow-sm shrink-0">
                            <User size={24} className="md:hidden" />
                            <User size={40} className="hidden md:block" />
                        </div>
                        <div>
                             <h2 className="text-base md:text-xl font-bold text-slate-800">{activeCase.name}</h2>
                             <p className="text-slate-500 text-xs md:text-sm">{activeCase.age} years old</p>
                        </div>
                    </div>
                    
                    <div className="hidden md:block space-y-4 text-sm w-full">
                        <div>
                            <span className="text-slate-400 text-xs uppercase tracking-wider font-bold block mb-1">{t('simulator.status')}</span>
                            <span className="font-medium text-slate-700">{activeCase.cannabisHistory}</span>
                        </div>
                        <div>
                            <span className="text-slate-400 text-xs uppercase tracking-wider font-bold block mb-1">{t('simulator.complaint')}</span>
                            <span className="font-medium text-emerald-700">{activeCase.condition}</span>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-200">
                             <span className="text-slate-400 text-xs uppercase tracking-wider font-bold block mb-1">{t('simulator.alerts')}</span>
                             {activeCase.medications.length > 0 ? (
                                 <div className="text-red-600 flex items-start text-xs font-medium">
                                     <AlertCircle size={12} className="mr-1 mt-0.5 shrink-0" /> Potential Interactions
                                 </div>
                             ) : <span className="text-slate-400">None</span>}
                        </div>
                    </div>

                    {/* Mobile Only Summary Info */}
                     <div className="md:hidden text-right">
                         <span className="inline-block px-2 py-1 bg-slate-200 rounded text-[10px] font-bold text-slate-600">{activeCase.condition}</span>
                     </div>
                </div>

                {/* EHR Main Content */}
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                    <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-hide flex-shrink-0">
                        <button onClick={() => setChartTab('overview')} className={`flex-1 min-w-[100px] px-2 md:px-6 py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${chartTab === 'overview' ? 'border-emerald-500 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                            <ClipboardList size={16} className="inline mr-1 md:mr-2" /> {t('simulator.tabs.overview')}
                        </button>
                        <button onClick={() => setChartTab('meds')} className={`flex-1 min-w-[100px] px-2 md:px-6 py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${chartTab === 'meds' ? 'border-emerald-500 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                            <Pill size={16} className="inline mr-1 md:mr-2" /> {t('simulator.tabs.meds')}
                        </button>
                        <button onClick={() => setChartTab('notes')} className={`flex-1 min-w-[100px] px-2 md:px-6 py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${chartTab === 'notes' ? 'border-emerald-500 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                            <FileText size={16} className="inline mr-1 md:mr-2" /> {t('simulator.tabs.notes')}
                        </button>
                    </div>

                    <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white">
                        {chartTab === 'overview' && (
                            <div className="space-y-6 animate-fade-in pb-10">
                                <section>
                                    <h3 className="text-sm font-bold text-slate-900 mb-2">{t('simulator.history')}</h3>
                                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm md:text-base">
                                        {activeCase.history}
                                    </p>
                                </section>
                                <section>
                                    <h3 className="text-sm font-bold text-slate-900 mb-2">{t('simulator.goals')}</h3>
                                    <p className="text-slate-600 italic text-sm md:text-base">"{activeCase.goals}"</p>
                                </section>
                            </div>
                        )}
                        {chartTab === 'meds' && (
                            <div className="space-y-4 animate-fade-in pb-10">
                                <h3 className="text-sm font-bold text-slate-900">{t('simulator.interactionsTitle')}</h3>
                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex gap-3 text-sm text-amber-800 mb-4">
                                    <AlertCircle className="shrink-0" />
                                    <p>{t('simulator.interactionsWarn')}</p>
                                </div>
                                <ul className="space-y-3">
                                    {activeCase.medications.map((m, i) => {
                                        const interaction = activeCase.interactions.find(inter => inter.medication === m.split(' ')[0]);
                                        return (
                                            <li key={i} className="p-4 border border-slate-200 rounded-lg flex flex-col items-start gap-4">
                                                <div className="w-full flex justify-between items-start">
                                                    <div>
                                                        <span className="font-bold text-slate-700 block">{m}</span>
                                                        {interaction && (
                                                            <span className="text-xs text-slate-500 block mt-1">
                                                                {t('simulator.riskLevel')}: <span className={`font-bold ${interaction.severity === 'High' ? 'text-red-600' : 'text-amber-600'}`}>{interaction.severity}</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                {interaction ? (
                                                    <button 
                                                        onClick={() => toggleInteraction(interaction.medication)}
                                                        className={`w-full flex items-center justify-center px-3 py-2.5 rounded-lg text-xs font-bold transition-colors border ${checkedInteractions.includes(interaction.medication) ? 'bg-emerald-100 border-emerald-300 text-emerald-800' : 'bg-white border-slate-300 text-slate-500 hover:border-slate-400'}`}
                                                    >
                                                        {checkedInteractions.includes(interaction.medication) ? <ShieldCheck size={16} className="mr-2" /> : <AlertTriangle size={16} className="mr-2" />}
                                                        {checkedInteractions.includes(interaction.medication) ? t('simulator.identified') : t('simulator.markInteraction')}
                                                    </button>
                                                ) : (
                                                    <div className="w-full text-center text-xs text-slate-300 px-3 py-2 bg-slate-50 rounded-lg">{t('simulator.noInteraction')}</div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                         {chartTab === 'notes' && (
                            <div className="space-y-4 animate-fade-in h-full flex flex-col pb-10">
                                <h3 className="text-sm font-bold text-slate-900">{t('simulator.treatmentPlan')}</h3>
                                {step === 'assess' ? (
                                    <div className="flex-1 flex flex-col items-center justify-center text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-300 min-h-[200px]">
                                        <Stethoscope size={40} className="mb-2 opacity-50" />
                                        <p>{t('simulator.noPlan')}</p>
                                        <button 
                                            onClick={() => setStep('treat')} 
                                            className="mt-4 bg-emerald-600 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                                        >
                                            {t('simulator.initiate')}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-slate-500 uppercase">{t('simulator.productType')}</label>
                                                <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0">
                                                    {['THC-Dominant', 'CBD-Dominant', 'Balanced 1:1', 'CBD-Isolate'].map((p) => (
                                                        <button
                                                            key={p}
                                                            onClick={() => setSelectedProduct(p as ProductType)}
                                                            className={`p-3 rounded-lg border text-xs md:text-sm text-left font-medium transition-all flex-shrink-0 md:flex-shrink whitespace-nowrap md:whitespace-normal ${selectedProduct === p ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-slate-200 text-slate-600 active:bg-slate-50'}`}
                                                        >
                                                            {p}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-bold text-slate-500 uppercase">{t('simulator.route')}</label>
                                                <div className="flex flex-col gap-2">
                                                    {['Inhalation (Vaporized)', 'Oral (Edible/Capsule)', 'Sublingual (Tincture)', 'Topical'].map((r) => (
                                                        <button
                                                            key={r}
                                                            onClick={() => setSelectedRoute(r as RouteOfAdmin)}
                                                            className={`p-3 rounded-lg border text-xs md:text-sm text-left font-medium transition-all ${selectedRoute === r ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white border-slate-200 text-slate-600 active:bg-slate-50'}`}
                                                        >
                                                            {r}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                         </div>

                                         <div className="space-y-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase">{t('simulator.entourage')}</label>
                                                    <span className="text-xs font-mono text-emerald-600 bg-white px-2 py-0.5 rounded border border-emerald-100">{terpeneProfile < 30 ? t('simulator.sedating') : terpeneProfile > 70 ? t('simulator.uplifting') : t('simulator.hybrid')}</span>
                                                </div>
                                                <input 
                                                    type="range" min="0" max="100" step="10" value={terpeneProfile}
                                                    onChange={(e) => setTerpeneProfile(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-gradient-to-r from-indigo-300 via-slate-300 to-amber-300 rounded-lg appearance-none cursor-pointer"
                                                />
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center mb-2">
                                                    <label className="text-xs font-bold text-slate-500 uppercase">{t('simulator.initialDose')}</label>
                                                    <span className="text-lg font-bold text-slate-800">{dose} mg</span>
                                                </div>
                                                <input 
                                                    type="range" min="1" max="50" step="1" value={dose}
                                                    onChange={(e) => setDose(parseInt(e.target.value))}
                                                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                                                />
                                            </div>
                                         </div>
                                         
                                         <div className="pt-2">
                                            <button 
                                                onClick={submitTreatment}
                                                disabled={!selectedProduct || !selectedRoute}
                                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-slate-800 transition-colors shadow-xl"
                                            >
                                                {t('simulator.submit')}
                                            </button>
                                         </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // --- View: Initial Feedback ---
  if (step === 'feedback-initial' && activeCase) {
      const result = evaluateTreatment();
      
      const SideEffectTracker = () => (
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm md:mt-6 w-full">
              <h4 className="text-sm font-bold text-slate-700 mb-4 flex items-center">
                  <Activity size={16} className="mr-2 text-emerald-600" /> {t('simulator.sideEffectTracker')}
              </h4>
              <div className="space-y-5">
                  <div>
                      <div className="flex justify-between text-xs font-medium mb-2">
                          <span className="text-slate-600">{t('simulator.symptomSeverity')}</span>
                          <span className="text-slate-800 font-bold">{currentSymptomScore}/10</span>
                      </div>
                      <input 
                        type="range" min="0" max="10" value={currentSymptomScore}
                        onChange={(e) => setCurrentSymptomScore(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg accent-indigo-600 cursor-pointer"
                      />
                  </div>
                  <div>
                      <div className="flex justify-between text-xs font-medium mb-2">
                          <span className="text-slate-600">{t('simulator.adverseEffects')}</span>
                          <span className="text-slate-800 font-bold">{currentSideEffectScore}/10</span>
                      </div>
                       <input 
                        type="range" min="0" max="10" value={currentSideEffectScore}
                        onChange={(e) => setCurrentSideEffectScore(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-100 rounded-lg accent-red-500 cursor-pointer"
                      />
                  </div>
              </div>
          </div>
      );

      if (result.status === 'failure') {
          return (
            <div className="max-w-3xl mx-auto animate-fade-in mt-4 md:mt-10 pb-20 px-2 md:px-0">
                <div className="bg-white border-2 border-red-200 rounded-xl shadow-lg p-6 md:p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-red-100 text-red-600">
                            <AlertCircle size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-slate-800">{t('simulator.safetyIntervention')}</h2>
                            <p className="text-red-600 font-medium text-sm">Treatment plan flagged for clinical review.</p>
                        </div>
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed text-sm md:text-base">{result.text}</p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <ul className="space-y-2">
                            {result.issues.map((issue: string, idx: number) => (
                                <li key={idx} className="flex items-start text-sm text-red-700">
                                    <span className="mr-2">•</span> {issue}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button onClick={() => setStep('treat')} className="w-full sm:w-auto px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-50">{t('simulator.revise')}</button>
                    <button onClick={resetSim} className="w-full sm:w-auto px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 font-semibold">{t('simulator.exit')}</button>
                </div>
            </div>
          );
      }

      return (
        <div className="max-w-4xl mx-auto animate-fade-in mt-4 md:mt-6 pb-20 flex flex-col md:flex-row gap-6">
            <div className="flex-1 order-2 md:order-1">
                <div className="bg-white border-2 border-emerald-500 rounded-xl shadow-lg p-6 md:p-8 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-600">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-slate-800">{t('simulator.ordersProcessed')}</h2>
                            <p className="text-emerald-600 font-medium text-sm">Plan aligns with competency standards.</p>
                        </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 italic text-sm md:text-base">"{result.text}"</p>
                    {result.issues.length > 0 && (
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800">
                             {result.issues.map((i, idx) => <div key={idx}>{i}</div>)}
                        </div>
                    )}
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={() => setStep('follow-up')}
                        className="flex items-center px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-bold shadow-lg shadow-indigo-200 w-full justify-center"
                    >
                        <Calendar className="mr-2" size={20} /> {t('simulator.visit2')}
                    </button>
                </div>
            </div>

            <div className="w-full md:w-80 flex flex-col gap-6 order-1 md:order-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm h-64">
                    <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Projected Outcomes</h5>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={getGraphData()}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="week" tick={{fontSize: 10}} />
                            <YAxis domain={[0, 10]} tick={{fontSize: 10}} />
                            <RechartsTooltip />
                            <Legend wrapperStyle={{fontSize: '10px'}} />
                            <Line type="monotone" dataKey="symptomScore" stroke="#ef4444" name="Symptoms" strokeWidth={2} />
                            <Line type="monotone" dataKey="sideEffectScore" stroke="#f59e0b" name="Side Effects" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <SideEffectTracker />
            </div>
        </div>
      );
  }

  // --- View: Follow Up ---
  if (step === 'follow-up' && activeCase && activeCase.followUp) {
      return (
          <div className="max-w-4xl mx-auto animate-fade-in flex flex-col h-full mt-4 md:mt-6 pb-20">
             <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-bold text-slate-800">{t('simulator.visit2')}</h2>
                 <span className="text-slate-500 text-sm font-medium">Patient: {activeCase.name}</span>
             </div>

             <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                 <div className="bg-indigo-50 p-6 border-b border-indigo-100">
                     <h3 className="text-indigo-900 font-bold flex items-center gap-2">
                        <Activity size={18} /> Interval History
                     </h3>
                     <p className="mt-2 text-indigo-800 text-base md:text-lg leading-relaxed">
                        {activeCase.followUp.scenario}
                     </p>
                 </div>
                 
                 <div className="p-4 md:p-8">
                     <div className="grid grid-cols-1 gap-4">
                        {activeCase.followUp.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => submitFollowUp(option)}
                                className="text-left p-5 border-2 border-slate-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all group relative overflow-hidden"
                            >
                                <div className="flex items-start">
                                    <div className="font-bold text-slate-300 text-xl mr-4 group-hover:text-indigo-500 transition-colors">
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <span className="font-medium text-slate-800 text-base md:text-lg">{option.label}</span>
                                </div>
                            </button>
                        ))}
                     </div>
                 </div>
             </div>
          </div>
      );
  }

  // --- View: Final Feedback ---
  if (step === 'feedback-final' && selectedFollowUpOption) {
      return (
        <div className="max-w-4xl mx-auto animate-fade-in mt-4 md:mt-10 pb-20 flex flex-col md:flex-row gap-6">
            <div className="flex-1 order-2 md:order-1">
                 <div className={`rounded-xl shadow-lg border-2 p-6 md:p-8 mb-8 ${selectedFollowUpOption.isCorrect ? 'bg-white border-emerald-500' : 'bg-white border-red-200'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 ${selectedFollowUpOption.isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                            {selectedFollowUpOption.isCorrect ? <CheckCircle size={32} /> : <AlertCircle size={32} />}
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-bold text-slate-800">
                                {selectedFollowUpOption.isCorrect ? t('simulator.caseConcluded') : t('simulator.assessmentError')}
                            </h2>
                        </div>
                    </div>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-base md:text-lg font-medium text-slate-900 mb-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                            You selected: <span className="italic">{selectedFollowUpOption.label}</span>
                        </p>
                        <div className={`p-6 rounded-lg border text-base md:text-lg leading-relaxed ${selectedFollowUpOption.isCorrect ? 'bg-emerald-50 border-emerald-100 text-emerald-800' : 'bg-red-50 border-red-100 text-red-800'}`}>
                            {selectedFollowUpOption.feedback}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={resetSim}
                        className="w-full md:w-auto flex items-center justify-center px-6 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold shadow-xl"
                    >
                        <RefreshCcw className="mr-2" size={18} /> {t('simulator.nextPatient')}
                    </button>
                </div>
            </div>
            
             <div className="w-full md:w-80 order-1 md:order-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm h-64 sticky top-4">
                     <h5 className="text-xs font-bold text-slate-400 uppercase mb-2">Final Outcomes</h5>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={getGraphData()}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="week" tick={{fontSize: 10}} />
                            <YAxis domain={[0, 10]} tick={{fontSize: 10}} />
                            <RechartsTooltip />
                            <Legend wrapperStyle={{fontSize: '10px'}} />
                            <Line type="monotone" dataKey="symptomScore" stroke="#ef4444" name="Symptoms" strokeWidth={2} />
                            <Line type="monotone" dataKey="sideEffectScore" stroke="#f59e0b" name="Side Effects" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
             </div>
        </div>
      );
  }

  return <div>Error State</div>;
};

export default Simulation;

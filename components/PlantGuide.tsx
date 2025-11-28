
import React, { useState, useEffect } from 'react';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { Leaf, Hexagon, Zap, Thermometer, Brain, Activity, ArrowLeft } from 'lucide-react';

const PlantGuide: React.FC = () => {
  const { language } = useLanguage();
  const { plantCompounds } = getCurriculumData(language);
  
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cannabinoid' | 'terpene' | 'flavonoid'>('all');
  const [selectedCompoundId, setSelectedCompoundId] = useState<string | null>(null);
  
  // Mobile Master-Detail Logic
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  useEffect(() => {
    // Select the first one available in the new language set on mount/switch
    // But don't force open mobile detail
    if (plantCompounds.length > 0 && !selectedCompoundId) {
       setSelectedCompoundId(plantCompounds[0].id);
    }
  }, [plantCompounds, selectedCompoundId]);

  const handleCompoundSelect = (id: string) => {
    setSelectedCompoundId(id);
    setShowMobileDetail(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredCompounds = plantCompounds.filter(
    c => selectedCategory === 'all' || c.category === selectedCategory
  );

  const activeCompound = plantCompounds.find(c => c.id === selectedCompoundId) || plantCompounds[0];

  const getTempPercentage = (tempStr?: string) => {
    if (!tempStr) return 0;
    const match = tempStr.match(/(\d+)°C/);
    if (match) {
        const val = parseInt(match[1]);
        return Math.min((val / 220) * 100, 100);
    }
    return 0;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full md:h-[calc(100vh-140px)] animate-fade-in relative">
      
      {/* Sidebar List */}
      <div className={`
        w-full lg:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex-col
        ${showMobileDetail ? 'hidden lg:flex' : 'flex'}
        h-full
      `}>
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
            <Leaf className="text-emerald-600" size={20} />
            Pharmacology Guide
          </h2>
          
          {/* Horizontal Scrolling Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
            {(['all', 'cannabinoid', 'terpene', 'flavonoid'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat === 'all' ? 'All' : cat + 's'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-slate-50/50">
          {filteredCompounds.map((compound) => (
            <button
              key={compound.id}
              onClick={() => handleCompoundSelect(compound.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group active:scale-[0.98] ${
                activeCompound?.id === compound.id
                  ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                        compound.category === 'cannabinoid' ? 'bg-indigo-50 text-indigo-500' : 'bg-green-50 text-green-500'
                    }`}>
                        {compound.category === 'cannabinoid' ? <Hexagon size={18} /> : <Leaf size={18} />}
                    </div>
                    <div>
                        <h3 className={`font-bold text-sm ${activeCompound?.id === compound.id ? 'text-emerald-700' : 'text-slate-800'}`}>
                            {compound.name}
                        </h3>
                        <span className="text-[10px] text-slate-400 capitalize bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block">
                            {compound.category}
                        </span>
                    </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail View */}
      <div className={`
        flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex-col
        ${showMobileDetail ? 'flex' : 'hidden lg:flex'}
        h-full
      `}>
        {activeCompound ? (
          <div className="flex flex-col h-full">
             <div className="p-4 md:p-6 border-b border-slate-100 sticky top-0 bg-white z-10">
                {/* Mobile Back Button */}
                <div className="lg:hidden mb-4">
                    <button 
                        onClick={() => setShowMobileDetail(false)}
                        className="flex items-center text-slate-500 hover:text-slate-800 text-sm font-medium px-2 py-1 -ml-2 rounded-md active:bg-slate-100"
                    >
                        <ArrowLeft size={18} className="mr-1" /> Back to Compounds
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100 shrink-0">
                        {activeCompound.category === 'cannabinoid' ? <Hexagon size={32} /> : <Leaf size={32} />}
                    </div>
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">{activeCompound.name}</h1>
                        <p className="text-emerald-600 font-medium capitalize text-sm">{activeCompound.category}</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mb-8 leading-relaxed text-slate-700 text-base md:text-lg">
                  {activeCompound.description}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Therapeutic Effects */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                    <Zap className="text-amber-500" size={18} /> Therapeutic Potential
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCompound.therapeuticEffects.map((effect, idx) => (
                      <span key={idx} className="bg-amber-50 text-amber-800 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border border-amber-100">
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditions */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">
                    <Activity className="text-blue-500" size={18} /> Common Indications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCompound.commonConditions.map((cond, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border border-blue-100">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entourage Effect Section */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-3">
                    <Brain className="text-indigo-600" size={20} /> Entourage Role
                  </h3>
                  <p className="text-indigo-800 italic font-medium leading-relaxed">
                    "{activeCompound.entourageRole}"
                  </p>
                </div>
                {/* Decorative background element */}
                <Hexagon className="absolute -right-4 -bottom-4 text-indigo-100 opacity-50 rotate-12" size={120} />
              </div>

              {/* Physical Properties (Visualized) */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm mb-10">
                  <div className="flex items-center gap-2 text-sm text-slate-800 font-bold mb-4">
                     <Thermometer size={16} className="text-red-500" /> Vaporization Point
                  </div>
                  <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden mb-2 border border-slate-100">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-300 via-yellow-300 to-red-400 transition-all duration-700"
                        style={{ width: `${getTempPercentage(activeCompound.boilingPoint)}%` }}
                      ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                      <span>0°C</span>
                      <span className="font-mono text-slate-800 font-bold text-sm bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                          {activeCompound.boilingPoint || 'N/A'}
                      </span>
                      <span>220°C</span>
                  </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">
            Select a compound to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantGuide;

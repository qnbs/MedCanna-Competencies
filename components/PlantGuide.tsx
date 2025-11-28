
import React, { useState, useEffect } from 'react';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { Leaf, Hexagon, Zap, Thermometer, Brain, Activity } from 'lucide-react';

const PlantGuide: React.FC = () => {
  const { language } = useLanguage();
  const { plantCompounds } = getCurriculumData(language);
  
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cannabinoid' | 'terpene' | 'flavonoid'>('all');
  const [selectedCompoundId, setSelectedCompoundId] = useState<string | null>(null);

  useEffect(() => {
    // Select the first one available in the new language set on mount/switch
    if (plantCompounds.length > 0 && !selectedCompoundId) {
       setSelectedCompoundId(plantCompounds[0].id);
    }
  }, [plantCompounds, selectedCompoundId]);

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
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] animate-fade-in">
      {/* Sidebar List */}
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-bold text-slate-800 flex items-center gap-2">
            <Leaf className="text-emerald-600" size={20} />
            Pharmacology Guide
          </h2>
          <div className="flex gap-2 mt-4 flex-wrap">
            {(['all', 'cannabinoid', 'terpene', 'flavonoid'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All' : cat + 's'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-slate-50/50">
          {filteredCompounds.map((compound) => (
            <button
              key={compound.id}
              onClick={() => setSelectedCompoundId(compound.id)}
              className={`w-full text-left p-3 rounded-lg border transition-all duration-200 group ${
                activeCompound?.id === compound.id
                  ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-semibold ${activeCompound?.id === compound.id ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {compound.name}
                  </h3>
                  <span className="text-xs text-slate-400 capitalize bg-slate-100 px-2 py-0.5 rounded-md mt-1 inline-block">
                    {compound.category}
                  </span>
                </div>
                {compound.category === 'cannabinoid' ? (
                  <Hexagon size={16} className="text-slate-300 group-hover:text-emerald-400" />
                ) : (
                  <Leaf size={16} className="text-slate-300 group-hover:text-emerald-400" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail View */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden overflow-y-auto relative">
        {activeCompound ? (
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                {activeCompound.category === 'cannabinoid' ? <Hexagon size={28} /> : <Leaf size={28} />}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{activeCompound.name}</h1>
                <p className="text-emerald-600 font-medium capitalize">{activeCompound.category}</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-6">
                <p className="text-slate-700 leading-relaxed text-lg">
                  {activeCompound.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Therapeutic Effects */}
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                    <Zap className="text-amber-500" size={18} /> Therapeutic Potential
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCompound.therapeuticEffects.map((effect, idx) => (
                      <span key={idx} className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm border border-amber-100">
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conditions */}
                <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                  <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                    <Activity className="text-blue-500" size={18} /> Common Indications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCompound.commonConditions.map((cond, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-100">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Entourage Effect Section */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 mb-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-2">
                    <Brain className="text-indigo-600" size={20} /> Entourage Role
                  </h3>
                  <p className="text-indigo-800 italic font-medium">
                    "{activeCompound.entourageRole}"
                  </p>
                  <div className="mt-3 text-xs text-indigo-500 font-bold uppercase tracking-wide">
                    Context: Competency 2.b (Synergy)
                  </div>
                </div>
                {/* Decorative background element */}
                <Hexagon className="absolute -right-4 -bottom-4 text-indigo-100 opacity-50 rotate-12" size={120} />
              </div>

              {/* Physical Properties (Visualized) */}
              <div className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-800 font-bold mb-3">
                     <Thermometer size={16} className="text-red-500" /> Vaporization Point
                  </div>
                  <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden mb-2">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-300 to-red-400 transition-all duration-700"
                        style={{ width: `${getTempPercentage(activeCompound.boilingPoint)}%` }}
                      ></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                      <span>0°C</span>
                      <span className="font-mono text-slate-700 font-bold text-sm bg-slate-50 px-2 rounded">
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

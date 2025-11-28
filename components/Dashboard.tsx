
import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Brain, Scale, Activity, AlertTriangle, Stethoscope, Beaker, Leaf } from 'lucide-react';

interface DashboardProps {
  onNavigate: (view: 'curriculum' | 'simulation' | 'pharmacology', domainId?: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const { competencies } = getCurriculumData(language);
  
  // Prepare data for the Radar Chart (Conceptual weight of each domain)
  const data = competencies.map(c => ({
    subject: c.shortTitle,
    A: 100, // Full competency
    fullMark: 100,
  }));

  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Brain className="w-6 h-6 text-emerald-600" />;
      case 2: return <BookOpen className="w-6 h-6 text-emerald-600" />;
      case 3: return <Scale className="w-6 h-6 text-emerald-600" />;
      case 4: return <Activity className="w-6 h-6 text-emerald-600" />;
      case 5: return <AlertTriangle className="w-6 h-6 text-emerald-600" />;
      case 6: return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      default: return <BookOpen className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in pb-20">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-4">{t('dashboard.title')}</h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed">
          {t('dashboard.intro')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            {/* Visual Representation */}
            <div className="h-64 md:h-80 w-full bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 overflow-hidden relative">
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#475569', fontSize: 10 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Competency Scope"
                    dataKey="A"
                    stroke="#059669"
                    strokeWidth={2}
                    fill="#10b981"
                    fillOpacity={0.3}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
              <div className="absolute top-2 right-2 text-[10px] text-slate-400 font-mono hidden md:block">Scope Visualization</div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {competencies.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => onNavigate('curriculum', comp.id)}
                  className="flex items-start p-3 md:p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all duration-200 text-left group active:bg-slate-50"
                >
                  <div className="mr-3 mt-1 bg-emerald-50 p-2 rounded-full group-hover:bg-emerald-100 transition-colors shrink-0">
                    {getIcon(comp.id)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-sm md:text-base group-hover:text-emerald-700 transition-colors">
                      {comp.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-tight">
                      {comp.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
        </div>

        {/* Featured Tools Section */}
        <h3 className="text-base md:text-lg font-bold text-slate-800 mb-4 border-t border-slate-100 pt-6">{t('dashboard.toolsTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
           <button 
             onClick={() => onNavigate('simulation')}
             className="flex items-center p-4 md:p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl hover:shadow-md transition-all group active:scale-[0.99]"
           >
              <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors shrink-0">
                 <Beaker className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                 <h4 className="font-bold text-slate-800">{t('dashboard.simTitle')}</h4>
                 <p className="text-xs md:text-sm text-slate-600 mt-1">{t('dashboard.simDesc')}</p>
              </div>
           </button>

           <button 
             onClick={() => onNavigate('pharmacology')}
             className="flex items-center p-4 md:p-5 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-xl hover:shadow-md transition-all group active:scale-[0.99]"
           >
              <div className="bg-emerald-100 p-3 rounded-lg mr-4 group-hover:bg-emerald-200 transition-colors shrink-0">
                 <Leaf className="text-emerald-600" size={24} />
              </div>
              <div className="text-left">
                 <h4 className="font-bold text-slate-800">{t('dashboard.pharmTitle')}</h4>
                 <p className="text-xs md:text-sm text-slate-600 mt-1">{t('dashboard.pharmDesc')}</p>
              </div>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

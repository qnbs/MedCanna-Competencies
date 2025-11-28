
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { HelpCircle, LayoutDashboard, BookOpen, Beaker, Leaf, Brain, GraduationCap } from 'lucide-react';

const Help: React.FC = () => {
  const { t } = useLanguage();

  const guides = [
    { icon: <LayoutDashboard />, title: "Dashboard", desc: "Start here for an overview of your progress and the competency framework." },
    { icon: <BookOpen />, title: "Curriculum", desc: "Detailed breakdown of all 6 competency domains. Use the search bar to find specific topics." },
    { icon: <Beaker />, title: "Simulator", desc: "Apply knowledge in virtual patient cases. Make clinical decisions and see outcomes." },
    { icon: <Leaf />, title: "Pharmacology", desc: "Reference guide for cannabinoids and terpenes. Click on compounds to see boiling points and effects." },
    { icon: <Brain />, title: "AI Tutor", desc: "Ask questions naturally. The AI is grounded specifically in the 2025 Consensus Statement." },
    { icon: <GraduationCap />, title: "Quiz", desc: "Test your retention of the material with interactive multiple-choice questions." },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <div className="bg-indigo-100 p-2 rounded-lg text-indigo-700">
             <HelpCircle size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{t('help.title')}</h2>
        </div>

        <div className="p-8">
            <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">{t('help.navGuide')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:border-emerald-200 transition-colors">
                        <div className="text-emerald-600 bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                            {guide.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800 mb-1">{guide.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{guide.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-4">{t('help.faq')}</h4>
                <div className="space-y-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-700">
                            <span>Is this data official?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-slate-600 mt-3 group-open:animate-fadeIn text-sm">
                            Yes, the content is directly adapted from the 2025 JAMA Network Open consensus statement by Zolotov et al.
                        </p>
                    </details>
                     <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-700">
                            <span>Does the AI make up answers?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <p className="text-slate-600 mt-3 group-open:animate-fadeIn text-sm">
                            The AI is strictly instructed to only answer based on the provided competency curriculum. However, as with all LLMs, hallucinations are possible. Always verify with the source text.
                        </p>
                    </details>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
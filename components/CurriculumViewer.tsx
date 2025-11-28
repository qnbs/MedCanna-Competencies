
import React, { useState, useEffect, useMemo } from 'react';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronRight, Book, Search, X } from 'lucide-react';
import { CompetencyDomain } from '../types';

interface CurriculumViewerProps {
  initialDomainId?: number;
}

const CurriculumViewer: React.FC<CurriculumViewerProps> = ({ initialDomainId }) => {
  const { language, t } = useLanguage();
  const { competencies } = getCurriculumData(language);
  
  const [activeDomainId, setActiveDomainId] = useState<number>(initialDomainId || 1);
  const [expandedPoints, setExpandedPoints] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (initialDomainId) {
      setActiveDomainId(initialDomainId);
    }
  }, [initialDomainId]);

  const togglePoint = (pointId: string) => {
    setExpandedPoints(prev => ({
      ...prev,
      [pointId]: !prev[pointId]
    }));
  };

  // --- Search Logic ---
  const filteredCompetencies = useMemo(() => {
    if (!searchTerm.trim()) return competencies;

    const lowerTerm = searchTerm.toLowerCase();

    return competencies.map(domain => {
      // Check if domain matches
      const domainMatches = 
        domain.title.toLowerCase().includes(lowerTerm) || 
        domain.description.toLowerCase().includes(lowerTerm);

      // Filter points
      const matchingPoints = domain.points.filter(point => {
        const pointMatches = point.text.toLowerCase().includes(lowerTerm);
        const subPointsMatch = point.subPoints?.some(sp => sp.text.toLowerCase().includes(lowerTerm));
        return pointMatches || subPointsMatch;
      });

      // Return domain if it matches OR if it has matching points
      if (domainMatches || matchingPoints.length > 0) {
        return {
          ...domain,
          points: matchingPoints.length > 0 ? matchingPoints : domain.points // specific points or all if domain matches
        };
      }
      return null;
    }).filter((c): c is CompetencyDomain => c !== null);
  }, [searchTerm, competencies]);

  const activeDomain = filteredCompetencies.find(c => c.id === activeDomainId) || filteredCompetencies[0];

  // Auto-expand if searching
  useEffect(() => {
    if (searchTerm.trim() && filteredCompetencies.length > 0) {
        setActiveDomainId(filteredCompetencies[0].id);
        const newExpanded: Record<string, boolean> = {};
        filteredCompetencies.forEach(d => {
            d.points.forEach(p => {
                newExpanded[`${d.id}-${p.letter}`] = true;
            });
        });
        setExpandedPoints(newExpanded);
    }
  }, [searchTerm, filteredCompetencies]);


  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] animate-fade-in">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <h3 className="font-bold text-slate-700 flex items-center mb-3">
            <Book className="w-4 h-4 mr-2" /> {t('curriculum.domains')}
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
                type="text" 
                placeholder={t('curriculum.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchTerm && (
                <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                    <X size={14} />
                </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredCompetencies.length > 0 ? (
            filteredCompetencies.map((c) => (
                <button
                key={c.id}
                onClick={() => setActiveDomainId(c.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeDomain?.id === c.id
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                >
                <div className="flex items-center">
                    <span className="bg-slate-200 text-slate-600 text-xs w-5 h-5 flex items-center justify-center rounded-full mr-3 shrink-0">
                    {c.id}
                    </span>
                    <span className="line-clamp-1">{c.shortTitle}</span>
                </div>
                </button>
            ))
          ) : (
            <div className="p-4 text-center text-slate-400 text-sm">
                {t('curriculum.noResults')} "{searchTerm}"
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        {activeDomain ? (
            <>
                <div className="p-6 border-b border-slate-100 bg-white">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded uppercase tracking-wide">
                        Competency {activeDomain.id}
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{activeDomain.title}</h2>
                <p className="text-slate-500 mt-2 text-sm md:text-base">{activeDomain.description}</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
                <div className="space-y-4">
                    {activeDomain.points.map((point) => {
                    const uniqueId = `${activeDomain.id}-${point.letter}`;
                    const hasSubPoints = point.subPoints && point.subPoints.length > 0;
                    const isExpanded = expandedPoints[uniqueId];

                    return (
                        <div key={uniqueId} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div 
                            className={`p-4 flex items-start gap-3 ${hasSubPoints ? 'cursor-pointer hover:bg-slate-50' : ''}`}
                            onClick={() => hasSubPoints && togglePoint(uniqueId)}
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm border border-emerald-100">
                            {point.letter}
                            </div>
                            <div className="flex-1">
                            <p className="text-slate-800 leading-relaxed font-medium">{point.text}</p>
                            </div>
                            {hasSubPoints && (
                            <div className="text-slate-400 mt-1">
                                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                            </div>
                            )}
                        </div>
                        
                        {/* Subpoints Accordion */}
                        {hasSubPoints && isExpanded && (
                            <div className="px-4 pb-4 pl-14">
                            <div className="space-y-3 pt-2 border-t border-slate-100">
                                {point.subPoints!.map((sub, sIdx) => (
                                <div key={sIdx} className="flex gap-3 text-sm text-slate-600">
                                    <span className="font-mono text-emerald-600 w-6 text-right shrink-0">{sub.label}.</span>
                                    <span>{sub.text}</span>
                                </div>
                                ))}
                            </div>
                            </div>
                        )}
                        </div>
                    );
                    })}
                </div>
                </div>
            </>
        ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
                {t('curriculum.selectPrompt')}
            </div>
        )}
      </div>
    </div>
  );
};

export default CurriculumViewer;

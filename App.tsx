
import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Brain, GraduationCap, Info, Beaker, Leaf, Settings as SettingsIcon, HelpCircle } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Dashboard from './components/Dashboard';
import CurriculumViewer from './components/CurriculumViewer';
import AITutor from './components/AITutor';
import Quiz from './components/Quiz';
import Simulation from './components/Simulation';
import PlantGuide from './components/PlantGuide';
import Settings from './components/Settings';
import Help from './components/Help';
import { ViewState } from './types';

// Wrapper component to use the context hooks
const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedDomain, setSelectedDomain] = useState<number | undefined>(undefined);

  const handleNavigate = (view: ViewState, domainId?: number) => {
    setCurrentView(view);
    if (domainId) {
      setSelectedDomain(domainId);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onNavigate={(view, id) => handleNavigate(view, id)} />;
      case 'curriculum':
        return <CurriculumViewer initialDomainId={selectedDomain} />;
      case 'tutor':
        return <AITutor />;
      case 'quiz':
        return <Quiz />;
      case 'simulation':
        return <Simulation />;
      case 'pharmacology':
        return <PlantGuide />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      case 'about':
        return (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">About This Project</h1>
            <div className="prose prose-slate max-w-none text-slate-600">
              <p className="mb-4">
                This educational application is a digital adaptation of the "Medical Cannabis Competencies" consensus statement by 
                <strong> Zolotov Y, Temple LM, Isralowitz R, et al.</strong>, published in <em>JAMA Network Open</em> (2025).
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Original Citation</h3>
              <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 italic font-serif">
                Zolotov Y, Temple LM, Isralowitz R, et al. Developing medical cannabis competencies: a consensus statement. 
                JAMA Netw Open. 2025;8(10):e2535049. doi:10.1001/jamanetworkopen.2025.35049
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Purpose</h3>
              <p>
                As medical cannabis becomes increasingly integrated into clinical practice, standardization of education is critical. 
                This app serves as a reference tool for clinicians, students, and educators to explore the 6 Core Competency Domains defined in the study.
              </p>
              <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">Disclaimer</h3>
              <p>
                This application is for educational purposes only. It does not constitute medical advice. 
                Always refer to the original publication and local regulations when making clinical decisions.
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard onNavigate={(view, id) => handleNavigate(view as ViewState, id)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-slate-800">MedCanna</span>
        </div>
        <div className="flex gap-4">
            <button className="text-slate-500 hover:text-emerald-600" onClick={() => setCurrentView('settings')}>
                <SettingsIcon size={24} />
            </button>
             <button className="text-slate-500 hover:text-emerald-600" onClick={() => setCurrentView('help')}>
                <HelpCircle size={24} />
            </button>
        </div>
      </div>

      {/* Sidebar Navigation (Desktop) / Bottom Nav (Mobile) */}
      <nav className="
        fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-10 flex justify-around p-2
        md:relative md:w-20 md:flex-col md:justify-start md:border-t-0 md:border-r md:h-screen md:p-4 md:gap-6
        lg:w-64 overflow-y-auto scrollbar-hide
      ">
        <div className="hidden md:flex items-center gap-3 mb-6 px-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">MC</div>
            <span className="font-bold text-slate-800 text-lg lg:block hidden">MedCanna</span>
        </div>

        <NavItem 
          icon={<LayoutDashboard size={24} />} 
          label={t('nav.dashboard')} 
          active={currentView === 'dashboard'} 
          onClick={() => setCurrentView('dashboard')} 
        />
        <NavItem 
          icon={<BookOpen size={24} />} 
          label={t('nav.curriculum')}
          active={currentView === 'curriculum'} 
          onClick={() => setCurrentView('curriculum')} 
        />
        <NavItem 
          icon={<Beaker size={24} />} 
          label={t('nav.simulator')}
          active={currentView === 'simulation'} 
          onClick={() => setCurrentView('simulation')} 
        />
        <NavItem 
          icon={<Leaf size={24} />} 
          label={t('nav.pharmacology')}
          active={currentView === 'pharmacology'} 
          onClick={() => setCurrentView('pharmacology')} 
        />
        <NavItem 
          icon={<Brain size={24} />} 
          label={t('nav.tutor')}
          active={currentView === 'tutor'} 
          onClick={() => setCurrentView('tutor')} 
        />
        <NavItem 
          icon={<GraduationCap size={24} />} 
          label={t('nav.quiz')}
          active={currentView === 'quiz'} 
          onClick={() => setCurrentView('quiz')} 
        />
        
        <div className="md:mt-auto space-y-2">
             <NavItem 
                icon={<SettingsIcon size={24} />} 
                label={t('nav.settings')}
                active={currentView === 'settings'} 
                onClick={() => setCurrentView('settings')} 
            />
             <NavItem 
                icon={<HelpCircle size={24} />} 
                label={t('nav.help')}
                active={currentView === 'help'} 
                onClick={() => setCurrentView('help')} 
            />
            <NavItem 
                icon={<Info size={24} />} 
                label={t('nav.about')}
                active={currentView === 'about'} 
                onClick={() => setCurrentView('about')} 
            />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto mb-16 md:mb-0 max-w-7xl mx-auto w-full">
        {renderContent()}
      </main>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 p-3 rounded-xl transition-all duration-200
        md:w-full md:justify-start justify-center
        ${active 
          ? 'bg-emerald-50 text-emerald-600 shadow-sm' 
          : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
        }
      `}
      title={label}
    >
      <div className={active ? "scale-110 transition-transform" : ""}>{icon}</div>
      <span className={`text-sm font-medium hidden lg:block ${active ? 'font-semibold' : ''}`}>{label}</span>
    </button>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;

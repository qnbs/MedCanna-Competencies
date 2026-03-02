
import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Brain, GraduationCap, Info, Beaker, Leaf, Settings as SettingsIcon, HelpCircle, Library } from 'lucide-react';
import References from './components/References';
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
  const { language, t } = useLanguage();
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedDomain, setSelectedDomain] = useState<number | undefined>(undefined);
  const [showReferences, setShowReferences] = useState(false);

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
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 animate-fade-in">
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">About This Project</h1>
            <div className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base">
              <p className="mb-4">
                This educational application is a digital adaptation of the "Medical Cannabis Competencies" consensus statement by 
                <strong> Zolotov Y, Temple LM, Isralowitz R, et al.</strong>, published in <em>JAMA Network Open</em> (2025).
              </p>
              <h3 className="text-base md:text-lg font-bold text-slate-800 mt-6 mb-2">Original Citation</h3>
              <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 italic font-serif text-xs md:text-sm">
                Zolotov Y, Temple LM, Isralowitz R, et al. Developing medical cannabis competencies: a consensus statement. 
                JAMA Netw Open. 2025;8(10):e2535049. doi:10.1001/jamanetworkopen.2025.35049
              </p>
              <h3 className="text-base md:text-lg font-bold text-slate-800 mt-6 mb-2">Purpose</h3>
              <p>
                As medical cannabis becomes increasingly integrated into clinical practice, standardization of education is critical. 
                This app serves as a reference tool for clinicians, students, and educators to explore the 6 Core Competency Domains defined in the study.
              </p>
              <h3 className="text-base md:text-lg font-bold text-slate-800 mt-6 mb-2">Disclaimer</h3>
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
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row safe-area-inset-bottom">
      {/* Mobile Header - Sticky */}
      <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-slate-200 p-3 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">M</div>
            <span className="font-bold text-slate-800 text-lg">MedCanna</span>
        </div>
        <div className="flex gap-2">
            <button className="p-2 text-slate-500 hover:text-emerald-600 active:scale-95 transition-transform" onClick={() => setShowReferences(true)} title={t('nav.references') || 'References'} aria-label={t('nav.references') || 'References'}>
                <Library size={22} />
            </button>
            <button className="p-2 text-slate-500 hover:text-emerald-600 active:scale-95 transition-transform" onClick={() => setCurrentView('settings')} aria-label={t('nav.settings') || 'Settings'}>
                <SettingsIcon size={22} />
            </button>
             <button className="p-2 text-slate-500 hover:text-emerald-600 active:scale-95 transition-transform" onClick={() => setCurrentView('help')} aria-label={t('nav.help') || 'Help'}>
                <HelpCircle size={22} />
            </button>
        </div>
      </div>

      {/* Sidebar Navigation (Desktop) / Bottom Nav (Mobile) */}
      <nav aria-label="Main navigation" className="
        fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 flex justify-between items-center px-4 pb-safe pt-2
        md:relative md:w-20 md:flex-col md:justify-start md:border-t-0 md:border-r md:h-screen md:p-4 md:gap-4 md:pb-4 md:pt-6
        lg:w-64 overflow-y-auto scrollbar-hide
      ">
        <div className="hidden md:flex items-center gap-3 mb-6 px-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200/50">MC</div>
            <span className="font-bold text-slate-800 text-lg lg:block hidden">MedCanna</span>
        </div>

        {/* Primary Nav Items */}
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
        
        {/* Secondary Nav Items - Hidden on Mobile Main Bar (could put in 'More' menu if needed, but 5 items is max for bottom bar) */}
        {/* We will swap Quiz and Tutor for mobile optimization to keep top features accessible */}
        <div className="hidden md:block w-full space-y-4">
             <div className="h-px bg-slate-100 w-full my-2"></div>
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
        </div>

        {/* Mobile Specific 'More' or direct access if space permits. 
            For this UI, we'll put Tutor in the main bar for Mobile as it's a key feature, 
            and Quiz accessible via Dashboard or we can squeeze 5 items. 
        */}
        <div className="md:hidden">
             <NavItem 
              icon={<Brain size={24} />} 
              label={t('nav.tutor')}
              active={currentView === 'tutor'} 
              onClick={() => setCurrentView('tutor')} 
              compactMobile
            />
        </div>
        
        <div className="hidden md:block md:mt-auto space-y-2 w-full">
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
                icon={<Library size={24} />} 
                label={language === 'de' ? 'Referenzen' : 'References'}
                active={false} 
                onClick={() => setShowReferences(true)} 
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
      {/* Added pb-24 to ensure content isn't hidden behind fixed bottom nav on mobile */}
      <main id="main-content" role="main" className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-60px)] md:h-screen w-full pb-28 md:pb-8">
        <div className="max-w-7xl mx-auto w-full h-full">
            {renderContent()}
        </div>
      </main>

      {/* References Modal */}
      <References isOpen={showReferences} onClose={() => setShowReferences(false)} />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  compactMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick, compactMobile }) => {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      className={`
        flex flex-col md:flex-row items-center md:gap-3 p-2 md:p-3 rounded-xl transition-all duration-200
        md:w-full md:justify-start justify-center flex-1 md:flex-none relative overflow-hidden group
        ${active 
          ? 'text-emerald-600 md:bg-emerald-50' 
          : 'text-slate-400 hover:text-slate-600 md:hover:bg-slate-50'
        }
      `}
      title={label}
    >
      {/* Active Indicator for Mobile */}
      {active && (
        <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-emerald-500 rounded-b-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
      )}

      <div className={`transition-transform duration-200 ${active ? 'md:scale-110 -translate-y-1 md:translate-y-0' : ''}`}>
        {icon}
      </div>
      <span className={`text-[10px] md:text-sm font-medium md:block mt-1 md:mt-0 ${active ? 'font-bold' : ''}`}>
        {label}
      </span>
    </button>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;

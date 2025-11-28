
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Settings as SettingsIcon, Globe, Trash2, Check, RefreshCw } from 'lucide-react';

const Settings: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [cleared, setCleared] = useState(false);

  const handleClearData = () => {
    // In a real app with persistence, this would clear localStorage/DB
    setCleared(true);
    setTimeout(() => setCleared(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <div className="bg-slate-200 p-2 rounded-lg text-slate-700">
             <SettingsIcon size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-800">{t('settings.title')}</h2>
        </div>

        <div className="p-6 space-y-8">
          {/* Language Selection */}
          <div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Globe className="text-emerald-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">{t('settings.language')}</h3>
                <p className="text-slate-500 text-sm mb-4">{t('settings.languageDesc')}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      language === 'en' 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇺🇸</span>
                      <span className="font-medium">English</span>
                    </div>
                    {language === 'en' && <Check size={20} />}
                  </button>

                  <button
                    onClick={() => setLanguage('de')}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      language === 'de' 
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🇩🇪</span>
                      <span className="font-medium">Deutsch</span>
                    </div>
                    {language === 'de' && <Check size={20} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Trash2 className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{t('settings.data')}</h3>
                <p className="text-slate-500 text-sm mb-4">{t('settings.clearDataDesc')}</p>
                
                <button
                  onClick={handleClearData}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    cleared 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-50 text-red-600 hover:bg-red-100'
                  }`}
                >
                  {cleared ? (
                    <>
                      <Check size={18} /> {t('settings.cleared')}
                    </>
                  ) : (
                    <>
                      <RefreshCw size={18} /> {t('settings.clearData')}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

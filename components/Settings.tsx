
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Settings as SettingsIcon, Globe, Trash2, Check, RefreshCw, Key, Eye, EyeOff, AlertTriangle, ShieldCheck } from 'lucide-react';
import { saveApiKey, loadApiKey, deleteApiKey } from '../services/apiKeyStore';

const Settings: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [cleared, setCleared] = useState(false);

  // API Key State
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [hasStoredKey, setHasStoredKey] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [keySaveStatus, setKeySaveStatus] = useState<'idle' | 'saved' | 'deleted'>('idle');

  useEffect(() => {
    loadApiKey().then(key => {
      setHasStoredKey(!!key);
    });
  }, []);

  const handleSaveKey = async () => {
    if (!apiKeyInput.trim()) return;
    await saveApiKey(apiKeyInput.trim());
    setHasStoredKey(true);
    setApiKeyInput('');
    setShowKey(false);
    setKeySaveStatus('saved');
    setTimeout(() => setKeySaveStatus('idle'), 2500);
  };

  const handleDeleteKey = async () => {
    await deleteApiKey();
    setHasStoredKey(false);
    setKeySaveStatus('deleted');
    setTimeout(() => setKeySaveStatus('idle'), 2500);
  };

  const handleClearData = () => {
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

          {/* === Gemini API Key Section === */}
          <div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Key className="text-indigo-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {language === 'de' ? 'Gemini API-Schlüssel' : 'Gemini API Key'}
                </h3>
                <p className="text-slate-500 text-sm mb-3">
                  {language === 'de'
                    ? 'Der KI-Tutor benötigt einen Google Gemini API-Schlüssel. Er wird verschlüsselt lokal in Ihrem Browser gespeichert und niemals an Dritte gesendet.'
                    : 'The AI Tutor requires a Google Gemini API key. It is stored encrypted locally in your browser and never sent to third parties.'}
                </p>

                {/* Security Warning */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 flex gap-2 text-xs text-amber-800">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  <div>
                    <strong>{language === 'de' ? 'Sicherheitshinweis:' : 'Security Notice:'}</strong>{' '}
                    {language === 'de'
                      ? 'Verwenden Sie einen eigenen API-Schlüssel mit Domainbeschränkung (*.github.io) in der Google AI Studio-Konsole. Teilen Sie diesen Schlüssel nicht.'
                      : 'Use your own API key with domain restriction (*.github.io) in the Google AI Studio console. Do not share this key.'}
                  </div>
                </div>

                {/* Status Indicator */}
                {hasStoredKey && (
                  <div className="flex items-center gap-2 mb-3 text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg text-sm">
                    <ShieldCheck size={16} />
                    {language === 'de' ? 'API-Schlüssel gespeichert' : 'API Key stored securely'}
                  </div>
                )}

                {/* Key Input */}
                <div className="flex gap-2 mb-2">
                  <div className="relative flex-1">
                    <input
                      type={showKey ? 'text' : 'password'}
                      value={apiKeyInput}
                      onChange={(e) => setApiKeyInput(e.target.value)}
                      placeholder={hasStoredKey
                        ? (language === 'de' ? 'Neuen Schlüssel eingeben zum Ersetzen...' : 'Enter new key to replace...')
                        : (language === 'de' ? 'AIzaSy... Schlüssel eingeben' : 'Enter your AIzaSy... key')}
                      className="w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white font-mono"
                      aria-label={language === 'de' ? 'Gemini API-Schlüssel' : 'Gemini API Key'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowKey(!showKey)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                      aria-label={showKey ? 'Hide key' : 'Show key'}
                    >
                      {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <button
                    onClick={handleSaveKey}
                    disabled={!apiKeyInput.trim()}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-40 text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {language === 'de' ? 'Speichern' : 'Save'}
                  </button>
                </div>

                {/* Delete Key */}
                {hasStoredKey && (
                  <button
                    onClick={handleDeleteKey}
                    className="text-xs text-red-500 hover:text-red-700 hover:underline mt-1"
                  >
                    {language === 'de' ? 'Gespeicherten Schlüssel löschen' : 'Delete stored key'}
                  </button>
                )}

                {/* Save/Delete Feedback */}
                {keySaveStatus === 'saved' && (
                  <div className="mt-2 text-sm text-emerald-600 flex items-center gap-1 animate-fade-in">
                    <Check size={14} /> {language === 'de' ? 'Schlüssel gespeichert!' : 'Key saved!'}
                  </div>
                )}
                {keySaveStatus === 'deleted' && (
                  <div className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in">
                    <Check size={14} /> {language === 'de' ? 'Schlüssel gelöscht.' : 'Key deleted.'}
                  </div>
                )}

                {/* How to get a key */}
                <details className="mt-4 text-sm">
                  <summary className="cursor-pointer font-medium text-slate-600 hover:text-slate-800">
                    {language === 'de' ? 'Wie bekomme ich einen API-Schlüssel?' : 'How do I get an API key?'}
                  </summary>
                  <ol className="mt-2 ml-4 list-decimal text-slate-500 space-y-1 text-xs leading-relaxed">
                    <li>{language === 'de' ? 'Besuchen Sie' : 'Visit'} <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google AI Studio</a></li>
                    <li>{language === 'de' ? 'Erstellen Sie einen API-Schlüssel' : 'Create an API key'}</li>
                    <li>{language === 'de' ? 'Optional: Beschränken Sie den Schlüssel auf *.github.io' : 'Optional: Restrict key to *.github.io'}</li>
                    <li>{language === 'de' ? 'Fügen Sie den Schlüssel oben ein' : 'Paste the key above'}</li>
                  </ol>
                </details>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8">
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
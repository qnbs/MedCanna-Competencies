
import React, { useState, useRef, useEffect } from 'react';
import { generateTutorResponse } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

const AITutor: React.FC = () => {
  const { language, t } = useLanguage();
  const [input, setInput] = useState('');
  
  // Initial message depends on language.
  // Note: changing language clears history for consistency in this simple implementation
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const initialText = language === 'de' 
      ? "Hallo. Ich bin der MedCanna Kompetenzleitfaden. Ich beantworte Fragen spezifisch zum Konsensus-Statement 2025 von JAMA Network Open. Wie kann ich Ihnen heute helfen?"
      : "Hello. I am the MedCanna Competency Guide. I can answer questions specifically related to the 2025 JAMA Network Open consensus statement on medical cannabis competencies. How can I assist you today?";

    setMessages([{
      role: 'model',
      text: initialText,
      timestamp: new Date()
    }]);
  }, [language]);

  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await generateTutorResponse(userMsg.text, history, language);

    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
                <h3 className="font-bold text-slate-800">{t('tutor.title')}</h3>
                <p className="text-xs text-slate-500">{t('tutor.subtitle')}</p>
            </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'user' ? 'bg-slate-800' : 'bg-emerald-600'
            }`}>
              {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
            </div>
            
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-slate-800 text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
            }`}>
               {/* Simple formatting for line breaks */}
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
              ))}
              <span className={`text-[10px] block mt-2 opacity-60 ${msg.role === 'user' ? 'text-slate-300' : 'text-slate-400'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
           <div className="flex items-start gap-3">
             <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
               <Bot size={16} className="text-white" />
             </div>
             <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" /> {t('tutor.thinking')}
                </div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('tutor.placeholder')}
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-[50px] max-h-[150px] scrollbar-hide"
            style={{ minHeight: '50px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:hover:bg-emerald-600 transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-2">
           {t('tutor.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default AITutor;


import React, { useState, useEffect } from 'react';
import { getCurriculumData } from '../data/curriculumData';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle, XCircle, RefreshCw, Award, ChevronRight } from 'lucide-react';

const Quiz: React.FC = () => {
  const { language } = useLanguage();
  const { quiz } = getCurriculumData(language);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Reset quiz if language changes significantly or just use the new data for the current index
  useEffect(() => {
    // If we switch language mid-quiz, just re-render with new text.
  }, [language]);

  const question = quiz[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (showExplanation) return; // Prevent changing after revealing
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === question.correctIndex) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center mt-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6 text-emerald-600">
          <Award size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-8">
          You scored <span className="font-bold text-emerald-600 text-xl">{score}</span> out of <span className="font-bold text-slate-800 text-xl">{quiz.length}</span>
        </p>
        
        <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-1000" 
            style={{ width: `${(score / quiz.length) * 100}%` }}
          ></div>
        </div>

        <button 
          onClick={resetQuiz}
          className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold"
        >
          <RefreshCw size={18} className="mr-2" /> Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-slate-100 h-2 w-full">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300" 
            style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              Question {currentQuestionIndex + 1} of {quiz.length}
            </span>
            <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">
              Domain {question.domainId}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-6 leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => {
              let btnClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
              
              if (showExplanation) {
                if (idx === question.correctIndex) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-800";
                } else if (idx === selectedOption) {
                  btnClass += "border-red-400 bg-red-50 text-red-800";
                } else {
                  btnClass += "border-slate-100 text-slate-400 opacity-60";
                }
              } else {
                if (idx === selectedOption) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md";
                } else {
                  btnClass += "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  className={btnClass}
                  disabled={showExplanation}
                >
                  <span className="font-medium">{option}</span>
                  {showExplanation && idx === question.correctIndex && <CheckCircle className="text-emerald-500" size={20} />}
                  {showExplanation && idx === selectedOption && idx !== question.correctIndex && <XCircle className="text-red-500" size={20} />}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 animate-fade-in text-blue-800 text-sm">
              <span className="font-bold block mb-1">Explanation:</span>
              {question.explanation}
            </div>
          )}

          <div className="flex justify-end">
            {!showExplanation ? (
              <button
                onClick={handleCheck}
                disabled={selectedOption === null}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center"
              >
                {currentQuestionIndex === quiz.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight size={18} className="ml-1" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
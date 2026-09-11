import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Sparkles, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageCode } from '../types/language';

export const SelectLanguageBar: React.FC = () => {
  const { language, languageConfig, setLanguage, supportedLanguages, isTranslating, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      id="select-language-container" 
      className="w-full mb-2 select-none"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Top Header Label: (Select Language) and Smart AI Status Indicator */}
      <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] sm:text-xs font-black tracking-tight text-[#0072bc] uppercase flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-[#0072bc] animate-spin-slow" />
            <span>(Select Language)</span>
          </span>
          <span 
            title="System-wide Smart AI Translation Engine active across all titles, posts, chapters and SDGs"
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9.5px] font-bold transition-colors ${
              isTranslating 
                ? 'bg-amber-100 text-amber-800 border border-amber-300 animate-pulse' 
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
            }`}
          >
            <Sparkles className={`w-2.5 h-2.5 ${isTranslating ? 'animate-spin text-amber-600' : 'text-emerald-600'}`} />
            <span>{isTranslating ? 'Translating...' : 'Smart AI Active'}</span>
          </span>
        </div>

        {/* Active Flag & Language Name Summary */}
        <span className="text-[10px] text-slate-500 font-medium hidden sm:inline-flex items-center gap-1">
          <span>{languageConfig.flag}</span>
          <span className="font-semibold text-slate-700">{languageConfig.nativeName}</span>
        </span>
      </div>

      {/* Interactive Switcher: Compact Button with Dropdown + Quick Pills */}
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center gap-1.5">
          {/* Main Select Language Button Dropdown */}
          <button
            id="select-language-dropdown-trigger"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex-1 flex items-center justify-between gap-2 px-3 py-1.5 bg-gradient-to-r from-slate-50 to-white hover:from-blue-50/50 hover:to-white border border-slate-200 hover:border-[#0072bc]/40 rounded-lg shadow-2xs text-xs font-semibold text-slate-800 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm leading-none">{languageConfig.flag}</span>
              <span className="font-bold text-slate-900">{languageConfig.nativeName}</span>
              <span className="text-slate-400 font-normal text-[11px]">({languageConfig.name})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-[#0072bc] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
                {languageConfig.code}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>
        </div>

        {/* Dropdown Menu of 6 Languages */}
        {isOpen && (
          <div
            id="select-language-menu-options"
            className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 z-60 animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
              <span>6 Official System Languages</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> Fast AI Translation
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {supportedLanguages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    id={`lang-select-${lang.code}`}
                    type="button"
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0072bc] text-white font-bold shadow-xs'
                        : 'text-slate-700 hover:bg-blue-50/70 hover:text-[#0072bc]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <div className="text-left">
                        <div className="leading-tight font-bold">{lang.nativeName}</div>
                        <div className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {lang.name}
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Quick Access Language Pills for One-Click Switching */}
      <div className="flex items-center justify-between gap-1 mt-1.5 overflow-x-auto pb-0.5 scrollbar-none">
        {supportedLanguages.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <button
              key={lang.code}
              id={`quick-pill-${lang.code}`}
              type="button"
              onClick={() => setLanguage(lang.code as LanguageCode)}
              title={`Switch to ${lang.name} (${lang.nativeName}) with Smart AI`}
              className={`px-2 py-0.5 rounded text-[10.5px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
                isSelected
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.nativeName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

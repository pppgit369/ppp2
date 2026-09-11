import React, { useState, useEffect } from 'react';
import { Zap, Pause, Play, Edit3, ChevronRight } from 'lucide-react';
import { HeadlineItem, EditableBox } from '../types';
import { AdminEditableTitle, useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

interface HeadlinesTickerProps {
  headlines: HeadlineItem[];
  isEditMode: boolean;
  onEditHeadlines: () => void;
  onNavigate: (href: string) => void;
  onUpdateHeadline?: (id: string, text: string) => void;
}

export const HeadlinesTicker: React.FC<HeadlinesTickerProps> = ({
  headlines,
  isEditMode,
  onEditHeadlines,
  onNavigate,
  onUpdateHeadline,
}) => {
  const { isAdmin } = useAdmin();
  const { translateHeadlines, isRTL, t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeHeadlines = translateHeadlines(headlines);

  // Automatic cycle for mobile or when marquee is paused
  useEffect(() => {
    if (isPaused || headlines.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, headlines.length]);

  // Strict Fail-Safe: The running headlines banner is strictly for the Home Page only
  if (typeof window !== 'undefined') {
    const currentHash = window.location.hash || '#home';
    if (currentHash !== '#home' && currentHash !== '#' && currentHash !== '') {
      return null;
    }
  }

  return (
    <div 
      id="headlines-ticker-container" 
      className="bg-[#0072bc] text-white border-t border-b border-[#005a96] relative z-30"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto flex items-center h-12 px-4 sm:px-6 lg:px-12">
        {/* Left Badge: ⚡ HEADLINES */}
        <div className="flex items-center gap-2 bg-[#0a2540] text-white px-3.5 py-1.5 rounded-md text-xs font-black tracking-wider uppercase shrink-0 shadow-inner mr-4">
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{t('headlines')}</span>
        </div>

        {/* Ticker Content - Desktop Continuous Scroller / Interactive List */}
        <div 
          className="flex-1 overflow-hidden relative h-full flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling items with dots */}
          <div 
            className={`flex items-center space-x-6 whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
              isPaused ? '' : 'animate-marquee'
            }`}
          >
            {activeHeadlines.map((item, idx) => (
              <React.Fragment key={item.id}>
                <div className="flex items-center gap-1.5">
                  <AdminEditableTitle
                    as="span"
                    value={item.text}
                    label={`Headline Item #${idx + 1}`}
                    onSave={(newText) => {
                      if (onUpdateHeadline) onUpdateHeadline(item.id, newText);
                    }}
                    className="hover:underline hover:text-amber-300 transition-colors cursor-pointer text-slate-100"
                  />
                  {item.category && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-200 border border-sky-400/20">
                      {item.category}
                    </span>
                  )}
                </div>
                {idx < activeHeadlines.length - 1 && (
                  <span className="text-sky-300 select-none font-bold text-base">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Controls: Edit in Edit Mode & Pause / Play Button */}
        <div className="flex items-center gap-2 shrink-0 ml-4">
          {isEditMode && (
            <button
              onClick={onEditHeadlines}
              title="Edit news headlines ticker"
              className="px-2 py-1 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <Edit3 className="w-3 h-3" />
              <span className="hidden sm:inline">Edit Headlines</span>
            </button>
          )}

          <button
            id="ticker-pause-toggle-btn"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume headlines ticker' : 'Pause headlines ticker'}
            className="w-8 h-8 rounded-md bg-[#005a96] hover:bg-[#004b7e] flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            {isPaused ? (
              <Play className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Pause className="w-3.5 h-3.5 fill-current" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

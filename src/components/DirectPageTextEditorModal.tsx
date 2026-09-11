import React, { useState, useEffect } from 'react';
import { FileText, Check, X, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

interface DirectPageTextEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  chapterTitle: string;
  paragraphs: string[];
  onSave: (newParagraphs: string[]) => void;
}

export const DirectPageTextEditorModal: React.FC<DirectPageTextEditorModalProps> = ({
  isOpen,
  onClose,
  chapterTitle,
  paragraphs,
  onSave,
}) => {
  const [textValue, setTextValue] = useState<string>('');
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setTextValue(paragraphs.join('\n\n'));
      setSaveSuccess(false);
    }
  }, [isOpen, paragraphs]);

  if (!isOpen) return null;

  const handleSave = () => {
    // Split by double newline or single newline with blank lines
    const parsed = textValue
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    onSave(parsed);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="direct-text-editor-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] text-left transform animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b365d] text-white px-5 py-4 flex items-center justify-between border-b border-[#2d4d7a] shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-400 text-slate-950 shadow-sm">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="direct-text-editor-title" className="text-base font-bold text-white tracking-wide">
                  Direct Page Text Editor
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                  Admin
                </span>
              </div>
              <p className="text-xs text-sky-200 mt-0.5">
                Target Section: <span className="font-semibold text-white">{chapterTitle}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close text editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Guidance Notice */}
        <div className="bg-sky-50/80 px-5 py-2.5 border-b border-sky-100 flex items-center justify-between text-xs text-slate-700 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0072bc] shrink-0" />
            <span>
              Separate paragraphs with a blank empty line. Markdown like <strong>**bold**</strong> is supported.
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 font-semibold hidden sm:inline">
            {textValue.split(/\n\s*\n/).filter(p => p.trim().length > 0).length} Paragraphs
          </span>
        </div>

        {/* Textarea Workspace */}
        <div className="p-5 flex-1 overflow-y-auto flex flex-col">
          <label htmlFor="direct-page-textarea" className="sr-only">
            Page Paragraphs and Content
          </label>
          <textarea
            id="direct-page-textarea"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            rows={14}
            className="w-full flex-1 min-h-[280px] sm:min-h-[380px] p-4 text-sm sm:text-base text-slate-800 leading-relaxed border-2 border-slate-200 rounded-xl focus:border-[#0072bc] focus:ring-3 focus:ring-blue-100 outline-none resize-y font-sans transition-all"
            placeholder="Type or paste paragraphs here... Use an empty blank line to separate paragraphs."
          />
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/70 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 animate-in fade-in duration-200">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Saved & Applied!</span>
              </span>
            )}
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all cursor-pointer hover:scale-101"
            >
              <Check className="w-4 h-4" />
              <span>Apply & Save Page Text</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Edit3, Check, X, Sparkles, CornerDownLeft } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const FastTitleEditorModal: React.FC = () => {
  const { activeTitleEdit, closeTitleEditor } = useAdmin();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (activeTitleEdit) {
      setValue(activeTitleEdit.initialValue || '');
      // Focus and select text upon opening
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.select();
        }
      }, 50);
    }
  }, [activeTitleEdit]);

  if (!activeTitleEdit) return null;

  const handleSave = () => {
    activeTitleEdit.onSave(value);
    closeTitleEditor();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeTitleEditor();
    } else if (e.key === 'Enter' && (!activeTitleEdit.multiline || e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fast-title-editor-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeTitleEditor();
      }}
    >
      <div 
        className={`w-full ${activeTitleEdit.multiline ? 'max-w-2xl' : 'max-w-lg'} bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform animate-in zoom-in-95 duration-150 text-left`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b365d] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#2d4d7a]">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-amber-400 text-slate-950">
              <Edit3 className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="fast-title-editor-heading" className="text-sm font-bold text-white tracking-wide">
                  Fast Title Editor
                </h3>
                <span className="px-1.5 py-0.2 rounded bg-amber-400/90 text-slate-950 font-black text-[10px] uppercase">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-sky-200">
                Editing: <span className="font-semibold text-white">{activeTitleEdit.label}</span>
              </p>
            </div>
          </div>
          <button
            onClick={closeTitleEditor}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close fast title editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="fast-title-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Title Content
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                {value.length} characters
              </span>
            </div>

            {activeTitleEdit.multiline ? (
              <textarea
                id="fast-title-input"
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={6}
                className="w-full min-h-[140px] px-3.5 py-2.5 text-sm text-slate-900 leading-relaxed border-2 border-slate-300 rounded-xl focus:border-[#0072bc] focus:ring-3 focus:ring-blue-100 outline-none transition-all resize-y font-sans"
                placeholder="Enter content..."
              />
            ) : (
              <input
                id="fast-title-input"
                ref={inputRef as React.RefObject<HTMLInputElement>}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-3.5 py-2.5 text-base font-semibold text-slate-900 border-2 border-slate-300 rounded-xl focus:border-[#0072bc] focus:ring-3 focus:ring-blue-100 outline-none transition-all font-sans"
                placeholder="Enter title..."
              />
            )}
            
            <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
              <CornerDownLeft className="w-3 h-3 text-slate-400" />
              <span>
                {activeTitleEdit.multiline ? (
                  <>Press <strong>Ctrl+Enter</strong> (or ⌘+Enter) to save, <strong>Esc</strong> to cancel.</>
                ) : (
                  <>Press <strong>Enter</strong> to instantly save, <strong>Esc</strong> to cancel.</>
                )}
              </span>
            </p>
          </div>

          {/* Live Preview */}
          <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-[#0072bc]" />
              <span>Live Visual Preview</span>
            </div>
            <div className="text-slate-900 font-bold text-base leading-snug break-words">
              {value || <span className="text-slate-400 italic">Empty title</span>}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between">
          <button
            type="button"
            onClick={closeTitleEditor}
            className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            Cancel (Esc)
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Apply & Save Title</span>
          </button>
        </div>
      </div>
    </div>
  );
};

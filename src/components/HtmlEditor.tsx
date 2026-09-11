import React, { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Heading2, 
  Heading3, 
  List, 
  ListOrdered, 
  Quote, 
  Link as LinkIcon, 
  Minus, 
  Sparkles, 
  Code, 
  Eye, 
  Check, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { FormattedContent } from './FormattedContent';

interface HtmlEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: string;
}

/**
 * Intelligent utility to scan raw pasted text and automatically wrap headings and titles with bold/H3 tags
 */
export function autoBoldTitlesAndStructure(rawText: string): string {
  if (!rawText.trim()) return rawText;

  const lines = rawText.split('\n');
  const processedLines: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      processedLines.push('');
      continue;
    }

    // Check if already an HTML heading
    if (/^<h[1-6]>/i.test(trimmed)) {
      if (inList) {
        processedLines.push('</ul>');
        inList = false;
      }
      processedLines.push(trimmed);
      continue;
    }

    // 1. Detect Markdown headings
    if (trimmed.startsWith('# ')) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h2><strong>${trimmed.replace(/^#\s+/, '')}</strong></h2>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h2><strong>${trimmed.replace(/^##\s+/, '')}</strong></h2>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h3><strong>${trimmed.replace(/^###\s+/, '')}</strong></h3>`);
      continue;
    }

    // 2. Detect Statutory / Article Headings: "Article 4: Concession Rights", "Section 2 - Scope", "Pillar 1: Equity"
    const articleMatch = trimmed.match(/^(Article\s+\d+|Section\s+\d+|Chapter\s+[IVX\d]+|Pillar\s+\d+|Part\s+[A-Z\d]+|Rule\s+\d+)[:\s\-](.*)$/i);
    if (articleMatch) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h3><strong>${articleMatch[1]}: ${articleMatch[2].trim()}</strong></h3>`);
      continue;
    }

    // 3. Detect Numbered Headings: "1. Global Standards", "2.1 Procurement Protocol"
    const numberedHeadingMatch = trimmed.match(/^(\d+[\.\)]|\d+\.\d+[\.\)]|[IVX]+[\.\)])\s+([A-Z0-9].{3,80})$/);
    if (numberedHeadingMatch && !trimmed.endsWith('.')) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h3><strong>${numberedHeadingMatch[1]} ${numberedHeadingMatch[2]}</strong></h3>`);
      continue;
    }

    // 4. Detect short lines ending with a colon (e.g. "Key Operational Objectives:", "Eligibility Criteria:")
    if (trimmed.endsWith(':') && trimmed.length < 90 && !trimmed.includes('. ')) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h4><strong>${trimmed}</strong></h4>`);
      continue;
    }

    // 5. Detect ALL-CAPS short titles (e.g. "GENERAL PROVISIONS", "STATUTORY GUIDELINES")
    const words = trimmed.split(/\s+/);
    if (
      trimmed.length >= 4 &&
      trimmed.length <= 70 &&
      trimmed === trimmed.toUpperCase() &&
      /[A-Z]{3,}/.test(trimmed) &&
      words.length <= 8 &&
      !trimmed.includes('.')
    ) {
      if (inList) { processedLines.push('</ul>'); inList = false; }
      processedLines.push(`<h3><strong>${trimmed}</strong></h3>`);
      continue;
    }

    // 6. Detect Bullet list items: "- Item", "* Item", "• Item"
    if (/^[-*•]\s+/.test(trimmed)) {
      const itemText = trimmed.replace(/^[-*•]\s+/, '');
      if (!inList) {
        processedLines.push('<ul class="list-disc pl-5 my-2 space-y-1">');
        inList = true;
      }
      processedLines.push(`  <li>${itemText}</li>`);
      continue;
    }

    // Regular line
    if (inList) {
      processedLines.push('</ul>');
      inList = false;
    }

    // Normal paragraph
    processedLines.push(trimmed);
  }

  if (inList) {
    processedLines.push('</ul>');
  }

  return processedLines.join('\n');
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write or paste your article content here...',
  className = '',
  minHeight = '320px',
}) => {
  const [editorTab, setEditorTab] = useState<'visual' | 'html' | 'preview'>('html');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const visualEditorRef = useRef<HTMLDivElement>(null);

  // Show a momentary toast inside the editor
  const flashToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Synchronize visual editor when switching tabs
  useEffect(() => {
    if (editorTab === 'visual' && visualEditorRef.current) {
      visualEditorRef.current.innerHTML = value;
    }
  }, [editorTab]);

  // Insert or wrap text with HTML tags in the textarea
  const wrapSelectionWithTags = (openTag: string, closeTag: string = '') => {
    if (editorTab === 'visual') {
      document.execCommand(openTag.toLowerCase(), false);
      if (visualEditorRef.current) {
        onChange(visualEditorRef.current.innerHTML);
      }
      return;
    }

    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = value;
    const selected = text.substring(start, end) || 'Sample Text';
    const before = text.substring(0, start);
    const after = text.substring(end);

    const replacement = `${openTag}${selected}${closeTag}`;
    const newText = before + replacement + after;
    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + openTag.length + selected.length);
    }, 10);
  };

  // Insert block tag for entire line
  const insertBlockTag = (tagName: 'h2' | 'h3' | 'h4' | 'p' | 'blockquote') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = value;

    // Find the start and end of the current line
    const lastNewline = text.lastIndexOf('\n', start - 1);
    const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;
    const nextNewline = text.indexOf('\n', end);
    const lineEnd = nextNewline === -1 ? text.length : nextNewline;

    const lineText = text.substring(lineStart, lineEnd);
    const cleanLine = lineText.replace(/^<(h[1-6]|p|blockquote)[^>]*>(.*?)<\/\1>$/i, '$2').trim() || 'Section Title';
    
    const replacement = `<${tagName}><strong>${cleanLine}</strong></${tagName}>`;
    const newText = text.substring(0, lineStart) + replacement + text.substring(lineEnd);
    onChange(newText);
    flashToast(`Applied <${tagName}> heading!`);
  };

  // Insert List
  const insertList = (ordered: boolean) => {
    const tag = ordered ? 'ol' : 'ul';
    const listHtml = `<${tag} class="${ordered ? 'list-decimal' : 'list-disc'} pl-5 my-2 space-y-1">\n  <li>First point or statutory condition</li>\n  <li>Second point or statutory condition</li>\n</${tag}>\n`;
    wrapSelectionWithTags(listHtml, '');
    flashToast(`Inserted ${ordered ? 'numbered' : 'bullet'} list!`);
  };

  // Insert Link
  const insertLink = () => {
    const url = window.prompt('Enter destination URL (e.g. https://www.pppunion.org/laws or #sdgs):', 'https://');
    if (!url) return;
    const textarea = textareaRef.current;
    const selected = textarea && textarea.selectionStart !== textarea.selectionEnd
      ? value.substring(textarea.selectionStart, textarea.selectionEnd)
      : 'Official Link';
    wrapSelectionWithTags(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#0072bc] hover:underline font-bold">${selected}</a>`, '');
  };

  // Auto bold all titles
  const handleAutoBoldTitles = () => {
    const structured = autoBoldTitlesAndStructure(value);
    onChange(structured);
    flashToast('⚡ Automatically detected & bolded all section titles, articles, and lists!');
  };

  // Strip tags
  const handleStripTags = () => {
    if (window.confirm('Strip all HTML tags and convert back to clean plain text?')) {
      const stripped = value.replace(/<[^>]*>/g, '').replace(/\n\s*\n\s*\n/g, '\n\n');
      onChange(stripped);
      flashToast('Cleaned HTML formatting.');
    }
  };

  return (
    <div className={`flex flex-col border border-slate-300 rounded-xl overflow-hidden bg-white shadow-xs ${className}`}>
      {/* Top Controls Bar: Tabs & Action Tools */}
      <div className="bg-slate-100/90 border-b border-slate-200 p-2 sm:p-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs text-xs">
          <button
            type="button"
            onClick={() => setEditorTab('html')}
            className={`px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              editorTab === 'html'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>HTML Editor</span>
          </button>

          <button
            type="button"
            onClick={() => setEditorTab('visual')}
            className={`px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              editorTab === 'visual'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Bold className="w-3.5 h-3.5" />
            <span>Visual Mode</span>
          </button>

          <button
            type="button"
            onClick={() => setEditorTab('preview')}
            className={`px-3 py-1.5 rounded-md font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              editorTab === 'preview'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Web Preview</span>
          </button>
        </div>

        {/* Intelligence Actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleAutoBoldTitles}
            title="Automatically scan text for titles, numbered articles, sections, and colons and make them bold/headings"
            className="px-3 py-1.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 rounded-lg text-xs font-black flex items-center gap-1.5 shadow-xs transition-all cursor-pointer select-none"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>⚡ Auto-Bold Titles & Articles</span>
          </button>

          <button
            type="button"
            onClick={handleStripTags}
            title="Strip all HTML tags"
            className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Formatting Toolbar (Active in HTML and Visual views) */}
      {editorTab !== 'preview' && (
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex flex-wrap items-center gap-1 text-slate-700 text-xs">
          {/* Text Styling */}
          <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200">
            <button
              type="button"
              onClick={() => wrapSelectionWithTags('<strong>', '</strong>')}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 font-bold transition-colors cursor-pointer"
              title="Bold (<strong>)"
            >
              <Bold className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => wrapSelectionWithTags('<em>', '</em>')}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Italic (<em>)"
            >
              <Italic className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => wrapSelectionWithTags('<u>', '</u>')}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Underline (<u>)"
            >
              <Underline className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          {/* Heading Buttons */}
          <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200">
            <button
              type="button"
              onClick={() => insertBlockTag('h2')}
              className="px-2 py-1 hover:bg-slate-100 rounded font-black text-slate-900 transition-colors cursor-pointer text-xs"
              title="Heading 2 (Major Section Title)"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertBlockTag('h3')}
              className="px-2 py-1 hover:bg-slate-100 rounded font-bold text-[#0072bc] transition-colors cursor-pointer text-xs"
              title="Heading 3 (Article / Subsection Title with Blue Accent)"
            >
              H3
            </button>
            <button
              type="button"
              onClick={() => insertBlockTag('h4')}
              className="px-2 py-1 hover:bg-slate-100 rounded font-bold text-slate-700 transition-colors cursor-pointer text-xs"
              title="Heading 4 (Pillar / Subtitle)"
            >
              H4
            </button>
            <button
              type="button"
              onClick={() => wrapSelectionWithTags('<p>', '</p>')}
              className="px-2 py-1 hover:bg-slate-100 rounded text-slate-600 transition-colors cursor-pointer text-xs"
              title="Paragraph (<p>)"
            >
              P
            </button>
          </div>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          {/* Lists & Quotes */}
          <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200">
            <button
              type="button"
              onClick={() => insertList(false)}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Bullet List (<ul><li>)"
            >
              <List className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertList(true)}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Numbered List (<ol><li>)"
            >
              <ListOrdered className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => insertBlockTag('blockquote')}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Blockquote (<blockquote>)"
            >
              <Quote className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          {/* Links & Dividers */}
          <div className="flex items-center gap-0.5 bg-white p-0.5 rounded-md border border-slate-200">
            <button
              type="button"
              onClick={insertLink}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Insert Link (<a>)"
            >
              <LinkIcon className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => wrapSelectionWithTags('\n<hr className="my-6 border-slate-200" />\n', '')}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-800 transition-colors cursor-pointer"
              title="Horizontal Rule (<hr>)"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="ml-auto flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 animate-fade-in">
              <Check className="w-3.5 h-3.5" />
              <span>{toastMessage}</span>
            </div>
          )}
        </div>
      )}

      {/* Editor Body */}
      <div className="relative flex-1 bg-white">
        {/* TAB 1: HTML Source Code Editor */}
        {editorTab === 'html' && (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{ minHeight }}
            className="w-full h-full p-4 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed outline-none resize-y focus:bg-sky-50/20 transition-colors placeholder:text-slate-400"
          />
        )}

        {/* TAB 2: Visual ContentEditable View */}
        {editorTab === 'visual' && (
          <div
            ref={visualEditorRef}
            contentEditable
            onInput={(e) => onChange(e.currentTarget.innerHTML)}
            style={{ minHeight }}
            className="w-full h-full p-5 text-xs sm:text-sm sm:text-base text-slate-800 leading-relaxed outline-none overflow-y-auto focus:bg-sky-50/10 transition-colors prose prose-slate max-w-none text-justify hyphens-auto"
          />
        )}

        {/* TAB 3: Live Portal Web Preview */}
        {editorTab === 'preview' && (
          <div 
            style={{ minHeight }}
            className="w-full h-full p-6 bg-slate-50/60 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="mb-4 pb-3 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-[#0072bc] uppercase tracking-wider">
                  Live Public Preview (As seen on www.pppunion.org)
                </span>
                <span className="text-slate-400">Geneva Editorial Layout</span>
              </div>
              <FormattedContent rawHtmlOrText={value} />
            </div>
          </div>
        )}
      </div>

      {/* Editor Footer / Helper Note */}
      <div className="px-3 py-2 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>
            Tip: Use <strong>⚡ Auto-Bold Titles & Articles</strong> to automatically format pasted text with bold titles and headings!
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span>{value.split(/\s+/).filter(Boolean).length} words</span>
          <span>{value.length} characters</span>
        </div>
      </div>
    </div>
  );
};

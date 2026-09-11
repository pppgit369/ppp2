import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface FormattedContentProps {
  paragraphs?: string[];
  rawHtmlOrText?: string;
  className?: string;
  onEditParagraph?: (index: number, newContent: string) => void;
  onDeleteParagraph?: (index: number) => void;
}

/**
 * Checks if a string looks like an article/section/topic title
 */
export function isHeadingText(text: string): { isHeading: boolean; level: 2 | 3 | 4; cleanText: string } {
  const trimmed = text.trim();
  if (!trimmed || trimmed.length > 140) {
    return { isHeading: false, level: 3, cleanText: trimmed };
  }

  // Markdown Headings
  if (trimmed.startsWith('# ')) {
    return { isHeading: true, level: 2, cleanText: trimmed.replace(/^#\s+/, '') };
  }
  if (trimmed.startsWith('## ')) {
    return { isHeading: true, level: 2, cleanText: trimmed.replace(/^##\s+/, '') };
  }
  if (trimmed.startsWith('### ')) {
    return { isHeading: true, level: 3, cleanText: trimmed.replace(/^###\s+/, '') };
  }
  if (trimmed.startsWith('#### ')) {
    return { isHeading: true, level: 4, cleanText: trimmed.replace(/^####\s+/, '') };
  }

  // HTML heading tags
  const hMatch = trimmed.match(/^<h([2-4])>(.*?)<\/h\1>$/i);
  if (hMatch) {
    return { isHeading: true, level: parseInt(hMatch[1], 10) as 2 | 3 | 4, cleanText: hMatch[2] };
  }

  // Statutory & Article patterns: "Article 1:", "Article 12 -", "Section 3:", "Chapter IV:", "Pillar 1:", "Part A:"
  const articleRegex = /^(Article\s+\d+|Section\s+\d+|Chapter\s+[IVX\d]+|Pillar\s+\d+|Clause\s+\d+|Rule\s+\d+|Part\s+[A-Z\d]+)[:\s\-]/i;
  if (articleRegex.test(trimmed)) {
    return { isHeading: true, level: 3, cleanText: trimmed };
  }

  // Numbered list heading: "1. Global Standards", "2.1 Legal Framework", "I. Executive Mandate"
  const numberedRegex = /^(\d+[\.\)]|\d+\.\d+[\.\)]|[IVX]+[\.\)])\s+[A-Z0-9].{3,80}$/;
  if (numberedRegex.test(trimmed)) {
    return { isHeading: true, level: 3, cleanText: trimmed };
  }

  // Short line ending with a colon that is title-like (e.g. "Key Operational Objectives:", "Required Documentation:")
  if (trimmed.endsWith(':') && trimmed.length < 80 && !trimmed.includes('. ')) {
    return { isHeading: true, level: 4, cleanText: trimmed };
  }

  // Pure ALL-CAPS short titles (e.g. "GENERAL PROVISIONS", "CODE OF ETHICS", "ELIGIBILITY CRITERIA")
  const words = trimmed.split(/\s+/);
  if (
    trimmed.length >= 4 &&
    trimmed.length <= 70 &&
    trimmed === trimmed.toUpperCase() &&
    /[A-Z]{3,}/.test(trimmed) &&
    words.length <= 8 &&
    !trimmed.includes('.')
  ) {
    return { isHeading: true, level: 3, cleanText: trimmed };
  }

  // Bold-only line: **Title** or <strong>Title</strong>
  const boldMarkdownMatch = trimmed.match(/^\*\*(.+?)\*\*$/);
  if (boldMarkdownMatch && boldMarkdownMatch[1].length < 90) {
    return { isHeading: true, level: 3, cleanText: boldMarkdownMatch[1] };
  }

  const strongHtmlMatch = trimmed.match(/^<strong>(.*?)<\/strong>$/i);
  if (strongHtmlMatch && strongHtmlMatch[1].length < 90) {
    return { isHeading: true, level: 3, cleanText: strongHtmlMatch[1] };
  }

  return { isHeading: false, level: 3, cleanText: trimmed };
}

/**
 * Checks if a string contains HTML elements
 */
export function containsHtmlTags(str: string): boolean {
  return /<(h[1-6]|p|div|strong|b|em|i|u|s|ul|ol|li|blockquote|a|hr|br|table|span)[^>]*>/i.test(str);
}

/**
 * Parses basic inline markdown like **bold**, *italic*, and [links](url) into HTML
 */
export function formatInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#0072bc] hover:underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>');
}

/**
 * Single Formatted Block Renderer
 */
export const FormattedBlock: React.FC<{ content: string; index: number }> = ({ content, index }) => {
  const trimmed = content.trim();
  if (!trimmed) return null;

  // 1. If line is raw HTML (contains block elements or complex formatting)
  if (containsHtmlTags(trimmed)) {
    return (
      <div 
        className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-slate-700 prose-p:leading-relaxed sm:prose-p:leading-loose prose-p:text-justify prose-strong:text-slate-900 prose-strong:font-bold prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-a:text-[#0072bc] prose-a:font-semibold"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  }

  // 2. Check if this is a heading / article / title
  const headingInfo = isHeadingText(trimmed);
  if (headingInfo.isHeading) {
    const inlineFormatted = formatInlineMarkdown(headingInfo.cleanText);

    if (headingInfo.level === 2) {
      return (
        <h2 
          className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-3 pb-2 border-b border-slate-200 flex items-center gap-2"
          dangerouslySetInnerHTML={{ __html: inlineFormatted }}
        />
      );
    }
    if (headingInfo.level === 3) {
      return (
        <h3 
          className="text-base sm:text-lg font-bold text-slate-900 mt-6 mb-2.5 flex items-center gap-2.5 border-l-4 border-[#0072bc] pl-3"
          dangerouslySetInnerHTML={{ __html: inlineFormatted }}
        />
      );
    }
    return (
      <h4 
        className="text-sm sm:text-base font-bold text-slate-800 mt-5 mb-2 flex items-center gap-2 text-[#0072bc]"
        dangerouslySetInnerHTML={{ __html: inlineFormatted }}
      />
    );
  }

  // 3. Bullet Point: - item, * item, • item
  if (/^[-*•]\s+/.test(trimmed)) {
    const cleanItem = trimmed.replace(/^[-*•]\s+/, '');
    const inlineFormatted = formatInlineMarkdown(cleanItem);
    return (
      <div className="flex items-start gap-3 my-2 pl-2 sm:pl-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2.5 shrink-0" />
        <p 
          className="text-slate-700 text-xs sm:text-sm sm:text-[15px] leading-relaxed text-justify hyphens-auto flex-1"
          dangerouslySetInnerHTML={{ __html: inlineFormatted }}
        />
      </div>
    );
  }

  // 4. Blockquote: > quote
  if (trimmed.startsWith('> ')) {
    const cleanQuote = trimmed.replace(/^>\s+/, '');
    const inlineFormatted = formatInlineMarkdown(cleanQuote);
    return (
      <blockquote className="border-l-4 border-amber-400 bg-amber-50/60 p-4 rounded-r-lg my-4 text-xs sm:text-sm text-slate-800 font-medium italic">
        <span dangerouslySetInnerHTML={{ __html: inlineFormatted }} />
      </blockquote>
    );
  }

  // 4b. Special Bracket Executive Subject Summary (Requested specifically for chapter bottoms)
  const isSpecialSummary = 
    (trimmed.startsWith('【') && trimmed.endsWith('】')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']') && (trimmed.toLowerCase().includes('summary') || trimmed.toLowerCase().includes('subject')));
    
  if (isSpecialSummary) {
    const innerText = trimmed
      .replace(/^[【\[]\s*/, '')
      .replace(/\s*[】\]]$/, '');
    const inlineFormatted = formatInlineMarkdown(innerText);
    return (
      <div className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0a2540] via-[#123660] to-[#1b365d] text-white shadow-xl border border-sky-400/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md bg-sky-400/20 text-sky-300 border border-sky-400/40 text-[10px] sm:text-xs font-black uppercase tracking-widest">
              Executive Subject Summary
            </span>
            <span className="text-[11px] text-slate-300 font-medium">
              Official Synthesis & Core Takeaways
            </span>
          </div>
          <div 
            className="text-white text-xs sm:text-sm sm:text-[15px] font-medium leading-relaxed sm:leading-loose text-justify hyphens-auto"
            dangerouslySetInnerHTML={{ __html: inlineFormatted }}
          />
        </div>
      </div>
    );
  }

  // 5. Standard Publication Paragraph (fully justified, high typographic contrast)
  const inlineFormatted = formatInlineMarkdown(trimmed);
  return (
    <p 
      className={`text-justify hyphens-auto leading-relaxed sm:leading-loose text-xs sm:text-sm sm:text-[15px] ${
        index === 0 ? 'text-slate-800 font-normal' : 'text-slate-700'
      }`}
      dangerouslySetInnerHTML={{ __html: inlineFormatted }}
    />
  );
};

/**
 * FormattedContent:
 * Accepts an array of paragraphs or an HTML/text string, splits when necessary,
 * detects headings, articles, bullet points, and justifies all content.
 */
export const FormattedContent: React.FC<FormattedContentProps> = ({
  paragraphs,
  rawHtmlOrText,
  className = '',
  onEditParagraph,
  onDeleteParagraph,
}) => {
  const { isAdmin, openFastTitleEditor } = useAdmin();

  // If rawHtmlOrText provided, split or use directly
  const blocks: string[] = React.useMemo(() => {
    if (paragraphs && paragraphs.length > 0) {
      return paragraphs;
    }
    if (rawHtmlOrText) {
      // If it has HTML block tags, keep as single block
      if (/<(div|p|ul|ol|table|blockquote|h[1-6])/i.test(rawHtmlOrText)) {
        return [rawHtmlOrText];
      }
      return rawHtmlOrText
        .split(/\n\s*\n/)
        .map((b) => b.trim())
        .filter((b) => b.length > 0);
    }
    return [];
  }, [paragraphs, rawHtmlOrText]);

  if (blocks.length === 0) {
    return null;
  }

  const handleEditClick = (index: number, text: string) => {
    if (!onEditParagraph) return;
    openFastTitleEditor({
      initialValue: text,
      label: `Paragraph #${index + 1}`,
      multiline: true,
      onSave: (newVal) => {
        onEditParagraph(index, newVal);
      },
    });
  };

  return (
    <div className={`space-y-4 text-slate-700 ${className}`}>
      {blocks.map((block, idx) => {
        if (!isAdmin || !onEditParagraph) {
          return <FormattedBlock key={idx} content={block} index={idx} />;
        }

        return (
          <div
            key={idx}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleEditClick(idx, block);
            }}
            title="Double-click to edit this paragraph directly"
            className="group/para relative rounded-lg p-2 -mx-2 hover:bg-sky-50/50 hover:ring-1 hover:ring-sky-200/70 transition-all cursor-pointer"
          >
            <FormattedBlock content={block} index={idx} />

            {/* Hover Action Buttons for Admin */}
            <div className="absolute top-1 right-1 opacity-0 group-hover/para:opacity-100 transition-opacity duration-150 flex items-center gap-1 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(idx, block);
                }}
                className="px-2 py-0.5 rounded bg-white hover:bg-sky-50 text-[#0072bc] border border-sky-300 text-[10px] font-bold shadow-xs flex items-center gap-1 cursor-pointer"
                title="Edit this paragraph"
              >
                <Edit3 className="w-3 h-3 text-[#0072bc]" />
                <span>Edit</span>
              </button>
              {onDeleteParagraph && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Are you sure you want to remove this paragraph?')) {
                      onDeleteParagraph(idx);
                    }
                  }}
                  className="p-1 rounded bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 text-[10px] shadow-xs cursor-pointer"
                  title="Delete paragraph"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

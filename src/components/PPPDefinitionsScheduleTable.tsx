import React, { useState, useMemo } from 'react';
import { Search, Filter, Copy, Check, Download, Table, BookOpen, Layers } from 'lucide-react';
import { PPP_DEFINITIONS_SCHEDULE_DATA, PPPDefinitionItem } from '../data/pppDefinitionsScheduleData';

interface PPPDefinitionsScheduleTableProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export const PPPDefinitionsScheduleTable: React.FC<PPPDefinitionsScheduleTableProps> = ({
  id = 'ppp-definitions-schedule',
  title = 'Schedule of PPP Abbreviations, Acronyms & Statutory Definitions',
  subtitle = 'Official International 4-Column Lexicon Schedule as recognized by PPP Union, UNECE, World Bank Group, and Sovereign Concession Authorities',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PPP_DEFINITIONS_SCHEDULE_DATA.map((item) => item.category)));
    return ['ALL', ...cats];
  }, []);

  const filteredItems = useMemo(() => {
    return PPP_DEFINITIONS_SCHEDULE_DATA.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.meanings.some((m) => m.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  // Pair items into two per row for the 4-column schedule table (Col 1: Abbr, Col 2: Meaning, Col 3: Abbr, Col 4: Meaning)
  const pairedRows = useMemo(() => {
    const rows: { left: PPPDefinitionItem; right?: PPPDefinitionItem }[] = [];
    for (let i = 0; i < filteredItems.length; i += 2) {
      rows.push({
        left: filteredItems[i],
        right: filteredItems[i + 1],
      });
    }
    return rows;
  }, [filteredItems]);

  const handleCopyTSV = () => {
    const header = 'Abbreviation\tMeaning\tAbbreviation\tMeaning';
    const lines = pairedRows.map((r) => {
      const leftMeanings = r.left.meanings.join('; ');
      const rightAbbr = r.right ? r.right.abbreviation : '';
      const rightMeanings = r.right ? r.right.meanings.join('; ') : '';
      return `${r.left.abbreviation}\t${leftMeanings}\t${rightAbbr}\t${rightMeanings}`;
    });
    const fullText = [header, ...lines].join('\n');
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    });
  };

  return (
    <div id={id} className="my-8 bg-white rounded-2xl border border-slate-300 shadow-md overflow-hidden scroll-mt-24">
      {/* Schedule Header Banner */}
      <div className="bg-gradient-to-r from-[#0a2540] via-[#123660] to-[#1b365d] text-white p-5 sm:p-6 border-b border-slate-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Table className="w-3.5 h-3.5" />
              <span>Official Reference Schedule</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={handleCopyTSV}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Copy entire schedule table to clipboard for Excel or Word"
            >
              {copiedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Schedule (Excel/Word)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search abbreviation or meaning (e.g. ADP, BOT, ADSCR, VGF)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/95 text-slate-900 placeholder-slate-500 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-800 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs text-slate-300 font-semibold px-2 flex items-center justify-between sm:justify-end gap-2">
            <span>Showing:</span>
            <span className="px-2 py-0.5 rounded-md bg-white/15 text-white font-mono font-bold">
              {filteredItems.length} of {PPP_DEFINITIONS_SCHEDULE_DATA.length} Terms
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-400 text-slate-950 shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Column Schedule Table exactly matching user's diagram */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-900 border-b-2 border-slate-900">
              <th className="py-3 px-4 font-black uppercase tracking-wider text-xs w-[18%] sm:w-[15%] border-r border-slate-400">
                Abbreviation
              </th>
              <th className="py-3 px-4 font-black uppercase tracking-wider text-xs w-[32%] sm:w-[35%] border-r-2 border-slate-900">
                Meaning
              </th>
              <th className="py-3 px-4 font-black uppercase tracking-wider text-xs w-[18%] sm:w-[15%] border-r border-slate-400">
                Abbreviation
              </th>
              <th className="py-3 px-4 font-black uppercase tracking-wider text-xs w-[32%] sm:w-[35%]">
                Meaning
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300">
            {pairedRows.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-10 text-center text-slate-500 italic">
                  No abbreviations match your search query "{searchTerm}".
                </td>
              </tr>
            ) : (
              pairedRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-sky-50/50 transition-colors ${
                    idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'
                  }`}
                >
                  {/* Left Column: Abbreviation */}
                  <td className="py-3.5 px-4 font-black text-slate-950 align-top border-r border-slate-300">
                    <span className="text-slate-900 text-sm font-black">{row.left.abbreviation}</span>
                    <span className="block text-[10px] font-semibold text-slate-500 mt-0.5">
                      {row.left.category}
                    </span>
                  </td>

                  {/* Left Column: Meaning (multi-line structured list) */}
                  <td className="py-3.5 px-4 text-slate-800 align-top border-r-2 border-slate-900 leading-snug">
                    <div className="space-y-1">
                      {row.left.meanings.map((m, mIdx) => (
                        <div key={mIdx} className="text-xs sm:text-[13px] text-slate-800 font-medium">
                          {m}
                        </div>
                      ))}
                    </div>
                  </td>

                  {/* Right Column: Abbreviation */}
                  <td className="py-3.5 px-4 font-black text-slate-950 align-top border-r border-slate-300">
                    {row.right ? (
                      <>
                        <span className="text-slate-900 text-sm font-black">{row.right.abbreviation}</span>
                        <span className="block text-[10px] font-semibold text-slate-500 mt-0.5">
                          {row.right.category}
                        </span>
                      </>
                    ) : (
                      <span className="text-slate-300 italic">—</span>
                    )}
                  </td>

                  {/* Right Column: Meaning (multi-line structured list) */}
                  <td className="py-3.5 px-4 text-slate-800 align-top leading-snug">
                    {row.right ? (
                      <div className="space-y-1">
                        {row.right.meanings.map((m, mIdx) => (
                          <div key={mIdx} className="text-xs sm:text-[13px] text-slate-800 font-medium">
                            {m}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-slate-300 italic">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Legend and Protocol Note */}
      <div className="p-4 bg-slate-50 border-t border-slate-300 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#0072bc]" />
          <span className="font-semibold text-slate-700">
            Source: Official PPP Union Sovereign Standardization Register & UN EPEC Norms
          </span>
        </div>
        <div className="text-[11px] text-slate-500">
          Total Entries: {PPP_DEFINITIONS_SCHEDULE_DATA.length} authoritative acronyms cataloged
        </div>
      </div>
    </div>
  );
};

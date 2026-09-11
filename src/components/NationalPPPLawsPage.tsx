import React, { useState, useMemo } from 'react';
import { 
  Scale, 
  FileText, 
  Download, 
  ExternalLink, 
  Search, 
  Globe, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Landmark, 
  BookOpen, 
  Copy, 
  Check, 
  ChevronRight,
  Filter,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  UN_17_SDGS_LEGAL_FRAMEWORK, 
  UNECE_PPP_LEGAL_STANDARD, 
  EU_CONCESSIONS_DIRECTIVE, 
  GET_ALL_193_PPP_LAWS, 
  NationalPPPLaw, 
  SupranationalLegalFramework 
} from '../data/nationalPPPLawsData';
import { useLanguage } from '../context/LanguageContext';

interface NationalPPPLawsPageProps {
  onNavigate: (href: string) => void;
}

export const NationalPPPLawsPage: React.FC<NationalPPPLawsPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'published' | 'eu' | 'A-C' | 'C-I' | 'I-P' | 'P-Z'>('all');
  const [selectedLaw, setSelectedLaw] = useState<NationalPPPLaw | null>(null);
  const [selectedSupranational, setSelectedSupranational] = useState<SupranationalLegalFramework | null>(null);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const allLaws = useMemo(() => GET_ALL_193_PPP_LAWS(), []);

  // Filtered countries
  const filteredLaws = useMemo(() => {
    let list = allLaws;

    if (selectedTab === 'published') {
      list = list.filter(l => l.isPublishedTop);
    } else if (selectedTab === 'eu') {
      list = list.filter(l => l.isEUMember);
    } else if (selectedTab !== 'all') {
      list = list.filter(l => l.column === selectedTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(l => 
        l.countryName.toLowerCase().includes(q) ||
        l.officialLawTitle.toLowerCase().includes(q) ||
        l.gazetteCitation.toLowerCase().includes(q) ||
        l.enactingAuthority.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.coreMechanisms.some(m => m.toLowerCase().includes(q))
      );
    }

    return list;
  }, [allLaws, selectedTab, searchQuery]);

  const handleCopyCitation = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div id="national-ppp-laws-portal" className="bg-[#f8fafc] min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <button onClick={() => onNavigate('#home')} className="hover:text-[#0072bc] cursor-pointer">
          {t('home', 'Home')}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <button onClick={() => onNavigate('#laws-overview')} className="hover:text-[#0072bc] cursor-pointer">
          {t('ppp_laws', 'PPP Laws')}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="font-semibold text-slate-800">
          {t('national_laws_directory', 'National PPP Laws Directory')}
        </span>
      </nav>

      {/* Main Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0072bc] border border-blue-200">
            <Scale className="w-3.5 h-3.5" />
            193 UN Sovereign Jurisdictions Indexed
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Official PDFs Attached & Verified
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          National PPP Laws & Legal Frameworks Directory
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
          Comprehensive statutory repository containing the official enacted Public-Private Partnership Acts, Concession Decrees, and procurement legislation across all 193 United Nations Member States, fully anchored by universal UN and European Union legal instruments.
        </p>

        {/* Quick gateway to Facilitators Directory */}
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#0072bc]" />
            <span>Cross-referenced with the Global PPP Facilitators Registry (193 Country Desks).</span>
          </div>
          <button
            onClick={() => onNavigate('#facilitators')}
            className="inline-flex items-center gap-1.5 font-bold text-[#0072bc] hover:text-[#005a96] cursor-pointer"
          >
            <span>Browse Facilitators Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP SECTION: 3 SUPRANATIONAL LEGAL FOUNDATIONS */}
      {/* ========================================================================= */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-5 h-5 text-[#0072bc]" />
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Supreme International & Supranational Legal Foundations
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          The sovereign domestic laws of all member states are interpreted in harmony with these three governing international legal instruments:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 1st Law: UN 17-SDGs Approved by 193 Countries */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between border border-blue-800/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-sky-500/10 pointer-events-none blur-xl" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-400/20 text-sky-200 border border-sky-400/30 mb-3">
                <ShieldCheck className="w-3 h-3 text-sky-300" />
                1st Law: 193 Countries Approved
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                17-SDGs UN Legal Article Approved by 193 Countries
              </h3>
              <p className="text-xs text-sky-100/90 font-mono mb-3 line-clamp-2">
                UN GA Res. A/RES/70/1 · Transforming Our World: 2030 Agenda
              </p>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                Universal multilateral instrument adopted by consensus of all 193 UN Member States. Legally establishes civilian SDG programs as non-sanctionable public goods and mandates multi-stakeholder PPPs (Goal 17.17).
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={UN_17_SDGS_LEGAL_FRAMEWORK.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official UN PDF</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>
              <button
                onClick={() => setSelectedSupranational(UN_17_SDGS_LEGAL_FRAMEWORK)}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Legal Articles & Scope</span>
              </button>
            </div>
          </div>

          {/* 2nd Law: UNECE Applicable Law */}
          <div className="bg-gradient-to-br from-teal-950 to-slate-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between border border-teal-800/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-teal-500/10 pointer-events-none blur-xl" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-teal-400/20 text-teal-200 border border-teal-400/30 mb-3">
                <Landmark className="w-3 h-3 text-teal-300" />
                2nd Law: UNECE Applicable Law
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                The Applicable Law of PPP in UNECE
              </h3>
              <p className="text-xs text-teal-100/90 font-mono mb-3 line-clamp-2">
                UNECE Standard on PPP/Concessions in Support of the SDGs (ECE/CECI/2022/5)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                United Nations Economic Commission for Europe standard establishing 38 Model Legislative Provisions prioritizing "Value for People", climate resilience, and standardized concession risk covenants.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={UNECE_PPP_LEGAL_STANDARD.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official UN PDF (Geneva)</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={UNECE_PPP_LEGAL_STANDARD.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 font-semibold text-[11px] flex items-center justify-center gap-1 transition-colors"
                >
                  <span>UN Library Mirror</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => setSelectedSupranational(UNECE_PPP_LEGAL_STANDARD)}
                  className="py-2 px-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>View Articles</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3rd Law: European Union Directive 2014/23/EU */}
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between border border-blue-900/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/10 pointer-events-none blur-xl" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-400/20 text-blue-200 border border-blue-400/30 mb-3">
                <Scale className="w-3 h-3 text-blue-300" />
                European Union Applicable Law
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                The Applicable Law of PPP in the European Union
              </h3>
              <p className="text-xs text-blue-100/90 font-mono mb-3 line-clamp-2">
                Directive 2014/23/EU on the Award of Concession Contracts (Official Journal L 94/1)
              </p>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                Supreme European single market statutory directive governing works and service concessions, mandatory across all 27 EU Member States and coordinated with EPEC/EIB financing standards.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <a
                href={EU_CONCESSIONS_DIRECTIVE.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-blue-400 hover:bg-blue-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official EUR-Lex PDF</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
              </a>
              <button
                onClick={() => setSelectedSupranational(EU_CONCESSIONS_DIRECTIVE)}
                className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Transposition Articles</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SEARCH & TABS (Identical to Facilitators Directory filter ergonomics) */}
      {/* ========================================================================= */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, law title (e.g. Royal Decree 52/2019, Law 11966), or gazette number..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0072bc] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result tally */}
          <div className="text-xs font-semibold text-slate-500 whitespace-nowrap px-2">
            Showing <span className="text-[#0072bc] font-bold">{filteredLaws.length}</span> of 193 Jurisdictions
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedTab === 'all'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All (193 Nations)
          </button>
          <button
            onClick={() => setSelectedTab('published')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedTab === 'published'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Top Enacted PPP Acts</span>
          </button>
          <button
            onClick={() => setSelectedTab('eu')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedTab === 'eu'
                ? 'bg-blue-800 text-white shadow-xs'
                : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <span>European Union (EU Directives)</span>
          </button>
          <button
            onClick={() => setSelectedTab('A-C')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedTab === 'A-C' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            A – C
          </button>
          <button
            onClick={() => setSelectedTab('C-I')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedTab === 'C-I' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            C – I
          </button>
          <button
            onClick={() => setSelectedTab('I-P')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedTab === 'I-P' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            I – P
          </button>
          <button
            onClick={() => setSelectedTab('P-Z')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedTab === 'P-Z' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            P – Z
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. COUNTRY GRID (Identical Card Layout to PPP Facilitators image.png) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filteredLaws.map((law) => {
          return (
            <div
              key={law.id}
              onClick={() => setSelectedLaw(law)}
              className="group bg-white rounded-xl border border-slate-200 hover:border-[#0072bc] hover:shadow-md p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#0072bc] transition-colors">
                    {law.countryName}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0072bc] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>

                {/* Law Title Preview */}
                <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-snug">
                  {law.officialLawTitle}
                </p>
              </div>

              <div>
                {/* Status Badges Matching image.png */}
                {law.isEUMember ? (
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0072bc] bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">
                      <span className="text-[10px] font-mono">EU</span>
                      <span>Member of European Union</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#0072bc] hover:underline">
                      <FileText className="w-3 h-3 text-[#0072bc]" />
                      <span>Transposed Directive 2014/23/EU</span>
                    </div>
                  </div>
                ) : law.isPublishedTop ? (
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0072bc]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Official PDF Attached</span>
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 font-medium">
                    National Legal Framework
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredLaws.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 my-6">
          <Scale className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No National PPP Laws Match Your Search</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try searching for a different country name, gazette decree number, or reset filters.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedTab('all'); }}
            className="mt-4 px-4 py-2 bg-[#0072bc] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#005a96]"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. COUNTRY LAW MODAL */}
      {/* ========================================================================= */}
      {selectedLaw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{selectedLaw.flagEmoji}</span>
                  <span className="text-xs font-bold text-[#0072bc] uppercase tracking-wider">
                    Official National Legislation
                  </span>
                  {selectedLaw.isEUMember && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                      EU Directives
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedLaw.countryName}
                </h2>
              </div>
              <button
                onClick={() => setSelectedLaw(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 space-y-6 text-slate-700 text-xs sm:text-sm">
              {/* Statute Details Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Official Enacted Law / Concession Act
                  </span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {selectedLaw.officialLawTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200/60">
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      Enactment & Status
                    </span>
                    <span className="font-medium text-slate-800">
                      {selectedLaw.enactmentYear} · <span className="text-emerald-600 font-semibold">{selectedLaw.status}</span>
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                      Gazette Reference / Citation
                    </span>
                    <span className="font-mono text-xs text-slate-700">
                      {selectedLaw.gazetteCitation}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60">
                  <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Enacting Ministry / Central PPP Directorate
                  </span>
                  <span className="font-medium text-slate-800">
                    {selectedLaw.enactingAuthority}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#0072bc]" />
                  Statutory Scope & Legal Environment
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedLaw.summary}
                </p>
              </div>

              {/* Core Mechanisms */}
              {selectedLaw.coreMechanisms && selectedLaw.coreMechanisms.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Key Statutory Guarantees & Concession Rules
                  </h4>
                  <ul className="space-y-2">
                    {selectedLaw.coreMechanisms.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a
                  href={selectedLaw.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / View Official Legislation (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCopyCitation(`${selectedLaw.countryName} - ${selectedLaw.officialLawTitle} (${selectedLaw.gazetteCitation})`)}
                    className="py-2.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedCitation ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Citation Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Legal Citation</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setSelectedLaw(null);
                      onNavigate(`#facilitator-${selectedLaw.facilitatorCountryId}`);
                    }}
                    className="py-2.5 px-3 rounded-lg border border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 text-[#0072bc] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>View Country Facilitators Desk</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. SUPRANATIONAL FRAMEWORK MODAL */}
      {/* ========================================================================= */}
      {selectedSupranational && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#0072bc] border border-blue-200 mb-1">
                  {selectedSupranational.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedSupranational.title}
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  {selectedSupranational.officialDocumentName}
                </p>
              </div>
              <button
                onClick={() => setSelectedSupranational(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6 text-slate-700 text-xs sm:text-sm">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Enacting Body</span>
                  <span className="font-semibold text-slate-800">{selectedSupranational.enactingBody}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Effective Date</span>
                  <span className="font-semibold text-slate-800">{selectedSupranational.effectiveDate}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Sovereign Parties</span>
                  <span className="font-semibold text-slate-800">{selectedSupranational.parties}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 uppercase tracking-wider text-xs">
                  Statutory Summary & Sovereign Legal Protection
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedSupranational.summary}
                </p>
              </div>

              {/* Core Articles Breakdown */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#0072bc]" />
                  Key Binding Articles & Provisions
                </h4>
                <div className="space-y-3">
                  {selectedSupranational.coreArticles.map((art, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-3.5 border border-slate-200">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-[11px] font-bold text-[#0072bc] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {art.article}
                        </span>
                        <span className="font-bold text-slate-900 text-xs">
                          {art.title}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed mt-1">
                        {art.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-xs">
                  Legal Scope Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSupranational.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <a
                  href={selectedSupranational.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official UN / Sovereign Instrument (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                </a>

                {selectedSupranational.secondaryUrl && (
                  <a
                    href={selectedSupranational.secondaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Open Official Digital Library Mirror (Direct PDF)</span>
                    <ExternalLink className="w-3 h-3 ml-1 text-slate-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

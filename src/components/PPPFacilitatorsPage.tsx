import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  ExternalLink, 
  Building2, 
  X, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  FileCheck,
  ChevronRight,
  BookOpen,
  MapPin,
  Sparkles,
  Link2,
  Landmark
} from 'lucide-react';
import { 
  DARK_BLUE_BOX_CONTENT, 
  PUBLISHED_29_COUNTRIES, 
  ALL_193_COUNTRIES, 
  FacilitatorCountry 
} from '../data/facilitatorsDirectory';
import { CountryFacilitatorPage } from './CountryFacilitatorPage';

interface PPPFacilitatorsPageProps {
  onNavigate: (href: string) => void;
  activePage?: string;
}

export const PPPFacilitatorsPage: React.FC<PPPFacilitatorsPageProps> = ({ onNavigate, activePage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'published' | 'eu' | 'A-C' | 'C-I' | 'I-P' | 'P-Z'>('all');
  const [selectedCountry, setSelectedCountry] = useState<FacilitatorCountry | null>(null);

  // Check if URL hash specifies a country (e.g. #facilitator-germany or #facilitators/germany)
  const countryFromUrl = useMemo(() => {
    if (!activePage) return null;
    const clean = activePage.replace(/^#/, '');
    if (clean === 'afghanistan' || clean === 'afghanistan-ppp-services-providers' || clean === 'afghanistan-ppp-facilitators') {
      return ALL_193_COUNTRIES.find(c => c.id === 'afghanistan') || null;
    }
    if (clean.startsWith('facilitator-')) {
      const cId = clean.replace(/^facilitator-/, '');
      return ALL_193_COUNTRIES.find(c => c.id === cId) || null;
    }
    if (clean.startsWith('facilitators/')) {
      const cId = clean.replace(/^facilitators\//, '');
      return ALL_193_COUNTRIES.find(c => c.id === cId) || null;
    }
    return null;
  }, [activePage]);

  // Filter countries for the 193 directory
  const filteredCountries = useMemo(() => {
    let list = ALL_193_COUNTRIES;

    if (selectedTab === 'published') {
      list = list.filter(c => c.isPublished29 || c.hasPublishedDirectory);
    } else if (selectedTab === 'eu') {
      list = list.filter(c => c.isEUMember);
    } else if (selectedTab !== 'all') {
      list = list.filter(c => c.column === selectedTab);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) || 
        (c.isEUMember && 'european union eu member'.includes(q)) ||
        c.firms.some(f => f.toLowerCase().includes(q)) ||
        c.summary.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedTab, searchQuery]);

  // Active country is determined by user selection or URL
  const currentCountry = countryFromUrl || selectedCountry;

  // If a country is selected, display its dedicated, proper full page
  if (currentCountry) {
    return (
      <CountryFacilitatorPage
        country={currentCountry}
        onBack={() => {
          setSelectedCountry(null);
          onNavigate('#facilitators');
        }}
        onNavigateCountry={(targetId) => {
          const target = ALL_193_COUNTRIES.find(c => c.id === targetId);
          if (target) {
            setSelectedCountry(target);
            onNavigate(`#facilitator-${target.id}`);
          }
        }}
        onNavigateHome={() => onNavigate('#home')}
      />
    );
  }

  return (
    <div id="ppp-facilitators-page" className="py-6 sm:py-10 px-3 sm:px-6 lg:px-12 bg-white max-w-7xl mx-auto min-h-screen">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <button 
          onClick={() => onNavigate('#home')} 
          className="hover:text-[#0072bc] cursor-pointer transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="font-semibold text-slate-900">
          PPP FACILITATORS
        </span>
      </nav>

      {/* 2. THE BLUE MANDATE BOX (1st Thing on Page, as explicitly requested) */}
      <section 
        id="blue-mandate-box"
        className="mb-14 rounded-2xl bg-gradient-to-br from-[#005285] via-[#0066a4] to-[#007cb8] text-white p-6 sm:p-8 lg:p-12 shadow-2xl border border-sky-400/30 relative overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#005285] text-[11px] font-black tracking-wider uppercase mb-5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0072bc]" />
            <span>{DARK_BLUE_BOX_CONTENT.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {DARK_BLUE_BOX_CONTENT.title}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed text-justify mb-8 hyphens-auto font-normal">
            {DARK_BLUE_BOX_CONTENT.leadParagraph}
          </p>

          {/* Obstacle Intro */}
          <p className="text-white font-semibold text-sm sm:text-base mb-5">
            {DARK_BLUE_BOX_CONTENT.obstacleIntro}
          </p>

          {/* 3 Categories / Obstacle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {DARK_BLUE_BOX_CONTENT.obstacles.map((obs) => (
              <div 
                key={obs.number}
                className="bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl p-5 shadow-lg flex flex-col justify-between backdrop-blur-xs transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-white text-[#005285] font-black text-sm flex items-center justify-center mb-3 shadow-xs">
                    {obs.number}
                  </div>
                  <h2 className="text-white font-bold text-sm sm:text-[15px] mb-2 leading-snug">
                    {obs.title}
                  </h2>
                  <p className="text-sky-100 text-xs sm:text-[13px] leading-relaxed text-justify">
                    {obs.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Mandate Section */}
          <div className="bg-[#003d63]/85 border-l-4 border-sky-300 rounded-r-xl p-5 sm:p-7 mb-10 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-sky-300" />
              <span>{DARK_BLUE_BOX_CONTENT.mandateTitle}</span>
            </h2>
            <p className="text-sky-100 text-sm leading-relaxed mb-4 text-justify">
              {DARK_BLUE_BOX_CONTENT.mandateDescription}
            </p>
            <p className="text-white font-bold text-xs sm:text-sm mb-3">
              {DARK_BLUE_BOX_CONTENT.mandateRoleIntro}
            </p>
            <ul className="space-y-2.5 mb-5">
              {DARK_BLUE_BOX_CONTENT.mandatePoints.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sky-100">
                  <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-sky-100 text-xs sm:text-sm leading-relaxed text-justify border-t border-sky-400/20 pt-4">
              {DARK_BLUE_BOX_CONTENT.mandateSummary}
            </p>
          </div>

          {/* Shared Hope for 2030 Section */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 sm:p-7 backdrop-blur-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-300" />
              <span>{DARK_BLUE_BOX_CONTENT.hopeTitle}</span>
            </h2>
            <p className="text-sky-100 text-sm leading-relaxed mb-4 text-justify">
              {DARK_BLUE_BOX_CONTENT.hopeIntro}
            </p>
            <p className="text-white font-bold text-xs sm:text-sm mb-3">
              {DARK_BLUE_BOX_CONTENT.hopeExpectationsIntro}
            </p>
            <ul className="space-y-2 mb-4">
              {DARK_BLUE_BOX_CONTENT.hopePoints.map((hp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-sky-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-2" />
                  <span className="leading-relaxed">{hp}</span>
                </li>
              ))}
            </ul>
            <p className="text-sky-100 text-xs sm:text-sm leading-relaxed text-justify border-t border-white/15 pt-4">
              {DARK_BLUE_BOX_CONTENT.hopeConclusion}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION: Countries with a published facilitator directory (Schedule of Countries Names) */}
      <section id="published-facilitator-directory" className="mb-14">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-[#005285] border border-blue-200">
                Schedule of Countries Names
              </span>
              <span className="text-xs text-slate-500 font-medium">
                29 Published Directories
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Countries with a published facilitator directory
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-3xl">
              Official sovereign directories and accredited facilitation bodies. European Union member states (except Portugal) operate under the unified <strong className="font-semibold text-slate-800">Top 20 PPP Facilitators in Europe (VIPs)</strong> accreditation registry.
            </p>
          </div>
        </div>

        {/* 4-Column Grid exactly matching Image 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {PUBLISHED_29_COUNTRIES.map((country) => (
            <button
              key={country.id}
              onClick={() => {
                setSelectedCountry(country);
                onNavigate(`#facilitator-${country.id}`);
                try {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } catch {
                  try { window.scrollTo(0, 0); } catch { /* ignore */ }
                }
              }}
              className="bg-white hover:bg-sky-50/50 border border-slate-200 hover:border-sky-300 rounded-xl p-4 flex flex-col justify-between transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer group text-left min-h-[92px]"
            >
              <div className="flex items-start justify-between gap-2 w-full">
                <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0072bc] transition-colors">
                  {country.name}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0072bc] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </div>

              {country.id === 'european-union' ? (
                <div className="mt-2.5 flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-100/80 text-[#005285] border border-blue-300 text-[10px] font-extrabold w-fit">
                    <span>🇪🇺</span>
                    <span>Top 20 VIP Facilitators</span>
                  </span>
                  <span className="text-[10px] text-sky-700 font-semibold flex items-center gap-1">
                    <Link2 className="w-2.5 h-2.5 text-sky-600" />
                    pppunion.org Verified List
                  </span>
                </div>
              ) : country.id === 'portugal' ? (
                <div className="mt-2.5 flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold w-fit">
                    <span>🇵🇹</span>
                    <span>Portugal Directory (UTAP)</span>
                  </span>
                  <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    PARPÚBLICA & IMPIC Desks
                  </span>
                </div>
              ) : country.isEUMember ? (
                <div className="mt-2.5 flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-50 text-[#005285] border border-blue-200 text-[10px] font-bold w-fit">
                    <span>🇪🇺</span>
                    <span>EU Member State</span>
                  </span>
                  <span className="text-[10px] text-sky-700 font-medium flex items-center gap-1">
                    <Link2 className="w-2.5 h-2.5 text-sky-600" />
                    Top 20 VIP Facilitators
                  </span>
                </div>
              ) : (
                <div className="mt-2.5 text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-sky-600" />
                  <span>Published Facilitators</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* 4. COMPREHENSIVE DIRECTORY: All 193 UN Member States */}
      <section id="all-193-countries-directory" className="border-t border-slate-200 pt-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#e6f3fa] text-[#0072bc] text-[11px] font-bold uppercase mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>193 UN MEMBER STATES & TERRITORIES</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              All 193 Countries Facilitators & Desks Directory
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
              Directory of accredited facilitators, official national liaison desks, and compliance frameworks extracted from{' '}
              <a 
                href="https://pppunion.org/ppp_facilitator/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0072bc] hover:underline font-semibold inline-flex items-center gap-1"
              >
                pppunion.org/ppp_facilitator
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search country or 'European Union'..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/30 focus:border-[#0072bc]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'all'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Countries ({ALL_193_COUNTRIES.length})
          </button>
          <button
            onClick={() => setSelectedTab('published')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'published'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Published Directories (29)
          </button>
          <button
            onClick={() => setSelectedTab('eu')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1.5 ${
              selectedTab === 'eu'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200'
            }`}
          >
            <span>🇪🇺</span>
            <span>EU Members (27)</span>
          </button>
          <button
            onClick={() => setSelectedTab('A-C')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'A-C'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Country List A–C
          </button>
          <button
            onClick={() => setSelectedTab('C-I')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'C-I'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Country List C–I
          </button>
          <button
            onClick={() => setSelectedTab('I-P')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'I-P'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Country List I–P
          </button>
          <button
            onClick={() => setSelectedTab('P-Z')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              selectedTab === 'P-Z'
                ? 'bg-[#0072bc] text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Country List P–Z
          </button>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredCountries.map((c) => {
            const isPublished = c.isPublished29 || c.hasPublishedDirectory;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCountry(c);
                  onNavigate(`#facilitator-${c.id}`);
                  try {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } catch {
                    try { window.scrollTo(0, 0); } catch { /* ignore */ }
                  }
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group cursor-pointer min-h-[82px] ${
                  c.isEUMember
                    ? 'bg-gradient-to-b from-white to-blue-50/30 hover:bg-blue-50/70 border-blue-200 hover:border-blue-400 shadow-xs'
                    : isPublished 
                    ? 'bg-white hover:bg-sky-50/60 border-slate-200 hover:border-sky-300 shadow-xs' 
                    : 'bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-1.5 w-full">
                  <div className="text-xs sm:text-[13px] font-semibold text-slate-900 group-hover:text-[#0072bc] transition-colors">
                    {c.name}
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                </div>

                <div className="mt-2 space-y-1">
                  {c.id === 'european-union' ? (
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-100 text-[#005285] border border-blue-300 text-[10px] font-extrabold">
                      <span>🇪🇺</span>
                      <span>Top 20 VIP Facilitators</span>
                    </div>
                  ) : c.id === 'portugal' ? (
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                      <span>🇵🇹</span>
                      <span>Portugal Directory (UTAP)</span>
                    </div>
                  ) : c.isEUMember ? (
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-100/70 text-[#005285] border border-blue-200 text-[10px] font-bold">
                      <span>🇪🇺</span>
                      <span>EU Member · Top 20 VIPs</span>
                    </div>
                  ) : null}
                  <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                    {c.id === 'european-union' ? (
                      <span className="text-sky-700 font-semibold flex items-center gap-1">
                        <Link2 className="w-2.5 h-2.5 text-sky-600" />
                        pppunion.org VIP List
                      </span>
                    ) : c.id === 'portugal' ? (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                        PARPÚBLICA / IMPIC
                      </span>
                    ) : c.isEUMember ? (
                      <span className="text-sky-700 font-semibold flex items-center gap-1">
                        <Link2 className="w-2.5 h-2.5 text-sky-600" />
                        Top 20 VIP Facilitators
                      </span>
                    ) : isPublished ? (
                      <span className="text-sky-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-sky-600" />
                        Published Firms
                      </span>
                    ) : (
                      <span>Liaison Desk</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-xs sm:text-sm">
            No countries found matching "{searchQuery}".
          </div>
        )}
      </section>
    </div>
  );
};

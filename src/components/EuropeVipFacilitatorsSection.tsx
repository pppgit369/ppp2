import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  ExternalLink, 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { TOP_20_EUROPE_PPP_FACILITATORS, EUFacilitatorVIP } from '../data/europeVipFacilitators';

interface EuropeVipFacilitatorsSectionProps {
  countryName?: string;
  isSubSection?: boolean; // If embedded inside a member state page like Germany or France
  onNavigateToEU?: () => void;
}

export const EuropeVipFacilitatorsSection: React.FC<EuropeVipFacilitatorsSectionProps> = ({
  countryName = 'European Union',
  isSubSection = false,
  onNavigateToEU
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'advisory' | 'epc' | 'multilateral'>('all');

  const filteredFacilitators = useMemo(() => {
    let list = TOP_20_EUROPE_PPP_FACILITATORS;

    if (categoryFilter === 'advisory') {
      list = list.filter(f => 
        f.coreServices.toLowerCase().includes('advisory') || 
        f.coreServices.toLowerCase().includes('financial') ||
        f.coreServices.toLowerCase().includes('procurement')
      );
    } else if (categoryFilter === 'epc') {
      list = list.filter(f => 
        f.coreServices.toLowerCase().includes('contracting') || 
        f.coreServices.toLowerCase().includes('epc') ||
        f.coreServices.toLowerCase().includes('concessions') ||
        f.coreServices.toLowerCase().includes('infrastructure delivery')
      );
    } else if (categoryFilter === 'multilateral') {
      list = list.filter(f => 
        f.name.includes('EIB') || 
        f.name.includes('EBRD') || 
        f.name.includes('EPEC') || 
        f.coreServices.toLowerCase().includes('policy')
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(f => 
        f.name.toLowerCase().includes(q) ||
        f.countryScope.toLowerCase().includes(q) ||
        f.coreServices.toLowerCase().includes(q) ||
        f.hq.toLowerCase().includes(q) ||
        f.contact.toLowerCase().includes(q)
      );
    }

    return list;
  }, [searchQuery, categoryFilter]);

  return (
    <div className={`space-y-6 ${isSubSection ? 'pt-4' : ''}`}>
      {/* Header Container */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005285] flex items-center justify-center font-bold shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  TOP 20 PPP FACILITATORS IN EUROPE (VIPS)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-100 text-[#005285] border border-blue-200">
                  Post 1549
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Official Registry
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {isSubSection 
                  ? `Supranational European Union Network Operating Across ${countryName} & Member States (Except Portugal)`
                  : 'Official Sovereign Facilitators, Infrastructure EPC Giants, Advisory Desks & Concession Actors across the European Union'}
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl border border-sky-200 bg-sky-50/70 hover:bg-sky-100 text-[#0072bc] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto shrink-0"
          >
            <span>pppunion.org/top-20-ppp-facilitators-in-europe-vips</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Narrative & Institutional Framework */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify mb-6">
          <p>
            Official accreditation list extracted from <strong className="font-bold text-slate-900">PPP Union</strong> for the <strong className="font-bold text-slate-900">European Union</strong> and its all-European countries (except Portugal, which operates under its sovereign UTAP framework). These 20 top facilitators represent high-level engineering, transaction structuring, legal underwriting, and sovereign finance bodies operating under the <strong className="font-bold text-slate-900">European Union Public Procurement Directives (Directive 2014/23/EU on Concessions)</strong> and the <strong className="font-bold text-slate-900">17 UN Sustainable Development Goals (SDGs)</strong>.
          </p>
          {isSubSection && (
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-[#004b79]">
              <span className="font-bold block mb-1">🇪🇺 European Union Supranational Integration:</span>
              As a European partner state, major infrastructure concessions and trans-European transport, energy, and digital corridors in <strong className="font-bold text-[#003657]">{countryName}</strong> benefit directly from the accreditation, project finance, and advisory capacity of this Top 20 network.
            </div>
          )}
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by firm name, UK, France, Germany, advisory, EPC..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/30 focus:border-[#0072bc]"
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

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                categoryFilter === 'all'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              All 20 Facilitators
            </button>
            <button
              onClick={() => setCategoryFilter('advisory')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                categoryFilter === 'advisory'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Advisory & Finance
            </button>
            <button
              onClick={() => setCategoryFilter('epc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                categoryFilter === 'epc'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              EPC & Concessions
            </button>
            <button
              onClick={() => setCategoryFilter('multilateral')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                categoryFilter === 'multilateral'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              EIB / Multilateral
            </button>
          </div>
        </div>

        {/* 20 Facilitator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFacilitators.map((item) => (
            <div 
              key={item.rank}
              className="rounded-xl border border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-sky-50/20 p-5 flex flex-col justify-between hover:border-sky-300 hover:shadow-sm transition-all group"
            >
              <div>
                {/* Top Title & Rank */}
                <div className="flex items-start justify-between gap-2 mb-2 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-6 h-6 rounded-full bg-[#005285] text-white text-xs font-black flex items-center justify-center shrink-0">
                      {item.rank}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#0072bc] transition-colors">
                      <strong className="font-bold text-slate-900">{item.name}</strong>
                    </h3>
                  </div>

                  <span className="px-2 py-0.5 rounded-md bg-sky-100/80 text-[#005285] text-[11px] font-bold border border-sky-200 shrink-0 whitespace-nowrap">
                    {item.countryScope}
                  </span>
                </div>

                {/* Core Services */}
                <div className="mb-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900">Core Services: </span>
                  <span>{item.coreServices}</span>
                </div>

                {/* HQ Address */}
                <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <MapPin className="w-3.5 h-3.5 text-[#0072bc] shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <span className="font-bold text-slate-800">HQ: </span>
                    <span>{item.hq}</span>
                  </div>
                </div>
              </div>

              {/* Contacts & Links Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap text-xs">
                <div className="flex items-center gap-3 flex-wrap">
                  {item.phone && (
                    <a 
                      href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0072bc] transition-colors"
                      title="Call facilitator"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold">{item.phone}</span>
                    </a>
                  )}

                  {item.email && (
                    <a 
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center gap-1 text-[#0072bc] hover:underline font-bold"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0072bc]" />
                      <span>{item.email}</span>
                    </a>
                  )}
                </div>

                {item.website && (
                  <a
                    href={item.websiteUrl || `https://${item.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-300 hover:bg-sky-50 hover:border-sky-300 text-[#0072bc] font-bold text-[11px] inline-flex items-center gap-1 transition-colors shadow-2xs ml-auto"
                  >
                    <Globe className="w-3 h-3 text-[#0072bc]" />
                    <span>{item.website}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredFacilitators.length === 0 && (
          <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-xs sm:text-sm">
            No facilitators found matching "{searchQuery}".
          </div>
        )}

        {/* Footer Note on European Network */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Note: All listed facilitators operate across the internal market of the European Union under standardized public procurement thresholds, cross-border concession notices, and EIB / EPEC advisory frameworks. Portugal maintains a specialized sovereign desk supervised by UTAP (Unidade Técnica de Acompanhamento de Projetos).
          </p>
        </div>
      </div>
    </div>
  );
};

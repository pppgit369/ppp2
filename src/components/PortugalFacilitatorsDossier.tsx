import React, { useState } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { 
  Building2, 
  Scale, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ExternalLink, 
  Landmark, 
  BookOpen, 
  HeartHandshake, 
  Mail, 
  Phone, 
  MapPin, 
  AlertCircle, 
  FileText, 
  TrendingUp, 
  Award, 
  ChevronRight,
  GraduationCap,
  Briefcase,
  Users,
  Layers,
  Search,
  Sparkles,
  Check,
  Building,
  Copy,
  Compass
} from 'lucide-react';
import { EuropeVipFacilitatorsSection } from './EuropeVipFacilitatorsSection';

interface PortugalFacilitatorsDossierProps {
  onNavigateHome?: () => void;
  onNavigateBack?: () => void;
  onNavigateToEU?: () => void;
}

export interface PortugalFacilitatorItem {
  id: string;
  name: string;
  badge: string;
  category: 'state_holdings' | 'regulator' | 'investment' | 'regional' | 'academic' | 'platform';
  coreBusiness: string[];
  address: string[];
  phone?: string;
  email?: string;
  website: string;
  sourceNote?: string;
}

export const PORTUGAL_FACILITATORS: PortugalFacilitatorItem[] = [
  {
    id: 'parpublica',
    name: 'PARPÚBLICA – Participações Públicas, SGPS, S.A.',
    badge: 'National State Holdings & Concession Management',
    category: 'state_holdings',
    coreBusiness: [
      'National Public-Private Partnership coordination and sovereign concession management',
      'Infrastructure partnerships across transport, energy, and major public services',
      'Public asset management and long-term state equity investment structuring',
      'Supervision of strategic state participations and concessionaire compliance'
    ],
    address: [
      'Rua da Alfândega 78, 1100-585 Lisboa, Portugal'
    ],
    phone: '+351 21 881 5000',
    email: 'geral@parpublica.pt',
    website: 'https://www.parpublica.pt',
    sourceNote: 'State-Owned Public Holdings Enterprise under the Ministry of Finance of Portugal'
  },
  {
    id: 'impic',
    name: 'IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário',
    badge: 'Public Procurement & Construction Regulator',
    category: 'regulator',
    coreBusiness: [
      'Public procurement regulation and official tendering oversight under Portuguese CCP',
      'Public-Private Partnership compliance monitoring and transparency auditing',
      'Construction and infrastructure market governance and licensing',
      'SDG-aligned transparency and international accountability standards'
    ],
    address: [
      'Avenida Júlio Dinis 11, 1050-131 Lisboa, Portugal'
    ],
    phone: '+351 21 792 1800',
    email: 'info@impic.pt',
    website: 'https://www.impic.pt',
    sourceNote: 'National Institute for Public Procurement, Construction and Real Estate'
  },
  {
    id: 'aicep',
    name: 'AICEP Portugal Global – Trade & Investment Agency',
    badge: 'National Investment & Foreign Trade Agency',
    category: 'investment',
    coreBusiness: [
      'International investment facilitation and cross-border capital attraction',
      'PPP-related foreign partnership development and global consortium formation',
      'SDG17 global cooperation programs and economic diplomacy',
      'Private-sector innovation, export expansion, and industrial transition support'
    ],
    address: [
      'Avenida 5 de Outubro 101, 1050-051 Lisboa, Portugal'
    ],
    phone: '+351 21 790 3200',
    email: 'info@portugalglobal.pt',
    website: 'https://www.portugalglobal.pt',
    sourceNote: 'Government Business Development Agency connecting global investors to Portugal'
  },
  {
    id: 'ccdr-lvt',
    name: 'CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley',
    badge: 'Regional Development & Territorial Planning',
    category: 'regional',
    coreBusiness: [
      'Regional Sustainable Development Goals implementation and territorial cohesiveness',
      'PPP-aligned urban development programs and municipal co-financing initiatives',
      'Metropolitan infrastructure planning, environmental sustainability, and climate adaptation',
      'Public-private cooperation mechanisms for regional economic growth'
    ],
    address: [
      'Rua Alexandre Herculano 11, 1250-008 Lisboa, Portugal'
    ],
    phone: '+351 21 359 6000',
    email: 'geral@ccdr-lvt.pt',
    website: 'https://www.ccdr-lvt.pt',
    sourceNote: 'Commission for Regional Coordination and Development of Lisbon and Tagus Valley'
  },
  {
    id: 'nova-sbe',
    name: 'NOVA School of Business & Economics (NOVA SBE)',
    badge: 'Academic Research, Executive Training & SDG-17 Hub',
    category: 'academic',
    coreBusiness: [
      'Public-Private Partnership policy research, economic modeling, and executive training',
      'SDG-17 multi-stakeholder partnership education for public officials and private leaders',
      'Sustainable development consulting, ESG compliance, and impact measurement',
      'Public-sector innovation laboratories and infrastructure governance studies'
    ],
    address: [
      'Campus de Carcavelos, Rua da Holanda 1, 2775-405 Carcavelos, Portugal'
    ],
    phone: '+351 21 382 2725',
    email: 'info@novasbe.pt',
    website: 'https://www.novasbe.pt',
    sourceNote: 'Leading European Business School & Sustainable Development Research Institute'
  },
  {
    id: 'adp-platform-portugal',
    name: 'ADP PLATFORM (UK & NETHERLANDS) – PORTUGAL PARTNER LISTING',
    badge: 'International Development Ecosystem & VIP Member',
    category: 'platform',
    coreBusiness: [
      'PPP facilitation and SDG-17 multi-stakeholder partnership development',
      'International development cooperation across Europe, Asia, and emerging markets',
      'Institutional capacity building, banking compliance, and cross-border project advisory',
      'Multilingual legal drafting, concession tender structuring, and PPP documentation'
    ],
    address: [
      '83A, Cerro Do Mocho, Sitios Dos Quartos, Loulé, Portugal 8100-256'
    ],
    email: 'adp@adpplatform.org',
    website: 'https://www.adpplatform.com',
    sourceNote: 'Registered VIP Member of PPP Union & High-Level Expert Facilitator Ecosystem'
  }
];

export const PortugalFacilitatorsDossier: React.FC<PortugalFacilitatorsDossierProps> = ({
  onNavigateHome,
  onNavigateBack,
  onNavigateToEU
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [showEUNetwork, setShowEUNetwork] = useState<boolean>(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFacilitators = PORTUGAL_FACILITATORS.filter((item) => {
    if (activeTab !== 'all' && item.category !== activeTab) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.coreBusiness.some(b => b.toLowerCase().includes(q)) ||
        item.address.some(a => a.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="portugal-facilitators-master-dossier" className="space-y-8">
      
      {/* 1. MASTER OVERVIEW BANNER */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              {onNavigateHome && <HeaderLogo size="sm" showText={false} onClick={onNavigateHome} />}
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xl shadow-2xs">
                🇵🇹
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Well Experienced PPP &amp; SDGs Facilitators in Portugal
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Reputable &amp; Non-Blacklisted
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#005285] border border-blue-200">
                  EU Member State
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Accredited Portuguese Public Holdings, Procurement Regulators, Investment Agencies, and Research Centers
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl border border-emerald-200 bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto shrink-0 cursor-pointer"
          >
            <span>pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Institutional Assessment & Accreditation Statement */}
        <div className="bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/40 rounded-xl p-5 sm:p-6 border border-emerald-200 mb-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>Official PPP Union Accreditation &amp; Institutional Governance Note</span>
              </div>
              <div className="p-3 rounded-lg bg-emerald-100/70 text-emerald-950 font-bold text-xs border border-emerald-300">
                &ldquo;All institutions listed herein are reputable, non-blacklisted, and internationally recognized as PPP facilitators.&rdquo;
              </div>
              <p className="text-justify">
                Portugal’s Public-Private Partnership model represents one of the European Union’s most mature concession frameworks, governed under <strong className="font-bold text-slate-900">Decree-Law No. 111/2012</strong>, the <strong className="font-bold text-slate-900">Public Contracts Code (CCP)</strong>, and supervised technically by <strong className="font-bold text-slate-900">UTAP (Unidade Técnica de Acompanhamento de Projetos)</strong> under the Ministry of Finance. Concessions operate with full integration into the <strong className="font-bold text-slate-900">European Investment Bank (EIB)</strong> and <strong className="font-bold text-slate-900">EPEC (European PPP Expertise Centre)</strong> frameworks.
              </p>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">State Equity &amp; Concessions</h4>
                  <p className="text-[11px] text-slate-600">
                    PARPÚBLICA oversees public holdings and major sovereign concessions across transport, ports, and public utility assets.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#005285] font-bold text-xs flex items-center justify-center mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Procurement &amp; Governance</h4>
                  <p className="text-[11px] text-slate-600">
                    IMPIC regulates all public tenders, construction markets, and transparent compliance standards under EU Directive 2014/23/EU.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Foreign Investment &amp; R&amp;D</h4>
                  <p className="text-[11px] text-slate-600">
                    AICEP facilitates international consortium investment, while NOVA SBE and ADP Platform provide high-level technical facilitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Facilitators ({PORTUGAL_FACILITATORS.length})
            </button>
            <button
              onClick={() => setActiveTab('state_holdings')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'state_holdings'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              PARPÚBLICA
            </button>
            <button
              onClick={() => setActiveTab('regulator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'regulator'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              IMPIC (Regulator)
            </button>
            <button
              onClick={() => setActiveTab('investment')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'investment'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              AICEP Global
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'academic'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              NOVA SBE
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'platform'
                  ? 'bg-purple-700 text-white shadow-2xs'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200'
              }`}
            >
              ADP Platform (Loulé)
            </button>
          </div>

          {/* View Mode Toggle & EU Network Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEUNetwork(!showEUNetwork)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer inline-flex items-center gap-1.5 shrink-0 ${
                showEUNetwork 
                  ? 'bg-blue-700 text-white border-blue-800' 
                  : 'bg-blue-50 text-[#005285] border-blue-200 hover:bg-blue-100'
              }`}
            >
              <span>🇪🇺</span>
              <span>{showEUNetwork ? 'Hide EU Network' : 'View EU Top 20 Network'}</span>
            </button>

            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Portugal..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc]/30"
              />
            </div>

            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 shrink-0">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  viewMode === 'cards' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  viewMode === 'table' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Ledger
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FACILITATORS LISTING (Cards View) */}
      {viewMode === 'cards' ? (
        <div className="space-y-6">
          {filteredFacilitators.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:border-emerald-300 transition-all"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <div className="pl-8">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-900 border border-emerald-200">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
                  <button
                    onClick={() => handleCopy(`${item.name}\n${item.address.join(', ')}\n${item.phone || ''}\n${item.email || ''}\n${item.website}`, item.id)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy full facilitator contact details"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Dossier</span>
                      </>
                    )}
                  </button>

                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Core Business Activities */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Core Business &amp; Mandated Competencies</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.coreBusiness.map((activity, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Registered Coordinates */}
                <div className="lg:col-span-5 bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Official Registered Coordinates</span>
                    </h4>

                    {/* Address */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Headquarters</span>
                      {item.address.map((addr, adIdx) => (
                        <p key={adIdx} className="text-xs font-semibold text-slate-800 leading-relaxed">
                          {addr}
                        </p>
                      ))}
                    </div>

                    {/* Phone */}
                    {item.phone && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Official Phone</span>
                        <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.phone}</span>
                        </p>
                      </div>
                    )}

                    {/* Email */}
                    {item.email && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Official Contact Email</span>
                        <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5 break-all">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a href={`mailto:${item.email}`} className="hover:underline text-emerald-800 font-bold">
                            {item.email}
                          </a>
                        </p>
                      </div>
                    )}

                    {/* Website */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Official Web Portal</span>
                      <p className="text-xs font-semibold text-[#0072bc] flex items-center gap-1.5 break-all">
                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.website}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Verification Source Note */}
                  {item.sourceNote && (
                    <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.sourceNote}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* 2. LEDGER VIEW */
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Facilitator / Organization</th>
                  <th className="px-4 py-3">Accreditation Role</th>
                  <th className="px-4 py-3">Address &amp; City</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Official Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredFacilitators.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">{idx + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-900 max-w-[240px]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 font-semibold text-emerald-800 max-w-[200px]">
                      {item.badge}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-[220px]">
                      {item.address[0]}
                    </td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                      {item.phone || '—'}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {item.email ? <a href={`mailto:${item.email}`} className="text-emerald-700 hover:underline">{item.email}</a> : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0072bc] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. OPTIONAL EU TOP 20 EXPANSION SECTION */}
      {showEUNetwork && (
        <div className="pt-2">
          <EuropeVipFacilitatorsSection 
            countryName="Portugal" 
            isSubSection={true} 
            onNavigateToEU={onNavigateToEU} 
          />
        </div>
      )}

      {/* 4. PRIORITY SDG INFRASTRUCTURE SECTORS IN PORTUGAL */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Priority SDG Concession &amp; PPP Infrastructure Sectors in Portugal
            </h3>
            <span className="text-xs text-slate-500">
              Targeted sectors supervised by UTAP and backed by Portuguese accredited facilitators
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Hospital Concessions</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Pioneering clinical and infrastructure concessions including Hospital de Loures and Hospital de Vila Franca de Xira.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Scut &amp; Motorway Networks</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Shadow-toll and real-toll highway concessions linking regional transport corridors across Portugal and the Iberian network.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Port of Sines Deepwater Hub</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Major deepwater container terminal concessions and international logistical corridors connecting Atlantic routes.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Green Hydrogen &amp; Clean Energy</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Industrial green hydrogen production, offshore wind concessions, and export terminals aligned with EU Green Deal goals.
            </p>
          </div>
        </div>
      </div>

      {/* 5. FOOTER & NAVIGATION BUTTONS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
        {onNavigateBack && (
          <button
            onClick={onNavigateBack}
            className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            ← Back to Facilitators Directory
          </button>
        )}

        <div className="text-[11px] text-slate-500 font-medium">
          Official reference: <a href="https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/" target="_blank" rel="noopener noreferrer" className="text-[#0072bc] hover:underline font-bold">pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal</a>
        </div>
      </div>

    </div>
  );
};

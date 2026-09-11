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
  DollarSign, 
  ChevronRight,
  GraduationCap,
  Briefcase,
  Users,
  Layers,
  Search,
  Sparkles,
  Zap,
  Check,
  Building,
  Copy
} from 'lucide-react';

interface IndiaFacilitatorsDossierProps {
  onNavigateHome?: () => void;
  onNavigateBack?: () => void;
}

export interface IndiaFacilitatorItem {
  id: string;
  name: string;
  category: 'sovereign' | 'capacity' | 'advisory' | 'undp' | 'research' | 'vip_partner';
  categoryLabel: string;
  parentOrg?: string;
  badge: string;
  coreBusiness: string[];
  empanelledFirms?: string[];
  specialProgram?: {
    title: string;
    description: string;
    valuation?: string;
  };
  resourcePerson?: string;
  headOffice?: string;
  address: string[];
  phone?: string;
  email?: string;
  website: string;
  sourceNote?: string;
}

export const INDIA_FACILITATORS: IndiaFacilitatorItem[] = [
  {
    id: 'isd-dea',
    name: 'INFRASTRUCTURE SUPPORT & DEVELOPMENT DIVISION (ISD)',
    category: 'sovereign',
    categoryLabel: 'Sovereign Authority & Secretariat',
    parentOrg: 'Department of Economic Affairs, Ministry of Finance, Government of India',
    badge: 'National PPP Regulator & VGF Authority',
    coreBusiness: [
      'National Public-Private Partnership (PPP) policy and regulatory framework formulation',
      'Viability Gap Funding (VGF) Scheme administration and financial clearances',
      'India Infrastructure Project Development Fund (IIPDF) project structuring grants',
      'Secretariat for the Public Private Partnership Appraisal Committee (PPPAC) & Empowered Committee'
    ],
    address: [
      'Room No. 502, Jawahar Vyapar Bhawan, Tolstoy Road, New Delhi, India'
    ],
    phone: '+91 11 2370 1037',
    email: 'Public contact via DEA official portal (https://www.pppinindia.gov.in)',
    website: 'https://www.pppinindia.gov.in',
    sourceNote: 'Official DEA PPP India Portal & Central Government Secretariat'
  },
  {
    id: 'nirdpr',
    name: 'NATIONAL INSTITUTE OF RURAL DEVELOPMENT & PANCHAYATI RAJ (NIRDPR)',
    category: 'capacity',
    categoryLabel: 'Autonomous Apex Institution',
    parentOrg: 'Centre for CSR, PPP & People’s Action',
    badge: 'Apex SDG17 Rural Capacity Building Center',
    coreBusiness: [
      'PPP capacity building and technical facilitation for rural development infrastructure',
      'SDG-17 Multi-Stakeholder Partnership facilitation across state and district administrations',
      'Corporate Social Responsibility (CSR) and PPP structured training programs',
      'National & international technical workshops on sustainable local infrastructure'
    ],
    address: [
      'NIRDPR Campus, Rajendranagar, Hyderabad, Telangana, India'
    ],
    phone: '+91 40 2400 8522',
    email: 'Public contact via NIRDPR official portal',
    website: 'https://nirdpr.org.in',
    sourceNote: 'Ministry of Rural Development, Government of India Autonomous Apex Body'
  },
  {
    id: 'empanelled-advisers',
    name: 'EMPANELLED PPP TRANSACTION ADVISERS',
    category: 'advisory',
    categoryLabel: 'Empanelled National Panel',
    parentOrg: 'Government of India – Department of Economic Affairs (DEA)',
    badge: 'Official DEA Empanelled Transaction Advisory Panel',
    coreBusiness: [
      'Public-Private Partnership (PPP) project structuring and pre-feasibility analysis',
      'Financial advisory, risk allocation, and bankability assessments for PPP concessions',
      'National PPP transaction advisory panel supporting Central Ministries, States & Municipalities',
      'Comprehensive tender document drafting (RFP, RFQ, Model Concession Agreements)'
    ],
    empanelledFirms: [
      'Almondz Global Securities Ltd. (New Delhi)',
      'CRISIL Ltd. (Gurgaon / Mumbai)',
      'Deloitte India LLP (Gurgaon / National)',
      'Ernst & Young LLP (EY India – National)',
      'KPMG Advisory Services Private Ltd. (Gurgaon / National)'
    ],
    address: [
      'Department of Economic Affairs Empanelled Panel (Serving Central Ministries, State Governments & ULBs across India)'
    ],
    website: 'https://www.pppinindia.gov.in',
    sourceNote: 'Empanelled under Department of Economic Affairs (DEA) Notification dated 5 Feb 2024'
  },
  {
    id: 'undp-india',
    name: 'UNDP INDIA – SDG KNOWLEDGE HUB',
    category: 'undp',
    categoryLabel: 'Multilateral SDG Technical Desk',
    parentOrg: 'United Nations Development Programme (UNDP) in India',
    badge: 'UN SDG-17 Coordination & Knowledge Hub',
    coreBusiness: [
      'SDG-17 partnership development connecting state governments, civil society & private capital',
      'Technical advisory and capacity building for national and sub-national SDG implementation',
      'National SDG coordination support and SDG India Index indicator monitoring',
      'Local development Acceleration Labs and sustainable financing frameworks'
    ],
    address: [
      'UNDP India Country Office, 55 Lodhi Estate, New Delhi – 110003, India'
    ],
    phone: '+91 11 4653 2333',
    email: 'supportsdghub.in@undp.org',
    website: 'https://www.in.undp.org',
    sourceNote: 'Official United Nations Country Office in India'
  },
  {
    id: 'sdrf-india',
    name: 'SUSTAINABLE DEVELOPMENT RESEARCH FOUNDATION (SDRF INDIA)',
    category: 'research',
    categoryLabel: 'Research Foundation & Field Facilitator',
    parentOrg: 'SDRF Research Network',
    badge: 'Accredited SDG Implementation & Research Entity',
    coreBusiness: [
      'Ground-level Sustainable Development Goals implementation projects and field pilots',
      'Environmental sustainability, clean water access, and renewable community energy programs',
      'Community development initiatives rigorously aligned with the 17 UN SDGs',
      'Public awareness and local institutional compliance support'
    ],
    address: [
      'Oplus Cowork, Bailey Road, Rupaspur, Patna – 801503, Bihar, India',
      'MIG 220, Hanuman Nagar, Kankarbagh, Patna – 800020, Bihar, India'
    ],
    email: 'help@sdrfindia.org',
    website: 'https://www.sdrfindia.org',
    sourceNote: 'Accredited Indian Research & Development Non-Profit Organization'
  },
  {
    id: 'indus-global',
    name: 'INDUS GLOBAL INDIA',
    category: 'vip_partner',
    categoryLabel: 'VIP Member & Platform Partner',
    parentOrg: 'Indus Global Projects • Investment • Partnerships (Associated Partner of ADP Platform)',
    badge: 'VIP Member of PPP Union & ADP Platform Associated Partner',
    headOffice: 'Dubai, United Arab Emirates | India Operations: Chennai, Tamil Nadu',
    resourcePerson: 'Dr. Rajah Cornelius',
    coreBusiness: [
      'PPP facilitation and SDG-17 multi-stakeholder partnership development',
      'Investment mobilization and concession partnership structuring for Indian and regional projects',
      'Project development and execution across infrastructure, agricultural supply chains & tech',
      'International development cooperation and cross-border capital compliance',
      'Institutional capacity building and transaction advisory',
      'BYOBO and student entrepreneur incubation & development'
    ],
    specialProgram: {
      title: '₹10,000 Crore INR (~€1.1 Billion) Capacity-Building & Financial Empowerment Initiative',
      description: 'Indus Global, in addition to its project funding and facilitation services, is launching a comprehensive educational and financial empowerment program for all eligible companies, facilitators, and student entrepreneurs valued at approximately ₹10,000 crore INR (around €1.1 billion), representing one of the most ambitious capacity-building efforts in the region. Indus Global is also a partner and associated firm of the ADP Platform, further enhancing its international credibility and collaborative strength.',
      valuation: '₹10,000 Crore INR (~€1.1 Billion)'
    },
    address: [
      'Indus Gp Empee Towers 59, Adithanar Rd, Pudupet, Komaleeswaranpet, Egmore, Greater Chennai, Tamil Nadu 600008, India'
    ],
    phone: '+971 55 439 2119 (WhatsApp / International Desk)',
    email: 'rajah@industransfood.com',
    website: 'https://www.industransfood.com/contact.php#',
    sourceNote: 'Registered VIP Member with PPP Union & Associated Partner of ADP Platform'
  }
];

export const IndiaFacilitatorsDossier: React.FC<IndiaFacilitatorsDossierProps> = ({
  onNavigateHome,
  onNavigateBack
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFacilitators = INDIA_FACILITATORS.filter((item) => {
    if (activeTab !== 'all' && item.category !== activeTab) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        (item.parentOrg && item.parentOrg.toLowerCase().includes(q)) ||
        item.coreBusiness.some(b => b.toLowerCase().includes(q)) ||
        (item.empanelledFirms && item.empanelledFirms.some(f => f.toLowerCase().includes(q))) ||
        (item.resourcePerson && item.resourcePerson.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="india-facilitators-master-dossier" className="space-y-8">
      
      {/* 1. MASTER OVERVIEW BANNER */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              {onNavigateHome && <HeaderLogo size="sm" showText={false} onClick={onNavigateHome} />}
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xl shadow-2xs">
                🇮🇳
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  PPP &amp; SDGs Center and Facilitators Members in India
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-orange-100 text-orange-800 border border-orange-200">
                  Official PPP Union Registry
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Department of Economic Affairs (DEA), National Institute of Rural Development, Empanelled Advisers, and VIP Members
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl border border-sky-200 bg-sky-50/80 hover:bg-sky-100 text-[#0072bc] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto shrink-0 cursor-pointer"
          >
            <span>pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Institutional Assessment & Mandate Box */}
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-sky-50/50 rounded-xl p-5 sm:p-6 border border-amber-200 mb-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>Institutional Mandate: India Sovereign Infrastructure &amp; SDG-17 Partnerships</span>
              </div>
              <p className="text-justify">
                Under the official registry of the <strong className="font-bold text-slate-900">PPP Union</strong>, India’s public-private partnership ecosystem operates through an institutional framework centered around the <strong className="font-bold text-slate-900">Department of Economic Affairs (Ministry of Finance)</strong>, apex capacity institutions such as the <strong className="font-bold text-slate-900">National Institute of Rural Development &amp; Panchayati Raj (NIRDPR)</strong>, the <strong className="font-bold text-slate-900">UNDP India SDG Knowledge Hub</strong>, empanelled transaction advisers, and accredited international VIP member platforms like <strong className="font-bold text-slate-900">Indus Global India</strong> (partner of ADP Platform).
              </p>

              {/* 3 Core Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 font-bold text-xs flex items-center justify-center mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">DEA VGF &amp; IIPDF Schemes</h4>
                  <p className="text-[11px] text-slate-600">
                    Viability Gap Funding (VGF) of up to 40% capital cost and project development financing via IIPDF under the PPP Appraisal Committee (PPPAC).
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Rural SDGs &amp; NIRDPR Centre</h4>
                  <p className="text-[11px] text-slate-600">
                    Dedicated apex center for CSR, PPP &amp; People’s Action driving decentralized infrastructure and SDG-17 partnership development across 28 states.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Indus Global ₹10,000 Cr Program</h4>
                  <p className="text-[11px] text-slate-600">
                    VIP Member Indus Global (associated with ADP Platform) launching a ₹10,000 Crore INR (~€1.1B) educational and financial empowerment program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {/* Quick Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Listed Entities ({INDIA_FACILITATORS.length})
            </button>
            <button
              onClick={() => setActiveTab('sovereign')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'sovereign'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              DEA / Ministry of Finance
            </button>
            <button
              onClick={() => setActiveTab('capacity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'capacity'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              NIRDPR Rural Centre
            </button>
            <button
              onClick={() => setActiveTab('advisory')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'advisory'
                  ? 'bg-[#0072bc] text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Empanelled Advisers
            </button>
            <button
              onClick={() => setActiveTab('vip_partner')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'vip_partner'
                  ? 'bg-purple-700 text-white shadow-2xs'
                  : 'bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200'
              }`}
            >
              Indus Global (VIP Member)
            </button>
          </div>

          {/* View Mode Toggle & Search */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search India facilitators..."
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
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:border-sky-300 transition-all"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-6 h-6 rounded-full bg-[#005285]/10 text-[#005285] font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-[#005285] border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  {item.parentOrg && (
                    <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 pl-8">
                      <Landmark className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.parentOrg}</span>
                    </div>
                  )}

                  {item.headOffice && (
                    <div className="text-xs font-bold text-purple-700 flex items-center gap-1.5 pl-8">
                      <Globe className="w-3.5 h-3.5 text-purple-600" />
                      <span>{item.headOffice}</span>
                    </div>
                  )}
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
                    className="px-3.5 py-1.5 rounded-lg bg-[#0072bc] hover:bg-[#005285] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Core Business Activities */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0072bc]" />
                      <span>Core Business &amp; Mandated Scope</span>
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

                  {/* Special Empanelled Firms List */}
                  {item.empanelledFirms && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h5 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#005285]" />
                        <span>Empanelled Transaction Advisory Firms (Notification 5 Feb 2024):</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.empanelledFirms.map((firm, fIdx) => (
                          <div key={fIdx} className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center shrink-0">
                              {fIdx + 1}
                            </span>
                            <span>{firm}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Program: ₹10,000 Crore Initiative */}
                  {item.specialProgram && (
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-700" />
                        <h5 className="text-xs font-black text-purple-900">
                          {item.specialProgram.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        {item.specialProgram.description}
                      </p>
                      {item.resourcePerson && (
                        <div className="mt-3 pt-2 border-t border-purple-100 flex items-center gap-2 text-xs font-bold text-purple-900">
                          <Users className="w-3.5 h-3.5 text-purple-700" />
                          <span>Resource Person: {item.resourcePerson}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right: Contact & Institutional Coordinates */}
                <div className="lg:col-span-5 bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0072bc]" />
                      <span>Official Registered Coordinates</span>
                    </h4>

                    {/* Addresses */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Headquarters / Campus</span>
                      {item.address.map((addr, adIdx) => (
                        <p key={adIdx} className="text-xs font-semibold text-slate-800 leading-relaxed">
                          {addr}
                        </p>
                      ))}
                    </div>

                    {/* Phone */}
                    {item.phone && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Official Phone / Desk</span>
                        <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.phone}</span>
                        </p>
                      </div>
                    )}

                    {/* Email */}
                    {item.email && (
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-slate-500 uppercase">Public Email / Inquiry</span>
                        <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5 break-all">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{item.email}</span>
                        </p>
                      </div>
                    )}

                    {/* Website */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Registered Portal</span>
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
                  <th className="px-4 py-3">Authority / Parent Body</th>
                  <th className="px-4 py-3">Accreditation Role</th>
                  <th className="px-4 py-3">Address &amp; State</th>
                  <th className="px-4 py-3">Contact Details</th>
                  <th className="px-4 py-3">Official Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredFacilitators.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-sky-50/40 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">{idx + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-900 max-w-[220px]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-[180px]">
                      {item.parentOrg || 'Autonomous'}
                    </td>
                    <td className="px-4 py-3 font-semibold text-[#005285]">
                      {item.badge}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-[200px]">
                      {item.address[0]}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {item.phone && <div>{item.phone}</div>}
                      {item.email && <div className="text-[11px] text-slate-500">{item.email}</div>}
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

      {/* 3. PRIORITY SDG INFRASTRUCTURE SECTORS IN INDIA */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Priority SDG Concession &amp; PPP Infrastructure Sectors in India
            </h3>
            <span className="text-xs text-slate-500">
              National Infrastructure Pipeline (NIP) priority sectors supported under VGF and IIPDF
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>National Highways (HAM)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Hybrid Annuity Model (HAM) concession agreements deployed across thousands of kilometers under NHAI.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Solar Parks (Rewa, Bhadla)</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Ultra-mega solar power parks developed under public land allocation and private IPP off-take structures.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Station Redevelopment</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              World-class railway hub modernization through long-term real estate and transit public-private partnerships.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Smart City Water &amp; SDG 6</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              24x7 pressurized drinking water, wastewater treatment concessions, and circular municipal sanitation.
            </p>
          </div>
        </div>
      </div>

      {/* 4. FOOTER & NAVIGATION BUTTONS */}
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
          Official reference: <a href="https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/" target="_blank" rel="noopener noreferrer" className="text-[#0072bc] hover:underline font-bold">pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india</a>
        </div>
      </div>

    </div>
  );
};

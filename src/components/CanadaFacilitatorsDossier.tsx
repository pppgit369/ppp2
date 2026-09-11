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
  Train,
  Droplets,
  Zap,
  Activity
} from 'lucide-react';

interface CanadaFacilitatorsDossierProps {
  onNavigateHome?: () => void;
  onNavigateBack?: () => void;
}

export interface CanadaFacilitatorItem {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  category: 'legal' | 'finance' | 'advisory';
  tenure: string;
  highlightProject?: string;
  expertise: string[];
  address: string[];
  phone: string;
  email: string;
  website: string;
}

export const CANADA_FACILITATORS: CanadaFacilitatorItem[] = [
  {
    id: 'blakes',
    name: 'Blake, Cassels & Graydon LLP (Blakes)',
    shortName: 'Blakes',
    badge: 'VIP Member · Market-Leading Infrastructure Practice',
    category: 'legal',
    tenure: '10+ Years PPP Experience (Nationally Recognized)',
    highlightProject: 'Acted on CAD 5.5B Calgary Green Line LRT PPP',
    expertise: [
      'Market-leading Public-Private Partnership & infrastructure transaction practice',
      'Advises governments, private lenders, and bidding sponsors on major complex PPPs',
      'Extensive project portfolio across transit, highways, bridges, ports, water, energy, and acute healthcare hospitals',
      'Recognized pioneer in complex secondary market PPP equity transfers and financial re-structuring',
      'Key counsel on the CAD 5.5 Billion Calgary Green Line LRT Public-Private Partnership'
    ],
    address: [
      '199 Bay Street, Suite 4000, Toronto, ON M5L 1A9, Canada'
    ],
    phone: '+1 416-863-2400',
    email: 'info@blakes.com',
    website: 'https://www.blakes.com'
  },
  {
    id: 'mcmillan',
    name: 'McMillan LLP',
    shortName: 'McMillan',
    badge: 'VIP Member · 100+ Completed PPP Projects',
    category: 'legal',
    tenure: '10+ Years PPP Experience (Nationally Recognized)',
    highlightProject: 'Over 100 Completed Canadian & International PPP Transactions',
    expertise: [
      'Top-tier PPP legal advisor with over 100 successfully closed PPP transactions',
      'Deep domain specialization in mass transit, healthcare complexes, and environmental water/wastewater P3s',
      'Advises sovereign lenders, equity consortia, EPC subcontractors, and provincial procurement authorities',
      'Provides specialized PPP governance training to federal, provincial, and municipal officials across Canada'
    ],
    address: [
      'Brookfield Place, 181 Bay Street, Suite 4400, Toronto, ON M5J 2T3, Canada'
    ],
    phone: '+1 416-865-7000',
    email: 'info@mcmillan.ca',
    website: 'https://www.mcmillan.ca'
  },
  {
    id: 'davies',
    name: 'Davies Ward Phillips & Vineberg LLP (Davies)',
    shortName: 'Davies',
    badge: 'VIP Member · Band-1 Ranked Infrastructure Team',
    category: 'finance',
    tenure: '10+ Years PPP Experience (Nationally Recognized)',
    highlightProject: 'Acted on Yonge North Subway Extension PPP',
    expertise: [
      'Band-1 ranked PPP & infrastructure legal team in Canada across leading global directories',
      'Unmatched PPP project finance capability; advises senior debt lenders, equity sponsors, and concession developers',
      'Major track record in rapid rail transit (LRT/subways), water treatment facilities, and complex municipal civic infrastructure',
      'Primary transaction and structuring counsel on the premier Yonge North Subway Extension PPP'
    ],
    address: [
      '155 Wellington Street West, Toronto, ON M5V 3J7, Canada'
    ],
    phone: '+1 416-863-0900',
    email: 'info@dwpv.com',
    website: 'https://www.dwpv.com'
  },
  {
    id: 'dentons',
    name: 'Dentons Canada',
    shortName: 'Dentons',
    badge: 'VIP Member · #1 Global Law Firm by Project Value',
    category: 'legal',
    tenure: '10+ Years PPP Experience (Nationally Recognized)',
    highlightProject: 'Advises on 13 of Canada’s Largest P3s (CA$86B Total Value)',
    expertise: [
      'Ranked #1 global law firm by project value in Canada’s Top100 Infrastructure Projects',
      'Advises on 13 of Canada’s largest mega-PPP projects totaling over CA$86 Billion in capital value',
      'Industry-wide breadth in high-speed transit, mega-highways, suspension bridges, hospital campuses, and clean energy',
      'Comprehensive national and international presence with full-service offices in all major Canadian commercial centres'
    ],
    address: [
      '77 King Street West, Suite 400, Toronto, ON M5K 0A1, Canada'
    ],
    phone: '+1 416-863-4511',
    email: 'toronto@dentons.com',
    website: 'https://www.dentons.com'
  },
  {
    id: 'cpcs',
    name: 'CPCS (Infrastructure & PPP Advisory)',
    shortName: 'CPCS',
    badge: 'VIP Member · Global Sovereign PPP Transaction Advisor',
    category: 'advisory',
    tenure: '10+ Years PPP Experience (Global Footprint)',
    highlightProject: 'Advisor to Governments, MDBs, and Institutional Investors Worldwide',
    expertise: [
      'Leading PPP transaction and commercial advisory firm in Canada and globally across 100+ countries',
      'Provides comprehensive feasibility studies, value-for-money (VfM) market analyses, and competitive procurement strategies',
      'Advises national governments, multilateral development banks (World Bank, ADB, IDB), and institutional investors',
      'Unrivalled transaction advisory expertise in heavy rail transport, power grids, municipal utilities, and climate resilience'
    ],
    address: [
      '150 Elgin Street, Suite 800, Ottawa, ON K2P 1L4, Canada'
    ],
    phone: '+1 613-237-2500',
    email: 'info@cpcs.ca',
    website: 'https://www.cpcs.ca'
  }
];

export const CanadaFacilitatorsDossier: React.FC<CanadaFacilitatorsDossierProps> = ({
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

  const filteredFacilitators = CANADA_FACILITATORS.filter((item) => {
    if (activeTab !== 'all' && item.category !== activeTab) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        item.name.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.expertise.some(b => b.toLowerCase().includes(q)) ||
        (item.highlightProject && item.highlightProject.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="canada-facilitators-master-dossier" className="space-y-8">
      
      {/* 1. MASTER OVERVIEW BANNER */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              {onNavigateHome && <HeaderLogo size="sm" showText={false} onClick={onNavigateHome} />}
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-xl shadow-2xs">
                🇨🇦
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  PPP Facilitators in Canada (VIP Members)
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-red-100 text-red-800 border border-red-200">
                  TOP 5 VIP MEMBERS
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  10+ Years P3 Experience
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                National and Global Leaders in Public-Private Partnership Legal, Financial, and Transaction Advisory
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/ppp-facilitators-in-canada-vip-members/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl border border-red-200 bg-red-50/80 hover:bg-red-100 text-red-900 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto shrink-0 cursor-pointer"
          >
            <span>pppunion.org/ppp-facilitators-in-canada-vip-members</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Institutional Assessment & Qualification Statement */}
        <div className="bg-gradient-to-br from-red-50/70 via-white to-slate-50 rounded-xl p-5 sm:p-6 border border-red-200 mb-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>Top 5 PPP Facilitators in Canada · PPP Union VIP Accreditation Note</span>
              </div>
              <div className="p-3 rounded-lg bg-red-100/70 text-red-950 font-bold text-xs border border-red-300">
                &ldquo;All listed firms have over 10 years of specialized Public-Private Partnership experience and hold peerless national and international recognition.&rdquo;
              </div>
              <p className="text-justify">
                Canada is globally acknowledged as the gold standard of Public-Private Partnerships (P3), with more than 300 completed P3 projects worth hundreds of billions of dollars across hospitals, transit rail, judicial facilities, and clean energy. Under the official <strong className="font-bold text-slate-900">PPP Union VIP Membership Directory</strong>, the Top 5 accredited facilitators represent the premier transaction, legal, and financial architecture powering both Canadian sovereign concessions and global infrastructure.
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Over CA$86B in Top 100 P3s</h4>
                  <p className="text-[11px] text-slate-600">
                    Dentons and Blakes advise on Canada&apos;s largest mega-concessions including the CAD 5.5B Calgary Green Line LRT.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#005285] font-bold text-xs flex items-center justify-center mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">100+ Completed Projects</h4>
                  <p className="text-[11px] text-slate-600">
                    McMillan and Davies bring Band-1 financing credentials and project structuring for subways, hospitals, and water systems.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Global MDB Advisory</h4>
                  <p className="text-[11px] text-slate-600">
                    CPCS provides sovereign feasibility, procurement strategy, and transaction design to governments and multilateral banks globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & Navigation */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-red-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All Top 5 VIP Facilitators
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'legal'
                  ? 'bg-red-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Legal &amp; Concessions (Blakes, McMillan, Dentons)
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'finance'
                  ? 'bg-red-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Finance &amp; Banking (Davies)
            </button>
            <button
              onClick={() => setActiveTab('advisory')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                activeTab === 'advisory'
                  ? 'bg-red-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Transaction Advisory (CPCS)
            </button>
          </div>

          {/* View Mode Toggle & Search */}
          <div className="flex items-center gap-2">
            <div className="relative w-full sm:w-52">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Canada facilitators..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/30"
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
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 hover:border-red-300 transition-all"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap pl-8">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-red-900 border border-red-200">
                      {item.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      {item.tenure}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
                  <button
                    onClick={() => handleCopy(`${item.name}\n${item.address.join(', ')}\n${item.phone}\n${item.email}\n${item.website}`, item.id)}
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
                    className="px-3.5 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>Visit Firm Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Expertise & Key Projects */}
                <div className="lg:col-span-7 space-y-4">
                  {item.highlightProject && (
                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-center gap-2.5 font-bold">
                      <Award className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Key Reference: {item.highlightProject}</span>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-red-700" />
                      <span>Verified PPP Practice &amp; Areas of Expertise</span>
                    </h4>
                    <ul className="space-y-2">
                      {item.expertise.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Contact & Firm Coordinates */}
                <div className="lg:col-span-5 bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-700" />
                      <span>Registered Canadian Coordinates</span>
                    </h4>

                    {/* Address */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Headquarters Office</span>
                      {item.address.map((addr, adIdx) => (
                        <p key={adIdx} className="text-xs font-semibold text-slate-800 leading-relaxed">
                          {addr}
                        </p>
                      ))}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Telephone</span>
                      <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.phone}</span>
                      </p>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Direct Inquiries</span>
                      <p className="text-xs font-semibold text-slate-800 flex items-center gap-1.5 break-all">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a href={`mailto:${item.email}`} className="hover:underline text-red-800 font-bold">
                          {item.email}
                        </a>
                      </p>
                    </div>

                    {/* Website */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase">Official Firm Portal</span>
                      <p className="text-xs font-semibold text-[#0072bc] flex items-center gap-1.5 break-all">
                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.website}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* VIP Member Stamp */}
                  <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>PPP Union Accredited VIP Member (Canada Registry)</span>
                  </div>
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
                  <th className="px-4 py-3">Firm Name</th>
                  <th className="px-4 py-3">VIP Role</th>
                  <th className="px-4 py-3">Key Landmark Reference</th>
                  <th className="px-4 py-3">Canadian Headquarters</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredFacilitators.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-red-50/40 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900">{idx + 1}</td>
                    <td className="px-4 py-3 font-bold text-slate-900 max-w-[220px]">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 font-semibold text-red-800 max-w-[200px]">
                      {item.badge}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-[220px]">
                      {item.highlightProject || 'Multiple National Concessions'}
                    </td>
                    <td className="px-4 py-3 text-slate-600 max-w-[200px]">
                      {item.address[0]}
                    </td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                      {item.phone}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <a href={`mailto:${item.email}`} className="text-red-700 hover:underline">{item.email}</a>
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

      {/* 3. CANADIAN SOVEREIGN P3 INSTITUTIONS & SECTORS */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
          <div className="w-9 h-9 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Canadian P3 Sovereign Framework &amp; Priority Concession Sectors
            </h3>
            <span className="text-xs text-slate-500">
              Coordinated with Canada Infrastructure Bank (CIB), Infrastructure Ontario, and CDPQ Infra
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Train className="w-4 h-4 text-red-700 shrink-0" />
              <span>Mass Transit &amp; LRT Networks</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Calgary Green Line LRT, Eglinton Crosstown, REM Montreal, Ontario Line, and Yonge North Subway Extension.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Activity className="w-4 h-4 text-red-700 shrink-0" />
              <span>Specialized Acute Healthcare</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              World-renowned P3 hospital complexes, cancer treatment pavilions, and university medical research campuses.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Zap className="w-4 h-4 text-red-700 shrink-0" />
              <span>Clean Power &amp; Nuclear SMRs</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Small Modular Reactor (SMR) development, transmission corridors, and remote community clean grid storage.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-red-200/80 bg-red-50/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
              <Droplets className="w-4 h-4 text-red-700 shrink-0" />
              <span>Water, Wastewater &amp; Climate</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Municipal water treatment facilities, bio-solids processing concessions, and northern indigenous community clean water.
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
          Official reference: <a href="https://pppunion.org/ppp-facilitators-in-canada-vip-members/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline font-bold">pppunion.org/ppp-facilitators-in-canada-vip-members</a>
        </div>
      </div>

    </div>
  );
};

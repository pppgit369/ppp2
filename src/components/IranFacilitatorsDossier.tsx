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
  MapPin, 
  AlertCircle, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Award, 
  DollarSign, 
  ChevronRight,
  GraduationCap,
  Briefcase,
  Users,
  Activity,
  Layers,
  Search,
  Sparkles,
  Zap,
  Droplets,
  Train,
  Check
} from 'lucide-react';

interface IranFacilitatorsDossierProps {
  onNavigateHome?: () => void;
  onNavigateBack?: () => void;
}

export const IranFacilitatorsDossier: React.FC<IranFacilitatorsDossierProps> = ({
  onNavigateHome,
  onNavigateBack
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'title1' | 'title2' | 'title3' | 'title4'>('all');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [schedule2View, setSchedule2View] = useState<'cards' | 'ledger'>('cards');
  const [selectedPillar, setSelectedPillar] = useState<number | 'all'>('all');
  const [activeHospitalTab, setActiveHospitalTab] = useState<'cluster' | 'roadmap' | 'scholarship'>('cluster');

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="iran-facilitators-master-dossier" className="space-y-8">
      
      {/* 1. MASTER OVERVIEW BANNER (https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <HeaderLogo size="sm" showText={false} onClick={onNavigateHome} />
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#005285] flex items-center justify-center font-bold text-lg">
                🇮🇷
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  17-Sustainable Development Goals &amp; PPP in Iran
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-sky-100 text-[#005285] border border-sky-200">
                  Official PPP Union Portal
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Verified Assessments, Sovereign Institutional Frameworks, and Registered SDG17 Facilitators
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl border border-sky-200 bg-sky-50/70 hover:bg-sky-100 text-[#0072bc] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto shrink-0"
          >
            <span>Official Post: pppunion.org/17-sustainable-development-goals-ppp-in-iran</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Documented Assessment Box */}
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 rounded-xl p-5 sm:p-6 border border-amber-200/80 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span>Documented Assessment by PPP Union Member Institutions Operating in Iran</span>
              </div>
              <p className="text-justify">
                Based on documented assessments received from our member institutions operating inside Iran, the situation is unfortunately concerning. The level of progress made toward the <strong className="font-bold text-slate-900">UN‑17 Sustainable Development Goals (SDGs)</strong>, relative to the needs of the population, remains significantly low. Our findings indicate three primary causes:
              </p>

              {/* 3 Primary Causes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
                <div className="bg-white rounded-lg p-3.5 border border-amber-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Severe Banking &amp; Sanctions Impact</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Severe impact of international financial and banking sanctions on all Iranian financial institutions.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-amber-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Public &amp; Private Misunderstanding</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Widespread public and private‑sector misunderstanding regarding the scope of sanctions and the false assumption that SDGs and PPP programs are also restricted.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3.5 border border-amber-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-bold text-xs flex items-center justify-center mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">&lt; 1% Accurate Awareness</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Less than one percent accurate awareness and understanding of PPP mechanisms and the UN‑17 SDGs across the entire private sector in Iran.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-sky-50 border border-sky-200 text-xs text-[#004b79] leading-relaxed">
                <strong className="font-bold text-[#003657] block mb-1">Institutional Mandate of the PPP Union:</strong>
                As the PPP Union, and in accordance with our institutional mandate, we were obliged after receiving verified reports to publish accurate information regarding SDG17 and PPP programs in Iran. Our objective is to ensure that the private sector can utilize these programs to support national development and improve public welfare. Therefore, in addition to announcing the official profile of our members in Iran, we intend to provide broader, accessible data to the public so that individuals and institutions can study and understand which legal and operational pathways allow them to benefit from these programs.
              </div>
            </div>
          </div>
        </div>

        {/* 4 INTERACTIVE TILES / FAST NAVIGATION CARDS */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
              Complete Documentation: 4 Core Modules &amp; Schedules
            </h3>
            <span className="text-[11px] text-[#0072bc] font-bold">
              Click any schedule to inspect full contents
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Tile 1 */}
            <button
              onClick={() => scrollToSection('title-1-framework')}
              className="text-left bg-slate-50 hover:bg-sky-50/60 p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#0072bc] text-white font-black flex items-center justify-center text-[11px]">
                    1
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] transition-colors" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0072bc] transition-colors leading-snug mb-1">
                  When Iran Became Part of SDG17 &amp; PPP Framework
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  Adoption timeline, UNDP CPD 2023–2027, and UN Charter legal non-sanctionability protections.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-bold text-[#0072bc] uppercase tracking-wider flex items-center gap-1">
                <span>View Schedule</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            {/* Tile 2 */}
            <button
              onClick={() => scrollToSection('title-2-active-projects')}
              className="text-left bg-slate-50 hover:bg-sky-50/60 p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#0072bc] text-white font-black flex items-center justify-center text-[11px]">
                    2
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] transition-colors" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0072bc] transition-colors leading-snug mb-1">
                  SDG17 &amp; PPP Projects Currently Active in Iran
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  UNSDCF 4-Pillar Budget ($19.88M), FARBOD RAD €120M Hospital Program, and National $14B Mega PPPs.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-bold text-[#0072bc] uppercase tracking-wider flex items-center gap-1">
                <span>View Schedule</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            {/* Tile 3 */}
            <button
              onClick={() => scrollToSection('title-3-authorities')}
              className="text-left bg-slate-50 hover:bg-sky-50/60 p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#0072bc] text-white font-black flex items-center justify-center text-[11px]">
                    3
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] transition-colors" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0072bc] transition-colors leading-snug mb-1">
                  PPP Authorities &amp; Reference Centers in Iran
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  MEAF, PBO, MRUD, SATBA, Municipal PPP Units, Academic Centers, and FIPPA Concession Codes.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-bold text-[#0072bc] uppercase tracking-wider flex items-center gap-1">
                <span>View Schedule</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </button>

            {/* Tile 4 */}
            <button
              onClick={() => scrollToSection('title-4-members')}
              className="text-left bg-slate-50 hover:bg-sky-50/60 p-4 rounded-xl border border-slate-200 hover:border-sky-300 transition-all group flex flex-col justify-between cursor-pointer shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#0072bc] text-white font-black flex items-center justify-center text-[11px]">
                    4
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] transition-colors" />
                </div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-[#0072bc] transition-colors leading-snug mb-1">
                  Registered Member(s) with PPP Union in Iran
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  FARBOD RAD Team, Majtamea Sahamdaran Tosea Asiave, Non-Blacklisted Companies, and Universities.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-bold text-[#0072bc] uppercase tracking-wider flex items-center gap-1">
                <span>View Schedule</span>
                <ChevronRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TITLE 1: When Iran Became Part of the SDG17 & PPP Framework */}
      {/* ========================================================================= */}
      <div id="title-1-framework" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center font-black">
              1
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  When Iran Became Part of the SDG17 and PPP Framework
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-[#005285]">
                  Schedule 1
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Official source: <a href="https://pppunion.org/un-17-sdgs-and-ppp-in-the-country/" target="_blank" rel="noopener noreferrer" className="text-[#0072bc] hover:underline">pppunion.org/un-17-sdgs-and-ppp-in-the-country/</a>
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/un-17-sdgs-and-ppp-in-the-country/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Source Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 1.1 Chronological Evolution Matrix */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#0072bc]" />
            <span>Chronological Evolution of SDGs &amp; PPP in Iran</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-black uppercase mb-2 inline-block">
                2011 – 2015
              </span>
              <h5 className="font-bold text-slate-900 text-xs mb-1">5th Development Plan</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Introduced PPP-style participation in infrastructure for the first time in Iran’s national planning system.
              </p>
            </div>

            <div className="bg-sky-50/70 rounded-xl p-4 border border-sky-200">
              <span className="px-2 py-0.5 rounded-full bg-[#0072bc] text-white text-[10px] font-black uppercase mb-2 inline-block">
                2015
              </span>
              <h5 className="font-bold text-slate-900 text-xs mb-1">Global 2030 Agenda Entry</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Iran, as a UN Member State, formally entered the UN-17 Sustainable Development Goals framework following UNGA adoption.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 text-[10px] font-black uppercase mb-2 inline-block">
                2016 – 2021
              </span>
              <h5 className="font-bold text-slate-900 text-xs mb-1">6th Development Plan</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                National SDG coordination bodies formed. Sixth Plan expanded private-sector participation, BOT/BOO concessions, and infrastructure financing.
              </p>
            </div>

            <div className="bg-emerald-50/70 rounded-xl p-4 border border-emerald-200">
              <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-black uppercase mb-2 inline-block">
                2023 – 2027
              </span>
              <h5 className="font-bold text-slate-900 text-xs mb-1">Active UNSDCF &amp; CPD</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Guided by the UN Sustainable Development Cooperation Framework &amp; UNDP Country Programme Document across 4 core thematic pillars.
              </p>
            </div>
          </div>
        </div>

        {/* 1.2 UNDP 4 Core Ongoing Programmatic Areas */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-[#0072bc]" />
            <span>UNDP Ongoing Programmes in Iran (2023–2027)</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">A) Natural Resources, Water &amp; Climate</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-[#0072bc]">SDG 6, 13, 15</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Water scarcity &amp; drought management, climate adaptation in vulnerable rural zones, land restoration, soil erosion reduction, sustainable agriculture &amp; watershed protection.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">B) Socio-Economic Resilience</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">SDG 1, 8, 10</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Poverty reduction and livelihood support for vulnerable populations, MSME development, green employment schemes, women’s economic empowerment, youth skills &amp; entrepreneurship.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">C) Disaster Risk Reduction &amp; Crisis Management</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">SDG 11, 16</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Earthquake &amp; flood risk mitigation frameworks, national and municipal disaster preparedness systems, and community-based resilience planning.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">D) Health &amp; Social Protection</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800">SDG 3</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Programmes addressing social impacts of drug use, community rehabilitation, harm reduction, and sovereign universal health coverage logistics.
              </p>
            </div>
          </div>
        </div>

        {/* 1.3 Structural Weaknesses & Quad-Helix Solutions Schedule */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-red-50/50 rounded-xl p-4 border border-red-200/80">
            <h5 className="font-bold text-red-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>Documented Structural Weaknesses</span>
            </h5>
            <ul className="space-y-1.5 text-[11px] text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>International financial restrictions &amp; banking sanctions affecting capital flow.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Limited access to foreign capital and global institutional PPP investors.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Lack of experienced PPP facilitators and dedicated technical capacity platforms.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>High perceived political risk among domestic and foreign private sponsors.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Absence of a single unified national PPP Act and standardized contractual forms.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Bureaucratic fragmentation across ministries, planning bodies, and municipalities.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Politicization of international cooperation and development partnerships.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-red-600 font-bold">•</span>
                <span>Limited transparency and availability of project data and feasibility metrics.</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200/80">
            <h5 className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Neutral Quad-Helix Solutions</span>
            </h5>
            <div className="space-y-2 text-[11px] text-slate-700">
              <p>
                <strong>Adopt Quad-Helix Partnership Model:</strong> Combine government, academia, private sector, and international organizations to reduce political misinterpretation and establish technical legitimacy.
              </p>
              <p>
                <strong>Institutionalize Neutral Facilitation Platforms:</strong> Rely on certified facilitators with no political or military affiliation to structure projects under international compliance standards.
              </p>
              <p>
                <strong>Adopt Standardized Procurement:</strong> Implement standardized concession agreements, BOT guidelines, and Value for Money (VfM) methodologies.
              </p>
              <p>
                <strong>Communicate in Technical Terms:</strong> Disseminate project benefits in strictly developmental, humanitarian, and economic terms, avoiding political or ideological framing.
              </p>
            </div>
          </div>
        </div>

        {/* 1.4 INTERNATIONAL LEGAL PROVISIONS PROHIBITING SANCTIONS ON SDG17 & PPP */}
        <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-800">
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
            <Scale className="w-5 h-5 text-sky-400" />
            <div>
              <h4 className="font-black text-white text-sm sm:text-base">
                International Legal Provisions Prohibiting Sanctions on SDG17 &amp; PPP Programs
              </h4>
              <span className="text-[11px] text-slate-400">
                UN Charter Supremacy, ICESCR Human Rights Protections, and UN Security Council Humanitarian Exemptions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Column A: UN Charter & ICESCR */}
            <div className="space-y-3">
              <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700/80">
                <div className="flex items-center justify-between text-sky-400 font-bold mb-1">
                  <span>United Nations Charter</span>
                  <span className="text-[10px] bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">Arts 1(3), 55, 56, 103</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                  • <strong>Article 1(3):</strong> Promotion of human rights, social progress, and better standards of life.<br />
                  • <strong>Article 55:</strong> International cooperation in solving economic, social, and humanitarian problems.<br />
                  • <strong>Article 56:</strong> Member States are legally obligated to take joint and separate action for UN development goals.<br />
                  • <strong>Article 103:</strong> UN Charter obligations override any conflicting national or international sanctions.
                </p>
                <div className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 p-1.5 rounded border border-emerald-900/60">
                  Legal Effect: UN development programs including SDG17 partnerships and PPP mechanisms cannot be sanctioned, restricted, or prohibited by any State or political entity.
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700/80">
                <div className="flex items-center justify-between text-sky-400 font-bold mb-1">
                  <span>ICESCR (International Covenant)</span>
                  <span className="text-[10px] bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">Articles 2, 11, 15</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                  States must take steps individually and through international assistance to achieve development rights (Art 2), right to adequate living standards (Art 11), and right to benefit from scientific and economic progress (Art 15).
                </p>
                <div className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 p-1.5 rounded border border-emerald-900/60">
                  Legal Effect: Development cooperation (SDGs, PPPs) is a protected human right and cannot be targeted by sanctions.
                </div>
              </div>
            </div>

            {/* Column B: UNGA 70/1 & UNSC Humanitarian Exemptions */}
            <div className="space-y-3">
              <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700/80">
                <div className="flex items-center justify-between text-sky-400 font-bold mb-1">
                  <span>UN General Assembly Resolution 70/1 (2015)</span>
                  <span className="text-[10px] bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">2030 Agenda</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                  • <strong>Paragraph 18:</strong> SDGs are universal and apply to all countries without exception.<br />
                  • <strong>Paragraph 67:</strong> No one must be left behind; development programs must remain accessible to all populations.<br />
                  • <strong>Paragraph 74(f):</strong> SDG partnerships must be free from political conditionality.
                </p>
                <div className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 p-1.5 rounded border border-emerald-900/60">
                  Legal Effect: SDG17 partnerships are legally insulated from political sanctions or restrictions.
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-lg p-3.5 border border-slate-700/80">
                <div className="flex items-center justify-between text-sky-400 font-bold mb-1">
                  <span>UN Security Council Humanitarian Exemptions</span>
                  <span className="text-[10px] bg-sky-950 px-1.5 py-0.5 rounded border border-sky-800">UNSC 2664 &amp; 2615</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                  • <strong>UNSC Resolution 2664 (2022):</strong> Humanitarian and development activities are exempt from all sanctions regimes.<br />
                  • <strong>UNSC Resolution 2615 (2021):</strong> Sanctions cannot impede humanitarian or basic human development assistance.
                </p>
                <div className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 p-1.5 rounded border border-emerald-900/60">
                  Legal Effect: Mandatory binding exemption under Chapter VII of the UN Charter across all jurisdictions.
                </div>
              </div>
            </div>
          </div>

          {/* PPP Union Advisory Note */}
          <div className="mt-4 p-3.5 rounded-lg bg-sky-900/50 border border-sky-600/50 text-xs text-sky-100">
            <strong className="text-white block mb-1">Final Advisory Note from PPP Union:</strong>
            All stakeholders should be clearly informed that: If a facilitation platform and its personnel have no political, criminal and military involvement or affiliation, they are fully permitted under international law to provide PPP and SDG17 development services for the people of Iran. UN development programs cannot be sanctioned, restricted, or prohibited. They exist to serve humanity, and no government or political entity has the legal authority to block them.
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TITLE 2: SDG17 and PPP Projects Currently Active in Iran (Schedule 2) */}
      {/* ========================================================================= */}
      <div id="title-2-active-projects" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
              2
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  SDG17 and PPP Projects Currently Active in Iran
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Schedule 2 • Official Registry
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Verified UN Strategic Portfolios (UNSDCF DP/DCP/IRN/4), Bilateral Healthcare Concessions (€120M), and Sovereign Civilian Infrastructure Concessions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
            <button
              onClick={() => handleCopy('https://pppunion.org/1638-2/', 'title2-btn')}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              {copiedLink === 'title2-btn' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
            <a
              href="https://pppunion.org/1638-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <span>Source: pppunion.org/1638-2/</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Executive 4-Metric Key Portfolio Figures */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 relative overflow-hidden group hover:border-emerald-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">UN Framework</span>
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">$19.88M</div>
            <div className="text-[11px] text-slate-600 mt-0.5">UNSDCF (2023–2027) Baseline Envelope</div>
            <div className="text-[10px] text-emerald-700 font-semibold mt-1">Ref: DP/DCP/IRN/4 Matrix</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 relative overflow-hidden group hover:border-sky-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Approved Hospital Facility</span>
              <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#005285] tracking-tight">€120.0M</div>
            <div className="text-[11px] text-slate-600 mt-0.5">FARBOD RAD x Mujtamea Asiave</div>
            <div className="text-[10px] text-sky-700 font-semibold mt-1">8 Hospitals • 38-Month Fast-Track</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 relative overflow-hidden group hover:border-amber-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Humanitarian Scholarships</span>
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-900 tracking-tight">30 Students</div>
            <div className="text-[11px] text-slate-600 mt-0.5">Afghan Women Medical Scholars</div>
            <div className="text-[10px] text-amber-800 font-semibold mt-1">Full IAUMTS Tuition &amp; Clinical Board</div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 relative overflow-hidden group hover:border-indigo-300 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">National PPP Pipeline</span>
              <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-black text-indigo-900 tracking-tight">$14.0 Billion</div>
            <div className="text-[11px] text-slate-600 mt-0.5">Plan &amp; Budget Organization (PBO)</div>
            <div className="text-[10px] text-indigo-700 font-semibold mt-1">Rail, Grid, Water &amp; Telecom BOTs</div>
          </div>
        </div>

        {/* 2.1 Strategic UN Development Schedule (2023–2027) Matrix */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]"></span>
                <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900">
                  2.1 Strategic UN Development Schedule (2023–2027) Matrix
                </h4>
              </div>
              <p className="text-xs text-slate-500 ml-4 mt-0.5">
                United Nations Sustainable Development Cooperation Framework (UNSDCF) • UNDP Document: DP/DCP/IRN/4
              </p>
            </div>

            {/* View Switcher: Cards vs Ledger */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200">
              <button
                onClick={() => setSchedule2View('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  schedule2View === 'cards'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Executive Cards
              </button>
              <button
                onClick={() => setSchedule2View('ledger')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  schedule2View === 'ledger'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Financial Ledger
              </button>
            </div>
          </div>

          {/* VIEW 1: EXECUTIVE CARDS VIEW */}
          {schedule2View === 'cards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1 Card */}
              <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-sky-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-sky-100 text-[#005285] border border-sky-200">
                        SDG 1 No Poverty
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        SDG 8 Decent Work
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      DP/DCP/IRN/4 (Pillar I)
                    </span>
                  </div>

                  <h5 className="font-black text-slate-900 text-sm sm:text-base mb-1.5">
                    Pillar 1: Inclusive Growth &amp; Socio-Economic Resilience
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Targeted micro, small, and medium enterprise (MSME) generation, private sector supply chain integration, and inclusive livelihood creation for vulnerable socio-economic demographics.
                  </p>

                  {/* Financial Breakdown Progress Box */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Core Regular Funding:</span>
                      <span className="font-mono font-bold text-slate-800">$1,750,000 (33%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Extra-Budgetary (Non-Core):</span>
                      <span className="font-mono font-bold text-slate-800">$3,500,000 (67%)</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
                      <div className="bg-[#0072bc] h-full" style={{ width: '33.33%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '66.67%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-black pt-1 border-t border-slate-100 text-slate-900">
                      <span>Total Programmatic Allocation:</span>
                      <span className="text-emerald-700 font-mono">$5,250,000</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Lead Partners:</span>
                  <span className="text-right font-medium">Ministry of Labour &amp; Private Tech Consortia</span>
                </div>
              </div>

              {/* Pillar 2 Card */}
              <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">
                        SDG 6 Clean Water
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
                        SDG 7 Clean Energy
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                        SDG 13 &amp; 15
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      DP/DCP/IRN/4 (Pillar II)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <h5 className="font-black text-slate-900 text-sm sm:text-base">
                      Pillar 2: Climate, Water &amp; Environmental Asset Security
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Multi-city municipal wastewater reclamation networks (BOT), ground-mounted utility solar PV grids (BOO), and Lake Urmia basin ecological restoration and soil preservation.
                  </p>

                  {/* Financial Breakdown Progress Box */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Core Regular Funding:</span>
                      <span className="font-mono font-bold text-slate-800">$2,500,000 (26%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Extra-Budgetary (Non-Core):</span>
                      <span className="font-mono font-bold text-slate-800">$7,236,000 (74%)</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
                      <div className="bg-[#0072bc] h-full" style={{ width: '25.68%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '74.32%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-black pt-1 border-t border-slate-100 text-slate-900">
                      <span>Total Programmatic Allocation:</span>
                      <span className="text-emerald-700 font-mono">$9,736,000</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Lead Partners:</span>
                  <span className="text-right font-medium">Department of Environment, Ministry of Energy</span>
                </div>
              </div>

              {/* Pillar 3 Card */}
              <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-rose-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-200">
                        SDG 3 Good Health &amp; Well-Being
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      DP/DCP/IRN/4 (Pillar III)
                    </span>
                  </div>

                  <h5 className="font-black text-slate-900 text-sm sm:text-base mb-1.5">
                    Pillar 3: Resilient Public Health Infrastructure
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Procurement facilitation for advanced diagnostic imaging and oncology equipment, non-communicable disease treatment networks, and sovereign universal health coverage logistics.
                  </p>

                  {/* Financial Breakdown Progress Box */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Core Regular Funding:</span>
                      <span className="font-mono font-bold text-slate-800">$1,900,000 (39%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Extra-Budgetary (Non-Core):</span>
                      <span className="font-mono font-bold text-slate-800">$3,000,000 (61%)</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
                      <div className="bg-[#0072bc] h-full" style={{ width: '38.78%' }}></div>
                      <div className="bg-emerald-500 h-full" style={{ width: '61.22%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs font-black pt-1 border-t border-slate-100 text-slate-900">
                      <span>Total Programmatic Allocation:</span>
                      <span className="text-emerald-700 font-mono">$4,900,000</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Lead Partners:</span>
                  <span className="text-right font-medium">Ministry of Health (MOHME) &amp; Procurement Hubs</span>
                </div>
              </div>

              {/* Pillar 4 Card */}
              <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-indigo-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                        SDG 16 Peace &amp; Justice
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-sky-100 text-[#005285] border border-sky-200">
                        SDG 17 Partnerships
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      UNSDCF Priority Area 5
                    </span>
                  </div>

                  <h5 className="font-black text-slate-900 text-sm sm:text-base mb-1.5">
                    Pillar 4: Integrated Drug Control &amp; Border Security
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Border checkpoint screening technology upgrades, cross-border anti-trafficking logistics, and community socio-economic harm reduction networks.
                  </p>

                  {/* Operational Framework Box */}
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200 space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Implementation Mechanism:</span>
                      <span className="font-semibold text-indigo-700">Direct Multilateral Mandate</span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      Administered directly through integrated partner agency framework accounts in coordination with international multilateral oversight bodies.
                    </div>
                    <div className="flex items-center justify-between text-xs font-black pt-1 border-t border-slate-100 text-slate-900">
                      <span>Operational Status:</span>
                      <span className="text-emerald-700 font-semibold">Active &amp; Insulated</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Lead Partners:</span>
                  <span className="text-right font-medium">UNODC &amp; Sovereign Anti-Narcotics Police</span>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: FULL FINANCIAL LEDGER VIEW */}
          {schedule2View === 'ledger' && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200">
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Goal &amp; Pillar</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Operational Focus Area</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Regular (Core)</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Other (Non-Core)</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Total Allocation</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">UN Ref</th>
                    <th className="py-3 px-4 font-black uppercase text-[11px]">Lead Partner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">Pillar 1</div>
                      <div className="text-[10px] text-sky-700 font-bold">SDG 1, 8</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-slate-900">Socio-Economic Resilience</div>
                      <div className="text-[11px] text-slate-500">MSME incubation and cross-border private supply chains</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$1,750,000</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$3,500,000</td>
                    <td className="py-3.5 px-4 font-mono font-black text-emerald-700 whitespace-nowrap">$5,250,000</td>
                    <td className="py-3.5 px-4 font-mono text-[10px] text-slate-500 whitespace-nowrap">DP/DCP/IRN/4 (I)</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-600">Ministry of Labour</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">Pillar 2</div>
                      <div className="text-[10px] text-emerald-700 font-bold">SDG 6, 7, 13, 15</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-slate-900">Climate, Water &amp; Environment</div>
                      <div className="text-[11px] text-slate-500">Wastewater BOTs, utility solar BOO, Lake Urmia basin</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$2,500,000</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$7,236,000</td>
                    <td className="py-3.5 px-4 font-mono font-black text-emerald-700 whitespace-nowrap">$9,736,000</td>
                    <td className="py-3.5 px-4 font-mono text-[10px] text-slate-500 whitespace-nowrap">DP/DCP/IRN/4 (II)</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-600">Dept of Environment, Min Energy</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">Pillar 3</div>
                      <div className="text-[10px] text-rose-700 font-bold">SDG 3</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-slate-900">Public Health Infrastructure</div>
                      <div className="text-[11px] text-slate-500">Diagnostic medical equipment and universal healthcare logistics</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$1,900,000</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-700 whitespace-nowrap">$3,000,000</td>
                    <td className="py-3.5 px-4 font-mono font-black text-emerald-700 whitespace-nowrap">$4,900,000</td>
                    <td className="py-3.5 px-4 font-mono text-[10px] text-slate-500 whitespace-nowrap">DP/DCP/IRN/4 (III)</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-600">Ministry of Health (MOHME)</td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition-colors bg-slate-50/40">
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="font-bold text-slate-900">Pillar 4</div>
                      <div className="text-[10px] text-indigo-700 font-bold">SDG 16, 17</div>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-semibold text-slate-900">Drug Control &amp; Border Security</div>
                      <div className="text-[11px] text-slate-500">Inspection infrastructure and community harm reduction</div>
                    </td>
                    <td colSpan={3} className="py-3.5 px-4 text-center font-semibold text-slate-500 italic">
                      Direct Integrated Multilateral Partner Account Routing
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[10px] text-slate-500 whitespace-nowrap">Priority Area 5</td>
                    <td className="py-3.5 px-4 text-[11px] text-slate-600">UNODC &amp; Anti-Narcotics Police</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Analytical Briefing: The Private Capital BOT Multiplier */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-gradient-to-br from-sky-50 to-white border border-sky-200/90 text-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-[#005285] font-black text-xs uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4" />
                <span>Total Indicative Framework Envelope ($19,886,000)</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                The baseline UNDP document designates a total combined allocation of <strong>$19,886,000</strong> (composed of $6,150,000 in regular core contributions and $13,736,000 dynamically mobilized via multilateral extra-budgetary financing).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200/90 text-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-800 font-black text-xs uppercase tracking-wide">
                <TrendingUp className="w-4 h-4" />
                <span>The Private Capital Delta (BOT Multiplier)</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                UN allocations provide essential pre-feasibility, ESG safeguards, and regulatory integration. Physical infrastructure capital is mobilized through private Build-Operate-Transfer (BOT) concessions under Article 27 PPP law.
              </p>
            </div>
          </div>
        </div>

        {/* 2.2 FARBOD RAD Management Team Hospital Program (€120,000,000) */}
        <div className="mb-10 rounded-2xl border-2 border-sky-300 bg-gradient-to-br from-white via-sky-50/20 to-blue-50/40 p-6 sm:p-7 shadow-sm">
          {/* Concession Pact Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-sky-100">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#005285] text-white text-[10px] font-black uppercase tracking-wider">
                  Bilateral Facility Agreement
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider border border-emerald-200">
                  Approved Grant-Based PPP Facility
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#005285] text-[10px] font-black uppercase tracking-wider border border-blue-200">
                  Verified by PPP Union
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                FARBOD RAD Management Team Health Training, Coaching and Treatment Hospital Program
              </h4>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Integrated Cluster of Eight (8) Teaching, Training &amp; Treatment Hospital Projects • Facility Value: <strong className="text-slate-900 font-bold">€120,000,000</strong>
              </p>
            </div>

            <div className="text-left lg:text-right shrink-0 bg-white p-3 rounded-xl border border-sky-200 shadow-2xs">
              <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Facility Capitalization</span>
              <span className="text-2xl font-black text-[#005285] tracking-tight">€120,000,000</span>
              <span className="text-[10px] text-emerald-700 block font-semibold">38-Month Fast-Track Execution</span>
            </div>
          </div>

          {/* Narrative Summary */}
          <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
            <p>
              The <strong className="font-bold text-slate-900">FARBOD RAD Management Team Program</strong> represents an integrated cluster of eight (8) world-class teaching, training, and treatment hospital facilities. In 2025, a landmark PPP Funding Facility Agreement was officially executed between the <strong className="font-bold text-slate-900">FARBOD RAD Management Team</strong> and <strong className="font-bold text-slate-900">MUJTAMEASAHAMDARAN TOSEA ASIAVE</strong>, formalizing a capital development commitment of <strong className="font-bold text-slate-900">120 million Euro</strong>.
            </p>
            <p>
              The entire transaction, compliance verification, and concession structuring were performed under the continuous monitoring, governance auditing, and advisory supervision of the <strong className="font-bold text-[#0072bc]">PPP Union</strong>. Physical works are phased across a strict <strong className="font-bold text-slate-900">38-month execution timeline</strong>, initiated upon operational clearance to guarantee ethical, uninterrupted, and world-class hospital delivery.
            </p>
          </div>

          {/* Sub-tab Switcher for FARBOD Program */}
          <div className="flex items-center gap-1.5 mb-4 p-1 rounded-xl bg-slate-100 self-start border border-slate-200">
            <button
              onClick={() => setActiveHospitalTab('cluster')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeHospitalTab === 'cluster'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              8-Hospital Specialty Cluster
            </button>
            <button
              onClick={() => setActiveHospitalTab('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeHospitalTab === 'roadmap'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              38-Month Delivery Milestones
            </button>
            <button
              onClick={() => setActiveHospitalTab('scholarship')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeHospitalTab === 'scholarship'
                  ? 'bg-white text-amber-900 shadow-2xs'
                  : 'text-amber-800 hover:text-amber-950'
              }`}
            >
              Afghan Women Scholarships
            </button>
          </div>

          {/* TAB 1: 8-HOSPITAL SPECIALTY CLUSTER */}
          {activeHospitalTab === 'cluster' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-sky-100 text-[#005285] font-bold text-xs flex items-center justify-center mb-2">1</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Central University Campus</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Flagship 500-bed tertiary hospital affiliated directly with Tehran Medical University (IAUMTS).
                  </p>
                </div>
                <span className="text-[10px] font-bold text-sky-700 mt-2">Teaching &amp; Clinical Research</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center mb-2">2</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Regional Trauma &amp; Emergency</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Specialized acute critical care, burn treatment, and round-the-clock emergency medical triage.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-rose-700 mt-2">24/7 Level-1 Trauma Care</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mb-2">3</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Oncology &amp; Nuclear Medicine</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Advanced linear accelerators, PET-CT scanners, radio-isotope therapy, and chemotherapy suites.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-purple-700 mt-2">Advanced Cancer Therapy</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center mb-2">4</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Pediatric &amp; Maternal Health</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Neonatal intensive care units (NICU), pediatric surgery, and comprehensive maternal delivery care.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-amber-800 mt-2">Maternal &amp; Child Health</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center mb-2">5</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Cardiovascular Institute</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Cardiac catheterization labs, hybrid surgical theatres, and non-invasive coronary care units.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-red-700 mt-2">Heart &amp; Vascular Surgery</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mb-2">6</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Orthopedics &amp; Rehabilitation</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Robotic physical therapy, prosthetic fitting labs, and spinal injury convalescent wards.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 mt-2">Mobility &amp; Convalescence</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center mb-2">7</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Neurological &amp; Mental Health</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Specialized neuro-rehabilitation, psychiatric clinical wards, and cognitive behavioral clinics.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-teal-800 mt-2">Neurology &amp; Psychology</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center mb-2">8</div>
                  <h6 className="font-bold text-slate-900 text-xs mb-1">Telemedicine &amp; Dispatch</h6>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Digital remote consultation hubs linking underserved regional health clinics to top specialists.
                  </p>
                </div>
                <span className="text-[10px] font-bold text-indigo-800 mt-2">Satellite Healthcare Grid</span>
              </div>
            </div>
          )}

          {/* TAB 2: 38-MONTH DELIVERY MILESTONES */}
          {activeHospitalTab === 'roadmap' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs relative">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">Months 01–06</span>
                <h6 className="font-black text-slate-900 text-xs mb-1.5">Phase 1: Pre-Feasibility &amp; ESG Audit</h6>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Geotechnical ground surveys, environmental impact assessments, and PPP Union governance onboarding.
                </p>
                <div className="mt-2 text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Verified Complete
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs relative">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">Months 07–14</span>
                <h6 className="font-black text-slate-900 text-xs mb-1.5">Phase 2: Permitting &amp; Land Allocation</h6>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Municipal land dedication deeds, architectural blue-printing, and sovereign concession formalization.
                </p>
                <div className="mt-2 text-[10px] text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded inline-block">
                  Concession Finalized
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs relative">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">Months 15–32</span>
                <h6 className="font-black text-slate-900 text-xs mb-1.5">Phase 3: Construction &amp; Medical EPC</h6>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Structural civil works, cleanroom MEP installation, and diagnostic equipment procurement under humanitarian clearances.
                </p>
                <div className="mt-2 text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded inline-block">
                  18-Month Build Cycle
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs relative">
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block mb-1">Months 33–38</span>
                <h6 className="font-black text-slate-900 text-xs mb-1.5">Phase 4: Commissioning &amp; IAUMTS Staffing</h6>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Faculty onboarding, healthcare provider certification, clinical trial systems, and initial outpatient intake.
                </p>
                <div className="mt-2 text-[10px] text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded inline-block">
                  Full Operations
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AFGHAN WOMEN MEDICAL SCHOLARSHIPS */}
          {activeHospitalTab === 'scholarship' && (
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/40 rounded-xl p-5 border border-amber-200 shadow-2xs mb-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="font-black text-slate-900 text-sm sm:text-base">
                      Humanitarian Academic Empowerment Initiative: 30 Afghan Women Medical Scholarships
                    </h5>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                      Annual Full Scholarships
                    </span>
                  </div>
                  <p>
                    Under the direct mandate of the <strong className="font-bold text-slate-900">FARBOD RAD Management Team</strong> and partner institutions, the facility designates an annual endowment funding full tuition, academic stipends, and residential boarding for <strong className="font-bold text-slate-900">30 Afghan female students</strong> in medicine, nursing, and clinical healthcare at <strong className="font-bold text-[#0072bc]">Tehran Medical University (IAUMTS)</strong>.
                  </p>
                  <p className="text-slate-600 text-xs">
                    This humanitarian initiative creates an essential pathway for women denied university education in Afghanistan to attain accredited Doctor of Medicine (M.D.) and medical specialist credentials, providing invaluable humanitarian relief directly advancing <strong className="text-slate-900">SDG 3 (Good Health)</strong>, <strong className="text-slate-900">SDG 4 (Quality Education)</strong>, <strong className="text-slate-900">SDG 5 (Gender Equality)</strong>, and <strong className="text-slate-900">SDG 10 (Reduced Inequalities)</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5 Targeted SDGs Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs mb-4">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-extrabold text-rose-700 block">SDG 3 – Good Health</span>
              <span className="text-[10px] text-slate-500">Expanding hospital beds &amp; tertiary clinical care.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-extrabold text-amber-700 block">SDG 4 – Quality Education</span>
              <span className="text-[10px] text-slate-500">Medical university teaching &amp; clinical residencies.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-extrabold text-emerald-700 block">SDG 8 – Decent Work</span>
              <span className="text-[10px] text-slate-500">Healthcare employment &amp; professional staffing.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-extrabold text-sky-700 block">SDG 9 – Innovation</span>
              <span className="text-[10px] text-slate-500">Modern hospital technology &amp; imaging infrastructure.</span>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
              <span className="font-extrabold text-indigo-700 block">SDG 17 – Partnerships</span>
              <span className="text-[10px] text-slate-500">Public-private-academic pact under PPP Union audit.</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-sky-200 text-xs text-[#004b79] italic flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              “This historic step will be acknowledged as the first successful and coordinated effort by PPP Union members in achieving measurable progress toward the 17 SDGs within the region.”
            </span>
          </div>
        </div>

        {/* 2.3 Mega PPP Infrastructure Projects in Iran (Non-Sanctioned Scope) */}
        <div>
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <h4 className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-900">
              2.3 Mega PPP Infrastructure Projects in Iran (Non-Sanctioned Civilian Utility Scope)
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Project 1 */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      1. National PPP Investment Program (2025–2030)
                    </h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-[#005285] font-extrabold text-[10px]">
                    $14B Reserved
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mb-2">
                  Public Counterpart: Plan &amp; Budget Organization (PBO) / Global Investment Portal
                </div>
                <p className="text-slate-700 leading-relaxed text-[11px] mb-3">
                  Under Iran's national five-year infrastructure master plan of <strong>USD 50 billion</strong>, a dedicated window of <strong>USD 14 billion</strong> is allocated specifically for private Build-Operate-Transfer (BOT) and Build-Own-Operate (BOO) structures.
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 mb-3">
                  <div>• Transport &amp; Corridors: <strong>$18B</strong></div>
                  <div>• Power Grid &amp; Clean Energy: <strong>$12B</strong></div>
                  <div>• Desalination &amp; Water: <strong>$8B</strong></div>
                  <div>• Digital Infrastructure: <strong>$7B</strong></div>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span>Model: BOT / Availability Payments</span>
                <span className="font-semibold text-slate-700">18–25 Year Concession Tenures</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Train className="w-4 h-4" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      2. Iran Corridor 2026 Rail &amp; Motorway Concessions
                    </h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                    7 Concessions
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mb-2">
                  Sources: MarketScreener / IRNA National Concession Registry
                </div>
                <p className="text-slate-700 leading-relaxed text-[11px] mb-2">
                  Seven major rail transit and motorway PPP agreements signed with non-blacklisted domestic and foreign private consortia:
                </p>
                <ul className="space-y-1.5 text-[11px] text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 mb-3">
                  <li>• <strong>Rasht–Astara Railway (125 km):</strong> Closing the critical INSTC link between Iran, Azerbaijan, and European rail networks.</li>
                  <li>• <strong>Zahedan–Birjand–Yunesi (910 km):</strong> Preliminary BOT memorandum with Pars Railway Development Co.</li>
                  <li>• <strong>Chabahar–Zahedan Line (Phase II):</strong> Direct oceanic port electrification.</li>
                </ul>
              </div>
              <div className="text-[10px] text-emerald-700 font-semibold pt-2 border-t border-slate-200 flex items-center justify-between">
                <span>Connecting Oceanic Ports to Rail</span>
                <span>Direct INSTC Logistics Route</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      3. Water &amp; Municipal Sanitation BOT Concessions
                    </h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-extrabold text-[10px]">
                    BOT Framework
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mb-2">
                  Institutional Framework: World Bank Historical Portfolios &amp; National Water Company
                </div>
                <p className="text-slate-700 leading-relaxed text-[11px] mb-2">
                  Leveraging institutional frameworks from the Northern Cities Water Supply &amp; Sanitation Project and the Alborz Integrated Land &amp; Water Management Project.
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-700 space-y-1 mb-3">
                  <div>• Advanced municipal wastewater reclamation facilities across dry inland basins.</div>
                  <div>• Coastal seawater reverse-osmosis desalination complexes along Persian Gulf and Caspian shores.</div>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span>Off-Take Guarantee: NWWEC</span>
                <span className="font-semibold text-blue-700">SDG 6 Water Security</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h5 className="font-black text-slate-900 text-sm">
                      4. SATBA Clean Energy Grid &amp; Solar Concessions
                    </h5>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                    20-Year FIT Tariff
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 font-semibold mb-2">
                  Authority: Renewable Energy &amp; Energy Efficiency Organization (SATBA)
                </div>
                <p className="text-slate-700 leading-relaxed text-[11px] mb-2">
                  SATBA has structured guaranteed 20-year Power Purchase Agreements (PPA) for independent private power producers (IPPs), deploying utility-scale solar PV and wind farms.
                </p>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-700 space-y-1 mb-3">
                  <div>• 4,000 MW national solar initiative for private industrial developers.</div>
                  <div>• High-voltage transmission interconnects structured under private BOT concessions.</div>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-200 flex items-center justify-between">
                <span>Model: BOO / Concession PPA</span>
                <span className="font-semibold text-amber-700">SDG 7 Clean Power</span>
              </div>
            </div>
          </div>

          {/* International Legal Exemption Confirmation */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px] text-slate-300">
                Protected under <strong className="text-white">UN Charter Article 103</strong> and <strong className="text-white">UNSC Resolution 2664 (2022)</strong> as certified civilian, humanitarian, public health, water, and educational infrastructure.
              </span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              International Law Protected
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TITLE 3: PPP Authorities and Reference Centers in Iran */}
      {/* ========================================================================= */}
      <div id="title-3-authorities" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-black">
              3
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  PPP Authorities and Reference Centers in Iran
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                  Schedule 3
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Official source: <a href="https://pppunion.org/ppp-authorities-and-reference-centers-in-iran/" target="_blank" rel="noopener noreferrer" className="text-[#0072bc] hover:underline">pppunion.org/ppp-authorities-and-reference-centers-in-iran/</a>
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/ppp-authorities-and-reference-centers-in-iran/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Source Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3.1 Decentralized Institutional Governance Architecture */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-[#0072bc]" />
            <span>Decentralized PPP Architecture: 7 Official Reference Centers</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {/* 1. MEAF */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">1. Ministry of Economic Affairs &amp; Finance</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-[#0072bc] rounded font-bold">MEAF</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> Primary governmental body overseeing investment frameworks and concession approvals.<br />
                <strong>Functions:</strong> PPP policy drafting, investment facilitation, BOT/BOO structuring, foreign investor coordination.
              </p>
            </div>

            {/* 2. PBO */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">2. Plan &amp; Budget Organization</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-[#0072bc] rounded font-bold">PBO</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> Central authority for national development planning and SDG integration.<br />
                <strong>Functions:</strong> PPP feasibility review, project prioritization, budget allocation, SDG compliance assessment.
              </p>
            </div>

            {/* 3. MRUD */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">3. Ministry of Roads &amp; Urban Development</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-[#0072bc] rounded font-bold">MRUD</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> Key facilitator for PPP transport and urban connectivity.<br />
                <strong>Functions:</strong> PPP procurement for rail, road, and airport projects; smart city development; urban concessions.
              </p>
            </div>

            {/* 4. SATBA */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">4. SATBA – Renewable Energy Authority</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold">Renewables</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> Official renewable energy development and regulatory body.<br />
                <strong>Functions:</strong> PPP solar and wind licensing, SDG‑7 implementation, private‑sector clean energy partnerships.
              </p>
            </div>

            {/* 5. Municipal Centers */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">5. Municipal PPP Centers</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded font-bold">Cities</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> Urban PPP implementation units in Tehran, Mashhad, and Isfahan.<br />
                <strong>Functions:</strong> Metro line expansion, waste‑to‑energy PPPs, smart city infrastructure, and urban concessions.
              </p>
            </div>

            {/* 6. IDRO */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">6. Industrial Development &amp; Renovation</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded font-bold">IDRO</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                <strong>Role:</strong> PPP facilitator for industrial modernization and high-tech sectors.<br />
                <strong>Functions:</strong> Joint ventures, industrial PPP projects, and SDG‑9 innovation programs.
              </p>
            </div>

            {/* 7. Academic Centers */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-1.5 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">7. Academic PPP Reference Centers</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-bold">Higher Education</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-slate-600">
                <div>• <strong>Tehran University:</strong> Center for Sustainable Development</div>
                <div>• <strong>Sharif University:</strong> Innovation &amp; SDG Technology Center</div>
                <div>• <strong>AmirKabir University:</strong> Infrastructure Governance Studies</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3.2 Legal & Regulatory Foundations */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs text-slate-700 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-[#0072bc]" />
            <span>Legal and Regulatory Foundations in Iran</span>
          </h4>
          <p className="leading-relaxed">
            Iran’s PPP framework is based on: <strong>Public Works Law</strong>, <strong>Concession Regulations</strong>, <strong>BOT / BOO / BLT contracting rules</strong>, <strong>Foreign Investment Promotion &amp; Protection Act (FIPPA)</strong>, <strong>Municipal PPP bylaws</strong>, and sector‑specific PPP guidelines.
          </p>
          <p className="leading-relaxed text-slate-600">
            Although Iran lacks a single unified PPP Act, modern PPP structures such as the <strong>PPP Funding Facility Agreement</strong> used in programs like <strong>FARBODA</strong> align directly with international standards and SDG17 requirements.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TITLE 4: Registered Member(s) with PPP Union Operating in Iran */}
      {/* ========================================================================= */}
      <div id="title-4-members" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-black">
              4
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Registered Member(s) with PPP Union Operating in Iran
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                  Schedule 4
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Official source: <a href="https://pppunion.org/17-sdgs-and-ppp-facilitators/" target="_blank" rel="noopener noreferrer" className="text-[#0072bc] hover:underline">pppunion.org/17-sdgs-and-ppp-facilitators/</a>
              </span>
            </div>
          </div>

          <a
            href="https://pppunion.org/17-sdgs-and-ppp-facilitators/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Source Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4.1 Official PPP Union Certified Members */}
        <div className="mb-8">
          <h4 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official PPP Union Members &amp; Certified Facilitators</span>
          </h4>

          <div className="space-y-4">
            {/* MEMBER A: FARBOD RAD MANAGEMENT TEAM */}
            <div className="rounded-xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/40 via-white to-white p-5 sm:p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-base sm:text-lg font-black text-slate-900">
                    A) FARBOD RAD Management Team
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black border border-emerald-300/60">
                    Green Member of PPP Union
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#005285] text-[11px] font-bold border border-sky-200">
                    Tehran Medical University (IAUMTS)
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  SDG17 Medical &amp; Hospital Development Facility
                </span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 text-justify">
                The <strong className="font-bold text-slate-900">FARBOD RAD management team</strong> is an integral part of Tehran Medical University (IAUMTS) established and constituted for 17-SDGs purpose and is a registered green member of the <strong className="font-bold text-[#0072bc]">PPP Union</strong>.
              </div>

              {/* Contact Details */}
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 text-xs mb-4">
                <span className="font-bold text-slate-800 block mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0072bc]" />
                  <span>Official Contact Coordinates:</span>
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-600">
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong>1. Dubai Office:</strong><br />
                    [4538+M2G – Al Sufouh – Al Sufouh 2 – Dubai, UAE]
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong>2. Tehran Office:</strong><br />
                    Level 7, Administrative Building, GoleYakh Ave, Tehran, Iran
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <strong>3. United Kingdom Office:</strong><br />
                    Stroud Court, Oxford Rd, Eynsham, Cumnor, Witney OX29 4DA, UK
                  </div>
                </div>
              </div>

              {/* Humanitarian Scholarship Program */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-sky-50 border border-emerald-300 text-xs text-slate-800 leading-relaxed shadow-2xs">
                <div className="flex items-center gap-2 font-black text-emerald-950 text-sm mb-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>FARBOD RAD Human Empowerment Excellence Program</span>
                </div>
                <p className="text-justify text-[11px] sm:text-xs">
                  In a context where medical education for many honorable Afghan women has been interrupted or left incomplete, the <strong className="font-bold text-slate-900">FARBOD RAD management team</strong> has undertaken an exceptional humanitarian commitment. Under the terms of the formal cooperation agreement, the organization has pledged to provide <strong>annual full, free admission and medical education for 30 successful Afghan female candidates in the field of medicine</strong>.
                </p>
                <div className="mt-2 text-[11px] text-emerald-900 italic font-medium">
                  This initiative stands as a distinguished example of the PPP Union’s core mission: eliminating social barriers, expanding equitable educational opportunities, and strengthening human dignity across communities.
                </div>
              </div>
            </div>

            {/* MEMBER B: MAJTAMEA SAHAMDARAN TOSEA ASIAVE */}
            <div className="rounded-xl border border-sky-200/90 bg-gradient-to-br from-sky-50/30 via-white to-white p-5 sm:p-6 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-sky-100">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-base sm:text-lg font-black text-slate-900">
                    B) Majtamea Sahamdaran Tosea Asiave
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#005285] text-[11px] font-black border border-blue-200">
                    VIP Member of PPP Union
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  Supported by a Top International Platform
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Briefcase className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Manager:</span>
                    <strong className="text-slate-900">Eng. Nouri Mahdi Forsat</strong>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Contact Email:</span>
                    <a href="mailto:nouri@pixelandcode.pro" className="font-bold text-[#0072bc] hover:underline">
                      nouri@pixelandcode.pro
                    </a>
                  </div>
                </div>
                <div className="text-[11px] text-slate-600 bg-sky-50/50 p-2.5 rounded-lg border border-sky-100">
                  This facilitator is backed and supported by a top international Platform, providing investment analysis, development facilitation, and international compliance assistance.
                </div>
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">Address 1 (Kish Island):</strong>
                  Saadi Square, Larak Street, Amiran Administrative &amp; Service Building, 3rd Floor, Unit 7, Kish Island, Iran
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">Address 2 (Tehran Headquarters):</strong>
                  Shariati Street, Ghasr Crossroad, Beginning of Shahid Beheshti Street (Abbas Abad), After Shahid Ghodousi Metro Station, No. 31, 3rd Floor, Bijan Automobile Showroom Building, Upper Third Doorbell, Tehran, Iran
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.2 Reputable Iranian Institutions Active in Development & PPP (Non-Blacklisted) */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#0072bc]" />
            <span>Reputable Iranian Institutions Active in Development (No Global Sanctions)</span>
          </h4>

          <div className="space-y-4">
            {/* Private Companies */}
            <div>
              <span className="text-xs font-bold text-slate-800 block mb-2">
                Reputable Private Companies (Non‑Blacklisted)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">MAPSA Consulting Engineers</strong>
                  <p className="text-[11px] text-slate-600">One of Iran’s most respected engineering consultancies. Major infrastructure, energy, and transport projects. Known for technical accuracy.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">Rah Shahr International Group</strong>
                  <p className="text-[11px] text-slate-600">Large urban development and infrastructure consultancy. City planning, transport, and construction delivery with long-term contributions.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">Tose’e Investment Group (TIG)</strong>
                  <p className="text-[11px] text-slate-600">Active in development investment, feasibility studies, and project finance. Clean record in lawful public infrastructure.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">Faraz Consulting Group</strong>
                  <p className="text-[11px] text-slate-600">Development advisory, investment consulting, and project structuring. Recognized for ethical operations and compliance.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">Aria Development Advisors</strong>
                  <p className="text-[11px] text-slate-600">Project finance, development facilitation, and investment analysis. Strong reputation for professionalism.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block font-bold mb-0.5">Kayson Company</strong>
                  <p className="text-[11px] text-slate-600">Major international engineering and construction firm. Not blacklisted; proven record delivering large-scale infrastructure.</p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 sm:col-span-2 lg:col-span-3">
                  <strong className="text-slate-900 block font-bold mb-0.5">MABNA Group (Energy &amp; Power Projects)</strong>
                  <p className="text-[11px] text-slate-600">Active in power plant development, electrical systems, and industrial projects. Strong technical reputation with no global restrictions.</p>
                </div>
              </div>
            </div>

            {/* Universities */}
            <div>
              <span className="text-xs font-bold text-slate-800 block mb-2">
                Universities with Credible PPP‑Related or Development Training
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block text-[11px]">University of Tehran – Faculty of Management</strong>
                  <span className="text-[10px] text-slate-500">Project management, development economics, and public policy.</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block text-[11px]">Sharif University of Technology</strong>
                  <span className="text-[10px] text-slate-500">Infrastructure finance, development economics, and investment.</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block text-[11px]">Amirkabir University of Technology</strong>
                  <span className="text-[10px] text-slate-500">Construction management and project delivery models.</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block text-[11px]">Allameh Tabataba’i University</strong>
                  <span className="text-[10px] text-slate-500">Public administration, governance, and sustainable development.</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 sm:col-span-2">
                  <strong className="text-slate-900 block text-[11px]">Islamic Azad University – Management &amp; Economics</strong>
                  <span className="text-[10px] text-slate-500">Extensive nationwide academic network with development-related research groups.</span>
                </div>
              </div>
            </div>

            {/* Semi-Government Bodies */}
            <div className="bg-blue-50/60 rounded-xl p-3.5 border border-blue-200 text-xs">
              <span className="font-bold text-blue-950 block mb-1">
                Semi-Government Bodies (PPP-Adjacent, Legally Operating, Non-Restricted):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-700">
                <div>• <strong>Plan and Budget Organization (PBO)</strong></div>
                <div>• <strong>Ministry of Energy (Tavanir)</strong></div>
                <div>• <strong>Ministry of Roads &amp; Urban Development</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

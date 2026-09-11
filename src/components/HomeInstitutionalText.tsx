import React from 'react';
import { 
  Shield, 
  Scale, 
  FileCheck2, 
  Globe2, 
  AlertOctagon, 
  CheckCircle2, 
  XCircle, 
  Check,
  Ban,
  HelpCircle, 
  Layers, 
  Building, 
  FileText, 
  TrendingUp, 
  BadgeAlert,
  ArrowRight,
  Sparkles,
  Edit3,
  X,
  RotateCcw,
  Save
} from 'lucide-react';
import { AdminEditableTitle, useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';
import { EditableBox, HomeLegalCharter } from '../types';
import { DEFAULT_HOME_LEGAL_CHARTER } from '../data/homeLegalText';
import { INSTITUTIONAL_CHARTER_TRANSLATIONS, SECTION_TRANSLATIONS } from '../services/institutionalTranslations';
import { RunningMediaPosts, MediaPost } from './RunningMediaPosts';

interface HomeInstitutionalTextProps {
  isEditMode?: boolean;
  onEditBox?: (box: EditableBox) => void;
  onNavigate?: (href: string) => void;
  homeCharter?: HomeLegalCharter;
  onSaveHomeCharter?: (charter: HomeLegalCharter) => void;
  onOpenWpManager?: (initialEditingId?: string | null, mode?: 'list' | 'editor' | 'paste-studio' | 'launch' | 'quick-posts') => void;
  mediaPosts?: MediaPost[];
  onUpdateMediaPost?: (updated: MediaPost) => void;
  onEditMediaPost?: (post: MediaPost) => void;
}

export const HomeInstitutionalText: React.FC<HomeInstitutionalTextProps> = ({
  isEditMode = false,
  onEditBox,
  onNavigate,
  homeCharter: propHomeCharter,
  onSaveHomeCharter,
  onOpenWpManager,
  mediaPosts,
  onUpdateMediaPost,
  onEditMediaPost,
}) => {
  const { isAdmin } = useAdmin();
  const { language, isRTL } = useLanguage();

  // Local state initialized with prop or localStorage or default
  const [charter, setCharter] = React.useState<HomeLegalCharter>(() => {
    if (propHomeCharter) return propHomeCharter;
    try {
      const saved = localStorage.getItem('ppp_union_home_legal_charter_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.paragraph1) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_HOME_LEGAL_CHARTER;
  });

  // Multilingual charter text mapping
  const activeCharter = language === 'en' ? charter : (INSTITUTIONAL_CHARTER_TRANSLATIONS[language] || charter);
  const sec = SECTION_TRANSLATIONS[language] || SECTION_TRANSLATIONS.en;

  // Keep synced if prop updates
  React.useEffect(() => {
    if (propHomeCharter) {
      setCharter(propHomeCharter);
    }
  }, [propHomeCharter]);

  const [isEditingCharter, setIsEditingCharter] = React.useState(false);
  const [draftCharter, setDraftCharter] = React.useState<HomeLegalCharter>(charter);

  const handleOpenEditCharter = () => {
    setDraftCharter({ ...charter });
    setIsEditingCharter(true);
  };

  const handleSaveCharter = () => {
    setCharter(draftCharter);
    try {
      localStorage.setItem('ppp_union_home_legal_charter_v2', JSON.stringify(draftCharter));
    } catch (e) {
      console.error(e);
    }
    if (onSaveHomeCharter) {
      onSaveHomeCharter(draftCharter);
    }
    setIsEditingCharter(false);
  };

  const handleResetToDefaultText = () => {
    setDraftCharter({ ...DEFAULT_HOME_LEGAL_CHARTER });
  };

  const handleEditSection = () => {
    if (onEditBox) {
      onEditBox({
        id: 'home-institutional-text-box',
        type: 'text',
        title: 'Public Private Partnership Union (PPP Union)',
        subtitle: 'International Administrative & Organizing Union for PPP and SDG Facilitation',
        content: 'Official institutional home text detailing mandate, ILO Convention 87 & EU Charter Art 12 legal bases, non-financial nature, and Grant vs Finance distinction.',
        badge: 'Official Institutional Mandate',
      });
    }
  };

  return (
    <section 
      id="home-institutional-text-section" 
      className="bg-gradient-to-b from-white via-[#f8fbfe] to-white py-12 md:py-20 px-4 sm:px-6 lg:px-12 border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Admin Quick Edit Button */}
        {isEditMode && (
          <div className="mb-6 flex justify-end">
            <button
              onClick={handleEditSection}
              className="px-4 py-1.5 bg-amber-400 text-slate-900 font-bold text-xs rounded-full shadow-md flex items-center gap-1.5 hover:bg-amber-300 cursor-pointer"
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Home Institutional Text</span>
            </button>
          </div>
        )}

        {/* 1. Header: Primary Name & Organizing Identity */}
        <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f3fa] border border-[#b8ddf5] text-[#0072bc] text-xs font-black tracking-wider uppercase mb-4 shadow-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>{sec.charterBadge}</span>
          </div>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-black text-slate-900 tracking-tight leading-snug mb-3 sm:whitespace-nowrap">
            {sec.charterHeader}
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-700 max-w-3xl mx-auto leading-snug mb-6 sm:whitespace-nowrap">
            {sec.charterSubhead}
          </p>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed text-center max-w-3xl mx-auto">
            {sec.charterIntro}
          </p>

          {/* Legal Authority Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Scale className="w-3 h-3 text-[#0072bc]" /> Activity Codes: <strong>{activeCharter.activityCodes}</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Globe2 className="w-3 h-3 text-[#0072bc]" /> {activeCharter.iloLegalBasis}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <FileText className="w-3 h-3 text-[#0072bc]" /> {activeCharter.euLegalBasis}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
              <Layers className="w-3 h-3 text-[#0072bc]" /> {activeCharter.unResolution}
            </span>
          </div>
        </div>

        {/* 2. Official Legal Charter Callout Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#0072bc]/20 shadow-xl shadow-blue-900/5 mb-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0072bc] via-sky-400 to-[#005a96]" />
          
          {/* Quick Edit Bar for Home Legal Charter (Directly Visible for User to Change Text Anytime) */}
          <div className="mb-6 p-2.5 sm:p-3 bg-gradient-to-r from-amber-50 to-sky-50 rounded-xl border border-amber-200 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <span className="w-5 h-5 rounded bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">§</span>
              <span>{sec.quickEditNotice}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleOpenEditCharter}
                className="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Directly modify or replace the home page text in inline editor"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{sec.modifyDirectlyBtn}</span>
              </button>
              {onOpenWpManager && (
                <button
                  onClick={() => onOpenWpManager('home-charter', 'quick-posts')}
                  className="px-3 py-1.5 bg-[#0073aa] hover:bg-[#005a87] text-white font-bold text-xs rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Open in Direct PPP Union WP-Admin Editor for All Posts"
                >
                  <span className="w-3.5 h-3.5 rounded bg-white text-[#0073aa] flex items-center justify-center text-[8px] font-black">W</span>
                  <span>{sec.wpAdminBtn}</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e6f3fa] text-[#0072bc] flex items-center justify-center shrink-0 mt-1">
              <Scale className="w-6 h-6" />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
              <p className="italic text-slate-800 font-medium">
                “{activeCharter.paragraph1}”
              </p>

              <p>
                {activeCharter.paragraph2}
              </p>

              <p>
                {activeCharter.paragraph3}
              </p>

              <p>
                {activeCharter.paragraph4}
              </p>

              <div className="p-4 rounded-xl bg-white border-2 border-[#0072bc]/30 text-slate-800 font-medium not-italic text-sm sm:text-base mt-4 shadow-sm">
                <strong className="text-slate-950 font-bold">{activeCharter.disclaimer}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mandate and Purpose of PPP Union (1.1, 1.2, 1.3) */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#0072bc] font-bold text-xs tracking-widest uppercase mb-1 block">Institutional Competencies</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Mandate and Purpose of PPP Union
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* 1.1 Promotion of the 17 SDGs */}
            <div className="bg-white rounded-xl p-6 lg:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4 border border-emerald-200/60">
                  1.1
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Promotion of the 17 SDGs
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-normal">
                  PPP Union supports governments, private-sector entities, and development partners in:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Understanding SDG‑aligned PPP models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Structuring projects according to UNECE’s <strong>People‑First PPP</strong> standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Ensuring that PPPs deliver social value, environmental value, and economic sustainability</span>
                  </li>
                </ul>
              </div>
              {onNavigate && (
                <button 
                  onClick={() => onNavigate('#sdgs')}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0072bc] hover:underline cursor-pointer"
                >
                  <span>Explore SDG Alignment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 1.2 Legal and Administrative Facilitation */}
            <div className="bg-white rounded-xl p-6 lg:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0072bc] flex items-center justify-center font-bold text-sm mb-4 border border-blue-200/60">
                  1.2
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Legal and Administrative Facilitation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-normal">
                  PPP Union provides:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <span>Legal guidance for PPP registration and documentation to our members and <strong>Facilitators</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <span>Support in overcoming regulatory barriers related to cross‑border payments, compliance, and administrative procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <span>Assistance in contract‑related legal steps under PPP frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <span>Neutral oversight between contracting parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <span>Standardized PPP frameworks based on UNECE best practices</span>
                  </li>
                </ul>
              </div>
              {onNavigate && (
                <button 
                  onClick={() => onNavigate('#laws')}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0072bc] hover:underline cursor-pointer"
                >
                  <span>Review Legal Frameworks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 1.3 Enabling Global PPP Practitioners */}
            <div className="bg-white rounded-xl p-6 lg:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mb-4 border border-indigo-200/60">
                  1.3
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Enabling Global PPP Practitioners
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-normal">
                  The Union:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Creates legal and administrative pathways for successful PPP facilitators worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Ensures that no legal obstacles hinder project implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Helps stakeholders navigate international PPP compliance requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Supports SDG‑aligned projects to access grants, development programs, and non‑commercial funding mechanisms</span>
                  </li>
                </ul>
              </div>
              {onNavigate && (
                <button 
                  onClick={() => onNavigate('#facilitators')}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0072bc] hover:underline cursor-pointer"
                >
                  <span>Facilitator Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 4. RUNNING MEDIA POSTS SHOWCASE (12 Posts with Running / Slow Auto-Advance Transition) */}
        <RunningMediaPosts 
          isEditMode={isEditMode} 
          onNavigate={onNavigate}
          posts={mediaPosts}
          onUpdatePost={onUpdateMediaPost}
          onEditPost={onEditMediaPost}
          onOpenWpManager={onOpenWpManager}
        />

        {/* 5. Clear Distinction Between “Grant” and “Finance” in PPP Terminology */}
        <div className="my-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#0072bc] font-bold text-xs tracking-widest uppercase mb-1 block">Critical Infrastructure Terminology</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Clear Distinction Between “Grant” and “Finance” in PPP Terminology
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              This distinction is critical in PPP and SDG‑related projects. Confusing these two instruments leads to contractual misalignment and institutional dispute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 3.1 What is a Grant? */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-lg shadow-emerald-900/5 relative">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>3.1 Development Instrument</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Non-Repayable</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                What is a Grant?
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                A Grant is:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6 bg-emerald-50/40 p-3.5 rounded-xl border border-emerald-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Non‑repayable financial support</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Provided by governments, development agencies, or international <strong>Facilitator organizations</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Intended to support <strong>SDG‑aligned public‑benefit projects</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Not commercial, not profit‑driven, and not interest‑bearing</span>
                </li>
              </ul>

              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                Key Characteristics of Grants:
              </h5>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span><strong>No repayment obligation</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span><strong>No interest</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span>No commercial risk transfer to the beneficiary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span>In cases of force majeure, beneficiaries may request waivers, extensions, or damage relief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span><strong>Grants are used to enable, not to profit</strong></span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-emerald-100 text-xs text-emerald-800 font-medium">
                This aligns with UNECE’s definition of <strong>People‑First PPPs</strong>, where grants are used to support social impact.
              </div>
            </div>

            {/* 3.2 What is Finance? */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-slate-300 shadow-lg shadow-slate-900/5 relative">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>3.2 Commercial Instrument</span>
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Repayable + Interest</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                What is Finance?
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Finance refers to:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  <span><strong>Loans and credit facilities</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  <span>Commercial investment and private capital</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  <span>Capital with binding <strong>repayment obligations</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0 mt-2" />
                  <span>Instruments that <strong>do not absorb risk</strong> on behalf of the borrower</span>
                </li>
              </ul>

              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                Key Characteristics of Finance:
              </h5>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                  <span><strong>Repayable</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                  <span><strong>Interest‑bearing</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                  <span>Risk remains with the borrower</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                  <span>No waivers in force majeure unless contractually negotiated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-2" />
                  <span>Provided by banks, funds, or private investors</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-700 font-bold">
                Finance is commercial, whereas grants are developmental.
              </div>
            </div>
          </div>
        </div>

        {/* 6. PPP Union’s Legal Position */}
        <div className="bg-[#e6f3fa] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#b8ddf5] shadow-sm mb-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0072bc] text-xs font-black border border-[#0072bc]/20 uppercase tracking-wider mb-3 shadow-xs">
              <Scale className="w-3.5 h-3.5" />
              <span>Constitutional Boundaries</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              PPP Union’s Legal Position
            </h3>

            <p className="text-sm sm:text-base text-slate-700 mb-8 font-medium">
              PPP Union, by its nature and mandate:
            </p>

            {/* 6 Equal-Size Institutional Boxes Grid */}
            <div className="space-y-4 sm:space-y-5">
              {/* Row 1: Approved & Authorized Mandate (3 Equal-Size Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-left">
                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-emerald-100 group-hover:scale-105 transition-transform">
                    <Check className="w-6 h-6 stroke-[3.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Providing SDG-related technical and legal knowledge.
                  </span>
                </div>

                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-emerald-100 group-hover:scale-105 transition-transform">
                    <Check className="w-6 h-6 stroke-[3.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Providing legal and technical support and contract oversight to members.
                  </span>
                </div>

                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-emerald-100 group-hover:scale-105 transition-transform">
                    <Check className="w-6 h-6 stroke-[3.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Providing compliance-based processing of members’ contracts.
                  </span>
                </div>
              </div>

              {/* Row 2: Prohibited Outside Constitutional Mandate (3 Equal-Size Boxes) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-left">
                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-slate-100 group-hover:scale-105 transition-transform">
                    <Ban className="w-6 h-6 stroke-[2.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Not signing PPP or SDG project contracts.
                  </span>
                </div>

                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-slate-100 group-hover:scale-105 transition-transform">
                    <Ban className="w-6 h-6 stroke-[2.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Not financing, sponsoring, or investing in any project.
                  </span>
                </div>

                <div className="h-full min-h-[112px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm ring-4 ring-slate-100 group-hover:scale-105 transition-transform">
                    <Ban className="w-6 h-6 stroke-[2.8]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    Not acting as an executing party or project participant.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Our non-profit, multi-jurisdictional charter guarantees strict neutrality, enabling our accredited facilitators to serve sovereign hosts and private sponsors with uncompromised integrity.
            </div>
          </div>
        </div>

        {/* 7. PPP Union’s Non‑Financial Nature (Blue Banner with White Cards & Clean Notice) */}
        <div className="bg-gradient-to-br from-[#005285] via-[#0066a4] to-[#007cb8] text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-sky-400/30">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-sky-300/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-56 h-56 bg-blue-900/30 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-white/20 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#005285] text-xs font-black uppercase tracking-wider mb-3 shadow-sm">
                <BadgeAlert className="w-3.5 h-3.5 text-[#0072bc]" />
                <span>Statutory Clarification & Compliance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                PPP Union’s Non‑Financial Nature
              </h3>
              <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
                PPP Union has received numerous requests from clients seeking: <strong className="text-white font-bold underline decoration-white/60 underline-offset-2">Loans, Direct funding, Financial assistance,</strong> or <strong className="text-white font-bold underline decoration-white/60 underline-offset-2">Project capital</strong>.
              </p>
            </div>

            {/* Mandatory Legal Notice - Made White Color as requested */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white text-slate-900 border border-white shadow-xl max-w-md shrink-0">
              <div className="flex items-center gap-2 text-[#005285] font-black text-xs uppercase tracking-wider mb-2">
                <AlertOctagon className="w-4 h-4 text-[#0072bc]" />
                <span>MANDATORY LEGAL NOTICE</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                It is essential to clarify that <strong className="text-slate-950 font-black underline decoration-[#0072bc]/40 underline-offset-2">PPP Union does not and cannot provide any type of direct project financing.</strong>
              </p>
            </div>
          </div>

          <div className="mt-8 relative z-10">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>PPP Union’s Core Institutional Role Is Strictly:</span>
            </h4>

            {/* 3 White Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white text-slate-900 border border-white shadow-md flex items-start gap-3.5 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-[#e6f3fa] text-[#0072bc] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0072bc]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">Facilitation, not financing</div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">Providing institutional guidance, standards vetting, and multi-party alignment.</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white text-slate-900 border border-white shadow-md flex items-start gap-3.5 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-[#e6f3fa] text-[#0072bc] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0072bc]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">Legal support to our members</div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">Empowering international top PPP Facilitators, not capital provision.</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white text-slate-900 border border-white shadow-md flex items-start gap-3.5 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 rounded-lg bg-[#e6f3fa] text-[#0072bc] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0072bc]" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">Administrative coordination</div>
                  <div className="text-xs text-slate-600 mt-1 leading-relaxed">Standardized compliance workflows, not direct investment.</div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-800 mt-6 font-medium bg-white p-4 rounded-xl border border-white shadow-md flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#0072bc] shrink-0" />
              <span>PPP Union only creates the enabling environment for PPP practitioners to work within legal, regulated, and internationally recognized frameworks.</span>
            </p>
          </div>
        </div>

        {/* Modal Dialog for Direct Editing Home Legal Charter Text */}
        {isEditingCharter && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div 
              className="bg-white rounded-2xl shadow-2xl border border-slate-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 text-left"
              role="dialog"
              aria-modal="true"
              aria-labelledby="charter-modal-title"
            >
              {/* Modal Header */}
              <div className="bg-[#1d2327] text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0073aa] text-white flex items-center justify-center font-black text-sm">
                    W
                  </div>
                  <div>
                    <h3 id="charter-modal-title" className="text-base font-bold text-white flex items-center gap-2">
                      <span>Direct WP-Admin Editor: Home Page Legal Charter</span>
                    </h3>
                    <p className="text-xs text-slate-300">
                      Instantly modify or replace the official institutional text, activity codes, and mandate.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditingCharter(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close editor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-800">
                {/* Activity Codes & Authority Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      International Activity Codes
                    </label>
                    <input
                      type="text"
                      value={draftCharter.activityCodes}
                      onChange={(e) => setDraftCharter({ ...draftCharter, activityCodes: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                      placeholder="Ethics (SIC N 10:20), NACE 94.99, and 7020003"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      ILO Convention Basis
                    </label>
                    <input
                      type="text"
                      value={draftCharter.iloLegalBasis}
                      onChange={(e) => setDraftCharter({ ...draftCharter, iloLegalBasis: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      EU Charter Legal Basis
                    </label>
                    <input
                      type="text"
                      value={draftCharter.euLegalBasis}
                      onChange={(e) => setDraftCharter({ ...draftCharter, euLegalBasis: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      UN Resolution Alignment
                    </label>
                    <input
                      type="text"
                      value={draftCharter.unResolution}
                      onChange={(e) => setDraftCharter({ ...draftCharter, unResolution: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                    />
                  </div>
                </div>

                {/* Paragraph 1 */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      Paragraph 1: Legal Basis & Activity Codes (ILO Convention No. 87 & EU Charter Art. 12)
                    </label>
                    <span className="text-[11px] text-slate-500">{draftCharter.paragraph1.length} chars</span>
                  </div>
                  <textarea
                    rows={3}
                    value={draftCharter.paragraph1}
                    onChange={(e) => setDraftCharter({ ...draftCharter, paragraph1: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] leading-relaxed"
                  />
                </div>

                {/* Paragraph 2 */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      Paragraph 2: Formal Authorization & Empowerment of Professional Unions
                    </label>
                    <span className="text-[11px] text-slate-500">{draftCharter.paragraph2.length} chars</span>
                  </div>
                  <textarea
                    rows={3}
                    value={draftCharter.paragraph2}
                    onChange={(e) => setDraftCharter({ ...draftCharter, paragraph2: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] leading-relaxed"
                  />
                </div>

                {/* Paragraph 3 */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      Paragraph 3: UN 2030 Agenda & A/RES/70/1 (2015) Alignment
                    </label>
                    <span className="text-[11px] text-slate-500">{draftCharter.paragraph3.length} chars</span>
                  </div>
                  <textarea
                    rows={3}
                    value={draftCharter.paragraph3}
                    onChange={(e) => setDraftCharter({ ...draftCharter, paragraph3: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] leading-relaxed"
                  />
                </div>

                {/* Paragraph 4 */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      Paragraph 4: Mandate to Unite Legal Firms Worldwide
                    </label>
                    <span className="text-[11px] text-slate-500">{draftCharter.paragraph4.length} chars</span>
                  </div>
                  <textarea
                    rows={3}
                    value={draftCharter.paragraph4}
                    onChange={(e) => setDraftCharter({ ...draftCharter, paragraph4: e.target.value })}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] leading-relaxed"
                  />
                </div>

                {/* Disclaimer */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      Institutional Disclaimer (Non-Contracting Party Notice)
                    </label>
                    <span className="text-[11px] text-slate-500">{draftCharter.disclaimer.length} chars</span>
                  </div>
                  <textarea
                    rows={2}
                    value={draftCharter.disclaimer}
                    onChange={(e) => setDraftCharter({ ...draftCharter, disclaimer: e.target.value })}
                    className="w-full p-3 bg-amber-50/60 border border-amber-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed font-medium"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2">
                <button
                  onClick={handleResetToDefaultText}
                  className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Reset to User Approved Mandate Text"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to User Approved Text</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditingCharter(false)}
                    className="px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveCharter}
                    className="px-5 py-2 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold shadow-md flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save & Apply Live</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

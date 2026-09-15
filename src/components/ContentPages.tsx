import React, { useState, useMemo } from 'react';
import { 
  Scale, 
  FileText, 
  Globe, 
  ShieldCheck, 
  Building2, 
  HelpCircle, 
  Award, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Edit3, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  AlertTriangle,
  FileSpreadsheet,
  Users,
  User,
  Compass,
  Check,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Sparkles,
  ExternalLink,
  Shield,
  Lock,
  Layers,
  Calendar,
  QrCode,
  AlertOctagon,
  ZoomIn,
  X,
  Plus,
  Image as ImageIcon
} from 'lucide-react';
import { EditableBox, MenuItem, SDGItem } from '../types';
import { SUBMENU_PAGES_CONTENT, SubmenuChapter } from '../data/pagesContent';
import { DEFAULT_NAVIGATION } from '../data/defaultData';
import { SecureContactForm } from './SecureContactForm';
import { FormattedContent } from './FormattedContent';
import { SDGsSection } from './SDGsSection';
import { PPPProcessAndModelsEngine } from './PPPProcessAndModelsEngine';
import { PPPFacilitatorsPage } from './PPPFacilitatorsPage';
import { NationalPPPLawsPage } from './NationalPPPLawsPage';
import { MemberPortal } from './MemberPortal';
import { PPPProcessPage } from './PPPProcessPage';
import { PPPBenefitsEvaluationSchedule } from './PPPBenefitsEvaluationSchedule';
import { PPPDefinitionsScheduleTable } from './PPPDefinitionsScheduleTable';
import { PPPCourseStructureSchedule } from './PPPCourseStructureSchedule';
import { DirectPageTextEditorModal } from './DirectPageTextEditorModal';
import { DownloadAppPage } from './DownloadAppPage';
import { AdminEditableTitle, AdminEditableImage, useAdmin } from '../context/AdminContext';

interface ContentPagesProps {
  activePage: string;
  isEditMode: boolean;
  onEditBox: (box: EditableBox) => void;
  onNavigate: (href: string) => void;
  pagesContent?: Record<string, SubmenuChapter>;
  onOpenWpEditor?: (chapterId: string) => void;
  sdgs?: SDGItem[];
  onEditSDG?: (sdg: SDGItem) => void;
  onUpdateChapter?: (chapterId: string, updated: Partial<SubmenuChapter>) => void;
  onOpenMessenger?: () => void;
}

export const ContentPages: React.FC<ContentPagesProps> = ({
  activePage,
  isEditMode,
  onEditBox,
  onNavigate,
  pagesContent = SUBMENU_PAGES_CONTENT,
  onOpenWpEditor,
  sdgs,
  onEditSDG,
  onUpdateChapter,
  onOpenMessenger,
}) => {
  const { isAdmin, openFastImageReplacer } = useAdmin();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [statuteFilter, setStatuteFilter] = useState('');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isDirectTextModalOpen, setIsDirectTextModalOpen] = useState(false);

  const updateChapterField = (field: keyof SubmenuChapter, value: any) => {
    if (chapterData && onUpdateChapter) {
      onUpdateChapter(chapterData.id, { [field]: value });
    }
  };

  const handleEditParagraph = (index: number, newText: string) => {
    if (!chapterData || !onUpdateChapter) return;
    const current = chapterData.contentParagraphs || [];
    const next = [...current];
    next[index] = newText;
    onUpdateChapter(chapterData.id, { contentParagraphs: next });
  };

  const handleDeleteParagraph = (index: number) => {
    if (!chapterData || !onUpdateChapter) return;
    const current = chapterData.contentParagraphs || [];
    const next = [...current];
    next.splice(index, 1);
    onUpdateChapter(chapterData.id, { contentParagraphs: next });
  };

  const handleAddParagraph = () => {
    if (!chapterData || !onUpdateChapter) return;
    const current = chapterData.contentParagraphs || [];
    const next = [...current, 'New paragraph content. Click or double-click to edit.'];
    onUpdateChapter(chapterData.id, { contentParagraphs: next });
  };

  const handleSaveAllParagraphs = (newParagraphs: string[]) => {
    if (!chapterData || !onUpdateChapter) return;
    onUpdateChapter(chapterData.id, { contentParagraphs: newParagraphs });
  };

  // Clean the activePage key
  const cleanId = activePage.replace(/^#/, '');

  // Determine which chapter to display
  const chapterData: SubmenuChapter | null = useMemo(() => {
    // 1. Direct match in pagesContent
    if (pagesContent[cleanId]) {
      return pagesContent[cleanId];
    }

    // 2. Parent menu match (e.g. 'laws' -> 'laws-overview', 'about-ppp' -> 'what-is-ppp', etc.)
    const parentMap: Record<string, string> = {
      'laws': 'laws-overview',
      'ppp-laws': 'laws-overview',
      'about-ppp': 'what-is-ppp',
      'programs': 'program-overview',
      'ppp-programs': 'program-overview',
      'about-union': 'union-policy',
      'guidelines': 'guidelines',
      'ppp-guidelines': 'guidelines',
      'sdgs': 'sdgs-courses',
      'ppp-sdgs': 'sdgs-courses',
      'ppp-model': 'sdgs-courses',
      'sdgs-courses': 'sdgs-courses',
      'facilitators': 'facilitators-overview',
      'ppp-facilitators': 'facilitators-overview',
    };

    if (parentMap[cleanId] && pagesContent[parentMap[cleanId]]) {
      return pagesContent[parentMap[cleanId]];
    }

    // 3. Fallback to laws-overview if starts with laws
    if (cleanId.startsWith('laws') && pagesContent['laws-overview']) return pagesContent['laws-overview'];
    if (cleanId.startsWith('program') && pagesContent['program-overview']) return pagesContent['program-overview'];
    if (cleanId.startsWith('facilitator') && pagesContent['facilitators-overview']) return pagesContent['facilitators-overview'];
    if ((cleanId.startsWith('union') || cleanId.startsWith('about-union')) && pagesContent['union-policy']) return pagesContent['union-policy'];

    return null;
  }, [cleanId, pagesContent]);

  // Find parent MenuItem from DEFAULT_NAVIGATION to list all siblings for horizontal pill nav
  const parentMenu = useMemo(() => {
    if (!chapterData) return null;
    return DEFAULT_NAVIGATION.find(m => m.id === chapterData.menuId || m.title.toUpperCase() === chapterData.menuTitle.toUpperCase());
  }, [chapterData]);

  // Find sibling submenus for next/previous navigation
  const { prevChapter, nextChapter } = useMemo(() => {
    if (!parentMenu || !parentMenu.submenus || !chapterData) {
      return { prevChapter: null, nextChapter: null };
    }
    const idx = parentMenu.submenus.findIndex(s => s.id === chapterData.id || s.href === `#${chapterData.id}`);
    const prev = idx > 0 ? parentMenu.submenus[idx - 1] : null;
    const next = idx >= 0 && idx < parentMenu.submenus.length - 1 ? parentMenu.submenus[idx + 1] : null;
    return { prevChapter: prev, nextChapter: next };
  }, [parentMenu, chapterData]);

  // Sanitize paragraphs to completely remove any plain text form of Abbreviations & Acronyms,
  // developer instruction notices, offline synchronization notices, or unintended summary blocks
  const sanitizedParagraphs = useMemo(() => {
    if (!chapterData || !chapterData.contentParagraphs) return [];
    return chapterData.contentParagraphs.filter((p: string) => {
      if (
        p.includes('• ADP Platform') ||
        p.includes('ADP Platform:') ||
        p.includes('• **ADP Platform') ||
        p.includes('ADSCR: Annual Debt') ||
        p.includes('Advance Loss of Profit') ||
        (p.includes('ADP Platform') && p.includes('Asia Development Partners'))
      ) {
        return false;
      }
      if (
        p.includes('Smart Messenger Offline Synchronization Notice') ||
        p.includes('Offline Synchronization Notice') ||
        p.includes('permanently stored within the local cache') ||
        p.includes('EXECUTIVE SUBJECT SUMMARY')
      ) {
        return false;
      }
      if (
        chapterData.id === 'faq' &&
        (p.startsWith('### 6. International Directory of PPP Abbreviations') ||
          p.includes('Directory of PPP Abbreviations & Acronyms'))
      ) {
        return false;
      }
      return true;
    });
  }, [chapterData]);

  // Check if PPP Facilitator direct page or Afghanistan (No sub-menu, direct page as requested)
  if (
    cleanId === 'facilitators' || 
    cleanId === 'ppp-facilitators' || 
    cleanId === 'ppp_facilitator' ||
    cleanId.startsWith('facilitator') ||
    cleanId === 'afghanistan' ||
    cleanId === 'afghanistan-ppp-services-providers' ||
    cleanId === 'afghanistan-ppp-facilitators'
  ) {
    const targetPage = (cleanId === 'afghanistan' || cleanId === 'afghanistan-ppp-services-providers' || cleanId === 'afghanistan-ppp-facilitators')
      ? '#facilitator-afghanistan'
      : activePage;
    return <PPPFacilitatorsPage activePage={targetPage} onNavigate={onNavigate} />;
  }

  // Check if National PPP Laws Directory page (from bottom blue button or direct navigation)
  if (
    cleanId === 'national-laws' ||
    cleanId === 'national-ppp-laws' ||
    cleanId === 'national-laws-directory' ||
    cleanId.startsWith('national-law')
  ) {
    return <NationalPPPLawsPage onNavigate={onNavigate} />;
  }

  // Check if PPP Process page (Main Menu PPP PROGRAMS -> Sub-Menu PPP PROCESS)
  if (
    cleanId === 'ppp-process' ||
    cleanId === 'process' ||
    cleanId === 'ppp_process' ||
    cleanId === 'ppp-processes'
  ) {
    return (
      <PPPProcessPage
        onNavigate={onNavigate}
        onOpenMessenger={onOpenMessenger}
        isEditMode={isEditMode}
        onEditBox={onEditBox}
      />
    );
  }

  // Check if Member Portal / Registration / Accreditation / Login page
  if (
    cleanId === 'members-login' ||
    cleanId === 'member-login' ||
    cleanId === 'members-login-2' ||
    cleanId === 'login' ||
    cleanId === 'member-portal' ||
    cleanId === 'membership-portal' ||
    cleanId === 'delegate-portal' ||
    cleanId === 'my-account' ||
    cleanId === 'membership-accreditation' ||
    cleanId === 'member-registration' ||
    cleanId === 'accreditation' ||
    cleanId === 'members' ||
    cleanId === 'members-admin'
  ) {
    const initialTab = (
      cleanId === 'members-login' || 
      cleanId === 'member-login' || 
      cleanId === 'members-login-2' || 
      cleanId === 'login' || 
      cleanId === 'members' ||
      cleanId === 'accreditation'
    )
      ? 'login'
      : cleanId === 'member-registration' 
      ? 'register' 
      : cleanId === 'members-admin' 
      ? 'admin' 
      : cleanId === 'member-portal' || cleanId === 'membership-portal' || cleanId === 'delegate-portal' || cleanId === 'my-account'
      ? 'portal'
      : 'login';
    return <MemberPortal onNavigate={onNavigate} initialTab={initialTab} />;
  }

  // Check if Download PPP Union App page (Android, Apple, Windows, Mac selection & downloads)
  if (
    cleanId === 'download-app' ||
    cleanId === 'app' ||
    cleanId === 'download' ||
    cleanId === 'download-ppp-union-app' ||
    cleanId === 'install-app' ||
    cleanId === 'mobile-app' ||
    cleanId === 'apps'
  ) {
    return <DownloadAppPage onNavigate={onNavigate} />;
  }

  // If Contact Us page
  if (cleanId === 'contact' || cleanId === 'contact-us') {
    return (
      <div id="page-contact-us" className="py-6 sm:py-10 px-3 sm:px-6 lg:px-12 bg-white max-w-7xl mx-auto">
        {/* Breadcrumbs for mobile & tablet */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 sm:mb-6">
          <button onClick={() => onNavigate('#home')} className="hover:text-[#0072bc] cursor-pointer">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Contact Us</span>
        </nav>

        {/* 1. Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-6 sm:mb-8 relative">
          {isAdmin && isEditMode && (
            <button
              onClick={() => onEditBox({
                id: 'contact-header-box',
                type: 'text',
                title: 'Contact PPP Union Secretariat',
                content: 'Submit official partnership inquiries, member accreditation documents, or project proposals to the PPP Union secretariat.',
                badge: 'Geneva Secretariat'
              })}
              className="absolute top-0 right-0 px-3 py-1 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-md flex items-center gap-1 cursor-pointer shadow-xs"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Contact Header</span>
            </button>
          )}

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#e6f3fa] text-[#0072bc] text-[11px] font-bold uppercase mb-2.5 tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>SECRETARIAT LIAISON & COMPLIANCE</span>
          </div>

          {/* Continuous Institutional Notice - Placed continually in one part on top of Contact Us schedule */}
          <div className="bg-white rounded-2xl border-2 border-[#0072bc]/25 shadow-md p-6 sm:p-8 lg:p-10 mb-8 space-y-6 text-slate-800">
            <div className="border-b border-slate-200 pb-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#0072bc] mt-2">
                Please read this before contacting us.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 italic mt-1">
                Before contacting us, please read the following carefully.
              </p>
            </div>

            {/* 1. Inquire about any PPP Union member */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
                1. If your intention is to inquire about any PPP Union member:
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                Please be advised that we cannot provide any information beyond what is already published on our official website. Any request for reconfirmation of publicly released data is considered non‑procedural, non‑compliant, and legally inappropriate. Every member listed on our website has already passed months of verification and due‑diligence prior to publication. Therefore, publication itself constitutes our official confirmation. No additional verification, clarification, or reconfirmation will be provided. For such inquiries, please do not contact us.
              </p>
            </div>

            {/* 2. Request financial documents, work history, or background records */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <h2 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
                2. If you intend to request financial documents, work history, or background records of any VIP Member:
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                We strongly advise you not to waste your time. Legally, we are not permitted to disclose such sensitive information.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                For companies participating in tenders, work history is a critical requirement. For financing institutions, verified track records are essential. You may compare many similar examples. However, disclosing the work history of a grant facilitator especially one who replaces financial guarantees with grant‑based instruments can create serious complications. Below is a simplified illustration:
              </p>
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto space-y-3">
                <p>
                  If a client has no cash in their account and no credit with their bank, but the facilitator’s entire work history is publicly available and confirmed by us or listed on major international banking platforms, the facilitator becomes classified as a “trusted and verified financial reference.” In such cases, a bank may issue guarantees solely based on the facilitator’s reputation or even on a simple letter from them. This is strictly prohibited in grant‑based financing systems and is considered a form of money‑laundering risk, because the facilitator’s credibility becomes an indirect financial instrument.
                </p>
                <p>
                  There are more than forty similar scenarios. If PPP Union, the United Nations, or any major global bank mistakenly discloses facilitator records before a client’s pre‑advice or readiness confirmation, it may lead to unauthorized guarantees being issued based on the facilitator’s reputation. Such actions are categorically forbidden. for example please see following
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                  In the context of prohibited information and the misuse of a facilitator’s successful performance record, it is important to understand that clients may attempt to use such records as a basis for various revenue‑based or finance‑stream systems (RBF). These systems include, for example:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-xl bg-[#f8fafc] border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Revenue‑Based Financing (RBF):</strong> Funding linked directly to a company’s future revenue streams.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Factoring Facilities:</strong> Advance payment against assigned receivables.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Invoice Discounting:</strong> Short‑term liquidity based on discounted invoices.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Supply Chain Finance:</strong> Financing tied to supplier–buyer transaction flows.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Trade Finance Lines:</strong> Credit facilities for import–export and cross‑border trade.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Overdraft and Cash‑Flow Lines:</strong> Flexible limits based on expected cash inflows.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Term Loan Structures:</strong> Medium‑ to long‑term loans justified by historical performance.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Project Finance Streams:</strong> Financing based on projected project revenues and performance guarantees.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Guarantee‑Backed Facilities (SBLC / Bank Guarantees):</strong> Credit granted on the strength of third‑party guarantees.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Escrow‑Linked Disbursement Systems:</strong> Controlled release of funds based on milestone performance.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Securitization Conduits:</strong> Packaging receivables or revenue streams into tradable instruments.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Syndicated Credit Lines:</strong> Multi‑bank facilities justified by consolidated performance records.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Mezzanine Finance Structures:</strong> Hybrid debt–equity instruments relying on strong track records.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-2 shrink-0" />
                    <div><strong className="text-slate-900">Performance‑Linked Royalty or Licensing Streams:</strong> Payments and financing tied to proven operational success.</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                  Because a facilitator’s successful track record can be misused as an informal “substitute” for formal bank guarantees or compliance instruments within these systems, sharing such records with clients is extremely sensitive, high‑risk, and institutionally inappropriate.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                  For this reason, PPP Union does not disclose or distribute any detailed successful performance records of facilitators to clients. If a client wishes to obtain such information, it must be requested directly from the member or facilitator concerned, and not from PPP Union.
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-950">
                  Therefore, please do not contact us for such purposes. If you do, your message will be automatically removed by the AI system.
                </p>
              </div>
            </div>

            {/* 3. Contacting Us for Financial Support */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
                3. Contacting Us for Financial Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                All clients are respectfully advised that PPP Union is not a financial institution. We do not provide funding, loans, or any form of monetary support. Our role is strictly non‑political, non‑military, and non‑discriminatory, focused on enabling institutions to become operational and compliant within international development frameworks.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                We provide legal, technical, structural, and administrative guidance to help institutions understand how, instead of seeking traditional financing, they may if their project aligns with the legal methodologies and structural requirements access international grant‑based opportunities under the 17 Sustainable Development Goals (SDGs).
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                These grant pathways are available to all nations and all communities, provided that the project meets the required compliance and structural standards.
              </p>
            </div>

            {/* 4. Contacting Us for Complaints */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
                4. Contacting Us for Complaints
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                All website visitors, clients, and partner institutions may submit formal complaints regarding any PPP Union member. A valid complaint must clearly state <strong className="text-slate-950">“Complaint regarding Member X”</strong> and include documented evidence of:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pl-2">
                <li><strong className="text-slate-900">Financial misconduct</strong></li>
                <li><strong className="text-slate-900">Illegal activities</strong></li>
                <li><strong className="text-slate-900">Breach of obligations</strong></li>
              </ul>
              <p className="text-xs sm:text-sm font-semibold text-slate-900">
                Substantiated complaints will receive immediate action.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                False accusations, defamation, character assassination, or commercial sabotage are considered legal offenses and may result in legal proceedings.
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-950">
                Therefore, if you do not possess documented evidence, please do not contact us for the purpose of damaging someone’s reputation.
              </p>
            </div>

            {/* 5. Contacting Us for Membership */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h2 className="text-sm sm:text-base font-black text-slate-950 leading-snug">
                5. Contacting Us for Membership
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                When contacting us regarding membership, you must include the subject code: <strong className="text-[#0072bc] bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-mono">17-SDG/MEMBER/UNION</strong> This ensures that you receive the correct guidance.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify hyphens-auto">
                However, it is strongly recommended that you first visit the Facilitator Section and identify a VIP Member within your region or country. You may copy this message and request guidance directly from them. VIP Members are obligated to provide you with advisory support per their policy and help you understand the correct membership pathway.
              </p>
            </div>

            {/* Official Communication Channel & Anti-Spam Security Policy */}
            <div className="pt-4 border-t-2 border-slate-200 bg-slate-50/80 p-5 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-slate-900">
                <ShieldCheck className="w-5 h-5 text-[#0072bc]" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Institutional Security & Anti-Scam Protection Policy
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                To safeguard the Secretariat administration against automated scrapers, phishing operations, and unsolicited spam campaigns, direct email addresses are strictly protected from public website scraping.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                All institutional inquiries, membership submissions, and documented complaints must be submitted through the verified <strong className="text-slate-900">Secure Secretariat Contact & Routing Portal</strong> below. Each transmission is cryptographically screened against robots and connected directly to the designated department (<span className="font-mono font-semibold text-[#0072bc]">inquiry@pppunion.org</span>, <span className="font-mono font-semibold text-emerald-700">members@pppunion.org</span>, or <span className="font-mono font-semibold text-red-700">secretariat@pppunion.org</span>).
              </p>
              <div className="pt-1 flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Departmental Direct Routing: Active & Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Form + Clean UN Directory Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Form Column (The exact form from image.png) */}
          <div className="lg:col-span-8">
            <SecureContactForm />
          </div>

          {/* Secretariat Contact Details (Standard UN format) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0072bc]" />
                <span>Secretariat Headquarters</span>
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0072bc] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Address</strong>
                    <span className="text-slate-600">
                      Palais des Nations / International Center<br />
                      1211 Geneva, Switzerland
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#0072bc] shrink-0 mt-1" />
                  <div className="space-y-2 w-full">
                    <strong className="block text-slate-900 font-semibold">Official Departmental Emails</strong>
                    
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-xs space-y-1.5">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">1. General Inquiries</span>
                        <a href="mailto:inquiry@pppunion.org" className="font-mono font-bold text-[#0072bc] hover:underline">
                          inquiry@pppunion.org
                        </a>
                      </div>
                      <div className="pt-1 border-t border-slate-100">
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">2. Membership Affairs</span>
                        <a href="mailto:members@pppunion.org" className="font-mono font-bold text-emerald-700 hover:underline">
                          members@pppunion.org
                        </a>
                      </div>
                      <div className="pt-1 border-t border-slate-100">
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">3. Complaints & Secretariat</span>
                        <a href="mailto:secretariat@pppunion.org" className="font-mono font-bold text-red-700 hover:underline">
                          secretariat@pppunion.org
                        </a>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <Lock className="w-3 h-3" /> Anti-Scam Protection Active
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#0072bc] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Official Web Portal</strong>
                    <span className="text-slate-600">www.pppunion.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0072bc] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Secretariat Hours</strong>
                    <span className="text-slate-600">Monday – Friday: 08:30 – 17:30 CET</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200/80 text-xs text-slate-700">
              <div className="flex items-center gap-2 font-bold text-[#0072bc] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>UN SDG 17 Compliance</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                The Public-Private Partnership Union facilitates multilateral infrastructure partnerships aligned with the United Nations Sustainable Development Goals and UNECE People-first PPP standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Submenu or Chapter content
  if (!chapterData) {
    return (
      <div className="py-16 px-4 text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-slate-800">Page Section Not Found</h2>
        <p className="text-slate-500 text-sm mt-2">The selected section is currently being updated. Return to the home portal.</p>
        <button
          onClick={() => onNavigate('#home')}
          className="mt-4 px-4 py-2 bg-[#0072bc] text-white text-xs font-bold rounded-lg cursor-pointer"
        >
          Return to Portal Home
        </button>
      </div>
    );
  }

  return (
    <div id={`page-chapter-${chapterData.id}`} className="py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-12 bg-white max-w-7xl mx-auto">
      {/* 1. Responsive Breadcrumbs for Mobile & Tablet */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap">
        <button onClick={() => onNavigate('#home')} className="hover:text-[#0072bc] cursor-pointer">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button onClick={() => onNavigate(parentMenu?.href || '#')} className="hover:text-[#0072bc] cursor-pointer">
          {chapterData.menuTitle}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
          {chapterData.title}
        </span>
      </nav>

      {/* 2. Auto-Adjustable Horizontal Sub-Menu Pill Bar (Crucial for Mobile & Tablets) */}
      {parentMenu && parentMenu.submenus && parentMenu.submenus.length > 0 && (
        <div className="mb-6 sm:mb-8 pb-3 border-b border-slate-100">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
              {chapterData.menuTitle} Chapters
            </span>
            <span className="text-[10px] text-slate-400 sm:hidden">
              Swipe to explore →
            </span>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
            {parentMenu.submenus.map((sub) => {
              const isCurrent = sub.id === chapterData.id || sub.href === `#${chapterData.id}`;
              return (
                <button
                  key={sub.id}
                  onClick={() => onNavigate(sub.href || `#${sub.id}`)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{sub.title}</span>
                  {sub.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${isCurrent ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {sub.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Main Section Header & Title */}
      <div className="border-b border-slate-200 pb-6 sm:pb-8 mb-8 relative">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e6f3fa] text-[#0072bc] text-[11px] sm:text-xs font-bold uppercase">
            <Layers className="w-3.5 h-3.5" />
            <AdminEditableTitle
              as="span"
              value={chapterData.badge || chapterData.menuTitle}
              label="Chapter Badge"
              onSave={(val) => updateChapterField('badge', val)}
            />
          </div>

          {/* Quick WordPress Edit Page Action (Strictly Admin Only) */}
          <div className="flex items-center gap-2">
            {isAdmin && onOpenWpEditor && (
              <button
                onClick={() => onOpenWpEditor(chapterData.id)}
                className="px-3 py-1.5 bg-[#0073aa] hover:bg-[#005a87] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                title="Edit this page and contents in WordPress system"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Page in WP</span>
              </button>
            )}

            {isAdmin && isEditMode && (
              <button
                onClick={() => onEditBox({
                  id: `chapter-header-${chapterData.id}`,
                  type: 'text',
                  title: chapterData.title,
                  subtitle: chapterData.tagline,
                  content: chapterData.summary,
                  badge: chapterData.badge
                })}
                className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-lg flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visual Box Edit</span>
              </button>
            )}
          </div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          <AdminEditableTitle
            as="span"
            value={chapterData.title}
            label="Chapter Title"
            onSave={(val) => updateChapterField('title', val)}
          />
        </h1>
        
        <div className="text-[#0072bc] font-semibold text-sm sm:text-base mt-2">
          <AdminEditableTitle
            as="p"
            value={chapterData.tagline}
            label="Chapter Tagline"
            onSave={(val) => updateChapterField('tagline', val)}
          />
        </div>

        {/* Post/Page Author & Date Metadata */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>{chapterData.author || 'PPP Union Secretariat'}</span>
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{chapterData.date || 'September 2026'}</span>
          </span>
          <span>&bull;</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[10px] uppercase">
            {chapterData.status || 'Published'}
          </span>
        </div>

        {/* Top image layout if NOT left-aligned */}
        {!(chapterData.imagePosition === 'left' || chapterData.id === 'advantages-ppp') && (
          <>
            {chapterData.summary && (
              <div className="mt-6 p-5 sm:p-6 rounded-r-xl border-l-4 border-[#0072bc] bg-[#f8fbfe] border-y border-r border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#0072bc] mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#0072bc]" />
                  <span>Executive Abstract</span>
                </div>
                <AdminEditableTitle
                  as="p"
                  value={chapterData.summary}
                  label="Executive Abstract"
                  multiline={true}
                  onSave={(val) => updateChapterField('summary', val)}
                  className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed sm:leading-loose text-justify hyphens-auto"
                />
              </div>
            )}

            {/* Chapter Featured Photo with Double-Click Replacer */}
            <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
              <AdminEditableImage
                src={chapterData.imageUrl || '/un-sdg-summit.jpg'}
                alt={chapterData.title}
                label={`${chapterData.title} Featured Photo`}
                onSave={(newUrl) => updateChapterField('imageUrl', newUrl)}
                className="w-full h-56 sm:h-72 lg:h-80 object-cover object-center"
              />
              <div className="bg-slate-50 px-4 py-2 text-[11px] text-slate-500 border-t border-slate-200 flex items-center justify-between">
                <span>UN International People-First PPP Directory</span>
                <span className="text-sky-700 font-bold text-[10px] uppercase flex items-center gap-1">
                  <span>Double-click photo to replace</span>
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* When Left Image is active (Sub-Menu Advantages of PPP), render Left-Side Picture Layout */}
      {(chapterData.imagePosition === 'left' || chapterData.id === 'advantages-ppp') ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 items-start">
          {/* Left Column: Picture on Left Side of Sub-Menu */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#0072bc]/30 shadow-lg bg-white relative group">
              <div className="relative">
                <AdminEditableImage
                  src={chapterData.imageUrl || '/ppp_advantages_model.jpg'}
                  alt={chapterData.title}
                  label={`${chapterData.title} Featured Photo`}
                  onSave={(newUrl) => updateChapterField('imageUrl', newUrl)}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <button
                  type="button"
                  onClick={() => setLightboxImage(chapterData.imageUrl || '/ppp_advantages_model.jpg')}
                  className="absolute bottom-3 right-3 bg-slate-900/85 hover:bg-[#0072bc] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Click to view full-resolution image"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-[11px]">Inspect High-Res</span>
                </button>
              </div>

              <div className="p-4 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#0072bc]">
                  <span className="uppercase tracking-wider">
                    {chapterData.id === 'historical-background' ? 'Historical Evolution Architecture' : 'PPP Model & Value Architecture'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">8K Quality</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed text-justify">
                  {chapterData.imageCaption || 'High-Resolution PPP Synergy Architecture: Off-Budget Sovereign Infrastructure, SBLC/BG Bank Instruments, Risk Transfer & Private Sector EPC+F Delivery'}
                </p>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-600">Left-Side Sub-Menu Showcase</span>
                  {isAdmin && <span className="text-[#0072bc] font-bold">Double-click photo to change</span>}
                </div>
              </div>
            </div>

            {/* Strategic Quick Reference Panel on Left Column */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2.5 shadow-xs">
              <div className="font-black text-slate-900 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#0072bc]">
                <ShieldCheck className="w-4 h-4 text-[#0072bc]" />
                <span>{chapterData.id === 'historical-background' ? 'Historical & Jurisprudential Anchors' : 'Executive Operational Highlights'}</span>
              </div>
              <ul className="space-y-2 text-slate-700 text-xs">
                {chapterData.quickHighlights && chapterData.quickHighlights.length > 0 ? (
                  chapterData.quickHighlights.map((qh, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>{qh.label}:</strong> {qh.detail}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Zero Cash Outflow:</strong> Off-budget funding through SBLC & Bank Guarantees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Private EPC+F Access:</strong> Full turnkey engineering, procurement, construction & finance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>0% Equity Dilution:</strong> Non-refundable funding against bank instruments with full return.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Force Majeure Shield:</strong> Multi-peril sovereign & commercial insurance coverage.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Zero Debt Burden:</strong> Complete elimination of monthly loan repayments.</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column: Executive Abstract and Full Rich Body Paragraphs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">
            {chapterData.summary && (
              <div className="p-5 sm:p-6 rounded-r-xl border-l-4 border-[#0072bc] bg-[#f8fbfe] border-y border-r border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#0072bc] mb-2.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#0072bc]" />
                  <span>Executive Abstract</span>
                </div>
                <AdminEditableTitle
                  as="p"
                  value={chapterData.summary}
                  label="Executive Abstract"
                  multiline={true}
                  onSave={(val) => updateChapterField('summary', val)}
                  className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed sm:leading-loose text-justify hyphens-auto"
                />
              </div>
            )}

            {/* Rich Body Paragraphs */}
            {sanitizedParagraphs.length > 0 && (
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed sm:leading-loose">
                <FormattedContent
                  paragraphs={sanitizedParagraphs}
                  onEditParagraph={handleEditParagraph}
                  onDeleteParagraph={handleDeleteParagraph}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Standard Layout for other chapters */
        <>
          {/* Admin Content Direct Editing Toolbar */}
          {isAdmin && (
            <div className="mb-6 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200/90 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-[#0072bc] text-white shadow-xs">
                  <Edit3 className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide">
                    Direct Page Text & Photo Controls
                  </h4>
                  <p className="text-[11px] text-slate-600">
                    Double-click any paragraph or photo to edit directly, or use the fast tools below.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsDirectTextModalOpen(true)}
                  className="px-3.5 py-2 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer hover:scale-101"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Edit All Page Paragraphs</span>
                </button>
                <button
                  type="button"
                  onClick={handleAddParagraph}
                  className="px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Add Paragraph</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    openFastImageReplacer({
                      currentImageUrl: chapterData.imageUrl || '',
                      label: `${chapterData.title} Featured Photo`,
                      onSave: (newUrl) => updateChapterField('imageUrl', newUrl),
                    });
                  }}
                  className="px-3 py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#0072bc]" />
                  <span>Change Photo</span>
                </button>
              </div>
            </div>
          )}

          {sanitizedParagraphs.length > 0 && (
            <div className="mb-10 text-slate-700 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <FormattedContent
                paragraphs={sanitizedParagraphs}
                onEditParagraph={handleEditParagraph}
                onDeleteParagraph={handleDeleteParagraph}
              />

              {/* Schedule: Comprehensive Evaluation of PPP Benefits vs. Disadvantages (Allocated under PPP Risks) */}
              {chapterData.id === 'ppp-risks' && (
                <div className="mt-10">
                  <PPPBenefitsEvaluationSchedule />
                </div>
              )}

              {/* Official 4-Column Abbreviation Table placed under FREQUENTLY ASKED QUESTIONS at the end of Section 5 */}
              {chapterData.id === 'faq' && (
                <div className="mt-10">
                  <PPPDefinitionsScheduleTable
                    id="ppp-definitions-schedule"
                    title="Schedule of PPP Abbreviations, Acronyms & Statutory Definitions"
                    subtitle="Official 4-Column Lexicon Schedule as recognized by PPP Union, UNECE, World Bank Group, and Sovereign Concession Authorities"
                  />
                </div>
              )}

              {/* Official Course Structure & Sequential Learning Modules for PPP & 17 SDGS */}
              {(chapterData.id === 'sdgs-courses' || chapterData.id === 'sdgs' || chapterData.id === 'ppp-model') && (
                <div className="mt-10">
                  <PPPCourseStructureSchedule />
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* 5. Key Pillars / Feature Cards (Responsive Grid: 1 col mobile, 2 tablet, 3 desktop) */}
      {chapterData.keyPillars && chapterData.keyPillars.length > 0 && (
        <div className="mb-12">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0072bc]" />
            <span>Core Pillars & Operational Standards</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {chapterData.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#0072bc]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {pillar.tag && (
                    <AdminEditableTitle
                      as="span"
                      value={pillar.tag}
                      label={`Pillar #${idx + 1} Tag`}
                      onSave={(val) => {
                        const updated = [...(chapterData.keyPillars || [])];
                        updated[idx] = { ...updated[idx], tag: val };
                        updateChapterField('keyPillars', updated);
                      }}
                      className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0072bc] uppercase mb-2"
                    />
                  )}
                  <AdminEditableTitle
                    as="h4"
                    value={pillar.title}
                    label={`Pillar #${idx + 1} Title`}
                    onSave={(val) => {
                      const updated = [...(chapterData.keyPillars || [])];
                      updated[idx] = { ...updated[idx], title: val };
                      updateChapterField('keyPillars', updated);
                    }}
                    className="text-sm sm:text-base font-bold text-slate-900 mb-2"
                  />
                  <AdminEditableTitle
                    as="p"
                    value={pillar.description}
                    label={`Pillar #${idx + 1} Description`}
                    multiline={true}
                    onSave={(val) => {
                      const updated = [...(chapterData.keyPillars || [])];
                      updated[idx] = { ...updated[idx], description: val };
                      updateChapterField('keyPillars', updated);
                    }}
                    className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify hyphens-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5a. Gateway for all National Laws through Blue Button (Requested for laws-overview / Global PPP Legal Frameworks page) */}
      {(chapterData.id === 'laws-overview' || cleanId === 'laws-overview' || cleanId === 'ppp-laws') && (
        <div id="gateway-national-laws-banner" className="mb-12 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-blue-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-400/20 text-sky-200 border border-sky-400/30 mb-4">
              <Scale className="w-3.5 h-3.5" />
              Gateway for All National Laws
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              National PPP Laws Directory · 193 Sovereign Jurisdictions
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl mb-6">
              Access the complete directory of all 193 UN sovereign member countries with attached official PDF laws, modeled after the PPP Facilitators country directory, anchored by the 17-SDGs UN Legal Article (approved by 193 countries), UNECE PPP Standard, and European Union Directive 2014/23/EU.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('#national-laws')}
                className="px-5 py-3 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Open National PPP Laws Directory (193 Countries)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('#facilitators')}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Browse PPP Facilitators (193 Desks)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5b. Dedicated 17 UN Sustainable Development Goals Section with All Sub-Goals */}
      {(chapterData.id === 'all-17-goals' || cleanId === 'all-17-goals') && (
        <div className="mb-12">
          <SDGsSection
            standalonePage={true}
            sdgs={sdgs}
            isEditMode={isEditMode}
            onEditSDG={onEditSDG || (() => {})}
          />
        </div>
      )}

      {/* 5c. Dedicated Interactive 7-Stage Process Lifecycle & Model Systems Engine */}
      {(chapterData.id === 'ppp-process' || cleanId === 'ppp-process' || chapterData.id === 'project-types' || cleanId === 'project-types' || cleanId === 'about-ppp' || cleanId === 'ppp-programs') && (
        <div className="mb-12">
          <PPPProcessAndModelsEngine />
        </div>
      )}

      {/* 6. Legislative / Statutory Directory (if applicable, e.g. National Laws) */}
      {chapterData.statutes && chapterData.statutes.length > 0 && (
        <div className="mb-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <Scale className="w-5 h-5 text-sky-400" />
                <span>Verified Statutory Statutes & Legislation</span>
              </h3>
              <p className="text-slate-400 text-xs mt-1">Official references across UNECE member states and regional jurisdictions</p>
            </div>

            <input
              type="text"
              value={statuteFilter}
              onChange={(e) => setStatuteFilter(e.target.value)}
              placeholder="Filter by jurisdiction..."
              className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400 sm:w-56"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {chapterData.statutes
              .filter(st => statuteFilter === '' || st.authority.toLowerCase().includes(statuteFilter.toLowerCase()) || st.code.toLowerCase().includes(statuteFilter.toLowerCase()))
              .map((st, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-sky-500/50 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-black text-sky-300">{st.authority}</span>
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mb-1">{st.code}</div>
                  <p className="text-[11px] text-slate-400 leading-snug">{st.scope}</p>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* 7. Interactive Accordion FAQs (if present) */}
      {chapterData.faqs && chapterData.faqs.length > 0 && (
        <div className="mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#0072bc]" />
            <span>Interactive Frequently Asked Questions</span>
          </h3>

          <div className="space-y-3">
            {chapterData.faqs.map((faq, fIdx) => {
              const isOpen = expandedFaq === fIdx;
              return (
                <div key={fIdx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#0072bc]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed text-justify hyphens-auto border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 8. Bottom Navigation: Next & Previous Chapters (Mobile Ergonomics) */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        {prevChapter ? (
          <button
            onClick={() => onNavigate(prevChapter.href || `#${prevChapter.id}`)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 hover:border-[#0072bc] hover:text-[#0072bc] flex items-center justify-center sm:justify-start gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 uppercase">Previous Chapter</span>
              <span className="font-bold text-slate-800">{prevChapter.title}</span>
            </div>
          </button>
        ) : <div />}

        {nextChapter ? (
          <button
            onClick={() => onNavigate(nextChapter.href || `#${nextChapter.id}`)}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white flex items-center justify-center sm:justify-end gap-2 transition-colors cursor-pointer shadow-xs"
          >
            <div className="text-right">
              <span className="block text-[10px] text-sky-200 uppercase">Next Chapter</span>
              <span className="font-bold">{nextChapter.title}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => onNavigate('#contact')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Contact Secretariat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* High-Resolution Image Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="font-bold sm:text-sm">
                  {chapterData?.title ? `${chapterData.title} — High-Resolution Inspection` : 'Official High-Resolution PPP Model & Architecture'}
                </span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center overflow-auto flex-1">
              <img
                src={lightboxImage}
                alt="High-Resolution Infrastructure Model"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs flex flex-wrap items-center justify-between gap-2">
              <span>{chapterData?.imageCaption || 'Public-Private Partnerships: Synergy Architecture, Bank Instruments (SBLC/BG) & EPC+F'}</span>
              <span className="text-emerald-400 font-bold text-[11px] uppercase tracking-wider">Ultra-High Quality Preview</span>
            </div>
          </div>
        </div>
      )}

      {/* Direct Full Page Text Editor Modal for Admin */}
      {chapterData && (
        <DirectPageTextEditorModal
          isOpen={isDirectTextModalOpen}
          onClose={() => setIsDirectTextModalOpen(false)}
          chapterTitle={chapterData.title}
          paragraphs={chapterData.contentParagraphs || []}
          onSave={handleSaveAllParagraphs}
        />
      )}
    </div>
  );
};

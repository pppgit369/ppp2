import React, { useState, useMemo, useEffect } from 'react';
import {
  User,
  ShieldCheck,
  Mail,
  Inbox,
  GraduationCap,
  Sparkles,
  Award,
  FileCheck,
  FolderGit2,
  Receipt,
  CheckCircle2,
  AlertTriangle,
  Send,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Building2,
  Phone,
  Globe,
  FileText,
  Lock,
  Layers,
  Search,
  Plus,
  ArrowRight,
  Crown,
  Clock,
  QrCode,
  ShieldAlert,
  BellRing,
  HelpCircle,
  Eye,
  EyeOff,
  LogIn,
  LogOut,
  UserPlus,
  KeyRound,
  Shield
} from 'lucide-react';
import {
  MembershipTier,
  KYCApplicantData,
  MemberProfile,
  MemberInboxItem,
  MemberMailMessage,
  MemberCourse,
  MemberCertificate,
  MemberContract,
  MemberProject,
  MemberBillingInvoice,
  NotificationLog
} from '../types/membership';
import {
  MOCK_ACTIVE_VIP_MEMBER,
  MOCK_ACTIVE_GOLDEN_MEMBER,
  MOCK_PENDING_APPLICANTS,
  MOCK_INBOX_ITEMS,
  MOCK_MAIL_MESSAGES,
  MOCK_COURSES,
  MOCK_CERTIFICATES,
  MOCK_CONTRACTS,
  MOCK_PROJECTS,
  MOCK_INVOICES,
  MOCK_NOTIFICATION_LOGS
} from '../data/mockMembershipData';
import { PPPUnionCoach } from './member/PPPUnionCoach';

interface MemberPortalProps {
  onNavigate: (href: string) => void;
  initialTab?: 'login' | 'portal' | 'register' | 'admin';
}

export const MemberPortal: React.FC<MemberPortalProps> = ({ onNavigate, initialTab = 'portal' }) => {
  // Top-level mode: 'login' (Members Login), 'portal' (Member's view), 'register' (KYC Registration), 'admin' (members@pppunion.org desk)
  const [activeMainView, setActiveMainView] = useState<'login' | 'portal' | 'register' | 'admin'>(initialTab);

  // Sync when initialTab prop changes
  useEffect(() => {
    if (initialTab) {
      setActiveMainView(initialTab);
    }
  }, [initialTab]);

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginTier, setLoginTier] = useState<'vip' | 'golden' | 'green'>('vip');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginSuccessMsg, setLoginSuccessMsg] = useState<string | null>(null);

  // Active Member Profile: Dr. Tariq Al-Mansoor (VIP) or Elena Rostova (Golden)
  const [activeMember, setActiveMember] = useState<MemberProfile>(MOCK_ACTIVE_VIP_MEMBER);

  // Member Portal sub-tabs
  const [memberSubTab, setMemberSubTab] = useState<
    'mails' | 'inbox' | 'courses' | 'coach' | 'certificates' | 'contracts' | 'projects' | 'billing'
  >('inbox');

  // Application queue for members@pppunion.org
  const [applicants, setApplicants] = useState<KYCApplicantData[]>(MOCK_PENDING_APPLICANTS);
  const [selectedApplicant, setSelectedApplicant] = useState<KYCApplicantData | null>(null);

  // Member boxes state (managed by admin and displayed to member)
  const [inboxItems, setInboxItems] = useState<MemberInboxItem[]>(MOCK_INBOX_ITEMS);
  const [mailMessages, setMailMessages] = useState<MemberMailMessage[]>(MOCK_MAIL_MESSAGES);
  const [courses, setCourses] = useState<MemberCourse[]>(MOCK_COURSES);
  const [certificates, setCertificates] = useState<MemberCertificate[]>(MOCK_CERTIFICATES);
  const [contracts, setContracts] = useState<MemberContract[]>(MOCK_CONTRACTS);
  const [projects, setProjects] = useState<MemberProject[]>(MOCK_PROJECTS);
  const [invoices, setInvoices] = useState<MemberBillingInvoice[]>(MOCK_INVOICES);
  const [notificationLogs, setNotificationLogs] = useState<NotificationLog[]>(MOCK_NOTIFICATION_LOGS);

  // Mail compose modal state
  const [isComposingMail, setIsComposingMail] = useState(false);
  const [mailRecipientType, setMailRecipientType] = useState<'administration' | 'vip_member'>('administration');
  const [mailSubject, setMailSubject] = useState('');
  const [mailBody, setMailBody] = useState('');

  // Admin Box Deposit Modal
  const [showAdminDepositModal, setShowAdminDepositModal] = useState(false);
  const [depositTargetBox, setDepositTargetBox] = useState<'inbox' | 'courses' | 'certificates' | 'contracts' | 'projects'>('inbox');
  const [depositTitle, setDepositTitle] = useState('');
  const [depositDetails, setDepositDetails] = useState('');
  const [adminActionSuccess, setAdminActionSuccess] = useState<string | null>(null);

  // Registration Form State
  const [regForm, setRegForm] = useState<Partial<KYCApplicantData>>({
    tier: 'vip',
    fullName: '',
    designation: '',
    companyName: '',
    registrationNumber: '',
    country: '',
    website: '',
    projectDetails: '',
    projectSector: 'Clean Energy & Desalination',
    estimatedBudget: '',
    targetCountry: '',
    accepted17SDGs: false,
    globalizationPledge: false,
    mobileNumber: '',
    email: '',
    officeAddress: '',
    utilityBillType: 'Electricity / Municipal Energy Bill',
    guarantorType: 'bank_guarantee',
    bankGuaranteeAmount: '€12,000,000 for 2 Years',
    bankName: '',
    bankSwiftRating: 'BBB Ranked Bank',
    antiSanctionAgreement: false,
    nonMilitaryPoliticianAgreement: false,
    blacklistAuthorizationAgreement: false
  });
  const [uploadedFiles, setUploadedFiles] = useState<{
    license?: string;
    passport?: string;
    utilityBill?: string;
  }>({});
  const [regSuccessDossier, setRegSuccessDossier] = useState<string | null>(null);

  // Helper to trigger automated SMS and Email notification whenever Admin modifies any member box
  const dispatchNotification = (memberId: string, eventName: string, previewText: string) => {
    const newLog: NotificationLog = {
      id: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      memberId,
      channel: 'BOTH',
      recipientPhone: activeMember.phone,
      recipientEmail: activeMember.email,
      triggerEvent: eventName,
      messagePreview: previewText,
      deliveryStatus: 'Delivered'
    };
    setNotificationLogs(prev => [newLog, ...prev]);
  };

  // Handle New Registration Submit
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.accepted17SDGs || !regForm.antiSanctionAgreement || !regForm.blacklistAuthorizationAgreement) {
      alert('Please agree to all mandatory compliance, anti-sanction, and 17-SDGs covenants.');
      return;
    }

    const newAppId = `APP-2026-0${Math.floor(200 + Math.random() * 800)}`;
    const newApplicant: KYCApplicantData = {
      id: newAppId,
      submissionDate: new Date().toISOString().substring(0, 10),
      status: 'pending_review',
      tier: regForm.tier || 'vip',
      fullName: regForm.fullName || 'Authorized Representative',
      designation: regForm.designation || 'Director',
      companyName: regForm.companyName || 'Registered Entity',
      registrationNumber: regForm.registrationNumber || 'REG-PENDING',
      country: regForm.country || 'International',
      website: regForm.website || '',
      companyLicenseName: uploadedFiles.license || 'Entity_License_Attached.pdf',
      passportDocumentName: uploadedFiles.passport || 'Passport_Signatory.pdf',
      projectDetails: regForm.projectDetails || 'Infrastructure Partnership',
      projectSector: regForm.projectSector || 'Infrastructure',
      estimatedBudget: regForm.estimatedBudget || '€5,000,000',
      targetCountry: regForm.targetCountry || 'Global',
      accepted17SDGs: !!regForm.accepted17SDGs,
      globalizationPledge: !!regForm.globalizationPledge,
      mobileNumber: regForm.mobileNumber || '+00 000 0000',
      email: regForm.email || 'applicant@domain.com',
      officeAddress: regForm.officeAddress || 'Corporate Headquarters',
      utilityBillType: regForm.utilityBillType || 'Utility Bill',
      utilityBillDocumentName: uploadedFiles.utilityBill || 'Office_Utility_Verification.pdf',
      guarantorType: regForm.guarantorType || 'bank_guarantee',
      vipGuarantorName: regForm.vipGuarantorName,
      vipGuarantorMemberId: regForm.vipGuarantorMemberId,
      bankGuaranteeAmount: regForm.bankGuaranteeAmount || '€12,000,000 for 2 Years',
      bankName: regForm.bankName || 'Approved BBB Bank',
      bankSwiftRating: regForm.bankSwiftRating || 'BBB Ranked',
      antiSanctionAgreement: !!regForm.antiSanctionAgreement,
      nonMilitaryPoliticianAgreement: !!regForm.nonMilitaryPoliticianAgreement,
      blacklistAuthorizationAgreement: !!regForm.blacklistAuthorizationAgreement
    };

    setApplicants(prev => [newApplicant, ...prev]);
    setRegSuccessDossier(newAppId);
  };

  // Handle Admin Approve Applicant
  const handleApproveApplicant = (applicant: KYCApplicantData) => {
    const tierPrefix = applicant.tier === 'vip' ? 'VIP' : applicant.tier === 'golden' ? 'GLD' : 'GRN';
    const newMemberId = `PU-${tierPrefix}-2026-${Math.floor(100 + Math.random() * 900)}`;
    const fee = applicant.tier === 'vip' ? 1000 : applicant.tier === 'golden' ? 500 : 100;

    const newProfile: MemberProfile = {
      id: newMemberId,
      fullName: applicant.fullName,
      title: applicant.designation,
      entityName: applicant.companyName,
      tier: applicant.tier,
      country: applicant.country,
      email: applicant.email,
      phone: applicant.mobileNumber,
      joinedDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
      guarantorNote: applicant.guarantorType === 'bank_guarantee' ? `${applicant.bankGuaranteeAmount} via ${applicant.bankName}` : `Guaranteed by VIP Member ${applicant.vipGuarantorName}`,
      monthlyFee: fee,
      complianceStatus: 'Active & Verified'
    };

    setActiveMember(newProfile);

    // Create 1st Month Billing
    const newInvoice: MemberBillingInvoice = {
      id: `INV-2026-09-${Math.floor(100 + Math.random() * 900)}`,
      invoiceNumber: `PU-BILL-2026-09-${newMemberId.replace('PU-', '')}`,
      billingMonth: 'September 2026',
      issueDate: '01 September 2026',
      dueDate: '15 September 2026',
      tier: applicant.tier,
      amountEur: fee,
      status: 'Paid & Approved by ppp@pppunion.org',
      paymentReference: `SEPA-CLEAR-${Date.now().toString().slice(-8)}`,
      authorizedBy: 'ppp@pppunion.org'
    };
    setInvoices(prev => [newInvoice, ...prev]);

    // Send Welcome Letter to Inbox
    const welcomeLetter: MemberInboxItem = {
      id: `INB-${Date.now()}`,
      sender: 'members@pppunion.org',
      title: `Executive Welcome & Member Accreditation: ${newMemberId}`,
      referenceNumber: `PU-WELCOME-${newMemberId}`,
      category: 'Official Instruction',
      date: 'Today',
      content: `Welcome to the PPP Union, ${applicant.fullName}. Your KYC/CIS dossier and bank guarantee from ${applicant.bankName} have been formally approved by members@pppunion.org. Your portal services (My Mails, My Inbox, My Courses, My Coach, My Certificates, My Contract, My Projects) are fully operational.`,
      attachmentName: `Official_Accreditation_${newMemberId}.pdf`,
      isRead: false
    };
    setInboxItems(prev => [welcomeLetter, ...prev]);

    // Dispatch SMS & Email log
    dispatchNotification(
      newMemberId,
      'Account Approved by members@pppunion.org',
      `PPP Union Alert: Congratulations! Your application has been APPROVED under Member ID ${newMemberId}. Login credentials and service dossier dispatched to your email.`
    );

    // Update status in applicants list
    setApplicants(prev => prev.map(a => a.id === applicant.id ? { ...a, status: 'approved' } : a));
    setSelectedApplicant(null);
    setAdminActionSuccess(`Applicant ${applicant.fullName} approved! Member ID ${newMemberId} issued. Automated SMS & Email delivered.`);
    setTimeout(() => setAdminActionSuccess(null), 5000);
  };

  // Handle Admin Reject Applicant
  const handleRejectApplicant = (applicant: KYCApplicantData, reason: string) => {
    setApplicants(prev => prev.map(a => a.id === applicant.id ? { ...a, status: 'rejected', adminRemarks: reason } : a));
    dispatchNotification(
      applicant.id,
      'Application Rejected by members@pppunion.org',
      `PPP Union Notice: Your membership application could not be approved at this stage. Reason: ${reason}`
    );
    setSelectedApplicant(null);
    setAdminActionSuccess(`Applicant ${applicant.fullName} rejected. Notification sent.`);
    setTimeout(() => setAdminActionSuccess(null), 4000);
  };

  // Handle Admin Depositing an Item into Member Box
  const handleAdminDepositItem = () => {
    if (!depositTitle.trim()) return;

    if (depositTargetBox === 'inbox') {
      const newItem: MemberInboxItem = {
        id: `INB-${Date.now()}`,
        sender: 'ppp@pppunion.org',
        title: depositTitle,
        referenceNumber: `PU-ADMIN-${Date.now().toString().slice(-5)}`,
        category: 'Official Instruction',
        date: 'Today',
        content: depositDetails || 'Official document and instruction deposited into your personal member box by ppp@pppunion.org administration.',
        attachmentName: 'Official_Dispatched_Document.pdf',
        isRead: false
      };
      setInboxItems(prev => [newItem, ...prev]);
    } else if (depositTargetBox === 'certificates') {
      const newCert: MemberCertificate = {
        id: `CERT-${Date.now()}`,
        serialNumber: `PU-CERT-2026-${Date.now().toString().slice(-4)}`,
        title: depositTitle,
        issuedDate: 'Today',
        expiryDate: 'Three Years Validity',
        authority: 'PPP Union Executive Secretariat',
        description: depositDetails || 'Official certification awarded by ppp@pppunion.org.',
        verificationQr: 'https://pppunion.org/verify/PU-NEW',
        category: 'Accreditation'
      };
      setCertificates(prev => [newCert, ...prev]);
    } else if (depositTargetBox === 'contracts') {
      const newCon: MemberContract = {
        id: `CON-${Date.now()}`,
        contractNumber: `PU-CON-2026-${Date.now().toString().slice(-4)}`,
        title: depositTitle,
        counterparty: 'Host Sovereign Infrastructure Authority',
        status: 'ongoing',
        concessionModel: 'DBFOM',
        sourceOfFunding: 'Multilateral Green Facility',
        accreditedFacilitator: 'PPP Union Facilitators Network',
        termYears: '25 Years',
        contractValue: '€75,000,000',
        lastUpdated: 'Today',
        details: depositDetails || 'Concession contract verified and deposited by ppp@pppunion.org.'
      };
      setContracts(prev => [newCon, ...prev]);
    } else if (depositTargetBox === 'projects') {
      const newPrj: MemberProject = {
        id: `PRJ-${Date.now()}`,
        projectCode: `SDG-PRJ-2026-${Date.now().toString().slice(-3)}`,
        projectName: depositTitle,
        sector: 'Sustainable Infrastructure',
        hostCountry: activeMember.country,
        capexAmount: '€120,000,000',
        sdgGoals: [6, 9, 17],
        nonSanctionableStatus: 'Verified Non-Sanctionable (UN Charter / A/RES/70/1 Art 30)',
        status: 'In Development',
        facilitatorAssigned: 'PPP Union Certified Liaison Desk'
      };
      setProjects(prev => [newPrj, ...prev]);
    }

    // MANDATORY REQUIREMENT: Dispatch automated SMS & Email to member
    dispatchNotification(
      activeMember.id,
      `Document Added to My ${depositTargetBox.toUpperCase()}`,
      `PPP Union Alert: An official update ("${depositTitle}") has been placed in your "My ${depositTargetBox}" box by ppp@pppunion.org. Please review in your portal.`
    );

    setShowAdminDepositModal(false);
    setDepositTitle('');
    setDepositDetails('');
    setAdminActionSuccess(`Document successfully deposited into Member's ${depositTargetBox}! Automated SMS and Email notification dispatched.`);
    setTimeout(() => setAdminActionSuccess(null), 5000);
  };

  // Handle Member Sending Mail
  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mailSubject.trim() || !mailBody.trim()) return;

    const newMail: MemberMailMessage = {
      id: `MAIL-${Date.now()}`,
      senderName: activeMember.fullName,
      senderEmail: activeMember.email,
      senderTier: activeMember.tier,
      recipientEmail: mailRecipientType === 'administration' ? 'members@pppunion.org' : 'vip-network@pppunion.org',
      recipientType: mailRecipientType,
      subject: mailSubject,
      content: mailBody,
      timestamp: 'Just now',
      isRead: true,
      isImportant: true
    };

    setMailMessages(prev => [newMail, ...prev]);
    setIsComposingMail(false);
    setMailSubject('');
    setMailBody('');
    alert('Message sent successfully! A confirmation copy has been logged.');
  };

  // Handle Member Login Form Submission
  const handleMemberLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    if (!loginIdentifier.trim()) {
      setLoginError('Please enter your assigned Member ID or registered institutional email address.');
      return;
    }
    if (!loginPassword.trim()) {
      setLoginError('Please enter your security access passcode or password.');
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      const raw = loginIdentifier.trim().toLowerCase();
      if (raw.includes('admin') || raw.includes('secretariat') || raw.includes('desk')) {
        setActiveMainView('admin');
        setLoginSuccessMsg('Authenticated as Executive Desk Administrator (members@pppunion.org).');
      } else if (raw.includes('elena') || raw.includes('gld') || loginTier === 'golden') {
        setActiveMember(MOCK_ACTIVE_GOLDEN_MEMBER);
        setActiveMainView('portal');
        setLoginSuccessMsg('Welcome back, Elena Rostova (Golden Tier Member). Terminal active.');
      } else if (raw.includes('green') || raw.includes('grn') || raw.includes('marcus') || loginTier === 'green') {
        setActiveMember({
          ...MOCK_ACTIVE_VIP_MEMBER,
          id: 'PU-GRN-2026-041',
          fullName: 'Marcus Vance',
          title: 'Senior PPP Infrastructure Consultant',
          entityName: 'Universal Infrastructure Initiative',
          country: 'United Kingdom',
          tier: 'green',
          monthlyFee: 100
        });
        setActiveMainView('portal');
        setLoginSuccessMsg('Welcome back, Marcus Vance (Green Tier Member). Terminal active.');
      } else {
        // VIP Member / Default
        if (loginIdentifier.trim() && !loginIdentifier.includes('@') && !loginIdentifier.startsWith('PU-')) {
          setActiveMember({
            ...MOCK_ACTIVE_VIP_MEMBER,
            fullName: loginIdentifier.trim()
          });
        } else {
          setActiveMember(MOCK_ACTIVE_VIP_MEMBER);
        }
        setActiveMainView('portal');
        setLoginSuccessMsg(`Welcome back, ${activeMember.fullName} (VIP Tier Member). Terminal active.`);
      }
      setTimeout(() => setLoginSuccessMsg(null), 5000);
    }, 550);
  };

  // Quick 1-Click Login for Evaluators & Delegates
  const handleQuickMemberSelect = (tier: 'vip' | 'golden' | 'green' | 'admin') => {
    setLoginError(null);
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      if (tier === 'vip') {
        setActiveMember(MOCK_ACTIVE_VIP_MEMBER);
        setActiveMainView('portal');
        setLoginSuccessMsg('Authenticated as Dr. Tariq Al-Mansoor (VIP Tier Member). Terminal active.');
      } else if (tier === 'golden') {
        setActiveMember(MOCK_ACTIVE_GOLDEN_MEMBER);
        setActiveMainView('portal');
        setLoginSuccessMsg('Authenticated as Elena Rostova (Golden Tier Member). Terminal active.');
      } else if (tier === 'green') {
        setActiveMember({
          ...MOCK_ACTIVE_VIP_MEMBER,
          id: 'PU-GRN-2026-041',
          fullName: 'Marcus Vance',
          title: 'Senior PPP Infrastructure Consultant',
          entityName: 'Universal Infrastructure Initiative',
          country: 'United Kingdom',
          tier: 'green',
          monthlyFee: 100
        });
        setActiveMainView('portal');
        setLoginSuccessMsg('Authenticated as Marcus Vance (Green Tier Member). Terminal active.');
      } else if (tier === 'admin') {
        setActiveMainView('admin');
        setLoginSuccessMsg('Opened Executive Secretariat Desk (members@pppunion.org).');
      }
      setTimeout(() => setLoginSuccessMsg(null), 5000);
    }, 400);
  };

  // Sign out and return to Members Login
  const handleLogout = () => {
    setActiveMainView('login');
    setLoginSuccessMsg('You have signed out of your member portal terminal.');
    setTimeout(() => setLoginSuccessMsg(null), 4000);
  };

  return (
    <div id="member-portal-root" className="py-6 sm:py-10 px-3 sm:px-6 lg:px-12 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Breadcrumb & View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-xs border border-slate-200">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
              <button onClick={() => onNavigate('#home')} className="hover:text-[#0072bc] cursor-pointer">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button onClick={() => onNavigate('#about-union')} className="hover:text-[#0072bc] cursor-pointer">About Union</button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">
                {activeMainView === 'login' ? 'Members Login' : activeMainView === 'register' ? 'KYC Registration' : activeMainView === 'admin' ? 'Admin Desk' : 'Member Portal'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#1b365d] tracking-tight">
              {activeMainView === 'login'
                ? 'PPP Union Members Login & Terminal Access'
                : activeMainView === 'register'
                ? 'New Member KYC/CIS Application & Accreditation'
                : activeMainView === 'admin'
                ? 'Administrative Executive Desk (members@pppunion.org)'
                : 'PPP Union Member Services & Terminal Portal'}
            </h1>
          </div>

          {/* Quick Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveMainView('login')}
              className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeMainView === 'login'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Members Login</span>
            </button>

            <button
              onClick={() => setActiveMainView('portal')}
              className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeMainView === 'portal'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>My Member Portal</span>
            </button>

            <button
              onClick={() => setActiveMainView('register')}
              className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeMainView === 'register'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-emerald-800 hover:text-emerald-950 hover:bg-emerald-100/60'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>BE A MEMBER (KYC)</span>
            </button>

            <button
              onClick={() => setActiveMainView('admin')}
              className={`px-3 sm:px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                activeMainView === 'admin'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-800 hover:bg-amber-100/70'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Admin Desk</span>
              {applicants.filter(a => a.status === 'pending_review').length > 0 && (
                <span className="w-4 h-4 rounded-full bg-white text-amber-700 text-[10px] font-black flex items-center justify-center">
                  {applicants.filter(a => a.status === 'pending_review').length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Global Success / Alert Banner */}
        {loginSuccessMsg && (
          <div className="bg-sky-50 border border-sky-300 text-[#005a96] p-4 rounded-2xl flex items-center gap-3 shadow-xs animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#0072bc] shrink-0" />
            <p className="text-xs sm:text-sm font-bold">{loginSuccessMsg}</p>
          </div>
        )}

        {adminActionSuccess && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-xs sm:text-sm font-semibold">{adminActionSuccess}</p>
          </div>
        )}

        {/* =========================================================================
            VIEW 0: MEMBERS LOGIN (Login Process for already member & Bottom BE A MEMBER button)
            ========================================================================= */}
        {activeMainView === 'login' && (
          <div className="space-y-8">
            {/* Top Institutional Authentication Card */}
            <div className="bg-gradient-to-r from-[#1b365d] via-[#004f80] to-[#0072bc] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-sky-400/10 pointer-events-none blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-300/30 text-sky-200 text-xs font-bold uppercase tracking-wider mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
                    <span>Accredited Sovereign & Institutional Access</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    PPP Union Member Portal Login
                  </h2>
                  <p className="text-sm text-sky-100 mt-2 max-w-2xl leading-relaxed">
                    Official authentication portal for accredited private entities, sovereign facilitators, and institutional partners. Sign in to access your confidential terminal: My Mails, My Inbox, My Courses, My Coach, My Certificates, My Contracts, My Projects, and Billing Invoices.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/20">
                  <Lock className="w-8 h-8 text-amber-300 shrink-0" />
                  <div className="text-left text-xs">
                    <div className="font-bold text-white uppercase tracking-wider">End-to-End Encryption</div>
                    <div className="text-sky-200 text-[11px]">256-Bit SSL/TLS Sovereign Protocol</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PART 1: LOGIN PROCESS FOR ALREADY MEMBER */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Official Member Login Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0072bc] flex items-center justify-center font-bold">
                    <LogIn className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Sign In to Your Member Account</h3>
                    <p className="text-xs text-slate-500">For active accredited members with assigned Member ID</p>
                  </div>
                </div>

                {loginError && (
                  <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleMemberLogin} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Member ID or Registered Official Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        placeholder="e.g. PU-VIP-2026-088 or member@domain.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#0072bc] focus:ring-2 focus:ring-[#0072bc]/20 text-sm outline-hidden transition-all bg-slate-50/50"
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">Format: PU-[TIER]-[YEAR]-[NUMBER] or registered institutional email</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Access Passcode / Password <span className="text-rose-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("For security, passcodes are linked to your official email registry at members@pppunion.org. You can also click any test member account on the right for immediate 1-click evaluation.")}
                        className="text-[11px] text-[#0072bc] hover:underline cursor-pointer"
                      >
                        Need Help / Forgot Passcode?
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 focus:border-[#0072bc] focus:ring-2 focus:ring-[#0072bc]/20 text-sm outline-hidden transition-all bg-slate-50/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                        title={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Optional Membership Tier Filter */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Accredited Membership Classification
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setLoginTier('vip')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border text-center cursor-pointer ${
                          loginTier === 'vip'
                            ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        VIP Tier
                      </button>
                      <button
                        type="button"
                        onClick={() => setLoginTier('golden')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border text-center cursor-pointer ${
                          loginTier === 'golden'
                            ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        Golden Tier
                      </button>
                      <button
                        type="button"
                        onClick={() => setLoginTier('green')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border text-center cursor-pointer ${
                          loginTier === 'green'
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        Green Tier
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded text-[#0072bc] focus:ring-[#0072bc] cursor-pointer"
                      />
                      <span>Keep my terminal session active</span>
                    </label>
                    <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Registry Validated
                    </span>
                  </div>

                  {/* Primary Login Button */}
                  <button
                    type="submit"
                    disabled={isAuthenticating}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isAuthenticating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Authenticating with Sovereign Registry...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In to Member Portal Account</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column: 1-Click Instant Evaluation Profiles & Sovereign Security Notice */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                    <KeyRound className="w-4 h-4 text-[#0072bc]" />
                    <span>Instant 1-Click Member Evaluation</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Reviewers and visitors can instantly log in to pre-configured accredited accounts to explore active boxes (Mails, Inbox, Courses, Coach, Certificates, Contracts, Projects, Billing):
                  </p>

                  <div className="space-y-2.5">
                    {/* Demo 1: Dr. Tariq Al-Mansoor */}
                    <button
                      type="button"
                      onClick={() => handleQuickMemberSelect('vip')}
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 text-left transition-all hover:shadow-xs group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#0072bc]">
                          Dr. Tariq Al-Mansoor
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                          VIP TIER
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Abu Dhabi Infrastructure Investment Authority · UAE
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center justify-between">
                        <span>ID: PU-VIP-2026-088</span>
                        <span className="text-[#0072bc] font-bold group-hover:underline">1-Click Login →</span>
                      </div>
                    </button>

                    {/* Demo 2: Elena Rostova */}
                    <button
                      type="button"
                      onClick={() => handleQuickMemberSelect('golden')}
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-sky-50/50 border border-slate-200 hover:border-sky-300 text-left transition-all hover:shadow-xs group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#0072bc]">
                          Elena Rostova
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-sky-100 text-sky-900 border border-sky-300">
                          GOLDEN TIER
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Eurasia Infrastructure & Transit Group · Austria
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center justify-between">
                        <span>ID: PU-GLD-2026-142</span>
                        <span className="text-[#0072bc] font-bold group-hover:underline">1-Click Login →</span>
                      </div>
                    </button>

                    {/* Demo 3: Green Member */}
                    <button
                      type="button"
                      onClick={() => handleQuickMemberSelect('green')}
                      className="w-full p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 text-left transition-all hover:shadow-xs group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                          Marcus Vance
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300">
                          GREEN TIER
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Universal SDG Infrastructure Practitioner · UK
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-1 flex items-center justify-between">
                        <span>ID: PU-GRN-2026-041</span>
                        <span className="text-emerald-700 font-bold group-hover:underline">1-Click Login →</span>
                      </div>
                    </button>

                    {/* Demo 4: Secretariat Admin Desk */}
                    <button
                      type="button"
                      onClick={() => handleQuickMemberSelect('admin')}
                      className="w-full p-3 rounded-xl bg-amber-50/70 border border-amber-300 hover:border-amber-500 text-left transition-all hover:shadow-xs group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-amber-950">
                          Administrative Executive Desk
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-600 text-white">
                          DESK ADMIN
                        </span>
                      </div>
                      <div className="text-[11px] text-amber-800">
                        Direct queue inspection: members@pppunion.org
                      </div>
                      <div className="text-[10px] font-mono text-amber-700 mt-1 flex items-center justify-between">
                        <span>Manage KYC Applicants & Member Boxes</span>
                        <span className="text-amber-900 font-bold group-hover:underline">Open Desk →</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Security Protocol Safeguards */}
                <div className="bg-slate-900 text-slate-300 rounded-2xl p-5 text-xs space-y-2.5 shadow-sm">
                  <div className="font-bold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-sky-400" />
                    <span>Sovereign Security & Neutrality Guarantee</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Under Articles 8, 12, and 14 of the statutory PPP Union Policy, member terminals are ring-fenced against third-party commercial exploitation, corporate espionage, and unauthorized data sharing.
                  </p>
                </div>
              </div>
            </div>

            {/* PART 2: IN BOTTOM - BUTTON FOR "BE A MEMBER" TO START REGISTRATION & APPLICATION KYC */}
            <div className="bg-gradient-to-br from-slate-900 via-[#1b365d] to-[#004f80] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-400/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 pointer-events-none blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-500/10 pointer-events-none blur-3xl" />

              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Not Yet an Accredited Member?</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Join the International PPP Union
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
                  Private corporations, engineering consortia, sovereign authorities, and qualified individual facilitators are invited to join. Complete the official KYC/CIS accreditation process to access verified project pipelines, non-sovereign funding, and certified capacity building.
                </p>

                {/* 3 Value Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-3 text-left">
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                    <div className="font-bold text-xs text-emerald-300 mb-1">169 SDG Concessions</div>
                    <div className="text-[11px] text-slate-300">Direct pipeline access across 17 Sustainable Development Goals.</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                    <div className="font-bold text-xs text-sky-300 mb-1">KYC & CIS Verification</div>
                    <div className="text-[11px] text-slate-300">Sanction screening, Police & Chamber NOCs, Article 12 compliance.</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/15">
                    <div className="font-bold text-xs text-amber-300 mb-1">Multi-Tier Accreditations</div>
                    <div className="text-[11px] text-slate-300">Green, Golden, and VIP Sovereign Tiers with verifiable diplomas.</div>
                  </div>
                </div>

                {/* The "BE A MEMBER" Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMainView('register');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-black text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer ring-4 ring-emerald-400/30 transform hover:-translate-y-0.5 uppercase tracking-wide"
                  >
                    <UserPlus className="w-5 h-5 text-white" />
                    <span>BE A MEMBER</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-xs text-slate-300 pt-1">
                  Clicking <span className="font-bold text-emerald-300">BE A MEMBER</span> starts the full registration and application KYC process.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 1: MEMBER'S OWN PORTAL (My Mails, My Inbox, My Courses, My Coach, etc.)
            ========================================================================= */}
        {activeMainView === 'portal' && (
          <div className="space-y-6">
            {/* Member Account Identity Banner */}
            <div className="bg-gradient-to-r from-[#1b365d] via-[#004f80] to-[#0072bc] text-white p-5 sm:p-6 rounded-2xl shadow-md border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-sky-400/10 pointer-events-none blur-2xl" />

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center text-sky-200 text-xl font-bold shadow-inner">
                    {activeMember.tier === 'vip' ? <Crown className="w-8 h-8 text-amber-300" /> : <User className="w-8 h-8 text-sky-200" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg sm:text-xl font-bold text-white">{activeMember.fullName}</h2>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        activeMember.tier === 'vip'
                          ? 'bg-amber-400 text-slate-950 border border-amber-300'
                          : activeMember.tier === 'golden'
                          ? 'bg-amber-200 text-amber-950 border border-amber-300'
                          : 'bg-emerald-400 text-slate-950 border border-emerald-300'
                      }`}>
                        {activeMember.tier.toUpperCase()} MEMBER
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        {activeMember.complianceStatus}
                      </span>
                    </div>
                    <p className="text-xs text-sky-100 mt-0.5">
                      {activeMember.title} · {activeMember.entityName} ({activeMember.country})
                    </p>
                    <p className="text-[11px] text-sky-200/80 mt-1 font-mono">
                      Member ID: <span className="font-bold text-white">{activeMember.id}</span> · Monthly Service Fee: <span className="font-bold text-white">€{activeMember.monthlyFee}/month</span>
                    </p>
                  </div>
                </div>

                {/* Switcher between Sample VIP, Golden Member & Sign Out */}
                <div className="flex items-center gap-2 self-stretch lg:self-auto bg-black/20 p-2 rounded-xl border border-white/10 text-xs flex-wrap">
                  <span className="text-sky-200 text-[11px] font-medium hidden sm:inline">Preview Account:</span>
                  <button
                    onClick={() => setActiveMember(MOCK_ACTIVE_VIP_MEMBER)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeMember.id === MOCK_ACTIVE_VIP_MEMBER.id
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    VIP Account
                  </button>
                  <button
                    onClick={() => setActiveMember(MOCK_ACTIVE_GOLDEN_MEMBER)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeMember.id === MOCK_ACTIVE_GOLDEN_MEMBER.id
                        ? 'bg-amber-300 text-slate-950'
                        : 'text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Golden Account
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-400/30 flex items-center gap-1.5"
                    title="Sign out and return to Members Login"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Member Portal Services Navigation Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xs border border-slate-200 overflow-x-auto">
              <div className="flex items-center gap-1.5 min-w-max">
                <button
                  onClick={() => setMemberSubTab('inbox')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'inbox'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Inbox className="w-4 h-4" />
                  <span>My Inbox</span>
                  {inboxItems.filter(i => !i.isRead).length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-black flex items-center justify-center">
                      {inboxItems.filter(i => !i.isRead).length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setMemberSubTab('mails')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'mails'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>My Mails</span>
                </button>

                <button
                  onClick={() => setMemberSubTab('courses')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'courses'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>My Courses</span>
                </button>

                <button
                  onClick={() => setMemberSubTab('coach')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'coach'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>My Coach (AI Engine)</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-sky-100 text-sky-800">
                    NEW
                  </span>
                </button>

                <button
                  onClick={() => setMemberSubTab('certificates')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'certificates'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>My Certificates</span>
                </button>

                <button
                  onClick={() => setMemberSubTab('contracts')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'contracts'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>My Contract</span>
                </button>

                <button
                  onClick={() => setMemberSubTab('projects')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'projects'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>My Projects</span>
                </button>

                <button
                  onClick={() => setMemberSubTab('billing')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    memberSubTab === 'billing'
                      ? 'bg-[#0072bc] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Receipt className="w-4 h-4" />
                  <span>Monthly Billing & Invoices</span>
                </button>
              </div>
            </div>

            {/* SUB-TAB CONTENT: MY INBOX */}
            {memberSubTab === 'inbox' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Inbox className="w-4 h-4 text-[#0072bc]" />
                        <span>My Inbox: Official Letters, Instructions & Circulars</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Official notifications, ministerial instructions, and circulars delivered directly from <span className="font-mono text-slate-700">ppp@pppunion.org</span>.
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-[#0072bc] border border-sky-200 w-fit">
                      {inboxItems.length} Official Letters on File
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 mt-4 space-y-4">
                    {inboxItems.map((item) => (
                      <div key={item.id} className="pt-4 first:pt-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 font-mono">
                              Ref: {item.referenceNumber}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#0072bc]">
                              {item.category}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.date}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-slate-500 font-mono">
                            Sender: {item.sender}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                          {item.content}
                        </p>

                        {item.attachmentName && (
                          <div className="mt-3 flex items-center gap-2 text-xs">
                            <span className="text-slate-400 text-[11px] font-semibold">Official Attachment:</span>
                            <a
                              href="#download-attachment"
                              onClick={(e) => {
                                e.preventDefault();
                                alert(`Downloading official authenticated document: ${item.attachmentName}`);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0072bc] font-semibold border border-sky-200 transition-colors cursor-pointer"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>{item.attachmentName}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY MAILS */}
            {memberSubTab === 'mails' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#0072bc]" />
                        <span>My Mails: Direct Contact with Administration & VIP Network</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Send and receive direct communications with PPP Union Administration (<span className="font-mono text-slate-700">members@pppunion.org</span>).
                        {activeMember.tier === 'vip' ? (
                          <span className="text-emerald-700 font-bold ml-1">
                            · VIP Member Privilege Active: Direct communication with other VIP members worldwide enabled.
                          </span>
                        ) : (
                          <span className="text-slate-500 ml-1">
                            (VIP members also enjoy peer-to-peer sovereign messaging).
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsComposingMail(true)}
                      className="px-4 py-2 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs w-fit"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Compose New Message</span>
                    </button>
                  </div>

                  {/* Mail Compose Box Modal/Section */}
                  {isComposingMail && (
                    <form onSubmit={handleSendMail} className="mt-4 p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs text-[#1b365d] uppercase tracking-wider">
                          New Secure Communication
                        </h4>
                        <button
                          type="button"
                          onClick={() => setIsComposingMail(false)}
                          className="text-xs text-slate-500 hover:text-slate-800"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Recipient Destination:
                          </label>
                          <select
                            value={mailRecipientType}
                            onChange={(e) => setMailRecipientType(e.target.value as any)}
                            className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                          >
                            <option value="administration">PPP Union Administration (members@pppunion.org / ppp@pppunion.org)</option>
                            {activeMember.tier === 'vip' && (
                              <option value="vip_member">VIP Member Sovereign Exchange Network</option>
                            )}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 mb-1">
                            Subject:
                          </label>
                          <input
                            type="text"
                            value={mailSubject}
                            onChange={(e) => setMailSubject(e.target.value)}
                            placeholder="Enter subject inquiry or project reference..."
                            className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Message Body:
                        </label>
                        <textarea
                          rows={4}
                          value={mailBody}
                          onChange={(e) => setMailBody(e.target.value)}
                          placeholder="Type your official inquiry, project documentation request, or VIP co-financing proposal..."
                          className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg"
                          required
                        />
                      </div>

                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setIsComposingMail(false)}
                          className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold"
                        >
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold flex items-center gap-1 shadow-xs"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Secure Mail</span>
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Message History List */}
                  <div className="space-y-3 mt-4">
                    {mailMessages.map((msg) => (
                      <div key={msg.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900">{msg.senderName}</span>
                            <span className="text-[10px] text-slate-500 font-mono">({msg.senderEmail})</span>
                            {msg.recipientType === 'vip_member' && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-amber-100 text-amber-800">
                                VIP PEER NETWORK
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400">{msg.timestamp}</span>
                        </div>
                        <div className="font-bold text-slate-800 text-xs mb-1">
                          Subject: {msg.subject}
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {msg.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY COURSES */}
            {memberSubTab === 'courses' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#0072bc]" />
                        <span>My Courses: Monthly Executive Lectures & Curriculum</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Each month, members receive certified executive lectures on Public-Private Partnerships, concession finance, and 17-SDGs governance.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {courses.map((course) => (
                      <div key={course.id} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between shadow-xs">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0072bc]/10 text-[#0072bc]">
                              {course.month}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              course.status === 'Completed'
                                ? 'bg-emerald-100 text-emerald-800'
                                : course.status === 'Available'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-200 text-slate-700'
                            }`}>
                              {course.status}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                            {course.title}
                          </h4>

                          <p className="text-xs text-slate-500 mb-3 font-medium">
                            Instructor: {course.instructor} · {course.durationHours}
                          </p>

                          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                            {course.description}
                          </p>

                          <div className="mb-4">
                            <div className="text-[11px] font-bold text-slate-700 mb-1 flex items-center justify-between">
                              <span>Progress</span>
                              <span>{course.completionProgress}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-[#0072bc] h-2 rounded-full transition-all"
                                style={{ width: `${course.completionProgress}%` }}
                              />
                            </div>
                          </div>

                          <div className="space-y-1 text-xs text-slate-600 mb-4">
                            <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block mb-1">
                              Syllabus Modules:
                            </span>
                            {course.syllabus.map((m, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{m}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200">
                          <button
                            onClick={() => alert(`Accessing Monthly Lecture Materials: ${course.lectureNotesPdf}`)}
                            className="w-full py-2 px-3 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Lecture Notes & Video</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY COACH (AI KNOWLEDGE ENGINE) */}
            {memberSubTab === 'coach' && (
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200">
                  <div className="mb-4 pb-3 border-b border-slate-200">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-500" />
                      <span>My Coach: PPP Union AI & Global Knowledge Engine</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Connected to authoritative international data on Business, 17-SDGs, and PPP Concessions. Use this search and research engine for project feasibility, legal benchmarking, and executive advisory.
                    </p>
                  </div>
                  <PPPUnionCoach />
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY CERTIFICATES */}
            {memberSubTab === 'certificates' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#0072bc]" />
                        <span>My Certificates & Official Awards</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Official certificates, accreditations, and awards granted to {activeMember.fullName} and {activeMember.entityName}.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-5 border-2 border-slate-200 flex flex-col justify-between shadow-xs relative">
                        <div className="border-b border-slate-100 pb-3 mb-3">
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                            <span>SN: {cert.serialNumber}</span>
                            <span className="px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                              {cert.category}
                            </span>
                          </div>
                          <h4 className="font-black text-slate-900 text-sm leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-[11px] text-[#0072bc] font-semibold mt-1">
                            {cert.authority}
                          </p>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {cert.description}
                        </p>

                        <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                          <div className="text-[10px] text-slate-500">
                            <div>Issued: <span className="font-semibold text-slate-700">{cert.issuedDate}</span></div>
                            <div>Valid until: <span className="font-semibold text-slate-700">{cert.expiryDate}</span></div>
                          </div>
                          <button
                            onClick={() => alert(`Downloading verified PDF Certificate: ${cert.serialNumber}`)}
                            className="px-3 py-1.5 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY CONTRACT */}
            {memberSubTab === 'contracts' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#0072bc]" />
                        <span>My Contract: Member Concession Dossiers & Pacts</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Concession agreements, status (Ongoing, Completed, Declined, Under Review), funding sources, and accredited Facilitator details.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-5">
                    {contracts.map((con) => (
                      <div key={con.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800 font-mono">
                              {con.contractNumber}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800">
                              {con.concessionModel}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                              con.status === 'ongoing'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : con.status === 'completed'
                                ? 'bg-blue-100 text-blue-800 border border-blue-300'
                                : con.status === 'under_review'
                                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                : 'bg-rose-100 text-rose-800 border border-rose-300'
                            }`}>
                              Status: {con.status.replace('_', ' ')}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-[#0072bc]">
                            Contract Value: {con.contractValue}
                          </span>
                        </div>

                        <h4 className="font-bold text-slate-900 text-sm mb-2">
                          {con.title}
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-white p-3 rounded-lg border border-slate-200 text-xs mb-3">
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block">Counterparty:</span>
                            <span className="font-medium text-slate-800">{con.counterparty}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block">Source of Funding:</span>
                            <span className="font-medium text-slate-800">{con.sourceOfFunding}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block">Accredited Facilitator:</span>
                            <span className="font-medium text-slate-800">{con.accreditedFacilitator}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase block">Concession Term:</span>
                            <span className="font-medium text-slate-800">{con.termYears}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {con.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MY PROJECTS */}
            {memberSubTab === 'projects' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-[#0072bc]" />
                        <span>My Projects: Non-Sanctionable PPP Infrastructure Portfolios</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Projects strictly vetted to ensure support of PPP Union, international public law, and UN A/RES/70/1 non-sanctionability.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    {projects.map((prj) => (
                      <div key={prj.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-200 text-slate-800">
                              {prj.projectCode}
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                              {prj.status}
                            </span>
                          </div>

                          <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                            {prj.projectName}
                          </h4>

                          <div className="space-y-1 text-xs text-slate-600 mb-3">
                            <div>Sector: <span className="font-semibold text-slate-800">{prj.sector}</span></div>
                            <div>Host Sovereign Country: <span className="font-semibold text-slate-800">{prj.hostCountry}</span></div>
                            <div>Project CAPEX: <span className="font-bold text-[#0072bc]">{prj.capexAmount}</span></div>
                          </div>

                          {/* SDGs */}
                          <div className="mb-3">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Aligned 17 SDGs:</span>
                            <div className="flex items-center gap-1 flex-wrap">
                              {prj.sdgGoals.map((g) => (
                                <span key={g} className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-[#0072bc] text-white">
                                  Goal {g}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Non-Sanctionable Badge */}
                          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-bold leading-tight">{prj.nonSanctionableStatus}</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                          Assigned Facilitator: <span className="font-semibold text-slate-700">{prj.facilitatorAssigned}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-TAB CONTENT: MONTHLY BILLING & INVOICES */}
            {memberSubTab === 'billing' && (
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-[#0072bc]" />
                        <span>Monthly Service Billing Statements</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Automatic monthly billing statements displaying to both the member and <span className="font-mono text-slate-700">ppp@pppunion.org</span>.
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Current Membership Tier Rate:</span>
                      <span className="text-lg font-black text-[#0072bc]">
                        €{activeMember.monthlyFee} / Month
                      </span>
                    </div>
                  </div>

                  {/* Pricing Schedule Reference */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    <div className={`p-3.5 rounded-xl border ${activeMember.tier === 'green' ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'} text-xs`}>
                      <div className="font-bold text-slate-800">A - Green Member</div>
                      <div className="text-sm font-black text-emerald-700 mt-0.5">€100 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Standard member access to courses and verified library.</div>
                    </div>
                    <div className={`p-3.5 rounded-xl border ${activeMember.tier === 'golden' ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200'} text-xs`}>
                      <div className="font-bold text-slate-800">B - Golden Member</div>
                      <div className="text-sm font-black text-amber-700 mt-0.5">€500 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Concession vaults, dedicated facilitator, monthly masterclasses.</div>
                    </div>
                    <div className={`p-3.5 rounded-xl border ${activeMember.tier === 'vip' ? 'bg-blue-50 border-[#0072bc]' : 'bg-slate-50 border-slate-200'} text-xs`}>
                      <div className="font-bold text-slate-800">C - VIP Member</div>
                      <div className="text-sm font-black text-[#0072bc] mt-0.5">€1,000 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Sovereign peer network, un-sanctionable direct syndication.</div>
                    </div>
                  </div>

                  {/* Invoices Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                      <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px]">
                        <tr>
                          <th className="p-3">Invoice Number</th>
                          <th className="p-3">Month</th>
                          <th className="p-3">Issue Date</th>
                          <th className="p-3">Amount</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Authorization</th>
                          <th className="p-3 text-right">Receipt</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {invoices.map((inv) => (
                          <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                            <td className="p-3 font-mono font-bold text-slate-900">{inv.invoiceNumber}</td>
                            <td className="p-3 text-slate-700">{inv.billingMonth}</td>
                            <td className="p-3 text-slate-500">{inv.issueDate}</td>
                            <td className="p-3 font-bold text-slate-900">€{inv.amountEur.toLocaleString()}</td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                {inv.status}
                              </span>
                            </td>
                            <td className="p-3 font-mono text-[11px] text-slate-600">{inv.authorizedBy}</td>
                            <td className="p-3 text-right">
                              <button
                                onClick={() => alert(`Downloading verified VAT invoice receipt: ${inv.invoiceNumber}`)}
                                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] transition-colors cursor-pointer"
                              >
                                PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            VIEW 2: NEW APPLICANT KYC/CIS REGISTRATION FORM
            ========================================================================= */}
        {activeMainView === 'register' && (
          <div className="space-y-6">
            {regSuccessDossier ? (
              <div className="bg-white p-8 rounded-2xl border border-emerald-300 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">KYC/CIS Application Successfully Dispatched</h2>
                <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                  Your formal registration dossier (Reference: <span className="font-mono font-bold text-emerald-800">{regSuccessDossier}</span>) has been securely encrypted and delivered to the Executive Approval Directorate at <span className="font-bold text-slate-900">members@pppunion.org</span>.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-xl mx-auto text-xs text-left space-y-2 text-slate-700">
                  <div className="font-bold text-slate-900 mb-1">Next Executive Steps:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Background anti-sanction audit against UN & INTERPOL registries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verification of BBB-ranked bank guarantee or VIP member endorsement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Automated SMS and email dispatch with Member ID and credentials upon approval</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setRegSuccessDossier(null);
                      setActiveMainView('admin');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    View in Admin Review Desk (members@pppunion.org)
                  </button>
                  <button
                    onClick={() => setActiveMainView('portal')}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Return to Member Portal
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-slate-200 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-[#0072bc] mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Official Membership & Accreditation Dossier
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b365d]">
                    Standard Member Registration & KYC/CIS Submission
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Complete all 11 required fields. Upon submission, your verified documents and bank guarantee will be transmitted to <span className="font-mono font-bold text-slate-800">members@pppunion.org</span> for formal review.
                  </p>
                </div>

                {/* Notice for already accredited members */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs">
                  <div className="flex items-center gap-2 text-sky-900 font-medium">
                    <User className="w-4 h-4 text-[#0072bc] shrink-0" />
                    <span>Already an accredited member with an assigned Member ID?</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMainView('login');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer shrink-0"
                  >
                    Go to Members Login
                  </button>
                </div>

                {/* Section 1: Membership Tier Selection & Monthly Fee */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                    Select Desired Membership Tier & Monthly Service Schedule:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      regForm.tier === 'green' ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <input
                        type="radio"
                        name="membershipTier"
                        value="green"
                        checked={regForm.tier === 'green'}
                        onChange={() => setRegForm(prev => ({ ...prev, tier: 'green' }))}
                        className="sr-only"
                      />
                      <div className="font-black text-slate-900 text-sm">A - Green Member</div>
                      <div className="text-xs text-emerald-700 font-bold mt-0.5">€100 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Guarantor requirement: Minimum €500,000 security guarantee.</div>
                    </label>

                    <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      regForm.tier === 'golden' ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-400' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <input
                        type="radio"
                        name="membershipTier"
                        value="golden"
                        checked={regForm.tier === 'golden'}
                        onChange={() => setRegForm(prev => ({ ...prev, tier: 'golden' }))}
                        className="sr-only"
                      />
                      <div className="font-black text-slate-900 text-sm">B - Golden Member</div>
                      <div className="text-xs text-amber-700 font-bold mt-0.5">€500 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Guarantor requirement: Minimum €2 Million security guarantee.</div>
                    </label>

                    <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      regForm.tier === 'vip' ? 'bg-blue-50 border-[#0072bc] ring-2 ring-[#0072bc]' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <input
                        type="radio"
                        name="membershipTier"
                        value="vip"
                        checked={regForm.tier === 'vip'}
                        onChange={() => setRegForm(prev => ({ ...prev, tier: 'vip' }))}
                        className="sr-only"
                      />
                      <div className="font-black text-slate-900 text-sm">C - VIP Member</div>
                      <div className="text-xs text-[#0072bc] font-bold mt-0.5">€1,000 / Month</div>
                      <div className="text-[11px] text-slate-500 mt-1">Guarantor requirement: €12 Million Euro/USD security guarantee for 2 years.</div>
                    </label>
                  </div>
                </div>

                {/* Section 2: General KYC / CIS Information */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0072bc] text-white text-xs flex items-center justify-center font-bold">1</span>
                    General Correct Information (Standard KYC/CIS)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Applicant Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Alexandre Dupont"
                        value={regForm.fullName || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Designation / Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Managing Partner / CEO"
                        value={regForm.designation || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, designation: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization Legal Entity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Global Infra Concessions SA"
                        value={regForm.companyName || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, companyName: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Registration / Commercial License No *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. CHE-492.102.839"
                        value={regForm.registrationNumber || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, registrationNumber: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Country of Sovereign Jurisdiction *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Switzerland / UAE / France"
                        value={regForm.country || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, country: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official Website URL</label>
                      <input
                        type="url"
                        placeholder="https://company.com"
                        value={regForm.website || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, website: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Required Uploads (License & Passport) */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0072bc] text-white text-xs flex items-center justify-center font-bold">2 & 3</span>
                    Company License & Signatory Passport Documents
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-center">
                      <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <div className="text-xs font-bold text-slate-800">2 - Company or Organization License *</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Commercial register, trade license, or charter (PDF/JPG)</p>
                      <label className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setUploadedFiles(prev => ({ ...prev, license: e.target.files![0].name }));
                            }
                          }}
                        />
                        {uploadedFiles.license ? `Attached: ${uploadedFiles.license}` : 'Browse License File'}
                      </label>
                    </div>

                    <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-center">
                      <User className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <div className="text-xs font-bold text-slate-800">3 - Passport of Authorized Signatory *</div>
                      <p className="text-[11px] text-slate-500 mt-0.5">Clear copy of valid passport bio page</p>
                      <label className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setUploadedFiles(prev => ({ ...prev, passport: e.target.files![0].name }));
                            }
                          }}
                        />
                        {uploadedFiles.passport ? `Attached: ${uploadedFiles.passport}` : 'Browse Passport File'}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Section 4: Projects details */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0072bc] text-white text-xs flex items-center justify-center font-bold">4</span>
                    Project Details & Target Infrastructure Objectives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Project Sector *</label>
                      <select
                        value={regForm.projectSector}
                        onChange={(e) => setRegForm(prev => ({ ...prev, projectSector: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      >
                        <option value="Clean Energy & Desalination">Clean Energy & Desalination (SDG 6 & 7)</option>
                        <option value="Sustainable Rail & Urban Transit">Sustainable Rail & Urban Transit (SDG 9 & 11)</option>
                        <option value="Healthcare & Maternal Hospitals">Healthcare & Maternal Hospitals (SDG 3)</option>
                        <option value="Municipal Waste-to-Value Circular">Municipal Waste-to-Value Circular (SDG 12 & 13)</option>
                        <option value="Digital Infrastructure & Connectivity">Digital Infrastructure & Connectivity (SDG 9)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Host Sovereign Country *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. United Arab Emirates, Kazakhstan, etc."
                        value={regForm.targetCountry || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, targetCountry: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated CAPEX / Budget</label>
                      <input
                        type="text"
                        placeholder="e.g. €85,000,000"
                        value={regForm.estimatedBudget || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, estimatedBudget: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Project Summary / Desired PPP Support *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Outline the concession structure (BOT/DBFOM), intended community impact, and required facilitation from PPP Union..."
                      value={regForm.projectDetails || ''}
                      onChange={(e) => setRegForm(prev => ({ ...prev, projectDetails: e.target.value }))}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                    />
                  </div>
                </div>

                {/* Section 5: Verified Contact, Address & Utility Bills */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-[#0072bc] text-white text-xs flex items-center justify-center font-bold">5 to 9</span>
                    Verified Mobile, Email, Office Address & Utility Authentication
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        6 - Correct Mobile Number for SMS *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+41 79 000 0000"
                        value={regForm.mobileNumber || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, mobileNumber: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">Used for automated dispatch alerts</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        7 - Correct & Verified Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="official@company.com"
                        value={regForm.email || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                      <span className="text-[10px] text-slate-400 block mt-0.5">For formal credentials and invoices</span>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        8 - Verified Office Address *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Street, Suite, City, Postal Code, Country"
                        value={regForm.officeAddress || ''}
                        onChange={(e) => setRegForm(prev => ({ ...prev, officeAddress: e.target.value }))}
                        className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0072bc]"
                      />
                    </div>
                  </div>

                  <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        9 & 10 - Electricity, Water and Other Utility Bills to Authenticate Office Address *
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Upload municipal utility bill issued within the last 90 days matching the physical office address.
                      </p>
                    </div>
                    <label className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer shrink-0">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            setUploadedFiles(prev => ({ ...prev, utilityBill: e.target.files![0].name }));
                          }
                        }}
                      />
                      {uploadedFiles.utilityBill ? `Attached: ${uploadedFiles.utilityBill}` : 'Attach Utility Bill'}
                    </label>
                  </div>
                </div>

                {/* Section 10: Mandatory Guarantor & Security Guarantee Rules */}
                <div className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-5 space-y-4">
                  <div>
                    <h3 className="text-sm font-black text-amber-950 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-700" />
                      11 - Who is the Guarantor? (Mandatory Security Guarantee Terms)
                    </h3>
                    <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200 mt-2 text-xs text-amber-950 leading-relaxed font-medium">
                      <p className="font-bold text-amber-900 mb-1">
                        Any new applicant must have a VIP member guarantor, otherwise he/she must provide the below guarantees to guarantee his legal activities:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-700 mt-2">
                        <li><strong>A) Green Member:</strong> Minimum €500,000 Euro guarantee</li>
                        <li><strong>B) Golden Member:</strong> Minimum €2 Million Euro guarantee</li>
                        <li><strong>C) VIP Member:</strong> €12 Million Euro / USD security guarantee for 2 years</li>
                      </ul>
                      <div className="mt-3 p-2.5 rounded-lg bg-amber-100/70 border border-amber-300 text-amber-900 font-bold text-[11px] flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>CRUCIAL RULE: No cash, no deposit will be accepted from any client. The Guarantee must be issued from any BBB ranked bank of a non-sanctioned country.</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Guarantor Type *</label>
                      <select
                        value={regForm.guarantorType}
                        onChange={(e) => setRegForm(prev => ({ ...prev, guarantorType: e.target.value as any }))}
                        className="w-full text-xs p-2.5 bg-white border border-amber-300 rounded-lg focus:outline-none"
                      >
                        <option value="bank_guarantee">Autonomous Bank Guarantee (BBB Ranked Bank)</option>
                        <option value="vip_guarantor">Endorsed by Existing VIP Member Guarantor</option>
                      </select>
                    </div>

                    {regForm.guarantorType === 'vip_guarantor' ? (
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">VIP Member Guarantor Name & ID *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Tariq Al-Mansoor (PU-VIP-2026-0889)"
                          value={regForm.vipGuarantorName || ''}
                          onChange={(e) => setRegForm(prev => ({ ...prev, vipGuarantorName: e.target.value }))}
                          className="w-full text-xs p-2.5 bg-white border border-amber-300 rounded-lg focus:outline-none"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">Issuing BBB Ranked Bank Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. First Abu Dhabi Bank / Erste Group / BNP Paribas"
                          value={regForm.bankName || ''}
                          onChange={(e) => setRegForm(prev => ({ ...prev, bankName: e.target.value }))}
                          className="w-full text-xs p-2.5 bg-white border border-amber-300 rounded-lg focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 11: Mandatory Anti-Sanction & Compliance Policy */}
                <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-sm uppercase tracking-wider text-white">
                      Strict Compliance & Anti-Sanction Policy Declaration
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                    A member cannot participate if he/she has been blacklisted before, sanctioned by the United Nations, blacklisted in any PPP project by any member country, or involved in any illegal business, human trafficking / smuggling, or illegal immigration, or blacklisted by member countries' banking systems. Furthermore, any project will NOT be supported by PPP Union which is linked to politicians, military/army, or blacklisted companies or persons. In case a member is involved in such prohibited activities, the PPP Union reserves full legal right to blacklist them immediately without prior notification.
                  </p>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={regForm.accepted17SDGs}
                        onChange={(e) => setRegForm(prev => ({ ...prev, accepted17SDGs: e.target.checked }))}
                        className="mt-0.5 rounded border-slate-600 text-[#0072bc] focus:ring-0"
                      />
                      <span>
                        <strong>5 - Formal Acceptance of 17 SDGs:</strong> I solemnly and honestly accept the United Nations 17 Sustainable Development Goals and pledge ethical participation in sustainable world globalization.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 text-xs text-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={regForm.antiSanctionAgreement}
                        onChange={(e) => setRegForm(prev => ({ ...prev, antiSanctionAgreement: e.target.checked }))}
                        className="mt-0.5 rounded border-slate-600 text-[#0072bc] focus:ring-0"
                      />
                      <span>
                        I certify that neither the applicant, company, nor shareholders are sanctioned by UN/EU/US or blacklisted in banking networks, nor connected to human trafficking or illegal activities.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 text-xs text-slate-200 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={regForm.blacklistAuthorizationAgreement}
                        onChange={(e) => setRegForm(prev => ({ ...prev, blacklistAuthorizationAgreement: e.target.checked }))}
                        className="mt-0.5 rounded border-slate-600 text-[#0072bc] focus:ring-0"
                      />
                      <span>
                        I acknowledge and authorize that any linkage to politicians, armed forces, or prohibited entities will cause immediate blacklisting without prior notification.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit to members@pppunion.org */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveMainView('login');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                    >
                      ← Back to Members Login
                    </button>
                    <div className="text-xs text-slate-500 hidden sm:block">
                      Submission recipient: <span className="font-mono font-bold text-slate-800">members@pppunion.org</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Dossier to members@pppunion.org</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* =========================================================================
            VIEW 3: ADMINISTRATION REVIEW DESK (members@pppunion.org / ppp@pppunion.org)
            ========================================================================= */}
        {activeMainView === 'admin' && (
          <div className="space-y-6">
            {/* Admin Desk Header */}
            <div className="bg-amber-900 text-white p-5 rounded-2xl shadow-sm border border-amber-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/30 text-amber-200 border border-amber-400/40 mb-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-300" />
                  Core Executive Directorate
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Administration Approval Desk: members@pppunion.org
                </h2>
                <p className="text-xs text-amber-100/90 mt-0.5">
                  Authorize applicant KYC dossiers, manage member boxes, and monitor automated SMS & Email dispatches.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAdminDepositModal(true)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Deposit Item in Member Box</span>
                </button>
              </div>
            </div>

            {/* Section A: Pending Applicant Approvals */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  <span>Pending Applicant Approvals ({applicants.filter(a => a.status === 'pending_review').length})</span>
                </h3>
                <span className="text-xs text-slate-500">Destination: members@pppunion.org</span>
              </div>

              {applicants.length === 0 ? (
                <p className="text-xs text-slate-500 py-4 text-center">No applicants in queue.</p>
              ) : (
                <div className="space-y-4">
                  {applicants.map((app) => (
                    <div
                      key={app.id}
                      className={`p-4 rounded-xl border transition-all ${
                        app.status === 'approved'
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : app.status === 'rejected'
                          ? 'bg-rose-50/50 border-rose-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-xs text-slate-900">{app.id}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                            app.tier === 'vip' ? 'bg-amber-400 text-slate-950' : app.tier === 'golden' ? 'bg-amber-200 text-amber-950' : 'bg-emerald-200 text-emerald-950'
                          }`}>
                            {app.tier}
                          </span>
                          <span className="text-xs text-slate-500">{app.submissionDate}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            app.status === 'approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : app.status === 'rejected'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {app.status.toUpperCase()}
                          </span>
                        </div>

                        {app.status === 'pending_review' && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleApproveApplicant(app)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Approve & Activate Account</span>
                            </button>
                            <button
                              onClick={() => {
                                const reason = prompt('State official rejection grounds for record:') || 'Failed banking guarantee criteria';
                                handleRejectApplicant(app, reason);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-1 shadow-xs cursor-pointer"
                            >
                              <span>Reject</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white p-3 rounded-lg border border-slate-200 text-xs mb-3">
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Applicant:</span>
                          <span className="font-bold text-slate-900">{app.fullName}</span> ({app.designation})
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Entity / Country:</span>
                          <span className="font-medium text-slate-800">{app.companyName} · {app.country}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Guarantor / Bank:</span>
                          <span className="font-medium text-amber-900 font-mono text-[11px]">
                            {app.bankName || app.vipGuarantorName} ({app.bankGuaranteeAmount})
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase block">Contact / Verified Phone:</span>
                          <span className="font-mono text-slate-700">{app.mobileNumber} · {app.email}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 bg-white/70 p-3 rounded-lg border border-slate-200 space-y-1">
                        <div>
                          <strong>Project Objective:</strong> {app.projectDetails}
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
                          <span>Attached License: <strong className="text-slate-700">{app.companyLicenseName}</strong></span>
                          <span>Signatory Passport: <strong className="text-slate-700">{app.passportDocumentName}</strong></span>
                          <span>Utility Authentication: <strong className="text-slate-700">{app.utilityBillDocumentName}</strong></span>
                        </div>
                      </div>

                      {app.adminRemarks && (
                        <div className="mt-2 text-xs text-rose-700 font-semibold">
                          Rejection Remarks: {app.adminRemarks}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Section B: Automated SMS & Email Delivery Logs */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xs border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-[#0072bc]" />
                  <span>Automated SMS & Email Dispatch Engine Logs</span>
                </h3>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Dispatch Gateway
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px]">
                    <tr>
                      <th className="p-2.5">Timestamp</th>
                      <th className="p-2.5">Member ID</th>
                      <th className="p-2.5">Channel</th>
                      <th className="p-2.5">Recipient</th>
                      <th className="p-2.5">Trigger Event</th>
                      <th className="p-2.5">Message Content</th>
                      <th className="p-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {notificationLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-2.5 text-slate-500 font-mono text-[11px] whitespace-nowrap">{log.timestamp}</td>
                        <td className="p-2.5 font-mono font-bold text-slate-800 whitespace-nowrap">{log.memberId}</td>
                        <td className="p-2.5">
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800">
                            {log.channel}
                          </span>
                        </td>
                        <td className="p-2.5 text-slate-700 font-mono text-[11px] whitespace-nowrap">
                          {log.recipientPhone}
                        </td>
                        <td className="p-2.5 font-semibold text-slate-800">{log.triggerEvent}</td>
                        <td className="p-2.5 text-slate-600 max-w-xs truncate">{log.messagePreview}</td>
                        <td className="p-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {log.deliveryStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Admin Depositing Item in Member Box */}
        {showAdminDepositModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-base text-slate-900">
                    Deposit Item in Member Box (ppp@pppunion.org)
                  </h3>
                </div>
                <button
                  onClick={() => setShowAdminDepositModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Member Box *</label>
                  <select
                    value={depositTargetBox}
                    onChange={(e) => setDepositTargetBox(e.target.value as any)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-semibold text-slate-800"
                  >
                    <option value="inbox">My Inbox (Official Letter / Instruction / Circular)</option>
                    <option value="courses">My Courses (Assign New Monthly Masterclass)</option>
                    <option value="certificates">My Certificates (Issue Accreditation / Award)</option>
                    <option value="contracts">My Contract (Register Concession Agreement)</option>
                    <option value="projects">My Projects (Approve Non-Sanctionable Project)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Document Title / Instruction Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Q4 Concession Compliance Directive"
                    value={depositTitle}
                    onChange={(e) => setDepositTitle(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Details & Content *</label>
                  <textarea
                    rows={4}
                    placeholder="Enter formal directives, syllabus outline, or contract parameters..."
                    value={depositDetails}
                    onChange={(e) => setDepositDetails(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                  />
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Submitting will automatically send an automated SMS & Email to the member ({activeMember.fullName}) notifying them of the new document.</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowAdminDepositModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-semibold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAdminDepositItem}
                  className="px-5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Deposit & Dispatch Notification</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

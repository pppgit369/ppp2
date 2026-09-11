import React, { useState } from 'react';
import { 
  CheckCircle2, 
  FileText, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Clock, 
  AlertTriangle, 
  Building2, 
  Scale, 
  ChevronRight, 
  Search, 
  Maximize2, 
  X, 
  ExternalLink,
  MessageSquare,
  FileCheck,
  Award,
  BookOpen,
  Eye,
  Sliders,
  Sparkles,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { EditableBox } from '../types';

interface PPPProcessPageProps {
  onNavigate: (href: string) => void;
  onOpenMessenger?: () => void;
  isEditMode?: boolean;
  onEditBox?: (box: EditableBox) => void;
}

export const PPPProcessPage: React.FC<PPPProcessPageProps> = ({
  onNavigate,
  onOpenMessenger,
  isEditMode,
  onEditBox,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | '4step' | 'solicited' | 'escap' | 'pfi' | 'charts'>('all');
  const [modalImage, setModalImage] = useState<{ url: string; title: string; subtitle: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  // Official charts extracted from https://pppunion.org/ppp-process/
  const officialCharts = [
    {
      id: 'bot-process-chart',
      title: 'Solicited PPP BOT Project Process',
      subtitle: 'Build-Operate-Transfer project governance flowchart and gate approval milestones.',
      url: '/process/ppp-bot-process-chart.png',
      badge: 'Official Flowchart 1',
      description: 'Defines the linear stages for solicited BOT infrastructure, from government pre-submission to tender issuance, concession award, and commercial operations.',
    },
    {
      id: 'escap-process-chart',
      title: 'UN ESCAP Project Implementation Process',
      subtitle: 'United Nations Economic & Social Commission for Asia & the Pacific structured lifecycle.',
      url: '/process/escap-process-chart.jpg',
      badge: 'UN ESCAP Model',
      description: 'Standardized 6-stage institutional framework ensuring transparent inter-ministerial approvals, credit ratings, and streamlined dispute resolution.',
    },
    {
      id: 'lifecycle-flowchart',
      title: 'PPP Process Lifecycle Flowchart',
      subtitle: 'Comprehensive lifecycle, risk allocation, and SPV operational structure.',
      url: '/process/ppp-process-flowchart.jpg',
      badge: 'Master Blueprint',
      description: 'End-to-end operational blueprint tracking due diligence, legal facility agreements, SPV capital funding, and long-term asset handback.',
    },
  ];

  // The 4-Step General Procedures between Two Private Entities (Official pppunion.org text)
  const privateEntitySteps = [
    {
      step: 1,
      title: 'Step 1: Submission, Due Diligence & MOU',
      subtitle: 'Initial intake, bankability appraisal, and non-binding framework',
      badge: 'Foundation',
      bullets: [
        'Client submits project documents, Letter of Intent (LOI), Bank Comfort Letter / Bank Reference Letter (BCL/BRL), and Company Information Sheet / Know Your Customer (CIS/KYC) for Due Diligence (DD).',
        'Upon successful Due Diligence, selection of suitable PPP model.',
        'Upon agreeing on a structure, defining the fundamental terms and conditions in a formal Memorandum of Understanding (MOU).',
        'Upon signing of MOU, the applicant and Facilitators enter the 2nd step.'
      ],
      requiredDocs: ['Letter of Intent (LOI)', 'Bank Comfort Letter (BCL/BRL)', 'CIS / KYC Package', 'Feasibility Summary', 'Non-Solicitation Letter']
    },
    {
      step: 2,
      title: 'Step 2: Collateral, PPP Facility Agreement & Funding Confirmation',
      subtitle: 'Legal drafting, insurance underwriting, and financial commitment',
      badge: 'Financial Close',
      bullets: [
        'The applicant provides, deposits, or places the agreed collateral with designated custodians.',
        '(a) Preparing a detailed PPP Facility Agreement according to the main MOU through international lawyers or utilizing standard PPP Facility Agreement templates.',
        '(b) Securing comprehensive project insurance underwriting and liability coverage.',
        '(c) Formal PPP Facility Agreement legal approval from accredited legal counsels.',
        '(d) Formal PPP Facility Agreement approval from facilitator financial sources and funding syndicates.',
        '(e) Official project funding confirmation issued according to the terms of the PPP Facility Agreement.',
        'The applicant releases or provides agreed assets/credit to facilitator according to contractual milestones.'
      ],
      requiredDocs: ['Agreed Collateral Instruments', 'PPP Facility Agreement (Executed)', 'Legal Opinion Letters', 'Project Insurance Policies', 'Funding Confirmation Letter']
    },
    {
      step: 3,
      title: 'Step 3: SPV Account Setup & Specialized Management Team',
      subtitle: 'Governance entity formation, smart project tools, and contractor onboarding',
      badge: 'Mobilization',
      bullets: [
        'Consisting of a qualified international team to execute the essential preparatory setup:',
        '(a) Completion of design, procurement, technical, and project management documents, or deployment of smart project management tracking software.',
        '(b) Official opening and incorporation of the Special Purpose Vehicle (SPV) project bank account.',
        '(c) Vetting and hiring the qualified developer / EPC general contractor.',
        '(d) Appointing the independent engineering monitoring, quality control, and quantity verification team.'
      ],
      requiredDocs: ['SPV Corporate Certificate', 'SPV Designated Bank Account', 'Lump-Sum EPC Contract', 'Independent Engineer Appointment', 'Smart Tracking Plan']
    },
    {
      step: 4,
      title: 'Step 4: Disbursal, Turnkey Development & Concession Operations',
      subtitle: 'Capital drawdowns, commercial operations, and statutory profit distribution',
      badge: 'Execution & Ops',
      bullets: [
        'Commencement of planned capital disbursements into the project SPV account.',
        'Starting turnkey project execution, site construction, and infrastructure development under independent audit oversight.',
        'Operating and maintaining the project asset according to all terms, performance standards, and conditions of the Facility Agreement.',
        'Sharing asset ownership and net operating profits strictly according to the agreed covenants and institutional terms.'
      ],
      requiredDocs: ['Drawdown Certifications', 'Independent Certifier Reports', 'Commercial Operation Certificate (COD)', 'Quarterly Audit Statements', 'Revenue Distribution Ledgers']
    }
  ];

  // UK Private Finance Initiative (PFI) 10-Stage Programme (Official pppunion.org guidance)
  const ukPfiStages = [
    {
      stage: '01',
      name: 'Initial Planning & Needs Assessment',
      summary: 'Public authority critically assesses service sector needs to identify where infrastructure improvements are imperative and what capital investment is required.'
    },
    {
      stage: '02',
      name: 'Outline Business Case (OBC) & 9 Core Tests',
      summary: 'Comprehensive business plan assessing affordability, Value for Money (VfM) via Public Sector Comparator (PSC) vs PPP reference project, output specifications, risk allocation, market interest, payment mechanisms, and monitoring regimes.'
    },
    {
      stage: '03',
      name: 'Publication of Tender Notice & PQQ',
      summary: 'Official journal tender publication followed by distribution of project information packs and Pre-Qualification Questionnaires (PQQ) to establish technical and financial capacity.'
    },
    {
      stage: '04',
      name: 'Pre-qualification of Bidders',
      summary: 'Transparent evaluation of submitted PQQs and compilation of the formal pre-qualified bidders list with comprehensive justification reports.'
    },
    {
      stage: '05',
      name: 'Shortlisting of Bidders',
      summary: 'Targeted shortlisting phase to select the most qualified, capable consortia prior to issuing developed technical documentation.'
    },
    {
      stage: '06',
      name: 'Invitation to Tender / Negotiate (ITN)',
      summary: 'Shortlisted consortia receive detailed output specifications, performance payment mechanisms, and draft model concession contracts.'
    },
    {
      stage: '07',
      name: 'Evaluation of Bids & Best and Final Offers (BAFO)',
      summary: 'Rigorous appraisal of submitted bids. Two finalists may be invited to submit Best and Final Offers, or preferred bidder is selected directly.'
    },
    {
      stage: '08',
      name: 'Final Business Case (FBC) Approval',
      summary: 'Appointment of preferred bidder alongside a reserve bidder, followed by submission of the Final Business Case for sovereign ministerial approval.'
    },
    {
      stage: '09',
      name: 'Negotiations & Contract Award',
      summary: 'Final commercial negotiations (without altering fundamental risk profiles), leading to Commercial Close and simultaneous Financial Close.'
    },
    {
      stage: '10',
      name: 'Project Implementation & Payment Modalities',
      summary: 'Payments begin after construction completion upon asset readiness. Structured either as user-paid Concessions (tolls) or government Unitary Fees (fixed or shadow tolls).'
    }
  ];

  // UN ESCAP 6-Stage Process (Official pppunion.org details)
  const escapStages = [
    {
      stage: 'Stage 1',
      title: 'Project Identification & In-House Preparatory Arrangements',
      details: [
        '1A. Project identification aligned with national infrastructure priorities.',
        '1B. In-house preparatory arrangements: Conceptual project structure, institutional due diligence (legal/regulatory framework, government policy, inter-department coordination, in-house capacity), project implementation strategy, and setting of project committee(s).',
        '1C. Formal Government approval by designated special body for PPPs.',
        '1D. Appointment of transaction advisor (TOR formulation, competitive selection, and ministerial approval).'
      ]
    },
    {
      stage: 'Stage 2',
      title: 'Project Development and Due Diligence',
      details: [
        'Comprehensive project planning, technical feasibility, and hazard surveys.',
        'Rigorous risk allocation analysis and mitigation structuring.',
        'Detailed financial modeling and Value for Money (VfM) validation.',
        'Designing public support mechanisms, output specifications, and basic contractual terms.',
        'Independent sovereign/corporate credit ratings (where feasible).',
        'Formal Government Approval of preliminary financing plan (Special body, concerned ministries, and central bank).'
      ]
    },
    {
      stage: 'Stage 3',
      title: 'Implementation Arrangement & Pre-Procurement',
      details: [
        'Finalizing implementation arrangements and cross-border project vehicles.',
        'Drafting standard bidding documents (RFP/RFA) and model concession agreements.',
        'Addressing special statutory issues: land acquisition, foreign exchange (FX) hedges, investment promotion incentives.',
        'Establishing bid evaluation criteria and specialized evaluation committees.',
        'Statutory legal approval by state legal office and Ministry of Law.'
      ]
    },
    {
      stage: 'Stage 4',
      title: 'Competitive Procurement & Bid Selection',
      details: [
        'Global market sounding and international investor conferences.',
        'Pre-qualification of international consortia and EPC contractors.',
        'Release of final RFP and output specifications.',
        'Receipt of final technical and financial tenders.',
        'Transparent bid evaluation, scoring, and formal Government Approval (Cabinet / Special Body).'
      ]
    },
    {
      stage: 'Stage 5',
      title: 'Contract Award, Financial Close & Management',
      details: [
        'Contract award, debt syndication, commercial signing, and Financial Close.',
        'Service delivery management and independent engineer oversight.',
        'Contract compliance monitoring and key stakeholder relationship management.',
        'Disciplined renegotiation protocols under strict Cabinet / special body approval if macroeconomic shocks occur.'
      ]
    },
    {
      stage: 'Stage 6',
      title: 'Dispute Resolution & Contract Closure',
      details: [
        'Establishment of an independent dispute resolution process and dedicated technical team.',
        'Clear protocols for ICC, ICSID, or UNCITRAL arbitration to protect sovereign and investor rights.',
        'Orderly asset handback in pristine condition upon concession expiry.'
      ]
    }
  ];

  return (
    <div id="ppp-process-page-container" className="bg-slate-50 min-h-screen text-slate-800">
      {/* 1. Header Banner */}
      <div className="bg-[#0072bc] text-white py-10 sm:py-14 border-b border-sky-400/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sky-200 mb-4">
            <button onClick={() => onNavigate('#home')} className="hover:text-white cursor-pointer transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
            <button onClick={() => onNavigate('#programs')} className="hover:text-white cursor-pointer transition-colors">
              PPP Programs
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-sky-300" />
            <span className="font-bold text-white uppercase tracking-wider">PPP Process</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-300/30 text-sky-100 text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-sky-300" />
                <span>Authoritative Institutional Delivery Blueprint</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                PPP PROCESS & IMPLEMENTATION
              </h1>
              <p className="mt-3 text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl">
                The step-by-step administration, documentation, funding, and execution of Public-Private Partnerships. From project due diligence, LOI, BCL, and MOU to SPV execution, UK PFI models, and UN ESCAP frameworks.
              </p>
            </div>

            {/* Quick Actions & Official Source Info */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://pppunion.org/ppp-process/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#0072bc] rounded-lg text-xs font-bold shadow-md hover:bg-sky-50 transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on PPPUnion.org</span>
              </a>
              {onOpenMessenger && (
                <button
                  onClick={onOpenMessenger}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consult Process Desk</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-12 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto py-2.5 text-xs sm:text-sm font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              Complete Overview
            </button>
            <button
              onClick={() => setActiveTab('4step')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === '4step'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              4-Step Private Procedure
            </button>
            <button
              onClick={() => setActiveTab('solicited')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'solicited'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              Solicited vs Unsolicited
            </button>
            <button
              onClick={() => setActiveTab('escap')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'escap'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              UN ESCAP Stages
            </button>
            <button
              onClick={() => setActiveTab('pfi')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'pfi'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              UK PFI 10-Stage Model
            </button>
            <button
              onClick={() => setActiveTab('charts')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'charts'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0072bc] hover:bg-slate-100'
              }`}
            >
              Official Charts & Diagrams
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 space-y-12">
        {/* Section 1: Definition & Process Fundamentals */}
        {(activeTab === 'all' || activeTab === 'solicited') && (
          <section id="process-definitions" className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-widest">
                  Foundational Principles
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  What Does the PPP Process Mean?
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4 text-slate-700 text-sm leading-relaxed">
                  <div className="p-4 bg-sky-50/80 border-l-4 border-[#0072bc] rounded-r-lg">
                    <p className="font-semibold text-slate-900 text-base">
                      “The PPP process involves determining the step-by-step administration, documentation, funding, and execution of the project according to the selected model of PPP.”
                    </p>
                    <span className="text-xs text-[#0072bc] font-bold mt-2 block">
                      — Official PPP Union Statutory Definition
                    </span>
                  </div>

                  <p>
                    The PPP process and procedures for each project depend strictly upon its contractual model (BOT, BOOT, DBFO, Concession, or Joint Venture). However, international practice dictates standard, disciplined execution gateways followed by international development organizations, multilateral banks, and sovereign entities.
                  </p>
                  <p>
                    Generally, the process is categorized into two fundamental systems: <strong>Solicited</strong> and <strong>Unsolicited</strong> processes.
                  </p>
                </div>

                {/* Quick Facts Card */}
                <div className="bg-slate-900 text-white rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Fiduciary Integrity</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      Statutory Safeguards
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All accredited PPP Union facilitators and platforms adhere to strict non-solicitation, bank reference verifications (BCL/BRL), and anti-corruption firewalls to maintain institutional confidentiality.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-sky-300">
                    <span>UNECE & UNCITRAL Aligned</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Solicited vs Unsolicited Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Solicited Process */}
                <div className="border border-sky-200 bg-sky-50/40 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-sky-100 text-[#0072bc] rounded-full text-xs font-extrabold uppercase">
                      Solicited Process
                    </span>
                    <FileCheck className="w-5 h-5 text-[#0072bc]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Government or Sponsor Initiated
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    A solicited proposal is submitted in response to a specific work statement from the sponsor. Sponsors utilize a <strong>Request for Proposals (RFP)</strong> or <strong>Request for Applications (RFA)</strong> to solicit proposals for specific research, development, infrastructure construction, or public services.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Open, transparent competitive bidding across international markets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Pre-defined service specifications, output metrics, and payment formulas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Structured Public Sector Comparator (PSC) Value-for-Money benchmark.</span>
                    </li>
                  </ul>
                </div>

                {/* Unsolicited Process */}
                <div className="border border-amber-200 bg-amber-50/40 rounded-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-extrabold uppercase">
                      Unsolicited Process
                    </span>
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    Private Sector Initiated Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    An unsolicited proposal occurs when an entity approaches a government or enterprise without prior prompting, offering a solution, demonstration, technology transfer, or seeking project funding.
                  </p>
                  <div className="p-3 bg-white/80 rounded-lg border border-amber-200/80 mb-3 text-xs text-slate-800 italic leading-relaxed">
                    “Unsolicited proposals warrant more disclosure as they pose a greater risk to value for money than procurements done through open, competitive and transparent processes.”
                  </div>
                  <p className="text-xs text-slate-600">
                    Statutory firewalls strictly separate the personnel assessing unsolicited proposals from Cabinet decision-makers, eliminating conflicts of interest and ensuring impartial evaluation.
                  </p>
                </div>
              </div>

              {/* Non-Solicitation Letter & Pre-Submission Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#0072bc]" />
                    <span>Non-Solicitation Letter in PPP Practice</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Non-solicitation, in contract law, prohibits parties from exploiting clients, proprietary databases, or confidential contacts. Most international facilitators, platforms, and trading houses require a formal Non-Solicitation Letter from applicants to protect the process from risk, guaranteeing the absolute safety of corporate resources and banking confidentiality.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#0072bc]" />
                    <span>Pre-Submission Concept Review</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A formal written request from an applicant or sponsor for preliminary regulatory or institutional feedback. Conducted either via formal written response or direct institutional meetings documented in binding official minutes before committing capital to full feasibility studies.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: General Procedures for a PPP Model Between Two Private Entities (The 4-Step Standard) */}
        {(activeTab === 'all' || activeTab === '4step') && (
          <section id="private-entity-4-steps" className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-widest">
                    Standard Operational Procedure
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    General Procedures for a PPP Model Between Two Private Entities
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    The 4-step sequence mandated across accredited facilitators, platforms, and legal counsels.
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-[#0072bc] border border-blue-200 rounded-full text-xs font-bold self-start">
                  4 Sequential Steps
                </span>
              </div>

              {/* Steps Accordion / Stepper */}
              <div className="space-y-4">
                {privateEntitySteps.map((item) => {
                  const isExpanded = expandedStep === item.step;
                  return (
                    <div 
                      key={item.step}
                      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                        isExpanded 
                          ? 'border-[#0072bc] bg-sky-50/20 shadow-sm' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedStep(isExpanded ? null : item.step)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-extrabold text-sm sm:text-base shrink-0 transition-colors ${
                            isExpanded 
                              ? 'bg-[#0072bc] text-white' 
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            0{item.step}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-wider">
                                {item.badge}
                              </span>
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-500 hidden sm:block">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400 hidden md:inline">
                            {isExpanded ? 'Collapse' : 'Expand Details'}
                          </span>
                          <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                            isExpanded ? 'rotate-90 bg-sky-100 text-[#0072bc]' : ''
                          }`}>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-100 space-y-4">
                          <div className="space-y-2.5">
                            {item.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{bullet}</span>
                              </div>
                            ))}
                          </div>

                          {/* Required Documents Pill Matrix */}
                          <div className="mt-4 pt-3 border-t border-slate-200/80">
                            <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block mb-2">
                              Mandatory Verification Deliverables:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.requiredDocs.map((doc, dIdx) => (
                                <span 
                                  key={dIdx}
                                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 text-xs font-medium shadow-2xs"
                                >
                                  <FileText className="w-3 h-3 text-[#0072bc]" />
                                  <span>{doc}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Official Flowcharts & Diagrams Gallery */}
        {(activeTab === 'all' || activeTab === 'charts') && (
          <section id="official-process-charts" className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-widest">
                    Official Documentation Artifacts
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Official PPP Process Charts & Schedules
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Directly synchronized with the official diagrams from <span className="font-semibold text-[#0072bc]">pppunion.org/ppp-process/</span>. Click any diagram to inspect in full resolution.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Client Authorized Assets</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officialCharts.map((chart) => (
                  <div
                    key={chart.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div 
                        onClick={() => setModalImage({ url: chart.url, title: chart.title, subtitle: chart.subtitle })}
                        className="relative h-64 bg-slate-100 cursor-pointer overflow-hidden flex items-center justify-center p-2 group"
                      >
                        <img
                          src={chart.url}
                          alt={chart.title}
                          className="max-h-full max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                          <Maximize2 className="w-5 h-5" />
                          <span className="text-xs font-bold uppercase tracking-wider">Click to Zoom</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-4 sm:p-5">
                        <span className="px-2 py-0.5 bg-blue-100 text-[#0072bc] rounded text-[10px] font-bold uppercase">
                          {chart.badge}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2">
                          {chart.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {chart.subtitle}
                        </p>
                        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                          {chart.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="p-4 border-t border-slate-200/80 bg-white flex items-center justify-between">
                      <button
                        onClick={() => setModalImage({ url: chart.url, title: chart.title, subtitle: chart.subtitle })}
                        className="text-xs font-bold text-[#0072bc] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Enlarge Chart</span>
                      </button>
                      <a
                        href={chart.url}
                        download
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1"
                        title="Download official chart image"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 4: UN ESCAP Framework */}
        {(activeTab === 'all' || activeTab === 'escap') && (
          <section id="escap-framework" className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-widest">
                  United Nations Framework
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Economic and Social Commission for Asia and Pacific (UN ESCAP) Implementation Process
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Streamlined administrative procedures reduce uncertainties at each stage of project development and approval, systematically lowering the transaction costs of PPP projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {escapStages.map((stg, sIdx) => (
                  <div 
                    key={sIdx}
                    className="border border-slate-200 rounded-xl p-5 bg-slate-50/60 hover:bg-white hover:border-[#0072bc] transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-wider block mb-1">
                        {stg.stage}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mb-3 leading-snug">
                        {stg.title}
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {stg.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] shrink-0 mt-1.5"></span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 5: UK Guidance for Private Finance Initiative (PFI) Programme */}
        {(activeTab === 'all' || activeTab === 'pfi') && (
          <section id="uk-pfi-guidance" className="space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <span className="text-xs font-extrabold text-[#0072bc] uppercase tracking-widest">
                  Benchmark Programme
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  UK Guidance Documents for its Private Finance Initiative (PFI) Programme
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Empirical experience demonstrates that when stages are skipped, public authorities fail to achieve Value for Money. Adhering to the full 10-stage progression guarantees optimal public outcomes.
                </p>
              </div>

              {/* 10-Stage Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ukPfiStages.map((pfi) => (
                  <div 
                    key={pfi.stage}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0072bc] font-extrabold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                      {pfi.stage}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {pfi.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pfi.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Outline Business Case 9 Core Assessments Highlight */}
              <div className="mt-8 p-5 rounded-xl bg-blue-50/50 border border-blue-200">
                <h4 className="text-sm font-bold text-[#0072bc] uppercase tracking-wider mb-2">
                  The 9 Statutory Assessments of an Outline Business Case (OBC):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 mt-3">
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">1. Affordability</span>
                    Strict fiscal space and budgetary ceilings.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">2. Value for Money (VfM)</span>
                    PSC comparator versus PPP reference option.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">3. Output Specifications</span>
                    Service results rather than rigid inputs.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">4. Risk Allocation Matrix</span>
                    Allocated to the party best able to manage.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">5. Implementation Timeline</span>
                    Critical path milestones to COD.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">6. Market Interest</span>
                    Private capacity and genuine competition.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">7. Service Standards</span>
                    Stringent contractual KPIs and deductions.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">8. Payment Mechanism</span>
                    Concession tolling vs government unitary fees.
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-blue-100">
                    <span className="font-bold text-slate-900 block mb-0.5">9. Project Monitoring</span>
                    Independent Certifier & auditing proposals.
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Official Document Intake & Registration Portal Trigger */}
        <section id="process-intake-banner" className="rounded-2xl bg-gradient-to-r from-[#005084] to-[#0072bc] text-white p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                Start Step 1
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                Submit Project Documents & Letter of Intent (LOI)
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-sky-100 leading-relaxed">
                Initiate Due Diligence by submitting your Project Documentation, LOI, Bank Comfort Letter (BCL/BRL), and CIS/KYC package through the accredited Secretariat or Member Portal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('#members-login')}
                className="px-5 py-3 bg-white text-[#0072bc] rounded-xl text-xs font-extrabold shadow-md hover:bg-sky-50 transition-all cursor-pointer"
              >
                Member Portal Login
              </button>
              <button
                onClick={() => onNavigate('#contact')}
                className="px-5 py-3 bg-sky-900/50 hover:bg-sky-900/80 border border-sky-300/40 text-white rounded-xl text-xs font-extrabold transition-all cursor-pointer"
              >
                Contact Secretariat
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Fullscreen Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {modalImage.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {modalImage.subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={modalImage.url}
                  download
                  className="px-3 py-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 text-[#0072bc] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Download Chart"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setModalImage(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-100 min-h-[350px]">
              <img
                src={modalImage.url}
                alt={modalImage.title}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-xs"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-between">
              <span>Official diagram from pppunion.org/ppp-process/</span>
              <button
                onClick={() => setModalImage(null)}
                className="text-[#0072bc] font-bold hover:underline cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  Shield, 
  Globe2, 
  Scale, 
  FileText, 
  Building2, 
  Coins, 
  Users, 
  Award, 
  Sparkles,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

interface ModuleSection {
  step: string;
  title: string;
  description: string;
  keyPoints: string[];
}

interface CourseModule {
  id: string;
  moduleNumber: string;
  title: string;
  subtitle: string;
  duration: string;
  badge: string;
  icon: React.ReactNode;
  sections: ModuleSection[];
}

export const PPPCourseStructureSchedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tracks' | 'modules'>('tracks');

  const tracks = [
    {
      id: 'foundational',
      period: '3-Month Duration',
      badge: 'Level 1 · Foundational',
      title: 'Foundational PPP & SDG17 Literacy',
      target: 'Public administrators, early-career analysts, and civil society partners',
      outcomes: [
        'Human rights principles within the UN SDG 17 partnership architecture',
        'Basic principles of concession law and public procurement',
        'Preliminary project screening and social feasibility assessments',
        'Basic risk identification and hazard recognition'
      ],
      certification: 'Certificate of Foundational PPP & SDG17 Competence',
      color: 'border-blue-200 bg-blue-50/40 text-blue-900',
      badgeColor: 'bg-blue-600 text-white'
    },
    {
      id: 'intermediate',
      period: '6-Month Duration',
      badge: 'Level 2 · Intermediate',
      title: 'Professional Grant Proposals & Account Governance',
      target: 'Municipal project directors, legal advisors, and financial analysts',
      outcomes: [
        'Preparation of international-standard bankable grant proposals for UN & MDBs',
        'Ring-fenced project escrow and operating account administration',
        'Compliance documentation for multilateral grant disbursements',
        'On-site technical and social impact monitoring frameworks'
      ],
      certification: 'Certified PPP Project Manager (CPPM)',
      color: 'border-amber-200 bg-amber-50/40 text-amber-900',
      badgeColor: 'bg-amber-600 text-white'
    },
    {
      id: 'advanced',
      period: '12-Month Duration',
      badge: 'Level 3 · Advanced',
      title: 'International Concessions, Tendering & Full Lifecycle Close',
      target: 'Cabinet ministers, sovereign wealth executives, and EPC consortium leaders',
      outcomes: [
        'Comprehensive concession drafting, negotiation, and UNCITRAL compliance',
        'Launching and administering global competitive bidding (RFQ/RFP)',
        'Multi-criteria technical, financial, and risk-allocation bid evaluations',
        'Milestone disbursement protocols, contractor payment security, and contract close'
      ],
      certification: 'Certified Public-Private Partnership & SDG Professional (CPSP)',
      color: 'border-emerald-200 bg-emerald-50/40 text-emerald-900',
      badgeColor: 'bg-emerald-700 text-white'
    }
  ];

  const modules: CourseModule[] = [
    {
      id: 'mod-1',
      moduleNumber: 'Module 01',
      title: 'Course Objectives & Human Rights Mandate',
      subtitle: 'Universal access to development, non-discrimination, and 12 institutional competencies',
      duration: 'Foundational Phase',
      badge: 'Mandate & Rights',
      icon: <Shield className="w-5 h-5 text-[#0072bc]" />,
      sections: [
        {
          step: '1.1',
          title: 'Human Rights Foundation under UN SDG 17',
          description: 'Understanding that every human being possesses an inherent right to development, institutional education, and dignity. Overcoming systemic discrimination, geographical barriers, and institutional deficits.',
          keyPoints: [
            'SDG17 as a binding moral and operational partnership charter',
            'Eradicating access disparities in developing and conflict-affected regions',
            'Universal access to public-private partnership development opportunities'
          ]
        },
        {
          step: '1.2',
          title: '12 Core Institutional Competencies',
          description: 'Systematic instruction across twelve essential operational capabilities to guarantee independent leadership without institutional dependency.',
          keyPoints: [
            'Interpreting national and international PPP statutes',
            'Selecting socially and environmentally impactful development projects',
            'Formulating bankable proposals, navigating grants, and directing account flows',
            'Governing competitive tenders, evaluating bidders, and administering contractor disbursements'
          ]
        }
      ]
    },
    {
      id: 'mod-2',
      moduleNumber: 'Module 02',
      title: 'Project Selection, Proposal Writing & Contract Stages',
      subtitle: 'From empirical identification to binding legal instruments and concession close',
      duration: 'Core Technical Phase',
      badge: 'Concession Structuring',
      icon: <FileText className="w-5 h-5 text-[#0072bc]" />,
      sections: [
        {
          step: '2.1',
          title: 'Project Identification & Feasibility Selection',
          description: 'Empirical screening of infrastructure projects to align with SDG17 principles, sovereign development agendas, community needs, and international donor criteria.',
          keyPoints: [
            'Pre-feasibility technical and environmental screening',
            'Public Sector Comparator (PSC) and Value for Money (VfM) validation',
            'Stakeholder consultation and socio-economic risk profiling'
          ]
        },
        {
          step: '2.2',
          title: 'Grant Proposal Development & Donor Requirements',
          description: 'Structuring international-standard proposals capable of securing capital from UN agencies, multilateral development banks, and sovereign funds.',
          keyPoints: [
            'Executive summaries, problem statements, and quantitative project justifications',
            'SDG17 alignment metrics and multi-currency budget models',
            'Monitoring & Evaluation (M&E) systems and long-term sustainability plans'
          ]
        },
        {
          step: '2.3',
          title: 'Contract Stages & Legal Procedures',
          description: 'End-to-end management of legal negotiations, statutory compliance, transparent execution, and asset handover.',
          keyPoints: [
            'Pre-contract negotiation protocols and term sheet formulation',
            'Statutory compliance with national concession legislation and UNCITRAL standards',
            'Transparent contract signing, execution oversight, and project handover'
          ]
        }
      ]
    },
    {
      id: 'mod-3',
      moduleNumber: 'Module 03',
      title: 'Financial Management, Project Accounts & Implementation',
      subtitle: 'Fiduciary ring-fencing, installment protocols, monitoring, and contractor disbursements',
      duration: 'Financial & Operational Governance',
      badge: 'Fiscal Integrity',
      icon: <Coins className="w-5 h-5 text-[#0072bc]" />,
      sections: [
        {
          step: '3.1',
          title: 'Opening Dedicated Project Accounts',
          description: 'Setting up segregated, ring-fenced bank accounts complying with international auditability, anti-money laundering (AML), and donor covenants.',
          keyPoints: [
            'Escrow structure and dual-signatory governance mechanisms',
            'Full audit trail preservation for multilateral and bilateral donors',
            'Separation of operational cashflows from sovereign budgetary funds'
          ]
        },
        {
          step: '3.2',
          title: 'Receiving Project Installments & Grant Drawdowns',
          description: 'Submitting standardized drawdown notices, documenting verified progress milestones, and maintaining continuous grant compliance.',
          keyPoints: [
            'Formulation of formal milestone completion notices',
            'Documentation of verified fiscal needs and matching funds',
            'Timely financial reporting and transparent expenditure reconciliation'
          ]
        },
        {
          step: '3.3',
          title: 'Start-to-Finish Project Monitoring & Oversight',
          description: 'Multi-layer oversight integrating engineering progress inspections, cost variance tracking, and community social impact assessments.',
          keyPoints: [
            'Independent engineering reviews and environmental compliance audits',
            'Real-time reporting to multilateral donors and PPP Union portals',
            'Early identification and mitigation of technical and fiscal bottlenecks'
          ]
        },
        {
          step: '3.4',
          title: 'Contractor Payments & Ethical Cash Flow Management',
          description: 'Ensuring contractually stipulated payments are executed without administrative delay, protecting project momentum and preventing costly disputes.',
          keyPoints: [
            'Prompt milestone settlement to prevent construction work stoppages',
            'Upholding ethical contractor relations and dispute avoidance',
            'Compliance with certified engineer payment certificates'
          ]
        }
      ]
    },
    {
      id: 'mod-4',
      moduleNumber: 'Module 04',
      title: 'International Tendering, Bid Evaluation & Procurement Management',
      subtitle: 'Global competitive bidding, objective evaluation matrices, and contract completion',
      duration: 'Procurement & Transaction Phase',
      badge: 'Procurement Excellence',
      icon: <Building2 className="w-5 h-5 text-[#0072bc]" />,
      sections: [
        {
          step: '4.1',
          title: 'Launching International Tendering',
          description: 'Formulating comprehensive tender dossiers (RFQ/RFP), issuing international gazette notices, and establishing fair competition.',
          keyPoints: [
            'Drafting transparent Request for Qualification (RFQ) dossiers',
            'Global notice publication across official multilateral procurement portals',
            'Non-discriminatory, open market access for international and domestic consortia'
          ]
        },
        {
          step: '4.2',
          title: 'Managing the Competitive Tender Process',
          description: 'Administrative handling of bidder communications, official clarifying bulletins, and tamper-proof bid document registration.',
          keyPoints: [
            'Secure document receipt and time-stamped registration procedures',
            'Managing formal Bidder Information Notices (BIN) and bidder queries',
            'Enforcing anti-collusion and conflict-of-interest declarations'
          ]
        },
        {
          step: '4.3',
          title: 'Bid Evaluation & Multi-Criteria Due Diligence',
          description: 'Rigorous appraisal across technical capability, financial bankability, legal compliance, and verifiable past project performance.',
          keyPoints: [
            'Technical design and structural engineering suitability scoring',
            'Financial model robustness, debt term viability, and tariff structures',
            'Legal and environmental compliance verification'
          ]
        },
        {
          step: '4.4',
          title: 'Bidder Selection & Decision Auditability',
          description: 'Transparent selection of the winning consortium backed by detailed evaluation records conforming to statutory procurement legislation.',
          keyPoints: [
            'Auditable decision documentation and published award notices',
            'Full adherence to national PPP legislation and international norms',
            'Debriefing protocols and transparent dispute handling'
          ]
        },
        {
          step: '4.5',
          title: 'Payment Systems & Procurement Finalization',
          description: 'Mobilization of letters of credit, performance bonds, contract signing protocols, and comprehensive post-procurement reporting.',
          keyPoints: [
            'Executing international letters of credit and performance guarantees',
            'Final contract sealing and concession closing formalities',
            'Submission of comprehensive procurement audit reports to public authorities'
          ]
        }
      ]
    }
  ];

  return (
    <div id="ppp-course-schedule-wrapper" className="mt-12 space-y-10 border-t border-slate-200 pt-10">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-[#022d4a] via-[#005285] to-[#0072bc] rounded-2xl p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Executive Curriculum</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Systematic Course Structure & Sequential Learning Modules
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Engineered according to the progressive capacity-building mandate of the PPP Union, ensuring learners advance from fundamental human rights principles to advanced concession finance and global tendering governance.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl self-start md:self-auto shrink-0 border border-white/10">
            <button
              onClick={() => setActiveTab('tracks')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tracks'
                  ? 'bg-white text-[#005285] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              3 Progression Tracks
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'modules'
                  ? 'bg-white text-[#005285] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              4 Sequential Modules
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: 3 Progression Tracks */}
      {activeTab === 'tracks' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className={`rounded-2xl border ${track.color} p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${track.badgeColor}`}>
                    {track.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {track.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 leading-snug">
                    {track.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    <strong className="text-slate-800">Target Cohort:</strong> {track.target}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                    Core Competency Outcomes:
                  </p>
                  <ul className="space-y-2">
                    {track.outcomes.map((item, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0072bc] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 bg-white/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-[11px]">
                    <span className="text-slate-500 block">Conferred Credential:</span>
                    <span className="font-bold text-slate-900">{track.certification}</span>
                  </div>
                  <Award className="w-5 h-5 text-amber-500 shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: 4 Sequential Modules */}
      {activeTab === 'modules' && (
        <div className="space-y-6">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:border-[#0072bc]/40 transition-all"
            >
              <div className="bg-slate-50 p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200 shadow-xs">
                    {mod.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#0072bc] uppercase tracking-wider">
                        {mod.moduleNumber}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200/80 text-slate-700">
                        {mod.badge}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0072bc] border border-sky-200">
                    {mod.duration}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-white">
                {mod.sections.map((sec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#0072bc] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          {sec.step}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900 leading-snug">
                          {sec.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sec.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/60">
                      <ul className="space-y-1">
                        {sec.keyPoints.map((kp, kpIdx) => (
                          <li key={kpIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                            <span className="text-[#0072bc] font-bold shrink-0">•</span>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Official Membership Invitation & Registration Card (Required by User Prompt) */}
      <div className="rounded-2xl border-2 border-[#0072bc] bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072bc]/10 text-[#0072bc] border border-[#0072bc]/20 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Official Academic Enrollment Notice</span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Join the Capacity-Building Program & Continue Toward Advanced Certification
            </h4>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              The PPP Union invites government officials, financial analysts, project managers, and institutional sponsors to enroll in our structured training programs. Certified members gain access to international mentors, dedicated coach support, verifiable digital diplomas, and active global project opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-1">
              <span className="flex items-center gap-1 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                VIP & Green-Gold Eligibility
              </span>
              <span className="flex items-center gap-1 text-blue-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Blockchain-Verified Credentials
              </span>
              <span className="flex items-center gap-1 text-purple-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                UN SDG 17 Compliance Alignment
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://pppunion.org/members-login-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0072bc] hover:bg-[#005285] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all text-center"
            >
              <span>Official Member Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#membership-accreditation"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0072bc] border border-slate-300 text-xs font-bold transition-all text-center shadow-xs"
            >
              <span>View Accreditation & KYC Info</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

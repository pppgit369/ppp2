import React, { useState } from 'react';
import {
  Workflow,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Coins,
  Building,
  Clock,
  ChevronRight,
  AlertCircle,
  FileText,
  RefreshCw,
  Sliders,
  Scale,
  Sparkles,
  Zap,
  Info,
  Check
} from 'lucide-react';
import { AdminEditableTitle, useAdmin } from '../context/AdminContext';

export interface PPPProcessStage {
  id: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  color: string;
  objectives: string[];
  keyInputs: string[];
  keyDeliverables: string[];
  gateCriteria: string[];
  sdgFocus: string;
  description: string;
}

export interface PPPModelChart {
  id: string;
  code: string;
  name: string;
  category: 'User-Pays' | 'Government-Pays' | 'Hybrid / Mixed' | 'Service / Management';
  ownership: 'Public throughout' | 'Private then Reverts' | 'Private Ownership' | 'Shared Equity';
  demandRisk: 'Private Sector' | 'Public Sector' | 'Shared';
  typicalDuration: string;
  bestSuitedFor: string[];
  summary: string;
  systemArchitecture: {
    publicRole: string;
    spvRole: string;
    financingSource: string;
    revenueStream: string;
    contractType: string;
  };
  cycleStages: {
    phase: string;
    action: string;
    duration: string;
    responsible: 'Public' | 'SPV' | 'Joint';
  }[];
  riskAllocation: {
    risk: string;
    bearer: 'Private (SPV)' | 'Public (Grantor)' | 'Shared';
    mechanism: string;
  }[];
  flowNodes: {
    source: string;
    relation: string;
    target: string;
    type: 'contract' | 'finance' | 'service' | 'transfer';
  }[];
}

// 7-Stage Comprehensive International PPP Process Lifecycle
export const INTERNATIONAL_PPP_LIFECYCLE: PPPProcessStage[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    title: 'Stage 1: Project Identification & Strategic Screening',
    subtitle: 'Needs Assessment, Sector Planning & Initial Feasibility Test',
    duration: '2 – 4 Months',
    color: '#0072bc',
    description:
      'The contracting authority identifies an infrastructure deficiency, validates alignment with national strategic development plans, and conducts preliminary screening to verify that a Public-Private Partnership is legally permitted and conceptually viable compared to traditional public works.',
    objectives: [
      'Confirm strategic alignment with national economic priorities and spatial master plans',
      'Conduct preliminary technical screening and basic affordability assessment',
      'Assess statutory eligibility under national PPP legislation and international conventions',
      'Undertake preliminary People-First SDG screening to establish societal baseline'
    ],
    keyInputs: [
      'National Infrastructure Master Plan',
      'Sector policy directives and regulatory statutes',
      'Preliminary site location data and demographic projections',
      'Budget allocation baseline from Ministry of Finance'
    ],
    keyDeliverables: [
      'Project Identification Note (PIN)',
      'Strategic Business Case (SBC)',
      'Preliminary SDG Alignment Scorecard',
      'Pre-Feasibility Appraisal Memo'
    ],
    gateCriteria: [
      'Public interest justification established with demonstrable economic demand',
      'Affordability ceiling confirmed by Ministry of Finance',
      'No statutory legal impediments identified'
    ],
    sdgFocus: 'SDG 9 (Resilient Infrastructure) & SDG 17 (Partnerships)'
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    title: 'Stage 2: Detailed Feasibility, VfM & Structuring',
    subtitle: 'Engineering Surveys, Value-for-Money, Financial Modeling & ESIA',
    duration: '4 – 9 Months',
    color: '#0284c7',
    description:
      'Rigorous multidisciplinary appraisal testing technical engineering, geotechnical parameters, commercial bankability, environmental & social impact (ESIA), and computing the Public Sector Comparator (PSC) to prove that the PPP model offers superior Value for Money (VfM) over traditional procurement.',
    objectives: [
      'Complete geotechnical, topographic, and engineering preliminary design',
      'Perform detailed financial modeling, DSCR testing, and bankability stress tests',
      'Execute Environmental and Social Impact Assessment (ESIA) with public consultations',
      'Calculate Public Sector Comparator (PSC) and quantify quantitative / qualitative VfM'
    ],
    keyInputs: [
      'Detailed site geotechnical surveys and utility encumbrance reports',
      'Traffic / demand elasticities and willing-to-pay surveys',
      'Benchmark capex / opex unit rates from comparable international transactions',
      'Macroeconomic inflation, interest, and currency projections'
    ],
    keyDeliverables: [
      'Comprehensive Multi-Disciplinary Feasibility Report',
      'Public Sector Comparator (PSC) & Value-for-Money (VfM) Report',
      'Bankable Shadow Financial Model (Base Case & Downside Sensitivities)',
      'Environmental, Social & Climate Resilience Management Plan (ESMP)'
    ],
    gateCriteria: [
      'VfM test confirms PPP generates lower whole-life cost or higher public service quality',
      'Independent transaction advisors certify financial bankability (DSCR ≥ 1.25x)',
      'Environmental permit clearance in principle obtained'
    ],
    sdgFocus: 'SDG 13 (Climate Action) & SDG 12 (Responsible Consumption)'
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    title: 'Stage 3: Transaction Structuring & Risk Allocation Matrix',
    subtitle: 'Optimal Contract Typology, Payment Mechanism & Security Package',
    duration: '2 – 3 Months',
    color: '#0d9488',
    description:
      'Formulating the precise contractual architecture (BOT, BOOT, DBFO, or Concession), calibrating the payment mechanism (availability payments vs. user tolls), drafting the comprehensive risk allocation matrix, and preparing sovereign guarantee envelopes.',
    objectives: [
      'Select the optimal contractual archetype based on demand risk profile',
      'Design performance-based payment mechanism with calibrated deduction formulas',
      'Formulate comprehensive Risk Allocation Matrix allocating risk to the best-equipped party',
      'Structure sovereign security package (e.g. Right-of-Way, currency convertibility, MIGA guarantees)'
    ],
    keyInputs: [
      'Approved Feasibility Report and Bankability Study',
      'Model Concession Clauses (UNECE / UNCITRAL)',
      'Government debt and fiscal commitment guidelines',
      'Market sounding feedback from prospective international sponsors and lenders'
    ],
    keyDeliverables: [
      'Transaction Structure Blueprint',
      'Comprehensive Risk Allocation Matrix',
      'Key Performance Indicator (KPI) & Payment Deduction Handbook',
      'Model Concession Agreement & Direct Agreement Term Sheets'
    ],
    gateCriteria: [
      'Cabinet / Inter-Ministerial PPP Committee formal approval of risk allocation',
      'Fiscal risk envelope and contingent liabilities capped by Treasury',
      'Bidding strategy approved by sovereign procurement board'
    ],
    sdgFocus: 'SDG 16 (Transparent Institutions) & SDG 8 (Decent Work & Growth)'
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    title: 'Stage 4: International Competitive Tendering',
    subtitle: 'Two-Stage Bidding: RFQ Pre-Qualification & RFP Commercial Offers',
    duration: '4 – 8 Months',
    color: '#2563eb',
    description:
      'Transparent, non-discriminatory international competitive procurement under UNCITRAL standards. Bidders are pre-qualified through Request for Qualifications (RFQ), followed by interactive dialogue / data room access and submission of binding technical and financial proposals (RFP).',
    objectives: [
      'Conduct global market release and Expression of Interest (EOI) announcement',
      'Issue Request for Qualifications (RFQ) and pre-qualify top-tier international consortia',
      'Host virtual data room (VDR), site inspections, and structured bidder conferences',
      'Evaluate two-envelope submissions (Technical & Financial) and declare Preferred Bidder'
    ],
    keyInputs: [
      'Approved Tender Documents (RFQ, RFP, Draft Concession Agreement)',
      'Virtual Data Room with geotechnical and legal disclosures',
      'Evaluation criteria matrix with objective scoring thresholds',
      'Anti-collusion and integrity pact documentation'
    ],
    keyDeliverables: [
      'Bid Evaluation Report (Technical & Financial)',
      'Independent Procurement Monitor Compliance Certificate',
      'Preferred Bidder Formal Award Notification',
      'Public Procurement Transparency Registry Publication'
    ],
    gateCriteria: [
      'At least two compliant, fully financed binding bids received',
      'Winning proposal complies with all minimum technical, environmental and SDG thresholds',
      'No unresolved procurement challenges or anti-trust conflicts'
    ],
    sdgFocus: 'SDG 16 (Peace, Justice & Strong Institutions) & SDG 17 (Global Partnerships)'
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    title: 'Stage 5: Commercial Award & Financial Close',
    subtitle: 'Concession Signing, Lender Financing Agreements & Capital Drawdown',
    duration: '2 – 5 Months',
    color: '#7c3aed',
    description:
      'Finalization of project documents, execution of the concession contract with the Special Purpose Vehicle (SPV), signing of senior loan facilities and direct agreements with multilateral development banks (MDBs), satisfaction of all Conditions Precedent (CPs), and first drawdown of capital.',
    objectives: [
      'Execute formal Concession Agreement between Public Authority and Project SPV',
      'Syndicate senior debt facility with commercial lenders and multilateral institutions',
      'Sign Direct Agreement granting step-in rights to secured project lenders',
      'Satisfy all Conditions Precedent (CPs) including equity injection and permits'
    ],
    keyInputs: [
      'Preferred Bidder Final Financial Model and Binding Debt Term Sheets',
      'Legal opinions on authority powers and contract enforceability',
      'All necessary environmental, municipal, and construction permits',
      'Parent Company Guarantees (PCG) and Performance Bonds'
    ],
    keyDeliverables: [
      'Fully Executed Concession Agreement and Project Schedules',
      'Senior Loan Facilities and Intercreditor Agreements',
      'Lenders Direct Agreement with Step-in Rights',
      'Financial Close Certificate confirming initial capital drawdown readiness'
    ],
    gateCriteria: [
      '100% of debt and equity commitments legally binding and committed',
      'All government permits, licenses, and unencumbered site possession delivered',
      'Public fiscal obligations confirmed in sovereign debt accounts'
    ],
    sdgFocus: 'SDG 17 (Blended Finance & Resource Mobilization)'
  },
  {
    id: 'stage-6',
    stageNumber: 6,
    title: 'Stage 6: Turnkey Construction & Commissioning',
    subtitle: 'EPC Execution, Independent Certifier Auditing & COD Declaration',
    duration: '18 – 36 Months',
    color: '#d97706',
    description:
      'The SPV executes the construction phase via a lump-sum turnkey Engineering, Procurement and Construction (EPC) contract. Quality, schedule, safety, and environmental compliance are monitored by an Independent Engineer jointly appointed by the government and lenders.',
    objectives: [
      'Deliver infrastructure construction on schedule, on budget, and to technical specs',
      'Implement Environmental and Social Management Plan (ESMP) during works',
      'Maintain independent certifier inspection regime with monthly milestone certification',
      'Execute comprehensive commissioning, reliability testing, and safety certifications'
    ],
    keyInputs: [
      'Detailed engineering design and construction work packages',
      'Approved Environmental and Social Management Plan (ESMP)',
      'Independent Engineer Terms of Reference and milestone schedule',
      'Manufacturer equipment warranties and quality assurance certifications'
    ],
    keyDeliverables: [
      'Monthly Independent Engineer Progress Reports',
      'Interim Milestone Completion Certificates',
      'Commissioning & Systems Integration Test Reports',
      'Commercial Operation Date (COD) Certificate issued by Independent Engineer'
    ],
    gateCriteria: [
      'Asset satisfies 100% of performance and safety specifications during trial run',
      'Statutory occupancy and operating licenses issued by public authorities',
      'Punch-list defect remediation schedule agreed with contractor'
    ],
    sdgFocus: 'SDG 9 (Industry, Innovation & Infrastructure) & SDG 11 (Sustainable Communities)'
  },
  {
    id: 'stage-7',
    stageNumber: 7,
    title: 'Stage 7: Operations, Maintenance & Handback',
    subtitle: 'Decades-Long Availability Management, SLA Audits & Pristine Reversion',
    duration: '15 – 30 Years',
    color: '#059669',
    description:
      'The multi-decade operational phase. The SPV operates and maintains the facility in compliance with strict Service Level Agreements (SLAs). Performance deductions are applied for unavailability. Towards concession end, a joint handback inspection ensures the asset is restored and transferred debt-free to the state.',
    objectives: [
      'Deliver continuous, high-quality public service in accordance with contractual KPIs',
      'Execute planned lifecycle maintenance and major refurbishment cycles',
      'Conduct continuous environmental monitoring and citizen satisfaction surveys',
      'Complete end-of-term restorative maintenance and hand back asset in pristine condition'
    ],
    keyInputs: [
      'Standard Operating Procedures (SOP) and Operations & Maintenance Manuals',
      'Real-time automated performance monitoring telemetry',
      'Maintenance Reserve Fund (MRF) account statements',
      'Concession Handback Requirements and Residual Asset Life Specifications'
    ],
    keyDeliverables: [
      'Quarterly Performance & SLA Availability Reports',
      'Third-Party Independent Technical Audit Reports',
      'Handback Survey and Restorative Maintenance Schedule',
      'Asset Transfer Certificate vesting unencumbered asset in Public Authority'
    ],
    gateCriteria: [
      'Zero catastrophic service failures and verified average availability ≥ 98.5%',
      'Maintenance reserve funds maintained at required statutory thresholds',
      'Final joint survey confirms residual asset lifespan meets contractual handback spec (e.g. ≥ 10 years without major overhaul)'
    ],
    sdgFocus: 'SDG 11 (Sustainable Cities), SDG 3, 6, 7 (Core Universal Services)'
  }
];

// Comprehensive PPP Models with System Architecture, Cashflows, and Risk Allocations
export const COMPREHENSIVE_PPP_MODELS: PPPModelChart[] = [
  {
    id: 'bot',
    code: 'BOT',
    name: 'Build – Operate – Transfer',
    category: 'User-Pays',
    ownership: 'Private then Reverts',
    demandRisk: 'Private Sector',
    typicalDuration: '20 – 30 Years',
    summary:
      'The classic economic infrastructure model. A private concessionaire (SPV) designs, finances, constructs, and operates the asset, recovering capital and earning return via direct user charges before transferring the facility debt-free to the government.',
    bestSuitedFor: [
      'Toll Motorways and Express Corridors',
      'International Airport Terminals & Seaports',
      'Cross-Harbor Tunnels and Bridges',
      'Intermodal Logistics Cargo Freight Terminals'
    ],
    systemArchitecture: {
      publicRole: 'Provides site right-of-way, statutory concession license, and tariff regulatory oversight.',
      spvRole: 'Arranges non-recourse project financing, turnkey construction, and commercial operations.',
      financingSource: 'Commercial bank debt (70-80%) + Private equity sponsors (20-30%).',
      revenueStream: 'Direct user tariffs, tolls, and commercial concession revenues.',
      contractType: 'Long-term Concession Agreement with strict tariff-setting formula.'
    },
    cycleStages: [
      { phase: 'Feasibility & Tendering', action: 'Public authority prepares traffic studies, releases RFP, and awards concession.', duration: '12 – 18 Months', responsible: 'Public' },
      { phase: 'Financing & EPC Works', action: 'SPV reaches financial close; EPC contractor completes construction.', duration: '24 – 36 Months', responsible: 'SPV' },
      { phase: 'Commercial Operations', action: 'SPV collects user fees, pays operational costs, services debt, and maintains asset.', duration: '20 – 30 Years', responsible: 'SPV' },
      { phase: 'Condition Audit & Handback', action: 'Joint asset survey verifies zero deferred maintenance; asset reverts 100% to State.', duration: 'Final 18 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Design & Construction Cost Overrun', bearer: 'Private (SPV)', mechanism: 'Turnkey Fixed-Price EPC Contract & Performance Bonds' },
      { risk: 'Traffic & Commercial Demand Risk', bearer: 'Private (SPV)', mechanism: 'Absorbed through equity returns; optional Min. Revenue Guarantee' },
      { risk: 'Land Acquisition & Right-of-Way', bearer: 'Public (Grantor)', mechanism: 'Sovereign expropriation and statutory site clearance before COD' },
      { risk: 'Political & Change in Law Risk', bearer: 'Public (Grantor)', mechanism: 'Contractual compensation and tariff adjustment indexing' },
      { risk: 'Asset Handback Condition Risk', bearer: 'Private (SPV)', mechanism: 'Handback bond and mandatory maintenance reserve escrow' }
    ],
    flowNodes: [
      { source: 'Public Contracting Authority', relation: 'Grants Concession & Right-of-Way', target: 'Project SPV (Concessionaire)', type: 'contract' },
      { source: 'Senior Lenders & Equity', relation: 'Provides 70:30 Non-Recourse Capital', target: 'Project SPV (Concessionaire)', type: 'finance' },
      { source: 'Project SPV (Concessionaire)', relation: 'Fixed-Price Turnkey EPC Contract', target: 'EPC Construction Consortium', type: 'service' },
      { source: 'End Users / Traffic', relation: 'Pays Regulated Tolls & User Fees', target: 'Project SPV (Concessionaire)', type: 'finance' },
      { source: 'Project SPV (Concessionaire)', relation: 'Debt-Free Asset Reversion at Expiry', target: 'Public Contracting Authority', type: 'transfer' }
    ]
  },
  {
    id: 'boot',
    code: 'BOOT',
    name: 'Build – Own – Operate – Transfer',
    category: 'Hybrid / Mixed',
    ownership: 'Private then Reverts',
    demandRisk: 'Shared',
    typicalDuration: '20 – 25 Years',
    summary:
      'The predominant model for major utility production plants. The SPV retains legal ownership and title of the facility throughout the concession period to facilitate asset depreciation and debt syndication, transferring title to the State upon expiration.',
    bestSuitedFor: [
      'Independent Power Producer (IPP) Plants (Solar, Wind, Gas)',
      'Seawater Desalination & Potable Water Filtration Facilities',
      'Waste-to-Energy and Municipal Incineration Plants',
      'Industrial Wastewater Treatment Facilities'
    ],
    systemArchitecture: {
      publicRole: 'Signs long-term Off-Take Agreement (PPA / WPA), sovereign payment guarantee.',
      spvRole: 'Builds, legally owns, and operates utility facility with high availability.',
      financingSource: 'International Project Finance / Multilateral Development Banks (MDBs).',
      revenueStream: 'Take-or-Pay capacity charges (fixed) + Output charges (variable fuel pass-through).',
      contractType: 'Power / Water Purchase Agreement (PPA/WPA) + Implementation Agreement.'
    },
    cycleStages: [
      { phase: 'Off-take Structuring', action: 'State utility issues competitive tender with standard 20-yr PPA terms.', duration: '9 – 14 Months', responsible: 'Public' },
      { phase: 'Construction & Testing', action: 'SPV builds facility; independent testing validates heat-rate and capacity output.', duration: '18 – 30 Months', responsible: 'SPV' },
      { phase: 'Availability Generation', action: 'SPV generates electricity/water; utility pays take-or-pay capacity fees.', duration: '20 – 25 Years', responsible: 'SPV' },
      { phase: 'Title Transfer & Decommissioning', action: 'Legal title deed transferred to State; plant verified at standard operating life.', duration: 'Final 12 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Plant Availability & Efficiency', bearer: 'Private (SPV)', mechanism: 'Guaranteed heat-rate / recovery yield with contractual penalties' },
      { risk: 'Off-taker Payment Default', bearer: 'Public (Grantor)', mechanism: 'Sovereign Ministry of Finance payment guarantee & escrow accounts' },
      { risk: 'Fuel / Raw Water Supply Risk', bearer: 'Public (Grantor)', mechanism: 'Supply or pay fuel supply agreements (FSA)' },
      { risk: 'Currency & Foreign Exchange', bearer: 'Shared', mechanism: 'Tariff indexed to USD / EUR or central bank swap window' },
      { risk: 'Environmental Compliance', bearer: 'Private (SPV)', mechanism: 'Adherence to IFC Performance Standards and national emission caps' }
    ],
    flowNodes: [
      { source: 'Sovereign Government', relation: 'Implementation & Guarantee Accord', target: 'Project SPV (Plant Owner)', type: 'contract' },
      { source: 'State Electric / Water Utility', relation: 'Long-Term 25-Year PPA / WPA', target: 'Project SPV (Plant Owner)', type: 'contract' },
      { source: 'Project SPV (Plant Owner)', relation: 'Supplies Guaranteed Bulk Capacity', target: 'State Electric / Water Utility', type: 'service' },
      { source: 'State Electric / Water Utility', relation: 'Take-or-Pay Capacity Monthly Payments', target: 'Project SPV (Plant Owner)', type: 'finance' },
      { source: 'Project SPV (Plant Owner)', relation: 'Legal Asset Title Transferred at Expiry', target: 'Sovereign Government', type: 'transfer' }
    ]
  },
  {
    id: 'dbfo',
    code: 'DBFO',
    name: 'Design – Build – Finance – Operate (Availability PPP)',
    category: 'Government-Pays',
    ownership: 'Public throughout',
    demandRisk: 'Public Sector',
    typicalDuration: '25 – 30 Years',
    summary:
      'The gold standard for social infrastructure where end users cannot be directly charged. The government retains asset ownership throughout; the private partner finances and maintains the facility, receiving regular Availability Payments linked to zero-defect performance.',
    bestSuitedFor: [
      'Tertiary Hospitals and Healthcare Campuses',
      'Modern K-12 Schools and University Campuses',
      'Civic Administration Hubs and Judicial Courthouses',
      'Smart Street Lighting and Municipal Fiber Backbones'
    ],
    systemArchitecture: {
      publicRole: 'Retains title, provides public clinical/pedagogical staff, pays availability fee.',
      spvRole: 'Finances, builds, and manages hard facility maintenance (HVAC, power, IT, cleaning).',
      financingSource: 'Long-term institutional infrastructure bonds and social green loans.',
      revenueStream: 'Government Availability Payments (subject to SLA performance deductions).',
      contractType: 'Project Agreement with comprehensive Service Level Agreement (SLA).'
    },
    cycleStages: [
      { phase: 'Affordability Appraisal', action: 'Public health/education department verifies long-term availability payment envelope.', duration: '6 – 10 Months', responsible: 'Public' },
      { phase: 'Specialized Design & Build', action: 'SPV delivers cutting-edge sustainable facility with advanced BIM modeling.', duration: '20 – 36 Months', responsible: 'SPV' },
      { phase: 'Total Facilities Management', action: 'SPV maintains 99.8% facility uptime; doctors/teachers deliver public services.', duration: '25 – 30 Years', responsible: 'SPV' },
      { phase: 'Seamless Renewal / Retender', action: 'Facility audited; contract concludes or moves to new facilities management term.', duration: 'Final 12 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Facility Availability & Uptime', bearer: 'Private (SPV)', mechanism: 'Strict payment deductions if wards, classrooms, or lanes are unavailable' },
      { risk: 'Usage / Population Demand Risk', bearer: 'Public (Grantor)', mechanism: 'Government pays full availability regardless of patient / student counts' },
      { risk: 'Facility Lifecycle Maintenance (Capex)', bearer: 'Private (SPV)', mechanism: 'SPV responsible for replacing roof, HVAC, and elevators at fixed price' },
      { risk: 'Clinical / Educational Services', bearer: 'Public (Grantor)', mechanism: 'Public sector exclusively retains doctors, nurses, and teachers' },
      { risk: 'Energy Efficiency Targets', bearer: 'Shared', mechanism: 'Gain-share / pain-share mechanism against target kilowatt-hour consumption' }
    ],
    flowNodes: [
      { source: 'Ministry of Health / Education', relation: 'Signs 25-Year DBFO Project Agreement', target: 'Project SPV (Facility Partner)', type: 'contract' },
      { source: 'Private Institutional Lenders', relation: 'Provides Social Infrastructure Senior Debt', target: 'Project SPV (Facility Partner)', type: 'finance' },
      { source: 'Project SPV (Facility Partner)', relation: 'Guarantees 99.8% Operational Availability', target: 'Public Facility & Citizens', type: 'service' },
      { source: 'Ministry of Finance / Treasury', relation: 'Pays Quarterly Availability Fees (- Deductions)', target: 'Project SPV (Facility Partner)', type: 'finance' },
      { source: 'Facility Management Team', relation: 'Seamless Retendering or Handover to State', target: 'Ministry of Health / Education', type: 'transfer' }
    ]
  },
  {
    id: 'concession',
    code: 'Concession',
    name: 'User-Pays Concession Contract',
    category: 'User-Pays',
    ownership: 'Public throughout',
    demandRisk: 'Private Sector',
    typicalDuration: '15 – 25 Years',
    summary:
      'The government grants an exclusive right to a private operator to operate, upgrade, and commercially manage an existing or new public service system, collecting tariffs directly from users under a strict economic regulatory framework.',
    bestSuitedFor: [
      'Municipal Potable Water Distribution & Sewage Networks',
      'Metropolitan Bus Rapid Transit (BRT) and Light Rail (LRT)',
      'Regional Airports and Maritime Ferry Terminals',
      'Smart City Dynamic Parking and Tolled Urban Rings'
    ],
    systemArchitecture: {
      publicRole: 'Independent economic regulator sets tariff ceilings and quality-of-service rules.',
      spvRole: 'Invests required capital improvements, collects user tariffs, and reduces network losses.',
      financingSource: 'Corporate debt, municipal revenue bonds, and retained concession earnings.',
      revenueStream: 'Direct billings to consumer base (regulated water bills, transit tickets).',
      contractType: 'Exclusive Concession License with concession fee paid to municipality.'
    },
    cycleStages: [
      { phase: 'Regulatory Framework Setup', action: 'Municipality establishes independent tariff regulatory formula and asset baseline.', duration: '6 – 12 Months', responsible: 'Public' },
      { phase: 'Initial Capex Overhaul', action: 'Operator repairs pipeline leaks, replaces smart meters, and installs digital ticketing.', duration: '12 – 24 Months', responsible: 'SPV' },
      { phase: 'Efficiency Management', action: 'Operator minimizes non-revenue losses, collects tariffs, and pays concession royalty.', duration: '15 – 25 Years', responsible: 'SPV' },
      { phase: 'Scheduled Asset Handover', action: 'Modernized system transferred back with verified low non-revenue water/loss rates.', duration: 'Final 12 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Commercial Revenue Collection', bearer: 'Private (SPV)', mechanism: 'Operator absorbs billing and payment default risk from consumers' },
      { risk: 'Tariff Adjustment Approvals', bearer: 'Public (Grantor)', mechanism: 'Regulator obligated to approve indexation formula per contract terms' },
      { risk: 'Network Upgrade Capex Overrun', bearer: 'Private (SPV)', mechanism: 'Contractor manages pipeline and fleet capital expenditure' },
      { risk: 'Regulatory Expropriation', bearer: 'Public (Grantor)', mechanism: 'Full compensation based on discounted cash flow (DCF) valuation' },
      { risk: 'Customer Service Standards', bearer: 'Private (SPV)', mechanism: 'Regulatory fines and mandatory customer compensation credits' }
    ],
    flowNodes: [
      { source: 'Municipal Government / Regulator', relation: 'Grants Exclusive Operating Concession', target: 'Private Utility Concessionaire', type: 'contract' },
      { source: 'Private Utility Concessionaire', relation: 'Invests Capital Upgrades & Leak Repairs', target: 'Municipal Infrastructure Assets', type: 'service' },
      { source: 'Public Citizens & Businesses', relation: 'Pays Monthly Regulated Service Tariffs', target: 'Private Utility Concessionaire', type: 'finance' },
      { source: 'Private Utility Concessionaire', relation: 'Pays Concession Royalty / Annual Fee', target: 'Municipal Government / Regulator', type: 'finance' },
      { source: 'Private Utility Concessionaire', relation: 'Reverts Upgraded System with Low Losses', target: 'Municipal Government / Regulator', type: 'transfer' }
    ]
  },
  {
    id: 'people-first',
    code: 'People-First',
    name: 'UNECE People-First PPP (SDG-Integrated Model)',
    category: 'Hybrid / Mixed',
    ownership: 'Shared Equity',
    demandRisk: 'Shared',
    typicalDuration: '20 – 30 Years',
    summary:
      'The modern United Nations standard for 21st-century infrastructure. Moves beyond simple "Value for Money" to "Value for People and Planet", requiring mandatory compliance across 5 People-First outcomes: Access & Equity, Environmental Sustainability, Economic Multipliers, Replicability, and Stakeholder Engagement.',
    bestSuitedFor: [
      'Decentralized Rural Solar Microgrids & Mini-Grids',
      'Circular Economy & Community Solid Waste Recycling Hubs',
      'Affordable Social Housing with Integrated Green Corridors',
      'Rural Healthcare Telemedicine & Primary Care Networks'
    ],
    systemArchitecture: {
      publicRole: 'Provides blended finance, viability gap funding (VGF), and community equity stakes.',
      spvRole: 'Implements human-centric design, net-zero materials, and local hiring quotas.',
      financingSource: 'Blended finance: MDB concessional loans + Green bonds + Commercial equity.',
      revenueStream: 'Blended: Tiered pro-poor tariffs + Sovereign SDG outcome payments.',
      contractType: 'People-First Concession Accord with impact covenants tied to interest rates.'
    },
    cycleStages: [
      { phase: 'Co-Design & Prior Consultation', action: 'Comprehensive citizen, women, and indigenous consultations prior to tender.', duration: '6 – 9 Months', responsible: 'Joint' },
      { phase: 'Blended Financing & Green Build', action: 'Concessional debt mobilized; carbon footprint verified through life-cycle LCA.', duration: '18 – 24 Months', responsible: 'SPV' },
      { phase: 'Impact-Linked Operations', action: 'Financing margin discounts triggered when local job and decarbonization targets met.', duration: '20 – 30 Years', responsible: 'SPV' },
      { phase: 'Community Stewardship Transition', action: 'Local community co-ownership trust prepared for ongoing asset management.', duration: 'Final 24 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Climate Resilience & Extreme Weather', bearer: 'Shared', mechanism: 'Parametric climate insurance and climate-adapted civil standards' },
      { risk: 'Affordability for Low-Income Users', bearer: 'Public (Grantor)', mechanism: 'Targeted lifeline subsidies and cross-subsidized commercial tariffs' },
      { risk: 'Local Employment & Supply Quotas', bearer: 'Private (SPV)', mechanism: 'Mandatory 65%+ local procurement with penalty claw-backs' },
      { risk: 'Community Dispute & Social License', bearer: 'Shared', mechanism: 'Independent Community Liaison Committee with real-time grievance redress' },
      { risk: 'Decarbonization & Circularity KPIs', bearer: 'Private (SPV)', mechanism: 'Independent verification by accredited ESG auditors' }
    ],
    flowNodes: [
      { source: 'Sovereign Government & UNECE Standards', relation: 'Grants People-First Concession Charter', target: 'People-First Project Consortium', type: 'contract' },
      { source: 'MDBs & Green Climate Funds', relation: 'Blended Concessional Debt & Outcome Grants', target: 'People-First Project Consortium', type: 'finance' },
      { source: 'People-First Project Consortium', relation: 'Delivers Zero-Carbon Inclusive Infrastructure', target: 'Citizens, Women & Vulnerable Groups', type: 'service' },
      { source: 'Community & Public Users', relation: 'Tiered Affordable Tariffs + Outcome Payments', target: 'People-First Project Consortium', type: 'finance' },
      { source: 'People-First Project Consortium', relation: 'Vests Enriched Resilient Asset in Community', target: 'Local Public Stewardship Board', type: 'transfer' }
    ]
  },
  {
    id: 'om',
    code: 'O&M',
    name: 'Operations & Maintenance (Performance Management)',
    category: 'Service / Management',
    ownership: 'Public throughout',
    demandRisk: 'Public Sector',
    typicalDuration: '5 – 10 Years',
    summary:
      'A short-to-medium term contract where the public sector retains asset ownership and finances capital expenditure, but contracts an expert private operator to manage facilities, improve efficiency, and achieve strict performance benchmarks.',
    bestSuitedFor: [
      'National Railway Track & Rolling Stock Operations',
      'Municipal Water & Wastewater Treatment Plants',
      'Public Convention Centers & Sports Stadiums',
      'Municipal District Cooling & Heating Central Plants'
    ],
    systemArchitecture: {
      publicRole: 'Retains full ownership, funds major capex, pays base management fee + performance bonus.',
      spvRole: 'Provides expert engineering management, preventive maintenance, and staff upskilling.',
      financingSource: 'Public sector municipal budget (no private capital financing required).',
      revenueStream: 'Fixed Management Fee + Bonus for energy savings, leak reductions, and high uptime.',
      contractType: 'Performance-Based Management & Operations Contract (PBMC).'
    },
    cycleStages: [
      { phase: 'Baseline Performance Audit', action: 'Public authority conducts independent audit of existing asset condition and losses.', duration: '3 – 6 Months', responsible: 'Public' },
      { phase: 'Mobilization & Staff Upskilling', action: 'Private operator assumes operational command, introduces digital ERP systems.', duration: '3 – 6 Months', responsible: 'SPV' },
      { phase: 'Performance Optimization', action: 'Operator achieves efficiency milestones; receives quarterly performance incentive bonuses.', duration: '5 – 10 Years', responsible: 'SPV' },
      { phase: 'Seamless Knowledge Transfer', action: 'Trained public workforce resumes operations or retenders with higher baseline.', duration: 'Final 6 Months', responsible: 'Joint' }
    ],
    riskAllocation: [
      { risk: 'Operating Cost Efficiency', bearer: 'Private (SPV)', mechanism: 'Performance deductions if operating expenditure exceeds agreed budget cap' },
      { risk: 'Major Capital Replacement (Capex)', bearer: 'Public (Grantor)', mechanism: 'Public sector remains responsible for funding structural overhauls' },
      { risk: 'Demand & User Revenue Risk', bearer: 'Public (Grantor)', mechanism: 'Operator receives fixed base fee; government collects customer revenues' },
      { risk: 'Staff Safety & OSHA Compliance', bearer: 'Private (SPV)', mechanism: 'Strict statutory liability and zero-tolerance workplace safety codes' },
      { risk: 'Asset Condition Preservation', bearer: 'Private (SPV)', mechanism: 'Adherence to manufacturer warranty terms and preventive maintenance logs' }
    ],
    flowNodes: [
      { source: 'Public Asset Owner (Ministry)', relation: 'Signs Performance Management Contract', target: 'Specialized Private O&M Operator', type: 'contract' },
      { source: 'Specialized Private O&M Operator', relation: 'Deploys Expert Maintenance & Digital Systems', target: 'Public Infrastructure Facility', type: 'service' },
      { source: 'Public Infrastructure Facility', relation: 'Delivers Flawless High-Efficiency Service', target: 'Citizen Customers', type: 'service' },
      { source: 'Public Asset Owner (Ministry)', relation: 'Pays Base Fee + Performance Savings Bonus', target: 'Specialized Private O&M Operator', type: 'finance' },
      { source: 'Specialized Private O&M Operator', relation: 'Hands Over Upgraded Ops Logs & Trained Staff', target: 'Public Asset Owner (Ministry)', type: 'transfer' }
    ]
  }
];

export const PPPProcessAndModelsEngine: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [activeMainTab, setActiveMainTab] = useState<'lifecycle' | 'models' | 'comparator'>('lifecycle');
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [selectedModelId, setSelectedModelId] = useState('bot');
  const [activeModelTab, setActiveModelTab] = useState<'architecture' | 'cycle' | 'risks'>('architecture');

  const currentStage = INTERNATIONAL_PPP_LIFECYCLE[selectedStageIndex];
  const currentModel = COMPREHENSIVE_PPP_MODELS.find(m => m.id === selectedModelId) || COMPREHENSIVE_PPP_MODELS[0];

  return (
    <div id="ppp-process-models-engine" className="my-8 sm:my-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* 1. Header Banner & Section Switcher */}
      <div className="bg-slate-900 text-white p-5 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0072bc]/30 border border-[#0072bc]/50 text-sky-200 text-xs font-black uppercase tracking-wider mb-2">
              <Workflow className="w-3.5 h-3.5 text-sky-400" />
              <span>International UNECE & UNCITRAL Standard Framework</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white">
              PPP Process Lifecycle & Contract Model Systems
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-3xl leading-relaxed">
              Explore the authoritative 7-stage international project delivery process cycle and examine the architectural flowcharts, risk matrices, and cashflow dynamics for every major PPP model.
            </p>
          </div>

          {/* Primary View Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-800 p-1.5 rounded-xl border border-slate-700 shrink-0">
            <button
              onClick={() => setActiveMainTab('lifecycle')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMainTab === 'lifecycle'
                  ? 'bg-[#0072bc] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>7-Stage Lifecycle</span>
            </button>

            <button
              onClick={() => setActiveMainTab('models')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMainTab === 'models'
                  ? 'bg-[#0072bc] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Model System Charts</span>
            </button>

            <button
              onClick={() => setActiveMainTab('comparator')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMainTab === 'comparator'
                  ? 'bg-[#0072bc] text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Model Selector Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. TAB CONTENT 1: The 7-Stage Process Lifecycle */}
      {activeMainTab === 'lifecycle' && (
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Horizontal Process Cycle Timeline Stepper */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Project Delivery Process Sequence (Click any stage to inspect)
              </span>
              <span className="text-xs font-bold text-[#0072bc]">
                Stage {currentStage.stageNumber} of 7 • Typical: {currentStage.duration}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {INTERNATIONAL_PPP_LIFECYCLE.map((stage, idx) => {
                const isSelected = selectedStageIndex === idx;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStageIndex(idx)}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0072bc] bg-sky-50/70 shadow-sm ring-2 ring-[#0072bc]/20'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-[#0072bc] text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          P{stage.stageNumber}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3 h-3 text-[#0072bc]" />}
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                        {stage.title.split(': ')[1] || stage.title}
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-2 font-medium">
                      {stage.duration}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Stage Deep-Dive Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 sm:p-7">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black text-white bg-[#0072bc]">
                    Stage {currentStage.stageNumber} of 7
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Duration: {currentStage.duration}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {currentStage.sdgFocus}
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                  {currentStage.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
                  {currentStage.subtitle}
                </p>
              </div>

              {/* Stage Stepper Quick Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSelectedStageIndex(Math.max(0, selectedStageIndex - 1))}
                  disabled={selectedStageIndex === 0}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setSelectedStageIndex(Math.min(INTERNATIONAL_PPP_LIFECYCLE.length - 1, selectedStageIndex + 1))}
                  disabled={selectedStageIndex === INTERNATIONAL_PPP_LIFECYCLE.length - 1}
                  className="px-3 py-1.5 rounded-lg bg-[#0072bc] text-white text-xs font-bold hover:bg-[#005a96] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Stage Narrative Description */}
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 mb-6 text-sm text-slate-700 leading-relaxed text-justify">
              <span className="font-bold text-slate-900 block mb-1">Stage Scope & Institutional Mandate:</span>
              {currentStage.description}
            </div>

            {/* 4 Multi-Column Information Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Box 1: Core Objectives */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#0072bc] uppercase tracking-wider mb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0072bc]" />
                    <span>Key Objectives</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#0072bc] font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Box 2: Required Inputs */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 uppercase tracking-wider mb-2.5">
                    <FileText className="w-4 h-4 text-amber-500" />
                    <span>Statutory Inputs</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.keyInputs.map((inp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{inp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Box 3: Formal Deliverables */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-emerald-700 uppercase tracking-wider mb-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Key Deliverables</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.keyDeliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Box 4: Approval Gate Criteria */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black text-purple-700 uppercase tracking-wider mb-2.5">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span>Gate Approval Criteria</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentStage.gateCriteria.map((crit, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. TAB CONTENT 2: Model-by-Model System Charts & Cycles */}
      {activeMainTab === 'models' && (
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Model Selector Pills */}
          <div className="mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">
              Select PPP Contract Archetype:
            </span>
            <div className="flex flex-wrap gap-2">
              {COMPREHENSIVE_PPP_MODELS.map((model) => {
                const isSelected = selectedModelId === model.id;
                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModelId(model.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-[#0072bc] text-white border-[#0072bc] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {model.code}
                    </span>
                    <span>{model.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Model Overview Banner */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[11px] font-black uppercase bg-[#0072bc] text-white">
                    {currentModel.code}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 border border-slate-200">
                    Category: {currentModel.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 border border-slate-200">
                    Ownership: {currentModel.ownership}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 border border-slate-200">
                    Concession Term: {currentModel.typicalDuration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {currentModel.name}
                </h3>
              </div>

              {/* Sub-Tabs for this Model */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shrink-0">
                <button
                  onClick={() => setActiveModelTab('architecture')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeModelTab === 'architecture'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  System Chart
                </button>
                <button
                  onClick={() => setActiveModelTab('cycle')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeModelTab === 'cycle'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Process Timeline
                </button>
                <button
                  onClick={() => setActiveModelTab('risks')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeModelTab === 'risks'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Risk Matrix
                </button>
              </div>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
              {currentModel.summary}
            </p>

            {/* Best Suited Sectors */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-900">Optimal Sector Application:</span>
              {currentModel.bestSuitedFor.map((sec, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium">
                  {sec}
                </span>
              ))}
            </div>
          </div>

          {/* Sub-Tab 1: Contractual & Financial System Flowchart */}
          {activeModelTab === 'architecture' && (
            <div className="space-y-6">
              {/* Visual System Architecture Diagram */}
              <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200">
                <div className="text-center mb-6">
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                    Contractual & Cashflow System Architecture: {currentModel.code}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Multi-party stakeholder relationships, governance protocols, and financial interfaces
                  </p>
                </div>

                {/* Interactive Flow Chart Nodes Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {currentModel.flowNodes.map((node, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#0072bc]/50 transition-colors">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {node.source}
                      </div>
                      <div className="my-2 flex items-center gap-1.5 text-xs font-black text-[#0072bc]">
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                        <span>{node.relation}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 bg-white p-2 rounded border border-slate-200">
                        {node.target}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4 Structural Pillars Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <span className="font-black text-slate-500 uppercase text-[10px] block mb-1">Public Authority Role</span>
                    <p className="text-slate-800 leading-snug">{currentModel.systemArchitecture.publicRole}</p>
                  </div>
                  <div>
                    <span className="font-black text-slate-500 uppercase text-[10px] block mb-1">SPV Concessionaire Role</span>
                    <p className="text-slate-800 leading-snug">{currentModel.systemArchitecture.spvRole}</p>
                  </div>
                  <div>
                    <span className="font-black text-slate-500 uppercase text-[10px] block mb-1">Capital Financing Source</span>
                    <p className="text-slate-800 leading-snug">{currentModel.systemArchitecture.financingSource}</p>
                  </div>
                  <div>
                    <span className="font-black text-slate-500 uppercase text-[10px] block mb-1">Primary Revenue Mechanism</span>
                    <p className="text-slate-800 leading-snug">{currentModel.systemArchitecture.revenueStream}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sub-Tab 2: Lifecycle Process Timeline */}
          {activeModelTab === 'cycle' && (
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-6">
                Execution Lifecycle Phases for {currentModel.name}
              </h4>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200">
                {currentModel.cycleStages.map((st, i) => (
                  <div key={i} className="flex items-start gap-4 relative pl-10">
                    {/* Circle Node */}
                    <div className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-[#0072bc] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                      {i + 1}
                    </div>

                    <div className="flex-1 p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-sm font-black text-slate-900">{st.phase}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                            {st.duration}
                          </span>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                            st.responsible === 'SPV' ? 'bg-amber-100 text-amber-800' : st.responsible === 'Public' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            Led by: {st.responsible}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">{st.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-Tab 3: Risk Allocation Matrix */}
          {activeModelTab === 'risks' && (
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">
                Risk Allocation Matrix for {currentModel.name}
              </h4>
              <p className="text-xs text-slate-600 mb-6">
                Standard international risk apportionment based on UNECE People-First guidelines.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                      <th className="p-3 font-black uppercase text-[10px]">Risk Category</th>
                      <th className="p-3 font-black uppercase text-[10px]">Primary Risk Bearer</th>
                      <th className="p-3 font-black uppercase text-[10px]">Contractual Mitigation Tool</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {currentModel.riskAllocation.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/80">
                        <td className="p-3 font-bold text-slate-900">{row.risk}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                            row.bearer.includes('Private')
                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                              : row.bearer.includes('Public')
                              ? 'bg-sky-50 text-sky-800 border border-sky-200'
                              : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          }`}>
                            {row.bearer}
                          </span>
                        </td>
                        <td className="p-3 text-slate-700">{row.mechanism}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. TAB CONTENT 3: Model Selector Decision Matrix */}
      {activeMainTab === 'comparator' && (
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              PPP Model Selection & Comparative Decision Matrix
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Cross-model structural comparison according to funding stream, asset ownership, and demand risk allocation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3.5 font-black uppercase text-[10px]">Model</th>
                  <th className="p-3.5 font-black uppercase text-[10px]">Category</th>
                  <th className="p-3.5 font-black uppercase text-[10px]">Asset Title Ownership</th>
                  <th className="p-3.5 font-black uppercase text-[10px]">Demand Risk Bearer</th>
                  <th className="p-3.5 font-black uppercase text-[10px]">Term Length</th>
                  <th className="p-3.5 font-black uppercase text-[10px]">Optimal Target Sector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {COMPREHENSIVE_PPP_MODELS.map((m) => (
                  <tr
                    key={m.id}
                    onClick={() => {
                      setSelectedModelId(m.id);
                      setActiveMainTab('models');
                    }}
                    className="hover:bg-sky-50/60 cursor-pointer transition-colors"
                    title="Click to view detailed system chart for this model"
                  >
                    <td className="p-3.5 font-black text-slate-900">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-300 font-mono mr-1.5">
                        {m.code}
                      </span>
                      <span>{m.name.split(' (')[0]}</span>
                    </td>
                    <td className="p-3.5 text-slate-700">{m.category}</td>
                    <td className="p-3.5 text-slate-700">{m.ownership}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        m.demandRisk === 'Private Sector'
                          ? 'bg-amber-100 text-amber-900'
                          : m.demandRisk === 'Public Sector'
                          ? 'bg-sky-100 text-sky-900'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}>
                        {m.demandRisk}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600">{m.typicalDuration}</td>
                    <td className="p-3.5 text-slate-600 max-w-xs truncate">
                      {m.bestSuitedFor[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-start gap-3 text-xs text-blue-950">
            <Info className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">Decision Guide for Contracting Authorities:</span>
              <span>
                Select <strong>BOT</strong> or <strong>Concessions</strong> when strong commercial toll revenues can self-finance debt. Choose <strong>DBFO (Availability PPP)</strong> for social healthcare or education assets where equitable free public access is paramount. Choose <strong>People-First PPP</strong> whenever the primary objective is closing SDG inequality, climate adaptation, and community co-benefit.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

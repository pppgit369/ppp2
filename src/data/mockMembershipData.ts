import {
  MemberProfile,
  KYCApplicantData,
  MemberInboxItem,
  MemberMailMessage,
  MemberCourse,
  MemberCertificate,
  MemberContract,
  MemberProject,
  MemberBillingInvoice,
  NotificationLog
} from '../types/membership';

export const MOCK_ACTIVE_VIP_MEMBER: MemberProfile = {
  id: 'PU-VIP-2026-0889',
  fullName: 'Dr. Tariq Al-Mansoor',
  title: 'Executive Managing Director',
  entityName: 'Gulf & Global Sustainable Infrastructure Holding Ltd',
  tier: 'vip',
  country: 'United Arab Emirates',
  email: 'tariq.almansoor@gg-infrastructure.ae',
  phone: '+971 50 889 4210',
  joinedDate: '15 January 2024',
  guarantorNote: 'VIP Security Guarantee (€12,000,000 via First Abu Dhabi Bank / BBB+ non-sanctioned credit)',
  monthlyFee: 1000,
  complianceStatus: 'Active & Verified'
};

export const MOCK_ACTIVE_GOLDEN_MEMBER: MemberProfile = {
  id: 'PU-GLD-2026-0412',
  fullName: 'Elena Rostova',
  title: 'Chief Investment Officer',
  entityName: 'Euro-Danube Clean Water & Transport SPV',
  tier: 'golden',
  country: 'Austria',
  email: 'e.rostova@euro-danube-spv.eu',
  phone: '+43 676 492 1102',
  joinedDate: '02 June 2024',
  guarantorNote: 'Golden Member Bank Guarantee (€2,000,000 Erste Group Bank AG)',
  monthlyFee: 500,
  complianceStatus: 'Active & Verified'
};

export const MOCK_PENDING_APPLICANTS: KYCApplicantData[] = [
  {
    id: 'APP-2026-0194',
    submissionDate: '2026-09-02',
    status: 'pending_review',
    tier: 'vip',
    fullName: 'Jean-Luc Moreau',
    designation: 'Managing Partner',
    companyName: 'Trans-Alpine Rail & Solar Concessions SA',
    registrationNumber: 'CHE-491.209.832',
    country: 'Switzerland',
    website: 'https://transalpine-concessions.ch',
    companyLicenseName: 'CHE_Commercial_Register_License_2026.pdf',
    passportDocumentName: 'Passport_JL_Moreau_CH.pdf',
    projectDetails: 'High-speed zero-emission freight tunnel and 180MW solar sound barrier network under Swiss-Italian concession framework.',
    projectSector: 'Sustainable Transportation & Clean Energy',
    estimatedBudget: '€420,000,000',
    targetCountry: 'Switzerland / Italy',
    accepted17SDGs: true,
    globalizationPledge: true,
    mobileNumber: '+41 79 382 9104',
    email: 'jl.moreau@transalpine-concessions.ch',
    officeAddress: 'Rue du Rhone 42, 1204 Geneva, Switzerland',
    utilityBillType: 'Electricity / Municipal Energy Bill',
    utilityBillDocumentName: 'SIG_Geneva_Utility_Verification.pdf',
    guarantorType: 'bank_guarantee',
    bankGuaranteeAmount: '€12,000,000 for 2 Years',
    bankName: 'Banque Cantonale de Genève (BCGE)',
    bankSwiftRating: 'AA- Rated / Non-Sanctioned Swiss Financial Institution',
    antiSanctionAgreement: true,
    nonMilitaryPoliticianAgreement: true,
    blacklistAuthorizationAgreement: true
  },
  {
    id: 'APP-2026-0188',
    submissionDate: '2026-08-30',
    status: 'pending_review',
    tier: 'golden',
    fullName: 'Amara Nwosu',
    designation: 'Executive Director',
    companyName: 'Lekki Maritime Desalination Consortium Ltd',
    registrationNumber: 'RC-9982412-NG',
    country: 'Nigeria',
    website: 'https://lekkimaritime-desal.ng',
    companyLicenseName: 'CAC_Corporate_Incorporation_Certificate.pdf',
    passportDocumentName: 'Passport_Amara_Nwosu.pdf',
    projectDetails: 'Municipal seawater reverse osmosis desalination facility supplying 120,000 m3/day of potable clean water to coastal communities.',
    projectSector: 'Clean Water & Sanitation (SDG 6)',
    estimatedBudget: '€85,000,000',
    targetCountry: 'Nigeria',
    accepted17SDGs: true,
    globalizationPledge: true,
    mobileNumber: '+234 803 551 2890',
    email: 'anwosu@lekkimaritime-desal.ng',
    officeAddress: 'Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    utilityBillType: 'Eko Electricity Distribution Bill',
    utilityBillDocumentName: 'EKEDP_Office_Utility_Bill.pdf',
    guarantorType: 'vip_guarantor',
    vipGuarantorName: 'Dr. Tariq Al-Mansoor',
    vipGuarantorMemberId: 'PU-VIP-2026-0889',
    bankGuaranteeAmount: '€2,000,000 Equivalent',
    bankName: 'Guaranty Trust Bank / Stanbic IBTC',
    bankSwiftRating: 'BBB- Investment Grade Equivalent',
    antiSanctionAgreement: true,
    nonMilitaryPoliticianAgreement: true,
    blacklistAuthorizationAgreement: true
  }
];

export const MOCK_INBOX_ITEMS: MemberInboxItem[] = [
  {
    id: 'INB-2026-081',
    sender: 'ppp@pppunion.org',
    title: 'Official Executive Instruction: Mandatory Non-Sanctionable Compliance Audit for Q3 2026',
    referenceNumber: 'PU-SEC-CIR-2026-92',
    category: 'Official Instruction',
    date: '01 September 2026',
    content: 'Dear Accredited Member, Pursuant to UN General Assembly Resolution A/RES/70/1 (Declaration Paragraph 30) and UNECE People-First Standards, all active PPP concessions must complete their biannual civilian neutrality and non-sanctionability certification. Your registered infrastructure assets have been preliminarily cleared. Please verify your asset portfolio in My Projects.',
    attachmentName: 'PPP_Union_Compliance_Circular_Q3_2026.pdf',
    isRead: false
  },
  {
    id: 'INB-2026-077',
    sender: 'members@pppunion.org',
    title: 'Accreditation Renewal & Monthly Service Dossier Confirmation',
    referenceNumber: 'PU-MEM-ACC-2026-14',
    category: 'Executive Circular',
    date: '28 August 2026',
    content: 'Your membership services have been certified by the Secretariat for the current cycle. The monthly service billing statement (€1,000 VIP / €500 Golden) has been finalized and approved by ppp@pppunion.org. Your VIP sovereign communication channels remain fully open.',
    isRead: true
  },
  {
    id: 'INB-2026-064',
    sender: 'ppp@pppunion.org',
    title: 'UNECE Standard Concessions Legal Model Enactment Notice',
    referenceNumber: 'PU-LEGAL-2026-04',
    category: 'Legal Update',
    date: '14 August 2026',
    content: 'The 38 Model Legislative Provisions under UN Document ECE/CECI/WP/PPP/2022/5 have been integrated into our standard contracts clause generator in your My Contract vault.',
    attachmentName: 'UNECE_Model_Clause_Integration_Brief.pdf',
    isRead: true
  }
];

export const MOCK_MAIL_MESSAGES: MemberMailMessage[] = [
  {
    id: 'MAIL-001',
    senderName: 'Dr. Tariq Al-Mansoor',
    senderEmail: 'tariq.almansoor@gg-infrastructure.ae',
    senderTier: 'vip',
    recipientEmail: 'members@pppunion.org',
    recipientType: 'administration',
    subject: 'Inquiry regarding Sovereign Guarantee Verification for Port Concession',
    content: 'Dear PPP Union Secretariat, We are currently preparing the project finance documentation for the expansion of the sustainable container terminal. We require the official endorsement letter citing UN Resolution A/RES/70/1 for multilateral debt syndication. Thank you.',
    timestamp: '2026-09-03 14:22',
    isRead: true,
    isImportant: true
  },
  {
    id: 'MAIL-002',
    senderName: 'Secretariat Administration (members@pppunion.org)',
    senderEmail: 'members@pppunion.org',
    recipientEmail: 'tariq.almansoor@gg-infrastructure.ae',
    recipientType: 'administration',
    subject: 'RE: Sovereign Guarantee Verification for Port Concession - Document Dispatched',
    content: 'Dear Dr. Al-Mansoor, Your endorsement certificate and UN GA A/RES/70/1 non-sanctionability certification has been deposited into your My Certificates vault. You may also reference contract dossier PU-CON-2026-091.',
    timestamp: '2026-09-03 16:45',
    isRead: false
  },
  {
    id: 'MAIL-003',
    senderName: 'Sheikh Faisal Al-Qasimi (VIP Member)',
    senderEmail: 'faisal.qasimi@emirates-infra.ae',
    senderTier: 'vip',
    recipientEmail: 'tariq.almansoor@gg-infrastructure.ae',
    recipientType: 'vip_member',
    subject: 'VIP Peer Network: Potential Co-Financing for Desalination Project',
    content: 'Greetings Brother Tariq. I noticed your registered PPP project under SDG 6 on the VIP Member Exchange. Our syndicate is interested in reviewing the equity tranche. Let us coordinate via the encrypted VIP channel.',
    timestamp: '2026-09-02 09:15',
    isRead: true,
    isImportant: true
  }
];

export const MOCK_COURSES: MemberCourse[] = [
  {
    id: 'CRS-2026-09',
    month: 'September 2026',
    title: 'People-First Concession Structuring & UNECE 38 Model Provisions',
    moduleCount: 6,
    durationHours: '14 Hours',
    instructor: 'Prof. David S. Hamilton (Geneva PPP Institute / UNECE Rapporteur)',
    description: 'Advanced executive masterclass dissecting statutory concession models, step-in rights, lender direct agreements, and ensuring People-First "Value for People" compliance across public tenders.',
    syllabus: [
      'Module 1: Evolution of Concession Law from Directive 2014/23/EU to UNECE Standards',
      'Module 2: The 5 People-First Benchmarks: Access, Equity, Efficiency, Ecology, Replicability',
      'Module 3: Direct Agreement Clauses & Sovereign Cure Periods for Commercial Debt',
      'Module 4: Termination Compensation & International ICSID Arbitration Protocols',
      'Module 5: Practical Case Study: Structuring a 30-Year Solar Railway Concession',
      'Module 6: Capstone Review & Official Executive Examination'
    ],
    lectureNotesPdf: 'Course_Lecture_Notes_September_2026.pdf',
    completionProgress: 75,
    status: 'Available'
  },
  {
    id: 'CRS-2026-08',
    month: 'August 2026',
    title: 'Bankable Guarantees, BBB-Ranked Banking & Non-Sanctionable Finance',
    moduleCount: 5,
    durationHours: '12 Hours',
    instructor: 'Dr. Helena Brandt (Multilateral Project Finance Directorate)',
    description: 'Mastery of sovereign risk mitigation, counter-indemnities, demand guarantees, and utilizing UN Resolution A/RES/70/1 Art 30 to protect civilian critical infrastructure against extraterritorial sanctions.',
    syllabus: [
      'Module 1: Bank Guarantee Architecture: Standby L/Cs vs Demand Guarantees',
      'Module 2: Credit Assessment of BBB Ranked Financial Institutions in Non-Sanctioned Jurisdictions',
      'Module 3: Sovereign Debt Assumption & Fiscal Risk Contingency Planning',
      'Module 4: Humanitarian Non-Sanctionability of Water, Power, and Health PPPs',
      'Module 5: Final Simulation Exercise'
    ],
    lectureNotesPdf: 'Course_Lecture_Notes_August_2026.pdf',
    completionProgress: 100,
    status: 'Completed'
  },
  {
    id: 'CRS-2026-10',
    month: 'October 2026 (Upcoming)',
    title: 'Artificial Intelligence, Digital Twins & 17-SDGs Impact Metrics in PPPs',
    moduleCount: 6,
    durationHours: '16 Hours',
    instructor: 'Secretariat Technical Advisory Group',
    description: 'Deploying AI-driven lifecycle monitoring, predictive maintenance for public assets, and automated carbon-offset reporting in accordance with UN SDG 9, 11, and 13.',
    syllabus: [
      'Module 1: Digital Twins in Concession Asset Management',
      'Module 2: AI-Assisted Procurement Verification and Anti-Corruption Oversight',
      'Module 3: Real-Time SDG Impact Telemetry & ESG Bond Issuance'
    ],
    lectureNotesPdf: 'Course_Lecture_Notes_October_2026_Syllabus.pdf',
    completionProgress: 0,
    status: 'Upcoming'
  }
];

export const MOCK_CERTIFICATES: MemberCertificate[] = [
  {
    id: 'CERT-VIP-001',
    serialNumber: 'PU-CERT-2024-VIP-8890',
    title: 'Accredited International PPP Practitioner & VIP Sovereign Partner',
    issuedDate: '15 January 2024',
    expiryDate: '15 January 2027',
    authority: 'PPP Union Executive Secretariat & Accreditation Board',
    description: 'Conferred upon Gulf & Global Sustainable Infrastructure Holding Ltd in recognition of demonstrated capacity, institutional integrity, and provision of compliant BBB-backed security guarantees.',
    verificationQr: 'https://pppunion.org/verify/PU-CERT-2024-VIP-8890',
    category: 'Accreditation'
  },
  {
    id: 'CERT-SDG-002',
    serialNumber: 'PU-SDG-2025-17G-4921',
    title: 'UN 17-SDGs Universal Compliance & Non-Sanctionable Good Standing Award',
    issuedDate: '10 July 2025',
    expiryDate: '10 July 2026',
    authority: 'High Commissioner on Sustainable Infrastructure Cooperation',
    description: 'Certifies that all active infrastructure holdings under the members portfolio rigorously adhere to UN A/RES/70/1 principles and are protected under international public law.',
    verificationQr: 'https://pppunion.org/verify/PU-SDG-2025-17G-4921',
    category: 'Award'
  },
  {
    id: 'CERT-LEGAL-003',
    serialNumber: 'PU-COMP-2026-Q1-1102',
    title: 'Anti-Sanction & Anti-Money Laundering Strict Verification Certificate',
    issuedDate: '05 February 2026',
    expiryDate: '05 February 2027',
    authority: 'PPP Union Legal & Compliance Directorate',
    description: 'Verified clear from all UN sanction lists, INTERPOL notices, political interference, or defense-linked affiliations.',
    verificationQr: 'https://pppunion.org/verify/PU-COMP-2026-Q1-1102',
    category: 'Compliance'
  }
];

export const MOCK_CONTRACTS: MemberContract[] = [
  {
    id: 'CON-001',
    contractNumber: 'PU-CON-2025-081',
    title: '30-Year DBFOM Concession: Solar Desalination & Distribution Network',
    counterparty: 'Ministry of Water Resources & Energy (Host Sovereign Government)',
    status: 'ongoing',
    concessionModel: 'Design-Build-Finance-Operate-Maintain (DBFOM)',
    sourceOfFunding: 'Green Climate Fund (GCF) + European Investment Bank (EIB) + VIP Private Equity Tranche',
    accreditedFacilitator: 'PPP Union Certified Facilitator Desk (Geneva & Abu Dhabi)',
    termYears: '30 Years (2025 – 2055)',
    contractValue: '€185,000,000',
    lastUpdated: '2026-08-20',
    details: 'Full concession agreement executed under UNECE Standard Model Contract provisions. Guarantees 85,000 m3 of drinking water daily with 100% solar array power and zero public budget sovereign debt liability.'
  },
  {
    id: 'CON-002',
    contractNumber: 'PU-CON-2024-039',
    title: 'Regional Smart Electric Bus Rapid Transit (BRT) Fleet Concession',
    counterparty: 'Metropolitan Urban Transport Authority',
    status: 'completed',
    concessionModel: 'Build-Operate-Transfer (BOT)',
    sourceOfFunding: 'Asian Development Bank (ADB) & Commercial Sovereign Syndicate',
    accreditedFacilitator: 'Global Infrastructure Legal Counsel & Facilitators LLP',
    termYears: '12 Years (Completed Phase 1 & 2)',
    contractValue: '€92,000,000',
    lastUpdated: '2026-07-15',
    details: 'Project reached financial close on schedule; 240 electric transit buses fully operational; zero carbon certification delivered.'
  },
  {
    id: 'CON-003',
    contractNumber: 'PU-CON-2026-102',
    title: 'Deepwater Bulk Logistics Terminal & Freezone Concession',
    counterparty: 'National Port Authority & Maritime Commission',
    status: 'under_review',
    concessionModel: 'Rehabilitate-Operate-Transfer (ROT)',
    sourceOfFunding: 'Multilateral Sovereign Wealth Consortium',
    accreditedFacilitator: 'PPP Union Legal Directorate (members@pppunion.org)',
    termYears: '25 Years',
    contractValue: '€310,000,000',
    lastUpdated: '2026-09-01',
    details: 'Under review by Secretariat for compliance with UN Resolution A/RES/70/1 Art 30 non-sanctionability and competitive dialogue bidding.'
  },
  {
    id: 'CON-004',
    contractNumber: 'PU-CON-2023-018',
    title: 'Municipal Waste-to-Energy Thermal Plant (Declined Due to Regulatory Conflict)',
    counterparty: 'District Municipal Council',
    status: 'declined',
    concessionModel: 'BOOT',
    sourceOfFunding: 'Unsecured Private Debt',
    accreditedFacilitator: 'Independent Unaccredited Broker',
    termYears: '20 Years',
    contractValue: '€45,000,000',
    lastUpdated: '2024-03-10',
    details: 'Declined by PPP Union Compliance Board: Fails People-First emissions standard and lacked AAA/BBB bank guarantee assurance.'
  }
];

export const MOCK_PROJECTS: MemberProject[] = [
  {
    id: 'PRJ-2026-01',
    projectCode: 'SDG-PRJ-AE-001',
    projectName: 'Al-Ain Zero-Carbon Solar Desalination Plant',
    sector: 'Clean Water & Renewable Energy',
    hostCountry: 'United Arab Emirates',
    capexAmount: '€185,000,000',
    sdgGoals: [6, 7, 9, 13, 17],
    nonSanctionableStatus: 'Verified Non-Sanctionable (UN Charter / A/RES/70/1 Art 30)',
    status: 'Operational',
    facilitatorAssigned: 'Eng. Mansoor Al-Ketbi (Senior PPP Facilitator)'
  },
  {
    id: 'PRJ-2026-02',
    projectCode: 'SDG-PRJ-CH-004',
    projectName: 'Trans-Alpine Green Freight Logistics Hub',
    sector: 'Sustainable Transportation & Logistics',
    hostCountry: 'Switzerland',
    capexAmount: '€340,000,000',
    sdgGoals: [9, 11, 13, 17],
    nonSanctionableStatus: 'Verified Non-Sanctionable (UN Charter / A/RES/70/1 Art 30)',
    status: 'Financially Closed',
    facilitatorAssigned: 'Dr. Lucas Vaud (Geneva Infrastructure Desk)'
  },
  {
    id: 'PRJ-2026-03',
    projectCode: 'SDG-PRJ-NG-009',
    projectName: 'Lagos Island Coastal Maternal Care Center & Solar Microgrid',
    sector: 'Public Health & Social Infrastructure (SDG 3)',
    hostCountry: 'Nigeria',
    capexAmount: '€55,000,000',
    sdgGoals: [3, 7, 10, 17],
    nonSanctionableStatus: 'Verified Non-Sanctionable (UN Charter / A/RES/70/1 Art 30)',
    status: 'Under Tendering',
    facilitatorAssigned: 'Dr. Amara Nwosu (West Africa Liaison Center)'
  }
];

export const MOCK_INVOICES: MemberBillingInvoice[] = [
  {
    id: 'INV-2026-09-889',
    invoiceNumber: 'PU-BILL-2026-09-0889',
    billingMonth: 'September 2026',
    issueDate: '01 September 2026',
    dueDate: '15 September 2026',
    tier: 'vip',
    amountEur: 1000,
    status: 'Paid & Approved by ppp@pppunion.org',
    paymentReference: 'SWIFT-SEPA-PU-992019482-FAB',
    authorizedBy: 'ppp@pppunion.org'
  },
  {
    id: 'INV-2026-08-889',
    invoiceNumber: 'PU-BILL-2026-08-0889',
    billingMonth: 'August 2026',
    issueDate: '01 August 2026',
    dueDate: '15 August 2026',
    tier: 'vip',
    amountEur: 1000,
    status: 'Paid & Approved by ppp@pppunion.org',
    paymentReference: 'SWIFT-SEPA-PU-881204918-FAB',
    authorizedBy: 'ppp@pppunion.org'
  },
  {
    id: 'INV-2026-07-889',
    invoiceNumber: 'PU-BILL-2026-07-0889',
    billingMonth: 'July 2026',
    issueDate: '01 July 2026',
    dueDate: '15 July 2026',
    tier: 'vip',
    amountEur: 1000,
    status: 'Paid & Approved by ppp@pppunion.org',
    paymentReference: 'SWIFT-SEPA-PU-774920112-FAB',
    authorizedBy: 'ppp@pppunion.org'
  }
];

export const MOCK_NOTIFICATION_LOGS: NotificationLog[] = [
  {
    id: 'LOG-001',
    timestamp: '2026-09-04 11:30:12',
    memberId: 'PU-VIP-2026-0889',
    channel: 'BOTH',
    recipientPhone: '+971 50 889 4210',
    recipientEmail: 'tariq.almansoor@gg-infrastructure.ae',
    triggerEvent: 'Admin Deposited New Document in My Inbox',
    messagePreview: 'PPP Union Notice: An official instruction (Ref: PU-SEC-CIR-2026-92) has been deposited in your My Inbox box by ppp@pppunion.org.',
    deliveryStatus: 'Delivered'
  },
  {
    id: 'LOG-002',
    timestamp: '2026-09-01 08:00:00',
    memberId: 'PU-VIP-2026-0889',
    channel: 'BOTH',
    recipientPhone: '+971 50 889 4210',
    recipientEmail: 'tariq.almansoor@gg-infrastructure.ae',
    triggerEvent: 'Monthly Automated Service Invoice Created',
    messagePreview: 'Invoice Alert: September 2026 VIP Membership Service invoice of €1,000 generated. Auto-cleared by ppp@pppunion.org.',
    deliveryStatus: 'Delivered'
  },
  {
    id: 'LOG-003',
    timestamp: '2026-08-28 14:15:22',
    memberId: 'PU-VIP-2026-0889',
    channel: 'EMAIL',
    recipientPhone: '+971 50 889 4210',
    recipientEmail: 'tariq.almansoor@gg-infrastructure.ae',
    triggerEvent: 'New Course Lecture Available in My Courses',
    messagePreview: 'New Lecture Alert: "People-First Concession Structuring & UNECE 38 Model Provisions" added to your My Courses folder.',
    deliveryStatus: 'Delivered'
  }
];

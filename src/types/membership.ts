export type MembershipTier = 'green' | 'golden' | 'vip';

export type ApplicationStatus = 'pending_review' | 'approved' | 'rejected' | 'under_investigation';

export type ContractStatus = 'ongoing' | 'completed' | 'declined' | 'under_review';

export interface KYCApplicantData {
  id: string;
  submissionDate: string;
  status: ApplicationStatus;
  tier: MembershipTier;
  
  // 1. General KYC/CIS
  fullName: string;
  designation: string;
  companyName: string;
  registrationNumber: string;
  country: string;
  website: string;
  
  // 2. Uploaded documents (names/mock metadata)
  companyLicenseName: string;
  passportDocumentName: string;
  
  // 4. Projects details
  projectDetails: string;
  projectSector: string;
  estimatedBudget: string;
  targetCountry: string;
  
  // 5. 17 SDGs Formal Acceptance
  accepted17SDGs: boolean;
  globalizationPledge: boolean;
  
  // 6, 7, 8, 9. Contact & Verified Address
  mobileNumber: string;
  email: string;
  officeAddress: string;
  utilityBillType: string;
  utilityBillDocumentName: string;
  
  // 10. Guarantor Declaration
  guarantorType: 'vip_guarantor' | 'bank_guarantee';
  vipGuarantorName?: string;
  vipGuarantorMemberId?: string;
  bankGuaranteeAmount: string;
  bankName: string;
  bankSwiftRating: string; // BBB ranked bank requirement
  
  // 11. Compliance Agreement
  antiSanctionAgreement: boolean;
  nonMilitaryPoliticianAgreement: boolean;
  blacklistAuthorizationAgreement: boolean;

  adminRemarks?: string;
}

export interface MemberProfile {
  id: string; // e.g. PU-VIP-2026-0889
  fullName: string;
  title: string;
  entityName: string;
  tier: MembershipTier;
  country: string;
  email: string;
  phone: string;
  joinedDate: string;
  avatarUrl?: string;
  guarantorNote: string;
  monthlyFee: number; // 100, 500, or 1000
  complianceStatus: 'Active & Verified' | 'Under Audit' | 'Suspended';
}

export interface MemberMailMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  senderTier?: MembershipTier;
  recipientEmail: string;
  recipientType: 'administration' | 'vip_member';
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  isImportant?: boolean;
}

export interface MemberInboxItem {
  id: string;
  sender: string; // 'ppp@pppunion.org' or 'members@pppunion.org'
  title: string;
  referenceNumber: string;
  category: 'Official Instruction' | 'Executive Circular' | 'Legal Update' | 'Security Notice';
  date: string;
  content: string;
  attachmentName?: string;
  isRead: boolean;
}

export interface MemberCourse {
  id: string;
  month: string;
  title: string;
  moduleCount: number;
  durationHours: string;
  instructor: string;
  description: string;
  syllabus: string[];
  lectureNotesPdf: string;
  completionProgress: number; // 0 to 100
  status: 'Available' | 'Completed' | 'Upcoming';
}

export interface MemberCertificate {
  id: string;
  serialNumber: string;
  title: string;
  issuedDate: string;
  expiryDate: string;
  authority: string;
  description: string;
  verificationQr: string;
  category: 'Accreditation' | 'Award' | 'Compliance';
}

export interface MemberContract {
  id: string;
  contractNumber: string;
  title: string;
  counterparty: string;
  status: ContractStatus;
  concessionModel: string; // BOT, BOOT, DBFO
  sourceOfFunding: string;
  accreditedFacilitator: string;
  termYears: string;
  contractValue: string;
  lastUpdated: string;
  details: string;
}

export interface MemberProject {
  id: string;
  projectCode: string;
  projectName: string;
  sector: string;
  hostCountry: string;
  capexAmount: string;
  sdgGoals: number[];
  nonSanctionableStatus: 'Verified Non-Sanctionable (UN Charter / A/RES/70/1 Art 30)' | 'Audit Pending';
  status: 'In Development' | 'Under Tendering' | 'Financially Closed' | 'Operational';
  facilitatorAssigned: string;
}

export interface MemberBillingInvoice {
  id: string;
  invoiceNumber: string;
  billingMonth: string;
  issueDate: string;
  dueDate: string;
  tier: MembershipTier;
  amountEur: number;
  status: 'Paid & Approved by ppp@pppunion.org' | 'Pending Approval' | 'Generated';
  paymentReference: string;
  authorizedBy: string; // 'ppp@pppunion.org'
}

export interface NotificationLog {
  id: string;
  timestamp: string;
  memberId: string;
  channel: 'SMS' | 'EMAIL' | 'BOTH';
  recipientPhone: string;
  recipientEmail: string;
  triggerEvent: string;
  messagePreview: string;
  deliveryStatus: 'Delivered' | 'Sent' | 'Queued';
}

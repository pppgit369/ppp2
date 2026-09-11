export interface SubMenuItem {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  category?: string;
  href?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  href: string;
  hasDropdown: boolean;
  submenus?: SubMenuItem[];
}

export interface HeroContent {
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageCardDate: string;
  imageCardText: string;
  imageUrl?: string;
}

export interface HeadlineItem {
  id: string;
  text: string;
  date?: string;
  category?: string;
  link?: string;
}

export interface SDGSubGoal {
  code: string; // e.g. "1.1", "1.2", "1.a"
  title: string;
  officialText: string;
  pppMechanism: string;
  indicators?: string;
}

export interface SDGItem {
  number: number;
  title: string;
  subtitle: string;
  color: string;
  description: string;
  targets: string[];
  subGoals?: SDGSubGoal[];
  pppApplication: string;
  iconName: string;
  leadAgency?: string;
  keyMetrics?: string[];
  investmentFocus?: string;
}

export interface EditableBox {
  id: string;
  type: 'hero' | 'text' | 'sdg' | 'headline' | 'menu' | 'card' | 'feature';
  title: string;
  subtitle?: string;
  content: string;
  badge?: string;
  link?: string;
  meta?: Record<string, any>;
}

export interface SiteData {
  navigation: MenuItem[];
  hero: HeroContent;
  headlines: HeadlineItem[];
  sdgs: SDGItem[];
  activePage: string;
  searchQuery: string;
}

export interface PortalCredentials {
  status: string;
  statusDetail: string;
  rank: string;
  rankDetail: string;
  rating: string;
  ratingDetail: string;
  award: string;
  awardDetail: string;
  certificateId: string;
  issuer: string;
  issuedDate: string;
  verificationHash: string;
}

export interface HomeLegalCharter {
  activityCodes: string;
  iloLegalBasis: string;
  euLegalBasis: string;
  unResolution: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  disclaimer: string;
}

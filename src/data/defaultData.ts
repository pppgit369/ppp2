import { MenuItem, HeroContent, HeadlineItem, SDGItem, PortalCredentials } from '../types';
import { COMPREHENSIVE_17_SDGS } from './sdgsData';

export const DEFAULT_NAVIGATION: MenuItem[] = [
  {
    id: 'home',
    title: 'HOME',
    href: '#home',
    hasDropdown: false,
  },
  {
    id: 'ppp-laws',
    title: 'PPP LAWS',
    href: '#laws',
    hasDropdown: true,
    submenus: [
      {
        id: 'laws-overview',
        title: 'Global PPP Legal Frameworks',
        description: 'Evolution of public-private legislation under UN and international conventions.',
        href: '#laws-overview'
      },
      {
        id: 'national-laws',
        title: 'National PPP Laws Directory',
        description: 'Legislative statutes from all 193 UN sovereign member states with attached official PDF laws.',
        badge: '193 Countries',
        href: '#national-laws'
      },
      {
        id: 'unece-models',
        title: 'UNECE Standard Concession Contracts',
        description: 'Standardized model clauses for people-first infrastructure partnerships.',
        href: '#unece-models'
      },
      {
        id: 'regulatory-statutes',
        title: 'Regulatory Compliance & Dispute Settlement',
        description: 'ICC and ICSID arbitration protocols for cross-border PPP execution.',
        href: '#regulatory-statutes'
      }
    ]
  },
  {
    id: 'about-ppp',
    title: 'ABOUT PPP',
    href: '#about-ppp',
    hasDropdown: true,
    submenus: [
      {
        id: 'what-is-ppp',
        title: 'WHAT IS PPP',
        description: 'Public-Private Partnership definitions, structures, and cooperative governance models.',
        href: '#what-is-ppp'
      },
      {
        id: 'project-types',
        title: 'PPP PROJECT TYPES',
        description: 'BOT, BOOT, DBFO, Concessions, and Joint Venture structures analyzed.',
        href: '#project-types'
      },
      {
        id: 'faq',
        title: 'FREQUENTLY ASKED QUESTIONS (FAQ)',
        description: 'Key operational answers regarding risk allocation, procurement, and returns.',
        badge: 'Popular',
        href: '#faq'
      },
      {
        id: 'regulatory-framework',
        title: 'REGULATORY FRAMEWORK',
        description: 'Standards ensuring transparency, competitive bidding, and fair stakeholder treatment.',
        href: '#regulatory-framework'
      },
      {
        id: 'advantages-ppp',
        title: 'ADVANTAGES OF PPP',
        description: 'Leveraging private capital, technology transfer, budgetary relief, and timely delivery.',
        href: '#advantages-ppp'
      },
      {
        id: 'historical-background',
        title: 'HISTORICAL BACKGROUND',
        description: 'Origins of public-private cooperation from early municipal utilities to modern SDG pacts.',
        href: '#historical-background'
      }
    ]
  },
  {
    id: 'ppp-programs',
    title: 'PPP PROGRAMS',
    href: '#programs',
    hasDropdown: true,
    submenus: [
      {
        id: 'program-overview',
        title: 'PROGRAM OVERVIEW',
        description: 'Global flagship initiatives delivering sustainable social and economic infrastructure.',
        href: '#program-overview'
      },
      {
        id: 'ppp-process',
        title: 'PPP PROCESS',
        description: 'Step-by-step administration, documentation, funding, and execution according to the selected model.',
        badge: 'Process',
        href: '#ppp-process'
      },
      {
        id: 'ppp-risks',
        title: 'PPP RISKS',
        description: 'Comprehensive risk taxonomy: political, demand, currency, environmental, and technical.',
        href: '#ppp-risks'
      },
      {
        id: 'sustainable-projects',
        title: 'PPP SUSTAINABLE PROJECTS',
        description: 'Showcase of active green energy, clean water, healthcare, and transit partnerships.',
        badge: 'Active',
        href: '#sustainable-projects'
      },
      {
        id: 'people-first-standard',
        title: 'PEOPLE-FIRST PPP INITIATIVE',
        description: 'Human-centric metrics ensuring projects serve communities, foster equity, and cut carbon.',
        href: '#people-first-standard'
      }
    ]
  },
  {
    id: 'about-union',
    title: 'ABOUT UNION',
    href: '#about-union',
    hasDropdown: true,
    submenus: [
      {
        id: 'union-policy',
        title: 'PPP Union Policy',
        description: 'Official statutory constitution, covenants, and membership policy of the PPP Union.',
        href: '#union-policy'
      },
      {
        id: 'guidelines',
        title: 'PPP Guideline',
        description: 'Operational guidelines for cross-border infrastructure investments.',
        href: '#guidelines'
      }
    ]
  },
  {
    id: 'ppp-sdgs',
    title: 'PPP & 17 SDGs',
    href: '#sdgs',
    hasDropdown: true,
    submenus: [
      {
        id: 'sdgs-courses',
        title: 'PPP & 17 SDGS COURSES',
        description: 'International Human Development & SDG17 Capacity-Building Program.',
        badge: 'Certified',
        href: '#sdgs-courses'
      },
      {
        id: 'all-17-goals',
        title: '17 UN Sustainable Goals',
        description: 'Interactive directory of all 17 Goals adopted by 193 UN member states on 25 Sept 2015.',
        badge: 'UN 2030',
        href: '#all-17-goals'
      },
      {
        id: 'agenda-2030',
        title: '2030 Agenda Alignment',
        description: 'How PPP models directly fund the $4.2T annual financing gap in developing economies.',
        href: '#agenda-2030'
      },
      {
        id: 'evaluation-tool',
        title: 'People-First PPP Evaluation Tool',
        description: 'Self-assessment mechanism scoring accessibility, environmental resilience, and fiscal sanity.',
        href: '#evaluation-tool'
      },
      {
        id: 'indicators-metrics',
        title: 'SDG Impact Indicators & Verification',
        description: 'Third-party audited KPIs tracking carbon reduction, job creation, and poverty relief.',
        href: '#indicators-metrics'
      },
      {
        id: 'climate-infrastructure',
        title: 'Climate Action & Green Transit',
        description: 'Prioritizing SDGs 7, 9, 11, and 13 through resilient engineering and ESG bonds.',
        href: '#climate-infrastructure'
      }
    ]
  },
  {
    id: 'ppp-facilitators',
    title: 'PPP FACILITATORS',
    href: '#facilitators',
    hasDropdown: false,
    submenus: []
  },
  {
    id: 'contact-us',
    title: 'CONTACT US',
    href: '#contact',
    hasDropdown: true,
    submenus: [
      {
        id: 'members-login',
        title: 'MEMBER LOGIN',
        description: 'Accredited delegate & member portal, VIP/Golden/Green tiers, and credentials.',
        badge: 'Portal',
        href: '#members-login'
      },
      {
        id: 'contact-inquiry',
        title: 'Contact Information & Secretariat',
        description: 'Official communication channels, international desks, and delegation inquiries.',
        href: '#contact'
      }
    ]
  }
];

export const DEFAULT_HERO: HeroContent = {
  badge: '193 MEMBER STATES · SINCE 2015',
  headlinePrefix: 'Public-Private Partnerships for the ',
  headlineHighlight: 'Sustainable Development Goals',
  description: 'The global alliance convening governments, institutions and enterprise to deliver people-first infrastructure that builds resilient and inclusive societies — aligned with the 17 SDGs adopted by all 193 United Nations member states.',
  primaryCtaText: 'Explore Programs',
  primaryCtaLink: '#programs',
  secondaryCtaText: 'About the Union',
  secondaryCtaLink: '#about-union',
  imageCardDate: '25 SEPTEMBER 2015',
  imageCardText: 'UN SDG Summit – Adoption of the UN 2030 Agenda and the 17 Sustainable Development Goals.',
  imageUrl: '/un-sdg-summit.jpg'
};

export const DEFAULT_HEADLINES: HeadlineItem[] = [
  {
    id: 'h1',
    text: 'Facilitators in Canada (Institutional Desks)',
    category: 'Accreditation',
    link: '#facilitators-canada'
  },
  {
    id: 'h2',
    text: 'Greater Salalah Master Plan – MoHUP & OCCI',
    category: 'Regional Projects',
    link: '#facilitators-oman'
  },
  {
    id: 'h3',
    text: '9th Edition of the UNECE International PPP Forum',
    category: 'Global Events',
    link: '#unece-models'
  },
  {
    id: 'h4',
    text: 'UN 2030 Agenda: People-First Public-Private Partnerships Framework Update',
    category: 'Governance',
    link: '#people-first-standard'
  },
  {
    id: 'h5',
    text: 'SDG 9 Infrastructure Financing Facility Reaches $14.8B in Private Co-Investment',
    category: 'Finance',
    link: '#sustainable-projects'
  }
];

export const DEFAULT_SDGS: SDGItem[] = COMPREHENSIVE_17_SDGS;

export const LEGACY_SDGS: SDGItem[] = [
  {
    number: 1,
    title: 'No Poverty',
    subtitle: 'End poverty in all its forms everywhere',
    color: '#E5243B',
    description: 'Eradicating extreme poverty and ensuring social protection floors for vulnerable populations through equitable basic utility concessions.',
    targets: ['By 2030, eradicate extreme poverty for all people everywhere', 'Implement nationally appropriate social protection systems and measures'],
    pppApplication: 'Concession models for subsidized rural electrification, water networks, and micro-infrastructure funding.',
    iconName: 'ShieldAlert'
  },
  {
    number: 2,
    title: 'Zero Hunger',
    subtitle: 'End hunger, achieve food security and improved nutrition',
    color: '#DDA63A',
    description: 'Promoting sustainable agriculture, cold chain logistics, and grain reserve storage facilities via private agro-logistics partnerships.',
    targets: ['Double the agricultural productivity and incomes of small-scale food producers', 'Ensure sustainable food production systems and resilient practices'],
    pppApplication: 'Grain silo concessions, irrigation networks, and cold chain distribution hubs co-financed with agribusiness.',
    iconName: 'Wheat'
  },
  {
    number: 3,
    title: 'Good Health & Well-being',
    subtitle: 'Ensure healthy lives and promote well-being for all at all ages',
    color: '#4C9F38',
    description: 'Developing modern hospitals, diagnostic centers, and vaccine distribution cold-chains with private healthcare operators.',
    targets: ['Achieve universal health coverage, including financial risk protection', 'Substantially increase health financing and recruitment in developing states'],
    pppApplication: 'Design-Build-Finance-Operate (DBFO) hospital concessions, digital health tele-clinics, and diagnostic lab networks.',
    iconName: 'HeartPulse'
  },
  {
    number: 4,
    title: 'Quality Education',
    subtitle: 'Ensure inclusive and equitable quality education and lifelong learning',
    color: '#C5192D',
    description: 'Modernizing schools, vocational technical centers, and digital educational connectivity across underserved regions.',
    targets: ['Ensure all girls and boys complete free, equitable and quality primary and secondary education', 'Substantially increase the number of youth with relevant technical skills'],
    pppApplication: 'School infrastructure bundles, digital classroom fiber connections, and vocational polytechnic management pacts.',
    iconName: 'GraduationCap'
  },
  {
    number: 5,
    title: 'Gender Equality',
    subtitle: 'Achieve gender equality and empower all women and girls',
    color: '#FF3A21',
    description: 'Mandating female participation quotas in PPP project governance, local subcontracting, and women-led entrepreneurship.',
    targets: ['Ensure women’s full and effective participation in political, economic, and public life', 'Adopt sound policies and enforceable legislation for gender equality'],
    pppApplication: 'Gender-responsive procurement criteria in all PPP Union tenders and dedicated credit lines for female suppliers.',
    iconName: 'Users'
  },
  {
    number: 6,
    title: 'Clean Water & Sanitation',
    subtitle: 'Ensure availability and sustainable management of water and sanitation',
    color: '#26BDE2',
    description: 'Desalination plants, wastewater treatment facilities, and piped municipal distribution networks reducing water loss.',
    targets: ['Achieve universal and equitable access to safe and affordable drinking water', 'Improve water quality by reducing pollution and eliminating dumping'],
    pppApplication: 'BOT wastewater recycling plants, smart metering concessions, and seawater reverse osmosis desalination facilities.',
    iconName: 'Droplets'
  },
  {
    number: 7,
    title: 'Affordable & Clean Energy',
    subtitle: 'Ensure access to affordable, reliable, sustainable and modern energy',
    color: '#FCC30B',
    description: 'Accelerating utility-scale solar, wind farms, microgrids, and green hydrogen infrastructure with long-term Power Purchase Agreements (PPAs).',
    targets: ['Increase substantially the share of renewable energy in the global energy mix', 'Double the global rate of improvement in energy efficiency'],
    pppApplication: 'Independent Power Producer (IPP) contracts for solar photovoltaic parks, offshore wind farms, and transmission interconnections.',
    iconName: 'Zap'
  },
  {
    number: 8,
    title: 'Decent Work & Economic Growth',
    subtitle: 'Promote sustained, inclusive and sustainable economic growth and decent work',
    color: '#A21942',
    description: 'Creating high-value local employment, enforcing ILO labor standards, and stimulating local supply chains through capital works.',
    targets: ['Sustain per capita economic growth in accordance with national circumstances', 'Protect labor rights and promote safe and secure working environments'],
    pppApplication: 'Local content requirements in infrastructure contracts, apprentice training programs, and fair-wage compliance audits.',
    iconName: 'TrendingUp'
  },
  {
    number: 9,
    title: 'Industry, Innovation & Infrastructure',
    subtitle: 'Build resilient infrastructure, promote inclusive industrialization and foster innovation',
    color: '#FD6925',
    description: 'High-speed rail, ports, multi-modal dry docks, 5G fiber backbones, and smart logistics corridors driving industrial trade.',
    targets: ['Develop quality, reliable, sustainable and resilient infrastructure', 'Promote inclusive and sustainable industrialization and significantly raise industry’s share of employment'],
    pppApplication: 'Toll roads, deep-sea container ports, dry port logistics parks, and broadband open-access wholesale networks.',
    iconName: 'Building2'
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    subtitle: 'Reduce inequality within and among countries',
    color: '#DD1367',
    description: 'Targeting territorial disparities by connecting remote hinterlands to major economic corridors with subsidized tariff structures.',
    targets: ['Progressively achieve and sustain income growth of the bottom 40 per cent of the population', 'Facilitate orderly, safe, regular and responsible migration and mobility of people'],
    pppApplication: 'Universal Service Funds (USF) for rural telecom, subsidized regional transit routes, and equitable cross-border trade corridors.',
    iconName: 'Scale'
  },
  {
    number: 11,
    title: 'Sustainable Cities & Communities',
    subtitle: 'Make cities and human settlements inclusive, safe, resilient and sustainable',
    color: '#FD9D24',
    description: 'Bus Rapid Transit (BRT), metro rails, social housing developments, and smart waste-to-energy municipal services.',
    targets: ['Provide access to safe, affordable, accessible and sustainable transport systems for all', 'Strengthen efforts to protect and safeguard the world’s cultural and natural heritage'],
    pppApplication: 'Urban light rail transit DBFOM concessions, automated waste collection systems, and LED smart streetlight retrofits.',
    iconName: 'Building'
  },
  {
    number: 12,
    title: 'Responsible Consumption & Production',
    subtitle: 'Ensure sustainable consumption and production patterns',
    color: '#BF8B2E',
    description: 'Circular economy concessions, industrial symbiosis eco-parks, and waste-to-resource recovery plants.',
    targets: ['Achieve the environmentally sound management of chemicals and all wastes throughout their life cycle', 'Substantially reduce waste generation through prevention, reduction, recycling and reuse'],
    pppApplication: 'Municipal recycling concessions, hazardous industrial waste treatment plants, and green building certification mandates.',
    iconName: 'Recycle'
  },
  {
    number: 13,
    title: 'Climate Action',
    subtitle: 'Take urgent action to combat climate change and its impacts',
    color: '#3F7E44',
    description: 'Climate-proofing seawalls, flood diversion barrages, mangrove restoration, and carbon capture infrastructure with green bond financing.',
    targets: ['Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters', 'Integrate climate change measures into national policies, strategies and planning'],
    pppApplication: 'Resilience service contracts, catastrophe risk transfer mechanisms, and nature-based coastal protection pacts.',
    iconName: 'CloudRain'
  },
  {
    number: 14,
    title: 'Life Below Water',
    subtitle: 'Conserve and sustainably use the oceans, seas and marine resources',
    color: '#0A97D9',
    description: 'Port greening certifications, marine wastewater discharge standards, and sustainable aquaculture park concessions.',
    targets: ['Prevent and significantly reduce marine pollution of all kinds, particularly from land-based activities', 'Sustainably manage and protect marine and coastal ecosystems'],
    pppApplication: 'Ballast water treatment at commercial terminals, port plastics interception booms, and offshore aquaculture zoning.',
    iconName: 'Waves'
  },
  {
    number: 15,
    title: 'Life on Land',
    subtitle: 'Protect, restore and promote sustainable use of terrestrial ecosystems',
    color: '#56C02B',
    description: 'Ecological corridors along highways, reforestation concessions, and sustainable agro-forestry projects with carbon credit off-takes.',
    targets: ['Ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems', 'Halt biodiversity loss and protect threatened species'],
    pppApplication: 'Wildlife underpasses on toll road concessions, commercial sustainable forestry concessions, and catchment basin protection.',
    iconName: 'TreePine'
  },
  {
    number: 16,
    title: 'Peace, Justice & Strong Institutions',
    subtitle: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all',
    color: '#00689D',
    description: 'Open contracting standards, transparent public registry of beneficial ownership, and independent procurement anti-corruption ombudsmen.',
    targets: ['Substantially reduce corruption and bribery in all their forms', 'Develop effective, accountable and transparent institutions at all levels'],
    pppApplication: 'Digital open-book procurement portals, blockchain-verified concession registries, and independent dispute adjudication boards.',
    iconName: 'Gavel'
  },
  {
    number: 17,
    title: 'Partnerships for the Goals',
    subtitle: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development',
    color: '#19486A',
    description: 'The cornerstone mission of PPP Union: blending multilateral development banks (MDBs), private equity, and sovereign guarantees for the 2030 Agenda.',
    targets: ['Mobilize additional financial resources for developing countries from multiple sources', 'Encourage and promote effective public, public-private and civil society partnerships'],
    pppApplication: 'PPP Union global coordination desk, UNECE People-First project accreditation, and blended finance guarantee syndication.',
    iconName: 'Handshake'
  }
];

export const DEFAULT_PORTAL_CREDENTIALS: PortalCredentials = {
  status: 'Satisfactory',
  statusDetail: 'UN 2030 Agenda & UNECE Standards Compliant',
  rank: 'Global Rank #1',
  rankDetail: 'Premier International SDG Infrastructure Portal',
  rating: 'Grade AAA Certified',
  ratingDetail: 'ISO 9001:2015 & PIERS Accredited Repository',
  award: 'Global Digital Excellence 2025',
  awardDetail: 'World Infrastructure Governance Conclave Winner',
  certificateId: 'UN-PPP-2025-AAA-9824',
  issuer: 'International Public-Private Partnership & SDG Standards Consortium',
  issuedDate: '15 January 2025',
  verificationHash: '0x7C9B-3E1F-4A5D-8920-BC8E-3F9A-7D21'
};

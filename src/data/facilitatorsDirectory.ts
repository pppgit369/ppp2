/**
 * PPP Union — Facilitators Directory Data
 * Extracted from https://pppunion.org/ppp_facilitator/ and
 * leading global repositories (World Bank PPP Knowledge Lab, PPIAF,
 * UNECE People-First PPP Centre, and National Gazette Authorities).
 */

export interface SourceReference {
  title: string;
  url: string;
}

export interface FacilitatorCountry {
  id: string;
  name: string;
  isEUMember?: boolean;
  column: 'A-C' | 'C-I' | 'I-P' | 'P-Z';
  isPublished29: boolean;
  hasPublishedDirectory: boolean;
  link: string;
  governmentUnit?: string;
  legalFramework?: string;
  multilateralSource?: string;
  firms: string[];
  prioritySectors?: string[];
  sourceUrls?: SourceReference[];
  summary: string;
}

export const DARK_BLUE_BOX_CONTENT = {
  badge: "UNITED NATIONS 2030 AGENDA · INTERNATIONAL LAW STATUS",
  title: "Global Legal Status, Non-Sanctionability, and PPP Union's Mandate in High-Risk Regions",
  leadParagraph: "All 193 Member States of the United Nations have formally adopted the UN 2030 Agenda for Sustainable Development, including its 17 Sustainable Development Goals (SDGs). These goals constitute a universal, non-political, humanitarian development framework. Under international law and UN Charter obligations, SDG programs cannot be sanctioned, restricted, or politically obstructed, regardless of regional instability or geopolitical tensions. This legal protection was a landmark decision by the United Nations, ensuring that humanitarian development must never be mixed with political or military agendas.",
  obstacleIntro: "Despite this global consensus, many regions — particularly developing and fragile states — continue to face serious obstacles that prevent full utilization of SDG benefits. These obstacles generally fall into three categories:",
  obstacles: [
    {
      number: "1",
      title: "Persistent instability and unfavorable conditions",
      description: "Continuous conflict, insecurity, and political volatility make it difficult for private-sector actors to engage in long-term development programs."
    },
    {
      number: "2",
      title: "Lack of public awareness and legal understanding",
      description: "Large segments of the population, including private businesses, universities, and local institutions, remain unaware that SDG programs are legally protected, non-political, and exempt from sanctions. This lack of awareness prevents communities from accessing the humanitarian and developmental advantages available to them."
    },
    {
      number: "3",
      title: "Weak financial systems and limited international banking capacity",
      description: "In many regions, banks and financial institutions are either under sanctions themselves, or not sufficiently developed to meet international compliance standards. This prevents them from participating in SDG-aligned development financing, even though such participation is legally permitted."
    }
  ],
  mandateTitle: "PPP Union's Strategic Mandate in These Regions",
  mandateDescription: "The PPP Union has established a clear and responsible mission: to identify countries where SDG-related awareness barriers exist, and to provide technical, legal, and compliance-based guidance to private-sector actors, universities, and financial institutions.",
  mandateRoleIntro: "The Union's role is to ensure that:",
  mandatePoints: [
    "Private-sector entities understand that SDG programs are non-political, non-military, and legally protected.",
    "No authority can obstruct their lawful, civilian, humanitarian development activities.",
    "Local institutions gain the knowledge required to operate within international PPP and SDG compliance frameworks.",
    "Communities in deprived regions can finally benefit from the humanitarian services intended for them."
  ],
  mandateSummary: "Through workshops, legal briefings, compliance training, and technical capacity-building, the PPP Union aims to empower private-sector actors to implement SDG-aligned projects smoothly, safely, and lawfully — even in high-risk environments.",
  hopeTitle: "A Shared Hope for 2030",
  hopeIntro: "The SDGs represent one of the most important humanitarian commitments in modern history. They were deliberately separated from politics and military affairs to ensure that human development remains protected, even during global instability.",
  hopeExpectationsIntro: "The PPP Union expresses its hope that:",
  hopePoints: [
    "All stakeholders remain faithful to their commitments,",
    "No political or military interference obstructs SDG implementation,",
    "And that deprived nations receive the full benefit of these humanitarian programs — both in tangible and intangible forms."
  ],
  hopeConclusion: "By strengthening legal awareness, improving financial capacity, and supporting private-sector engagement, the PPP Union seeks to ensure that all countries can complete their SDG-aligned projects in accordance with UN law and global development standards."
};

export const PUBLISHED_29_COUNTRIES: FacilitatorCountry[] = [
  {
    "id": "afghanistan",
    "name": "Afghanistan",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/afghanistan-ppp-services-providers/",
    "governmentUnit": "Central Partnerships Authority (CPA) – Ministry of Finance",
    "legalFramework": "Public-Private Partnership Law (Law No. 1228 / 1229, promulgated Oct 5, 2016) & UN Charter Humanitarian Non-Sanctionability",
    "multilateralSource": "PPP Union Official Directory, UNECE People-First Standards & Multilateral Desks",
    "firms": [
      "ADP Platform (Active – High-Level Expert Facilitator & VIP Member)",
      "Azizi Group – Kabul Office (Active – 200-500 MW Power Project Phase I)",
      "Asian Development Bank (ADB) (Closed now – Kabul Office)",
      "World Bank (Closed now – Kabul Desk)",
      "UNOPS (United Nations Office for Project Services) (Closed now)",
      "Islamic Development Bank (IsDB) (Closed now)"
    ],
    "prioritySectors": [
      "Solar & Thermal Power Generation (200-500 MW Self-Sufficiency)",
      "Clean Drinking Water & Irrigation (SDG 6)",
      "Primary Healthcare Clinics & Emergency Medical Equipment (SDG 3)",
      "Cash-for-Work & Humanitarian Infrastructure (SDG 1 & 8)"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Afghanistan PPP Services Providers (Post 1231)",
        "url": "https://pppunion.org/afghanistan-ppp-services-providers/"
      },
      {
        "title": "ADP Platform Official Ecosystem",
        "url": "https://www.adpplatform.com"
      },
      {
        "title": "Asian Development Bank – Afghanistan Desk (Closed)",
        "url": "https://www.adb.org"
      }
    ],
    "summary": "Official directory of accredited PPP service providers, expert platforms, and multilateral desks in Afghanistan. Highlights active private development by ADP Platform and Azizi Group alongside closed multilateral agencies."
  },
  {
    "id": "european-union",
    "name": "European Union",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "European Commission (DG GROW / DG REGIO) & European Investment Bank (EIB)",
    "legalFramework": "EU Public Procurement Directives (Directive 2014/23/EU on Concessions & Directive 2014/24/EU on Public Procurement)",
    "multilateralSource": "EPEC (European PPP Expertise Centre) & UNECE People-First PPP Center",
    "firms": [
      "John Laing Group – UK",
      "Laing O’Rourke – UK/EU",
      "ADP Platform – UK / Netherlands / Portugal",
      "Invesis (formerly DIF/Heijmans PPP) – Netherlands / UK / EU",
      "Deloitte Global PPP Advisory – UK/EU",
      "PPP Consultants Ltd – UK/EU",
      "EIB – European Investment Bank PPP Division – Luxembourg",
      "EBRD PPP & Infrastructure Unit – London",
      "KPMG Infrastructure Advisory – UK/EU",
      "PwC Infrastructure & PPP – UK/EU",
      "EY Infrastructure Advisory – UK/EU",
      "Mott MacDonald – UK/EU",
      "Arup – UK/EU",
      "AtkinsRéalis – UK/EU",
      "Vinci Concessions – France/EU",
      "Bouygues Construction PPP – France/EU",
      "Skanska Infrastructure Development – Sweden/EU",
      "Ferrovial PPP & Toll Roads – Spain/EU",
      "Hochtief PPP Solutions – Germany/EU",
      "European PPP Expertise Centre (EPEC) – Luxembourg (EU Commission)"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Hydrogen Backbone",
      "Hospital & Academic Campuses",
      "Circular Waste & Water Management"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "European Commission Concessions Directive 2014/23/EU",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014L0023"
      }
    ],
    "summary": "Supranational European coordination operating under EU Public Procurement Directives and UNECE standards in Brussels and Geneva."
  },
  {
    "id": "lithuania",
    "name": "Lithuania",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Central Project Management Agency (CPMA) \u2013 PPP Competence Centre",
    "legalFramework": "Law on Investments of the Republic of Lithuania & Concessions Law (transposing EU Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC",
    "firms": [
      "Central Project Management Agency (CPMA) \u2013 PPP Competence Centre",
      "VPSP Asociacija (Lithuanian PPP Association)",
      "Ministry of Finance PPP Oversight Unit",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Police Infrastructure & Custody Facilities",
      "Regional Road Modernization (Via Baltica)",
      "Educational Campuses & Sports Complexes",
      "District Energy Heating Efficiency"
    ],
    "sourceUrls": [
      {
        "title": "CPMA Lithuania PPP Competence Centre",
        "url": "https://www.cpva.lt/en/ppp"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. State-level competence center providing legal, financial, tax, and technical advice for national municipal and transport concessions connected to the European Union Facilitators network."
  },
  {
    "id": "slovenia",
    "name": "Slovenia",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance \u2013 Sector for PPP & Public Procurement",
    "legalFramework": "Public-Private Partnership Act (ZJZP) and EU Public Procurement Directives",
    "multilateralSource": "European Investment Bank (EIB) & UNECE",
    "firms": [
      "Ministry of Finance \u2013 Sector for PPP & Public Procurement",
      "Slovenian Regional Development Fund",
      "Infrastructure Directorate Concession Team",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Municipal Energy Contracting",
      "Elderly Care Homes & Social Welfare",
      "Railway & Logistics Terminals (Koper Port)",
      "Hydroelectric Concessions"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Finance Republic of Slovenia",
        "url": "https://www.gov.si/en/state-authorities/ministries/ministry-of-finance/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Operating under the Slovenian Public-Private Partnership Act (ZJZP) and EU Public Procurement Directives, connected to the European Union Facilitators network."
  },
  {
    "id": "africa",
    "name": "Africa",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/african-development-bank/",
    "governmentUnit": "African Development Bank (AfDB) \u2013 PPP Strategic Framework Directorate",
    "legalFramework": "AU Agenda 2063 & Regional Economic Communities (ECOWAS, SADC, EAC) PPP Guidelines",
    "multilateralSource": "NEPAD Infrastructure Project Preparation Facility (NEPAD-IPPF) & World Bank PPIAF",
    "firms": [
      "African Development Bank (AfDB) \u2013 PPP Strategic Framework",
      "ADP Group Africa \u2013 Process Engineering & Project Delivery",
      "NEPAD Infrastructure Project Preparation Facility (NEPAD-IPPF)",
      "Africa50 Infrastructure Investment Platform"
    ],
    "prioritySectors": [
      "Trans-African Highway Corridors",
      "Regional Renewable Power Pools (WAPP, EAPP)",
      "Cross-Border Fiber Optic Backbones",
      "Port Concessions & Agricultural Cold Chains"
    ],
    "sourceUrls": [
      {
        "title": "AfDB Public-Private Partnerships",
        "url": "https://www.afdb.org/en/topics-and-sectors/sectors/private-sector/areas-of-focus/public-private-partnerships"
      },
      {
        "title": "PPP Union AfDB Facilitation",
        "url": "https://pppunion.org/african-development-bank/"
      }
    ],
    "summary": "Continental framework supporting multi-national transit corridors, renewable mini-grids, and agricultural supply chain PPPs."
  },
  {
    "id": "finland",
    "name": "Finland",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Finnish Transport Infrastructure Agency (V\u00e4yl\u00e4virasto) & Ministry of Finance",
    "legalFramework": "Act on Public Procurement and Concession Contracts (1397/2016) & Nordic Life-Cycle Contracting Model",
    "multilateralSource": "Nordic Investment Bank (NIB) & European Investment Bank (EIB)",
    "firms": [
      "Finnish Transport Infrastructure Agency (V\u00e4yl\u00e4virasto) PPP Division",
      "Nordic Investment Bank (NIB) Sovereign Facility",
      "Kuntarahoitus (Municipality Finance Plc)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Life-Cycle Model Highways (E18 Highway)",
      "Smart Municipal Schools & Daycare Campuses",
      "Low-Carbon Regional Rail",
      "District Heating Decarbonization"
    ],
    "sourceUrls": [
      {
        "title": "V\u00e4yl\u00e4virasto Finnish Transport Infrastructure",
        "url": "https://vayla.fi/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Pioneering Nordic life-cycle model contracts with 25-30 year maintenance performance guarantees, connected to the European Union Facilitators network."
  },
  {
    "id": "luxembourg",
    "name": "Luxembourg",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & Soci\u00e9t\u00e9 Nationale de Cr\u00e9dit et d'Investissement (SNCI)",
    "legalFramework": "Luxembourg Public Procurement Law & EU Directives 2014/23/EU",
    "multilateralSource": "European Investment Bank (EIB Headquarters, Kirchberg) & Luxembourg Sustainable Finance Initiative (LSFI)",
    "firms": [
      "European Investment Bank (EIB) Headquarters \u2013 Kirchberg",
      "Luxembourg Sustainable Finance Initiative (LSFI)",
      "Soci\u00e9t\u00e9 Nationale de Cr\u00e9dit et d'Investissement (SNCI)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Green & Sustainability-Linked Sovereign Bonds",
      "Cross-Border Rail & Tramway Corridors",
      "Public Administrative Campuses",
      "Multilateral Project Syndication"
    ],
    "sourceUrls": [
      {
        "title": "European Investment Bank (EIB)",
        "url": "https://www.eib.org/"
      },
      {
        "title": "Luxembourg Sustainable Finance Initiative",
        "url": "https://lsfi.lu/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Global epicenter for multilateral climate bond structuring and EU cross-border infrastructure funds, connected to the European Union Facilitators network."
  },
  {
    "id": "spain",
    "name": "Spain",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Ministerio de Hacienda",
    "legalFramework": "Ley 9/2017 de Contratos del Sector P\u00fablico (transposing EU Directives 2014/23/EU and 2014/24/EU)",
    "multilateralSource": "UNECE Specialist Centre on PPPs in Smart Cities (IESE Business School, Barcelona) & EIB",
    "firms": [
      "IESE Business School \u2013 Specialist Center on PPPs in Smart Cities (UNECE)",
      "Ferrovial & ACS Infrastructure Development Consortia",
      "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Ministerio de Hacienda",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "High-Speed Rail & Motorway Concessions",
      "Seawater Desalination Plants (SDG 6)",
      "Hospital & Healthcare Availability Concessions",
      "High-Efficiency Solar Thermal (CSP)"
    ],
    "sourceUrls": [
      {
        "title": "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Espa\u00f1a",
        "url": "https://www.hacienda.gob.es/"
      },
      {
        "title": "IESE PPP for Cities (UNECE)",
        "url": "https://www.iese.edu/ppp-cities/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. World-leading concession developers in high-speed rail, desalination, hospital concessions, and municipal concessions, connected to the European Union Facilitators network."
  },
  {
    "id": "austria",
    "name": "Austria",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Federal Ministry of Finance (BMF) & ASFINAG Motorway Directorate",
    "legalFramework": "Bundesvergabegesetz (Federal Procurement Act BVergG 2018) & Concessions Statute",
    "multilateralSource": "European Investment Bank (EIB) & Austrian Development Agency (ADA)",
    "firms": [
      "ASFINAG Motorway Infrastructure PPP Directorate",
      "Austrian Development Agency (ADA) Private Sector Partnerships",
      "Kommunalkredit Austria AG Infrastructure Bank",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Alpine Tunnel & Highway Concessions (A5 Motorway)",
      "Biomass & Geothermal District Heating",
      "Hydroelectric Pumped Storage",
      "Public School Clusters"
    ],
    "sourceUrls": [
      {
        "title": "ASFINAG Infrastructure PPP",
        "url": "https://www.asfinag.at/en/"
      },
      {
        "title": "Kommunalkredit Austria AG",
        "url": "https://www.kommunalkredit.at/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Specialists in availability-payment tunnel infrastructure, green district heating, and alpine transit networks, connected to the European Union Facilitators network."
  },
  {
    "id": "france",
    "name": "France",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "FININFRA (Mission d'appui au financement des infrastructures) \u2013 Minist\u00e8re de l'\u00c9conomie et des Finances",
    "legalFramework": "Code de la commande publique (ordonnance n\u00b0 2018-1074) & March\u00e9s de partenariat / Concessions",
    "multilateralSource": "Caisse des D\u00e9p\u00f4ts et Consignations (CDC) & European Investment Bank (EIB)",
    "firms": [
      "FININFRA (Mission d'appui au financement des infrastructures) \u2013 Bercy",
      "VINCI Concessions & Bouygues Construction PPP Units",
      "Caisse des D\u00e9p\u00f4ts et Consignations (CDC Infrastructure)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "High-Speed Rail Lines (LGV Sud Europe Atlantique)",
      "Public Lighting & Smart City Energy Performance Contracts (CPE)",
      "Broadband Fiber Networks (Plan France Tr\u00e8s Haut D\u00e9bit)",
      "University Campuses (Plan Campus)"
    ],
    "sourceUrls": [
      {
        "title": "FININFRA \u2013 Minist\u00e8re de l'\u00c9conomie et des Finances",
        "url": "https://www.economie.gouv.fr/fininfra"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Codified under the French Code de la commande publique, specializing in complex concession contracts and social infrastructure, connected to the European Union Facilitators network."
  },
  {
    "id": "malaysia",
    "name": "Malaysia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/well-experienced-ppp-and-sdg17-facilitators-in-malaysia/",
    "governmentUnit": "UKAS \u2013 Public-Private Partnership Unit (Prime Minister's Department)",
    "legalFramework": "National Public-Private Partnership Master Plan (PIK 2030) & Financial Procedure Act 1957",
    "multilateralSource": "Asian Development Bank (ADB) & UN Global Compact Malaysia & Brunei",
    "firms": [
      "UKAS \u2013 Public-Private Partnership Unit (Prime Minister's Department)",
      "Economic Planning Unit (EPU)",
      "UN Global Compact Malaysia & Brunei (UNGCMYB)",
      "Asian Institute of Finance (AIF) & Khazanah Nasional Berhad"
    ],
    "prioritySectors": [
      "Highway Concessions (PLUS Expressways)",
      "University Teaching Hospitals (UiTM, UKM)",
      "Waste-to-Energy Incineration Facilities",
      "Affordable Housing (PR1MA PPPs)"
    ],
    "sourceUrls": [
      {
        "title": "UKAS Public-Private Partnership Unit Malaysia",
        "url": "https://www.ukas.gov.my/"
      },
      {
        "title": "PPP Union Malaysia Facilitators Directory",
        "url": "https://pppunion.org/well-experienced-ppp-and-sdg17-facilitators-in-malaysia/"
      }
    ],
    "summary": "Government-led facilitator framework under UKAS structuring healthcare, highway concessions, and SDG-aligned smart city hubs."
  },
  {
    "id": "sweden",
    "name": "Sweden",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Trafikverket (Swedish Transport Administration) & Ministry of Enterprise and Innovation",
    "legalFramework": "Public Procurement Act (LOU \u2013 2016:1145) & Act on Concessions (LUF \u2013 2016:1147)",
    "multilateralSource": "Nordic Investment Bank (NIB) & European Investment Bank (EIB)",
    "firms": [
      "Trafikverket (Swedish Transport Administration) Major Projects",
      "Swedfund International ESG Infrastructure",
      "Skanska Infrastructure Development",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "New Karolinska Solna Hospital PPP Concession",
      "Arlanda Airport Rail Express Link (A-Train)",
      "Fossil-Free Transport Infrastructure",
      "District Cooling and Deep Geothermal"
    ],
    "sourceUrls": [
      {
        "title": "Trafikverket Swedish Transport Administration",
        "url": "https://bransch.trafikverket.se/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Fossil-free construction standards, public hospital concessions, and green energy availability models, connected to the European Union Facilitators network."
  },
  {
    "id": "belgium",
    "name": "Belgium",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "PMV (ParticipatieMaatschappij Vlaanderen) PPP Centre & Wallonie Entreprendre",
    "legalFramework": "Belgian Law on Public Contracts (Wet inzake overheidsopdrachten 2016) & DBFM Regulations",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "PMV (ParticipatieMaatschappij Vlaanderen) PPP Knowledge Centre",
      "Wallonie Entreprendre Infrastructure Desk",
      "Federal Public Service Finance Concession Taskforce",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Schools of Tomorrow DBFM Program (182 school campuses)",
      "Antwerp Master Ring Road (Oosterweel Connection)",
      "Correctional Facilities DBFM",
      "Offshore Wind Transmission Hubs"
    ],
    "sourceUrls": [
      {
        "title": "PMV Flanders PPP Knowledge Centre",
        "url": "https://www.pmv.eu/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Belgian DBFM (Design-Build-Finance-Maintain) school clusters, prisons, and harbor logistics concessions, connected to the European Union Facilitators network."
  },
  {
    "id": "germany",
    "name": "Germany",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Partnerschaften Deutschland (PD \u2013 Berater der \u00f6ffentlichen Hand GmbH) \u2013 Federal Ministry of Finance",
    "legalFramework": "Act against Restraints of Competition (GWB \u2013 Part 4) & Federal Budget Code (BHO) Value for Money Standards",
    "multilateralSource": "KfW IPEX-Bank & European Investment Bank (EIB)",
    "firms": [
      "Partnerschaften Deutschland (PD \u2013 Berater der \u00f6ffentlichen Hand GmbH)",
      "KfW IPEX-Bank Infrastructure & PPP Division",
      "\u00d6PP Deutschland AG Regional Hubs",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Federal Autobahn Availability Model PPPs (A-Modell)",
      "Public School & Vocational Campus Modernization",
      "Municipal Administration Centers & Town Halls",
      "Clean Hydrogen Transmission Grids"
    ],
    "sourceUrls": [
      {
        "title": "PD \u2013 Berater der \u00f6ffentlichen Hand",
        "url": "https://www.pd-g.de/"
      },
      {
        "title": "KfW IPEX-Bank Infrastructure",
        "url": "https://www.kfw-ipex-bank.de/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Independent state-owned advisory entity providing objective transaction structuring for federal autobahns and municipal schools, connected to the European Union Facilitators network."
  },
  {
    "id": "malta",
    "name": "Malta",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Projects Malta Ltd \u2013 Ministry for the Economy, European Funds and Lands",
    "legalFramework": "Public Procurement Regulations (S.L. 601.03) & Government Concession Guidelines",
    "multilateralSource": "European Investment Bank (EIB) & Malta Development Bank (MDB)",
    "firms": [
      "Projects Malta Ltd \u2013 Government Concessions Agency",
      "Malta Enterprise Public Infrastructure Desk",
      "Malta Development Bank (MDB)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Maritime Cruise & Ferry Terminals",
      "Seawater Reverse Osmosis Desalination (SDG 6)",
      "Integrated Healthcare Facilities",
      "Solar Photovoltaic Canopies & EV Infrastructure"
    ],
    "sourceUrls": [
      {
        "title": "Projects Malta Ltd",
        "url": "https://www.projectsmalta.com/"
      },
      {
        "title": "Malta Development Bank (MDB)",
        "url": "https://www.mdb.org.mt/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Island economy PPP models covering maritime cruise terminals, healthcare campuses, and clean water desalination, connected to the European Union Facilitators network."
  },
  {
    "id": "switzerland",
    "name": "Switzerland",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Federal Department of Finance (FDF) & State Secretariat for Economic Affairs (SECO)",
    "legalFramework": "Federal Act on Public Procurement (BoeB) & UNECE People-First PPP Standards",
    "multilateralSource": "UNECE International PPP Centre of Excellence (Palais des Nations, Geneva)",
    "firms": [
      "UNECE International PPP Centre of Excellence (Palais des Nations, Geneva)",
      "Swiss State Secretariat for Economic Affairs (SECO) Infrastructure Desk",
      "Swiss Export Risk Insurance (SERV)",
      "PPP Schweiz Association (Verein PPP Schweiz)"
    ],
    "prioritySectors": [
      "People-First Sustainable Infrastructure Standards",
      "Hydropower & Alpine Renewable Storage",
      "Bilateral Green Development Finance",
      "Cross-Border Transit Linkages"
    ],
    "sourceUrls": [
      {
        "title": "UNECE International PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "Swiss SECO Economic Cooperation",
        "url": "https://www.seco-cooperation.admin.ch/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Global headquarters of UNECE People-First PPP standards and bilateral development financing."
  },
  {
    "id": "bulgaria",
    "name": "Bulgaria",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance \u2013 Public Procurement and PPP Directorate",
    "legalFramework": "Concessions Act (promulgated SG No. 96/2017, transposing EU Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & Bulgarian Development Bank (BDB)",
    "firms": [
      "Ministry of Finance PPP Directorate & Central Register",
      "Bulgarian Development Bank (BDB)",
      "National Company Industrial Zones (NCIZ)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Sofia Airport Concession (SOF Connect)",
      "Black Sea Port & Logistics Terminals (Burgas & Varna)",
      "Toll System Infrastructure",
      "Industrial Park Infrastructure"
    ],
    "sourceUrls": [
      {
        "title": "Bulgarian Ministry of Finance Concessions Register",
        "url": "https://www.minfin.bg/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Governed by the Concessions Act transposing EU Directive 2014/23/EU, connected to the European Union Facilitators network."
  },
  {
    "id": "greece",
    "name": "Greece",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Special Secretariat for PPPs (SDIT) \u2013 Ministry of Economy & Finance",
    "legalFramework": "Law 3389/2005 on Public-Private Partnerships & Law 4413/2016 on Concessions",
    "multilateralSource": "European Investment Bank (EIB) & European Bank for Reconstruction and Development (EBRD)",
    "firms": [
      "Special Secretariat for PPPs (SDIT) \u2013 Ministry of Economy & Finance",
      "Enterprise Greece Concession Facilitation Desk",
      "Hellenic Republic Asset Development Fund (HRADF)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Broadband Ultra-Fast Fiber to All Municipalities",
      "14 Regional Airports Modernization Concession",
      "Waste Treatment and Bio-Waste Plants",
      "Public School Clusters & Police Headquarters"
    ],
    "sourceUrls": [
      {
        "title": "SDIT Special Secretariat for PPPs Greece",
        "url": "https://sdit.mnec.gr/en"
      },
      {
        "title": "Enterprise Greece",
        "url": "https://www.enterprisegreece.gov.gr/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Pioneering Hellenic PPP projects in broadband internet, school modernization, port concessions, and waste treatment plants, connected to the European Union Facilitators network."
  },
  {
    "id": "netherlands",
    "name": "Netherlands",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Rijkswaterstaat (Directie DBFM) \u2013 Ministry of Infrastructure and Water Management",
    "legalFramework": "Dutch Public Procurement Act (Aanbestedingswet 2012) & DBFM Standard Concession Contracts",
    "multilateralSource": "European Investment Bank (EIB) & Invest-NL National Financing Institution",
    "firms": [
      "Invesis (formerly DIF / Heijmans PPP)",
      "Rijkswaterstaat (Directie DBFM) \u2013 Ministry of Infrastructure",
      "Invest-NL National Financing Institution",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Sea Locks and Flood Protection Barriers (Afsluitdijk & IJmuiden Lock)",
      "A1/A6 Highway Capacity Concessions",
      "High-Performance Courthouses & Ministry Headquarters",
      "Offshore Wind Power Converter Stations"
    ],
    "sourceUrls": [
      {
        "title": "Rijkswaterstaat DBFM Projects Netherlands",
        "url": "https://www.rijkswaterstaat.nl/en"
      },
      {
        "title": "Invest-NL",
        "url": "https://www.invest-nl.nl/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. International benchmark for water defense concessions, sea locks, and institutional P3 availability contracts, connected to the European Union Facilitators network."
  },
  {
    "id": "united-arab-emirates",
    "name": "United Arab Emirates",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-17-sdgs-facilitators-in-uae/",
    "governmentUnit": "Ministry of Finance UAE & Dubai Department of Finance (DOF) Central PPP Unit / Abu Dhabi Investment Office (ADIO)",
    "legalFramework": "Federal Decree-Law No. 12/2023 on Public-Private Partnerships & Dubai Law No. 22/2015",
    "multilateralSource": "World Bank Group & Islamic Development Bank (IsDB)",
    "firms": [
      "Ministry of Economy \u2013 UAE",
      "Ministry of Energy and Infrastructure (MOEI)",
      "Dubai Future Foundation (DFF) & Dubai Department of Finance PPP Unit",
      "Abu Dhabi Global Market (ADGM) & ADP Platform (RAKEZ)"
    ],
    "prioritySectors": [
      "Solar Independent Power Producer (IPP \u2013 Mohammed bin Rashid Al Maktoum Solar Park)",
      "Electric Vehicle Charging Infrastructure",
      "Waste-to-Energy Mega Plants (Warsan Facility)",
      "School Infrastructure Availability PPPs (Zayed City Schools)"
    ],
    "sourceUrls": [
      {
        "title": "UAE Federal Decree-Law No. 12/2023 on PPP",
        "url": "https://mof.gov.ae/"
      },
      {
        "title": "Dubai Department of Finance PPP",
        "url": "https://www.dof.gov.ae/en-us/PPP/Pages/default.aspx"
      },
      {
        "title": "PPP Union UAE Facilitators Directory",
        "url": "https://pppunion.org/ppp-17-sdgs-facilitators-in-uae/"
      }
    ],
    "summary": "Governed by Federal Decree-Law No. 12/2023 regulating Public-Private Partnerships, establishing leading regional green tech and urban concessions."
  },
  {
    "id": "canada",
    "name": "Canada",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-in-canada-vip-members/",
    "governmentUnit": "Canada Infrastructure Bank (CIB) & Infrastructure Ontario / CDPQ Infra",
    "legalFramework": "Federal and Provincial P3 Frameworks & Canadian Council for Public-Private Partnerships (CCPPP) Standards",
    "multilateralSource": "World Bank PPP Knowledge Lab & UNECE International Centre of Excellence",
    "firms": [
      "Blake, Cassels & Graydon LLP (Blakes) – VIP Member",
      "McMillan LLP – VIP Member (100+ Completed PPPs)",
      "Davies Ward Phillips & Vineberg LLP (Davies) – VIP Member (Band-1 Infrastructure)",
      "Dentons Canada – VIP Member (#1 Global Law Firm by Project Value)",
      "CPCS (Infrastructure & PPP Advisory) – VIP Member (Global MDB Advisor)",
      "Canada Infrastructure Bank (CIB) & Infrastructure Ontario"
    ],
    "prioritySectors": [
      "Calgary Green Line LRT & Eglinton Crosstown Mass Transit",
      "Specialized Acute Healthcare Hospitals & Cancer Centres",
      "Clean Nuclear SMRs & Clean Grid Transmission Corridors",
      "Northern Remote Community Clean Water & Wastewater P3s"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Canada VIP Facilitators Directory",
        "url": "https://pppunion.org/ppp-facilitators-in-canada-vip-members/"
      },
      {
        "title": "Blake, Cassels & Graydon LLP (Blakes)",
        "url": "https://www.blakes.com"
      },
      {
        "title": "McMillan LLP",
        "url": "https://www.mcmillan.ca"
      },
      {
        "title": "Davies Ward Phillips & Vineberg LLP",
        "url": "https://www.dwpv.com"
      },
      {
        "title": "Dentons Canada",
        "url": "https://www.dentons.com"
      },
      {
        "title": "CPCS Infrastructure & PPP Advisory",
        "url": "https://www.cpcs.ca"
      },
      {
        "title": "Canada Infrastructure Bank (CIB)",
        "url": "https://cib-bic.ca/en/"
      }
    ],
    "summary": "Official Top 5 VIP Facilitators in Canada recognized by PPP Union with 10+ years PPP experience and national recognition, advising on major P3 transactions across transit, LRT, highways, healthcare, and clean utilities."
  },
  {
    "id": "hungary",
    "name": "Hungary",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Public Administration and Regional Development & Hungarian Development Bank (MFB)",
    "legalFramework": "Act CXLIII of 2015 on Public Procurement & Concessions Regulation (Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC",
    "firms": [
      "Ministry of Public Administration and Regional Development PPP Unit",
      "Hungarian Development Bank (MFB)",
      "Nemzeti Infrastrukt\u00fara Fejleszt\u0151 (NIF)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "National Motorway Network 35-Year Concession",
      "University Campus Modernization (P\u00e9cs, Debrecen)",
      "Regional Wastewater Treatment Facilities (SDG 6)",
      "Urban Sports Complexes & Dormitories"
    ],
    "sourceUrls": [
      {
        "title": "Hungarian Development Bank (MFB)",
        "url": "https://www.mfb.hu/en"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Motorway availability models, university campus facilities, and regional wastewater treatment partnerships, connected to the European Union Facilitators network."
  },
  {
    "id": "oman",
    "name": "Oman",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-firms-in-sultanate-of-oman/",
    "governmentUnit": "Ministry of Finance \u2013 Public-Private Partnership Unit & Ministry of Housing and Urban Planning (MoHUP)",
    "legalFramework": "Public-Private Partnership Law promulgated by Royal Decree No. 52/2019 & Privatization Law Royal Decree No. 51/2019",
    "multilateralSource": "World Bank Group & Islamic Development Bank (IsDB)",
    "firms": [
      "ALNAHDA DEVELOPMENT PARTNERS GROUP (ADP GROUP) \u2013 Salalah & Muscat",
      "SASLO (Said Al Shahry & Partners Legal Counsel)",
      "VINCI Construction Grands Projets Oman",
      "Ministry of Housing and Urban Planning (MoHUP) & OCCI Coordination"
    ],
    "prioritySectors": [
      "Greater Salalah Master Plan & Special Economic Zones",
      "Salalah Free Zone Logistics & Dry Ports",
      "Salalah Independent Water Desalination (IWP)",
      "Dialysis Medical Centers Availability PPP"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Finance Oman PPP Portal",
        "url": "https://www.mof.gov.om/"
      },
      {
        "title": "PPP Union Oman Facilitators Directory",
        "url": "https://pppunion.org/ppp-facilitators-firms-in-sultanate-of-oman/"
      }
    ],
    "summary": "Established under Royal Decree 52/2019, leading the Greater Salalah Master Plan, port logistics, dry ports, and economic free zones."
  },
  {
    "id": "china",
    "name": "China",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-china/",
    "governmentUnit": "China Public-Private Partnerships Center (CPPPC) \u2013 Ministry of Finance (MOF)",
    "legalFramework": "Notice of the State Council on Guidelines for Promoting Public-Private Partnerships (Guobanfa [2015] No. 42) & MOF Regulations",
    "multilateralSource": "Asian Infrastructure Investment Bank (AIIB) & Asian Development Bank (ADB)",
    "firms": [
      "Ministry of Finance PPP Center (CPPPC \u2013 Beijing)",
      "China Public-Private Partnerships Promotion Association",
      "Asian Infrastructure Investment Bank (AIIB) Concession Department",
      "China State Construction Engineering Corporation (CSCEC) Infrastructure"
    ],
    "prioritySectors": [
      "Urban Rail Transit & Intercity High-Speed Rail",
      "Ecological Restoration & River Basin Environmental Remediation",
      "Sponge City Water Infrastructure",
      "Smart Industrial Clusters & Logistics Hubs"
    ],
    "sourceUrls": [
      {
        "title": "China PPP Center (CPPPC) \u2013 Ministry of Finance",
        "url": "http://www.cpppc.org/"
      },
      {
        "title": "PPP Union China Directory",
        "url": "https://pppunion.org/ppp-facilitators-china/"
      }
    ],
    "summary": "World's largest municipal PPP database and operational framework spanning high-speed rail, environmental remediation, and smart cities."
  },
  {
    "id": "india",
    "name": "India",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/",
    "governmentUnit": "Infrastructure Support & Development Division (ISD) – Department of Economic Affairs, Ministry of Finance",
    "legalFramework": "Viability Gap Funding (VGF) Scheme Guidelines, IIPDF Fund, and Model Concession Agreements (MCA)",
    "multilateralSource": "World Bank Group & Asian Development Bank (ADB) India Resident Mission",
    "firms": [
      "Infrastructure Support & Development Division (ISD – DEA, Ministry of Finance)",
      "National Institute of Rural Development & Panchayati Raj (NIRDPR – Centre for CSR, PPP & People’s Action)",
      "Empanelled PPP Transaction Advisers (DEA: Almondz, CRISIL, Deloitte, EY, KPMG)",
      "UNDP India – SDG Knowledge Hub",
      "Sustainable Development Research Foundation (SDRF India)",
      "Indus Global India (VIP Member of PPP Union & ADP Platform Associated Partner, Chennai & Dubai)"
    ],
    "prioritySectors": [
      "National Highway Authority of India (NHAI) Hybrid Annuity Model (HAM)",
      "Ultra-Mega Solar Power Parks (Rewa, Bhadla)",
      "Smart City 24x7 Water Supply & Sanitation (SDG 6)",
      "Railway Station Redevelopment & Modernization"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union India PPP & SDGs Center and Facilitators Members Directory",
        "url": "https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/"
      },
      {
        "title": "DEA PPP India Portal – Ministry of Finance",
        "url": "https://www.pppinindia.gov.in"
      },
      {
        "title": "National Institute of Rural Development & Panchayati Raj (NIRDPR)",
        "url": "https://nirdpr.org.in"
      },
      {
        "title": "UNDP India – SDG Knowledge Hub",
        "url": "https://www.in.undp.org"
      },
      {
        "title": "Sustainable Development Research Foundation (SDRF)",
        "url": "https://www.sdrfindia.org"
      },
      {
        "title": "Indus Global India (Associated Partner of ADP Platform)",
        "url": "https://www.industransfood.com/contact.php#"
      }
    ],
    "summary": "Centralized under DEA (Ministry of Finance) and NIRDPR apex center, supported by empanelled advisers, UNDP India, and VIP member Indus Global launching a ₹10,000 Crore INR (~€1.1B) empowerment initiative."
  },
  {
    "id": "portugal",
    "name": "Portugal",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/",
    "governmentUnit": "UTAP (Unidade Técnica de Acompanhamento de Projetos) – Ministério das Finanças",
    "legalFramework": "Decree-Law No. 111/2012 (Legal Framework for Public-Private Partnerships) & Public Contracts Code (CCP)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "PARPÚBLICA – Participações Públicas, SGPS, S.A.",
      "IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário",
      "AICEP Portugal Global – Trade & Investment Agency",
      "CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley",
      "NOVA School of Business & Economics (NOVA SBE)",
      "ADP Platform (UK & Netherlands) – Portugal Partner Listing (Loulé)"
    ],
    "prioritySectors": [
      "Hospital Concessions (Hospital de Loures, Vila Franca de Xira)",
      "Scut Shadow Toll & Concession Motorways",
      "Deepwater Port of Sines Expansion",
      "Green Hydrogen Production & Export Terminal"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Well Experienced PPP & SDGs Facilitators in Portugal",
        "url": "https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/"
      },
      {
        "title": "PARPÚBLICA – Participações Públicas, SGPS, S.A.",
        "url": "https://www.parpublica.pt"
      },
      {
        "title": "IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário",
        "url": "https://www.impic.pt"
      },
      {
        "title": "AICEP Portugal Global – Trade & Investment Agency",
        "url": "https://www.portugalglobal.pt"
      },
      {
        "title": "CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley",
        "url": "https://www.ccdr-lvt.pt"
      },
      {
        "title": "NOVA School of Business & Economics (NOVA SBE)",
        "url": "https://www.novasbe.pt"
      },
      {
        "title": "ADP Platform (Portugal Office, Loulé)",
        "url": "https://www.adpplatform.com"
      },
      {
        "title": "UTAP Unidade Técnica de Acompanhamento de Projetos",
        "url": "https://www.utap.gov.pt/"
      }
    ],
    "summary": "Reputable, non-blacklisted, internationally recognized Portuguese PPP institutions led by PARPÚBLICA, IMPIC, AICEP, NOVA SBE, and ADP Platform Loulé, coordinated under UTAP and the EU PPP network."
  },
  {
    "id": "egypt",
    "name": "Egypt",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-3-ppp-centers-facilitators-in-egypt/",
    "governmentUnit": "PPP Central Unit (PPPCU) \u2013 Ministry of Finance",
    "legalFramework": "Law No. 67/2010 on Regulating Partnership with the Private Sector in Infrastructure Projects, amended by Law No. 153/2021",
    "multilateralSource": "European Bank for Reconstruction and Development (EBRD) & World Bank IFC",
    "firms": [
      "PPP Central Unit (PPPCU) \u2013 Ministry of Finance",
      "EBRD \u2013 Egypt PPP & Infrastructure Advisory Unit",
      "European Investment Bank (EIB) Regional Liaison Desk Cairo",
      "Suez Canal Economic Zone (SCZone) Concession Directorate"
    ],
    "prioritySectors": [
      "Benban Solar Park (One of the world's largest PV complexes)",
      "6th of October Dry Port Concession",
      "Seawater Desalination Plants (SDG 6)",
      "New Administrative Capital Light Rail & Monorail"
    ],
    "sourceUrls": [
      {
        "title": "PPP Central Unit Egypt \u2013 Ministry of Finance",
        "url": "https://www.mof.gov.eg/"
      },
      {
        "title": "PPP Union Egypt Facilitators Directory",
        "url": "https://pppunion.org/top-3-ppp-centers-facilitators-in-egypt/"
      }
    ],
    "summary": "Regulated by Law No. 67/2010 amended by Law No. 153/2021, leading dry ports, seawater desalination plants, and renewable energy parks."
  },
  {
    "id": "iran",
    "name": "Iran",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/",
    "governmentUnit": "High Council for PPP Affairs \u2013 Plan and Budget Organization (PBO)",
    "legalFramework": "Article 27 of the Law on Regulating Parts of Government Financial Provisions (II) & UN Charter Non-Sanctionability",
    "multilateralSource": "UN Resident Coordinator Office (UNRCO) Sustainable Development Desk & UNESCO / UNIDO Facilitation",
    "firms": [
      "Plan and Budget Organization (PBO) \u2013 High Council for PPP Affairs",
      "UN Resident Coordinator Office (UNRCO) Sustainable Development Desk",
      "Tehran Chamber of Commerce PPP & Infrastructure Commission",
      "National Water and Wastewater Engineering Company (NWWEC) Concessions"
    ],
    "prioritySectors": [
      "Municipal Wastewater Treatment Plants (BOT Concessions)",
      "Regional Hospital Medical Imaging Equipment Availability",
      "Solar & Wind Power Feeding into the National Grid",
      "Affordable Public Housing Completion"
    ],
    "sourceUrls": [
      {
        "title": "When Iran Became Part of SDG17 & PPP Framework",
        "url": "https://pppunion.org/un-17-sdgs-and-ppp-in-the-country/"
      },
      {
        "title": "SDG17 and PPP Projects Currently Active in Iran",
        "url": "https://pppunion.org/1638-2/"
      },
      {
        "title": "PPP Authorities and Reference Centers in Iran",
        "url": "https://pppunion.org/ppp-authorities-and-reference-centers-in-iran/"
      },
      {
        "title": "Registered Member(s) with PPP Union Operating in Iran",
        "url": "https://pppunion.org/17-sdgs-and-ppp-facilitators/"
      },
      {
        "title": "PPP Union Iran SDGs Master Portal",
        "url": "https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/"
      }
    ],
    "summary": "Article 27 legal framework for transferring incomplete sovereign projects to civilian private sector; protected humanitarian SDG scope under UN law."
  },
  {
    "id": "slovakia",
    "name": "Slovakia",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Transport and Construction & Ministry of Finance Value for Money Unit (\u00daHP)",
    "legalFramework": "Act No. 343/2015 Coll. on Public Procurement and Concessions & EU Directive 2014/23/EU",
    "multilateralSource": "European Investment Bank (EIB) & Slovak Investment Holding (SIH)",
    "firms": [
      "Ministry of Transport and Construction of the Slovak Republic PPP Division",
      "Slovak Investment and Holding (SIH)",
      "Ministry of Finance Value for Money Unit (\u00daHP)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "D4/R7 Bratislava Bypass Highway Concession (Zero Bypass)",
      "R1 Expressway Availability PPP",
      "Regional Hospital Facilities & Academic Infrastructure",
      "Geothermal District Heating Networks"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Transport of the Slovak Republic",
        "url": "https://www.mindop.sk/"
      },
      {
        "title": "Slovak Investment Holding",
        "url": "https://www.sih.sk/en"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Landmark highway D4/R7 bypass availability concession, healthcare campuses, and regional smart energy grids, connected to the European Union Facilitators network."
  }
];

export const ALL_193_COUNTRIES: FacilitatorCountry[] = [
  {
    "id": "afghanistan",
    "name": "Afghanistan",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/afghanistan-ppp-services-providers/",
    "governmentUnit": "Central Partnerships Authority (CPA) – Ministry of Finance",
    "legalFramework": "Public-Private Partnership Law (Law No. 1228 / 1229, promulgated Oct 5, 2016) & UN Charter Humanitarian Non-Sanctionability",
    "multilateralSource": "PPP Union Official Directory, UNECE People-First Standards & Multilateral Desks",
    "firms": [
      "ADP Platform (Active – High-Level Expert Facilitator & VIP Member)",
      "Azizi Group – Kabul Office (Active – 200-500 MW Power Project Phase I)",
      "Asian Development Bank (ADB) (Closed now – Kabul Office)",
      "World Bank (Closed now – Kabul Desk)",
      "UNOPS (United Nations Office for Project Services) (Closed now)",
      "Islamic Development Bank (IsDB) (Closed now)"
    ],
    "prioritySectors": [
      "Solar & Thermal Power Generation (200-500 MW Self-Sufficiency)",
      "Clean Drinking Water & Irrigation (SDG 6)",
      "Primary Healthcare Clinics & Emergency Medical Equipment (SDG 3)",
      "Cash-for-Work & Humanitarian Infrastructure (SDG 1 & 8)"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Afghanistan PPP Services Providers (Post 1231)",
        "url": "https://pppunion.org/afghanistan-ppp-services-providers/"
      },
      {
        "title": "ADP Platform Official Ecosystem",
        "url": "https://www.adpplatform.com"
      },
      {
        "title": "Asian Development Bank – Afghanistan Desk (Closed)",
        "url": "https://www.adb.org"
      }
    ],
    "summary": "Official directory of accredited PPP service providers, expert platforms, and multilateral desks in Afghanistan. Highlights active private development by ADP Platform and Azizi Group alongside closed multilateral agencies."
  },
  {
    "id": "africa",
    "name": "Africa",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/african-development-bank/",
    "governmentUnit": "African Development Bank (AfDB) \u2013 PPP Strategic Framework Directorate",
    "legalFramework": "AU Agenda 2063 & Regional Economic Communities (ECOWAS, SADC, EAC) PPP Guidelines",
    "multilateralSource": "NEPAD Infrastructure Project Preparation Facility (NEPAD-IPPF) & World Bank PPIAF",
    "firms": [
      "African Development Bank (AfDB) \u2013 PPP Strategic Framework",
      "ADP Group Africa \u2013 Process Engineering & Project Delivery",
      "NEPAD Infrastructure Project Preparation Facility (NEPAD-IPPF)",
      "Africa50 Infrastructure Investment Platform"
    ],
    "prioritySectors": [
      "Trans-African Highway Corridors",
      "Regional Renewable Power Pools (WAPP, EAPP)",
      "Cross-Border Fiber Optic Backbones",
      "Port Concessions & Agricultural Cold Chains"
    ],
    "sourceUrls": [
      {
        "title": "AfDB Public-Private Partnerships",
        "url": "https://www.afdb.org/en/topics-and-sectors/sectors/private-sector/areas-of-focus/public-private-partnerships"
      },
      {
        "title": "PPP Union AfDB Facilitation",
        "url": "https://pppunion.org/african-development-bank/"
      }
    ],
    "summary": "Continental framework supporting multi-national transit corridors, renewable mini-grids, and agricultural supply chain PPPs."
  },
  {
    "id": "albania",
    "name": "Albania",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Albania",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Albania National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Albania",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Albania under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "algeria",
    "name": "Algeria",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Algeria",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Algeria National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Algeria",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Algeria under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "andorra",
    "name": "Andorra",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Andorra",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Andorra National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Andorra",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Andorra under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "angola",
    "name": "Angola",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Angola",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Angola National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Angola",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Angola under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "antigua-and-barbuda",
    "name": "Antigua and Barbuda",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Antigua and Barbuda",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Antigua and Barbuda National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Antigua and Barbuda",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Antigua and Barbuda under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "argentina",
    "name": "Argentina",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Argentina",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Argentina National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Argentina",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Argentina under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "armenia",
    "name": "Armenia",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Armenia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Armenia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Armenia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Armenia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "australia",
    "name": "Australia",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.infrastructureaustralia.gov.au/",
    "governmentUnit": "Infrastructure Australia & National PPP Forum (Department of Infrastructure, Transport, Regional Development, Communications and the Arts)",
    "legalFramework": "National Public Private Partnership Policy and Guidelines (endorsed by the Council of Australian Governments - COAG)",
    "multilateralSource": "World Bank PPP Knowledge Lab / OECD Infrastructure Governance",
    "firms": [
      "Infrastructure Australia",
      "Partnerships Victoria (Department of Treasury and Finance)",
      "Infrastructure NSW & Queensland Treasury PPP Unit",
      "Macquarie Group (Global Infrastructure and Real Assets - MIRA)",
      "Clayton Utz & King & Wood Mallesons Projects & Infrastructure"
    ],
    "prioritySectors": [
      "Toll Road and Rail Megaprojects (Sydney Metro, Melbourne Metro Tunnel)",
      "Hospital Availability PPPs",
      "Desalination Plants (SDG 6)",
      "Renewable Energy Renewable Energy Zones (REZs)"
    ],
    "sourceUrls": [
      {
        "title": "Infrastructure Australia",
        "url": "https://www.infrastructureaustralia.gov.au/"
      },
      {
        "title": "National PPP Guidelines \u2013 Australia",
        "url": "https://www.infrastructure.gov.au/infrastructure-transport-vehicles/infrastructure-investment-budget/national-public-private-partnership-guidelines"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Australia",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Globally renowned for mature, transparent availability payment PPP models, strict Value for Money (VfM) benchmarks, and world-scale tollway and health facility concessions."
  },
  {
    "id": "austria",
    "name": "Austria",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Federal Ministry of Finance (BMF) & ASFINAG Motorway Directorate",
    "legalFramework": "Bundesvergabegesetz (Federal Procurement Act BVergG 2018) & Concessions Statute",
    "multilateralSource": "European Investment Bank (EIB) & Austrian Development Agency (ADA)",
    "firms": [
      "ASFINAG Motorway Infrastructure PPP Directorate",
      "Austrian Development Agency (ADA) Private Sector Partnerships",
      "Kommunalkredit Austria AG Infrastructure Bank",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Alpine Tunnel & Highway Concessions (A5 Motorway)",
      "Biomass & Geothermal District Heating",
      "Hydroelectric Pumped Storage",
      "Public School Clusters"
    ],
    "sourceUrls": [
      {
        "title": "ASFINAG Infrastructure PPP",
        "url": "https://www.asfinag.at/en/"
      },
      {
        "title": "Kommunalkredit Austria AG",
        "url": "https://www.kommunalkredit.at/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Specialists in availability-payment tunnel infrastructure, green district heating, and alpine transit networks, connected to the European Union Facilitators network."
  },
  {
    "id": "azerbaijan",
    "name": "Azerbaijan",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Azerbaijan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Azerbaijan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Azerbaijan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Azerbaijan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bahamas",
    "name": "Bahamas",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bahamas",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bahamas National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bahamas",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bahamas under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bahrain",
    "name": "Bahrain",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bahrain",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bahrain National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bahrain",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bahrain under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bangladesh",
    "name": "Bangladesh",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bangladesh",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bangladesh National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bangladesh",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bangladesh under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "barbados",
    "name": "Barbados",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Barbados",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Barbados National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Barbados",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Barbados under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "belarus",
    "name": "Belarus",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Belarus",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Belarus National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Belarus",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Belarus under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "belgium",
    "name": "Belgium",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "PMV (ParticipatieMaatschappij Vlaanderen) PPP Centre & Wallonie Entreprendre",
    "legalFramework": "Belgian Law on Public Contracts (Wet inzake overheidsopdrachten 2016) & DBFM Regulations",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "PMV (ParticipatieMaatschappij Vlaanderen) PPP Knowledge Centre",
      "Wallonie Entreprendre Infrastructure Desk",
      "Federal Public Service Finance Concession Taskforce",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Schools of Tomorrow DBFM Program (182 school campuses)",
      "Antwerp Master Ring Road (Oosterweel Connection)",
      "Correctional Facilities DBFM",
      "Offshore Wind Transmission Hubs"
    ],
    "sourceUrls": [
      {
        "title": "PMV Flanders PPP Knowledge Centre",
        "url": "https://www.pmv.eu/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Belgian DBFM (Design-Build-Finance-Maintain) school clusters, prisons, and harbor logistics concessions, connected to the European Union Facilitators network."
  },
  {
    "id": "belize",
    "name": "Belize",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Belize",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Belize National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Belize",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Belize under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "benin",
    "name": "Benin",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Benin",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Benin National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Benin",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Benin under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bhutan",
    "name": "Bhutan",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bhutan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bhutan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bhutan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bhutan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bolivia",
    "name": "Bolivia",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bolivia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bolivia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bolivia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bolivia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bosnia-and-herzegovina",
    "name": "Bosnia and Herzegovina",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Bosnia and Herzegovina",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Bosnia and Herzegovina National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Bosnia and Herzegovina",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Bosnia and Herzegovina under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "botswana",
    "name": "Botswana",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Botswana",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Botswana National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Botswana",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Botswana under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "brazil",
    "name": "Brazil",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.ppi.gov.br/",
    "governmentUnit": "Secretaria Especial do Programa de Parcerias de Investimentos (SEPPI) \u2013 Ministry of Planning and Budget & BNDES",
    "legalFramework": "Federal Law No. 11,079/2004 (Federal PPP Law) and Federal Law No. 8,987/1995 (General Concessions Law)",
    "multilateralSource": "Inter-American Development Bank (IDB Invest) & World Bank PPIAF",
    "firms": [
      "SEPPI (Programa de Parcerias de Investimentos)",
      "BNDES (Brazilian Development Bank) Infrastructure Project Structuring Unit",
      "Radar PPP (National Concessions Observatory)",
      "CCR Group & Ecorodovias Concession Consortia",
      "Machado Meyer & Mattos Filho Infrastructure Counsel"
    ],
    "prioritySectors": [
      "Basic Sanitation & Sewage Universalization (Marco Legal do Saneamento)",
      "Highways and Port Logistics Terminals",
      "Clean Solar & Wind Transmission Lines",
      "Social Infrastructure & Public Lighting PPPs"
    ],
    "sourceUrls": [
      {
        "title": "Programa de Parcerias de Investimentos (PPI)",
        "url": "https://www.ppi.gov.br/"
      },
      {
        "title": "BNDES Project Hub",
        "url": "https://hubdeprojetos.bndes.gov.br/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Brazil",
        "url": "https://ppp.worldbank.org/public-private-partnership/brazil"
      }
    ],
    "summary": "South America's largest PPP and concessions pipeline, anchored by federal Law 11,079/2004, BNDES project preparation facilities, and historic water sanitation concessions."
  },
  {
    "id": "brunei-darussalam",
    "name": "Brunei Darussalam",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Brunei Darussalam",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Brunei Darussalam National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Brunei Darussalam",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Brunei Darussalam under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "bulgaria",
    "name": "Bulgaria",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance \u2013 Public Procurement and PPP Directorate",
    "legalFramework": "Concessions Act (promulgated SG No. 96/2017, transposing EU Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & Bulgarian Development Bank (BDB)",
    "firms": [
      "Ministry of Finance PPP Directorate & Central Register",
      "Bulgarian Development Bank (BDB)",
      "National Company Industrial Zones (NCIZ)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Sofia Airport Concession (SOF Connect)",
      "Black Sea Port & Logistics Terminals (Burgas & Varna)",
      "Toll System Infrastructure",
      "Industrial Park Infrastructure"
    ],
    "sourceUrls": [
      {
        "title": "Bulgarian Ministry of Finance Concessions Register",
        "url": "https://www.minfin.bg/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Governed by the Concessions Act transposing EU Directive 2014/23/EU, connected to the European Union Facilitators network."
  },
  {
    "id": "burkina-faso",
    "name": "Burkina Faso",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Burkina Faso",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Burkina Faso National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Burkina Faso",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Burkina Faso under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "burundi",
    "name": "Burundi",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Burundi",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Burundi National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Burundi",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Burundi under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "cabo-verde",
    "name": "Cabo Verde",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Cabo Verde",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Cabo Verde National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Cabo Verde",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Cabo Verde under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "cambodia",
    "name": "Cambodia",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Cambodia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Cambodia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Cambodia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Cambodia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "cameroon",
    "name": "Cameroon",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Cameroon",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Cameroon National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Cameroon",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Cameroon under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "canada",
    "name": "Canada",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-in-canada-vip-members/",
    "governmentUnit": "Canada Infrastructure Bank (CIB) & Infrastructure Ontario / CDPQ Infra",
    "legalFramework": "Federal and Provincial P3 Frameworks & Canadian Council for Public-Private Partnerships (CCPPP) Standards",
    "multilateralSource": "World Bank PPP Knowledge Lab & UNECE International Centre of Excellence",
    "firms": [
      "Blake, Cassels & Graydon LLP (Blakes) – VIP Member",
      "McMillan LLP – VIP Member (100+ Completed PPPs)",
      "Davies Ward Phillips & Vineberg LLP (Davies) – VIP Member (Band-1 Infrastructure)",
      "Dentons Canada – VIP Member (#1 Global Law Firm by Project Value)",
      "CPCS (Infrastructure & PPP Advisory) – VIP Member (Global MDB Advisor)",
      "Canada Infrastructure Bank (CIB) & Infrastructure Ontario"
    ],
    "prioritySectors": [
      "Calgary Green Line LRT & Eglinton Crosstown Mass Transit",
      "Specialized Acute Healthcare Hospitals & Cancer Centres",
      "Clean Nuclear SMRs & Clean Grid Transmission Corridors",
      "Northern Remote Community Clean Water & Wastewater P3s"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Canada VIP Facilitators Directory",
        "url": "https://pppunion.org/ppp-facilitators-in-canada-vip-members/"
      },
      {
        "title": "Blake, Cassels & Graydon LLP (Blakes)",
        "url": "https://www.blakes.com"
      },
      {
        "title": "McMillan LLP",
        "url": "https://www.mcmillan.ca"
      },
      {
        "title": "Davies Ward Phillips & Vineberg LLP",
        "url": "https://www.dwpv.com"
      },
      {
        "title": "Dentons Canada",
        "url": "https://www.dentons.com"
      },
      {
        "title": "CPCS Infrastructure & PPP Advisory",
        "url": "https://www.cpcs.ca"
      },
      {
        "title": "Canada Infrastructure Bank (CIB)",
        "url": "https://cib-bic.ca/en/"
      }
    ],
    "summary": "Official Top 5 VIP Facilitators in Canada recognized by PPP Union with 10+ years PPP experience and national recognition, advising on major P3 transactions across transit, LRT, highways, healthcare, and clean utilities."
  },
  {
    "id": "central-african-republic",
    "name": "Central African Republic",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Central African Republic",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Central African Republic National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Central African Republic",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Central African Republic under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "chad",
    "name": "Chad",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Chad",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Chad National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Chad",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Chad under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "chile",
    "name": "Chile",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Chile",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Chile National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Chile",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Chile under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "china",
    "name": "China",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-china/",
    "governmentUnit": "China Public-Private Partnerships Center (CPPPC) \u2013 Ministry of Finance (MOF)",
    "legalFramework": "Notice of the State Council on Guidelines for Promoting Public-Private Partnerships (Guobanfa [2015] No. 42) & MOF Regulations",
    "multilateralSource": "Asian Infrastructure Investment Bank (AIIB) & Asian Development Bank (ADB)",
    "firms": [
      "Ministry of Finance PPP Center (CPPPC \u2013 Beijing)",
      "China Public-Private Partnerships Promotion Association",
      "Asian Infrastructure Investment Bank (AIIB) Concession Department",
      "China State Construction Engineering Corporation (CSCEC) Infrastructure"
    ],
    "prioritySectors": [
      "Urban Rail Transit & Intercity High-Speed Rail",
      "Ecological Restoration & River Basin Environmental Remediation",
      "Sponge City Water Infrastructure",
      "Smart Industrial Clusters & Logistics Hubs"
    ],
    "sourceUrls": [
      {
        "title": "China PPP Center (CPPPC) \u2013 Ministry of Finance",
        "url": "http://www.cpppc.org/"
      },
      {
        "title": "PPP Union China Directory",
        "url": "https://pppunion.org/ppp-facilitators-china/"
      }
    ],
    "summary": "World's largest municipal PPP database and operational framework spanning high-speed rail, environmental remediation, and smart cities."
  },
  {
    "id": "colombia",
    "name": "Colombia",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Colombia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Colombia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Colombia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Colombia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "comoros",
    "name": "Comoros",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Comoros",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Comoros National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Comoros",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Comoros under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "congo",
    "name": "Congo",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Congo",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Congo National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Congo",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Congo under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "costa-rica",
    "name": "Costa Rica",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Costa Rica",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Costa Rica National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Costa Rica",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Costa Rica under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "croatia",
    "name": "Croatia",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Croatia",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Croatia",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Croatia National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Croatia",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "cuba",
    "name": "Cuba",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Cuba",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Cuba National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Cuba",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Cuba under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "cyprus",
    "name": "Cyprus",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Cyprus",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Cyprus",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Cyprus National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Cyprus",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "czech-republic",
    "name": "Czech Republic",
    "isEUMember": true,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Czech Republic",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Czech Republic",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Czech Republic National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Czech Republic",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "c-te-d-ivoire",
    "name": "C\u00f4te d'Ivoire",
    "isEUMember": false,
    "column": "A-C",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of C\u00f4te d'Ivoire",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "C\u00f4te d'Ivoire National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 C\u00f4te d'Ivoire",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in C\u00f4te d'Ivoire under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "democratic-people-s-republic-of-korea",
    "name": "Democratic People's Republic of Korea",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Democratic People's Republic of Korea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Democratic People's Republic of Korea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Democratic People's Republic of Korea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Democratic People's Republic of Korea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "democratic-republic-of-the-congo",
    "name": "Democratic Republic of the Congo",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Democratic Republic of the Congo",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Democratic Republic of the Congo National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Democratic Republic of the Congo",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Democratic Republic of the Congo under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "denmark",
    "name": "Denmark",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Denmark",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Denmark",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Denmark National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Denmark",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "djibouti",
    "name": "Djibouti",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Djibouti",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Djibouti National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Djibouti",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Djibouti under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "dominica",
    "name": "Dominica",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Dominica",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Dominica National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Dominica",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Dominica under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "dominican-republic",
    "name": "Dominican Republic",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Dominican Republic",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Dominican Republic National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Dominican Republic",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Dominican Republic under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "ecuador",
    "name": "Ecuador",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Ecuador",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Ecuador National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Ecuador",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Ecuador under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "egypt",
    "name": "Egypt",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-3-ppp-centers-facilitators-in-egypt/",
    "governmentUnit": "PPP Central Unit (PPPCU) \u2013 Ministry of Finance",
    "legalFramework": "Law No. 67/2010 on Regulating Partnership with the Private Sector in Infrastructure Projects, amended by Law No. 153/2021",
    "multilateralSource": "European Bank for Reconstruction and Development (EBRD) & World Bank IFC",
    "firms": [
      "PPP Central Unit (PPPCU) \u2013 Ministry of Finance",
      "EBRD \u2013 Egypt PPP & Infrastructure Advisory Unit",
      "European Investment Bank (EIB) Regional Liaison Desk Cairo",
      "Suez Canal Economic Zone (SCZone) Concession Directorate"
    ],
    "prioritySectors": [
      "Benban Solar Park (One of the world's largest PV complexes)",
      "6th of October Dry Port Concession",
      "Seawater Desalination Plants (SDG 6)",
      "New Administrative Capital Light Rail & Monorail"
    ],
    "sourceUrls": [
      {
        "title": "PPP Central Unit Egypt \u2013 Ministry of Finance",
        "url": "https://www.mof.gov.eg/"
      },
      {
        "title": "PPP Union Egypt Facilitators Directory",
        "url": "https://pppunion.org/top-3-ppp-centers-facilitators-in-egypt/"
      }
    ],
    "summary": "Regulated by Law No. 67/2010 amended by Law No. 153/2021, leading dry ports, seawater desalination plants, and renewable energy parks."
  },
  {
    "id": "el-salvador",
    "name": "El Salvador",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of El Salvador",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "El Salvador National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 El Salvador",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in El Salvador under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "equatorial-guinea",
    "name": "Equatorial Guinea",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Equatorial Guinea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Equatorial Guinea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Equatorial Guinea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Equatorial Guinea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "eritrea",
    "name": "Eritrea",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Eritrea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Eritrea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Eritrea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Eritrea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "estonia",
    "name": "Estonia",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Estonia",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Estonia",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Estonia National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Estonia",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "eswatini",
    "name": "Eswatini",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Eswatini",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Eswatini National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Eswatini",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Eswatini under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "ethiopia",
    "name": "Ethiopia",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Ethiopia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Ethiopia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Ethiopia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Ethiopia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "european-union",
    "name": "European Union",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "European Commission (DG GROW / DG REGIO) & European Investment Bank (EIB)",
    "legalFramework": "EU Public Procurement Directives (Directive 2014/23/EU on Concessions & Directive 2014/24/EU on Public Procurement)",
    "multilateralSource": "EPEC (European PPP Expertise Centre) & UNECE People-First PPP Center",
    "firms": [
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre",
      "John Laing Group & Laing O'Rourke",
      "Deloitte Global PPP Advisory & KPMG Infrastructure Advisory",
      "EBRD PPP & Infrastructure Unit"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Hydrogen Backbone",
      "Hospital & Academic Campuses",
      "Circular Waste & Water Management"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "European Commission Concessions Directive 2014/23/EU",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014L0023"
      }
    ],
    "summary": "Supranational European coordination operating under EU Public Procurement Directives and UNECE standards in Brussels and Geneva."
  },
  {
    "id": "fiji",
    "name": "Fiji",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Fiji",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Fiji National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Fiji",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Fiji under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "finland",
    "name": "Finland",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Finnish Transport Infrastructure Agency (V\u00e4yl\u00e4virasto) & Ministry of Finance",
    "legalFramework": "Act on Public Procurement and Concession Contracts (1397/2016) & Nordic Life-Cycle Contracting Model",
    "multilateralSource": "Nordic Investment Bank (NIB) & European Investment Bank (EIB)",
    "firms": [
      "Finnish Transport Infrastructure Agency (V\u00e4yl\u00e4virasto) PPP Division",
      "Nordic Investment Bank (NIB) Sovereign Facility",
      "Kuntarahoitus (Municipality Finance Plc)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Life-Cycle Model Highways (E18 Highway)",
      "Smart Municipal Schools & Daycare Campuses",
      "Low-Carbon Regional Rail",
      "District Heating Decarbonization"
    ],
    "sourceUrls": [
      {
        "title": "V\u00e4yl\u00e4virasto Finnish Transport Infrastructure",
        "url": "https://vayla.fi/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Pioneering Nordic life-cycle model contracts with 25-30 year maintenance performance guarantees, connected to the European Union Facilitators network."
  },
  {
    "id": "france",
    "name": "France",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "FININFRA (Mission d'appui au financement des infrastructures) \u2013 Minist\u00e8re de l'\u00c9conomie et des Finances",
    "legalFramework": "Code de la commande publique (ordonnance n\u00b0 2018-1074) & March\u00e9s de partenariat / Concessions",
    "multilateralSource": "Caisse des D\u00e9p\u00f4ts et Consignations (CDC) & European Investment Bank (EIB)",
    "firms": [
      "FININFRA (Mission d'appui au financement des infrastructures) \u2013 Bercy",
      "VINCI Concessions & Bouygues Construction PPP Units",
      "Caisse des D\u00e9p\u00f4ts et Consignations (CDC Infrastructure)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "High-Speed Rail Lines (LGV Sud Europe Atlantique)",
      "Public Lighting & Smart City Energy Performance Contracts (CPE)",
      "Broadband Fiber Networks (Plan France Tr\u00e8s Haut D\u00e9bit)",
      "University Campuses (Plan Campus)"
    ],
    "sourceUrls": [
      {
        "title": "FININFRA \u2013 Minist\u00e8re de l'\u00c9conomie et des Finances",
        "url": "https://www.economie.gouv.fr/fininfra"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Codified under the French Code de la commande publique, specializing in complex concession contracts and social infrastructure, connected to the European Union Facilitators network."
  },
  {
    "id": "gabon",
    "name": "Gabon",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Gabon",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Gabon National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Gabon",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Gabon under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "gambia",
    "name": "Gambia",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Gambia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Gambia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Gambia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Gambia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "georgia",
    "name": "Georgia",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Georgia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Georgia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Georgia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Georgia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "germany",
    "name": "Germany",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Partnerschaften Deutschland (PD \u2013 Berater der \u00f6ffentlichen Hand GmbH) \u2013 Federal Ministry of Finance",
    "legalFramework": "Act against Restraints of Competition (GWB \u2013 Part 4) & Federal Budget Code (BHO) Value for Money Standards",
    "multilateralSource": "KfW IPEX-Bank & European Investment Bank (EIB)",
    "firms": [
      "Partnerschaften Deutschland (PD \u2013 Berater der \u00f6ffentlichen Hand GmbH)",
      "KfW IPEX-Bank Infrastructure & PPP Division",
      "\u00d6PP Deutschland AG Regional Hubs",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Federal Autobahn Availability Model PPPs (A-Modell)",
      "Public School & Vocational Campus Modernization",
      "Municipal Administration Centers & Town Halls",
      "Clean Hydrogen Transmission Grids"
    ],
    "sourceUrls": [
      {
        "title": "PD \u2013 Berater der \u00f6ffentlichen Hand",
        "url": "https://www.pd-g.de/"
      },
      {
        "title": "KfW IPEX-Bank Infrastructure",
        "url": "https://www.kfw-ipex-bank.de/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Independent state-owned advisory entity providing objective transaction structuring for federal autobahns and municipal schools, connected to the European Union Facilitators network."
  },
  {
    "id": "ghana",
    "name": "Ghana",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Ghana",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Ghana National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Ghana",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Ghana under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "greece",
    "name": "Greece",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Special Secretariat for PPPs (SDIT) \u2013 Ministry of Economy & Finance",
    "legalFramework": "Law 3389/2005 on Public-Private Partnerships & Law 4413/2016 on Concessions",
    "multilateralSource": "European Investment Bank (EIB) & European Bank for Reconstruction and Development (EBRD)",
    "firms": [
      "Special Secretariat for PPPs (SDIT) \u2013 Ministry of Economy & Finance",
      "Enterprise Greece Concession Facilitation Desk",
      "Hellenic Republic Asset Development Fund (HRADF)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Broadband Ultra-Fast Fiber to All Municipalities",
      "14 Regional Airports Modernization Concession",
      "Waste Treatment and Bio-Waste Plants",
      "Public School Clusters & Police Headquarters"
    ],
    "sourceUrls": [
      {
        "title": "SDIT Special Secretariat for PPPs Greece",
        "url": "https://sdit.mnec.gr/en"
      },
      {
        "title": "Enterprise Greece",
        "url": "https://www.enterprisegreece.gov.gr/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Pioneering Hellenic PPP projects in broadband internet, school modernization, port concessions, and waste treatment plants, connected to the European Union Facilitators network."
  },
  {
    "id": "grenada",
    "name": "Grenada",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Grenada",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Grenada National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Grenada",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Grenada under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "guatemala",
    "name": "Guatemala",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Guatemala",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Guatemala National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Guatemala",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Guatemala under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "guinea",
    "name": "Guinea",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Guinea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Guinea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Guinea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Guinea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "guinea-bissau",
    "name": "Guinea-Bissau",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Guinea-Bissau",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Guinea-Bissau National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Guinea-Bissau",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Guinea-Bissau under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "guyana",
    "name": "Guyana",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Guyana",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Guyana National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Guyana",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Guyana under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "haiti",
    "name": "Haiti",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Haiti",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Haiti National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Haiti",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Haiti under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "honduras",
    "name": "Honduras",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Honduras",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Honduras National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Honduras",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Honduras under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "hungary",
    "name": "Hungary",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Public Administration and Regional Development & Hungarian Development Bank (MFB)",
    "legalFramework": "Act CXLIII of 2015 on Public Procurement & Concessions Regulation (Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC",
    "firms": [
      "Ministry of Public Administration and Regional Development PPP Unit",
      "Hungarian Development Bank (MFB)",
      "Nemzeti Infrastrukt\u00fara Fejleszt\u0151 (NIF)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "National Motorway Network 35-Year Concession",
      "University Campus Modernization (P\u00e9cs, Debrecen)",
      "Regional Wastewater Treatment Facilities (SDG 6)",
      "Urban Sports Complexes & Dormitories"
    ],
    "sourceUrls": [
      {
        "title": "Hungarian Development Bank (MFB)",
        "url": "https://www.mfb.hu/en"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Motorway availability models, university campus facilities, and regional wastewater treatment partnerships, connected to the European Union Facilitators network."
  },
  {
    "id": "iceland",
    "name": "Iceland",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Iceland",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Iceland National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Iceland",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Iceland under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "india",
    "name": "India",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/",
    "governmentUnit": "Infrastructure Support & Development Division (ISD) – Department of Economic Affairs, Ministry of Finance",
    "legalFramework": "Viability Gap Funding (VGF) Scheme Guidelines, IIPDF Fund, and Model Concession Agreements (MCA)",
    "multilateralSource": "World Bank Group & Asian Development Bank (ADB) India Resident Mission",
    "firms": [
      "Infrastructure Support & Development Division (ISD – DEA, Ministry of Finance)",
      "National Institute of Rural Development & Panchayati Raj (NIRDPR – Centre for CSR, PPP & People’s Action)",
      "Empanelled PPP Transaction Advisers (DEA: Almondz, CRISIL, Deloitte, EY, KPMG)",
      "UNDP India – SDG Knowledge Hub",
      "Sustainable Development Research Foundation (SDRF India)",
      "Indus Global India (VIP Member of PPP Union & ADP Platform Associated Partner, Chennai & Dubai)"
    ],
    "prioritySectors": [
      "National Highway Authority of India (NHAI) Hybrid Annuity Model (HAM)",
      "Ultra-Mega Solar Power Parks (Rewa, Bhadla)",
      "Smart City 24x7 Water Supply & Sanitation (SDG 6)",
      "Railway Station Redevelopment & Modernization"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union India PPP & SDGs Center and Facilitators Members Directory",
        "url": "https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/"
      },
      {
        "title": "DEA PPP India Portal – Ministry of Finance",
        "url": "https://www.pppinindia.gov.in"
      },
      {
        "title": "National Institute of Rural Development & Panchayati Raj (NIRDPR)",
        "url": "https://nirdpr.org.in"
      },
      {
        "title": "UNDP India – SDG Knowledge Hub",
        "url": "https://www.in.undp.org"
      },
      {
        "title": "Sustainable Development Research Foundation (SDRF)",
        "url": "https://www.sdrfindia.org"
      },
      {
        "title": "Indus Global India (Associated Partner of ADP Platform)",
        "url": "https://www.industransfood.com/contact.php#"
      }
    ],
    "summary": "Centralized under DEA (Ministry of Finance) and NIRDPR apex center, supported by empanelled advisers, UNDP India, and VIP member Indus Global launching a ₹10,000 Crore INR (~€1.1B) empowerment initiative."
  },
  {
    "id": "indonesia",
    "name": "Indonesia",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://kpbu.bappenas.go.id/",
    "governmentUnit": "Ministry of Finance \u2013 Directorate General of Financing and Risk Management (DJPPR) & KPBU Secretariat",
    "legalFramework": "Presidential Regulation No. 38 of 2015 on Public-Private Partnerships (KPBU) and Government Guarantee Regulations",
    "multilateralSource": "Asian Development Bank (ADB) & World Bank PPIAF Jakarta Office",
    "firms": [
      "KPBU Secretariat \u2013 Bappenas (Ministry of National Development Planning)",
      "PT Sarana Multi Infrastruktur (PT SMI \u2013 State Infrastructure SOE)",
      "PT Penjaminan Infrastruktur Indonesia (IIGF \u2013 Indonesia Infrastructure Guarantee Fund)",
      "Bank Mandiri & BRI Project Financing Divisions",
      "Assegaf Hamzah & Partners / Hadiputranto Hadinoto & Partners (Baker McKenzie)"
    ],
    "prioritySectors": [
      "Palapa Ring Broadband Telecommunications",
      "Water Supply Systems (SPAM Umbulan)",
      "Trans-Sumatra and Trans-Java Toll Roads",
      "Geothermal & Renewable Power (SDG 7)"
    ],
    "sourceUrls": [
      {
        "title": "KPBU Bappenas Indonesia",
        "url": "https://kpbu.bappenas.go.id/"
      },
      {
        "title": "Indonesia Infrastructure Guarantee Fund (IIGF)",
        "url": "https://iigf.co.id/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Indonesia",
        "url": "https://ppp.worldbank.org/public-private-partnership/indonesia"
      }
    ],
    "summary": "Backed by the Indonesia Infrastructure Guarantee Fund (IIGF) and PT SMI, facilitating national strategic projects in toll roads, drinking water, and broadband connectivity."
  },
  {
    "id": "iran",
    "name": "Iran",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/",
    "governmentUnit": "High Council for PPP Affairs \u2013 Plan and Budget Organization (PBO)",
    "legalFramework": "Article 27 of the Law on Regulating Parts of Government Financial Provisions (II) & UN Charter Non-Sanctionability",
    "multilateralSource": "UN Resident Coordinator Office (UNRCO) Sustainable Development Desk & UNESCO / UNIDO Facilitation",
    "firms": [
      "Plan and Budget Organization (PBO) \u2013 High Council for PPP Affairs",
      "UN Resident Coordinator Office (UNRCO) Sustainable Development Desk",
      "Tehran Chamber of Commerce PPP & Infrastructure Commission",
      "National Water and Wastewater Engineering Company (NWWEC) Concessions"
    ],
    "prioritySectors": [
      "Municipal Wastewater Treatment Plants (BOT Concessions)",
      "Regional Hospital Medical Imaging Equipment Availability",
      "Solar & Wind Power Feeding into the National Grid",
      "Affordable Public Housing Completion"
    ],
    "sourceUrls": [
      {
        "title": "When Iran Became Part of SDG17 & PPP Framework",
        "url": "https://pppunion.org/un-17-sdgs-and-ppp-in-the-country/"
      },
      {
        "title": "SDG17 and PPP Projects Currently Active in Iran",
        "url": "https://pppunion.org/1638-2/"
      },
      {
        "title": "PPP Authorities and Reference Centers in Iran",
        "url": "https://pppunion.org/ppp-authorities-and-reference-centers-in-iran/"
      },
      {
        "title": "Registered Member(s) with PPP Union Operating in Iran",
        "url": "https://pppunion.org/17-sdgs-and-ppp-facilitators/"
      },
      {
        "title": "PPP Union Iran SDGs Master Portal",
        "url": "https://pppunion.org/17-sustainable-development-goals-ppp-in-iran/"
      }
    ],
    "summary": "Article 27 legal framework for transferring incomplete sovereign projects to civilian private sector; protected humanitarian SDG scope under UN law."
  },
  {
    "id": "iraq",
    "name": "Iraq",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Iraq",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Iraq National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Iraq",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Iraq under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "ireland",
    "name": "Ireland",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Ireland",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Ireland",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Ireland National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Ireland",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "israel",
    "name": "Israel",
    "isEUMember": false,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Israel",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Israel National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Israel",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Israel under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "italy",
    "name": "Italy",
    "isEUMember": true,
    "column": "C-I",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.dipe.gov.it/",
    "governmentUnit": "DIPE (Dipartimento per la programmazione e il coordinamento della politica economica) & NARS \u2013 Presidency of the Council of Ministers",
    "legalFramework": "Codice dei Contratti Pubblici (Legislative Decree No. 36/2023) and EU Public Procurement Directives 2014/23/EU & 2014/24/EU",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "DIPE \u2013 Nucleo di Valutazione e Verifica degli Investimenti Pubblici",
      "Cassa Depositi e Prestiti (CDP) Infrastructure & Concessions",
      "Webuild & Mundys (Autostrade per l'Italia)",
      "Intesa Sanpaolo & UniCredit Project Finance",
      "Gianni & Origoni / Chiomenti Infrastructure Department",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "High-Speed Rail & Motorway Concessions",
      "Hospital Construction & Integrated Facility Management",
      "Water Desalination & Aqueduct Networks",
      "Urban Regeneration & Port Logistics"
    ],
    "sourceUrls": [
      {
        "title": "DIPE \u2013 Presidenza del Consiglio dei Ministri",
        "url": "https://www.dipe.gov.it/"
      },
      {
        "title": "Cassa Depositi e Prestiti (CDP)",
        "url": "https://www.cdp.it/"
      },
      {
        "title": "EPEC European PPP Expertise Centre \u2013 Italy Profile",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      }
    ],
    "summary": "Member of European Union. Operating under the new Codice dei Contratti Pubblici, supported by Cassa Depositi e Prestiti and connected directly to the European Union Facilitators network."
  },
  {
    "id": "jamaica",
    "name": "Jamaica",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Jamaica",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Jamaica National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Jamaica",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Jamaica under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "japan",
    "name": "Japan",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www8.cao.go.jp/pfi/e/index.html",
    "governmentUnit": "Cabinet Office of Japan \u2013 Private Finance Initiative (PFI) Promotion Office",
    "legalFramework": "Act on Promotion of Private Finance Initiative (Act No. 107 of 1999, as amended) & Ministry of Land, Infrastructure, Transport and Tourism (MLIT) Guidelines",
    "multilateralSource": "Asian Development Bank (ADB) & World Bank Tokyo Hub",
    "firms": [
      "Cabinet Office PFI Promotion Office",
      "Development Bank of Japan (DBJ) \u2013 PPP/PFI Division",
      "Japan Bank for International Cooperation (JBIC)",
      "Mitsubishi UFJ Financial Group & Sumitomo Mitsui Banking Corporation (SMBC)",
      "Taisei Corporation & Shimizu Corporation PPP Consortia"
    ],
    "prioritySectors": [
      "Concession-model International Airports (Kansai, Fukuoka)",
      "Water and Sewage Concessions",
      "Disaster Prevention & Resilient Infrastructure",
      "Elderly Care & Social PPP Facilities"
    ],
    "sourceUrls": [
      {
        "title": "Cabinet Office of Japan \u2013 PFI Promotion",
        "url": "https://www8.cao.go.jp/pfi/e/index.html"
      },
      {
        "title": "Development Bank of Japan (DBJ) PPP",
        "url": "https://www.dbj.jp/en/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Japan",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Structured under the national PFI Promotion Act, leading in airport concessions, municipal water privatization, and disaster-resilient infrastructure syndication with Japanese mega-banks."
  },
  {
    "id": "jordan",
    "name": "Jordan",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Jordan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Jordan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Jordan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Jordan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "kazakhstan",
    "name": "Kazakhstan",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Kazakhstan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Kazakhstan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Kazakhstan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Kazakhstan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "kenya",
    "name": "Kenya",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Kenya",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Kenya National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Kenya",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Kenya under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "kiribati",
    "name": "Kiribati",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Kiribati",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Kiribati National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Kiribati",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Kiribati under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "kuwait",
    "name": "Kuwait",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Kuwait",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Kuwait National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Kuwait",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Kuwait under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "kyrgyzstan",
    "name": "Kyrgyzstan",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Kyrgyzstan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Kyrgyzstan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Kyrgyzstan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Kyrgyzstan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "lao-people-s-democratic-republic",
    "name": "Lao People's Democratic Republic",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Lao People's Democratic Republic",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Lao People's Democratic Republic National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Lao People's Democratic Republic",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Lao People's Democratic Republic under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "latvia",
    "name": "Latvia",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Latvia",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Latvia",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Latvia National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Latvia",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "lebanon",
    "name": "Lebanon",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Lebanon",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Lebanon National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Lebanon",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Lebanon under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "lesotho",
    "name": "Lesotho",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Lesotho",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Lesotho National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Lesotho",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Lesotho under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "liberia",
    "name": "Liberia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Liberia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Liberia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Liberia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Liberia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "libya",
    "name": "Libya",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Libya",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Libya National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Libya",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Libya under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "liechtenstein",
    "name": "Liechtenstein",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Liechtenstein",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Liechtenstein National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Liechtenstein",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Liechtenstein under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "lithuania",
    "name": "Lithuania",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Central Project Management Agency (CPMA) \u2013 PPP Competence Centre",
    "legalFramework": "Law on Investments of the Republic of Lithuania & Concessions Law (transposing EU Directive 2014/23/EU)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC",
    "firms": [
      "Central Project Management Agency (CPMA) \u2013 PPP Competence Centre",
      "VPSP Asociacija (Lithuanian PPP Association)",
      "Ministry of Finance PPP Oversight Unit",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Police Infrastructure & Custody Facilities",
      "Regional Road Modernization (Via Baltica)",
      "Educational Campuses & Sports Complexes",
      "District Energy Heating Efficiency"
    ],
    "sourceUrls": [
      {
        "title": "CPMA Lithuania PPP Competence Centre",
        "url": "https://www.cpva.lt/en/ppp"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. State-level competence center providing legal, financial, tax, and technical advice for national municipal and transport concessions connected to the European Union Facilitators network."
  },
  {
    "id": "luxembourg",
    "name": "Luxembourg",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & Soci\u00e9t\u00e9 Nationale de Cr\u00e9dit et d'Investissement (SNCI)",
    "legalFramework": "Luxembourg Public Procurement Law & EU Directives 2014/23/EU",
    "multilateralSource": "European Investment Bank (EIB Headquarters, Kirchberg) & Luxembourg Sustainable Finance Initiative (LSFI)",
    "firms": [
      "European Investment Bank (EIB) Headquarters \u2013 Kirchberg",
      "Luxembourg Sustainable Finance Initiative (LSFI)",
      "Soci\u00e9t\u00e9 Nationale de Cr\u00e9dit et d'Investissement (SNCI)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Green & Sustainability-Linked Sovereign Bonds",
      "Cross-Border Rail & Tramway Corridors",
      "Public Administrative Campuses",
      "Multilateral Project Syndication"
    ],
    "sourceUrls": [
      {
        "title": "European Investment Bank (EIB)",
        "url": "https://www.eib.org/"
      },
      {
        "title": "Luxembourg Sustainable Finance Initiative",
        "url": "https://lsfi.lu/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Global epicenter for multilateral climate bond structuring and EU cross-border infrastructure funds, connected to the European Union Facilitators network."
  },
  {
    "id": "madagascar",
    "name": "Madagascar",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Madagascar",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Madagascar National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Madagascar",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Madagascar under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "malawi",
    "name": "Malawi",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Malawi",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Malawi National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Malawi",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Malawi under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "malaysia",
    "name": "Malaysia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/well-experienced-ppp-and-sdg17-facilitators-in-malaysia/",
    "governmentUnit": "UKAS \u2013 Public-Private Partnership Unit (Prime Minister's Department)",
    "legalFramework": "National Public-Private Partnership Master Plan (PIK 2030) & Financial Procedure Act 1957",
    "multilateralSource": "Asian Development Bank (ADB) & UN Global Compact Malaysia & Brunei",
    "firms": [
      "UKAS \u2013 Public-Private Partnership Unit (Prime Minister's Department)",
      "Economic Planning Unit (EPU)",
      "UN Global Compact Malaysia & Brunei (UNGCMYB)",
      "Asian Institute of Finance (AIF) & Khazanah Nasional Berhad"
    ],
    "prioritySectors": [
      "Highway Concessions (PLUS Expressways)",
      "University Teaching Hospitals (UiTM, UKM)",
      "Waste-to-Energy Incineration Facilities",
      "Affordable Housing (PR1MA PPPs)"
    ],
    "sourceUrls": [
      {
        "title": "UKAS Public-Private Partnership Unit Malaysia",
        "url": "https://www.ukas.gov.my/"
      },
      {
        "title": "PPP Union Malaysia Facilitators Directory",
        "url": "https://pppunion.org/well-experienced-ppp-and-sdg17-facilitators-in-malaysia/"
      }
    ],
    "summary": "Government-led facilitator framework under UKAS structuring healthcare, highway concessions, and SDG-aligned smart city hubs."
  },
  {
    "id": "maldives",
    "name": "Maldives",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Maldives",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Maldives National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Maldives",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Maldives under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mali",
    "name": "Mali",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mali",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mali National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mali",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mali under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "malta",
    "name": "Malta",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Projects Malta Ltd \u2013 Ministry for the Economy, European Funds and Lands",
    "legalFramework": "Public Procurement Regulations (S.L. 601.03) & Government Concession Guidelines",
    "multilateralSource": "European Investment Bank (EIB) & Malta Development Bank (MDB)",
    "firms": [
      "Projects Malta Ltd \u2013 Government Concessions Agency",
      "Malta Enterprise Public Infrastructure Desk",
      "Malta Development Bank (MDB)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Maritime Cruise & Ferry Terminals",
      "Seawater Reverse Osmosis Desalination (SDG 6)",
      "Integrated Healthcare Facilities",
      "Solar Photovoltaic Canopies & EV Infrastructure"
    ],
    "sourceUrls": [
      {
        "title": "Projects Malta Ltd",
        "url": "https://www.projectsmalta.com/"
      },
      {
        "title": "Malta Development Bank (MDB)",
        "url": "https://www.mdb.org.mt/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Island economy PPP models covering maritime cruise terminals, healthcare campuses, and clean water desalination, connected to the European Union Facilitators network."
  },
  {
    "id": "marshall-islands",
    "name": "Marshall Islands",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Marshall Islands",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Marshall Islands National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Marshall Islands",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Marshall Islands under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mauritania",
    "name": "Mauritania",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mauritania",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mauritania National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mauritania",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mauritania under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mauritius",
    "name": "Mauritius",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mauritius",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mauritius National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mauritius",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mauritius under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mexico",
    "name": "Mexico",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mexico",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mexico National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mexico",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mexico under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "micronesia-federated-states-of",
    "name": "Micronesia (Federated States of)",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Micronesia (Federated States of)",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Micronesia (Federated States of) National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Micronesia (Federated States of)",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Micronesia (Federated States of) under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "monaco",
    "name": "Monaco",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Monaco",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Monaco National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Monaco",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Monaco under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mongolia",
    "name": "Mongolia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mongolia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mongolia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mongolia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mongolia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "montenegro",
    "name": "Montenegro",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Montenegro",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Montenegro National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Montenegro",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Montenegro under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "morocco",
    "name": "Morocco",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Morocco",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Morocco National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Morocco",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Morocco under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "mozambique",
    "name": "Mozambique",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Mozambique",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Mozambique National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Mozambique",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Mozambique under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "myanmar",
    "name": "Myanmar",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Myanmar",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Myanmar National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Myanmar",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Myanmar under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "namibia",
    "name": "Namibia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Namibia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Namibia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Namibia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Namibia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "nauru",
    "name": "Nauru",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Nauru",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Nauru National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Nauru",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Nauru under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "nepal",
    "name": "Nepal",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Nepal",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Nepal National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Nepal",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Nepal under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "netherlands",
    "name": "Netherlands",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Rijkswaterstaat (Directie DBFM) \u2013 Ministry of Infrastructure and Water Management",
    "legalFramework": "Dutch Public Procurement Act (Aanbestedingswet 2012) & DBFM Standard Concession Contracts",
    "multilateralSource": "European Investment Bank (EIB) & Invest-NL National Financing Institution",
    "firms": [
      "Invesis (formerly DIF / Heijmans PPP)",
      "Rijkswaterstaat (Directie DBFM) \u2013 Ministry of Infrastructure",
      "Invest-NL National Financing Institution",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Sea Locks and Flood Protection Barriers (Afsluitdijk & IJmuiden Lock)",
      "A1/A6 Highway Capacity Concessions",
      "High-Performance Courthouses & Ministry Headquarters",
      "Offshore Wind Power Converter Stations"
    ],
    "sourceUrls": [
      {
        "title": "Rijkswaterstaat DBFM Projects Netherlands",
        "url": "https://www.rijkswaterstaat.nl/en"
      },
      {
        "title": "Invest-NL",
        "url": "https://www.invest-nl.nl/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. International benchmark for water defense concessions, sea locks, and institutional P3 availability contracts, connected to the European Union Facilitators network."
  },
  {
    "id": "new-zealand",
    "name": "New Zealand",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of New Zealand",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "New Zealand National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 New Zealand",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in New Zealand under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "nicaragua",
    "name": "Nicaragua",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Nicaragua",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Nicaragua National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Nicaragua",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Nicaragua under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "niger",
    "name": "Niger",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Niger",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Niger National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Niger",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Niger under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "nigeria",
    "name": "Nigeria",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Nigeria",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Nigeria National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Nigeria",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Nigeria under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "north-macedonia",
    "name": "North Macedonia",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of North Macedonia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "North Macedonia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 North Macedonia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in North Macedonia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "norway",
    "name": "Norway",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Norway",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Norway National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Norway",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Norway under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "oman",
    "name": "Oman",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-facilitators-firms-in-sultanate-of-oman/",
    "governmentUnit": "Ministry of Finance \u2013 Public-Private Partnership Unit & Ministry of Housing and Urban Planning (MoHUP)",
    "legalFramework": "Public-Private Partnership Law promulgated by Royal Decree No. 52/2019 & Privatization Law Royal Decree No. 51/2019",
    "multilateralSource": "World Bank Group & Islamic Development Bank (IsDB)",
    "firms": [
      "ALNAHDA DEVELOPMENT PARTNERS GROUP (ADP GROUP) \u2013 Salalah & Muscat",
      "SASLO (Said Al Shahry & Partners Legal Counsel)",
      "VINCI Construction Grands Projets Oman",
      "Ministry of Housing and Urban Planning (MoHUP) & OCCI Coordination"
    ],
    "prioritySectors": [
      "Greater Salalah Master Plan & Special Economic Zones",
      "Salalah Free Zone Logistics & Dry Ports",
      "Salalah Independent Water Desalination (IWP)",
      "Dialysis Medical Centers Availability PPP"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Finance Oman PPP Portal",
        "url": "https://www.mof.gov.om/"
      },
      {
        "title": "PPP Union Oman Facilitators Directory",
        "url": "https://pppunion.org/ppp-facilitators-firms-in-sultanate-of-oman/"
      }
    ],
    "summary": "Established under Royal Decree 52/2019, leading the Greater Salalah Master Plan, port logistics, dry ports, and economic free zones."
  },
  {
    "id": "pakistan",
    "name": "Pakistan",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Pakistan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Pakistan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Pakistan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Pakistan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "palau",
    "name": "Palau",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Palau",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Palau National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Palau",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Palau under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "panama",
    "name": "Panama",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Panama",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Panama National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Panama",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Panama under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "papua-new-guinea",
    "name": "Papua New Guinea",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Papua New Guinea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Papua New Guinea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Papua New Guinea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Papua New Guinea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "paraguay",
    "name": "Paraguay",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Paraguay",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Paraguay National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Paraguay",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Paraguay under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "peru",
    "name": "Peru",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Peru",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Peru National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Peru",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Peru under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "philippines",
    "name": "Philippines",
    "isEUMember": false,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Philippines",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Philippines National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Philippines",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Philippines under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "poland",
    "name": "Poland",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.ppp.gov.pl/",
    "governmentUnit": "Ministry of Funds and Regional Policy \u2013 Department of Public-Private Partnership",
    "legalFramework": "Act on Public-Private Partnership of December 19, 2008 (Journal of Laws 2023, item 30) & Act on Concession Contracts for Construction Works or Services (2019)",
    "multilateralSource": "European Investment Bank (EIB) & European Bank for Reconstruction and Development (EBRD)",
    "firms": [
      "PPP Department \u2013 Ministry of Funds and Regional Policy (Warsaw)",
      "Bank Gospodarstwa Krajowego (BGK \u2013 Polish Development Bank)",
      "Polski Fundusz Rozwoju (PFR \u2013 Polish Development Fund)",
      "Budimex & Warbud PPP Infrastructure Divisions",
      "Dentons & Doma\u0144ski Zakrzewski Palinka (DZP) PPP Practice",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Municipal Waste-to-Energy Incineration Plants",
      "Voivodeship & Municipal Road Networks",
      "Courthouse and Public Administrative Buildings",
      "Clean Water & Thermal Modernization"
    ],
    "sourceUrls": [
      {
        "title": "Platforma PPP \u2013 Ministerstwo Funduszy i Polityki Regionalnej",
        "url": "https://www.ppp.gov.pl/"
      },
      {
        "title": "Bank Gospodarstwa Krajowego (BGK)",
        "url": "https://www.bgk.pl/"
      },
      {
        "title": "EPEC \u2013 European PPP Expertise Centre",
        "url": "https://www.eib.org/en/products/advisory-services/epec/"
      }
    ],
    "summary": "Member of European Union. Centralized under the Government Policy on the Development of PPPs, prominent in waste-to-energy and municipal concessions, connected to the EU Facilitators network."
  },
  {
    "id": "portugal",
    "name": "Portugal",
    "isEUMember": true,
    "column": "I-P",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/",
    "governmentUnit": "UTAP (Unidade Técnica de Acompanhamento de Projetos) – Ministério das Finanças",
    "legalFramework": "Decree-Law No. 111/2012 (Legal Framework for Public-Private Partnerships) & Public Contracts Code (CCP)",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "PARPÚBLICA – Participações Públicas, SGPS, S.A.",
      "IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário",
      "AICEP Portugal Global – Trade & Investment Agency",
      "CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley",
      "NOVA School of Business & Economics (NOVA SBE)",
      "ADP Platform (UK & Netherlands) – Portugal Partner Listing (Loulé)"
    ],
    "prioritySectors": [
      "Hospital Concessions (Hospital de Loures, Vila Franca de Xira)",
      "Scut Shadow Toll & Concession Motorways",
      "Deepwater Port of Sines Expansion",
      "Green Hydrogen Production & Export Terminal"
    ],
    "sourceUrls": [
      {
        "title": "PPP Union Well Experienced PPP & SDGs Facilitators in Portugal",
        "url": "https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/"
      },
      {
        "title": "PARPÚBLICA – Participações Públicas, SGPS, S.A.",
        "url": "https://www.parpublica.pt"
      },
      {
        "title": "IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário",
        "url": "https://www.impic.pt"
      },
      {
        "title": "AICEP Portugal Global – Trade & Investment Agency",
        "url": "https://www.portugalglobal.pt"
      },
      {
        "title": "CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley",
        "url": "https://www.ccdr-lvt.pt"
      },
      {
        "title": "NOVA School of Business & Economics (NOVA SBE)",
        "url": "https://www.novasbe.pt"
      },
      {
        "title": "ADP Platform (Portugal Office, Loulé)",
        "url": "https://www.adpplatform.com"
      },
      {
        "title": "UTAP Unidade Técnica de Acompanhamento de Projetos",
        "url": "https://www.utap.gov.pt/"
      }
    ],
    "summary": "Reputable, non-blacklisted, internationally recognized Portuguese PPP institutions led by PARPÚBLICA, IMPIC, AICEP, NOVA SBE, and ADP Platform Loulé, coordinated under UTAP and the EU PPP network."
  },
  {
    "id": "qatar",
    "name": "Qatar",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Qatar",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Qatar National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Qatar",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Qatar under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "republic-of-korea",
    "name": "Republic of Korea",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Republic of Korea",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Republic of Korea National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Republic of Korea",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Republic of Korea under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "republic-of-moldova",
    "name": "Republic of Moldova",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Republic of Moldova",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Republic of Moldova National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Republic of Moldova",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Republic of Moldova under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "romania",
    "name": "Romania",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance & National Procurement Agency of Romania",
    "legalFramework": "EU Directives 2014/23/EU (Concessions) & 2014/24/EU (Public Procurement), codified in national law of Romania",
    "multilateralSource": "European Investment Bank (EIB) & EPEC (European PPP Expertise Centre)",
    "firms": [
      "Romania National Infrastructure & PPP Unit",
      "European Investment Bank (EIB) \u2013 PPP Advisory & Financing Division",
      "EPEC \u2013 European PPP Expertise Centre (EIB/EC)",
      "Deloitte & KPMG Global Infrastructure Advisory",
      "Connected to European Union PPP Facilitators Network"
    ],
    "prioritySectors": [
      "Trans-European Transport Network (TEN-T)",
      "Clean Energy & Renewable Storage (SDG 7)",
      "Healthcare & Educational Campuses",
      "Circular Water & Waste Management"
    ],
    "sourceUrls": [
      {
        "title": "European PPP Expertise Centre (EPEC)",
        "url": "https://www.eib.org/en/products/advisory-services/epec/index.htm"
      },
      {
        "title": "PPP Union Top 20 EU Facilitators (VIPs)",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Romania",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Member of European Union. Operating under EU Public Procurement Directives (2014/23/EU, 2014/24/EU) and connected directly to the Top 20 European PPP Facilitators Network on pppunion.org."
  },
  {
    "id": "russian-federation",
    "name": "Russian Federation",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Russian Federation",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Russian Federation National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Russian Federation",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Russian Federation under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "rwanda",
    "name": "Rwanda",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Rwanda",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Rwanda National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Rwanda",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Rwanda under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "saint-kitts-and-nevis",
    "name": "Saint Kitts and Nevis",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Saint Kitts and Nevis",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Saint Kitts and Nevis National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Saint Kitts and Nevis",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Saint Kitts and Nevis under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "saint-lucia",
    "name": "Saint Lucia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Saint Lucia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Saint Lucia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Saint Lucia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Saint Lucia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "saint-vincent-and-the-grenadines",
    "name": "Saint Vincent and the Grenadines",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Saint Vincent and the Grenadines",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Saint Vincent and the Grenadines National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Saint Vincent and the Grenadines",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Saint Vincent and the Grenadines under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "samoa",
    "name": "Samoa",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Samoa",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Samoa National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Samoa",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Samoa under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "san-marino",
    "name": "San Marino",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of San Marino",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "San Marino National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 San Marino",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in San Marino under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "sao-tome-and-principe",
    "name": "Sao Tome and Principe",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Sao Tome and Principe",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Sao Tome and Principe National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Sao Tome and Principe",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Sao Tome and Principe under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "saudi-arabia",
    "name": "Saudi Arabia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.ncp.gov.sa/",
    "governmentUnit": "National Center for Privatization & PPP (NCP) \u2013 Ministry of Finance",
    "legalFramework": "Private Sector Participation (PSP) Law promulgated under Royal Decree No. M/64, Vision 2030 Infrastructure Mandate",
    "multilateralSource": "World Bank Group & Islamic Development Bank (IsDB)",
    "firms": [
      "National Center for Privatization & PPP (NCP)",
      "Public Investment Fund (PIF) \u2013 Infrastructure Directorate",
      "SWPC (Saudi Water Partnership Company)",
      "ACWA Power (Global Water Desalination & Green Hydrogen PPPs)",
      "Al-Jadaan & Partners Law Firm / Clifford Chance"
    ],
    "prioritySectors": [
      "Independent Water & Desalination Plants (IWP/IWPP)",
      "Healthcare Hospital & Medical Center PPPs",
      "School Construction & Educational Campuses (Wave 1 & 2)",
      "Renewable Energy & Giga-Project Logistics"
    ],
    "sourceUrls": [
      {
        "title": "National Center for Privatization (NCP) Saudi Arabia",
        "url": "https://www.ncp.gov.sa/"
      },
      {
        "title": "Saudi Water Partnership Company (SWPC)",
        "url": "https://www.swpc.ceo/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Saudi Arabia",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Rapidly expanding Vision 2030 PPP ecosystem governed by the PSP Law, delivering world-scale Independent Water Projects, social housing, and public healthcare concessions."
  },
  {
    "id": "senegal",
    "name": "Senegal",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Senegal",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Senegal National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Senegal",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Senegal under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "serbia",
    "name": "Serbia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Serbia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Serbia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Serbia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Serbia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "seychelles",
    "name": "Seychelles",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Seychelles",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Seychelles National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Seychelles",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Seychelles under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "sierra-leone",
    "name": "Sierra Leone",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Sierra Leone",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Sierra Leone National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Sierra Leone",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Sierra Leone under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "singapore",
    "name": "Singapore",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Singapore",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Singapore National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Singapore",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Singapore under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "slovakia",
    "name": "Slovakia",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Transport and Construction & Ministry of Finance Value for Money Unit (\u00daHP)",
    "legalFramework": "Act No. 343/2015 Coll. on Public Procurement and Concessions & EU Directive 2014/23/EU",
    "multilateralSource": "European Investment Bank (EIB) & Slovak Investment Holding (SIH)",
    "firms": [
      "Ministry of Transport and Construction of the Slovak Republic PPP Division",
      "Slovak Investment and Holding (SIH)",
      "Ministry of Finance Value for Money Unit (\u00daHP)",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "D4/R7 Bratislava Bypass Highway Concession (Zero Bypass)",
      "R1 Expressway Availability PPP",
      "Regional Hospital Facilities & Academic Infrastructure",
      "Geothermal District Heating Networks"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Transport of the Slovak Republic",
        "url": "https://www.mindop.sk/"
      },
      {
        "title": "Slovak Investment Holding",
        "url": "https://www.sih.sk/en"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Landmark highway D4/R7 bypass availability concession, healthcare campuses, and regional smart energy grids, connected to the European Union Facilitators network."
  },
  {
    "id": "slovenia",
    "name": "Slovenia",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Ministry of Finance \u2013 Sector for PPP & Public Procurement",
    "legalFramework": "Public-Private Partnership Act (ZJZP) and EU Public Procurement Directives",
    "multilateralSource": "European Investment Bank (EIB) & UNECE",
    "firms": [
      "Ministry of Finance \u2013 Sector for PPP & Public Procurement",
      "Slovenian Regional Development Fund",
      "Infrastructure Directorate Concession Team",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "Municipal Energy Contracting",
      "Elderly Care Homes & Social Welfare",
      "Railway & Logistics Terminals (Koper Port)",
      "Hydroelectric Concessions"
    ],
    "sourceUrls": [
      {
        "title": "Ministry of Finance Republic of Slovenia",
        "url": "https://www.gov.si/en/state-authorities/ministries/ministry-of-finance/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Operating under the Slovenian Public-Private Partnership Act (ZJZP) and EU Public Procurement Directives, connected to the European Union Facilitators network."
  },
  {
    "id": "solomon-islands",
    "name": "Solomon Islands",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Solomon Islands",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Solomon Islands National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Solomon Islands",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Solomon Islands under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "somalia",
    "name": "Somalia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Somalia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Somalia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Somalia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Somalia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "south-africa",
    "name": "South Africa",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "http://www.ppp.gov.za/",
    "governmentUnit": "National Treasury \u2013 PPP Unit (Budget Office)",
    "legalFramework": "Public Finance Management Act (PFMA) Treasury Regulation 16 and Municipal Systems Act / Municipal Finance Management Act (MFMA)",
    "multilateralSource": "African Development Bank (AfDB) & World Bank PPIAF",
    "firms": [
      "National Treasury PPP Unit (Pretoria)",
      "Development Bank of Southern Africa (DBSA)",
      "Infrastructure South Africa (ISA \u2013 Presidency)",
      "Standard Bank & Nedbank Capital Project Finance",
      "Bowmans & ENSafrica Infrastructure Legal Specialists"
    ],
    "prioritySectors": [
      "Renewable Energy Independent Power Producer Procurement Programme (REIPPPP)",
      "Gautrain Rapid Rail Link Concession",
      "Student Housing & University Campuses",
      "Hospital Co-Location Facilities"
    ],
    "sourceUrls": [
      {
        "title": "South Africa National Treasury PPP Unit",
        "url": "http://www.ppp.gov.za/"
      },
      {
        "title": "Development Bank of Southern Africa (DBSA)",
        "url": "https://www.dbsa.org/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 South Africa",
        "url": "https://ppp.worldbank.org/public-private-partnership/south-africa"
      }
    ],
    "summary": "Regulated under Treasury Regulation 16, celebrated for the pioneering REIPPPP clean power procurement and the Gautrain rapid transit PPP concession."
  },
  {
    "id": "south-sudan",
    "name": "South Sudan",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of South Sudan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "South Sudan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 South Sudan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in South Sudan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "spain",
    "name": "Spain",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Ministerio de Hacienda",
    "legalFramework": "Ley 9/2017 de Contratos del Sector P\u00fablico (transposing EU Directives 2014/23/EU and 2014/24/EU)",
    "multilateralSource": "UNECE Specialist Centre on PPPs in Smart Cities (IESE Business School, Barcelona) & EIB",
    "firms": [
      "IESE Business School \u2013 Specialist Center on PPPs in Smart Cities (UNECE)",
      "Ferrovial & ACS Infrastructure Development Consortia",
      "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Ministerio de Hacienda",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "High-Speed Rail & Motorway Concessions",
      "Seawater Desalination Plants (SDG 6)",
      "Hospital & Healthcare Availability Concessions",
      "High-Efficiency Solar Thermal (CSP)"
    ],
    "sourceUrls": [
      {
        "title": "Oficina Nacional de Evaluaci\u00f3n (ONE) \u2013 Espa\u00f1a",
        "url": "https://www.hacienda.gob.es/"
      },
      {
        "title": "IESE PPP for Cities (UNECE)",
        "url": "https://www.iese.edu/ppp-cities/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. World-leading concession developers in high-speed rail, desalination, hospital concessions, and municipal concessions, connected to the European Union Facilitators network."
  },
  {
    "id": "sri-lanka",
    "name": "Sri Lanka",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Sri Lanka",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Sri Lanka National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Sri Lanka",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Sri Lanka under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "sudan",
    "name": "Sudan",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Sudan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Sudan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Sudan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Sudan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "suriname",
    "name": "Suriname",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Suriname",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Suriname National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Suriname",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Suriname under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "sweden",
    "name": "Sweden",
    "isEUMember": true,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Trafikverket (Swedish Transport Administration) & Ministry of Enterprise and Innovation",
    "legalFramework": "Public Procurement Act (LOU \u2013 2016:1145) & Act on Concessions (LUF \u2013 2016:1147)",
    "multilateralSource": "Nordic Investment Bank (NIB) & European Investment Bank (EIB)",
    "firms": [
      "Trafikverket (Swedish Transport Administration) Major Projects",
      "Swedfund International ESG Infrastructure",
      "Skanska Infrastructure Development",
      "Connected to EU PPP Facilitators Network (EIB & EPEC)"
    ],
    "prioritySectors": [
      "New Karolinska Solna Hospital PPP Concession",
      "Arlanda Airport Rail Express Link (A-Train)",
      "Fossil-Free Transport Infrastructure",
      "District Cooling and Deep Geothermal"
    ],
    "sourceUrls": [
      {
        "title": "Trafikverket Swedish Transport Administration",
        "url": "https://bransch.trafikverket.se/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Member of European Union. Fossil-free construction standards, public hospital concessions, and green energy availability models, connected to the European Union Facilitators network."
  },
  {
    "id": "switzerland",
    "name": "Switzerland",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/",
    "governmentUnit": "Federal Department of Finance (FDF) & State Secretariat for Economic Affairs (SECO)",
    "legalFramework": "Federal Act on Public Procurement (BoeB) & UNECE People-First PPP Standards",
    "multilateralSource": "UNECE International PPP Centre of Excellence (Palais des Nations, Geneva)",
    "firms": [
      "UNECE International PPP Centre of Excellence (Palais des Nations, Geneva)",
      "Swiss State Secretariat for Economic Affairs (SECO) Infrastructure Desk",
      "Swiss Export Risk Insurance (SERV)",
      "PPP Schweiz Association (Verein PPP Schweiz)"
    ],
    "prioritySectors": [
      "People-First Sustainable Infrastructure Standards",
      "Hydropower & Alpine Renewable Storage",
      "Bilateral Green Development Finance",
      "Cross-Border Transit Linkages"
    ],
    "sourceUrls": [
      {
        "title": "UNECE International PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "Swiss SECO Economic Cooperation",
        "url": "https://www.seco-cooperation.admin.ch/en/"
      },
      {
        "title": "PPP Union Europe Directory",
        "url": "https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
      }
    ],
    "summary": "Global headquarters of UNECE People-First PPP standards and bilateral development financing."
  },
  {
    "id": "syrian-arab-republic",
    "name": "Syrian Arab Republic",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Syrian Arab Republic",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Syrian Arab Republic National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Syrian Arab Republic",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Syrian Arab Republic under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "tajikistan",
    "name": "Tajikistan",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Tajikistan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Tajikistan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Tajikistan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Tajikistan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "thailand",
    "name": "Thailand",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Thailand",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Thailand National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Thailand",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Thailand under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "timor-leste",
    "name": "Timor-Leste",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Timor-Leste",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Timor-Leste National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Timor-Leste",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Timor-Leste under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "togo",
    "name": "Togo",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Togo",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Togo National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Togo",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Togo under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "tonga",
    "name": "Tonga",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Tonga",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Tonga National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Tonga",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Tonga under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "trinidad-and-tobago",
    "name": "Trinidad and Tobago",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Trinidad and Tobago",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Trinidad and Tobago National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Trinidad and Tobago",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Trinidad and Tobago under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "tunisia",
    "name": "Tunisia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Tunisia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Tunisia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Tunisia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Tunisia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "turkmenistan",
    "name": "Turkmenistan",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Turkmenistan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Turkmenistan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Turkmenistan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Turkmenistan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "tuvalu",
    "name": "Tuvalu",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Tuvalu",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Tuvalu National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Tuvalu",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Tuvalu under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "t-rkiye",
    "name": "T\u00fcrkiye",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of T\u00fcrkiye",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "T\u00fcrkiye National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 T\u00fcrkiye",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in T\u00fcrkiye under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "uganda",
    "name": "Uganda",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Uganda",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Uganda National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Uganda",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Uganda under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "ukraine",
    "name": "Ukraine",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Ukraine",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Ukraine National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Ukraine",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Ukraine under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "united-arab-emirates",
    "name": "United Arab Emirates",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": true,
    "hasPublishedDirectory": true,
    "link": "https://pppunion.org/ppp-17-sdgs-facilitators-in-uae/",
    "governmentUnit": "Ministry of Finance UAE & Dubai Department of Finance (DOF) Central PPP Unit / Abu Dhabi Investment Office (ADIO)",
    "legalFramework": "Federal Decree-Law No. 12/2023 on Public-Private Partnerships & Dubai Law No. 22/2015",
    "multilateralSource": "World Bank Group & Islamic Development Bank (IsDB)",
    "firms": [
      "Ministry of Economy \u2013 UAE",
      "Ministry of Energy and Infrastructure (MOEI)",
      "Dubai Future Foundation (DFF) & Dubai Department of Finance PPP Unit",
      "Abu Dhabi Global Market (ADGM) & ADP Platform (RAKEZ)"
    ],
    "prioritySectors": [
      "Solar Independent Power Producer (IPP \u2013 Mohammed bin Rashid Al Maktoum Solar Park)",
      "Electric Vehicle Charging Infrastructure",
      "Waste-to-Energy Mega Plants (Warsan Facility)",
      "School Infrastructure Availability PPPs (Zayed City Schools)"
    ],
    "sourceUrls": [
      {
        "title": "UAE Federal Decree-Law No. 12/2023 on PPP",
        "url": "https://mof.gov.ae/"
      },
      {
        "title": "Dubai Department of Finance PPP",
        "url": "https://www.dof.gov.ae/en-us/PPP/Pages/default.aspx"
      },
      {
        "title": "PPP Union UAE Facilitators Directory",
        "url": "https://pppunion.org/ppp-17-sdgs-facilitators-in-uae/"
      }
    ],
    "summary": "Governed by Federal Decree-Law No. 12/2023 regulating Public-Private Partnerships, establishing leading regional green tech and urban concessions."
  },
  {
    "id": "united-kingdom",
    "name": "United Kingdom",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.gov.uk/government/organisations/infrastructure-and-projects-authority",
    "governmentUnit": "Infrastructure and Projects Authority (IPA) \u2013 Cabinet Office & HM Treasury",
    "legalFramework": "Public Contracts Regulations (transposing EU Directives / Procurement Act), Private Finance Model PFI/PF2 evolving into modern Regulated Asset Base (RAB) and Design-Build-Finance-Operate (DBFO) models",
    "multilateralSource": "World Bank PPP Knowledge Lab / UNECE International Centre of Excellence in Geneva",
    "firms": [
      "Infrastructure and Projects Authority (IPA)",
      "UK Infrastructure Bank (UKIB \u2013 Leeds)",
      "Mott MacDonald & PwC Infrastructure Advisory UK",
      "John Laing Infrastructure & Balfour Beatty Investments",
      "Linklaters & Clifford Chance Global Projects & Energy Desk"
    ],
    "prioritySectors": [
      "Offshore Wind & Net-Zero Grid (SDG 7)",
      "High Speed 2 & Transit Corridors",
      "National Healthcare Hospital Decarbonization",
      "Water & Coastal Defense"
    ],
    "sourceUrls": [
      {
        "title": "UK Infrastructure and Projects Authority (IPA)",
        "url": "https://www.gov.uk/government/organisations/infrastructure-and-projects-authority"
      },
      {
        "title": "UK Infrastructure Bank",
        "url": "https://www.ukib.org.uk/"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 United Kingdom",
        "url": "https://ppp.worldbank.org/"
      }
    ],
    "summary": "Pioneering birthplace of the Private Finance Initiative (PFI), now implementing modern Regulated Asset Base (RAB) models and green bond infrastructure financing under HM Treasury oversight."
  },
  {
    "id": "united-republic-of-tanzania",
    "name": "United Republic of Tanzania",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of United Republic of Tanzania",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "United Republic of Tanzania National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 United Republic of Tanzania",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in United Republic of Tanzania under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "united-states-of-america",
    "name": "United States of America",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": true,
    "link": "https://www.transportation.gov/buildamerica",
    "governmentUnit": "Build America Bureau \u2013 U.S. Department of Transportation (USDOT) & Federal Highway Administration (FHWA) Center for Innovative Finance Support",
    "legalFramework": "Title 23 United States Code (Highways & Surface Transportation P3s), TIFIA (Transportation Infrastructure Finance and Innovation Act), WIFIA (Water Infrastructure Finance)",
    "multilateralSource": "World Bank Group PPP Knowledge Lab / UNECE People-First PPP Hub",
    "firms": [
      "Build America Bureau (USDOT)",
      "Association for the Improvement of American Infrastructure (AIAI)",
      "Arup & AECOM Infrastructure Advisory",
      "Macquarie Capital USA & Meridiam North America",
      "Milbank LLP & Gibson Dunn Infrastructure Project Finance"
    ],
    "prioritySectors": [
      "High-Speed Rail & Highway Tolling",
      "Clean Water & Wastewater (SDG 6)",
      "Airport Terminal Modernization",
      "Renewable Energy Grid Integration"
    ],
    "sourceUrls": [
      {
        "title": "U.S. DOT Build America Bureau",
        "url": "https://www.transportation.gov/buildamerica"
      },
      {
        "title": "World Bank PPP Knowledge Lab \u2013 United States",
        "url": "https://ppp.worldbank.org/public-private-partnership/"
      },
      {
        "title": "AIAI Infrastructure Council",
        "url": "https://aiai-infra.info/"
      }
    ],
    "summary": "Operating through federal credit programs (TIFIA, WIFIA, PABs) and state-level P3 enabling statutes (over 38 states). Guided by UNECE People-First standards and non-sanctionable UN 2030 Agenda humanitarian goals."
  },
  {
    "id": "uruguay",
    "name": "Uruguay",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Uruguay",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Uruguay National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Uruguay",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Uruguay under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "uzbekistan",
    "name": "Uzbekistan",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Uzbekistan",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Uzbekistan National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Uzbekistan",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Uzbekistan under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "vanuatu",
    "name": "Vanuatu",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Vanuatu",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Vanuatu National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Vanuatu",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Vanuatu under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "venezuela-bolivarian-republic-of",
    "name": "Venezuela (Bolivarian Republic of)",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Venezuela (Bolivarian Republic of)",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Venezuela (Bolivarian Republic of) National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Venezuela (Bolivarian Republic of)",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Venezuela (Bolivarian Republic of) under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "viet-nam",
    "name": "Viet Nam",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Viet Nam",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Viet Nam National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Viet Nam",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Viet Nam under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "yemen",
    "name": "Yemen",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Yemen",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Yemen National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Yemen",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Yemen under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "zambia",
    "name": "Zambia",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Zambia",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Zambia National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Zambia",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Zambia under World Bank PPIAF and UN guidelines."
  },
  {
    "id": "zimbabwe",
    "name": "Zimbabwe",
    "isEUMember": false,
    "column": "P-Z",
    "isPublished29": false,
    "hasPublishedDirectory": false,
    "link": "https://ppp.worldbank.org/public-private-partnership/",
    "governmentUnit": "Ministry of Finance / National Planning Authority of Zimbabwe",
    "legalFramework": "National Public-Private Partnership & Concession Regulations, operating under UN 2030 Agenda universal non-sanctionability",
    "multilateralSource": "World Bank Group (PPIAF) & UNECE People-First PPP Center of Excellence",
    "firms": [
      "Zimbabwe National PPP Facilitation Desk",
      "World Bank Group PPIAF Technical Assistance Desk",
      "UNDP SDG Finance & Investment Liaison",
      "Accredited Multilateral Transaction Advisory Consortia"
    ],
    "prioritySectors": [
      "Clean Drinking Water & Sanitation (SDG 6)",
      "Solar & Off-Grid Renewable Energy (SDG 7)",
      "Essential Healthcare Infrastructure (SDG 3)",
      "Agricultural & Trade Corridors"
    ],
    "sourceUrls": [
      {
        "title": "World Bank PPP Knowledge Lab \u2013 Zimbabwe",
        "url": "https://ppp.worldbank.org/"
      },
      {
        "title": "UNECE People-First PPP Centre of Excellence",
        "url": "https://unece.org/ppp"
      },
      {
        "title": "UN Sustainable Development Goals Knowledge Platform",
        "url": "https://sdgs.un.org/"
      }
    ],
    "summary": "Official liaison and accreditation desk supporting private-sector engagement, banking compliance, and non-sanctionable SDG projects in Zimbabwe under World Bank PPIAF and UN guidelines."
  }
];

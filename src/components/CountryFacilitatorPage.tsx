import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink, 
  Building2, 
  Scale, 
  CheckCircle2, 
  Landmark, 
  FileText, 
  Edit3, 
  Save, 
  RotateCcw, 
  Share2, 
  Printer, 
  ShieldCheck, 
  BookOpen, 
  Layers, 
  Sparkles,
  ChevronLeft,
  Info,
  Check,
  Mail,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { FacilitatorCountry, ALL_193_COUNTRIES } from '../data/facilitatorsDirectory';
import { EUROPE_VIP_FACILITATORS_RAW_TEXT } from '../data/europeVipFacilitators';
import { EuropeVipFacilitatorsSection } from './EuropeVipFacilitatorsSection';
import { IranFacilitatorsDossier } from './IranFacilitatorsDossier';
import { IndiaFacilitatorsDossier } from './IndiaFacilitatorsDossier';
import { PortugalFacilitatorsDossier } from './PortugalFacilitatorsDossier';
import { CanadaFacilitatorsDossier } from './CanadaFacilitatorsDossier';

export const INDIA_DEFAULT_EXTRACTED_TEXT = `# PPP & SDGS CENTER AND FACILITATORS MEMBERS IN INDIA
Official Source: https://pppunion.org/ppp-sdgs-center-and-facilitators-members-in-india/

### 1. INFRASTRUCTURE SUPPORT & DEVELOPMENT DIVISION (ISD)
- Department: Department of Economic Affairs, Ministry of Finance, Government of India
- Core Business:
  • National PPP policy and regulatory framework formulation
  • Viability Gap Funding (VGF) Scheme administration
  • India Infrastructure Project Development Fund (IIPDF) project structuring grants
  • Secretariat for Public Private Partnership Appraisal Committee (PPPAC)
- Address: Room No. 502, Jawahar Vyapar Bhawan, Tolstoy Road, New Delhi, India
- Phone: +91 11 2370 1037
- Official Website: https://www.pppinindia.gov.in

---

### 2. NATIONAL INSTITUTE OF RURAL DEVELOPMENT & PANCHAYATI RAJ (NIRDPR)
- Centre: Centre for CSR, PPP & People’s Action
- Core Business:
  • PPP capacity building for rural development
  • SDG-17 partnership facilitation
  • CSR & PPP training programs
  • National & international PPP workshops
- Address: NIRDPR Campus, Rajendranagar, Hyderabad, Telangana, India
- Phone: +91 40 2400 8522
- Official Website: https://nirdpr.org.in

---

### 3. EMPANELLED PPP TRANSACTION ADVISERS (DEA)
- Department of Economic Affairs Empanelled Panel (Notification dated 5 Feb 2024)
- Core Business:
  • PPP project structuring
  • Financial advisory for PPP concessions
  • National PPP transaction advisory panel
- Empanelled Advisory Firms:
  • Almondz Global Securities Ltd. (New Delhi)
  • CRISIL Ltd. (Gurgaon / Mumbai)
  • Deloitte India LLP (Gurgaon / National)
  • Ernst & Young LLP (EY India – National)
  • KPMG Advisory Services Private Ltd. (Gurgaon / National)
- Official Portal: https://www.pppinindia.gov.in

---

### 4. UNDP INDIA – SDG KNOWLEDGE HUB
- Organization: United Nations Development Programme (UNDP) in India
- Core Business:
  • SDG17 partnership development
  • Technical advisory for SDG implementation
  • National SDG coordination support
- Address: UNDP India Country Office, 55 Lodhi Estate, New Delhi – 110003, India
- Phone: +91 11 4653 2333
- Email: supportsdghub.in@undp.org
- Official Website: https://www.in.undp.org

---

### 5. SUSTAINABLE DEVELOPMENT RESEARCH FOUNDATION (SDRF INDIA)
- Entity: Accredited Non-Profit Research & Development Foundation
- Core Business:
  • SDG implementation projects
  • Environmental sustainability programs
  • Community development aligned with SDGs
- Addresses:
  • Oplus Cowork, Bailey Road, Rupaspur, Patna – 801503, Bihar, India
  • MIG 220, Hanuman Nagar, Kankarbagh, Patna – 800020, Bihar, India
- Email: help@sdrfindia.org
- Official Website: https://www.sdrfindia.org

---

### 6. INDUS GLOBAL INDIA
- Organization: Indus Global (Projects • Investment • Partnerships)
- Status: Registered VIP Member of PPP Union & Associated Partner of ADP Platform
- Head Office: Dubai, UAE | India Operations: Chennai, Tamil Nadu
- Resource Person: Dr. Rajah Cornelius
- Core Business & Areas of Expertise:
  • PPP facilitation and SDG-17 partnership development
  • Investment mobilization and partnership structuring
  • Project development and execution
  • International development cooperation
  • Institutional capacity building and project advisory
  • BYOBO and student entrepreneur development
- Special Initiative: Launching an educational and financial empowerment program for eligible companies, facilitators, and student entrepreneurs valued at approximately ₹10,000 crore INR (~€1.1 billion).
- Address: Indus Gp Empee Towers 59, Adithanar Rd, Pudupet, Komaleeswaranpet, Egmore, Greater Chennai, Tamil Nadu 600008, India
- Email: rajah@industransfood.com
- WhatsApp / Phone: +971 55 439 2119
- Official Portal: https://www.industransfood.com/contact.php#
`;

export const PORTUGAL_DEFAULT_EXTRACTED_TEXT = `# WELL EXPERIENCED PPP & SDGS FACILITATORS IN PORTUGAL
Official Source: https://pppunion.org/well-experienced-ppp-sdgs-facilitators-in-portugal/
Accreditation Status: "All institutions are reputable, non-blacklisted, and internationally recognized as PPP."

### 1. PARPÚBLICA – Participações Públicas, SGPS, S.A.
- Status: State-Owned Public Holdings Enterprise (Ministry of Finance)
- Core Business:
  • National PPP coordination and concession management
  • Infrastructure partnerships (transport, energy, public services)
  • Public asset management and investment structuring
- Address: Rua da Alfândega 78, 1100-585 Lisboa, Portugal
- Phone: +351 21 881 5000
- Email: geral@parpublica.pt
- Website: https://www.parpublica.pt

---

### 2. IMPIC – Instituto dos Mercados Públicos, Construção e Imobiliário
- Status: National Public Procurement & Construction Regulatory Body
- Core Business:
  • Public procurement regulation
  • PPP compliance oversight
  • Construction and infrastructure market governance
  • SDG-aligned transparency and accountability standards
- Address: Avenida Júlio Dinis 11, 1050-131 Lisboa, Portugal
- Phone: +351 21 792 1800
- Email: info@impic.pt
- Website: https://www.impic.pt

---

### 3. AICEP Portugal Global – Trade & Investment Agency
- Status: Sovereign Trade & Investment Promotion Agency
- Core Business:
  • International investment facilitation
  • PPP-related foreign partnership development
  • SDG17 global cooperation programs
  • Private-sector development and innovation support
- Address: Avenida 5 de Outubro 101, 1050-051 Lisboa, Portugal
- Phone: +351 21 790 3200
- Email: info@portugalglobal.pt
- Website: https://www.portugalglobal.pt

---

### 4. CCDR-LVT – Regional Development Commission of Lisbon & Tagus Valley
- Status: Metropolitan Regional Development Authority
- Core Business:
  • Regional SDG implementation
  • PPP-aligned urban development programs
  • Infrastructure planning and sustainability projects
  • Public–private cooperation for regional growth
- Address: Rua Alexandre Herculano 11, 1250-008 Lisboa, Portugal
- Phone: +351 21 359 6000
- Email: geral@ccdr-lvt.pt
- Website: https://www.ccdr-lvt.pt

---

### 5. NOVA School of Business & Economics (NOVA SBE)
- Status: Academic Research Institution & Executive Education Center
- Core Business:
  • PPP policy research and training
  • SDG17 partnership education
  • Sustainable development consulting
  • Public-sector innovation programs
- Address: Campus de Carcavelos, Rua da Holanda 1, 2775-405 Carcavelos, Portugal
- Phone: +351 21 382 2725
- Email: info@novasbe.pt
- Website: https://www.novasbe.pt

---

### 6. ADP PLATFORM (UK & NETHERLANDS) – PORTUGAL PARTNER LISTING
- Status: VIP Member of PPP Union & High-Level Expert Facilitator
- Core Business:
  • PPP facilitation and SDG17 partnership development
  • International development cooperation
  • Institutional capacity building and project advisory
  • Multilingual legal drafting and PPP documentation
- Address: 83A, Cerro Do Mocho, Sitios Dos Quartos, Loulé, Portugal 8100-256
- Email: adp@adpplatform.org
- Website: https://www.adpplatform.com
`;

export const CANADA_DEFAULT_EXTRACTED_TEXT = `# PPP FACILITATORS IN CANADA (VIP MEMBERS)
Official Source: https://pppunion.org/ppp-facilitators-in-canada-vip-members/
Accreditation Note: "TOP 5 PPP FACILITATORS IN CANADA (All firms have 10+ years PPP experience and national recognition)"

### 1. Blake, Cassels & Graydon LLP (Blakes)
- Classification: VIP Member · Top-Tier Legal Practice
- Core Expertise:
  • Market-leading PPP & infrastructure practice
  • Advises governments, lenders, sponsors on major PPPs
  • Experience across transit, highways, bridges, ports, water, energy, hospitals
  • Known for complex PPP structuring and secondary market PPP transactions
  • Acted on CAD 5.5B Calgary Green Line LRT PPP
- Address: 199 Bay Street, Suite 4000, Toronto, ON M5L 1A9, Canada
- Phone: +1 416-863-2400
- Email: info@blakes.com
- Website: https://www.blakes.com

---

### 2. McMillan LLP
- Classification: VIP Member · 100+ Completed PPPs
- Core Expertise:
  • Top-tier PPP legal advisor with 100+ PPP projects completed
  • Deep experience in transportation, healthcare, water/wastewater PPPs
  • Advises lenders, consortia, subcontractors, and public authorities
  • Provides PPP training to federal and provincial officials
- Address: Brookfield Place, 181 Bay Street, Suite 4400, Toronto, ON M5J 2T3, Canada
- Phone: +1 416-865-7000
- Email: info@mcmillan.ca
- Website: https://www.mcmillan.ca

---

### 3. Davies Ward Phillips & Vineberg LLP (Davies)
- Classification: VIP Member · Band-1 Ranked PPP & Infrastructure Team
- Core Expertise:
  • Band-1 ranked PPP & infrastructure team in Canada
  • Strong PPP finance capability; advises lenders, sponsors, developers
  • Major PPP experience in LRT, water projects, municipal infrastructure
  • Acted on Yonge North Subway Extension PPP
- Address: 155 Wellington Street West, Toronto, ON M5V 3J7, Canada
- Phone: +1 416-863-0900
- Email: info@dwpv.com
- Website: https://www.dwpv.com

---

### 4. Dentons Canada
- Classification: VIP Member · Ranked #1 Global Law Firm by Project Value
- Core Expertise:
  • Ranked #1 global law firm by project value in Canada’s Top100 Projects
  • Advises on 13 of Canada’s largest PPP projects (CA$86B total)
  • Strong in transit, highways, bridges, hospitals, water, waste, energy PPPs
  • Offices across all major Canadian cities
- Address: 77 King Street West, Suite 400, Toronto, ON M5K 0A1, Canada
- Phone: +1 416-863-4511
- Email: toronto@dentons.com
- Website: https://www.dentons.com

---

### 5. CPCS (Infrastructure & PPP Advisory)
- Classification: VIP Member · Global Sovereign Transaction Advisor
- Core Expertise:
  • Leading PPP transaction advisor in Canada and globally
  • Provides feasibility studies, market analysis, procurement strategy
  • Advises governments, MDBs, and private investors
  • Strong PPP experience in transport, power, utilities, climate projects
- Address: 150 Elgin Street, Suite 800, Ottawa, ON K2P 1L4, Canada
- Phone: +1 613-237-2500
- Email: info@cpcs.ca
- Website: https://www.cpcs.ca
`;

export const AFGHANISTAN_DEFAULT_EXTRACTED_TEXT = `# AFGHANISTAN PPP FACILITATORS & SERVICES PROVIDERS
Official Source: https://pppunion.org/afghanistan-ppp-services-providers/ (Post 1231)

### ACTIVE FACILITATORS & PRIVATE DEVELOPMENT PLATFORMS

## ADP Platform
Status: Active (High-Level Expert Facilitator & VIP Member of PPP Union)
Contact Email: adp@adpplatform.com | Official Website: www.adpplatform.com

**ADP Platform** is a high-level expert facilitator and VIP member of the **PPP Union**. It operates as an international, broad-based, private business facilitation and development ecosystem, fully aligned with global legal standards, the **Charter of the United Nations**, and the **17 Sustainable Development Goals (SDGs)**.

The Platform is structured around two core strategic pillars, each designed to support lawful, transparent, and sustainable economic growth across member companies, partner institutions, and international stakeholders. Together, these pillars strengthen **ADP Platform**’s role as a trusted international facilitator, enabling compliant project development, grants for funding for **17 SDGs**, and long-term institutional cooperation.

Contact:
- Email: **adp@adpplatform.com**
- Website: **www.adpplatform.com**

High-Performance Record:
“**ADP Platform** supports PPP and the **17 SDGs** across Afghanistan, Africa, Asia, the EU, and the Middle East, with a proven high-performance record recognized by **UNECE** and the **PPP Union**.”

---

## Azizi Group – Kabul Office (Public Listing)
Status: Active (Private Sector Concession & Sustainable Development)
Location: Shahr-e-Naw Business District, Kabul, Afghanistan
Targeted Programs: **Azizi Developments Programs** / **Azizi Development Projects**

One of the most forward-looking actors in today’s Afghanistan is **Azizi Group**, which has developed an ambitious and honorable vision for the country fully in line with the **17 UN Sustainable Development Goals**. According to reports received from its members, **Azizi Group** intends to make Afghanistan electrically self-sufficient and has already completed all administrative preparations for a major power project. It is expected that **Phase I**, with an estimated capacity of 200 – 500 MW, will begin operation around 2027.

Institutional Principle / Call by the **PPP Union**:
The **PPP Union** calls on people in every country to embrace self-reliance and initiative: true development and dignity come from local innovation and independent thinking, not from dependency on institutions that weaken creativity and keep societies mentally and economically reliant on others.

---

### MULTILATERAL INSTITUTIONS & HISTORICAL DESKS (SUSPENDED / CLOSED NOW)

## Asian Development Bank (ADB)
Status: Closed now
Official Website: www.adb.org
Registered Coordinates / Address: G5Q9+PVV, Kabul, Afghanistan
City: Kabul
Neighborhood: Qalå-ye Chaman
Administrative Region: Kabul Province
Country: Afghanistan
Google Maps Navigation: https://maps.google.com/maps?daddr=G5Q9%2BPVV%2C+Kabol%2C+Afghanistan%2C+Afghanistan

---

## World Bank
Status: Closed now
Kabul Liaison Desk & PPIAF Technical Assistance Facility (Operations currently suspended).

---

## UNOPS (United Nations Office for Project Services)
Status: Closed now
**UNOPS** has been serving people in Afghanistan since 1995 – supporting partners’ contributions to the humanitarian response and development of the country.

In response to intensifying humanitarian needs, our work is helping to further humanitarian initiatives and address the basic needs of vulnerable people. This includes managing cash-for-work projects, procuring emergency medical equipment and supplies, and administering an inter-agency communications and accountability center that connects people with humanitarian assistance information across the country. (Closed now)

---

## Islamic Development Bank (IsDB)
Status: Closed now
Regional Liaison & Infrastructure Desk (Operations currently suspended).
`;

interface CountryFacilitatorPageProps {
  country: FacilitatorCountry;
  onBack: () => void;
  onNavigateCountry: (countryId: string) => void;
  onNavigateHome: () => void;
}

export const CountryFacilitatorPage: React.FC<CountryFacilitatorPageProps> = ({
  country,
  onBack,
  onNavigateCountry,
  onNavigateHome
}) => {
  const storageKey = `ppp_country_custom_text_${country.id}`;

  const getDefaultText = (c: FacilitatorCountry) => {
    if (c.id === 'afghanistan') return AFGHANISTAN_DEFAULT_EXTRACTED_TEXT;
    if (c.id === 'india') return INDIA_DEFAULT_EXTRACTED_TEXT;
    if (c.id === 'portugal') return PORTUGAL_DEFAULT_EXTRACTED_TEXT;
    if (c.id === 'canada') return CANADA_DEFAULT_EXTRACTED_TEXT;
    if (c.id === 'european-union' || (c.isEUMember && c.id !== 'portugal')) {
      return EUROPE_VIP_FACILITATORS_RAW_TEXT;
    }
    return '';
  };
  
  // Custom pasted text state with local storage persistence
  const [customText, setCustomText] = useState<string>(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) return saved;
    return getDefaultText(country);
  });
  
  const [isEditingText, setIsEditingText] = useState<boolean>(false);
  const [editTextValue, setEditTextValue] = useState<string>(customText);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Sync state when country changes
  useEffect(() => {
    const saved = localStorage.getItem(`ppp_country_custom_text_${country.id}`);
    const initialText = saved !== null ? saved : getDefaultText(country);
    setCustomText(initialText);
    setEditTextValue(initialText);
    setIsEditingText(false);
    setSaveSuccess(false);
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      try { window.scrollTo(0, 0); } catch { /* ignore */ }
    }
  }, [country.id]);

  // Find previous and next countries in alphabetical sequence
  const { prevCountry, nextCountry } = React.useMemo(() => {
    const idx = ALL_193_COUNTRIES.findIndex(c => c.id === country.id);
    const prev = idx > 0 ? ALL_193_COUNTRIES[idx - 1] : ALL_193_COUNTRIES[ALL_193_COUNTRIES.length - 1];
    const next = idx >= 0 && idx < ALL_193_COUNTRIES.length - 1 ? ALL_193_COUNTRIES[idx + 1] : ALL_193_COUNTRIES[0];
    return { prevCountry: prev, nextCountry: next };
  }, [country.id]);

  const handleSaveText = () => {
    localStorage.setItem(storageKey, editTextValue);
    setCustomText(editTextValue);
    setIsEditingText(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetText = () => {
    if (window.confirm('Are you sure you want to reset the custom text for this country?')) {
      localStorage.removeItem(storageKey);
      const defaultText = getDefaultText(country);
      setCustomText(defaultText);
      setEditTextValue(defaultText);
      setIsEditingText(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to render bold strings inline
  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Helper to render formatted paragraphs or lists from arbitrary pasted text
  const renderFormattedText = (rawText: string) => {
    if (!rawText.trim()) return null;

    const lines = rawText.split('\n');
    return (
      <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-2" />;
          
          if (trimmed === '---' || trimmed === '***') {
            return <hr key={i} className="my-4 border-slate-200" />;
          }

          // Headings (lines starting with # or ## or all uppercase short)
          if (trimmed.startsWith('# ')) {
            return (
              <h3 key={i} className="text-xl font-bold text-slate-900 mt-4 mb-2 border-b border-slate-200 pb-1">
                {renderInlineFormatting(trimmed.replace(/^#\s+/, ''))}
              </h3>
            );
          }
          if (trimmed.startsWith('## ') || (trimmed === trimmed.toUpperCase() && trimmed.length < 50 && !trimmed.startsWith('-'))) {
            return (
              <h4 key={i} className="text-base font-bold text-[#005285] mt-3 mb-1">
                {renderInlineFormatting(trimmed.replace(/^##\s+/, ''))}
              </h4>
            );
          }
          if (trimmed.startsWith('### ')) {
            return (
              <h5 key={i} className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-3 mb-1">
                {renderInlineFormatting(trimmed.replace(/^###\s+/, ''))}
              </h5>
            );
          }
          // Bullet points
          if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
            return (
              <div key={i} className="flex items-start gap-2.5 ml-2">
                <span className="text-[#0072bc] font-bold text-base mt-0.5">•</span>
                <span className="leading-relaxed">{renderInlineFormatting(trimmed.replace(/^[-•*]\s+/, ''))}</span>
              </div>
            );
          }
          return <p key={i} className="text-justify leading-relaxed">{renderInlineFormatting(line)}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Quick Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 flex-wrap">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-[#0072bc] font-medium transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={onBack} 
              className="hover:text-[#0072bc] font-medium transition-colors cursor-pointer"
            >
              PPP Facilitators
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">{country.name}</span>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Directory</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
              title="Copy link to this country"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-xs"
              title="Print sovereign dossier"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>

        {/* Sovereign Page Hero Banner */}
        <div className="bg-gradient-to-r from-[#00395d] via-[#005285] to-[#0072bc] rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
          {/* Subtle watermark background */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <Globe className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Badges Row */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold uppercase tracking-wider text-sky-100 border border-white/20">
                <Globe className="w-3.5 h-3.5 text-sky-200" />
                <span>UN Member State Facilitation Desk</span>
              </span>

              {country.isEUMember && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-400/25 border border-blue-200/50 text-xs font-extrabold text-white tracking-wide shadow-xs">
                  <span>🇪🇺</span>
                  <span>European Union Member State</span>
                </span>
              )}

              {country.isPublished29 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/40 text-xs font-bold text-white shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Featured VIP Jurisdiction</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/25 border border-emerald-300/40 text-xs font-bold text-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>World Bank & UNECE Aligned</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
              {country.name}
            </h1>

            {/* Sub-headline summary */}
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-3xl">
              {country.summary}
            </p>

            {/* Quick stats / metadata row */}
            <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                <span className="text-sky-200 block uppercase font-bold text-[10px] tracking-wider mb-1">
                  Institutional Status
                </span>
                <span className="text-white font-semibold">
                  {country.isEUMember ? 'EU Concession Directives Transposed' : 'Sovereign PPP & Concession Framework'}
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                <span className="text-sky-200 block uppercase font-bold text-[10px] tracking-wider mb-1">
                  Humanitarian Protection
                </span>
                <span className="text-white font-semibold">
                  UN 2030 Agenda · Exempt from Sanctions
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-3 backdrop-blur-xs border border-white/10">
                <span className="text-sky-200 block uppercase font-bold text-[10px] tracking-wider mb-1">
                  Accreditation Basis
                </span>
                <span className="text-white font-semibold">
                  {country.multilateralSource || 'World Bank PPIAF & UNECE Hub'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* European Union Connected Facilitator Callout (if EU Member) */}
        {country.isEUMember && (
          <div className="bg-gradient-to-br from-[#005285] via-[#0066a4] to-[#007cb8] text-white rounded-2xl p-6 sm:p-8 shadow-lg border border-sky-400/30 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-2xl shrink-0">
                  🇪🇺
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-200 block">
                    European Union Member State · Direct Facilitation Connection
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Connected to European Union PPP Facilitators
                  </h2>
                </div>
              </div>

              <a
                href="https://pppunion.org/top-20-ppp-facilitators-in-europe-vips/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/40 text-white rounded-xl text-xs font-bold inline-flex items-center gap-2 shrink-0 transition-colors shadow-xs"
              >
                <span>Top 20 EU VIP Facilitators Directory</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mb-4 text-justify">
              As a Member of the European Union, public infrastructure, concession tenders, and SDG programs in <span className="font-bold text-white">{country.name}</span> operate within the EU Public Procurement Directives (2014/23/EU & 2014/24/EU) and are connected directly to the accredited European PPP Facilitators Network on <span className="font-semibold text-sky-200">pppunion.org</span>.
            </p>

            <div className="bg-white/10 rounded-xl p-4 border border-white/20 space-y-3 text-xs backdrop-blur-xs">
              <div className="text-white font-bold uppercase text-[11px] tracking-wider flex items-center gap-2">
                <Landmark className="w-4 h-4 text-sky-300" />
                <span>Accredited Pan-European Facilitator Institutions Available for {country.name}:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-100">
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>European Investment Bank (EIB) PPP Advisory</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>EPEC (European PPP Expertise Centre)</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>EBRD Infrastructure & PPP Directorate</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>John Laing Group & Laing O'Rourke</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Deloitte Global PPP Advisory Desk</span>
                </div>
                <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>KPMG Global Infrastructure Practice</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Grid: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left Column (8 cols): Deep Institutional Content & Text Paste Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1: Sovereign Governance & Legal Framework */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Sovereign Legal & Regulatory Framework
                  </h2>
                  <span className="text-xs text-slate-500">
                    Governing statutes, public procurement directives, and non-sanctionability
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Designated National Competence Authority / PPP Unit</span>
                  </div>
                  <p className="font-bold text-slate-900 text-base">
                    {country.governmentUnit || `National Ministry of Finance & Planning PPP Directorate of ${country.name}`}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Statutory Enactment & Concession Authority</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {country.legalFramework || `Public-Private Partnership Act and Concessions Code of ${country.name}, aligned with international transparency and Value for Money (VfM) standards.`}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>United Nations 2030 Agenda & Non-Sanctionability Status</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                    In accordance with international law and United Nations General Assembly resolutions establishing the 2030 Agenda, all 17 Sustainable Development Goals (SDGs) and their associated public-private humanitarian infrastructure projects in <span className="font-semibold text-slate-900">{country.name}</span> are legally recognized as non-political, civilian, and strictly exempt from unilateral or multilateral sanctions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Accredited Facilitator Institutions & Advisors OR Afghanistan Bespoke Dossier */}
            {country.id === 'afghanistan' ? (
              <div className="space-y-6">
                {/* Master Header Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#005285] flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            AFGHANISTAN PPP FACILITATORS
                          </h2>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-sky-100 text-[#005285] border border-sky-200">
                            Post 1231
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                          Official PPP Services Providers, Platforms, Multilateral Desks & Concession Actors
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://pppunion.org/afghanistan-ppp-services-providers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl border border-sky-200 bg-sky-50/70 hover:bg-sky-100 text-[#0072bc] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-2xs self-start sm:self-auto"
                    >
                      <span>pppunion.org/afghanistan-ppp-services-providers</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    Official registry of private business development platforms, sovereign facilitators, and international development desks operating in Afghanistan. All materials are strictly textual and verified in accordance with UN legal frameworks and the 17 Sustainable Development Goals.
                  </p>

                  {/* SUB-SECTION 1: ACTIVE PLATFORMS & FACILITATORS */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800">
                        Active Facilitators & Development Ecosystems
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {/* CARD 1: ADP PLATFORM */}
                      <div className="rounded-xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-white p-5 sm:p-6 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-emerald-100">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-base sm:text-lg font-black text-slate-900">
                              <strong className="font-bold text-slate-900">ADP Platform</strong>
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300/60">
                              Active
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 text-[#005285] text-[11px] font-bold border border-sky-200">
                              VIP Member of <strong className="font-bold text-[#005285]">PPP Union</strong>
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium">
                            International Business Facilitation Ecosystem
                          </span>
                        </div>

                        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                          <p>
                            <strong className="font-bold text-slate-900">ADP Platform</strong> is a high-level expert facilitator and VIP member of the <strong className="font-bold text-slate-900">PPP Union</strong>. It operates as an international, broad-based, private business facilitation and development ecosystem, fully aligned with global legal standards, the <strong className="font-bold text-slate-900">Charter of the United Nations</strong>, and the <strong className="font-bold text-slate-900">17 Sustainable Development Goals (SDGs)</strong>.
                          </p>
                          <p>
                            The Platform is structured around two core strategic pillars, each designed to support lawful, transparent, and sustainable economic growth across member companies, partner institutions, and international stakeholders. Together, these pillars strengthen <strong className="font-bold text-slate-900">ADP Platform</strong>’s role as a trusted international facilitator, enabling compliant project development, grants for funding for <strong className="font-bold text-slate-900">17 SDGs</strong>, and long-term institutional cooperation.
                          </p>
                        </div>

                        {/* Contacts & Performance Record */}
                        <div className="mt-4 pt-4 border-t border-emerald-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <Mail className="w-3.5 h-3.5 text-[#0072bc]" />
                              <span>Email:</span>
                              <a href="mailto:adp@adpplatform.com" className="font-bold text-[#0072bc] hover:underline">
                                adp@adpplatform.com
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <Globe className="w-3.5 h-3.5 text-[#0072bc]" />
                              <span>Website:</span>
                              <a href="https://www.adpplatform.com" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0072bc] hover:underline inline-flex items-center gap-1">
                                www.adpplatform.com
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 leading-relaxed italic">
                          “<strong className="font-bold text-emerald-950">ADP Platform</strong> supports PPP and the <strong className="font-bold text-emerald-950">17 SDGs</strong> across Afghanistan, Africa, Asia, the EU, and the Middle East, with a proven high-performance record recognized by <strong className="font-bold text-emerald-950">UNECE</strong> and the <strong className="font-bold text-emerald-950">PPP Union</strong>.”
                        </div>
                      </div>

                      {/* CARD 2: AZIZI GROUP */}
                      <div className="rounded-xl border border-sky-200/80 bg-gradient-to-br from-sky-50/30 via-white to-white p-5 sm:p-6 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-sky-100">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-base sm:text-lg font-black text-slate-900">
                              <strong className="font-bold text-slate-900">Azizi Group</strong> – Kabul Office
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-300/60">
                              Active
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                              Public Listing
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#0072bc]" />
                            <span>Shahr-e-Naw Business District, Kabul, Afghanistan</span>
                          </div>
                        </div>

                        <div className="text-xs font-bold text-slate-600 mb-2">
                          Programs: <strong className="font-bold text-slate-900">Azizi Developments Programs</strong> / <strong className="font-bold text-slate-900">Azizi Development Projects</strong>
                        </div>

                        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                          <p>
                            One of the most forward-looking actors in today’s Afghanistan is <strong className="font-bold text-slate-900">Azizi Group</strong>, which has developed an ambitious and honorable vision for the country fully in line with the <strong className="font-bold text-slate-900">17 UN Sustainable Development Goals</strong>. According to reports received from its members, <strong className="font-bold text-slate-900">Azizi Group</strong> intends to make Afghanistan electrically self-sufficient and has already completed all administrative preparations for a major power project. It is expected that <strong className="font-bold text-slate-900">Phase I</strong>, with an estimated capacity of 200 – 500 MW, will begin operation around 2027.
                          </p>
                        </div>

                        <div className="mt-4 p-3.5 rounded-lg bg-sky-50/80 border border-sky-200 text-xs text-[#004b79] leading-relaxed">
                          <span className="font-bold block mb-1">Institutional Call by the <strong className="font-bold text-[#003657]">PPP Union</strong>:</span>
                          The <strong className="font-bold text-[#003657]">PPP Union</strong> calls on people in every country to embrace self-reliance and initiative: true development and dignity come from local innovation and independent thinking, not from dependency on institutions that weaken creativity and keep societies mentally and economically reliant on others.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SUB-SECTION 2: MULTILATERAL INSTITUTIONS & HISTORICAL DESKS */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
                        Multilateral Development Institutions & Liaison Desks (Suspended / Closed)
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* ADB */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                              <strong className="font-bold text-slate-900">Asian Development Bank (ADB)</strong>
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                              Closed now
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 space-y-1 mb-3">
                            <p className="flex items-start gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                              <span>G5Q9+PVV, Kabul, Afghanistan</span>
                            </p>
                            <p className="text-[11px] text-slate-500 pl-4.5">
                              Qalå-ye Chaman, Kabul Province, Afghanistan
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs">
                          <a
                            href="https://www.adb.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0072bc] hover:underline font-semibold inline-flex items-center gap-1"
                          >
                            <span>www.adb.org</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <a
                            href="https://maps.google.com/maps?daddr=G5Q9%2BPVV%2C+Kabol%2C+Afghanistan%2C+Afghanistan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-md bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-[11px] font-bold inline-flex items-center gap-1 shadow-2xs"
                          >
                            <MapPin className="w-3 h-3 text-red-500" />
                            <span>Google Maps</span>
                          </a>
                        </div>
                      </div>

                      {/* WORLD BANK */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                              <strong className="font-bold text-slate-900">World Bank</strong>
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                              Closed now
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            Liaison desk and PPIAF infrastructure advisory facility. Physical and operational presence in Kabul currently suspended.
                          </p>
                        </div>
                        <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                          Multilateral Sovereign Advisory (Historical)
                        </div>
                      </div>

                      {/* UNOPS */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between md:col-span-2">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                              <strong className="font-bold text-slate-900">UNOPS</strong> (<strong className="font-bold text-slate-900">United Nations Office for Project Services</strong>)
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                              Closed now
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 leading-relaxed space-y-2 text-justify">
                            <p>
                              <strong className="font-bold text-slate-900">UNOPS</strong> has been serving people in Afghanistan since 1995 – supporting partners’ contributions to the humanitarian response and development of the country.
                            </p>
                            <p>
                              In response to intensifying humanitarian needs, our work is helping to further humanitarian initiatives and address the basic needs of vulnerable people. This includes managing cash-for-work projects, procuring emergency medical equipment and supplies, and administering an inter-agency communications and accountability center that connects people with humanitarian assistance information across the country. (Closed now)
                            </p>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                          UN Mandated Humanitarian Operations Desk (1995–Suspended)
                        </div>
                      </div>

                      {/* ISLAMIC DEVELOPMENT BANK */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col justify-between md:col-span-2">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold text-slate-900 text-sm">
                              <strong className="font-bold text-slate-900">Islamic Development Bank (IsDB)</strong>
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                              Closed now
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Islamic infrastructure financing and development funds desk. Direct transaction services currently suspended in Kabul.
                          </p>
                        </div>
                        <div className="pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 font-medium">
                          Regional Development Desk (Suspended)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : country.id === 'european-union' ? (
              <EuropeVipFacilitatorsSection countryName="European Union" />
            ) : (country.isEUMember && country.id !== 'portugal') ? (
              <div className="space-y-6">
                {/* Sovereign National Desks for this Member Country */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                          {country.name} National Accredited Facilitators & Advisory Bodies
                        </h2>
                        <span className="text-xs text-slate-500">
                          Sovereign transaction teams, PPP units, and institutional advisory desks in {country.name}
                        </span>
                      </div>
                    </div>

                    {country.link && (
                      <a
                        href={country.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#0072bc] hover:text-[#005285] inline-flex items-center gap-1 shrink-0"
                      >
                        <span>Official EU VIP Registry</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {country.firms.map((firm, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50/50 hover:border-sky-300 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#005285]/10 text-[#005285] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">
                          {firm}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                    <p>
                      All public-private partnership concessions in {country.name} operate in compliance with EU Directive 2014/23/EU and are backed by the accredited Top 20 PPP Facilitators network in Europe.
                    </p>
                  </div>
                </div>

                {/* European Union Top 20 Supranational Integration */}
                <EuropeVipFacilitatorsSection 
                  countryName={country.name} 
                  isSubSection={true} 
                  onNavigateToEU={() => onNavigateCountry('european-union')} 
                />
              </div>
            ) : country.id === 'iran' ? (
              <IranFacilitatorsDossier 
                onNavigateHome={onNavigateHome} 
                onNavigateBack={onBack} 
              />
            ) : country.id === 'india' ? (
              <IndiaFacilitatorsDossier 
                onNavigateHome={onNavigateHome} 
                onNavigateBack={onBack} 
              />
            ) : country.id === 'portugal' ? (
              <PortugalFacilitatorsDossier 
                onNavigateHome={onNavigateHome} 
                onNavigateBack={onBack} 
                onNavigateToEU={() => onNavigateCountry('european-union')}
              />
            ) : country.id === 'canada' ? (
              <CanadaFacilitatorsDossier 
                onNavigateHome={onNavigateHome} 
                onNavigateBack={onBack} 
              />
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#005285] flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                        Accredited Facilitators & Advisory Bodies
                      </h2>
                      <span className="text-xs text-slate-500">
                        Recognized technical advisors, sovereign transaction teams, and development desks
                      </span>
                    </div>
                  </div>

                  {country.link && (
                    <a
                      href={country.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0072bc] hover:text-[#005285] inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Official Registry</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {country.firms.map((firm, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50/50 hover:border-sky-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#005285]/10 text-[#005285] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">
                        {firm}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-slate-700 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#0072bc] shrink-0 mt-0.5" />
                  <p>
                    Facilitator institutions operating in {country.name} assist public authorities and private consortia with pre-feasibility analysis, environmental and social governance (ESG), banking compliance, and tender structuring under international procurement guidelines.
                  </p>
                </div>
              </div>
            )}

            {/* Section 3: Priority SDG Infrastructure Sectors */}
            {country.prioritySectors && country.prioritySectors.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-4">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      Priority SDG Concession & Infrastructure Sectors
                    </h2>
                    <span className="text-xs text-slate-500">
                      Targeted sectors for public-private partnerships in {country.name}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.prioritySectors.map((sector, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/40 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Dedicated "Paste Text for this Country" Area */}
            {/* The user specifically requested: "in each page we will futher past text but dont creat like mobile ap window or vizard it need for a proper page" */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      Country Documentation & Custom Pasted Text
                    </h2>
                    <span className="text-xs text-slate-500">
                      Paste and store additional dossiers, official decrees, or custom facilitator listings for {country.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!isEditingText ? (
                    <button
                      onClick={() => {
                        setEditTextValue(customText);
                        setIsEditingText(true);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#005285] hover:bg-[#00395d] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>{customText ? 'Edit Pasted Text' : 'Paste Further Text'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEditingText(false)}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}

                  {customText && !isEditingText && (
                    <button
                      onClick={handleResetText}
                      className="px-2.5 py-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer"
                      title="Clear custom text"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Save Success Alert */}
              {saveSuccess && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Custom documentation for {country.name} successfully saved to page!</span>
                </div>
              )}

              {/* Editor Mode */}
              {isEditingText ? (
                <div className="space-y-4">
                  <div className="bg-sky-50/70 rounded-xl p-3.5 border border-sky-200 text-xs text-slate-700">
                    <p className="font-semibold text-[#005285] mb-1">
                      Paste arbitrary text, ministerial announcements, decrees, or facilitator contact lists below:
                    </p>
                    <p className="text-slate-600">
                      Line breaks, bullet points (using - or •), and section titles (using # or ##) will be automatically formatted when displayed on this page.
                    </p>
                  </div>

                  <textarea
                    value={editTextValue}
                    onChange={(e) => setEditTextValue(e.target.value)}
                    placeholder={`Paste further text, legal statutes, project lists, or facilitator profiles for ${country.name} here...`}
                    rows={12}
                    className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#0072bc] focus:border-[#0072bc] text-sm text-slate-800 font-sans leading-relaxed transition-all shadow-inner"
                  />

                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-xs text-slate-400">
                      {editTextValue.length} characters · Saved to browser persistence
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsEditingText(false)}
                        className="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>

                      <button
                        onClick={handleSaveText}
                        className="px-5 py-2 rounded-xl bg-[#0072bc] hover:bg-[#005285] text-white text-xs font-bold inline-flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save to {country.name} Page</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {customText ? (
                    <div className="bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200 space-y-3">
                      {renderFormattedText(customText)}
                    </div>
                  ) : (
                    <div className="p-8 border-2 border-dashed border-slate-200 rounded-xl text-center bg-slate-50/50">
                      <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <h4 className="text-sm font-bold text-slate-700 mb-1">
                        No Custom Pasted Text Yet for {country.name}
                      </h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                        You can paste additional legal text, contact dossiers, executive summaries, or custom notes directly onto this country's page.
                      </p>
                      <button
                        onClick={() => {
                          setEditTextValue('');
                          setIsEditingText(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-[#0072bc] hover:bg-[#005285] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Paste Further Text Now</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column (4 cols): Trustable Sources, Multilateral Repositories & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Trustable Sources Box */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-[#0072bc]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Verified Trustable Sources
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Extracted and verified from multilateral development banks, international treaties, and national government gazettes:
              </p>

              <div className="space-y-2.5">
                {country.sourceUrls && country.sourceUrls.length > 0 ? (
                  country.sourceUrls.map((src, sIdx) => (
                    <a
                      key={sIdx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 transition-colors block group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0072bc] transition-colors">
                          {src.title}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-500 truncate block mt-0.5">
                        {src.url}
                      </span>
                    </a>
                  ))
                ) : (
                  <div className="space-y-2">
                    <a
                      href="https://ppp.worldbank.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 transition-colors block group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0072bc]">
                          World Bank PPP Knowledge Lab
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-500">ppp.worldbank.org</span>
                    </a>

                    <a
                      href="https://unece.org/ppp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-300 transition-colors block group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-800 group-hover:text-[#0072bc]">
                          UNECE People-First PPP Centre
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc] shrink-0" />
                      </div>
                      <span className="text-[10px] text-slate-500">unece.org/ppp</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Country Overview Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Jurisdiction Profile
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">UN Member State:</span>
                  <span className="text-slate-900 font-bold">Yes (193 Framework)</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">European Union Member:</span>
                  <span className="text-slate-900 font-bold">
                    {country.isEUMember ? '🇪🇺 Yes (27 States)' : 'No'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">PPP Union Directory:</span>
                  <span className="text-slate-900 font-bold">
                    {country.isPublished29 ? 'Published VIP Listing' : 'UN Desk Directory'}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">SDG Humanitarian Status:</span>
                  <span className="text-emerald-700 font-bold">Protected / Non-Sanctionable</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={onBack}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#005285] text-[#005285] hover:bg-[#005285] hover:text-white transition-colors text-xs font-bold text-center inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to 193 Countries Directory</span>
                </button>
              </div>
            </div>

            {/* Inquiries Callout */}
            <div className="bg-gradient-to-br from-[#005285] to-[#0072bc] text-white rounded-2xl p-6 shadow-md border border-sky-400/30">
              <h4 className="font-bold text-sm text-white mb-2">
                Need Official Facilitation in {country.name}?
              </h4>
              <p className="text-xs text-sky-100 leading-relaxed mb-4">
                The PPP Union Secretariat provides direct compliance advisory, transaction structuring assistance, and stakeholder liaison for public entities and accredited private partners.
              </p>
              <button
                onClick={() => {
                  window.location.hash = '#contact-us';
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-[#005285] font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                Contact Secretariat
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Sequence Navigation Bar: Previous / Next Country */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigateCountry(prevCountry.id)}
            className="flex items-center gap-2 text-left hover:text-[#0072bc] group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-sky-100 flex items-center justify-center text-slate-600 group-hover:text-[#0072bc] transition-colors shrink-0">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Previous Country
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0072bc] transition-colors line-clamp-1">
                {prevCountry.name}
              </span>
            </div>
          </button>

          <button
            onClick={onBack}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#005285] transition-colors px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#0072bc]" />
            <span>All 193 UN Member States</span>
          </button>

          <button
            onClick={() => onNavigateCountry(nextCountry.id)}
            className="flex items-center gap-2 text-right hover:text-[#0072bc] group cursor-pointer"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Next Country
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0072bc] transition-colors line-clamp-1">
                {nextCountry.name}
              </span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-sky-100 flex items-center justify-center text-slate-600 group-hover:text-[#0072bc] transition-colors shrink-0">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

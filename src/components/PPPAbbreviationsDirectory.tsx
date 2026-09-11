import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Filter, MessageSquare, Check, Copy, ExternalLink, HelpCircle, ArrowUpDown } from 'lucide-react';

export interface PPPAbbreviationItem {
  acronym: string;
  fullName: string;
  category: 'Core Modalities' | 'Finance & Banking' | 'Multilateral & Institutions' | 'Legal & Procurement' | 'Technical & Management';
  definition: string;
}

export const PPP_ABBREVIATIONS_DATA: PPPAbbreviationItem[] = [
  {
    acronym: 'ADP Platform',
    fullName: 'Asia Development Partners / Asian Development Professionals / ADP Capital UK',
    category: 'Multilateral & Institutions',
    definition: 'International development consortium platform comprising Asian Development Professionals, ADP Capital UK, Aandyal Developments Partners Group, and Alnahda Development Projects fostering humanitarian and civil infrastructure under UN SDG 17.',
  },
  {
    acronym: 'ADP Group',
    fullName: 'Al-Nahda Development Partners Group / Asia Development Partners Group',
    category: 'Multilateral & Institutions',
    definition: 'Cooperative development group uniting regional technical and financial partners across Asia and Africa for sovereign-aligned civic projects.',
  },
  {
    acronym: 'ADP-AF',
    fullName: 'Afghanistan Development Partners / Alternative Development Program',
    category: 'Legal & Procurement',
    definition: 'Sovereign-regulated partnership initiative established under Afghan Public-Private Partnership Law No. 1228, officially enacted on October 5, 2016.',
  },
  {
    acronym: 'ADSCR',
    fullName: 'Annual Debt Service Cover Ratio',
    category: 'Finance & Banking',
    definition: 'Key project finance metric measuring the cash flow available in a specific operating year to service that year’s debt obligations (principal and interest).',
  },
  {
    acronym: 'ALOP',
    fullName: 'Advance Loss of Profit Insurance',
    category: 'Finance & Banking',
    definition: 'Specialized insurance protecting project sponsors and lenders against commercial revenue losses caused by construction schedule delays resulting from insured physical damage.',
  },
  {
    acronym: 'APP',
    fullName: 'Alianza Público-Privada',
    category: 'Legal & Procurement',
    definition: 'Official Spanish and Latin American legal term for Public-Private Partnerships, codified under national statutory framework laws across South and Central America.',
  },
  {
    acronym: 'BAFO',
    fullName: 'Best And Final Offer',
    category: 'Legal & Procurement',
    definition: 'Final commercial and technical submission requested from short-listed consortium bidders before the sovereign procuring authority makes a binding contract award.',
  },
  {
    acronym: 'BBO',
    fullName: 'Buy-Build-Operate',
    category: 'Core Modalities',
    definition: 'Contractual modality where a private entity purchases an existing public facility, modernizes or expands it with private capital, and operates it under regulated commercial tariffs.',
  },
  {
    acronym: 'BG',
    fullName: 'Bank Guarantee',
    category: 'Finance & Banking',
    definition: 'Irrevocable, autonomous financial commitment issued by an investment-grade bank guaranteeing payment to the beneficiary if the applicant defaults on contractual obligations.',
  },
  {
    acronym: 'BISA',
    fullName: 'Bank Instruments Service Agreement',
    category: 'Finance & Banking',
    definition: 'Legal agreement governing the procedural issuance, custody, monetization protocols, and deployment of institutional bank instruments for approved infrastructure projects.',
  },
  {
    acronym: 'BLT / BTO',
    fullName: 'Build-Lease-Transfer / Build-Transfer-Operate',
    category: 'Core Modalities',
    definition: 'Concession structures where the private partner constructs an asset and either leases it to the state (BLT) or transfers legal ownership immediately upon completion before operating it (BTO).',
  },
  {
    acronym: 'BoK',
    fullName: 'Body of Knowledge',
    category: 'Legal & Procurement',
    definition: 'Standardized compilation of core concepts, professional methodologies, and best practices governing international PPP certification and project execution.',
  },
  {
    acronym: 'BOO',
    fullName: 'Build-Own-Operate',
    category: 'Core Modalities',
    definition: 'Modality where the private sponsor finances, constructs, owns, and permanently operates the public facility without transferring title to the host government.',
  },
  {
    acronym: 'BOOT',
    fullName: 'Build-Own-Operate-Transfer',
    category: 'Core Modalities',
    definition: 'Concession model where the private partner owns and operates the infrastructure during the concession term (25–35 years) before transferring full ownership to the sovereign host debt-free.',
  },
  {
    acronym: 'BOT',
    fullName: 'Build-Operate-Transfer',
    category: 'Core Modalities',
    definition: 'Classic concession model where private SPV finances and builds the facility, operates it for a designated period collecting user tariffs, and transfers it to the government in pristine operating condition.',
  },
  {
    acronym: 'BRICS Group',
    fullName: 'Brazil, Russia, India, China, South Africa & Partner States',
    category: 'Multilateral & Institutions',
    definition: 'Intergovernmental multilateral coalition and development platform financing major cross-border infrastructure initiatives via the New Development Bank (NDB).',
  },
  {
    acronym: 'BRT',
    fullName: 'Bus Rapid Transit',
    category: 'Technical & Management',
    definition: 'High-capacity municipal public bus transit network frequently delivered through PPP availability payment concessions and fare-box revenue models.',
  },
  {
    acronym: 'CA',
    fullName: 'Consortium Agreement',
    category: 'Legal & Procurement',
    definition: 'Formal legal agreement between members of a bidding group detailing equity shares, joint liabilities, management control, and SPV representation.',
  },
  {
    acronym: 'CAF',
    fullName: 'Corporación Andina de Fomento',
    category: 'Multilateral & Institutions',
    definition: 'Development Bank of Latin America providing non-recourse senior loans, sovereign guarantees, and project preparation technical assistance for regional PPPs.',
  },
  {
    acronym: 'Capex / Opex',
    fullName: 'Capital Expenditure / Operational Expenditure',
    category: 'Finance & Banking',
    definition: 'Capex denotes initial construction, procurement, and asset development costs; Opex represents ongoing operations, labor, routine maintenance, and lifecycle asset renewal.',
  },
  {
    acronym: 'CFADS',
    fullName: 'Cash Flows Available for Debt Service',
    category: 'Finance & Banking',
    definition: 'Total operating cash balance generated by the project vehicle available to service commercial debt after payment of operating costs and required tax provisions.',
  },
  {
    acronym: 'CPP',
    fullName: 'Companhia Paulista de Parcerias',
    category: 'Multilateral & Institutions',
    definition: 'State-owned asset and partnership corporation in São Paulo, Brazil, renowned internationally as a pioneering public entity for regional infrastructure concessions.',
  },
  {
    acronym: 'DB / DBF',
    fullName: 'Design-Build / Design-Build-Finance',
    category: 'Core Modalities',
    definition: 'Integrated procurement where a single contractor is responsible for architectural design, physical construction, and optional private project financing.',
  },
  {
    acronym: 'DBFM / DBFOM',
    fullName: 'Design-Build-Finance-Operate-Maintain',
    category: 'Core Modalities',
    definition: 'Comprehensive lifecycle concession model combining architectural design, private construction, commercial debt syndication, multi-decade facility operations, and lifecycle maintenance.',
  },
  {
    acronym: 'DRB / DRP',
    fullName: 'Dispute Resolution Board / Dispute Resolution Process',
    category: 'Legal & Procurement',
    definition: 'Independent panel of legal and technical experts appointed at project inception to impartially resolve disputes swiftly before formal arbitration or court litigation.',
  },
  {
    acronym: 'DSCR',
    fullName: 'Debt Service Coverage Ratio',
    category: 'Finance & Banking',
    definition: 'Crucial banking ratio comparing net operating income against annual debt service obligations, typically requiring a minimum of 1.20x to 1.40x for bankability.',
  },
  {
    acronym: 'EBITDA',
    fullName: 'Earnings Before Interest, Taxes, Depreciation, and Amortization',
    category: 'Finance & Banking',
    definition: 'Fundamental accounting measure of pure operational profitability evaluated by project lenders and credit rating agencies.',
  },
  {
    acronym: 'EBRD',
    fullName: 'European Bank for Reconstruction and Development',
    category: 'Multilateral & Institutions',
    definition: 'International financial institution promoting sustainable market-oriented infrastructure transitions across Central Europe, Eastern Europe, and the Mediterranean.',
  },
  {
    acronym: 'ECA',
    fullName: 'Export Credit Agency',
    category: 'Finance & Banking',
    definition: 'Government-backed financial institution offering loan guarantees, direct credits, and political risk insurance to support domestic capital equipment exporters.',
  },
  {
    acronym: 'EIB',
    fullName: 'European Investment Bank',
    category: 'Multilateral & Institutions',
    definition: 'Lending arm of the European Union and one of the largest multilateral financiers of public-private partnerships, green energy grids, and digital infrastructure globally.',
  },
  {
    acronym: 'EOI',
    fullName: 'Expression of Interest',
    category: 'Legal & Procurement',
    definition: 'Preliminary public procurement stage where prospective consortia submit qualifications and background capabilities to pre-qualify for formal RFP bidding.',
  },
  {
    acronym: 'EPC / EPC+F',
    fullName: 'Engineering, Procurement, Construction (& Finance)',
    category: 'Core Modalities',
    definition: 'Turnkey contract where the general contractor is fully responsible for detailed engineering, supply procurement, physical construction, and structured financing arrangements.',
  },
  {
    acronym: 'EPEC',
    fullName: 'European PPP Expertise Centre',
    category: 'Multilateral & Institutions',
    definition: 'Collaborative initiative between the European Investment Bank, the European Commission, and EU member states supporting public authorities in PPP capacity building.',
  },
  {
    acronym: 'ESIA',
    fullName: 'Environmental and Social Impact Assessment',
    category: 'Technical & Management',
    definition: 'Comprehensive scientific and community assessment evaluating ecological consequences, carbon footprint, biodiversity preservation, and local social impacts.',
  },
  {
    acronym: 'FDI',
    fullName: 'Foreign Direct Investment',
    category: 'Finance & Banking',
    definition: 'Cross-border capital investment by an international consortium or corporate entity into physical infrastructure assets within a host country.',
  },
  {
    acronym: 'FIDIC',
    fullName: 'International Federation of Consulting Engineers',
    category: 'Legal & Procurement',
    definition: 'Global body publishing standard international contract suites (Red, Yellow, Silver Books) universally utilized in major civil engineering and PPP construction.',
  },
  {
    acronym: 'FC',
    fullName: 'Financial Close / Financial Closure',
    category: 'Finance & Banking',
    definition: 'Milestone where all financing agreements, equity commitments, and banking covenants are legally signed and all precedent conditions satisfied, unlocking fund drawdowns.',
  },
  {
    acronym: 'HM Treasury',
    fullName: 'His Majesty’s Treasury (United Kingdom)',
    category: 'Multilateral & Institutions',
    definition: 'Government ministry responsible for public finance in the UK, historically recognized for authoring the Green Book and standardizing PFI/PF2 value-for-money frameworks.',
  },
  {
    acronym: 'ICC',
    fullName: 'International Chamber of Commerce',
    category: 'Legal & Procurement',
    definition: 'World business organization establishing uniform international trade definitions (Incoterms) and leading institutional arbitration rules for resolving cross-border PPP disputes.',
  },
  {
    acronym: 'ICSID',
    fullName: 'International Centre for Settlement of Investment Disputes',
    category: 'Legal & Procurement',
    definition: 'Autonomous international arbitration facility within the World Bank Group established by the 1965 Washington Convention to resolve sovereign investor disputes.',
  },
  {
    acronym: 'IFC',
    fullName: 'International Finance Corporation',
    category: 'Multilateral & Institutions',
    definition: 'Private-sector arm of the World Bank Group providing senior debt, equity co-investments, and transaction advisory services for emerging market PPPs.',
  },
  {
    acronym: 'IFI / MDB',
    fullName: 'International Financial Institutions / Multilateral Development Banks',
    category: 'Multilateral & Institutions',
    definition: 'Global and regional public development lending organizations (such as WBG, ADB, AfDB, IDB, EBRD, AIIB) providing blended finance and technical expertise.',
  },
  {
    acronym: 'IPSAS 32',
    fullName: 'International Public Sector Accounting Standard 32',
    category: 'Finance & Banking',
    definition: 'Authoritative accounting standard regulating how government contracting authorities must account for, value, and report service concession assets and liabilities on sovereign balance sheets.',
  },
  {
    acronym: 'IRR / NPV',
    fullName: 'Internal Rate of Return / Net Present Value',
    category: 'Finance & Banking',
    definition: 'Core financial appraisal metrics: IRR represents the annualized compound rate of return on invested capital; NPV measures current value of future project cash inflows minus initial outlay.',
  },
  {
    acronym: 'KPI',
    fullName: 'Key Performance Indicator',
    category: 'Technical & Management',
    definition: 'Quantifiable operational benchmarks embedded in concession agreements (e.g., lane availability, water purity, hospital bed readiness) determining payment deductions or bonuses.',
  },
  {
    acronym: 'LLCR',
    fullName: 'Loan Life Coverage Ratio',
    category: 'Finance & Banking',
    definition: 'Credit metric evaluating the present value of all prospective cash flows generated over the remaining tenor of the loan against the outstanding principal debt balance.',
  },
  {
    acronym: 'MEAT',
    fullName: 'Most Economically Advantageous Tender',
    category: 'Legal & Procurement',
    definition: 'European Union and international procurement evaluation criterion assessing tenders based on lifecycle quality, environmental sustainability, and total cost rather than simply lowest initial price.',
  },
  {
    acronym: 'MIGA',
    fullName: 'Multilateral Investment Guarantee Agency',
    category: 'Multilateral & Institutions',
    definition: 'Member of the World Bank Group providing political risk insurance and credit enhancement guarantees against expropriation, war, civil disturbance, and breach of sovereign contract.',
  },
  {
    acronym: 'MOU / LOI / NDA',
    fullName: 'Memorandum of Understanding / Letter of Intent / Non-Disclosure Agreement',
    category: 'Legal & Procurement',
    definition: 'Preliminary legal documents formalizing project dialogue, non-binding mutual intent, and confidential commercial data protection between public and private counterparts.',
  },
  {
    acronym: 'NDB',
    fullName: 'New Development Bank (BRICS Bank)',
    category: 'Multilateral & Institutions',
    definition: 'Multilateral development bank founded by BRICS nations to mobilize financing for infrastructure and sustainable development projects in emerging markets.',
  },
  {
    acronym: 'O&M',
    fullName: 'Operations and Maintenance',
    category: 'Core Modalities',
    definition: 'Performance-based service contract where an experienced private operator assumes full responsibility for daily operations, routine servicing, and preventive maintenance of an existing public facility.',
  },
  {
    acronym: 'OECD',
    fullName: 'Organization for Economic Co-operation and Development',
    category: 'Multilateral & Institutions',
    definition: 'Intergovernmental economic forum establishing global guidelines for corporate governance, public procurement transparency, and PPP institutional frameworks.',
  },
  {
    acronym: 'OpCo / SPV',
    fullName: 'Operating Company / Special Purpose Vehicle',
    category: 'Legal & Procurement',
    definition: 'Bankruptcy-remote legal corporate entity established solely to finance, build, and operate a specific infrastructure project, insulating sponsors from direct parent balance-sheet liability.',
  },
  {
    acronym: 'PF2 / PFI',
    fullName: 'Private Finance Initiative',
    category: 'Core Modalities',
    definition: 'Pioneering UK procurement model launched in the 1990s and later reformed into PF2, mobilizing private capital to design, finance, construct, and manage social infrastructure.',
  },
  {
    acronym: 'PPA / WPA',
    fullName: 'Power Purchase Agreement / Water Purchase Agreement',
    category: 'Finance & Banking',
    definition: 'Long-term statutory off-take contract between an independent infrastructure operator and a state utility establishing guaranteed purchase tariffs and volume delivery schedules.',
  },
  {
    acronym: 'PPIAF',
    fullName: 'Public-Private Infrastructure Advisory Facility',
    category: 'Multilateral & Institutions',
    definition: 'Multi-donor technical assistance facility managed by the World Bank Group that helps developing governments build regulatory institutions and project pipelines.',
  },
  {
    acronym: 'PROINVERSION',
    fullName: 'Private Investment Promotion Agency of Peru',
    category: 'Multilateral & Institutions',
    definition: 'Specialized sovereign entity in Peru widely cited across the Americas for structured concession tenders, unsolicited proposal appraisal, and Works for Taxes mechanisms.',
  },
  {
    acronym: 'PSC',
    fullName: 'Public Sector Comparator',
    category: 'Finance & Banking',
    definition: 'Hypothetical risk-adjusted whole-life financial model estimating what it would cost the government to deliver an infrastructure project through traditional direct public procurement.',
  },
  {
    acronym: 'RFP / RFQ',
    fullName: 'Request For Proposals / Request For Qualifications',
    category: 'Legal & Procurement',
    definition: 'Formal competitive procurement phases: RFQ verifies financial and technical eligibility; RFP solicits fully detailed design, commercial pricing, and contractual bids.',
  },
  {
    acronym: 'ROT',
    fullName: 'Rehabilitate-Operate-Transfer',
    category: 'Core Modalities',
    definition: 'Contractual modality where an aging or deteriorated state-owned facility is leased to a private consortium to refurbish, upgrade, modernly operate, and later return to public administration.',
  },
  {
    acronym: 'SBLC',
    fullName: 'Standby Letter of Credit',
    category: 'Finance & Banking',
    definition: 'Institutional banking instrument serving as secondary collateral, guaranteeing payment if the principal party fails to perform required contractual or milestone obligations.',
  },
  {
    acronym: 'SDG',
    fullName: 'Sustainable Development Goals (UN 2030 Agenda)',
    category: 'Multilateral & Institutions',
    definition: 'The 17 global goals adopted by all UN Member States in 2015, specifically Target 17.17 mandating effective public, public-private, and civil society partnerships.',
  },
  {
    acronym: 'SOE',
    fullName: 'State-Owned Enterprise',
    category: 'Legal & Procurement',
    definition: 'Government-owned legal corporate entity frequently participating in public-private partnerships as off-taker, equity partner, or statutory contracting authority.',
  },
  {
    acronym: 'SoPC',
    fullName: 'Standardization of PFI Contracts',
    category: 'Legal & Procurement',
    definition: 'Standardized contractual guidance developed in the United Kingdom establishing harmonized risk allocation clauses for public-private contracts.',
  },
  {
    acronym: 'TIFIA',
    fullName: 'Transportation Infrastructure Finance and Innovation Act',
    category: 'Finance & Banking',
    definition: 'United States federal credit assistance program providing low-cost, flexible subordinated loans to surface transportation PPP projects.',
  },
  {
    acronym: 'UNCITRAL',
    fullName: 'United Nations Commission on International Trade Law',
    category: 'Legal & Procurement',
    definition: 'Core legal body of the UN system in international trade law, author of the Model Legislative Provisions on Privately Financed Infrastructure Projects.',
  },
  {
    acronym: 'UNECE',
    fullName: 'United Nations Economic Commission for Europe',
    category: 'Multilateral & Institutions',
    definition: 'Regional UN body leading the global People-First PPP standards initiative, standardizing infrastructure models that advance human well-being and climate resilience.',
  },
  {
    acronym: 'USP',
    fullName: 'Unsolicited Proposal',
    category: 'Legal & Procurement',
    definition: 'Infrastructure project proposal initiated and submitted by a private sponsor without prior formal government tender, subjected to statutory Swiss Challenge competitive counter-bidding.',
  },
  {
    acronym: 'VfM',
    fullName: 'Value for Money',
    category: 'Finance & Banking',
    definition: 'Paramount economic evaluation determining whether delivering a project via PPP generates greater net societal, economic, and lifecycle benefit than direct public procurement.',
  },
  {
    acronym: 'VGF',
    fullName: 'Viability Gap Funding',
    category: 'Finance & Banking',
    definition: 'Capital grant provided by the sovereign government to an economically vital but financially marginal infrastructure project to render it bankable and commercially viable for private investment.',
  },
  {
    acronym: 'WACC',
    fullName: 'Weighted Average Cost of Capital',
    category: 'Finance & Banking',
    definition: 'Calculation of an SPV’s total cost of capital where each category of capital (senior debt, subordinated debt, equity) is proportionately weighted.',
  },
  {
    acronym: 'WBG',
    fullName: 'World Bank Group',
    category: 'Multilateral & Institutions',
    definition: 'International partnership of five institutions (IBRD, IDA, IFC, MIGA, ICSID) providing financing, policy advice, and standard contract resources for infrastructure across 189 member countries.',
  },
  {
    acronym: 'WWTP',
    fullName: 'Wastewater Treatment Plant',
    category: 'Technical & Management',
    definition: 'Crucial municipal utility infrastructure asset delivered through long-term DBFO availability concessions to sanitize municipal effluent and recycle clean water.',
  },
];

interface Props {
  onOpenMessengerQuery?: (acronym: string, fullName: string) => void;
}

export const PPPAbbreviationsDirectory: React.FC<Props> = ({ onOpenMessengerQuery }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [copiedAcronym, setCopiedAcronym] = useState<string | null>(null);

  const categories = [
    'All',
    'Core Modalities',
    'Finance & Banking',
    'Legal & Procurement',
    'Multilateral & Institutions',
    'Technical & Management',
  ];

  const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredItems = useMemo(() => {
    return PPP_ABBREVIATIONS_DATA.filter((item) => {
      // Search term
      const matchesSearch =
        searchTerm === '' ||
        item.acronym.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      // Letter filter
      const matchesLetter =
        selectedLetter === 'All' ||
        item.acronym.toUpperCase().startsWith(selectedLetter.toUpperCase());

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter]);

  const handleCopy = (acronym: string, text: string) => {
    navigator.clipboard.writeText(`${acronym}: ${text}`);
    setCopiedAcronym(acronym);
    setTimeout(() => setCopiedAcronym(null), 2000);
  };

  return (
    <div id="ppp-abbreviations-directory" className="my-8 bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0072bc]/10 text-[#0072bc] text-xs font-bold uppercase tracking-wider">
              Section 6 Reference Directory
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
              {PPP_ABBREVIATIONS_DATA.length} Verified Entries
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            International Directory of PPP Abbreviations & Acronyms
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            The definitive international reference directory of Public-Private Partnership terminology, concession contract models, project finance formulas, and multilateral institution acronyms.
          </p>
        </div>

        {/* Quick Smart Messenger Shortcut */}
        <div className="shrink-0 flex items-center gap-2">
          {onOpenMessengerQuery && (
            <button
              type="button"
              onClick={() => onOpenMessengerQuery('All Abbreviations', 'International Directory of PPP Abbreviations & Acronyms')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#005a96] hover:from-[#005a96] hover:to-[#004270] text-white font-bold text-xs shadow-xs flex items-center gap-2 transition-all cursor-pointer"
              title="Open full Abbreviations FAQ in Smart Messenger"
            >
              <MessageSquare className="w-4 h-4 text-sky-200" />
              <span>Abbreviations FAQ (Messenger)</span>
            </button>
          )}
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="mt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search acronym (e.g., BOT, VGF, SPV, ADSCR, EPEC, SBLC)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0072bc] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet Quick Jump Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs border-y border-slate-100 py-2 scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase">Index:</span>
          {alphabet.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`w-6 h-6 rounded flex items-center justify-center font-bold text-[11px] transition-all cursor-pointer ${
                selectedLetter === letter
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 my-4">
        <span>Showing <strong>{filteredItems.length}</strong> of {PPP_ABBREVIATIONS_DATA.length} acronyms</span>
        {(searchTerm || selectedCategory !== 'All' || selectedLetter !== 'All') && (
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
              setSelectedLetter('All');
            }}
            className="text-[#0072bc] hover:underline font-semibold cursor-pointer"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Directory Grid / List */}
      {filteredItems.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-700">No matching acronyms found</p>
          <p className="text-xs text-slate-500 mt-1">Try searching another term or resetting filters.</p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
          {filteredItems.map((item) => (
            <div
              key={item.acronym}
              className="p-4 sm:p-5 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-3 group"
            >
              <div className="space-y-1.5 max-w-4xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-[#0072bc] tracking-wide">
                    {item.acronym}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.fullName}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed text-justify hyphens-auto font-normal">
                  {item.definition}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1.5 shrink-0 self-start md:self-center opacity-80 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => handleCopy(item.acronym, `${item.fullName} - ${item.definition}`)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                  title={`Copy ${item.acronym} definition`}
                >
                  {copiedAcronym === item.acronym ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>

                {onOpenMessengerQuery && (
                  <button
                    type="button"
                    onClick={() => onOpenMessengerQuery(item.acronym, item.fullName)}
                    className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0072bc] border border-sky-200 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title={`Ask about ${item.acronym} in Smart Messenger`}
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Ask AI</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

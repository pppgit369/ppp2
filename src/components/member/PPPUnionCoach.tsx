import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  Search,
  BookOpen,
  HelpCircle,
  ExternalLink,
  Copy,
  Check,
  Bot,
  User,
  ShieldCheck,
  Scale,
  RefreshCw,
  Globe
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
  sources?: string[];
  sdgs?: number[];
}

const KNOWLEDGE_RESPONSES: Record<string, { answer: string; sources: string[]; sdgs: number[] }> = {
  'people-first': {
    answer: `The **UNECE People-First Public-Private Partnerships (PfPPP)** framework establishes five core statutory benchmarks designed to ensure concessions prioritize public value over purely commercial profitability:

1. **Access and Equity:** Expanding access to essential public services (water, health, power, transport) for all, particularly vulnerable, low-income, and marginalized communities, eliminating geographical disparities.
2. **Economic Effectiveness:** Generating long-term fiscal efficiency, avoiding sovereign debt trap obligations, ensuring value-for-money, and transferring genuine operational and lifecycle risk to private operators.
3. **Environmental Sustainability:** Driving decarbonization, climate resilience, net-zero greenhouse emissions, circular economy materials, and adherence to SDG 13 (Climate Action).
4. **Replicability & Scalability:** Standardizing contract clauses so identical infrastructure projects can be replicated nationwide or regionally, lowering procurement advisory costs.
5. **Stakeholder Engagement & Transparency:** Mandatory public consultations, open competitive dialogue, disclosure of beneficial ownership, and zero tolerance for corrupt intermediaries.`,
    sources: ['UNECE Standard ECE/CECI/WP/PPP/2022/5', 'UN Guiding Principles on People-First PPPs (ECE/CECI/2019/5)'],
    sdgs: [9, 11, 13, 17]
  },
  'bank-guarantee': {
    answer: `In accordance with **PPP Union Membership Policy & Global Project Finance Standards**, financial and legal security guarantees must adhere to strict parameters:

- **Strict No Cash / No Deposit Rule:** Under no circumstances are cash transfers or client cash deposits accepted. All commitments must be backed by institutional bank guarantees.
- **Credit Rating Requirement:** The guarantee must be an irrevocable, autonomous Demand Guarantee or Standby Letter of Credit issued by a bank holding an **investment-grade rating (minimum BBB- / BBB ranked)** from recognized international agencies (S&P, Fitch, Moody's, or equivalent central bank accredited scale).
- **Non-Sanctioned Jurisdiction:** The issuing bank must be headquartered and operating in a sovereign jurisdiction completely free from United Nations Security Council sanctions.
- **Tenor:** For VIP applicants (€12,000,000 guarantee) and Golden applicants (€2,000,000 guarantee), the instrument must maintain a minimum validity of **2 continuous years** with automatic rollover options.`,
    sources: ['PPP Union Financial Compliance Directive Art. 9', 'ICC Uniform Rules for Demand Guarantees (URDG 758)'],
    sdgs: [8, 16, 17]
  },
  'non-sanctionable': {
    answer: `Under international public law, civilian infrastructure and sustainable development initiatives are legally protected under:

- **UN General Assembly Resolution A/RES/70/1 (Paragraph 30):** States are strongly urged to refrain from promulgating and applying any unilateral economic, financial, or trade measures not in accordance with international law and the Charter of the United Nations that impede the full achievement of economic and social development.
- **Universal Non-Discrimination:** Clean water, maternal healthcare, food security logistics, and civilian zero-emission transit enjoy humanitarian neutrality.
- **Exclusion of Military & Political Links:** PPP Union strictly enforces that no project with connections to political campaigns, military or defense procurement, armed forces, or blacklisted entities may receive PPP Union endorsement. Any member attempting to register such projects faces immediate blacklisting without prior notification.`,
    sources: ['UN General Assembly Res. A/RES/70/1 (Declaration Para 30)', 'Geneva Convention Additional Protocols on Civilian Objects'],
    sdgs: [3, 6, 16, 17]
  },
  'concession-models': {
    answer: `Key Public-Private Partnership concession structures analyzed by the PPP Union:

- **BOT (Build-Operate-Transfer):** The private concessionaire finances and constructs the infrastructure, operates it for a specified concession period (e.g., 20–30 years) collecting commercial user fees, and transfers the asset back to the sovereign authority in good operating condition.
- **BOOT (Build-Own-Operate-Transfer):** Similar to BOT, but the private partner retains legal ownership of the asset during the concession term until the scheduled transfer date.
- **DBFOM (Design-Build-Finance-Operate-Maintain):** The modern standard for complex social infrastructure (e.g., hospitals, high-speed rail). Combines design innovation with private financing and lifecycle maintenance, typically paid through government availability payments rather than fluctuating consumer tolls.
- **Concession vs. Privatization:** A concession is *never* privatization. The sovereign state retains permanent sovereignty over the public asset; the concessionaire only receives a temporary statutory license to construct and operate.`,
    sources: ['World Bank PPP Legal Resource Center (PPPLRC)', 'UNECE Concession Guidelines'],
    sdgs: [9, 17]
  },
  'sdg17-private-sector': {
    answer: `**Goal 17 (Partnerships for the Goals) Target 17.17** explicitly mandates:
*"Encourage and promote effective public, public-private, and civil society partnerships, building on the experience and resourcing strategies of partnerships."*

Key pillars include:
1. **Mobilizing Private Capital:** Leveraging institutional private capital (pension funds, sovereign wealth, green bond markets) to bridge the global \$3.9 trillion annual SDG infrastructure financing gap.
2. **Technology Transfer:** Bringing advanced private engineering (desalination membranes, smart grids, AI digital twins) into sovereign public services.
3. **Capacity Building:** Elevating civil servants' financial modeling and legal procurement capabilities through accredited executive education.`,
    sources: ['UN 2030 Agenda for Sustainable Development (Target 17.17)', 'Addis Ababa Action Agenda on Financing for Development'],
    sdgs: [17]
  }
};

export const PPPUnionCoach: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'coach',
      text: `Welcome to **PPP Union Coach** — your official AI and global research advisory engine.

You can query me on anything related to **Business Strategy**, the **17 Sustainable Development Goals**, **PPP Laws & Concession Models**, **UNECE Standards**, **Bank Guarantees**, or **Non-Sanctionable Compliance Guidelines**.

Select a research topic below or enter any inquiry to start your legal and business analysis.`,
      timestamp: 'Just now',
      sources: ['UNECE Standards', 'UN GA A/RES/70/1', 'PPP Union Official Knowledge Base'],
      sdgs: [9, 16, 17]
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryText) setInputQuery('');
    setIsTyping(true);

    // Simulate AI thinking and knowledge retrieval
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let matchedData = KNOWLEDGE_RESPONSES['people-first'];

      if (lower.includes('guarantee') || lower.includes('bbb') || lower.includes('deposit') || lower.includes('cash') || lower.includes('bank')) {
        matchedData = KNOWLEDGE_RESPONSES['bank-guarantee'];
      } else if (lower.includes('sanction') || lower.includes('military') || lower.includes('political') || lower.includes('blacklist') || lower.includes('neutral')) {
        matchedData = KNOWLEDGE_RESPONSES['non-sanctionable'];
      } else if (lower.includes('bot') || lower.includes('boot') || lower.includes('dbf') || lower.includes('model') || lower.includes('concession')) {
        matchedData = KNOWLEDGE_RESPONSES['concession-models'];
      } else if (lower.includes('sdg') || lower.includes('17') || lower.includes('private sector') || lower.includes('partner')) {
        matchedData = KNOWLEDGE_RESPONSES['sdg17-private-sector'];
      } else {
        matchedData = {
          answer: `**Analysis on: "${textToSend}"**

Based on consolidated legal frameworks of the **PPP Union**, **UNECE Standard (ECE/CECI/WP/PPP/2022/5)**, and **UN General Assembly Resolution A/RES/70/1**:

1. **Strategic Relevance:** This query touches upon public-private cooperation and sustainable infrastructure governance. All operations must maintain strict compliance with civilian non-sanctionability, anti-corruption transparency, and equitable risk-sharing.
2. **Guarantor & Financial Discipline:** If executing cross-border tenders, ensure all financing commitments are backed by BBB-rated bank guarantees from non-sanctioned financial institutions without cash deposits.
3. **17-SDGs Integration:** Every project component must map to specific SDG indicators (e.g., Goal 6 for clean water, Goal 7 for clean energy, Goal 9 for resilient industry, and Goal 17 for multi-stakeholder partnerships).
4. **Member Assistance:** For custom concession contract drafting or sovereign facilitator assignment, contact the Secretariat directly at \`members@pppunion.org\`.`,
          sources: ['UN Sustainable Development Knowledge Platform', 'UNECE Working Party on PPPs', 'PPP Union Secretariat'],
          sdgs: [9, 17]
        };
      }

      const coachMsg: ChatMessage = {
        id: `coach-${Date.now()}`,
        sender: 'coach',
        text: matchedData.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: matchedData.sources,
        sdgs: matchedData.sdgs
      };

      setMessages(prev => [...prev, coachMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-[650px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1b365d] via-[#004f80] to-[#0072bc] text-white p-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-sky-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base text-white">PPP Union Coach</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                AI Knowledge Engine Active
              </span>
            </div>
            <p className="text-xs text-sky-100">
              Interactive Research in Business, 17-SDGs, PPP Concessions & UNECE Standards
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-sky-200 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
          <Globe className="w-3.5 h-3.5" />
          <span>Global UN / UNECE Grounded</span>
        </div>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="bg-slate-100/80 p-2.5 px-4 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="font-bold text-slate-500 shrink-0 text-[11px] uppercase tracking-wider flex items-center gap-1">
          <BookOpen className="w-3.5 h-3.5" />
          Topics:
        </span>
        <button
          onClick={() => handleSend('Explain the 5 People-First PPP criteria under UNECE')}
          className="px-3 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0072bc] rounded-full border border-slate-200 shrink-0 transition-colors cursor-pointer text-xs font-medium"
        >
          People-First Criteria
        </button>
        <button
          onClick={() => handleSend('What are the bank guarantee requirements for BBB rated banks?')}
          className="px-3 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0072bc] rounded-full border border-slate-200 shrink-0 transition-colors cursor-pointer text-xs font-medium"
        >
          BBB Bank Guarantees
        </button>
        <button
          onClick={() => handleSend('What makes a PPP project non-sanctionable under UN A/RES/70/1?')}
          className="px-3 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0072bc] rounded-full border border-slate-200 shrink-0 transition-colors cursor-pointer text-xs font-medium"
        >
          Non-Sanctionable Policy
        </button>
        <button
          onClick={() => handleSend('Compare BOT, BOOT, and DBFOM concession models')}
          className="px-3 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0072bc] rounded-full border border-slate-200 shrink-0 transition-colors cursor-pointer text-xs font-medium"
        >
          Concession Models
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-[#0072bc] text-white'
                  : 'bg-gradient-to-br from-[#1b365d] to-[#0072bc] text-white shadow-xs'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs relative ${
                msg.sender === 'user'
                  ? 'bg-[#0072bc] text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-line">{msg.text}</div>

              {msg.sources && (
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <div className="font-semibold text-slate-700 flex items-center gap-1">
                    <Scale className="w-3 h-3 text-[#0072bc]" />
                    <span>Legal & Knowledge Citations:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.sources.map((src, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-mono">
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {msg.sdgs && msg.sdgs.length > 0 && (
                <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Relevant SDGs:</span>
                  {msg.sdgs.map((sdg) => (
                    <span
                      key={sdg}
                      className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-100 text-sky-800"
                    >
                      Goal {sdg}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 pt-1">
                <span>{msg.timestamp}</span>
                {msg.sender === 'coach' && (
                  <button
                    onClick={() => handleCopy(msg.id, msg.text)}
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    title="Copy Answer to Clipboard"
                  >
                    {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500 bg-white p-3 rounded-2xl w-fit border border-slate-200">
            <Bot className="w-4 h-4 text-[#0072bc] animate-spin" />
            <span>PPP Union Coach is analyzing legal frameworks & international treaties...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask PPP Union Coach on 17-SDGs, Concession Laws, Guarantees, or Business..."
          className="flex-1 py-2.5 px-4 text-xs sm:text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:border-[#0072bc] focus:bg-white transition-all text-slate-800"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || isTyping}
          className="px-4 py-2.5 bg-[#0072bc] hover:bg-[#005a96] disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-xs"
        >
          <span>Search & Analyze</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

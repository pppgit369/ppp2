import React from 'react';
import { Scale, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export interface EvaluationRow {
  dimension: string;
  benefits: string[];
  disadvantages: string[];
  safeguard: string;
}

export const PPP_EVALUATION_SCHEDULE_ROWS: EvaluationRow[] = [
  {
    dimension: '1. Capital Mobilization & Budgetary Fiscal Constraints',
    benefits: [
      'Overcomes severe sovereign borrowing ceilings and statutory budget deficits.',
      'Unlocks domestic & cross-border institutional capital (pension funds, sovereign wealth, MDBs).',
      'Enables off-budget project execution utilizing Tier-1 bank instruments (SBLC / BG).',
    ],
    disadvantages: [
      'Private commercial capital carries a higher risk premium than pure sovereign treasury bonds.',
      'Availability payment commitments remain long-term contingent liabilities for future budgets.',
    ],
    safeguard: 'Mandatory Value for Money (VfM) and Public Sector Comparator (PSC) fiscal affordability caps.',
  },
  {
    dimension: '2. Project Delivery Speed & Construction Timelines',
    benefits: [
      'Accelerates project commissioning by 20% to 35% compared to traditional public works.',
      'Unified single-point responsibility (DBFOM) eliminates sequential tender delays.',
      'Private consortia earn revenues only upon operational commissioning, creating intense early completion incentives.',
    ],
    disadvantages: [
      'Initial feasibility preparation and procurement stages can take 12 to 24 months.',
      'Substantial upfront development expenses incurred by bidding consortia and transaction advisors.',
    ],
    safeguard: 'Standardized model concession contracts (UNECE / EPEC) and pre-screened transaction facilitation.',
  },
  {
    dimension: '3. Whole-Life Quality & Asset Maintenance',
    benefits: [
      'Private partner contractually responsible for asset maintenance across 25 to 30 years.',
      'High-durability engineering and green technologies selected from day one to minimize lifecycle OPEX.',
      'Availability payments strictly audited against zero-defect performance covenants.',
    ],
    disadvantages: [
      'Inflexible 30-year contractual covenants make mid-course operational alterations complex.',
      'Public authority must maintain dedicated monitoring units across decades.',
    ],
    safeguard: 'Periodic 5-year contractual rebalancing mechanisms and independent technical auditor benchmarking.',
  },
  {
    dimension: '4. Allocation of Lifecycle Risks',
    benefits: [
      'Construction delay, cost overruns, and technology obsolescence transferred to private partner.',
      'Eliminates opportunistic contractor "change orders" that plague traditional public procurement.',
      'Commercial lenders enforce rigorous due diligence before committing syndication funds.',
    ],
    disadvantages: [
      'Private investors demand robust sovereign contractual guarantees for unhedgeable risks.',
      'Excessive risk pricing can drive up tariffs if procuring authority tries to offload political risks.',
    ],
    safeguard: 'Rational risk-sharing matrix: allocating each risk strictly to the party best equipped to manage it at lowest cost.',
  },
  {
    dimension: '5. Technology, Innovation & Customer Responsiveness',
    benefits: [
      'Direct access to proprietary international engineering methodologies and patents.',
      'Fosters secondary commercial revenue streams (retail concessions, fiber leasing, advertising).',
      'Remuneration tied to customer satisfaction, uptime, and service cleanliness metrics.',
    ],
    disadvantages: [
      'Monopolistic concessionaires may resist adopting unanticipated civic improvements unless compensated.',
      'Technological standards chosen at inception may face obsolescence over 30 years.',
    ],
    safeguard: 'Technology refresh milestones and open-architecture specifications embedded into concession terms.',
  },
  {
    dimension: '6. Public Accountability, Ethics & Anti-Corruption',
    benefits: [
      'Transparent competitive bidding, public concession disclosures, and multilateral audit trails.',
      'Frees sovereign civil servants from daily operational firefighting to focus on strategic policy.',
      'Contractually mandates UN SDG benchmarks, gender equity, and environmental safeguards.',
    ],
    disadvantages: [
      'Citizens continue to hold elected officials politically responsible for tariffs and toll rates.',
      'Risk of public backlash if private partner profits appear excessive during economic crises.',
    ],
    safeguard: 'Transparent toll escalation indices tied to CPI, excess profit-sharing clawbacks, and public ombudsman oversight.',
  },
];

export const PPPBenefitsEvaluationSchedule: React.FC = () => {
  return (
    <div className="my-8 bg-white rounded-2xl border border-slate-300 shadow-md overflow-hidden">
      {/* Schedule Header */}
      <div className="bg-gradient-to-r from-slate-900 via-[#004e80] to-[#0072bc] text-white p-5 sm:p-6 border-b border-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 text-sky-200 border border-white/20 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Comparative Analytical Schedule</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Schedule: Comprehensive Evaluation of PPP Benefits vs. Disadvantages
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 mt-1 max-w-3xl leading-relaxed">
              Systematic statutory comparison between empirical PPP advantages, inherent procurement challenges, and essential regulatory mitigation safeguards.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-900 border-b-2 border-slate-900">
              <th className="py-3.5 px-4 font-black uppercase tracking-wider text-xs w-[24%] border-r border-slate-400">
                Strategic Evaluation Dimension
              </th>
              <th className="py-3.5 px-4 font-black uppercase tracking-wider text-xs w-[38%] border-r border-slate-400 text-emerald-950">
                Empirical Benefits (Advantages of PPP)
              </th>
              <th className="py-3.5 px-4 font-black uppercase tracking-wider text-xs w-[38%] text-slate-900">
                Inherent Disadvantages & Mitigating Safeguards
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-300">
            {PPP_EVALUATION_SCHEDULE_ROWS.map((row, idx) => (
              <tr
                key={idx}
                className={`hover:bg-sky-50/40 transition-colors ${
                  idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'
                }`}
              >
                {/* Dimension Column */}
                <td className="py-4 px-4 align-top font-bold text-slate-950 border-r border-slate-300 leading-snug">
                  <span className="text-slate-900 text-xs sm:text-sm font-black block">
                    {row.dimension}
                  </span>
                </td>

                {/* Benefits Column */}
                <td className="py-4 px-4 align-top border-r border-slate-300 text-slate-800 leading-relaxed">
                  <ul className="space-y-2">
                    {row.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-[13px]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Disadvantages & Mitigation Column */}
                <td className="py-4 px-4 align-top text-slate-800 leading-relaxed space-y-3">
                  <div className="space-y-2">
                    {row.disadvantages.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-slate-700">
                        <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-[13px]">{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-[11px] sm:text-xs text-sky-950 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#0072bc] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-[#0072bc] font-bold">Statutory Safeguard: </strong>
                      {row.safeguard}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Note */}
      <div className="p-4 bg-slate-50 border-t border-slate-300 text-xs text-slate-600 flex items-center justify-between">
        <span className="font-semibold text-slate-700">
          Evaluated in accordance with UN People-First PPP Criteria & World Bank PSC Guidelines
        </span>
        <span className="text-[11px] text-slate-500">6 Dimension Assessment Complete</span>
      </div>
    </div>
  );
};

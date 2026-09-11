import React, { useState } from 'react';
import { Sparkles, Maximize2, Shield, TrendingUp, CheckCircle, Clock, Lightbulb, Users, Cpu, DollarSign } from 'lucide-react';

export interface BenefitPetal {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  angle: number; // in degrees for circular layout
  detail: string;
}

export const PPP_BENEFIT_PETALS: BenefitPetal[] = [
  {
    id: 1,
    title: 'Help to Lessen Public sector Budget constraints',
    subtitle: 'Off-Budget Fiscal Relief',
    icon: <DollarSign className="w-5 h-5" />,
    angle: 270, // Top
    detail: 'Unlocks off-budget capital through Tier-1 bank instruments (SBLC/BG) and institutional co-investment, preserving sovereign borrowing limits and national credit ratings.',
  },
  {
    id: 2,
    title: 'Promotes innovation and creativity',
    subtitle: 'Cutting-Edge Engineering',
    icon: <Lightbulb className="w-5 h-5" />,
    angle: 315, // Top-Right
    detail: 'Encourages private consortia to engineer bespoke, energy-efficient solutions and smart technologies superior to standard government blueprints.',
  },
  {
    id: 3,
    title: 'Consume Less time and improve monitoring',
    subtitle: 'Accelerated Delivery',
    icon: <Clock className="w-5 h-5" />,
    angle: 0, // Right
    detail: 'Integrated Design-Build-Finance eliminates sequential bidding delays; performance-linked availability compensation guarantees intense on-schedule discipline.',
  },
  {
    id: 4,
    title: 'Build Cooperative Growth via Private sector integration',
    subtitle: 'Domestic Empowerment',
    icon: <Users className="w-5 h-5" />,
    angle: 45, // Bottom-Right
    detail: 'Mandatory joint ventures and sub-contracting transfer specialized skills to domestic engineering firms and regional supply-chain partners.',
  },
  {
    id: 5,
    title: 'Increase Technical & Technological Cooperation',
    subtitle: 'Global Technology Transfer',
    icon: <Cpu className="w-5 h-5" />,
    angle: 90, // Bottom
    detail: 'Direct access to proprietary international construction technologies, automated management systems, and ISO-certified quality practices.',
  },
  {
    id: 6,
    title: 'Provide Elastic services & reduce service Costs',
    subtitle: 'Lifecycle Cost Efficiency',
    icon: <TrendingUp className="w-5 h-5" />,
    angle: 135, // Bottom-Left
    detail: 'Whole-life costing ensures assets are engineered from day one to minimize 30-year operational expenditures and provide agile, scalable citizen services.',
  },
  {
    id: 7,
    title: 'Risk Sharing with private Partner',
    subtitle: 'Equitable Risk Transfer',
    icon: <Shield className="w-5 h-5" />,
    angle: 180, // Left
    detail: 'Transfers design defects, cost overruns, geotechnical hurdles, and operating risks to the commercial party best equipped to manage them.',
  },
  {
    id: 8,
    title: 'Promotes Infrastructure and Land Development',
    subtitle: 'Socioeconomic Multiplier',
    icon: <CheckCircle className="w-5 h-5" />,
    angle: 225, // Top-Left
    detail: 'Catalyzes rapid regional economic expansion, transit-oriented commercial zones, urban renewal, and modern industrial corridors.',
  },
];

export const PPPKeyBenefitsDiagram: React.FC = () => {
  const [activePetal, setActivePetal] = useState<BenefitPetal | null>(null);

  return (
    <div className="my-8 bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-sky-300/40 relative overflow-hidden">
      {/* Background Decorative Ripples */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Title */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-cyan-100 border border-white/30 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
          <span>High-Resolution Architectural Model</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Eight Primary Pillars of Public-Private Partnership Synergy
        </h3>
        <p className="text-xs sm:text-sm text-sky-100 mt-2">
          Click any satellite node in the circular diagram below to inspect specific empirical benefits and operational mechanisms.
        </p>
      </div>

      {/* Interactive Circular Diagram (SVG + HTML Layout for maximum responsiveness) */}
      <div className="relative max-w-2xl mx-auto aspect-square flex items-center justify-center p-4">
        {/* Central Sun Circle */}
        <div className="z-20 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#38bdf8] via-[#0284c7] to-[#0369a1] text-white flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-2xl border-4 border-white/60 ring-8 ring-sky-300/30 select-none">
          <span className="text-lg sm:text-2xl font-black leading-tight tracking-tight uppercase">
            Key Benefits of PPP
          </span>
          <span className="text-[10px] sm:text-xs text-sky-100 font-semibold mt-1">
            Harmonized Public-Private Value Engine
          </span>
        </div>

        {/* Orbit Rings */}
        <div className="absolute inset-8 sm:inset-12 rounded-full border border-sky-300/30 pointer-events-none" />
        <div className="absolute inset-16 sm:inset-24 rounded-full border border-dashed border-sky-300/40 pointer-events-none animate-spin-slow" />

        {/* 8 Satellite Petal Circles placed at exact angular positions */}
        {PPP_BENEFIT_PETALS.map((petal, index) => {
          const radius = 41; // percentage from center
          const rad = (petal.angle * Math.PI) / 180;
          const leftPercent = 50 + radius * Math.cos(rad);
          const topPercent = 50 + radius * Math.sin(rad);

          const isSelected = activePetal?.id === petal.id;

          return (
            <button
              key={petal.id}
              onClick={() => setActivePetal(isSelected ? null : petal)}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className={`absolute z-30 w-24 h-24 sm:w-32 sm:h-32 rounded-full p-2 text-center flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-lg select-none ${
                isSelected
                  ? 'bg-white text-slate-900 ring-4 ring-cyan-300 scale-110 shadow-2xl z-40'
                  : 'bg-gradient-to-br from-[#7dd3fc] to-[#38bdf8] hover:from-white hover:to-sky-100 text-slate-900 border-2 border-white hover:scale-105'
              }`}
              title={petal.title}
            >
              <div className={`mb-0.5 ${isSelected ? 'text-[#0072bc]' : 'text-slate-900'}`}>
                {petal.icon}
              </div>
              <span className="text-[9px] sm:text-[11px] font-bold leading-tight line-clamp-3">
                {petal.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-8 relative z-10 max-w-2xl mx-auto">
        {activePetal ? (
          <div className="p-5 rounded-2xl bg-white/95 text-slate-900 shadow-xl border-2 border-cyan-300 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0072bc]/10 text-[#0072bc] text-[11px] font-black uppercase">
                {activePetal.subtitle}
              </span>
              <button
                onClick={() => setActivePetal(null)}
                className="text-slate-400 hover:text-slate-800 text-xs font-bold px-2 py-0.5 rounded-md hover:bg-slate-100"
              >
                ✕ Close
              </button>
            </div>
            <h4 className="text-base font-black text-slate-900 mb-1.5">{activePetal.title}</h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {activePetal.detail}
            </p>
          </div>
        ) : (
          <div className="text-center p-3 rounded-xl bg-white/10 text-sky-100 text-xs font-medium border border-white/20">
            Click on any of the 8 benefit circles to reveal detailed operational mechanisms.
          </div>
        )}
      </div>

      {/* Diagram Subtext */}
      <div className="mt-6 pt-4 border-t border-sky-400/30 text-center text-sky-200 text-xs">
        Ultra-High-Definition Vector Model • Certified Under UN International People-First PPP Guidelines
      </div>
    </div>
  );
};

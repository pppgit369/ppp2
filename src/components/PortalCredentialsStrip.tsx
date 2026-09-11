import React from 'react';
import { ShieldCheck, Trophy, BadgeCheck, Award, FileText, ChevronRight, Smartphone } from 'lucide-react';
import { PortalCredentials } from '../types';
import { useAdmin } from '../context/AdminContext';

interface PortalCredentialsStripProps {
  credentials: PortalCredentials;
  onOpenCertificateModal: () => void;
  onNavigate?: (href: string) => void;
  className?: string;
}

export const PortalCredentialsStrip: React.FC<PortalCredentialsStripProps> = ({
  credentials,
  onOpenCertificateModal,
  onNavigate,
  className = '',
}) => {
  const { customLogo } = useAdmin();
  const logoSrc = customLogo || '/ppp-union-logo.svg';

  return (
    <div 
      id="portal-credentials-strip"
      className={`w-full pt-2 pb-1 border-t border-blue-100/60 transition-all duration-200 overflow-x-auto no-scrollbar flex items-center justify-between gap-3 ${className}`}
    >
      {/* Left side: Quick Download App badge */}
      {onNavigate ? (
        <button
          id="strip-download-ppp-union-app"
          onClick={() => onNavigate('#download-app')}
          className="inline-flex items-center gap-1.5 text-xs text-[#0072bc] hover:text-[#005a96] font-bold transition-colors cursor-pointer group shrink-0"
          title="Download official PPP Union App for Android, Apple, Windows & Mac"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#0072bc] group-hover:scale-110 transition-transform" />
          <span className="font-extrabold text-[#0072bc]">Download App:</span>
          <span className="font-medium text-slate-600 group-hover:text-[#0072bc] hidden sm:inline">Android • Apple • Windows • Mac</span>
          <ChevronRight className="w-3 h-3 text-[#0072bc] group-hover:translate-x-0.5 transition-transform" />
        </button>
      ) : <div />}

      {/* Strictly in 1 single clean line pushed near the View Certificate side in brand blue, without blue box */}
      <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-5 min-w-max text-xs sm:text-[13px] whitespace-nowrap text-[#0072bc] ml-auto">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          {/* 1. Satisfactory Status */}
          <button 
            onClick={onOpenCertificateModal}
            className="flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer group text-left"
            title="Click to view Official Satisfactory Status & Accreditation Certificate"
          >
            <ShieldCheck className="w-4 h-4 text-[#0072bc] shrink-0" />
            <span className="text-[#0072bc]/85 font-medium">Status:</span>
            <span className="font-bold text-[#0072bc] group-hover:underline">
              {credentials.status}
            </span>
          </button>

          <span className="text-blue-200 select-none">|</span>

          {/* 2. Global Rank */}
          <button 
            onClick={onOpenCertificateModal}
            className="flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer group text-left"
            title="Click to view Global Rank #1 & World Infrastructure Directory benchmark"
          >
            <Trophy className="w-4 h-4 text-[#0072bc] shrink-0" />
            <span className="text-[#0072bc]/85 font-medium">Rank:</span>
            <span className="font-bold text-[#0072bc] group-hover:underline">
              {credentials.rank}
            </span>
          </button>

          <span className="text-blue-200 select-none">|</span>

          {/* 3. Rating Certificate */}
          <button 
            onClick={onOpenCertificateModal}
            className="flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer group text-left"
            title="Click to view Grade AAA Rating Certificate & Independent Standards Audit"
          >
            <BadgeCheck className="w-4 h-4 text-[#0072bc] shrink-0" />
            <span className="text-[#0072bc]/85 font-medium">Rating Certificate:</span>
            <span className="font-bold text-[#0072bc] group-hover:underline">
              {credentials.rating}
            </span>
          </button>

          <span className="text-blue-200 select-none">|</span>

          {/* 4. Global Award */}
          <button 
            onClick={onOpenCertificateModal}
            className="flex items-center gap-1.5 hover:opacity-85 transition-opacity cursor-pointer group text-left"
            title="Click to view UN SDG Digital Excellence 2025 Global Award Citation"
          >
            <Award className="w-4 h-4 text-[#0072bc] shrink-0" />
            <span className="text-[#0072bc]/85 font-medium">Award:</span>
            <span className="font-bold text-[#0072bc] group-hover:underline">
              {credentials.award}
            </span>
          </button>
        </div>

        {/* Divider before View Certificate */}
        <span className="text-blue-200 select-none">|</span>

        {/* Official Certificate Badge */}
        <button
          onClick={onOpenCertificateModal}
          className="group relative flex items-center gap-2 px-2.5 py-1 rounded-md border border-sky-300/80 bg-gradient-to-r from-sky-50 via-white to-blue-50/80 hover:from-sky-100 hover:to-blue-100 shadow-2xs hover:shadow-xs transition-all cursor-pointer select-none"
          title="Official PPP Union Institutional Certificate"
        >
          {/* Certificate Miniature Icon */}
          <div className="relative w-7 h-8 rounded-[3px] bg-white border border-[#0072bc]/40 shadow-2xs overflow-hidden flex flex-col items-center justify-between p-0.5 shrink-0">
            {/* Top blue bar */}
            <div className="w-full h-1 bg-gradient-to-r from-sky-400 via-[#0072bc] to-amber-400"></div>
            {/* Original official seal logo */}
            <img 
              src={logoSrc} 
              alt="PPP Union Original Logo" 
              className="w-4 h-4 object-contain"
            />
            {/* Certificate text label */}
            <span className="text-[5.5px] font-mono font-black text-[#0072bc] tracking-tighter leading-none uppercase">
              CERT
            </span>
          </div>

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] sm:text-[11px] font-black text-slate-800 group-hover:text-[#0072bc] flex items-center gap-1">
              <span>Certificate</span>
              <span className="text-[8px] font-mono px-1 py-0.2 bg-blue-100 text-[#0072bc] rounded font-bold uppercase tracking-wider">
                Official
              </span>
            </span>
            <span className="text-[9.5px] text-slate-500 flex items-center gap-0.5 font-mono">
              <span>UN-PPP-2025-AAA</span>
              <ChevronRight className="w-2.5 h-2.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

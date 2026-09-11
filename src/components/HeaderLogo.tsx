import React from 'react';
import { Camera, Edit3 } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface HeaderLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  showText?: boolean;
  variant?: 'default' | 'dark';
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ 
  className = '', 
  size = 'md', 
  onClick,
  showText = true,
  variant = 'default'
}) => {
  const { isAdmin, customLogo, openLogoModal } = useAdmin();
  // Enhanced, commanding seal size (112px for md) to make the logo prominent and clear
  const sealSize = size === 'sm' ? 56 : size === 'lg' ? 124 : size === 'xl' ? 148 : 112;

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!isAdmin) return;
    e.preventDefault();
    e.stopPropagation();
    openLogoModal();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  const isSmall = size === 'sm';
  const isDark = variant === 'dark';

  return (
    <div 
      id={isDark ? "ppp-union-bottom-logo" : "ppp-union-logo"} 
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      title={isAdmin ? "PPP UNION Official Logo (Double-click to change or replace logo)" : "PPP UNION"}
      className={`flex items-center ${isSmall ? 'gap-2.5' : 'gap-4 sm:gap-5'} select-none cursor-pointer group relative bg-transparent ${className}`}
    >
      {/* Visual Seal Container - Website Logo matches Website Icon (icon.svg) 100% */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center bg-transparent">
        <div 
          className="flex items-center justify-center bg-transparent overflow-visible"
          style={{ width: sealSize, height: sealSize }}
        >
          <img 
            src={customLogo || '/icon.svg'} 
            alt="PPP UNION Official App Identity Logo" 
            className={`w-full h-full object-contain bg-transparent transition-all duration-200 ${
              isDark && !customLogo ? 'brightness-0 invert opacity-95' : ''
            }`}
          />
        </div>

        {/* Hover Camera/Edit Badge to indicate double-click to change */}
        <span 
          className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-sky-500 text-white p-1 rounded-full shadow-md text-[9px] font-bold flex items-center justify-center pointer-events-none"
          title="Double-click to change logo"
        >
          <Camera className="w-2.5 h-2.5 text-white" />
        </span>
      </div>

      {/* Brand Title & Subtitle - Matched to website banner blue #0072bc */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span 
              className={`${
                isSmall 
                  ? 'text-[16px] font-bold' 
                  : 'text-[21px] sm:text-[26px] md:text-[29px] lg:text-[32px] font-black'
              } tracking-tight ${
                isDark ? 'text-white' : 'text-[#0072bc]'
              } leading-none font-serif`}
            >
              PPP UNION
            </span>
            <span 
              className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-600 text-[11px] font-bold hidden sm:inline-flex items-center gap-0.5 pointer-events-none" 
              title="Double-click logo to change"
            >
              <Edit3 className="w-3 h-3 text-sky-500" />
            </span>
          </div>
          <span 
            className={`${
              isSmall 
                ? 'text-[10px] tracking-[0.12em]' 
                : 'text-[11px] sm:text-[12px] lg:text-[12.5px] tracking-[0.14em] sm:tracking-[0.16em]'
            } font-bold ${
              isDark ? 'text-sky-300' : 'text-[#0072bc]/90'
            } uppercase ${isSmall ? 'mt-0.5' : 'mt-1.5'} leading-tight`}
          >
            17-SDGs &bull; Sustainable Infrastructure
          </span>
        </div>
      )}
    </div>
  );
};

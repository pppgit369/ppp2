import React from 'react';
import { Home, Target, Scale, Users, Download, ArrowUp, MessageSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface MobileBottomNavProps {
  activePage: string;
  onNavigate: (href: string) => void;
  onOpenSearch?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
}) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navButtons = [
    {
      id: 'nav-home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      href: '#home',
      isActive: activePage === '#home' || activePage === '',
    },
    {
      id: 'nav-sdgs',
      label: '17 SDGs',
      icon: <Target className="w-4 h-4" />,
      href: '#sdgs',
      isActive: activePage === '#sdgs',
    },
    {
      id: 'nav-laws',
      label: 'PPP Laws',
      icon: <Scale className="w-4 h-4" />,
      href: '#laws',
      isActive: activePage.startsWith('#laws'),
    },
    {
      id: 'nav-facilitators',
      label: 'Facilitators',
      icon: <Users className="w-4 h-4" />,
      href: '#facilitators',
      isActive: activePage.startsWith('#facilitators'),
    },
    {
      id: 'nav-messenger',
      label: 'AI Chat',
      icon: <MessageSquare className="w-4 h-4 text-[#0072bc]" />,
      href: '#smart-messenger',
      isActive: false,
    },
  ];

  return (
    <nav
      id="mobile-bottom-nav"
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-1 flex items-center justify-around text-slate-600 safe-bottom"
    >
      {navButtons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onNavigate(btn.href)}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all cursor-pointer min-w-[56px] ${
            btn.isActive
              ? 'text-[#0072bc] font-bold scale-105'
              : 'hover:text-slate-900 active:scale-95'
          }`}
        >
          <div className={`p-1 rounded-lg ${btn.isActive ? 'bg-blue-50 text-[#0072bc]' : ''}`}>
            {btn.icon}
          </div>
          <span className="text-[10px] mt-0.5 tracking-tight">{btn.label}</span>
        </button>
      ))}

      {/* Install Button on mobile if installable */}
      {!isInstalled && isInstallable && (
        <button
          onClick={install}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-amber-600 hover:text-amber-700 transition-all cursor-pointer min-w-[56px] active:scale-95"
          title="Install App"
        >
          <div className="p-1 rounded-lg bg-amber-50 text-amber-600 relative">
            <Download className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>
          <span className="text-[10px] mt-0.5 font-bold">Install</span>
        </button>
      )}

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-400 hover:text-slate-800 transition-all cursor-pointer min-w-[56px] active:scale-95"
        title="Scroll to top"
      >
        <div className="p-1 rounded-lg hover:bg-slate-100">
          <ArrowUp className="w-4 h-4" />
        </div>
        <span className="text-[10px] mt-0.5">Top</span>
      </button>
    </nav>
  );
};

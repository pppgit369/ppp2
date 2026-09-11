import React, { useState, useEffect } from 'react';
import { Globe, User, Edit3, Check, ChevronDown, Lock, X, Maximize2, Minimize2, EyeOff, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageCode } from '../types/language';

interface TopBarProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
  selectedLanguage?: string;
  onSelectLanguage?: (lang: string) => void;
  onOpenWpDashboard?: () => void;
  onOpenLogoModal?: () => void;
  onNavigate?: (href: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  isEditMode,
  onToggleEditMode,
  selectedLanguage,
  onSelectLanguage,
  onOpenWpDashboard,
  onOpenLogoModal,
  onNavigate,
}) => {
  const { language, setLanguage, languageConfig, supportedLanguages, t } = useLanguage();
  const [currentTime, setCurrentTime] = useState('Thursday, 3 September 2026 at 11:28');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginRole, setLoginRole] = useState('facilitator');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberAccount, setMemberAccount] = useState<string | null>(null);
  const { isFullscreen, toggleFullscreen, isDesktop } = useDeviceDetect();
  const { isAdmin, setIsAdmin } = useAdmin();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format to match screenshot standard: Day, D Month Year at HH:MM
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const dayName = days[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${dayName}, ${day} ${month} ${year} at ${hours}:${minutes}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail) return;
    setIsLoggedIn(true);
    setMemberAccount(loginEmail);
    if (loginRole === 'secretariat' || loginEmail.toLowerCase().includes('admin') || loginEmail.toLowerCase().includes('secretariat')) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setShowLoginModal(false);
    if (onNavigate) {
      onNavigate('#member-portal');
    }
  };

  return (
    <div id="top-bar-container" className="bg-[#1b365d] text-white text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-12 border-b border-[#2d4d7a] relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        {/* Current Date & Time */}
        <div id="top-bar-datetime" className="flex items-center gap-2 text-slate-200 font-medium tracking-wide text-[11px] sm:text-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{currentTime}</span>
        </div>

        {/* Right Controls: PWA Install, Fullscreen, Edit Mode, Language, Members Login */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* PWA Install Button (Works on Windows, Android, iOS Safari) */}
          <PWAInstallButton variant="topbar" />

          {/* Fullscreen Toggle for Windows PC / Conference displays */}
          {isDesktop && (
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen Mode" : "Enter Fullscreen / Windows Presentation Mode"}
              className="p-1 rounded text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* WordPress Dashboard & Content Studio Quick Access Button */}
          {isAdmin && onOpenWpDashboard && (
            <button
              id="topbar-wp-dashboard-btn"
              onClick={onOpenWpDashboard}
              title="Open WordPress Content Studio & Page Manager"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#0073aa] hover:bg-[#005a87] text-white shadow-xs transition-colors cursor-pointer"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-white text-[#0073aa] flex items-center justify-center text-[8px] font-black">W</span>
              <span className="hidden sm:inline">WP Dashboard</span>
              <span className="sm:hidden">WP</span>
            </button>
          )}

          {/* Smart Rich Editing System Toggle (Only visible for Admin) */}
          {isAdmin && (
            <button
              id="toggle-smart-edit-mode-btn"
              onClick={onToggleEditMode}
              title="Toggle One-by-One Box & Content Editing System"
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all duration-200 shadow-xs cursor-pointer ${
                isEditMode
                  ? 'bg-sky-400 text-slate-950 ring-2 ring-sky-300 ring-offset-1 ring-offset-[#1b365d]'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEditMode ? 'Editing Mode Active' : 'Smart Box Edit'}</span>
              <span className="sm:hidden">{isEditMode ? 'Edit On' : 'Edit'}</span>
              {isEditMode && <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-ping ml-0.5"></span>}
            </button>
          )}

          {/* Language Selector */}
          <div className="relative">
            <button
              id="language-selector-btn"
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer py-0.5 text-[11px] sm:text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              <span>{languageConfig.flag} {languageConfig.nativeName}</span>
              <ChevronDown className="w-3 h-3 text-slate-300 opacity-80" />
            </button>

            {showLangMenu && (
              <div 
                id="language-dropdown-menu"
                className="absolute right-0 mt-2 w-44 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              >
                <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100 flex items-center justify-between mb-1">
                  <span>(Select Language)</span>
                  <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                </div>
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                      if (onSelectLanguage) onSelectLanguage(lang.name);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-100 cursor-pointer ${
                      language === lang.code ? 'font-bold text-[#0072bc] bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                      <span className="text-[10px] text-slate-400">({lang.name})</span>
                    </div>
                    {language === lang.code && <Check className="w-3 h-3 text-[#0072bc]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="text-slate-400 select-none hidden sm:inline">|</span>

          {/* Delegate & Liaison Portal Login */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-emerald-300 font-medium text-[11px] truncate max-w-[120px] sm:max-w-[140px]">
                {memberAccount}
              </span>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setMemberAccount(null);
                  setIsAdmin(false);
                }}
                className="text-slate-300 hover:text-white underline text-[11px] cursor-pointer"
                title="Sign out of account and admin mode"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button
              id="members-login-btn"
              onClick={() => setShowLoginModal(true)}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white font-medium hover:underline transition-colors cursor-pointer text-[11px] sm:text-xs"
            >
              <User className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Delegate Portal</span>
              <span className="sm:hidden">Sign In</span>
            </button>
          )}

          {/* Admin Role Status Badge on Top Bar (Only visible when logged in as Admin) */}
          {isAdmin ? (
            <div className="flex items-center gap-1.5 bg-[#004f80] border border-sky-400/40 px-2.5 py-0.5 rounded text-[11px] font-semibold text-white select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Admin</span>
              <button
                onClick={() => setIsAdmin(false)}
                className="text-slate-300 hover:text-white underline text-[10px] ml-1 cursor-pointer font-normal"
                title="Switch to Visitor View (Hides Admin Bar & Controls)"
              >
                Visitor View
              </button>
            </div>
          ) : (
            <button
              id="admin-login-quick-btn"
              onClick={() => setIsAdmin(true)}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-0.5 rounded text-[11px] font-bold border border-amber-400/30 transition-colors cursor-pointer"
              title="Click to restore Admin Mode & Dashboard"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Admin Access</span>
            </button>
          )}
        </div>
      </div>

      {/* Delegate & Liaison Portal Modal */}
      {showLoginModal && (
        <div 
          id="members-login-modal-overlay"
          className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
          onClick={() => setShowLoginModal(false)}
        >
          <div 
            id="members-login-modal-box"
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6 border border-slate-200 relative animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#0072bc]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">PPP Union Delegate Portal</h3>
                <p className="text-xs text-slate-500">Access accredited SDG project data and facilitation repository</p>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Institutional Capacity
                </label>
                <select
                  value={loginRole}
                  onChange={(e) => setLoginRole(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                >
                  <option value="facilitator">Accredited PPP Facilitator</option>
                  <option value="government">Government & Public Entity Delegate</option>
                  <option value="investor">Institutional Investor / ESG Fund</option>
                  <option value="secretariat">PPP Union Secretariat / Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="delegate@pppunion.org"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Access Code / Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#0072bc] hover:bg-[#005a96] text-white font-semibold rounded-lg text-xs transition-colors shadow-xs cursor-pointer"
                >
                  Sign In to Delegate Portal
                </button>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginModal(false);
                      if (onNavigate) onNavigate('#member-portal');
                    }}
                    className="py-2 px-2.5 bg-sky-50 hover:bg-sky-100 text-[#0072bc] font-bold rounded-lg text-[11px] transition-colors border border-sky-200 cursor-pointer"
                  >
                    Open Member Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginModal(false);
                      if (onNavigate) onNavigate('#member-registration');
                    }}
                    className="py-2 px-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold rounded-lg text-[11px] transition-colors border border-emerald-200 cursor-pointer"
                  >
                    New Member KYC
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsAdmin(true);
                    setIsLoggedIn(true);
                    setMemberAccount('admin@pppunion.org');
                    setShowLoginModal(false);
                    if (onNavigate) onNavigate('#members-admin');
                  }}
                  className="w-full py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-amber-300"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Admin Desk (members@pppunion.org)</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Need institutional accreditation or KYC submission?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginModal(false);
                    if (onNavigate) onNavigate('#members-login');
                  }}
                  className="text-[#0072bc] hover:underline font-bold cursor-pointer"
                >
                  Members Login & BE A MEMBER
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useRef, useEffect, useState } from 'react';
import { Search, X, ArrowRight, ExternalLink, Download, Smartphone } from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';
import { PortalCredentialsStrip } from './PortalCredentialsStrip';
import { OfficialCertificateModal } from './OfficialCertificateModal';
import { SelectLanguageBar } from './SelectLanguageBar';
import { MenuItem, SDGItem, PortalCredentials } from '../types';
import { DEFAULT_PORTAL_CREDENTIALS } from '../data/defaultData';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_KEY_CREDENTIALS = 'ppp_portal_credentials';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (href: string) => void;
  navigation: MenuItem[];
  sdgs: SDGItem[];
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onNavigate,
  navigation,
  sdgs,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isAdmin } = useAdmin();
  const { t, languageConfig } = useLanguage();
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  // Portal credentials state with local persistence
  const [credentials, setCredentials] = useState<PortalCredentials>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CREDENTIALS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error reading saved credentials', e);
    }
    return DEFAULT_PORTAL_CREDENTIALS;
  });

  const handleUpdateCredentials = (newCreds: PortalCredentials) => {
    setCredentials(newCreds);
    try {
      localStorage.setItem(STORAGE_KEY_CREDENTIALS, JSON.stringify(newCreds));
    } catch (e) {
      console.warn('Error saving credentials', e);
    }
  };

  // Global keyboard shortcut: Ctrl+K or Cmd+K or "/" to focus search on Windows / Mac
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute matching results when search query is typed
  const isSearching = searchQuery.trim().length > 0;
  const lowerQuery = searchQuery.toLowerCase().trim();

  const matchingSubmenus = isSearching
    ? navigation.flatMap((item) =>
        (item.submenus || [])
          .filter(
            (sub) =>
              sub.title.toLowerCase().includes(lowerQuery) ||
              (sub.description && sub.description.toLowerCase().includes(lowerQuery))
          )
          .map((sub) => ({ ...sub, parentTitle: item.title }))
      )
    : [];

  const matchingSDGs = isSearching
    ? sdgs.filter(
        (sdg) =>
          sdg.title.toLowerCase().includes(lowerQuery) ||
          sdg.subtitle.toLowerCase().includes(lowerQuery) ||
          sdg.description.toLowerCase().includes(lowerQuery) ||
          `sdg ${sdg.number}`.includes(lowerQuery) ||
          `goal ${sdg.number}`.includes(lowerQuery)
      )
    : [];

  return (
    <header 
      id="main-header" 
      className="bg-white pt-6 sm:pt-8 pb-2.5 sm:pb-3 px-4 sm:px-6 lg:px-12 border-b border-slate-100 relative transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 sm:gap-5">
        {/* Row 1: Logo, Download App Addon & Live Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
          {/* Official Seal and Portal Title + Download App Addon (Down of Logo & Top of Global Rank 1) */}
          <div className="flex flex-col items-center md:items-start gap-2.5 shrink-0">
            <HeaderLogo size="md" onClick={() => onNavigate('#home')} />

            {/* Direct Addon: Down of Logo & Top of Global Rank 1 --- Download PPP Union App */}
            <div className="flex items-center gap-2 pt-0.5">
              <button
                id="btn-download-ppp-union-app-header"
                onClick={() => onNavigate('#download-app')}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0072bc] via-[#005a96] to-[#004270] hover:from-[#005a96] hover:to-[#003554] text-white text-xs sm:text-[13px] font-bold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer border border-blue-400/40 group active:scale-[0.98]"
                title="Download official PPP Union App for Android, Apple iOS, Windows & Mac"
              >
                <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Download className="w-3.5 h-3.5" />
                </div>
                <span className="tracking-wide">Download PPP Union App</span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-sky-100 bg-white/15 px-2 py-0.5 rounded-full border border-white/20">
                  <span>Android</span>
                  <span className="text-white/40">•</span>
                  <span>Apple</span>
                  <span className="text-white/40">•</span>
                  <span>Windows</span>
                  <span className="text-white/40">•</span>
                  <span>Mac</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-200 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            </div>
          </div>

          {/* Live Search Bar with Select Language on top and down of top dark blue banner */}
          <div className="w-full md:w-96 relative shrink-0">
            {/* Dedicated (Select Language) Bar */}
            <SelectLanguageBar />

            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                ref={searchInputRef}
                id="site-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={languageConfig.searchPlaceholder || t('search_placeholder')}
                className="w-full pl-10 pr-20 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all"
              />
              {searchQuery ? (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded absolute right-3 pointer-events-none">
                  Ctrl K
                </kbd>
              )}
            </div>

            {/* Dynamic Search Dropdown Results */}
            {isSearching && (
              <div 
                id="search-live-results"
                className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-96 overflow-y-auto"
              >
                <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{t('search_results_for')} "{searchQuery}"</span>
                  <span>{matchingSubmenus.length + matchingSDGs.length} {t('matches')}</span>
                </div>

                {matchingSubmenus.length === 0 && matchingSDGs.length === 0 ? (
                  <div className="p-6 text-center text-sm text-slate-500">
                    {t('no_results')}
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {/* Matching Menu / Content Pages */}
                    {matchingSubmenus.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.href || '#');
                          onSearchChange('');
                        }}
                        className="w-full text-left p-3 hover:bg-blue-50/60 transition-colors flex items-start justify-between gap-3 group cursor-pointer"
                      >
                        <div>
                          <span className="text-[11px] font-semibold text-[#0072bc] uppercase tracking-wider block mb-0.5">
                            {item.parentTitle}
                          </span>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0072bc]">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0072bc] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}

                    {/* Matching Sustainable Development Goals */}
                    {matchingSDGs.map((sdg) => (
                      <button
                        key={sdg.number}
                        onClick={() => {
                          onNavigate(`#sdg-${sdg.number}`);
                          onSearchChange('');
                        }}
                        className="w-full text-left p-3 hover:bg-slate-50 transition-colors flex items-center gap-3 group cursor-pointer"
                      >
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs shrink-0"
                          style={{ backgroundColor: sdg.color }}
                        >
                          {sdg.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#0072bc]">
                              SDG {sdg.number}: {sdg.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                              UN 2030 Goal
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate">{sdg.subtitle}</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0072bc]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Satisfactory Status, Rank, Rating Certificate, and Award of Website (without blue box) */}
        <PortalCredentialsStrip
          credentials={credentials}
          onOpenCertificateModal={() => setIsCertModalOpen(true)}
          onNavigate={onNavigate}
        />
      </div>

      {/* Official Certificate & Credentials Modal */}
      <OfficialCertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        credentials={credentials}
        onUpdateCredentials={handleUpdateCredentials}
        isAdmin={isAdmin}
      />
    </header>
  );
};

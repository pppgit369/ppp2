import React, { useState } from 'react';
import { 
  Plus, 
  Edit3, 
  FileText, 
  BookOpen, 
  Sparkles, 
  Shield, 
  Layers, 
  Download, 
  ChevronDown,
  Eye,
  CheckCircle,
  ExternalLink,
  Rocket,
  MousePointerClick,
  UserCheck,
  UserX,
  EyeOff
} from 'lucide-react';
import { HeaderLogo } from './HeaderLogo';
import { useAdmin } from '../context/AdminContext';
import { SUBMENU_PAGES_CONTENT } from '../data/pagesContent';

interface WordPressAdminBarProps {
  activePage: string;
  onOpenWpManager: (initialEditingId?: string | null, mode?: 'list' | 'editor' | 'paste-studio' | 'launch') => void;
  onOpenLogoModal: () => void;
  onToggleEditMode: () => void;
  isEditMode: boolean;
}

export const WordPressAdminBar: React.FC<WordPressAdminBarProps> = ({
  activePage,
  onOpenWpManager,
  onOpenLogoModal,
  onToggleEditMode,
  isEditMode,
}) => {
  const { isAdmin, setIsAdmin } = useAdmin();
  const [isNewMenuOpen, setIsNewMenuOpen] = useState(false);

  // CRITICAL REQUIREMENT: This bar must be NON-VISIBLE for public visitors, strictly for admin only!
  if (!isAdmin) {
    return null;
  }

  // Extract clean ID for current page
  const cleanId = activePage.replace(/^#/, '');
  const isHomePage = activePage === '#home' || activePage === '' || activePage.startsWith('#sdg-');
  const currentPageTitle = SUBMENU_PAGES_CONTENT[cleanId]?.title || cleanId;

  return (
    <aside 
      id="wp-admin-utility-bar" 
      aria-label="WordPress administration tools and quick actions"
      className="bg-[#1d2327] text-slate-200 text-xs border-b border-slate-700/80 px-4 py-1.5 flex items-center justify-between z-40 select-none"
    >
      {/* Left side: Brand, + New Dropdown, and Contextual Edit Button */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        {/* WP Brand indicator */}
        <button
          onClick={() => onOpenWpManager(null, 'paste-studio')}
          className="flex items-center gap-1.5 text-white hover:text-sky-300 font-bold px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
          title="Open WordPress Content Studio to copy and paste texts from www.pppunion.org"
        >
          <span className="w-5 h-5 rounded bg-[#0073aa] text-white flex items-center justify-center text-[10px] font-black">
            W
          </span>
          <span className="hidden sm:inline">PPP Union WP-Admin</span>
        </button>

        {/* Highlighted Primary Action: Paste Texts from www.pppunion.org */}
        <button
          onClick={() => onOpenWpManager(isHomePage ? null : cleanId, 'paste-studio')}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          title="Open WordPress Content Studio to paste full texts under each particular menu"
        >
          <FileText className="w-3.5 h-3.5 text-white" />
          <span>
            {!isHomePage && currentPageTitle 
              ? `Paste / Edit Text: ${currentPageTitle.length > 24 ? currentPageTitle.slice(0, 22) + '...' : currentPageTitle}`
              : 'Content Studio: Particular Menus & Posts'}
          </span>
        </button>

        {/* "+ New" Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsNewMenuOpen(!isNewMenuOpen)}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-[#0073aa] text-slate-200 hover:text-white font-semibold transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-emerald-400" />
            <span>New</span>
            <ChevronDown className="w-3 h-3 opacity-70" />
          </button>

          {isNewMenuOpen && (
            <div 
              className="absolute left-0 top-full mt-1 w-48 bg-[#2c3338] rounded-md shadow-xl border border-slate-700 py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
              onMouseLeave={() => setIsNewMenuOpen(false)}
            >
              <button
                onClick={() => {
                  setIsNewMenuOpen(false);
                  onOpenWpManager(null, 'editor');
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#0073aa] text-slate-200 hover:text-white flex items-center gap-2 text-xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>+ New Standalone Article / Post</span>
              </button>
              <button
                onClick={() => {
                  setIsNewMenuOpen(false);
                  onOpenWpManager(isHomePage ? null : cleanId, 'paste-studio');
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-[#0073aa] text-slate-200 hover:text-white flex items-center gap-2 text-xs cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>+ Paste Specific Menu Text</span>
              </button>
            </div>
          )}
        </div>

        {/* Contextual "Edit Page" Button */}
        {!isHomePage && (
          <button
            onClick={() => onOpenWpManager(cleanId, 'editor')}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0073aa] hover:bg-[#005a87] text-white font-semibold shadow-xs transition-colors cursor-pointer"
            title={`Edit current particular article #${cleanId} in WordPress Editor`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit This Article / Page</span>
          </button>
        )}

        {/* All Posts & Pages manager button */}
        <button
          onClick={() => onOpenWpManager(null, 'list')}
          className="hidden md:flex items-center gap-1 px-2 py-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>All Pages & Posts</span>
        </button>

        {/* Launch Readiness & Backup Button */}
        <button
          onClick={() => onOpenWpManager(null, 'launch')}
          className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold transition-colors cursor-pointer"
          title="Launch website readiness checklist and full backup"
        >
          <Rocket className="w-3.5 h-3.5 text-emerald-300" />
          <span>Launch Status</span>
        </button>

        {/* Master Logo Modal trigger */}
        <button
          onClick={onOpenLogoModal}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0066cc]/20 hover:bg-[#0066cc]/40 text-sky-200 border border-sky-500/30 transition-colors cursor-pointer"
          title="Change Logo or inspect official emblem (Double-click logo anytime to replace)"
        >
          <Shield className="w-3.5 h-3.5 text-sky-400" />
          <span>Change Logo</span>
        </button>
      </div>

      {/* Right side: Admin Mode Switch & Quick In-Place Edit Switch */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Double-Click Fast Editing Indicator */}
        <div 
          className="hidden xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-500/40 text-sky-200 text-[11px]"
          title="Double-click logo or any photo to replace or upload images directly"
        >
          <MousePointerClick className="w-3.5 h-3.5 text-sky-300" />
          <span>Double-Click: Change Logo & Replace All Images</span>
        </div>

        {/* Active Admin Role Indicator */}
        <div 
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0073aa] text-white text-[11px] font-bold shadow-xs select-none"
          title="Authenticated as Administrator"
        >
          <UserCheck className="w-3.5 h-3.5 text-emerald-300" />
          <span>Role: Admin</span>
        </div>

        {/* Exit to Visitor View Button */}
        <button
          onClick={() => setIsAdmin(false)}
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
          title="Switch to Visitor View (This admin bar will be hidden for visitors)"
        >
          <EyeOff className="w-3 h-3 text-amber-400" />
          <span className="hidden sm:inline">Visitor View (Hide Bar)</span>
          <span className="sm:hidden">Hide Bar</span>
        </button>

        <button
          onClick={onToggleEditMode}
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
            isEditMode
              ? 'bg-sky-500 text-white shadow-inner font-bold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
          title="Click to toggle visual in-place box edit markers"
        >
          <Sparkles className="w-3 h-3" />
          <span>{isEditMode ? 'Visual Boxes: ON' : 'Visual Boxes'}</span>
        </button>

        <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px] border-l border-slate-700 pl-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>PPP Union Secretariat</span>
        </div>
      </div>
    </aside>
  );
};

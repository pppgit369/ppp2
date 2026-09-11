import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Plus, Edit2, Sparkles, Layers, Search, ShieldCheck, Globe, Download } from 'lucide-react';
import { MenuItem, SubMenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  navigation: MenuItem[];
  activePage: string;
  onNavigate: (href: string) => void;
  isEditMode: boolean;
  onOpenMenuEditor: () => void;
  onEditSubmenu?: (menuItem: MenuItem, subItem?: SubMenuItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navigation,
  activePage,
  onNavigate,
  isEditMode,
  onOpenMenuEditor,
  onEditSubmenu,
}) => {
  const { translateNav, isRTL } = useLanguage();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const [drawerSearch, setDrawerSearch] = useState('');
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Apply real-time translation to navigation items
  const activeNav = translateNav(navigation);

  // Desktop hover handler with slight delay to prevent abrupt flicker
  const handleMouseEnter = (menuId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdownId(menuId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 180);
  };

  // Keyboard navigation & outside click dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdownId(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMenuItemClick = (item: MenuItem) => {
    if (!item.hasDropdown || !item.submenus || item.submenus.length === 0) {
      onNavigate(item.href);
      setOpenDropdownId(null);
      setMobileMenuOpen(false);
    } else {
      // Toggle dropdown on click as well
      setOpenDropdownId(openDropdownId === item.id ? null : item.id);
    }
  };

  const handleSubmenuClick = (href?: string) => {
    if (href) {
      onNavigate(href);
      setOpenDropdownId(null);
      setMobileMenuOpen(false);
    }
  };

  // Filter items in mobile drawer if user types in search
  const filteredNav = drawerSearch.trim() === '' ? activeNav : activeNav.map(item => {
    const query = drawerSearch.toLowerCase();
    const itemMatches = item.title.toLowerCase().includes(query);
    const matchedSubs = (item.submenus || []).filter(sub => 
      sub.title.toLowerCase().includes(query) || (sub.description && sub.description.toLowerCase().includes(query))
    );
    return {
      ...item,
      matches: itemMatches || matchedSubs.length > 0,
      submenus: matchedSubs
    };
  }).filter(item => item.matches || (item.submenus && item.submenus.length > 0));

  return (
    <nav 
      id="ppp-union-navbar" 
      className="bg-[#0072bc] text-white sticky top-0 z-40 shadow-md border-t border-sky-400/20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 md:h-13">
          {/* Main Navigation Links (Visible on Tablet & Desktop) */}
          <div className="hidden md:flex items-center h-full space-x-0.5 xl:space-x-1">
            {activeNav.map((item) => {
              const isOpen = openDropdownId === item.id;
              const isActive = activePage === item.href || (item.submenus && item.submenus.some(s => s.href === activePage));

              return (
                <div
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    aria-expanded={isOpen}
                    className={`h-full px-2.5 lg:px-3 xl:px-4 flex items-center gap-1 text-xs lg:text-[13px] font-bold tracking-wide transition-all duration-200 uppercase cursor-pointer relative ${
                      isOpen || isActive
                        ? 'bg-[#005285] text-white shadow-inner'
                        : 'text-white hover:bg-[#005a96] hover:text-sky-100'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-sky-200 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    )}
                    {/* Active / Hover Bottom Light Blue Shade Indicator */}
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-200 ${
                        isActive 
                          ? 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.85)]' 
                          : 'bg-transparent group-hover:bg-sky-300/60'
                      }`}
                    ></span>
                  </button>

                  {/* Clean Dropdown Sub-menu */}
                  {item.hasDropdown && item.submenus && item.submenus.length > 0 && (
                    <div
                      id={`dropdown-${item.id}`}
                      className={`absolute top-full ${item.id === 'contact-us' || item.id === 'contact' ? 'right-0' : 'left-0'} min-w-[270px] max-w-xs bg-white text-slate-800 rounded-b-xl shadow-2xl border-t-2 border-sky-400 py-1.5 transition-all duration-150 origin-top transform z-50 ${
                        isOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto visible scale-100'
                          : 'opacity-0 -translate-y-2 pointer-events-none invisible scale-98'
                      }`}
                    >
                      <div className="max-h-[460px] overflow-y-auto divide-y divide-slate-100">
                        {item.submenus.map((sub) => (
                          <div
                            key={sub.id}
                            className="group/sub relative"
                          >
                            <button
                              onClick={() => handleSubmenuClick(sub.href)}
                              className="w-full text-left px-4 py-2.5 hover:bg-sky-50 transition-colors flex items-center justify-between gap-3 cursor-pointer group-hover/sub:text-[#0072bc] border-l-2 border-transparent hover:border-sky-400"
                            >
                              <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover/sub:text-[#0072bc] transition-colors leading-tight">
                                {sub.title}
                              </span>

                              {sub.badge && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-[#0072bc] shrink-0">
                                  {sub.badge}
                                </span>
                              )}
                            </button>

                            {/* Inline edit button for this sub-menu when in Edit Mode */}
                            {isEditMode && onEditSubmenu && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onEditSubmenu(item, sub);
                                }}
                                title="Edit this sub-menu item"
                                className="absolute right-3 top-2.5 px-1.5 py-0.5 bg-sky-600 hover:bg-sky-500 text-white rounded text-[10px] font-bold shadow-xs cursor-pointer opacity-90 hover:opacity-100"
                              >
                                Edit
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Indicator (< 768px only) */}
          <div className="md:hidden flex items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-100">
              Menu
            </span>
          </div>

          {/* Right Actions: Edit Menus Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isEditMode && (
              <button
                id="edit-nav-structure-btn"
                onClick={onOpenMenuEditor}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Edit Menu Hierarchy</span>
                <span className="sm:hidden">Edit</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#005a96] hover:bg-[#004b7e] text-white focus:outline-none cursor-pointer transition-colors shadow-xs"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (Deep Ergonomics for Handhelds) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#005084] border-t border-[#003d66] px-4 py-4 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[82vh] overflow-y-auto"
        >
          {/* Drawer Search Filter */}
          <div className="relative">
            <Search className="w-4 h-4 text-sky-300 absolute left-3 top-2.5" />
            <input
              type="text"
              value={drawerSearch}
              onChange={(e) => setDrawerSearch(e.target.value)}
              placeholder="Search menus, laws, SDGs..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#003d66] text-white text-xs placeholder-sky-300/70 border border-sky-500/30 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Accordion List */}
          <div className="space-y-1 divide-y divide-sky-600/30 pt-1">
            {filteredNav.map((item) => {
              const isExpanded = mobileExpandedMenu === item.id || drawerSearch.trim() !== '';
              const hasChildren = item.hasDropdown && item.submenus && item.submenus.length > 0;
              const isActive = activePage === item.href || (item.submenus && item.submenus.some(s => s.href === activePage));

              return (
                <div key={item.id} className="pt-2 pb-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        if (!hasChildren) {
                          onNavigate(item.href);
                          setMobileMenuOpen(false);
                        } else {
                          setMobileExpandedMenu(isExpanded ? null : item.id);
                        }
                      }}
                      className={`w-full text-left py-2 px-2 text-xs sm:text-sm font-bold uppercase tracking-wide flex items-center justify-between rounded-md cursor-pointer transition-colors ${
                        isActive ? 'text-sky-300 font-black' : 'text-white hover:text-sky-200'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.title}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>}
                      </span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-sky-300' : 'text-sky-300'
                          }`}
                        />
                      )}
                    </button>
                  </div>

                  {/* Mobile Submenu Accordion */}
                  {hasChildren && isExpanded && (
                    <div className="pl-2 pr-1 py-1.5 space-y-1 bg-[#00416d] rounded-lg my-1">
                      {item.submenus!.map((sub) => {
                        const isSubActive = activePage === sub.href;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              onNavigate(sub.href || '#');
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full text-left py-2 px-2.5 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                              isSubActive
                                ? 'bg-sky-500 text-white font-bold'
                                : 'text-sky-100 hover:text-white hover:bg-[#005a96]'
                            }`}
                          >
                            <div className="flex-1 pr-2">
                              <div className="font-semibold">{sub.title}</div>
                              {sub.description && (
                                <div className={`text-[11px] line-clamp-1 ${isSubActive ? 'text-sky-100' : 'text-sky-200/70'}`}>
                                  {sub.description}
                                </div>
                              )}
                            </div>
                            {sub.badge && (
                              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSubActive ? 'bg-slate-900 text-white' : 'bg-sky-800 text-sky-100'}`}>
                                {sub.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Edit Mode Button in Mobile Drawer */}
          {isEditMode && (
            <div className="pt-3 border-t border-sky-500/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenuEditor();
                }}
                className="w-full py-2.5 px-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Edit2 className="w-4 h-4" />
                <span>Configure Menus & Submenus Hierarchy</span>
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

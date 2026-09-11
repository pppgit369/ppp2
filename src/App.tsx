import React, { useState, useEffect } from 'react';
import { 
  DEFAULT_NAVIGATION, 
  DEFAULT_HERO, 
  DEFAULT_HEADLINES, 
  DEFAULT_SDGS 
} from './data/defaultData';
import { 
  MenuItem, 
  HeroContent, 
  HeadlineItem, 
  SDGItem, 
  EditableBox,
  SubMenuItem 
} from './types';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeadlinesTicker } from './components/HeadlinesTicker';
import { HomeInstitutionalText } from './components/HomeInstitutionalText';
import { ContentPages } from './components/ContentPages';
import { Footer } from './components/Footer';
import { SmartBoxEditorModal } from './components/SmartBoxEditorModal';
import { WordPressAdminBar } from './components/WordPressAdminBar';
import { WordPressManagerModal } from './components/WordPressManagerModal';
import { MasterLogoModal } from './components/MasterLogoModal';
import { SUBMENU_PAGES_CONTENT, SubmenuChapter } from './data/pagesContent';
import { OfflineIndicator } from './components/OfflineIndicator';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FastTitleEditorModal } from './components/FastTitleEditorModal';
import { FastImageReplacerModal } from './components/FastImageReplacerModal';
import { BottomCountersBanner } from './components/BottomCountersBanner';
import { SmartMessengerModal } from './components/SmartMessengerModal';
import { SmartMessengerFloatingButton } from './components/SmartMessengerFloatingButton';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { LanguageProvider } from './context/LanguageContext';
import { Edit3, Sparkles, Check } from 'lucide-react';

const STORAGE_KEY_NAV = 'ppp_union_nav_v1';
const STORAGE_KEY_HERO = 'ppp_union_hero_v1';
const STORAGE_KEY_HEADLINES = 'ppp_union_headlines_v1';
const STORAGE_KEY_SDGS = 'ppp_union_sdgs_v1';
const STORAGE_KEY_PAGES = 'ppp_union_pages_v4';

export function safeSetStorageItem(key: string, value: any): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`[Storage Warning] Failed writing to ${key}:`, err);
    return false;
  }
}

export default function App() {
  return (
    <AdminProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </AdminProvider>
  );
}

function MainAppContent() {
  const { isAdmin, setIsAdmin } = useAdmin();
  // Navigation State
  const [navigation, setNavigation] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_NAV);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Remove MEMBERS LOGIN from top-level navigation so the bar remains clean & uncluttered
          const filtered = parsed.filter(item => item.id !== 'members-login');

          const updated = filtered.map(item => {
            if (item.id === 'about-union') {
              return {
                ...item,
                title: 'ABOUT UNION',
                href: '#about-union',
                hasDropdown: true,
                submenus: [
                  {
                    id: 'union-policy',
                    title: 'PPP Union Policy',
                    description: 'Official statutory constitution, covenants, and membership policy of the PPP Union.',
                    href: '#union-policy'
                  },
                  {
                    id: 'guidelines',
                    title: 'PPP Guideline',
                    description: 'Operational guidelines for cross-border infrastructure investments.',
                    href: '#guidelines'
                  }
                ]
              };
            }
            if (item.id === 'ppp-programs') {
              const hasProcess = (item.submenus || []).some(s => s.id === 'ppp-process');
              const processSubmenu = {
                id: 'ppp-process',
                title: 'PPP PROCESS',
                description: 'Step-by-step administration, documentation, funding, and execution according to the selected model.',
                badge: 'Process',
                href: '#ppp-process'
              };
              return {
                ...item,
                submenus: hasProcess
                  ? (item.submenus || []).map(s => s.id === 'ppp-process' ? processSubmenu : s)
                  : [processSubmenu, ...(item.submenus || [])]
              };
            }
            if (item.id === 'ppp-facilitators') {
              return {
                ...item,
                title: 'PPP FACILITATORS',
                href: '#facilitators',
                hasDropdown: false,
                submenus: []
              };
            }
            if (item.id === 'contact-us' || item.id === 'contact') {
              return {
                ...item,
                id: 'contact-us',
                title: 'CONTACT US',
                href: '#contact',
                hasDropdown: true,
                submenus: [
                  {
                    id: 'members-login',
                    title: 'MEMBER LOGIN',
                    description: 'Accredited delegate & member portal, VIP/Golden/Green tiers, and credentials.',
                    badge: 'Portal',
                    href: '#members-login'
                  },
                  {
                    id: 'contact-inquiry',
                    title: 'Contact Information & Secretariat',
                    description: 'Official communication channels, international desks, and delegation inquiries.',
                    href: '#contact'
                  }
                ]
              };
            }
            return item;
          });

          // Ensure CONTACT US item with MEMBER LOGIN sub-menu is present
          if (!updated.some(item => item.id === 'contact-us' || item.id === 'contact')) {
            updated.push({
              id: 'contact-us',
              title: 'CONTACT US',
              href: '#contact',
              hasDropdown: true,
              submenus: [
                {
                  id: 'members-login',
                  title: 'MEMBER LOGIN',
                  description: 'Accredited delegate & member portal, VIP/Golden/Green tiers, and credentials.',
                  badge: 'Portal',
                  href: '#members-login'
                },
                {
                  id: 'contact-inquiry',
                  title: 'Contact Information & Secretariat',
                  description: 'Official communication channels, international desks, and delegation inquiries.',
                  href: '#contact'
                }
              ]
            });
          }

          localStorage.setItem(STORAGE_KEY_NAV, JSON.stringify(updated));
          return updated;
        }
      } catch (e) { console.error(e); }
    }
    return DEFAULT_NAVIGATION;
  });

  // Hero Section State
  const [hero, setHero] = useState<HeroContent>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_HERO);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.secondaryCtaText === 'Become a Member') {
          parsed.secondaryCtaText = 'About the Union';
          parsed.secondaryCtaLink = '#about-union';
        }
        if (!parsed.imageUrl || parsed.imageUrl.includes('unsplash') || parsed.imageUrl.includes('photo-1486406146926') || parsed.imageUrl.includes('un_general_assembly') || parsed.imageUrl.includes('photo-1541872703-74c5e44368f9')) {
          parsed.imageUrl = '/un-sdg-summit.jpg';
          localStorage.setItem(STORAGE_KEY_HERO, JSON.stringify(parsed));
        }
        return parsed;
      } catch (e) { console.error(e); }
    }
    return DEFAULT_HERO;
  });

  // Headlines State
  const [headlines, setHeadlines] = useState<HeadlineItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_HEADLINES);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_HEADLINES;
  });

  // 17 SDGs State
  const [sdgs, setSdgs] = useState<SDGItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SDGS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 17 && parsed[0].subGoals && parsed[0].subGoals.length > 0) {
          return parsed;
        }
      } catch (e) { console.error(e); }
    }
    return DEFAULT_SDGS;
  });

  // WordPress Pages & Posts Content State (Pre-populated with all extracted chapters)
  const [pagesContent, setPagesContent] = useState<Record<string, SubmenuChapter>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PAGES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Clean out any stale/old plain abbreviations block or instruction notices from cached 'faq' or other pages
        if (parsed.faq && parsed.faq.contentParagraphs) {
          const hasStaleContent = parsed.faq.contentParagraphs.some(
            (p: string) =>
              p.includes('ADP Platform:') ||
              p.includes('• ADP') ||
              p.includes('• **ADP') ||
              p.includes('ADSCR: Annual Debt') ||
              p.includes('Advance Loss of Profit') ||
              p.includes('Offline Synchronization Notice') ||
              p.includes('Smart Messenger') ||
              p.includes('permanently stored within the local cache') ||
              p.includes('EXECUTIVE SUBJECT SUMMARY')
          );
          if (hasStaleContent) {
            parsed.faq = SUBMENU_PAGES_CONTENT.faq;
            try {
              localStorage.setItem(STORAGE_KEY_PAGES, JSON.stringify(parsed));
            } catch (err) { /* ignore */ }
          }
        }
        // Ensure official content exists without overwriting user modifications
        if (!parsed['ppp-risks']) {
          parsed['ppp-risks'] = SUBMENU_PAGES_CONTENT['ppp-risks'];
        }

        // Ensure curriculum content for 'sdgs-courses', 'sdgs', and 'ppp-model'
        ['sdgs-courses', 'sdgs', 'ppp-model'].forEach((key) => {
          if (!parsed[key]) {
            parsed[key] = SUBMENU_PAGES_CONTENT[key];
          } else {
            // If the image is still pointing to the old Unsplash classroom photo, upgrade it to the official executive classroom
            if (!parsed[key].imageUrl || parsed[key].imageUrl.includes('photo-1524178232363-1fb2b075b655')) {
              parsed[key].imageUrl = '/ppp_sdgs_courses_class.jpg';
            }
          }
        });

        // Ensure fresh official content for 'union-policy' from pppunion.org/union-policy/
        if (!parsed['union-policy']) {
          parsed['union-policy'] = SUBMENU_PAGES_CONTENT['union-policy'];
        }
        return { ...SUBMENU_PAGES_CONTENT, ...parsed };
      } catch (e) { console.error(e); }
    }
    return SUBMENU_PAGES_CONTENT;
  });

  // WordPress Post & Page Editor Modal State
  const [isWpManagerOpen, setIsWpManagerOpen] = useState<boolean>(false);
  const [wpInitialEditingId, setWpInitialEditingId] = useState<string | null>(null);
  const [wpInitialMode, setWpInitialMode] = useState<'list' | 'editor' | 'paste-studio' | 'launch'>('paste-studio');

  // Master Logo Modal State
  const [isLogoModalOpen, setIsLogoModalOpen] = useState<boolean>(false);

  // Active View & Search
  const [activePage, setActivePage] = useState<string>('#home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  // Smart Box Edit Mode State
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  // Strict admin boundary: Edit mode is ONLY effective when user is authenticated admin
  const effectiveEditMode = isAdmin && isEditMode;
  const [currentEditingBox, setCurrentEditingBox] = useState<EditableBox | null>(null);
  const [isMenuEditorOpen, setIsMenuEditorOpen] = useState<boolean>(false);
  const [showSaveToast, setShowSaveToast] = useState<boolean>(false);
  // Smart Messenger Modal State
  const [isSmartMessengerOpen, setIsSmartMessengerOpen] = useState<boolean>(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      if (hash === '#smart-messenger' || hash === '#messenger') {
        setIsSmartMessengerOpen(true);
        return;
      }
      setActivePage(hash);
    };

    if (window.location.hash) {
      if (window.location.hash === '#smart-messenger' || window.location.hash === '#messenger') {
        setIsSmartMessengerOpen(true);
      } else {
        setActivePage(window.location.hash);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (href: string) => {
    if (href === '#smart-messenger' || href === '#messenger') {
      setIsSmartMessengerOpen(true);
      return;
    }
    setActivePage(href);
    window.location.hash = href;
    // Smooth scroll to top when changing section
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      try { window.scrollTo(0, 0); } catch { /* ignore */ }
    }
  };

  // Save Handlers with localStorage persistence
  const handleSaveBox = (updatedBox: EditableBox) => {
    if (updatedBox.id === 'hero-text-box') {
      const updatedHero: HeroContent = {
        ...hero,
        headlinePrefix: updatedBox.meta?.headlinePrefix ?? hero.headlinePrefix,
        headlineHighlight: updatedBox.meta?.headlineHighlight ?? hero.headlineHighlight,
        description: updatedBox.content,
        badge: updatedBox.badge || hero.badge,
        primaryCtaText: updatedBox.meta?.primaryCtaText || hero.primaryCtaText,
        primaryCtaLink: updatedBox.meta?.primaryCtaLink || hero.primaryCtaLink,
        secondaryCtaText: updatedBox.meta?.secondaryCtaText || hero.secondaryCtaText,
        secondaryCtaLink: updatedBox.meta?.secondaryCtaLink || hero.secondaryCtaLink,
      };
      setHero(updatedHero);
      localStorage.setItem(STORAGE_KEY_HERO, JSON.stringify(updatedHero));
    } else if (updatedBox.id === 'hero-image-box') {
      const updatedHero: HeroContent = {
        ...hero,
        imageCardDate: updatedBox.title,
        imageCardText: updatedBox.content,
      };
      setHero(updatedHero);
      localStorage.setItem(STORAGE_KEY_HERO, JSON.stringify(updatedHero));
    } else if (updatedBox.type === 'sdg') {
      const sdgNum = updatedBox.meta?.sdgNumber;
      if (sdgNum) {
        const updated = sdgs.map(s => s.number === sdgNum ? {
          ...s,
          title: updatedBox.title,
          subtitle: updatedBox.subtitle || s.subtitle,
          description: updatedBox.content,
          pppApplication: updatedBox.meta?.pppApplication || s.pppApplication
        } : s);
        setSdgs(updated);
        localStorage.setItem(STORAGE_KEY_SDGS, JSON.stringify(updated));
      }
    }
    triggerSaveToast();
  };

  const handleSaveNavigation = (updatedNav: MenuItem[]) => {
    setNavigation(updatedNav);
    localStorage.setItem(STORAGE_KEY_NAV, JSON.stringify(updatedNav));
    triggerSaveToast();
  };

  const handleSaveHeadlines = (updatedHeadlines: HeadlineItem[]) => {
    setHeadlines(updatedHeadlines);
    localStorage.setItem(STORAGE_KEY_HEADLINES, JSON.stringify(updatedHeadlines));
    triggerSaveToast();
  };

  const handleSaveSDG = (updatedSDG: SDGItem) => {
    const updated = sdgs.map(s => s.number === updatedSDG.number ? updatedSDG : s);
    setSdgs(updated);
    localStorage.setItem(STORAGE_KEY_SDGS, JSON.stringify(updated));
    triggerSaveToast();
  };

  const handleResetAllDefaults = () => {
    localStorage.removeItem(STORAGE_KEY_NAV);
    localStorage.removeItem(STORAGE_KEY_HERO);
    localStorage.removeItem(STORAGE_KEY_HEADLINES);
    localStorage.removeItem(STORAGE_KEY_SDGS);
    localStorage.removeItem(STORAGE_KEY_PAGES);
    setNavigation(DEFAULT_NAVIGATION);
    setHero(DEFAULT_HERO);
    setHeadlines(DEFAULT_HEADLINES);
    setSdgs(DEFAULT_SDGS);
    setPagesContent(SUBMENU_PAGES_CONTENT);
    triggerSaveToast();
  };

  // WordPress Page / Post Saving & Management Handlers
  const handleSavePage = (updatedChapter: SubmenuChapter) => {
    const updated = {
      ...pagesContent,
      [updatedChapter.id]: updatedChapter
    };
    setPagesContent(updated);
    safeSetStorageItem(STORAGE_KEY_PAGES, updated);
    triggerSaveToast();
  };

  const handleDeletePage = (id: string) => {
    const copy = { ...pagesContent };
    delete copy[id];
    setPagesContent(copy);
    safeSetStorageItem(STORAGE_KEY_PAGES, copy);
    triggerSaveToast();
  };

  const handleResetDefaultPages = () => {
    localStorage.removeItem(STORAGE_KEY_PAGES);
    setPagesContent(SUBMENU_PAGES_CONTENT);
    triggerSaveToast();
  };

  const handleOpenWpEditor = (
    chapterId?: string | null, 
    mode: 'list' | 'editor' | 'paste-studio' | 'launch' = 'paste-studio'
  ) => {
    // If chapterId is not explicitly provided, and the user is on a specific sub-menu or page, use that current page's clean ID
    const effectiveId = chapterId || (activePage && activePage !== '#home' && activePage !== '#' ? activePage.replace(/^#/, '') : null);
    setWpInitialEditingId(effectiveId);
    setWpInitialMode(mode);
    setIsWpManagerOpen(true);
  };

  const triggerSaveToast = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 2500);
  };

  // Direct fast update handlers for Admin double-click edits
  const handleUpdateHero = (updated: Partial<HeroContent>) => {
    setHero((prev) => {
      const next = { ...prev, ...updated };
      safeSetStorageItem(STORAGE_KEY_HERO, next);
      return next;
    });
    triggerSaveToast();
  };

  const handleUpdateChapter = (chapterId: string, updated: Partial<SubmenuChapter>) => {
    setPagesContent((prev) => {
      const fallback: SubmenuChapter = {
        id: chapterId,
        menuId: 'ppp-sdgs',
        menuTitle: 'PPP & 17 SDGS',
        title: chapterId,
        tagline: '',
        summary: '',
        contentParagraphs: []
      };
      const existing: SubmenuChapter = prev[chapterId] || SUBMENU_PAGES_CONTENT[chapterId] || fallback;
      const next: Record<string, SubmenuChapter> = {
        ...prev,
        [chapterId]: { ...existing, ...updated }
      };
      safeSetStorageItem(STORAGE_KEY_PAGES, next);
      return next;
    });
    triggerSaveToast();
  };

  const handleUpdateHeadline = (id: string, text: string) => {
    setHeadlines((prev) => {
      const next = prev.map((h) => h.id === id ? { ...h, text } : h);
      safeSetStorageItem(STORAGE_KEY_HEADLINES, next);
      return next;
    });
    triggerSaveToast();
  };

  // Open editor for a specific box
  const handleOpenBoxEditor = (box: EditableBox) => {
    setCurrentEditingBox(box);
  };

  // Open editor for a specific sub-menu item
  const handleEditSubmenu = (menuItem: MenuItem, subItem?: SubMenuItem) => {
    if (subItem) {
      setCurrentEditingBox({
        id: `submenu-${subItem.id}`,
        type: 'menu',
        title: subItem.title,
        subtitle: `Parent: ${menuItem.title}`,
        content: subItem.description || '',
        badge: subItem.badge,
        link: subItem.href,
      });
    } else {
      setIsMenuEditorOpen(true);
    }
  };

  // Strictly restrict home view to home anchor, root, or empty hash
  const isHomeView = activePage === '#home' || activePage === '' || activePage === '#';

  return (
    <div id="ppp-union-application" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0072bc] selection:text-white pb-14 lg:pb-0">
      {/* 0. WordPress-Style Administration Utility Bar (Admin Only) */}
      <WordPressAdminBar
        activePage={activePage}
        onOpenWpManager={handleOpenWpEditor}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        isEditMode={effectiveEditMode}
      />

      {/* Top Bar: Date, Language, Members Login, WP Dashboard, and Smart Edit Switch */}
      <TopBar
        isEditMode={effectiveEditMode}
        onToggleEditMode={() => setIsEditMode(!isEditMode)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        onOpenWpDashboard={() => handleOpenWpEditor(null, 'list')}
        onOpenLogoModal={() => setIsLogoModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Header: PPP Union Replica Logo & Live Search Input */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigate={handleNavigate}
        navigation={navigation}
        sdgs={sdgs}
      />

      {/* Primary Navigation Bar: Deep UN Blue with dynamic dropdowns & hover states */}
      <Navbar
        navigation={navigation}
        activePage={activePage}
        onNavigate={handleNavigate}
        isEditMode={effectiveEditMode}
        onOpenMenuEditor={() => setIsMenuEditorOpen(true)}
        onEditSubmenu={handleEditSubmenu}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isHomeView ? (
          <>
            {/* Front Hero Banner Replica from image.png */}
            <HeroSection
              hero={hero}
              isEditMode={effectiveEditMode}
              onEditBox={handleOpenBoxEditor}
              onNavigate={handleNavigate}
              onUpdateHero={handleUpdateHero}
              onOpenSmartMessenger={() => setIsSmartMessengerOpen(true)}
            />

            {/* Headlines Ticker Bar */}
            <HeadlinesTicker
              headlines={headlines}
              isEditMode={effectiveEditMode}
              onEditHeadlines={() => setIsMenuEditorOpen(true)}
              onNavigate={handleNavigate}
              onUpdateHeadline={handleUpdateHeadline}
            />

            {/* Official Home Institutional Text (Mandate, ILO 87 / EU Charter Art 12, Non-Financial Nature, Grant vs Finance) */}
            <HomeInstitutionalText
              isEditMode={effectiveEditMode}
              onEditBox={handleOpenBoxEditor}
              onNavigate={handleNavigate}
              onOpenWpManager={(id, mode) => handleOpenWpEditor(id, mode || 'quick-posts')}
            />
          </>
        ) : (
          <ContentPages
            activePage={activePage}
            isEditMode={effectiveEditMode}
            onEditBox={handleOpenBoxEditor}
            onNavigate={handleNavigate}
            pagesContent={pagesContent}
            onOpenWpEditor={(chapterId) => handleOpenWpEditor(chapterId, 'editor')}
            onUpdateChapter={handleUpdateChapter}
            sdgs={sdgs}
            onEditSDG={(sdg) => {
              handleOpenBoxEditor({
                id: `sdg-box-${sdg.number}`,
                type: 'sdg',
                title: `SDG ${sdg.number}: ${sdg.title}`,
                subtitle: sdg.subtitle,
                content: sdg.description,
                badge: `Goal ${sdg.number}`,
                meta: {
                  sdgNumber: sdg.number,
                  pppApplication: sdg.pppApplication
                }
              });
            }}
            onOpenMessenger={() => setIsSmartMessengerOpen(true)}
          />
        )}
      </main>

      {/* Global Bottom Member, Visitor, and Category Counters Banner */}
      <BottomCountersBanner
        onOpenMessenger={() => setIsSmartMessengerOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Footer */}
      <Footer
        navigation={navigation}
        onNavigate={handleNavigate}
        onOpenMessenger={() => setIsSmartMessengerOpen(true)}
      />

      {/* Mobile & Tablet Bottom Navigation Bar (hidden on desktop) */}
      <MobileBottomNav
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenSearch={() => {
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } catch {
            try { window.scrollTo(0, 0); } catch { /* ignore */ }
          }
          const searchInput = document.getElementById('site-search-input') as HTMLInputElement | null;
          searchInput?.focus();
        }}
      />

      {/* Offline Status Connectivity Banner */}
      <OfflineIndicator />

      {/* Floating Smart Edit Status Pill (strictly only when Admin has enabled Edit Mode) */}
      {effectiveEditMode && (
        <div 
          id="floating-edit-mode-pill"
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border-2 border-slate-900 animate-in slide-in-from-bottom duration-300"
        >
          <Sparkles className="w-4 h-4 animate-spin" />
          <span className="text-xs">Smart Edit Active</span>
          <button
            onClick={() => handleOpenWpEditor(null, 'list')}
            className="ml-2 px-2.5 py-1 bg-[#0073aa] text-white rounded-full text-[11px] hover:bg-[#005a87] cursor-pointer font-bold shadow-xs"
          >
            WP Manager
          </button>
          <button
            onClick={() => setIsMenuEditorOpen(true)}
            className="px-2.5 py-1 bg-slate-900 text-white rounded-full text-[11px] hover:bg-slate-800 cursor-pointer"
          >
            Menu Tree
          </button>
        </div>
      )}

      {/* Success Notification Toast */}
      {showSaveToast && (
        <div 
          id="save-success-toast"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-bold border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>Content successfully updated and saved locally.</span>
        </div>
      )}

      {/* Smart Box Editor Modal (Only for Admin) */}
      {((effectiveEditMode && currentEditingBox) || (isAdmin && isMenuEditorOpen)) && (
        <SmartBoxEditorModal
          box={currentEditingBox}
          navigation={navigation}
          headlines={headlines}
          sdgs={sdgs}
          activeTab={isMenuEditorOpen ? 'menus' : 'box'}
          onClose={() => {
            setCurrentEditingBox(null);
            setIsMenuEditorOpen(false);
          }}
          onSaveBox={handleSaveBox}
          onSaveNavigation={handleSaveNavigation}
          onSaveHeadlines={handleSaveHeadlines}
          onSaveSDG={handleSaveSDG}
          onResetAllDefaults={handleResetAllDefaults}
        />
      )}

      {/* WordPress-Like Post and Page Content Creator & Editor Modal (Admin Only) */}
      {isWpManagerOpen && isAdmin && (
        <WordPressManagerModal
          isOpen={isWpManagerOpen}
          onClose={() => setIsWpManagerOpen(false)}
          pagesContent={pagesContent}
          onSavePage={handleSavePage}
          onDeletePage={handleDeletePage}
          onResetDefaultPages={handleResetDefaultPages}
          navigation={navigation}
          initialEditingId={wpInitialEditingId}
          initialMode={wpInitialMode}
          onNavigateToPage={(id) => {
            handleNavigate(id.startsWith('#') ? id : `#${id}`);
          }}
        />
      )}

      {/* Official Master Vector SVG Logo & App Logo Replacer Modal */}
      <MasterLogoModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />

      {/* Admin Double-Click Fast Modals (Only active and triggerable for Admin) */}
      <FastTitleEditorModal />
      <FastImageReplacerModal />

      {/* Floating Messenger Quick Launcher */}
      <SmartMessengerFloatingButton
        onOpen={() => setIsSmartMessengerOpen(true)}
        isLoggedIn={isAdmin}
      />

      {/* PPP Union Smart Messenger Modal (Particle Chat Room) */}
      <SmartMessengerModal
        isOpen={isSmartMessengerOpen}
        onClose={() => setIsSmartMessengerOpen(false)}
        isLoggedIn={isAdmin}
        memberAccount={isAdmin ? 'Secretariat Admin' : null}
        onOpenLogin={() => setIsAdmin(true)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

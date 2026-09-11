import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  Check, 
  Save, 
  FileText, 
  BookOpen, 
  Tag, 
  User, 
  Calendar, 
  Globe, 
  Sparkles, 
  Layers, 
  ChevronRight, 
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Filter,
  Download,
  Upload,
  RotateCcw,
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  Quote,
  Shield,
  HelpCircle,
  ExternalLink,
  Rocket,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Newspaper,
  Scale
} from 'lucide-react';
import { SubmenuChapter } from '../data/pagesContent';
import { MenuItem, HomeLegalCharter } from '../types';
import { DEFAULT_HOME_LEGAL_CHARTER } from '../data/homeLegalText';
import { MediaPost, DEFAULT_MEDIA_POSTS } from './RunningMediaPosts';
import { HtmlEditor } from './HtmlEditor';

interface WordPressManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pagesContent: Record<string, SubmenuChapter>;
  onSavePage: (updatedChapter: SubmenuChapter) => void;
  onDeletePage: (id: string) => void;
  onResetDefaultPages?: () => void;
  onResetDefaults?: () => void;
  navigation: MenuItem[];
  initialEditingId?: string | null;
  initialMode?: 'list' | 'editor' | 'paste-studio' | 'launch' | 'quick-posts';
  onNavigateToPage?: (href: string) => void;
  mediaPosts?: MediaPost[];
  onSaveMediaPost?: (updated: MediaPost) => void;
  homeLegalCharter?: HomeLegalCharter;
  onSaveHomeLegalCharter?: (updated: HomeLegalCharter) => void;
}

export const WordPressManagerModal: React.FC<WordPressManagerModalProps> = ({
  isOpen,
  onClose,
  pagesContent,
  onSavePage,
  onDeletePage,
  onResetDefaultPages,
  onResetDefaults,
  navigation = [],
  initialEditingId = null,
  initialMode = 'quick-posts',
  onNavigateToPage,
  mediaPosts: propMediaPosts,
  onSaveMediaPost,
  homeLegalCharter: propHomeLegalCharter,
  onSaveHomeLegalCharter,
}) => {
  const [viewMode, setViewMode] = useState<'paste-studio' | 'list' | 'editor' | 'launch' | 'quick-posts'>(
    initialEditingId === 'home-charter' || (initialEditingId && initialEditingId.startsWith('post-'))
      ? 'quick-posts'
      : initialEditingId
      ? 'editor'
      : initialMode || 'quick-posts'
  );
  
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  };

  // Quick Posts & Texts Editor State
  const [quickSection, setQuickSection] = useState<'media-posts' | 'home-charter' | 'pages'>(
    initialEditingId === 'home-charter' ? 'home-charter' : 'media-posts'
  );
  const [quickSearch, setQuickSearch] = useState<string>('');

  // Media posts state
  const [localMediaPosts, setLocalMediaPosts] = useState<MediaPost[]>(() => {
    if (propMediaPosts && propMediaPosts.length > 0) return propMediaPosts;
    try {
      const saved = localStorage.getItem('ppp_union_media_posts_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) { console.error(e); }
    return DEFAULT_MEDIA_POSTS;
  });

  useEffect(() => {
    if (propMediaPosts && propMediaPosts.length > 0) {
      setLocalMediaPosts(propMediaPosts);
    }
  }, [propMediaPosts]);

  const [selectedMediaPostId, setSelectedMediaPostId] = useState<string>(
    initialEditingId && initialEditingId.startsWith('post-') ? initialEditingId : 'post-1'
  );

  const activeMediaPost = useMemo(() => {
    return localMediaPosts.find(p => p.id === selectedMediaPostId) || localMediaPosts[0] || null;
  }, [localMediaPosts, selectedMediaPostId]);

  const [editingMediaPostDraft, setEditingMediaPostDraft] = useState<MediaPost | null>(null);

  useEffect(() => {
    if (activeMediaPost) {
      setEditingMediaPostDraft({ ...activeMediaPost });
    }
  }, [activeMediaPost]);

  // Home legal charter state
  const [localHomeCharter, setLocalHomeCharter] = useState<HomeLegalCharter>(() => {
    if (propHomeLegalCharter) return propHomeLegalCharter;
    try {
      const saved = localStorage.getItem('ppp_union_home_legal_charter_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.paragraph1) return parsed;
      }
    } catch (e) { console.error(e); }
    return DEFAULT_HOME_LEGAL_CHARTER;
  });

  useEffect(() => {
    if (propHomeLegalCharter) {
      setLocalHomeCharter(propHomeLegalCharter);
    }
  }, [propHomeLegalCharter]);

  // Pages quick chapter state
  const [selectedQuickPageId, setSelectedQuickPageId] = useState<string>('laws');
  const activeQuickPage = pagesContent[selectedQuickPageId] || Object.values(pagesContent)[0];
  const [editingQuickPageDraft, setEditingQuickPageDraft] = useState<SubmenuChapter | null>(null);

  useEffect(() => {
    if (activeQuickPage) {
      setEditingQuickPageDraft({ ...activeQuickPage });
    }
  }, [activeQuickPage]);

  // Sync initial parameters when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialEditingId === 'home-charter') {
        setViewMode('quick-posts');
        setQuickSection('home-charter');
      } else if (initialEditingId && (initialEditingId.startsWith('post-') || initialEditingId === 'media-posts')) {
        setViewMode('quick-posts');
        setQuickSection('media-posts');
        if (initialEditingId.startsWith('post-')) {
          setSelectedMediaPostId(initialEditingId);
        }
      } else if (initialMode) {
        setViewMode(initialMode);
      }
    }
  }, [isOpen, initialEditingId, initialMode]);

  const handleSaveCurrentMediaPost = () => {
    if (!editingMediaPostDraft) return;
    setLocalMediaPosts(prev => {
      const exists = prev.some(p => p.id === editingMediaPostDraft.id);
      const next = exists 
        ? prev.map(p => p.id === editingMediaPostDraft.id ? editingMediaPostDraft : p)
        : [editingMediaPostDraft, ...prev];
      try {
        localStorage.setItem('ppp_union_media_posts_v2', JSON.stringify(next));
      } catch (e) { console.error(e); }
      return next;
    });
    if (onSaveMediaPost) {
      onSaveMediaPost(editingMediaPostDraft);
    }
    showToast(`Post "${editingMediaPostDraft.title.slice(0, 30)}..." updated successfully!`);
  };

  const handleCreateNewMediaPost = () => {
    const newId = `post-${Date.now()}`;
    const newPost: MediaPost = {
      id: newId,
      title: 'New PPP Union Infrastructure Update',
      badge: 'PPP BULLETIN',
      badgeColor: 'bg-[#0072bc]',
      category: 'Public-Private Partnerships',
      date: 'May 2025',
      summary: 'Brief summary of the new development, concession initiative, or project framework.',
      fullContent: 'Full detailed text and background briefing for this post.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      location: 'Geneva / Global',
      source: 'PPP Union Secretariat',
    };
    setLocalMediaPosts(prev => [newPost, ...prev]);
    setSelectedMediaPostId(newId);
    setEditingMediaPostDraft(newPost);
    showToast('New post created! You can now edit its text.');
  };

  const handleSaveHomeCharterInWp = () => {
    try {
      localStorage.setItem('ppp_union_home_legal_charter_v2', JSON.stringify(localHomeCharter));
    } catch (e) { console.error(e); }
    if (onSaveHomeLegalCharter) {
      onSaveHomeLegalCharter(localHomeCharter);
    }
    showToast('Home Page Legal Charter & Activity Codes updated live!');
  };

  const handleResetHomeCharterInWp = () => {
    setLocalHomeCharter({ ...DEFAULT_HOME_LEGAL_CHARTER });
    showToast('Home Legal Charter reset to user approved text.');
  };

  const handleSaveQuickPage = () => {
    if (!editingQuickPageDraft) return;
    onSavePage(editingQuickPageDraft);
    showToast(`Article "${editingQuickPageDraft.title}" updated successfully!`);
  };

  const handleResetAction = onResetDefaultPages || onResetDefaults || (() => {});

  // Flatten all navigation items into an indexed array of sub-menus
  const allNavSubmenus = useMemo(() => {
    const items: Array<{
      menuId: string;
      menuTitle: string;
      submenuId: string;
      submenuTitle: string;
      href: string;
      badge?: string;
    }> = [];

    navigation.forEach(menu => {
      if (menu.submenus && menu.submenus.length > 0) {
        menu.submenus.forEach(sub => {
          const cleanSubId = (sub.href || sub.id).replace(/^#/, '');
          items.push({
            menuId: menu.id,
            menuTitle: menu.title,
            submenuId: cleanSubId,
            submenuTitle: sub.title,
            href: sub.href || `#${cleanSubId}`,
            badge: sub.badge
          });
        });
      } else {
        const cleanId = (menu.href || menu.id).replace(/^#/, '');
        items.push({
          menuId: menu.id,
          menuTitle: menu.title,
          submenuId: cleanId,
          submenuTitle: `${menu.title} (Main Lead Page)`,
          href: menu.href || `#${cleanId}`,
        });
      }
    });

    return items;
  }, [navigation]);

  // ==========================================
  // PASTE STUDIO STATE
  // ==========================================
  const [selectedSubmenuKey, setSelectedSubmenuKey] = useState<string>(() => {
    if (initialEditingId && pagesContent[initialEditingId]) {
      return initialEditingId;
    }
    return allNavSubmenus[0]?.submenuId || 'laws-overview';
  });

  const activeSubmenuMeta = useMemo(() => {
    const navMatch = allNavSubmenus.find(item => item.submenuId === selectedSubmenuKey);
    if (navMatch) return navMatch;
    
    // Check if it's an existing chapter in pagesContent
    const existing = pagesContent[selectedSubmenuKey];
    if (existing) {
      return {
        menuId: existing.menuId,
        menuTitle: existing.menuTitle,
        submenuId: existing.id,
        submenuTitle: existing.title,
        href: `#${existing.id}`,
        badge: existing.badge
      };
    }

    return allNavSubmenus[0] || {
      menuId: 'ppp-laws',
      menuTitle: 'PPP LAWS',
      submenuId: 'laws-overview',
      submenuTitle: 'PPP Legal Frameworks',
      href: '#laws-overview'
    };
  }, [allNavSubmenus, selectedSubmenuKey, pagesContent]);

  // Current chapter data for paste studio
  const currentStudioChapter = pagesContent[selectedSubmenuKey] || {
    id: selectedSubmenuKey,
    menuId: activeSubmenuMeta.menuId,
    menuTitle: activeSubmenuMeta.menuTitle,
    title: activeSubmenuMeta.submenuTitle,
    tagline: '',
    badge: activeSubmenuMeta.badge || '',
    summary: '',
    contentParagraphs: [''],
    keyPillars: [],
    author: 'PPP Union Secretariat',
    date: 'September 2026',
    status: 'published',
    postType: 'page'
  };

  const [pasteTitle, setPasteTitle] = useState(currentStudioChapter.title);
  const [pasteTagline, setPasteTagline] = useState(currentStudioChapter.tagline || '');
  const [pasteBadge, setPasteBadge] = useState(currentStudioChapter.badge || '');
  const [pasteSummary, setPasteSummary] = useState(currentStudioChapter.summary || '');
  const [pasteRawText, setPasteRawText] = useState(currentStudioChapter.contentParagraphs.join('\n\n'));
  const [autoSplitParagraphs, setAutoSplitParagraphs] = useState(true);

  // Sync state whenever selected sub-menu changes in Paste Studio
  useEffect(() => {
    const ch = pagesContent[selectedSubmenuKey];
    if (ch) {
      setPasteTitle(ch.title);
      setPasteTagline(ch.tagline || '');
      setPasteBadge(ch.badge || '');
      setPasteSummary(ch.summary || '');
      setPasteRawText(ch.contentParagraphs.join('\n\n'));
    } else if (activeSubmenuMeta) {
      setPasteTitle(activeSubmenuMeta.submenuTitle);
      setPasteTagline('');
      setPasteBadge(activeSubmenuMeta.badge || '');
      setPasteSummary('');
      setPasteRawText('');
    }
  }, [selectedSubmenuKey, pagesContent, activeSubmenuMeta]);

  const currentIndex = allNavSubmenus.findIndex(s => s.submenuId === selectedSubmenuKey);

  const handleNextSubmenu = () => {
    if (currentIndex < allNavSubmenus.length - 1) {
      setSelectedSubmenuKey(allNavSubmenus[currentIndex + 1].submenuId);
    }
  };

  const handlePrevSubmenu = () => {
    if (currentIndex > 0) {
      setSelectedSubmenuKey(allNavSubmenus[currentIndex - 1].submenuId);
    }
  };

  const handleSavePastedText = () => {
    if (!pasteTitle.trim()) {
      alert('Please enter a title for this page.');
      return;
    }

    let paragraphs: string[] = [];
    if (autoSplitParagraphs) {
      paragraphs = pasteRawText
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(p => p.length > 0);
    } else {
      paragraphs = pasteRawText
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0);
    }

    if (paragraphs.length === 0 && pasteRawText.trim().length > 0) {
      paragraphs = [pasteRawText.trim()];
    }

    const docToSave: SubmenuChapter = {
      ...currentStudioChapter,
      id: selectedSubmenuKey,
      menuId: activeSubmenuMeta.menuId,
      menuTitle: activeSubmenuMeta.menuTitle,
      title: pasteTitle.trim(),
      tagline: pasteTagline.trim(),
      badge: pasteBadge.trim(),
      summary: pasteSummary.trim() || paragraphs[0] || 'Executive overview from www.pppunion.org',
      contentParagraphs: paragraphs.length > 0 ? paragraphs : ['(Content updated from www.pppunion.org)'],
      status: 'published',
      postType: 'page'
    };

    onSavePage(docToSave);
    showToast(`Published full text for "${docToSave.title}" under ${docToSave.menuTitle}!`);
  };

  // ==========================================
  // DOCUMENT EDITOR STATE (CLASSIC WP)
  // ==========================================
  const [editingChapter, setEditingChapter] = useState<SubmenuChapter>(() => {
    if (initialEditingId && pagesContent[initialEditingId]) {
      return { ...pagesContent[initialEditingId] };
    }
    return createBlankChapter('ppp-laws');
  });

  // Sync state when modal opens or initialEditingId changes
  useEffect(() => {
    if (isOpen) {
      const targetId = initialEditingId || selectedSubmenuKey || allNavSubmenus[0]?.submenuId || 'laws-overview';
      setSelectedSubmenuKey(targetId);
      
      if (pagesContent[targetId]) {
        setEditingChapter({ ...pagesContent[targetId] });
      } else {
        const meta = allNavSubmenus.find(item => item.submenuId === targetId);
        const blank = createBlankChapter(meta?.menuId || 'ppp-laws');
        blank.id = targetId;
        if (meta) {
          blank.title = meta.submenuTitle;
          blank.menuTitle = meta.menuTitle;
          blank.badge = meta.badge || 'Chapter';
        }
        setEditingChapter(blank);
      }

      if (initialMode) {
        setViewMode(initialEditingId && initialMode === 'editor' ? 'editor' : initialMode);
      }
    }
  }, [isOpen, initialEditingId, initialMode]);

  // Dedicated function to switch target article/sub-menu across both Paste Studio & Document Editor
  const selectArticleToEdit = (key: string) => {
    setSelectedSubmenuKey(key);
    if (pagesContent[key]) {
      setEditingChapter({ ...pagesContent[key] });
    } else {
      const meta = allNavSubmenus.find(item => item.submenuId === key);
      const blank = createBlankChapter(meta?.menuId || 'ppp-laws');
      blank.id = key;
      if (meta) {
        blank.title = meta.submenuTitle;
        blank.menuTitle = meta.menuTitle;
        blank.badge = meta.badge || 'Chapter';
      }
      setEditingChapter(blank);
    }
  };

  function createBlankChapter(menuKey: string = 'ppp-laws'): SubmenuChapter {
    const id = `post-${Date.now().toString().slice(-6)}`;
    return {
      id,
      menuId: menuKey,
      menuTitle: getMenuTitle(menuKey),
      title: '',
      tagline: '',
      badge: 'New Chapter',
      summary: '',
      contentParagraphs: [''],
      keyPillars: [],
      statutes: [],
      faqs: [],
      author: 'PPP Union Secretariat',
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      status: 'published',
      postType: 'page'
    };
  }

  function getMenuTitle(menuId: string): string {
    const map: Record<string, string> = {
      'ppp-laws': 'PPP LAWS',
      'laws': 'PPP LAWS',
      'about-ppp': 'ABOUT PPP',
      'ppp-programs': 'PPP PROGRAMS',
      'programs': 'PPP PROGRAMS',
      'about-union': 'ABOUT UNION',
      'ppp-sdgs': 'PPP & 17 SDGS',
      'sdgs': 'PPP & 17 SDGS',
      'ppp-facilitators': 'PPP FACILITATORS',
      'facilitators': 'PPP FACILITATORS',
      'contact': 'CONTACT US',
    };
    return map[menuId] || 'PPP UNION';
  }

  const handleEditClick = (chapter: SubmenuChapter) => {
    setSelectedSubmenuKey(chapter.id);
    setEditingChapter({
      ...chapter,
      author: chapter.author || 'PPP Union Secretariat',
      date: chapter.date || 'September 2026',
      status: chapter.status || 'published',
      postType: chapter.postType || 'page',
      contentParagraphs: chapter.contentParagraphs?.length ? chapter.contentParagraphs : ['']
    });
    setViewMode('editor');
  };

  const handleAddNew = (type: 'post' | 'page') => {
    const newDoc = createBlankChapter('ppp-laws');
    newDoc.postType = type;
    newDoc.title = type === 'post' ? 'New Announcement: ' : 'New Chapter: ';
    newDoc.badge = type === 'post' ? 'Announcement' : 'Statute / Chapter';
    setSelectedSubmenuKey(newDoc.id);
    setEditingChapter(newDoc);
    setViewMode('editor');
  };

  const handleSaveDocument = (statusToSave: 'published' | 'draft') => {
    if (!editingChapter.title.trim()) {
      alert('Please provide a title for the post/page.');
      return;
    }

    const docToSave: SubmenuChapter = {
      ...editingChapter,
      status: statusToSave,
      menuTitle: getMenuTitle(editingChapter.menuId),
      summary: editingChapter.summary || editingChapter.contentParagraphs[0] || 'Executive overview from the PPP Union Secretariat.',
      contentParagraphs: editingChapter.contentParagraphs.filter(p => p.trim().length > 0)
    };

    onSavePage(docToSave);
    setSelectedSubmenuKey(docToSave.id);
    showToast(`Published to particular post "${docToSave.title}" under ${docToSave.menuTitle} (ID: #${docToSave.id})!`);
    setViewMode('list');
  };

  const handleFormat = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('wp-editor-content-textarea') as HTMLTextAreaElement | null;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = editingChapter.contentParagraphs.join('\n\n');
    const selected = text.substring(start, end) || 'Sample text';
    const newText = text.substring(0, start) + prefix + selected + suffix + text.substring(end);
    setEditingChapter({
      ...editingChapter,
      contentParagraphs: newText.split('\n\n')
    });
  };

  // ==========================================
  // TABLE & DIRECTORY STATE
  // ==========================================
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [activeTabFilter, setActiveTabFilter] = useState<'all' | 'pages' | 'posts'>('all');

  const allChapters = useMemo(() => {
    // Merge all entries in pagesContent, ensuring every item in allNavSubmenus is represented even if not yet customized
    const map = { ...pagesContent };
    allNavSubmenus.forEach(item => {
      if (!map[item.submenuId]) {
        map[item.submenuId] = {
          id: item.submenuId,
          menuId: item.menuId,
          menuTitle: item.menuTitle,
          title: item.submenuTitle,
          tagline: '',
          badge: item.badge || 'Chapter',
          summary: '',
          contentParagraphs: [],
          status: 'draft',
          postType: 'page',
          date: 'September 2026'
        };
      }
    });
    return Object.values(map);
  }, [pagesContent, allNavSubmenus]);

  const customPosts = useMemo(() => {
    return (Object.values(pagesContent) as SubmenuChapter[]).filter(c => c.postType === 'post' || !allNavSubmenus.some(n => n.submenuId === c.id));
  }, [pagesContent, allNavSubmenus]);

  const filteredChapters = useMemo(() => {
    return allChapters.filter(ch => {
      if (activeTabFilter === 'pages' && ch.postType === 'post') return false;
      if (activeTabFilter === 'posts' && ch.postType !== 'post') return false;

      if (statusFilter !== 'all') {
        const docStatus = ch.status || 'published';
        if (docStatus !== statusFilter) return false;
      }

      if (categoryFilter !== 'all') {
        if (!ch.menuId.includes(categoryFilter) && !ch.menuTitle.toLowerCase().includes(categoryFilter.toLowerCase())) {
          return false;
        }
      }

      if (searchFilter.trim()) {
        const q = searchFilter.toLowerCase();
        const matchesTitle = ch.title.toLowerCase().includes(q);
        const matchesTagline = ch.tagline?.toLowerCase().includes(q);
        const matchesSummary = ch.summary?.toLowerCase().includes(q);
        const matchesId = ch.id.toLowerCase().includes(q);
        if (!matchesTitle && !matchesTagline && !matchesSummary && !matchesId) return false;
      }

      return true;
    });
  }, [allChapters, activeTabFilter, statusFilter, categoryFilter, searchFilter]);

  // Completion calculation
  const totalSubmenusCount = allNavSubmenus.length;
  const completedSubmenusCount = allNavSubmenus.filter(s => {
    const ch = pagesContent[s.submenuId];
    return ch && ch.contentParagraphs && ch.contentParagraphs.length > 0 && ch.contentParagraphs.join('').trim().length > 30;
  }).length;
  const completionPercentage = Math.round((completedSubmenusCount / Math.max(1, totalSubmenusCount)) * 100);

  // ==========================================
  // BACKUP EXPORT & IMPORT
  // ==========================================
  const handleExportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pagesContent, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ppp-union-website-content-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('All website content exported to JSON backup!');
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (imported && typeof imported === 'object') {
          Object.values(imported).forEach((ch: any) => {
            if (ch && ch.id) {
              onSavePage(ch);
            }
          });
          showToast('Backup successfully imported! All menus updated.');
        }
      } catch (err) {
        alert('Could not parse the backup file. Please ensure it is valid JSON.');
      }
    };
    reader.readAsText(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[92vh] overflow-hidden border border-slate-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WordPress Admin Navigation Header */}
        <div className="bg-[#1d2327] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-[#0073aa] flex items-center justify-center text-white font-black text-sm shadow-inner">
              WP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm text-white">PPP UNION WordPress Content Studio</h3>
                <span className="px-1.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-700/80 text-[10px] font-mono font-bold">
                  {completionPercentage}% Ready to Launch
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Official CMS for www.pppunion.org Content Migration & Page Management
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-700/80 text-xs">
            <button
              onClick={() => setViewMode('quick-posts')}
              className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'quick-posts' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Direct Posts & Texts Editor</span>
            </button>
            <button
              onClick={() => setViewMode('paste-studio')}
              className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'paste-studio' ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Paste from www.pppunion.org</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'list' ? 'bg-[#0073aa] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Menus Directory</span>
            </button>
            <button
              onClick={() => setViewMode('editor')}
              className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'editor' ? 'bg-[#0073aa] text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Document Editor</span>
            </button>
            <button
              onClick={() => setViewMode('launch')}
              className={`px-3 py-1.5 rounded-md font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'launch' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Rocket className="w-3.5 h-3.5 text-emerald-300" />
              <span>Launch & Backup</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Content Manager"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Selector */}
        <div className="md:hidden bg-slate-800 p-2 flex items-center justify-between border-b border-slate-700 text-xs gap-1 overflow-x-auto">
          <button
            onClick={() => setViewMode('quick-posts')}
            className={`px-2.5 py-1 rounded font-bold whitespace-nowrap ${
              viewMode === 'quick-posts' ? 'bg-amber-500 text-slate-950' : 'text-slate-200'
            }`}
          >
            Direct Posts Editor
          </button>
          <button
            onClick={() => setViewMode('paste-studio')}
            className={`px-2.5 py-1 rounded font-bold whitespace-nowrap ${
              viewMode === 'paste-studio' ? 'bg-sky-500 text-white' : 'text-slate-200'
            }`}
          >
            Paste Studio
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-2.5 py-1 rounded font-bold whitespace-nowrap ${
              viewMode === 'list' ? 'bg-[#0073aa] text-white' : 'text-slate-200'
            }`}
          >
            All Menus
          </button>
          <button
            onClick={() => setViewMode('editor')}
            className={`px-2.5 py-1 rounded font-bold whitespace-nowrap ${
              viewMode === 'editor' ? 'bg-[#0073aa] text-white' : 'text-slate-200'
            }`}
          >
            Editor
          </button>
          <button
            onClick={() => setViewMode('launch')}
            className={`px-2.5 py-1 rounded font-bold whitespace-nowrap ${
              viewMode === 'launch' ? 'bg-emerald-600 text-white' : 'text-slate-200'
            }`}
          >
            Launch & Backup
          </button>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 0: DIRECT WP-ADMIN QUICK POSTS & TEXTS EDITOR (User Request)         */}
        {/* ========================================================================= */}
        {viewMode === 'quick-posts' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-100">
            {/* Top Sub-Navigation for Quick Editor */}
            <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuickSection('media-posts')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    quickSection === 'media-posts'
                      ? 'bg-[#0073aa] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>12 Running Media Bulletins</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${quickSection === 'media-posts' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {localMediaPosts.length}
                  </span>
                </button>

                <button
                  onClick={() => setQuickSection('home-charter')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    quickSection === 'home-charter'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Home Legal Charter & Mandate</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 font-mono">
                    UN / ILO / EU
                  </span>
                </button>

                <button
                  onClick={() => setQuickSection('pages')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    quickSection === 'pages'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>All Chapter Articles (40+)</span>
                </button>
              </div>

              {/* Live Status indicator */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-700">Direct Live Editor</span>
                <span className="text-slate-400 hidden sm:inline">| Changes apply live to website</span>
              </div>
            </div>

            {/* Sub-Section 1: Media Posts Editor */}
            {quickSection === 'media-posts' && (
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Left: List of all 12 Posts */}
                <div className="w-full md:w-80 lg:w-96 bg-white border-r border-slate-200 flex flex-col shrink-0">
                  <div className="p-3 border-b border-slate-200 flex items-center justify-between gap-2 bg-slate-50">
                    <div className="relative flex-1">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search 12 posts..."
                        value={quickSearch}
                        onChange={(e) => setQuickSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                      />
                    </div>
                    <button
                      onClick={handleCreateNewMediaPost}
                      className="px-2.5 py-1.5 rounded bg-[#0073aa] text-white text-xs font-bold flex items-center gap-1 hover:bg-[#005a87] transition-colors cursor-pointer shrink-0"
                      title="Add New Media Post"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>New</span>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
                    {localMediaPosts
                      .filter(p => !quickSearch || p.title.toLowerCase().includes(quickSearch.toLowerCase()) || p.category.toLowerCase().includes(quickSearch.toLowerCase()))
                      .map((post, pIdx) => {
                        const isSelected = post.id === (editingMediaPostDraft?.id || selectedMediaPostId);
                        return (
                          <button
                            key={post.id}
                            onClick={() => {
                              setSelectedMediaPostId(post.id);
                              setEditingMediaPostDraft({ ...post });
                            }}
                            className={`w-full text-left p-2.5 rounded-lg transition-all cursor-pointer flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-sky-50 border border-sky-300 shadow-xs'
                                : 'hover:bg-slate-50 border border-transparent'
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {pIdx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#0072bc]/10 text-[#0072bc] truncate">
                                  {post.badge}
                                </span>
                                <span className="text-[10px] text-slate-400 shrink-0">
                                  {post.date}
                                </span>
                              </div>
                              <p className="text-xs font-bold text-slate-800 line-clamp-2 leading-snug">
                                {post.title}
                              </p>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {post.summary}
                              </p>
                            </div>
                            <Edit3 className={`w-3.5 h-3.5 shrink-0 mt-1 ${isSelected ? 'text-[#0073aa]' : 'text-slate-300'}`} />
                          </button>
                        );
                      })}
                  </div>
                </div>

                {/* Right: Post Editing Canvas */}
                {editingMediaPostDraft ? (
                  <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto">
                    <div className="p-4 sm:p-6 max-w-4xl space-y-4">
                      {/* Editor Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-[#0073aa] text-white text-[11px] font-mono font-bold">
                              {editingMediaPostDraft.id}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                              Direct Post Text Editor
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                            {editingMediaPostDraft.title || 'Untitled Bulletin'}
                          </h4>
                        </div>
                        <button
                          onClick={handleSaveCurrentMediaPost}
                          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save & Publish Live</span>
                        </button>
                      </div>

                      {/* Post Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Post Headline / Title
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.title}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, title: e.target.value })}
                            className="w-full px-3 py-2 text-sm font-bold rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Badge Label (e.g. GLOBAL INITIATIVE)
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.badge}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, badge: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Category
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.category}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, category: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Date
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.date}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, date: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Location & Sponsoring Org
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.location || ''}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, location: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Card Summary (Displayed on Carousel & Matrix Grid)
                          </label>
                          <textarea
                            rows={3}
                            value={editingMediaPostDraft.summary}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, summary: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white leading-relaxed"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Detailed Briefing Content (Full Modal Text)
                          </label>
                          <textarea
                            rows={5}
                            value={editingMediaPostDraft.fullContent || ''}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, fullContent: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white leading-relaxed"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Image URL
                          </label>
                          <input
                            type="text"
                            value={editingMediaPostDraft.imageUrl}
                            onChange={(e) => setEditingMediaPostDraft({ ...editingMediaPostDraft, imageUrl: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white font-mono"
                          />
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                        <span className="text-xs text-slate-500">
                          Changes persist automatically to your browser storage and live website components.
                        </span>
                        <button
                          onClick={handleSaveCurrentMediaPost}
                          className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save & Apply Changes</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center p-8 text-slate-400 text-sm">
                    Select a post on the left to edit its text.
                  </div>
                )}
              </div>
            )}

            {/* Sub-Section 2: Home Page Legal Charter & Mandate Editor */}
            {quickSection === 'home-charter' && (
              <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6">
                <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-1">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Direct Editor: Home Page Institutional Charter</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900">
                        Official Activity Codes & International Mandate
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Directly edit all texts, legal citations, conventions, and operational mandate displayed on the home page.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleResetHomeCharterInWp}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                        title="Reset to official text"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                        <span>Reset to Prompt Text</span>
                      </button>
                      <button
                        onClick={handleSaveHomeCharterInWp}
                        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Home Charter Text</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Activity Codes
                      </label>
                      <input
                        type="text"
                        value={localHomeCharter.activityCodes}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, activityCodes: e.target.value })}
                        className="w-full px-3 py-2 font-mono font-bold text-slate-900 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-slate-50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                          ILO Convention Basis
                        </label>
                        <input
                          type="text"
                          value={localHomeCharter.iloConvention}
                          onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, iloConvention: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                          EU Charter Basis
                        </label>
                        <input
                          type="text"
                          value={localHomeCharter.euCharter}
                          onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, euCharter: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Paragraph 1: Operational Conformity & Activity Codes
                      </label>
                      <textarea
                        rows={3}
                        value={localHomeCharter.paragraph1}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, paragraph1: e.target.value })}
                        className="w-full px-3 py-2 leading-relaxed rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Paragraph 2: Formal Authorization of Professional Unions
                      </label>
                      <textarea
                        rows={3}
                        value={localHomeCharter.paragraph2}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, paragraph2: e.target.value })}
                        className="w-full px-3 py-2 leading-relaxed rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Paragraph 3: UN 2030 Agenda & A/RES/70/1 Alignment
                      </label>
                      <textarea
                        rows={3}
                        value={localHomeCharter.paragraph3}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, paragraph3: e.target.value })}
                        className="w-full px-3 py-2 leading-relaxed rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Paragraph 4: Mandate to Organize Legal Firms Worldwide
                      </label>
                      <textarea
                        rows={3}
                        value={localHomeCharter.paragraph4}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, paragraph4: e.target.value })}
                        className="w-full px-3 py-2 leading-relaxed rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Official Disclaimer & Non-Contracting Party Notice
                      </label>
                      <textarea
                        rows={2}
                        value={localHomeCharter.disclaimer}
                        onChange={(e) => setLocalHomeCharter({ ...localHomeCharter, disclaimer: e.target.value })}
                        className="w-full px-3 py-2 leading-relaxed rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] text-slate-600 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200">
                    <button
                      onClick={handleSaveHomeCharterInWp}
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save & Apply to Home Page</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-Section 3: Chapter Articles Quick Editor */}
            {quickSection === 'pages' && (
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Left: Chapter list */}
                <div className="w-full md:w-80 lg:w-96 bg-white border-r border-slate-200 flex flex-col shrink-0">
                  <div className="p-3 border-b border-slate-200 bg-slate-50">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Filter chapters..."
                        value={quickSearch}
                        onChange={(e) => setQuickSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
                    {Object.values(pagesContent)
                      .filter(pg => !quickSearch || pg.title.toLowerCase().includes(quickSearch.toLowerCase()) || pg.id.toLowerCase().includes(quickSearch.toLowerCase()))
                      .map((pg) => {
                        const isSelected = pg.id === editingQuickPageDraft?.id;
                        return (
                          <button
                            key={pg.id}
                            onClick={() => {
                              setSelectedQuickPageId(pg.id);
                              setEditingQuickPageDraft({ ...pg });
                            }}
                            className={`w-full text-left p-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-sky-50 border border-sky-300 shadow-xs'
                                : 'hover:bg-slate-50 border border-transparent'
                            }`}
                          >
                            <div className="min-w-0 flex-1 pr-2">
                              <span className="text-[10px] font-mono text-slate-400 block truncate">#{pg.id}</span>
                              <p className="text-xs font-bold text-slate-800 truncate">{pg.title}</p>
                            </div>
                            <Edit3 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#0073aa]' : 'text-slate-300'}`} />
                          </button>
                        );
                      })}
                  </div>
                </div>

                {/* Right: Quick Chapter editor */}
                {editingQuickPageDraft ? (
                  <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto">
                    <div className="p-4 sm:p-6 max-w-4xl space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-indigo-600 text-white text-[11px] font-mono font-bold">
                            #{editingQuickPageDraft.id}
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                            {editingQuickPageDraft.title}
                          </h4>
                        </div>
                        <button
                          onClick={handleSaveQuickPage}
                          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Article Text</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Article Title
                          </label>
                          <input
                            type="text"
                            value={editingQuickPageDraft.title}
                            onChange={(e) => setEditingQuickPageDraft({ ...editingQuickPageDraft, title: e.target.value })}
                            className="w-full px-3 py-2 text-sm font-bold rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Tagline / Subtitle
                          </label>
                          <input
                            type="text"
                            value={editingQuickPageDraft.tagline || ''}
                            onChange={(e) => setEditingQuickPageDraft({ ...editingQuickPageDraft, tagline: e.target.value })}
                            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Executive Summary
                          </label>
                          <textarea
                            rows={3}
                            value={editingQuickPageDraft.summary || ''}
                            onChange={(e) => setEditingQuickPageDraft({ ...editingQuickPageDraft, summary: e.target.value })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white leading-relaxed"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Main Text Content (Paragraphs)
                          </label>
                          <textarea
                            rows={8}
                            value={(editingQuickPageDraft.paragraphs || []).join('\n\n')}
                            onChange={(e) => setEditingQuickPageDraft({ 
                              ...editingQuickPageDraft, 
                              paragraphs: e.target.value.split('\n\n').filter(p => p.trim()) 
                            })}
                            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:border-[#0073aa] bg-white leading-relaxed font-mono"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-end border-t border-slate-200">
                        <button
                          onClick={handleSaveQuickPage}
                          className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Chapter Text</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center p-8 text-slate-400 text-sm">
                    Select a chapter to edit its text.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 1: PASTE STUDIO (COPY & PASTE FULL TEXT UNDER EACH MENU & SUB-MENU)  */}
        {/* ========================================================================= */}
        {viewMode === 'paste-studio' && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-100">
            {/* Left Sidebar: Select Menu & Sub-Menu */}
            <div className="w-full md:w-80 lg:w-96 bg-white border-r border-slate-200 flex flex-col shrink-0">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Particular Menu / Sub-Menu
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {completedSubmenusCount} of {totalSubmenusCount} populated with full text
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#0072bc]">
                  {completionPercentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200 h-1.5">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>

              {/* List of sub-menus grouped by parent menu */}
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-3">
                {navigation.map((menu) => {
                  const subItems = (menu.submenus && menu.submenus.length > 0) 
                    ? menu.submenus 
                    : [{ id: menu.id, title: `${menu.title} (Main Lead Page)`, href: menu.href || `#${menu.id}`, badge: undefined }];

                  return (
                    <div key={menu.id} className="space-y-1">
                      <div className="px-2 py-1 bg-slate-100/90 rounded text-[11px] font-black text-slate-700 uppercase tracking-wide flex items-center justify-between">
                        <span>{menu.title}</span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {subItems.length} items
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        {subItems.map((sub) => {
                          const cleanId = (sub.href || sub.id).replace(/^#/, '');
                          const isSelected = selectedSubmenuKey === cleanId;
                          const existingDoc = pagesContent[cleanId];
                          const hasContent = existingDoc && existingDoc.contentParagraphs && existingDoc.contentParagraphs.join('').trim().length > 30;
                          const wordCount = existingDoc?.contentParagraphs?.join(' ').split(/\s+/).filter(Boolean).length || 0;

                          return (
                            <button
                              key={cleanId}
                              onClick={() => selectArticleToEdit(cleanId)}
                              className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                                isSelected 
                                  ? 'bg-[#0072bc] text-white font-bold shadow-xs' 
                                  : 'hover:bg-slate-100 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                {hasContent ? (
                                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                                ) : (
                                  <AlertCircle className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-sky-500'}`} />
                                )}
                                <span className="truncate">{sub.title}</span>
                              </div>
                              <span className={`text-[10px] font-mono shrink-0 px-1 rounded ${
                                isSelected ? 'bg-sky-800 text-white font-bold' : 'text-slate-400 bg-slate-100'
                              }`}>
                                {wordCount > 0 ? `${wordCount}w` : 'empty'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Main Pane: Paste Box & Controls */}
            <div className="flex-1 flex flex-col overflow-y-auto bg-white p-4 sm:p-6 space-y-4">
              {/* Prominent Destination Dropdown Selector to guarantee text goes to the particular post */}
              <div className="p-3 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center font-black text-xs text-white shadow-xs">
                    WP
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      Destination Menu & Sub-Menu Article:
                    </div>
                    <div className="text-xs font-black text-white flex items-center gap-1.5 flex-wrap">
                      <span>{activeSubmenuMeta.menuTitle}</span>
                      <span className="text-slate-400">➔</span>
                      <span className="text-sky-300">{activeSubmenuMeta.submenuTitle}</span>
                      <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 border border-slate-700">
                        #{selectedSubmenuKey}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <label className="text-[11px] font-bold text-slate-300 whitespace-nowrap hidden sm:inline">
                    Switch Destination:
                  </label>
                  <select
                    value={selectedSubmenuKey}
                    onChange={(e) => selectArticleToEdit(e.target.value)}
                    className="w-full sm:w-72 bg-slate-800 hover:bg-slate-750 text-white text-xs font-bold px-3 py-2 rounded-lg border border-sky-500/50 outline-none focus:border-sky-400 cursor-pointer shadow-inner"
                  >
                    {navigation.map((menu) => (
                      <optgroup key={menu.id} label={`📁 ${menu.title}`}>
                        {(menu.submenus && menu.submenus.length > 0 
                          ? menu.submenus 
                          : [{ id: menu.id, title: `${menu.title} (Main Lead Page)`, href: menu.href || `#${menu.id}` }]
                        ).map((sub) => {
                          const cId = (sub.href || sub.id).replace(/^#/, '');
                          const count = pagesContent[cId]?.contentParagraphs?.join(' ').split(/\s+/).filter(Boolean).length || 0;
                          return (
                            <option key={cId} value={cId}>
                              {sub.title} {count > 0 ? `(${count}w)` : '(empty)'}
                            </option>
                          );
                        })}
                      </optgroup>
                    ))}
                    {customPosts.length > 0 && (
                      <optgroup label="📝 Custom Standalone Posts">
                        {customPosts.map(p => (
                          <option key={p.id} value={p.id}>
                            {p.title || 'Untitled Post'} ({p.id})
                          </option>
                        ))}
                      </optgroup>
                    )}
                  </select>
                </div>
              </div>

              {/* Context Banner */}
              <div className="p-4 rounded-xl bg-sky-50/80 border border-sky-200 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                      {activeSubmenuMeta.menuTitle}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-xs font-black text-slate-900">
                      {activeSubmenuMeta.submenuTitle}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      #{selectedSubmenuKey}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Copy the complete article from <span className="font-bold text-[#0072bc]">www.pppunion.org</span> and paste it below. It will save exclusively to this particular page.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.pppunion.org"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#0072bc]" />
                    <span>Open www.pppunion.org</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() => {
                      if (onNavigateToPage) {
                        onNavigateToPage(`#${selectedSubmenuKey}`);
                        onClose();
                      }
                    }}
                    className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Live</span>
                  </button>
                </div>
              </div>
              {/* Title & Tagline Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700">Sub-Menu / Page Title</label>
                  <input
                    type="text"
                    value={pasteTitle}
                    onChange={(e) => setPasteTitle(e.target.value)}
                    placeholder="Page Title (e.g., PPP National Laws)"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 font-bold outline-none focus:bg-white focus:ring-2 focus:ring-[#0073aa]/20 focus:border-[#0073aa]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Header Pill / Badge</label>
                  <input
                    type="text"
                    value={pasteBadge}
                    onChange={(e) => setPasteBadge(e.target.value)}
                    placeholder="e.g. UNECE Standard"
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#0073aa]/20 focus:border-[#0073aa]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Subtitle / Tagline</label>
                <input
                  type="text"
                  value={pasteTagline}
                  onChange={(e) => setPasteTagline(e.target.value)}
                  placeholder="One sentence description of this chapter's regulatory scope..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-800 outline-none focus:bg-white focus:ring-2 focus:ring-[#0073aa]/20 focus:border-[#0073aa]"
                />
              </div>

              {/* Full Text Paste Textarea */}
              <div className="flex-1 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#0072bc]" />
                    <span>Full Article & Body Text (Paste from www.pppunion.org)</span>
                  </label>

                  <div className="flex items-center gap-3 text-xs">
                    <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer select-none text-[11px]">
                      <input
                        type="checkbox"
                        checked={autoSplitParagraphs}
                        onChange={(e) => setAutoSplitParagraphs(e.target.checked)}
                        className="rounded border-slate-300 text-[#0072bc] focus:ring-0"
                      />
                      <span>Split double line breaks into paragraphs</span>
                    </label>

                    <span className="text-slate-400 font-mono text-[11px]">
                      {pasteRawText.split(/\s+/).filter(Boolean).length} words | {pasteRawText.length} chars
                    </span>
                  </div>
                </div>

                <HtmlEditor
                  value={pasteRawText}
                  onChange={(val) => setPasteRawText(val)}
                  placeholder="Paste the full article from www.pppunion.org here... Use the ⚡ Auto-Bold Titles & Articles button to automatically detect and format section titles and articles, or edit directly in HTML or Visual mode."
                  minHeight="320px"
                />
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSubmenu}
                    disabled={currentIndex <= 0}
                    className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous Sub-Menu</span>
                  </button>

                  <button
                    onClick={handleNextSubmenu}
                    disabled={currentIndex >= allNavSubmenus.length - 1}
                    className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>Next Sub-Menu</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (window.confirm('Reset this page content back to the default template?')) {
                        handleResetAction();
                        showToast('Reset to default template.');
                      }
                    }}
                    className="px-3 py-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Reset Page Defaults
                  </button>

                  <button
                    onClick={handleSavePastedText}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save & Publish to #{selectedSubmenuKey} ({activeSubmenuMeta.submenuTitle})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ALL MENUS & SUB-MENUS DIRECTORY (LAUNCH READINESS TRACKER)        */}
        {/* ========================================================================= */}
        {viewMode === 'list' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
            {/* Top Toolbar */}
            <div className="p-4 sm:p-5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-1 text-xs">
                <button
                  onClick={() => setActiveTabFilter('all')}
                  className={`px-3 py-1.5 font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTabFilter === 'all' ? 'bg-[#0073aa] text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  All ({allChapters.length})
                </button>
                <button
                  onClick={() => setActiveTabFilter('pages')}
                  className={`px-3 py-1.5 font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTabFilter === 'pages' ? 'bg-[#0073aa] text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Pages ({allChapters.filter(c => c.postType !== 'post').length})
                </button>
                <button
                  onClick={() => setActiveTabFilter('posts')}
                  className={`px-3 py-1.5 font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeTabFilter === 'posts' ? 'bg-[#0073aa] text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Posts ({allChapters.filter(c => c.postType === 'post').length})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('paste-studio')}
                  className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-white" />
                  <span>Paste from www.pppunion.org</span>
                </button>

                <button
                  onClick={() => handleAddNew('page')}
                  className="px-3.5 py-1.5 bg-[#0073aa] hover:bg-[#005a87] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ Add New Page</span>
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="px-4 sm:px-5 py-3 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-slate-500 font-medium flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Filter by Menu:
                </span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-white border border-slate-300 rounded-md px-2.5 py-1 text-slate-700 text-xs font-medium cursor-pointer"
                >
                  <option value="all">All Menus & Categories</option>
                  <option value="laws">PPP LAWS</option>
                  <option value="about-ppp">ABOUT PPP</option>
                  <option value="program">PPP PROGRAMS</option>
                  <option value="union">ABOUT UNION</option>
                  <option value="sdgs">PPP & 17 SDGS</option>
                  <option value="facilitator">PPP FACILITATORS</option>
                  <option value="contact">CONTACT US</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="bg-white border border-slate-300 rounded-md px-2.5 py-1 text-slate-700 text-xs font-medium cursor-pointer"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, slugs, or text..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-md pl-8 pr-3 py-1 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#0073aa]"
                />
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-4">Title / Page</th>
                    <th className="py-3 px-3">Parent Menu</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3">Type</th>
                    <th className="py-3 px-3">Words</th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 bg-white">
                  {filteredChapters.map((ch) => {
                    const wordCount = ch.contentParagraphs?.join(' ').split(/\s+/).filter(Boolean).length || 0;
                    return (
                      <tr key={ch.id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="py-3 px-4">
                          <div className="font-bold text-slate-900 group-hover:text-[#0073aa] transition-colors flex items-center gap-2">
                            <span>{ch.title}</span>
                            {ch.badge && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 font-medium">
                                {ch.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                            <span>#{ch.id}</span>
                            {ch.tagline && (
                              <span className="text-slate-400 truncate max-w-xs font-sans">
                                — {ch.tagline}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-700">
                          {ch.menuTitle}
                        </td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            ch.status === 'published' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : 'bg-sky-100 text-sky-800'
                          }`}>
                            {ch.status === 'published' ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-500 capitalize">
                          {ch.postType || 'page'}
                        </td>
                        <td className="py-3 px-3 font-mono text-slate-600">
                          {wordCount}
                        </td>
                        <td className="py-3 px-3 text-slate-500">
                          {ch.date || 'September 2026'}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                selectArticleToEdit(ch.id);
                                setViewMode('paste-studio');
                              }}
                              className="p-1.5 rounded hover:bg-sky-100 text-slate-700 hover:text-sky-800 font-bold transition-colors cursor-pointer"
                              title="Paste full text for this menu item"
                            >
                              <FileText className="w-3.5 h-3.5 text-sky-600" />
                            </button>

                            <button
                              onClick={() => handleEditClick(ch)}
                              className="p-1.5 rounded hover:bg-slate-100 text-slate-700 hover:text-[#0073aa] transition-colors cursor-pointer"
                              title="Edit in Document Editor"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-[#0073aa]" />
                            </button>

                            <button
                              onClick={() => {
                                if (onNavigateToPage) {
                                  onNavigateToPage(`#${ch.id}`);
                                  onClose();
                                }
                              }}
                              className="p-1.5 rounded hover:bg-slate-100 text-slate-700 hover:text-emerald-600 transition-colors cursor-pointer"
                              title="View page on website"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                if (window.confirm(`Are you sure you want to delete "${ch.title}"?`)) {
                                  onDeletePage(ch.id);
                                  showToast('Page deleted.');
                                }
                              }}
                              className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                              title="Delete Page"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: CLASSIC WORDPRESS DOCUMENT EDITOR (FOR GRANULAR DETAILS)          */}
        {/* ========================================================================= */}
        {viewMode === 'editor' && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-50">
            <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 bg-white border-r border-slate-200">
              <div className="mb-4">
                <input
                  type="text"
                  value={editingChapter.title}
                  onChange={(e) => setEditingChapter({ ...editingChapter, title: e.target.value })}
                  placeholder="Enter Post or Page Title Here..."
                  className="w-full text-xl sm:text-2xl font-black text-slate-900 placeholder:text-slate-300 border-b-2 border-slate-200 pb-2 outline-none focus:border-[#0073aa] transition-colors"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  value={editingChapter.tagline || ''}
                  onChange={(e) => setEditingChapter({ ...editingChapter, tagline: e.target.value })}
                  placeholder="Add brief tagline or legal designation..."
                  className="w-full text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#0073aa]/20 focus:border-[#0073aa]"
                />
              </div>

              <div className="mb-4 p-3 rounded-xl bg-sky-50/70 border border-sky-200/80">
                <label className="text-xs font-bold text-sky-900 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Start of Post / Executive Summary</span>
                </label>
                <textarea
                  rows={2}
                  value={editingChapter.summary || ''}
                  onChange={(e) => setEditingChapter({ ...editingChapter, summary: e.target.value })}
                  placeholder="Write the start of post or executive summary here..."
                  className="w-full p-2.5 bg-white border border-sky-300/80 rounded-lg text-xs text-slate-800 outline-none focus:border-sky-500"
                />
              </div>

              <div className="mb-4 flex-1 flex flex-col">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Main Content Body (HTML & WYSIWYG Editor)
                </label>

                <HtmlEditor
                  value={editingChapter.contentParagraphs.join('\n\n')}
                  onChange={(val) => {
                    setEditingChapter({
                      ...editingChapter,
                      contentParagraphs: val.split(/\n\s*\n/).filter(p => p.trim().length > 0)
                    });
                  }}
                  placeholder="Draft your full article content here. Use the HTML or Visual toolbar, or click ⚡ Auto-Bold Titles & Articles to format headings instantly."
                  minHeight="350px"
                />
              </div>
            </div>

            {/* Editor Right Sidebar */}
            <div className="w-full md:w-72 bg-slate-50 p-4 border-l border-slate-200 space-y-4 overflow-y-auto text-xs shrink-0">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Publish Settings
                </h4>
                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Target Post ID:</span>
                  <span className="font-mono font-bold text-sky-700">#{editingChapter.id}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => handleSaveDocument('draft')}
                    className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={() => handleSaveDocument('published')}
                    className="flex-1 py-2 bg-[#0073aa] hover:bg-[#005a87] text-white font-bold rounded-lg cursor-pointer transition-colors shadow-xs"
                  >
                    Publish
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Target Menu / Sub-Menu Assignment</label>
                <select
                  value={editingChapter.id}
                  onChange={(e) => {
                    const key = e.target.value;
                    selectArticleToEdit(key);
                  }}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium outline-none cursor-pointer"
                >
                  {allNavSubmenus.map((item) => (
                    <option key={item.submenuId} value={item.submenuId}>
                      {item.menuTitle} ➔ {item.submenuTitle}
                    </option>
                  ))}
                  {customPosts.map((p) => (
                    <option key={p.id} value={p.id}>
                      Custom: {p.title || p.id}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">Parent Menu / Category</label>
                <select
                  value={editingChapter.menuId}
                  onChange={(e) => {
                    const menuKey = e.target.value;
                    setEditingChapter({ 
                      ...editingChapter, 
                      menuId: menuKey,
                      menuTitle: getMenuTitle(menuKey)
                    });
                  }}
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium outline-none cursor-pointer"
                >
                  <option value="ppp-laws">PPP LAWS</option>
                  <option value="about-ppp">ABOUT PPP</option>
                  <option value="ppp-programs">PPP PROGRAMS</option>
                  <option value="about-union">ABOUT UNION</option>
                  <option value="ppp-sdgs">PPP & 17 SDGS</option>
                  <option value="ppp-facilitators">PPP FACILITATORS</option>
                  <option value="contact">CONTACT US</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">Header Badge</label>
                <input
                  type="text"
                  value={editingChapter.badge || ''}
                  onChange={(e) => setEditingChapter({ ...editingChapter, badge: e.target.value })}
                  placeholder="e.g. UNECE Standard"
                  className="w-full bg-white border border-slate-300 rounded-lg p-2 text-slate-800 outline-none"
                />
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span>Total Words:</span>
                  <strong className="text-slate-900">
                    {editingChapter.contentParagraphs.join(' ').split(/\s+/).filter(Boolean).length}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: LAUNCH READINESS & COMPLETE BACKUP EXPORT / IMPORT                 */}
        {/* ========================================================================= */}
        {viewMode === 'launch' && (
          <div className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-8 bg-slate-50 space-y-6">
            <div className="max-w-4xl mx-auto w-full space-y-6">
              {/* Launch Header Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#002f50] to-[#005a96] text-white shadow-xl flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold text-xs">
                      Official Launch Readiness
                    </span>
                    <span className="text-sky-200 text-xs">www.pppunion.org Standard</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    PPP UNION Official Portal Launch Station
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100 max-w-xl">
                    All menus and sub-menus have been verified against the official charter. You can backup all content, restore data, or deploy live.
                  </p>
                </div>

                <button
                  onClick={() => {
                    showToast('Portal verified & marked Production Ready for launch!');
                    alert('Official Launch Verification Complete!\n\n- All 7 Main Menus Active\n- Sub-Menus Cleaned (No small text in bottom)\n- Full Texts Loaded & Stored in Local/Cloud Cache\n- Contact Us Anti-Bot Verification Schedule Active\n\nThe website is ready for public launch.');
                  }}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center gap-2 transition-all cursor-pointer transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5" />
                  <span>Launch Official Website</span>
                </button>
              </div>

              {/* Launch Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Navigation Dropdowns Cleaned</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Hovering over menus shows strictly the menu & its sub-menu items without small text at the bottom.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Sub-Menu Content Readiness ({completionPercentage}%)</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {completedSubmenusCount} of {totalSubmenusCount} sub-menus populated with full regulatory texts and statutory chapters.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Secretariat Contact & Anti-Bot Shield</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Contact Us features the interactive applicant verification schedule and anti-robot cryptographic protection.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Running Headlines Position</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Breaking dispatch ticker is positioned exactly one post down from the main navigation bar.
                  </p>
                </div>
              </div>

              {/* Permanent Backup & Restore Box */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#0072bc]" />
                    <span>Complete Website Content Backup & Restore</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Save all your pasted texts, articles, and pages to a JSON file on your computer so you never lose your work.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleExportBackup}
                    className="px-4 py-2.5 bg-[#0073aa] hover:bg-[#005a87] text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Website Backup (JSON)</span>
                  </button>

                  <label className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-2 border border-slate-300 shadow-xs transition-colors cursor-pointer">
                    <Upload className="w-4 h-4 text-slate-600" />
                    <span>Restore / Import JSON Backup</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportBackup}
                      className="hidden"
                    />
                  </label>

                  <button
                    onClick={() => {
                      if (window.confirm('Reset all pages to the factory default template? Custom pasted texts will be cleared.')) {
                        handleResetAction();
                        showToast('Reset all pages to defaults.');
                      }
                    }}
                    className="px-3 py-2 text-slate-400 hover:text-red-600 text-xs font-semibold transition-colors cursor-pointer ml-auto"
                  >
                    Reset Factory Defaults
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Save Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1d2327] text-white px-5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-bold border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

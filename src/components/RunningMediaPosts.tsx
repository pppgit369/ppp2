import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe2, 
  ExternalLink, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Grid3X3, 
  SlidersHorizontal, 
  Sparkles, 
  ArrowRight, 
  X, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Layers,
  Edit3
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

export interface MediaPost {
  id: string;
  title: string;
  badge: string;
  badgeColor?: string; // e.g. 'bg-[#0072bc]' or 'bg-emerald-600'
  imageUrl: string;
  date: string;
  category: string;
  summary: string;
  fullContent?: string;
  location?: string;
  source?: string;
  linkHref?: string;
}

export const DEFAULT_MEDIA_POSTS: MediaPost[] = [
  {
    id: 'post-1',
    title: '9th Edition of the UNECE International PPP Forum.',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=800&q=80',
    date: 'May 2024',
    category: 'Global Forum',
    location: 'Geneva / Belgrade',
    source: 'UNECE Working Party on PPPs',
    summary: 'The landmark United Nations Economic Commission for Europe international forum convening sovereign leaders, infrastructure ministries, and institutional financiers to advance People-First PPP standards.',
    fullContent: 'The 9th Edition of the UNECE International PPP Forum gathered global delegates to evaluate the UNECE PIERS 22-criterion self-assessment tool, cross-border infrastructure concessions, and climate-resilient transport pipelines aligned with the UN 2030 Agenda.',
    linkHref: '#unece-models',
  },
  {
    id: 'post-2',
    title: 'ADP & NOC Groups',
    badge: 'PPP PROJECTS OMAN',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    date: 'February 2025',
    category: 'Regional Projects',
    location: 'Muscat, Sultanate of Oman',
    source: 'Oman PPP Directorate',
    summary: 'Strategic bilateral partnership between ADP and National Oil & Commercial groups accelerating infrastructure hubs, port logistics, and clean energy transition across the Sultanate of Oman.',
    fullContent: 'Under the auspices of Oman Vision 2040 and Royal Decree 52/2019, ADP & NOC Groups established a joint facilitation framework to syndicate long-term private capital into essential national transport, utilities, and green industrial corridors.',
    linkHref: '#facilitators-oman',
  },
  {
    id: 'post-3',
    title: 'ADP and Al-Nahda Group Signed MOU for funding and Development of a most valuable infrastructure Project in Muscat, Sultanate of Oman',
    badge: 'INFRASTRUCTURE',
    badgeColor: 'bg-sky-600',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    date: 'January 2025',
    category: 'Infrastructure',
    location: 'Muscat, Oman',
    source: 'Al-Nahda & ADP Consortium',
    summary: 'High-level memorandum of understanding signed in Muscat for the capital mobilization, engineering structuring, and concession management of premier urban and logistics infrastructure.',
    fullContent: 'The agreement outlines a multi-million-dollar framework covering master planning, social infrastructure, green energy distribution networks, and integrated multimodal transit facilities in the capital governorate.',
    linkHref: '#facilitators-oman',
  },
  {
    id: 'post-4',
    title: 'ADP III',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    date: 'November 2024',
    category: 'Development Program',
    location: 'International Desks',
    source: 'Arab Development Partners',
    summary: 'Third strategic iteration of the Arab Development Partners (ADP III) multi-utility infrastructure initiative, deploying standardized DBFOM models and institutional compliance systems.',
    fullContent: 'ADP III consolidates regional infrastructure opportunities into standardized, de-risked portfolios, enabling private equity and sovereign wealth syndicates to participate with clear governance and transparent concession milestones.',
    linkHref: '#project-types',
  },
  {
    id: 'post-5',
    title: 'African Development Bank',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    date: 'September 2024',
    category: 'Multilateral Banking',
    location: 'Abidjan, Côte d\'Ivoire',
    source: 'AfDB Infrastructure Secretariat',
    summary: 'Multilateral development banking initiative structuring pan-African sovereign co-financing, non-commercial guarantee mechanisms, and capacity building for cross-border PPP corridors.',
    fullContent: 'The African Development Bank (AfDB) continues to champion People-First PPP frameworks across sub-Saharan Africa, offering project preparation facilities, feasibility grants, and partial risk guarantees to bridge critical infrastructure gaps.',
    linkHref: '#programs',
  },
  {
    id: 'post-6',
    title: 'African Development Bank lends EUR39.62 million for improvement of Access roads to Port of Kribi',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    date: 'October 2024',
    category: 'Maritime & Road Logistics',
    location: 'Kribi, Cameroon',
    source: 'AfDB Press Release',
    summary: 'EUR 39.62 million facility financing the construction and rehabilitation of vital arterial logistics corridors connecting the Port of Kribi deep-sea harbor to Central African transit routes.',
    fullContent: 'This pivotal transport project reduces logistics bottlenecks for landlocked neighboring states, spurs industrial clustering, and integrates environmental mitigation zones to safeguard coastal ecosystems.',
    linkHref: '#sustainable-projects',
  },
  {
    id: 'post-7',
    title: 'AME Trade Ltd',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    date: 'August 2024',
    category: 'Trade & Mining Summit',
    location: 'London / Johannesburg',
    source: 'AME Trade Global Events',
    summary: 'Global business facilitation alliance organizing prime ministerial roundtables, mining concessions, and private-public dialogue forums between African governments and global project sponsors.',
    fullContent: 'AME Trade provides premier platforms for bilateral deal-making, facilitating government tender previews, investor syndications, and regulatory compliance workshops for mining, energy, and transport infrastructure.',
    linkHref: '#facilitators-overview',
  },
  {
    id: 'post-8',
    title: 'DOSEV Foundation Signs',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    date: 'July 2024',
    category: 'Social Infrastructure',
    location: 'Geneva / Istanbul',
    source: 'DOSEV Foundation News',
    summary: 'Formal signing of international protocol agreement between DOSEV Foundation and accredited PPP facilitators to expand social housing, maternal healthcare clinics, and clean drinking water facilities.',
    fullContent: 'Under this philanthropic-public framework, DOSEV Foundation channels development grants and zero-interest social capital into municipal PPP contracts, ensuring vulnerable communities gain direct access to essential services.',
    linkHref: '#people-first-standard',
  },
  {
    id: 'post-9',
    title: 'Eighth session of the Working Party on Public-Private Partnerships',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    date: 'December 2024',
    category: 'UN Standard Setting',
    location: 'Palais des Nations, Geneva',
    source: 'UNECE Secretariat',
    summary: 'Global UNECE working party session approving updated normative standards for People-First PPPs, stakeholder engagement guidelines, and green procurement scoring tools.',
    fullContent: 'Delegates from over 50 nations ratified new standard concession clauses, digital dispute resolution pathways, and guidelines to ensure women and marginalized communities are actively represented in infrastructure design.',
    linkHref: '#unece-models',
  },
  {
    id: 'post-10',
    title: 'Environment Authority signs pact to plant 100mn mangrove trees (News by Oman Time)',
    badge: 'PPP',
    badgeColor: 'bg-emerald-600',
    imageUrl: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=800&q=80',
    date: 'April 2024',
    category: 'Blue Carbon & ESG',
    location: 'Muscat, Sultanate of Oman',
    source: 'Oman Times & Environment Authority',
    summary: 'Historic environmental restoration concession between the Oman Environment Authority and private sector partners to cultivate 100 million mangrove trees along the Sultanate’s coastline.',
    fullContent: 'This pioneering blue-carbon public-private alliance monetizes carbon credits under international verification registries, creating sustainable coastal ecotourism and protecting biodiversity hotspots across Oman.',
    linkHref: '#climate-infrastructure',
  },
  {
    id: 'post-11',
    title: 'Future Fund Oman unveils projects worth RO832mn',
    badge: 'PPP',
    badgeColor: 'bg-indigo-600',
    imageUrl: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80',
    date: 'October 2024',
    category: 'Sovereign Investment',
    location: 'Muscat, Sultanate of Oman',
    source: 'Oman Investment Authority (OIA)',
    summary: 'Future Fund Oman announces major investment allocations totaling OMR 832 million ($2.16 billion) across key industrial, green hydrogen, food security, and digital tech ventures.',
    fullContent: 'Targeting both local SMEs and international co-investors, Future Fund Oman deploys catalytic equity and mezzanine funding to attract global PPP developers into priority diversification sectors under Vision 2040.',
    linkHref: '#facilitators-oman',
  },
  {
    id: 'post-12',
    title: 'Greater Salalah Master Plan – MoHUP & OCCI',
    badge: 'PPP',
    badgeColor: 'bg-[#0072bc]',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    date: 'August 2024',
    category: 'Urban Planning & Tourism',
    location: 'Salalah, Dhofar Governorate',
    source: 'MoHUP & OCCI Dhofar',
    summary: 'Landmark urban development and economic zoning master plan spearheaded by the Ministry of Housing & Urban Planning and Oman Chamber of Commerce & Industry.',
    fullContent: 'The Greater Salalah Master Plan integrates public waterfronts, international logistical free zones, eco-resort corridors, and climate-resilient flood mitigation under public-private concession frameworks.',
    linkHref: '#facilitators-oman',
  },
];

interface RunningMediaPostsProps {
  isEditMode?: boolean;
  onNavigate?: (href: string) => void;
  posts?: MediaPost[];
  onUpdatePost?: (updated: MediaPost) => void;
  onEditPost?: (post: MediaPost) => void;
  onOpenWpManager?: (initialEditingId?: string | null, mode?: 'list' | 'editor' | 'paste-studio' | 'launch' | 'quick-posts') => void;
}

export const RunningMediaPosts: React.FC<RunningMediaPostsProps> = ({
  isEditMode = false,
  onNavigate,
  posts: propPosts,
  onUpdatePost,
  onEditPost,
  onOpenWpManager,
}) => {
  const { isAdmin } = useAdmin();
  const { translateMediaPost, isRTL, t } = useLanguage();
  const [posts, setPosts] = useState<MediaPost[]>(() => {
    if (propPosts && propPosts.length > 0) return propPosts;
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
    if (propPosts && propPosts.length > 0) {
      setPosts(propPosts);
    }
  }, [propPosts]);

  const [currentIndex, setCurrentIndex] = useState(0); // 0, 4, 8 (3 batches of 4)
  const [isPaused, setIsPaused] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [activeModalPost, setActiveModalPost] = useState<MediaPost | null>(null);
  const [progress, setProgress] = useState(0);

  // Apply real-time translation across all posts and titles
  const translatedPosts = posts.map(translateMediaPost);

  const CARDS_PER_VIEW = 4;
  const TOTAL_POSTS = translatedPosts.length; // 12
  const TOTAL_BATCHES = Math.ceil(TOTAL_POSTS / CARDS_PER_VIEW); // 3 batches
  const SLIDE_DURATION = 6500; // 6.5 seconds for a graceful, slow transition
  const PROGRESS_TICK = 50; // ms

  // Slow Auto-advance timer with progress bar
  useEffect(() => {
    if (isPaused || isGridView) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + CARDS_PER_VIEW) % TOTAL_POSTS);
          return 0;
        }
        return prev + (PROGRESS_TICK / SLIDE_DURATION) * 100;
      });
    }, PROGRESS_TICK);

    return () => clearInterval(progressInterval);
  }, [isPaused, isGridView, TOTAL_POSTS]);

  const handleNextBatch = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + CARDS_PER_VIEW) % TOTAL_POSTS);
  };

  const handlePrevBatch = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - CARDS_PER_VIEW + TOTAL_POSTS) % TOTAL_POSTS);
  };

  const handleSelectBatch = (batchIndex: number) => {
    setProgress(0);
    setCurrentIndex(batchIndex * CARDS_PER_VIEW);
  };

  const currentBatchNumber = Math.floor(currentIndex / CARDS_PER_VIEW) + 1;

  // Active 4 posts to show
  const activePosts = translatedPosts.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <section 
      id="running-media-posts-section" 
      className="my-10 sm:my-14 relative"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header with Title, Controls, and View Switcher */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072bc]/10 text-[#0072bc] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('featured_news', 'Featured Infrastructure & Facilitation News')}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t('media_dispatch_title', 'International PPP & SDG Media Dispatch')}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {t('media_dispatch_subtitle', 'Top global projects, UNECE forum milestones, and sovereign partnership initiatives across 12 featured bulletins.')}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto flex-wrap">
          {/* Direct WP-Admin Posts Editor Button (Strictly Admin Only) */}
          {isAdmin && onOpenWpManager && (
            <button
              onClick={() => onOpenWpManager(null, 'quick-posts')}
              className="px-3 py-1.5 rounded-lg bg-[#0073aa] hover:bg-[#005a87] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              title="Open Direct WP-Admin Editor for All 12 Posts"
            >
              <span className="w-3.5 h-3.5 rounded bg-white text-[#0073aa] flex items-center justify-center text-[8px] font-black">W</span>
              <span>Edit All Posts in WP-Admin</span>
            </button>
          )}

          {/* Pause / Play Toggle */}
          {!isGridView && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? 'Resume slow auto-rotation' : 'Pause auto-rotation'}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-600" /> : <Pause className="w-4 h-4 text-slate-600" />}
              <span className="hidden sm:inline">{isPaused ? 'Play' : 'Pause'}</span>
            </button>
          )}

          {/* Grid View / Carousel Toggle */}
          <button
            onClick={() => setIsGridView(!isGridView)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
              isGridView 
                ? 'bg-[#0072bc] text-white border-[#0072bc]' 
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>{isGridView ? 'Running Carousel (4)' : 'View All 12 Posts'}</span>
          </button>

          {/* Navigation Arrows for Carousel */}
          {!isGridView && (
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevBatch}
                className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                title="Previous 4 Posts"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextBatch}
                className="p-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                title="Next 4 Posts"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (Visible in Carousel Mode) */}
      {!isGridView && (
        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mb-6 relative">
          <div 
            className="bg-[#0072bc] h-full transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. CAROUSEL MODE: Top 4 cards running slowly and transitioning to next */}
      {/* ========================================================================= */}
      {!isGridView ? (
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {activePosts.map((post, idx) => (
              <div
                key={post.id}
                onClick={() => setActiveModalPost(post)}
                className="group relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-slate-800/40 bg-slate-900"
              >
                {/* Background Image with Zoom Effect */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for Readability (Matching User Screenshot Image 2) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 p-3.5 flex items-center justify-between">
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-black tracking-wider uppercase text-white shadow-xs ${post.badgeColor || 'bg-[#0072bc]'}`}>
                    {post.badge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                      {post.date}
                    </span>
                    {isAdmin && (onOpenWpManager || onEditPost) && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onEditPost) onEditPost(post);
                          else if (onOpenWpManager) onOpenWpManager(post.id, 'quick-posts');
                        }}
                        className="p-1 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-md transition-transform hover:scale-110 cursor-pointer"
                        title={`Direct WP-Admin Quick Edit: ${post.title}`}
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Content / Title */}
                <div className="relative z-10 p-3.5 sm:p-4 text-white">
                  <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-3 text-white group-hover:text-sky-300 transition-colors drop-shadow-sm">
                    {post.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-sky-200 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t('read_briefing', 'Read Briefing')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Batch Indicators (Page 1 of 3, 2 of 3, 3 of 3) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: TOTAL_BATCHES }).map((_, bIdx) => (
              <button
                key={bIdx}
                onClick={() => handleSelectBatch(bIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentBatchNumber === bIdx + 1
                    ? 'w-8 h-2.5 bg-[#0072bc]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Go to posts ${bIdx * 4 + 1}-${Math.min((bIdx + 1) * 4, TOTAL_POSTS)}`}
              />
            ))}
            <span className="text-xs text-slate-500 font-semibold ml-2">
              Batch {currentBatchNumber} of {TOTAL_BATCHES} ({currentIndex + 1}–{Math.min(currentIndex + CARDS_PER_VIEW, TOTAL_POSTS)} of 12)
            </span>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 2. GRID VIEW: Complete 12-post 4x3 matrix matching user Image 2 */
        /* ========================================================================= */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {translatedPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveModalPost(post)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between border border-slate-800/40 bg-slate-900"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />

              <div className="relative z-10 p-3.5 flex items-center justify-between">
                <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-black tracking-wider uppercase text-white shadow-xs ${post.badgeColor || 'bg-[#0072bc]'}`}>
                  {post.badge}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-white/80 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    {post.date}
                  </span>
                  {isAdmin && (onOpenWpManager || onEditPost) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onEditPost) onEditPost(post);
                        else if (onOpenWpManager) onOpenWpManager(post.id, 'quick-posts');
                      }}
                      className="p-1 rounded bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-md transition-transform hover:scale-110 cursor-pointer"
                      title={`Direct WP-Admin Quick Edit: ${post.title}`}
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              <div className="relative z-10 p-3.5 sm:p-4 text-white">
                <h4 className="font-bold text-sm sm:text-base leading-snug line-clamp-3 text-white group-hover:text-sky-300 transition-colors drop-shadow-sm">
                  {post.title}
                </h4>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-sky-200 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t('read_briefing', 'Read Briefing')}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal for Selected Post */}
      {activeModalPost && (() => {
        const modalPost = translateMediaPost(activeModalPost);
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative overflow-hidden">
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-56 w-full bg-slate-900">
                <img 
                  src={modalPost.imageUrl} 
                  alt={modalPost.title} 
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <button
                  onClick={() => setActiveModalPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#0072bc] text-[11px] font-bold uppercase tracking-wider mb-2">
                    {modalPost.badge} · {modalPost.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black leading-snug">
                    {modalPost.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-200">
                  {modalPost.date && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0072bc]" />
                      <span>{modalPost.date}</span>
                    </div>
                  )}
                  {modalPost.location && (
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#0072bc]" />
                      <span>{modalPost.location}</span>
                    </div>
                  )}
                  {modalPost.source && (
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Source: {modalPost.source}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Overview</h4>
                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                    {modalPost.summary}
                  </p>
                </div>

                {modalPost.fullContent && (
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Detailed Briefing</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {modalPost.fullContent}
                    </p>
                  </div>
                )}

                <div className="pt-6 flex items-center justify-between gap-4 border-t border-slate-200 flex-wrap">
                  <div className="flex items-center gap-2">
                    {modalPost.linkHref && onNavigate ? (
                      <button
                        onClick={() => {
                          const href = modalPost.linkHref!;
                          setActiveModalPost(null);
                          onNavigate(href);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0072bc] text-white text-xs font-bold hover:bg-[#005a96] transition-colors cursor-pointer"
                      >
                        <span>Visit Related Union Chapter</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : null}

                    {isAdmin && onOpenWpManager && (
                      <button
                        onClick={() => {
                          const pId = modalPost.id;
                          setActiveModalPost(null);
                          onOpenWpManager(pId, 'quick-posts');
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0073aa] hover:bg-[#005a87] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                      >
                        <span className="w-3.5 h-3.5 rounded bg-white text-[#0073aa] flex items-center justify-center text-[8px] font-black">W</span>
                        <span>Edit Post in WP-Admin</span>
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalPost(null)}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

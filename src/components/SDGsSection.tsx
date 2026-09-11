import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Edit3, 
  Target, 
  Sparkles, 
  Info,
  ShieldAlert,
  Wheat,
  HeartPulse,
  GraduationCap,
  Users,
  Droplets,
  Zap,
  TrendingUp,
  Building2,
  Scale,
  Building,
  Recycle,
  CloudRain,
  Waves,
  TreePine,
  Gavel,
  Handshake,
  Search,
  BookOpen,
  DollarSign,
  BarChart3,
  Layers,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react';
import { SDGItem, SDGSubGoal } from '../types';
import { COMPREHENSIVE_17_SDGS } from '../data/sdgsData';
import { AdminEditableTitle, useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

interface SDGsSectionProps {
  sdgs?: SDGItem[];
  isEditMode: boolean;
  onEditSDG: (sdg: SDGItem) => void;
  selectedSDGNumber?: number | null;
  onSelectSDG?: (sdg: SDGItem | null) => void;
  standalonePage?: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Wheat: <Wheat className="w-5 h-5" />,
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  Building: <Building className="w-5 h-5" />,
  Recycle: <Recycle className="w-5 h-5" />,
  CloudRain: <CloudRain className="w-5 h-5" />,
  Waves: <Waves className="w-5 h-5" />,
  TreePine: <TreePine className="w-5 h-5" />,
  Gavel: <Gavel className="w-5 h-5" />,
  Handshake: <Handshake className="w-5 h-5" />,
};

export const SDGsSection: React.FC<SDGsSectionProps> = ({
  sdgs = COMPREHENSIVE_17_SDGS,
  isEditMode,
  onEditSDG,
  selectedSDGNumber,
  onSelectSDG,
  standalonePage = false,
}) => {
  const { translateSDG, isRTL, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'people' | 'prosperity' | 'planet' | 'partnership'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalSDG, setModalSDG] = useState<SDGItem | null>(null);
  const [activeTab, setActiveTab] = useState<'subgoals' | 'mandate' | 'ppp'>('subgoals');
  const [expandedSubGoal, setExpandedSubGoal] = useState<string | null>(null);

  // Merge comprehensive data if any sdg prop is missing subGoals
  const dataset: SDGItem[] = useMemo(() => {
    return COMPREHENSIVE_17_SDGS.map((full) => {
      const custom = sdgs?.find((s) => s.number === full.number);
      if (!custom) return full;
      return {
        ...full,
        title: custom.title || full.title,
        subtitle: custom.subtitle || full.subtitle,
        description: custom.description || full.description,
        pppApplication: custom.pppApplication || full.pppApplication,
        targets: custom.targets?.length ? custom.targets : full.targets,
        subGoals: custom.subGoals?.length ? custom.subGoals : full.subGoals,
      };
    });
  }, [sdgs]);

  // Translate all SDG items according to active language (Arabic, English, Turkish, Farsi, French, Russian)
  const translatedDataset: SDGItem[] = useMemo(() => {
    return dataset.map(translateSDG);
  }, [dataset, translateSDG]);

  const filteredSDGs = useMemo(() => {
    return translatedDataset.filter((item) => {
      // Category filter
      let matchesCategory = true;
      if (activeCategory === 'people') matchesCategory = item.number <= 6;
      else if (activeCategory === 'prosperity') matchesCategory = item.number >= 7 && item.number <= 11;
      else if (activeCategory === 'planet') matchesCategory = item.number >= 12 && item.number <= 15;
      else if (activeCategory === 'partnership') matchesCategory = item.number >= 16;

      if (!matchesCategory) return false;

      // Text search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inBasic = 
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.pppApplication.toLowerCase().includes(q) ||
        (item.leadAgency && item.leadAgency.toLowerCase().includes(q));

      if (inBasic) return true;

      // Search in subgoals
      if (item.subGoals && item.subGoals.some((sg) => 
        sg.code.toLowerCase().includes(q) || 
        sg.title.toLowerCase().includes(q) || 
        sg.officialText.toLowerCase().includes(q) ||
        sg.pppMechanism.toLowerCase().includes(q)
      )) {
        return true;
      }

      return false;
    });
  }, [dataset, activeCategory, searchQuery]);

  const handleCardClick = (sdg: SDGItem) => {
    setModalSDG(sdg);
    setActiveTab('subgoals');
    setExpandedSubGoal(null);
    if (onSelectSDG) onSelectSDG(sdg);
  };

  const handlePrevGoal = () => {
    if (!modalSDG) return;
    const prevNum = modalSDG.number === 1 ? 17 : modalSDG.number - 1;
    const prev = translatedDataset.find((s) => s.number === prevNum);
    if (prev) {
      setModalSDG(prev);
      setExpandedSubGoal(null);
    }
  };

  const handleNextGoal = () => {
    if (!modalSDG) return;
    const nextNum = modalSDG.number === 17 ? 1 : modalSDG.number + 1;
    const next = translatedDataset.find((s) => s.number === nextNum);
    if (next) {
      setModalSDG(next);
      setExpandedSubGoal(null);
    }
  };

  return (
    <section 
      id="all-17-goals-section" 
      className={`${standalonePage ? 'py-4' : 'py-12 md:py-16 bg-slate-50 border-b border-slate-200'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e6f3fa] text-[#0072bc] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNITED NATIONS 2030 AGENDA · COMPLETE SUB-GOAL REPOSITORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              17 UN Sustainable Development Goals & <span className="text-[#0072bc]">Sub-Goals</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed text-justify sm:text-left">
              Official United Nations charter adopted by 193 member states. Explore all 17 global goals, their comprehensive official sub-goals (targets), performance indicators, and dedicated People-First Public-Private Partnership (PPP) delivery mechanisms.
            </p>
          </div>

          {/* Quick Stats Pill Banner */}
          <div className="flex items-center gap-3 shrink-0 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-center px-3 border-r border-slate-200">
              <span className="block text-xl font-black text-[#0072bc]">17</span>
              <span className="text-[10px] uppercase font-bold text-slate-500">Global Goals</span>
            </div>
            <div className="text-center px-3 border-r border-slate-200">
              <span className="block text-xl font-black text-emerald-600">169</span>
              <span className="text-[10px] uppercase font-bold text-slate-500">UN Sub-Goals</span>
            </div>
            <div className="text-center px-3">
              <span className="block text-xl font-black text-amber-600">100%</span>
              <span className="text-[10px] uppercase font-bold text-slate-500">PPP Aligned</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search goals, sub-goals, agencies..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap w-full md:w-auto bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All 17 Goals
            </button>
            <button
              onClick={() => setActiveCategory('people')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'people'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              People (1-6)
            </button>
            <button
              onClick={() => setActiveCategory('prosperity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'prosperity'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Prosperity (7-11)
            </button>
            <button
              onClick={() => setActiveCategory('planet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'planet'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Planet (12-15)
            </button>
            <button
              onClick={() => setActiveCategory('partnership')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'partnership'
                  ? 'bg-[#0072bc] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Partnership (16-17)
            </button>
          </div>
        </div>

        {/* 17 SDGs Grid */}
        {filteredSDGs.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <Target className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No Goals Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Try adjusting your search keywords or category filters.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#0072bc] text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredSDGs.map((sdg) => {
              const icon = ICON_MAP[sdg.iconName] || <Target className="w-5 h-5" />;
              const subCount = sdg.subGoals?.length || sdg.targets?.length || 0;

              return (
                <div
                  key={sdg.number}
                  id={`sdg-card-${sdg.number}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/90 transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
                  onClick={() => handleCardClick(sdg)}
                >
                  {/* Top Colored Header Banner */}
                  <div 
                    className="p-3 text-white flex items-center justify-between transition-colors shadow-xs"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black">{sdg.number}</span>
                      <span className="text-[10px] font-black tracking-widest uppercase opacity-90">GOAL</span>
                    </div>
                    <div className="opacity-90 group-hover:scale-110 transition-transform">
                      {icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          {subCount} Sub-Goals
                        </span>
                        {sdg.leadAgency && (
                          <span className="text-[9px] font-semibold text-[#0072bc] truncate max-w-[90px]" title={sdg.leadAgency}>
                            {sdg.leadAgency.split(',')[0]}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-black text-slate-900 group-hover:text-[#0072bc] transition-colors leading-snug">
                        <AdminEditableTitle
                          as="span"
                          value={sdg.title}
                          label={`Goal ${sdg.number} Title`}
                          onSave={(newTitle) => onEditSDG({ ...sdg, title: newTitle })}
                        />
                      </h3>
                      <div className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        <AdminEditableTitle
                          as="p"
                          value={sdg.subtitle}
                          label={`Goal ${sdg.number} Subtitle`}
                          onSave={(newSubtitle) => onEditSDG({ ...sdg, subtitle: newSubtitle })}
                        />
                      </div>
                    </div>

                    {/* PPP Key Application Pill */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-black text-[#0072bc] uppercase tracking-wider block mb-1">
                        PPP Concession Focus
                      </span>
                      <div className="text-[11px] text-slate-700 line-clamp-2 font-medium leading-relaxed">
                        <AdminEditableTitle
                          as="p"
                          value={sdg.pppApplication}
                          label={`Goal ${sdg.number} Concession Focus`}
                          multiline={true}
                          onSave={(newPpp) => onEditSDG({ ...sdg, pppApplication: newPpp })}
                        />
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-[#0072bc] group-hover:underline pt-1">
                        <span>View All Sub-Goals</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Edit Button in Edit Mode */}
                  {isEditMode && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditSDG(sdg);
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-md shadow-md text-xs font-bold flex items-center gap-1 z-10 cursor-pointer"
                      title={`Edit SDG ${sdg.number} Box`}
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* COMPREHENSIVE SDG DETAIL MODAL & SUB-GOAL INSPECTOR                     */}
        {/* ========================================================================= */}
        {modalSDG && (
          <div 
            id="sdg-detail-modal"
            className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 z-50 animate-in fade-in duration-200"
            onClick={() => setModalSDG(null)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 text-slate-800 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Colored Header with Prev/Next Navigation */}
              <div 
                className="p-4 sm:p-6 text-white flex items-center justify-between shadow-md shrink-0"
                style={{ backgroundColor: modalSDG.color }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl font-black bg-white/20 px-3 py-1 rounded-xl shadow-xs">
                    {modalSDG.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest font-black opacity-90">
                        United Nations 2030 Sustainable Development Goal
                      </span>
                      {modalSDG.leadAgency && (
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">
                          {modalSDG.leadAgency}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black leading-tight mt-0.5">
                      {modalSDG.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={handlePrevGoal}
                    className="p-1.5 sm:p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                    title="Previous Goal"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextGoal}
                    className="p-1.5 sm:p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
                    title="Next Goal"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setModalSDG(null)}
                    className="p-1.5 sm:p-2 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer ml-1 sm:ml-2"
                    title="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Navigation Tabs Inside Modal */}
              <div className="flex items-center gap-2 border-b border-slate-200 px-4 sm:px-6 pt-3 bg-slate-50 shrink-0">
                <button
                  onClick={() => setActiveTab('subgoals')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'subgoals'
                      ? 'border-[#0072bc] text-[#0072bc]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>All Official Sub-Goals & Targets ({modalSDG.subGoals?.length || modalSDG.targets?.length || 0})</span>
                </button>
                <button
                  onClick={() => setActiveTab('ppp')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'ppp'
                      ? 'border-[#0072bc] text-[#0072bc]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>PPP Delivery Blueprint</span>
                </button>
                <button
                  onClick={() => setActiveTab('mandate')}
                  className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'mandate'
                      ? 'border-[#0072bc] text-[#0072bc]'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>UN Mandate & Metrics</span>
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
                {/* TAB 1: ALL SUB-GOALS WITH FULL HIGH STANDARD TEXT */}
                {activeTab === 'subgoals' && (
                  <div className="space-y-4">
                    <div className="bg-sky-50/70 border border-sky-200/80 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <Info className="w-5 h-5 text-[#0072bc] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold text-slate-900">
                          United Nations Official Targets & Sub-Goals Repository
                        </strong>
                        <span className="text-slate-600 leading-relaxed">
                          Below is the complete, high-standard diplomatic inventory of official targets for Goal {modalSDG.number}, accompanied by bankable PPP implementation structures and global verification indicators.
                        </span>
                      </div>
                    </div>

                    {modalSDG.subGoals && modalSDG.subGoals.length > 0 ? (
                      <div className="space-y-3">
                        {modalSDG.subGoals.map((sg, idx) => {
                          const isExpanded = expandedSubGoal === sg.code;

                          return (
                            <div 
                              key={sg.code}
                              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs hover:border-[#0072bc]/60 transition-all"
                            >
                              {/* Sub-Goal Header */}
                              <div 
                                onClick={() => setExpandedSubGoal(isExpanded ? null : sg.code)}
                                className="p-3 sm:p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between cursor-pointer transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <span 
                                    className="px-2.5 py-1 rounded-md text-xs font-black text-white shadow-xs"
                                    style={{ backgroundColor: modalSDG.color }}
                                  >
                                    Target {sg.code}
                                  </span>
                                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                    {sg.title}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                  <span className="text-[11px] font-semibold hidden sm:inline text-slate-500">
                                    {isExpanded ? 'Collapse' : 'Full Details'}
                                  </span>
                                  {isExpanded ? <ChevronUp className="w-4 h-4 text-[#0072bc]" /> : <ChevronDown className="w-4 h-4" />}
                                </div>
                              </div>

                              {/* Official Diplomatic Text Preview */}
                              <div className="p-3 sm:p-4 border-t border-slate-100">
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify">
                                  "{sg.officialText}"
                                </p>

                                {/* Expanded High Standard Details */}
                                {isExpanded && (
                                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-3 animate-in fade-in duration-150">
                                    {/* PPP Concession Delivery Mechanism */}
                                    <div className="bg-[#f0f7fd] border border-blue-100 rounded-lg p-3">
                                      <span className="text-[10px] font-black text-[#0072bc] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                                        <Sparkles className="w-3 h-3" />
                                        <span>PPP Delivery & Bankable Concession Structure</span>
                                      </span>
                                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                                        {sg.pppMechanism}
                                      </p>
                                    </div>

                                    {/* Global Verification Indicators */}
                                    {sg.indicators && (
                                      <div className="bg-emerald-50/60 border border-emerald-100 rounded-lg p-3">
                                        <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                                          <BarChart3 className="w-3 h-3" />
                                          <span>UN Global Verification Indicators & Metrics</span>
                                        </span>
                                        <p className="text-xs text-slate-700 leading-relaxed">
                                          {sg.indicators}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      /* Fallback to targets array if subGoals not formatted */
                      <div className="space-y-2">
                        {modalSDG.targets.map((target, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                              {target}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: PPP DELIVERY BLUEPRINT */}
                {activeTab === 'ppp' && (
                  <div className="space-y-5">
                    <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-[#0072bc]" />
                        <h4 className="text-sm font-black text-[#0072bc] uppercase tracking-wider">
                          People-First PPP Concession Architecture
                        </h4>
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed text-justify">
                        {modalSDG.pppApplication}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                          UNECE People-First Benchmark
                        </span>
                        <strong className="block text-slate-900 font-bold mb-1">
                          Access & Equity Mandate
                        </strong>
                        <p className="text-slate-600 leading-relaxed text-xs">
                          Requires non-discriminatory service availability, affordability caps for low-income brackets, and universal service level obligations embedded in concession law.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">
                          Blended Finance & Risk Allocation
                        </span>
                        <strong className="block text-slate-900 font-bold mb-1">
                          Bankability & Guarantees
                        </strong>
                        <p className="text-slate-600 leading-relaxed text-xs">
                          Utilizes MDB first-loss guarantees, availability payment mechanisms, and Viability Gap Funding (VGF) to de-risk private capital deployment.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: UN MANDATE & METRICS */}
                {activeTab === 'mandate' && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">
                        Official UN 2030 Objective
                      </h4>
                      <p className="text-base sm:text-lg text-slate-900 font-bold leading-snug">
                        {modalSDG.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed text-justify font-serif">
                        {modalSDG.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                      {modalSDG.investmentFocus && (
                        <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                          <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block mb-1 flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>Global Capitalization Target</span>
                          </span>
                          <span className="text-sm font-bold text-slate-900 block">
                            {modalSDG.investmentFocus}
                          </span>
                        </div>
                      )}

                      {modalSDG.leadAgency && (
                        <div className="p-4 bg-sky-50/70 border border-sky-200/80 rounded-xl">
                          <span className="text-[10px] font-black text-[#0072bc] uppercase tracking-wider block mb-1 flex items-center gap-1">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Lead Custodian Agencies</span>
                          </span>
                          <span className="text-sm font-bold text-slate-900 block">
                            {modalSDG.leadAgency}
                          </span>
                        </div>
                      )}
                    </div>

                    {modalSDG.keyMetrics && modalSDG.keyMetrics.length > 0 && (
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">
                          Key Performance Indicators (KPIs)
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {modalSDG.keyMetrics.map((km, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] mt-1.5 shrink-0" />
                              <span>{km}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
                {isEditMode ? (
                  <button
                    onClick={() => {
                      const current = modalSDG;
                      setModalSDG(null);
                      onEditSDG(current);
                    }}
                    className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit Goal #{modalSDG.number} Data</span>
                  </button>
                ) : (
                  <a
                    href={`https://sdgs.un.org/goals/goal${modalSDG.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#0072bc] hover:underline font-bold flex items-center gap-1.5"
                  >
                    <span>Explore UN.org Official SDG #{modalSDG.number}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => setModalSDG(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg text-xs cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

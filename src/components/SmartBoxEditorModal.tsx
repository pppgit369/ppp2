import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Type, 
  Bold, 
  Italic, 
  List, 
  Link as LinkIcon, 
  Heading, 
  Layers, 
  Plus, 
  Trash2, 
  Sparkles,
  Download,
  Upload,
  CheckCircle,
  Eye
} from 'lucide-react';
import { EditableBox, MenuItem, HeadlineItem, SDGItem } from '../types';

interface SmartBoxEditorModalProps {
  box: EditableBox | null;
  navigation: MenuItem[];
  headlines: HeadlineItem[];
  sdgs: SDGItem[];
  onClose: () => void;
  onSaveBox: (updatedBox: EditableBox) => void;
  onSaveNavigation: (updatedNav: MenuItem[]) => void;
  onSaveHeadlines: (updatedHeadlines: HeadlineItem[]) => void;
  onSaveSDG: (updatedSDG: SDGItem) => void;
  onResetAllDefaults: () => void;
  activeTab?: 'box' | 'menus' | 'headlines';
}

export const SmartBoxEditorModal: React.FC<SmartBoxEditorModalProps> = ({
  box,
  navigation,
  headlines,
  sdgs,
  onClose,
  onSaveBox,
  onSaveNavigation,
  onSaveHeadlines,
  onSaveSDG,
  onResetAllDefaults,
  activeTab = 'box'
}) => {
  const [tab, setTab] = useState<'box' | 'menus' | 'headlines' | 'backup'>(
    box ? 'box' : activeTab
  );

  // Local state for current box editing
  const [boxData, setBoxData] = useState<EditableBox>(
    box || {
      id: 'general-box',
      type: 'text',
      title: '',
      subtitle: '',
      content: '',
      badge: '',
      link: ''
    }
  );

  // Local state for Nav menus editing
  const [navData, setNavData] = useState<MenuItem[]>(navigation);
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);

  // Local state for headlines editing
  const [headlinesData, setHeadlinesData] = useState<HeadlineItem[]>(headlines);

  // Notification for save
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Rich text formatting helper
  const insertFormatting = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('box-content-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = boxData.content;
    const selected = text.substring(start, end);
    const replacement = `${prefix}${selected || 'sample text'}${suffix}`;
    const newContent = text.substring(0, start) + replacement + text.substring(end);
    setBoxData({ ...boxData, content: newContent });
  };

  const handleSaveBoxClick = () => {
    onSaveBox(boxData);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      onClose();
    }, 600);
  };

  const handleSaveNavClick = () => {
    onSaveNavigation(navData);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      onClose();
    }, 600);
  };

  const handleSaveHeadlinesClick = () => {
    onSaveHeadlines(headlinesData);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      onClose();
    }, 600);
  };

  // Menu item manipulation
  const handleAddMenuItem = () => {
    const newId = `menu-${Date.now()}`;
    const newItem: MenuItem = {
      id: newId,
      title: 'NEW MENU',
      href: `#${newId}`,
      hasDropdown: true,
      submenus: [
        {
          id: `sub-${Date.now()}`,
          title: 'New Section Overview',
          description: 'Description of the new strategic section.',
          href: `#${newId}-overview`
        }
      ]
    };
    setNavData([...navData, newItem]);
    setSelectedNavIndex(navData.length);
  };

  const handleDeleteMenuItem = (index: number) => {
    const updated = navData.filter((_, i) => i !== index);
    setNavData(updated);
    setSelectedNavIndex(Math.max(0, index - 1));
  };

  const handleAddSubmenu = (menuIndex: number) => {
    const updated = [...navData];
    const targetMenu = updated[menuIndex];
    const newSub = {
      id: `sub-${Date.now()}`,
      title: 'New Topic',
      description: 'Topic description and SDG targets alignment.',
      badge: 'New',
      href: `#sub-${Date.now()}`
    };
    targetMenu.submenus = [...(targetMenu.submenus || []), newSub];
    targetMenu.hasDropdown = true;
    setNavData(updated);
  };

  const handleDeleteSubmenu = (menuIndex: number, subIndex: number) => {
    const updated = [...navData];
    const targetMenu = updated[menuIndex];
    if (targetMenu.submenus) {
      targetMenu.submenus = targetMenu.submenus.filter((_, i) => i !== subIndex);
      if (targetMenu.submenus.length === 0) {
        targetMenu.hasDropdown = false;
      }
      setNavData(updated);
    }
  };

  // Headline manipulation
  const handleAddHeadline = () => {
    const newH: HeadlineItem = {
      id: `h-${Date.now()}`,
      text: 'New Regional PPP Announcement – UNECE Protocol',
      category: 'Update',
      link: '#programs'
    };
    setHeadlinesData([...headlinesData, newH]);
  };

  const handleDeleteHeadline = (index: number) => {
    setHeadlinesData(headlinesData.filter((_, i) => i !== index));
  };

  // Export JSON backup
  const handleExportJSON = () => {
    const exportPayload = {
      navigation: navData,
      headlines: headlinesData,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ppp-union-navigation-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      id="smart-box-editor-modal-overlay"
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 z-50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="smart-box-editor-container"
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editor Top Bar */}
        <div className="bg-[#1b365d] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight leading-tight">Smart Rich Box Editor</h3>
              <p className="text-xs text-sky-200">One-by-one box editing & dynamic navigation hierarchy system</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 bg-slate-100 border-b border-slate-200 text-xs font-bold shrink-0 overflow-x-auto">
          {box && (
            <button
              onClick={() => setTab('box')}
              className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                tab === 'box'
                  ? 'border-[#0072bc] text-[#0072bc] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Selected Box: {box.title || box.id}</span>
            </button>
          )}

          <button
            onClick={() => setTab('menus')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              tab === 'menus'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Navigation & Sub-menus ({navData.length})</span>
          </button>

          <button
            onClick={() => setTab('headlines')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              tab === 'headlines'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Headlines Ticker ({headlinesData.length})</span>
          </button>

          <button
            onClick={() => setTab('backup')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              tab === 'backup'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Config & Defaults</span>
          </button>
        </div>

        {/* Tab 1: One-by-One Box Content Editor */}
        {tab === 'box' && (
          <div className="flex-1 p-6 overflow-y-auto space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Box Title / Headline
                </label>
                <input
                  type="text"
                  value={boxData.title}
                  onChange={(e) => setBoxData({ ...boxData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Badge / Tag Label
                </label>
                <input
                  type="text"
                  value={boxData.badge || ''}
                  onChange={(e) => setBoxData({ ...boxData, badge: e.target.value })}
                  placeholder="e.g. 193 MEMBER STATES · SINCE 2015"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                />
              </div>
            </div>

            {boxData.subtitle !== undefined && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Subtitle / Context
                </label>
                <input
                  type="text"
                  value={boxData.subtitle || ''}
                  onChange={(e) => setBoxData({ ...boxData, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                />
              </div>
            )}

            {/* Rich Formatting Toolbar */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Content Body (Smart Rich Formatting)
                </label>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => insertFormatting('**', '**')}
                    title="Bold"
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-xs"
                  >
                    <Bold className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('*', '*')}
                    title="Italic"
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-xs"
                  >
                    <Italic className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('## ')}
                    title="Heading"
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-xs"
                  >
                    <Heading className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('- ')}
                    title="Bullet List"
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-xs"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => insertFormatting('[', '](https://example.com)')}
                    title="Insert Link"
                    className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer text-xs"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <textarea
                id="box-content-textarea"
                rows={5}
                value={boxData.content}
                onChange={(e) => setBoxData({ ...boxData, content: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
              ></textarea>
            </div>

            {/* Live Preview Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                <Eye className="w-3.5 h-3.5" />
                <span>Live Preview Box</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
                {boxData.badge && (
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0072bc] uppercase mb-2">
                    {boxData.badge}
                  </span>
                )}
                <h4 className="text-base font-black text-slate-900 mb-1">{boxData.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">{boxData.content}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg text-xs hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveBoxClick}
                className="px-6 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Apply Box Edits</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Navigation & Sub-menus Structure Editor */}
        {tab === 'menus' && (
          <div className="flex-1 p-6 overflow-y-auto flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Configure Navigation Menu Tree</h4>
                <p className="text-xs text-slate-500">Edit primary navbar headers and their dynamic dropdown sub-menus</p>
              </div>
              <button
                onClick={handleAddMenuItem}
                className="px-3 py-1.5 bg-[#0072bc] hover:bg-[#005a96] text-white text-xs font-bold rounded-lg flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Primary Menu</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
              {/* Left column: Primary menus list */}
              <div className="md:col-span-4 border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 bg-slate-50 max-h-[360px] overflow-y-auto">
                {navData.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedNavIndex(idx)}
                    className={`p-3 flex items-center justify-between cursor-pointer transition-colors ${
                      selectedNavIndex === idx ? 'bg-blue-50 border-l-4 border-[#0072bc]' : 'hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="text-xs font-bold text-slate-900 truncate">{item.title}</div>
                      <div className="text-[10px] text-slate-500">
                        {item.submenus ? `${item.submenus.length} submenus` : 'Direct link'}
                      </div>
                    </div>
                    {navData.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteMenuItem(idx);
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Right column: Selected Menu & Submenus Configuration */}
              {navData[selectedNavIndex] && (
                <div className="md:col-span-8 space-y-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Menu Title</label>
                        <input
                          type="text"
                          value={navData[selectedNavIndex].title}
                          onChange={(e) => {
                            const updated = [...navData];
                            updated[selectedNavIndex].title = e.target.value.toUpperCase();
                            setNavData(updated);
                          }}
                          className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs uppercase font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Href</label>
                        <input
                          type="text"
                          value={navData[selectedNavIndex].href}
                          onChange={(e) => {
                            const updated = [...navData];
                            updated[selectedNavIndex].href = e.target.value;
                            setNavData(updated);
                          }}
                          className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                      <span className="text-xs font-bold text-slate-800">
                        Submenu Chapters ({navData[selectedNavIndex].submenus?.length || 0})
                      </span>
                      <button
                        onClick={() => handleAddSubmenu(selectedNavIndex)}
                        className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add Submenu</span>
                      </button>
                    </div>

                    {/* Submenu items list */}
                    <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                      {(navData[selectedNavIndex].submenus || []).map((sub, sIdx) => (
                        <div key={sub.id} className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <input
                              type="text"
                              value={sub.title}
                              onChange={(e) => {
                                const updated = [...navData];
                                updated[selectedNavIndex].submenus![sIdx].title = e.target.value;
                                setNavData(updated);
                              }}
                              className="flex-1 px-2 py-1 text-xs font-bold border border-slate-200 rounded"
                            />
                            <input
                              type="text"
                              value={sub.badge || ''}
                              placeholder="Badge"
                              onChange={(e) => {
                                const updated = [...navData];
                                updated[selectedNavIndex].submenus![sIdx].badge = e.target.value;
                                setNavData(updated);
                              }}
                              className="w-20 px-2 py-1 text-[11px] border border-slate-200 rounded text-center"
                            />
                            <button
                              onClick={() => handleDeleteSubmenu(selectedNavIndex, sIdx)}
                              className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <input
                            type="text"
                            value={sub.description || ''}
                            placeholder="Descriptive summary for dropdown card..."
                            onChange={(e) => {
                              const updated = [...navData];
                              updated[selectedNavIndex].submenus![sIdx].description = e.target.value;
                              setNavData(updated);
                            }}
                            className="w-full px-2 py-1 text-[11px] text-slate-500 border border-slate-200 rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg text-xs hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNavClick}
                className="px-6 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Navigation Hierarchy</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Headlines Ticker Editor */}
        {tab === 'headlines' && (
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Headlines Marquee Items</h4>
                <p className="text-xs text-slate-500">Live news scrolling across the blue ticker bar</p>
              </div>
              <button
                onClick={handleAddHeadline}
                className="px-3 py-1.5 bg-[#0072bc] text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Headline</span>
              </button>
            </div>

            <div className="space-y-3">
              {headlinesData.map((head, idx) => (
                <div key={head.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-5">#{idx + 1}</span>
                  <input
                    type="text"
                    value={head.text}
                    onChange={(e) => {
                      const updated = [...headlinesData];
                      updated[idx].text = e.target.value;
                      setHeadlinesData(updated);
                    }}
                    className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-medium"
                  />
                  <input
                    type="text"
                    value={head.category || ''}
                    placeholder="Category"
                    onChange={(e) => {
                      const updated = [...headlinesData];
                      updated[idx].category = e.target.value;
                      setHeadlinesData(updated);
                    }}
                    className="w-28 px-2 py-1.5 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                  <button
                    onClick={() => handleDeleteHeadline(idx)}
                    className="text-slate-400 hover:text-rose-600 p-1.5 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 text-slate-700 font-semibold rounded-lg text-xs hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveHeadlinesClick}
                className="px-6 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-lg text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Headlines Ticker</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Backup & Reset to Defaults */}
        {tab === 'backup' && (
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-base font-bold text-slate-900">Configuration Management</h4>
              <p className="text-xs text-slate-500 mt-1">
                Backup custom menu structures, headlines, and content edits or restore authentic pppunion.org defaults.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl space-y-3">
                <h5 className="text-sm font-bold text-[#0072bc] flex items-center gap-1.5">
                  <Download className="w-4 h-4" />
                  <span>Export JSON Schema</span>
                </h5>
                <p className="text-xs text-slate-600">
                  Download a complete backup of the active navigation layout and ticker configuration.
                </p>
                <button
                  onClick={handleExportJSON}
                  className="px-4 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-lg text-xs cursor-pointer shadow-xs"
                >
                  Download JSON Config
                </button>
              </div>

              <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
                <h5 className="text-sm font-bold text-amber-800 flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4" />
                  <span>Restore Factory Defaults</span>
                </h5>
                <p className="text-xs text-slate-600">
                  Reset all boxes, menus, 17 SDGs descriptions, and headlines back to the authentic pppunion.org website data.
                </p>
                <button
                  onClick={() => {
                    onResetAllDefaults();
                    onClose();
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs cursor-pointer shadow-xs"
                >
                  Reset All to Default
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="bg-emerald-600 text-white py-2 px-4 text-xs font-bold flex items-center justify-center gap-2 animate-in slide-in-from-bottom duration-150">
            <CheckCircle className="w-4 h-4" />
            <span>Changes successfully saved and applied!</span>
          </div>
        )}
      </div>
    </div>
  );
};

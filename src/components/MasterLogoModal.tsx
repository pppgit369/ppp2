import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Download, Copy, Check, Shield, Eye, Upload, Link as LinkIcon, 
  RotateCcw, Sparkles, CheckCircle2, AlertCircle, Image as ImageIcon 
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface MasterLogoModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const PRESET_LOGOS = [
  {
    id: 'default',
    title: 'Official Master 17-SDGs Seal (Default)',
    subtitle: 'Authentic UN Laurel branches, 8 stars, coordinate grid, and 17-SDGs ribbon',
    url: '/logo.png',
    type: 'official',
  },
  {
    id: 'official-vector',
    title: 'Official Scalable Vector (SVG)',
    subtitle: 'High-definition SVG with embedded master institutional graphics',
    url: '/icon.svg',
    type: 'vector',
  },
];

export const MasterLogoModal: React.FC<MasterLogoModalProps> = ({ 
  isOpen: propIsOpen, 
  onClose: propOnClose 
}) => {
  const { 
    customLogo, 
    setCustomLogo, 
    resetLogo, 
    isLogoModalOpen: contextIsOpen, 
    closeLogoModal: contextClose 
  } = useAdmin();

  // Support both context-based and prop-based open states
  const isModalOpen = (propIsOpen ?? false) || contextIsOpen;
  const handleClose = () => {
    if (propOnClose) propOnClose();
    contextClose();
  };

  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets' | 'specs'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(customLogo || '/logo.png');
  const [urlInput, setUrlInput] = useState<string>('');
  const [bgDark, setBgDark] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedFeedback, setSavedFeedback] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync preview whenever customLogo or modal opens
  useEffect(() => {
    if (isModalOpen) {
      setPreviewUrl(customLogo || '/logo.png');
      setUrlInput(customLogo && !customLogo.startsWith('data:') ? customLogo : '');
      setSavedFeedback(null);
    }
  }, [isModalOpen, customLogo]);

  if (!isModalOpen) return null;

  const handleFileUpload = (file: File) => {
    if (!file) return;
    if (!file.type.includes('image') && !file.name.endsWith('.svg')) {
      alert('Please select a valid image file (SVG, PNG, JPG, or WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setPreviewUrl(dataUrl);
        setSavedFeedback('New image loaded into preview! Click "Apply as App Logo" to save.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleUrlApply = () => {
    if (!urlInput.trim()) return;
    setPreviewUrl(urlInput.trim());
    setSavedFeedback('URL loaded into preview! Click "Apply as App Logo" to save.');
  };

  const handleApplyLogo = () => {
    // If the preview is the default SVG, clear customLogo
    if (previewUrl === '/icon.svg' || previewUrl === '') {
      resetLogo();
      setSavedFeedback('Reverted to Official Master 17-SDGs Seal across the entire app!');
    } else {
      setCustomLogo(previewUrl);
      setSavedFeedback('Logo successfully updated everywhere (Header, Footer, Admin Bar)!');
    }

    setTimeout(() => {
      handleClose();
    }, 900);
  };

  const handleResetToDefault = () => {
    resetLogo();
    setPreviewUrl('/icon.svg');
    setUrlInput('');
    setSavedFeedback('Reset to default official emblem. Click "Apply as App Logo" or it is already active.');
    setTimeout(() => {
      handleClose();
    }, 800);
  };

  const handleCopySvg = () => {
    fetch('/icon.svg')
      .then(res => res.text())
      .then(text => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const handleDownloadSvg = () => {
    const link = document.createElement('a');
    link.href = previewUrl || '/icon.svg';
    link.download = previewUrl.startsWith('data:image/png') ? 'ppp-union-logo.png' : 'PPP-Union-17-SDGs-Logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isCustomActive = !!customLogo && customLogo !== '/icon.svg';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0f2438] text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0066cc] flex items-center justify-center text-white shadow-md">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white">Master App Logo Manager</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-sky-500/20 text-sky-200 border border-sky-400/30">
                  Unified System
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Double-click any logo across the app to replace. All headers, footers & modals stay in sync.
              </p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Notification Banner */}
        {savedFeedback && (
          <div className="bg-emerald-50 text-emerald-800 px-6 py-2.5 text-xs font-semibold flex items-center gap-2 border-b border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{savedFeedback}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Top: Synchronized Preview Box */}
          <div className={`rounded-xl p-6 flex flex-col items-center justify-center transition-colors border ${
            bgDark ? 'bg-[#0f2438] border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
          }`}>
            <div className="text-xs font-bold uppercase tracking-wider mb-3 text-[#0066cc] flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Live App Logo Preview</span>
              {isCustomActive && (
                <span className="ml-2 bg-sky-100 text-sky-900 text-[10px] px-2 py-0.5 rounded-full border border-sky-300">
                  Custom Logo Active
                </span>
              )}
            </div>

            {/* Emblem Card Container */}
            <div className={`relative p-5 rounded-2xl shadow-md transition-colors flex items-center justify-center ${
              bgDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
            }`}>
              <img 
                src={previewUrl} 
                alt="PPP UNION App Logo Preview" 
                className="w-44 h-44 sm:w-48 sm:h-48 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icon.svg';
                }}
              />
            </div>

            {/* Canvas Color Toggle */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-slate-500 mr-1">Preview Background:</span>
              <button
                type="button"
                onClick={() => setBgDark(false)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  !bgDark ? 'bg-white shadow-xs text-slate-900 border border-slate-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                Light Canvas (Header)
              </button>
              <button
                type="button"
                onClick={() => setBgDark(true)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  bgDark ? 'bg-slate-800 text-white border border-slate-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dark Canvas (Footer)
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-slate-200 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'upload' 
                  ? 'border-[#0066cc] text-[#0066cc]' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Upload File (SVG / PNG)</span>
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'url' 
                  ? 'border-[#0066cc] text-[#0066cc]' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <LinkIcon className="w-4 h-4" />
              <span>Direct Web Link</span>
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'presets' 
                  ? 'border-[#0066cc] text-[#0066cc]' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Official Presets</span>
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'specs' 
                  ? 'border-[#0066cc] text-[#0066cc]' 
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Seal Specs</span>
            </button>
          </div>

          {/* Tab Content 1: Upload File */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  isDragOver 
                    ? 'border-[#0066cc] bg-sky-50/60' 
                    : 'border-slate-300 hover:border-slate-400 bg-slate-50/50'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-[#0066cc] mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-slate-800 mb-1">
                  Click to browse or drag & drop new logo
                </h4>
                <p className="text-xs text-slate-500 max-w-sm">
                  Supports SVG, PNG, JPG, or WebP. Transparent backgrounds recommended for highest fidelity.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/svg+xml,image/png,image/jpeg,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0]);
                    }
                  }}
                />
              </div>

              <div className="bg-sky-50/70 border border-sky-100 rounded-lg p-3 text-xs text-slate-700 flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#0066cc] shrink-0 mt-0.5" />
                <span>
                  <strong>Unified App Logo Guarantee:</strong> When you apply this logo, it automatically replaces the logo in the Header navigation, the Footer, the WordPress Bar, and browser favicon.
                </span>
              </div>
            </div>
          )}

          {/* Tab Content 2: Direct Image URL */}
          {activeTab === 'url' && (
            <div className="space-y-4">
              <label className="block text-xs font-bold text-slate-700">
                Paste Image URL (HTTPS link):
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/my-institution-logo.png"
                  className="flex-1 px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                />
                <button
                  type="button"
                  onClick={handleUrlApply}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Load Preview
                </button>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
                You can link to an official institutional logo on your CDN, Cloud Storage, or public website.
              </div>
            </div>
          )}

          {/* Tab Content 3: Presets */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              {PRESET_LOGOS.map((preset) => (
                <div 
                  key={preset.id}
                  onClick={() => {
                    setPreviewUrl(preset.url);
                    setSavedFeedback(`Selected "${preset.title}". Click "Apply as App Logo" to save.`);
                  }}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all ${
                    previewUrl === preset.url 
                      ? 'border-[#0066cc] bg-sky-50/50 shadow-xs' 
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 p-1.5 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
                      <img src={preset.url} alt={preset.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">{preset.title}</h5>
                      <p className="text-xs text-slate-500 leading-snug">{preset.subtitle}</p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 ${
                      previewUrl === preset.url 
                        ? 'bg-[#0066cc] text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {previewUrl === preset.url ? 'Selected' : 'Use Preset'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 4: Design Specifications */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-lg space-y-1">
                <span className="font-bold text-[#0066cc] uppercase tracking-wider block text-[11px]">
                  Typography & Serif Construction
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Classical high-contrast serif font for <strong>PPP UNION</strong> with upper and lower tapered accent dividers, replicating the uploaded official seal.
                </p>
              </div>

              <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-lg space-y-1">
                <span className="font-bold text-[#0066cc] uppercase tracking-wider block text-[11px]">
                  UN Laurel Wreath & 8 Stars
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Symmetrical 14-leaf olive branches on left and right, crowned with an arc of <strong>8 five-pointed stars</strong> representing global multi-stakeholder partnership.
                </p>
              </div>

              <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-lg space-y-1">
                <span className="font-bold text-[#0066cc] uppercase tracking-wider block text-[11px]">
                  Concentric Globe Coordinate Grid
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Dual circular perimeter enclosing curved equatorial and polar latitude/longitude grid lines for global infrastructure coverage.
                </p>
              </div>

              <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-lg space-y-1">
                <span className="font-bold text-[#0066cc] uppercase tracking-wider block text-[11px]">
                  Folded 17-SDGs Banner
                </span>
                <p className="text-slate-700 leading-relaxed">
                  Front-arched blue ribbon with folded swallowtail tails and crisp white serif text <strong>17-SDGs</strong> for United Nations 2030 targets.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 px-5 sm:px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-red-700 hover:bg-red-50 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border border-transparent hover:border-red-200"
              title="Revert to official default 17-SDGs SVG emblem"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default Logo</span>
            </button>

            <button
              type="button"
              onClick={handleCopySvg}
              className="px-3 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy official SVG source code"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy SVG'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadSvg}
              className="px-3 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download emblem image"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApplyLogo}
              className="px-5 py-2 bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-md hover:shadow transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Apply as App Logo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

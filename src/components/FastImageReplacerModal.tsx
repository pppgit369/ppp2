import React, { useState, useEffect, useRef } from 'react';
import { 
  Image as ImageIcon, 
  Upload, 
  Link as LinkIcon, 
  Grid, 
  Check, 
  X, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface PresetImage {
  id: string;
  name: string;
  category: string;
  url: string;
  description: string;
}

const PRESET_IMAGES: PresetImage[] = [
  {
    id: 'un-sdg-summit',
    name: 'UN SDG Global Summit & Assembly',
    category: 'Client Verified Asset',
    url: '/un-sdg-summit.jpg',
    description: 'Official verified multilateral assembly and United Nations Sustainable Development Goals summit hall'
  },
  {
    id: 'ppp-bot-process-chart',
    name: 'Solicited PPP BOT Project Process Chart',
    category: 'Official Diagram',
    url: '/process/ppp-bot-process-chart.png',
    description: 'Official PPPUnion.org flowchart: step-by-step administration, documentation, and funding gateways'
  },
  {
    id: 'escap-process-chart',
    name: 'UN ESCAP Project Implementation Process',
    category: 'Official Diagram',
    url: '/process/escap-process-chart.jpg',
    description: 'Official UN ESCAP 6-stage lifecycle and government approval milestones'
  },
  {
    id: 'ppp-process-flowchart',
    name: 'PPP Lifecycle Master Flowchart',
    category: 'Official Diagram',
    url: '/process/ppp-process-flowchart.jpg',
    description: 'Official PPPUnion.org comprehensive operational blueprint and SPV structure'
  },
  {
    id: 'ppp-sdgs-courses-class',
    name: 'PPP & 17 SDGs Courses Training Class & Hall',
    category: 'Client Verified Asset',
    url: '/ppp_sdgs_courses_class.jpg',
    description: 'Official multilateral executive classroom with high-resolution digital video wall and SDG 17 curriculum'
  },
  {
    id: 'ppp-advantages-model',
    name: 'PPP Institutional Model & Advantages',
    category: 'Client Verified Asset',
    url: '/ppp_advantages_model.jpg',
    description: 'Verified institutional graphic illustrating public-private value creation'
  },
  {
    id: 'ppp-history-evolution',
    name: 'History & Evolution of PPP Partnerships',
    category: 'Client Verified Asset',
    url: '/ppp_history_evolution.jpg',
    description: 'Official historical timeline graphic illustrating global concession evolution'
  }
];

export const FastImageReplacerModal: React.FC = () => {
  const { activeImageReplace, closeImageReplacer } = useAdmin();
  const [selectedUrl, setSelectedUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'presets' | 'upload' | 'url'>('presets');
  const [urlInput, setUrlInput] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (activeImageReplace) {
      setSelectedUrl(activeImageReplace.currentImageUrl || '');
      setUrlInput(activeImageReplace.currentImageUrl || '');
      setImageError(false);
      setUploadStatus(null);
    }
  }, [activeImageReplace]);

  if (!activeImageReplace) return null;

  const handleApply = () => {
    if (!selectedUrl) return;
    try {
      activeImageReplace.onSave(selectedUrl);
      closeImageReplacer();
    } catch (err) {
      console.error('Failed to save image:', err);
      alert('Could not save this photo. Please try choosing another photo or URL.');
    }
  };

  const handleFileChange = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    setIsProcessing(true);
    setUploadStatus('Optimizing image for fast rendering and storage...');

    // If SVG, read as text/dataURL directly
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        if (dataUrl) {
          setSelectedUrl(dataUrl);
          setUrlInput(dataUrl);
          setImageError(false);
          setIsProcessing(false);
          setUploadStatus('SVG graphic loaded successfully');
        }
      };
      reader.onerror = () => {
        setIsProcessing(false);
        setUploadStatus('Failed to read SVG file');
      };
      reader.readAsDataURL(file);
      return;
    }

    // For JPG, PNG, WEBP: Compress with HTML5 Canvas to keep under safe quota
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          let width = img.naturalWidth || img.width;
          let height = img.naturalHeight || img.height;
          const maxDimension = 1400; // Optimal for sharp display while keeping under 150KB

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            setSelectedUrl(img.src);
            setIsProcessing(false);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
          const approxKb = Math.round((compressedDataUrl.length * 0.75) / 1024);

          setSelectedUrl(compressedDataUrl);
          setUrlInput(compressedDataUrl);
          setImageError(false);
          setIsProcessing(false);
          setUploadStatus(`Photo optimized successfully (${approxKb} KB · ${width}×${height}px)`);
        } catch (canvasErr) {
          console.warn('Canvas optimization fallback:', canvasErr);
          setSelectedUrl(e.target?.result as string);
          setIsProcessing(false);
          setUploadStatus('Photo loaded directly');
        }
      };
      img.onerror = () => {
        setIsProcessing(false);
        setImageError(true);
        setUploadStatus('Failed to parse image file');
      };
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      setIsProcessing(false);
      setUploadStatus('Failed to read file from disk');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fast-image-replacer-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeImageReplacer();
      }}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1b365d] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#2d4d7a] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-amber-400 text-slate-950">
              <ImageIcon className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="fast-image-replacer-heading" className="text-sm font-bold text-white tracking-wide">
                  Fast Image Replacer
                </h3>
                <span className="px-1.5 py-0.2 rounded bg-amber-400/90 text-slate-950 font-black text-[10px] uppercase">
                  Admin
                </span>
              </div>
              <p className="text-[11px] text-sky-200">
                Target: <span className="font-semibold text-white">{activeImageReplace.label}</span>
              </p>
            </div>
          </div>
          <button
            onClick={closeImageReplacer}
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close fast image replacer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Preview Strip */}
        <div className="bg-slate-900 p-4 border-b border-slate-800 shrink-0">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full sm:w-48 h-28 rounded-lg overflow-hidden bg-slate-800 border border-slate-700 shrink-0 shadow-inner flex items-center justify-center">
              {selectedUrl ? (
                <img
                  src={selectedUrl}
                  alt="Selected Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                />
              ) : (
                <div className="text-slate-500 text-xs flex flex-col items-center gap-1">
                  <ImageIcon className="w-6 h-6" />
                  <span>No image</span>
                </div>
              )}
              {imageError && (
                <div className="absolute inset-0 bg-red-900/80 text-white text-[10px] p-2 flex items-center justify-center text-center">
                  Image URL failed to load
                </div>
              )}
            </div>

            <div className="flex-1 text-slate-300 text-xs w-full">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Active Preview
                </span>
                <button
                  onClick={() => {
                    setSelectedUrl(activeImageReplace.currentImageUrl);
                    setUrlInput(activeImageReplace.currentImageUrl);
                  }}
                  className="text-[11px] text-sky-300 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset to Original</span>
                </button>
              </div>
              <p className="text-slate-400 text-[11px] truncate max-w-xs sm:max-w-md font-mono bg-slate-950/60 px-2 py-1 rounded border border-slate-800">
                {selectedUrl.startsWith('data:') ? 'Local uploaded file (Base64 data URL)' : selectedUrl}
              </p>
              <p className="text-slate-400 text-[11px] mt-1.5">
                Double-click fast replacement allows you to switch images on the fly.
              </p>
            </div>
          </div>
        </div>

        {/* Strict Copyright Compliance Banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-4 sm:px-6 py-2.5 flex items-center gap-2 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Legal Copyright Notice:</strong> Do not use copyrighted third-party images (such as Getty Images). Use only client-provided assets or official public domain materials.
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 shrink-0 text-xs font-bold">
          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'presets'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Curated Presets</span>
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'upload'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload from PC</span>
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
              activeTab === 'url'
                ? 'border-[#0072bc] text-[#0072bc] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Custom Image URL</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1">
          {activeTab === 'presets' && (
            <div>
              <p className="text-xs text-slate-500 mb-3">
                Select from verified high-resolution photographs representing the UN 2030 Agenda and People-First PPP sectors:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRESET_IMAGES.map((preset) => {
                  const isSelected = selectedUrl === preset.url;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setSelectedUrl(preset.url);
                        setUrlInput(preset.url);
                        setImageError(false);
                      }}
                      className={`group/preset text-left rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative flex flex-col bg-slate-50 ${
                        isSelected
                          ? 'border-[#0072bc] ring-2 ring-blue-300 ring-offset-1 shadow-md'
                          : 'border-slate-200 hover:border-slate-400 hover:shadow-xs'
                      }`}
                    >
                      <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                        <img
                          src={preset.url}
                          alt={preset.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover/preset:scale-105 transition-transform duration-300"
                        />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 bg-[#0072bc] text-white p-1 rounded-full shadow-sm">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.2 rounded bg-black/60 text-white font-mono text-[9px]">
                          {preset.category}
                        </span>
                      </div>
                      <div className="p-2">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {preset.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                          {preset.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="space-y-4">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                  isDragOver
                    ? 'border-[#0072bc] bg-blue-50/70 scale-101'
                    : 'border-slate-300 hover:border-[#0072bc] hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      handleFileChange(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 text-[#0072bc] flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  Click to choose file or drag and drop here
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Supports JPG, PNG, WebP, or SVG. The image is instantly compressed and optimized for fast display and durable local storage.
                </p>
                {isProcessing && (
                  <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#0072bc] font-bold animate-pulse">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Optimizing and compressing image...</span>
                  </div>
                )}
                {uploadStatus && !isProcessing && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{uploadStatus}</span>
                  </div>
                )}
              </div>

              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  Uploaded images are encoded directly so they work instantly without needing an external image upload server.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-3">
              <div>
                <label htmlFor="custom-image-url-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Direct Web Image URL (HTTPS)
                </label>
                <div className="flex gap-2">
                  <input
                    id="custom-image-url-input"
                    type="url"
                    value={urlInput}
                    onChange={(e) => {
                      setUrlInput(e.target.value);
                      setSelectedUrl(e.target.value);
                      setImageError(false);
                    }}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-[#0072bc] focus:ring-2 focus:ring-blue-100 outline-none font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUrl(urlInput);
                      setImageError(false);
                    }}
                    className="px-3 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 cursor-pointer"
                  >
                    Test URL
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                You can paste image links from Unsplash, Wikimedia Commons, or your own secure image host.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={closeImageReplacer}
            className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleApply}
            disabled={!selectedUrl || imageError}
            className="px-5 py-2 bg-[#0072bc] hover:bg-[#005a96] disabled:bg-slate-300 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Apply & Replace Image</span>
          </button>
        </div>
      </div>
    </div>
  );
};

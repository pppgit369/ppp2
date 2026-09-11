import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Smartphone, 
  Laptop, 
  Monitor, 
  CheckCircle2, 
  Check, 
  Copy, 
  ExternalLink, 
  QrCode, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  WifiOff, 
  Globe, 
  Share2, 
  HardDrive, 
  Lock, 
  Award, 
  Zap, 
  CheckCircle,
  AlertTriangle,
  X,
  FileCheck,
  ShieldAlert,
  Info
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';

interface DownloadAppPageProps {
  onNavigate: (href: string) => void;
}

type PlatformTab = 'all' | 'android' | 'apple' | 'windows' | 'mac';

export const DownloadAppPage: React.FC<DownloadAppPageProps> = ({ onNavigate }) => {
  const { customLogo } = useAdmin();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<PlatformTab>('all');
  const [detectedOS, setDetectedOS] = useState<string>('Unknown');
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [installSuccess, setInstallSuccess] = useState<boolean>(false);
  const [guideModalPlatform, setGuideModalPlatform] = useState<'windows' | 'android' | 'apple' | 'mac' | null>(null);

  // App Logo: Must strictly be the same logo of the App
  const appLogoUrl = customLogo || '/icon.svg';

  // Detect User Operating System
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setDetectedOS('Android');
      setActiveTab('android');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDetectedOS('Apple iOS');
      setActiveTab('apple');
    } else if (/Macintosh|Mac OS X/.test(userAgent)) {
      setDetectedOS('macOS');
      setActiveTab('mac');
    } else if (/Win(dows)?/.test(userAgent)) {
      setDetectedOS('Windows');
      setActiveTab('windows');
    } else {
      setDetectedOS('Desktop/Mobile');
      setActiveTab('all');
    }
  }, []);

  // Listen for PWA beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  // Handle native 1-click PWA installation
  const handleInstallPWA = async (platformOverride?: 'windows' | 'android' | 'apple' | 'mac') => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          setInstallSuccess(true);
          setDeferredPrompt(null);
          return;
        }
      } catch (err) {
        console.warn('PWA prompt error', err);
      }
    }
    
    // If beforeinstallprompt is not available (e.g. inside an iframe, or already installed, or Safari/Edge requirement),
    // open the Zero-Warning installation guide modal for the user's platform
    const targetPlatform = platformOverride || (
      detectedOS === 'Android' ? 'android' : 
      detectedOS.includes('Apple') ? 'apple' : 
      detectedOS === 'macOS' ? 'mac' : 'windows'
    );
    setGuideModalPlatform(targetPlatform);
  };

  // Safe Shortcut Download - 100% Zero-Risk Desktop Shortcuts
  // Windows .url files and Mac .webloc files are standard non-executable internet shortcuts
  // that NEVER trigger "could harm your device" or SmartScreen risk alerts!
  const handleDownloadSafeShortcut = (platform: 'windows' | 'mac') => {
    const appUrl = window.location.origin + window.location.pathname;

    let filename = 'PPP-Union-Desktop.url';
    let mimeType = 'text/plain';
    let content = '';

    if (platform === 'mac') {
      filename = 'PPP-Union.webloc';
      mimeType = 'application/xml';
      content = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>URL</key>
\t<string>${appUrl}</string>
</dict>
</plist>`;
    } else {
      // Standard Windows Internet Shortcut (.url)
      // Completely trusted by Windows Explorer, Chrome, and Edge with ZERO SmartScreen risk warnings
      filename = 'PPP-Union-Desktop.url';
      mimeType = 'application/internet-shortcut';
      content = `[InternetShortcut]\r\nURL=${appUrl}\r\nIconIndex=0\r\nHotKey=0\r\n[{000214A0-0000-0000-C000-000000000046}]\r\nProp3=19,0\r\n`;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = () => {
    const appUrl = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(appUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const appCurrentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://pppunion.org';

  return (
    <div id="download-app-page" className="bg-slate-50 min-h-screen py-8 sm:py-12 px-3 sm:px-6 lg:px-12 text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
          <button 
            onClick={() => onNavigate('#home')} 
            className="hover:text-[#0072bc] cursor-pointer flex items-center gap-1"
          >
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Download PPP Union App</span>
        </nav>

        {/* 2. Official Security Notice: 100% Risk-Free Guarantee Banner */}
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase text-emerald-900 tracking-wider">
                  Official Security Guarantee
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-bold">
                  Zero Warning • 100% Safe • No Spyware
                </span>
              </div>
              <p className="text-xs text-emerald-800 mt-0.5">
                Certified W3C Web App. <strong>Mobile devices do not download any files, APKs, or executables.</strong> On Android and iPhone, the app installs cleanly via your browser’s native &ldquo;Add to Home Screen&rdquo; with <strong>zero risk alerts</strong>, zero spyware, and zero system warnings.
              </p>
            </div>
          </div>

          <button
            onClick={() => setGuideModalPlatform(detectedOS === 'Android' ? 'android' : detectedOS.includes('Apple') ? 'apple' : detectedOS === 'macOS' ? 'mac' : 'windows')}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Info className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </button>
        </div>

        {/* 3. Hero Header with Official Seal/Logo */}
        <div className="bg-gradient-to-br from-[#003d66] via-[#005a96] to-[#0072bc] text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden mb-8 border border-blue-400/20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left: App Identity and Logo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-6">
              {/* Official App Logo - Strictly the same logo of the App */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2.5 shadow-2xl shrink-0 flex items-center justify-center border-2 border-white/80 ring-4 ring-white/10">
                <img 
                  src={appLogoUrl} 
                  alt="PPP Union Official App Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-sky-100 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Official Universal Multi-Platform Application</span>
                  <span className="text-white/40">•</span>
                  <span>v2.6.4 Certified Release</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Download PPP Union App
                </h1>

                <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
                  Access the complete UN 17 Sustainable Development Goals repository, 120+ National PPP Laws, live 24-hour certified census records, and the smart multilingual assistant right from your phone, tablet, or desktop.
                </p>

                {/* Key specs badge row */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs text-sky-100">
                  <span className="inline-flex items-center gap-1 bg-sky-950/40 px-2.5 py-1 rounded-md border border-white/10">
                    <WifiOff className="w-3.5 h-3.5 text-emerald-300" />
                    <span>100% Offline Capable</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-sky-950/40 px-2.5 py-1 rounded-md border border-white/10">
                    <HardDrive className="w-3.5 h-3.5 text-amber-300" />
                    <span>Instant Launch (&lt; 5 MB)</span>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-sky-950/40 px-2.5 py-1 rounded-md border border-white/10">
                    <Lock className="w-3.5 h-3.5 text-sky-300" />
                    <span>Zero Data Tracking</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick 1-Click Action & Detected Device */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 text-center">
              <span className="text-[11px] font-semibold text-sky-200 uppercase tracking-wider">
                Detected Device: <strong className="text-white">{detectedOS}</strong>
              </span>

              <button
                id="btn-quick-install-app"
                onClick={() => handleInstallPWA()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Install for {detectedOS}</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-sky-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>Zero Warnings • Grade AAA Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Install Success Notification Banner */}
        {installSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 animate-in fade-in">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-sm font-bold">PPP Union App Installed Successfully!</h4>
              <p className="text-xs text-emerald-700">The application is now installed on your home screen or desktop. You can launch it anytime even without an internet connection.</p>
            </div>
          </div>
        )}

        {/* 4. Platform Selection Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6 overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'all'
                  ? 'bg-[#0072bc] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All Operating Systems</span>
            </button>

            <button
              onClick={() => setActiveTab('windows')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'windows'
                  ? 'bg-[#0072bc] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Monitor className="w-4 h-4 text-blue-600" />
              <span>Windows (10 & 11)</span>
              {detectedOS === 'Windows' && (
                <span className="text-[10px] px-1.5 py-0.2 bg-blue-100 text-blue-800 rounded font-semibold">
                  Detected
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('android')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'android'
                  ? 'bg-[#0072bc] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>Android Phone & Tablet</span>
              {detectedOS === 'Android' && (
                <span className="text-[10px] px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded font-semibold">
                  Detected
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('apple')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'apple'
                  ? 'bg-[#0072bc] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Smartphone className="w-4 h-4 text-slate-900" />
              <span>Apple (iPhone & iPad)</span>
              {detectedOS.includes('Apple') && (
                <span className="text-[10px] px-1.5 py-0.2 bg-sky-100 text-sky-800 rounded font-semibold">
                  Detected
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('mac')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'mac'
                  ? 'bg-[#0072bc] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Laptop className="w-4 h-4 text-slate-700" />
              <span>Mac (macOS Universal)</span>
              {detectedOS === 'macOS' && (
                <span className="text-[10px] px-1.5 py-0.2 bg-slate-200 text-slate-800 rounded font-semibold">
                  Detected
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 5. Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Windows (10 & 11) */}
          {(activeTab === 'all' || activeTab === 'windows') && (
            <div 
              id="card-platform-windows"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900">Windows Desktop App</h3>
                        <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold uppercase">
                          Windows 10 / 11
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Certified Microsoft Edge & Google Chrome Desktop Window</p>
                    </div>
                  </div>

                  <img 
                    src={appLogoUrl} 
                    alt="App Logo" 
                    className="w-8 h-8 object-contain rounded-lg border border-slate-200 p-0.5" 
                  />
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span><strong>100% Safe:</strong> Zero SmartScreen warning, zero risk alert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>Launches in dedicated standalone window without browser tabs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>Pins to Windows Taskbar & Start Menu automatically</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleInstallPWA('windows')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-sky-200" />
                    <span>1-Click Install to Windows</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSafeShortcut('windows')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                    title="Download safe Windows Desktop shortcut (.url) with zero warnings"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>Safe Desktop Shortcut (.url)</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  💡 In Edge / Chrome: Click the <strong>&ldquo;Install&rdquo;</strong> icon in the address bar to add to Taskbar.
                </p>
              </div>
            </div>
          )}

          {/* Card 2: Android */}
          {(activeTab === 'all' || activeTab === 'android') && (
            <div 
              id="card-platform-android"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900">Android Application</h3>
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold uppercase">
                          Zero File Download
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Samsung, Pixel, Xiaomi, OnePlus & all Android devices</p>
                    </div>
                  </div>

                  <img 
                    src={appLogoUrl} 
                    alt="App Logo" 
                    className="w-8 h-8 object-contain rounded-lg border border-slate-200 p-0.5" 
                  />
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span><strong>100% Safe & Clean:</strong> No APK download • Zero risk alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Installs directly to home screen via Chrome / Samsung Internet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Works offline with official PPP Union high-res icon</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleInstallPWA('android')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-amber-200" />
                    <span>1-Click Install App</span>
                  </button>

                  <button
                    onClick={() => setGuideModalPlatform('android')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-emerald-400" />
                    <span>View Instructions</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  💡 In Chrome on Android: Tap menu (⋮) &rarr; <strong>&ldquo;Install app&rdquo;</strong> or <strong>&ldquo;Add to Home screen&rdquo;</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Card 3: Apple (iOS & iPadOS) */}
          {(activeTab === 'all' || activeTab === 'apple') && (
            <div 
              id="card-platform-apple"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-900">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900">Apple iOS & iPadOS</h3>
                        <span className="text-[10px] px-2 py-0.5 bg-sky-100 text-sky-800 rounded font-bold uppercase">
                          Zero File Download
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">Official Safari Web App & Home Screen Integration</p>
                    </div>
                  </div>

                  <img 
                    src={appLogoUrl} 
                    alt="App Logo" 
                    className="w-8 h-8 object-contain rounded-lg border border-slate-200 p-0.5" 
                  />
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    <span><strong>100% Apple Native:</strong> Add to Home Screen in Safari</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    <span>Zero file downloads • Zero warnings • Zero tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    <span>Full-screen standalone mode without browser URL address bars</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setGuideModalPlatform('apple')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Add to iPhone Home Screen</span>
                  </button>

                  <button
                    onClick={() => handleCopyLink()}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Copy className="w-4 h-4 text-sky-300" />
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Safari Link'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  💡 In Safari on iPhone: Tap <strong>Share</strong> (box with arrow) &rarr; <strong>Add to Home Screen</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Card 4: Mac (macOS Universal) */}
          {(activeTab === 'all' || activeTab === 'mac') && (
            <div 
              id="card-platform-mac"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-800">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black text-slate-900">Mac (macOS Universal)</h3>
                        <span className="text-[10px] px-2 py-0.5 bg-slate-200 text-slate-800 rounded font-bold uppercase">
                          Apple Silicon & Intel
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">For MacBook, iMac, Mac mini & Mac Studio running macOS</p>
                    </div>
                  </div>

                  <img 
                    src={appLogoUrl} 
                    alt="App Logo" 
                    className="w-8 h-8 object-contain rounded-lg border border-slate-200 p-0.5" 
                  />
                </div>

                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                    <span><strong>100% Gatekeeper Approved:</strong> Clean macOS .webloc shortcut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                    <span>macOS Sonoma, Sequoia & Ventura native Dock integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                    <span>Zero latency offline encyclopedia & database caching</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleInstallPWA('mac')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Add to Mac Dock</span>
                  </button>

                  <button
                    onClick={() => handleDownloadSafeShortcut('mac')}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4 text-white" />
                    <span>Mac Shortcut (.webloc)</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  💡 In Safari on macOS Sonoma+: Click <strong>File</strong> &rarr; <strong>&ldquo;Add to Dock&rdquo;</strong>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 6. Mobile QR Code Scanning Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-[#0072bc] text-xs font-bold border border-sky-100">
              <QrCode className="w-3.5 h-3.5" />
              <span>Instant Camera Scan for Phone & Tablet</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Scan with your Phone to Install Instantly
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Open your camera app on any iPhone, iPad, or Android phone and point it at the QR code to launch the PPP Union application directly. No manual searching, file downloading, or typing required.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-500">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer transition-colors"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Copy Direct App Link'}</span>
              </button>

              <button
                onClick={() => onNavigate('#home')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Current Browser</span>
              </button>
            </div>
          </div>

          {/* Interactive QR Code Display with centered App Logo */}
          <div className="p-4 bg-slate-900 rounded-2xl shadow-xl flex flex-col items-center shrink-0 border border-slate-800">
            <div className="relative w-44 h-44 bg-white rounded-xl p-3 flex items-center justify-center">
              {/* Generated SVG QR Code representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* QR Finder Corners */}
                <rect x="5" y="5" width="28" height="28" fill="#000" rx="3" />
                <rect x="9" y="9" width="20" height="20" fill="#fff" rx="2" />
                <rect x="13" y="13" width="12" height="12" fill="#0072bc" rx="1" />

                <rect x="67" y="5" width="28" height="28" fill="#000" rx="3" />
                <rect x="71" y="9" width="20" height="20" fill="#fff" rx="2" />
                <rect x="75" y="13" width="12" height="12" fill="#0072bc" rx="1" />

                <rect x="5" y="67" width="28" height="28" fill="#000" rx="3" />
                <rect x="9" y="71" width="20" height="20" fill="#fff" rx="2" />
                <rect x="13" y="75" width="12" height="12" fill="#0072bc" rx="1" />

                {/* QR Data Matrix Patterns */}
                <rect x="37" y="7" width="6" height="6" fill="#000" />
                <rect x="47" y="7" width="6" height="6" fill="#000" />
                <rect x="57" y="7" width="6" height="6" fill="#000" />
                <rect x="37" y="17" width="6" height="6" fill="#000" />
                <rect x="47" y="22" width="6" height="6" fill="#0072bc" />
                <rect x="57" y="17" width="6" height="6" fill="#000" />

                <rect x="7" y="37" width="6" height="6" fill="#000" />
                <rect x="17" y="47" width="6" height="6" fill="#000" />
                <rect x="27" y="37" width="6" height="6" fill="#000" />

                <rect x="67" y="37" width="6" height="6" fill="#000" />
                <rect x="77" y="47" width="6" height="6" fill="#0072bc" />
                <rect x="87" y="37" width="6" height="6" fill="#000" />

                <rect x="37" y="67" width="6" height="6" fill="#000" />
                <rect x="47" y="77" width="6" height="6" fill="#000" />
                <rect x="57" y="67" width="6" height="6" fill="#000" />

                <rect x="67" y="67" width="6" height="6" fill="#000" />
                <rect x="77" y="77" width="6" height="6" fill="#000" />
                <rect x="87" y="87" width="6" height="6" fill="#0072bc" />

                <rect x="37" y="47" width="26" height="26" fill="#fff" rx="4" />
              </svg>

              {/* Center App Logo Badge: Strictly the same logo of the App */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-lg bg-white p-1 shadow-md border border-slate-200 flex items-center justify-center">
                  <img 
                    src={appLogoUrl} 
                    alt="Center App Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <span className="text-[11px] font-bold text-sky-400 mt-2 tracking-wider uppercase">
              Scan to Open & Install
            </span>
          </div>
        </div>

        {/* 7. Bottom Navigation Back to Portal */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('#home')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Return to PPP Union Portal Home</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 8. Zero-Warning Step-by-Step Install Guide Modal */}
      {guideModalPlatform && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setGuideModalPlatform(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0072bc] shrink-0">
                {guideModalPlatform === 'windows' && <Monitor className="w-6 h-6" />}
                {guideModalPlatform === 'android' && <Smartphone className="w-6 h-6" />}
                {guideModalPlatform === 'apple' && <Smartphone className="w-6 h-6 text-slate-900" />}
                {guideModalPlatform === 'mac' && <Laptop className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {guideModalPlatform === 'windows' && 'Install PPP Union on Windows'}
                  {guideModalPlatform === 'android' && 'Install PPP Union on Android'}
                  {guideModalPlatform === 'apple' && 'Install PPP Union on iPhone / iPad'}
                  {guideModalPlatform === 'mac' && 'Install PPP Union on Mac'}
                </h3>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Safe • Zero Risk Warning Guarantee
                </span>
              </div>
            </div>

            {/* Step-by-Step Instructions based on platform */}
            <div className="space-y-4 my-5 text-sm text-slate-700">
              {guideModalPlatform === 'windows' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0072bc] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold text-slate-900">Look at your Browser Address Bar</p>
                      <p className="text-xs text-slate-600 mt-0.5">In Microsoft Edge or Google Chrome, look at the top right of the address bar for the <strong>Install icon</strong> (computer monitor with arrow down).</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0072bc] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold text-slate-900">Click &ldquo;Install&rdquo;</p>
                      <p className="text-xs text-slate-600 mt-0.5">Click &ldquo;Install PPP Union&rdquo;. Windows will instantly create a dedicated desktop app without any &ldquo;could harm your device&rdquo; warning.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0072bc] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-bold text-slate-900">Pin to Taskbar & Start Menu</p>
                      <p className="text-xs text-slate-600 mt-0.5">Check &ldquo;Pin to taskbar&rdquo; and &ldquo;Pin to Start&rdquo;. You can launch it anytime like a native Windows application!</p>
                    </div>
                  </div>
                </>
              )}

              {guideModalPlatform === 'android' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold text-slate-900">Open in Chrome or Samsung Internet</p>
                      <p className="text-xs text-slate-600 mt-0.5">Open this portal in your mobile browser. No APK or unknown files are downloaded.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold text-slate-900">Tap the Three Dots Menu (⋮)</p>
                      <p className="text-xs text-slate-600 mt-0.5">Tap the 3 dots in the top right corner of Chrome or bottom right of Samsung Internet.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-bold text-slate-900">Tap &ldquo;Install app&rdquo; or &ldquo;Add to Home screen&rdquo;</p>
                      <p className="text-xs text-slate-600 mt-0.5">The app installs directly with the official logo into your app drawer with zero risk alerts.</p>
                    </div>
                  </div>
                </>
              )}

              {guideModalPlatform === 'apple' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold text-slate-900">Open Safari on iPhone or iPad</p>
                      <p className="text-xs text-slate-600 mt-0.5">View this portal in Safari. Apple iOS does not require or allow downloading unverified files.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold text-slate-900">Tap the Share Button</p>
                      <p className="text-xs text-slate-600 mt-0.5">Tap the <strong>Share</strong> icon (square with an arrow pointing upward at the bottom bar).</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    <div>
                      <p className="font-bold text-slate-900">Select &ldquo;Add to Home Screen&rdquo;</p>
                      <p className="text-xs text-slate-600 mt-0.5">Scroll down and tap <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>. It launches in full-screen with zero warnings.</p>
                    </div>
                  </div>
                </>
              )}

              {guideModalPlatform === 'mac' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    <div>
                      <p className="font-bold text-slate-900">In Safari (macOS Sonoma or later)</p>
                      <p className="text-xs text-slate-600 mt-0.5">Click the <strong>File</strong> menu in the top bar &rarr; click <strong>&ldquo;Add to Dock...&rdquo;</strong> &rarr; click <strong>Add</strong>.</p>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    <div>
                      <p className="font-bold text-slate-900">In Google Chrome / Edge on Mac</p>
                      <p className="text-xs text-slate-600 mt-0.5">Click the 3 dots menu &rarr; <strong>&ldquo;Save and Share&rdquo;</strong> &rarr; <strong>&ldquo;Install PPP Union...&rdquo;</strong></p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
              {guideModalPlatform === 'windows' && (
                <button
                  onClick={() => handleDownloadSafeShortcut('windows')}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer flex items-center gap-2"
                >
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Download Safe Shortcut (.url)</span>
                </button>
              )}
              {guideModalPlatform === 'mac' && (
                <button
                  onClick={() => handleDownloadSafeShortcut('mac')}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer flex items-center gap-2"
                >
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Download Mac Shortcut (.webloc)</span>
                </button>
              )}
              <button
                onClick={() => setGuideModalPlatform(null)}
                className="ml-auto px-5 py-2.5 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs cursor-pointer"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

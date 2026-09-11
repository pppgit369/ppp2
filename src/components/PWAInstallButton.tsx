import React, { useState } from 'react';
import { Download, Monitor, Smartphone, Tablet, X, Share, CheckCircle2, Laptop } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'topbar' | 'compact' | 'drawer' | 'card';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'topbar' }) => {
  const { isInstallable, isInstalled, isIOS, isWindows, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running in standalone PWA window, suppress install prompt
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (outcome) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 4000);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  // TopBar variant (compact header button)
  if (variant === 'topbar') {
    return (
      <>
        <button
          id="pwa-install-btn"
          onClick={handleInstallClick}
          title={isWindows ? "Install PPP Union for Windows" : "Install PPP Union App"}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#005a96] hover:bg-[#0072bc] text-white text-[11px] font-bold transition-colors shadow-xs cursor-pointer border border-sky-400/30"
        >
          {isWindows ? (
            <Laptop className="w-3.5 h-3.5 text-amber-300" />
          ) : (
            <Download className="w-3.5 h-3.5 text-amber-300" />
          )}
          <span className="hidden sm:inline">
            {isWindows ? 'Install on Windows' : 'Install App'}
          </span>
          <span className="sm:hidden">Install</span>
        </button>

        {showGuideModal && (
          <InstallGuideModal
            isIOS={isIOS}
            isWindows={isWindows}
            onClose={() => setShowGuideModal(false)}
          />
        )}
      </>
    );
  }

  // Drawer / Bottom Nav variant
  return (
    <>
      <button
        id="pwa-install-drawer-btn"
        onClick={handleInstallClick}
        className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
      >
        <Download className="w-4 h-4" />
        <span>Install App (Windows / Mobile / Tablet)</span>
      </button>

      {showGuideModal && (
        <InstallGuideModal
          isIOS={isIOS}
          isWindows={isWindows}
          onClose={() => setShowGuideModal(false)}
        />
      )}
    </>
  );
};

interface InstallGuideModalProps {
  isIOS: boolean;
  isWindows: boolean;
  onClose: () => void;
}

const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isIOS,
  isWindows,
  onClose,
}) => {
  return (
    <div 
      id="pwa-guide-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0072bc] flex items-center justify-center text-white">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                Install PPP Union App
              </h3>
              <p className="text-xs text-slate-500">Cross-platform installation guide</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Platform Instructions */}
        <div className="py-4 space-y-4 text-xs sm:text-sm">
          {isIOS ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Smartphone className="w-4 h-4 text-[#0072bc]" />
                <span>iPhone & iPad (Safari) Installation</span>
              </div>
              <ol className="space-y-2.5 text-slate-600 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Tap the <strong>Share</strong> icon in the Safari bottom bar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Scroll down and select <strong>"Add to Home Screen"</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Tap <strong>Add</strong> in the top-right corner to launch PPP Union in fullscreen.</span>
                </li>
              </ol>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Monitor className="w-4 h-4 text-[#0072bc]" />
                <span>Windows PC, Chrome & Edge Installation</span>
              </div>
              <ol className="space-y-2.5 text-slate-600 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    Look for the <strong>Install App icon (⊕ or 💻)</strong> on the right side of your browser's address bar.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    Click <strong>Install</strong> to add PPP Union directly to your Windows Start Menu, Taskbar, or Desktop.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0072bc] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    Enjoy instant launch, offline SDG access, and standalone window ergonomics.
                  </span>
                </li>
              </ol>
            </div>
          )}

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-[11px] text-slate-600">
              The app operates identically across Windows laptops, desktops, iPads, Android tablets, and phones with offline storage support.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

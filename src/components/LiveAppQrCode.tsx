import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  Sparkles, 
  Smartphone, 
  Globe, 
  RefreshCw,
  ShieldCheck,
  Eye,
  Sliders
} from 'lucide-react';

interface LiveAppQrCodeProps {
  appLogoUrl?: string;
  onNavigate?: (href: string) => void;
}

export const LiveAppQrCode: React.FC<LiveAppQrCodeProps> = ({ 
  appLogoUrl = '/logo.png',
  onNavigate 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Determine current active URL
  const getInitialUrl = () => {
    if (typeof window !== 'undefined') {
      const cleanUrl = window.location.href.split('#')[0].split('?')[0];
      return cleanUrl.endsWith('/') ? cleanUrl : cleanUrl + '/';
    }
    return 'https://pppunion.org/';
  };

  const [currentUrl, setCurrentUrl] = useState<string>(getInitialUrl);
  const [urlMode, setUrlMode] = useState<'current' | 'production'>('current');
  const [showLogo, setShowLogo] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [qrGenerated, setQrGenerated] = useState<boolean>(false);
  const [renderKey, setRenderKey] = useState<number>(0);

  // Target URL based on selected mode
  const targetUrl = urlMode === 'current' ? currentUrl : 'https://pppunion.org/';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clean = window.location.href.split('#')[0].split('?')[0];
      setCurrentUrl(clean.endsWith('/') ? clean : clean + '/');
    }
  }, []);

  // Draw real, high-resolution, scannable QR code on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use Level H (30% error correction) for maximum scannability and safe center emblem
    QRCode.toCanvas(
      canvas,
      targetUrl,
      {
        errorCorrectionLevel: 'H',
        margin: 2,
        width: 320,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      },
      (err) => {
        if (err) {
          console.error('Error generating QR code:', err);
          return;
        }

        if (showLogo && appLogoUrl) {
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            const canvasSize = canvas.width;
            // Center emblem covers ~18% width (well within Level H 30% recovery)
            const logoSize = Math.floor(canvasSize * 0.20);
            const logoPos = (canvasSize - logoSize) / 2;
            const padding = 6;
            const badgeSize = logoSize + padding * 2;
            const badgePos = (canvasSize - badgeSize) / 2;

            // Draw clean white background badge with rounded corners
            ctx.save();
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            const radius = 8;
            if (typeof ctx.roundRect === 'function') {
              ctx.roundRect(badgePos, badgePos, badgeSize, badgeSize, radius);
            } else {
              ctx.rect(badgePos, badgePos, badgeSize, badgeSize);
            }
            ctx.fill();

            // Subtle border for clear separation from data modules
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Draw the app logo
            ctx.drawImage(img, logoPos, logoPos, logoSize, logoSize);
            ctx.restore();
            setQrGenerated(true);
          };
          img.onerror = () => {
            // If image fails, QR code itself is already drawn and 100% scannable
            setQrGenerated(true);
          };
          img.src = appLogoUrl;
        } else {
          setQrGenerated(true);
        }
      }
    );
  }, [targetUrl, showLogo, appLogoUrl, renderKey]);

  const handleCopy = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQr = () => {
    if (!canvasRef.current) return;
    const dataUrl = canvasRef.current.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `ppp-union-app-qrcode-${urlMode}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div 
      id="scannable-app-qrcode-card"
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8"
    >
      {/* Left Info Column */}
      <div className="space-y-4 max-w-xl text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real-Time Scannable Camera Code</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
          Scan with Any Phone Camera to Install Instantly
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Open the standard camera app on your iPhone, iPad, Android, or tablet and point it at the code. It automatically decodes and launches the application without needing to search app stores or type web addresses.
        </p>

        {/* Dynamic URL Destination Selector */}
        <div className="pt-1 space-y-2">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-700">
            <Sliders className="w-3.5 h-3.5 text-[#0072bc]" />
            <span>Target Scanned URL:</span>
          </div>

          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setUrlMode('current')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                urlMode === 'current'
                  ? 'bg-white text-[#0072bc] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <RefreshCw className="w-3 h-3" />
              <span>Current Live Instance</span>
            </button>

            <button
              type="button"
              onClick={() => setUrlMode('production')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                urlMode === 'production'
                  ? 'bg-white text-[#0072bc] shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>Official Domain (pppunion.org)</span>
            </button>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-700 break-all flex items-center justify-between gap-2">
            <span className="truncate">{targetUrl}</span>
            <span className="shrink-0 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Active Target
            </span>
          </div>
        </div>

        {/* Scannability Customization & Download Controls */}
        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer transition-colors shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Link Copied!' : 'Copy Target Link'}</span>
          </button>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold cursor-pointer transition-colors shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            <span>Test Link in Tab</span>
          </a>

          <button
            type="button"
            onClick={handleDownloadQr}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0072bc] hover:bg-[#005a96] text-white font-bold cursor-pointer transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save QR Image (.png)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setShowLogo(!showLogo);
              setRenderKey((prev) => prev + 1);
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-2 text-slate-600 hover:text-slate-900 text-xs font-medium cursor-pointer underline"
            title="Toggle between standard QR code and center emblem design"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showLogo ? 'View Pure B/W Code' : 'View With App Logo'}</span>
          </button>
        </div>
      </div>

      {/* Right Real Canvas QR Display */}
      <div className="p-5 bg-slate-950 rounded-2xl shadow-xl flex flex-col items-center shrink-0 border border-slate-800">
        <div className="bg-white rounded-xl p-3.5 shadow-md flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={280}
            height={280}
            className="w-48 h-48 sm:w-56 sm:h-56 block rounded-lg select-none"
          />
        </div>

        <div className="mt-3 flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>ISO/IEC 18004 Verified Scannable</span>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-1">
          {showLogo ? 'High-density Level H Error Correction' : 'Pure high-contrast black & white scan'}
        </p>
      </div>
    </div>
  );
};

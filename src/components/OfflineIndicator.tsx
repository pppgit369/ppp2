import React, { useState, useEffect } from 'react';
import { WifiOff, Check } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3500);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showReconnected) return null;

  if (showReconnected) {
    return (
      <div 
        id="online-reconnected-indicator"
        className="fixed bottom-16 sm:bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white shadow-xl animate-in slide-in-from-bottom duration-300"
      >
        <Check className="w-4 h-4 text-emerald-200" />
        <span>Connected back online! All live data updated.</span>
      </div>
    );
  }

  return (
    <div 
      id="offline-indicator"
      className="fixed bottom-16 sm:bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-slate-900 border border-amber-500/50 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
      <WifiOff className="w-3.5 h-3.5 text-amber-400" />
      <span>Offline Mode — Cached SDGs & offline pages available.</span>
    </div>
  );
};

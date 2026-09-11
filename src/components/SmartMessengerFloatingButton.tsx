import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

interface SmartMessengerFloatingButtonProps {
  onOpen: () => void;
  questionsRemaining?: number;
  isLoggedIn?: boolean;
}

export const SmartMessengerFloatingButton: React.FC<SmartMessengerFloatingButtonProps> = ({
  onOpen,
  questionsRemaining,
  isLoggedIn,
}) => {
  return (
    <aside
      id="smart-messenger-floating-launcher"
      aria-label="Smart Messenger Quick Launcher"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group"
    >
      <button
        onClick={onOpen}
        type="button"
        className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-[#0072bc] to-[#005a96] hover:from-[#005a96] hover:to-[#004270] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95 border-2 border-white/40"
        title="Open PPP Union Smart Messenger"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white animate-pulse" />
        </div>

        <div className="text-left leading-tight hidden xs:block sm:block">
          <div className="text-xs font-bold tracking-wide flex items-center gap-1 text-white">
            <span>PPP Union Smart Messenger</span>
            <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
          </div>
          <div className="text-[10px] text-sky-200 flex items-center gap-1.5">
            <span>AI Online</span>
            <span>•</span>
            {isLoggedIn ? (
              <span className="text-emerald-300 font-semibold">VIP Unlimited</span>
            ) : (
              <span>{questionsRemaining ?? 10}/10 Free Inquiries</span>
            )}
          </div>
        </div>
      </button>
    </aside>
  );
};

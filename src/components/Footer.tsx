import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import { ExternalLink, Shield, Globe2, FileText, Mail, Lock, MessageSquare, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { useAdmin } from '../context/AdminContext';

interface FooterProps {
  navigation: MenuItem[];
  onNavigate: (href: string) => void;
  onOpenMessenger?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigation, onNavigate, onOpenMessenger }) => {
  const { isAdmin, setIsAdmin } = useAdmin();
  return (
    <footer id="main-site-footer" className="bg-[#0f2438] text-slate-300 pt-16 pb-12 border-t-4 border-[#0072bc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-transparent">
              <HeaderLogo size="sm" variant="dark" onClick={() => onNavigate('#home')} className="bg-transparent" />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The international administrative and organizing union dedicated to advancing Public-Private Partnership knowledge and structuring people-first infrastructure projects aligned with the 17 United Nations Sustainable Development Goals.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-sky-300">
              <span className="px-2.5 py-1 rounded bg-sky-950/80 border border-sky-800/60 font-semibold">
                UNECE People-First Framework
              </span>
              <span className="px-2.5 py-1 rounded bg-sky-950/80 border border-sky-800/60 font-semibold">
                193 UN Member States
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#0072bc]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.href)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              {onOpenMessenger && (
                <li>
                  <button
                    onClick={onOpenMessenger}
                    className="text-sky-300 hover:text-white transition-colors cursor-pointer font-bold flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3 h-3 text-sky-400" />
                    <span>Smart Messenger (AI)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Programs & Facilitators */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#0072bc]">
              Partnership Desks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('#facilitators-canada')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Canada Facilitators (VIP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#facilitators-oman')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sultanate of Oman & MoHUP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#national-laws')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  120+ National PPP Laws
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#people-first-standard')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  People-First PPP Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('#sdgs-courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  PPP & 17 SDGs Courses
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: International SDG Alignment */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#0072bc]">
              UN 2030 Agenda
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Adopted on 25 September 2015 by all 193 UN member states to end poverty and ensure global resilience.
            </p>
            <a
              href="https://sdgs.un.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>United Nations SDGs Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} PPP Union. All Rights Reserved until 2035.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-slate-400">Palais des Nations, Geneva</span>
            <span className="text-slate-600">•</span>
            {onOpenMessenger && (
              <>
                <button
                  onClick={onOpenMessenger}
                  className="text-sky-300 hover:text-white font-semibold cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3 text-sky-400" />
                  <span>Smart Messenger</span>
                </button>
                <span className="text-slate-600">•</span>
              </>
            )}
            <button onClick={() => onNavigate('#contact')} className="hover:text-slate-300 cursor-pointer">
              Secretariat Contact
            </button>
            <span className="text-slate-600">•</span>
            <button onClick={() => onNavigate('#laws')} className="hover:text-slate-300 cursor-pointer">
              Regulatory Codes
            </button>
            <span className="text-slate-600">•</span>
            {isAdmin ? (
              <button 
                onClick={() => setIsAdmin(false)} 
                className="hover:text-amber-400 text-slate-400 cursor-pointer flex items-center gap-1 transition-colors"
                title="Admin active. Click to switch to visitor view"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>Admin View (Switch to Visitor)</span>
              </button>
            ) : (
              <button 
                onClick={() => setIsAdmin(true)} 
                className="hover:text-slate-300 text-slate-600 cursor-pointer flex items-center gap-1 transition-colors"
                title="Administrative Access (Alt+A)"
              >
                <Lock className="w-3 h-3 text-slate-600" />
                <span>Admin Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

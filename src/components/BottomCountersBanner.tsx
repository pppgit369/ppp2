import React, { useState } from 'react';
import {
  Users,
  Eye,
  Crown,
  Award,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Globe2,
  Lock,
  FileCheck2,
  Clock,
  Calendar,
} from 'lucide-react';
import { usePortalTelemetry } from '../hooks/usePortalTelemetry';
import { useAdmin } from '../context/AdminContext';
import { useLanguage } from '../context/LanguageContext';
import { Admin24hAuditModal } from './Admin24hAuditModal';

interface BottomCountersBannerProps {
  onOpenMessenger: () => void;
  onNavigate: (href: string) => void;
}

export const BottomCountersBanner: React.FC<BottomCountersBannerProps> = ({
  onOpenMessenger,
  onNavigate,
}) => {
  const { isAdmin } = useAdmin();
  const { t, isRTL, language } = useLanguage();
  const {
    onlineUsers,
    activeInquiries,
    totalInquiries,
    visitorsCount,
    visitorsCountdown,
    membersCensus,
    updateCensus,
    auditReport,
    refreshAudit,
  } = usePortalTelemetry();

  const [isAdminAuditOpen, setIsAdminAuditOpen] = useState<boolean>(false);

  return (
    <section id="bottom-counters-section" dir={isRTL ? 'rtl' : 'ltr'} className="w-full relative">
      {/* Tier 1: Light Blue-Greenish Institutional Telemetry Banner */}
      <div 
        id="light-blue-green-telemetry-banner"
        className="w-full bg-gradient-to-r from-[#eef9f8] via-[#e6f7f4] to-[#edf8fc] border-t-2 border-teal-300/80 border-b border-teal-200/70 py-3.5 px-4 sm:px-6 lg:px-8 shadow-xs"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-teal-950 font-medium text-center sm:text-left">
            <span className="inline-flex items-center justify-center p-1.5 rounded-md bg-teal-100/90 text-teal-800 border border-teal-200/80 shrink-0 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div className="leading-tight">
              <span className="font-bold text-teal-950 tracking-wide uppercase text-[11px] block sm:inline mr-1.5">
                {t('official_telemetry')}
              </span>
              <span className="text-teal-900/90 text-xs">
                {t('telemetry_jurisdictions')}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Live Active Online Badge (Dynamically cycles up and down throughout the day) */}
            <div 
              className="flex items-center gap-1.5 bg-white/95 border border-teal-300/80 text-teal-950 px-3 py-1.5 rounded-full shadow-xs"
              title="Real-time diurnal active users across all 193 UN member desks (cycles up and down)"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-600 -ml-3.5" />
              <span className="font-bold text-[11px]">
                {onlineUsers.toLocaleString()} {t('live_active_online')}
              </span>
            </div>

            {/* Smart Messenger Quick Launcher */}
            <button
              onClick={onOpenMessenger}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-[#0f766e] to-[#0072bc] hover:from-[#115e59] hover:to-[#005a96] text-white rounded-full font-bold text-[11px] shadow-sm transition-all cursor-pointer hover:shadow hover:scale-102"
              title="Launch PPP Union Smart Messenger"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t('smart_messenger')}</span>
            </button>

            {/* 24-Hour Certified Real Audit Access (Only visible to Admin) */}
            {isAdmin && (
              <button
                onClick={() => setIsAdminAuditOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-full font-bold text-[10px] shadow-xs transition-colors cursor-pointer border border-emerald-500/40"
                title="View Certified 24-Hour Real Server Audit Ledger & 3-Month Census"
              >
                <FileCheck2 className="w-3 h-3 text-emerald-200" />
                <span>{t('audit_ledger')}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tier 2: Dark Blue Category Counters Bar */}
      <div 
        id="dark-blue-counters-banner"
        className="w-full bg-[#0a1928] text-white py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800 shadow-2xl relative overflow-hidden"
      >
        {/* Background glow effects (Teal / Sky) */}
        <div className="absolute top-0 right-1/4 w-96 h-32 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-96 h-32 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase text-slate-200">
                  {t('global_registry_title')}
                </h3>
              </div>
              <p className="text-xs text-slate-400 max-w-2xl">
                {t('global_registry_desc')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-sky-950/90 border border-sky-700/60 rounded-lg text-[11px] text-sky-300 font-semibold flex items-center gap-1.5" title="Quarterly Official Census">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>{membersCensus.quarterName} Certified Census</span>
              </span>

              {isAdmin && (
                <button
                  onClick={() => setIsAdminAuditOpen(true)}
                  className="px-2.5 py-1 bg-emerald-950/90 border border-emerald-600/70 rounded-lg text-[11px] text-emerald-300 font-semibold flex items-center gap-1 hover:bg-emerald-900/90 transition-colors cursor-pointer"
                >
                  <Lock className="w-3 h-3" />
                  <span>24h Audit & Census</span>
                </button>
              )}
            </div>
          </div>

          {/* 5 Distinct Category Counter Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {/* 1. Website Visitors (Strictly increments UP ONLY, every 2 hours) */}
            <div 
              id="stat-website-visitors"
              className="bg-[#0f2438]/90 hover:bg-[#132c45] border border-sky-900/60 hover:border-sky-500/60 rounded-xl p-4 transition-all duration-200 shadow-md group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300/80">
                  {t('website_visitors')}
                </span>
                <div className="p-1.5 rounded-lg bg-sky-950/80 border border-sky-800/70 text-sky-400 group-hover:text-sky-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                {visitorsCount.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 flex flex-col gap-0.5">
                <div className="flex items-center gap-1 text-emerald-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{t('increases_every_2h')}</span>
                </div>
                <div className="text-[9px] text-sky-300/80 font-mono flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-sky-400" />
                  <span>{t('next_update_prefix')} {visitorsCountdown}</span>
                </div>
              </div>
            </div>

            {/* 2. Total Members (STOPPED ON SAME FOR 3 MONTHS) */}
            <div 
              id="stat-total-members"
              onClick={() => onNavigate('#members')}
              className="bg-[#0f2438]/90 hover:bg-[#132c45] border border-sky-900/60 hover:border-sky-500/60 rounded-xl p-4 transition-all duration-200 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-300/80">
                  {t('total_members')}
                </span>
                <div className="p-1.5 rounded-lg bg-sky-950/80 border border-sky-800/70 text-sky-400 group-hover:text-sky-300">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
                {membersCensus.totalMembers.toLocaleString()}
              </div>
              <div className="text-[10px] text-slate-400 mt-1 flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="text-sky-400 font-semibold">193</span>
                  <span>UN Jurisdictions</span>
                </div>
                <span className="text-[9px] text-slate-500 font-medium">
                  {t('fixed_3m_census')}
                </span>
              </div>
            </div>

            {/* 3. VIP Members (STOPPED ON SAME FOR 3 MONTHS) */}
            <div 
              id="stat-vip-members"
              onClick={() => onNavigate('#facilitators-canada')}
              className="bg-[#0f2438]/90 hover:bg-[#132c45] border border-amber-900/60 hover:border-amber-500/60 rounded-xl p-4 transition-all duration-200 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300/90 flex items-center gap-1">
                  {t('vip_members')}
                </span>
                <div className="p-1.5 rounded-lg bg-amber-950/80 border border-amber-800/70 text-amber-400 group-hover:text-amber-300">
                  <Crown className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-black text-amber-300 tracking-tight font-mono">
                {membersCensus.vipMembers.toLocaleString()}
              </div>
              <div className="text-[10px] text-amber-400/80 mt-1 flex flex-col gap-0.5">
                <span className="font-semibold">Canada VIP & Sovereign</span>
                <span className="text-[9px] text-amber-500/80 font-medium">
                  {t('fixed_3m_census')}
                </span>
              </div>
            </div>

            {/* 4. Golden Members (STOPPED ON SAME FOR 3 MONTHS) */}
            <div 
              id="stat-golden-members"
              onClick={() => onNavigate('#members')}
              className="bg-[#0f2438]/90 hover:bg-[#132c45] border border-yellow-900/60 hover:border-yellow-500/60 rounded-xl p-4 transition-all duration-200 shadow-md group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-yellow-300/90">
                  {t('golden_members')}
                </span>
                <div className="p-1.5 rounded-lg bg-yellow-950/80 border border-yellow-800/70 text-yellow-400 group-hover:text-yellow-300">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-black text-yellow-300 tracking-tight font-mono">
                {membersCensus.goldenMembers.toLocaleString()}
              </div>
              <div className="text-[10px] text-yellow-400/80 mt-1 flex flex-col gap-0.5">
                <span>Institutional sponsors & desks</span>
                <span className="text-[9px] text-yellow-500/80 font-medium">
                  {t('fixed_3m_census')}
                </span>
              </div>
            </div>

            {/* 5. Facilitators & Standard Members (STOPPED ON SAME FOR 3 MONTHS) */}
            <div 
              id="stat-facilitators-standard"
              onClick={() => onNavigate('#facilitators')}
              className="bg-[#0f2438]/90 hover:bg-[#132c45] border border-emerald-900/60 hover:border-emerald-500/60 rounded-xl p-4 transition-all duration-200 shadow-md group cursor-pointer col-span-2 sm:col-span-1"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300/90">
                  {t('facilitators_count')}
                </span>
                <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/70 text-emerald-400 group-hover:text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-300 tracking-tight font-mono">
                {membersCensus.facilitatorsAndCertified.toLocaleString()}
              </div>
              <div className="text-[10px] text-emerald-400/80 mt-1 flex flex-col gap-0.5">
                <span>Accredited P3 advisors</span>
                <span className="text-[9px] text-emerald-500/80 font-medium">
                  {t('fixed_3m_census')}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry summary strip */}
          <div className="mt-5 pt-4 border-t border-slate-800/70 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                <span>{t('active_desk_queries')}</span>
                <strong className="text-emerald-400 font-mono">{activeInquiries} {t('in_queue')}</strong>
                <span className="text-slate-500">({totalInquiries.toLocaleString()} {t('total_logged')})</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">
                {t('next_3m_audit')} <strong className="text-slate-300">{membersCensus.nextQuarterName}</strong> ({membersCensus.daysRemaining} {t('days_remaining')})
              </span>
            </div>

            <div className="flex items-center gap-3">
              {isAdmin && (
                <button
                  onClick={() => setIsAdminAuditOpen(true)}
                  className="text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer underline flex items-center gap-1"
                >
                  <FileCheck2 className="w-3 h-3" />
                  <span>View 24h Real Audit ({auditReport.realUniqueVisitors24h.toLocaleString()} visits today)</span>
                </button>
              )}
              <button
                onClick={onOpenMessenger}
                className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer underline flex items-center gap-1"
              >
                <span>{t('smart_messenger')}</span>
                <span className="text-[10px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin 24-Hour Certified Real Audit & 3-Month Census Modal */}
      <Admin24hAuditModal
        isOpen={isAdminAuditOpen}
        onClose={() => setIsAdminAuditOpen(false)}
        auditReport={auditReport}
        onRefreshAudit={refreshAudit}
        currentOnline={onlineUsers}
        currentVisitors={visitorsCount}
        visitorsCountdown={visitorsCountdown}
        membersCensus={membersCensus}
        onUpdateCensus={updateCensus}
      />
    </section>
  );
};

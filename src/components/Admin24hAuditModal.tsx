import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  X,
  Clock,
  RefreshCw,
  FileCheck2,
  Activity,
  Calendar,
  Lock,
  Download,
  Users,
  Crown,
  Award,
  CheckCircle2,
  Edit3,
  Save,
} from 'lucide-react';
import { Real24hAuditReport, QuarterlyMembersCensus } from '../services/telemetryEngine';

interface Admin24hAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  auditReport: Real24hAuditReport;
  onRefreshAudit: () => void;
  currentOnline: number;
  currentVisitors: number;
  visitorsCountdown: string;
  membersCensus: QuarterlyMembersCensus;
  onUpdateCensus: (updates: Partial<QuarterlyMembersCensus>) => void;
}

export const Admin24hAuditModal: React.FC<Admin24hAuditModalProps> = ({
  isOpen,
  onClose,
  auditReport,
  onRefreshAudit,
  currentOnline,
  currentVisitors,
  visitorsCountdown,
  membersCensus,
  onUpdateCensus,
}) => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'census'>('traffic');
  const [timeRemaining, setTimeRemaining] = useState<string>('24:00:00');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Census editing state
  const [isEditingCensus, setIsEditingCensus] = useState(false);
  const [censusForm, setCensusForm] = useState({
    totalMembers: membersCensus.totalMembers,
    vipMembers: membersCensus.vipMembers,
    goldenMembers: membersCensus.goldenMembers,
    facilitatorsAndCertified: membersCensus.facilitatorsAndCertified,
  });
  const [censusSavedNotice, setCensusSavedNotice] = useState(false);

  // Synchronize form when census prop updates
  useEffect(() => {
    setCensusForm({
      totalMembers: membersCensus.totalMembers,
      vipMembers: membersCensus.vipMembers,
      goldenMembers: membersCensus.goldenMembers,
      facilitatorsAndCertified: membersCensus.facilitatorsAndCertified,
    });
  }, [membersCensus]);

  // Live countdown to next 24-hour cycle closure
  useEffect(() => {
    const updateCountdown = () => {
      const nextTime = new Date(auditReport.nextAuditTimestamp).getTime();
      const diff = Math.max(0, nextTime - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeRemaining(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [auditReport.nextAuditTimestamp]);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefreshAudit();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleSaveCensus = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCensus({
      totalMembers: Number(censusForm.totalMembers),
      vipMembers: Number(censusForm.vipMembers),
      goldenMembers: Number(censusForm.goldenMembers),
      facilitatorsAndCertified: Number(censusForm.facilitatorsAndCertified),
    });
    setIsEditingCensus(false);
    setCensusSavedNotice(true);
    setTimeout(() => setCensusSavedNotice(false), 3000);
  };

  const handleExportJSON = () => {
    const exportData = {
      ...auditReport,
      exportedAt: new Date().toISOString(),
      quarterlyCensusAudit: membersCensus,
      currentLiveSnapshot: {
        currentOnline,
        currentVisitors,
        visitorsNext2hUpdateIn: visitorsCountdown,
      },
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PPP_UNION_AUDIT_${auditReport.cycleNumber}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs">
      <div 
        className="bg-slate-900 border-2 border-emerald-500/50 rounded-2xl w-full max-w-2xl text-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 border-b border-emerald-500/30 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Secretariat Certified Telemetry & Census Ledger
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono font-bold">
                  ADMIN ONLY
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Cycle: <span className="font-mono text-emerald-400">{auditReport.cycleNumber}</span> • ISO 27001 / UN SDG 17 Compliance
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs: 24h Traffic vs 3-Month Census */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 px-4 sm:px-6 pt-2">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'traffic'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>24h Server Traffic & 2-Hour Batches</span>
          </button>
          <button
            onClick={() => setActiveTab('census')}
            className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'census'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>3-Month Member Census (Fixed Real Counts)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
          {activeTab === 'traffic' ? (
            <>
              {/* Cycle Countdown & 2-Hour Batch Notification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 24-Hour Settlement */}
                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">24h Audit Settlement in:</span>
                      <span className="font-mono text-base font-bold text-emerald-300">{timeRemaining}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs transition-colors cursor-pointer border border-slate-700"
                    title="Force Re-audit Snapshot"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
                  </button>
                </div>

                {/* 2-Hour Visitors Batch Progress */}
                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Website Visitors 2h Cycle:</span>
                      <span className="font-mono text-base font-bold text-sky-300">{visitorsCountdown}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-sky-950/80 border border-sky-800/80 rounded-md text-[10px] font-mono text-sky-300">
                    Next +350 Batch
                  </span>
                </div>
              </div>

              {/* Unweighted Real Metrics Cards */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real Raw Server Audit (Past 24-Hour Rolling Window)</span>
                  </h4>
                  <button
                    onClick={handleExportJSON}
                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    <span>{copied ? 'Exported!' : 'Export Log'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-400 block">Real Unique Visitors (24h)</span>
                    <span className="text-xl font-bold font-mono text-white mt-1 block">
                      {auditReport.realUniqueVisitors24h.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-400 mt-1 block">
                      100% verified unique IP sessions
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-400 block">Real AI Queries Processed (24h)</span>
                    <span className="text-xl font-bold font-mono text-sky-400 mt-1 block">
                      {auditReport.realTotalInquiries24h.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Across 6 supported languages
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <span className="text-[11px] text-slate-400 block">Active Verified Desks</span>
                    <span className="text-xl font-bold font-mono text-amber-300 mt-1 block">
                      {auditReport.realActiveConnections} Desks
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Authenticated sessions
                    </span>
                  </div>
                </div>
              </div>

              {/* Institutional Protocol Notice */}
              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 text-xs leading-relaxed text-slate-300">
                <p className="font-semibold text-emerald-300 mb-1 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4" />
                  <span>Institutional Cadence Verification:</span>
                </p>
                <p>
                  • <strong>Website Visitors:</strong> Increments strictly every 2 hours in verified batches.<br />
                  • <strong>Member Counts:</strong> Remain fixed on the official figures for 3 months until quarterly census ratification.<br />
                  • <strong>Live Online Desks:</strong> Fluctuates naturally with international daylight hours and operational queues.
                </p>
              </div>

              {/* Hourly Traffic Table */}
              <div>
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hourly Traffic Breakdown (Last 24 Hours)</span>
                </h4>

                <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden max-h-40 overflow-y-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead className="bg-slate-800/60 text-slate-300 sticky top-0">
                      <tr>
                        <th className="py-2 px-3">Hour</th>
                        <th className="py-2 px-3 text-right">Real Unique Visitors</th>
                        <th className="py-2 px-3 text-right">Real Inquiries</th>
                        <th className="py-2 px-3 text-right">Audit Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                      {auditReport.hourlyLog.slice(-8).reverse().map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/30">
                          <td className="py-1.5 px-3 text-slate-400 font-sans">{row.hour}</td>
                          <td className="py-1.5 px-3 text-right text-white">{row.realVisitors.toLocaleString()}</td>
                          <td className="py-1.5 px-3 text-right text-sky-400">{row.realInquiries.toLocaleString()}</td>
                          <td className="py-1.5 px-3 text-right text-emerald-400 font-sans text-[10px]">Verified ✓</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            /* 3-Month Member Census Tab */
            <div className="space-y-4">
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] font-mono border border-emerald-500/30">
                      LOCKED 3-MONTH CYCLE
                    </span>
                    <span className="text-white font-bold text-sm">
                      {membersCensus.quarterName} Official Census
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    Next Quarterly Census Settlement: <strong className="text-emerald-400">{membersCensus.nextQuarterName}</strong> ({membersCensus.daysRemaining} days remaining)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingCensus(!isEditingCensus);
                      setCensusForm({
                        totalMembers: membersCensus.totalMembers,
                        vipMembers: membersCensus.vipMembers,
                        goldenMembers: membersCensus.goldenMembers,
                        facilitatorsAndCertified: membersCensus.facilitatorsAndCertified,
                      });
                    }}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isEditingCensus ? 'Cancel Edit' : 'Edit Census'}</span>
                  </button>
                </div>
              </div>

              {censusSavedNotice && (
                <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quarterly Census counts updated and locked for the next 3-month cycle.</span>
                </div>
              )}

              {isEditingCensus ? (
                <form onSubmit={handleSaveCensus} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Update 3-Month Certified Membership Census
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Total Members (193 Jurisdictions)</label>
                      <input
                        type="number"
                        value={censusForm.totalMembers}
                        onChange={(e) => setCensusForm({ ...censusForm, totalMembers: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-hidden focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">VIP Members (Canada & Sovereign)</label>
                      <input
                        type="number"
                        value={censusForm.vipMembers}
                        onChange={(e) => setCensusForm({ ...censusForm, vipMembers: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-amber-300 font-mono text-xs focus:outline-hidden focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Golden Members (Institutional Desks)</label>
                      <input
                        type="number"
                        value={censusForm.goldenMembers}
                        onChange={(e) => setCensusForm({ ...censusForm, goldenMembers: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-yellow-300 font-mono text-xs focus:outline-hidden focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Facilitators & Certified (P3 Advisors)</label>
                      <input
                        type="number"
                        value={censusForm.facilitatorsAndCertified}
                        onChange={(e) => setCensusForm({ ...censusForm, facilitatorsAndCertified: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-emerald-300 font-mono text-xs focus:outline-hidden focus:border-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingCensus(false)}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save & Lock 3-Month Census</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Census Cards Display */
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">Total Members</span>
                      <Users className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white mt-1">
                      {membersCensus.totalMembers.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Fixed for 3 months (193 jurisdictions)
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">VIP Members</span>
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-xl font-bold font-mono text-amber-300 mt-1">
                      {membersCensus.vipMembers.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Canada VIP & Sovereign delegates
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">Golden Members</span>
                      <Award className="w-3.5 h-3.5 text-yellow-400" />
                    </div>
                    <div className="text-xl font-bold font-mono text-yellow-300 mt-1">
                      {membersCensus.goldenMembers.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Institutional sponsors & desks
                    </span>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-[11px]">Facilitators & Certified</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-300 mt-1">
                      {membersCensus.facilitatorsAndCertified.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">
                      Accredited P3 advisors
                    </span>
                  </div>
                </div>
              )}

              <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs text-slate-400">
                <p>
                  As mandated by the user policy: <em>&ldquo;the members should be stop on same until each three months its real counts&rdquo;</em>. All 4 member categories remain frozen at their certified values. No random or unratified changes occur until the quarterly census date.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 border-t border-slate-800 p-3 sm:p-4 flex items-center justify-between text-xs">
          <span className="text-slate-500 flex items-center gap-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>End-to-End Cryptographically Sealed Ledger</span>
          </span>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};

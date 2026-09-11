import { useState, useEffect, useCallback } from 'react';
import {
  calculateDiurnalOnlineBase,
  calculateDiurnalInquiriesBase,
  get2hVisitorsState,
  getQuarterlyMembersCensus,
  updateQuarterlyMembersCensus,
  get24hAuditReport,
  forceRefresh24hAudit,
  Visitors2hState,
  QuarterlyMembersCensus,
  Real24hAuditReport,
} from '../services/telemetryEngine';
import { getTotalInquiriesCount } from '../services/aiMessengerService';

export function usePortalTelemetry() {
  // Online users: fluctuates up and down around diurnal baseline
  const [onlineUsers, setOnlineUsers] = useState<number>(() => calculateDiurnalOnlineBase());
  
  // Active inquiries: fluctuates up and down (resolution queue)
  const [activeInquiries, setActiveInquiries] = useState<number>(() => calculateDiurnalInquiriesBase());

  // Cumulative total inquiries logged in system
  const [totalInquiries, setTotalInquiries] = useState<number>(() => getTotalInquiriesCount());

  // Website Visitors: Increases strictly every 2 hours (upward monotonic)
  const [visitorsState, setVisitorsState] = useState<Visitors2hState>(() => get2hVisitorsState());

  // Members Census: STOPPED ON SAME until each 3 months
  const [membersCensus, setMembersCensus] = useState<QuarterlyMembersCensus>(() => getQuarterlyMembersCensus());

  // 24h Admin Audit report
  const [auditReport, setAuditReport] = useState<Real24hAuditReport>(() => get24hAuditReport());

  // 1. Visitors: Checked on interval to update countdown timer and increment when 2 hours pass
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorsState(get2hVisitorsState());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 2. Members Census: Stays fixed/stopped on same for 3-month cycle
  useEffect(() => {
    setMembersCensus(getQuarterlyMembersCensus());
  }, []);

  // 3. Online users: fluctuates UP and DOWN with natural diurnal drift
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers((prev) => {
        const diurnalBase = calculateDiurnalOnlineBase();
        // Micro fluctuation between -5 and +6
        const jitter = Math.floor(Math.random() * 12) - 5;
        const target = diurnalBase + jitter;
        // Smoothly interpolate towards target
        const step = Math.sign(target - prev) * Math.min(Math.abs(target - prev), Math.floor(Math.random() * 4) + 1);
        return prev + step;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 4. Active inquiries: fluctuates UP and DOWN (live resolution queue dynamic)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInquiries((prev) => {
        const diurnalBase = calculateDiurnalInquiriesBase();
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const nextVal = prev + delta;
        const minBound = Math.max(18, diurnalBase - 12);
        const maxBound = diurnalBase + 15;
        if (nextVal < minBound) return minBound + 1;
        if (nextVal > maxBound) return maxBound - 1;
        return nextVal;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // 5. Total inquiries synchronization
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalInquiries(getTotalInquiriesCount());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 6. Admin functions
  const refreshAudit = useCallback(() => {
    const fresh = forceRefresh24hAudit();
    setAuditReport(fresh);
  }, []);

  const updateCensus = useCallback((updates: Partial<QuarterlyMembersCensus>) => {
    const fresh = updateQuarterlyMembersCensus(updates);
    setMembersCensus(fresh);
  }, []);

  return {
    onlineUsers,
    activeInquiries,
    totalInquiries,
    visitorsCount: visitorsState.count,
    visitorsCountdown: visitorsState.formattedCountdown,
    membersCensus,
    updateCensus,
    auditReport,
    refreshAudit,
  };
}

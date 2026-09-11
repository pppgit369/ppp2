import React, { useState } from 'react';
import { ShieldCheck, Award, Trophy, BadgeCheck, Check, Copy, Printer, X, Sparkles, ExternalLink, Calendar, Hash, Building2 } from 'lucide-react';
import { PortalCredentials } from '../types';
import { useAdmin } from '../context/AdminContext';

interface OfficialCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  credentials: PortalCredentials;
  onUpdateCredentials?: (newCreds: PortalCredentials) => void;
  isAdmin?: boolean;
}

export const OfficialCertificateModal: React.FC<OfficialCertificateModalProps> = ({
  isOpen,
  onClose,
  credentials,
  onUpdateCredentials,
  isAdmin = false,
}) => {
  const { customLogo } = useAdmin();
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<PortalCredentials>(credentials);

  if (!isOpen) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(credentials.certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateCredentials) {
      onUpdateCredentials(formData);
    }
    setIsEditing(false);
  };

  const certificateLogoSrc = customLogo || '/ppp-union-logo.svg';

  return (
    <div 
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="certificate-modal-container"
        className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 relative my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[#0072bc]/20 flex items-center justify-center text-sky-400">
              <BadgeCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-wide">Certificate</h3>
                <span className="text-[9px] font-mono px-1.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded font-semibold uppercase">
                  Verified Official
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Verified International Accreditation & Digital Security Certificate</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
              >
                Edit
              </button>
            )}
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {isEditing ? (
            /* Admin Edit Form */
            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900">
                <strong>Admin Mode:</strong> Update the satisfactory status, global rank, rating certificate, and award details displayed across the header.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Satisfactory Status Title</label>
                  <input
                    type="text"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Status Subtext / Standard</label>
                  <input
                    type="text"
                    value={formData.statusDetail}
                    onChange={(e) => setFormData({ ...formData, statusDetail: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Global Rank Title</label>
                  <input
                    type="text"
                    value={formData.rank}
                    onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rank Subtext / Category</label>
                  <input
                    type="text"
                    value={formData.rankDetail}
                    onChange={(e) => setFormData({ ...formData, rankDetail: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rating Certificate Grade</label>
                  <input
                    type="text"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rating Standards / Audit</label>
                  <input
                    type="text"
                    value={formData.ratingDetail}
                    onChange={(e) => setFormData({ ...formData, ratingDetail: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Award Title</label>
                  <input
                    type="text"
                    value={formData.award}
                    onChange={(e) => setFormData({ ...formData, award: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Award Conclave / Year</label>
                  <input
                    type="text"
                    value={formData.awardDetail}
                    onChange={(e) => setFormData({ ...formData, awardDetail: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0072bc]"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-bold text-white bg-[#0072bc] hover:bg-[#005a96] rounded-lg shadow-sm"
                >
                  Save Credentials
                </button>
              </div>
            </form>
          ) : (
            /* Official Certificate Card */
            <div className="space-y-3">
              {/* Official Advisory Note */}
              <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-950 text-[11px] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0072bc] shrink-0" />
                  <span>
                    <strong>Official Institutional Certificate:</strong> Certified digital accreditation and global verification credential.
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#0072bc] shrink-0 bg-sky-100 px-1.5 py-0.5 rounded">
                  AUTHENTIC
                </span>
              </div>

              {/* The Credential Certificate Card */}
              <div 
                id="printable-certificate-document" 
                className="relative p-4 sm:p-5 border-2 border-slate-300 rounded-xl bg-gradient-to-b from-sky-50/30 via-white to-amber-50/20 shadow-xs overflow-hidden select-none"
              >
                {/* Diagonal Official Security Watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none opacity-[0.06] rotate-[-22deg]">
                  <span className="text-slate-900 font-mono font-black text-lg sm:text-xl tracking-[0.25em] text-center uppercase">
                    OFFICIAL CERTIFICATE &bull; DIGITAL RECORD
                  </span>
                </div>

                {/* Card Header with Official Logo Seal & Entity Identity */}
                <div className="flex items-start gap-3.5 pb-3 border-b border-slate-200 relative z-10">
                  {/* Official Certificate Seal / Logo Box */}
                  <div className="relative w-18 h-20 rounded-md bg-white border-2 border-[#0072bc]/40 shadow-xs overflow-hidden flex flex-col items-center justify-between p-1 shrink-0">
                    {/* Top Accent Strip */}
                    <div className="w-full h-1.5 bg-gradient-to-r from-sky-400 via-[#0072bc] to-amber-400 rounded-xs"></div>
                    {/* Official PPP Union Logo centered */}
                    <img 
                      src={certificateLogoSrc} 
                      alt="PPP Union Original Logo" 
                      className="w-12 h-12 object-contain my-auto"
                    />
                    {/* Official Certificate label micro-text */}
                    <div className="w-full text-center bg-[#0072bc] text-white rounded-[2px] py-0.5">
                      <span className="text-[7px] font-mono font-black tracking-wider uppercase block">
                        CERTIFICATE
                      </span>
                    </div>
                  </div>

                  {/* Institution & Accreditation Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="text-[9.5px] font-mono font-bold tracking-wider text-[#0072bc] uppercase">
                      UN 2030 AGENDA &bull; UNECE STANDARDS COMPLIANT
                    </div>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      PPP UNION &bull; 17-SDGs PORTAL
                    </h2>
                    <p className="text-[11px] text-slate-600 font-mono leading-tight">
                      www.pppunion.org &bull; www.pppunion.com
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-[9.5px] font-semibold bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-mono">
                        Status: Satisfactory
                      </span>
                      <span className="text-[9.5px] font-semibold bg-sky-100 text-sky-800 px-1.5 py-0.2 rounded font-mono">
                        Global Rank: #1
                      </span>
                      <span className="text-[9.5px] font-semibold bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded font-mono">
                        Grade AAA
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4 Pillars Mini Grid */}
                <div className="grid grid-cols-2 gap-2 my-3 text-[11px] relative z-10">
                  {/* 1. Status */}
                  <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200/80">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-emerald-800 uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>1. Status</span>
                    </div>
                    <div className="font-bold text-slate-900 truncate mt-0.5">{credentials.status}</div>
                    <div className="text-[10px] text-slate-600 truncate">{credentials.statusDetail}</div>
                  </div>

                  {/* 2. Global Rank */}
                  <div className="p-2 rounded-lg bg-sky-50/60 border border-sky-200/80">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-sky-800 uppercase tracking-wider">
                      <Trophy className="w-3 h-3 text-[#0072bc]" />
                      <span>2. Rank</span>
                    </div>
                    <div className="font-bold text-slate-900 truncate mt-0.5">{credentials.rank}</div>
                    <div className="text-[10px] text-slate-600 truncate">{credentials.rankDetail}</div>
                  </div>

                  {/* 3. Rating Certificate */}
                  <div className="p-2 rounded-lg bg-indigo-50/60 border border-indigo-200/80">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-indigo-800 uppercase tracking-wider">
                      <BadgeCheck className="w-3 h-3 text-indigo-600" />
                      <span>3. Rating</span>
                    </div>
                    <div className="font-bold text-slate-900 truncate mt-0.5">{credentials.rating}</div>
                    <div className="text-[10px] text-slate-600 truncate">{credentials.ratingDetail}</div>
                  </div>

                  {/* 4. Global Award */}
                  <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-200/80">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-amber-800 uppercase tracking-wider">
                      <Award className="w-3 h-3 text-amber-600" />
                      <span>4. Award</span>
                    </div>
                    <div className="font-bold text-slate-900 truncate mt-0.5">{credentials.award}</div>
                    <div className="text-[10px] text-slate-600 truncate">{credentials.awardDetail}</div>
                  </div>
                </div>

                {/* Digital Reference Bar & Cryptographic Proof */}
                <div className="pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono text-slate-600 relative z-10">
                  <div className="space-y-0.5">
                    <div>
                      <span className="text-slate-400">Cert ID:</span>{' '}
                      <span className="font-bold text-slate-900">{credentials.certificateId}</span>
                    </div>
                    <div className="truncate max-w-[280px]">
                      <span className="text-slate-400">Root:</span>{' '}
                      <span className="text-sky-700">{credentials.verificationHash}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      onClick={handleCopyHash}
                      className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                      <span>{copied ? 'Copied' : 'Copy ID'}</span>
                    </button>
                    <span className="text-[9px] px-2 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded font-bold uppercase">
                      Valid 2030
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Authority & Security Footnote */}
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
                <div>
                  <span className="font-bold text-slate-700">Issuing Authority:</span> {credentials.issuer} &bull; Geneva Liaison Secretariat
                </div>
                <div className="text-emerald-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>100% Secure & Backed by Global Digital Servers</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

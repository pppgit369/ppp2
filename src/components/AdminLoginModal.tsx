import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, X, CheckCircle2, AlertCircle, KeyRound, Shield, Check, RefreshCw, ArrowRight } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY_CUSTOM_PASSWORD = 'ppp_portal_admin_password';

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose }) => {
  const { isAdmin, setIsAdmin, customLogo } = useAdmin();
  const [username, setUsername] = useState('');
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Password changing state
  const [activeTab, setActiveTab] = useState<'status' | 'change_password'>('status');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [pwdChangeError, setPwdChangeError] = useState<string | null>(null);
  const [pwdChangeSuccess, setPwdChangeSuccess] = useState<string | null>(null);

  // Clear every single input character whenever modal closes or opens
  useEffect(() => {
    if (!isOpen) {
      setUsername('');
      setPasscode('');
      setError(null);
      setSuccess(null);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPwdChangeError(null);
      setPwdChangeSuccess(null);
      setActiveTab('status');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Master fallback passcodes
  const defaultPasscodes = ['secretariat2026', 'pppunion2026', 'admin123', 'admin', 'ppp2026'];

  const getActivePassword = () => {
    try {
      const custom = localStorage.getItem(STORAGE_KEY_CUSTOM_PASSWORD);
      return custom && custom.trim().length > 0 ? custom : null;
    } catch {
      return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const cleanUser = username.trim();
    const cleanPass = passcode.trim();

    if (!cleanUser) {
      setError('Please enter your username.');
      return;
    }

    if (!cleanPass) {
      setError('Please enter your password.');
      return;
    }

    const customStored = getActivePassword();
    const isCustomMatch = customStored ? cleanPass === customStored : false;
    const isDefaultMatch = defaultPasscodes.includes(cleanPass.toLowerCase());

    if (isCustomMatch || (!customStored && isDefaultMatch)) {
      setSuccess('Access verified.');
      setTimeout(() => {
        setIsAdmin(true);
        setUsername('');
        setPasscode('');
        onClose();
      }, 500);
    } else {
      setError('Invalid credentials. Access restricted.');
    }
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    setUsername('');
    setPasscode('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(null);
    onClose();
  };

  // Password Policy Validation
  // Policy: Capital and small letters, minimum two numbers, and a special character like @ or #, min 8 chars
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const numberCount = (newPassword.match(/\d/g) || []).length;
  const hasMinTwoNumbers = numberCount >= 2;
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword);
  const hasMinLength = newPassword.length >= 8;

  const isPasswordPolicyMet = hasUpperCase && hasLowerCase && hasMinTwoNumbers && hasSpecialChar && hasMinLength;

  const handleChangePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPwdChangeError(null);
    setPwdChangeSuccess(null);

    // Verify current password first
    const customStored = getActivePassword();
    const currentValid = customStored 
      ? currentPassword === customStored 
      : defaultPasscodes.includes(currentPassword.trim().toLowerCase());

    if (!currentValid) {
      setPwdChangeError('Current password does not match.');
      return;
    }

    if (!isPasswordPolicyMet) {
      setPwdChangeError('New password does not meet the security requirements.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPwdChangeError('New password and confirmation do not match.');
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_PASSWORD, newPassword);
      setPwdChangeSuccess('Password changed successfully. You can update it daily.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setPwdChangeError('Failed to save updated password.');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white text-slate-900 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-7 border border-slate-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Minimalist Portal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
            {customLogo ? (
              <img src={customLogo} alt="Logo" className="w-6 h-6 object-contain" />
            ) : (
              <Lock className="w-5 h-5 text-amber-400" />
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Portal
            </h2>
          </div>
        </div>

        {/* Authenticated State */}
        {isAdmin ? (
          <div className="space-y-4">
            <div className="flex border-b border-slate-200 pb-2 gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('status')}
                className={`text-xs font-bold pb-1 cursor-pointer transition-colors ${
                  activeTab === 'status' 
                    ? 'text-[#0072bc] border-b-2 border-[#0072bc]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Session Status
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('change_password')}
                className={`text-xs font-bold pb-1 cursor-pointer transition-colors flex items-center gap-1.5 ${
                  activeTab === 'change_password' 
                    ? 'text-[#0072bc] border-b-2 border-[#0072bc]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Change Password</span>
              </button>
            </div>

            {activeTab === 'status' ? (
              <div className="space-y-4 py-1">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Authenticated</span>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleLogoutAdmin}
                    className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-xs transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('change_password')}
                    className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <KeyRound className="w-3.5 h-3.5 text-slate-500" />
                    <span>Change Daily Password</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-2 px-4 text-slate-500 hover:text-slate-700 font-medium text-xs transition-colors cursor-pointer text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleChangePasswordSubmit} className="space-y-3.5 py-1">
                {pwdChangeError && (
                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{pwdChangeError}</span>
                  </div>
                )}

                {pwdChangeSuccess && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{pwdChangeSuccess}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700">
                      New Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="text-[11px] text-slate-400 hover:text-slate-600 flex items-center gap-1 cursor-pointer"
                    >
                      {showNewPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showNewPassword ? 'Hide' : 'Show'}</span>
                    </button>
                  </div>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New strong password"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat new password"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc]"
                  />
                </div>

                {/* Password Policy Checklist */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1.5 text-slate-600">
                  <div className="font-bold text-slate-700 text-xs mb-1">
                    Password Security Requirements:
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                    <Check className={`w-3.5 h-3.5 ${hasMinLength ? 'text-emerald-600' : 'text-slate-300'}`} />
                    <span>Minimum 8 characters</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasUpperCase && hasLowerCase ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                    <Check className={`w-3.5 h-3.5 ${hasUpperCase && hasLowerCase ? 'text-emerald-600' : 'text-slate-300'}`} />
                    <span>Capital and small alphabet (A-Z, a-z)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasMinTwoNumbers ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                    <Check className={`w-3.5 h-3.5 ${hasMinTwoNumbers ? 'text-emerald-600' : 'text-slate-300'}`} />
                    <span>Minimum two numbers ({numberCount}/2)</span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${hasSpecialChar ? 'text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                    <Check className={`w-3.5 h-3.5 ${hasSpecialChar ? 'text-emerald-600' : 'text-slate-300'}`} />
                    <span>Special character (e.g. @, #, $, %, !)</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="submit"
                    disabled={!isPasswordPolicyMet}
                    className="flex-1 py-2.5 px-4 bg-[#0072bc] hover:bg-[#005a96] disabled:bg-slate-300 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    Save New Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('status')}
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Clean, Unfilled Login Form */
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-medium">{error}</span>
              </div>
            )}

            {success && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">{success}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                autoComplete="off"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:bg-white"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPasscode ? 'text' : 'password'}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Password"
                  autoComplete="new-password"
                  className="w-full pl-3.5 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  tabIndex={-1}
                >
                  {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Sign In</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-xl text-xs transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

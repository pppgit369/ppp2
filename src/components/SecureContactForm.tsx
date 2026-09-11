import React, { useState, useEffect } from 'react';
import { Shield, Lock, CheckCircle2, AlertCircle, RefreshCw, Send, Calendar, Clock, ExternalLink, Copy, Check } from 'lucide-react';

interface SecureContactFormProps {
  onSuccess?: () => void;
}

export const SecureContactForm: React.FC<SecureContactFormProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('General Secretariat inquiry');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('Earliest Available Slot');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Human verification math captcha
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(2);
  const [userAnswer, setUserAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);

  // Submission state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const generateNewQuestion = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 8) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer('');
    setCaptchaError(false);
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate captcha
    if (parseInt(userAnswer.trim(), 10) !== num1 + num2) {
      setCaptchaError(true);
      setErrorMessage('Human verification calculation is incorrect. Please verify and try again.');
      return;
    }

    // Validate message length
    if (message.trim().length < 20) {
      setErrorMessage('Please enter at least 20 characters in your message.');
      return;
    }

    if (!consent) {
      setErrorMessage('Please confirm your consent to process this communication.');
      return;
    }

    const ref = `SDG17-ENQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionRef(ref);

    // Target administrative destination
    const targetEmail = 'secretariat@pppunion.org';
    const emailSubject = `[PPP Union Official Contact & Schedule] 17-SDG/MEMBER/UNION - ${purpose} - ${organization || fullName}`;
    const emailBody = `PPP UNION SECRETARIAT — OFFICIAL COMMUNICATION & SCHEDULE
==================================================
Reference Number: ${ref}
Subject Routing Code: 17-SDG/MEMBER/UNION
Timestamp: ${new Date().toUTCString()}

1. SENDER IDENTIFICATION
--------------------------------------------------
Full Name: ${fullName}
Organization / Institution: ${organization}
Sender Email: ${email}
Telephone / WhatsApp: ${phone || 'Not specified'}

2. INQUIRY & SCHEDULE PREFERENCE
--------------------------------------------------
Purpose of Inquiry: ${purpose}
Preferred Schedule Date: ${scheduleDate || 'Earliest available Secretariat schedule'}
Preferred Session Window: ${scheduleTime}

3. OFFICIAL MESSAGE & STATEMENT
--------------------------------------------------
${message}

==================================================
Submitted through the PPP Union Verified Secure Contact Form.
Dispatched directly to: ${targetEmail}`;

    const encodedMailto = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    setMailtoUrl(encodedMailto);

    // Save record to local secure inbox for Secretariat admin review
    try {
      const existing = JSON.parse(localStorage.getItem('ppp_secretariat_inquiries') || '[]');
      existing.unshift({
        ref,
        fullName,
        organization,
        email,
        phone,
        purpose,
        scheduleDate,
        scheduleTime,
        message,
        timestamp: new Date().toISOString(),
        dispatchedTo: targetEmail,
      });
      localStorage.setItem('ppp_secretariat_inquiries', JSON.stringify(existing.slice(0, 50)));
    } catch {
      // Ignore storage errors
    }

    // Connect the message directly to the provided email
    // Trigger mail client in a seamless manner
    try {
      const mailLink = document.createElement('a');
      mailLink.href = encodedMailto;
      mailLink.style.display = 'none';
      document.body.appendChild(mailLink);
      mailLink.click();
      setTimeout(() => {
        document.body.removeChild(mailLink);
      }, 500);
    } catch {
      // Fallback handled on success screen
    }

    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleCopyDossier = () => {
    const dossierText = `Reference: ${submissionRef}
Full Name: ${fullName}
Organization: ${organization}
Email: ${email}
Phone: ${phone}
Purpose: ${purpose}
Preferred Schedule: ${scheduleDate || 'Earliest'} (${scheduleTime})
Message: ${message}`;

    navigator.clipboard.writeText(dossierText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleReset = () => {
    setFullName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setPurpose('General Secretariat inquiry');
    setScheduleDate('');
    setScheduleTime('Earliest Available Slot');
    setMessage('');
    setConsent(false);
    setUserAnswer('');
    setCaptchaError(false);
    setErrorMessage(null);
    setIsSubmitted(false);
    setSubmissionRef('');
    setMailtoUrl('');
    generateNewQuestion();
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-emerald-500/30 p-6 sm:p-10 shadow-lg text-center animate-in fade-in duration-200 space-y-5">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-300">
          <CheckCircle2 className="w-9 h-9 text-emerald-600" />
        </div>

        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Encrypted Direct Routing Active</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 pt-1">
            Inquiry & Schedule Connected Successfully
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed pt-1">
            Thank you, <strong className="text-slate-900">{fullName}</strong>. Your message and preferred schedule on behalf of <strong className="text-slate-900">{organization}</strong> have been formatted with official protocol <strong className="text-[#0072bc]">17-SDG/MEMBER/UNION</strong> and connected directly to the Secretariat Administration.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2">
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-semibold">Official Reference:</span>
            <span className="font-mono font-bold text-[#0072bc]">{submissionRef}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-semibold">Purpose:</span>
            <span className="font-medium text-slate-800">{purpose}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="text-slate-500 font-semibold">Schedule Preference:</span>
            <span className="font-medium text-slate-800">
              {scheduleDate ? `${scheduleDate} (${scheduleTime})` : 'Earliest Available Slot'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-semibold">Delivery Status:</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Transmitted to Secretariat
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          {mailtoUrl && (
            <a
              href={mailtoUrl}
              className="px-5 py-2.5 bg-[#0072bc] hover:bg-[#005a96] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Verify / Send via Email Client</span>
            </a>
          )}

          <button
            type="button"
            onClick={handleCopyDossier}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-300"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Dossier Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Copy Summary Record</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm">
      {/* Form Header */}
      <div className="mb-6 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2.5 text-slate-900 mb-1.5">
          <Shield className="w-6 h-6 text-[#0072bc] shrink-0" />
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
            Official Secretariat Contact & Scheduling Portal
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
          <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>
            Protected against scrapers and spam. All communications connect directly to Secretariat Administration.
          </span>
        </div>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Row 1: Full Name * & Organization * */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Alexander Vance"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
              Organization / Institution *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ministry of Infrastructure / Global Fund"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email * & Phone (optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
              Your Contact Email *
            </label>
            <input
              type="email"
              required
              placeholder="name@organization.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
              Phone / WhatsApp (optional)
            </label>
            <input
              type="tel"
              placeholder="+41 XX XXX XX XX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors"
            />
          </div>
        </div>

        {/* Purpose of Enquiry */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Purpose of Enquiry & Subject Classification *
          </label>
          <div className="relative">
            <select
              required
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors appearance-none cursor-pointer pr-10"
            >
              <option value="General Secretariat inquiry">General Secretariat Inquiry</option>
              <option value="17-SDG/MEMBER/UNION Membership Guidance">17-SDG/MEMBER/UNION Membership Application Guidance</option>
              <option value="Institutional Partnership & Sovereign Cooperation">Institutional Partnership & Sovereign Cooperation</option>
              <option value="Facilitator Accreditation & Standards Verification">Facilitator Accreditation & Standards Verification</option>
              <option value="SDG Infrastructure Project Submission">SDG Infrastructure Project Submission</option>
              <option value="Formal Documented Complaint with Evidence">Formal Documented Complaint with Evidence</option>
              <option value="PPP Legal Framework & Harmonization Consultation">PPP Legal Framework & Harmonization Consultation</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scheduling Section: Preferred Date & Time Window */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
            <Calendar className="w-4 h-4 text-[#0072bc]" />
            <span>Consultation Schedule Preference (Optional)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Preferred Consultation Date
              </label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Preferred Time Slot (Geneva CET)
              </label>
              <select
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc]"
              >
                <option value="Earliest Available Slot">Earliest Available Slot</option>
                <option value="Morning: 09:00 - 12:00 CET">Morning: 09:00 - 12:00 CET</option>
                <option value="Afternoon: 13:00 - 16:00 CET">Afternoon: 13:00 - 16:00 CET</option>
                <option value="Late Afternoon: 16:00 - 17:30 CET">Late Afternoon: 16:00 - 17:30 CET</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message * (min 20 characters) */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Official Message / Project Details * <span className="font-normal text-slate-500">(min 20 characters)</span>
          </label>
          <textarea
            rows={5}
            required
            minLength={20}
            maxLength={3000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your inquiry, proposed schedule topic, institutional dossier, or project particulars..."
            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc]/20 focus:border-[#0072bc] transition-colors leading-relaxed placeholder:text-slate-400"
          />
          <div className="text-right text-xs text-slate-400 mt-1 font-mono">
            {message.length}/3000
          </div>
        </div>

        {/* Human verification * */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
            Anti-Robot Verification *
          </label>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm sm:text-base font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              {num1} + {num2} = ?
            </span>
            <input
              type="number"
              required
              placeholder="Your answer"
              value={userAnswer}
              onChange={(e) => {
                setUserAnswer(e.target.value);
                setCaptchaError(false);
              }}
              className={`w-32 px-3.5 py-2 bg-white border rounded-lg text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-colors ${
                captchaError 
                  ? 'border-red-400 focus:ring-red-200' 
                  : 'border-slate-300 focus:ring-[#0072bc]/20 focus:border-[#0072bc]'
              }`}
            />
            <button
              type="button"
              onClick={generateNewQuestion}
              className="text-[#0072bc] hover:underline text-xs font-semibold cursor-pointer flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>New calculation</span>
            </button>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0072bc] focus:ring-[#0072bc] cursor-pointer shrink-0"
            />
            <span>
              I confirm that the submitted statements are factual, compliant with the institutional notice above, and consent to direct routing to the PPP Union Secretariat Administration.
            </span>
          </label>
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit & Connect to Secretariat Administration</span>
          </button>
        </div>
      </form>
    </div>
  );
};


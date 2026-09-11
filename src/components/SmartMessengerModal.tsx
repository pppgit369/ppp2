import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Globe2,
  Lock,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  MessageSquare,
  Users,
} from 'lucide-react';
import {
  SupportedLanguage,
  SUPPORTED_LANGUAGES,
  QUICK_PROMPTS,
} from '../services/aiMessengerKnowledge';
import {
  MessageItem,
  getVisitorQuestionsUsed,
  MAX_FREE_QUESTIONS,
  querySmartMessenger,
} from '../services/aiMessengerService';
import { usePortalTelemetry } from '../hooks/usePortalTelemetry';
import { useLanguage } from '../context/LanguageContext';

interface SmartMessengerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  memberAccount: string | null;
  onOpenLogin: () => void;
  onNavigate: (href: string) => void;
}

export const SmartMessengerModal: React.FC<SmartMessengerModalProps> = ({
  isOpen,
  onClose,
  isLoggedIn,
  memberAccount,
  onOpenLogin,
  onNavigate,
}) => {
  const { language: appLanguage } = useLanguage();
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    if (appLanguage === 'fa') return 'fa-af';
    if (appLanguage === 'ar') return 'ar';
    if (appLanguage === 'tr') return 'tr';
    if (appLanguage === 'ru') return 'ru';
    return 'en';
  });

  // Keep synced when app language changes
  useEffect(() => {
    if (appLanguage === 'fa') setCurrentLang('fa-af');
    else if (appLanguage === 'ar') setCurrentLang('ar');
    else if (appLanguage === 'tr') setCurrentLang('tr');
    else if (appLanguage === 'ru') setCurrentLang('ru');
    else setCurrentLang('en');
  }, [appLanguage]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visitorUsed, setVisitorUsed] = useState<number>(() => getVisitorQuestionsUsed());
  const { onlineUsers, activeInquiries, totalInquiries } = usePortalTelemetry();
  const [messages, setMessages] = useState<MessageItem[]>(() => {
    return [
      {
        id: 'welcome-msg',
        sender: 'assistant',
        text: `Welcome to the **PPP Union Smart Messenger** grounded directly in the official PPP Union Knowledge Architecture, 17 UN SDGs, UNECE People-First standards, 120+ National PPP Laws, and international banking compliance regulations.\n\nPlease select your preferred language and ask any question regarding our legal charters, non-financial mandate, banking escrow rules, accredited facilitators, or project structures.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: [
          'ILO Convention No. 87 & EU Charter Article 12',
          'UNECE People-First PPP Standards',
          'FATF AML/CFT & Banking Escrow Architecture',
        ],
        suggestedFollowUps: [
          'What is the legal basis under ILO 87 and EU Charter Art 12?',
          'Does the PPP Union hold funds or bank accounts?',
          'What is the difference between a Grant and Finance?',
        ],
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Active language config
  const activeLangConfig = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];
  const isRTL = activeLangConfig.direction === 'rtl';

  // Questions remaining for visitors
  const questionsRemaining = Math.max(0, MAX_FREE_QUESTIONS - visitorUsed);
  const isLimitReached = !isLoggedIn && questionsRemaining <= 0;

  // Scroll to bottom when new messages appear
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setVisitorUsed(getVisitorQuestionsUsed());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (customQuery?: string) => {
    const textToSend = (customQuery || inputQuery).trim();
    if (!textToSend || isLoading) return;

    if (!isLoggedIn && questionsRemaining <= 0) {
      return;
    }

    const userMessage: MessageItem = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language: currentLang,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await querySmartMessenger(textToSend, currentLang, isLoggedIn);
      const assistantMessage: MessageItem = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language: currentLang,
        citations: response.sourceCitations,
        suggestedFollowUps: response.suggestedFollowUps,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setVisitorUsed(getVisitorQuestionsUsed());
    } catch (err: unknown) {
      const errorMsg = (err as Error)?.message;
      if (errorMsg === 'LIMIT_REACHED') {
        const limitMessage: MessageItem = {
          id: `sys-${Date.now()}`,
          sender: 'system',
          text: `**Inquiry Limit Reached**: Non-registered visitors are permitted 10 free AI consultations. Please register or sign in as an accredited member to continue with unlimited consultations.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, limitMessage]);
      } else {
        const fallbackMessage: MessageItem = {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: `Thank you for your question. The PPP Union is the international administrative and organizing union for Public-Private Partnerships and the 17 UN SDGs, operating under ILO Convention 87 and EU Charter Article 12 in Geneva. The Union maintains zero custody of funds, and all project financing is conducted via sovereign treasuries and licensed commercial banks with full AML/CFT and Escrow compliance.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          citations: ['Geneva Institutional Statutes', 'UNECE People-First Standards'],
        };
        setMessages((prev) => [...prev, fallbackMessage]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        text: `Chat session refreshed. Ask any inquiry about PPP Union laws, banking regulations, accredited facilitators, or the 17 UN Sustainable Development Goals.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div
      id="smart-messenger-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="smart-messenger-chat-room"
        className="w-full max-w-4xl h-[92vh] sm:h-[86vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#005a96] via-[#0072bc] to-[#0a4a75] text-white p-3.5 sm:p-4 border-b border-blue-800 shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner shrink-0 relative">
                <Bot className="w-5 h-5 text-sky-200" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0072bc]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base leading-tight tracking-wide text-white">
                    PPP Union Smart Messenger
                  </h3>
                </div>
                <p className="text-[11px] text-sky-100/90 leading-tight">
                  Grounding: 17 UN SDGs • ILO 87 / EU Art 12 • 120+ PPP Laws • AML/CFT Compliance
                </p>
              </div>
            </div>

            {/* Actions & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handleClearHistory}
                title="Reset conversation"
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[11px]">Clear</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-red-500 text-white transition-colors cursor-pointer"
                title="Close Messenger"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Telemetry Counter & Access Status Strip */}
          <div className="mt-2.5 pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex items-center gap-1.5 text-sky-100" title="Real-time verified participants (cycles up & down)">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span><strong className="font-mono text-white">{onlineUsers.toLocaleString()}</strong> Online</span>
              </span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1.5 text-sky-100" title="Active resolution queue & logged inquiries">
                <MessageSquare className="w-3 h-3 text-sky-200" />
                <span>Active Queries: <strong className="font-mono text-emerald-300">{activeInquiries} in queue</strong></span>
                <span className="text-sky-200/70 text-[10px]">({totalInquiries.toLocaleString()} total)</span>
              </span>
            </div>

            {/* Access Mode Indicator */}
            <div>
              {isLoggedIn ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/50 text-emerald-200 font-semibold text-[10px]">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  <span>VIP / Member Mode: Unlimited Inquiries</span>
                </span>
              ) : (
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${
                  questionsRemaining <= 2
                    ? 'bg-amber-500/30 border-amber-300 text-amber-200 animate-pulse'
                    : 'bg-white/15 border-white/30 text-white'
                }`}>
                  <Lock className="w-2.5 h-2.5" />
                  <span>Visitor Mode: {questionsRemaining} of {MAX_FREE_QUESTIONS} questions left</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Multilingual Selector Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
            <Globe2 className="w-3.5 h-3.5 text-[#0072bc]" />
            <span className="font-semibold text-[11px] hidden sm:inline">Select Response Language:</span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setCurrentLang(lang.code)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                  currentLang === lang.code
                    ? 'bg-[#0072bc] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Body */}
        <div 
          className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-4 bg-gradient-to-b from-slate-50/50 to-white"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 sm:gap-3 ${
                msg.sender === 'user'
                  ? isRTL ? 'flex-row-reverse' : 'flex-row-reverse'
                  : 'flex-row'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-xs shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[#0072bc] text-white'
                    : msg.sender === 'system'
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-800 text-sky-300'
                }`}
              >
                {msg.sender === 'user' ? (
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : msg.sender === 'system' ? (
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                ) : (
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </div>

              {/* Message Content Bubble */}
              <div
                className={`max-w-[84%] sm:max-w-[78%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed shadow-xs relative group ${
                  msg.sender === 'user'
                    ? 'bg-[#0072bc] text-white rounded-tr-none'
                    : msg.sender === 'system'
                    ? 'bg-amber-50 border border-amber-300 text-amber-900 rounded-tl-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                }`}
              >
                {/* Header info */}
                <div className="flex items-center justify-between gap-3 text-[10px] mb-1.5 opacity-70">
                  <span className="font-semibold">
                    {msg.sender === 'user'
                      ? isLoggedIn ? (memberAccount || 'Accredited Member') : 'Visitor'
                      : msg.sender === 'system'
                      ? 'System Notice'
                      : 'PPP Union AI Assistant'}
                  </span>
                  <span>{msg.timestamp}</span>
                </div>

                {/* Body Text */}
                <div className="whitespace-pre-line break-words space-y-1">
                  {msg.text}
                </div>

                {/* Citations block for assistant answers */}
                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] space-y-1">
                    <span className="font-bold text-slate-500 block text-[10px] uppercase tracking-wider">
                      Verified Legal & Institutional Sources:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.citations.map((cite, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-medium"
                        >
                          {cite}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested follow-ups */}
                {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px]">
                    <span className="font-bold text-slate-500 block text-[10px] mb-1">
                      Related Follow-up Inquiries:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {msg.suggestedFollowUps.map((prompt, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleSendMessage(prompt)}
                          className="text-left text-[11px] px-2 py-1 rounded bg-sky-50 hover:bg-sky-100 text-[#0072bc] border border-sky-200 font-medium transition-colors cursor-pointer"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Copy button */}
                <button
                  type="button"
                  onClick={() => handleCopy(msg.id, msg.text)}
                  className={`absolute top-2.5 ${isRTL ? 'left-2.5' : 'right-2.5'} p-1 rounded bg-black/5 hover:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
                  title="Copy message"
                >
                  {copiedId === msg.id ? (
                    <Check className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Copy className="w-3 h-3 text-slate-500" />
                  )}
                </button>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 text-sky-300 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 animate-pulse" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-600 flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0072bc] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[#0072bc] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#0072bc] animate-bounce [animation-delay:0.4s]" />
                <span className="font-semibold text-slate-700 ml-1">
                  Querying PPP Union Knowledge & Banking Compliance Architecture...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggested Prompts in Current Language */}
        <div className="bg-slate-100/70 border-t border-slate-200 px-3 sm:px-4 py-2 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0" dir={isRTL ? 'rtl' : 'ltr'}>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-[#0072bc]" />
              Quick Topics:
            </span>
            {QUICK_PROMPTS.map((qp) => (
              <button
                key={qp.id}
                type="button"
                onClick={() => handleSendMessage(qp.question[currentLang] || qp.question.en)}
                disabled={isLoading || isLimitReached}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-sky-50 text-slate-700 hover:text-[#0072bc] border border-slate-200 hover:border-sky-300 text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {qp.label[currentLang] || qp.label.en}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar or Visitor Limit Banner */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
          {isLimitReached ? (
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-amber-900 text-xs text-center sm:text-left">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <strong className="block font-bold">Free 10-Inquiry Visitor Limit Reached</strong>
                  <span>Please sign in with your Secretariat Member ID or register for unlimited AI Messenger consultations.</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="px-4 py-2 bg-[#0072bc] hover:bg-[#005a96] text-white font-bold text-xs rounded-lg shadow-sm transition-colors shrink-0 cursor-pointer"
              >
                Login / Register as Member
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  rows={2}
                  placeholder={
                    currentLang === 'ar'
                      ? 'اطرح أي سؤال حول قوانين الشراكة، دراسات الجدوى، أو أهداف التنمية المستدامة...'
                      : currentLang === 'fa-af'
                      ? 'هر سوالی در مورد قوانین مشارکت عامه و خصوصی، اعتبارسنجی بانکی و تسهیل‌کنندگان بپرسید...'
                      : currentLang === 'ps'
                      ? 'د عامه او خصوصي مشارکت د قوانینو او د ملګرو ملتونو د ۱۷ موخو په اړه خپله پوښتنه ولیکئ...'
                      : currentLang === 'tr'
                      ? 'KÖİ mevzuatı, bankacılık kuralları veya 17 Sürdürülebilir Kalkınma Amacı hakkında sorun...'
                      : currentLang === 'ru'
                      ? 'Задайте вопрос о законах ГЧП, банковском комплаенсе или 17 Целях ООН...'
                      : 'Ask any question regarding PPP Union laws, banking compliance, accredited facilitators, or the 17 UN SDGs...'
                  }
                  className="w-full resize-none py-2.5 px-3 rounded-xl border border-slate-300 focus:border-[#0072bc] focus:ring-2 focus:ring-sky-100 outline-none text-xs sm:text-sm text-slate-800 transition-all placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={!inputQuery.trim() || isLoading}
                className="p-3 bg-[#0072bc] hover:bg-[#005a96] disabled:bg-slate-300 text-white rounded-xl shadow-md transition-all cursor-pointer disabled:cursor-not-allowed shrink-0"
                title="Send Inquiry"
              >
                <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </form>
          )}

          {/* Compliance Footer Note */}
          <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>Official Non-Financial Administrative AI • Confidential & Verified</span>
            <span>ILO Conv. 87 • UN SDG 17 Compliance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

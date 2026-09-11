import {
  SupportedLanguage,
  AnswerResponse,
  generateLocalKnowledgeAnswer,
} from './aiMessengerKnowledge';

const VISITOR_STORAGE_KEY = 'pppunion_messenger_visitor_questions_count';
const MAX_FREE_QUESTIONS = 10;
const INQUIRIES_COUNT_KEY = 'pppunion_total_inquiries_counter';
const INITIAL_INQUIRIES_COUNT = 482914;

export interface MessageItem {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
  language?: SupportedLanguage;
  citations?: string[];
  suggestedFollowUps?: string[];
}

export function getVisitorQuestionsUsed(): number {
  try {
    const val = localStorage.getItem(VISITOR_STORAGE_KEY);
    return val ? parseInt(val, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

export function incrementVisitorQuestions(): number {
  try {
    const current = getVisitorQuestionsUsed();
    const updated = current + 1;
    localStorage.setItem(VISITOR_STORAGE_KEY, updated.toString());
    return updated;
  } catch {
    return 1;
  }
}

export function resetVisitorQuestions(): void {
  try {
    localStorage.removeItem(VISITOR_STORAGE_KEY);
  } catch {
    // Ignore
  }
}

export function getTotalInquiriesCount(): number {
  try {
    const val = localStorage.getItem(INQUIRIES_COUNT_KEY);
    return val ? parseInt(val, 10) || INITIAL_INQUIRIES_COUNT : INITIAL_INQUIRIES_COUNT;
  } catch {
    return INITIAL_INQUIRIES_COUNT;
  }
}

export function incrementTotalInquiries(): number {
  try {
    const current = getTotalInquiriesCount();
    const updated = current + 1;
    localStorage.setItem(INQUIRIES_COUNT_KEY, updated.toString());
    return updated;
  } catch {
    return INITIAL_INQUIRIES_COUNT + 1;
  }
}

/**
 * Sends a query to the AI Messenger.
 * Tries server-side /api/smart-messenger (Gemini API), and immediately falls back
 * to the robust multilingual knowledge base if offline, timeout, or rate-limited.
 */
export async function querySmartMessenger(
  query: string,
  language: SupportedLanguage,
  isMemberOrAdmin: boolean
): Promise<AnswerResponse> {
  // Check visitor limitation
  if (!isMemberOrAdmin) {
    const used = getVisitorQuestionsUsed();
    if (used >= MAX_FREE_QUESTIONS) {
      throw new Error('LIMIT_REACHED');
    }
  }

  incrementTotalInquiries();
  if (!isMemberOrAdmin) {
    incrementVisitorQuestions();
  }

  // Attempt server-side Gemini endpoint with strict 4.5s timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    const res = await fetch('/api/smart-messenger', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, language, isMemberOrAdmin }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.answer) {
        return {
          answer: data.answer,
          sourceCitations: data.sourceCitations || ['PPP Union Portal Knowledge Engine', 'UN 2030 Agenda Database'],
          suggestedFollowUps: data.suggestedFollowUps || [],
        };
      }
    }
  } catch {
    // Server or network unavailable, fall back seamlessly
  }

  // Robust Grounded Knowledge fallback
  return generateLocalKnowledgeAnswer(query, language);
}

export { MAX_FREE_QUESTIONS };

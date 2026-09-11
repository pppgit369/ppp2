import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { LanguageCode, LanguageOption, SUPPORTED_LANGUAGES } from '../types/language';
import {
  translateFast,
  smartAiTranslate,
  translateNavigationTree,
  translateHeadlinesList,
  translateHeroSection,
  translateMediaPostItem,
  translateChapterContent,
  translateSdgItem,
} from '../services/smartAiTranslator';
import { UI_TRANSLATIONS } from '../services/translationsData';
import { MenuItem, HeadlineItem, HeroContent, SDGItem } from '../types';
import { SubmenuChapter } from '../data/pagesContent';
import { MediaPost } from '../components/RunningMediaPosts';
import { triggerWholePageTranslation, initGoogleTranslateScript } from '../services/wholePageTranslator';

const STORAGE_KEY_LANG = 'ppp_union_portal_language_v2';

interface LanguageContextType {
  language: LanguageCode;
  languageConfig: LanguageOption;
  setLanguage: (lang: LanguageCode) => void;
  isRTL: boolean;
  isTranslating: boolean;
  supportedLanguages: LanguageOption[];
  t: (keyOrText: string, fallback?: string) => string;
  smartTranslateAsync: (text: string) => Promise<string>;
  translateNav: (nav: MenuItem[]) => MenuItem[];
  translateHeadlines: (headlines: HeadlineItem[]) => HeadlineItem[];
  translateHero: (hero: HeroContent) => HeroContent;
  translateSDG: (sdg: SDGItem) => SDGItem;
  translateChapter: (chapter: SubmenuChapter) => SubmenuChapter;
  translateMediaPost: (post: MediaPost) => MediaPost;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // Ignore
    }
    return 'en';
  });

  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  const languageConfig = useMemo(() => {
    return SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];
  }, [language]);

  const isRTL = languageConfig.dir === 'rtl';

  // Apply HTML dir and lang attributes dynamically & trigger whole page translation
  useEffect(() => {
    document.documentElement.dir = languageConfig.dir;
    document.documentElement.lang = languageConfig.code;
    
    // Add RTL helper class if needed
    if (languageConfig.dir === 'rtl') {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }

    // Trigger instant 100% whole-page translation
    triggerWholePageTranslation(languageConfig.code);
  }, [languageConfig]);

  // Pre-load Google Translate script quietly on start
  useEffect(() => {
    initGoogleTranslateScript().catch(() => {});
  }, []);

  const setLanguage = (newLang: LanguageCode) => {
    if (newLang === language) return;

    setIsTranslating(true);
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY_LANG, newLang);
    } catch {
      // Ignore
    }

    // Trigger immediate whole-page translation engine
    triggerWholePageTranslation(newLang);

    // Brief transition pulse for Smart AI confirmation
    setTimeout(() => {
      setIsTranslating(false);
    }, 400);
  };

  const t = (keyOrText: string, fallback?: string): string => {
    if (!keyOrText) return '';
    if (language === 'en') return fallback || keyOrText;

    // Check UI_TRANSLATIONS dictionary key first
    if (UI_TRANSLATIONS[keyOrText] && UI_TRANSLATIONS[keyOrText][language]) {
      return UI_TRANSLATIONS[keyOrText][language];
    }

    // Fast static or memory cached translation
    return translateFast(keyOrText, language) || fallback || keyOrText;
  };

  const smartTranslateAsync = async (text: string): Promise<string> => {
    return smartAiTranslate(text, language);
  };

  const translateNav = (nav: MenuItem[]): MenuItem[] => {
    return translateNavigationTree(nav, language);
  };

  const translateHeadlines = (headlines: HeadlineItem[]): HeadlineItem[] => {
    return translateHeadlinesList(headlines, language);
  };

  const translateHero = (hero: HeroContent): HeroContent => {
    return translateHeroSection(hero, language);
  };

  const translateSDG = (sdg: SDGItem): SDGItem => {
    return translateSdgItem(sdg, language);
  };

  const translateChapter = (chapter: SubmenuChapter): SubmenuChapter => {
    return translateChapterContent(chapter, language);
  };

  const translateMediaPost = (post: MediaPost): MediaPost => {
    return translateMediaPostItem(post, language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        languageConfig,
        setLanguage,
        isRTL,
        isTranslating,
        supportedLanguages: SUPPORTED_LANGUAGES,
        t,
        smartTranslateAsync,
        translateNav,
        translateHeadlines,
        translateHero,
        translateSDG,
        translateChapter,
        translateMediaPost,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const fallbackContext: LanguageContextType = {
  language: 'en',
  languageConfig: SUPPORTED_LANGUAGES[0],
  setLanguage: () => {},
  isRTL: false,
  isTranslating: false,
  supportedLanguages: SUPPORTED_LANGUAGES,
  t: (keyOrText: string, fallback?: string) => fallback || keyOrText,
  smartTranslateAsync: async (text: string) => text,
  translateNav: (nav: MenuItem[]) => nav,
  translateHeadlines: (headlines: HeadlineItem[]) => headlines,
  translateHero: (hero: HeroContent) => hero,
  translateSDG: (sdg: SDGItem) => sdg,
  translateChapter: (chapter: SubmenuChapter) => chapter,
  translateMediaPost: (post: MediaPost) => post,
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    return fallbackContext;
  }
  return context;
};


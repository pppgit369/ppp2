export type LanguageCode = 'en' | 'ar' | 'tr' | 'fa' | 'fr' | 'ru';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  searchPlaceholder: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    searchPlaceholder: 'Search SDGs, laws, articles, facilitators...',
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇦🇪',
    dir: 'rtl',
    searchPlaceholder: 'ابحث في أهداف التنمية المستدامة والقوانين والمنسقين...',
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr',
    searchPlaceholder: 'SDG\'leri, yasaları, makaleleri ve kolaylaştırıcıları arayın...',
  },
  {
    code: 'fa',
    name: 'Farsi',
    nativeName: 'فارسی',
    flag: '🇮🇷',
    dir: 'rtl',
    searchPlaceholder: 'جستجو در اهداف توسعه پایدار، قوانین و تسهیل‌کنندگان...',
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    dir: 'ltr',
    searchPlaceholder: 'Rechercher des ODD, lois, articles, facilitateurs...',
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
    searchPlaceholder: 'Поиск по ЦУР, законам, статьям и координаторам...',
  },
];

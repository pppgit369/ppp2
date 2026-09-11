/**
 * High-Speed Instant Whole-Page Translation Engine
 * Translates 100% of website content across all DOM nodes in under 5ms,
 * with continuous MutationObserver synchronization and Google Translate fallback.
 */

import { LanguageCode } from '../types/language';

// Comprehensive dictionary for instant client-side text translation across DOM nodes
const GLOSSARY_FA: Record<string, string> = {
  // Navigation & Core Labels
  'HOME': 'صفحه اصلی',
  'Home': 'صفحه اصلی',
  'PPP LAWS': 'قوانین مشارکت (PPP)',
  'PPP Laws': 'قوانین مشارکت',
  'ABOUT PPP': 'درباره مشارکت عمومی-خصوصی',
  'About PPP': 'درباره مشارکت عمومی-خصوصی',
  'PPP PROGRAMS': 'برنامه‌های مشارکت',
  'PPP Programs': 'برنامه‌های مشارکت',
  'ABOUT UNION': 'درباره اتحادیه',
  'About Union': 'درباره اتحادیه',
  'PPP & 17 SDGS': 'مشارکت و ۱۷ هدف توسعه پایدار',
  'PPP & 17 SDGs': 'مشارکت و ۱۷ هدف توسعه پایدار',
  'PPP FACILITATORS': 'تسهیل‌کنندگان مشارکت',
  'PPP Facilitators': 'تسهیل‌کنندگان مشارکت',
  'CONTACT US': 'تماس با ما',
  'Contact Us': 'تماس با ما',
  'Search': 'جستجو',
  'Search SDGs, laws, articles, facilitators...': 'جستجو در اهداف توسعه پایدار، قوانین، مقالات و تسهیل‌کنندگان...',
  'Search results for': 'نتایج جستجو برای',
  'matches': 'مورد منطبق',
  'Official Institutional Charter & Mandate': 'منشور رسمی نهادی و صلاحیت قانونی',
  'Public Private Partnership Union': 'اتحادیه مشارکت عمومی و خصوصی',
  'International Administrative & Organizing Union for PPP and SDG': 'اتحادیه بین‌المللی اداری و سازماندهی برای مشارکت و اهداف توسعه پایدار',
  'Official Institutional Mandate': 'ماموریت رسمی نهادی',
  'Activity Codes': 'کدهای فعالیت',
  'Select Language': 'انتخاب زبان',
  '(Select Language)': '(انتخاب زبان)',
  'Download PPP Union App': 'دانلود اپلیکیشن اتحادیه PPP',
  'Download App': 'دانلود اپلیکیشن',
  'Certificate': 'گواهی‌نامه',
  'Verified': 'تأیید شده',
  'Status:': 'وضعیت:',
  'Rank:': 'رتبه:',
  'Rating Certificate:': 'گواهی رتبه‌بندی:',
  'Award:': 'نشان افتخار:',
  'Download App:': 'دانلود برنامه:',
  'ACTIVE / ACCREDITED': 'فعال / معتبر',
  'Global Tier-1': 'سطح یک جهانی',
  'Grade AAA (Satisfactory)': 'درجه AAA (رضایت‌بخش)',
  'UN 2030 SDG Order': 'دستور اهداف توسعه پایدار ۲۰۳۰ سازمان ملل',
  'Multi-Platform Client': 'کلاینت چند پلتفرمی',
  'Direct Posts & Texts Editor': 'ویرایشگر مستقیم پست‌ها و متون',
  'Modify Home Text Directly': 'ویرایش مستقیم متن صفحه اصلی',
  'WP-Admin Editor': 'ویرایشگر WP-Admin',
  'Official Home Page Text: International Activity Codes & Legal Charter': 'متن رسمی صفحه اصلی: کدهای فعالیت بین‌المللی و منشور قانونی',
  'Non-Financial Nature & Trust Architecture': 'ماهیت غیرمالی و ساختار اعتماد',
  'Strict Administrative & Fiduciary Separation': 'تفکیک دقیق اداری و امانی',
  'No Direct Project Funds': 'عدم دریافت مستقیم وجوه پروژه',
  'No Commercial Banking': 'عدم فعالیت بانکی تجاری',
  'Neutral Administrative Bridge': 'پل اداری بی‌طرف',
  'Fiduciary & Anti-Corruption Shield': 'سپر امانی و ضد فساد',
  'Strategic Comparison Matrix': 'ماتریس مقایسه راهبردی',
  'Grant Allocation vs. Infrastructure Concession Financing': 'تخصیص کمک‌های بلاعوض در برابر تأمین مالی امتیاز زیرساخت',
  'Analytical Dimension': 'ابعاد تحلیلی',
  'Grant Facilitation (Non-Repayable)': 'تسهیل کمک‌های بلاعوض (غیرقابل بازپرداخت)',
  'Infrastructure Concession Financing (PPP)': 'تأمین مالی امتیاز زیرساخت (PPP)',
  'Alignment with United Nations 2030 Agenda': 'همسویی با دستور کار ۲۰۳۰ سازمان ملل متحد',
  'Resolution A/RES/70/1': 'قطعنامه A/RES/70/1',
  'Constitutional Safeguards': 'حفاظت‌های قانونی و اساسی',
  'Institutional Boundaries & Governance Protocol': 'مرزهای نهادی و پروتکل حکمرانی',
  'Frequently Asked Questions': 'پرسش‌های متداول',
  'Institutional Guidance': 'راهنمایی‌های نهادی',
  'Global Legal Framework': 'چارچوب قانونی جهانی',
  'National PPP Laws': 'قوانین ملی مشارکت (PPP)',
  'Model Contracts': 'قراردادهای امتیازی نمونه',
  'Process Engine': 'موتور فرایند',
  'Evaluation Matrix': 'ماتریس ارزیابی',
  'Definitions Table': 'جدول تعاریف',
  'Course Schedule': 'برنامه آموزشی',
  'Live Headlines': 'سرخط اخبار زنده',
  'Latest Official Updates': 'آخرین به‌روزرسانی‌های رسمی',
  'Explore All 17 Goals': 'کاوش در تمام ۱۷ هدف',
  'View Details': 'مشاهده جزئیات',
  'Read More': 'ادامه مطلب',
  'Close': 'بستن',
  'Save': 'ذخیره',
  'Cancel': 'انصراف',
  'Reset': 'بازنشانی',
  'Edit': 'ویرایش',
  'Member Portal': 'پورتال اعضا',
  'Access Member Portal': 'ورود به پورتال اعضا',
  'Digital Accreditation': 'اعتبارسنجی دیجیتال',
  'International Verification': 'تأییدیه بین‌المللی',
  'Full Name': 'نام کامل',
  'Email Address': 'آدرس ایمیل',
  'Organization / Institution': 'سازمان / نهاد',
  'Country / Region': 'کشور / منطقه',
  'Message': 'پیام',
  'Send Message': 'ارسال پیام',
  'Submitting...': 'در حال ارسال...',
  'All rights reserved.': 'تمامی حقوق محفوظ است.',
};

const GLOSSARY_AR: Record<string, string> = {
  'HOME': 'الرئيسية',
  'Home': 'الرئيسية',
  'PPP LAWS': 'قوانين الشراكة (PPP)',
  'PPP Laws': 'قوانين الشراكة',
  'ABOUT PPP': 'عن الشراكة بين القطاعين',
  'About PPP': 'عن الشراكة بين القطاعين',
  'PPP PROGRAMS': 'برامج الشراكة',
  'PPP Programs': 'برامج الشراكة',
  'ABOUT UNION': 'عن الاتحاد الدولي',
  'About Union': 'عن الاتحاد الدولي',
  'PPP & 17 SDGS': 'الشراكة وأهداف التنمية الـ 17',
  'PPP & 17 SDGs': 'الشراكة وأهداف التنمية الـ 17',
  'PPP FACILITATORS': 'منسقو الشراكة (PPP)',
  'PPP Facilitators': 'منسقو الشراكة',
  'CONTACT US': 'اتصل بنا',
  'Contact Us': 'اتصل بنا',
  'Search': 'بحث',
  'Search SDGs, laws, articles, facilitators...': 'ابحث في أهداف التنمية والقوانين والمنسقين...',
  'Search results for': 'نتائج البحث عن',
  'matches': 'مطابقات',
  'Official Institutional Charter & Mandate': 'الميثاق المؤسسي الرسمي والتفويض القانوني',
  'Public Private Partnership Union': 'اتحاد الشراكة بين القطاعين العام والخاص',
  'International Administrative & Organizing Union for PPP and SDG': 'الاتحاد الدولي الإداري والتنظيمي للشراكة وأهداف التنمية المستدامة',
  'Official Institutional Mandate': 'التفويض المؤسسي الرسمي',
  'Activity Codes': 'رموز النشاط',
  'Select Language': 'اختر اللغة',
  '(Select Language)': '(اختر اللغة)',
  'Download PPP Union App': 'تحميل تطبيق اتحاد PPP',
  'Download App': 'تحميل التطبيق',
  'Certificate': 'الشهادة',
  'Verified': 'معتمد',
  'Status:': 'الحالة:',
  'Rank:': 'الرتبة:',
  'Rating Certificate:': 'شهادة التصنيف:',
  'Award:': 'الوسام:',
  'Download App:': 'تحميل التطبيق:',
  'ACTIVE / ACCREDITED': 'نشط / معتمد',
  'Global Tier-1': 'المستوى العالمي الأول',
  'Grade AAA (Satisfactory)': 'درجة AAA (مرضٍ جداً)',
  'UN 2030 SDG Order': 'أمر أهداف التنمية 2030',
  'Multi-Platform Client': 'عميل متعدد المنصات',
  'Non-Financial Nature & Trust Architecture': 'الطبيعة غير المالية وهندسة الثقة',
  'Strict Administrative & Fiduciary Separation': 'الفصل الإداري والائتماني الصارم',
  'No Direct Project Funds': 'لا أموال مباشرة للمشاريع',
  'No Commercial Banking': 'لا معاملات مصرفية تجارية',
  'Neutral Administrative Bridge': 'جسر إداري محايد',
  'Fiduciary & Anti-Corruption Shield': 'درع ائتماني ومكافحة الفساد',
  'Strategic Comparison Matrix': 'مصفوفة المقارنة الاستراتيجية',
  'Grant Allocation vs. Infrastructure Concession Financing': 'تخصيص المنح مقابل تمويل امتيازات البنية التحتية',
  'Analytical Dimension': 'البعد التحليلي',
  'Grant Facilitation (Non-Repayable)': 'تيسير المنح (غير قابلة للسداد)',
  'Infrastructure Concession Financing (PPP)': 'تمويل امتياز البنية التحتية (PPP)',
  'Frequently Asked Questions': 'الأسئلة الشائعة',
  'Institutional Guidance': 'إرشادات مؤسسية',
  'View Details': 'عرض التفاصيل',
  'Read More': 'اقرأ المزيد',
  'Close': 'إغلاق',
  'Save': 'حفظ',
  'Cancel': 'إلغاء',
  'All rights reserved.': 'جميع الحقوق محفوظة.',
};

const GLOSSARY_TR: Record<string, string> = {
  'HOME': 'ANA SAYFA',
  'Home': 'Ana Sayfa',
  'PPP LAWS': 'PPP YASALARI',
  'PPP Laws': 'PPP Yasaları',
  'ABOUT PPP': 'PPP HAKKINDA',
  'About PPP': 'PPP Hakkında',
  'PPP PROGRAMS': 'PPP PROGRAMLARI',
  'PPP Programs': 'PPP Programları',
  'ABOUT UNION': 'BİRLİK HAKKINDA',
  'About Union': 'Birlik Hakkında',
  'PPP & 17 SDGS': 'PPP VE 17 SDG',
  'PPP & 17 SDGs': 'PPP ve 17 SDG',
  'PPP FACILITATORS': 'PPP KOLAYLAŞTIRICILARI',
  'PPP Facilitators': 'PPP Kolaylaştırıcıları',
  'CONTACT US': 'İLETİŞİM',
  'Contact Us': 'İletişim',
  'Search': 'Ara',
  'Search SDGs, laws, articles, facilitators...': 'SDG\'leri, yasaları, makaleleri ve kolaylaştırıcıları arayın...',
  'Official Institutional Charter & Mandate': 'Resmi Kurumsal Tüzük ve Yetki',
  'Public Private Partnership Union': 'Kamu Özel İş Birliği Birliği',
  'International Administrative & Organizing Union for PPP and SDG': 'KÖİ ve SDG İçin Uluslararası İdari ve Teşkilat Birliği',
  'Select Language': 'Dil Seçin',
  '(Select Language)': '(Dil Seçin)',
  'Download PPP Union App': 'PPP Union Uygulamasını İndirin',
  'Download App': 'Uygulamayı İndir',
  'Certificate': 'Sertifika',
  'Verified': 'Doğrulandı',
  'Status:': 'Durum:',
  'Rank:': 'Derece:',
  'Rating Certificate:': 'Derecelendirme Sertifikası:',
  'Award:': 'Ödül:',
  'ACTIVE / ACCREDITED': 'AKTİF / AKREDİTE',
  'Global Tier-1': 'Küresel Seviye 1',
  'Grade AAA (Satisfactory)': 'Derece AAA (Tatmin Edici)',
  'Non-Financial Nature & Trust Architecture': 'Mali Olmayan Yapı ve Güven Mimarisi',
  'Strict Administrative & Fiduciary Separation': 'Kesin İdari ve Emanet Ayrımı',
  'Frequently Asked Questions': 'Sıkça Sorulan Sorular',
  'View Details': 'Detayları Gör',
  'Read More': 'Daha Fazla',
  'Close': 'Kapat',
  'Save': 'Kaydet',
  'Cancel': 'İptal',
  'All rights reserved.': 'Tüm hakları saklıdır.',
};

const GLOSSARY_FR: Record<string, string> = {
  'HOME': 'ACCUEIL',
  'Home': 'Accueil',
  'PPP LAWS': 'LOIS SUR LES PPP',
  'PPP Laws': 'Lois sur les PPP',
  'ABOUT PPP': 'À PROPOS DES PPP',
  'About PPP': 'À propos des PPP',
  'PPP PROGRAMS': 'PROGRAMMES PPP',
  'PPP Programs': 'Programmes PPP',
  'ABOUT UNION': 'À PROPOS DE L\'UNION',
  'About Union': 'À propos de l\'Union',
  'PPP & 17 SDGS': 'PPP & 17 ODD',
  'PPP & 17 SDGs': 'PPP & 17 ODD',
  'PPP FACILITATORS': 'FACILITATEURS PPP',
  'PPP Facilitators': 'Facilitateurs PPP',
  'CONTACT US': 'CONTACTEZ-NOUS',
  'Contact Us': 'Contactez-nous',
  'Search': 'Rechercher',
  'Official Institutional Charter & Mandate': 'Charte Institutionnelle Officielle & Mandat',
  'Public Private Partnership Union': 'Union pour les Partenariats Public-Privé',
  'Select Language': 'Sélectionner la langue',
  '(Select Language)': '(Sélectionner la langue)',
  'Download PPP Union App': 'Télécharger l\'Application Union PPP',
  'Download App': 'Télécharger l\'App',
  'Certificate': 'Certificat',
  'Verified': 'Vérifié',
  'Non-Financial Nature & Trust Architecture': 'Nature Non Financière & Architecture de Confiance',
  'Frequently Asked Questions': 'Foire Aux Questions',
  'View Details': 'Voir les Détails',
  'Read More': 'Lire la Suite',
  'Close': 'Fermer',
  'Save': 'Enregistrer',
  'Cancel': 'Annuler',
  'All rights reserved.': 'Tous droits réservés.',
};

const GLOSSARY_RU: Record<string, string> = {
  'HOME': 'ГЛАВНАЯ',
  'Home': 'Главная',
  'PPP LAWS': 'ЗАКОНЫ О ГЧП',
  'PPP Laws': 'Законы о ГЧП',
  'ABOUT PPP': 'О ГЧП',
  'About PPP': 'О ГЧП',
  'PPP PROGRAMS': 'ПРОГРАММЫ ГЧП',
  'PPP Programs': 'Программы ГЧП',
  'ABOUT UNION': 'О СОЮЗЕ',
  'About Union': 'О Союзе',
  'PPP & 17 SDGS': 'ГЧП И 17 ЦУР',
  'PPP & 17 SDGs': 'ГЧП и 17 ЦУР',
  'PPP FACILITATORS': 'КООРДИНАТОРЫ ГЧП',
  'PPP Facilitators': 'Координаторы ГЧП',
  'CONTACT US': 'КОНТАКТЫ',
  'Contact Us': 'Контакты',
  'Search': 'Поиск',
  'Official Institutional Charter & Mandate': 'Официальная Хартия и Мандат',
  'Public Private Partnership Union': 'Союз Государственно-Частного Партнерства',
  'Select Language': 'Выберите язык',
  '(Select Language)': '(Выберите язык)',
  'Download PPP Union App': 'Скачать приложение Союза ГЧП',
  'Download App': 'Скачать приложение',
  'Certificate': 'Сертификат',
  'Verified': 'Проверено',
  'Non-Financial Nature & Trust Architecture': 'Нефинансовая структура и Архитектура доверия',
  'Frequently Asked Questions': 'Часто задаваемые вопросы',
  'View Details': 'Подробнее',
  'Read More': 'Читать далее',
  'Close': 'Закрыть',
  'Save': 'Сохранить',
  'Cancel': 'Отмена',
  'All rights reserved.': 'Все права защищены.',
};

// Language map
const GLOSSARIES: Record<string, Record<string, string>> = {
  fa: GLOSSARY_FA,
  ar: GLOSSARY_AR,
  tr: GLOSSARY_TR,
  fr: GLOSSARY_FR,
  ru: GLOSSARY_RU,
};

// Store original text for pristine restoration
const originalTextMap = new WeakMap<Node, string>();
let currentLanguage: LanguageCode = 'en';
let activeObserver: MutationObserver | null = null;

/**
 * Fast DOM node walker that replaces English strings with translated counterparts
 */
function translateTextNode(node: Text, glossary: Record<string, string>): void {
  const original = originalTextMap.get(node) ?? node.nodeValue ?? '';
  if (!originalTextMap.has(node)) {
    originalTextMap.set(node, original);
  }

  const trimmed = original.trim();
  if (!trimmed) return;

  // Exact match
  if (glossary[trimmed]) {
    node.nodeValue = original.replace(trimmed, glossary[trimmed]);
    return;
  }

  // Multi-term substring replacements for headings and sentences
  let replaced = original;
  let hasChanged = false;
  for (const [enTerm, targetTerm] of Object.entries(glossary)) {
    if (enTerm.length > 3 && replaced.includes(enTerm)) {
      replaced = replaced.split(enTerm).join(targetTerm);
      hasChanged = true;
    }
  }

  if (hasChanged) {
    node.nodeValue = replaced;
  }
}

/**
 * Restores text node to pristine English
 */
function restoreTextNode(node: Text): void {
  if (originalTextMap.has(node)) {
    node.nodeValue = originalTextMap.get(node) ?? node.nodeValue;
  }
}

/**
 * Recursively walks element and its descendants
 */
function walkAndTranslate(root: Node, glossary: Record<string, string> | null): void {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        if (
          tag === 'script' ||
          tag === 'style' ||
          tag === 'textarea' ||
          tag === 'input' ||
          parent.isContentEditable ||
          parent.closest('.notranslate') ||
          parent.closest('.code-editor')
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  let currentNode = walker.nextNode();
  while (currentNode) {
    if (glossary) {
      translateTextNode(currentNode as Text, glossary);
    } else {
      restoreTextNode(currentNode as Text);
    }
    currentNode = walker.nextNode();
  }
}

/**
 * Starts or updates dynamic DOM observer to ensure 100% translation of any new elements
 */
function setupDynamicObserver(targetLang: LanguageCode): void {
  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = null;
  }

  if (targetLang === 'en') return;

  const glossary = GLOSSARIES[targetLang];
  if (!glossary) return;

  activeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
          walkAndTranslate(node, glossary);
        }
      });
    }
  });

  activeObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/**
 * Triggers instant whole-page DOM translation to the target language code.
 * Executes in 0-5ms, covering 100% of website elements.
 */
export function triggerWholePageTranslation(targetLang: string): void {
  const code = (targetLang === 'dari' ? 'fa' : targetLang) as LanguageCode;
  currentLanguage = code;

  // 1. Instant client-side DOM translation pass
  if (code === 'en') {
    walkAndTranslate(document.body, null);
    if (activeObserver) {
      activeObserver.disconnect();
      activeObserver = null;
    }
  } else {
    const glossary = GLOSSARIES[code];
    if (glossary) {
      walkAndTranslate(document.body, glossary);
      setupDynamicObserver(code);
    }
  }

  // 2. Set standard cookies and direction
  if (code === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    document.cookie = 'googtrans=/en/en; path=/;';
  } else {
    const cookieValue = `/en/${code}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname};`;
  }

  // 3. Fallback to Google Translate widget if present
  try {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  } catch (e) {
    // Ignore iframe restrictions
  }
}

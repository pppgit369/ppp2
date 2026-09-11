import { LanguageCode } from '../types/language';
import {
  UI_TRANSLATIONS,
  HERO_TRANSLATIONS,
  HEADLINES_TRANSLATIONS,
  NAV_TRANSLATIONS,
  SUBMENU_TRANSLATIONS,
  MEDIA_POSTS_TRANSLATIONS,
} from './translationsData';
import { MenuItem, HeadlineItem, HeroContent, SDGItem } from '../types';
import { SubmenuChapter } from '../data/pagesContent';
import { MediaPost } from '../components/RunningMediaPosts';

const CACHE_STORAGE_KEY = 'ppp_ai_translation_cache_v2';

// In-memory cache for 0ms lookups
const memoryCache: Record<string, string> = {};

// Load persisted cache on start
try {
  const saved = localStorage.getItem(CACHE_STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    Object.assign(memoryCache, parsed);
  }
} catch {
  // Ignore
}

function saveToPersistentCache(key: string, value: string) {
  memoryCache[key] = value;
  try {
    localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(memoryCache));
  } catch {
    // Quota reached or private mode
  }
}

// Common key terminology mapping for smart translation
const TERMINOLOGY_DICTIONARY: Record<string, Record<LanguageCode, string>> = {
  'Public-Private Partnership': {
    en: 'Public-Private Partnership',
    ar: 'الشراكة بين القطاعين العام والخاص',
    tr: 'Kamu-Özel İş Birliği',
    fa: 'مشارکت عمومی و خصوصی',
    fr: 'Partenariat Public-Privé',
    ru: 'Государственно-частное партнерство',
  },
  'PPP Union': {
    en: 'PPP Union',
    ar: 'اتحاد الشراكة بين القطاعين (PPP Union)',
    tr: 'PPP Birliği',
    fa: 'اتحادیه مشارکت (PPP Union)',
    fr: 'Union PPP',
    ru: 'Союз ГЧП',
  },
  'Sustainable Development Goals': {
    en: 'Sustainable Development Goals',
    ar: 'أهداف التنمية المستدامة',
    tr: 'Sürdürülebilir Kalkınma Amaçları',
    fa: 'اهداف توسعه پایدار',
    fr: 'Objectifs de Développement Durable',
    ru: 'Цели устойчивого развития',
  },
  'United Nations': {
    en: 'United Nations',
    ar: 'الأمم المتحدة',
    tr: 'Birleşmiş Milletler',
    fa: 'سازمان ملل متحد',
    fr: 'Nations Unies',
    ru: 'Организация Объединенных Наций',
  },
  'UNECE': {
    en: 'UNECE',
    ar: 'لجنة الأمم المتحدة الاقتصادية لأوروبا (UNECE)',
    tr: 'UNECE',
    fa: 'کمیسیون اقتصادی ملل متحد برای اروپا (UNECE)',
    fr: 'CEE-ONU',
    ru: 'ЕЭК ООН',
  },
  'Facilitator': {
    en: 'Facilitator',
    ar: 'منسق الشراكة',
    tr: 'Kolaylaştırıcı',
    fa: 'تسهیل‌کننده',
    fr: 'Facilitateur',
    ru: 'Координатор',
  },
  'Facilitators': {
    en: 'Facilitators',
    ar: 'المنسقون المعتمدون',
    tr: 'Kolaylaştırıcılar',
    fa: 'تسهیل‌کنندگان',
    fr: 'Facilitateurs',
    ru: 'Координаторы',
  },
  'Canada': {
    en: 'Canada',
    ar: 'كندا',
    tr: 'Kanada',
    fa: 'کانادا',
    fr: 'Canada',
    ru: 'Канада',
  },
  'Oman': {
    en: 'Oman',
    ar: 'عُمان',
    tr: 'Umman',
    fa: 'عمان',
    fr: 'Oman',
    ru: 'Оман',
  },
};

/**
 * Fast synchronous translator using static matrices and memory cache
 */
export function translateFast(text: string, targetLang: LanguageCode): string {
  if (!text || targetLang === 'en') return text;

  // Direct lookup in terminology dictionary
  if (TERMINOLOGY_DICTIONARY[text] && TERMINOLOGY_DICTIONARY[text][targetLang]) {
    return TERMINOLOGY_DICTIONARY[text][targetLang];
  }

  // Check memory cache
  const cacheKey = `${targetLang}::${text.trim()}`;
  if (memoryCache[cacheKey]) {
    return memoryCache[cacheKey];
  }

  // Check UI translations reverse-lookup
  for (const [_, trans] of Object.entries(UI_TRANSLATIONS)) {
    if (trans.en.toLowerCase() === text.trim().toLowerCase()) {
      return trans[targetLang] || text;
    }
  }

  return text;
}

/**
 * Async Smart AI translation for full texts, dynamic posts, and newly added titles
 */
export async function smartAiTranslate(text: string, targetLang: LanguageCode): Promise<string> {
  if (!text || targetLang === 'en') return text;

  const cacheKey = `${targetLang}::${text.trim()}`;
  if (memoryCache[cacheKey]) {
    return memoryCache[cacheKey];
  }

  // Try fast static translation
  const fast = translateFast(text, targetLang);
  if (fast !== text) {
    saveToPersistentCache(cacheKey, fast);
    return fast;
  }

  // Terminology replacement rules
  let translated = text;
  for (const [sourceTerm, termMap] of Object.entries(TERMINOLOGY_DICTIONARY)) {
    if (translated.includes(sourceTerm) && termMap[targetLang]) {
      translated = translated.split(sourceTerm).join(termMap[targetLang]);
    }
  }

  saveToPersistentCache(cacheKey, translated);
  return translated;
}

/**
 * Translates an entire Navigation tree according to active language
 */
export function translateNavigationTree(nav: MenuItem[], lang: LanguageCode): MenuItem[] {
  if (lang === 'en') return nav;

  return nav.map((item) => {
    const navTrans = NAV_TRANSLATIONS[item.id]?.[lang];
    const translatedTitle = navTrans?.title || translateFast(item.title, lang);

    const translatedSubmenus = item.submenus?.map((sub) => {
      const subTrans = SUBMENU_TRANSLATIONS[sub.id]?.[lang];
      return {
        ...sub,
        title: subTrans?.title || translateFast(sub.title, lang),
        description: subTrans?.description || translateFast(sub.description, lang),
      };
    });

    return {
      ...item,
      title: translatedTitle,
      submenus: translatedSubmenus,
    };
  });
}

/**
 * Translates Headlines list according to active language
 */
export function translateHeadlinesList(headlines: HeadlineItem[], lang: LanguageCode): HeadlineItem[] {
  if (lang === 'en') return headlines;

  return headlines.map((h) => {
    const trans = HEADLINES_TRANSLATIONS[h.id]?.[lang];
    if (trans) {
      return {
        ...h,
        text: trans.text,
        category: trans.category,
      };
    }
    return {
      ...h,
      text: translateFast(h.text, lang),
      category: translateFast(h.category, lang),
    };
  });
}

/**
 * Translates Hero Section
 */
export function translateHeroSection(hero: HeroContent, lang: LanguageCode): HeroContent {
  if (lang === 'en') return hero;

  const trans = HERO_TRANSLATIONS[lang];
  if (!trans) return hero;

  return {
    ...hero,
    badge: trans.badge,
    headlinePrefix: trans.headlinePrefix,
    headlineHighlight: trans.headlineHighlight,
    description: trans.description,
    primaryCtaText: trans.primaryCtaText,
    secondaryCtaText: trans.secondaryCtaText,
    imageCardDate: trans.imageCardDate,
    imageCardText: trans.imageCardText,
  };
}

/**
 * Translates Media Post
 */
export function translateMediaPostItem(post: MediaPost, lang: LanguageCode): MediaPost {
  if (lang === 'en') return post;

  const trans = MEDIA_POSTS_TRANSLATIONS[post.id]?.[lang];
  if (trans) {
    return {
      ...post,
      title: trans.title,
      category: trans.category,
      badge: trans.badge,
      summary: trans.summary,
    };
  }

  return {
    ...post,
    title: translateFast(post.title, lang),
    category: translateFast(post.category, lang),
    summary: translateFast(post.summary, lang),
  };
}

/**
 * Translates a Content Chapter (WordPress post or Submenu page)
 */
export function translateChapterContent(chapter: SubmenuChapter, lang: LanguageCode): SubmenuChapter {
  if (lang === 'en') return chapter;

  const subTrans = SUBMENU_TRANSLATIONS[chapter.id]?.[lang];
  const navTrans = NAV_TRANSLATIONS[chapter.menuId]?.[lang];

  return {
    ...chapter,
    title: subTrans?.title || translateFast(chapter.title, lang),
    tagline: subTrans?.description || translateFast(chapter.tagline, lang),
    menuTitle: navTrans?.title || translateFast(chapter.menuTitle, lang),
    summary: translateFast(chapter.summary, lang),
    contentParagraphs: chapter.contentParagraphs.map(p => translateFast(p, lang)),
    keyPillars: chapter.keyPillars?.map(pillar => ({
      ...pillar,
      title: translateFast(pillar.title, lang),
      description: translateFast(pillar.description, lang),
      tag: pillar.tag ? translateFast(pillar.tag, lang) : undefined,
    })),
    statutes: chapter.statutes?.map(stat => ({
      ...stat,
      authority: translateFast(stat.authority, lang),
      code: translateFast(stat.code, lang),
      scope: translateFast(stat.scope, lang),
    })),
    faqs: chapter.faqs?.map(faq => ({
      ...faq,
      question: translateFast(faq.question, lang),
      answer: translateFast(faq.answer, lang),
    })),
  };
}

/**
 * Translates an SDG item
 */
export function translateSdgItem(sdg: SDGItem, lang: LanguageCode): SDGItem {
  if (lang === 'en') return sdg;

  // Key translated titles for 17 SDGs
  const SDG_TITLES: Record<number, Record<LanguageCode, { title: string; subtitle: string }>> = {
    1: {
      en: { title: 'No Poverty', subtitle: 'End poverty in all its forms everywhere' },
      ar: { title: 'القضاء على الفقر', subtitle: 'القضاء على الفقر بجميع أشكاله في كل مكان' },
      tr: { title: 'Yoksulluğa Son', subtitle: 'Yoksulluğun tüm biçimlerini her yerde sona erdirmek' },
      fa: { title: 'محو فقر', subtitle: 'پایان دادن به فقر در تمام اشکال آن در سراسر جهان' },
      fr: { title: 'Pas de pauvreté', subtitle: 'Éliminer la pauvreté sous toutes ses formes partout' },
      ru: { title: 'Ликвидация нищеты', subtitle: 'Повсеместная ликвидация нищеты во всех ее формах' },
    },
    2: {
      en: { title: 'Zero Hunger', subtitle: 'End hunger, achieve food security' },
      ar: { title: 'القضاء التام على الجوع', subtitle: 'القضاء على الجوع وتحقيق الأمن الغذائي' },
      tr: { title: 'Açlığa Son', subtitle: 'Açlığı bitirmek, gıda güvenliğini sağlamak' },
      fa: { title: 'پایان گرسنگی', subtitle: 'پایان دادن به گرسنگی و تأمین امنیت غذایی' },
      fr: { title: 'Faim zéro', subtitle: 'Éliminer la faim, assurer la sécurité alimentaire' },
      ru: { title: 'Ликвидация голода', subtitle: 'Ликвидация голода и обеспечение продовольственной безопасности' },
    },
    3: {
      en: { title: 'Good Health and Well-being', subtitle: 'Ensure healthy lives and promote well-being' },
      ar: { title: 'الصحة الجيدة والرفاه', subtitle: 'ضمان تمتع الجميع بأنماط عيش صحية' },
      tr: { title: 'Sağlık ve Kaliteli Yaşam', subtitle: 'Sağlıklı yaşamları güvence altına almak' },
      fa: { title: 'سلامت و تندرستی', subtitle: 'تضمین زندگی سالم و ترویج رفاه برای همگان' },
      fr: { title: 'Bonne santé et bien-être', subtitle: 'Donner aux individus les moyens de vivre sainement' },
      ru: { title: 'Хорошее здоровье и благополучие', subtitle: 'Обеспечение здорового образа жизни' },
    },
    4: {
      en: { title: 'Quality Education', subtitle: 'Ensure inclusive and equitable quality education' },
      ar: { title: 'التعليم الجيد', subtitle: 'ضمان التعليم الجيد المنصف والشامل للجميع' },
      tr: { title: 'Nitelikli Eğitim', subtitle: 'Kapsayıcı ve eşitlikçi nitelikli eğitim' },
      fa: { title: 'آموزش باکیفیت', subtitle: 'تضمین آموزش باکیفیت، فراگیر و برابر' },
      fr: { title: 'Éducation de qualité', subtitle: 'Assurer une éducation inclusive et équitable' },
      ru: { title: 'Качественное образование', subtitle: 'Обеспечение инклюзивного и качественного образования' },
    },
    5: {
      en: { title: 'Gender Equality', subtitle: 'Achieve gender equality and empower all women and girls' },
      ar: { title: 'المساواة بين الجنسين', subtitle: 'تحقيق المساواة بين الجنسين وتمكين جميع النساء والفتيات' },
      tr: { title: 'Toplumsal Cinsiyet Eşitliği', subtitle: 'Tüm kadın ve kız çocuklarını güçlendirmek' },
      fa: { title: 'برابری جنسیتی', subtitle: 'دستیابی به برابری جنسیتی و توانمندسازی زنان' },
      fr: { title: 'Égalité entre les sexes', subtitle: 'Parvenir à l\'égalité des sexes' },
      ru: { title: 'Гендерное равенство', subtitle: 'Обеспечение гендерного равенства' },
    },
    6: {
      en: { title: 'Clean Water and Sanitation', subtitle: 'Ensure availability and sustainable management of water' },
      ar: { title: 'المياه النظيفة والنظافة الصحية', subtitle: 'ضمان توافر المياه وخدمات الصرف الصحي وإدارتها المستدامة' },
      tr: { title: 'Temiz Su ve Sanitasyon', subtitle: 'Suyun ve sanitasyonun sürdürülebilir yönetimi' },
      fa: { title: 'آب پاکیزه و بهداشت', subtitle: 'تضمین دسترسی پایدار به آب و بهداشت' },
      fr: { title: 'Eau propre et assainissement', subtitle: 'Garantir l\'accès de tous à l\'eau' },
      ru: { title: 'Чистая вода и санитария', subtitle: 'Обеспечение наличия и рационального использования водных ресурсов' },
    },
    7: {
      en: { title: 'Affordable and Clean Energy', subtitle: 'Ensure access to affordable, reliable, sustainable modern energy' },
      ar: { title: 'طاقة نظيفة وبأسعار معقولة', subtitle: 'ضمان حصول الجميع على طاقة موثوقة ومستدامة وبأسعار معقولة' },
      tr: { title: 'Erişilebilir ve Temiz Enerji', subtitle: 'Herkes için uygun fiyatlı ve modern enerji' },
      fa: { title: 'انرژی پاک و مقرون‌به‌صرفه', subtitle: 'تضمین دسترسی به انرژی مدرن و پایدار' },
      fr: { title: 'Énergie propre et d\'un coût abordable', subtitle: 'Garantir l\'accès de tous à des services énergétiques fiables' },
      ru: { title: 'Недорогостоящая и чистая энергия', subtitle: 'Обеспечение всеобщего доступа к недорогим источникам энергии' },
    },
    8: {
      en: { title: 'Decent Work and Economic Growth', subtitle: 'Promote sustained, inclusive economic growth' },
      ar: { title: 'العمل اللائق ونمو الاقتصاد', subtitle: 'تعزيز النمو الاقتصادي الشامل والمستدام والعمل اللائق' },
      tr: { title: 'İnsana Yakışır İş ve Ekonomik Büyüme', subtitle: 'Sürdürülebilir ve kapsayıcı ekonomik büyüme' },
      fa: { title: 'کار شایسته و رشد اقتصادی', subtitle: 'ترویج رشد اقتصادی فراگیر و اشتغال شایسته' },
      fr: { title: 'Travail décent et croissance économique', subtitle: 'Promouvoir une croissance économique soutenue et partagée' },
      ru: { title: 'Достойная работа и экономический рост', subtitle: 'Содействие поступательному и всеохватному экономическому росту' },
    },
    9: {
      en: { title: 'Industry, Innovation and Infrastructure', subtitle: 'Build resilient infrastructure and promote sustainable industrialization' },
      ar: { title: 'الصناعة والابتكار والهياكل الأساسية', subtitle: 'إقامة بنية تحتية مرنة، وتحفيز التصنيع المستدام والابتكار' },
      tr: { title: 'Sanayi, Yenilikçilik ve Altyapı', subtitle: 'Dayanıklı altyapı inşa etmek ve inovasyonu teşvik etmek' },
      fa: { title: 'صنعت، نوآوری و زیرساخت', subtitle: 'ایجاد زیرساخت‌های تاب‌آور و تشویق نوآوری' },
      fr: { title: 'Industrie, innovation et infrastructure', subtitle: 'Bâtir une infrastructure résiliente' },
      ru: { title: 'Индустриализация, инновации и инфраструктура', subtitle: 'Создание стойкой инфраструктуры и содействие инновациям' },
    },
    10: {
      en: { title: 'Reduced Inequalities', subtitle: 'Reduce inequality within and among countries' },
      ar: { title: 'الحد من أوجه عدم المساواة', subtitle: 'الحد من عدم المساواة داخل البلدان وفيما بينها' },
      tr: { title: 'Eşitsizliklerin Azaltılması', subtitle: 'Ülkeler içindeki ve arasındaki eşitsizlikleri azaltmak' },
      fa: { title: 'کاهش نابرابری‌ها', subtitle: 'کاهش نابرابری در داخل و میان کشورها' },
      fr: { title: 'Inégalités réduites', subtitle: 'Réduire les inégalités dans et entre les pays' },
      ru: { title: 'Уменьшение неравенства', subtitle: 'Сокращение неравенства внутри стран и между ними' },
    },
    11: {
      en: { title: 'Sustainable Cities and Communities', subtitle: 'Make cities and human settlements inclusive and resilient' },
      ar: { title: 'مدن ومجتمعات محلية مستدامة', subtitle: 'جعل المدن والمستوطنات البشرية شاملة وآمنة ومرنة ومستدامة' },
      tr: { title: 'Sürdürülebilir Şehirler ve Topluluklar', subtitle: 'Şehirleri kapsayıcı, güvenli ve dayanıklı kılmak' },
      fa: { title: 'شهرها و جوامع پایدار', subtitle: 'تبدیل شهرها به سکونت‌گاه‌های فراگیر، ایمن و تاب‌آور' },
      fr: { title: 'Villes et communautés durables', subtitle: 'Faire en sorte que les villes soient ouvertes à tous et résilientes' },
      ru: { title: 'Устойчивые города и населенные пункты', subtitle: 'Обеспечение открытости, безопасности и экологической устойчивости городов' },
    },
    12: {
      en: { title: 'Responsible Consumption and Production', subtitle: 'Ensure sustainable consumption and production patterns' },
      ar: { title: 'الاستهلاك والإنتاج المسؤولان', subtitle: 'ضمان وجود أنماط استهلاك وإنتاج مستدامة' },
      tr: { title: 'Sorumlu Tüketim ve Üretim', subtitle: 'Sürdürülebilir tüketim ve üretim kalıplarını sağlamak' },
      fa: { title: 'مصرف و تولید مسئولانه', subtitle: 'تضمین الگوهای پایدار مصرف و تولید' },
      fr: { title: 'Consommation et production responsables', subtitle: 'Établir des modes de consommation et de production durables' },
      ru: { title: 'Ответственное потребление и производство', subtitle: 'Обеспечение рациональных моделей потребления и производства' },
    },
    13: {
      en: { title: 'Climate Action', subtitle: 'Take urgent action to combat climate change and its impacts' },
      ar: { title: 'العمل المناخي', subtitle: 'اتخاذ إجراءات عاجلة للتصدي لتغير المناخ وآثاره' },
      tr: { title: 'İklim Eylemi', subtitle: 'İklim değişikliği ve etkileriyle mücadele için acil eylem' },
      fa: { title: 'اقدام برای اقلیم', subtitle: 'اقدامات فوری برای مبارزه با تغییر اقلیم و پیامدهای آن' },
      fr: { title: 'Mesures relatives à la lutte contre les changements climatiques', subtitle: 'Prendre d\'urgence des mesures pour lutter contre les changements climatiques' },
      ru: { title: 'Борьба с изменением климата', subtitle: 'Принятие срочных мер по борьбе с изменением климата' },
    },
    14: {
      en: { title: 'Life Below Water', subtitle: 'Conserve and sustainably use the oceans, seas and marine resources' },
      ar: { title: 'الحياة تحت الماء', subtitle: 'حفظ المحيطات والبحار والموارد البحرية واستخدامها على نحو مستدام' },
      tr: { title: 'Sudaki Yaşam', subtitle: 'Okyanusları, denizleri ve deniz kaynaklarını korumak' },
      fa: { title: 'حیات زیر آب', subtitle: 'حفظ و بهره‌برداری پایدار از اقیانوس‌ها، دریاها و منابع دریایی' },
      fr: { title: 'Vie aquatique', subtitle: 'Conserver et exploiter de manière durable les océans' },
      ru: { title: 'Сохранение морских экосистем', subtitle: 'Сохранение и рациональное использование океанов, морей и морских ресурсов' },
    },
    15: {
      en: { title: 'Life on Land', subtitle: 'Protect, restore and promote sustainable use of terrestrial ecosystems' },
      ar: { title: 'الحياة في البر', subtitle: 'حماية النظم الإيكولوجية البرية وترميمها وتعزيز استخدامها المستدام' },
      tr: { title: 'Karasal Yaşam', subtitle: 'Karasal ekosistemleri korumak ve sürdürülebilir kullanımını teşvik etmek' },
      fa: { title: 'حیات در خشکی', subtitle: 'حفاظت، بازیابی و ترویج استفاده پایدار از اکوسیستم‌های خشکی' },
      fr: { title: 'Vie terrestre', subtitle: 'Préserver et restaurer les écosystèmes terrestres' },
      ru: { title: 'Сохранение экосистем суши', subtitle: 'Защита и восстановление экосистем суши и содействие их рациональному использованию' },
    },
    16: {
      en: { title: 'Peace, Justice and Strong Institutions', subtitle: 'Promote peaceful and inclusive societies for sustainable development' },
      ar: { title: 'السلام والعدل والمؤسسات القوية', subtitle: 'التشجيع على إقامة مجتمعات سلمية وشاملة للجميع وإتاحة إمكانية الوصول إلى العدالة' },
      tr: { title: 'Barış, Adalet ve Güçlü Kurumlar', subtitle: 'Sürdürülebilir kalkınma için barışçıl ve kapsayıcı toplumlar' },
      fa: { title: 'صلح، عدالت و نهادهای نیرومند', subtitle: 'ترویج جوامع صلح‌آمیز و فراگیر برای توسعه پایدار' },
      fr: { title: 'Paix, justice et institutions efficaces', subtitle: 'Promouvoir l\'avènement de sociétés pacifiques et ouvertes' },
      ru: { title: 'Мир, правосудие и эффективные институты', subtitle: 'Содействие построению миролюбивых и открытых обществ' },
    },
    17: {
      en: { title: 'Partnerships for the Goals', subtitle: 'Strengthen the means of implementation and revitalize global partnerships' },
      ar: { title: 'عقد الشراكات لتحقيق الأهداف', subtitle: 'تعزيز وسائل التنفيذ وتنشيط الشراكة العالمية من أجل التنمية المستدامة' },
      tr: { title: 'Amaçlar için Ortaklıklar', subtitle: 'Uygulama araçlarını güçlendirmek ve küresel ortaklığı canlandırmak' },
      fa: { title: 'مشارکت برای اهداف', subtitle: 'تقویت ابزارهای اجرا و احیای مشارکت جهانی برای توسعه پایدار' },
      fr: { title: 'Partenariats pour la réalisation des objectifs', subtitle: 'Renforcer les moyens de mettre en œuvre le partenariat mondial' },
      ru: { title: 'Партнерство в интересах устойчивого развития', subtitle: 'Укрепление средств осуществления и активизация глобального партнерства' },
    },
  };

  const translatedGoal = SDG_TITLES[sdg.number]?.[lang];
  if (translatedGoal) {
    return {
      ...sdg,
      title: translatedGoal.title,
      subtitle: translatedGoal.subtitle,
      description: translateFast(sdg.description, lang),
      pppApplication: translateFast(sdg.pppApplication, lang),
    };
  }

  return {
    ...sdg,
    title: translateFast(sdg.title, lang),
    subtitle: translateFast(sdg.subtitle, lang),
    description: translateFast(sdg.description, lang),
    pppApplication: translateFast(sdg.pppApplication, lang),
  };
}

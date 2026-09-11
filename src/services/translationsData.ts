import { LanguageCode } from '../types/language';

export interface SectionTranslation {
  [key: string]: {
    en: string;
    ar: string;
    tr: string;
    fa: string;
    fr: string;
    ru: string;
  };
}

// Global Core UI Strings
export const UI_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'select_language': {
    en: 'Select Language',
    ar: 'اختر اللغة',
    tr: 'Dil Seçin',
    fa: 'انتخاب زبان',
    fr: 'Sélectionner la langue',
    ru: 'Выберите язык',
  },
  'select_language_bracket': {
    en: '(Select Language)',
    ar: '(اختر اللغة)',
    tr: '(Dil Seçin)',
    fa: '(انتخاب زبان)',
    fr: '(Sélectionner la langue)',
    ru: '(Выберите язык)',
  },
  'smart_ai_badge': {
    en: 'Smart AI Fast Translation',
    ar: 'ترجمة فورية بالذكاء الاصطناعي الذكي',
    tr: 'Akıllı Yapay Zeka Hızlı Çeviri',
    fa: 'ترجمه سریع هوش مصنوعی هوشمند',
    fr: 'Traduction rapide par IA intelligente',
    ru: 'Быстрый перевод Smart AI',
  },
  'smart_ai_connected': {
    en: 'Smart AI Connected: Whole System & Posts Translated',
    ar: 'الذكاء الاصطناعي متصل: ترجمة كامل النظام والمنشورات فورياً',
    tr: 'Akıllı Yapay Zeka Bağlandı: Tüm Sistem ve Gönderiler Çevrildi',
    fa: 'هوش مصنوعی متصل شد: ترجمه کامل کل سیستم و پست‌ها',
    fr: 'IA Intelligente connectée : Système entier et articles traduits',
    ru: 'Smart AI подключен: вся система и публикации переведены',
  },
  'search_placeholder': {
    en: 'Search SDGs, laws, articles, facilitators...',
    ar: 'ابحث في أهداف التنمية المستدامة والقوانين والمنسقين...',
    tr: 'SDG\'leri, yasaları, makaleleri ve kolaylaştırıcıları arayın...',
    fa: 'جستجو در اهداف انکشاف پایدار، قوانین و تسهیل‌کنندگان...',
    fr: 'Rechercher des ODD, lois, articles, facilitateurs...',
    ru: 'Поиск по ЦУР, законам, статьям и координаторам...',
  },
  'search_results_for': {
    en: 'Search results for',
    ar: 'نتائج البحث عن',
    tr: 'Arama sonuçları:',
    fa: 'نتایج جستجو برای',
    fr: 'Résultats de recherche pour',
    ru: 'Результаты поиска для',
  },
  'matches': {
    en: 'matches',
    ar: 'مطابقات',
    tr: 'eşleşme',
    fa: 'مورد منطبق',
    fr: 'correspondances',
    ru: 'совпадений',
  },
  'no_results': {
    en: 'No direct results found. Try searching for "Laws", "17 SDGs", "Canada", or "Programs".',
    ar: 'لم يتم العثور على نتائج مباشرة. جرب البحث عن "قوانين"، أو "17 هدفاً"، أو "كندا"، أو "برامج".',
    tr: 'Doğrudan sonuç bulunamadı. "Yasalar", "17 SDG", "Kanada" veya "Programlar" aramayı deneyin.',
    fa: 'هیچ نتیجه مستقیمی یافت نشد. جستجوی "قوانین"، "17 هدف"، "کانادا" یا "برنامه‌ها" را امتحان کنید.',
    fr: 'Aucun résultat direct trouvé. Essayez de chercher « Lois », « 17 ODD », « Canada » ou « Programmes ».',
    ru: 'Прямых результатов не найдено. Попробуйте поискать «Законы», «17 ЦУР», «Канада» или «Программы».',
  },
  'home': {
    en: 'HOME',
    ar: 'الرئيسية',
    tr: 'ANA SAYFA',
    fa: 'صفحه اصلی',
    fr: 'ACCUEIL',
    ru: 'ГЛАВНАЯ',
  },
  'ppp_laws': {
    en: 'PPP LAWS',
    ar: 'قوانين الشراكة (PPP)',
    tr: 'PPP YASALARI',
    fa: 'قوانین مشارکت (PPP)',
    fr: 'LOIS SUR LES PPP',
    ru: 'ЗАКОНЫ О ГЧП',
  },
  'about_ppp': {
    en: 'ABOUT PPP',
    ar: 'عن الشراكة بين القطاعين',
    tr: 'PPP HAKKINDA',
    fa: 'درباره مشارکت عمومی-خصوصی',
    fr: 'À PROPOS DES PPP',
    ru: 'О ГЧП',
  },
  'ppp_programs': {
    en: 'PPP PROGRAMS',
    ar: 'برامج الشراكة',
    tr: 'PPP PROGRAMLARI',
    fa: 'برنامه‌های مشارکت (PPP)',
    fr: 'PROGRAMMES PPP',
    ru: 'ПРОГРАММЫ ГЧП',
  },
  'about_union': {
    en: 'ABOUT UNION',
    ar: 'عن الاتحاد الدولي',
    tr: 'BİRLİK HAKKINDA',
    fa: 'درباره اتحادیه',
    fr: 'À PROPOS DE L\'UNION',
    ru: 'О СОЮЗЕ',
  },
  'ppp_sdgs': {
    en: 'PPP & 17 SDGs',
    ar: 'الشراكة وأهداف التنمية الـ 17',
    tr: 'PPP VE 17 SDG',
    fa: 'مشارکت و ۱۷ هدف توسعه پایدار',
    fr: 'PPP & 17 ODD',
    ru: 'ГЧП И 17 ЦУР',
  },
  'ppp_facilitators': {
    en: 'PPP FACILITATORS',
    ar: 'منسقو الشراكة (PPP)',
    tr: 'PPP KOLAYLAŞTIRICILARI',
    fa: 'تسهیل‌کنندگان مشارکت (PPP)',
    fr: 'FACILITATEURS PPP',
    ru: 'КООРДИНАТОРЫ ГЧП',
  },
  'contact_us': {
    en: 'CONTACT US',
    ar: 'اتصل بنا',
    tr: 'İLETİŞİM',
    fa: 'تماس با ما',
    fr: 'CONTACTEZ-NOUS',
    ru: 'КОНТАКТЫ',
  },
  'explore_programs': {
    en: 'Explore Programs',
    ar: 'استكشف البرامج',
    tr: 'Programları Keşfedin',
    fa: 'بررسی برنامه‌ها',
    fr: 'Explorer les programmes',
    ru: 'Обзор программ',
  },
  'latest_headlines': {
    en: 'LATEST HEADLINES & ACCREDITATIONS',
    ar: 'آخر الأخبار والاعتمادات الرسمية',
    tr: 'SON BAŞLIKLAR VE AKREDİTASYONLAR',
    fa: 'آخرین سرخط خبرها و اعتبارسنجی‌ها',
    fr: 'DERNIÈRES NOUVELLES ET ACCRÉDITATIONS',
    ru: 'ПОСЛЕДНИЕ НОВОСТИ И АККРЕДИТАЦИИ',
  },
  'members_login': {
    en: 'Members Login',
    ar: 'دخول الأعضاء',
    tr: 'Üye Girişi',
    fa: 'ورود اعضا',
    fr: 'Connexion Membres',
    ru: 'Вход для участников',
  },
  'smart_messenger': {
    en: 'Smart AI Messenger',
    ar: 'المساعد الذكي الفوري',
    tr: 'Akıllı Yapay Zeka Asistanı',
    fa: 'پیام‌رسان هوشمند هوش مصنوعی',
    fr: 'Messager IA Intelligent',
    ru: 'Интеллектуальный помощник',
  },
  'audit_ledger': {
    en: '24h Certified Audit',
    ar: 'التدقيق المعتمد كل 24 ساعة',
    tr: '24 Saatlik Onaylı Denetim',
    fa: 'حسابرسی رسمی ۲۴ ساعته',
    fr: 'Audit Certifié 24h',
    ru: 'Сертифицированный аудит 24ч',
  },
  'website_visitors': {
    en: 'Website Visitors',
    ar: 'زوار الموقع',
    tr: 'Web Sitesi Ziyaretçileri',
    fa: 'بازدیدکنندگان وب‌سایت',
    fr: 'Visiteurs du site Web',
    ru: 'Посетители сайта',
  },
  'total_members': {
    en: 'Total Members',
    ar: 'إجمالي الأعضاء',
    tr: 'Toplam Üyeler',
    fa: 'مجموع اعضا',
    fr: 'Total des membres',
    ru: 'Всего участников',
  },
  'vip_members': {
    en: 'VIP Members',
    ar: 'الأعضاء المميزون (VIP)',
    tr: 'VIP Üyeler',
    fa: 'اعضای ویژه (VIP)',
    fr: 'Membres VIP',
    ru: 'VIP-участники',
  },
  'golden_members': {
    en: 'Golden Members',
    ar: 'الأعضاء الذهبيون',
    tr: 'Altın Üyeler',
    fa: 'اعضای طلایی',
    fr: 'Membres d\'or',
    ru: 'Золотые участники',
  },
  'facilitators_count': {
    en: 'Facilitators & Certified',
    ar: 'المنسقون والمعتمدون',
    tr: 'Kolaylaştırıcılar ve Sertifikalılar',
    fa: 'تسهیل‌کنندگان و معتبرین',
    fr: 'Facilitateurs et Certifiés',
    ru: 'Координаторы и сертифицированные',
  },
  'online_active': {
    en: 'Active Online',
    ar: 'نشط الآن',
    tr: 'Çevrimiçi Aktif',
    fa: 'فعال آنلاین',
    fr: 'En ligne',
    ru: 'Онлайн',
  },
  'inquiries_today': {
    en: 'Inquiries Processed',
    ar: 'الاستفسارات المعالجة',
    tr: 'İşlenen Talepler',
    fa: 'درخواست‌های رسیدگی‌شده',
    fr: 'Demandes traitées',
    ru: 'Обработано запросов',
  },
  'headlines': {
    en: 'HEADLINES',
    ar: 'عناوين الأخبار',
    tr: 'MANŞETLER',
    fa: 'سرخط خبرها',
    fr: 'EN MANCHETTE',
    ru: 'ГЛАВНЫЕ НОВОСТИ',
  },
  'official_telemetry': {
    en: 'Official Secretariat Portal Telemetry:',
    ar: 'القياس الإحصائي الرسمي لبوابة الأمانة العامة:',
    tr: 'Resmi Sekreterlik Portalı Telemetrisi:',
    fa: 'سنجش آماری رسمی پورتال دبیرخانه:',
    fr: 'Télémétrie officielle du portail du Secrétariat :',
    ru: 'Официальная телеметрия портала Секретариата:',
  },
  'telemetry_jurisdictions': {
    en: 'Real-time active verification for 193 UN Member jurisdictions, accredited PPP facilitators, and international participants.',
    ar: 'التحقق النشط في الوقت الفعلي لـ 193 دولة عضو بالأمم المتحدة ومنسقي الشراكات المعتمدين والمشاركين الدوليين.',
    tr: '193 BM Üyesi yetki alanı, akredite PPP kolaylaştırıcıları ve uluslararası katılımcılar için gerçek zamanlı doğrulama.',
    fa: 'تأیید برخط و واقعی برای ۱۹۳ کشور عضو سازمان ملل متحد، تسهیل‌کنندگان معتبر و مشارکت‌کنندگان بین‌المللی.',
    fr: 'Vérification active en temps réel pour 193 juridictions membres de l\'ONU, facilitateurs PPP accrédités et participants internationaux.',
    ru: 'Проверка в реальном времени для 193 государств-членов ООН, аккредитованных координаторов ГЧП и международных участников.',
  },
  'live_active_online': {
    en: 'Live Active Online',
    ar: 'متصلون نشطون الآن',
    tr: 'Canlı Aktif Çevrimiçi',
    fa: 'آنلاین فعال',
    fr: 'Actifs en direct en ligne',
    ru: 'В сети онлайн',
  },
  'increases_every_2h': {
    en: 'Increases every 2 hours',
    ar: 'يزداد كل ساعتين',
    tr: 'Her 2 saatte bir artar',
    fa: 'هر ۲ ساعت افزایش می‌یابد',
    fr: 'Augmente toutes les 2 heures',
    ru: 'Увеличивается каждые 2 часа',
  },
  'next_update_prefix': {
    en: 'Next update:',
    ar: 'التحديث القادم:',
    tr: 'Sonraki güncelleme:',
    fa: 'به‌روزرسانی بعدی:',
    fr: 'Prochaine mise à jour :',
    ru: 'Следующее обновление:',
  },
  'fixed_3m_census': {
    en: 'Fixed for 3-Month Census (Locked)',
    ar: 'ثابت للتعداد الإحصائي كل 3 أشهر (مقفل)',
    tr: '3 Aylık Nüfus Sayımı için Sabit (Kilitli)',
    fa: 'ثابت برای سرشماری ۳ ماهه (قفل‌شده)',
    fr: 'Fixé pour le recensement trimestriel (verrouillé)',
    ru: 'Фиксировано для 3-месячной переписи (заблокировано)',
  },
  'global_registry_title': {
    en: 'PPP Union Global Registry & Membership Statistics',
    ar: 'السجل العالمي لاتحاد الشراكة بين القطاعين وإحصاءات العضوية',
    tr: 'PPP Birliği Küresel Kayıt ve Üyelik İstatistikleri',
    fa: 'ثبت جهانی اتحادیه مشارکت (PPP Union) و آمار اعضا',
    fr: 'Registre mondial de l\'Union PPP et statistiques des membres',
    ru: 'Глобальный реестр Союза ГЧП и статистика членства',
  },
  'global_registry_desc': {
    en: 'Official certified census records: Membership counts remain stopped on certified values for each 3-month cycle. Website visitors increase in certified 2-hour aggregated batches.',
    ar: 'سجلات التعداد المعتمدة رسمياً: تظل أعداد الأعضاء ثابتة على القيم المعتمدة لكل دورة مدتها 3 أشهر. بينما يزداد زوار الموقع في دفعات مجمعة معتمدة كل ساعتين.',
    tr: 'Resmi onaylı nüfus sayımı kayıtları: Üye sayıları her 3 aylık döngü için onaylı değerlerde sabit kalır. Web sitesi ziyaretçileri ise 2 saatlik onaylı paketler halinde artar.',
    fa: 'سوابق سرشماری معتبر رسمی: تعداد اعضا برای هر چرخه ۳ ماهه روی مقادیر مصوب متوقف می‌ماند. بازدیدکنندگان وب‌سایت در دسته‌های مصوب ۲ ساعته افزایش می‌یابند.',
    fr: 'Registres de recensement officiels certifiés : Le nombre de membres reste fixe sur les valeurs certifiées pour chaque cycle de 3 mois. Les visiteurs du site augmentent par lots agrégés certifiés de 2 heures.',
    ru: 'Официальные сертифицированные записи переписи: количество участников остается зафиксированным на сертифицированных значениях на 3-месячный цикл. Число посетителей сайта увеличивается сертифицированными партиями каждые 2 часа.',
  },
  'active_desk_queries': {
    en: 'Active Desk Queries:',
    ar: 'استفسارات المكاتب النشطة:',
    tr: 'Aktif Masa Talepleri:',
    fa: 'استعلام‌های فعال کارشناسان:',
    fr: 'Requêtes de bureau actives :',
    ru: 'Активные запросы столов:',
  },
  'in_queue': {
    en: 'in queue',
    ar: 'في قائمة الانتظار',
    tr: 'sırada',
    fa: 'در صف انتظار',
    fr: 'en file d\'attente',
    ru: 'в очереди',
  },
  'total_logged': {
    en: 'total logged',
    ar: 'إجمالي المسجل',
    tr: 'toplam kayıtlı',
    fa: 'مجموع ثبت‌شده',
    fr: 'total enregistré',
    ru: 'всего зарегистрировано',
  },
  'next_3m_audit': {
    en: 'Next 3-Month Census Audit:',
    ar: 'تدقيق التعداد التالي بعد 3 أشهر:',
    tr: 'Sonraki 3 Aylık Sayım Denetimi:',
    fa: 'حسابرسی سرشماری ۳ ماهه بعدی:',
    fr: 'Prochain audit trimestriel :',
    ru: 'Следующий 3-месячный аудит переписи:',
  },
  'days_remaining': {
    en: 'days remaining',
    ar: 'أيام متبقية',
    tr: 'gün kaldı',
    fa: 'روز باقی‌مانده',
    fr: 'jours restants',
    ru: 'дней осталось',
  },
  'featured_news': {
    en: 'Featured Infrastructure & Facilitation News',
    ar: 'أخبار البنية التحتية وتسهيل الاستثمار المميزة',
    tr: 'Öne Çıkan Altyapı ve Kolaylaştırma Haberleri',
    fa: 'اخبار برگزیده زیرساخت و تسهیل‌گری',
    fr: 'Actualités à la une sur les infrastructures et la facilitation',
    ru: 'Главные новости инфраструктуры и координации',
  },
  'media_dispatch_title': {
    en: 'International PPP & SDG Media Dispatch',
    ar: 'نشرة الإعلام الدولي للشراكات بين القطاعين وأهداف التنمية',
    tr: 'Uluslararası PPP ve SDG Medya Bülteni',
    fa: 'بولتن خبری بین‌المللی مشارکت عمومی-خصوصی و اهداف توسعه پایدار',
    fr: 'Dépêche média internationale PPP et ODD',
    ru: 'Международная сводка новостей ГЧП и ЦУР',
  },
  'media_dispatch_subtitle': {
    en: 'Top global projects, UNECE forum milestones, and sovereign partnership initiatives across 12 featured bulletins.',
    ar: 'أهم المشاريع العالمية، وإنجازات منتدى لجنة الأمم المتحدة (UNECE)، ومبادرات الشراكة السيادية عبر 12 نشرة مميزة.',
    tr: 'Öne çıkan 12 bültenle en iyi küresel projeler, UNECE forum kilometre taşları ve egemen ortaklık girişimleri.',
    fa: 'برترین پروژه‌های جهانی، دستاوردهای مجمع UNECE و ابتکارات مشارکت حاکمیتی در ۱۲ بولتن برگزیده.',
    fr: 'Principaux projets mondiaux, étapes clés du forum de la CEE-ONU et initiatives souveraines de partenariat à travers 12 bulletins en vedette.',
    ru: 'Ведущие мировые проекты, ключевые события форума ЕЭК ООН и суверенные партнерские инициативы в 12 выпусках.',
  },
  'read_briefing': {
    en: 'Read Briefing',
    ar: 'قراءة التقرير الموجز',
    tr: 'Brifingi Oku',
    fa: 'خواندن خلاصه گزارش',
    fr: 'Lire le briefing',
    ru: 'Читать брифинг',
  },
};

// Hero Content Translations
export const HERO_TRANSLATIONS: Record<LanguageCode, {
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  imageCardDate: string;
  imageCardText: string;
}> = {
  en: {
    badge: '193 MEMBER STATES · SINCE 2015',
    headlinePrefix: 'Public-Private Partnerships for the ',
    headlineHighlight: 'Sustainable Development Goals',
    description: 'The global alliance convening governments, institutions and enterprise to deliver people-first infrastructure that builds resilient and inclusive societies — aligned with the 17 SDGs adopted by all 193 United Nations member states.',
    primaryCtaText: 'Explore Programs',
    secondaryCtaText: 'About the Union',
    imageCardDate: '25 SEPTEMBER 2015',
    imageCardText: 'UN SDG Summit – Adoption of the UN 2030 Agenda and the 17 Sustainable Development Goals.',
  },
  ar: {
    badge: '193 دولة عضو · منذ عام 2015',
    headlinePrefix: 'الشراكات بين القطاعين العام والخاص من أجل ',
    headlineHighlight: 'أهداف التنمية المستدامة',
    description: 'التحالف الدولي الذي يجمع الحكومات والمؤسسات والشركات لتقديم بنية تحتية تتمحور حول الإنسان وتبني مجتمعات مرنة وشاملة — متوافقة تماماً مع أهداف التنمية الـ 17 المعتمدة من جميع الدول الأعضاء الـ 193 بالأمم المتحدة.',
    primaryCtaText: 'استكشف البرامج',
    secondaryCtaText: 'عن الاتحاد الدولي',
    imageCardDate: '25 سبتمبر 2015',
    imageCardText: 'قمة الأمم المتحدة لأهداف التنمية المستدامة – اعتماد خطة 2030 وأهداف التنمية المستدامة الـ 17.',
  },
  tr: {
    badge: '193 ÜYE DEVLET · 2015\'TEN BERİ',
    headlinePrefix: 'Kamu-Özel İş Birlikleri ile ',
    headlineHighlight: 'Sürdürülebilir Kalkınma Amaçları',
    description: '193 Birleşmiş Milletler üye devleti tarafından kabul edilen 17 Sürdürülebilir Kalkınma Amacı ile uyumlu, insan odaklı altyapılar sunmak ve dayanıklı toplumlar inşa etmek için hükümetleri, kurumları ve işletmeleri bir araya getiren küresel ittifak.',
    primaryCtaText: 'Programları Keşfedin',
    secondaryCtaText: 'Birlik Hakkında',
    imageCardDate: '25 EYLÜL 2015',
    imageCardText: 'BM Sürdürülebilir Kalkınma Zirvesi – BM 2030 Gündemi ve 17 Sürdürülebilir Kalkınma Amacının Kabulü.',
  },
  fa: {
    badge: '۱۹۳ کشور عضو · از سال ۲۰۱۵',
    headlinePrefix: 'مشارکت‌های عمومی و خصوصی برای تحقق ',
    headlineHighlight: 'اهداف انکشاف و توسعه پایدار',
    description: 'ائتلاف جهانی گردآورنده دولت‌ها، نهادها و شرکت‌های بزرگ برای ارائه زیرساخت‌های مردم‌محور که جوامعی تاب‌آور و فراگیر ایجاد می‌کنند — همسو با ۱۷ هدف توسعه پایدار مصوب تمامی ۱۹۳ کشور عضو سازمان ملل متحد.',
    primaryCtaText: 'بررسی برنامه‌ها',
    secondaryCtaText: 'درباره اتحادیه',
    imageCardDate: '۲۵ سپتامبر ۲۰۱۵',
    imageCardText: 'اجلاس سران اهداف توسعه پایدار سازمان ملل – تصویب دستور کار ۲۰۳۰ و ۱۷ هدف جهانی.',
  },
  fr: {
    badge: '193 ÉTATS MEMBRES · DEPUIS 2015',
    headlinePrefix: 'Partenariats Public-Privé pour les ',
    headlineHighlight: 'Objectifs de Développement Durable',
    description: 'L\'alliance mondiale réunissant gouvernements, institutions et entreprises pour fournir des infrastructures axées sur l\'humain, bâtissant des sociétés résilientes et inclusives — alignées sur les 17 ODD adoptés par les 193 États membres de l\'ONU.',
    primaryCtaText: 'Explorer les programmes',
    secondaryCtaText: 'À propos de l\'Union',
    imageCardDate: '25 SEPTEMBRE 2015',
    imageCardText: 'Sommet des ODD de l\'ONU – Adoption de l\'Agenda 2030 et des 17 Objectifs de développement durable.',
  },
  ru: {
    badge: '193 ГОСУДАРСТВА-ЧЛЕНА · С 2015 ГОДА',
    headlinePrefix: 'Государственно-частное партнерство ради ',
    headlineHighlight: 'Целей устойчивого развития',
    description: 'Глобальный альянс, объединяющий правительства, финансовые институты и предприятия для создания инфраструктуры в интересах человека и построения устойчивых обществ в соответствии с 17 ЦУР, принятыми всеми 193 государствами ООН.',
    primaryCtaText: 'Обзор программ',
    secondaryCtaText: 'О Союзе',
    imageCardDate: '25 СЕНТЯБРЯ 2015',
    imageCardText: 'Саммит ООН по ЦУР – Принятие Повестки дня на период до 2030 года и 17 Целей устойчивого развития.',
  },
};

// Headlines Translations
export const HEADLINES_TRANSLATIONS: Record<string, Record<LanguageCode, { text: string; category: string }>> = {
  'h1': {
    en: { text: 'Facilitators in Canada (Institutional Desks)', category: 'Accreditation' },
    ar: { text: 'المنسقون في كندا (المكاتب المؤسسية الرسمية)', category: 'الاعتماد' },
    tr: { text: 'Kanada Kolaylaştırıcıları (Kurumsal Masalar)', category: 'Akreditasyon' },
    fa: { text: 'تسهیل‌کنندگان در کانادا (میزهای رسمی نهادی)', category: 'اعتبارسنجی' },
    fr: { text: 'Facilitateurs au Canada (Bureaux Institutionnels)', category: 'Accréditation' },
    ru: { text: 'Координаторы в Канаде (Институциональные офисы)', category: 'Аккредитация' },
  },
  'h2': {
    en: { text: 'Greater Salalah Master Plan – MoHUP & OCCI', category: 'Regional Projects' },
    ar: { text: 'المخطط الشامل لصلالة الكبرى – وزارة الإسكان وغرفة تجارة عمان', category: 'مشاريع إقليمية' },
    tr: { text: 'Büyük Salalah Master Planı – MoHUP ve OCCI', category: 'Bölgesel Projeler' },
    fa: { text: 'طرح جامع صلاله بزرگ – وزارت مسکن و اتاق بازرگانی عمان', category: 'پروژه‌های منطقه‌ای' },
    fr: { text: 'Plan Directeur de Greater Salalah – MoHUP & OCCI', category: 'Projets Régionaux' },
    ru: { text: 'Генеральный план Большой Салалы – MoHUP и OCCI', category: 'Региональные проекты' },
  },
  'h3': {
    en: { text: '9th Edition of the UNECE International PPP Forum', category: 'Global Events' },
    ar: { text: 'الدورة التاسعة للمنتدى الدولي للشراكة بين القطاعين بلجنة الأمم المتحدة الاقتصادية لأوروبا (UNECE)', category: 'فعاليات دولية' },
    tr: { text: 'UNECE Uluslararası PPP Forumu\'nun 9. Edisyonu', category: 'Küresel Etkinlikler' },
    fa: { text: 'نهمین دوره مجمع بین‌المللی مشارکت عمومی-خصوصی کمیسیون اقتصادی سازمان ملل (UNECE)', category: 'رویدادهای جهانی' },
    fr: { text: '9e Édition du Forum International PPP de la CEE-ONU', category: 'Événements Mondiaux' },
    ru: { text: '9-й Международный форум ЕЭК ООН по ГЧП', category: 'Глобальные события' },
  },
  'h4': {
    en: { text: 'UN 2030 Agenda: People-First Public-Private Partnerships Framework Update', category: 'Governance' },
    ar: { text: 'خطة الأمم المتحدة 2030: تحديث إطار عمل الشراكات المتمحورة حول الإنسان', category: 'الحوكمة الدولية' },
    tr: { text: 'BM 2030 Gündemi: İnsan Odaklı Kamu-Özel İş Birlikleri Çerçeve Güncellemesi', category: 'Yönetişim' },
    fa: { text: 'دستور کار ۲۰۳۰ سازمان ملل: به‌روزرسانی چارچوب مشارکت‌های عمومی-خصوصی مردم‌محور', category: 'حاکمیت' },
    fr: { text: 'Agenda 2030 de l\'ONU : Mise à jour du cadre des partenariats axés sur les personnes', category: 'Gouvernance' },
    ru: { text: 'Повестка ООН до 2030 года: Обновление стандартов ГЧП в интересах человека', category: 'Управление' },
  },
  'h5': {
    en: { text: 'SDG 9 Infrastructure Financing Facility Reaches $14.8B in Private Co-Investment', category: 'Finance' },
    ar: { text: 'آلية تمويل البنية التحتية للهدف التاسع تتجاوز 14.8 مليار دولار في الاستثمار الخاص المشترك', category: 'التمويل الإنمائي' },
    tr: { text: 'SDG 9 Altyapı Finansman Tesisi Özel Ortak Yatırımlarda 14.8 Milyar Dolara Ulaştı', category: 'Finans' },
    fa: { text: 'تسهیلات تأمین مالی زیرساخت‌های هدف ۹ به ۱۴.۸ میلیارد دالر سرمایه‌گذاری مشترک خصوصی رسید', category: 'مالی' },
    fr: { text: 'Le mécanisme de financement d\'infrastructures de l\'ODD 9 atteint 14,8 milliards $ en co-investissement privé', category: 'Finance' },
    ru: { text: 'Механизм финансирования инфраструктуры ЦУР 9 привлек 14,8 млрд $ частных инвестиций', category: 'Финансы' },
  },
};

// Navigation Translations
export const NAV_TRANSLATIONS: Record<string, Record<LanguageCode, { title: string; description?: string }>> = {
  'home': {
    en: { title: 'HOME' },
    ar: { title: 'الرئيسية' },
    tr: { title: 'ANA SAYFA' },
    fa: { title: 'صفحه اصلی' },
    fr: { title: 'ACCUEIL' },
    ru: { title: 'ГЛАВНАЯ' },
  },
  'ppp-laws': {
    en: { title: 'PPP LAWS' },
    ar: { title: 'قوانين الشراكة (PPP)' },
    tr: { title: 'PPP YASALARI' },
    fa: { title: 'قوانین مشارکت' },
    fr: { title: 'LOIS SUR LES PPP' },
    ru: { title: 'ЗАКОНЫ О ГЧП' },
  },
  'about-ppp': {
    en: { title: 'ABOUT PPP' },
    ar: { title: 'عن الشراكة بين القطاعين' },
    tr: { title: 'PPP HAKKINDA' },
    fa: { title: 'درباره مشارکت عمومی-خصوصی' },
    fr: { title: 'À PROPOS DES PPP' },
    ru: { title: 'О ГЧП' },
  },
  'ppp-programs': {
    en: { title: 'PPP PROGRAMS' },
    ar: { title: 'برامج الشراكة' },
    tr: { title: 'PPP PROGRAMLARI' },
    fa: { title: 'برنامه‌های مشارکت' },
    fr: { title: 'PROGRAMMES PPP' },
    ru: { title: 'ПРОГРАММЫ ГЧП' },
  },
  'about-union': {
    en: { title: 'ABOUT UNION' },
    ar: { title: 'عن الاتحاد الدولي' },
    tr: { title: 'BİRLİK HAKKINDA' },
    fa: { title: 'درباره اتحادیه' },
    fr: { title: 'À PROPOS DE L\'UNION' },
    ru: { title: 'О СОЮЗЕ' },
  },
  'ppp-sdgs': {
    en: { title: 'PPP & 17 SDGs' },
    ar: { title: 'الشراكة وأهداف التنمية الـ 17' },
    tr: { title: 'PPP VE 17 SDG' },
    fa: { title: 'مشارکت و ۱۷ هدف توسعه پایدار' },
    fr: { title: 'PPP & 17 ODD' },
    ru: { title: 'ГЧП И 17 ЦУР' },
  },
  'ppp-facilitators': {
    en: { title: 'PPP FACILITATORS' },
    ar: { title: 'منسقو الشراكة (PPP)' },
    tr: { title: 'PPP KOLAYLAŞTIRICILARI' },
    fa: { title: 'تسهیل‌کنندگان مشارکت' },
    fr: { title: 'FACILITATEURS PPP' },
    ru: { title: 'КООРДИНАТОРЫ ГЧП' },
  },
  'contact-us': {
    en: { title: 'CONTACT US' },
    ar: { title: 'اتصل بنا' },
    tr: { title: 'İLETİŞİM' },
    fa: { title: 'تماس با ما' },
    fr: { title: 'CONTACTEZ-NOUS' },
    ru: { title: 'КОНТАКТЫ' },
  },
};

// Submenus translations map
export const SUBMENU_TRANSLATIONS: Record<string, Record<LanguageCode, { title: string; description: string }>> = {
  'laws-overview': {
    en: { title: 'Global PPP Legal Frameworks', description: 'Evolution of public-private legislation under UN and international conventions.' },
    ar: { title: 'الأطر القانونية العالمية للشراكة', description: 'تطور تشريعات الشراكة بين القطاعين بموجب اتفاقيات الأمم المتحدة والمعاهدات الدولية.' },
    tr: { title: 'Küresel PPP Yasal Çerçeveleri', description: 'BM ve uluslararası sözleşmeler kapsamında kamu-özel mevzuatının evrimi.' },
    fa: { title: 'چارچوب‌های قانونی جهانی مشارکت', description: 'تحول قوانین مشارکت عمومی و خصوصی تحت کنوانسیون‌های بین‌المللی سازمان ملل.' },
    fr: { title: 'Cadres Juridiques Mondiaux des PPP', description: 'Évolution de la législation public-privé sous les conventions internationales.' },
    ru: { title: 'Международно-правовые основы ГЧП', description: 'Развитие законодательства о ГЧП в соответствии с конвенциями ООН.' },
  },
  'national-laws': {
    en: { title: 'National PPP Laws Directory', description: 'Legislative statutes from over 120 member states in the EU, Americas, and Asia.' },
    ar: { title: 'دليل القوانين الوطنية للشراكة', description: 'النصوص التشريعية لأكثر من 120 دولة عضو في الاتحاد الأوروبي والأمريكتين وآسيا.' },
    tr: { title: 'Ulusal PPP Yasaları Rehberi', description: 'AB, Amerika ve Asya\'daki 120\'den fazla üye devletin yasal mevzuatı.' },
    fa: { title: 'راهنمای قوانین ملی مشارکت (PPP)', description: 'مقررات قانونی بیش از ۱۲۰ کشور عضو در اتحادیه اروپا، قاره آمریکا و آسیا.' },
    fr: { title: 'Répertoire des Lois Nationales sur les PPP', description: 'Textes législatifs de plus de 120 États membres dans l\'UE, les Amériques et l\'Asie.' },
    ru: { title: 'Справочник национальных законов о ГЧП', description: 'Законодательные акты более чем 120 государств-членов в ЕС, Америке и Азии.' },
  },
  'unece-models': {
    en: { title: 'UNECE Standard Concession Contracts', description: 'Standardized model clauses for people-first infrastructure partnerships.' },
    ar: { title: 'عقود الامتياز النموذجية للجنة الأمم المتحدة (UNECE)', description: 'بنود تعاقدية موحدة لشراكات البنية التحتية المتمحورة حول الإنسان.' },
    tr: { title: 'UNECE Standart İmtiyaz Sözleşmeleri', description: 'İnsan odaklı altyapı ortaklıkları için standartlaştırılmış model maddeler.' },
    fa: { title: 'قراردادهای امتیازی استاندارد UNECE', description: 'بندهای قراردادی استاندارد برای مشارکت‌های زیربنایی مردم‌محور.' },
    fr: { title: 'Contrats de Concession Standards CEE-ONU', description: 'Clauses types standardisées pour des partenariats d\'infrastructure centrés sur l\'humain.' },
    ru: { title: 'Стандартные концессионные договоры ЕЭК ООН', description: 'Типовые положения для партнерств в интересах человека.' },
  },
  'what-is-ppp': {
    en: { title: 'WHAT IS PPP', description: 'Public-Private Partnership definitions, structures, and cooperative governance models.' },
    ar: { title: 'ما هي الشراكة بين القطاعين (PPP)', description: 'تعريفات الشراكة وهياكلها المؤسسية ونماذج الحوكمة التعاونية العالمية.' },
    tr: { title: 'PPP NEDİR', description: 'Kamu-Özel İş Birliği tanımları, yapıları ve işbirlikçi yönetişim modelleri.' },
    fa: { title: 'مشارکت عمومی-خصوصی چیست؟', description: 'تعاریف، ساختارها و الگوهای حاکمیت مشارکتی در سطح بین‌المللی.' },
    fr: { title: 'QU\'EST-CE QU\'UN PPP', description: 'Définitions des partenariats public-privé, structures et modèles de gouvernance coopérative.' },
    ru: { title: 'ЧТО ТАКОЕ ГЧП', description: 'Определения, структуры и модели совместного управления государственно-частным партнерством.' },
  },
  'project-types': {
    en: { title: 'PPP PROJECT TYPES', description: 'BOT, BOOT, DBFO, Concessions, and Joint Venture structures analyzed.' },
    ar: { title: 'أنواع مشاريع الشراكة', description: 'تحليل شامل لنماذج البناء والتشغيل ونقل الملكية (BOT, BOOT, DBFO) والامتيازات والمشاريع المشتركة.' },
    tr: { title: 'PPP PROJE TÜRLERİ', description: 'YİD, YİD-D, DBFO, İmtiyazlar ve Ortak Girişim yapılarının analizi.' },
    fa: { title: 'انواع پروژه‌های مشارکت', description: 'بررسی ساختارهای BOT، BOOT، DBFO، امتیازات و سرمایه‌گذاری‌های مشترک.' },
    fr: { title: 'TYPES DE PROJETS PPP', description: 'Analyse des structures BOT, BOOT, DBFO, concessions et coentreprises.' },
    ru: { title: 'ТИПЫ ПРОЕКТОВ ГЧП', description: 'Анализ моделей ВОТ, ВООТ, DBFO, концессий и совместных предприятий.' },
  },
  'program-overview': {
    en: { title: 'PROGRAM OVERVIEW', description: 'Global flagship initiatives delivering sustainable social and economic infrastructure.' },
    ar: { title: 'نظرة عامة على البرامج', description: 'مبادرات عالمية رائدة تقدم بنية تحتية اجتماعية واقتصادية مستدامة.' },
    tr: { title: 'PROGRAMA GENEL BAKIŞ', description: 'Sürdürülebilir sosyal ve ekonomik altyapı sağlayan küresel öncü girişimler.' },
    fa: { title: 'نمای کلی برنامه‌ها', description: 'طرح‌های پیشرو بین‌المللی در ارائه زیرساخت‌های پایدار اجتماعی و اقتصادی.' },
    fr: { title: 'APERÇU DU PROGRAMME', description: 'Initiatives phares mondiales fournissant des infrastructures sociales et économiques durables.' },
    ru: { title: 'ОБЗОР ПРОГРАММ', description: 'Глобальные флагманские инициативы по созданию устойчивой инфраструктуры.' },
  },
  'union-policy': {
    en: { title: 'PPP UNION POLICY', description: 'Established in 2012, adhering to UNECE People-First frameworks, European Union directives & UAE regulatory codes.' },
    ar: { title: 'سياسة ميثاق الاتحاد الدولي', description: 'تأسس عام 2012 وفقاً لأطر لجنة الأمم المتحدة وتوجيهات الاتحاد الأوروبي والأنظمة الإماراتية.' },
    tr: { title: 'PPP BİRLİK POLİTİKASI', description: '2012 yılında kurulmuş olup UNECE İnsan Odaklı ilkelerine, AB direktiflerine ve BAE mevzuatına uygundur.' },
    fa: { title: 'خط‌مشی اتحادیه مشارکت (PPP)', description: 'تأسیس در سال ۲۰۱۲، مطابق با موازین مردم‌محور سازمان ملل، دستورالعمل‌های اتحادیه اروپا و امارات.' },
    fr: { title: 'POLITIQUE DE L\'UNION PPP', description: 'Fondée en 2012, conforme aux cadres CEE-ONU, aux directives européennes et aux règlements des EAU.' },
    ru: { title: 'ПОЛИТИКА СОЮЗА ГЧП', description: 'Основан в 2012 году в соответствии с принципами ЕЭК ООН, директивами ЕС и регламентами ОАЭ.' },
  },
  'facilitators-network': {
    en: { title: 'PPP FACILITATORS', description: 'Empowering qualified legal, financial, and technical facilitators worldwide.' },
    ar: { title: 'شبكة منسقي الشراكة الدولية', description: 'تمكين المنسقين القانونيين والماليين والتقنيين المعتمدين حول العالم.' },
    tr: { title: 'PPP KOLAYLAŞTIRICILARI', description: 'Dünya çapında nitelikli yasal, finansal ve teknik kolaylaştırıcıları güçlendirme.' },
    fa: { title: 'شبکه تسهیل‌کنندگان بین‌المللی', description: 'توانمندسازی تسهیل‌کنندگان حقوقی، مالی و فنی معتبر در سراسر جهان.' },
    fr: { title: 'FACILITATEURS PPP', description: 'Habiliter des facilitateurs juridiques, financiers et techniques qualifiés dans le monde entier.' },
    ru: { title: 'СЕТЬ КООРДИНАТОРОВ ГЧП', description: 'Поддержка квалифицированных юридических, финансовых и технических специалистов по всему миру.' },
  },
  'all-17-goals': {
    en: { title: '17 UN Sustainable Goals', description: 'Interactive directory of all 17 Goals adopted by 193 UN member states on 25 Sept 2015.' },
    ar: { title: 'أهداف التنمية المستدامة الـ 17', description: 'دليل تفاعلي شامل لجميع الأهداف الـ 17 المعتمدة من 193 دولة بالأمم المتحدة في 25 سبتمبر 2015.' },
    tr: { title: '17 BM Sürdürülebilir Kalkınma Amacı', description: '25 Eylül 2015\'te 193 BM üyesi tarafından kabul edilen 17 Amacın interaktif rehberi.' },
    fa: { title: '۱۷ هدف توسعه پایدار سازمان ملل', description: 'راهنمای جامع تعاملی تمامی ۱۷ هدف مصوب ۱۹۳ کشور عضو سازمان ملل در ۲۵ سپتامبر ۲۰۱۵.' },
    fr: { title: '17 Objectifs de Développement Durable', description: 'Répertoire interactif des 17 objectifs adoptés par 193 États membres le 25 sept 2015.' },
    ru: { title: '17 Целей устойчивого развития ООН', description: 'Интерактивный каталог всех 17 целей, принятых 193 государствами ООН 25 сентября 2015 г.' },
  },
};

// Media Posts Translations
export const MEDIA_POSTS_TRANSLATIONS: Record<string, Record<LanguageCode, {
  title: string;
  category: string;
  badge: string;
  summary: string;
}>> = {
  'post-1': {
    en: {
      title: '9th Edition of the UNECE International PPP Forum.',
      category: 'Global Forum',
      badge: 'PPP',
      summary: 'The landmark United Nations Economic Commission for Europe international forum convening sovereign leaders, infrastructure ministries, and institutional financiers to advance People-First PPP standards.'
    },
    ar: {
      title: 'الدورة التاسعة للمنتدى الدولي للشراكة بين القطاعين بلجنة الأمم المتحدة الاقتصادية لأوروبا (UNECE)',
      category: 'منتدى دولي',
      badge: 'شراكة PPP',
      summary: 'المنتدى الدولي البارز للجنة الأمم المتحدة الاقتصادية لأوروبا الذي يجمع القادة السياديين ووزارات البنية التحتية والممولين المؤسسيين لتعزيز معايير الشراكة المتمحورة حول الإنسان.'
    },
    tr: {
      title: 'UNECE Uluslararası PPP Forumu\'nun 9. Edisyonu.',
      category: 'Küresel Forum',
      badge: 'PPP',
      summary: 'İnsan Odaklı PPP standartlarını ilerletmek üzere egemen liderleri, altyapı bakanlıklarını ve kurumsal finansörleri bir araya getiren dönüm noktası niteliğindeki BM forumu.'
    },
    fa: {
      title: 'نهمین دوره مجمع بین‌المللی مشارکت‌های عمومی و خصوصی UNECE.',
      category: 'مجمع جهانی',
      badge: 'مشارکت PPP',
      summary: 'مجمع بین‌المللی شاخص کمیسیون اقتصادی سازمان ملل با گردهمایی رهبران حاکمیتی، وزارتخانه‌های زیربنایی و سرمایه‌گذاران نهادی برای ارتقای استانداردهای مردم‌محور.'
    },
    fr: {
      title: '9e Édition du Forum International PPP de la CEE-ONU.',
      category: 'Forum Mondial',
      badge: 'PPP',
      summary: 'Le forum international historique de la Commission économique pour l\'Europe des Nations Unies réunissant dirigeants souverains et ministères pour faire progresser les normes PPP axées sur l\'humain.'
    },
    ru: {
      title: '9-й Международный форум ЕЭК ООН по ГЧП.',
      category: 'Глобальный форум',
      badge: 'ГЧП',
      summary: 'Знаковый международный форум Европейской экономической комиссии ООН, объединяющий государственных лидеров, министерства инфраструктуры и институциональных инвесторов.'
    }
  },
  'post-2': {
    en: {
      title: 'ADP & NOC Groups Strategic Partnership in Oman',
      category: 'Regional Projects',
      badge: 'PPP PROJECTS OMAN',
      summary: 'Strategic bilateral partnership between ADP and National Oil & Commercial groups accelerating infrastructure hubs, port logistics, and clean energy transition across the Sultanate of Oman.'
    },
    ar: {
      title: 'الشراكة الاستراتيجية بين مجموعتي ADP وNOC في سلطنة عمان',
      category: 'مشاريع إقليمية',
      badge: 'مشاريع عمان',
      summary: 'شراكة استراتيجية ثنائية بين مجموعتي ADP والنفط والتجارة الوطنية لتسريع مراكز البنية التحتية، ولوجستيات الموانئ، والتحول إلى الطاقة النظيفة في سلطنة عمان.'
    },
    tr: {
      title: 'Umman\'da ADP ve NOC Grupları Stratejik Ortaklığı',
      category: 'Bölgesel Projeler',
      badge: 'UMMAN PROJELERİ',
      summary: 'Umman Sultanlığı genelinde altyapı merkezlerini, liman lojistiğini ve temiz enerji geçişini hızlandıran stratejik ikili ortaklık.'
    },
    fa: {
      title: 'مشارکت استراتژیک گروه‌های ADP و NOC در سلطنت عمان',
      category: 'پروژه‌های منطقه‌ای',
      badge: 'پروژه‌های عمان',
      summary: 'مشارکت دوجانبه استراتژیک میان گروه ADP و مجموعه‌های ملی نفت و بازرگانی برای توسعه مراکز زیرساختی، بنادر و انرژی پاک در سلطنت عمان.'
    },
    fr: {
      title: 'Partenariat Stratégique des Groupes ADP et NOC à Oman',
      category: 'Projets Régionaux',
      badge: 'PROJETS OMAN',
      summary: 'Partenariat bilatéral stratégique entre ADP et les groupes nationaux accélérant les pôles d\'infrastructure, la logistique portuaire et la transition énergétique.'
    },
    ru: {
      title: 'Стратегическое партнерство групп ADP и NOC в Омане',
      category: 'Региональные проекты',
      badge: 'ПРОЕКТЫ ОМАНА',
      summary: 'Стратегическое двустороннее партнерство групп ADP и национальных нефтегазовых компаний по развитию инфраструктурных хабов и портовой логистики.'
    }
  },
  'post-3': {
    en: {
      title: 'ADP and Al-Nahda Group Signed MOU in Muscat, Oman',
      category: 'Infrastructure',
      badge: 'INFRASTRUCTURE',
      summary: 'High-level memorandum of understanding signed in Muscat for the capital mobilization, engineering structuring, and concession management of premier urban and logistics infrastructure.'
    },
    ar: {
      title: 'توقيع مذكرة تفاهم بين ADP ومجموعة النهضة في مسقط، سلطنة عمان',
      category: 'بنية تحتية',
      badge: 'بنية تحتية',
      summary: 'توقيع مذكرة تفاهم رفيعة المستوى في مسقط لحشد رؤوس الأموال، والهيكلة الهندسية، وإدارة عقود الامتياز لأهم مشاريع البنية التحتية الحضرية واللوجستية.'
    },
    tr: {
      title: 'ADP ve Al-Nahda Grubu Maskat\'ta Mutabakat Zaptı İmzaladı',
      category: 'Altyapı',
      badge: 'ALTYAPI',
      summary: 'Önemli kentsel ve lojistik altyapı projelerinin sermaye mobilizasyonu ve imtiyaz yönetimi için Maskat\'ta imzalanan üst düzey mutabakat zaptı.'
    },
    fa: {
      title: 'امضای تفاهم‌نامه میان گروه ADP و گروه النهضه در مسقط عمان',
      category: 'زیرساخت',
      badge: 'زیرساخت‌ها',
      summary: 'امضای یادداشت تفاهم عالی‌رتبه در مسقط برای تجهیز منابع مالی، طراحی مهندسی و مدیریت امتیاز پروژه‌های برجسته شهری و ترانزیتی.'
    },
    fr: {
      title: 'Protocole d\'Accord signé entre ADP et Al-Nahda à Mascate, Oman',
      category: 'Infrastructure',
      badge: 'INFRASTRUCTURE',
      summary: 'Protocole d\'accord de haut niveau signé à Mascate pour la mobilisation de capitaux et la gestion des concessions d\'infrastructures urbaines.'
    },
    ru: {
      title: 'Подписание меморандума о взаимопонимании между ADP и Al-Nahda в Маскате',
      category: 'Инфраструктура',
      badge: 'ИНФРАСТРУКТУРА',
      summary: 'Меморандум о взаимопонимании высокого уровня, подписанный в Маскате, по привлечению капитала и управлению концессиями в городской инфраструктуре.'
    }
  }
};

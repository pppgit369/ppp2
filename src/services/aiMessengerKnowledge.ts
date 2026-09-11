export type SupportedLanguage = 'en' | 'ar' | 'fa-af' | 'ps' | 'tr' | 'ru';

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl', flag: '🇦🇪' },
  { code: 'fa-af', name: 'Farsi', nativeName: 'فارسی', direction: 'rtl', flag: '🇮🇷' },
  { code: 'ps', name: 'Pashto', nativeName: 'پښتو', direction: 'rtl', flag: '🇦🇫' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', direction: 'ltr', flag: '🇹🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', direction: 'ltr', flag: '🇷🇺' },
];

export interface QuickPrompt {
  id: string;
  label: Record<SupportedLanguage, string>;
  question: Record<SupportedLanguage, string>;
}

export const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: 'legal-basis',
    label: {
      en: 'Legal Basis (ILO 87 & EU Art 12)',
      ar: 'الأساس القانوني (منظمة العمل الدولية 87 وميثاق الاتحاد الأوروبي)',
      'fa-af': 'اساس قانونی (کنوانسیون 87 و ماده 12 اتحادیه اروپا)',
      ps: 'قانوني اساس (د کار نړیوال سازمان ۸۷ او اروپا ماده ۱۲)',
      tr: 'Yasal Dayanak (ILO 87 & AB Madde 12)',
      ru: 'Правовая основа (МОТ 87 и ст. 12 Хартии ЕС)',
    },
    question: {
      en: 'What is the legal basis of the PPP Union under ILO Convention 87 and EU Charter Article 12?',
      ar: 'ما هو الأساس القانوني لاتحاد الشراكة بين القطاعين العام والخاص بموجب اتفاقية منظمة العمل الدولية رقم 87 والمادة 12 من ميثاق الاتحاد الأوروبي؟',
      'fa-af': 'اساس قانونی اتحادیه مشارکت عامه و خصوصی (PPP Union) بر اساس کنوانسیون شماره 87 سازمان بین‌المللی کار و ماده 12 منشور اتحادیه اروپا چیست؟',
      ps: 'د کار د نړیوال سازمان د ۸۷ کنوانسیون او د اروپا اتحادیې د منشور د ۱۲ مادې له مخې د PPP اتحادیې قانوني بنسټ څه دی؟',
      tr: 'PPP Union\'ın ILO 87 Sözleşmesi ve AB Şartı Madde 12 kapsamındaki yasal dayanağı nedir?',
      ru: 'Какова правовая основа Союза ГЧП (PPP Union) в соответствии с Конвенцией МОТ № 87 и статьей 12 Хартии ЕС?',
    },
  },
  {
    id: 'non-financial',
    label: {
      en: 'Non-Financial Nature & Funds',
      ar: 'الطبيعة غير المالية وعدم إدارة الأموال',
      'fa-af': 'ماهیت غیرمالی و عدم نگهداری وجوه',
      ps: 'غیر مالي ماهیت او د بودیجې نه ساتل',
      tr: 'Mali Olmayan Yapı ve Fonlar',
      ru: 'Нефинансовый характер и средства',
    },
    question: {
      en: 'Does the PPP Union hold funds or bank accounts, and what is its non-financial administrative role?',
      ar: 'هل يمتلك اتحاد الشراكة بين القطاعين العام والخاص حسابات مصرفية أو أموالاً، وما هو دوره الإداري غير المالي؟',
      'fa-af': 'آیا اتحادیه PPP حساب‌های بانکی یا وجوه مالی نگهداری می‌کند و نقش اداری غیرمالی آن چیست؟',
      ps: 'ایا د PPP اتحادیه بانکي حسابونه یا پیسې ساتي، او د دې غیر مالي اداري رول څه دی؟',
      tr: 'PPP Union banka hesapları veya fon tutuyor mu ve mali olmayan idari rolü nedir?',
      ru: 'Хранит ли Союз ГЧП банковские счета или средства, и в чем заключается его нефинансовая административная роль?',
    },
  },
  {
    id: 'grant-vs-finance',
    label: {
      en: 'Grant vs. Finance Distinction',
      ar: 'الفرق بين المنحة (Grant) والتمويل (Finance)',
      'fa-af': 'تفاوت میان گرانټ (بلا‌عوض) و فاینانس (تمویل)',
      ps: 'د مرستې (ګرانټ) او تمویل (فاینانس) ترمنځ توپیر',
      tr: 'Hibe (Grant) ve Finansman Ayrımı',
      ru: 'Различие между грантом и финансированием',
    },
    question: {
      en: 'What is the institutional difference between a Grant and Finance in PPP project structuring?',
      ar: 'ما هو الفرق المؤسسي بين المنحة والتمويل في هيكلة مشاريع الشراكة بين القطاعين العام والخاص؟',
      'fa-af': 'تفاوت اساسی بین گرانټ (کمک بلاعوض) و فاینانس (تأمین مالی بازپرداخت‌دار) در پروژه‌های PPP چیست؟',
      ps: 'د عامه او خصوصي مشارکت په پروژو کې د وړیا مرستې (ګرانټ) او تمویل (فاینانس) ترمنځ بنسټیز توپیر څه دی؟',
      tr: 'KÖİ proje yapılandırmasında Hibe ile Finansman arasındaki kurumsal fark nedir?',
      ru: 'В чем заключается институциональная разница между грантом и финансированием в структурировании проектов ГЧП?',
    },
  },
  {
    id: 'banking-compliance',
    label: {
      en: 'Banking Rules & AML/CFT Compliance',
      ar: 'القواعد المصرفية والامتثال لمكافحة غسل الأموال',
      'fa-af': 'قوانین بانکی و رعایت استانداردهای AML/CFT',
      ps: 'بانکي مقررات او د پیسو د وینځلو ضد اصول',
      tr: 'Bankacılık Kuralları ve AML/CFT Uyumu',
      ru: 'Банковские правила и комплаенс ПОД/ФТ',
    },
    question: {
      en: 'What are the banking compliance, AML/CFT, KYC, and escrow rules governing PPP transactions?',
      ar: 'ما هي قواعد الامتثال المصرفي ومكافحة غسل الأموال (AML/CFT) ومعايير اعرف عميلك (KYC) وحسابات الضمان التي تحكم معاملات الشراكة؟',
      'fa-af': 'مقررات و استانداردهای انطباق بانکی، مبارزه با پولشویی (AML/CFT)، شناخت مشتری (KYC) و حساب‌های امانی (Escrow) در معاملات PPP کدامند؟',
      ps: 'په عامه او خصوصي معاملو کې بانکي اطاعت، د پیسو مینځلو ضد اصول (AML/CFT)، او د ایسکرو حسابونو قوانین څنګه پلي کیږي؟',
      tr: 'KÖİ işlemlerini yöneten bankacılık uyumu, AML/CFT, KYC ve emanet (escrow) kuralları nelerdir?',
      ru: 'Каковы правила банковского комплаенса, ПОД/ФТ, KYC и правила эскроу-счетов при сделках ГЧП?',
    },
  },
  {
    id: 'facilitators-directory',
    label: {
      en: 'Accredited Facilitators & Canada VIP',
      ar: 'الميسرون المعتمدون ودول كندا وعُمان',
      'fa-af': 'تسهیل‌کنندگان مجاز و اعضای VIP کانادا و عمان',
      ps: 'تصدیق شوي اسانګران او د کاناډا او عمان ځانګړي غړي',
      tr: 'Akredite Kolaylaştırıcılar ve Kanada VIP',
      ru: 'Аккредитованные фасилитаторы и VIP Канада',
    },
    question: {
      en: 'How does the PPP Union accredit transaction facilitators, including the Canada VIP Facilitators and Oman desk?',
      ar: 'كيف يعتمد اتحاد الشراكة بين القطاعين العام والخاص ميسري المعاملات، بما في ذلك ميسري كندا VIP ومكتب سلطنة عُمان؟',
      'fa-af': 'اتحادیه PPP چگونه تسهیل‌کنندگان معاملات، از جمله تسهیل‌کنندگان VIP کانادا و میز سلطنت عمان را اعتبارسنجی می‌کند؟',
      ps: 'د PPP اتحادیه څنګه د راکړې ورکړې اسانګران، لکه د کاناډا VIP اسانګران او د عمان میز تایید او منظوروي؟',
      tr: 'PPP Union, Kanada VIP Kolaylaştırıcıları ve Umman masası dahil olmak üzere işlem kolaylaştırıcılarını nasıl akredite eder?',
      ru: 'Как Союз ГЧП аккредитует фасилитаторов сделок, включая VIP-фасилитаторов Канады и представительство в Омане?',
    },
  },
  {
    id: 'abbreviations-directory',
    label: {
      en: '6. Directory of PPP Abbreviations & Acronyms',
      ar: '6. دليل اختصارات ومصطلحات الشراكة الدولية',
      'fa-af': '۶. دایرکتوری اختصارات و اصطلاحات بین‌المللی PPP',
      ps: '۶. د نړیوالو PPP مخففاتو او اصطلاحاتو لارښود',
      tr: '6. Uluslararası KÖİ Kısaltmalar ve Terimler Rehberi',
      ru: '6. Международный справочник сокращений и акронимов ГЧП',
    },
    question: {
      en: 'Provide the International Directory of PPP Abbreviations & Acronyms and professional terminology FAQ.',
      ar: 'يرجى تقديم الدليل الدولي لاختصارات ومصطلحات الشراكة بين القطاعين العام والخاص والأسئلة المهنية الشائعة (Abbreviations FAQ).',
      'fa-af': 'لطفاً دایرکتوری بین‌المللی اختصارات و اصطلاحات تخصصی PPP و سوالات متداول مسلکی (Abbreviations FAQ) را ارائه دهید.',
      ps: 'مهرباني وکړئ د عامه او خصوصي مشارکت نړیوال مخففات، اصطلاحات او مسلکي پوښتنې (Abbreviations FAQ) وړاندې کړئ.',
      tr: 'Lütfen Uluslararası KÖİ Kısaltmalar ve Kısaltma Terimleri Rehberi ile Kısaltmalar SSS\'sini (Abbreviations FAQ) sunun.',
      ru: 'Предоставьте Международный справочник сокращений и акронимов ГЧП и профессиональный FAQ по терминологии (Abbreviations FAQ).',
    },
  },
];

export interface AnswerResponse {
  answer: string;
  sourceCitations: string[];
  suggestedFollowUps: string[];
}

/**
 * Intelligent Knowledge Engine to guarantee immediate, fully compliant answers
 * across all 6 requested languages without latency or dependence on open internet connectivity.
 */
export function generateLocalKnowledgeAnswer(query: string, lang: SupportedLanguage): AnswerResponse {
  const qLower = query.toLowerCase();

  // 6. International Directory of PPP Abbreviations & Acronyms (Abbreviations FAQ)
  if (
    qLower.includes('abbreviation') ||
    qLower.includes('acronym') ||
    qLower.includes('directory') ||
    qLower.includes('lexicon') ||
    qLower.includes('glossary') ||
    qLower.includes('terminology') ||
    qLower.includes('مخفف') ||
    qLower.includes('اختصار') ||
    qLower.includes('اصطلاح') ||
    qLower.includes('kısaltma') ||
    qLower.includes('сокращени') ||
    qLower.includes('акроним') ||
    qLower.includes('bot') ||
    qLower.includes('boot') ||
    qLower.includes('vgf') ||
    qLower.includes('spv') ||
    qLower.includes('adscr') ||
    qLower.includes('dscr') ||
    qLower.includes('wacc') ||
    qLower.includes('epec') ||
    qLower.includes('dbfo') ||
    qLower.includes('pfi') ||
    qLower.includes('sblc')
  ) {
    return getAbbreviationsDirectoryAnswer(lang);
  }

  // 1. Legal Basis & Governance (ILO 87 & EU Charter 12)
  if (
    qLower.includes('ilo') ||
    qLower.includes('convention 87') ||
    qLower.includes('charter') ||
    qLower.includes('article 12') ||
    qLower.includes('legal basis') ||
    qLower.includes('قانوني') ||
    qLower.includes('قانون') ||
    qLower.includes('اساس') ||
    qLower.includes('правовая') ||
    qLower.includes('dayanak')
  ) {
    return getLegalBasisAnswer(lang);
  }

  // 2. Non-financial Nature & Bank Accounts
  if (
    qLower.includes('non-financial') ||
    qLower.includes('hold fund') ||
    qLower.includes('bank account') ||
    qLower.includes('cash') ||
    qLower.includes('مالی') ||
    qLower.includes('حساب') ||
    qLower.includes('اموال') ||
    qLower.includes('بودیجه') ||
    qLower.includes('банк') ||
    qLower.includes('деньги') ||
    qLower.includes('para') ||
    qLower.includes('hesap')
  ) {
    return getNonFinancialAnswer(lang);
  }

  // 3. Grant vs Finance
  if (
    qLower.includes('grant') ||
    qLower.includes('finance') ||
    qLower.includes('distinction') ||
    qLower.includes('difference') ||
    qLower.includes('منحة') ||
    qLower.includes('تمويل') ||
    qLower.includes('گرانټ') ||
    qLower.includes('فاینانس') ||
    qLower.includes('مرسته') ||
    qLower.includes('hibe') ||
    qLower.includes('грант') ||
    qLower.includes('финанс')
  ) {
    return getGrantVsFinanceAnswer(lang);
  }

  // 4. Banking Rules, Compliance, AML/CFT, KYC, Escrow
  if (
    qLower.includes('aml') ||
    qLower.includes('cft') ||
    qLower.includes('kyc') ||
    qLower.includes('compliance') ||
    qLower.includes('escrow') ||
    qLower.includes('banking') ||
    qLower.includes('swift') ||
    qLower.includes('iban') ||
    qLower.includes('ضمان') ||
    qLower.includes('امتثال') ||
    qLower.includes('انطباق') ||
    qLower.includes('اطاعت') ||
    qLower.includes('uyum') ||
    qLower.includes('комплаенс') ||
    qLower.includes('отмывание')
  ) {
    return getBankingComplianceAnswer(lang);
  }

  // 5. Facilitators, Canada VIP, Oman MoHUP
  if (
    qLower.includes('canada') ||
    qLower.includes('vip') ||
    qLower.includes('oman') ||
    qLower.includes('facilitator') ||
    qLower.includes('accreditation') ||
    qLower.includes('ميسر') ||
    qLower.includes('تسهیل') ||
    qLower.includes('اسانګر') ||
    qLower.includes('kolaylaştırıcı') ||
    qLower.includes('фасилитатор')
  ) {
    return getFacilitatorsAnswer(lang);
  }

  // 6. SDGs, UN 2030 Agenda & People-First PPP
  if (
    qLower.includes('sdg') ||
    qLower.includes('people-first') ||
    qLower.includes('unece') ||
    qLower.includes('2030') ||
    qLower.includes('agenda') ||
    qLower.includes('اهداف') ||
    qLower.includes('توسعه') ||
    qLower.includes('устойчивого') ||
    qLower.includes('sürdürülebilir')
  ) {
    return getSDGsAnswer(lang);
  }

  // Default Comprehensive Answer
  return getDefaultOverviewAnswer(lang);
}

function getLegalBasisAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**الأساس القانوني لاتحاد الشراكة بين القطاعين العام والخاص (PPP Union):**\n\n1. **اتفاقية منظمة العمل الدولية رقم 87 (ILO Convention 87):** يتمتع اتحاد الشراكة بين القطاعين العام والخاص بالحماية الكاملة لحرية تكوين الاتحادات والمنظمات المستقلة للدفاع عن المصالح المشتركة وتطوير معايير العمل والمشاريع.\n2. **المادة 12 من ميثاق الحقوق الأساسية للاتحاد الأوروبي (EU Charter Art 12):** يضمن حرية تكوين الجمعيات على كافة المستويات، مما يمنح الاتحاد شخصيته القانونية المستقلة كمنظمة دولية غير حكومية.\n3. **النطاق الإداري:** الاتحاد لا يخضع لأي سلطة تجارية أحادية، ويعمل وفق معايير الحوكمة الدولية لتعزيز بنية الشراكة لصالح أهداف التنمية المستدامة للأمم المتحدة الـ 17.`,
        sourceCitations: ['ILO Convention No. 87 (Freedom of Association)', 'EU Charter of Fundamental Rights Art. 12', 'PPP Union Statutes (Geneva, Switzerland)'],
        suggestedFollowUps: ['ما هو النطاق الإداري غير المالي؟', 'كيف يتم الامتثال للقواعد المصرفية الدولية؟'],
      };
    case 'fa-af':
      return {
        answer: `**اساس حقوقی و ساختار قانونی اتحادیه مشارکت عامه و خصوصی (PPP Union):**\n\n1. **کنوانسیون شماره 87 سازمان بین‌المللی کار (ILO 87):** این اتحادیه بر اساس آزادی تشکل و اتحادیه‌های صنفی و مسلکی بین‌المللی ایجاد شده و استقلال تشکیلاتی آن به رسمیت شناخته شده است.\n2. **ماده 12 منشور حقوق اساسی اتحادیه اروپا (EU Charter Art 12):** این اصل تضمین‌کننده آزادی تشکل و انجمن‌های بین‌المللی مدنی و مسلکی است که مبنای فعالیت‌های اتحادیه در سطح جهانی و مرکز ژنو می‌باشد.\n3. **استقلال و نظارت:** اتحادیه یک نهاد مستقل اداری و تسهیل‌کننده است که هیچ‌گونه فعالیت تجاری یا مالی سودجویانه انجام نمی‌دهد.`,
        sourceCitations: ['ILO Convention No. 87', 'EU Charter of Fundamental Rights Art. 12', 'اسناد اساسی اتحادیه در ژنو'],
        suggestedFollowUps: ['ماهیت غیرمالی و حساب‌های بانکی اتحادیه چیست؟', 'تفاوت بین گرانټ و فاینانس چگونه تعریف شده است؟'],
      };
    case 'ps':
      return {
        answer: `**د PPP اتحادیې قانوني بنسټ او حقوقي حیثیت:**\n\n۱. **د کار د نړیوال سازمان د ۸۷ کنوانسیون (ILO 87):** د ټولنو او اتحادیو د جوړولو بشپړه آزادي تضمینوي، چې پر بنسټ یې دا اتحادیه د یوه خپلواک نړیوال بنسټ په توګه کار کوي.\n۲. **د اروپا د اساسي حقوقو د منشور ۱۲ ماده (EU Charter Art 12):** د مدني او مسلکي ټولنو خپلواکي او قانوني مشروعیت خوندي کوي.\n۳. **هدف او واک:** دا اتحادیه یوازې د عامه او خصوصي مشارکت د معیاري کولو، د شفافیت ټینګښت، او د ملګرو ملتونو د ۱۷ موخو د عملي کولو لپاره تخنیکي او حقوقي اسانتیاوې برابروي.`,
        sourceCitations: ['ILO Convention 87', 'EU Charter Art 12', 'د PPP Union نړیوال اساسنامه'],
        suggestedFollowUps: ['ایا دا اتحادیه بانکي پیسې ساتي؟', 'د ګرانټ او تمویل ترمنځ توپیر څه دی؟'],
      };
    case 'tr':
      return {
        answer: `**PPP Union'ın Yasal Dayanağı ve Hukuki Statüsü:**\n\n1. **ILO 87 Sayılı Sözleşme (Örgütlenme Özgürlüğü):** Sendika ve mesleki birliklerin bağımsızlığını uluslararası düzeyde korur; PPP Union'ın bağımsız uluslararası yapısının omurgasını oluşturur.\n2. **AB Temel Haklar Şartı Madde 12:** Uluslararası düzeyde dernek ve birlik kurma özgürlüğünü tanır.\n3. **İdari Misyon:** PPP Union, ticari bir şirket veya banka değildir. UNECE Standartları ve BM 17 Sürdürülebilir Kalkınma Amacı doğrultusunda kamu ve özel sektör arasında tarafsız idari ve teknik köprü kurar.`,
        sourceCitations: ['ILO Convention No. 87', 'EU Charter Art. 12', 'PPP Union Cenevre Tüzüğü'],
        suggestedFollowUps: ['Mali olmayan yapı ve fon yönetimi nasıldır?', 'Bankacılık ve AML kuralları nasıl uygulanır?'],
      };
    case 'ru':
      return {
        answer: `**Правовая основа Союза ГЧП (PPP Union):**\n\n1. **Конвенция МОТ № 87 (О свободе ассоциации):** Закрепляет автономию международных профессиональных союзов и ассоциаций без вмешательства государственных органов.\n2. **Статья 12 Хартии основных прав Европейского Союза:** Гарантирует свободу ассоциаций на всех уровнях гражданского и экспертного сообщества.\n3. **Статус организации:** Союз ГЧП зарегистрирован в соответствии с международными стандартами в Женеве (Швейцария), является некоммерческой организацией и не выступает финансовым посредником.`,
        sourceCitations: ['Конвенция МОТ № 87', 'Статья 12 Хартии основных прав ЕС', 'Устав Союза ГЧП (Женева)'],
        suggestedFollowUps: ['В чем заключается нефинансовый статус союза?', 'Каковы правила банковского комплаенса и ПОД/ФТ?'],
      };
    default:
      return {
        answer: `**Legal Foundation of the Public Private Partnership Union (PPP Union):**\n\n1. **ILO Convention No. 87 (Freedom of Association):** Secures the institutional right to organize and operate an autonomous international organizing union without political interference.\n2. **EU Charter of Fundamental Rights Article 12:** Establishes the supreme freedom of association at international, cross-border, and sectoral levels.\n3. **Administrative & Standards Role:** Headquartered in Geneva, Switzerland, the PPP Union operates strictly as an institutional governance, standardization, and knowledge body for the 17 UN Sustainable Development Goals, fully separate from commercial banking operations.`,
        sourceCitations: ['ILO Convention No. 87', 'EU Charter of Fundamental Rights Article 12', 'Geneva Institutional Charter'],
        suggestedFollowUps: ['What is the non-financial mandate of the Union?', 'How are banking compliance and escrow accounts maintained?'],
      };
  }
}

function getNonFinancialAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**الطبيعة غير المالية لاتحاد الشراكة بين القطاعين العام والخاص (Non-Financial Mandate):**\n\n- **عدم حيازة الأموال:** اتحاد الشراكة بين القطاعين العام والخاص لا يمتلك ولا يدير ولا يستلم أي أموال استثمارية أو حسابات بنكية مخصصة لتمويل المشاريع.\n- **الحماية من المخاطر:** تجنباً لتضارب المصالح والمسؤوليات المصرفية، يتم توجيه كافة التدفقات المالية والمصرفية حصرياً عبر البنوك المركزية المعتمدة، البنوك التجارية الدولية المرخصة، وحسابات الضمان المالي المباشرة (Escrow Accounts) تحت إشراف الأطراف السيادية.\n- **الدور المؤسسي:** يقتصر دور الاتحاد على الحوكمة الإدارية، إعداد الدراسات، التحقق من معايير UNECE People-First، واعتماد ميسري المعاملات.`,
        sourceCitations: ['PPP Union Non-Financial Declaration (Art. 4)', 'FATF Guidelines for Independent Technical Bodies', 'UNCTAD Sovereign Debt Governance'],
        suggestedFollowUps: ['ما هو الفرق بين المنحة والتمويل؟', 'ما هي شروط حسابات الضمان (Escrow)؟'],
      };
    case 'fa-af':
      return {
        answer: `**ماهیت غیرمالی و عدم نگهداری وجوه توسط اتحادیه PPP:**\n\n- **عدم مداخله مالی مستقیم:** اتحادیه PPP هیچ‌گونه پول نقد، حساب بانکی تجارتی یا وجوه سرمایه‌گذاری پروژه‌ها را نزد خود نگه نمی‌دارد.\n- **جلوگیری از تضارب منافع:** تمام انتقالات مالی و اعتبارات اسنادی صرفاً از طریق بانک‌های مرکزی، بانک‌های تجارتی دارای مجوز و حساب‌های امانی (Escrow) به نام خود دولت‌ها و شرکت‌های پروژه (SPV) صورت می‌گیرد.\n- **حیطه وظایف:** وظیفه این اتحادیه صرفاً اداری، ساختارسازی حقوقی، نظارت بر استانداردهای UNECE People-First و تضمین همسویی با اهداف 17‌گانه توسعه پایدار ملل متحد است.`,
        sourceCitations: ['ماده 4 اساسنامه غیرمالی اتحادیه', 'رهنمودهای شفافیت بانک جهانی و UNCITRAL'],
        suggestedFollowUps: ['تفاوت بین گرانټ و فاینانس چیست؟', 'قوانین بانکی AML و KYC چگونه تطبیق می‌شود؟'],
      };
    case 'ps':
      return {
        answer: `**د PPP اتحادیې غیر مالي طبیعت او د بودیجې مسایل:**\n\n- **پیسې نه ساتل:** د PPP اتحادیه هیڅ ډول نغدې پیسې، د پروژې بودیجه یا سوداګریز بانکي حسابونه نه اداره کوي.\n- **د روڼتیا ساتنه:** ټول مالي جریانونه په مستقیم ډول د دولتونو، باصلاحیته مرکزي بانکونو، او د باور وړ ایسکرو (Escrow) حسابونو له لارې د پروژې اړوند شرکتونو (SPV) ته لیږدول کیږي.\n- **اصلي دنده:** د اتحادیې رول یوازې تخنیکي، مسلکي مشورې، د پروژو معیاري کول او د ملګرو ملتونو د پایښت لرونکي پرمختګ د موخو څارنه ده.`,
        sourceCitations: ['د اتحادیې د غیر مالي فعالیت اصول', 'د UNCITRAL د مشارکت قوانین'],
        suggestedFollowUps: ['د مرستې (گرانټ) او پور (فاینانس) توپیر څه دی؟', 'د کاناډا او عمان اسانګران څوک دي؟'],
      };
    case 'tr':
      return {
        answer: `**PPP Union'ın Mali Olmayan (Non-Financial) Yapısı:**\n\n- **Fon Tutmama İlkesi:** PPP Union, hiçbir projenin yatırım fonunu, nakit parasını veya banka mevduatını doğrudan tutmaz ve yönetmez.\n- **Çıkar Çatışmasını Önleme:** Tüm finansman akışları, lisanslı ticari bankalar, devlet hazineleri ve doğrudan Özel Amaçlı Şirketler (SPV) adına açılan emanet hesapları (Escrow) üzerinden yürütülür.\n- **İdari Sorumluluk:** Birlik, sadece mevzuat uyumu, UNECE People-First standartları sertifikasyonu ve işlem kolaylaştırıcılarının akreditasyonunu üstlenir.`,
        sourceCitations: ['PPP Union Tüzük Madde 4', 'FATF Teknik Organ Standartları'],
        suggestedFollowUps: ['Hibe ile Finansman arasındaki farklar nelerdir?', 'AML/CFT ve KYC denetimleri nasıl çalışır?'],
      };
    case 'ru':
      return {
        answer: `**Нефинансовый статус Союза ГЧП (Non-Financial Mandate):**\n\n- **Отсутствие финансовых счетов проектов:** Союз ГЧП не аккумулирует, не хранит и не распределяет финансовые инвестиционные средства проектов.\n- **Исключение конфликта интересов:** Все финансовые потоки проходят исключительно через уполномоченные международные банки, центральные банки и целевые эскроу-счета (Escrow Accounts) проектных компаний (SPV).\n- **Функция Союза:** Экспертное, юридическое и нормативное сопровождение, сертификация проектов на соответствие UNECE People-First и Целям ООН.`,
        sourceCitations: ['Декларация о нефинансовом статусе Союза ГЧП', 'Стандарты финансовой прозрачности ОЭСР и ФАТФ'],
        suggestedFollowUps: ['В чем разница между грантом и кредитом?', 'Как осуществляется комплаенс-контроль сделок?'],
      };
    default:
      return {
        answer: `**Non-Financial Nature & Administrative Mandate of the PPP Union:**\n\n- **No Direct Fund Holding:** The PPP Union does not hold, manage, disburse, or custody project capital or sovereign investment funds.\n- **Conflict of Interest Safeguard:** To guarantee institutional neutrality and regulatory compliance, all financial transactions flow strictly through authorized sovereign treasury accounts, accredited international commercial banks, and ring-fenced Escrow accounts held by Special Purpose Vehicles (SPVs).\n- **Administrative Role:** The Union serves exclusively as an organizing, standardizing, and accrediting institution upholding UNECE People-First PPP criteria and the 17 UN SDGs.`,
        sourceCitations: ['PPP Union Non-Financial Governance Protocol', 'UNCITRAL Model Legislative Provisions on PPPs', 'World Bank Group Framework'],
        suggestedFollowUps: ['What is the institutional difference between a Grant and Finance?', 'How do AML/CFT and Escrow rules function in PPP deals?'],
      };
  }
}

function getGrantVsFinanceAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**الفرق المؤسسي والقانوني بين المنحة (Grant) والتمويل (Finance):**\n\n| البند | المنحة (Grant) | التمويل (Finance) |\n| :--- | :--- | :--- |\n| **الاسترداد** | غير قابلة للاسترداد (Non-repayable) | قابلة للسداد الإلزامي مع فوائد أو عوائد |\n| **الهدف** | دعم دراسات الجدوى، الحوكمة، وبناء القدرات الفنية | بناء وتشغيل البنية التحتية الصلبة وتحقيق عائد |\n| **الضمانات** | تقارير إنجاز ومخرجات تنموية شفافة | ضمانات سيادية، أصول المرهونة، وتدفقات نقدية |\n| **الأطراف** | الصناديق المتعددة الأطراف والمنظمات التنموية | البنوك التجارية، صناديق التقاعد، وشركات الـ SPV |`,
        sourceCitations: ['OECD DAC Guidelines on ODA Grants', 'World Bank PPP Reference Guide Version 3.0'],
        suggestedFollowUps: ['كيف يتم إعداد دراسة جدوى قابلة للتمويل المصرفي؟', 'ما هي متطلبات الامتثال المصرفي؟'],
      };
    case 'fa-af':
      return {
        answer: `**تفاوت اساسی میان گرانټ (کمک بلاعوض) و فاینانس (تمویل مالی بازپرداخت‌دار):**\n\n1. **گرانټ (Grant):** وجوه بلاعوضی هستند که برای آماده‌سازی پروژه‌ها، مطالعات امکان‌سنجی حقوقی و تخنیکی و توسعه ظرفیت‌ها داده می‌شود و بازپرداخت نمی‌شوند.\n2. **فاینانس (Finance):** سرمایه‌گذاری یا قرضه ساختارمند با تعهد بازپرداخت از طریق عواید پروژه، تعرفه کاربران یا پرداخت‌های دولت به شرکت SPV.\n3. **تفکیک در PPP Union:** اتحادیه به کشورها کمک می‌کند تا مراحل مطالعاتی اولیه را با گرانټ‌های معتبر پوشش دهند تا پروژه به سطح «Bankable» (قابل تمویل بانکی) برسد.`,
        sourceCitations: ['رهنمود بانک جهانی برای تمویل ساختاری', 'مقررات OECD DAC'],
        suggestedFollowUps: ['قوانین بانکی AML و شناخت مشتری (KYC) چیست؟', 'چگونه مأموریت تسهیل‌کنندگان تعریف می‌شود؟'],
      };
    case 'ps':
      return {
        answer: `**د ګرانټ (وړیا مرستې) او فاینانس (تمویل) ترمنځ بنسټیز توپیر:**\n\n۱. **ګرانټ (Grant):** هغه مالي مرسته ده چې بیرته نه ورکول کیږي او عموماً د پروژې د لومړنیو تخنیکي مطالعاتو او د وړتیا لوړولو لپاره ځانګړې کیږي.\n۲. **فاینانس (Finance):** د پور یا پانګونې جوړښت دی چې حتمي بیرته تادیه کیږي او ګټه لري.\n۳. **د اتحادیې رول:** د پروژې له پیل څخه تر بانکي تصویب پورې د قانوني او فني شفافیت څارنه کوي ترڅو خصوصي پانګه په ډاډه توګه جذب شي.`,
        sourceCitations: ['د نړیوال بانک د PPP معیارونه', 'د UNECE لارښود'],
        suggestedFollowUps: ['د بانکي ایسکرو حسابونه څنګه کار کوي؟', 'د کاناډا او عمان د تسهیل کوونکو پروګرامونه څه دي؟'],
      };
    case 'tr':
      return {
        answer: `**KÖİ Yapılandırmasında Hibe (Grant) ve Finansman (Finance) Ayrımı:**\n\n1. **Hibe (Grant):** Geri ödemesizdir. Fizibilite etütleri, çevresel etki değerlendirmeleri ve kapasite geliştirme için çok taraflı kuruluşlarca sağlanır.\n2. **Finansman (Finance):** Geri ödemeli borç veya özkaynaktır. SPV şirketleri üzerinden ticari bankalar, kalkınma bankaları ve kurumsal yatırımcılar tarafından sağlanır.\n3. **Bankalanabilirlik (Bankability):** PPP Union, projelerin uluslararası bankacılık ve risk kriterlerine uygun şekilde 'bankalanabilir' hale gelmesine rehberlik eder.`,
        sourceCitations: ['Dünya Bankası KÖİ Referans Kılavuzu', 'OECD Kalkınma Yardımı Komitesi İlkeleri'],
        suggestedFollowUps: ['Bankacılık ve AML kuralları nasıl işler?', 'Kanada VIP kolaylaştırıcıları masası ne yapar?'],
      };
    case 'ru':
      return {
        answer: `**Различие между грантом (Grant) и финансированием (Finance) в проектах ГЧП:**\n\n1. **Грант (Grant):** Безвозвратное целевое финансирование, предназначенное для подготовки ТЭО, правовой структуризации и экологического аудита.\n2. **Финансирование (Finance):** Возвратный долговой или долевой капитал с фиксированными обязательствами по доходности и графикам платежей.\n3. **Роль Союза ГЧП:** Обеспечение прозрачности на стадии подготовки, исключающей коррупционные риски и гарантирующей банковскую состоятельность (Bankability).`,
        sourceCitations: ['Руководство Всемирного банка по ГЧП', 'Стандарты ОЭСР DAC'],
        suggestedFollowUps: ['Каковы правила комплаенса и банковского контроля?', 'Кто входит в директорию фасилитаторов?'],
      };
    default:
      return {
        answer: `**Institutional Distinction: Grant vs. Finance in PPP Structuring:**\n\n- **Grant (Non-Repayable):** Capital provided by multilateral facilities, philanthropic trusts, or sovereign development agencies to fund project preparation, independent engineering feasibility, social impact audits, and legal drafting. No debt or interest obligation is created.\n- **Finance (Repayable Debt & Equity):** Capital injected by institutional lenders, syndicated commercial banks, and private sponsors into a Special Purpose Vehicle (SPV) with legally binding debt service schedules secured by project cash flows or availability payments.\n- **Bankability Standard:** The PPP Union assists sovereign units in bridging project preparation (via grants) into investable, bankable asset classes (via structured project finance).`,
        sourceCitations: ['World Bank PPP Reference Guide v3', 'OECD Principles for Public Governance of PPPs', 'UNECE Standard on PPPs in Infrastructure'],
        suggestedFollowUps: ['What are the core AML/CFT and banking compliance rules?', 'How does the Facilitators Directory operate?'],
      };
  }
}

function getBankingComplianceAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**القواعد المصرفية والامتثال المالي لمشاريع الشراكة (Banking Rules & AML/CFT):**\n\n1. **مكافحة غسل الأموال وتمويل الإرهاب (AML/CFT):** تخضع جميع المعاملات لمعايير مجموعة العمل المالي (FATF) والتحقق الإلزامي من المستفيد الحقيقي (Ultimate Beneficial Ownership - UBO).\n2. **إجراءات اعرف عميلك (KYC):** التدقيق الجنائي والمصرفي لكافة الرعاة والمستثمرين وأعضاء الائتلافات الدولية قبل توقيع عقود الامتياز.\n3. **حسابات الضمان (Escrow Accounts):** يتم إيداع مدفوعات المشروع ورسوم الاستخدام في حسابات مصرفية محكمة الشروط، ولا يتم الصرف إلا بشهادة المهندس المستقل (Independent Engineer Certificate).\n4. **الامتثال لـ SWIFT و IBAN:** معالجة الاعتمادات المستندية وحزم التمويل السيادي عبر شبكات مصرفية عالمية معتمدة ومطابقة لضوابط البنوك المركزية.`,
        sourceCitations: ['FATF Guidance on Transparency and Beneficial Ownership', 'Equator Principles for Financial Institutions', 'Basel Committee on Banking Supervision'],
        suggestedFollowUps: ['ما هو دور المهندس المستقل في حسابات الضمان؟', 'كيف يتم تسجيل أعضاء VIP والميسرين؟'],
      };
    case 'fa-af':
      return {
        answer: `**مقررات بانکی، شفافیت مالی و استانداردهای AML/CFT در پروژه‌های PPP:**\n\n1. **مبارزه با پولشویی (AML/CFT):** الزامات سخت‌گیرانه مطابق با استانداردهای کارگروه اقدام مالی (FATF) و تثبیت هویت مالک نفع نهایی (UBO).\n2. **بررسی سوابق (KYC):** احراز هویت دقیق شرکت‌های سرمایه‌گذار و مهندسی پیش از انعقاد هرگونه تفاهم‌نامه یا قرارداد رسمی.\n3. **حساب‌های امانی (Escrow):** وجوه مالی صرفاً در حساب‌های بانکی امانی محافظت‌شده نگهداری شده و با تاییدیه بازرس مستقل فنی (Independent Engineer) آزاد می‌گردد.\n4. **سیستم سوئیفت (SWIFT):** تمام حوالجات و اعتبارات اسنادی طبق پروتکل‌های جهانی بین‌بانکی صورت می‌گیرد.`,
        sourceCitations: ['استانداردهای بین‌المللی FATF', 'اصول اکواتور (Equator Principles)', 'قوانین شفافیت بانکی بازل'],
        suggestedFollowUps: ['اتحادیه چگونه به تسهیل پروژه‌ها کمک می‌کند؟', 'تفاوت بین گرانټ و فاینانس چیست؟'],
      };
    case 'ps':
      return {
        answer: `**بانکي مقررات، د پیسو مینځلو ضد اصول (AML/CFT) او قانوني اطاعت:**\n\n۱. **د FATF معیارونه:** د تروریزم د تمویل او پیسو مینځلو پر وړاندې بشپړ قانوني تضمینونه او د اصلي ګټه اخیستونکي روښانه تثبیت.\n۲. **د مشتری پیژندنه (KYC):** د نړیوالو کنسورشیمونو او پانګوالو بشپړ امنیتي او بانکي سکرینینګ.\n۳. **د امانت (Escrow) حسابونه:** مالي سرچینې په خوندي اماناتي حسابونو کې ایښودل کیږي او د ازاد تفتیش له تایید پرته نه ویشل کیږي.\n۴. **نړیوال بانکي نظم:** ټولې لیږدونې د سوئیفت او باوري مرکزي بانکونو له اصولو سره سمې ترسره کیږي.`,
        sourceCitations: ['د FATF نړیوال لارښود', 'د اکواټور بانکي اصول', 'د بازل د څارنې کمیټه'],
        suggestedFollowUps: ['د کاناډا او عمان ځانګړي استازي څوک دي؟', 'قانوني بنسټ څنګه خوندي کیږي؟'],
      };
    case 'tr':
      return {
        answer: `**KÖİ Projelerinde Bankacılık Kuralları, AML/CFT ve Uyum Esasları:**\n\n1. **Kara Paranın Aklanmasının Önlenmesi (AML/CFT):** FATF tavsiyeleri uyarınca Nihai Gerçek Faydalanıcı (UBO) denetimi zorunludur.\n2. **Müşterini Tanı (KYC):** İhaleye katılan konsorsiyum üyeleri ve fon sağlayıcılar uluslararası yaptırım listeleri taranarak doğrulanır.\n3. **Emanet Hesapları (Escrow):** Proje gelirleri ve kamu katkıları, Bağımsız Mühendis onayı olmaksızın serbest bırakılmayan özel bloke hesaplarda tutulur.\n4. **Uluslararası Bankacılık:** SWIFT, IBAN ve Basel bankacılık standartlarına tam uyum şarttır.`,
        sourceCitations: ['FATF Tavsiyeleri', 'Ekvator Prensipleri', 'Basel Bankacılık Denetim Komitesi'],
        suggestedFollowUps: ['Kanada VIP Masası nasıl çalışır?', 'Hibe ile Finansman ayrımı nedir?'],
      };
    case 'ru':
      return {
        answer: `**Банковские правила, комплаенс и контроль ПОД/ФТ в сделках ГЧП:**\n\n1. **Противодействие отмыванию средств (AML/CFT):** Обязательная проверка по стандартам ФАТФ и установление конечных бенефициарных владельцев (UBO).\n2. **Процедуры KYC:** Тщательная юридическая и финансовая экспертиза участников консорциума и спонсоров проекта.\n3. **Эскроу-счета (Escrow):** Распределение проектных средств осуществляется строго через эскроу-счета при наличии сертификата Независимого инженера.\n4. **Банковские стандарты:** Все транзакции проводятся через аккредитованную сеть SWIFT с соблюдением требований Базельского комитета.`,
        sourceCitations: ['Рекомендации ФАТФ', 'Принципы Экватора', 'Базельские соглашения по банковскому надзору'],
        suggestedFollowUps: ['Как аккредитованы фасилитаторы Канады и Омана?', 'Каковы правовые рамки Конвенции МОТ 87?'],
      };
    default:
      return {
        answer: `**Banking Governance, Compliance & Escrow Standards for PPP Infrastructure:**\n\n1. **AML/CFT Rigor:** Full compliance with the Financial Action Task Force (FATF) 40 Recommendations, including exhaustive Ultimate Beneficial Ownership (UBO) verification.\n2. **Know Your Customer (KYC):** Comprehensive background, politically exposed persons (PEP), and sanctions screening on all concessionaires and institutional sponsors prior to financial close.\n3. **Ring-Fenced Escrow Accounts:** Project disbursements and user tariff receipts are sequestered in tri-partite escrow structures released solely against certified Independent Engineer progress milestones.\n4. **International Settlements:** All project guarantees and letters of credit (LC) operate under ICC UCP 600 and SWIFT regulatory mandates.`,
        sourceCitations: ['FATF Guidance on Transparency and Beneficial Ownership', 'Equator Principles IV', 'ICC Uniform Customs and Practice (UCP 600)'],
        suggestedFollowUps: ['How does the Independent Engineer approve escrow disbursements?', 'How are Canada VIP and Oman Facilitators accredited?'],
      };
  }
}

function getFacilitatorsAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**الميسرون المعتمدون والمكاتب الإقليمية (Canada VIP & Oman Desk):**\n\n- **ميسرو كندا المتميزون (Canada VIP Facilitators):** نخبة من الخبراء والاستشاريين المعتمدين في كندا المتخصصين في هيكلة المشاريع الكبرى وفق نموذج P3 الكندي الرائد عالمياً.\n- **مكتب سلطنة عُمان ووزارة الإسكان (MoHUP):** شراكة استراتيجية لدعم المدن المستقبلية (مثل مدينة السلطان هيثم) وتطبيق قانون الشراكة العُماني (المرسوم السلطاني 52/2019).\n- **دليل الميسرين العالمي:** يضم أكثر من 5,862 ميسراً معتمداً و 354 عضواً من فئة VIP عبر 120 دولة لضمان معايير الحوكمة والنزاهة المؤسسية.`,
        sourceCitations: ['PPP Union Facilitators Directory (Canada VIP Section)', 'Sultanate of Oman MoHUP MoU Protocol', 'Oman Royal Decree 52/2019'],
        suggestedFollowUps: ['كيف يمكن التقدم بطلب اعتماد كميسر؟', 'ما هي معايير مشاريع مدينة السلطان هيثم؟'],
      };
    case 'fa-af':
      return {
        answer: `**دایرکتوری تسهیل‌کنندگان مجاز و دفاتر تخصصی (کانادا VIP و عمان):**\n\n- **تسهیل‌کنندگان ویژه کانادا (Canada VIP):** متخصصان ارشد در حوزه‌های حقوقی، مهندسی و مالی که پروژه‌ها را بر اساس استانداردهای موفق P3 کانادا تنظیم می‌کنند.\n- **میز سلطنت عمان و وزارت مسکن و شهرسازی (MoHUP):** همکاری استراتژیک برای پروژه‌های انکشاف شهری پایدار (از جمله شهر سلطان هیثم) و قانون PPP عمان (فرمان شاهی 52/2019).\n- **شبکه بین‌المللی:** ثبت رسمی بیش از 5,862 تسهیل‌کننده و 354 عضو VIP در سراسر جهان جهت ارتقای استانداردهای بین‌المللی.`,
        sourceCitations: ['فهرست تسهیل‌کنندگان بین‌المللی PPP Union', 'یادداشت تفاهم با MoHUP عمان'],
        suggestedFollowUps: ['چگونه می‌توان عضویت VIP دریافت کرد؟', 'قوانین بانکی حاکم بر تسهیل‌کنندگان چیست؟'],
      };
    case 'ps':
      return {
        answer: `**د تصدیق شویو اسانګرانو شبکه او د کاناډا او عمان څانګې:**\n\n- **د کاناډا VIP اسانګران:** لوړ پوړي ماهرین چې د کاناډا د نړیوال ماډل (Canadian P3) له مخې د عامه او خصوصي مشارکت پروژې تیاروي.\n- **د عمان سلطنت او د MoHUP وزارت څانګه:** د تلپاتې ښارونو د پراختیا لپاره تخنیکي او مسلکي مرسته برابروي (لکه د سلطان هیثم نوی ښار).\n- **د غړو شمېر:** تر ۵,۸۶۲ ډیر تصدیق شوي مسلکي غړي او ۳۵۴ د VIP کټګورۍ متخصصین لري.`,
        sourceCitations: ['د PPP Union د اسانګرانو ډایرکټري', 'د عمان شاهي فرمان ۵۲/۲۰۱۹'],
        suggestedFollowUps: ['د ګډون او غړیتوب شرایط څه دي؟', 'د پروژې سپارلو طریقه څه ده؟'],
      };
    case 'tr':
      return {
        answer: `**Akredite Kolaylaştırıcılar ve Bölgesel Masalar (Kanada VIP & Umman MoHUP):**\n\n- **Kanada VIP Kolaylaştırıcıları:** Küresel standartlarda kabul gören Kanada P3 modelini uygulayan üst düzey akredite danışmanlar ve finansal mimarlar.\n- **Umman Sultanlığı ve MoHUP Masası:** Sultan Haitham Şehri gibi büyük kentsel dönüşüm ve sürdürülebilir altyapı projeleri için 52/2019 sayılı Umman KÖİ Kanunu kapsamında kurumsal destek.\n- **Küresel Ağ:** 120 ülkede 5.862'den fazla akredite kolaylaştırıcı ve 354 VIP üye ile tarafsız danışmanlık ağı.`,
        sourceCitations: ['PPP Union Kolaylaştırıcılar Rehberi (Kanada Bölümü)', 'Umman Kraliyet Kararnamesi 52/2019'],
        suggestedFollowUps: ['Kolaylaştırıcı akreditasyon süreci nasıldır?', 'Finansman ve hibe kuralları nelerdir?'],
      };
    case 'ru':
      return {
        answer: `**Аккредитованные фасилитаторы и региональные бюро (VIP Канада и Оман MoHUP):**\n\n- **VIP-фасилитаторы Канады:** Ведущие международные советники по правовым, финансовым и инжиниринговым аспектам, работающие по стандартам канадской модели P3.\n- **Султанат Оман и MoHUP:** Стратегическое сотрудничество с Министерством жилищного строительства Омана по развитию умных городов (включая Султан Хайтам Сити) на базе Королевского указа 52/2019.\n- **Глобальный реестр:** Более 5,862 аккредитованных специалистов и 354 члена категории VIP в 120 странах.`,
        sourceCitations: ['Реестр фасилитаторов Союза ГЧП (Канада VIP)', 'Меморандум с MoHUP Султаната Оман'],
        suggestedFollowUps: ['Каковы критерии аккредитации фасилитаторов?', 'Как структурируются банковские гарантии?'],
      };
    default:
      return {
        answer: `**Accredited Facilitators Network, Canada VIP & Oman MoHUP Desk:**\n\n- **Canada VIP Facilitators:** Elite transaction advisors, legal counsels, and engineering leaders applying the gold-standard Canadian P3 model across sovereign jurisdictions.\n- **Sultanate of Oman & MoHUP Desk:** Dedicated institutional partnership supporting sustainable urban infrastructure (e.g. Sultan Haitham Future City) under Royal Decree 52/2019.\n- **Global Accreditation:** Over 5,862 verified facilitators and 354 VIP accredited experts operational across 120+ countries, ensuring ethical transaction structuring without commercial bias.`,
        sourceCitations: ['PPP Union Facilitator Accreditation Standard v4', 'Sultanate of Oman MoHUP Protocol', 'Canada P3 Institutional Framework'],
        suggestedFollowUps: ['How can an expert apply for VIP Facilitator status?', 'What are the required banking compliance documents?'],
      };
  }
}

function getSDGsAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**مواءمة الشراكة بين القطاعين العام والخاص مع أهداف التنمية المستدامة الـ 17:**\n\n- **أجندة الأمم المتحدة 2030:** اعتمدتها 193 دولة عضواً في الأمم المتحدة لإنهاء الفقر وتعزيز الازدهار وحماية الكوكب.\n- **معايير UNECE People-First:** لا يُعتبر أي مشروع مؤهلاً لدى اتحاد الشراكة ما لم يحقق المعايير الخمسة الرئيسية: الوصول العادل، الاستدامة البيئية، الفعالية الاقتصادية، إشراك أصحاب المصلحة، وقابلية التكرار والمرونة.\n- **التطبيق العملي:** يركز الاتحاد على مياه الشرب النظيفة (الهدف 6)، الطاقة المتجددة (الهدف 7)، البنية التحتية والابتكار (الهدف 9)، والمدن المستدامة (الهدف 11).`,
        sourceCitations: ['UN 2030 Agenda for Sustainable Development', 'UNECE Standard on People-First PPPs for the SDGs'],
        suggestedFollowUps: ['ما هو الأساس القانوني للاتحاد؟', 'كيف يتم الفصل بين المنحة والتمويل؟'],
      };
    case 'fa-af':
      return {
        answer: `**همسویی پروژه‌های PPP با اهداف 17‌گانه توسعه پایدار ملل متحد:**\n\n- **دستور کار 2030 ملل متحد:** تصویب‌شده توسط 193 کشور عضو برای ایجاد جهان عاری از فقر و مقاوم در برابر بحران‌ها.\n- **استاندارد People-First (مردم‌محور):** هر پروژه باید پنج اصل اساسی UNECE شامل دسترسی همگانی، حفظ محیط زیست، کارایی اقتصادی، مشارکت مردم و پایداری بلندمدت را دارا باشد.\n- **حوزه‌های کلیدی:** انرژی پاک (هدف 7)، آب و بهداشت (هدف 6)، زیربناهای تاب‌آور (هدف 9) و شهرهای پایدار (هدف 11).`,
        sourceCitations: ['دستور کار 2030 سازمان ملل متحد', 'استاندارد UNECE People-First PPP'],
        suggestedFollowUps: ['نقش غیرمالی اتحادیه چیست؟', 'قوانین بانکی و ضد پولشویی چگونه است؟'],
      };
    case 'ps':
      return {
        answer: `**د ملګرو ملتونو له ۱۷ موخو سره د PPP پروژو نښلول:**\n\n- **د ملګرو ملتونو د ۲۰۳۰ اجنډا:** د ۱۹۳ غړو هیوادونو له خوا د فقر د ختمولو او تلپاتې پرمختګ لپاره تایید شوې ده.\n- **د UNECE د "لومړی انسان" معیارونه:** پروژې باید د چاپیریال ساتنې، ټولنیز عدالت او اقتصادي موثریت لوړ معیارونه پوره کړي.\n- **مهم هدفونه:** پاکې اوبه او حفظ الصحه (۶مه موخه)، پاکه انرژي (۷مه موخه)، او تلپاتې ښارونه (۱۱مه موخه).`,
        sourceCitations: ['د ملګرو ملتونو د ۲۰۳۰ کال پراختیایي اجنډا', 'د UNECE معیارونه'],
        suggestedFollowUps: ['د مرستې او تمویل ترمنځ توپیر څه دی؟', 'اسانګران څنګه کار کوي؟'],
      };
    case 'tr':
      return {
        answer: `**BM 17 Sürdürülebilir Kalkınma Amacı ve People-First KÖİ Standardı:**\n\n- **BM 2030 Gündemi:** 193 üye devlet tarafından kabul edilmiş, yoksulluğu sona erdirmeyi ve gezegeni korumayı hedefleyen küresel taahhüttür.\n- **UNECE People-First Kriterleri:** Bir projenin onaylanması için beş kritere uyması şarttır: İnsan erişimi, çevresel dayanıklılık, ekonomik verimlilik, paydaş katılımı ve tekrarlanabilirlik.\n- **Öncelikli Hedefler:** Temiz Su (Hedef 6), Erişilebilir ve Temiz Enerji (Hedef 7), Sanayi ve Altyapı (Hedef 9), Sürdürülebilir Şehirler (Hedef 11).`,
        sourceCitations: ['BM 2030 Sürdürülebilir Kalkınma Gündemi', 'UNECE People-First KÖİ Değerlendirme Metodolojisi'],
        suggestedFollowUps: ['Yasal dayanak ve ILO 87 nedir?', 'Bankacılık kuralları nasıl uygulanır?'],
      };
    case 'ru':
      return {
        answer: `**Соответствие проектов ГЧП 17 Целям устойчивого развития ООН (ЦУР):**\n\n- **Повестка ООН на период до 2030 года:** Одобрена 193 государствами-членами ООН как глобальный план мира и процветания.\n- **Стандарты UNECE People-First:** Проекты оцениваются по 5 ключевым критериям: доступность для населения, экологическая устойчивость, экономическая эффективность, участие общественности и тиражируемость.\n- **Ключевые ЦУР:** Чистая вода и санитария (ЦУР 6), Недорогостоящая и чистая энергия (ЦУР 7), Индустриализация и инновации (ЦУР 9), Устойчивые города (ЦУР 11).`,
        sourceCitations: ['Повестка дня в области устойчивого развития на период до 2030 года', 'Методология ЕЭК ООН People-First'],
        suggestedFollowUps: ['В чем заключается правовая основа союза?', 'Как разграничены гранты и возвратное финансирование?'],
      };
    default:
      return {
        answer: `**17 UN Sustainable Development Goals & UNECE People-First PPP Standard:**\n\n- **UN 2030 Agenda:** Unanimously ratified by all 193 United Nations Member States in September 2015 to eradicate poverty, foster resilient economies, and safeguard the biosphere.\n- **UNECE People-First Standard:** Projects structured through the PPP Union must meet the mandatory five People-First outcomes: Access & Equity, Environmental Resilience, Economic Effectiveness, Stakeholder Engagement, and Replicability.\n- **Target Infrastructure:** Clean Water (SDG 6), Affordable Clean Energy (SDG 7), Resilient Industry & Transit (SDG 9), and Sustainable Cities (SDG 11).`,
        sourceCitations: ['United Nations 2030 Agenda for Sustainable Development', 'UNECE People-First PPP Evaluation Methodology'],
        suggestedFollowUps: ['What is the legal basis under ILO Convention 87?', 'What is the non-financial mandate of the Union?'],
      };
  }
}

function getDefaultOverviewAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**مرحباً بك في المساعد الذكي لاتحاد الشراكة بين القطاعين العام والخاص (PPP Union Smart Messenger):**\n\n- **الهوية والمهمة:** الاتحاد الدولي الإداري والتنظيمي المكرس لتطوير معايير الشراكة بين القطاعين العام والخاص وفق أهداف التنمية المستدامة الـ 17 للأمم المتحدة ومعايير UNECE People-First.\n- **الأساس القانوني:** مسجل في جنيف، سويسرا وفق اتفاقية منظمة العمل الدولية 87 والمادة 12 من ميثاق الاتحاد الأوروبي.\n- **الالتزام المصرفي:** الاتحاد لا يحوز أموالاً ولا يفتح حسابات مصرفية تجارية، وتتم كافة المعاملات عبر البنوك المرخصة ومطابقة لمعايير الامتثال المصرفي ومكافحة غسل الأموال (AML/CFT/KYC).\n\nيسعدني الإجابة عن أي استفسار حول القوانين الوطنية، الميسرين، دراسات الجدوى، أو برامج الشراكة.`,
        sourceCitations: ['ميثاق جنيف لاتحاد الشراكة', 'معايير UNECE الدولية'],
        suggestedFollowUps: ['ما هو الأساس القانوني للاتحاد؟', 'ما هو الفرق بين المنحة والتمويل؟', 'كيف يتم الامتثال للقواعد المصرفية؟'],
      };
    case 'fa-af':
      return {
        answer: `**به پیام‌رسان هوشمند اتحادیه مشارکت عامه و خصوصی (PPP Union Smart Messenger) خوش آمدید:**\n\n- **رسالت و ماموریت:** ارتقای دانش مسلکی، استانداردسازی پروژه‌ها بر اساس اهداف 17‌گانه توسعه پایدار ملل متحد و رویکرد People-First.\n- **جایگاه قانونی:** فعالیت بین‌المللی بر اساس کنوانسیون 87 سازمان بین‌المللی کار (ILO) و ماده 12 منشور اتحادیه اروپا در ژنو سوئیس.\n- **انضباط بانکی و غیرمالی:** اتحادیه هیچ وجوه مالی یا حساب بانکی را نزد خود نگه نمی‌دارد؛ کلیه تعاملات مالی از طریق سیستم‌های بانکی رسمی، سوئیفت و حساب‌های امانی (Escrow) صورت می‌پذیرد.\n\nلطفاً سوال خود را در رابطه با پروژه‌ها، قوانین ملی، و اعتبارنامه‌های تسهیل‌کنندگان مطرح فرمایید.`,
        sourceCitations: ['اساسنامه بین‌المللی اتحادیه در ژنو', 'راهنمای استانداردهای UNECE'],
        suggestedFollowUps: ['اساس قانونی ILO 87 چیست؟', 'تفاوت بین گرانټ و فاینانس چگونه است؟', 'قوانین بانکی AML/KYC چگونه تطبیق می‌شود؟'],
      };
    case 'ps':
      return {
        answer: `**د PPP اتحادیې سمارټ میسنجر (PPP Union Smart Messenger) ته ښه راغلاست:**\n\n- **هدف او کار:** د ملګرو ملتونو د تلپاتې پرمختګ ۱۷ موخو ته د رسېدو لپاره د عامه او خصوصي مشارکت د پروژو تخنیکي او حقوقي ملاتړ.\n- **قانوني حيثيت:** د کار د نړیوال سازمان (ILO 87) او د اروپا د منشور (۱۲ مادې) له مخې جوړ شوی.\n- **غیر مالي حیثیت:** دا بنسټ پیسې نه ټولوي او نه بانکي حسابونه لري؛ ټول مالي بهیرونه د نړیوالو بانکونو، سوئیفت او باوري ایسکرو حسابونو له لارې خوندي کیږي.\n\nتاسو کولی شئ د ملي قوانینو، اسانګرانو او پروژو په هکله پوښتنې مطرح کړئ.`,
        sourceCitations: ['د PPP Union رسمي تګلاره', 'د ملګرو ملتونو د پایښت اصول'],
        suggestedFollowUps: ['د اتحادیې قانوني بنسټ څه دی؟', 'د وړیا مرستې او تمویل توپیر څه دی؟', 'د ایسکرو بانکي حسابونه څنګه کار کوي؟'],
      };
    case 'tr':
      return {
        answer: `**PPP Union Smart Messenger'a Hoş Geldiniz:**\n\n- **Misyon:** BM 17 Sürdürülebilir Kalkınma Amacı ve UNECE People-First standartları çerçevesinde kamu ve özel sektör arasında bağımsız idari köprü kurmak.\n- **Hukuki Statü:** ILO 87 Sayılı Sözleşme ve AB Şartı Madde 12 kapsamında Cenevre, İsviçre merkezli uluslararası organizasyon.\n- **Mali Olmayan Yapı:** Birlik doğrudan yatırım fonu veya banka hesabı tutmaz; tüm işlemler lisanslı bankalar, Escrow hesapları ve FATF uyumlu AML/CFT protokolleriyle yürütülür.\n\nKÖİ mevzuatları, akredite kolaylaştırıcılar veya proje standartları hakkında her türlü sorunuzu yanıtlamaya hazırım.`,
        sourceCitations: ['PPP Union Cenevre Tüzüğü', 'UNECE KÖİ İlkeleri'],
        suggestedFollowUps: ['Yasal dayanak (ILO 87 & AB Madde 12) nedir?', 'Hibe ile finansman arasındaki farklar nelerdir?', 'Bankacılık ve AML kuralları nasıl çalışır?'],
      };
    case 'ru':
      return {
        answer: `**Добро пожаловать в Интеллектуальный мессенджер Союза ГЧП (PPP Union Smart Messenger):**\n\n- **Миссия:** Международный административный и организационный союз, продвигающий стандарты государственно-частного партнерства в соответствии с 17 Целями ООН и стандартами ЕЭК ООН People-First.\n- **Правовой статус:** Зарегистрирован в Женеве (Швейцария) на основе Конвенции МОТ № 87 и статьи 12 Хартии ЕС.\n- **Банковский комплаенс и нейтралитет:** Союз не хранит средства инвесторов и не открывает коммерческих счетов; все транзакции проводятся через аккредитованные банки, эскроу-счета и протоколы ПОД/ФТ (AML/CFT).\n\nВы можете задать вопрос о национальных законах о ГЧП, аккредитации фасилитаторов или банковских правилах.`,
        sourceCitations: ['Устав Союза ГЧП (Женева)', 'Методология ЕЭК ООН'],
        suggestedFollowUps: ['Какова правовая основа по Конвенции МОТ 87?', 'В чем разница между грантом и финансированием?', 'Как работают эскроу-счета в ГЧП?'],
      };
    default:
      return {
        answer: `**Welcome to the PPP Union Smart Messenger:**\n\n- **Mandate:** The international administrative and organizing union dedicated to advancing Public-Private Partnership knowledge and structuring people-first infrastructure projects aligned with the 17 United Nations Sustainable Development Goals.\n- **Legal Basis:** Established under ILO Convention No. 87 and Article 12 of the EU Charter of Fundamental Rights in Geneva, Switzerland.\n- **Non-Financial Role & Banking Compliance:** The Union does not hold, manage, or disburse cash or bank accounts; all financial transactions operate strictly through accredited commercial banks, sovereign treasuries, and ring-fenced escrow accounts under full FATF AML/CFT compliance.\n\nAsk any question regarding national PPP laws, accredited facilitators (Canada VIP, Oman MoHUP), banking compliance, or the distinction between grants and finance.`,
        sourceCitations: ['PPP Union Geneva Institutional Statutes', 'UNECE People-First PPP Methodology', 'FATF 40 Recommendations'],
        suggestedFollowUps: [
          'What is the legal basis under ILO Convention 87 and EU Charter Art 12?',
          'What is the non-financial mandate and funds policy?',
          'What is the institutional difference between a Grant and Finance?',
        ],
      };
  }
}

function getAbbreviationsDirectoryAnswer(lang: SupportedLanguage): AnswerResponse {
  switch (lang) {
    case 'ar':
      return {
        answer: `**دليل الاختصارات والمصطلحات الدولية للشراكة بين القطاعين العام والخاص (6. International Directory of PPP Abbreviations & Acronyms):**\n\nتم تدوين كافة الاختصارات الدولية لمشاريع الشراكة وفق المعايير الدولية وجدول الشراكة الرسمي المكون من 4 أعمدة:\n\n- **ADP Platform:** منصة شركاء التنمية لآسيا / ADP Capital UK / مجموعة الشركاء للتنمية.\n- **BOT / BOOT:** البناء، التشغيل، ونقل الملكية (Build-Operate-Transfer) / البناء والتملك والتشغيل ونقل الملكية.\n- **VGF:** تمويل الفجوة الاقتصادية (Viability Gap Funding) لدعم مشاريع البنية التحتية.\n- **SPV / OpCo:** شركة ذات غرض خاص (Special Purpose Vehicle) لتأسيس المشروع وحمايته.\n- **ADSCR / DSCR:** نسبة تغطية خدمة الدين السنوية (Annual Debt Service Cover Ratio).\n- **EPC+F:** عقود الهندسة والتوريد والإنشاء مصحوبة بالتمويل.\n- **EPEC / UNECE:** المركز الأوروبي لخبرات الشراكة ولجنة الأمم المتحدة الاقتصادية لأوروبا.\n\nيمكنك الاطلاع على الجدول الرسمي المكون من 4 أعمدة في صفحة الأسئلة الشائعة (FAQ) أو الاستفسار عن أي اختصار هنا مباشرة.`,
        sourceCitations: ['دليل الأمم المتحدة ومصطلحات EPEC', 'قانون الشراكة والجريدة الرسمية للشراكة', 'جدول الاختصارات ذو الأعمدة الأربعة'],
        suggestedFollowUps: ['ما هو تعريف عقد BOT و BOOT؟', 'كيف يعمل تمويل الفجوة VGF؟', 'ما هي وظيفة شركة SPV في المشاريع؟'],
      };
    case 'fa-af':
      return {
        answer: `**فهرست بین‌المللی اختصارات و اصطلاحات مشارکت عامه و خصوصی (PPP Abbreviations & Acronyms):**\n\nتمام مخففات و اصطلاحات بین‌المللی در جدول رسمی ۴ ستونه تدوین شده و در دسترس شماست:\n\n- **ADP Platform:** پلتفرم همکاران انکشافی آسیا / ADP Capital UK / گروه همکاران انکشافی.\n- **BOT / BOOT:** ساخت، بهره‌برداری و انتقال / ساخت، مالکیت، بهره‌برداری و انتقال.\n- **VGF:** وجوه جبران شکاف مالی (Viability Gap Funding) برای پروژه‌های حیاتی عامه.\n- **SPV:** شرکت با هدف ویژه (Special Purpose Vehicle) جهت مدیریت و کاهش ریسک حقوقی پروژه.\n- **ADSCR:** نسبت پوشش خدمات سالانه قرضه.\n- **قانون مشارکت:** مطابق قانون مشارکت عامه و خصوصی افغانستان (شماره ۱۲۲۸، مصوب ۱۵ میزان ۱۳۹۵).\n\nبرای دسترسی به جدول کامل، به بخش FAQ سایت یا سوال مستقیم در این پیام‌رسان مراجعه فرمایید.`,
        sourceCitations: ['قانون مشارکت عامه و خصوصی شماره ۱۲۲۸', 'راهنمای اصطلاحات بین‌المللی UNECE', 'جدول ۴ ستونه رسمی اختصارات'],
        suggestedFollowUps: ['تعریف BOT در قانون ۱۲۲۸ چیست؟', 'شرکت SPV چگونه ثبت و اداره می‌شود؟', 'معیارهای واجد شرایط بودن VGF چیست؟'],
      };
    default:
      return {
        answer: `**6. International Directory of PPP Abbreviations & Acronyms:**\n\nAll official international PPP abbreviations, acronyms, and financial legal terms are codified in the Official 4-Column Statutory Schedule (Columns: Abbreviation | Meaning | Abbreviation | Meaning) available under the FAQ chapter and in this Smart Messenger:\n\n- **ADP Platform:** Asia Development Partners / ADP Capital UK / Aandyal Developments Partners Group / Alnahda Development Projects\n- **ADP-AF:** Afghanistan Development Partners / Alternative Development Program (regulated under Afghan PPP Law No. 1228, enacted October 5, 2016)\n- **BOT / BOOT / DBFOT:** Build-Operate-Transfer / Build-Own-Operate-Transfer / Design-Build-Finance-Operate-Transfer\n- **VGF:** Viability Gap Funding (Capital grant mechanism across 14 infrastructure sectors)\n- **SPV / SPC:** Special Purpose Vehicle / Special Purpose Company for project ring-fencing\n- **ADSCR / DSCR:** Annual Debt Service Cover Ratio / Debt Service Coverage Ratio\n- **EPEC / UNECE:** European PPP Expertise Centre / UN Economic Commission for Europe (People-First PPP standards)\n- **FIDIC:** International Federation of Consulting Engineers (Standard Concession Contracts)\n- **VfM & PSC:** Value for Money assessment & Public Sector Comparator\n\nYou can query any specific acronym right here in the Smart Messenger or review the complete interactive 4-column statutory schedule under the FAQ section.`,
        sourceCitations: ['PPP Statutory Lexicon & 4-Column Schedule', 'Afghan PPP Law No. 1228 (Gazette Oct 2016)', 'UNECE People-First PPP Taxonomy', 'EPEC PPP Glossary'],
        suggestedFollowUps: [
          'What is the difference between BOT and DBFOT?',
          'What is Viability Gap Funding (VGF) and which 14 sectors qualify?',
          'How is an SPV (Special Purpose Vehicle) ring-fenced for lenders?',
        ],
      };
  }
}

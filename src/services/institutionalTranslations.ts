import { LanguageCode } from '../types/language';
import { HomeLegalCharter } from '../types';

export interface InstitutionalTranslations {
  charterTitle: string;
  charterSubtitle: string;
  badge: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  activityCodesLabel: string;
  iloLabel: string;
  euLabel: string;
  unResolutionLabel: string;
  nonFinancialTitle: string;
  nonFinancialSubtitle: string;
  nonFinancialP1: string;
  nonFinancialP2: string;
  tableTitle: string;
  tableSubtitle: string;
  colCategory: string;
  colGrant: string;
  colConcession: string;
  faqTitle: string;
  faqSubtitle: string;
}

export const INSTITUTIONAL_CHARTER_TRANSLATIONS: Record<LanguageCode, HomeLegalCharter> = {
  en: {
    title: 'Constitutional Charter & International Legal Mandate',
    subtitle: 'Activity Codes Ethics (SIC N 10:20), NACE 94.99 & 7020003 • ILO Conv. 87 (1948) • EU Charter Art. 12 (2000) • UN Res. A/RES/70/1 (2015)',
    badge: 'International Activity Codes & UN 2030 Mandate',
    paragraph1:
      'The Union operates under international activity codes Ethics (SIC N 10:20), NACE 94.99, and 7020003, in full conformity with the Freedom of Association and Protection of the Right to Organize Convention (ILO Convention No. 87, 1948 – UN Law) and Article 12 of the Charter of Fundamental Rights of the European Union (2000 Edition – EU Law).',
    paragraph2:
      'These legal instruments formally recognize and authorize the establishment and operation of professional unions, empowering them to organize, skill, mobilize, and support both the private and public sectors for the lawful and transparent achievement of their approved objectives.',
    paragraph3:
      'The Union further aligns its service framework with the United Nations 2030 Agenda, specifically the UN International 17 SDGs Services Support Order, Resolution A/RES/70/1 (2015), which endorses cooperative, cross sectoral, and multinational facilitation mechanisms for advancing sustainable development.',
    paragraph4:
      'In this context, the Union’s mandate is to organize and unite legal firms and professional entities, enabling them to share facilities, expertise, and institutional capacities to support and accelerate the achievement of the UN Sustainable Development Goals worldwide.',
    disclaimer:
      'PPP Union is not a contracting party, not a financier, and not a project participant. It functions strictly as an enabler, principal facilitator, organizer, and regulatory support union for multinational firms and PPP practitioners, ensuring lawful coordination, compliance, and professional collaboration across borders.',
    activityCodes: 'Ethics (SIC N 10:20), NACE 94.99 & 7020003',
    iloLegalBasis: 'ILO Convention No. 87 (1948 – UN Law)',
    euLegalBasis: 'Article 12, EU Charter of Fundamental Rights (2000 Edition)',
    unResolution: 'UN 17 SDGs Support Order, Resolution A/RES/70/1 (2015)',
  },
  fa: {
    title: 'منشور اساسی و صلاحیت قانونی بین‌المللی',
    subtitle: 'کدهای فعالیت بین‌المللی اخلاق (SIC N 10:20)، NACE 94.99 و 7020003 • مقاوله‌نامه ۸۷ سازمان بین‌المللی کار (۱۹۴۸) • ماده ۱۲ منشور حقوق اساسی اتحادیه اروپا (۲۰۰۰) • قطعنامه A/RES/70/1 سازمان ملل (۲۰۱۵)',
    badge: 'کدهای فعالیت بین‌المللی و ماموریت ۲۰۳۰ سازمان ملل',
    paragraph1:
      'اتحادیه تحت کدهای فعالیت بین‌المللی اخلاق (SIC N 10:20)، NACE 94.99 و 7020003، در انطباق کامل با مقاوله‌نامه آزادی تشکل و حمایت از حق تشکل (مقاوله‌نامه شماره ۸۷ سازمان بین‌المللی کار، ۱۹۴۸ – قوانین سازمان ملل) و ماده ۱۲ منشور حقوق بنیادین اتحادیه اروپا (ویرایش ۲۰۰۰ – قوانین اتحادیه اروپا) فعالیت می‌نماید.',
    paragraph2:
      'این اسناد حقوقی رسماً تأسیس و فعالیت اتحادیه‌های تخصصی را به رسمیت شناخته و مجاز می‌دانند و آن‌ها را توانمند می‌سازند تا هر دو بخش خصوصی و دولتی را برای دستیابی قانونی و شفاف به اهداف مصوب خود سازماندهی، مهارت‌افزایی، بسیج و پشتیبانی نمایند.',
    paragraph3:
      'اتحادیه همچنین چارچوب خدماتی خود را با دستور کار ۲۰۳۰ سازمان ملل متحد، به‌ویژه دستور پشتیبانی خدمات ۱۷ هدف توسعه پایدار بین‌المللی سازمان ملل، قطعنامه A/RES/70/1 (۲۰۱۵) همسو می‌سازد؛ قطعنامه‌ای که سازوکارهای تسهیل‌کننده تعاونی، فرابخشی و چندملیتی را برای پیشبرد توسعه پایدار تأیید می‌کند.',
    paragraph4:
      'در این زمینه، مأموریت اتحادیه سازماندهی و اتحاد شرکت‌های حقوقی و نهادهای تخصصی است تا آن‌ها را قادر سازد امکانات، تخصص و ظرفیت‌های نهادی خود را برای حمایت و تسریع در دستیابی به اهداف توسعه پایدار سازمان ملل در سراسر جهان به اشتراک بگذارند.',
    disclaimer:
      'اتحادیه مشارکت عمومی-خصوصی (PPP Union) طرف قرارداد، تأمین‌کننده مالی یا مجری پروژه‌ها نبوده و صرفاً به عنوان تسهیل‌کننده و هماهنگ‌کننده نهادی عمل می‌نماید.',
    activityCodes: 'اخلاق (SIC N 10:20)، NACE 94.99 و 7020003',
    iloLegalBasis: 'مقاوله‌نامه شماره ۸۷ سازمان بین‌المللی کار (۱۹۴۸ – قوانین سازمان ملل)',
    euLegalBasis: 'ماده ۱۲، منشور حقوق بنیادین اتحادیه اروپا (ویرایش ۲۰۰۰)',
    unResolution: 'دستور حمایت از ۱۷ هدف توسعه پایدار، قطعنامه A/RES/70/1 (۲۰۱۵)',
  },
  ar: {
    title: 'الميثاق الدستوري والتفويض القانوني الدولي',
    subtitle: 'رموز النشاط الدولي للأخلاقيات (SIC N 10:20)، NACE 94.99 و7020003 • اتفاقية منظمة العمل الدولية رقم 87 (1948) • المادة 12 من ميثاق الحقوق الأساسية للاتحاد الأوروبي (2000) • قرار الأمم المتحدة A/RES/70/1 (2015)',
    badge: 'رموز النشاط الدولي وتفويض الأمم المتحدة 2030',
    paragraph1:
      'يعمل الاتحاد بموجب رموز النشاط الدولي للأخلاقيات (SIC N 10:20)، وNACE 94.99، و7020003، في توافق تام مع اتفاقية الحرية النقابية وحماية حق التنظيم (اتفاقية منظمة العمل الدولية رقم 87، 1948 - قانون الأمم المتحدة) والمادة 12 من ميثاق الحقوق الأساسية للاتحاد الأوروبي (إصدار 2000 - قانون الاتحاد الأوروبي).',
    paragraph2:
      'تعترف هذه الصكوك القانونية رسمياً بإنشاء وتشغيل الاتحادات المهنية وتخولها لتنظيم وتدريب وتعبئة ودعم كل من القطاعين الخاص والعام لتحقيق أهدافها المعتمدة بشكل قانوني وشفاف.',
    paragraph3:
      'علاوة على ذلك، يوفق الاتحاد إطار خدماته مع خطة الأمم المتحدة لعام 2030، وتحديداً أمر دعم خدمات أهداف التنمية المستدامة الـ 17 الدولية للأمم المتحدة، القرار A/RES/70/1 (2015)، الذي يؤيد آليات التيسير التعاونية والقطاعية المتعددة الجنسيات لدفع التنمية المستدامة.',
    paragraph4:
      'وفي هذا السياق، يتمثل تفويض الاتحاد في تنظيم وتوحيد الشركات القانونية والكيانات المهنية لتمكينها من تبادل المرافق والخبرات والقدرات المؤسسية لدعم وتسريع تحقيق أهداف التنمية المستدامة للأمم المتحدة في جميع أنحاء العالم.',
    disclaimer:
      'اتحاد الشراكة بين القطاعين العام والخاص (PPP Union) ليس طرفاً متعاقداً ولا ممولاً للمشاريع، بل يعمل كجهة تيسير وتنظيم مؤسسي دولي.',
    activityCodes: 'رموز الأخلاقيات (SIC N 10:20)، NACE 94.99 و7020003',
    iloLegalBasis: 'اتفاقية منظمة العمل الدولية رقم 87 (1948 - قانون الأمم المتحدة)',
    euLegalBasis: 'المادة 12، ميثاق الحقوق الأساسية للاتحاد الأوروبي (إصدار 2000)',
    unResolution: 'أمر دعم أهداف التنمية المستدامة الـ 17، القرار A/RES/70/1 (2015)',
  },
  tr: {
    title: 'Anayasal Tüzük ve Uluslararası Hukuki Yetki',
    subtitle: 'Uluslararası Etik Faaliyet Kodları (SIC N 10:20), NACE 94.99 ve 7020003 • ILO 87 Sayılı Sözleşme (1948) • AB Temel Haklar Şartı Madde 12 (2000) • BM Kararı A/RES/70/1 (2015)',
    badge: 'Uluslararası Faaliyet Kodları ve BM 2030 Yetkisi',
    paragraph1:
      'Birlik, Uluslararası Faaliyet Kodları Etik (SIC N 10:20), NACE 94.99 ve 7020003 kapsamında; Örgütlenme Özgürlüğü ve Örgütlenme Hakkının Korunması Sözleşmesi (ILO 87 Sayılı Sözleşme, 1948 – BM Hukuku) ve Avrupa Birliği Temel Haklar Şartı Madde 12 (2000 Baskısı – AB Hukuku) ile tam uyum içinde faaliyet göstermektedir.',
    paragraph2:
      'Bu hukuki belgeler, meslek birliklerinin kurulmasını ve işletilmesini resmi olarak tanır ve yetkilendirir; onaylanmış hedeflerine yasal ve şeffaf bir şekilde ulaşmaları için hem özel hem de kamu sektörlerini organize etme, beceri kazandırma, harekete geçirme ve destekleme yetkisi verir.',
    paragraph3:
      'Birlik ayrıca hizmet çerçevesini Birleşmiş Milletler 2030 Gündemiyle, özellikle sürdürülebilir kalkınmayı ilerletmek için işbirlikçi, sektörler arası ve çok uluslu kolaylaştırma mekanizmalarını onaylayan BM Uluslararası 17 SDG Hizmet Destek Emri, A/RES/70/1 (2015) sayılı Kararla uyumlu hale getirmektedir.',
    paragraph4:
      'Bu kapsamda Birliğin görevi, hukuk firmalarını ve profesyonel kuruluşları organize etmek ve birleştirmektir; olanakları, uzmanlığı ve kurumsal kapasiteleri paylaşmalarını sağlayarak dünya çapında BM Sürdürülebilir Kalkınma Amaçlarına ulaşılmasını hızlandırmaktır.',
    disclaimer:
      'PPP Union sözleşme tarafı veya finansör değildir; çok uluslu kurumlar için kolaylaştırıcı ve düzenleyici birlik olarak hizmet verir.',
    activityCodes: 'Etik (SIC N 10:20), NACE 94.99 ve 7020003',
    iloLegalBasis: 'ILO 87 Sayılı Sözleşme (1948 – BM Hukuku)',
    euLegalBasis: 'Madde 12, AB Temel Haklar Şartı (2000 Baskısı)',
    unResolution: 'BM 17 SDG Destek Emri, Karar A/RES/70/1 (2015)',
  },
  fr: {
    title: 'Charte Constitutionnelle et Mandat Juridique International',
    subtitle: 'Codes d\'Activité Éthique (SIC N 10:20), NACE 94.99 & 7020003 • Conv. OIT 87 (1948) • Charte UE Art. 12 (2000) • Résolution ONU A/RES/70/1 (2015)',
    badge: 'Codes d\'Activité Internationaux et Mandat ONU 2030',
    paragraph1:
      'L\'Union opère sous les codes d\'activité internationaux Éthique (SIC N 10:20), NACE 94.99 et 7020003, en pleine conformité avec la Convention sur la liberté syndicale et la protection du droit syndical (Convention OIT n° 87, 1948 – Droit onusien) et l\'article 12 de la Charte des droits fondamentaux de l\'Union européenne (Édition 2000 – Droit européen).',
    paragraph2:
      'Ces instruments juridiques reconnaissent et autorisent formellement la création et le fonctionnement d\'unions professionnelles, leur conférant le pouvoir d\'organiser, former, mobiliser et soutenir les secteurs public et privé pour la réalisation transparente de leurs objectifs approuvés.',
    paragraph3:
      'L\'Union aligne en outre son cadre de services sur l\'Agenda 2030 des Nations Unies, spécifiquement l\'Ordre de soutien aux 17 ODD, Résolution A/RES/70/1 (2015), qui soutient les mécanismes coopératifs et multinationaux d\'accélération du développement durable.',
    paragraph4:
      'Dans ce contexte, le mandat de l\'Union est d\'organiser et d\'unir les cabinets juridiques et les entités professionnelles, leur permettant de partager installations, expertise et capacités institutionnelles pour accélérer la réalisation des Objectifs de Développement Durable.',
    disclaimer:
      'L\'Union PPP n\'est ni partie contractante ni bailleur de fonds ; elle agit en tant qu\'union de facilitation et d\'appui réglementaire.',
    activityCodes: 'Éthique (SIC N 10:20), NACE 94.99 & 7020003',
    iloLegalBasis: 'Convention OIT n° 87 (1948 – Droit de l\'ONU)',
    euLegalBasis: 'Article 12, Charte des droits fondamentaux de l\'UE (2000)',
    unResolution: 'Ordre de soutien aux 17 ODD, Résolution A/RES/70/1 (2015)',
  },
  ru: {
    title: 'Конституционная Хартия и Международно-Правовой Мандат',
    subtitle: 'Международные коды деятельности Этика (SIC N 10:20), NACE 94.99 и 7020003 • Конвенция МОТ № 87 (1948) • Статья 12 Хартии ЕС (2000) • Резолюция ООН A/RES/70/1 (2015)',
    badge: 'Международные коды деятельности и Мандат ООН 2030',
    paragraph1:
      'Союз осуществляет деятельность в соответствии с международными кодами деятельности Этика (SIC N 10:20), NACE 94.99 и 7020003, в полном соответствии с Конвенцией о свободе ассоциации и защите права на организацию (Конвенция МОТ № 87, 1948 г. – право ООН) и Статьей 12 Хартии основных прав Европейского союза (издание 2000 г. – право ЕС).',
    paragraph2:
      'Эти правовые акты официально признают и разрешают создание и деятельность профессиональных союзов, наделяя их полномочиями организовывать, обучать, мобилизовать и поддерживать как частный, так и государственный секторы для законного и прозрачного достижения одобренных целей.',
    paragraph3:
      'Союз также согласует структуру своих услуг с Повесткой дня ООН в области устойчивого развития на период до 2030 года, в частности с Приказом о поддержке услуг по 17 ЦУР, Резолюция A/RES/70/1 (2015 г.), который одобряет совместные многонациональные механизмы содействия устойчивому развитию.',
    paragraph4:
      'В этом контексте мандат Союза заключается в организации и объединении юридических фирм и профессиональных структур для ускорения достижения Целей устойчивого развития ООН во всем мире.',
    disclaimer:
      'Союз ГЧП не является стороной договора или финансистом, выступая в качестве организационного и регуляторного союза.',
    activityCodes: 'Этика (SIC N 10:20), NACE 94.99 и 7020003',
    iloLegalBasis: 'Конвенция МОТ № 87 (1948 г. – Право ООН)',
    euLegalBasis: 'Статья 12, Хартия основных прав ЕС (2000 г.)',
    unResolution: 'Приказ о поддержке 17 ЦУР, Резолюция A/RES/70/1 (2015 г.)',
  },
};

export const SECTION_TRANSLATIONS: Record<LanguageCode, {
  charterBadge: string;
  charterHeader: string;
  charterSubhead: string;
  charterIntro: string;
  quickEditNotice: string;
  modifyDirectlyBtn: string;
  wpAdminBtn: string;
  nonFinancialBadge: string;
  nonFinancialTitle: string;
  nonFinancialSubtitle: string;
  nonFinancialDesc: string;
  cardNoFundsTitle: string;
  cardNoFundsDesc: string;
  cardNoBankTitle: string;
  cardNoBankDesc: string;
  cardNeutralBridgeTitle: string;
  cardNeutralBridgeDesc: string;
  cardFiduciaryShieldTitle: string;
  cardFiduciaryShieldDesc: string;
  tableBadge: string;
  tableTitle: string;
  tableSubtitle: string;
  colDimension: string;
  colGrant: string;
  colConcession: string;
  rowNature: [string, string, string];
  rowRepayment: [string, string, string];
  rowOwnership: [string, string, string];
  rowRisk: [string, string, string];
  rowAccountability: [string, string, string];
  rowRole: [string, string, string];
  sdgAlignmentBadge: string;
  sdgAlignmentTitle: string;
  sdgAlignmentDesc: string;
  boundariesBadge: string;
  boundariesTitle: string;
  boundariesDesc: string;
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
}> = {
  en: {
    charterBadge: 'Official Institutional Charter & Mandate',
    charterHeader: 'Public Private Partnership Union (PPP Union)',
    charterSubhead: 'International Administrative & Organizing Union for PPP and SDG',
    charterIntro: 'The Public Private Partnership Union (PPP Union) is an international administrative and organizing union dedicated to promoting global PPP knowledge and supporting social and economic development through projects aligned with the 17 United Nations Sustainable Development Goals (SDGs).',
    quickEditNotice: 'Official Home Page Text: International Activity Codes & Legal Charter',
    modifyDirectlyBtn: 'Modify Home Text Directly',
    wpAdminBtn: 'WP-Admin Editor',
    nonFinancialBadge: 'Strict Administrative & Fiduciary Separation',
    nonFinancialTitle: 'Non-Financial Nature & Trust Architecture',
    nonFinancialSubtitle: 'The PPP Union operates strictly as an administrative, advisory, and standard-setting union under international conventions. It does not hold, manage, deposit, or disburse investor funds.',
    nonFinancialDesc: 'To preserve complete institutional neutrality and safeguard public interest, the PPP Union maintains strict segregation between administrative facilitation and capital custody.',
    cardNoFundsTitle: 'No Direct Project Funds',
    cardNoFundsDesc: 'The Union never pools, holds, or disburses investment capital or project funds directly.',
    cardNoBankTitle: 'No Commercial Banking',
    cardNoBankDesc: 'All transaction settlements and escrow accounts are handled exclusively by licensed commercial banks.',
    cardNeutralBridgeTitle: 'Neutral Administrative Bridge',
    cardNeutralBridgeDesc: 'Acts strictly as an accredited technical and legal coordinator between governments and private sponsors.',
    cardFiduciaryShieldTitle: 'Fiduciary & Anti-Corruption Shield',
    cardFiduciaryShieldDesc: 'Enforces international AML/CFT and FATF compliance without financial exposure or commingling.',
    tableBadge: 'Strategic Comparison Matrix',
    tableTitle: 'Grant Allocation vs. Infrastructure Concession Financing',
    tableSubtitle: 'Comprehensive analysis of structural, financial, and operational distinctions between non-repayable grants and long-term PPP infrastructure concessions.',
    colDimension: 'Analytical Dimension',
    colGrant: 'Grant Facilitation (Non-Repayable)',
    colConcession: 'Infrastructure Concession Financing (PPP)',
    rowNature: ['Nature of Capital', 'Non-repayable institutional aid or sovereign subsidy provided for technical assistance and pre-feasibility.', 'Long-term private equity and commercial debt syndicated for capital infrastructure development.'],
    rowRepayment: ['Repayment Obligation', 'Zero financial repayment required; subject only to audit compliance and milestones.', 'Strict contractual debt service and equity dividend schedule backed by project cash flows.'],
    rowOwnership: ['Asset Ownership', 'Public sector retains immediate ownership of studies, intellectual deliverables, or assets.', 'SPV holds concession/operating rights; ownership transfers to the State at concession end.'],
    rowRisk: ['Risk Allocation', 'Donor/Grantor bears full financial loss risk without capital recovery.', 'Substantial risk transfer to private partner (design, build, finance, operate, and demand).'],
    rowAccountability: ['Accountability Metric', 'Fulfillment of designated social or humanitarian KPIs and transparent expenditure receipts.', 'Debt Service Coverage Ratio (DSCR), Project IRR, Key Performance Indicators (KPIs).'],
    rowRole: ['PPP Union Role', 'Standardization of technical briefs and oversight of independent preparation facilities.', 'Certification of UNECE People-First standards and facilitation of transparent bidding.'],
    sdgAlignmentBadge: 'Global Mandate Alignment',
    sdgAlignmentTitle: 'Alignment with United Nations 2030 Agenda (Resolution A/RES/70/1)',
    sdgAlignmentDesc: 'Endorsing cooperative, cross-sectoral, and multinational facilitation mechanisms to accelerate the achievement of the 17 Sustainable Development Goals worldwide.',
    boundariesBadge: 'Constitutional Safeguards',
    boundariesTitle: 'Institutional Boundaries & Governance Protocol',
    boundariesDesc: 'The PPP Union operates strictly within international activity codes Ethics (SIC N 10:20), NACE 94.99 and 7020003, maintaining unwavering institutional integrity across all global operations.',
    faqBadge: 'Institutional Guidance',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Clear institutional clarifications regarding legal mandate, financial boundaries, and accredited facilitation.',
  },
  fa: {
    charterBadge: 'منشور رسمی نهادی و صلاحیت قانونی',
    charterHeader: 'اتحادیه مشارکت عمومی و خصوصی (PPP Union)',
    charterSubhead: 'اتحادیه بین‌المللی اداری و سازماندهی برای مشارکت عمومی-خصوصی و اهداف توسعه پایدار',
    charterIntro: 'اتحادیه مشارکت عمومی و خصوصی (PPP Union) یک تشکل بین‌المللی اداری و سازماندهی است که به ترویج دانش جهانی مشارکت عمومی-خصوصی و حمایت از توسعه اقتصادی و اجتماعی از طریق پروژه‌های همسو با ۱۷ هدف توسعه پایدار سازمان ملل متحد (SDGs) اختصاص دارد.',
    quickEditNotice: 'متن رسمی صفحه اصلی: کدهای فعالیت بین‌المللی و منشور قانونی',
    modifyDirectlyBtn: 'ویرایش مستقیم متن صفحه اصلی',
    wpAdminBtn: 'ویرایشگر WP-Admin',
    nonFinancialBadge: 'تفکیک دقیق اداری و امانی',
    nonFinancialTitle: 'ماهیت غیرمالی و ساختار اعتماد',
    nonFinancialSubtitle: 'اتحادیه PPP منحصراً به‌عنوان یک اتحادیه اداری، مشاوره‌ای و استانداردگذار تحت کنوانسیون‌های بین‌المللی فعالیت می‌کند و هیچ‌گونه وجوه سرمایه‌گذاران را نگهداری یا مدیریت نمی‌کند.',
    nonFinancialDesc: 'برای حفظ بی‌طرفی کامل نهادی و حفاظت از منافع عمومی، اتحادیه PPP تفکیک دقیقی میان تسهیل اداری و نگهداری سرمایه اعمال می‌نماید.',
    cardNoFundsTitle: 'عدم دریافت مستقیم وجوه پروژه',
    cardNoFundsDesc: 'اتحادیه هرگز سرمایه یا وجوه پروژه‌ها را مستقیماً تجمیع، نگهداری یا پرداخت نمی‌کند.',
    cardNoBankTitle: 'عدم فعالیت بانکی تجاری',
    cardNoBankDesc: 'تمامی تسویه‌های مالی و حساب‌های امانی منحصراً توسط بانک‌های تجاری دارای مجوز مدیریت می‌شوند.',
    cardNeutralBridgeTitle: 'پل اداری بی‌طرف',
    cardNeutralBridgeDesc: 'صرفاً به‌عنوان هماهنگ‌کننده فنی و حقوقی معتبر میان دولت‌ها و سرمایه‌گذاران خصوصی عمل می‌کند.',
    cardFiduciaryShieldTitle: 'سپر امانی و ضد فساد',
    cardFiduciaryShieldDesc: 'اجرای استانداردهای بین‌المللی مبارزه با پولشویی و تأمین مالی تروریسم (AML/CFT) و کارگروه ویژه مالی (FATF).',
    tableBadge: 'ماتریس مقایسه راهبردی',
    tableTitle: 'تخصیص کمک‌های بلاعوض در برابر تأمین مالی امتیاز زیرساخت',
    tableSubtitle: 'تحلیل جامع تفاوت‌های ساختاری، مالی و عملیاتی بین کمک‌های بلاعوض و امتیازات بلندمدت زیرساختی مشارکت عمومی-خصوصی.',
    colDimension: 'ابعاد تحلیلی',
    colGrant: 'تسهیل کمک‌های بلاعوض (غیرقابل بازپرداخت)',
    colConcession: 'تأمین مالی امتیاز زیرساخت (PPP)',
    rowNature: ['ماهیت سرمایه', 'کمک نهادی غیرقابل بازپرداخت یا یارانه دولتی برای کمک‌های فنی و امکان‌سنجی اولیه.', 'سرمایه خصوصی بلندمدت و بدهی تجاری تجمیع‌شده برای توسعه زیرساخت‌ها.'],
    rowRepayment: ['تعهد بازپرداخت', 'بدون بازپرداخت مالی؛ مشروط به رعایت الزامات حسابرسی و تحقق مراحل مشخص‌شده.', 'برنامه دقیق بازپرداخت اصل و سود بدهی و سود سهام متکی به درآمدهای نقدی پروژه.'],
    rowOwnership: ['مالکیت دارایی', 'بخش دولتی مالکیت مستقیم مطالعات، دستاوردهای فکری یا دارایی‌ها را حفظ می‌کند.', 'شرکت پروژه (SPV) حقوق بهره‌برداری دارد؛ مالکیت در پایان دوره امتیاز به دولت منتقل می‌شود.'],
    rowRisk: ['تخصیص ریسک', 'اعطاکننده کمک تمام ریسک ضرر مالی را بدون امکان بازگشت سرمایه بر عهده می‌گیرد.', 'انتقال قابل توجه ریسک به شریک خصوصی (طراحی، ساخت، تأمین مالی، بهره‌برداری و تقاضا).'],
    rowAccountability: ['معیار پاسخگویی', 'تحقق شاخص‌های تعیین‌شده اجتماعی یا بشردوستانه و ارائه گزارش‌های شفاف هزینه‌کرد.', 'نسبت پوشش بازپرداخت بدهی (DSCR)، نرخ بازده داخلی پروژه (IRR) و شاخص‌های کلیدی عملکرد.'],
    rowRole: ['نقش اتحادیه PPP', 'استانداردسازی دستورالعمل‌های فنی و نظارت بر آماده‌سازی پروژه‌ها.', 'صدور گواهینامه استانداردهای مردم‌محور UNECE و تسهیل مناقصات شفاف.'],
    sdgAlignmentBadge: 'همسویی با ماموریت جهانی',
    sdgAlignmentTitle: 'همسویی با دستور کار ۲۰۳۰ سازمان ملل متحد (قطعنامه A/RES/70/1)',
    sdgAlignmentDesc: 'تأیید سازوکارهای مشارکتی، فرابخشی و چندملیتی برای تسریع دستیابی به ۱۷ هدف توسعه پایدار در سراسر جهان.',
    boundariesBadge: 'حفاظت‌های قانونی و حکمرانی',
    boundariesTitle: 'مرزهای نهادی و پروتکل حکمرانی',
    boundariesDesc: 'اتحادیه PPP منحصراً در چارچوب کدهای فعالیت بین‌المللی اخلاق (SIC N 10:20)، NACE 94.99 و 7020003 با حفظ شفافیت کامل فعالیت می‌کند.',
    faqBadge: 'راهنمایی‌های نهادی',
    faqTitle: 'پرسش‌های متداول',
    faqSubtitle: 'شفاف‌سازی‌های دقیق حقوقی پیرامون ماموریت، مرزهای مالی و تسهیل‌گری معتبر.',
  },
  ar: {
    charterBadge: 'الميثاق المؤسسي الرسمي والتفويض القانوني',
    charterHeader: 'اتحاد الشراكة بين القطاعين العام والخاص (PPP Union)',
    charterSubhead: 'الاتحاد الدولي الإداري والتنظيمي للشراكة وأهداف التنمية المستدامة',
    charterIntro: 'اتحاد الشراكة بين القطاعين العام والخاص هو اتحاد إداري وتنظيمي دولي مكرس لتعزيز المعرفة العالمية بالشراكة ودعم التنمية الاقتصادية والاجتماعية عبر مشاريع متوافقة مع أهداف التنمية المستدامة الـ 17 للأمم المتحدة.',
    quickEditNotice: 'النص الرسمي للصفحة الرئيسية: رموز النشاط الدولي والميثاق القانوني',
    modifyDirectlyBtn: 'تعديل نص الصفحة الرئيسية مباشرة',
    wpAdminBtn: 'محرر WP-Admin',
    nonFinancialBadge: 'الفصل الإداري والائتماني الصارم',
    nonFinancialTitle: 'الطبيعة غير المالية وهندسة الثقة',
    nonFinancialSubtitle: 'يعمل اتحاد PPP حصرياً كاتحاد إداري واستشاري ومحدد للمعايير بموجب الاتفاقيات الدولية ولا يحتفظ بأموال المستثمرين أو يديرها.',
    nonFinancialDesc: 'للحفاظ على الحياد المؤسسي الكامل وحماية المصلحة العامة، يلتزم اتحاد PPP بالفصل الصارم بين التيسير الإداري وحفظ رؤوس الأموال.',
    cardNoFundsTitle: 'لا أموال مباشرة للمشاريع',
    cardNoFundsDesc: 'لا يقوم الاتحاد إطلاقاً بجمع أو الاحتفاظ بأموال الاستثمار أو مدفوعات المشاريع.',
    cardNoBankTitle: 'لا معاملات مصرفية تجارية',
    cardNoBankDesc: 'تتم جميع التسويات وحسابات الضمان حصرياً عبر البنوك التجارية المرخصة.',
    cardNeutralBridgeTitle: 'جسر إداري محايد',
    cardNeutralBridgeDesc: 'يعمل فقط كمنسق فني وقانوني معتمد بين الحكومات والرعاة من القطاع الخاص.',
    cardFiduciaryShieldTitle: 'درع ائتماني ومكافحة الفساد',
    cardFiduciaryShieldDesc: 'تطبيق بروتوكولات مكافحة غسل الأموال ومعايير مجموعة العمل المالي FATF بدقة متناهية.',
    tableBadge: 'مصفوفة المقارنة الاستراتيجية',
    tableTitle: 'تخصيص المنح مقابل تمويل امتيازات البنية التحتية',
    tableSubtitle: 'تحليل شامل للفروق الهيكلية والمالية والتشغيلية بين المنح غير القابلة للاسترداد وتمويل عقود الامتياز طويلة الأجل.',
    colDimension: 'البعد التحليلي',
    colGrant: 'تيسير المنح (غير قابلة للسداد)',
    colConcession: 'تمويل امتياز البنية التحتية (PPP)',
    rowNature: ['طبيعة رأس المال', 'مساعدات مؤسسية غير قابلة للسداد أو إعانات سيادية للمساعدة الفنية ودراسات الجدوى.', 'حقوق ملكية خاصة طويلة الأجل وديون تجارية مجمعة لتطوير البنية التحتية.'],
    rowRepayment: ['التزام السداد', 'لا يتطلب أي سداد مالي؛ يخضع فقط لتدقيق الامتثال وتحقيق المراحل المحددة.', 'جدول سداد صارم لخدمة الديون وتوزيعات الأرباح مدعوم بالتدفقات النقدية للمشروع.'],
    rowOwnership: ['ملكية الأصول', 'يحتفظ القطاع العام بالملكية الفورية للدراسات والمخرجات الفكرية والأصول.', 'تحتفظ شركة المشروع بحقوق التشغيل؛ وتنتقل الملكية للدولة عند انتهاء الامتياز.'],
    rowRisk: ['توزيع المخاطر', 'يتحمل المانح كامل مخاطر الخسارة المالية دون استرداد لرأس المال.', 'تحويل جوهري للمخاطر إلى الشريك الخاص (التصميم، البناء، التمويل، التشغيل والطلب).'],
    rowAccountability: ['مقياس المساءلة', 'تحقيق مؤشرات الأداء الاجتماعية أو الإنسانية المحددة وتقديم فواتير شفافة.', 'نسبة تغطية خدمة الدين (DSCR)، ومعدل العائد الداخلي (IRR)، ومؤشرات الأداء الرئيسية.'],
    rowRole: ['دور اتحاد PPP', 'توحيد المعايير الفنية والإشراف على تسهيلات إعداد المشاريع المستقلة.', 'اعتماد معايير UNECE المتمحورة حول الإنسان وتيسير المناقصات الشفافة.'],
    sdgAlignmentBadge: 'التوافق مع التفويض الدولي',
    sdgAlignmentTitle: 'التوافق مع خطة الأمم المتحدة 2030 (القرار A/RES/70/1)',
    sdgAlignmentDesc: 'دعم آليات التيسير التعاونية ومتعددة الجنسيات لتسريع تحقيق أهداف التنمية المستدامة الـ 17 في العالم.',
    boundariesBadge: 'الضمانات الدستورية والحوكمة',
    boundariesTitle: 'الحدود المؤسسية وبروتوكول الحوكمة',
    boundariesDesc: 'يعمل اتحاد PPP حصرياً ضمن رموز النشاط الدولي للأخلاقيات مع الحفاظ على النزاهة المؤسسية الكاملة.',
    faqBadge: 'إرشادات مؤسسية',
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'إيضاحات مؤسسية وقانونية واضحة حول التفويض والحدود المالية والتنسيق المعتمد.',
  },
  tr: {
    charterBadge: 'Resmi Kurumsal Tüzük ve Yetki',
    charterHeader: 'Kamu Özel İş Birliği Birliği (PPP Union)',
    charterSubhead: 'KÖİ ve SDG İçin Uluslararası İdari ve Teşkilat Birliği',
    charterIntro: 'Kamu Özel İş Birliği Birliği (PPP Union), küresel KÖİ bilgisini teşvik etmeye ve Birleşmiş Milletler 17 Sürdürülebilir Kalkınma Amacı (SDG) ile uyumlu projeler aracılığıyla sosyal ve ekonomik kalkınmayı desteklemeye adanmış uluslararası idari ve örgütleyici bir birliktir.',
    quickEditNotice: 'Resmi Ana Sayfa Metni: Uluslararası Faaliyet Kodları ve Yasal Tüzük',
    modifyDirectlyBtn: 'Ana Sayfa Metnini Doğrudan Düzenle',
    wpAdminBtn: 'WP-Admin Editörü',
    nonFinancialBadge: 'Kesin İdari ve Emanet Ayrımı',
    nonFinancialTitle: 'Mali Olmayan Yapı ve Güven Mimarisi',
    nonFinancialSubtitle: 'PPP Union, uluslararası sözleşmeler kapsamında kesinlikle idari, danışmanlık ve standart belirleme birliği olarak faaliyet gösterir; yatırımcı fonlarını tutmaz veya yönetmez.',
    nonFinancialDesc: 'Tam kurumsal tarafsızlığı korumak ve kamu yararını gözetmek için PPP Union idari kolaylaştırma ile sermaye emaneti arasında kesin bir ayrım uygular.',
    cardNoFundsTitle: 'Doğrudan Proje Fonu Tutulmaz',
    cardNoFundsDesc: 'Birlik hiçbir zaman yatırım sermayesini veya proje fonlarını doğrudan toplamaz, tutmaz veya dağıtmaz.',
    cardNoBankTitle: 'Ticari Bankacılık Yoktur',
    cardNoBankDesc: 'Tüm mutabakatlar ve emanet hesapları yalnızca lisanslı ticari bankalar tarafından yönetilir.',
    cardNeutralBridgeTitle: 'Tarafsız İdari Köprü',
    cardNeutralBridgeDesc: 'Hükümetler ve özel sektör sponsorları arasında tarafsız akredite teknik ve hukuki koordinatör görevi görür.',
    cardFiduciaryShieldTitle: 'Mali ve Yolsuzlukla Mücadele Kalkanı',
    cardFiduciaryShieldDesc: 'Uluslararası AML/CFT ve FATF uyumluluk protokollerini eksiksiz uygular.',
    tableBadge: 'Stratejik Karşılaştırma Matrisi',
    tableTitle: 'Hibe Tahsisi ve Altyapı İmtiyaz Finansmanı Karşılaştırması',
    tableSubtitle: 'Geri ödemesiz hibeler ile uzun vadeli KÖİ altyapı imtiyazları arasındaki yapısal, mali ve operasyonel ayrımların kapsamlı analizi.',
    colDimension: 'Analitik Boyut',
    colGrant: 'Hibe Kolaylaştırma (Geri Ödemesiz)',
    colConcession: 'Altyapı İmtiyaz Finansmanı (PPP)',
    rowNature: ['Sermayenin Niteliği', 'Teknik yardım ve fizibilite için sağlanan geri ödemesiz kurumsal yardım veya devlet sübvansiyonu.', 'Altyapı geliştirme için sendike edilen uzun vadeli özel sermaye ve ticari borç.'],
    rowRepayment: ['Geri Ödeme Yükümlülüğü', 'Geri ödeme zorunluluğu yoktur; yalnızca denetim uyumuna ve hedeflere tabidir.', 'Proje nakit akışlarıyla desteklenen kesin borç servisi ve özkaynak temettü takvimi.'],
    rowOwnership: ['Varlık Mülkiyeti', 'Kamu sektörü etütlerin ve fikri çıktıların doğrudan mülkiyetini korur.', 'Özel Amaçlı Şirket işletme haklarına sahiptir; mülkiyet imtiyaz bitiminde Devlete devredilir.'],
    rowRisk: ['Risk Dağılımı', 'Hibe veren taraf mali kayıp riskini sermaye geri dönüşü olmaksızın üstlenir.', 'Özel ortağa önemli risk transferi (tasarım, yapım, finansman, işletme ve talep riski).'],
    rowAccountability: ['Hesap Verebilirlik Ölçütü', 'Belirlenen sosyal veya insani hedeflerin yerine getirilmesi ve şeffaf harcama belgeleri.', 'Borç Servisi Karşılama Oranı (DSCR), Proje İç Verim Oranı (IRR), Temel Performans Göstergeleri.'],
    rowRole: ['PPP Union Rolü', 'Teknik şartnamelerin standartlaştırılması ve bağımsız hazırlık süreçlerinin gözetimi.', 'UNECE İnsan Odaklı standartlarının sertifikasyonu ve şeffaf ihale kolaylaştırıcılığı.'],
    sdgAlignmentBadge: 'Küresel Yetki Uyumu',
    sdgAlignmentTitle: 'Birleşmiş Milletler 2030 Gündemiyle Uyum (A/RES/70/1 Kararı)',
    sdgAlignmentDesc: 'Dünya genelinde 17 Sürdürülebilir Kalkınma Amacının gerçekleştirilmesini hızlandırmak için çok uluslu kolaylaştırma mekanizmalarını onaylar.',
    boundariesBadge: 'Anayasal Güvenceler',
    boundariesTitle: 'Kurumsal Sınırlar ve Yönetişim Protokolü',
    boundariesDesc: 'PPP Union, uluslararası etik faaliyet kodları çerçevesinde kurumsal dürüstlük ve tarafsızlıkla çalışır.',
    faqBadge: 'Kurumsal Rehberlik',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'Hukuki yetki, mali sınırlar ve akredite kolaylaştırma hakkında kurumsal açıklamalar.',
  },
  fr: {
    charterBadge: 'Charte Institutionnelle Officielle & Mandat',
    charterHeader: 'Union pour les Partenariats Public-Privé (Union PPP)',
    charterSubhead: 'Union Internationale Administrative et d\'Organisation pour les PPP et les ODD',
    charterIntro: 'L\'Union pour les Partenariats Public-Privé (Union PPP) est une union administrative internationale dédiée à la promotion des connaissances sur les PPP et au soutien du développement durable aligné sur les 17 Objectifs de Développement Durable de l\'ONU.',
    quickEditNotice: 'Texte officiel de la page d\'accueil : Codes d\'activité et charte juridique',
    modifyDirectlyBtn: 'Modifier directement le texte',
    wpAdminBtn: 'Éditeur WP-Admin',
    nonFinancialBadge: 'Séparation Administrative & Fiduciaire Stricte',
    nonFinancialTitle: 'Nature Non Financière & Architecture de Confiance',
    nonFinancialSubtitle: 'L\'Union PPP opère strictement en tant qu\'union administrative et normative sans détenir ni gérer de fonds d\'investisseurs.',
    nonFinancialDesc: 'Pour garantir une neutralité institutionnelle absolue, l\'Union PPP maintient une stricte séparation entre facilitation administrative et détention de capitaux.',
    cardNoFundsTitle: 'Aucun Fonds Direct de Projet',
    cardNoFundsDesc: 'L\'Union ne collecte, ne conserve et ne décaisse jamais de capitaux ou de fonds de projet.',
    cardNoBankTitle: 'Aucune Activité Bancaire',
    cardNoBankDesc: 'Tous les règlements et comptes séquestres sont exclusivement gérés par des banques agréées.',
    cardNeutralBridgeTitle: 'Passerelle Administrative Neutre',
    cardNeutralBridgeDesc: 'Agit strictement comme coordinateur technique et juridique accrédité entre États et investisseurs.',
    cardFiduciaryShieldTitle: 'Bouclier Fiduciaire et Anti-Corruption',
    cardFiduciaryShieldDesc: 'Applique scrupuleusement les normes internationales de conformité LBC/FT et GAFI.',
    tableBadge: 'Matrice Comparative Stratégique',
    tableTitle: 'Subventions non remboursables vs Concessions d\'Infrastructure',
    tableSubtitle: 'Analyse comparative des distinctions structurelles et financières entre subventions et concessions de PPP.',
    colDimension: 'Dimension Analytique',
    colGrant: 'Facilitation de Subventions (Non Remboursable)',
    colConcession: 'Financement de Concession d\'Infrastructure (PPP)',
    rowNature: ['Nature du Capital', 'Aide institutionnelle non remboursable pour assistance technique et études de faisabilité.', 'Capitaux propres privés et dettes commerciales syndiquées pour le développement d\'infrastructures.'],
    rowRepayment: ['Obligation de Remboursement', 'Aucun remboursement financier exigé ; soumis uniquement aux audits de conformité.', 'Service de la dette strict et dividendes contractuels adossés aux flux de trésorerie du projet.'],
    rowOwnership: ['Propriété des Actifs', 'Le secteur public conserve la propriété directe des études et livrables intellectuels.', 'La société de projet détient les droits d\'exploitation ; les actifs reviennent à l\'État au terme du contrat.'],
    rowRisk: ['Répartition des Risques', 'Le donateur assume la totalité du risque financier sans recouvrement de capital.', 'Transfert substantiel de risques au partenaire privé (conception, construction, financement, exploitation).'],
    rowAccountability: ['Critère de Redevabilité', 'Atteinte d\'indicateurs sociaux et rapports transparents de dépenses.', 'Ratio de couverture du service de la dette (DSCR), taux de rentabilité interne (TRI) et KPI opérationnels.'],
    rowRole: ['Rôle de l\'Union PPP', 'Standardisation des dossiers techniques et supervision des structures préparatoires.', 'Certification des normes People-First de la CEE-ONU et facilitation d\'appels d\'offres transparents.'],
    sdgAlignmentBadge: 'Alignement Mandat Mondial',
    sdgAlignmentTitle: 'Alignement sur l\'Agenda 2030 des Nations Unies (Résolution A/RES/70/1)',
    sdgAlignmentDesc: 'Adhésion aux mécanismes coopératifs et multinationaux pour accélérer l\'atteinte des 17 ODD.',
    boundariesBadge: 'Garanties Constitutionnelles',
    boundariesTitle: 'Limites Institutionnelles et Protocole de Gouvernance',
    boundariesDesc: 'L\'Union PPP agit dans le respect absolu des codes d\'éthique internationale et de neutralité.',
    faqBadge: 'Directives Institutionnelles',
    faqTitle: 'Foire Aux Questions',
    faqSubtitle: 'Précisions institutionnelles sur le mandat juridique, les limites financières et l\'accréditation.',
  },
  ru: {
    charterBadge: 'Официальная Хартия и Мандат',
    charterHeader: 'Союз Государственно-Частного Партнерства (Союз ГЧП)',
    charterSubhead: 'Международный административный и организационный союз по ГЧП и ЦУР',
    charterIntro: 'Союз государственно-частного партнерства (Союз ГЧП) является международным административным и организационным союзом, содействующим распространению знаний о ГЧП и социально-экономическому развитию в соответствии с 17 Целями устойчивого развития ООН.',
    quickEditNotice: 'Официальный текст главной страницы: Международные коды и правовая хартия',
    modifyDirectlyBtn: 'Редактировать текст главной страницы',
    wpAdminBtn: 'Редактор WP-Admin',
    nonFinancialBadge: 'Строгое разделение административных и трастовых функций',
    nonFinancialTitle: 'Нефинансовая структура и Архитектура доверия',
    nonFinancialSubtitle: 'Союз ГЧП действует исключительно как административный и нормотворческий союз в рамках международных конвенций; он не хранит и не управляет средствами инвесторов.',
    nonFinancialDesc: 'Для обеспечения нейтралитета Союз ГЧП поддерживает строгое разделение между административным содействием и хранением капитала.',
    cardNoFundsTitle: 'Нет прямого владения фондами',
    cardNoFundsDesc: 'Союз никогда не собирает, не держит и не распределяет инвестиционный капитал напрямую.',
    cardNoBankTitle: 'Нет банковских операций',
    cardNoBankDesc: 'Все расчеты и счета эскроу ведутся исключительно лицензированными коммерческими банками.',
    cardNeutralBridgeTitle: 'Нейтральный административный мост',
    cardNeutralBridgeDesc: 'Выступает исключительно как аккредитованный координатор между правительствами и инвесторами.',
    cardFiduciaryShieldTitle: 'Щит финансового контроля и комплаенс',
    cardFiduciaryShieldDesc: 'Строгое соблюдение стандартов ПОД/ФТ и рекомендаций ФАТФ.',
    tableBadge: 'Стратегическая матрица сравнения',
    tableTitle: 'Безвозмездные гранты в сравнении с концессионным финансированием ГЧП',
    tableSubtitle: 'Сравнительный анализ структурных, финансовых и операционных различий между безвозмездной помощью и долгосрочными концессиями.',
    colDimension: 'Аналитическое измерение',
    colGrant: 'Грантовое содействие (Безвозмездное)',
    colConcession: 'Концессионное финансирование инфраструктуры (ГЧП)',
    rowNature: ['Характер капитала', 'Безвозмездная институциональная помощь или государственная субсидия на ТЭО.', 'Долгосрочный частный акционерный капитал и коммерческий синдицированный долг.'],
    rowRepayment: ['Обязательство по возврату', 'Возврат средств не требуется; контроль целевого использования.', 'Строгий график обслуживания долга и выплаты дивидендов за счет денежных потоков проекта.'],
    rowOwnership: ['Право собственности', 'Государственный сектор сохраняет право собственности на результаты исследований.', 'Специальная проектная компания (SPV) обладает правами концессии; передача государству по завершении.'],
    rowRisk: ['Распределение рисков', 'Донор несет полный риск финансовых потерь без возврата капитала.', 'Существенный перенос рисков на частного партнера (проектирование, строительство, эксплуатация).'],
    rowAccountability: ['Метрика подотчетности', 'Достижение социальных показателей и предоставление прозрачных отчетов о расходах.', 'Коэффициент покрытия выплат по долгу (DSCR), внутренняя норма доходности (IRR), KPI.'],
    rowRole: ['Роль Союза ГЧП', 'Стандартизация технических заданий и надзор за подготовкой проектов.', 'Сертификация по стандартам ЕЭК ООН People-First и проведение прозрачных конкурсов.'],
    sdgAlignmentBadge: 'Соответствие глобальному мандату',
    sdgAlignmentTitle: 'Соответствие Повестке дня ООН до 2030 года (Резолюция A/RES/70/1)',
    sdgAlignmentDesc: 'Поддержка многонациональных механизмов для ускорения достижения 17 Целей устойчивого развития.',
    boundariesBadge: 'Конституционные гарантии',
    boundariesTitle: 'Институциональные границы и протокол управления',
    boundariesDesc: 'Союз ГЧП осуществляет свою деятельность в строгом соответствии с международными кодами этики.',
    faqBadge: 'Официальные разъяснения',
    faqTitle: 'Часто задаваемые вопросы',
    faqSubtitle: 'Официальные юридические разъяснения мандата, финансовых границ и аккредитации.',
  },
};

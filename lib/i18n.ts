export type Locale = "en" | "ar"

export const locales: Locale[] = ["en", "ar"]
export const defaultLocale: Locale = "ar"

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    blog: "Blog",
    contact: "Contact",

    // Hero Section
    heroTitle: "Expert Legal Consultation",
    heroSubtitle: "Professional legal services with integrity and dedication",
    getConsultation: "Get a Consultation Today",

    // About
    aboutTitle: "About Our Firm",
    aboutDescription: "With years of experience in legal practice, we provide trusted guidance and representation.",

    // Services
    servicesTitle: "Our Services",
    familyLaw: "Family Law",
    realEstate: "Real Estate",
    businessLaw: "Business Law",
    criminalDefense: "Criminal Defense",

    // Contact
    contactTitle: "Contact Us",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    sendMessage: "Send Message",

    // Footer
    copyright: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    blog: "المدونة",
    contact: "اتصل بنا",

    // Hero Section
    heroTitle: "استشارات قانونية متخصصة",
    heroSubtitle: "خدمات قانونية مهنية بنزاهة وتفان",
    getConsultation: "احصل على استشارة اليوم",

    // About
    aboutTitle: "عن مكتبنا",
    aboutDescription: "بسنوات من الخبرة في الممارسة القانونية، نقدم إرشادات موثوقة وتمثيل قانوني.",

    // Services
    servicesTitle: "خدماتنا",
    familyLaw: "قانون الأسرة",
    realEstate: "العقارات",
    businessLaw: "القانون التجاري",
    criminalDefense: "الدفاع الجنائي",

    // Contact
    contactTitle: "اتصل بنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",

    // Footer
    copyright: "جميع الحقوق محفوظة.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
  },
}

export function getTranslation(locale: Locale, key: keyof typeof translations.en): string {
  return translations[locale][key] || translations.en[key]
}

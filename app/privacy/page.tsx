"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  FileText,
  Calendar,
  Mail,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const { locale } = useLocale();

  const lastUpdated = "2024-01-01";

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === "ar") {
      return date.toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const sections = [
    {
      icon: Eye,
      title:
        locale === "ar" ? "المعلومات التي نجمعها" : "Information We Collect",
      content:
        locale === "ar"
          ? [
              "نجمع المعلومات التالية عندما تتواصل معنا أو تستخدم خدماتنا:",
              "• المعلومات الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، والعنوان",
              "• معلومات القضية: تفاصيل الاستشارة القانونية أو القضية التي تحتاج المساعدة فيها",
              "• معلومات الاتصال: سجلات المكالمات والرسائل الإلكترونية والمراسلات",
              "• المعلومات التقنية: عنوان IP، نوع المتصفح، ونظام التشغيل عند زيارة موقعنا",
            ]
          : [
              "We collect the following information when you contact us or use our services:",
              "• Personal Information: Name, email address, phone number, and address",
              "• Case Information: Details about your legal consultation or case requiring assistance",
              "• Communication Information: Call logs, emails, and correspondence records",
              "• Technical Information: IP address, browser type, and operating system when visiting our website",
            ],
    },
    {
      icon: Database,
      title:
        locale === "ar" ? "كيف نستخدم معلوماتك" : "How We Use Your Information",
      content:
        locale === "ar"
          ? [
              "نستخدم المعلومات التي نجمعها للأغراض التالية:",
              "• تقديم الخدمات القانونية والاستشارات المطلوبة",
              "• التواصل معك بخصوص قضيتك أو استفساراتك",
              "• تحسين جودة خدماتنا وتطوير خدمات جديدة",
              "• الامتثال للمتطلبات القانونية والتنظيمية",
              "• حماية حقوقنا القانونية ومصالح عملائنا",
            ]
          : [
              "We use the information we collect for the following purposes:",
              "• Providing legal services and required consultations",
              "• Communicating with you regarding your case or inquiries",
              "• Improving the quality of our services and developing new services",
              "• Complying with legal and regulatory requirements",
              "• Protecting our legal rights and clients' interests",
            ],
    },
    {
      icon: Lock,
      title: locale === "ar" ? "حماية معلوماتك" : "Protecting Your Information",
      content:
        locale === "ar"
          ? [
              "نتخذ تدابير أمنية صارمة لحماية معلوماتك الشخصية:",
              "• التشفير: جميع البيانات الحساسة مشفرة أثناء النقل والتخزين",
              "• الوصول المحدود: فقط الموظفون المخولون يمكنهم الوصول لمعلوماتك",
              "• التدريب الأمني: جميع الموظفين مدربون على أفضل ممارسات الأمان",
              "• المراجعة الدورية: نراجع ونحدث إجراءاتنا الأمنية بانتظام",
              "• النسخ الاحتياطي الآمن: نحتفظ بنسخ احتياطية آمنة من جميع البيانات المهمة",
            ]
          : [
              "We take strict security measures to protect your personal information:",
              "• Encryption: All sensitive data is encrypted during transmission and storage",
              "• Limited Access: Only authorized personnel can access your information",
              "• Security Training: All staff are trained on security best practices",
              "• Regular Reviews: We regularly review and update our security procedures",
              "• Secure Backups: We maintain secure backups of all important data",
            ],
    },
    {
      icon: Users,
      title: locale === "ar" ? "مشاركة المعلومات" : "Information Sharing",
      content:
        locale === "ar"
          ? [
              "نحن ملتزمون بسرية معلوماتك ولا نشاركها إلا في الحالات التالية:",
              "• بموافقتك الصريحة والمكتوبة",
              "• عند الضرورة لتقديم الخدمات القانونية المطلوبة",
              "• للامتثال لأمر قضائي أو متطلب قانوني",
              "• لحماية حقوقنا القانونية أو سلامة الآخرين",
              "• مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تقديم خدماتنا",
            ]
          : [
              "We are committed to the confidentiality of your information and only share it in the following cases:",
              "• With your explicit written consent",
              "• When necessary to provide the required legal services",
              "• To comply with a court order or legal requirement",
              "• To protect our legal rights or the safety of others",
              "• With trusted service providers who help us deliver our services",
            ],
    },
    {
      icon: FileText,
      title: locale === "ar" ? "حقوقك" : "Your Rights",
      content:
        locale === "ar"
          ? [
              "لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:",
              "• الحق في الوصول: يمكنك طلب نسخة من المعلومات التي نحتفظ بها عنك",
              "• الحق في التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة",
              "• الحق في الحذف: يمكنك طلب حذف معلوماتك في ظروف معينة",
              "• الحق في التقييد: يمكنك طلب تقييد معالجة معلوماتك",
              "• الحق في النقل: يمكنك طلب نقل معلوماتك إلى مقدم خدمة آخر",
            ]
          : [
              "You have the following rights regarding your personal information:",
              "• Right to Access: You can request a copy of the information we hold about you",
              "• Right to Correction: You can request correction of any inaccurate information",
              "• Right to Deletion: You can request deletion of your information under certain circumstances",
              "• Right to Restriction: You can request restriction of processing your information",
              "• Right to Portability: You can request transfer of your information to another service provider",
            ],
    },
    {
      icon: Calendar,
      title: locale === "ar" ? "الاحتفاظ بالبيانات" : "Data Retention",
      content:
        locale === "ar"
          ? [
              "نحتفظ بمعلوماتك للفترات التالية:",
              "• معلومات العملاء النشطين: طوال فترة تقديم الخدمات القانونية",
              "• سجلات القضايا: لمدة 10 سنوات بعد انتهاء القضية وفقاً للمتطلبات القانونية",
              "• المراسلات: لمدة 7 سنوات للأغراض القانونية والمهنية",
              "• البيانات التقنية: لمدة سنتين لأغراض الأمان وتحسين الخدمات",
              "• بعد انتهاء فترات الاحتفاظ، نقوم بحذف أو إتلاف جميع المعلومات بشكل آمن",
            ]
          : [
              "We retain your information for the following periods:",
              "• Active client information: Throughout the period of providing legal services",
              "• Case records: For 10 years after case completion according to legal requirements",
              "• Correspondence: For 7 years for legal and professional purposes",
              "• Technical data: For 2 years for security and service improvement purposes",
              "• After retention periods end, we securely delete or destroy all information",
            ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section - Dark with grid pattern */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    سياسة <span className="text-accent">الخصوصية</span>
                  </>
                ) : (
                  <>
                    PRIVACY <span className="text-accent">POLICY</span>
                  </>
                )}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-4">
                {locale === "ar"
                  ? "نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية"
                  : "We are committed to protecting your privacy and the security of your personal information"}
              </p>
              <p className="text-muted-foreground/70 text-sm">
                {locale === "ar" ? "آخر تحديث: " : "Last updated: "}
                {formatDate(lastUpdated)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="mb-12 border-gray-100 bg-white shadow-sm">
                <CardContent className="p-8">
                  <p className="text-lg text-[#0a1628] leading-relaxed text-pretty">
                    {locale === "ar"
                      ? "تحدد هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدام خدماتنا القانونية أو زيارة موقعنا الإلكتروني. نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك وفقاً لأعلى المعايير المهنية والقانونية."
                      : "This policy outlines how we collect, use, and protect the personal information you provide when using our legal services or visiting our website. We are committed to protecting your privacy and ensuring the security of your information according to the highest professional and legal standards."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Privacy Sections */}
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center bg-[#0a1628]"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <section.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-[#0a1628] font-serif">
                      {section.title}
                    </h2>
                  </div>
                  <Card className="border-gray-100 bg-white shadow-sm">
                    <CardContent className="p-8">
                      <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {section.content.map((paragraph, paragraphIndex) => (
                          <motion.p
                            key={paragraphIndex}
                            className="text-[#0a1628]/60 leading-relaxed"
                            variants={scaleIn}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="mt-12 border-gray-100 bg-white shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center bg-[#0a1628]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail className="h-6 w-6 text-accent" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-[#0a1628] font-serif">
                      {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                    </h2>
                  </div>
                  <p className="text-[#0a1628] leading-relaxed mb-4">
                    {locale === "ar"
                      ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:"
                      : "If you have any questions about this privacy policy or how we handle your personal information, please contact us:"}
                  </p>
                  <motion.div
                    className="space-y-2 text-[#0a1628]/60"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.p variants={fadeInUp}>
                      <strong>
                        {locale === "ar" ? "البريد الإلكتروني: " : "Email: "}
                      </strong>
                      privacy@firmen-law.ae
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      <strong>
                        {locale === "ar" ? "الهاتف: " : "Phone: "}
                      </strong>
                      <span dir="ltr">+971 50 123 4567</span>
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      <strong>
                        {locale === "ar" ? "العنوان: " : "Address: "}
                      </strong>
                      {locale === "ar"
                        ? "شارع الشيخ زايد، مركز دبي المالي العالمي، دبي، الإمارات العربية المتحدة"
                        : "Sheikh Zayed Road, DIFC, Dubai, United Arab Emirates"}
                    </motion.p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

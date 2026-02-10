"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { FreeConsultationModelButton } from "@/components/free-consultation-model-button";
import { ConsultationModal } from "@/components/consultation-modal";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Users,
      title: locale === "ar" ? "قانون الأسرة" : "Family Law",
      description:
        locale === "ar"
          ? "نقدم استشارات شاملة في جميع قضايا الأسرة بما في ذلك الزواج والطلاق وحضانة الأطفال والنفقة وتقسيم الممتلكات."
          : "We provide comprehensive consultation on all family matters including marriage, divorce, child custody, alimony, and property division.",
      features: [
        locale === "ar" ? "قضايا الطلاق والخلع" : "Divorce and Khula Cases",
        locale === "ar" ? "حضانة الأطفال" : "Child Custody",
        locale === "ar" ? "النفقة والمؤخر" : "Alimony and Deferred Dower",
        locale === "ar" ? "تقسيم الممتلكات" : "Property Division",
      ],
      slug: "family-law",
    },
    {
      icon: Home,
      title: locale === "ar" ? "العقارات" : "Real Estate",
      description:
        locale === "ar"
          ? "خدمات قانونية متكاملة في المعاملات العقارية تشمل البيع والشراء والإيجار والاستثمار العقاري."
          : "Complete legal services in real estate transactions including buying, selling, leasing, and real estate investment.",
      features: [
        locale === "ar" ? "عقود البيع والشراء" : "Sale and Purchase Contracts",
        locale === "ar" ? "عقود الإيجار" : "Lease Agreements",
        locale === "ar" ? "النزاعات العقارية" : "Real Estate Disputes",
        locale === "ar" ? "الاستثمار العقاري" : "Real Estate Investment",
      ],
      slug: "real-estate",
    },
    {
      icon: Briefcase,
      title: locale === "ar" ? "القانون التجاري" : "Business Law",
      description:
        locale === "ar"
          ? "استشارات قانونية شاملة للشركات والمؤسسات التجارية تشمل تأسيس الشركات والعقود التجارية وحل النزاعات."
          : "Comprehensive legal consultation for companies and commercial institutions including company formation and commercial contracts.",
      features: [
        locale === "ar" ? "تأسيس الشركات" : "Company Formation",
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "النزاعات التجارية" : "Commercial Disputes",
        locale === "ar" ? "الامتثال القانوني" : "Legal Compliance",
      ],
      slug: "business-law",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "الدفاع الجنائي" : "Criminal Defense",
      description:
        locale === "ar"
          ? "تمثيل قانوني قوي ومهني في القضايا الجنائية مع التركيز على حماية حقوق المتهمين وضمان العدالة."
          : "Strong and professional legal representation in criminal cases with focus on protecting defendants' rights.",
      features: [
        locale === "ar" ? "الجرائم المالية" : "Financial Crimes",
        locale === "ar" ? "جرائم المرور" : "Traffic Violations",
        locale === "ar" ? "القضايا الجنائية العامة" : "General Criminal Cases",
        locale === "ar" ? "الاستئناف الجنائي" : "Criminal Appeals",
      ],
      slug: "criminal-defense",
    },
    {
      icon: FileText,
      title: locale === "ar" ? "صياغة العقود" : "Contract Drafting",
      description:
        locale === "ar"
          ? "صياغة ومراجعة العقود القانونية بجميع أنواعها مع ضمان حماية مصالح العملاء والامتثال للقوانين."
          : "Drafting and reviewing legal contracts of all types while ensuring protection of clients' interests.",
      features: [
        locale === "ar" ? "العقود التجارية" : "Commercial Contracts",
        locale === "ar" ? "عقود العمل" : "Employment Contracts",
        locale === "ar" ? "اتفاقيات الشراكة" : "Partnership Agreements",
        locale === "ar" ? "عقود الخدمات" : "Service Contracts",
      ],
      slug: "contract-drafting",
    },
    {
      icon: Gavel,
      title: locale === "ar" ? "التقاضي والتحكيم" : "Litigation & Arbitration",
      description:
        locale === "ar"
          ? "تمثيل قانوني متميز أمام المحاكم وهيئات التحكيم مع خبرة واسعة في إدارة القضايا المعقدة."
          : "Distinguished legal representation before courts and arbitration bodies with extensive experience.",
      features: [
        locale === "ar" ? "التقاضي المدني" : "Civil Litigation",
        locale === "ar" ? "التحكيم التجاري" : "Commercial Arbitration",
        locale === "ar" ? "تنفيذ الأحكام" : "Judgment Execution",
        locale === "ar" ? "الطعون والاستئناف" : "Appeals and Challenges",
      ],
      slug: "litigation-arbitration",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: locale === "ar" ? "الاستشارة الأولية" : "Initial Consultation",
      description:
        locale === "ar"
          ? "نبدأ بفهم احتياجاتكم القانونية"
          : "We start by understanding your legal needs",
    },
    {
      step: "02",
      title: locale === "ar" ? "تحليل القضية" : "Case Analysis",
      description:
        locale === "ar"
          ? "دراسة شاملة للوضع القانوني"
          : "Comprehensive study of the legal situation",
    },
    {
      step: "03",
      title: locale === "ar" ? "وضع الاستراتيجية" : "Strategy Development",
      description:
        locale === "ar"
          ? "تطوير خطة عمل قانونية مخصصة"
          : "Developing a customized legal action plan",
    },
    {
      step: "04",
      title: locale === "ar" ? "التنفيذ والمتابعة" : "Implementation",
      description:
        locale === "ar"
          ? "تنفيذ الخطة ومتابعة النتائج"
          : "Implementing the plan and monitoring results",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section - Dark with grid pattern, NO background image */}
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
                  {locale === "ar" ? "خدماتنا القانونية" : "Our Legal Services"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    خدماتنا <span className="text-accent">القانونية</span>
                  </>
                ) : (
                  <>
                    OUR <span className="text-accent">LEGAL</span> SERVICES
                  </>
                )}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {locale === "ar"
                  ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم القانونية"
                  : "We offer a comprehensive range of specialized legal services to meet all your legal needs"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid - Cream Background */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
                {locale === "ar" ? "مجالات تخصصنا" : "OUR PRACTICE AREAS"}
              </h2>
              <p className="text-[#0a1628]/60 text-base max-w-2xl mx-auto">
                {locale === "ar"
                  ? "خدمات قانونية متكاملة تلبي جميع احتياجاتكم"
                  : "Comprehensive legal services to meet all your needs"}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-white border border-gray-100 shadow-sm hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#0a1628] group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#0a1628]/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="p-6 flex-1">
                    <h4 className="text-sm font-medium text-[#0a1628] mb-3">
                      {locale === "ar"
                        ? "الخدمات المشمولة:"
                        : "Services Included:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-[#0a1628]/60"
                        >
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0">
                    <Link href={`/services/${service.slug}`}>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium cursor-pointer tracking-wide uppercase">
                        {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                        <ArrowIcon className="ms-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Dark Background */}
        <section className="py-16 lg:py-24 bg-background grid-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar"
                    ? "منهجية عمل متميزة"
                    : "Distinguished Work Methodology"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                {locale === "ar" ? "كيف نعمل" : "HOW WE WORK"}
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results"}
              </p>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="group p-6 border border-border bg-card/50 hover:border-accent/50 transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 border border-accent/30 text-accent text-xl font-bold mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Accent Background */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Content */}
              <div className="text-center lg:text-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-3">
                  {locale === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
                </h2>
                <p className="text-accent-foreground/80 text-base lg:text-lg max-w-xl">
                  {locale === "ar"
                    ? "تواصل معنا اليوم للحصول على استشارة قانونية مجانية ومناقشة احتياجاتكم"
                    : "Contact us today for a free legal consultation and discuss your needs"}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FreeConsultationModelButton onClick={openModal} />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-medium px-8 cursor-pointer tracking-wide uppercase"
                  asChild
                >
                  <a href="tel:+966501234567">
                    <Phone className="me-2 h-5 w-5" />
                    {locale === "ar" ? "اتصل الآن" : "Call Now"}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

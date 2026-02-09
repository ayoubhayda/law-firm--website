"use client";

import { Button } from "@/components/ui/button";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  ArrowRight,
  ArrowLeft,
  Scale,
  FileText,
  Building,
  Gavel,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Stats data
  const stats = [
    {
      value: "100+",
      labelAr: "قضايا تجارية",
      labelEn: "Business Cases",
      descAr: "تم حلها بنجاح",
      descEn: "Successfully resolved",
    },
    {
      value: "10+",
      labelAr: "سنوات خبرة",
      labelEn: "Years Experience",
      descAr: "في القانون التجاري",
      descEn: "In business law",
    },
    {
      value: "6000+",
      labelAr: "ساعة استشارة",
      labelEn: "Consultation Hours",
      descAr: "تم تقديمها للعملاء",
      descEn: "Delivered to clients",
    },
  ];

  // Service categories for left column
  const serviceCategories = [
    {
      icon: Scale,
      titleAr: "الأعمال التجارية للشركات الناشئة",
      titleEn: "Startup Business Consulting",
    },
    {
      icon: Briefcase,
      titleAr: "التوظيف وقانون العمل",
      titleEn: "Employment & Labor Law",
    },
    {
      icon: FileText,
      titleAr: "صياغة ومراجعة العقود",
      titleEn: "Contract Drafting & Review",
    },
    {
      icon: Building,
      titleAr: "الاندماجات والاستحواذات",
      titleEn: "Mergers & Acquisitions",
    },
    {
      icon: Gavel,
      titleAr: "التقاضي والتحكيم",
      titleEn: "Litigation & Arbitration",
    },
  ];

  return (
    <>
      {/* Section 1: Trusted. Experienced. Strategic. - Cream Background */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight">
              {locale === "ar" ? (
                <>
                  <span className="text-accent italic">موثوق.</span> ذو خبرة.{" "}
                  <span className="text-accent italic">استراتيجي.</span>
                </>
              ) : (
                <>
                  <span className="text-accent italic">TRUSTED.</span>{" "}
                  EXPERIENCED.{" "}
                  <span className="text-accent italic">STRATEGIC.</span>
                </>
              )}
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-border"></div>
              <Scale className="w-5 h-5 text-accent" />
              <div className="h-px w-16 bg-border"></div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              {locale === "ar"
                ? "نحن مستشارون قانونيون متخصصون في دعم الشركات الناشئة والمتوسطة. نقدم حلولاً قانونية مخصصة تناسب احتياجات عملك، مع التركيز على الوضوح والكفاءة والنتائج الملموسة."
                : "We are legal advisors specializing in supporting startups and mid-sized businesses. We provide tailored legal solutions that fit your business needs, focusing on clarity, efficiency, and tangible results."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Comprehensive Corporate Legal Support - Dark Background */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Service Categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar" ? "خدماتنا" : "Our Services"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-8 leading-tight">
                {locale === "ar"
                  ? "دعم قانوني شامل للشركات"
                  : "COMPREHENSIVE CORPORATE LEGAL SUPPORT"}
              </h2>

              {/* Service List */}
              <div className="space-y-4">
                {serviceCategories.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 border border-border/50 hover:border-accent/50 transition-colors duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium text-sm lg:text-base">
                      {locale === "ar" ? service.titleAr : service.titleEn}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide uppercase"
                  >
                    {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
                    <ArrowIcon className="ms-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - On-Demand Legal Partner & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-4">
                {locale === "ar"
                  ? "نعمل كشريكك القانوني عند الطلب"
                  : "WE ACT AS YOUR ON-DEMAND LEGAL PARTNER. OFFERING:"}
              </h3>

              {/* Offering List */}
              <ul className="space-y-3 mb-10 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                  <span className="text-sm lg:text-base">
                    {locale === "ar"
                      ? "خبرة قانونية مرنة - قابلة للتوسع لتلبية احتياجات عملك"
                      : "Flexible legal expertise - scalable to your business needs"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                  <span className="text-sm lg:text-base">
                    {locale === "ar"
                      ? "إجراءات مبسطة - أوقات استجابة أسرع"
                      : "Streamlined processes - faster response times"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                  <span className="text-sm lg:text-base">
                    {locale === "ar"
                      ? "تسعير شفاف - بدون تكاليف مخفية"
                      : "Transparent pricing - no hidden fees"}
                  </span>
                </li>
              </ul>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-foreground text-sm font-medium mb-0.5">
                      {locale === "ar" ? stat.labelAr : stat.labelEn}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {locale === "ar" ? stat.descAr : stat.descEn}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

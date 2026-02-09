"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Scale,
  Shield,
  Users,
  Clock,
  CheckCircle,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Feature cards for "Not Just Legal Advice" section
  const featureCards = [
    {
      icon: Lightbulb,
      titleAr: "تحليل الفجوات القانونية",
      titleEn: "Legal Gap Analysis",
      descAr: "تحديد المخاطر القانونية في عملك",
      descEn: "Identify legal risks in your business",
    },
    {
      icon: Target,
      titleAr: "التخطيط الاستراتيجي",
      titleEn: "Strategic Planning",
      descAr: "حلول قانونية متوافقة مع أهدافك",
      descEn: "Legal solutions aligned with your goals",
    },
    {
      icon: Shield,
      titleAr: "حماية الأصول",
      titleEn: "Asset Protection",
      descAr: "حماية ممتلكاتك واستثماراتك",
      descEn: "Protect your properties and investments",
    },
    {
      icon: FileText,
      titleAr: "الامتثال التنظيمي",
      titleEn: "Regulatory Compliance",
      descAr: "ضمان التوافق مع اللوائح",
      descEn: "Ensure compliance with regulations",
    },
  ];

  // Values for bottom section
  const values = [
    {
      icon: Scale,
      titleAr: "النزاهة",
      titleEn: "Integrity",
      descAr: "الالتزام بأعلى معايير الأخلاق المهنية",
      descEn: "Committed to highest professional ethics",
    },
    {
      icon: Users,
      titleAr: "التركيز على العميل",
      titleEn: "Client Focus",
      descAr: "نضع مصالح عملائنا في المقام الأول",
      descEn: "We put our clients' interests first",
    },
    {
      icon: CheckCircle,
      titleAr: "التميز",
      titleEn: "Excellence",
      descAr: "السعي الدائم لتحقيق أفضل النتائج",
      descEn: "Constant pursuit of best results",
    },
    {
      icon: Clock,
      titleAr: "الاستجابة السريعة",
      titleEn: "Responsiveness",
      descAr: "متاحون دائماً عند الحاجة",
      descEn: "Always available when you need us",
    },
  ];

  return (
    <>
      {/* Section 1: Not Just Legal Advice - Dark Background */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              {locale === "ar" ? (
                <>
                  ليس مجرد استشارة قانونية —{" "}
                  <span className="text-accent italic">استراتيجية أعمال</span>
                </>
              ) : (
                <>
                  NOT JUST LEGAL ADVICE —{" "}
                  <span className="text-accent italic">BUSINESS</span>
                </>
              )}
            </h2>
            {locale !== "ar" && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                STRATEGY WITH{" "}
                <span className="text-accent italic">LEGAL CLARITY</span>
              </h2>
            )}
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mt-6">
              {locale === "ar"
                ? "نحول التحديات القانونية إلى فرص نمو لأعمالكم"
                : "We transform legal challenges into growth opportunities for your business"}
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="group p-6 lg:p-8 border border-border hover:border-accent/50 transition-all duration-300 text-center lg:text-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto lg:mx-0 mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {locale === "ar" ? card.titleAr : card.titleEn}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === "ar" ? card.descAr : card.descEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Business Law Backed by Real-World Expertise - Cream Background */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="/elegant-law-office.webp"
                  alt="Law Office"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay with accent border */}
                <div className="absolute inset-4 border border-accent/30 pointer-events-none"></div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -end-6 lg:-end-8 bg-background p-6 lg:p-8 border border-border"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl lg:text-5xl font-serif font-bold text-accent mb-1">
                  15+
                </div>
                <div className="text-foreground text-sm font-medium">
                  {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar" ? "من نحن" : "About Us"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    قانون الأعمال مدعوم
                    <br />
                    <span className="text-accent italic">بخبرة واقعية</span>
                  </>
                ) : (
                  <>
                    BUSINESS LAW
                    <br />
                    BACKED BY <span className="text-accent italic">REAL-</span>
                    <br />
                    <span className="text-accent italic">WORLD</span> EXPERTISE
                  </>
                )}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed">
                {locale === "ar"
                  ? "فريقنا من المحامين المتخصصين يجمع بين الخبرة القانونية العميقة والفهم العملي لعالم الأعمال. نحن لا نقدم مجرد نصائح قانونية، بل نقدم حلولاً استراتيجية تدعم نمو أعمالكم."
                  : "Our team of specialized lawyers combines deep legal expertise with practical understanding of the business world. We don't just offer legal advice—we provide strategic solutions that support your business growth."}
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.slice(0, 4).map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <value.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground font-medium text-sm">
                        {locale === "ar" ? value.titleAr : value.titleEn}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide uppercase"
                >
                  {locale === "ar" ? "اعرف المزيد عنا" : "Learn More About Us"}
                  <ArrowIcon className="ms-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  ArrowRight,
  ArrowLeft,
  Eye,
  Target,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Services grid data - must match app/services/page.tsx
  const services = [
    {
      icon: Users,
      titleAr: "قانون الأسرة",
      titleEn: "Family Law",
      descAr: "قضايا الزواج والطلاق وحضانة الأطفال والنفقة",
      descEn: "Marriage, divorce, child custody, and alimony cases",
    },
    {
      icon: Home,
      titleAr: "العقارات",
      titleEn: "Real Estate",
      descAr: "المعاملات العقارية والبيع والشراء والإيجار",
      descEn: "Real estate transactions, buying, selling, and leasing",
    },
    {
      icon: Briefcase,
      titleAr: "القانون التجاري",
      titleEn: "Business Law",
      descAr: "تأسيس الشركات والعقود التجارية والامتثال",
      descEn: "Company formation, commercial contracts, and compliance",
    },
    {
      icon: Shield,
      titleAr: "الدفاع الجنائي",
      titleEn: "Criminal Defense",
      descAr: "تمثيل قانوني في القضايا الجنائية وحماية الحقوق",
      descEn: "Legal representation in criminal cases and rights protection",
    },
    {
      icon: FileText,
      titleAr: "صياغة العقود",
      titleEn: "Contract Drafting",
      descAr: "صياغة ومراجعة العقود القانونية بجميع أنواعها",
      descEn: "Drafting and reviewing all types of legal contracts",
    },
    {
      icon: Gavel,
      titleAr: "التقاضي والتحكيم",
      titleEn: "Litigation & Arbitration",
      descAr: "تمثيل قانوني أمام المحاكم وهيئات التحكيم",
      descEn: "Legal representation before courts and arbitration bodies",
    },
  ];

  return (
    <>
      {/* Section 1: Vision and Mission - Premium Beige Background */}
      <section className="py-16 lg:py-24 bg-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Vision Card */}
            <motion.div
              className="bg-white p-8 lg:p-10 border border-[#0a1628]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#0a1628]">
                  {locale === "ar" ? "الرؤية" : "Vision"}
                </h3>
              </div>
              <p className="text-[#0a1628]/80 leading-relaxed">
                {locale === "ar"
                  ? "نسعى لأن نكون المكتب القانوني الرائد في تقديم الخدمات القانونية المتكاملة بأعلى معايير الجودة والاحترافية، مع الالتزام بقيم النزاهة والشفافية."
                  : "We strive to be the leading law firm in providing comprehensive legal services with the highest standards of quality and professionalism, while upholding values of integrity and transparency."}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-white p-8 lg:p-10 border border-[#0a1628]/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#0a1628]">
                  {locale === "ar" ? "الرسالة" : "Mission"}
                </h3>
              </div>
              <p className="text-[#0a1628]/80 leading-relaxed">
                {locale === "ar"
                  ? "تقديم حلول قانونية مبتكرة ومتخصصة تلبي احتياجات عملائنا، مع ضمان حماية حقوقهم ومصالحهم من خلال فريق من المحامين ذوي الخبرة والكفاءة العالية."
                  : "Providing innovative and specialized legal solutions that meet our clients' needs, while ensuring the protection of their rights and interests through a team of highly experienced and competent lawyers."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Services Grid - Dark Background */}
      <section className="py-16 lg:py-24 bg-background grid-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                {locale === "ar" ? "خدماتنا" : "Our Services"}
              </span>
              <div className="h-px w-12 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {locale === "ar" ? "خدمات المكتب" : "Office Services"}
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              {locale === "ar"
                ? "أقدم خدمات قانونية شاملة في دبي والإمارات"
                : "Comprehensive legal services in Dubai and the UAE"}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 lg:p-8 border border-border bg-card/50 hover:border-accent/50 hover:bg-card transition-all duration-300 text-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-5 border border-border group-hover:border-accent/50 flex items-center justify-center transition-colors duration-300">
                  <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-sm lg:text-base font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {locale === "ar" ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground hidden lg:block">
                  {locale === "ar" ? service.descAr : service.descEn}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide"
              >
                {locale === "ar" ? "عرض جميع الخدمات" : "View All Services"}
                <ArrowIcon className="ms-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

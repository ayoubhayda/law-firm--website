"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  Award,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";

export function AboutPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Why choose us points
  const whyUsPoints = [
    {
      number: "1",
      icon: Users,
      titleAr: "العميل أولاً",
      titleEn: "Client First",
      descAr:
        "نضع مصلحة العميل في المقام الأول ونعمل بجد لتحقيق أفضل النتائج الممكنة في كل قضية نتولاها.",
      descEn:
        "We put the client's interest first and work hard to achieve the best possible results in every case we handle.",
    },
    {
      number: "2",
      icon: Award,
      titleAr: "معايير الجودة",
      titleEn: "Quality Standards",
      descAr:
        "نلتزم بأعلى معايير الجودة المهنية والأخلاقية في جميع خدماتنا القانونية.",
      descEn:
        "We adhere to the highest professional and ethical quality standards in all our legal services.",
    },
    {
      number: "3",
      icon: Shield,
      titleAr: "ثقة وخبرة",
      titleEn: "Trust & Experience",
      descAr:
        "سنوات من الخبرة العملية في مختلف المجالات القانونية مع سجل حافل بالنجاحات.",
      descEn:
        "Years of practical experience in various legal fields with a proven track record of success.",
    },
  ];

  // Partner/Client logos (placeholder data)
  const partners = [
    { nameAr: "شركة الخليج", nameEn: "Gulf Corp" },
    { nameAr: "مجموعة الفيصل", nameEn: "Al-Faisal Group" },
    { nameAr: "شركة النور", nameEn: "Al-Noor Co" },
    { nameAr: "مؤسسة البناء", nameEn: "Building Est" },
    { nameAr: "شركة التقنية", nameEn: "Tech Corp" },
    { nameAr: "مجموعة الأمان", nameEn: "Aman Group" },
  ];

  return (
    <>
      {/* Section: Why Choose Us - Premium Beige Background */}
      <section className="py-16 lg:py-24 bg-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
              {locale === "ar" ? "لماذا مكتب فيرمن؟" : "Why Firmen Law Firm?"}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#0a1628]/30"></div>
              <span className="text-[#0a1628]/60 text-sm">
                {locale === "ar"
                  ? "تميزنا يصنع الفارق"
                  : "Our Excellence Makes the Difference"}
              </span>
              <div className="h-px w-16 bg-[#0a1628]/30"></div>
            </div>
          </motion.div>

          {/* Why Us Points */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Number */}
                <div className="text-5xl lg:text-6xl font-serif font-bold text-accent/40 mb-4">
                  {point.number}.
                </div>
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#0a1628] mb-4">
                  {locale === "ar" ? point.titleAr : point.titleEn}
                </h3>
                {/* Description */}
                <p className="text-[#0a1628]/70 leading-relaxed text-sm lg:text-base">
                  {locale === "ar" ? point.descAr : point.descEn}
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
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide"
              >
                {locale === "ar" ? "المزيد عن المكتب" : "More About Us"}
                <ArrowIcon className="ms-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners/Clients Logos Section */}
      <section className="py-8 lg:py-12 bg-[#0a1628] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between gap-6 lg:gap-12 overflow-x-auto scrollbar-hide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 shrink-0 px-4 py-2 border border-border/50 bg-card/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/80 text-sm font-medium whitespace-nowrap">
                  {locale === "ar" ? partner.nameAr : partner.nameEn}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CSS for scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

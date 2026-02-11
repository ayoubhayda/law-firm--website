"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Scale,
  Trophy,
  Users,
  TrendingUp,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ConsultationModal } from "./consultation-modal";
import { getAllArticles } from "@/lib/articles";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} dir="ltr">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function CTASection() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();
  const blogPosts = getAllArticles().slice(0, 3);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return locale === "ar"
      ? date.toLocaleDateString("ar-SA", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
  };

  const stats = [
    {
      icon: Scale,
      value: 15,
      suffix: "+",
      titleAr: "سنوات الخبرة",
      titleEn: "Years of Experience",
      descAr: "خبرة واسعة في القانون الإماراتي",
      descEn: "Extensive expertise in UAE law",
    },
    {
      icon: Trophy,
      value: 500,
      suffix: "+",
      titleAr: "قضية ناجحة",
      titleEn: "Successful Cases",
      descAr: "نتائج مثبتة في مختلف المجالات",
      descEn: "Proven results across all practice areas",
    },
    {
      icon: Users,
      value: 300,
      suffix: "+",
      titleAr: "عميل سعيد",
      titleEn: "Happy Clients",
      descAr: "ثقة عملائنا هي أغلى ما نملك",
      descEn: "Our clients' trust is our greatest asset",
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      titleAr: "نسبة النجاح",
      titleEn: "Success Rate",
      descAr: "التزام بتحقيق أفضل النتائج",
      descEn: "Committed to achieving the best outcomes",
    },
  ];

  return (
    <>
      {/* Achievements & Stats Section - Premium Beige */}
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                {locale === "ar" ? "إنجازاتنا" : "Our Achievements"}
              </span>
              <div className="h-px w-12 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
              {locale === "ar"
                ? "أرقام تتحدث عن نفسها"
                : "Numbers That Speak for Themselves"}
            </h2>
            <p className="text-[#0a1628]/60 max-w-2xl mx-auto text-base lg:text-lg">
              {locale === "ar"
                ? "سجل حافل بالإنجازات والنجاحات في مختلف المجالات القانونية"
                : "A proven track record of achievements and successes across all legal domains"}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white border border-[#0a1628]/10 p-6 lg:p-8 text-center hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Animated Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0a1628] mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold text-[#0a1628] mb-1">
                  {locale === "ar" ? stat.titleAr : stat.titleEn}
                </h3>

                {/* Description */}
                <p className="text-[#0a1628]/50 text-xs sm:text-sm leading-relaxed hidden sm:block">
                  {locale === "ar" ? stat.descAr : stat.descEn}
                </p>

                {/* Accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-background grid-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar" ? "المدونة" : "Blog"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                {locale === "ar" ? "أحدث المقالات" : "Latest Blog Posts"}
              </h2>
              <p className="text-muted-foreground text-base">
                {locale === "ar"
                  ? "آخر الأخبار والمقالات القانونية"
                  : "Latest news and legal articles"}
              </p>
            </div>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide"
              >
                {locale === "ar" ? "عرض جميع المقالات" : "View All Posts"}
                <ArrowIcon className="ms-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group border border-border bg-card/50 overflow-hidden hover:border-accent/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={locale === "ar" ? post.titleAr : post.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {locale === "ar" ? post.titleAr : post.titleEn}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {locale === "ar" ? post.excerptAr : post.excerptEn}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent text-sm font-medium group-hover:underline"
                  >
                    {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                    <ArrowIcon className="ms-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Minimal Premium */}
      <section className="py-16 lg:py-24 bg-premium">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative accent line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-[#0a1628]/20"></div>
              <div className="w-1.5 h-1.5 bg-[#0a1628]/30 rotate-45"></div>
              <div className="h-px w-16 bg-[#0a1628]/20"></div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
              {locale === "ar"
                ? "هل تحتاج استشارة قانونية؟"
                : "Need Legal Consultation?"}
            </h2>

            {/* Description */}
            <p className="text-[#0a1628]/60 text-base lg:text-lg max-w-xl mx-auto mb-10">
              {locale === "ar"
                ? "تواصل معي اليوم للحصول على استشارة قانونية متخصصة"
                : "Contact me today for a specialized legal consultation"}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-[#0a1628] text-white hover:bg-[#0a1628]/90 font-medium px-8 cursor-pointer tracking-wide"
              >
                {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white bg-transparent font-medium px-8 cursor-pointer tracking-wide transition-all duration-300"
                asChild
              >
                <a href="tel:+971501234567">
                  <Phone className="me-2 h-4 w-4" />
                  {locale === "ar" ? "اتصل الآن" : "Call Now"}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

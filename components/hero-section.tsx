"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Scale,
  Shield,
  CheckCircle,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ConsultationModal } from "./consultation-modal";

export function HeroSection() {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-background overflow-hidden grid-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[85vh] py-12 lg:py-0">
          {/* Right Content - Lawyer Portrait with Floating Elements */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Portrait Container */}
            <div className="relative">
              {/* Lawyer Image */}
              <div className="relative w-64 sm:w-80 lg:w-96 xl:w-[420px]">
                <div className="relative overflow-visible">
                  <img
                    src="/professional-lawyer-photo-ltr.png"
                    alt="Lawyer"
                    className="w-full h-auto object-cover hidden ltr:block"
                  />
                  <img
                    src="/professional-lawyer-photo-rtl.png"
                    alt="المحامي"
                    className="w-full h-auto object-cover hidden rtl:block"
                  />
                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background to-transparent"></div>
                </div>
              </div>

              {/* === Floating Elements (Desktop Only) === */}

              {/* 1. Win Rate / Success Card - Top Left */}
              <div className="hidden xl:flex absolute -start-8 ltr:-start-0 rtl:xl:-start-0 top-8 flex-col items-center gap-1.5 px-5 py-4 bg-card/80 backdrop-blur-md border border-border/60 rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/15">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <span className="text-2xl font-bold text-foreground font-serif">
                  95%
                </span>
                <span className="text-[11px] text-muted-foreground tracking-wide">
                  {locale === "ar" ? "نسبة النجاح" : "Success Rate"}
                </span>
              </div>

              {/* 2. Confidentiality Badge - Right Side */}
              <div className="hidden 2xl:flex absolute -end-24 xl:-end-32 rtl:-end-12 rtl:xl:-end-24 top-1/4 items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-md border border-border/60 rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    {locale === "ar" ? "سرية تامة" : "Confidential"}
                  </span>
                  <span className="text-[10px] text-muted-foreground leading-tight max-w-[100px]">
                    {locale === "ar"
                      ? "بياناتك محمية"
                      : "Your data is protected"}
                  </span>
                </div>
              </div>

              {/* 3. Years of Experience Card - Bottom Left */}
              <div className="hidden xl:flex absolute -start-186 xl:-start-24 bottom-28 flex-col items-center gap-1.5 px-5 py-4 bg-card/80 backdrop-blur-md border border-border/60 rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/15">
                  <Scale className="w-4 h-4 text-accent" />
                </div>
                <span className="text-2xl font-bold text-accent font-serif">
                  15+
                </span>
                <span className="text-[11px] text-muted-foreground tracking-wide">
                  {locale === "ar" ? "سنوات خبرة" : "Years Exp."}
                </span>
              </div>

              {/* 4. Consultation Chat Bubble - Bottom Right */}
              <div className="hidden xl:flex absolute -end-8 xl:-end-8 bottom-24 items-center gap-2 px-3.5 py-2.5 bg-accent/90 rounded-lg shadow-lg">
                <MessageSquare className="w-3.5 h-3.5 text-accent-foreground" />
                <span className="text-[11px] font-medium text-accent-foreground whitespace-nowrap">
                  {locale === "ar"
                    ? "استشارة مجانية متاحة"
                    : "Free consultation available"}
                </span>
              </div>

              {/* 5. Cases Resolved - Top Right */}
              <div className="hidden xl:flex absolute -end-0 xl:-end-0 top-0 items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-md border border-border/60 rounded-lg shadow-lg">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                <span className="text-[11px] text-foreground font-medium">
                  {locale === "ar" ? "500+ قضية" : "500+ Cases"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Left Content - Text */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-start"
            initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-accent/30 bg-accent/5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent text-sm tracking-wide">
                {locale === "ar"
                  ? "مكتب محاماة في الإمارات"
                  : "Law Office in the UAE"}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.2] mb-2">
                {locale === "ar" ? (
                  <>
                    خبرة <span className="text-accent">قانونية</span>
                  </>
                ) : (
                  <>
                    <span className="text-accent">Legal</span> Expertise
                  </>
                )}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.2] mb-2">
                {locale === "ar" ? (
                  <>
                    <span className="text-accent">تحمي</span> حقوقك
                  </>
                ) : (
                  <>
                    That <span className="text-accent">Protects</span> Your
                    Rights
                  </>
                )}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {locale === "ar"
                ? "خدمات قانونية شاملة في دبي والإمارات بخبرة تتجاوز 15 عاماً في القانون التجاري والعقاري والمدني."
                : "Comprehensive legal services in Dubai and the UAE with over 15 years of experience in commercial, real estate, and civil law."}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => setIsConsultationOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-6 text-base tracking-wide cursor-pointer"
              >
                {locale === "ar"
                  ? "احجز استشارة مجانية"
                  : "Book Free Consultation"}
                <ArrowIcon className="ms-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium px-8 py-6 text-base tracking-wide cursor-pointer transition-all duration-300"
              >
                <Link href="/about">
                  {locale === "ar" ? "تعرف علينا" : "About Us"}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}

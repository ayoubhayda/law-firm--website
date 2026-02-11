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
    <section className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] bg-background overflow-hidden grid-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>

      {/* ======================= */}
      {/* MOBILE LAYOUT (< sm) */}
      {/* ======================= */}
      <div className="sm:hidden relative h-[calc(100vh-64px)] flex flex-col">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <img
            src="/professional-lawyer-photo-ltr.png"
            alt="Lawyer"
            className="w-full h-full object-cover object-top hidden ltr:block"
          />
          <img
            src="/professional-lawyer-photo-rtl.png"
            alt="المحامي"
            className="w-full h-full object-cover object-top hidden rtl:block"
          />
          {/* Blur + gradient overlay on bottom half */}
          <div
            className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-[2px]"
            style={{
              maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 60%, transparent 100%)",
            }}
          ></div>
          {/* Extra dark gradient at very bottom for readability */}
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        {/* Mobile Content - Overlaid at bottom */}
        <motion.div
          className="relative z-10 mt-auto px-6 pb-7 pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Office label */}
          <motion.p
            className="text-accent/80 text-sm tracking-widest mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {locale === "ar" ? "مكتب المحامي" : "Law Office of"}
          </motion.p>

          {/* Name block */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* First name */}
            <h1
              className={`text-3xl sm:text-4xl leading-tight ${
                locale === "ar"
                  ? "font-bold text-foreground"
                  : "font-cormorant font-light text-foreground/90 tracking-[0.04em] italic"
              }`}
            >
              {locale === "ar" ? "عبدالرحمن" : "Abdulrahman"}
            </h1>
            {/* Family name - calligraphic for AR, cinzel for EN */}
            <p
              className={`leading-[1.1] rtl:mt-0 ltr:mt-3 ${
                locale === "ar"
                  ? "font-calligraphic text-5xl sm:text-6xl font-bold text-accent"
                  : "font-cinzel rtl:text-4xl rtl:sm:text-5xl ltr:text-3xl ltr:sm:text-4xl font-semibold ltr:font-bold text-accent tracking-[0.08em] uppercase"
              }`}
            >
              {locale === "ar" ? "الهرمودي" : "Al-Harmoudi"}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base max-w-sm leading-relaxed mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {locale === "ar"
              ? "محامي مرخص من وزارة العدل وجمعية الإمارات للقانون والمحاماة"
              : "Licensed attorney by the Ministry of Justice and the UAE Law & Advocacy Association"}
          </motion.p>

          {/* License number */}
          <motion.p
            className="text-muted-foreground/60 text-xs tracking-wider mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {locale === "ar" ? "رخصة رقم ١٢٣٤٥٦٧٨٩٠" : "License No. 1234567890"}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              size="lg"
              onClick={() => setIsConsultationOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-6 text-base tracking-wide cursor-pointer w-full sm:w-auto"
            >
              {locale === "ar"
                ? "احجز استشارة مجانية"
                : "Book Free Consultation"}
              <ArrowIcon className="ms-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================ */}
      {/* TABLET LAYOUT (sm → lg) */}
      {/* ================================ */}
      <div className="hidden sm:flex lg:hidden relative h-[calc(100vh-64px)] items-center">
        {/* Background image on end side */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 end-0 w-[55%]">
            <img
              src="/professional-lawyer-photo-ltr.png"
              alt="Lawyer"
              className="w-full h-full object-cover object-top hidden ltr:block"
            />
            <img
              src="/professional-lawyer-photo-rtl.png"
              alt="المحامي"
              className="w-full h-full object-cover object-top hidden rtl:block"
            />
          </div>
          {/* Gradient fade from start side over image */}
          <div className="absolute inset-0 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-background via-background/95 via-45% to-transparent"></div>
          {/* Bottom gradient for clean edge */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 px-8 md:px-12 max-w-[60%]"
          initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Office label */}
          <motion.p
            className="text-accent/80 text-sm tracking-widest mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {locale === "ar" ? "مكتب المحامي" : "Law Office of"}
          </motion.p>

          {/* Name block */}
          <motion.div
            className="mb-5 rtl:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* First name */}
            <h1
              className={`leading-tight ${
                locale === "ar"
                  ? "text-3xl md:text-4xl font-bold text-foreground"
                  : "font-cormorant text-3xl md:text-4xl font-light text-foreground/90 tracking-[0.04em] italic"
              }`}
            >
              {locale === "ar" ? "عبدالرحمن" : "Abdulrahman"}
            </h1>
            {/* Family name */}
            <p
              className={`leading-[1.1] mt-1 ltr:mt-3 ${
                locale === "ar"
                  ? "font-calligraphic text-5xl md:text-6xl font-bold text-accent"
                  : "font-cinzel text-3xl md:text-4xl ltr:text-2xl ltr:md:text-3xl font-semibold text-accent tracking-[0.08em] uppercase"
              }`}
            >
              {locale === "ar" ? "الهرمودي" : "Al-Harmoudi"}
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="w-14 h-px bg-accent/50 mb-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-sm md:text-base max-w-sm leading-relaxed mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {locale === "ar"
              ? "محامي مرخص من وزارة العدل وجمعية الإمارات للقانون والمحاماة"
              : "Licensed attorney by the Ministry of Justice and the UAE Law & Advocacy Association"}
          </motion.p>

          {/* License number */}
          <motion.p
            className="text-muted-foreground/60 text-xs tracking-wider mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {locale === "ar" ? "رخصة رقم ١٢٣٤٥٦٧٨٩٠" : "License No. 1234567890"}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => setIsConsultationOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6 py-5 text-sm md:text-base tracking-wide cursor-pointer"
            >
              {locale === "ar"
                ? "احجز استشارة مجانية"
                : "Book Free Consultation"}
              <ArrowIcon className="ms-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium px-6 py-5 text-sm md:text-base tracking-wide cursor-pointer transition-all duration-300"
            >
              <Link href="/about">
                {locale === "ar" ? "تعرف علينا" : "About Us"}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ======================= */}
      {/* DESKTOP LAYOUT (lg+) */}
      {/* ======================= */}
      <div className="hidden lg:block relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-12 lg:py-0">
          {/* Image Column */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Portrait Container */}
            <div className="relative">
              {/* Lawyer Image */}
              <div className="relative w-80 lg:w-96 xl:w-[420px]">
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

          {/* Text Content Column */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-start"
            initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Office label */}
            <motion.p
              className="text-accent/80 text-sm tracking-widest mb-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === "ar" ? "مكتب المحامي" : "Law Office of"}
            </motion.p>

            {/* Name block */}
            <motion.div
              className="mb-6 rtl:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* First name */}
              <h1
                className={`leading-tight ${
                  locale === "ar"
                    ? "text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground"
                    : "font-cormorant text-4xl lg:text-5xl xl:text-6xl font-light text-foreground/90 tracking-[0.04em] italic"
                }`}
              >
                {locale === "ar" ? "عبدالرحمن" : "Abdulrahman"}
              </h1>
              {/* Family name - calligraphic for AR, cinzel for EN */}
              <p
                className={`leading-[1] mt-0 ltr:mt-4 ${
                  locale === "ar"
                    ? "font-calligraphic text-6xl lg:text-7xl xl:text-8xl font-bold text-accent"
                    : "font-cinzel rtl:text-5xl rtl:lg:text-6xl rtl:xl:text-7xl ltr:text-4xl ltr:lg:text-3xl ltr:xl:text-5xl font-semibold text-accent tracking-[0.08em] uppercase"
                }`}
              >
                {locale === "ar" ? "الهرمودي" : "Al-Harmoudi"}
              </p>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="w-16 h-px bg-accent/50 mb-6 mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Subtitle */}
            <motion.p
              className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {locale === "ar"
                ? "محامي مرخص من وزارة العدل وجمعية الإمارات للقانون والمحاماة"
                : "Licensed attorney by the Ministry of Justice and the UAE Law & Advocacy Association"}
            </motion.p>

            {/* License number */}
            <motion.p
              className="text-muted-foreground/60 text-xs tracking-wider mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {locale === "ar"
                ? "رخصة رقم ١٢٣٤٥٦٧٨٩٠"
                : "License No. 1234567890"}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
                className="!border-border text-accent hover:bg-accent hover:text-foreground bg-transparent font-medium px-8 py-6 text-base tracking-wide cursor-pointer transition-all duration-300"
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

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Scale,
  Gavel,
  FileText,
  Shield,
  Building,
  Users,
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
          {/* Right Content - Lawyer Portrait (appears first in RTL) */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Portrait Container */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -start-4 w-24 h-24 border border-accent/30 rounded-full"></div>
              {/* Lawyer Image */}
              <div className="relative w-64 sm:w-80 lg:w-96 xl:w-[420px]">
                <div className="relative overflow-hidden">
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
                {locale === "ar" ? "مكتب محاماة متخصص" : "Specialized Law Firm"}
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
                    خدمات <span className="text-accent">قانونية</span>
                  </>
                ) : (
                  <>
                    <span className="text-accent">Legal</span> Services
                  </>
                )}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.2] mb-2">
                {locale === "ar" ? (
                  <>
                    <span className="text-accent">متميزة</span> وموثوقة
                  </>
                ) : (
                  <>
                    <span className="text-accent">Excellence</span> & Trust
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
                ? "نقدم خدمات قانونية متكاملة بأعلى معايير الجودة والاحترافية. خبرة واسعة في مختلف المجالات القانونية مع التزام تام بحماية حقوق عملائنا."
                : "We provide comprehensive legal services with the highest standards of quality and professionalism. Extensive experience in various legal fields with full commitment to protecting our clients' rights."}
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
                className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent font-medium px-8 py-6 text-base tracking-wide cursor-pointer"
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

      {/* CSS for scrollbar and animations */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Scale,
  Gavel,
  FileText,
  Shield,
  Award,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { ServiceConsultationModal } from "./service-consultation-modal";
import { useState } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Stats badges for the bottom row
  const statsBadges = [
    {
      icon: Scale,
      labelAr: "الهجرة",
      labelEn: "Immigration",
    },
    {
      icon: Gavel,
      labelAr: "التحكيم",
      labelEn: "Arbitration",
    },
    {
      icon: FileText,
      labelAr: "التقاضي",
      labelEn: "Litigation",
    },
    {
      icon: Shield,
      labelAr: "100+ قضية",
      labelEn: "100+ Cases",
    },
    {
      icon: Award,
      labelAr: "الضمان",
      labelEn: "Guarantee",
    },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-background overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[85vh] py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative Line */}
            <motion.div
              className="hidden lg:flex items-center gap-4 mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
                {locale === "ar" ? "مستشارون قانونيون" : "Legal Counsel"}
              </span>
            </motion.div>

            {/* Main Title - Vintage Typography Style */}
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.1] mb-2">
                {locale === "ar" ? (
                  <>
                    استشارات <span className="text-accent italic">قانونية</span>
                  </>
                ) : (
                  <>
                    TRUSTED{" "}
                    <span className="text-accent italic font-normal">
                      LEGAL
                    </span>
                  </>
                )}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.1] mb-2">
                {locale === "ar" ? (
                  <>
                    <span className="text-accent italic">موثوقة</span> للأعمال
                  </>
                ) : (
                  <>COUNSEL FOR</>
                )}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.1]">
                {locale === "ar" ? (
                  "المتنامية"
                ) : (
                  <>
                    <span className="text-accent italic font-normal">
                      GROWING
                    </span>
                  </>
                )}
              </span>
              {!locale.startsWith("ar") && (
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.1]">
                  BUSINESSES
                </span>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-muted-foreground text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {locale === "ar"
                ? "خدمات قانونية مهنية بنزاهة وتفان لحماية حقوقكم وتحقيق العدالة في جميع المجالات"
                : "Whether you're a startup founder, a boutique firm, or a growing company, we offer a tailored legal counsel for your needs."}
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
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 py-6 text-base tracking-wide uppercase cursor-pointer"
              >
                {locale === "ar"
                  ? "احصل على استشارة مجانية"
                  : "Schedule a Free Consultation"}
                <ArrowIcon className="ms-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Lawyer Portrait with Badge */}
          <motion.div
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Portrait Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent rounded-t-full"></div>

              {/* Lawyer Image */}
              <div className="relative w-64 sm:w-80 lg:w-96 xl:w-[420px]">
                <img
                  src="/professional-lawyer-portrait.webp"
                  alt="Professional Lawyer"
                  className="w-full h-auto object-cover grayscale contrast-110"
                />
                {/* Gradient Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
              </div>

              {/* Excellence Badge */}
              <motion.div
                className="absolute -end-4 sm:end-0 top-8 sm:top-12"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                  {/* Badge Circle */}
                  <div className="absolute inset-0 border-2 border-accent rounded-full flex items-center justify-center">
                    <div className="text-center p-2">
                      <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent mx-auto mb-1" />
                      <span className="text-[8px] sm:text-[9px] font-bold text-foreground tracking-wider uppercase block leading-tight">
                        {locale === "ar" ? "التميز" : "EXCELLENCE"}
                      </span>
                      <span className="text-[7px] sm:text-[8px] text-muted-foreground tracking-wide uppercase block">
                        {locale === "ar" ? "معتمد" : "CERTIFIED"}
                      </span>
                    </div>
                  </div>
                  {/* Rotating Text Around Badge */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[6px] fill-muted-foreground uppercase tracking-[0.15em]">
                      <textPath href="#circlePath">
                        {locale === "ar"
                          ? "• خبرة قانونية • موثوقية • نزاهة • "
                          : "• LEGAL EXPERTISE • TRUSTED • INTEGRITY • "}
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Badges Row */}
      <motion.div
        className="relative z-20 border-t border-border bg-muted/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 lg:py-5 overflow-x-auto scrollbar-hide gap-4 lg:gap-0">
            {statsBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 lg:gap-3 shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-border flex items-center justify-center bg-background">
                  <badge.icon className="w-4 h-4 lg:w-5 lg:h-5 text-accent" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">
                  {locale === "ar" ? badge.labelAr : badge.labelEn}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />

      {/* CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
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

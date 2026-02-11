"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Users, Award, Shield } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

// UAE Company Logos
import logoDisney from "@/assets/uae-logos/Disney.png";
import logoEcco from "@/assets/uae-logos/Ecco.png";
import logoEtihad from "@/assets/uae-logos/Etihad-Airways.png";
import logoAjman from "@/assets/uae-logos/Government-of-Ajman.png";
import logoKoton from "@/assets/uae-logos/Koton.png";
import logoMarketing from "@/assets/uae-logos/Marketing-Mania.png";
import logoMashreq from "@/assets/uae-logos/Mashreq-Bank.png";
import logoOceanman from "@/assets/uae-logos/Oceanman.png";
import logoPrintava from "@/assets/uae-logos/Printava-Advertising-Requisites-Trading-L.L.C.png";
import logoReebok from "@/assets/uae-logos/Reebok.png";
import logoTashkeel from "@/assets/uae-logos/Tashkeel-.png";

export function AboutPreview() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Why choose us points
  const whyUsPoints = [
    {
      number: "1",
      icon: Users,
      titleAr: "اهتمام شخصي",
      titleEn: "Personal Attention",
      descAr:
        "كمكتب محاماة فردي، أتابع كل قضية بنفسي لضمان أفضل النتائج الممكنة لكل عميل.",
      descEn:
        "As a solo practice, I personally handle every case to ensure the best possible outcomes for each client.",
    },
    {
      number: "2",
      icon: Award,
      titleAr: "خبرة إماراتية",
      titleEn: "UAE Expertise",
      descAr:
        "خبرة تمتد لأكثر من 15 عاماً في القانون الإماراتي والتشريعات المحلية والاتحادية.",
      descEn:
        "Over 15 years of expertise in UAE law, local regulations, and federal legislation.",
    },
    {
      number: "3",
      icon: Shield,
      titleAr: "نزاهة مهنية",
      titleEn: "Professional Integrity",
      descAr:
        "التزام تام بأعلى معايير النزاهة والشفافية في جميع التعاملات القانونية.",
      descEn:
        "Full commitment to the highest standards of integrity and transparency in all legal dealings.",
    },
  ];

  // UAE Partner/Client logos - dark flag for logos that are originally black/dark
  const partnerLogos = [
    { src: logoDisney, alt: "Disney", dark: true },
    { src: logoEcco, alt: "Ecco", dark: true },
    { src: logoEtihad, alt: "Etihad Airways", dark: false },
    { src: logoAjman, alt: "Government of Ajman", dark: false },
    { src: logoKoton, alt: "Koton", dark: true },
    { src: logoMarketing, alt: "Marketing Mania", dark: true },
    { src: logoMashreq, alt: "Mashreq Bank", dark: false },
    { src: logoOceanman, alt: "Oceanman", dark: true },
    { src: logoPrintava, alt: "Printava Advertising", dark: false },
    { src: logoReebok, alt: "Reebok", dark: true },
    { src: logoTashkeel, alt: "Tashkeel", dark: true },
  ];

  const renderLogos = (keyPrefix: string) =>
    partnerLogos.map((logo, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="shrink-0 flex items-center justify-center w-14 h-7 lg:w-20 lg:h-9"
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          className={`max-w-full max-h-full w-auto h-auto object-contain partner-logo ${logo.dark ? "partner-logo-dark" : ""}`}
          sizes="(max-width: 1024px) 56px, 80px"
        />
      </div>
    ));

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
              {locale === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?"}
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
                <div className="text-5xl lg:text-6xl font-serif font-bold text-accent/70 mb-4">
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
      <section className="py-4 lg:py-5 bg-[#0a1628] border-y border-white/10 overflow-hidden">
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 lg:w-24 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

          {/* Marquee track — animation on parent, translates -50% for seamless loop */}
          <div className="flex items-center marquee-track">
            {/* First set */}
            <div className="flex items-center gap-8 lg:gap-12 pe-8 lg:pe-12 shrink-0">
              {renderLogos("set1")}
            </div>
            {/* Duplicate set for seamless loop */}
            <div
              className="flex items-center gap-8 lg:gap-12 pe-8 lg:pe-12 shrink-0"
              aria-hidden="true"
            >
              {renderLogos("set2")}
            </div>
          </div>
        </div>
      </section>

      {/* CSS for marquee animation & logo color unification */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee-scroll 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        /* Light/colorful logos: grayscale to cream-white */
        .partner-logo {
          filter: grayscale(100%) brightness(1.5) contrast(0.9);
          opacity: 0.7;
          transition: all 0.4s ease;
        }
        /* Dark/black logos: invert + sepia to make them cream-white */
        .partner-logo.partner-logo-dark {
          filter: invert(1) sepia(0.15) brightness(1.1);
          opacity: 0.7;
        }
        .partner-logo:hover {
          opacity: 1;
        }
        .partner-logo.partner-logo-dark:hover {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

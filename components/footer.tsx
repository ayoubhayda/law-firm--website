"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  ArrowLeft,
  Scale,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Footer() {
  const { locale } = useLocale();
  const currentYear = new Date().getFullYear();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const quickLinks = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "blog"), href: "/blog" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ];

  const legalLinks = [
    { name: getTranslation(locale, "privacyPolicy"), href: "/privacy" },
    { name: getTranslation(locale, "termsOfService"), href: "/terms" },
  ];

  const services = [
    {
      nameAr: "الاستشارات القانونية",
      nameEn: "Legal Consultations",
      href: "/services",
    },
    {
      nameAr: "الترافع في المحاكم",
      nameEn: "Court Representation",
      href: "/services",
    },
    {
      nameAr: "الترجمة القانونية",
      nameEn: "Legal Translation",
      href: "/services",
    },
    {
      nameAr: "الملكية الفكرية",
      nameEn: "Intellectual Property",
      href: "/services",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-[#050d1a] border-t border-border">
      {/* Legal Quote Banner */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-center gap-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Scale className="w-5 h-5 text-accent shrink-0" />
            <p className="text-foreground/80 text-sm lg:text-base font-serif italic">
              {locale === "ar"
                ? "العدل دولة و قوة، و عزة، و ضمان استقرار و ازدهار"
                : "Justice is a state of power, glory, and a guarantee of stability and prosperity"}
            </p>
            <Scale className="w-5 h-5 text-accent shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/20 rounded-lg rotate-45"></div>
                <span className="relative text-accent font-bold text-xl">
                  ف
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-wide leading-none">
                  {locale === "ar" ? "فيرمن" : "Firmen"}
                </span>
                <span className="text-[9px] text-muted-foreground font-medium tracking-[0.15em] mt-1 uppercase">
                  {locale === "ar" ? "مكتب محاماة" : "Law Firm"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {locale === "ar"
                ? "نقدم خدمات قانونية متميزة بخبرة واسعة ونزاهة مهنية عالية. نحن هنا لحماية حقوقكم ومصالحكم."
                : "We provide exceptional legal services with extensive experience and high professional integrity. We are here to protect your rights."}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-foreground tracking-wide uppercase mb-6">
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-foreground tracking-wide uppercase mb-6">
              {locale === "ar" ? "خدماتنا" : "Our Services"}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.nameEn}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {locale === "ar" ? service.nameAr : service.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-foreground tracking-wide uppercase mb-6">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+966501234567"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                >
                  <div className="w-8 h-8 border border-border flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span dir="ltr">+966 50 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@firmen-law.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                >
                  <div className="w-8 h-8 border border-border flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>info@firmen-law.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>
                    {locale === "ar"
                      ? "الرياض، المملكة العربية السعودية"
                      : "Riyadh, Saudi Arabia"}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs text-center sm:text-start">
              © {currentYear} {locale === "ar" ? "فيرمن" : "Firmen"}.{" "}
              {getTranslation(locale, "copyright")}
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

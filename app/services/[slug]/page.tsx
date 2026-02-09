"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Award,
  Target,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getServiceBySlug, getRelatedServices } from "@/lib/services";
import { ServiceConsultationModal } from "@/components/service-consultation-modal";
import { useState, use } from "react";
import { motion } from "framer-motion";

const iconMap = {
  Users,
  Home,
  Briefcase,
  Shield,
  FileText,
  Gavel,
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const { locale } = useLocale();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(
    service.slug,
    service.relatedServices,
  );
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-20 bg-[#060a12] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div
                    className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full bg-accent/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-5 w-5 md:h-8 md:w-8 text-accent" />
                  </motion.div>
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    {locale === "ar" ? "خدمة متخصصة" : "Specialized Service"}
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 font-serif text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {service.title[locale]}
                </motion.h1>
                <motion.p
                  className="text-sm md:text-xl text-white/90 leading-relaxed text-pretty mb-4 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {service.description[locale]}
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-accent text-white hover:bg-accent/90 cursor-pointer"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      {locale === "ar"
                        ? "احصل على استشارة"
                        : "Get Consultation"}
                      <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-zinc-700 dark:border-zinc-700 text-white hover:border-accent dark:hover:border-accent hover:text-accent bg-transparent hover:bg-transparent"
                    >
                      {locale === "ar" ? "اتصل الآن" : "Call Now"}
                      <Phone className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:text-right"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="grid grid-cols-2 gap-3 md:gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    {
                      icon: Award,
                      value: "15+",
                      label: locale === "ar" ? "سنة خبرة" : "Years Experience",
                    },
                    {
                      icon: Target,
                      value: "500+",
                      label:
                        locale === "ar" ? "قضية ناجحة" : "Successful Cases",
                    },
                    {
                      icon: Clock,
                      value: "24/7",
                      label: locale === "ar" ? "دعم متاح" : "Support Available",
                    },
                    {
                      icon: CheckCircle,
                      value: "98%",
                      label: locale === "ar" ? "معدل النجاح" : "Success Rate",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 md:p-6 bg-zinc-700/60 rounded-lg"
                      variants={scaleIn}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className="h-5 w-5 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                      <div className="text-base md:text-2xl font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-white/80">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-10 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-6 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {locale === "ar"
                    ? "نظرة عامة على الخدمة"
                    : "Service Overview"}
                </motion.h2>
                <motion.p
                  className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-8 text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {service.detailedContent[locale].overview}
                </motion.p>

                <motion.h3
                  className="text-lg md:text-2xl font-semibold text-foreground mb-2 md:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {locale === "ar" ? "منهجيتنا في العمل" : "Our Approach"}
                </motion.h3>
                <motion.p
                  className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-8 text-pretty"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {service.detailedContent[locale].approach}
                </motion.p>

                <motion.h3
                  className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {locale === "ar" ? "مزايا خدماتنا" : "Service Benefits"}
                </motion.h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-8"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {service.detailedContent[locale].benefits.map(
                    (benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ),
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Services Included */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {locale === "ar"
                          ? "الخدمات المشمولة"
                          : "Services Included"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {service.features[locale].map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="bg-accent/5 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-accent">
                        {locale === "ar" ? "تواصل سريع" : "Quick Contact"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="w-full bg-accent text-white hover:bg-accent/90 cursor-pointer"
                          onClick={() => setIsConsultationOpen(true)}
                        >
                          {locale === "ar"
                            ? "احجز استشارة مجانية"
                            : "Book Free Consultation"}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-transparent hover:text-white cursor-pointer dark:border-border dark:hover:border-accent/50 transition-all"
                        >
                          {locale === "ar" ? "اتصل الآن" : "Call Now"}
                          <Phone className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Process Section */}
        <section className="py-12 md:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
          {/* Background Decoration */}
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center mb-8 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">
                  {locale === "ar"
                    ? "منهجية عمل متميزة"
                    : "Distinguished Work Methodology"}
                </span>
              </div>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 font-serif text-balance">
                {locale === "ar" ? "عملية العمل" : "Our Process"}
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty px-2 md:px-0">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results for our clients"}
              </p>
            </motion.div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30 hidden lg:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/20 hidden lg:block" />

              <div className="space-y-4 md:space-y-6 lg:space-y-20">
                {service.detailedContent[locale].process.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`group relative flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } flex-col lg:gap-12`}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 w-full lg:w-auto ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-inherit`}
                    >
                      <Card className="group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 border-border hover:border-accent/40 bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-4 md:p-8">
                          <div
                            className={`flex items-start gap-6 mb-6 ${
                              index % 2 === 0
                                ? "lg:flex-row-reverse"
                                : "lg:flex-row-reverse"
                            } flex-row`}
                          >
                            {/* Icon Container */}
                            <motion.div
                              className="relative"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                                <div className="text-base md:text-2xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                                  {String(index + 1).padStart(2, "0")}
                                </div>
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                <Badge
                                  variant="outline"
                                  className="text-accent border-accent/50 bg-accent/5 hover:bg-accent/10 transition-colors duration-300 font-medium text-xs md:text-sm"
                                >
                                  {locale === "ar"
                                    ? `الخطوة ${String(index + 1).padStart(2, "0")}`
                                    : `Step ${String(index + 1).padStart(2, "0")}`}
                                </Badge>
                                <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1 hidden lg:block" />
                              </div>
                              <h3 className="text-base md:text-2xl font-bold text-foreground text-start mb-1 md:mb-3 group-hover:text-accent transition-colors duration-300">
                                {locale === "ar"
                                  ? `مرحلة ${index + 1}`
                                  : `Phase ${index + 1}`}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-start text-xs md:text-lg">
                                {step}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Enhanced Timeline Dot */}
                    <motion.div
                      className="relative z-20 items-center justify-center hidden lg:flex"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <div className="relative">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
                        {/* Main dot */}
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 border-4 border-background shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <div className="h-3 w-3 rounded-full bg-background" />
                        </div>
                        {/* Inner glow */}
                        <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Spacer for desktop */}
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>

              {/* Timeline End Decoration */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 hidden lg:flex"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border-2 border-accent/30">
                  <div className="h-2 w-2 rounded-full bg-accent/60" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-10 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
            {/* Background Decoration */}
            <motion.div
              className="absolute inset-0 opacity-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary rounded-full blur-3xl" />
            </motion.div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                className="text-center mb-8 md:mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-accent">
                    {locale === "ar" ? "خدمات إضافية" : "Additional Services"}
                  </span>
                </div>
                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 font-serif text-balance">
                  {locale === "ar" ? "خدمات ذات صلة" : "Related Services"}
                </h2>
                <p className="text-sm md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty px-2 md:px-0">
                  {locale === "ar"
                    ? "اكتشف خدماتنا الأخرى التي قد تساعدكم في تحقيق أهدافكم القانونية"
                    : "Discover our other services that might help you achieve your legal goals"}
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
              >
                {relatedServices.map((relatedService, index) => {
                  const RelatedIcon =
                    iconMap[relatedService.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="group transition-all duration-300 hover:-translate-y-2 border-border hover:border-accent/50 flex flex-col h-full bg-background/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-accent/10">
                        <CardHeader className="text-center pb-4">
                          <motion.div
                            className="mx-auto mb-3 md:mb-4 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <RelatedIcon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                          </motion.div>
                          <CardTitle className="text-base md:text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {relatedService.title[locale]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between flex-1 space-y-6">
                          <div className="space-y-6">
                            <CardDescription className="text-muted-foreground leading-relaxed">
                              {relatedService.description[locale]}
                            </CardDescription>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-foreground text-sm">
                                {locale === "ar"
                                  ? "الخدمات المشمولة:"
                                  : "Services Included:"}
                              </h4>
                              <motion.ul
                                className="space-y-2"
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                              >
                                {relatedService.features[locale]
                                  .slice(0, 3)
                                  .map((feature, featureIndex) => (
                                    <motion.li
                                      key={featureIndex}
                                      className="flex items-center gap-2 text-sm text-muted-foreground"
                                      variants={{
                                        initial: { opacity: 0, x: -20 },
                                        animate: { opacity: 1, x: 0 },
                                      }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                      {feature}
                                    </motion.li>
                                  ))}
                              </motion.ul>
                            </div>
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              className="w-full group/btn bg-transparent border-accent/30 hover:bg-accent hover:text-white transition-all duration-300 mt-auto cursor-pointer"
                              onClick={() =>
                                (window.location.href = `/services/${relatedService.slug}`)
                              }
                            >
                              {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                              <ArrowIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                            </Button>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section - Accent Background */}
        <section className="py-16 lg:py-20 bg-accent">
          <motion.div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-4">
              {locale === "ar"
                ? "جاهز للحصول على المساعدة القانونية؟"
                : "Ready to Get Legal Help?"}
            </h2>
            <p className="text-accent-foreground/80 text-base lg:text-lg max-w-xl mx-auto mb-8">
              {locale === "ar"
                ? "تواصل معنا اليوم للحصول على استشارة مجانية ومناقشة احتياجاتكم في " +
                  service.title[locale]
                : "Contact us today for a free legal consultation and discuss your " +
                  service.title[locale] +
                  " needs"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 cursor-pointer font-medium tracking-wide uppercase"
                onClick={() => setIsConsultationOpen(true)}
              >
                {locale === "ar"
                  ? "احجز استشارة مجانية"
                  : "Book Free Consultation"}
                <ArrowIcon className="ms-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-medium cursor-pointer tracking-wide uppercase"
              >
                {locale === "ar" ? "اتصل بنا" : "Call Us"}
                <Phone className="ms-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={service.title[locale]}
      />
    </div>
  );
}

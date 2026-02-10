"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
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
import { ConsultationModal } from "@/components/consultation-modal";
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
        {/* Hero Section - Dark with grid pattern */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-background grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center bg-accent/20">
                    <IconComponent className="h-5 w-5 md:h-7 md:w-7 text-accent" />
                  </div>
                  <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium border border-accent/30 px-3 py-1">
                    {locale === "ar" ? "خدمة متخصصة" : "Specialized Service"}
                  </span>
                </motion.div>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 font-serif text-foreground text-balance"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {service.title[locale]}
                </motion.h1>
                <motion.p
                  className="text-sm md:text-xl text-muted-foreground leading-relaxed text-pretty mb-4 md:mb-8"
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
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer font-medium tracking-wide"
                    onClick={() => setIsConsultationOpen(true)}
                  >
                    {locale === "ar" ? "احصل على استشارة" : "Get Consultation"}
                    <MessageCircle className="ms-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border text-foreground hover:border-accent hover:text-accent bg-transparent hover:bg-transparent"
                  >
                    {locale === "ar" ? "اتصل الآن" : "Call Now"}
                    <Phone className="ms-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="lg:text-right"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-3 md:gap-6">
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
                      className="text-center p-3 md:p-6 border border-border bg-card/50 hover:border-accent/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <stat.icon className="h-5 w-5 md:h-8 md:w-8 text-accent mx-auto mb-2 md:mb-3" />
                      <div className="text-base md:text-2xl font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Overview - Cream Background */}
        <section className="py-10 md:py-20 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xl md:text-3xl font-bold text-[#0a1628] mb-3 md:mb-6 font-serif">
                  {locale === "ar"
                    ? "نظرة عامة على الخدمة"
                    : "Service Overview"}
                </h2>
                <p className="text-sm md:text-lg text-[#0a1628]/60 leading-relaxed mb-4 md:mb-8 text-pretty">
                  {service.detailedContent[locale].overview}
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-[#0a1628] mb-2 md:mb-4">
                  {locale === "ar" ? "منهجيتنا في العمل" : "Our Approach"}
                </h3>
                <p className="text-sm md:text-base text-[#0a1628]/60 leading-relaxed mb-4 md:mb-8 text-pretty">
                  {service.detailedContent[locale].approach}
                </p>

                <h3 className="text-lg md:text-2xl font-semibold text-[#0a1628] mb-3 md:mb-6">
                  {locale === "ar" ? "مزايا خدماتنا" : "Service Benefits"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-8">
                  {service.detailedContent[locale].benefits.map(
                    (benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-[#0a1628]/60">{benefit}</span>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Services Included */}
                <div className="bg-white border border-gray-100 shadow-sm p-6">
                  <h4 className="text-lg font-serif font-bold text-[#0a1628] mb-4">
                    {locale === "ar" ? "الخدمات المشمولة" : "Services Included"}
                  </h4>
                  <div className="space-y-3">
                    {service.features[locale].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-[#0a1628]/60">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#0a1628] border border-border p-6">
                  <h4 className="text-lg font-serif font-bold text-white mb-4">
                    {locale === "ar" ? "تواصل سريع" : "Quick Contact"}
                  </h4>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer font-medium tracking-wide"
                      onClick={() => setIsConsultationOpen(true)}
                    >
                      {locale === "ar"
                        ? "احجز استشارة مجانية"
                        : "Book Free Consultation"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-border text-white hover:border-accent/50 hover:text-accent cursor-pointer transition-all"
                    >
                      {locale === "ar" ? "اتصل الآن" : "Call Now"}
                      <Phone className="ms-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section - Dark Background */}
        <section className="py-12 md:py-24 bg-background grid-pattern relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="text-center mb-8 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar"
                    ? "منهجية عمل متميزة"
                    : "Distinguished Work Methodology"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 font-serif text-balance">
                {locale === "ar" ? "عملية العمل" : "Our Process"}
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty px-2 md:px-0">
                {locale === "ar"
                  ? "عملية عمل منظمة ومدروسة لضمان تحقيق أفضل النتائج لعملائنا"
                  : "An organized and well-studied work process to ensure achieving the best results for our clients"}
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {service.detailedContent[locale].process.map((step, index) => (
                <motion.div
                  key={index}
                  className="group p-4 md:p-6 border border-border bg-card/50 hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent/10 border border-accent/30 text-accent text-lg md:text-xl font-bold mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Step Badge */}
                  <div className="text-accent text-xs tracking-[0.15em] uppercase font-medium mb-2">
                    {locale === "ar"
                      ? `الخطوة ${String(index + 1).padStart(2, "0")}`
                      : `Step ${String(index + 1).padStart(2, "0")}`}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {locale === "ar"
                      ? `مرحلة ${index + 1}`
                      : `Phase ${index + 1}`}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services - Cream Background */}
        {relatedServices.length > 0 && (
          <section className="py-10 md:py-20 bg-premium">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-8 md:mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent"></div>
                  <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                    {locale === "ar" ? "خدمات إضافية" : "Additional Services"}
                  </span>
                  <div className="h-px w-8 bg-accent"></div>
                </div>
                <h2 className="text-xl md:text-4xl font-bold text-[#0a1628] mb-3 md:mb-6 font-serif text-balance">
                  {locale === "ar" ? "خدمات ذات صلة" : "Related Services"}
                </h2>
                <p className="text-sm md:text-lg text-[#0a1628]/60 max-w-4xl mx-auto leading-relaxed text-pretty px-2 md:px-0">
                  {locale === "ar"
                    ? "اكتشف خدماتنا الأخرى التي قد تساعدكم في تحقيق أهدافكم القانونية"
                    : "Discover our other services that might help you achieve your legal goals"}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {relatedServices.map((relatedService, index) => {
                  const RelatedIcon =
                    iconMap[relatedService.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={index}
                      className="group bg-white border border-gray-100 shadow-sm hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0a1628] flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            <RelatedIcon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-white transition-colors duration-300" />
                          </div>
                          <h3 className="text-base md:text-xl font-serif font-bold text-[#0a1628] group-hover:text-accent transition-colors duration-300">
                            {relatedService.title[locale]}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-4">
                          {relatedService.description[locale]}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-[#0a1628] text-sm">
                            {locale === "ar"
                              ? "الخدمات المشمولة:"
                              : "Services Included:"}
                          </h4>
                          <ul className="space-y-2">
                            {relatedService.features[locale]
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-center gap-2 text-sm text-[#0a1628]/60"
                                >
                                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <Button
                          variant="outline"
                          className="w-full border-[#0a1628]/20 text-[#0a1628] hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 cursor-pointer bg-transparent"
                          onClick={() =>
                            (window.location.href = `/services/${relatedService.slug}`)
                          }
                        >
                          {locale === "ar" ? "اعرف المزيد" : "Learn More"}
                          <ArrowIcon className="ms-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  GraduationCap,
  Scale,
  Heart,
  Shield,
  Target,
  Handshake,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import ServiceConsultationModelButton from "@/components/service-consultation-model-button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const { locale } = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const milestones = [
    {
      year: "2008",
      title: locale === "ar" ? "بداية المسيرة المهنية" : "Started Legal Career",
      description:
        locale === "ar"
          ? "تخرج من كلية الحقوق بامتياز"
          : "Graduated from Law School with Honors",
      icon: GraduationCap,
    },
    {
      year: "2012",
      title: locale === "ar" ? "تأسيس المكتب" : "Founded Law Firm",
      description:
        locale === "ar"
          ? "افتتاح مكتب المحاماة المتخصص"
          : "Opened Specialized Law Practice",
      icon: Scale,
    },
    {
      year: "2018",
      title: locale === "ar" ? "جائزة التميز" : "Excellence Award",
      description:
        locale === "ar"
          ? "حصل على جائزة أفضل محامي للعام"
          : "Received Lawyer of the Year Award",
      icon: Award,
    },
    {
      year: "2023",
      title: locale === "ar" ? "500+ عميل راضي" : "500+ Satisfied Clients",
      description:
        locale === "ar"
          ? "وصل عدد العملاء الراضين إلى 500+"
          : "Reached 500+ Satisfied Clients Milestone",
      icon: Users,
    },
  ];

  const values = [
    {
      icon: Heart,
      title: locale === "ar" ? "النزاهة" : "Integrity",
      description:
        locale === "ar"
          ? "نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا"
          : "We maintain the highest standards of integrity and transparency in all our dealings",
    },
    {
      icon: Shield,
      title: locale === "ar" ? "حماية الحقوق" : "Rights Protection",
      description:
        locale === "ar"
          ? "نحن ملتزمون بحماية حقوق عملائنا والدفاع عنها بكل قوة"
          : "We are committed to protecting and defending our clients' rights with full strength",
    },
    {
      icon: Target,
      title: locale === "ar" ? "التميز" : "Excellence",
      description:
        locale === "ar"
          ? "نسعى دائماً لتحقيق أفضل النتائج وتقديم خدمات قانونية متميزة"
          : "We always strive to achieve the best results and provide exceptional legal services",
    },
    {
      icon: Handshake,
      title: locale === "ar" ? "الثقة" : "Trust",
      description:
        locale === "ar"
          ? "نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة المتبادلة"
          : "We build long-term relationships with our clients based on mutual trust",
    },
  ];

  const achievements = [
    {
      number: "15+",
      label: locale === "ar" ? "سنوات خبرة" : "Years Experience",
    },
    { number: "500+", label: locale === "ar" ? "عميل راضي" : "Happy Clients" },
    { number: "95%", label: locale === "ar" ? "معدل النجاح" : "Success Rate" },
    {
      number: "10+",
      label: locale === "ar" ? "جوائز مهنية" : "Professional Awards",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section - Dark with grid, no background image */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-background grid-pattern">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar" ? "من نحن" : "About Us"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    تعرف على <span className="text-accent">قصة نجاحنا</span>
                  </>
                ) : (
                  <>
                    Discover Our{" "}
                    <span className="text-accent">Success Story</span>
                  </>
                )}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {locale === "ar"
                  ? "تعرف على قصة نجاحنا وخبرتنا في تقديم أفضل الخدمات القانونية"
                  : "Learn about our success story and expertise in providing the best legal services"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main About Content - Cream Background */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Side */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/professional-lawyer-portrait.webp"
                    alt="Professional Lawyer"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Border Overlay */}
                  <div className="absolute inset-4 border border-accent/30 pointer-events-none"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-6 -end-6 bg-[#0a1628] p-6 border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-4xl font-serif font-bold text-accent mb-1">
                    15+
                  </div>
                  <div className="text-white text-sm font-medium">
                    {locale === "ar" ? "سنوات خبرة" : "Years Experience"}
                  </div>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Section Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-accent"></div>
                  <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                    {locale === "ar"
                      ? "المحامي المتميز"
                      : "Premium Legal Expert"}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-6 leading-tight">
                  {locale === "ar"
                    ? "خبرة قانونية متميزة"
                    : "Distinguished Legal Expertise"}
                </h2>

                {/* Description */}
                <p className="text-[#0a1628]/70 text-base lg:text-lg mb-6 leading-relaxed">
                  {locale === "ar"
                    ? "بخبرة تزيد عن 15 عاماً في الممارسة القانونية في دولة الإمارات، أقدم خدمات قانونية شاملة ومتخصصة في مختلف المجالات القانونية. حصلت على درجة البكالوريوس في الحقوق من جامعة الإمارات العربية المتحدة بامتياز مع مرتبة الشرف."
                    : "With over 15 years of legal practice experience in the UAE, I provide comprehensive and specialized legal services across various legal fields. I earned my Bachelor's degree in Law from UAE University with honors."}
                </p>

                <p className="text-[#0a1628]/60 text-sm lg:text-base mb-8 leading-relaxed">
                  {locale === "ar"
                    ? "أؤمن بأن كل عميل يستحق أفضل تمثيل قانوني ممكن، ولذلك أعمل بجد لفهم احتياجات كل عميل وتقديم حلول قانونية مبتكرة ومخصصة."
                    : "I believe every client deserves the best possible legal representation, which is why I work diligently to understand each client's needs and provide innovative, customized legal solutions."}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {achievements.slice(1, 3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 border border-[#0a1628]/10 bg-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-2xl lg:text-3xl font-serif font-bold text-accent mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-[#0a1628]/60 text-sm">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide"
                  >
                    {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                    <ArrowIcon className="ms-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section - Dark Background */}
        <section className="py-16 lg:py-24 bg-background grid-pattern">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                  {locale === "ar"
                    ? "مسيرة مهنية متميزة"
                    : "Distinguished Career Path"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                {locale === "ar" ? "مسيرة النجاح" : "Journey of Success"}
              </h2>
              <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                {locale === "ar"
                  ? "تعرف على أهم المحطات في مسيرتنا المهنية والإنجازات التي حققناها عبر السنين"
                  : "Discover the key milestones in our professional journey and the achievements we've accomplished over the years"}
              </p>
            </motion.div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="group p-6 border border-border bg-card/50 hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
                    {milestone.year}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <milestone.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Cream Background */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
                {locale === "ar" ? "قيمنا الأساسية" : "Our Core Values"}
              </h2>
              <p className="text-[#0a1628]/60 text-base max-w-2xl mx-auto">
                {locale === "ar"
                  ? "القيم التي نؤمن بها وتوجه عملنا في تقديم أفضل الخدمات القانونية"
                  : "The values we believe in and that guide our work in providing the best legal services"}
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group p-6 lg:p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#0a1628] flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-[#0a1628] mb-3 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#0a1628]/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Accent Background */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Content */}
              <div className="text-center lg:text-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-3">
                  {locale === "ar"
                    ? "هل تحتاج استشارة قانونية؟"
                    : "Need Legal Consultation?"}
                </h2>
                <p className="text-accent-foreground/80 text-base lg:text-lg max-w-xl">
                  {locale === "ar"
                    ? "تواصل معنا اليوم للحصول على استشارة قانونية مهنية ومتخصصة"
                    : "Contact us today for professional and specialized legal consultation"}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ServiceConsultationModelButton />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ConsultationModal } from "./consultation-modal";

// Blog post data
const blogPosts = [
  {
    id: 1,
    image: "/elegant-law-office.webp",
    titleAr: "كيف تحمي شركتك الناشئة قانونياً",
    titleEn: "How to Legally Protect Your Startup",
    excerptAr: "دليل شامل لحماية أعمالك من المخاطر القانونية",
    excerptEn:
      "A comprehensive guide to protecting your business from legal risks",
    date: "2026-02-05",
    slug: "how-to-protect-startup",
  },
  {
    id: 2,
    image: "/elegant-law-office-banner.webp",
    titleAr: "أهمية العقود التجارية للشركات",
    titleEn: "The Importance of Business Contracts",
    excerptAr: "لماذا تحتاج كل شركة إلى عقود قانونية محكمة",
    excerptEn: "Why every company needs solid legal contracts",
    date: "2026-02-01",
    slug: "importance-of-business-contracts",
  },
  {
    id: 3,
    image: "/professional-lawyer-portrait.webp",
    titleAr: "حقوقك في النزاعات العقارية",
    titleEn: "Your Rights in Real Estate Disputes",
    excerptAr: "فهم حقوقك القانونية في المعاملات العقارية",
    excerptEn: "Understanding your legal rights in real estate transactions",
    date: "2026-01-28",
    slug: "real-estate-rights",
  },
];

export function CTASection() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Booking/Contact Section - Premium Beige */}
      <section className="py-16 lg:py-24 bg-premium">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: locale === "ar" ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
                  {locale === "ar"
                    ? "احجز جلستك مع أحد محامينا"
                    : "Book Your Session with Our Lawyers"}
                </h2>
                <p className="text-[#0a1628]/60">
                  {locale === "ar"
                    ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت"
                    : "Fill out the form below and we'll contact you soon"}
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder={
                        locale === "ar" ? "الاسم الكريم" : "Full Name"
                      }
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={
                        locale === "ar" ? "البريد الإلكتروني" : "Email Address"
                      }
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={
                        locale === "ar" ? "رقم الهاتف" : "Phone Number"
                      }
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder={locale === "ar" ? "الموضوع" : "Subject"}
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={
                      locale === "ar" ? "رسالتك..." : "Your Message..."
                    }
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-[#0a1628] text-white hover:bg-[#0a1628]/90 font-medium px-8 cursor-pointer tracking-wide"
                >
                  <Send className="w-4 h-4 me-2" />
                  {locale === "ar" ? "إرسال الطلب" : "Send Request"}
                </Button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: locale === "ar" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#0a1628] p-8 lg:p-10 h-full">
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-white mb-6">
                  {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">
                        {locale === "ar" ? "الهاتف" : "Phone"}
                      </p>
                      <a
                        href="tel:+966501234567"
                        className="text-white hover:text-accent transition-colors"
                        dir="ltr"
                      >
                        +966 50 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">
                        {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                      </p>
                      <a
                        href="mailto:info@firmen-law.com"
                        className="text-white hover:text-accent transition-colors"
                      >
                        info@firmen-law.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">
                        {locale === "ar" ? "العنوان" : "Address"}
                      </p>
                      <p className="text-white">
                        {locale === "ar"
                          ? "الرياض، المملكة العربية السعودية"
                          : "Riyadh, Saudi Arabia"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">
                        {locale === "ar" ? "ساعات العمل" : "Working Hours"}
                      </p>
                      <p className="text-white">
                        {locale === "ar"
                          ? "الأحد - الخميس: 9ص - 5م"
                          : "Sun - Thu: 9AM - 5PM"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                    src={post.image}
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

      {/* Final CTA Section */}
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
                  ? "تواصل معنا اليوم للحصول على استشارة مجانية مع فريقنا من المحامين المتخصصين"
                  : "Contact us today for a free consultation with our team of specialized lawyers"}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium px-8 cursor-pointer tracking-wide"
              >
                {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-medium px-8 cursor-pointer tracking-wide"
                asChild
              >
                <a href="tel:+966501234567">
                  <Phone className="me-2 h-5 w-5" />
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

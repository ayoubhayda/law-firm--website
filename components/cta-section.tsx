"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { ConsultationModal } from "./consultation-modal";
import { motion } from "framer-motion";
import Link from "next/link";

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

  return (
    <>
      {/* Blog Posts Section */}
      <section className="py-16 lg:py-24 bg-background">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
                {locale === "ar" ? "أحدث المقالات" : "LATEST BLOG POSTS"}
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
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-all duration-300 cursor-pointer tracking-wide uppercase"
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
                className="group border border-border overflow-hidden hover:border-accent/50 transition-colors duration-300"
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
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
                  ? "تواصل معنا اليوم للحصول على استشارة مجانية"
                  : "Contact us today for a free consultation"}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium px-8 cursor-pointer tracking-wide uppercase"
              >
                {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-medium px-8 cursor-pointer tracking-wide uppercase"
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

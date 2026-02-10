"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import Link from "next/link";
import ServiceConsultationModelButton from "@/components/service-consultation-model-button";
import { motion } from "framer-motion";

export default function ArticlePage() {
  const params = useParams();
  const { locale } = useLocale();
  const slug = params.slug as string;

  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, article?.category || "", 3);

  const BackIcon = locale === "ar" ? ArrowRight : ArrowLeft;
  const ForwardIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              {locale === "ar" ? "المقال غير موجود" : "Article Not Found"}
            </h1>
            <p className="text-muted-foreground mb-8">
              {locale === "ar"
                ? "المقال المطلوب غير متوفر"
                : "The requested article is not available"}
            </p>
            <Link href="/blog">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <BackIcon className="me-2 h-4 w-4" />
                {locale === "ar" ? "العودة للمدونة" : "Back to Blog"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (locale === "ar") {
      return date.toLocaleDateString("ar-SA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Article Header - Dark Background */}
        <section className="py-12 lg:py-16 bg-background grid-pattern">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="mb-6 text-accent hover:text-accent-foreground hover:bg-accent"
                >
                  <BackIcon className="me-2 h-4 w-4" />
                  {locale === "ar" ? "العودة للمدونة" : "Back to Blog"}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground text-xs font-medium">
                {article.categoryName}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground text-balance leading-tight">
                {locale === "ar" ? article.titleAr : article.titleEn}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {locale === "ar" ? article.excerptAr : article.excerptEn}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  {locale === "ar" ? article.authorAr : article.authorEn}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  {locale === "ar" ? article.readTimeAr : article.readTimeEn}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-accent" />
                  {locale === "ar"
                    ? `${article.content.ar.length} كلمة`
                    : `${article.content.en.length} words`}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Share2 className="me-2 h-4 w-4" />
                  {locale === "ar" ? "مشاركة" : "Share"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Image - Cream Background */}
        {article.image && (
          <section className="py-8 bg-premium">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={locale === "ar" ? article.titleAr : article.titleEn}
                  className="w-full h-64 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Article Content - Cream Background */}
        <section className="py-12 bg-premium">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#0a1628] prose-p:text-[#0a1628]/70 prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-[#0a1628] prose-ul:text-[#0a1628]/70 prose-ol:text-[#0a1628]/70">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "ar" ? article.content.ar : article.content.en,
                }}
              />
            </div>
          </div>
        </section>

        {/* Related Articles - Dark Background */}
        {relatedArticles.length > 0 && (
          <section className="py-12 lg:py-16 bg-background grid-pattern">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-accent"></div>
                  <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                    {locale === "ar" ? "مقالات ذات صلة" : "Related Articles"}
                  </span>
                  <div className="h-px w-12 bg-accent"></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                  {locale === "ar" ? "اقرأ أيضاً" : "Read Also"}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.div
                    key={relatedArticle.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedArticle.slug}`}>
                      <div className="group cursor-pointer border border-border bg-card/50 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                        <div className="relative overflow-hidden">
                          <img
                            src={relatedArticle.image || "/placeholder.svg"}
                            alt={
                              locale === "ar"
                                ? relatedArticle.titleAr
                                : relatedArticle.titleEn
                            }
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute top-4 start-4">
                            <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground text-xs font-medium">
                              {relatedArticle.categoryName}
                            </span>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                            {locale === "ar"
                              ? relatedArticle.titleAr
                              : relatedArticle.titleEn}
                          </h3>

                          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                            {locale === "ar"
                              ? relatedArticle.excerptAr
                              : relatedArticle.excerptEn}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{formatDate(relatedArticle.date)}</span>
                            <span>
                              {locale === "ar"
                                ? relatedArticle.readTimeAr
                                : relatedArticle.readTimeEn}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
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
                ? "هل تحتاج استشارة قانونية؟"
                : "Need Legal Consultation?"}
            </h2>
            <p className="text-accent-foreground/80 text-base lg:text-lg max-w-xl mx-auto mb-8">
              {locale === "ar"
                ? "احصل على استشارة قانونية متخصصة من خبرائنا لحل مشاكلك القانونية"
                : "Get specialized legal consultation from our experts to solve your legal problems"}
            </p>
            <ServiceConsultationModelButton />
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

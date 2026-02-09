"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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

  // Animation variants
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold mb-4">
              {locale === "ar" ? "المقال غير موجود" : "Article Not Found"}
            </h1>
            <p className="text-muted-foreground mb-8">
              {locale === "ar"
                ? "المقال المطلوب غير متوفر"
                : "The requested article is not available"}
            </p>
            <Link href="/blog">
              <Button>
                <BackIcon className="ml-2 h-4 w-4" />
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
        {/* Article Header */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="mb-6 text-accent hover:text-white hover:bg-accent"
                >
                  <BackIcon className="ml-2 h-4 w-4" />
                  {locale === "ar" ? "العودة للمدونة" : "Back to Blog"}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-accent text-white hover:bg-accent">
                  {article.categoryName}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold font-serif text-balance leading-tight"
                variants={fadeInUp}
              >
                {locale === "ar" ? article.titleAr : article.titleEn}
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed text-pretty"
                variants={fadeInUp}
              >
                {locale === "ar" ? article.excerptAr : article.excerptEn}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {locale === "ar" ? article.authorAr : article.authorEn}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {locale === "ar" ? article.readTimeAr : article.readTimeEn}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {locale === "ar"
                    ? `${article.content.ar.length} كلمة`
                    : `${article.content.en.length} words`}
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                variants={fadeInUp}
              >
                <Button
                  size="sm"
                  className="bg-accent text-white hover:bg-accent/90 hover:text-white"
                >
                  <Share2 className="ml-2 h-4 w-4" />
                  {locale === "ar" ? "مشاركة" : "Share"}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Article Image */}
        {article.image && (
          <section className="py-8">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-lg"
              >
                <motion.img
                  src={article.image || "/placeholder.svg"}
                  alt={locale === "ar" ? article.titleAr : article.titleEn}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "ar" ? article.content.ar : article.content.en,
                }}
              />
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold font-serif mb-8 text-center">
                {locale === "ar" ? "مقالات ذات صلة" : "Related Articles"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/blog/${relatedArticle.slug}`}
                  >
                    <div className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={
                            locale === "ar"
                              ? relatedArticle.titleAr
                              : relatedArticle.titleEn
                          }
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                          <Badge className="bg-accent text-white">
                            {relatedArticle.categoryName}
                          </Badge>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
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
                  </Link>
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <ServiceConsultationModelButton />
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

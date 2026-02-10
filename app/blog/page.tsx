"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  Search,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Mail,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { motion } from "framer-motion";

export default function BlogPage() {
  const { locale } = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  const allArticles = getAllArticles();

  const categories = [
    { id: "all", name: locale === "ar" ? "الكل" : "All" },
    { id: "family", name: locale === "ar" ? "قانون الأسرة" : "Family Law" },
    {
      id: "business",
      name: locale === "ar" ? "القانون التجاري" : "Business Law",
    },
    { id: "real-estate", name: locale === "ar" ? "العقارات" : "Real Estate" },
    { id: "criminal", name: locale === "ar" ? "الجنائي" : "Criminal" },
  ];

  const filteredPosts = allArticles.filter((article) => {
    const title = locale === "ar" ? article.titleAr : article.titleEn;
    const matchesSearch = title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Show only 3 articles initially, or all if showAllArticles is true
  const displayedPosts = showAllArticles
    ? filteredPosts
    : filteredPosts.slice(0, 3);

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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    if (!isValidEmail(email)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowSuccessModal(true);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section - Dark with grid pattern, NO background image */}
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
                  {locale === "ar" ? "المدونة القانونية" : "Legal Blog"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    المدونة <span className="text-accent">القانونية</span>
                  </>
                ) : (
                  <>
                    LEGAL <span className="text-accent">BLOG</span>
                  </>
                )}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {locale === "ar"
                  ? "مقالات ونصائح قانونية متخصصة لمساعدتكم في فهم القوانين والإجراءات القانونية"
                  : "Specialized legal articles and tips to help you understand laws and legal procedures"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Articles Section - Cream Background */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
                {locale === "ar" ? "مقالاتنا القانونية" : "OUR LEGAL ARTICLES"}
              </h2>
              <p className="text-[#0a1628]/60 text-base max-w-2xl mx-auto">
                {locale === "ar"
                  ? "اكتشف مجموعة واسعة من المقالات القانونية المتخصصة وابحث عن ما يهمك"
                  : "Discover a wide range of specialized legal articles and find what interests you"}
              </p>
            </motion.div>

            {/* Search and Filter Controls */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-[#0a1628]/40 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={
                      locale === "ar"
                        ? "ابحث في المقالات..."
                        : "Search articles..."
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ps-10 h-12 bg-white border-gray-200 focus:border-accent text-[#0a1628]"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className={
                        selectedCategory === category.id
                          ? "bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
                          : "border-gray-200 text-[#0a1628] hover:border-accent/50 hover:text-accent bg-white cursor-pointer"
                      }
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[#0a1628]/60">
                  {filteredPosts.length > 0 ? (
                    <span>
                      {locale === "ar"
                        ? `عرض ${displayedPosts.length} من ${filteredPosts.length} مقالة`
                        : `Showing ${displayedPosts.length} of ${filteredPosts.length} articles`}
                    </span>
                  ) : (
                    <span>
                      {locale === "ar" ? "لا توجد نتائج" : "No results found"}
                    </span>
                  )}
                </div>
                {(searchTerm || selectedCategory !== "all") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="text-[#0a1628]/60 hover:text-[#0a1628]"
                  >
                    {locale === "ar" ? "مسح الفلاتر" : "Clear Filters"}
                  </Button>
                )}
              </div>
            </div>

            {/* Blog Posts Grid */}
            {displayedPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0a1628] mb-6">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0a1628] mb-4">
                  {locale === "ar"
                    ? "لم يتم العثور على مقالات"
                    : "No Articles Found"}
                </h3>
                <p className="text-[#0a1628]/60 text-base max-w-md mx-auto mb-6">
                  {locale === "ar"
                    ? "جرب البحث بكلمات مختلفة أو تصفح جميع الفئات"
                    : "Try searching with different keywords or browse all categories"}
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {locale === "ar" ? "عرض جميع المقالات" : "View All Articles"}
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {displayedPosts.map((article, index) => (
                    <motion.article
                      key={article.id}
                      className="group bg-white border border-gray-100 shadow-sm hover:border-accent/50 overflow-hidden transition-all duration-300 flex flex-col h-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Image Section */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={
                            locale === "ar" ? article.titleAr : article.titleEn
                          }
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute top-4 start-4">
                          <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground text-xs font-medium">
                            {
                              categories.find(
                                (cat) => cat.id === article.category,
                              )?.name
                            }
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta Information */}
                        <div className="flex items-center gap-4 text-xs text-[#0a1628]/50 mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(article.date)}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {locale === "ar"
                              ? article.readTimeAr
                              : article.readTimeEn}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-serif font-bold text-[#0a1628] leading-tight line-clamp-2 mb-3 group-hover:text-accent transition-colors duration-200">
                          {locale === "ar" ? article.titleAr : article.titleEn}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-[#0a1628]/60 leading-relaxed line-clamp-2 mb-4 flex-1">
                          {locale === "ar"
                            ? article.excerptAr
                            : article.excerptEn}
                        </p>

                        {/* Read More */}
                        <Link href={`/blog/${article.slug}`}>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200">
                            {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                            <ArrowIcon className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Load More Button */}
                {filteredPosts.length > 3 && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setShowAllArticles(!showAllArticles)}
                      className="border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white bg-transparent font-medium px-8 cursor-pointer tracking-wide uppercase"
                    >
                      {showAllArticles
                        ? locale === "ar"
                          ? "عرض أقل"
                          : "Show Less"
                        : locale === "ar"
                          ? "تحميل المزيد"
                          : "Load More"}
                      <ArrowIcon className="ms-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section - Accent Background */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-accent-foreground mb-4">
                {locale === "ar"
                  ? "اشترك في النشرة القانونية"
                  : "Subscribe to Our Newsletter"}
              </h2>
              <p className="text-accent-foreground/80 text-base lg:text-lg max-w-xl mx-auto mb-8">
                {locale === "ar"
                  ? "احصل على آخر المقالات والنصائح القانونية مباشرة في بريدك الإلكتروني"
                  : "Get the latest legal articles and tips delivered directly to your email"}
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    locale === "ar" ? "بريدك الإلكتروني" : "Your email address"
                  }
                  className="bg-accent-foreground/10 border-accent-foreground/30 text-accent-foreground placeholder:text-accent-foreground/60 focus:border-accent-foreground h-12"
                  required
                />
                <Button
                  type="submit"
                  disabled={
                    isSubmitting || !email.trim() || !isValidEmail(email)
                  }
                  className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed h-12 px-8 font-medium tracking-wide uppercase cursor-pointer"
                >
                  {isSubmitting
                    ? locale === "ar"
                      ? "جاري الإرسال..."
                      : "Submitting..."
                    : locale === "ar"
                      ? "اشترك"
                      : "Subscribe"}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-xl font-serif font-bold text-center">
              {locale === "ar"
                ? "تم الاشتراك بنجاح!"
                : "Successfully Subscribed!"}
            </DialogTitle>
            <DialogDescription className="text-center mt-2">
              {locale === "ar"
                ? "شكراً لك على الاشتراك في نشرتنا القانونية. ستصلك آخر المقالات والنصائح القانونية مباشرة في بريدك الإلكتروني."
                : "Thank you for subscribing to our legal newsletter. You'll receive the latest legal articles and tips directly in your email."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium cursor-pointer"
            >
              <Mail className="me-2 h-4 w-4" />
              {locale === "ar" ? "ممتاز" : "Great"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

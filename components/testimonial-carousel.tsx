"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Quote, MessageSquare, Scale } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";

interface FAQ {
  id: number;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What are the initial steps to start a legal case?",
    questionAr: "ما هي الخطوات الأساسية لبدء قضية قانونية؟",
    answer:
      "The first step is to schedule a consultation where I assess your situation, gather necessary documents, and develop a legal strategy tailored to your case under UAE law. I then proceed with filing the appropriate legal documents with the relevant courts.",
    answerAr:
      "الخطوة الأولى هي حجز استشارة حيث أقيّم وضعك، أجمع المستندات اللازمة، وأطوّر استراتيجية قانونية مخصصة لقضيتك وفق القانون الإماراتي. ثم أتابع بتقديم المستندات القانونية للمحاكم المختصة.",
  },
  {
    id: 2,
    question: "What are the typical costs for legal services?",
    questionAr: "ما هي التكاليف المتوقعة للخدمات القانونية؟",
    answer:
      "Fees vary depending on the complexity and type of case. I offer transparent pricing with options including hourly rates, fixed fees, and retainer arrangements. A detailed estimate is provided during the initial consultation.",
    answerAr:
      "تختلف الأتعاب حسب تعقيد ونوع القضية. أقدم تسعيراً شفافاً مع خيارات تشمل الأسعار بالساعة والرسوم الثابتة واتفاقات الاشتراك. يتم تقديم تقدير مفصل خلال الاستشارة الأولية.",
  },
  {
    id: 3,
    question: "Do you handle cases in DIFC and Abu Dhabi courts?",
    questionAr: "هل تتعامل مع قضايا في محاكم ديفي وأبوظبي؟",
    answer:
      "Yes, I represent clients across all UAE courts including Dubai Courts, DIFC Courts, Abu Dhabi Courts, and federal courts. I also handle arbitration cases and provide legal opinions on UAE law.",
    answerAr:
      "نعم، أمثل العملاء في جميع محاكم الإمارات بما في ذلك محاكم دبي ومحاكم مركز دبي المالي العالمي ومحاكم أبوظبي والمحاكم الاتحادية. كما أتعامل مع قضايا التحكيم وأقدم آراء قانونية.",
  },
  {
    id: 4,
    question: "How long does a typical legal case take in the UAE?",
    questionAr: "كم تستغرق القضية القانونية في الإمارات؟",
    answer:
      "Duration varies based on case complexity and jurisdiction. Simple matters in Dubai Courts may resolve in weeks, while complex commercial disputes can take months. DIFC cases follow their own timeline.",
    answerAr:
      "تختلف المدة بناءً على تعقيد القضية والاختصاص القضائي. القضايا البسيطة في محاكم دبي قد تُحل في أسابيع، بينما النزاعات التجارية المعقدة قد تستغرق شهوراً. قضايا مركز دبي المالي لها جدول زمني خاص.",
  },
];

interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  content: string;
  contentAr: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khalid Al-Mansouri",
    nameAr: "خالد المنصوري",
    role: "Business Owner - Dubai",
    roleAr: "صاحب شركة - دبي",
    content:
      "Attorney Al-Harmoudi provided exceptional legal guidance for our company's establishment in DIFC. His deep knowledge of UAE commercial law made the process seamless.",
    contentAr:
      "قدم المحامي الهرمودي إرشاداً قانونياً استثنائياً لتأسيس شركتنا في مركز دبي المالي. معرفته العميقة بالقانون التجاري الإماراتي جعلت العملية سلسة.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Al-Suwaidi",
    nameAr: "فاطمة السويدي",
    role: "Real Estate Investor - Abu Dhabi",
    roleAr: "مستثمرة عقارية - أبوظبي",
    content:
      "Outstanding expertise in UAE real estate law. He handled our property transactions in Dubai Marina with professionalism and attention to every detail.",
    contentAr:
      "خبرة متميزة في قانون العقارات الإماراتي. تعامل مع معاملاتنا العقارية في دبي مارينا باحترافية واهتمام بكل التفاصيل.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sultan Al-Maktoum",
    nameAr: "سلطان المكتوم",
    role: "Tech Startup Founder - Dubai",
    roleAr: "مؤسس شركة تقنية - دبي",
    content:
      "His strategic approach helped our Dubai-based startup navigate complex licensing and regulatory requirements. Highly recommended for business legal matters in the UAE.",
    contentAr:
      "نهجه الاستراتيجي ساعد شركتنا الناشئة في دبي على التعامل مع متطلبات الترخيص والتنظيم المعقدة. أوصي به بشدة للأمور القانونية التجارية في الإمارات.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { locale } = useLocale();

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-0">
      {/* Legal Quote Section - Minimal Dark */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative top line */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-accent/40" />
              <Scale className="w-4 h-4 text-accent/60" />
              <span className="w-10 h-px bg-accent/40" />
            </div>

            {/* Quote */}
            <blockquote className="relative">
              <span className="absolute -top-4 -start-2 sm:-start-6 text-accent/20 text-5xl sm:text-6xl lg:text-7xl font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="text-foreground/90 text-lg sm:text-xl lg:text-2xl font-serif italic leading-relaxed lg:leading-loose tracking-wide px-4 sm:px-6">
                {locale === "ar"
                  ? "القانون هو العقل المتحرر من الهوى"
                  : "Law is reason, free from passion"}
              </p>
              <span className="absolute -bottom-6 -end-2 sm:-end-6 text-accent/20 text-5xl sm:text-6xl lg:text-7xl font-serif leading-none select-none">
                &rdquo;
              </span>
            </blockquote>

            {/* Author */}
            <div className="mt-8 flex items-center gap-3">
              <span className="w-6 h-px bg-accent/30" />
              <span className="text-accent/70 text-xs tracking-[0.2em] uppercase font-medium">
                {locale === "ar" ? "أرسطو" : "Aristotle"}
              </span>
              <span className="w-6 h-px bg-accent/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Premium Beige Background */}
      <section className="py-16 lg:py-24 bg-premium">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0a1628] mb-4">
              {locale === "ar" ? "أسئلة شائعة" : "Frequently Asked Questions"}
            </h2>
            <p className="text-[#0a1628]/60 text-base max-w-2xl mx-auto">
              {locale === "ar"
                ? "إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا القانونية"
                : "Answers to the most common questions about our legal services"}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white overflow-hidden border border-[#0a1628]/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-start hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-[#0a1628] text-sm lg:text-base pe-4">
                    {locale === "ar" ? faq.questionAr : faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 bg-[#0a1628] flex items-center justify-center"
                  >
                    <ChevronDown className="w-4 h-4 text-white" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-[#0a1628]/70 text-sm lg:text-base leading-relaxed border-t border-gray-100 pt-4">
                        {locale === "ar" ? faq.answerAr : faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dark Background */}
      <section className="py-16 lg:py-24 bg-background grid-pattern">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent"></div>
              <MessageSquare className="w-5 h-5 text-accent" />
              <div className="h-px w-12 bg-accent"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              {locale === "ar" ? "آراء العملاء" : "Client Testimonials"}
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            className="relative bg-card border border-border p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-accent/30 mb-6" />

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-accent fill-current"
                      />
                    ),
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed italic">
                  "
                  {locale === "ar"
                    ? testimonials[currentTestimonial].contentAr
                    : testimonials[currentTestimonial].content}
                  "
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center border border-accent/30">
                    <span className="text-accent font-bold text-lg">
                      {(locale === "ar"
                        ? testimonials[currentTestimonial].nameAr
                        : testimonials[currentTestimonial].name
                      ).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {locale === "ar"
                        ? testimonials[currentTestimonial].nameAr
                        : testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {locale === "ar"
                        ? testimonials[currentTestimonial].roleAr
                        : testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-accent w-6"
                      : "bg-muted hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

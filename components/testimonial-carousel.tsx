"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Quote, MessageSquare } from "lucide-react";
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
      "The first step is to schedule a consultation where we assess your situation, gather necessary documents, and develop a legal strategy tailored to your case. We then proceed with filing the appropriate legal documents.",
    answerAr:
      "الخطوة الأولى هي حجز استشارة حيث نقيم وضعك، نجمع المستندات اللازمة، ونطور استراتيجية قانونية مخصصة لقضيتك. ثم نتابع بتقديم المستندات القانونية المناسبة.",
  },
  {
    id: 2,
    question: "What are the typical costs for legal services?",
    questionAr: "ما هي التكاليف المتوقعة للخدمات القانونية؟",
    answer:
      "Our fees vary depending on the complexity and type of case. We offer transparent pricing with options including hourly rates, fixed fees, and retainer packages. We provide a detailed estimate during the initial consultation.",
    answerAr:
      "تختلف أتعابنا حسب تعقيد ونوع القضية. نقدم تسعيراً شفافاً مع خيارات تشمل الأسعار بالساعة والرسوم الثابتة وباقات الاشتراك. نقدم تقديراً مفصلاً خلال الاستشارة الأولية.",
  },
  {
    id: 3,
    question: "What documents are needed for contract authentication?",
    questionAr: "ما هي الإجراءات اللازمة لتوثيق عقود أو اتفاقيات قانونية؟",
    answer:
      "For contract authentication, you'll need valid identification, the original contract, and any supporting documents. We guide you through the entire notarization process and ensure all legal requirements are met.",
    answerAr:
      "لتوثيق العقود، ستحتاج إلى هوية سارية، العقد الأصلي، وأي مستندات داعمة. نرشدك خلال عملية التوثيق بأكملها ونضمن استيفاء جميع المتطلبات القانونية.",
  },
  {
    id: 4,
    question: "How long does a typical legal case take?",
    questionAr: "كم تستغرق القضية القانونية النموذجية؟",
    answer:
      "The duration varies significantly based on case complexity, court schedules, and the cooperation of all parties. Simple matters may resolve in weeks, while complex litigation can take months or years.",
    answerAr:
      "تختلف المدة بشكل كبير بناءً على تعقيد القضية وجداول المحكمة وتعاون جميع الأطراف. الأمور البسيطة قد تُحل في أسابيع، بينما التقاضي المعقد قد يستغرق شهوراً أو سنوات.",
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
    name: "Ahmed Al-Rashid",
    nameAr: "أحمد الراشد",
    role: "Business Owner",
    roleAr: "صاحب شركة",
    content:
      "Exceptional legal service with great attention to detail. The team provided professional guidance throughout our case.",
    contentAr:
      "خدمة قانونية استثنائية مع اهتمام كبير بالتفاصيل. قدم الفريق إرشاداً مهنياً طوال قضيتنا.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Al-Mutairi",
    nameAr: "سارة المطيري",
    role: "Real Estate Investor",
    roleAr: "مستثمرة عقارية",
    content:
      "Outstanding expertise in real estate law. They made the complex process simple and stress-free.",
    contentAr:
      "خبرة متميزة في قانون العقارات. جعلوا العملية المعقدة بسيطة وخالية من التوتر.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al-Fahad",
    nameAr: "محمد الفهد",
    role: "Startup Founder",
    roleAr: "مؤسس شركة ناشئة",
    content:
      "Their strategic approach helped our startup avoid costly mistakes. Highly recommended for business legal matters.",
    contentAr:
      "نهجهم الاستراتيجي ساعد شركتنا الناشئة على تجنب الأخطاء المكلفة. أوصي بهم بشدة للأمور القانونية التجارية.",
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
      {/* Legal Quote Section - Dark with accent */}
      <section className="py-12 lg:py-16 bg-accent">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-10 h-10 text-accent-foreground/50 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-accent-foreground leading-relaxed mb-4">
              {locale === "ar"
                ? '"القانون قوة لابد أن تطبق على الجميع، و إلا أصبح الوطن غابة"'
                : '"The law is a force that must apply to everyone, otherwise the nation becomes a jungle"'}
            </blockquote>
            <p className="text-accent-foreground/70 text-sm">
              {locale === "ar"
                ? "— المحامي عبدالرحمن الهرمودي"
                : "— Attorney Abdulrahman Al-Harmoudi"}
            </p>
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
                className="bg-white overflow-hidden shadow-sm"
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

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Quote } from "lucide-react";
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
    question: "What types of businesses do you typically work with?",
    questionAr: "ما أنواع الشركات التي تعملون معها عادةً؟",
    answer:
      "We work with startups, SMEs, and growing businesses across various industries including technology, real estate, healthcare, and retail. Our flexible approach allows us to adapt our services to your specific needs.",
    answerAr:
      "نعمل مع الشركات الناشئة والمتوسطة والشركات النامية في مختلف القطاعات بما في ذلك التكنولوجيا والعقارات والرعاية الصحية والتجزئة. نهجنا المرن يتيح لنا تكييف خدماتنا لتلبية احتياجاتكم المحددة.",
  },
  {
    id: 2,
    question: "How quickly can you respond to legal emergencies?",
    questionAr: "ما مدى سرعة استجابتكم للطوارئ القانونية؟",
    answer:
      "We understand that legal issues don't follow business hours. Our team is available 24/7 for urgent matters, and we typically respond to non-urgent inquiries within 24 hours.",
    answerAr:
      "نحن ندرك أن المسائل القانونية لا تلتزم بساعات العمل. فريقنا متاح على مدار الساعة للأمور العاجلة، ونستجيب عادةً للاستفسارات غير العاجلة خلال 24 ساعة.",
  },
  {
    id: 3,
    question: "What is your fee structure?",
    questionAr: "ما هو هيكل الرسوم لديكم؟",
    answer:
      "We offer transparent pricing with multiple options including hourly rates, fixed fees for specific projects, and monthly retainer packages. We'll recommend the best option based on your needs and budget.",
    answerAr:
      "نقدم تسعيراً شفافاً مع خيارات متعددة تشمل الأسعار بالساعة والرسوم الثابتة للمشاريع المحددة وباقات الاشتراك الشهري. سنوصي بالخيار الأفضل بناءً على احتياجاتكم وميزانيتكم.",
  },
  {
    id: 4,
    question: "Do you handle international business matters?",
    questionAr: "هل تتعاملون مع الأمور التجارية الدولية؟",
    answer:
      "Yes, we have experience with cross-border transactions, international contracts, and business expansion into new markets. We also have a network of partner firms in key jurisdictions worldwide.",
    answerAr:
      "نعم، لدينا خبرة في المعاملات عبر الحدود والعقود الدولية والتوسع التجاري في الأسواق الجديدة. كما لدينا شبكة من الشركات الشريكة في الولايات القضائية الرئيسية حول العالم.",
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
      "Exceptional legal service with great attention to detail. Highly professional and trustworthy.",
    contentAr:
      "خدمة قانونية استثنائية مع اهتمام كبير بالتفاصيل. مهني جداً وجدير بالثقة.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    nameAr: "سارة جونسون",
    role: "Real Estate Investor",
    roleAr: "مستثمرة عقارية",
    content:
      "Outstanding expertise in real estate law. Made the complex process simple and stress-free.",
    contentAr:
      "خبرة متميزة في قانون العقارات. جعل العملية المعقدة بسيطة وخالية من التوتر.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al-Fahad",
    nameAr: "محمد الفهد",
    role: "Startup Founder",
    roleAr: "مؤسس شركة ناشئة",
    content:
      "Their strategic approach to legal matters helped our startup avoid costly mistakes. Highly recommended.",
    contentAr:
      "نهجهم الاستراتيجي في المسائل القانونية ساعد شركتنا الناشئة على تجنب الأخطاء المكلفة. أوصي بهم بشدة.",
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
    <div className="space-y-16 lg:space-y-24">
      {/* FAQ Section */}
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            {locale === "ar" ? "الأسئلة الشائعة" : "FREQUENTLY ASKED QUESTIONS"}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            {locale === "ar"
              ? "إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا"
              : "Answers to the most common questions about our services"}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-start hover:bg-muted/30 transition-colors duration-200"
              >
                <span className="font-medium text-foreground text-sm lg:text-base pe-4">
                  {locale === "ar" ? faq.questionAr : faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
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
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-muted-foreground text-sm lg:text-base leading-relaxed border-t border-border/50 pt-4">
                      {locale === "ar" ? faq.answerAr : faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            {locale === "ar" ? "آراء العملاء" : "CLIENT TESTIMONIALS"}
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
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-accent w-6"
                    : "bg-muted hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

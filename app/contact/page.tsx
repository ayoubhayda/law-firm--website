"use client";

import type React from "react";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Calendar,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: locale === "ar" ? "الهاتف" : "Phone",
      value: "+971 50 123 4567",
      description:
        locale === "ar"
          ? "متاح من 9 صباحاً إلى 6 مساءً"
          : "Available 9 AM to 6 PM",
    },
    {
      icon: MessageCircle,
      title: locale === "ar" ? "واتساب" : "WhatsApp",
      value: "+971 50 123 4567",
      description:
        locale === "ar"
          ? "متاح 24/7 للاستفسارات العاجلة"
          : "Available 24/7 for urgent inquiries",
    },
    {
      icon: Mail,
      title: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: "info@firmen-law.ae",
      description:
        locale === "ar" ? "سنرد خلال 24 ساعة" : "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: locale === "ar" ? "العنوان" : "Address",
      value:
        locale === "ar"
          ? "دبي، الإمارات العربية المتحدة"
          : "Dubai, United Arab Emirates",
      description:
        locale === "ar"
          ? "شارع الشيخ زايد، مركز دبي المالي العالمي"
          : "Sheikh Zayed Road, DIFC",
    },
  ];

  const officeHours = [
    {
      day: locale === "ar" ? "الأحد - الخميس" : "Sunday - Thursday",
      hours: locale === "ar" ? "9:00 ص - 6:00 م" : "9:00 AM - 6:00 PM",
    },
    {
      day: locale === "ar" ? "الجمعة - السبت" : "Friday - Saturday",
      hours: locale === "ar" ? "مغلق" : "Closed",
    },
  ];

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
                  {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                </span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                {locale === "ar" ? (
                  <>
                    تواصل <span className="text-accent">معنا</span>
                  </>
                ) : (
                  <>
                    GET IN <span className="text-accent">TOUCH</span>
                  </>
                )}
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {locale === "ar"
                  ? "نحن هنا لمساعدتكم. تواصلوا معنا للحصول على استشارة قانونية مهنية"
                  : "We are here to help you. Contact us for professional legal consultation"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info Section - Cream Background */}
        <section className="py-16 lg:py-24 bg-premium">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Section Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-accent"></div>
                    <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                      {locale === "ar" ? "أرسل رسالة" : "Send Message"}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1628] mb-3">
                    {locale === "ar" ? "تواصل معنا" : "GET IN TOUCH"}
                  </h2>
                  <p className="text-[#0a1628]/60 text-base">
                    {locale === "ar"
                      ? "نحن نقدر تواصلكم معنا ونتطلع لمساعدتكم في احتياجاتكم القانونية"
                      : "We value your communication and look forward to helping you with your legal needs"}
                  </p>
                </div>

                {/* Form */}
                <div className="bg-white border border-gray-100 shadow-sm p-6 lg:p-8">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#0a1628] mb-3">
                        {locale === "ar"
                          ? "تم إرسال الرسالة بنجاح!"
                          : "Message Sent Successfully!"}
                      </h3>
                      <p className="text-[#0a1628]/60">
                        {locale === "ar"
                          ? "شكراً لتواصلكم معنا. سنرد عليكم قريباً."
                          : "Thank you for contacting us. We'll get back to you soon."}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-[#0a1628] font-medium"
                          >
                            {getTranslation(locale, "name")}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={
                              locale === "ar" ? "اسمك الكامل" : "Your full name"
                            }
                            className="h-12 border-gray-200 bg-gray-50 focus:border-accent text-[#0a1628]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-[#0a1628] font-medium"
                          >
                            {getTranslation(locale, "phone")}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={
                              locale === "ar" ? "رقم الهاتف" : "Phone number"
                            }
                            className="h-12 border-gray-200 bg-gray-50 focus:border-accent text-[#0a1628]"
                            dir="ltr"
                            style={{
                              textAlign: locale === "ar" ? "right" : "left",
                            }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-[#0a1628] font-medium"
                        >
                          {getTranslation(locale, "email")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={
                            locale === "ar"
                              ? "بريدك الإلكتروني"
                              : "Your email address"
                          }
                          className="h-12 border-gray-200 bg-gray-50 focus:border-accent text-[#0a1628]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-[#0a1628] font-medium"
                        >
                          {locale === "ar" ? "موضوع الرسالة" : "Subject"}
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder={
                            locale === "ar"
                              ? "موضوع استفسارك"
                              : "Subject of your inquiry"
                          }
                          className="h-12 border-gray-200 bg-gray-50 focus:border-accent text-[#0a1628]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-[#0a1628] font-medium"
                        >
                          {getTranslation(locale, "message")}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={
                            locale === "ar"
                              ? "اكتب رسالتك هنا..."
                              : "Write your message here..."
                          }
                          className="border-gray-200 bg-gray-50 focus:border-accent resize-none text-[#0a1628]"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium cursor-pointer tracking-wide uppercase h-12"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground me-3" />
                            {locale === "ar" ? "جاري الإرسال..." : "Sending..."}
                          </>
                        ) : (
                          <>
                            {getTranslation(locale, "sendMessage")}
                            <Send className="ms-3 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Contact Details */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#0a1628] mb-6">
                    {locale === "ar"
                      ? "معلومات التواصل"
                      : "CONTACT INFORMATION"}
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="group flex items-start gap-4 p-4 bg-white border border-gray-100 shadow-sm hover:border-accent/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-[#0a1628] flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                          <info.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-[#0a1628] mb-1">
                            {info.title}
                          </h4>
                          <p
                            className="text-[#0a1628] text-sm font-medium mb-1"
                            dir="ltr"
                            style={{
                              textAlign: locale === "ar" ? "right" : "left",
                            }}
                          >
                            {info.value}
                          </p>
                          <p className="text-[#0a1628]/50 text-xs">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <motion.div
                  className="bg-white border border-gray-100 shadow-sm p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-[#0a1628] flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#0a1628]">
                      {locale === "ar" ? "ساعات العمل" : "Office Hours"}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-[#0a1628] text-sm font-medium">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            schedule.hours === "مغلق" ||
                            schedule.hours === "Closed"
                              ? "text-red-500"
                              : "text-accent"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  className="bg-[#0a1628] border border-border p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-white">
                        {locale === "ar" ? "احجز استشارة" : "Book Consultation"}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {locale === "ar"
                          ? "احصل على استشارة قانونية مجانية لمدة 30 دقيقة"
                          : "Get a free 30-minute legal consultation"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button
                      onClick={() => setIsConsultationModalOpen(true)}
                      className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-medium cursor-pointer tracking-wide uppercase"
                    >
                      <Calendar className="me-2 h-5 w-5" />
                      {locale === "ar" ? "احجز موعد" : "Book Appointment"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12 border-green-500/40 text-green-400 hover:bg-green-500/10 hover:text-green-400 bg-transparent font-medium cursor-pointer tracking-wide uppercase"
                    >
                      <MessageCircle className="me-2 h-5 w-5" />
                      {locale === "ar"
                        ? "تواصل عبر واتساب"
                        : "Contact via WhatsApp"}
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}

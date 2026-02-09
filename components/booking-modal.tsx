"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/hooks/use-locale-context";
import { Phone, Mail, Clock, Send, Calendar } from "lucide-react";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { locale } = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    onClose();
  };

  const timeSlots = [
    { value: "09:00", label: locale === "ar" ? "09:00 صباحاً" : "09:00 AM" },
    { value: "10:00", label: locale === "ar" ? "10:00 صباحاً" : "10:00 AM" },
    { value: "11:00", label: locale === "ar" ? "11:00 صباحاً" : "11:00 AM" },
    { value: "12:00", label: locale === "ar" ? "12:00 ظهراً" : "12:00 PM" },
    { value: "14:00", label: locale === "ar" ? "02:00 مساءً" : "02:00 PM" },
    { value: "15:00", label: locale === "ar" ? "03:00 مساءً" : "03:00 PM" },
    { value: "16:00", label: locale === "ar" ? "04:00 مساءً" : "04:00 PM" },
    { value: "17:00", label: locale === "ar" ? "05:00 مساءً" : "05:00 PM" },
  ];

  const serviceOptions = [
    { value: "family-law", labelAr: "قانون الأسرة", labelEn: "Family Law" },
    { value: "real-estate", labelAr: "العقارات", labelEn: "Real Estate" },
    {
      value: "business-law",
      labelAr: "القانون التجاري",
      labelEn: "Business Law",
    },
    {
      value: "criminal-defense",
      labelAr: "الدفاع الجنائي",
      labelEn: "Criminal Defense",
    },
    {
      value: "contract-drafting",
      labelAr: "صياغة العقود",
      labelEn: "Contract Drafting",
    },
    {
      value: "litigation",
      labelAr: "التقاضي والتحكيم",
      labelEn: "Litigation & Arbitration",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">
            {locale === "ar" ? "احجز موعد استشارة" : "Book a Consultation"}
          </DialogTitle>
          <DialogDescription>
            {locale === "ar"
              ? "اختر الموعد المناسب لك وسنتواصل معك لتأكيد الحجز"
              : "Choose a convenient time and we'll contact you to confirm"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">
              {locale === "ar" ? "الاسم الكامل" : "Full Name"}
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              {locale === "ar" ? "رقم الهاتف" : "Phone Number"}
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder={
                locale === "ar" ? "أدخل رقم هاتفك" : "Enter your phone"
              }
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">
              {locale === "ar" ? "البريد الإلكتروني" : "Email"}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder={
                locale === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label>{locale === "ar" ? "نوع الخدمة" : "Service Type"}</Label>
            <Select name="service" required>
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    locale === "ar" ? "اختر الخدمة" : "Select a service"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {locale === "ar" ? service.labelAr : service.labelEn}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <Label htmlFor="date">
              {locale === "ar" ? "تاريخ الموعد" : "Appointment Date"}
            </Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label>{locale === "ar" ? "الوقت المفضل" : "Preferred Time"}</Label>
            <Select name="time" required>
              <SelectTrigger>
                <SelectValue
                  placeholder={locale === "ar" ? "اختر الوقت" : "Select a time"}
                />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot.value} value={slot.value}>
                    {slot.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">
              {locale === "ar"
                ? "ملاحظات إضافية (اختياري)"
                : "Additional Notes (Optional)"}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              placeholder={
                locale === "ar"
                  ? "أي معلومات إضافية تود مشاركتها..."
                  : "Any additional information you'd like to share..."
              }
            />
          </div>

          {/* Contact Info */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-accent" />
              <span>
                {locale === "ar"
                  ? "استشارة مجانية لمدة 30 دقيقة"
                  : "Free 30-minute consultation"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-accent" />
              <span>+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>
                {locale === "ar"
                  ? "سنتواصل معك لتأكيد الموعد"
                  : "We'll contact you to confirm the appointment"}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              locale === "ar" ? (
                "جاري الحجز..."
              ) : (
                "Booking..."
              )
            ) : (
              <>
                <Send className="h-4 w-4 me-2" />
                {locale === "ar" ? "تأكيد الحجز" : "Confirm Booking"}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

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
import { Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

interface ServiceConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export function ServiceConsultationModal({
  isOpen,
  onClose,
  serviceName,
}: ServiceConsultationModalProps) {
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">
            {locale === "ar"
              ? "احجز استشارة مجانية"
              : "Book a Free Consultation"}
          </DialogTitle>
          <DialogDescription>
            {serviceName && (
              <span className="block text-accent font-medium mt-1">
                {serviceName}
              </span>
            )}
            {locale === "ar"
              ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت"
              : "Fill out the form below and we'll contact you shortly"}
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

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">
              {locale === "ar" ? "تفاصيل الاستشارة" : "Consultation Details"}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={
                locale === "ar"
                  ? "اكتب تفاصيل قضيتك أو استفسارك..."
                  : "Describe your case or inquiry..."
              }
            />
          </div>

          {/* Contact Info */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-accent" />
              <span>+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-accent" />
              <span>info@adlex-law.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>
                {locale === "ar"
                  ? "نرد خلال 24 ساعة"
                  : "We respond within 24 hours"}
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
                "جاري الإرسال..."
              ) : (
                "Sending..."
              )
            ) : (
              <>
                <Send className="h-4 w-4 me-2" />
                {locale === "ar" ? "إرسال الطلب" : "Send Request"}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

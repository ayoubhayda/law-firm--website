"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/hooks/use-locale-context";
import {
  Send,
  CheckCircle2,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useState, useRef } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { locale } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      formRef.current?.reset();

      // Auto-close after 2.5s
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch {
      setStatus("error");
      setErrorMessage(
        locale === "ar"
          ? "حدث خطأ أثناء الإرسال. حاول مرة أخرى."
          : "Something went wrong. Please try again.",
      );
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    formRef.current?.reset();
    onClose();
  };

  const isAr = locale === "ar";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[440px] max-w-[calc(100vw-2rem)] p-0 gap-0 overflow-hidden border-border/50">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-xl font-serif tracking-tight">
            {isAr ? "طلب استشارة" : "Request a Consultation"}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            {isAr
              ? "أرسل لنا رسالتك وسنتواصل معك قريباً"
              : "Send us a message and we'll get back to you shortly"}
          </p>
        </DialogHeader>

        {/* Success State */}
        {status === "success" ? (
          <div className="px-6 pb-8 pt-4 flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold">
                {isAr ? "تم الإرسال بنجاح" : "Message Sent!"}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {isAr
                  ? "شكراً لك. سنتواصل معك في أقرب وقت."
                  : "Thank you. We'll be in touch soon."}
              </p>
            </div>
          </div>
        ) : (
          /* Form */
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="px-6 pb-6 space-y-3.5"
          >
            {/* Name */}
            <div className="relative">
              <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                name="name"
                required
                placeholder={isAr ? "الاسم الكامل" : "Full name"}
                className="ps-9 h-11 bg-muted/40 border-border/50 focus-visible:bg-background transition-colors"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                name="email"
                type="email"
                required
                placeholder={isAr ? "البريد الإلكتروني" : "Email address"}
                className="ps-9 h-11 bg-muted/40 border-border/50 focus-visible:bg-background transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/60" />
              <Input
                name="phone"
                type="tel"
                required
                placeholder={isAr ? "رقم الهاتف" : "Phone number"}
                className="ps-9 h-11 bg-muted/40 border-border/50 focus-visible:bg-background transition-colors"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute start-3 top-3 h-4 w-4 text-muted-foreground/60" />
              <Textarea
                name="message"
                required
                rows={2}
                placeholder={
                  isAr
                    ? "اكتب رسالتك باختصار..."
                    : "Briefly describe your inquiry..."
                }
                className="ps-9 min-h-[72px] bg-muted/40 border-border/50 focus-visible:bg-background transition-colors resize-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-sm text-destructive text-center">
                {errorMessage}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-11 bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-wide cursor-pointer"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 me-2 animate-spin" />
                  {isAr ? "جاري الإرسال..." : "Sending..."}
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 me-2" />
                  {isAr ? "إرسال الرسالة" : "Send Message"}
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

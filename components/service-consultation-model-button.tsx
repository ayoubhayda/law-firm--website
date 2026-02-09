"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale-context";
import { useConsultationModal } from "@/hooks/use-consultation-modal";
import { ServiceConsultationModal } from "./service-consultation-modal";
import { Phone } from "lucide-react";

export default function ServiceConsultationModelButton() {
  const { locale } = useLocale();
  const { isOpen, openModal, closeModal } = useConsultationModal();

  return (
    <>
      <Button
        size="lg"
        onClick={openModal}
        className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium px-8 cursor-pointer tracking-wide uppercase"
      >
        {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent font-medium px-8 cursor-pointer tracking-wide uppercase"
        asChild
      >
        <a href="tel:+966501234567">
          <Phone className="me-2 h-5 w-5" />
          {locale === "ar" ? "اتصل الآن" : "Call Now"}
        </a>
      </Button>
      <ServiceConsultationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}

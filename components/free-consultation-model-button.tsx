"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale-context";

interface FreeConsultationModelButtonProps {
  onClick: () => void;
}

export function FreeConsultationModelButton({
  onClick,
}: FreeConsultationModelButtonProps) {
  const { locale } = useLocale();

  return (
    <Button
      size="lg"
      onClick={onClick}
      className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-medium px-8 cursor-pointer tracking-wide uppercase"
    >
      {locale === "ar" ? "احجز استشارة مجانية" : "Book Free Consultation"}
    </Button>
  );
}

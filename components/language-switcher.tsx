"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages, Check } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, switchLocale, isLoaded } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en" as Locale, name: "English", flag: "🇺🇸" },
    { code: "ar" as Locale, name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (newLocale: Locale) => {
    switchLocale(newLocale);
    setIsOpen(false);
  };

  // Don't render until locale is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <Button
        variant="outline"
        disabled
        className="bg-transparent border-border/50 dark:border-zinc-700 shadow-none"
      >
        <Languages className="h-4 w-4" />
        <span className="sr-only">Select language</span>
      </Button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent border-border/50 dark:border-zinc-700 hover:border-accent/50 hover:bg-accent/5 dark:hover:bg-accent/20 dark:hover:text-white dark:hover:border-accent/30 cursor-pointer transition-all duration-200 shadow-none"
      >
        <Languages className="h-4 w-4" />
        <span className="sr-only">Select language</span>
      </Button>

      {isOpen && (
        <div className="absolute end-0 top-full mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-accent/10 transition-colors",
                  locale === language.code && "bg-accent/5",
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
                {locale === language.code && (
                  <Check className="h-4 w-4 text-accent" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

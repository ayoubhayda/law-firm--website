"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X, Phone } from "lucide-react";
import { useLocale } from "@/hooks/use-locale-context";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import Logo from "@/assets/logos/FIRMEN-LOGO.png";
import Image from "next/image";
import { ServiceConsultationModal } from "./service-consultation-modal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: getTranslation(locale, "home"), href: "/" },
    { name: getTranslation(locale, "about"), href: "/about" },
    { name: getTranslation(locale, "services"), href: "/services" },
    { name: getTranslation(locale, "blog"), href: "/blog" },
    { name: getTranslation(locale, "contact"), href: "/contact" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                {/* Elegant Law Firm Icon */}
                <Image
                  src={Logo}
                  alt="Adlex Logo"
                  width={30}
                  height={30}
                  priority
                />

                <div className="hidden sm:flex flex-col">
                  <span className="text-2xl font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {locale === "ar" ? "فيرمن" : "Firmen"}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 tracking-wide uppercase",
                      isActiveRoute(item.href)
                        ? "text-accent"
                        : "text-foreground/70 hover:text-accent",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4 rtl:space-x-reverse">
              <LanguageSwitcher />
              <Button
                variant="outline"
                onClick={() => setIsConsultationOpen(true)}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium transition-all duration-200 cursor-pointer tracking-wide uppercase text-sm px-6"
              >
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2 rtl:space-x-reverse">
              <LanguageSwitcher />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent border-border/50 hover:border-accent hover:bg-accent/10 cursor-pointer transition-all duration-200"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-3 pb-4 space-y-1 border-t border-border/30 bg-background/95 backdrop-blur-md">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium transition-colors duration-200 tracking-wide uppercase",
                      isActiveRoute(item.href)
                        ? "text-accent border-s-2 border-accent bg-accent/5"
                        : "text-foreground/70 hover:text-accent hover:bg-accent/5",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 px-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsConsultationOpen(true);
                      setIsOpen(false);
                    }}
                    size="lg"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-medium py-3 transition-all duration-200 cursor-pointer tracking-wide uppercase"
                  >
                    <Phone className="w-4 h-4 me-2" />
                    {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ServiceConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        serviceName={""}
      />
    </>
  );
}

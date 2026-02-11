"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { AboutPreview } from "@/components/about-preview";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTASection } from "@/components/cta-section";
import { useLocale } from "@/hooks/use-locale-context";
import PracticeAreasBar from "@/components/General/PracticeAreasBar";

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Lawyer Portrait */}
        <HeroSection />

        {/* Practice Areas Bar */}
        <PracticeAreasBar />

        {/* Vision & Mission + Services Grid */}
        <ServicesPreview />

        {/* Why Firmen + Partners */}
        <AboutPreview />

        {/* Quote + FAQ + Testimonials */}
        <TestimonialCarousel />

        {/* Blog + Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

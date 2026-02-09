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

export default function HomePage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section with Lawyer Portrait and Stats Badges */}
        <HeroSection />

        {/* Services Section: Trusted + Corporate Legal Support */}
        <ServicesPreview />

        {/* About Section: Features + Real-World Expertise */}
        <AboutPreview />

        {/* FAQ + Testimonials Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <TestimonialCarousel />
          </div>
        </section>

        {/* Blog Posts + Final CTA */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

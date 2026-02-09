import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display, Cairo } from "next/font/google";
import { ClientLayout } from "@/components/client-layout";
import { LocaleProvider } from "@/hooks/use-locale-context";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adex | Professional Law Firm Website",
  description:
    "Adex is a modern, responsive law firm website featuring consultation booking, dark mode, multilingual support, and SEO optimization. Built with Next.js, TypeScript, and Tailwind CSS.",

  metadataBase: new URL("https://adex-law.vercel.app"),

  keywords: [
    "Law Firm Website",
    "Legal Website Design",
    "Next.js Law Firm",
    "Consultation Booking Website",
    "Corporate Website",
    "Multilingual Website",
    "Tailwind CSS",
    "TypeScript",
  ],

  openGraph: {
    title: "Adex | Modern Law Firm Website",
    description:
      "A professional law firm website with consultation booking, blog system, dark mode, and multilingual support.",
    url: "https://adex-law.vercel.app",
    siteName: "Adex",
    images: [
      {
        url: "https://adex-law.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Adex Law Firm Website – Professional Legal Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adex | Modern Law Firm Website",
    description:
      "Professional law firm website built with Next.js, featuring consultation booking and multilingual support.",
    images: ["https://adex-law.vercel.app/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cairo.variable}`}
        suppressHydrationWarning
      >
        <LocaleProvider>
          <ClientLayout>{children}</ClientLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}

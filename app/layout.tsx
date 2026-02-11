import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display, Cairo } from "next/font/google";
import { LocaleProvider } from "@/hooks/use-locale-context";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

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
  title: "Firmen | فيرمن - مكتب محاماة في الإمارات",
  description:
    "فيرمن - مكتب المحامي عبدالرحمن الهرمودي للمحاماة والاستشارات القانونية في دبي، الإمارات العربية المتحدة. خدمات قانونية متميزة تشمل الاستشارات القانونية، القانون التجاري، العقارات، والتمثيل أمام المحاكم. Firmen - The Law Office of Abdulrahman Al-Harmoudi in Dubai, UAE.",

  metadataBase: new URL("https://firmen-law.vercel.app"),

  keywords: [
    "مكتب محاماة دبي",
    "محامي في الإمارات",
    "استشارات قانونية",
    "فيرمن",
    "Firmen",
    "عبدالرحمن الهرمودي",
    "Law Firm Dubai",
    "Legal Services UAE",
    "Legal Consultation Dubai",
    "محامي دبي",
  ],

  openGraph: {
    title: "Firmen | فيرمن - مكتب محاماة في الإمارات",
    description:
      "مكتب المحامي عبدالرحمن الهرمودي - خدمات قانونية متميزة في دبي. The Law Office of Abdulrahman Al-Harmoudi - Premium Legal Services in Dubai.",
    url: "https://firmen-law.vercel.app",
    siteName: "Firmen | فيرمن",
    images: [
      {
        url: "https://firmen-law.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Firmen - فيرمن مكتب محاماة في الإمارات",
      },
    ],
    locale: "ar_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Firmen | فيرمن - مكتب محاماة في الإمارات",
    description:
      "مكتب المحامي عبدالرحمن الهرمودي - خدمات قانونية متميزة في دبي. Premium Legal Services in Dubai, UAE.",
    images: ["https://firmen-law.vercel.app/opengraph-image.png"],
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

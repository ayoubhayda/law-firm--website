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
  title: "Firmen | فيرمن - مكتب محاماة متخصص",
  description:
    "فيرمن - مكتب محاماة متخصص يقدم خدمات قانونية متميزة تشمل الاستشارات القانونية، الترجمة القانونية، الملكية الفكرية، والتمثيل في المحاكم. Firmen - Professional law firm providing exceptional legal services.",

  metadataBase: new URL("https://firmen-law.vercel.app"),

  keywords: [
    "مكتب محاماة",
    "استشارات قانونية",
    "محامي",
    "فيرمن",
    "Firmen",
    "Law Firm",
    "Legal Services",
    "Legal Consultation",
    "الملكية الفكرية",
    "الترجمة القانونية",
  ],

  openGraph: {
    title: "Firmen | فيرمن - مكتب محاماة متخصص",
    description:
      "مكتب محاماة متخصص يقدم خدمات قانونية متميزة. Professional law firm with exceptional legal services.",
    url: "https://firmen-law.vercel.app",
    siteName: "Firmen | فيرمن",
    images: [
      {
        url: "https://firmen-law.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Firmen - فيرمن مكتب محاماة متخصص",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Firmen | فيرمن - مكتب محاماة متخصص",
    description:
      "مكتب محاماة متخصص يقدم خدمات قانونية متميزة. Professional law firm with exceptional legal services.",
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

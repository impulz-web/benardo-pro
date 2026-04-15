import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SEOMetadata } from "@/components/seo/seo-metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benardo.hotcorebeatz.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "Benardo Pro | Full-Stack Web Developer & Music Business Strategist in Kenya",
    template: "%s | Benardo Pro",
  },
  description:
    "Benardo Pro provides full-stack web development and music business strategy services in Kenya. Build fast, scalable websites, product platforms, and SEO-focused digital experiences with Next.js, TypeScript, and AI workflows.",
  keywords: [
    "Benardo Pro",
    "Benardo Pro Kenya",
    "Benardo Pro developer",
    "web development Nakuru",
    "website developer Kenya",
    "full-stack developer Africa",
    "music business strategy Kenya",
    "e-commerce website Kenya",
    "Next.js developer Nakuru",
    "TypeScript developer Kenya",
    "website design Kenya",
    "online store Kenya",
    "M-Pesa integration",
    "digital marketing Nakuru",
    "music production Kenya",
    "artist branding Africa",
    "startup website Kenya",
    "business website Africa",
    "freelance developer Nakuru",
    "web agency Kenya",
    "professional website Kenya",
    "affordable website Kenya",
    "custom web development Africa",
  ],
  authors: [{ name: "Benardo", url: "https://benardo.hotcorebeatz.com" }],
  creator: "Benardo",
  publisher: "Benardo Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Benardo Pro | Full-Stack Web Developer & Music Business Strategist in Kenya",
    description:
      "Benardo Pro provides full-stack web development and music business strategy services in Kenya, with SEO-focused builds powered by Next.js, TypeScript, and AI workflows.",
    type: "website",
    url: "https://benardo.hotcorebeatz.com",
    siteName: "Benardo Pro",
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benardo Pro | Full-Stack Web Developer & Music Business Strategist in Kenya",
    description:
      "Benardo Pro provides full-stack web development and music business strategy services in Kenya, with SEO-focused builds powered by Next.js, TypeScript, and AI workflows.",
    creator: "@benardopro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEOMetadata />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

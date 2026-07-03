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
    default: "Benard Mulindi | Full-Stack Web Developer & Media Producer",
    template: "%s | Benard Mulindi",
  },
  description:
    "Benard Mulindi provides full-stack web development and media production services. Build fast, scalable websites, product platforms, and digital experiences with Next.js, TypeScript, and AI workflows.",
  keywords: [
    "Benard Mulindi",
    "Benard Mulindi Kenya",
    "Benard Mulindi developer",
    "web development Nakuru",
    "website developer Kenya",
    "full-stack developer Africa",
    "media production Kenya",
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
  authors: [{ name: "Benard Mulindi", url: "https://benardo.hotcorebeatz.com" }],
  creator: "Benard Mulindi",
  publisher: "Benard Mulindi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Benard Mulindi | Full-Stack Web Developer & Media Producer",
    description:
      "Benard Mulindi provides full-stack web development and media production services, with SEO-focused builds powered by Next.js, TypeScript, and AI workflows.",
    type: "website",
    url: "https://benardo.hotcorebeatz.com",
    siteName: "Benard Mulindi",
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benard Mulindi | Full-Stack Web Developer & Media Producer",
    description:
      "Benard Mulindi provides full-stack web development and media production services, with SEO-focused builds powered by Next.js, TypeScript, and AI workflows.",
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

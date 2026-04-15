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
    default: "Benardo Pro | Web Development & Music Business Strategy in Nakuru, Kenya",
    template: "%s | Benardo Pro",
  },
  description:
    "Professional web development and music business strategy services in Nakuru, Kenya. Expert full-stack development with Next.js, TypeScript, and AI workflows. Serving clients across Kenya and Africa.",
  keywords: [
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
    title: "Benardo Pro | Web Development & Music Business Strategy in Nakuru, Kenya",
    description:
      "Professional web development and music business strategy services in Nakuru, Kenya. Expert full-stack development with Next.js, TypeScript, and AI workflows.",
    type: "website",
    url: "https://benardo.hotcorebeatz.com",
    siteName: "Benardo Pro",
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benardo Pro | Web Development & Music Business Strategy in Nakuru, Kenya",
    description:
      "Professional web development and music business strategy services in Nakuru, Kenya. Expert full-stack development with Next.js, TypeScript, and AI workflows.",
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

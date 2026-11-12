import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SEOMetadata } from "@/components/seo/seo-metadata";
import { CONTACT, LOCATION, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImage = {
  url: "/benardo-hero image.png",
  alt: `${CONTACT.displayName} — Music Business Consultant & Full-Stack Developer in Kenya`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${CONTACT.displayName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: CONTACT.fullName, url: siteConfig.url }],
  creator: CONTACT.fullName,
  publisher: CONTACT.fullName,
  category: "Business & Technology Consulting",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: `${CONTACT.displayName} | Music Business Consultant & Full-Stack Developer`,
    locale: "en_KE",
    alternateLocale: ["en_US", "en_GB"],
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@benardopro",
    images: [ogImage.url],
  },
  other: {
    "geo.region": LOCATION.country,
    "geo.placename": LOCATION.city,
    "geo.position": `${LOCATION.latitude};${LOCATION.longitude}`,
    ICBM: `${LOCATION.latitude}, ${LOCATION.longitude}`,
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

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
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

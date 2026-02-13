import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://benardo.pro"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "Benardo Pro | Senior Full-Stack Engineer",
    template: "%s | Benardo Pro",
  },
  description:
    "Minimal premium portfolio for Benardo, a senior full-stack engineer shipping fast, scalable products with Next.js, TypeScript, and AI workflows.",
  openGraph: {
    title: "Benardo Pro | Senior Full-Stack Engineer",
    description:
      "I build clean, fast, conversion-focused web products and automations.",
    type: "website",
    url: "https://benardo.pro",
    siteName: "Benardo Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benardo Pro | Senior Full-Stack Engineer",
    description:
      "Premium minimal portfolio built with Next.js and a Hotcorebeatz-inspired theme.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "30 Projects Glossary | Daily Coding Challenge Showcase",
  description: "A visual showcase of 30 projects from the daily coding challenge. Each project features unique functionality built with modern web technologies.",
  keywords: ["coding challenge", "web development", "next.js", "portfolio", "projects"],
  authors: [{ name: "paarad" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "30 Days - 30 Projects Glossary",
    description: "Visual showcase of 30 unique web projects built in 30 days (Aug 21 - Sept 19). From AI tools to meme generators, crypto toys to productivity apps. Built with Next.js, OpenAI, and modern web tech.",
    type: "website",
    locale: "en_US",
    url: "https://glossary30projects.paarad.org",
    siteName: "30 Days 30 Projects",
    images: [
      {
        url: "/screenshots/banner.png",
        width: 1200,
        height: 630,
        alt: "30 Days 30 Projects - Daily coding challenge showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Days - 30 Projects Glossary",
    description: "30 unique web projects built in 30 days. AI tools, meme generators, crypto toys & more. Aug 21 - Sept 19 daily coding challenge.",
    images: ["/screenshots/banner.png"],
    creator: "@paarad",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

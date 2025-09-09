import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "30 Projects Glossary | Daily Coding Challenge Showcase",
  description: "A visual showcase of 30 projects from the daily coding challenge. Each project features unique functionality built with modern web technologies.",
  keywords: ["coding challenge", "web development", "next.js", "portfolio", "projects"],
  authors: [{ name: "paarad" }],
  openGraph: {
    title: "30 Projects Glossary",
    description: "A visual showcase of 30 projects from the daily coding challenge",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "30 Projects Glossary",
    description: "A visual showcase of 30 projects from the daily coding challenge",
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

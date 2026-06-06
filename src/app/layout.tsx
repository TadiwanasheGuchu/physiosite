import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sossus Physiotherapy | Desert-Modern Healing",
  description:
    "A fusion of Namibian warmth and precision medical expertise. Experience a sanctuary designed for recovery, from the dunes to the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {/* Global grain texture — fixed behind all content */}
        <div
          className="fixed inset-0 pointer-events-none grain-texture opacity-[0.03] z-[-1]"
          aria-hidden="true"
        />
        <Nav />
        <main className="relative pt-24 overflow-hidden min-h-svh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

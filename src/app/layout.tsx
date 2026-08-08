import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

import "./globals.css";

// Initialize fonts
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Pandey | Marketing Systems Consultant",
  description: "I help B2B companies build websites, SEO, and content systems that compound over time instead of restarting every quarter.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`scroll-smooth ${geist.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`flex min-h-screen flex-col bg-background text-foreground antialiased ${geist.variable} ${playfair.variable}`}
      >
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ClarityScript from "@/components/common/ClarityScript";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sachinpandey.com.np";

const title = "Sachin Pandey | B2B Marketing Systems, AI SEO & GEO";
const description =
  "I help B2B companies build websites, SEO, and content systems that compound over time instead of restarting every quarter. AI search visibility, GEO, AEO, and content operations.";

export const metadata: Metadata = {
  // Absolute URLs for OG/canonical/sitemap resolve against this
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sachin Pandey",
  },
  description,
  applicationName: "Sachin Pandey",
  authors: [{ name: "Sachin Pandey", url: siteUrl }],
  creator: "Sachin Pandey",
  publisher: "Sachin Pandey",
  category: "marketing",
  keywords: [
    "B2B marketing consultant",
    "AI SEO",
    "GEO generative engine optimization",
    "AEO answer engine optimization",
    "AI search visibility",
    "content operations",
    "technical SEO",
    "B2B SaaS marketing",
    "marketing systems",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sachin Pandey",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "p:domain_verify": "fc244fb353c54095039e817330fc1c50", // <-- Pinterest Verification
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
      className={cn("scroll-smooth", playfair.variable)}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={cn(
        "flex min-h-screen flex-col bg-background text-foreground antialiased",
        playfair.variable
      )}>
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        <WhatsAppButton />
        <ClarityScript />
      </body>
    </html>
  );
}
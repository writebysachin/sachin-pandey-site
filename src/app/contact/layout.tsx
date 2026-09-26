import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute SEO and content audit of your website. Tell me what's broken and I'll tell you what's actually causing it — no pitch deck.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Book a Free SEO & Content Audit",
    description:
      "Book a free 30-minute SEO and content audit of your website. No pitch deck.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

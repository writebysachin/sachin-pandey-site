import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Free SEO Audit Tool",
  description:
    "Run a free instant SEO audit of any website. Get actionable SEO and content fixes delivered to your inbox — technical issues, on-page gaps, and AI search readiness.",
  alternates: { canonical: "/tools/seo-audit" },
  openGraph: {
    title: "Free SEO Audit Tool | Check Your Website in 60 Seconds",
    description:
      "Run a free instant SEO audit of any website and get actionable fixes delivered to your inbox.",
    url: "/tools/seo-audit",
  },
};

export default function SEOAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

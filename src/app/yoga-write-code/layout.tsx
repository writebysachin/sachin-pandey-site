import type { Metadata } from "next";

// The page itself is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Yoga Write Code",
  description:
    "An AI platform for B2B content and SEO systems, built from problems I saw in real client work. Early access is open.",
  alternates: { canonical: "/yoga-write-code" },
  openGraph: {
    title: "Yoga Write Code | AI Content & SEO Platform",
    description:
      "An AI platform for B2B content and SEO systems, built from problems I saw in real client work.",
    url: "/yoga-write-code",
  },
};

export default function YogaWriteCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

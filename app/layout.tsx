import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sachinpandey.com.np"),
  title: "Sachin Pandey — Master Business Operation System",
  description:
    "SEO + automation systems operator helping SMBs improve search visibility, reporting and growth operations.",
  openGraph: {
    title: "Sachin Pandey — Master Business Operation System",
    description:
      "SEO + automation systems operator helping SMBs improve search visibility, reporting and growth operations.",
    type: "website",
    url: "https://sachinpandey.com.np",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/44967ca7-342c-4d1e-a41e-bcc45a8873a3/id-preview-b7476403--67d0243e-c9e4-49c3-a3ed-a90e4d8b93ed.lovable.app-1782473240861.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sachinpandey",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

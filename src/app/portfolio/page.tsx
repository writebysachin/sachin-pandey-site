import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio | Sachin Pandey",
  },
  description:
    "SEO content strategy portfolio: case studies from Buel, Samarthya Legal Concern, and Yoga Write Code, with real Search Console numbers.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Sachin Pandey",
    description:
      "Projects behind the resume — SEO content strategy with real numbers from Search Console.",
    url: "/portfolio",
  },
};

const highlights = [
  { value: "68", label: "pages built and maintained" },
  { value: "1K+", label: "organic clicks" },
  { value: "50K+", label: "search impressions" },
  { value: "20", label: "leads captured" },
];

const tools = [
  "Google Analytics 4",
  "Google Search Console",
  "Google Tag Manager",
  "Microsoft Clarity",
  "Bing Webmaster Tools",
  "Ahrefs",
  "Sitebulb",
  "Ubersuggest",
  "Rank Math Pro",
  "Yoast SEO",
  "WordPress",
  "Jetpack Forms",
  "Jotform",
  "HubSpot",
  "Figma",
];

const caseStudies = [
  {
    title: "Case study 1: Buel (buel.app)",
    meta: "B2B SaaS contract collection product | VoxCrow | Dec 2025 – Oct 2026",
    goal: "Grow organic search visibility and lead generation for the product.",
    did: [
      "Built and maintained 68 WordPress pages: 22 blog posts, 7 pillar pages, and 39 product, team, industry, FAQ and feature/solution pages on contract collection.",
      "Connected GTM tracking, GA4 and Search Console into one content roadmap to decide what to publish and update next.",
      "Improved on-page SEO, internal linking and content structure, and optimized pages for GEO and AEO as well as search.",
      "Set up lead capture with Jetpack Forms.",
    ],
    results: [
      { value: "1K+", label: "organic clicks, 6 months" },
      { value: "50K+", label: "search impressions" },
      { value: "20", label: "leads captured" },
      { value: "4K+", label: "impressions in AI Overviews and AI Mode" },
    ],
    note: "AI impressions come from Search Console's Generative AI report and are counted within total impressions. They measure visibility, not clicks.",
  },
  {
    title: "Case study 2: Samarthya Legal Concern",
    meta: "Law firm and research center, Kathmandu | Web Developer, Designer & SMO | Apr 2026 – Present",
    goal: null,
    did: [
      "Built and manage the firm's WordPress website; run local SEO and Google Business Profile optimization.",
      "Used GTM, GA4, Search Console and Microsoft Clarity data to guide the legal blog roadmap.",
      "Designed branding assets: banners, posters, business cards and letterheads.",
    ],
    results: [
      { value: "500+", label: "organic clicks, 3 months" },
      { value: "8K+", label: "search impressions" },
      { value: "~10", label: "extra daily sessions" },
      { value: "5+", label: "tracked leads" },
    ],
    note: "About 3K impressions in Google AI Overviews and AI Mode (Search Console Generative AI report). 10K+ social media impressions across LinkedIn, Facebook and Instagram. Further inquiries were not tracked.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-16">
        {/* Hero */}
        <section>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            SEO Content Strategist | Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I help B2B SaaS teams decide what content to create next, then build
            it, publish it and measure it. This portfolio shows the projects
            behind my resume, with the numbers.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Kathmandu, Nepal |{" "}
            <a href="mailto:write@sachinpandey.com.np" className="text-primary hover:underline">
              write@sachinpandey.com.np
            </a>{" "}
            | sachinpandey.com.np |{" "}
            <a href="https://linkedin.com/in/writebysachin" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              linkedin.com/in/writebysachin
            </a>
          </p>
        </section>

        {/* Highlights */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Highlights
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-surface p-4 text-center">
                <p className="font-heading text-2xl text-foreground">{h.value}</p>
                <p className="text-xs text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Source: Google Search Console and Jetpack Forms.
          </p>
        </section>

        {/* How I work */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            How I work
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Research:</strong> keywords,
              search intent, competitors and content gaps.
            </li>
            <li>
              <strong className="text-foreground">Plan:</strong> topic clusters,
              content briefs and a roadmap built from GA4, Search Console and GTM
              data.
            </li>
            <li>
              <strong className="text-foreground">Publish and improve:</strong>{" "}
              WordPress publishing, on-page SEO, internal linking, and tracking
              of clicks, leads and visibility in Google AI Overviews and AI Mode.
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Case studies */}
        {caseStudies.map((cs) => (
          <section key={cs.title} className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
              {cs.title}
            </h2>
            <p className="text-sm text-muted-foreground">{cs.meta}</p>
            {cs.goal && (
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Goal:</strong> {cs.goal}
              </p>
            )}
            <div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                What I did
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
                {cs.did.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                Results
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cs.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-border bg-surface p-4 text-center">
                    <p className="font-heading text-2xl text-foreground">{r.value}</p>
                    <p className="text-xs text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{cs.note}</p>
            </div>
          </section>
        ))}

        {/* Case study 3 */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Case study 3: Yoga Write Code
          </h2>
          <p className="text-sm text-muted-foreground">
            Founder &amp; Product Engineer | Mar 2026 – Present
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Most B2B teams have no shortage of content ideas; they have a
            prioritization problem. I run a SaaS Content Opportunity Audit that
            researches a client&apos;s website, competitors and content gaps, and
            ends in a prioritized 30–60 day content plan. I am also building
            AI-assisted software for content research and planning: a live MVP
            with 10 user sign-ups.
          </p>
          <Link href="/yoga-write-code" className="inline-flex text-primary font-medium hover:underline">
            Learn more about Yoga Write Code →
          </Link>
        </section>

        {/* Other work */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Other work
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Codavatar Tech (KrispCall, Dialaxy):</strong>{" "}
              produced 200+ blog graphics supporting KrispCall&apos;s SEO content
              and 110+ blog creatives for Dialaxy.
            </li>
            <li>
              <strong className="text-foreground">Redis Digital:</strong> built
              responsive landing pages in HTML, CSS and JavaScript and created
              60+ Rive animations.
            </li>
            <li>
              <strong className="text-foreground">Isha International:</strong>{" "}
              launched an eCommerce website with 170+ products and managed social
              content calendars and lead tracking.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Certifications
          </h2>
          <p className="text-muted-foreground">
            AEO Fundamentals | Professional Digital Marketing Course | Startup
            School
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Send me your website and I will tell you what I would investigate
            first.
          </p>
          <p className="text-muted-foreground">
            Email:{" "}
            <a href="mailto:write@sachinpandey.com.np" className="text-primary hover:underline">
              write@sachinpandey.com.np
            </a>
            <br />
            Website: sachinpandey.com.np
            <br />
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/writebysachin" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              linkedin.com/in/writebysachin
            </a>
            <br />
            Phone: +977 9864457211
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start a Conversation →
          </Link>
        </section>
      </div>
    </div>
  );
}

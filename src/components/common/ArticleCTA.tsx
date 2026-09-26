import Link from "next/link";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";

/**
 * Shared article CTA. Used at the bottom of /insights and every blog post so
 * the ask stays identical wherever someone finishes reading.
 */
export default function ArticleCTA({
  badge = "Free 30-minute audit",
  title = "Find out what's actually broken in your marketing.",
  description = "Send me your URL. I'll audit your website, SEO, and content against your actual business goals, then tell you the three things to fix first. No pitch deck.",
  primaryHref = "/contact",
  primaryLabel = "Work With Me",
  secondaryHref = "/tools",
  secondaryLabel = "Try Free Tools",
}: {
  badge?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-8 md:p-12 text-center">
      {/* Brand wash, echoing the capability strip on the homepage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #630ED4 0%, #A855F7 50%, #EC4899 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        }}
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {badge}
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl font-heading text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-auto"
          >
            {primaryLabel}
            <ArrowUpRight
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-ring sm:w-auto"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            {secondaryLabel}
          </Link>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          AI SEO &nbsp;·&nbsp; GEO &nbsp;·&nbsp; AEO &nbsp;·&nbsp; Content Systems
        </p>
      </div>
    </div>
  );
}

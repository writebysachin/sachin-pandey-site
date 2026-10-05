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
  primaryHref = "https://calendly.com/writebysachin/seo-content-interview",
  primaryLabel = "Work With Me",
  secondaryHref = "/tools",
  secondaryLabel = "Try Free Tools",
  titleAccent,
  primaryTarget,
}: {
  badge?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Substring of `title` to highlight, matching the hero's accent treatment */
  titleAccent?: string;
  primaryTarget?: string;
}) {
  // Split the headline so the key phrase can carry the primary colour
  const accentIndex = titleAccent ? title.indexOf(titleAccent) : -1;
  const headline =
    accentIndex === -1 ? (
      title
    ) : (
      <>
        {title.slice(0, accentIndex)}
        <span className="text-primary">{titleAccent}</span>
        {title.slice(accentIndex + titleAccent!.length)}
      </>
    );

  return (
    <div className="relative w-full border-y border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {badge}
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl font-sans text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          {headline}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            target={primaryTarget}
            rel={primaryTarget === "_blank" ? "noopener noreferrer" : undefined}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-auto"
          >
            {primaryLabel}
            <ArrowUpRight
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-ring sm:w-auto"
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

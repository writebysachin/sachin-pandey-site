import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";
import { insights } from "../../src/lib/content";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-70" />
        <div className="container-page py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Insights</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Notes from inside the <span className="text-gradient-brand">system.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Short, opinionated essays on SEO, automation and the operational truth behind growth. No
            content marketing fluff.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {insights.map((p) => (
            <Link
              key={p.slug}
              href={`/resources/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {p.category} · {p.readTime}
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug group-hover:text-primary">
                {p.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 text-sm font-medium text-foreground group-hover:text-primary">
                Read essay →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

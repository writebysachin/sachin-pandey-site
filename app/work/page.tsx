import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";
import { workItems, type WorkStatus } from "../../src/lib/content";

const statusStyles: Record<WorkStatus, string> = {
  "Currently Building": "bg-primary-soft text-primary",
  "Currently Researching": "bg-surface-2 text-foreground",
  "Public Roadmap": "bg-success/10 text-success",
};

export default function WorkPage() {
  const grouped: Record<WorkStatus, typeof workItems> = {
    "Currently Building": workItems.filter((w) => w.status === "Currently Building"),
    "Currently Researching": workItems.filter((w) => w.status === "Currently Researching"),
    "Public Roadmap": workItems.filter((w) => w.status === "Public Roadmap"),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-70" />
        <div className="container-page py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Building in the <span className="text-gradient-brand">open.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm pre-revenue, working with a small number of consulting clients while shipping my
            product. Instead of inventing case studies, here is an honest view of what is actually
            in motion right now.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="space-y-16">
          {(Object.keys(grouped) as WorkStatus[]).map((status) => (
            <div key={status}>
              <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{status}</h2>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {grouped[status].length} item{grouped[status].length === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {grouped[status].map((w) => (
                  <article
                    key={w.slug}
                    className="rounded-2xl border border-border bg-background p-7"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-1 text-[11px] font-medium ${statusStyles[w.status]}`}
                      >
                        {w.status}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {w.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
                    <p className="mt-2 text-[15px] text-muted-foreground">{w.summary}</p>
                    <ul className="mt-5 space-y-2 text-sm text-foreground">
                      {w.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-surface p-10 md:p-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            No invented proof. <span className="text-gradient-brand">Ever.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Real case studies, numbers and testimonials will appear here only when the client has
            approved the write-up and the results have held for at least 90 days. Until then, the
            best signal is how I think — read the insights or talk to me directly.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/resources"
              className="inline-flex items-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Read insights →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-surface-2"
            >
              Talk to me
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

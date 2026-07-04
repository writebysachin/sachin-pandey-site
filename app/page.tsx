import Link from "next/link";
import { SiteFooter, SiteHeader } from "../src/components/site-chrome";
import { insights, workItems } from "../src/lib/content";

const pillars = [
  {
    title: "Technical SEO Systems",
    desc: "Crawlability, schema, internal linking and Core Web Vitals — treated as plumbing, audited monthly.",
  },
  {
    title: "Search Visibility",
    desc: "Positioning-first SEO. We pick the words you should own before we pick the URLs.",
  },
  {
    title: "Content Systems",
    desc: "Brief → draft → SEO check → publish → refresh, owned by one workflow instead of seven tools.",
  },
  {
    title: "Analytics",
    desc: "One source of truth across GA4, GSC, Ads and CRM. Dashboards your team actually opens.",
  },
  {
    title: "Marketing Automation",
    desc: "Replace repetitive marketing ops with auditable workflows in n8n, Make and the LLM stack.",
  },
];

const howIWork = [
  {
    step: "01",
    title: "Diagnose",
    desc: "Read the site, the data and the last 20 conversations with customers. Name the real problem, not the symptom.",
  },
  {
    step: "02",
    title: "Design the system",
    desc: "Positioning, content workflow, SEO direction and reporting loop — written down as one operating model, not a slide deck.",
  },
  {
    step: "03",
    title: "Ship a working version",
    desc: "Rewrite the homepage, set up the dashboard, build the workflow. Concrete artifacts you can run on Monday.",
  },
  {
    step: "04",
    title: "Hand it over",
    desc: "Loom walkthrough, written summary and a clear answer to whether ongoing work makes sense. If not, you keep the system.",
  },
];

export default function HomePage() {
  const building = workItems.filter((w) => w.status === "Currently Building").slice(0, 2);
  const researching = workItems.filter((w) => w.status === "Currently Researching").slice(0, 1);
  const latest = insights.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft" />
        <div
          className="absolute -top-32 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-60"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden
        />
        <div className="container-page py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Building publicly · accepting a small number of clients
            </div>
            <h1 className="mt-6 text-[40px] font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Think clearly.
              <br />
              Write simply.
              <br />
              <span className="text-gradient-brand">Build systems.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              I'm Sachin — an independent operator. I help B2B SMBs reduce operational complexity in
              SEO, content, reporting and marketing workflows, while I build my own product, Yoga
              Write Code, in the open.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-foreground px-5 py-3 text-[15px] font-medium text-background transition hover:opacity-90"
              >
                Request a Clarity Sprint →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-[15px] font-medium text-foreground transition hover:bg-surface"
              >
                See how I work
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["Who I am", "Solo operator"],
                ["Who I help", "B2B SMBs"],
                ["Engagement", "Sprint or systems"],
                ["Delivery", "Systems, not slides"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 text-base font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              The real problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              You don't have a marketing problem. You have an{" "}
              <span className="text-gradient-brand">operations</span> problem.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground">
              Most SMB teams I talk to are not missing tactics — they are drowning in them. Too many
              tools. Too many spreadsheets. Too many dashboards. No repeatable workflow. The team
              can't see what to publish, how to organise SEO, how to connect the marketing stack, or
              how to measure what's working.
            </p>
            <p className="mt-5 text-lg text-muted-foreground">
              The fix is rarely another retainer. It's a clearer positioning line, a single source
              of truth for data, and a content + SEO workflow that runs without heroics. That is
              what I build.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Philosophy</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Five beliefs that quietly run everything I ship.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {[
              ["Clarity", "beats complexity"],
              ["Workflow", "beats features"],
              ["Systems", "beat campaigns"],
              ["Consistency", "beats hacks"],
              ["Research", "beats assumptions"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-border bg-background p-6">
                <p className="text-lg font-semibold text-foreground">{a}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Services</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Five systems. One operator.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            See full services →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-xs font-semibold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">How I work</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            One operating model, four steps.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howIWork.map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-background p-6">
                <p className="font-mono text-xs text-muted-foreground">{s.step}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Current focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              What I'm actually working on.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline"
          >
            See full roadmap →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[...building, ...researching].map((w) => (
            <article
              key={w.slug}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <span className="inline-flex w-fit rounded-md bg-primary-soft px-2 py-1 text-[11px] font-medium text-primary">
                {w.status}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-page py-20 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Recent <span className="text-gradient-brand">insights</span>
            </h2>
            <Link
              href="/resources"
              className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline"
            >
              All insights →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {latest.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.category} · {p.readTime}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-10 text-center md:p-16">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{ background: "var(--gradient-brand-soft)" }}
            aria-hidden
          />
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Think clearly. Write simply. <span className="text-gradient-brand">Build systems.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            If that sounds like the operator you've been looking for, the next step is a 45-minute
            audit. No deck. No pitch. Just clarity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Book audit →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-surface"
            >
              About Sachin
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

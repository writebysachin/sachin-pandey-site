import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";

const pillars = [
  {
    title: "Technical SEO Systems",
    problem:
      "The site is hard for search engines to crawl, parse and trust, and nobody on the team can say why rankings move.",
    approach:
      "Treat technical SEO as plumbing. Audit the foundations once, then run them as a monthly checklist instead of a project.",
    deliverables: [
      "Crawl, indexation and log review",
      "Schema architecture (Organization, Product, Article, FAQ)",
      "Internal link map tied to topic clusters",
      "Core Web Vitals remediation plan",
    ],
    outcomes: [
      "Search engines can crawl and understand the site without ambiguity",
      "Ranking movements become explainable, not mysterious",
      "Technical hygiene runs on a calendar, not on panic",
    ],
  },
  {
    title: "Search Visibility",
    problem:
      "The team is chasing keywords without a clear position, so content ranks for the wrong intent or nothing at all.",
    approach:
      "Start with positioning. Decide who the site is for and what language they actually use, then map topics around that.",
    deliverables: [
      "Positioning interview and message map",
      "Entity and topic cluster strategy",
      "SERP intent and competitor reality check",
      "12-month content roadmap",
    ],
    outcomes: [
      "A clear answer to 'what are we trying to be known for'",
      "Content briefs aligned to real buying intent",
      "A roadmap that survives staff or tool changes",
    ],
  },
  {
    title: "Content Systems",
    problem:
      "Briefs, drafts, reviews and publishing live across seven tools. Nothing is repeatable and the calendar slips every month.",
    approach:
      "Design one workflow that moves a topic from idea to published to refreshed, owned by one tool with clear quality gates.",
    deliverables: [
      "Editorial workflow (brief → draft → SEO check → publish → refresh)",
      "Notion / Airtable workspace template",
      "SEO and quality checklist embedded in the workflow",
      "Refresh cadence for existing content",
    ],
    outcomes: [
      "Content ships on a predictable cadence",
      "Less time arguing about process, more time writing",
      "Existing content keeps improving instead of decaying",
    ],
  },
  {
    title: "Analytics",
    problem:
      "GA4, GSC, Ads and the CRM disagree with each other, and the team has stopped trusting any of the dashboards.",
    approach:
      "Build one consolidated data model with a clear event taxonomy, then expose it through dashboards people actually open.",
    deliverables: [
      "Consolidated GA4 + GSC + Ads + CRM model",
      "Event taxonomy and naming convention",
      "Looker Studio or Metabase template",
      "Weekly narrative summary",
    ],
    outcomes: [
      "One source of truth across marketing and product",
      "Decisions backed by data the team agrees on",
      "Reporting time drops, reporting usefulness rises",
    ],
  },
  {
    title: "Marketing Automation",
    problem:
      "Repetitive marketing work eats half the team's week — pulling data, formatting reports, copy-pasting between tools.",
    approach:
      "Inventory the manual work, size it by hours and risk, then replace the worst offenders with auditable automations.",
    deliverables: [
      "Workflow inventory and ROI sizing",
      "n8n / Make automations with clear logs",
      "LLM-assisted draft / review pipelines where appropriate",
      "Quality gates and human approval steps",
    ],
    outcomes: [
      "Hours of repetitive work removed each week",
      "Fewer copy-paste errors and missed steps",
      "Automations the team can read, edit and trust",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-70" />
        <div className="container-page py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Five <span className="text-gradient-brand">systems</span> SMB teams hire me to build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Each pillar is described as a problem, an approach, what gets delivered and what the
            system is expected to produce afterwards. You can engage one pillar at a time, or run
            them as a single growth-ops stack.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-5">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="grid gap-8 rounded-2xl border border-border bg-background p-8 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-xs text-muted-foreground">
                  PILLAR {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {p.title}
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-2 text-[15px] text-foreground">{p.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Approach
                  </p>
                  <p className="mt-2 text-[15px] text-foreground">{p.approach}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Deliverables
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground">
                      {p.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Expected outcomes
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-foreground">
                      {p.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-foreground p-10 text-background md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Start with a <span className="text-gradient-brand">Clarity Sprint.</span>
              </h2>
              <p className="mt-4 text-background/70">
                Most engagements start here: a short, fixed-scope sprint that ends with a written
                system you can run, whether or not we keep working together.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
              >
                Request Clarity Sprint →
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center rounded-lg border border-background/20 px-5 py-3 text-sm font-medium hover:bg-background/10"
              >
                See current work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

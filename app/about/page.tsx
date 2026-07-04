import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <section className="relative border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-70" />
        <div className="container-page py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Not a freelancer. Not an agency. An{" "}
            <span className="text-gradient-brand">operator.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I'm Sachin Pandey. I help small and medium B2B companies reduce operational complexity
            in marketing — and I'm building a product, Yoga Write Code, for the same teams.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7 space-y-10">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Observations
              </h2>
              <div className="mt-4 space-y-4 text-lg text-foreground">
                <p>
                  After working alongside SaaS and SMB marketing teams, the same pattern kept
                  showing up. The people were good. The intent was good. The output was
                  inconsistent.
                </p>
                <p>
                  The reason was almost never talent. It was the operating environment. Marketing
                  had become quietly fragmented — five tools doing the same job, three dashboards
                  nobody trusted, a content calendar that survived for a quarter and then quietly
                  died.
                </p>
                <p>
                  The teams that got results were not the ones with the loudest tactics. They were
                  the ones with a small set of boring workflows that actually ran. So I stopped
                  trying to sell tactics and started building those workflows.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Why I work this way
              </h2>
              <p className="mt-4 text-lg text-foreground">
                Solo, deliberately small, and focused on systems rather than retainers. The job is
                to leave you with something that keeps producing after I step out of the room. If I
                cannot do that for your situation, I will say so on the first call.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Why Yoga Write Code exists
              </h2>
              <p className="mt-4 text-lg text-foreground">
                The same pattern I see in client work keeps repeating across companies — the same
                disconnected stack, the same missing workflow. Consulting helps one team at a time.
                The product is the long-term answer: the operating system I keep rebuilding by hand,
                made into software that any team can run.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                It is pre-revenue and built in the open. I am running customer interviews and
                shipping the MVP in small slices instead of a one-shot launch.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 space-y-5">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Principles
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-foreground">
                {[
                  ["Clarity", "over complexity"],
                  ["Workflow", "over features"],
                  ["Systems", "over campaigns"],
                  ["Consistency", "over hacks"],
                  ["Research", "over assumptions"],
                ].map(([a, b]) => (
                  <li
                    key={a}
                    className="flex items-baseline justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold">{a}</span>
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Current stage
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li>Pre-revenue.</li>
                <li>Building publicly.</li>
                <li>Running customer interviews.</li>
                <li>Shipping the MVP.</li>
                <li>Working with a limited number of consulting clients.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tools I commonly touch
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                GA4 · Google Search Console · Looker Studio · n8n · Make · Notion · Airtable ·
                Webflow · Next.js · Postgres · OpenAI &amp; Anthropic APIs
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Want me <span className="text-gradient-brand">in the room</span> with your team?
          </h2>
          <p className="mt-4 max-w-xl text-background/70">
            The fastest way is a Clarity Sprint. The cheapest way is a 45-minute audit call. The
            slowest way is to keep guessing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-background px-5 py-3 text-sm font-medium text-foreground hover:opacity-90"
            >
              Book audit →
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center rounded-lg border border-background/20 px-5 py-3 text-sm font-medium hover:bg-background/10"
            >
              Read insights
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

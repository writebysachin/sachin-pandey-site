import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Terms</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Plain-language terms covering this website and any free material published on it.
            Consulting engagements have their own scope document signed separately.
          </p>

          <div className="mt-10 space-y-8 text-[16px] leading-[1.75] text-foreground">
            <section>
              <h2 className="text-xl font-semibold">Content on this site</h2>
              <p className="mt-2 text-muted-foreground">
                Essays and notes are shared for educational purposes. You are welcome to quote and
                link them with attribution. They are not professional, legal or financial advice for
                your specific situation.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">No guarantees</h2>
              <p className="mt-2 text-muted-foreground">
                I do not promise specific business outcomes from reading the site or from any
                engagement. I do promise honest diagnosis and to tell you when I'm not the right
                fit.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Consulting work</h2>
              <p className="mt-2 text-muted-foreground">
                Every consulting engagement is governed by a separate written scope covering
                deliverables, timeline, payment and confidentiality. Anything on this site is
                informational and not a substitute for that scope.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Changes</h2>
              <p className="mt-2 text-muted-foreground">
                These terms may be updated as the site evolves. The current version is always the
                version published on this page.
              </p>
            </section>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}

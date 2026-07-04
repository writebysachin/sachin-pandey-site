import { SiteFooter, SiteHeader } from "../../src/components/site-chrome";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <article className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Privacy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This page is maintained by Sachin Pandey to answer common privacy questions about
            sachinpandey.com.np. Last reviewed June 2026.
          </p>

          <div className="prose-spacing mt-10 space-y-8 text-[16px] leading-[1.75] text-foreground">
            <section>
              <h2 className="text-xl font-semibold">What this site collects</h2>
              <p className="mt-2 text-muted-foreground">
                Information you choose to submit via the contact form: name, email, company and the
                message itself. Standard server logs (IP, user agent, requested URL) for security
                and debugging.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">How it is used</h2>
              <p className="mt-2 text-muted-foreground">
                Contact submissions are read by Sachin personally and used only to reply. They are
                not added to a marketing list. There is no follow-up sequence.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Analytics &amp; cookies</h2>
              <p className="mt-2 text-muted-foreground">
                The site uses privacy-respecting analytics to understand which pages are useful. No
                advertising cookies and no cross-site tracking pixels are used.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold">Your rights</h2>
              <p className="mt-2 text-muted-foreground">
                Email{" "}
                <a href="mailto:hello@sachinpandey.com.np" className="underline underline-offset-4">
                  hello@sachinpandey.com.np
                </a>{" "}
                to request a copy of any personal data this site holds about you, or to have it
                deleted.
              </p>
            </section>
          </div>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}

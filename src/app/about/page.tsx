import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About Sachin Pandey | B2B Marketing Systems Consultant",
  },
  description:
    "Sachin Pandey is a B2B marketing systems consultant helping companies build websites, B2B SEO, and content systems that compound over time, plus AI marketing workflows and Yoga Write Code.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sachin Pandey | B2B Marketing Systems Consultant",
    description:
      "B2B marketing systems consultant building websites, SEO, and content systems that compound — plus Yoga Write Code.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-16">
        <section>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            I&apos;m Sachin Pandey — a marketing systems consultant for B2B companies
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I help B2B companies build websites, SEO, and content systems that
            compound over time — instead of restarting every quarter.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            What I do
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            My work sits across B2B website strategy, B2B SEO, B2B content
            strategy, and content operations. In practice that means figuring out
            what a website should say, how it should be structured, what content
            should exist, and how the whole system gets maintained by real
            people instead of good intentions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Lately that also includes AI-assisted marketing workflows — using AI
            where it genuinely removes manual work from SEO and content systems,
            not where it produces more noise.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            How I think about marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most B2B marketing doesn&apos;t fail because of one bad tactic. It
            fails because everything is disconnected — the website says one
            thing, the content says another, and the &quot;SEO strategy&quot;
            lives in a document nobody opens. I treat SEO, content, websites, and
            AI as parts of one system. When the pieces support each other,
            results compound. When they don&apos;t, every quarter resets.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            My background
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I started across SEO, websites, content marketing, UI/design, and
            digital marketing. Somewhere along the way I got more interested in
            the systems behind the work than the deliverables themselves.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            So I learned product development, automation, and software
            engineering — so I could build those systems myself instead of
            waiting for the right SaaS to exist.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today I combine consulting, software, SEO, content strategy, and AI
            workflows for B2B companies that want marketing systems, not one-off
            campaigns.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Yoga Write Code
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Yoga Write Code is a product I&apos;m building from recurring
            problems I kept running into during SEO and content work — topics
            chosen more or less randomly, briefs that took days, outlines that
            needed rewriting from scratch. YWC exists to turn that into a
            repeatable workflow.
          </p>
          <Link
            href="/yoga-write-code"
            className="inline-flex text-primary font-medium hover:underline"
          >
            Learn more about Yoga Write Code →
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            How I work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Evidence first, execution second, theory last. I run small
            experiments, look at what actually moves the numbers, and improve
            the system based on that — not based on what the latest marketing
            thread claims works. When something works repeatedly, it becomes
            part of the system. When it doesn&apos;t, it gets cut.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            What I&apos;m currently working on
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Right now that&apos;s a mix of consulting engagements, writing about
            search and content systems, building Yoga Write Code, and learning
            from real users of the tools I&apos;m shipping.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You can read that thinking in{" "}
            <Link href="/insights" className="text-primary font-medium hover:underline">
              my writing
            </Link>{" "}
            or try the{" "}
            <Link href="/tools" className="text-primary font-medium hover:underline">
              free tools
            </Link>{" "}
            I&apos;ve built around the same workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl sm:text-3xl text-foreground">
            Work with me
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you&apos;re a B2B founder or team and your marketing feels busy
            but not compounding, that&apos;s usually the right starting
            problem. The first conversation is a diagnosis, not a pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start a Conversation →
          </Link>
        </section>
      </div>
    </div>
  );
}

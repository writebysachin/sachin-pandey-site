"use client";

import { motion } from "framer-motion";

export default function YogaWriteCodePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <a
              href="https://yogawritecode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6 transition-colors hover:bg-primary/20"
            >
              Now Live — yogawritecode.com ↗
            </a>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Yoga Write Code
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Yoga Write Code is live. In minutes, you can analyze your website, uncover content gaps, and get a clear, prioritized plan — powered by the same thinking I use with consulting clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Learn More →
              </a>
              <a
                href="https://yogawritecode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Go to YogaWriteCode.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
              What&apos;s Inside
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Keyword opportunities",
                description: "Prioritized topics scored for business relevance, intent, and feasibility."
              },
              {
                title: "Visual topic clusters",
                description: "Pillar and supporting topics with internal linking built into the plan."
              },
              {
                title: "SEO briefs",
                description: "Headings, entities, questions, and competitor insights generated together."
              },
              {
                title: "Article outlines",
                description: "A clean H1/H2/H3 structure that is ready to draft without cleanup."
              },
              {
                title: "Competitor gaps",
                description: "Spot the topics your competitors cover and your audience is searching for."
              },
              {
                title: "Founder-friendly",
                description: "Plain language and a guided workflow, with no SEO jargon required."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">✓</div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-base text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Yoga Write Code is Live
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The platform is now available. Explore it and see how it can automate your content operations.
          </p>
          <a
            href="https://yogawritecode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Learn More →
          </a>
        </div>
      </section>
    </div>
  );
}
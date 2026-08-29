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
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
              In Development
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Yoga Write Code
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              An AI-powered platform that automates your content operations. 
              Built from real client problems I&apos;ve solved in consulting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Learn More →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
              What&apos;s Inside
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to scale your content operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Content Generation",
                description: "Generate SEO-optimized content that matches your brand voice."
              },
              {
                title: "Automated SEO",
                description: "Automatic keyword optimization and topic clustering."
              },
              {
                title: "Content Calendar",
                description: "Intelligent scheduling and workflow management."
              },
              {
                title: "Performance Analytics",
                description: "Track ROI and content performance in real-time."
              },
              {
                title: "Team Collaboration",
                description: "Work together seamlessly with your team."
              },
              {
                title: "Publishing Automation",
                description: "Schedule and publish across multiple platforms."
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
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
            Interested in Early Access?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist and be the first to know when we launch.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Join Waitlist →
          </a>
        </div>
      </section>
    </div>
  );
}
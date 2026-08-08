// src/app/page.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface FeatureItem {
  title: string;
  description: string;
}

interface CaseStudy {
  category: string;
  problem: string;
  approach: string;
  outcome: string;
}

interface Article {
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface PhilosophyItem {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ============================================================================
// DATA
// ============================================================================

const features: FeatureItem[] = [
  { title: "Website Strategy", description: "Structure that converts visitors into inquiries — not just design that impresses." },
  { title: "SEO Systems", description: "Predictable organic acquisition instead of quarterly keyword sprints that reset." },
  { title: "Content Operations", description: "Repeatable production workflows. Content that builds on itself instead of starting over." },
  { title: "AI Workflows", description: "Automation that removes bottlenecks. Not tools for their own sake." },
];

const caseStudies: CaseStudy[] = [
  {
    category: "LEGAL SERVICES",
    problem: "Website generating no inbound leads. SEO implemented as occasional tasks, not a system.",
    approach: "Rebuilt information architecture around client intent. Technical SEO foundation.",
    outcome: "Consistent organic visibility across primary service terms.",
  },
  {
    category: "B2B TECHNOLOGY",
    problem: "Marketing team spending most of their time recreating similar assets from scratch.",
    approach: "Audited existing content library for reusable components. Built a topic cluster framework.",
    outcome: "Production time per piece reduced significantly.",
  },
  {
    category: "PROFESSIONAL SERVICES",
    problem: "Website built for aesthetics, not conversion. No clear path from visitor to inquiry.",
    approach: "Conversion audit across all pages. Messaging rewrite with actual language prospects use.",
    outcome: "Clear attribution for the first time.",
  },
];

const articles: Article[] = [
  { category: "SEO SYSTEMS", title: "Why most B2B SEO fails before it starts", description: "SEO treated as a checklist produces checklist results.", date: "July 2025", readTime: "8 min", link: "/insights" },
  { category: "MARKETING SYSTEMS", title: "What a marketing system actually looks like", description: "Not a tech stack. A system is a set of repeatable decisions.", date: "June 2025", readTime: "10 min", link: "/insights" },
  { category: "BUILDING IN PUBLIC", title: "Building Yoga Write Code: Month 3", description: "What three months of consulting research taught me about content operations.", date: "May 2025", readTime: "6 min", link: "/insights" },
];

const processSteps: ProcessStep[] = [
  { number: "01", title: "Discovery conversation", description: "One hour. You walk me through what's broken and what you've tried. I ask questions you might not have considered." },
  { number: "02", title: "Diagnosis", description: "I audit your website, SEO, and content against your actual business goals. A diagnosis of root causes." },
];

const philosophies: PhilosophyItem[] = [
  { text: "Every consulting engagement should produce lasting value for the client, a documented case study, and a product insight. All three." },
  { text: "Marketing systems should compound. If your marketing output resets every quarter, the architecture is wrong." },
  { text: "Software should emerge from observed problems, not invented ones. I'm using consulting to earn the right to build." },
  { text: "Long-term relationships beat transactional projects. I want clients I can point to in ten years." },
];

const faqs: FAQItem[] = [
  { question: "What types of companies do you work with?", answer: "B2B companies with 10-50 employees who are ready to build systems, not just execute tactics." },
  { question: "How long do engagements typically last?", answer: "Most engagements run 3-6 months, depending on scope and complexity." },
  { question: "Do you work remotely?", answer: "Yes, all work is conducted remotely with regular video check-ins." },
  { question: "What makes your approach different?", answer: "I focus on building systems that compound over time, not one-off projects that reset every quarter." },
];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

// ============================================================================
// REUSABLE UI COMPONENTS
// ============================================================================

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground ${className}`}>
      {children}
    </h2>
  );
}

function SectionParagraph({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`max-w-3xl text-lg leading-8 text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}

function Section({ 
  children, 
  variant = "default",
  className = ""
}: { 
  children: React.ReactNode; 
  variant?: "default" | "surface" | "gradient" | "dark";
  className?: string;
}) {
  const bgMap = {
    default: "bg-background",
    surface: "bg-surface", 
    gradient: "bg-gradient-to-b from-background to-surface",
    dark: "bg-foreground text-background",
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`py-20 md:py-32 ${bgMap[variant]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {children}
      </div>
    </motion.section>
  );
}

// ============================================================================
// SECTIONS
// ============================================================================

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-background">
      
      {/* 1. STATIC GRADIENT BACKGROUND (No Motion = No Flickering) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blob 1: Main Stripe Gradient */}
        <div
          className="absolute top-0 right-0 w-200 h-200 opacity-20"
          style={{
            background: 'linear-gradient(115deg, #4F46E5 0%, #7C3AED 15%, #EC4899 30%, #F97316 45%, #FBBF24 60%, #EC4899 75%, #8B5CF6 90%)',
            transform: 'rotate(12deg) translateX(20%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Blob 2: Secondary Gradient */}
        <div
          className="absolute -top-40 -right-40 w-150 h-150 opacity-15"
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 25%, #8B5CF6 50%, #EC4899 75%, #F59E0B 100%)',
            transform: 'rotate(-8deg)',
            filter: 'blur(100px)',
          }}
        />
        {/* Blob 3: Tertiary Gradient */}
        <div
          className="absolute top-1/2 right-0 w-175 h-175 opacity-15"
          style={{
            background: 'linear-gradient(105deg, #6366F1 0%, #A855F7 20%, #F472B6 40%, #FB923C 60%, #60A5FA 80%, #34D399 100%)',
            transform: 'rotate(15deg) translateY(-20%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* 2. STATIC CONTENT (No Motion) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            B2B Growth Systems
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] lg:leading-[0.95] tracking-tight text-foreground">
            Most B2B companies don&apos;t <br className="hidden md:block" />
            have a marketing problem. <br className="hidden md:block" />
            They have a <span className="text-primary">systems</span> problem.
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
            I help B2B companies build websites, SEO, and content systems that compound over time instead of restarting every quarter. Every engagement also helps shape Yoga Write Code — an AI platform I&apos;m building from real client problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Work With Me
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/insights"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              Read Insights
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function LogoCloud() {
  return (
    <Section variant="surface" className="py-16">
      <div className="space-y-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by forward-thinking B2B companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["Law Firm", "VoIP", "Restaurants", "Computer Accessories", "Marketing Agency"].map((company) => (
            <div key={company} className="text-lg font-semibold text-muted-foreground/60 transition-colors duration-300 hover:text-primary">
              {company}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Problem() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 space-y-6">
          <Badge>The Problem</Badge>
          <SectionHeading>
            Random marketing doesn&apos;t compound. <br className="hidden sm:block" />
            Systems do.
          </SectionHeading>
          <div className="space-y-5 pt-2">
            <SectionParagraph>
              Most B2B marketing looks like this: a new agency every 18 months, inconsistent content publishing, SEO done as a checklist. Each quarter resets. Nothing compounds.
            </SectionParagraph>
            <SectionParagraph>
              The companies that grow sustainably aren&apos;t doing more marketing. They&apos;ve built systems where each piece supports the others — all pointed toward the same outcome.
            </SectionParagraph>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group space-y-3 p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <span className="text-sm font-bold">✦</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground pl-11">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const services = [
    { title: "Website Strategy", description: "Structure that converts visitors into inquiries." },
    { title: "SEO Systems", description: "Predictable organic acquisition that compounds." },
    { title: "Content Operations", description: "Repeatable production workflows." },
    { title: "AI Workflows", description: "Automation that removes bottlenecks." },
  ];

  return (
    <Section variant="surface">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge>Services</Badge>
          <SectionHeading>What I do</SectionHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SelectedWork() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge>Selected Work</Badge>
          <SectionHeading>Problems I&apos;ve solved</SectionHeading>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 items-start"
            >
              <div className="md:col-span-3">
                <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-semibold tracking-wider text-foreground border border-border">
                  {study.category}
                </span>
              </div>
              <div className="md:col-span-3 space-y-2">
                <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Problem</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
              </div>
              <div className="md:col-span-3 space-y-2">
                <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Approach</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.approach}</p>
              </div>
              <div className="md:col-span-3 space-y-2">
                <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">Outcome</span>
                <p className="text-sm text-foreground leading-relaxed font-medium">{study.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section variant="surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 space-y-6">
          <Badge>How It Works</Badge>
          <SectionHeading>Who I work with</SectionHeading>
          <div className="space-y-5 pt-2">
            <SectionParagraph>
              I work with B2B companies (10–50 people) who have been doing marketing but feel like it isn&apos;t compounding. They don&apos;t need more channels. They need one clear system.
            </SectionParagraph>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="divide-y divide-border border-y border-border">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="py-8 grid grid-cols-12 gap-4 items-start"
              >
                <span className="col-span-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {step.number}
                </span>
                <div className="col-span-10 space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge>Core Philosophy</Badge>
          <SectionHeading>How I think about the work</SectionHeading>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-8 flex items-start gap-6"
            >
              <span className="text-4xl text-primary/30 select-none font-heading leading-none">&ldquo;</span>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl pt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Insights() {
  return (
    <Section variant="surface">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge>Insights</Badge>
          <SectionHeading>How I think about these problems</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between p-8 first:pl-0 last:pr-0 md:first:pl-8 md:last:pr-8 transition-colors hover:bg-background"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">
                    {article.category}
                  </span>
                  <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </div>
              <div className="pt-6 text-xs text-muted-foreground font-medium">
                {article.date} · {article.readTime}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  return (
    <Section>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <Badge>FAQ</Badge>
          <SectionHeading>Common questions</SectionHeading>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group space-y-3 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:bg-surface hover:border-border"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                <span className="text-primary text-lg">+</span>
                {faq.question}
              </h3>
              <p className="text-muted-foreground pl-7">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section variant="gradient">
      <div className="max-w-3xl space-y-8 text-center mx-auto">
        <Badge>Start a conversation</Badge>
        <SectionHeading>Let&apos;s build a system that compounds.</SectionHeading>
        <SectionParagraph className="mx-auto">
          If you&apos;re working on a B2B marketing problem that feels like a systems problem — a website that doesn&apos;t convert, SEO that isn&apos;t compounding, content that restarts every quarter — I&apos;d like to hear about it. The first conversation is a diagnosis, not a pitch.
        </SectionParagraph>
        <div className="pt-4">
          <a
            href="mailto:write@sachinpandey.com.np"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90 shadow-lg shadow-primary/20"
          >
            <span>Get Started</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  return (
    <main className="bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Hero />
        <LogoCloud />
        <Problem />
        <Services />
        <SelectedWork />
        <Process />
        <Testimonials />
        <Insights />
        <FAQ />
        <CTA />
      </motion.div>
    </main>
  );
}
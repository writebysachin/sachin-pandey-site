// Real, founder-honest content.
// No invented clients, testimonials, awards, revenue numbers or vanity metrics.

export type WorkStatus = "Currently Building" | "Currently Researching" | "Public Roadmap";

export type WorkItem = {
  slug: string;
  title: string;
  status: WorkStatus;
  category: string;
  summary: string;
  details: string[];
};

export const workItems: WorkItem[] = [
  {
    slug: "yoga-write-code",
    title: "Yoga Write Code",
    status: "Currently Building",
    category: "Product · SaaS",
    summary:
      "A long-term SaaS for B2B teams that want to run SEO, content and reporting as one operating system instead of seven disconnected tools.",
    details: [
      "Conducting customer interviews with SMB marketing leads.",
      "Mapping the workflow most teams already do in spreadsheets.",
      "Shipping the MVP in small, opinionated slices — not a feature dump.",
    ],
  },
  {
    slug: "clarity-sprint",
    title: "Clarity Sprint Engagements",
    status: "Currently Building",
    category: "Consulting · Service",
    summary:
      "A short, fixed-scope engagement for pre-revenue and stuck-revenue founders who need a clear positioning line and a content + SEO system they can actually run.",
    details: [
      "7–10 day fixed timeline.",
      "Positioning interview, homepage rewrite, SEO direction document.",
      "Written 30-day plan + Loom walkthrough at handover.",
    ],
  },
  {
    slug: "reporting-as-a-system",
    title: "Reporting as a System",
    status: "Currently Researching",
    category: "Research · Analytics",
    summary:
      "Studying how SMB marketing teams currently move data between GA4, GSC, Ads and CRMs — and what a single, boring source of truth would look like in practice.",
    details: [
      "Interviewing operators about the dashboards they actually open.",
      "Documenting the event taxonomies real teams use (and abandon).",
      "Prototyping a parameterised reporting template across tools.",
    ],
  },
  {
    slug: "ai-content-operations",
    title: "AI in Content Operations",
    status: "Currently Researching",
    category: "Research · AI Workflow",
    summary:
      "An open investigation into where LLMs genuinely help content production for B2B SMBs — and where they create more cleanup than they remove.",
    details: [
      "Comparing brief → draft → review pipelines across teams.",
      "Tracking quality gates that survive contact with real publishing.",
      "Publishing notes as I go, instead of one final 'definitive guide'.",
    ],
  },
  {
    slug: "smb-seo-playbook",
    title: "SMB SEO Playbook (Open)",
    status: "Public Roadmap",
    category: "Roadmap · Content",
    summary:
      "A free, public playbook describing the four-layer SEO system I run for SMB clients. Written in the open as I work through each layer.",
    details: [
      "Layer 1: positioning.",
      "Layer 2: technical hygiene.",
      "Layer 3: content workflow.",
      "Layer 4: reporting loop back into strategy.",
    ],
  },
  {
    slug: "first-case-studies",
    title: "First Case Studies",
    status: "Public Roadmap",
    category: "Roadmap · Proof",
    summary:
      "Real engagements will be published here once clients are completed, results are observed for at least 90 days, and the client has approved the write-up. No invented proof in the meantime.",
    details: [
      "Problem → approach → system → measured outcome.",
      "Only published with explicit client permission.",
      "Numbers shown only when independently verifiable.",
    ],
  },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  // Body supports section headings: lines starting with "## " become <h2>
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "brand-is-operational-truth",
    title: "Brand is operational truth",
    excerpt:
      "Your brand is not your logo or palette. It's the pattern your customers feel every time your system delivers — or fails to.",
    readTime: "6 min read",
    date: "2026-06-10",
    category: "Systems Thinking",
    body: [
      "## The paint-job problem",
      "Most founders treat brand like a paint job. They pick a font, a palette, write a tagline, and call the company 'brand-led'. Then the product ships late, the onboarding email goes to spam, and the support reply takes nine days. That is the brand. Everything else is a mood board.",
      "## Brand is what operations actually does",
      "Brand is the compounding average of every operational truth your customer touches. The speed of your reply. The clarity of your invoice. The honesty of your changelog. The boredom of your reporting dashboard. These are the messages. Marketing only amplifies what operations actually does.",
      "If you want a stronger brand, do not start in Figma. Start in your operations. Map the moments where promises meet reality — sales call, signup, first value, second invoice, churn. Fix the worst one. Repeat. The visual identity is the receipt for that work, not the work itself.",
      "## Why I position as an operator",
      "This is why I describe myself as an operator first. I am not selling SEO as a vibe. The work is building the system that produces ranking, reporting and growth as boring, repeatable outputs. The day that system runs without me is the day the brand quietly gets stronger.",
    ],
  },
  {
    slug: "seo-as-a-system-not-a-campaign",
    title: "SEO as a system, not a campaign",
    excerpt:
      "Campaigns end. Systems compound. Here's the four-layer SEO stack I run for SMB clients.",
    readTime: "8 min read",
    date: "2026-05-22",
    category: "SEO",
    body: [
      "## Why campaign-thinking fails",
      "Treating SEO as a campaign is why many SMBs feel they 'tried SEO and it didn't work'. A campaign has a budget, a deadline and an end. Search does not. Search engines reward entities that show up consistently, with structure, for years.",
      "## Layer 1 — Positioning",
      "Who you are for, what you remove from their life, and the exact language they use for it. Without this, no amount of technical work matters because you are optimising for the wrong intent.",
      "## Layer 2 — Technical hygiene",
      "Crawlability, schema, internal linking, Core Web Vitals. This is not glamorous. It is plumbing. You only notice when it leaks.",
      "## Layer 3 — Content as a workflow",
      "Briefs, drafts, SEO checks, publish, refresh — owned by one tool, not seven. The workflow matters more than the brief template.",
      "## Layer 4 — Reporting loop",
      "Reporting closes back into layer one, so the system learns what to write next instead of guessing. Run all four, monthly, for twelve months. Most of the SEO retainers I have looked at do not run any of them consistently.",
    ],
  },
  {
    slug: "clarity-sprint-playbook",
    title: "The Clarity Sprint playbook",
    excerpt:
      "What happens in 7–10 days when a pre-revenue or stuck-revenue founder buys a Clarity Sprint.",
    readTime: "5 min read",
    date: "2026-04-30",
    category: "Operations",
    body: [
      "## Why this offer exists",
      "Clarity Sprint is a 7–10 day engagement priced as an entry offer. It exists because most founders do not need a 90-day retainer. They need someone to look hard at what they have, name the real problem, and hand them a system they can run.",
      "## Days 1–2 — Read everything",
      "Positioning interview and asset review. I read the homepage, sales decks, the last 20 emails to prospects, GA4, GSC and the README. Then I write back the version of you that is actually working, and the version that is leaking.",
      "## Days 3–6 — Rebuild the core",
      "Homepage rewrite, SEO direction document, content structure for the next 90 days. Every recommendation is paired with the system that produces it, not a one-off task.",
      "## Days 7–10 — Handover",
      "Loom walkthrough, written summary, and a 30-day plan you can hand to a junior person or run yourself. If you want me to keep going, we talk. If not, you keep the system. That is the point.",
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-most-b2b-seo-fails",
    title: "Why Most B2B SEO Fails Before It Starts",
    excerpt: "SEO treated as a checklist produces checklist results. The companies with compounding search visibility built something different from the beginning.",
    content: `
      <p>Most B2B companies approach SEO wrong. They treat it as a quarterly initiative rather than a long-term system. Here's what actually works...</p>
      
      <h2>The Problem with Quarterly SEO</h2>
      <p>When you treat SEO as a checklist, you get checklist results. The companies that win at search don't do more SEO—they do SEO differently.</p>
      
      <h2>Building Systems, Not Checklists</h2>
      <p>Sustainable organic growth comes from building systems that compound. Each piece of content should support the others, creating a network of authority.</p>
      
      <h2>The Compound Effect</h2>
      <p>When your website structure, content production, and technical SEO all point in the same direction, results compound over time instead of resetting every quarter.</p>
    `,
    date: "2025-07-15",
    readTime: "8 min",
    category: "SEO Systems"
  },
  {
    slug: "what-marketing-system-looks-like",
    title: "What a Marketing System Actually Looks Like",
    excerpt: "Not a tech stack. Not an agency retainer. A system is a set of repeatable decisions that produce compounding results.",
    content: `
      <p>Most B2B companies don't have a marketing system. They have a collection of tactics that reset every quarter.</p>
      
      <h2>What Is a Marketing System?</h2>
      <p>A marketing system is a set of repeatable decisions that produce compounding results. It's not a tech stack or an agency retainer.</p>
      
      <h2>The Four Pillars</h2>
      <p>Every marketing system has four pillars: website structure, content production, distribution, and measurement. All four must work together.</p>
      
      <h2>Making It Repeatable</h2>
      <p>The key to a system is repeatability. If your marketing output resets every quarter, the architecture is wrong.</p>
    `,
    date: "2025-06-28",
    readTime: "10 min",
    category: "Marketing Systems"
  },
  {
    slug: "building-yoga-write-code-month-3",
    title: "Building Yoga Write Code: Month 3",
    excerpt: "What three months of consulting research taught me about the content operations problem.",
    content: `
      <p>Three months into building Yoga Write Code, and the problem is clearer than ever.</p>
      
      <h2>The Content Operations Problem</h2>
      <p>B2B companies struggle with content operations. It's not a lack of ideas or effort—it's a lack of systems.</p>
      
      <h2>What I've Learned</h2>
      <p>After working with dozens of B2B companies, the pattern is clear: random marketing doesn't compound. Systems do.</p>
      
      <h2>What's Next</h2>
      <p>The next phase is building the AI platform that automates these systems. Stay tuned.</p>
    `,
    date: "2025-05-10",
    readTime: "6 min",
    category: "Building in Public"
  }
];
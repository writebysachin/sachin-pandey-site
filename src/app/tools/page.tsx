import Link from "next/link";
import { ArrowRight, Search, BarChart3, FileText } from "lucide-react";

export const metadata = {
  title: "Free SEO & Content Tools | Sachin Pandey",
  description: "Genuinely useful free tools to help you diagnose and fix your marketing systems. Get actionable SEO and content insights delivered to your inbox.",
};

const tools = [
  {
    id: "seo-audit",
    icon: Search,
    title: "Website SEO Quick Audit",
    description: "Get a prioritized, 10-point action plan for your website. We analyze your technical basics, metadata, and content signals to tell you exactly what to fix first.",
    audience: "Best for: Founders & Marketing Teams",
    features: [
      "Technical & metadata health check",
      "Weak homepage positioning detection",
      "Missing content opportunities",
      "Prioritized, easy-to-understand fixes",
    ],
    cta: "Run Free Audit",
    link: "/tools/seo-audit", 
  },
  {
    id: "opportunity-finder",
    icon: BarChart3,
    title: "Content Opportunity Finder",
    description: "Discover the high-value content topics your competitors are capturing but you are missing. Input your site and up to 3 competitors to find your content gaps.",
    audience: "Best for: Content Strategists & SEOs",
    features: [
      "Competitor content gap analysis",
      "High-intent topic recommendations",
      "Search volume & difficulty estimates",
      "Actionable content angles",
    ],
    cta: "Join Waitlist",
    link: "#", // Fixed: Added placeholder link
    badge: "Coming Soon",
  },
  {
    id: "brief-generator",
    icon: FileText,
    title: "SEO Content Brief Generator",
    description: "Turn a simple topic into a comprehensive, SEO-optimized content brief. Get the exact structure, questions to answer, and angles your competitors are missing.",
    audience: "Best for: Writers & Content Managers",
    features: [
      "Search intent analysis",
      "Suggested H2/H3 structure",
      "Key questions to answer",
      "Competitor blind spots",
    ],
    cta: "Join Waitlist",
    link: "#", // Fixed: Added placeholder link
    badge: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
            Free Resources
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
            Tools that actually help you <br className="hidden sm:block" />
            <span className="text-primary">fix your marketing systems.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No fluff, no generic PDFs. Just genuinely useful diagnostics and actionable insights delivered straight to your inbox. 
            Use these tools to understand what's broken, then learn how to fix it.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div 
                key={tool.id} 
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {tool.badge && (
                  <span className="absolute top-6 right-6 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {tool.badge}
                  </span>
                )}
                
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <tool.icon className="h-6 w-6" />
                </div>

                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {tool.title}
                </h2>
                
                <p className="text-sm font-medium text-primary mb-4">
                  {tool.audience}
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {tool.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={tool.link}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 group-hover:translate-y-[-2px]"
                >
                  {tool.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-surface border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-4">
              Why build free tools?
            </h2>
            <p className="text-lg text-muted-foreground">
              Because the best way to prove I can fix your marketing systems is to show you exactly what's broken first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-foreground">You get immediate value</h3>
              <p className="text-sm text-muted-foreground">
                No gatekeeping. You enter your site and get real, prioritized insights instantly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-foreground">We earn your trust</h3>
              <p className="text-sm text-muted-foreground">
                By showing you exactly what's wrong and how to fix it, we prove our expertise before asking for anything.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-foreground">You decide what's next</h3>
              <p className="text-sm text-muted-foreground">
                Fix it yourself using our free guides, or reply to the email and let's talk about working together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
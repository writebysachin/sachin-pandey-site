import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Insights | Sachin Pandey",
  description: "Thoughts on B2B marketing systems, SEO, and content operations.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
              Insights
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
              Thoughts on marketing systems
            </h1>
            <p className="text-xl text-muted-foreground">
              Writing about B2B marketing, SEO, content operations, and building systems that compound.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/insights/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <span>{post.readTime} read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
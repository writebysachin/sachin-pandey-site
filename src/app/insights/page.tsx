import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Insights | Sachin Pandey",
  description: "Thoughts on B2B marketing systems, SEO, AI search, and content operations.",
};

export default function InsightsPage() {
  const posts = getAllPosts();

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

      {/* Blog Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No articles yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Featured Image Container */}
                  {post.featuredImage && (
                    <div className="relative h-52 w-full overflow-hidden bg-muted">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  
                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/insights/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </time>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
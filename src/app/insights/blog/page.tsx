import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Sachin Pandey`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 md:py-32 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/insights"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
          >
            ← Back to Insights
          </Link>
          
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
            {post.category}
          </span>
          
          <h1 className="font-heading text-4xl sm:text-5xl leading-tight text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div 
            className="prose prose-lg prose-zinc max-w-none
              prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="font-heading text-3xl text-foreground mb-4">
            Want to build a marketing system that compounds?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's talk about how we can work together.
          </p>
          <Link
            href="/#work-with-me"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </article>
  );
}
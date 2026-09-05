import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Sachin Pandey`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6 max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image - Full Width */}
        {post.featuredImage && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border shadow-md">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </section>

      {/* Main Content - WIDER LAYOUT */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          {/* Article Content - Wider */}
          <div className="
            space-y-6
            [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-muted-foreground [&>p]:mb-6
            [&>h2]:font-heading [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-tight
            [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:md:text-3xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:leading-snug
            [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:text-foreground [&>h4]:mt-6 [&>h4]:mb-3
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-6 [&>ul]:text-muted-foreground [&>ul]:text-lg
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:mb-6 [&>ol]:text-muted-foreground [&>ol]:text-lg
            [&>li]:leading-relaxed
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:py-3 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-foreground [&>blockquote]:bg-surface/50 [&>blockquote]:rounded-r-lg
            [&>strong]:font-semibold [&>strong]:text-foreground
            [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-2 [&>a]:hover:text-primary/80
            [&>code]:bg-surface [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:text-primary [&>code]:font-mono
            [&>pre]:bg-surface [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-border [&>pre]:mb-6 [&>pre]:overflow-x-auto
            [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-sm
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center rounded-full bg-surface px-4 py-2 text-sm font-medium text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section - Wider */}
          <div className="mt-16 rounded-xl border border-border bg-surface/50 p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Need help with your marketing systems?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-base md:text-lg">
              I help B2B companies build websites, SEO, and content systems that compound over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Work With Me
              </Link>
              <Link 
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-surface hover:border-primary/30"
              >
                Try Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
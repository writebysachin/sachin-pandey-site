import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, type Insight } from "../../../src/lib/content";
import { SiteFooter, SiteHeader } from "../../../src/components/site-chrome";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Insight — Sachin Pandey",
      description: "Insight from Sachin Pandey",
    };
  }

  return {
    title: `${post.title} · Sachin Pandey`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Sachin Pandey`,
      description: post.excerpt,
      type: "article",
      url: `https://sachinpandey.com.np/resources/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      site: "@sachinpandey",
    },
  };
}

export default async function ResourcePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) {
    notFound();
  }

  const idx = insights.findIndex((item) => item.slug === post.slug);
  const prev = idx > 0 ? insights[idx - 1] : null;
  const next = idx < insights.length - 1 ? insights[idx + 1] : null;
  const related = insights.filter((item) => item.slug !== post.slug).slice(0, 2);
  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const headings = post.body
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace(/^##\s+/, "");
      return {
        text,
        id: text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
      };
    });

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <article>
        <header className="relative border-b border-border">
          <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-60" />
          <div className="container-page py-16 md:py-24">
            <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
              ← All insights
            </Link>
            <p className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
              {post.category} · {post.readTime} · {formatted}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-primary-foreground">
                S
              </span>
              <div className="text-sm">
                <p className="font-medium text-foreground">Sachin Pandey</p>
                <p className="text-muted-foreground">Independent systems operator</p>
              </div>
            </div>
          </div>
        </header>

        <section className="container-page py-16">
          <div className="grid gap-12 md:grid-cols-12">
            <aside className="md:col-span-3">
              {headings.length > 0 && (
                <nav className="sticky top-24 rounded-2xl border border-border bg-surface p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    On this page
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>

            <div className="md:col-span-9">
              <div className="mx-auto max-w-2xl space-y-6 text-[17px] leading-[1.75] text-foreground">
                {post.body.map((para, index) => {
                  if (para.startsWith("## ")) {
                    const text = para.replace(/^##\s+/, "");
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "");
                    return (
                      <h2
                        key={index}
                        id={id}
                        className="scroll-mt-28 pt-6 text-2xl font-semibold tracking-tight"
                      >
                        {text}
                      </h2>
                    );
                  }

                  const firstParagraphIndex = post.body.findIndex(
                    (line) => !line.startsWith("## "),
                  );
                  const isFirstParagraph = index === firstParagraphIndex;

                  return (
                    <p
                      key={index}
                      className={
                        isFirstParagraph
                          ? "first-letter:text-gradient-brand first-letter:mr-2 first-letter:float-left first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.9]"
                          : ""
                      }
                    >
                      {para}
                    </p>
                  );
                })}
              </div>

              <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-border bg-surface p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Quiet newsletter
                </p>
                <h3 className="mt-2 text-xl font-semibold">One operator essay every few weeks.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  No sequences, no growth-hack hype, no upsells. Unsubscribe in one click.
                </p>
                <form className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-background/20 bg-background p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Written by</p>
                <p className="mt-2 font-semibold">Sachin Pandey</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Independent systems operator. Helping B2B SMBs reduce operational complexity in
                  SEO, content, reporting and marketing automation while building Yoga Write Code.{" "}
                  <Link href="/contact" className="text-foreground underline underline-offset-4">
                    Book an audit
                  </Link>
                  .
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/resources/${prev.slug}`}
                    className="rounded-2xl border border-border bg-background p-5 hover:bg-surface"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      ← Previous
                    </p>
                    <p className="mt-2 font-medium">{prev.title}</p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/resources/${next.slug}`}
                    className="rounded-2xl border border-border bg-background p-5 text-right hover:bg-surface"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Next →</p>
                    <p className="mt-2 font-medium">{next.title}</p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground">
                Comments are off for now. To discuss this post, reply on{" "}
                <a
                  href="https://www.linkedin.com/in/sachinpandey"
                  className="underline underline-offset-4"
                >
                  LinkedIn
                </a>{" "}
                or email{" "}
                <a href="mailto:hello@sachinpandey.com.np" className="underline underline-offset-4">
                  hello@sachinpandey.com.np
                </a>
                .
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="border-t border-border bg-surface">
            <div className="container-page py-16">
              <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="group rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {r.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}

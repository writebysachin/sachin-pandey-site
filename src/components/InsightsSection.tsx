import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from "@/lib/posts";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

// Reusable UI components for this section
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

// Main Dynamic Component
export default function InsightsSection() {
  // Automatically fetches your markdown posts and takes the latest 3
  const posts = getAllPosts().slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Section variant="surface">
      <div className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge>Insights</Badge>
          <SectionHeading>How I think about these problems</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between p-8 first:pl-0 last:pr-0 md:first:pl-8 md:last:pr-8 transition-colors hover:bg-background"
            >
              <Link href={`/insights/${post.slug}`} className="flex flex-col h-full">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">
                      {post.category}
                    </span>
                    <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-6 text-xs text-muted-foreground font-medium">
                  {formatDate(post.date)} · {post.readTime}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
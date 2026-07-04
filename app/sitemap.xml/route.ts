import { insights, workItems } from "../../src/lib/content";

const BASE_URL = "https://sachinpandey.com.np";

export async function GET() {
  const entries = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    { path: "/work", changefreq: "weekly", priority: "0.8" },
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/resources", changefreq: "weekly", priority: "0.8" },
    { path: "/contact", changefreq: "yearly", priority: "0.6" },
    { path: "/privacy", changefreq: "yearly", priority: "0.3" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
    ...workItems.map((w) => ({
      path: `/work#${w.slug}`,
      changefreq: "monthly",
      priority: "0.5",
    })),
    ...insights.map((i) => ({
      path: `/resources/${i.slug}`,
      changefreq: "monthly",
      priority: "0.6",
    })),
  ];

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries.map(
      (e) =>
        `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
    ),
    `</urlset>`,
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

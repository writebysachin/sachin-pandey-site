# 02-ARCHITECTURE.md: Site Structure & Technical Architecture

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Content**: Markdown (`.md` files in `/content/blog`) parsed via `gray-matter`
- **Forms**: Web3Forms (for serverless email capture without backend complexity)
- **Hosting**: Vercel

## Route Structure
- `/` : Homepage (Hero, Problem, Services, Selected Work, Process, Philosophy, Dynamic Insights, FAQ, CTA)
- `/insights` : Blog index (dynamic grid from Markdown)
- `/insights/[slug]` : Single blog post (wide layout, accessible typography, ReactMarkdown)
- `/tools` : Free resources hub (SEO Audit, Opportunity Finder, Brief Generator)
- `/tools/seo-audit` : Lead capture form for manual audit
- `/contact` : Calendly integration / direct contact
- `/yoga-write-code` : Dedicated page explaining the YWC product vision

## Data Flow
1. **Content**: `src/lib/posts.ts` reads `/content/blog/*.md` at build time (SSG).
2. **Forms**: Client component collects data -> sends POST request to Web3Forms API -> returns success state.
3. **Images**: Stored in `/public/blog/`, served via `next/image` with `priority` on LCP elements.


# SachinPandey.com.np — Project Architecture

## Architecture Principle
Keep the personal site simple. It is a content + trust + lead-generation website, not a SaaS dashboard.

## Preferred Stack
- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Lightweight analytics
- MailerLite (or another compliant opt-in email provider)
- Server/API function for lead-magnet processing
*(Rule: Database only when actually needed. Do not add infrastructure without a concrete requirement.)*

## Site Structure
```text
/
├── about/
├── work/
├── services/
│   ├── website-strategy/
│   ├── seo-systems/
│   ├── content-operations/
│   └── ai-workflows/
├── free/
│   └── growth-diagnostic/
├── insights/
├── contact/
├── privacy/
└── terms/
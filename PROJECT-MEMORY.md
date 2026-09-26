# 06-PROJECT-MEMORY.md: Founder Context & Key Decisions

## Founder Profile
- **Name**: Sachin Pandey
- **Role**: B2B Growth Systems Consultant & Founder of Yoga Write Code (YWC).
- **Philosophy**: "Marketing systems should compound. If your marketing output resets every quarter, the architecture is wrong."
- **Approach**: Depth first, distribution second. Focus on building systems, not just executing tactics.

## Key Architectural Decisions Made
1. **Markdown over CMS (for now)**: Chose local `.md` files with `gray-matter` over Sanity/Strapi to keep the stack simple, fast, and fully under version control.
2. **Manual Audit First**: The SEO Audit tool starts as a "high-touch" manual review (capturing email, delivering value in 24h) rather than a complex automated scraper. This builds higher trust and better consulting leads.
3. **Font Weights**: Shifted from heavy `font-bold` to `font-normal` and `font-medium` across the site for better accessibility, readability, and a more premium, modern feel.
4. **Repository Rename**: Moved from `sachin-pandey-site` to `writebysachin/sachin-pandey-site` to align with the personal brand domain.

## AI Assistant Instructions
- Always reference this memory file when making architectural suggestions.
- Never suggest adding heavy, unnecessary dependencies. Prefer native Next.js features or lightweight utilities (like `clsx` + `tailwind-merge`).
- Maintain the strategic separation between "Sachin Pandey (Consulting)" and "Yoga Write Code (Product)".
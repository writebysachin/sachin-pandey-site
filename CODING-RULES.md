
---

### 3. `03-CODING-RULES.md`
```markdown
# SachinPandey.com.np — Coding Rules

## General
- Prefer the smallest implementation that solves the requirement.
- Do not build abstractions before they are needed.

## Product Rule
Every feature should answer:
1. Does it increase qualified leads?
2. Does it improve trust/conversion?
3. Does it improve useful content discovery?
4. Does it support a validated workflow?
*(If not, question the feature.)*

## UI
- Reuse existing components.
- Avoid one-off components when unnecessary.
- Keep spacing consistent.
- Avoid unnecessary animation.
- Do not turn the marketing site into a dashboard.
- Mobile-first.
- Every page needs one clear primary action.

## Content
**Never invent:** Client names, revenue, traffic increases, rankings, conversion improvements, testimonials, certifications, customer counts.
*(Rule: Use placeholders until real evidence exists.)*

## AI
If an AI feature analyzes a website:
- Ground claims in retrieved evidence.
- Show evidence where practical.
- Never present unsupported classifications as facts.
- Allow an "insufficient evidence" state.
- Never fabricate search volume, rankings, customer intent, or competitor information.
- Validate outputs before displaying recommendations.

## Forms
Every public form needs:
- Client-side validation
- Server-side validation
- Clear errors
- Success state
- Loading state
- Spam/rate-limit protection

## Email Capture
**Do not:** Subscribe users without appropriate consent, hide why the email is collected, or ask for unnecessary information.
**Do:** Clearly state what the user receives, link to the Privacy Policy, and provide unsubscribe functionality.

## SEO
Every public page should have:
- Unique title
- Meta description
- Canonical URL (where appropriate)
- Open Graph metadata
- Semantic headings
- Descriptive URLs
- Useful internal links

## Performance
**Avoid:** Huge images, unnecessary JavaScript, heavy third-party scripts, autoplay video, libraries for trivial interactions.

## Change Rule
Problem → Evidence → Expected business impact → Smallest implementation → Measure.
*(If there is no evidence of the problem, prefer research over code.)*
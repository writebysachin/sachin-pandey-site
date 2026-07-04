# Sachin + Yoga Write Code — Brand System

A practical spec for the Sachin Pandey personal site (`sachinpandey.com.np`) and the
Yoga Write Code product site. Designed to be paste-able into a designer or dev
README.

> **Operating principle:** Brand is operational truth. Tokens below must show up
> the same way in code, in Figma, and in a printed invoice.

---

## 1. Design Tokens

### 1.1 Color

| Token         | Value     | Use                                    |
| ------------- | --------- | -------------------------------------- |
| `--primary`   | `#630ED4` | AI, innovation, premium                |
| `--success`   | `#58AE39` | Growth, ROI, success states            |
| `--bg`        | `#FFFFFF` | Page background (light)                |
| `--surface`   | `#FAFAFA` | Cards, sections                        |
| `--surface-2` | `#F4F4F5` | Subtle wells, hovered surfaces         |
| `--border`    | `#E4E4E7` | Hairlines, dividers, inputs            |
| `--muted-fg`  | `#71717A` | Secondary text, captions               |
| `--fg`        | `#18181B` | Primary text                           |
| `--fg-strong` | `#27272A` | Pre-headings, monospace, dark surfaces |

Neutrals carry **~90% of the UI**. Primary and success are accents.

#### Color usage rules

| Surface       | Personal site (Sachin)                                  | Product site (YWC)                                  |
| ------------- | ------------------------------------------------------- | --------------------------------------------------- |
| Logo mark     | Brand gradient (`#630ED4 → #58AE39`) on neutral         | Solid `#630ED4` on neutral                          |
| H1 / Hero     | Neutral `#18181B`; one phrase in `text-gradient-brand`  | Neutral `#18181B`; one phrase in `--primary`        |
| Body          | `#18181B` on `#FFFFFF` / `#FAFAFA`                      | Same                                                |
| Captions      | `#71717A`                                               | Same                                                |
| Primary CTA   | `#18181B` background, `#FFFFFF` text (operator look)    | `#630ED4` background, `#FFFFFF` text (product look) |
| Secondary CTA | Outline `#E4E4E7`, text `#18181B`                       | Outline `#E4E4E7`, text `#630ED4`                   |
| Success / ROI | `#58AE39` for deltas, badges, success toasts            | Same                                                |
| Charts        | `#630ED4` (primary), `#58AE39` (secondary), neutrals    | Same                                                |
| Borders       | `#E4E4E7` everywhere; never use brand color for borders | Same                                                |
| Backgrounds   | `#FFFFFF` / `#FAFAFA` with subtle brand gradient washes | More saturated brand washes acceptable              |

#### Signature gradient

`--gradient-brand: linear-gradient(110deg, #630ED4 0%, #7E3BE0 45%, #58AE39 100%)`

Use only on:

- Logo mark
- 1 phrase per page in headings (`text-gradient-brand`)
- Stat numbers in case studies
- Hero background wash (10–20% opacity)

Never use the gradient on body text, borders, or large surfaces.

---

### 1.2 Typography

**Family:** Inter (UI + body). JetBrains Mono (code, labels like `PILLAR 01`).

**Scale (px):** `48 / 36 / 30 / 24 / 20 / 16 / 14 / 12`

| Token     | Size | Weight  | Use                         |
| --------- | ---- | ------- | --------------------------- |
| `display` | 48   | 600     | Hero H1 (desktop)           |
| `h1`      | 36   | 600     | Page H1, section openers    |
| `h2`      | 30   | 600     | Major section titles        |
| `h3`      | 24   | 600     | Card titles, sub-sections   |
| `lead`    | 20   | 400     | Hero supporting paragraph   |
| `body`    | 16   | 400     | Default body                |
| `small`   | 14   | 400/500 | Secondary, form labels, nav |
| `caption` | 12   | 500     | Eyebrows, tags, metadata    |

- Letter-spacing: `-0.02em` on h1–h4; `0.18em` uppercase on eyebrows.
- Line-height: 1.05 on hero, 1.2 on H2/H3, 1.6 on body, 1.75 on long-form articles.
- Code/monospace: JetBrains Mono, weight 400/500, used for labels like
  `PILLAR 01`, `CASE 02`, file paths in docs.

**Site differentiation:**

- Personal site: hero leans **editorial** — bigger display, more whitespace.
- Product site: hero leans **product** — slightly tighter, more dense feature rows.

---

### 1.3 Spacing — 8-point system

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px)

- Component padding: `24px` (cards), `32–40px` (large cards / CTAs).
- Section padding: `80–112px` (`py-20` / `py-28`) on desktop.
- Stack rhythm: `16 / 24 / 40` between related items.
- Grid gutters: `20px` desktop, `16px` mobile.

### 1.4 Radius

- Base: **12px** (`--radius`). Cards, inputs, CTAs.
- Small: 8px (badges, chips).
- Large: 16–24px (hero containers, feature cards).
- Pills: full radius for status/availability badges only.

### 1.5 Shadow

- `sm`: `0 1px 2px rgb(24 24 27 / 0.04)` — inputs, hairline lift.
- `md`: `0 4px 16px -4px rgb(24 24 27 / 0.08)` — cards on hover.
- `lg`: `0 16px 48px -16px rgb(99 14 212 / 0.18)` — hero, CTA modules.

Never combine shadow + brand border. Pick one elevation cue per surface.

---

## 2. Components

### Buttons

- Radius **12px**, padding `12px 20px`, font weight 500, size 14–15.
- **Primary (operator):** `#18181B` bg, white text. Hover: `opacity: 0.9`.
- **Primary (product):** `#630ED4` bg, white text. Hover: 8% darker.
- **Secondary:** transparent bg, `#E4E4E7` border, `#18181B` text.
- **Ghost:** transparent, text-only, underline on hover.
- Disabled: `opacity: 0.5`, `cursor: not-allowed`. Never grey out colors.

### Cards

- `border: 1px solid #E4E4E7`, radius 16–20px, padding 24–32px.
- Background `#FFFFFF` on `#FAFAFA` sections, or `#FAFAFA` on white.
- Hover: `translateY(-2px)` + shadow `md`. No color shift.

### Inputs

- Radius 12px, height 44px (10–12px vertical padding), border `#E4E4E7`.
- Focus: border `#630ED4`, ring `rgba(99, 14, 212, 0.4)` 2px.
- Error: border `#DC2626`, helper text 12px.

### Tables

- Hairline borders `#E4E4E7`, row height 48px, header weight 500, caps eyebrows.
- Numeric columns right-aligned, monospace optional.
- Zebra: `#FAFAFA` every other row. No vertical lines.

### Badges / pills

- 12px text, 6/10 padding, radius full.
- Variants: `neutral` (`#F4F4F5`/`#27272A`), `success` (`#ECFDF5`/`#58AE39`),
  `brand-soft` (`#F3EDFB`/`#630ED4`).

---

## 3. Differentiation: Personal vs Product

### Personal — Sachin Pandey

- Tone: operator, editorial, calm.
- Primary CTA: **dark** (`#18181B`), not brand purple — signals "operator, not product".
- Gradient: used sparingly, mostly as a wash + one phrase per page.
- Imagery: mostly type. Photos only when authentic (no stock).

### Product — Yoga Write Code

- Tone: product, confident, denser.
- Primary CTA: **brand purple** (`#630ED4`) — signals "buy / try".
- Gradient: allowed as feature-card accents and dashboard chart strokes.
- Imagery: product screenshots > illustration > photography.

Both share tokens, scale and components — only **emphasis** changes.

---

## 4. Voice tokens (for designers/devs writing UI strings)

- Eyebrows: `ALL CAPS · LETTER-SPACING 0.18em` (`PILLAR 01`, `CASE 02`).
- Headlines: declarative, one verb. (`Systems that quietly worked.`)
- CTAs: action + arrow. (`Book audit →`, `Request Clarity Sprint →`)
- Avoid: "Unlock", "Supercharge", "Game-changing", "Revolutionary".

---

## 5. Implementation reference

All tokens above are live in `src/styles.css` of the personal site:

- Colors as `oklch()` CSS variables on `:root` (and `.dark`).
- Tailwind v4 utilities exposed via `@theme inline` (`bg-primary`, `text-success`, etc.).
- Helpers: `text-gradient-brand`, `bg-gradient-brand`, `bg-gradient-brand-soft`,
  `container-page`.

When in doubt, ship the change to the tokens — not to the component.

# Alexis Arenas — Portfolio Design System
> midnight gallery with a kaleidoscope mural — a deep-navy studio wall where one brilliantly colorful typographic artwork commands attention and everything else stays quiet and deliberate.

**Theme:** dark navy with electric-blue accents (light variants allowed for contrast)

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Alexis Arenas' portfolio operates as a midnight design studio: a deep navy canvas (#081F44) that lets a a bold typographic hero using the existing site copy and brand assets — command the entire first impression. Below the hero, the system retreats into quiet restraint: light bone-white text (#F4F8FF) over flat dark cards, tight Replica typography, pill-shaped controls, and a single electric blue (#007BFF) reserved for the live 'Open' status indicator. The page reads like a developer portfolio gallery — the work IS the decoration, so chrome stays compact, metadata is mono-typed, and the blue accent identifies actions, links, and active states. Information density is high but breathing — project entries stack as year/title/description/tags with generous 24px internal padding, and the 16px card radius softens the otherwise severe dark surface.

> **MANDATORY REFACTORING CONSTRAINT — PRESERVE THE EXISTING WEBSITE**
> This document is a visual design reference, NOT a request to rebuild the website from scratch. Before editing, inspect the existing repository, components, assets, routes, content and configuration. Preserve ALL existing files unless a change is strictly required for styling; do not delete, rename, overwrite or replace original logos, images, illustrations, icons, fonts, PDFs, CV files, screenshots, videos or other assets. Preserve ALL existing visible information verbatim: name, biography, experience, projects, descriptions, skills, technology stacks, dates, contact details, URLs, social profiles, and calls to action. Preserve existing functionality, links, routing, forms, responsiveness, SEO metadata and integrations. Do not fabricate new content or substitute placeholders. Refactor styles, layout and reusable UI components while retaining the current content and asset references. If the repository has an existing logo, KEEP and DISPLAY that actual logo; do not replace it with a generated or recreated mark. If the new logo is provided as a separate asset, integrate it only after confirming which existing logo it replaces; keep the original file intact. Do not recolor logos or project screenshots.
> **Color system:** navy `#0B1F44`, electric blue `#007BFF`, off-white `#F4F8FF`. No purple, violet, magenta or gradients in the site chrome. The logo's original flat colors take precedence over approximate tokens.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Bone White | `#F4F8FF` | `--color-bone-white` | Primary text, nav links, button labels, footer copy — the only light on the page, used for everything that must be read |
| Slate Dark | `#081F44` | `--color-slate-dark` | Page canvas, base surface for all cards and sections |
| Graphite | `#102D55` | `--color-graphite` | Elevated surface — nested cards, button hover fills, secondary panels sitting on top of Slate Dark |
| Fog | `#A7B8CE` | `--color-fog` | Secondary text, metadata labels, inactive nav items, muted descriptions |
| Ash | `#8195AD` | `--color-ash` | Tertiary text, timestamps, low-priority labels |
| Charcoal | `#23446B` | `--color-charcoal` | Outlined button borders, icon strokes on dark surfaces |
| Electric Blue | `#007BFF` | `--color-indigo-dusk` | Bright blue supporting accent for decorative details and low-frequency emphasis |

## Tokens — Typography

### Replica-Regular — Primary typeface for all body text, headings, navigation, and the hero display. Prefer regular weight for body and navigation; headings may use semibold for clarity. The tight -0.014em tracking throughout gives geometric letters a slightly condensed, deliberate feel. Used at every size from 14px captions to the 120px+ hero mural. · `--font-replica-regular`
- **Substitute:** Inter, Söhne, or Suisse Int'l at weight 400
- **Weights:** 400
- **Sizes:** 20px, 36px
- **Line height:** 1.00-1.20
- **Letter spacing:** -0.0140em
- **Role:** Primary typeface for all body text, headings, navigation, and the hero display. Prefer regular weight for body and navigation; headings may use semibold for clarity. The tight -0.014em tracking throughout gives geometric letters a slightly condensed, deliberate feel. Used at every size from 14px captions to the 120px+ hero mural.

### Replica-Mono — Reserved for metadata and structural labels: year markers, project tags (Art Direction, Branding, Design Systems), and small heading-like elements. Creates a clear typographic separation between content (Replica-Regular) and structural scaffolding (Replica-Mono). · `--font-replica-mono`
- **Substitute:** JetBrains Mono, IBM Plex Mono, or Geist Mono
- **Weights:** 400
- **Sizes:** 20px
- **Line height:** 1.20
- **Role:** Reserved for metadata and structural labels: year markers, project tags (Art Direction, Branding, Design Systems), and small heading-like elements. Creates a clear typographic separation between content (Replica-Regular) and structural scaffolding (Replica-Mono).

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 14px | 1.2 | -0.014px | `--text-caption` |
| body-sm | — | — | 16px | 1.2 | -0.014px | `--text-body-sm` |
| body | — | — | 20px | 1.2 | -0.014px | `--text-body` |
| subheading | — | — | 24px | 1.2 | -0.014px | `--text-subheading` |
| heading-sm | — | — | 28px | 1.2 | -0.014px | `--text-heading-sm` |
| heading | — | — | 36px | 1.2 | -0.014px | `--text-heading` |
| display | — | — | 120px | 1 | -0.014px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 12 | 12px | `--spacing-12` |
| 24 | 24px | `--spacing-24` |
| 90 | 90px | `--spacing-90` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| pills | 64px |
| images | 16px |
| buttons | 24px |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 12px

## Components

### Hero Typographic Mural
**Role:** First-screen centerpiece — the only decorative element in the system

Display text at 120px+ in Replica-Regular weight 400, line-height 1.00, letter-spacing -0.014em. Letterforms filled with blue-and-white organic shapes (navy, electric blue, white — not system tokens, but illustration art). Spans full viewport width. This is the brand signature — other sections use blue sparingly.

### Top Navigation Bar
**Role:** Minimal text-link navigation spread across the viewport top

Flat, no background bar — links sit directly on the Slate Dark canvas. 14px Replica-Regular, letter-spacing -0.014em. Items distributed: brand name left, role descriptor center-left, contact links (email, twitter, read.cv, so-so.eth) spread right. Fog (#A7B8CE) for inactive, Bone White (#F4F8FF) for active. No borders, no hamburger, no container.

### Bio Card
**Role:** Personal introduction block below the hero

Graphite (#102D55) surface, 16px border-radius, 24px padding on all sides. 'Hello' prefix in Fog (#A7B8CE) 14px Replica-Regular. Body text in Bone White (#F4F8FF) at 20px Replica-Regular, line-height 1.20. No shadow, no border. A compact dark panel floating on the darker canvas.

### Availability Status Pill
**Role:** Live 'Open' indicator showing the designer is accepting work

Pill-shaped (64px border-radius) with Electric Blue (#007BFF) fill. Contains a small colored dot (8px, same Electric Blue) and 'Open' text in Bone White at 14px Replica-Regular. 8px 16px padding. Sits inline with CTA buttons as a horizontal action row.

### CTA Pill Button
**Role:** Primary call-to-action — 'Get in touch →', 'Start a project →'

Graphite (#102D55) fill, 24px border-radius (softly rounded, not full pill). Bone White (#F4F8FF) text at 14-16px Replica-Regular. 12px 24px padding. Arrow suffix (→) in same color. No shadow, no border. On hover, surface lightens to #17406F.

### Outlined Ghost Button
**Role:** Secondary action or link with visual separation

Transparent background with 1px Charcoal (#23446B) border. 24px border-radius. Bone White text. Used for less prominent actions alongside filled CTAs.

### Section Header
**Role:** Major section label like 'Selected Projects'

36px Replica-Regular weight 400, Bone White (#F4F8FF), line-height 1.20. No underline, no decoration — just clean type sitting on the canvas. Generous 64px margin-top separating it from the previous section.

### Project Entry Card
**Role:** Individual project entry in the Selected Projects list

Graphite (#102D55) surface, 16px border-radius, 24px padding. Structure: year in Fog (#A7B8CE) Replica-Mono (top-left), project name in Bone White Replica-Regular 36px (left column), description in Fog 20px (center column), tag list in Replica-Mono with '○' bullet prefix (right column). Tags: Art Direction, Branding, Design Systems, Product Design. No images in the list view — visual work appears as full-bleed embeds below.

### Project Showcase Embed
**Role:** Full-width project visual — the Metadrop gradient-bordered interface

Full container width, 16px border-radius. Project artwork sits on the Slate Dark canvas with no frame. Project title bar above uses 14px Replica-Mono with category tags (COINS, NFTS) in pill badges. This is where project-specific visual identity breaks through the system.

### Category Tag Pill
**Role:** Small metadata badges for project categorization

No background fill, 1px hairline border in Fog (#A7B8CE), 64px border-radius (full pill). Text in Replica-Mono 14px, Fog color. 2px 12px padding. Extremely minimal — just a border and text.

### About/Bio Text Block
**Role:** Extended personal narrative in the lower page section

Two-column asymmetric layout on Slate Dark canvas. Name 'Alexis' in 36px Bone White Replica-Regular with phonetic pronunciation ('pronounced "much-yay"') in Fog 14px Replica-Regular right-aligned. Body paragraphs in Bone White 20px, line-height 1.20, max-width ~480px per column. No card container — text sits directly on canvas.

### Hairline Divider
**Role:** Section separator

1px solid line in #254466 (a tone between canvas and card). Full container width. Minimal visual noise — just enough to signal transition without adding weight.

## Do's and Don'ts

### Do
- Keep the page at 1% colorfulness — only brand-blue accents and original project imagery introduce chromatic color
- Use Replica-Regular weight 400 exclusively for content; use semibold only when necessary for headings
- Apply -0.014em letter-spacing to all Replica text at every size — this tracking is the typographic identity
- Communicate elevation through surface color stepping (#081F44 → #102D55 → #007BFF), never through box-shadows
- Use 16px radius for cards and images, 24px for buttons, 64px for status pills and tags — these three values define all rounding in the system
- Let project artwork and the hero mural do the visual heavy lifting; keep all chrome flat and quiet
- Set section gaps to 64px and card padding to 24px — the 4px base unit produces compact, information-dense rhythm

### Don't
- Do not add box-shadows, glows, or blur effects to any component — the system is deliberately flat
- Avoid excessive font weights; use semibold sparingly for clear hierarchy
- Do not introduce purple or unrelated accent colors; electric blue (#007BFF) is the only interface accent
- Do not use white (#ffffff) as text or background — Bone White (#F4F8FF) is the off-white that prevents harshness on the dark canvas
- Do not add gradients to interface chrome — gradients belong only inside project artwork and the hero mural
- Do not use sharp 0px corners anywhere — every surface must have at least 16px radius to soften the dark canvas
- Do not use generic sans-serif fallbacks like Helvetica or Arial as visible type — always route through Inter or a geometric sans substitute at weight 400

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#081F44` | Page background, the base layer everything sits on |
| 1 | Card | `#102D55` | Elevated content containers — project cards, bio blocks, nested panels |
| 2 | Highlight | `#007BFF` | Status pills and active state surfaces |

## Elevation

- **Status pill (Open):** `none — flat, no shadow, relies on Electric Blue fill for prominence`
- **Project cards:** `none — flat Graphite surface, separation comes from color step not shadow`
- **Bio card:** `none — flat surface, hairline 1px border optional`

## Imagery

The site follows a strict visual hierarchy: the hero is the only space where color and illustration exist at scale, rendered as a massive blue-and-white typographic mural where organic navy, electric blue, and white shapes fill the letterforms of 'I build things'. This is signature artwork, not a repeating pattern. Project showcases below use full-bleed embeds of the actual product UI (like Metadrop's blue-accented bordered interface) — never stock photography, never lifestyle imagery, never abstract decorative graphics. The rest of the page is pure typography on flat dark surfaces. The contrast between the expressive hero and the austere everything-else is the defining visual tension.

## Layout

The page is a single scroll with max-width ~1200px centered content. Navigation is a flat text-link bar with no background container, items distributed across the full viewport. The hero is a massive typographic mural (120px+ display text) spanning the full content width. Below the hero, a compact stacked layout: bio card, then a horizontal action row of pills (status + CTAs), then the 'Selected Projects' section header, then project entry cards as horizontal rows (year | title | description | tags), then full-bleed project showcase embeds. The layout alternates between contained card surfaces and full-width project visuals, creating a rhythm of compressed metadata followed by expansive artwork. Sections are separated by 64px gaps with subtle 1px hairlines. No sidebar, no sticky header, no mega-menu.

## Agent Prompt Guide

**Quick Color Reference**
- text: #F4F8FF (Bone White)
- background: #081F44 (Slate Dark)
- card surface: #102D55 (Graphite)
- border: #23446B (Charcoal)
- accent / live status: #007BFF (Electric Blue)
- primary action: #007BFF

**Example Component Prompts**

1. Build a bio card: Graphite (#102D55) background, 16px border-radius, 24px padding. 'Hello' prefix in Fog (#A7B8CE) 14px Replica-Regular. Body text in Bone White (#F4F8FF) at 20px Replica-Regular, line-height 1.20, letter-spacing -0.014em. No shadow, no border.

2. Build an availability status pill: Electric Blue (#007BFF) fill, 64px border-radius, 8px 16px padding. Small 8px dot in same Electric Blue, then 'Open' text in Bone White 14px Replica-Regular. Inline with other action buttons in a horizontal row with 12px gap.

3. Build a project entry card: Graphite (#102D55) surface, 16px border-radius, 24px padding. Four-column horizontal layout: year (Fog, Replica-Mono, 14px) | project name (Bone White, Replica-Regular, 36px) | description (Fog, Replica-Regular, 20px) | tags (Replica-Mono, 14px, with '○' bullet, each in a 64px-radius pill with 1px Fog border). No images in this list view.

Primary actions may use electric blue (#007BFF); secondary actions use the existing neutral button treatment.

5. Build a section header: 36px Replica-Regular weight 400, Bone White (#F4F8FF), line-height 1.20, letter-spacing -0.014em. 64px margin-top. No underline, no accent bar, no decoration.

## Color Discipline

This system is built on radical chromatic restraint. The page is predominantly neutral — dark canvas, light text, gray hierarchy. The hero should use the existing portfolio assets and navy/blue/white palette; original project screenshots retain their authentic colors. In the interface itself, the single chromatic color (Electric Blue #007BFF) carries semantic weight: it means 'live', 'available', 'active'. Never use it for decoration, hover states, or generic emphasis. If you need to draw attention to something, change its size, weight of position — not its color.

## Similar Brands

- **Linear** — Same dark canvas with single-purpose chromatic accent used for status/availability indicators, flat surfaces with no shadows, compact information-dense layout
- **Rauno Freiberg** — Personal portfolio with dark navy canvas, oversized display type as the hero centerpiece, and extremely restrained interface chrome below
- **Vercel** — Dark mode with deep-navy canvas, single accent color for interactive states, flat card surfaces, tight typographic rhythm
- **Read.cv** — Portfolio platform with dark mode, minimal chrome, compact card-based project entries, text-first navigation
- **Pawel Huć** — Designer portfolio with dramatic typographic hero, dark background, flat interface below, and custom geometric sans-serif throughout

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-bone-white: #F4F8FF;
  --color-slate-dark: #081F44;
  --color-graphite: #102D55;
  --color-fog: #A7B8CE;
  --color-ash: #8195AD;
  --color-charcoal: #23446B;
  --color-indigo-dusk: #007BFF;

  /* Typography — Font Families */
  --font-replica-regular: 'Replica-Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-replica-mono: 'Replica-Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.2;
  --tracking-caption: -0.014px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.014px;
  --text-body: 20px;
  --leading-body: 1.2;
  --tracking-body: -0.014px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.014px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.014px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.014px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -0.014px;

  /* Typography — Weights */
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-90: 90px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 64px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-pills: 64px;
  --radius-images: 16px;
  --radius-buttons: 24px;

  /* Surfaces */
  --surface-canvas: #081F44;
  --surface-card: #102D55;
  --surface-highlight: #007BFF;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-bone-white: #F4F8FF;
  --color-slate-dark: #081F44;
  --color-graphite: #102D55;
  --color-fog: #A7B8CE;
  --color-ash: #8195AD;
  --color-charcoal: #23446B;
  --color-indigo-dusk: #007BFF;

  /* Typography */
  --font-replica-regular: 'Replica-Regular', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-replica-mono: 'Replica-Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-arial: 'Arial', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 14px;
  --leading-caption: 1.2;
  --tracking-caption: -0.014px;
  --text-body-sm: 16px;
  --leading-body-sm: 1.2;
  --tracking-body-sm: -0.014px;
  --text-body: 20px;
  --leading-body: 1.2;
  --tracking-body: -0.014px;
  --text-subheading: 24px;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.014px;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.014px;
  --text-heading: 36px;
  --leading-heading: 1.2;
  --tracking-heading: -0.014px;
  --text-display: 120px;
  --leading-display: 1;
  --tracking-display: -0.014px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-24: 24px;
  --spacing-90: 90px;

  /* Border Radius */
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-full: 64px;
}
```


## Refactoring acceptance checklist (mandatory)
- [ ] All original project entries, copy, experience, skills, dates, contact information and links are still present and accurate.
- [ ] All existing images, logos, screenshots, icons and downloadable files still load from their original assets.
- [ ] No original files were deleted, renamed or overwritten without an explicit request.
- [ ] Existing pages, navigation, buttons, forms and external links continue to work.
- [ ] The new visual system uses flat navy, electric blue and neutral tones; no purple and no decorative gradients.
- [ ] Mobile, tablet and desktop layouts remain usable and accessible.
- [ ] Before finishing, compare the original and refactored site section by section and report any content or functional differences.

# Tasteskill v2 redesign implementation plan

Branch: `audit/tasteskill-v2-redesign`
Site: `https://www.christophercardoso.dev`
Repo: `https://github.com/kriscard/christophercardoso.dev`

## Design read

Reading this as a personal developer portfolio plus editorial blog for developers and tech enthusiasts, with a Catppuccin dark-tech editorial language, leaning toward Tailwind plus custom tokens.

## Mode

Use **Redesign - Preserve**.

Rationale:

- The existing Catppuccin identity, Cal Sans headings, terminal logo, avatar, blog readability, MDX/code treatment, and view transitions are worth preserving.
- The problem is not a broken brand. The problem is low visual depth, sparse portfolio content, and repeated narrow-list layouts.
- Keep URL structure, primary nav labels, form field names, brand logo, and legal/copyright copy unchanged unless the user explicitly approves a change.

## Current audit summary

### Brand tokens currently in use

- Primary surfaces:
  - Dark: `#24273a` Catppuccin Macchiato base
  - Dark embedded/code: `#1e2030`
  - Light: `#eff1f5` Catppuccin Latte base
- Accent:
  - Purple/Mauve family
  - Main light accent: `#8839ef`
  - Main dark accent: `#c6a0f6`
  - Supporting accent: `#b7bdf8`
- Type stack:
  - Heading: local `CalSans-SemiBold`
  - Body: `Inter`
  - Mono: `JetBrains Mono`
- Radii:
  - Links/buttons: `rounded-lg`
  - Code blocks: `0.75rem`
  - Avatar: `rounded-full`
  - Images/cards: mostly `rounded-xl` or `rounded-lg`
- Logo treatment:
  - Small terminal-style logo image, `40px` in header
  - Wordmark text: `Christopher Cardoso` in Cal Sans on desktop
  - Mobile hides wordmark and keeps logo only

### Information architecture

Routes to preserve:

- `/`
- `/about`
- `/blog`
- `/blog/[slug]`
- `/projects`
- `/uses`
- `/api/og`
- `/robots.txt`
- `/sitemap.xml`

Primary nav labels to preserve exactly:

- About
- Blog
- Projects
- Uses

Existing anchor/form identifiers to preserve:

- `#projects`
- Blog search input `id="blog-search"`
- Blog search field `name="q"`
- Blog filter query param `tag`

Key conversion paths:

- Home hero to social profiles: X, GitHub, LinkedIn
- Home to article index via `All articles`
- Home to external project repos
- About to `/blog`
- About to `/#projects`
- Blog list to individual articles
- Blog filters/search to narrower article discovery
- Uses page to dotfiles, Instagram keyboard posts, and setup links

### Patterns to preserve

- Catppuccin Macchiato and Latte foundation.
- Cal Sans headings paired with Inter body and JetBrains Mono metadata.
- Terminal logo and avatar treatment.
- Blog/editorial readability.
- MDX code block styling and Catppuccin syntax feel.
- Article title view transitions.
- Direct, casual copy voice: practical, personal, developer-facing.
- Current URL structure and nav labels.

### Patterns to retire

- Overly empty portfolio rows, especially Projects.
- Max-width-only layout everywhere. The site uses the same narrow column rhythm too often.
- Icon-only social links as the main hero action.
- Generic project descriptions that under-sell the work.
- Static page OG metadata for non-post pages: About, Blog, Projects, and Uses inherit generic `og:title: Christopher Cardoso`.
- External content risk:
  - `content/dotfiles-part-1-terminal-setup.mdx` links to a Rakuten image returning 403.
  - `content/claude-code-workflow.mdx` links to `https://github.com/kriscard/.dotfiles`, returning 404, though that post is currently draft-tagged and not live.
- Minor taste issue: the design relies on a few simple rows and hover color changes where stronger hierarchy would help.

### Current dial reading

Starting point:

- `DESIGN_VARIANCE: 4`
- `MOTION_INTENSITY: 3`
- `VISUAL_DENSITY: 3`

Target for implementation:

- `DESIGN_VARIANCE: 6`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 4`

Rationale: developer portfolio and editorial blog should remain readable and calm, but needs more composition, hierarchy, and tactile interactions.

### SEO baseline

Crawl setup:

- `robots.txt` allows all.
- Sitemap exists and includes static routes plus non-draft blog posts.
- Canonicals are present.
- Root domain redirects to `www`.

Indexable URLs in sitemap:

- `https://www.christophercardoso.dev`
- `/about`
- `/blog`
- `/projects`
- `/uses`
- `/blog/dotfiles-part-2-my-neovim-setup`
- `/blog/dotfiles-part-1-terminal-setup`
- `/blog/build-sass-2023`
- `/blog/tailwind-merge`
- `/blog/nextjs-app-router`

Metadata baseline:

- Home title: `Christopher Cardoso`
- Home description: `A software developer who loves to build things`
- About title: `About | Christopher Cardoso`
- Blog title: `Blog | Christopher Cardoso`
- Projects title: `Projects | Christopher Cardoso`
- Uses title: `Uses | Christopher Cardoso`
- Blog post titles and descriptions are specific and stronger than static page metadata.

SEO risks to improve without URL changes:

- Homepage title and description are broad.
- Static page OpenGraph metadata is generic.
- No structured data found.
- Projects page is thin for portfolio SEO.
- Article topics are good, but older post titles could be more search-intent aligned. Do not rename slugs.

## Modernisation levers to apply, in priority order

1. **Typography refresh**
   - Keep Cal Sans, Inter, and JetBrains Mono.
   - Improve scale, line lengths, headings, metadata rhythm, and section hierarchy.
   - Do not introduce a new font unless there is a strong reason.

2. **Spacing and rhythm**
   - Expand layout beyond one repeated `max-w-4xl` column where appropriate.
   - Keep article reading width controlled.
   - Make home and projects feel intentionally composed, not empty.

3. **Color recalibration**
   - Preserve Catppuccin Macchiato and Latte.
   - Keep mauve/purple as the single accent.
   - Add subtle surface layers, borders, and tonal contrast using existing Catppuccin tokens.

4. **Motion layer**
   - Keep motion restrained and motivated.
   - Preserve existing view transitions.
   - Add hover/active states and small reveal/transition polish only where it communicates hierarchy or feedback.
   - Respect `prefers-reduced-motion`.

5. **Hero and key-section recomposition**
   - Recompose the home hero and project presentation.
   - Keep logo, avatar, current nav labels, and URLs.
   - Add a clearer primary journey without changing nav labels.

6. **SEO metadata improvements**
   - Improve static page metadata and OpenGraph specificity.
   - Consider person/website/blog structured data if low risk.
   - Do not change route slugs.

7. **Full block replacement only if needed**
   - Prefer targeted evolution.
   - Do not replace working MDX/blog systems.

## Implementation constraints

Do not change without explicit user approval:

- URL structure or route slugs.
- Primary nav labels: About, Blog, Projects, Uses.
- Form field names or order.
- Brand logo or wordmark.
- Existing legal/copyright copy.

Preserve:

- Catppuccin accent color family.
- Type stack.
- Logo treatment.
- Blog article readability.
- Existing MDX rendering behavior.
- Existing social profile URLs.

Avoid:

- AI-purple generic glow beyond the existing brand accent.
- Three identical feature cards as a default pattern.
- Fake screenshots made from divs.
- Decorative status dots.
- Scroll cues.
- Version labels.
- Em dashes in visible copy.
- Rewriting the copy voice into generic marketing language.

## Suggested work plan for executor

### 1. Inspect before editing

Read these files first:

- `app/layout.tsx`
- `styles/global.css`
- `tailwind.config.js`
- `components/header.tsx`
- `components/nav-links.tsx`
- `components/footer.tsx`
- `components/presentation-banner.tsx`
- `components/projects-list.tsx`
- `features/post/components/blog-index.tsx`
- `features/post/components/posts-list.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/projects/page.tsx`
- `app/uses/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `lib/config.ts`
- `data/projects.ts`

### 2. Make low-risk layout/token updates

Potential changes:

- Introduce reusable page shell/container classes or components if it reduces repetition.
- Allow broader home/project composition while preserving article width.
- Add subtle Catppuccin surface panels or borders where they improve hierarchy.
- Keep shape system consistent: likely `rounded-lg` for controls, `rounded-xl` for media/panels, `rounded-full` only for avatar/pills.

### 3. Improve home page composition

Goals:

- Make hero feel like a designed developer portfolio, not just a text block plus avatar.
- Preserve avatar and social links.
- Add clearer path to reading and projects using existing URLs.
- Preserve `#projects` anchor.
- Improve recent posts and projects hierarchy without making the page dense.

### 4. Improve projects presentation

Goals:

- Projects page and home projects section should feel less empty.
- Keep external project URLs.
- Do not invent fake metrics.
- Do not add fake screenshots.
- Use text, metadata, and layout hierarchy honestly.

### 5. Improve blog index and post page polish

Goals:

- Keep filters and search behavior unchanged.
- Preserve query param `q` and `tag`.
- Preserve article URLs.
- Improve list rhythm and empty state if needed.
- Keep article page reading width excellent.

### 6. Improve metadata

Possible changes:

- Make static page OpenGraph titles/descriptions page-specific.
- Improve homepage description to mention frontend engineering, dotfiles, tools, or developer writing.
- Consider structured data with `Person`, `WebSite`, and maybe `Blog`, if implementation is clean and low risk.

### 7. Validate

Run:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`

If any fail, fix before reporting done.

### 8. Required final written audits

Executor must report these before completion:

#### Em-dash audit

- Search visible copy and relevant source for `—` and `–`.
- Any visible em dash or en dash is a fail.

#### Pre-Flight Check, Section 14 subset relevant to this project

At minimum confirm:

- Brief inference declared.
- Dial values explicit.
- Redesign mode declared.
- Zero em dashes in visible copy.
- Page theme lock preserved.
- One accent color preserved.
- Shape system consistent.
- Button/link contrast reasonable.
- Nav one line on desktop.
- No duplicate CTA intent introduced.
- No fake screenshots.
- No decorative dots, scroll cues, version labels, section-number eyebrows, or generic AI tells introduced.
- Reduced motion respected for any motion.
- Mobile collapse checked.
- URLs/nav/form fields preserved unless listed below.

#### Preservation audit

List every changed item in these categories:

- URL
- Nav label
- Form field name
- Anchor ID

Expected result: empty list.

#### Brand fidelity audit

Confirm:

- Existing Catppuccin mauve/purple accent survived.
- Cal Sans, Inter, and JetBrains Mono survived.
- Terminal logo treatment survived.

## Success criteria

- Site feels more complete and intentional while still recognisably Christopher's Catppuccin developer blog.
- Blog remains pleasant to read.
- Portfolio/projects feel less empty.
- SEO metadata improves without route changes.
- No preservation constraints are violated.
- Lint, typecheck, and build pass.

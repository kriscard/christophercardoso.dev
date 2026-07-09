# AGENTS.md

Guidance for coding agents working in this repository.

## Development commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm typecheck` - Type check TypeScript files
- `pnpm format:write` - Format files with Prettier
- `pnpm format:check` - Check formatting with Prettier
- `pnpm preview` - Build and start production server
- `pnpm exec next typegen` - Regenerate typed route definitions (also runs on dev/build)

## Project architecture

This is a Next.js 16 personal website/blog with the following key features:

- **App Router**: Next.js app directory structure with React Server Components
- **Typed routes**: `typedRoutes: true`; page props use the generated `PageProps<'/route'>` helpers, `Link` hrefs are type-checked
- **Content**: Blog posts are MDX files in `content/`, parsed with gray-matter and rendered with `next-mdx-remote-client/rsc`
- **Styling**: TailwindCSS with custom components and a custom dark theme
- **Typography**: Custom CalSans heading font with Inter for body text
- **SEO**: Comprehensive metadata, OpenGraph, and Twitter card support
- **Analytics**: Vercel Analytics integration
- **Theme**: Dark/light mode switching with `next-themes`
- **View transitions**: React `ViewTransition` (experimental flag in `next.config.mjs`)

## Key directories

- `app/` - Next.js app router pages and API routes; pages compose feature components, they don't hold domain logic
- `features/post/` - Blog domain: `post-queries.ts` (server-only, `cache()`-wrapped reads) and `components/` (blog index, posts list, series nav)
- `components/` - Shared UI (cards, MDX components, header/footer, theme)
- `content/` - MDX blog posts
- `data/` - Static data (projects list)
- `lib/` - Utility functions and site config
- `styles/` - Global CSS
- `public/` - Static assets and images

## Content system

- Blog posts are MDX files in `content/`; frontmatter requires `title`, `date`, `tag`, `summary` (optional `ogImage`, and optional `series` + `seriesPart` as a both-or-neither pair for automatic series navigation)
- Posts with `draft: true` frontmatter are excluded from listings, static params, and the sitemap in production; they render (with a draft badge) in `pnpm dev`
- Queries live in `features/post/post-queries.ts` with `import "server-only"` and React `cache()`
- Syntax highlighting uses Catppuccin Macchiato theme via rehype-pretty-code

## Code style

- Use double quotes for strings
- No semicolons (except where necessary)
- 2 space indentation
- Strict TypeScript (`strict: true`)
- Use `cn()` utility for merging Tailwind classes
- Import order enforced by prettier-plugin-sort-imports: React -> Next.js -> third-party -> internal (`@/lib`, `@/features`, `@/components`, ...)
- Component naming: PascalCase for components, camelCase for functions/utils
- Prefer functional server components; add `'use client'` only for hooks, event handlers, or browser APIs
- Use absolute imports with `@/` prefix

## Architecture rules

- Pages stay synchronous: use `params.then()` / `searchParams.then()` instead of `await`, so page chrome renders outside the data path (`generateMetadata` may `await params`)
- Pages never fetch data directly; feature components own their queries
- Route-specific components live in the feature folder, not in page files

## Environment setup

- Uses pnpm as package manager
- Domain redirects configured in `next.config.mjs` for SEO

## TypeScript configuration

- Path mapping with `@/*` for absolute imports
- `PageProps` / route types are generated into `.next/types` (run `pnpm exec next typegen` after route changes)
- Strict mode enabled

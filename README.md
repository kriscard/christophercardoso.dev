[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkriscard%2Fchristophercardoso.dev)

# christophercardoso.dev

## Introduction

My personal website and blog built with:

- [Next.js 16](https://nextjs.org/) (App Router)
- [TailwindCSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) for blog posts
- [Vercel](https://vercel.com/)

## Demo

Check out the live website: [christophercardoso.dev](https://www.christophercardoso.dev)

## Running Locally

This application requires Node.js v18+.

```bash
git clone https://github.com/kriscard/christophercardoso.dev.git
cd christophercardoso.dev
pnpm install
pnpm dev
```

## GitHub Actions

This repo uses Claude Code for automated PR reviews. Required secret:

- `CLAUDE_CODE_OAUTH_TOKEN` - OAuth token for Claude Code GitHub Action

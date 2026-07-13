# Content authoring

Blog posts live as flat `.mdx` files in this directory. The filename becomes the slug, so `my-post.mdx` renders at `/blog/my-post`.

Required frontmatter:

```yaml
title: "Post title"
date: "2026-01-01"
tag: "frontend"
summary: "Short description used in lists and metadata."
```

Optional frontmatter:

```yaml
ogImage: "/images/blog/example.png"
draft: true
series: "Series name"
seriesPart: 1
```

Use `series` and `seriesPart` together or omit both. Use `draft: true` for local drafts; production listings, static params, and the sitemap exclude drafts.

Prefer MDX components such as `<MdxImage />`, `<Banner />`, and `<VideoEmbed />` over raw Markdown image syntax so images keep Next.js sizing and optimization behavior.

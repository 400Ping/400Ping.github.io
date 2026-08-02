---
title: How this site is built
description: A static personal site with Astro, deployed to GitHub Pages.
pubDate: 2026-08-02
tags: [astro, web, meta]
---

A quick note on how this site works, mostly so future-me remembers.

## Stack

- **Framework**: [Astro](https://astro.build/) — outputs plain static files, which is all GitHub Pages needs.
- **Posts**: plain Markdown files under `src/content/blog/`. Add a file, it becomes a post.
- **Deploy**: GitHub Actions. Every push to `main` builds and publishes.

## Adding a post

Drop a `.md` file into `src/content/blog/` with frontmatter at the top:

```markdown
---
title: Post title
description: One-line summary (optional)
pubDate: 2026-08-10
tags: [systems, notes]
---

Body starts here, in Markdown.
```

Commit, push, done. Set `draft: true` in the frontmatter to keep a post unpublished while it's a work in progress.

> Everything is out in the open — which is the whole point.

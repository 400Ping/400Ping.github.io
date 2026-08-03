# Jie-Kai Chang's Website

Personal website — a landing page, a CV, and a blog. Built with [Astro](https://astro.build/)
and deployed to GitHub Pages.

**Live:** <https://400ping.github.io/>

---

## Local development

You need [Node.js](https://nodejs.org/) 20+.

```bash
npm install      # first time only — install dependencies
npm run dev      # start a live-reload dev server at http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the built site locally
```

Leave `npm run dev` running while you edit; the browser refreshes automatically on save.

---

## Project layout

```
src/
  pages/
    index.astro        Home (landing page)
    cv.astro           CV (experience, publications, talks, education, skills)
    blog/
      index.astro      Blog index (list of posts)
      [...slug].astro  Renders each individual post
  data/                All editable content lives here (plain data files):
    profile.ts           name, intro, taglines, research areas
    opensource.ts        Open-source experience (project cards)
    misc.ts              talks, publications, education, skills
    news.ts              news items
  content/blog/        Blog posts — one Markdown file per post
  components/          Header / Footer
  layouts/             Shared page shell (BaseLayout.astro)
  styles/global.css    All styling
public/                Static files served as-is (favicon, icons/, images)
```

**To edit page text** (bio, research areas, experience, talks, etc.), change the files in
`src/data/`. You rarely need to touch the `.astro` pages.

---

## Writing a new blog post

Every post is one Markdown file in `src/content/blog/`. The **file name becomes the URL**:
`my-first-post.md` → `https://400ping.github.io/blog/my-first-post/`.

### 1. Create the file

Make a new file, e.g. `src/content/blog/scaling-ray-data.md`. Use lowercase words separated by
hyphens — no spaces, no uppercase.

### 2. Add the frontmatter

Every post **must** start with a frontmatter block between `---` lines. This is the post's
metadata:

```markdown
---
title: Scaling Ray Data to a thousand workers
description: What broke, what I measured, and what fixed it.
pubDate: 2026-08-20
tags: [ray, systems, performance]
draft: false
---

Your post body starts here, written in Markdown.
```

Frontmatter fields:

| Field         | Required | What it does |
| ------------- | -------- | ------------ |
| `title`       | **yes**  | Post title (shown in lists, the post page, and the browser tab). |
| `pubDate`     | **yes**  | Publish date, `YYYY-MM-DD`. Posts are sorted newest-first by this. |
| `description` | no       | One-line summary. Shown on the home page cards and used for SEO/social previews. |
| `tags`        | no       | A list like `[ray, systems]`. Leave as `[]` or omit if none. |
| `draft`       | no       | `true` hides the post from the site (see below). Defaults to `false`. |
| `updatedDate` | no       | `YYYY-MM-DD` — shown as "updated ..." if the post changed later. |

### 3. Write the body in Markdown

Everything after the closing `---` is the post, in standard Markdown:

```markdown
## A section heading

Normal paragraph with **bold**, *italic*, `inline code`, and a [link](https://ray.io).

- bullet list item
- another item

1. numbered step
2. next step

> A blockquote for an aside or a quote.
```

**Code blocks** get syntax highlighting automatically — just tag the language:

````markdown
```python
import ray

@ray.remote
def f(x):
    return x * x
```
````

**Images:** put the image file in `public/` (e.g. `public/images/benchmark.png`) and reference it
with a root-relative path:

```markdown
![Throughput vs. worker count](/images/benchmark.png)
```

### 4. Preview it

With `npm run dev` running, open <http://localhost:4321/blog/> — your post appears in the list,
and the two most recent posts also show on the home page.

### 5. Drafts

To keep a post unpublished while you work on it, set `draft: true` in the frontmatter. Draft posts
are hidden from the blog list, the home page, and the RSS feed. They still render if you visit the
URL directly during `npm run dev`, so you can preview them. Set `draft: false` (or remove the line)
when you're ready to publish.

### 6. Publish

Commit and push (see below). Once GitHub Actions finishes, the post is live.

```bash
git add src/content/blog/scaling-ray-data.md
git commit -m "Add post: scaling Ray Data"
git push
```

---

## Common edits — where to change things

| I want to change…                     | Edit this |
| ------------------------------------- | --------- |
| Name, intro, taglines, research areas | `src/data/profile.ts` |
| Open-source experience / project cards | `src/data/opensource.ts` |
| Talks, publications, education, skills | `src/data/misc.ts` |
| News items                            | `src/data/news.ts` |
| Nav links / site title / social links | `src/consts.ts` |
| Colors, fonts, spacing                | `src/styles/global.css` |
| Project / school logos                | drop a PNG in `public/icons/` and point the `icon:` field at it |

---

## Deployment

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages automatically. No manual steps.

First-time setup (once): in the GitHub repo, go to **Settings → Pages → Build and deployment →
Source** and choose **GitHub Actions**.

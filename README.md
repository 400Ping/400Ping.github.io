# Jie-Kai Chang's Website

Personal website — a profile page, a CV, and a blog of living notes. Built with
[Astro](https://astro.build/) and deployed to GitHub Pages.

The look is an "editorial paper" style paper background, Newsreader serif headings, Noto Sans body, IBM Plex Mono labels, hairline rules, square corners, no cards, badges, or dark mode. All of it lives in one stylesheet.

**Live:** <https://400ping.github.io/>

---

## Local development

You need [Node.js](https://nodejs.org/) **20 or newer** (Astro 5 refuses to build on 18). If your
shell's default `node` is an older nvm version, put a newer one first on the PATH, e.g.:

```bash
PATH=/usr/local/bin:$PATH npm run build
```

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
    index.astro        Home: profile intro + side notes, research areas, recent writing, contact
    cv.astro           CV (experience, community, publications, talks, education, skills)
    404.astro          Not-found page
    blog/
      index.astro      Writing index (posts grouped by topic)
      [...slug].astro  Renders each individual post
  data/                All editable content lives here (plain data files):
    profile.ts           name, role line, bio, side notes, research areas, contact copy
    opensource.ts        Open-source experience (one entry per project)
    misc.ts              community roles, publications, talks, education, skills
    news.ts              news items (currently not rendered anywhere)
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
| `pubDate`     | **yes**  | First published date, `YYYY-MM-DD`. |
| `description` | no       | One-line summary. Shown on the blog list and the home page, and used for SEO/social previews. |
| `project`     | no       | Topic this post belongs to, e.g. `Ray`, `KubeRay`, `Mahout`. The blog page groups posts by this. |
| `updatedDate` | no       | `YYYY-MM-DD`. Bump this whenever you edit a living post — the blog orders by it and shows "Last updated". |
| `log`         | no       | A changelog for a living post (see below). |
| `tags`        | no       | A list like `[ray, systems]`. Leave as `[]` or omit if none. |
| `draft`       | no       | `true` hides the post from the site (see below). Defaults to `false`. |

### Living / topic posts

This blog is organized **by topic**, not as one-off dated articles. A post like "Ray Data compute
expressions" is a single living document that you keep editing as the work evolves. To do that:

1. Give the post a `project:` (the topic it belongs to). The blog page groups posts under their
   topic and orders topics by whichever was touched most recently.
2. Each time you update the post, bump `updatedDate:` to today. The blog shows "Last updated …"
   and floats the post to the top.
3. Optionally keep a `log:` — a changelog rendered at the bottom of the post so readers can see
   what changed and when. **Newest entry first:**

```markdown
---
title: Ray Data compute expressions
pubDate: 2026-06-01
updatedDate: 2026-08-04
project: Ray
log:
  - date: 2026-08-04
    note: Shipped fixed-size array support; started the .image namespace.
  - date: 2026-07-10
    note: Landed datetime support in the .dt namespace.
---
```

See `src/content/blog/ray-data-compute-expressions.md` for a full example.

**Watch out for `#` in YAML.** A bare ` #` starts a comment, so a note like
`Landed PR #58740` gets cut off at "PR". Wrap the value in quotes:
`note: "Landed datetime support (PR #58740, #58741)."`

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
and the three most recently updated posts also show on the home page.

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
| Name, role line, bio, side notes, research questions, contact copy | `src/data/profile.ts` |
| Open-source experience entries        | `src/data/opensource.ts` |
| Community, publications, talks, education, skills | `src/data/misc.ts` |
| Nav links / header affiliation / social links / source-repo link | `src/consts.ts` |
| Colors, fonts, spacing (design tokens in `:root`) | `src/styles/global.css` |
| Project / school logos                | drop a PNG in `public/icons/` and point the `icon:` field at it |

---

## Deployment

Pushing to the `main` branch triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages automatically. No manual steps.

First-time setup (once): in the GitHub repo, go to **Settings → Pages → Build and deployment →
Source** and choose **GitHub Actions**.

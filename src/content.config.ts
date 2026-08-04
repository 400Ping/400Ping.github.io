import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// blog 集合：所有文章放在 src/content/blog/ 底下的 .md / .mdx
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // First published, YYYY-MM-DD.
    pubDate: z.coerce.date(),
    // Last touched. For a living/topic post, bump this whenever you update it.
    updatedDate: z.coerce.date().optional(),
    // Topic this post belongs to, e.g. "Ray", "KubeRay", "Mahout". Groups the blog index.
    project: z.string().optional(),
    // Changelog for a living post — newest first. Each entry: { date, note }.
    log: z
      .array(z.object({ date: z.coerce.date(), note: z.string() }))
      .default([]),
    // Set true to keep a post unpublished.
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

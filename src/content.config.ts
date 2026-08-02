import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// blog 集合：所有文章放在 src/content/blog/ 底下的 .md / .mdx
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // 文章日期，格式 YYYY-MM-DD
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // 設 true 可暫時不發佈這篇
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

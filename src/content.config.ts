import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    forum_url: z.string().optional(),
    forum_name: z.string().optional(),
    excerpt: z.boolean().optional(),
    chapter: z.string().optional(),
    draft: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };

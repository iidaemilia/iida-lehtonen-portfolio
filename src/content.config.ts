import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      excerpt: z.string(),

      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      heroImage: image(),
      heroAlt: z.string(),

      author: z.string(),
      readingTime: z.number(),

      tags: z.array(z.string()),

      faq: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          }),
        )
        .optional(),

      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };

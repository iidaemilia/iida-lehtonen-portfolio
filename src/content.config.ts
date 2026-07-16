import { defineCollection, z } from "astro:content";

const blog = defineCollection({
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

      draft: z.boolean().default(false),
    }),
});
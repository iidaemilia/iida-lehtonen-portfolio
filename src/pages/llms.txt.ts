import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL is required to generate llms.txt.");
  }

  const articles = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

  const articleLinks = articles
    .map(
      (article) =>
        `- [${article.data.title}](${new URL(`/writing/${article.id}/`, site).href}): ${article.data.description}`,
    )
    .join("\n");

  const body = `# Iida Lehtonen

> Portfolio and writing by Iida Lehtonen about SEO, AI Search, content strategy, digital customer experience and web development.

## Main pages

- [Home](${new URL("/", site).href}): Professional profile, areas of expertise and contact information.
- [Writing](${new URL("/writing/", site).href}): All published articles, newest first.

## Articles

${articleLinks}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

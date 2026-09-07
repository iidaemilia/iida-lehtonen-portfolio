import type { APIRoute } from "astro";
import {
  ARTICLES_PER_PAGE,
  getPublishedArticles,
  getTotalWritingPages,
  getWritingPagePath,
} from "../utils/writing";

const escapeXml = (value: string) =>
  value.replace(/[<>&'\"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '\"': "&quot;",
    };

    return entities[character];
  });

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL is required to generate the sitemap.");
  }

  const articles = await getPublishedArticles();
  const totalWritingPages = getTotalWritingPages(articles.length);
  const writingPages = Array.from(
    { length: totalWritingPages },
    (_, index) => {
      const pageNumber = index + 1;
      const pageArticles = articles.slice(
        index * ARTICLES_PER_PAGE,
        pageNumber * ARTICLES_PER_PAGE,
      );
      const lastmod = pageArticles.reduce<Date | undefined>(
        (latest, article) => {
          const articleDate =
            article.data.updatedDate ?? article.data.publishDate;

          return !latest || articleDate > latest ? articleDate : latest;
        },
        undefined,
      );

      return {
        url: new URL(getWritingPagePath(pageNumber), site),
        lastmod,
      };
    },
  );
  const pages = [
    { url: new URL("/", site), lastmod: undefined },
    { url: new URL("/about/", site), lastmod: undefined },
    ...writingPages,
    { url: new URL("/privacy/", site), lastmod: undefined },
    ...articles.map((article) => ({
      url: new URL(`/writing/${article.id}/`, site),
      lastmod: article.data.updatedDate ?? article.data.publishDate,
    })),
  ];

  const urls = pages
    .map(
      ({ url, lastmod }) => `  <url>
    <loc>${escapeXml(url.href)}</loc>${
      lastmod ? `\n    <lastmod>${lastmod.toISOString()}</lastmod>` : ""
    }
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    },
  );
};

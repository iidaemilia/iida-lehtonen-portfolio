import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export const ARTICLES_PER_PAGE = 6;

export const getPublishedArticles = async () =>
  (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );

export const getTotalWritingPages = (articleCount: number) =>
  Math.max(1, Math.ceil(articleCount / ARTICLES_PER_PAGE));

export const getWritingPagePath = (pageNumber: number) =>
  pageNumber === 1 ? "/writing/" : `/writing/page/${pageNumber}/`;

export const getWritingPageArticles = (
  articles: CollectionEntry<"blog">[],
  pageNumber: number,
) => {
  const start = (pageNumber - 1) * ARTICLES_PER_PAGE;

  return articles.slice(start, start + ARTICLES_PER_PAGE);
};

export const createWritingArchiveSchema = (
  articles: CollectionEntry<"blog">[],
  pageNumber: number,
  site: URL,
) => {
  const pageUrl = new URL(getWritingPagePath(pageNumber), site).href;
  const pageName =
    pageNumber === 1
      ? "Writing by Iida Lehtonen"
      : `Writing by Iida Lehtonen — Page ${pageNumber}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: pageName,
    description:
      "Articles about SEO, AI search, content strategy and web development by Iida Lehtonen.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${site.href}#website`,
      url: site.href,
      name: "Iida Lehtonen",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => {
        const articleUrl = new URL(`/writing/${article.id}/`, site).href;

        return {
          "@type": "ListItem",
          position: (pageNumber - 1) * ARTICLES_PER_PAGE + index + 1,
          item: {
            "@type": "BlogPosting",
            "@id": articleUrl,
            url: articleUrl,
            headline: article.data.title,
            description: article.data.description,
            datePublished: article.data.publishDate.toISOString(),
            ...(article.data.updatedDate && {
              dateModified: article.data.updatedDate.toISOString(),
            }),
            author: {
              "@type": "Person",
              name: article.data.author,
              url: site.href,
            },
            keywords: article.data.tags.join(", "),
          },
        };
      }),
    },
  };
};

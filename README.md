# Iida Lehtonen — Personal Portfolio

My personal portfolio website, built with Astro and focused on AI, SEO, AI Search (GEO), content strategy, and modern web development.

**Live at [iidalehtonen.com](https://iidalehtonen.com)**

The project serves two purposes:

- a professional portfolio showcasing my work, writing, and experiments
- a hands-on learning project exploring AI-assisted frontend development

## Highlights

- ⚡ Built with Astro
- 🤖 AI-assisted development workflow
- 📝 Markdown-powered blog
- 🔍 Technical SEO & GEO best practices
- ♿ Accessibility-conscious implementation
- 🚀 Continuous deployment with GitHub and Vercel

---

## Tech stack

- Astro
- TypeScript
- Node.js
- Vercel

## Built with (tooling)

- ChatGPT & ChatGPT Codex — AI-assisted development
- Git & GitHub
- Visual Studio Code

---

## Features

**Content**

- Blog powered by Astro Content Collections
- Markdown-based articles with a reusable article layout

**SEO & AI search (GEO)**

- SEO-friendly architecture
- Structured data (Schema.org)
- Canonical URLs
- XML sitemap
- `robots.txt`
- `llms.txt` — explicit guidance for AI crawlers, so the site is discoverable and citable in AI-generated answers

**Infrastructure**

- Google Analytics 4 & Google Search Console
- Cookie consent
- Custom 404 page
- Automatic deployment via GitHub and Vercel

> I also measure how well this site performs in AI answers — whether assistants like ChatGPT, Gemini, and Claude cite it when people ask questions in my field. That work lives in a companion project: **[geo-visibility-tracker](https://github.com/iidaemilia/geo-visibility-tracker)**.

---

## Project structure

```text
src/
├── components/
├── content/
│   └── blog/
├── layouts/
├── pages/
├── assets/
└── styles/
```

---

## Why Astro?

I chose Astro because it produces fast, static websites with excellent performance while providing a modern developer experience. Since the primary purpose of this site is publishing content, Astro's content collections and minimal-JavaScript approach made it a natural fit — and lightweight, server-rendered HTML is exactly what search engines and AI crawlers parse most reliably.

---

## AI-assisted development

This project was developed using AI as a collaborative development partner rather than an autonomous code generator.

AI accelerated implementation, but architecture, accessibility, semantic HTML, SEO decisions, content, testing, and code review remained human-driven throughout.

The experience is documented in the article:

**[Can someone without a software development background build a modern website with AI?](https://iidalehtonen.com/writing/should-you-build-your-website-with-ai/)**

---

## License

The source code is provided for reference and inspiration. No reuse license is granted, and all content, articles, and branding remain © Iida Lehtonen.

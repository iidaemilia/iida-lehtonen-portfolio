---
title: "Do FAQs Matter for AI Search? I Built an FAQ Generator, Then Checked the Evidence"
description: "Do FAQs matter for AI search? I built an AI-powered FAQ generator, then checked what controlled studies actually say about FAQ content, schema and AI citations."

excerpt: >-
  FAQ sections are the content work that never gets done, so I built a tool that
  generates them. Here's what I built, what the evidence actually shows, and why
  the answer to "do FAQs matter for AI search" is yes and no at the same time.

publishDate: 2026-07-29

author: "Iida Lehtonen"
readingTime: 8

heroImage: "../../assets/images/do-faqs-matter-hero.png"
heroAlt: "Person working on an FAQ generator and code across multiple screens"

tags:
  - SEO
  - AI tool
  - AI Search

faq:
  - question: "Do FAQs matter for AI search?"
    answer: >-
      Yes and no. FAQ content matters because AI assistants answer
      question-shaped queries and favor content that answers them clearly and
      with substance. FAQPage schema markup, however, showed no meaningful
      effect on AI citations in controlled studies, so the value is in the
      answers themselves, not the markup.
  - question: "Does FAQ schema improve AI citations?"
    answer: >-
      Based on current evidence, no. Ahrefs tracked 1,885 pages that added
      JSON-LD schema against 4,000 control pages and found no meaningful
      citation uplift in ChatGPT, Google AI Mode, or AI Overviews. Language
      models read visible page content directly and don't need markup to
      recognize questions and answers.
  - question: "Should I remove FAQPage schema now that Google dropped FAQ rich results?"
    answer: >-
      No. Google has confirmed the markup can stay in place and won't hurt your
      pages. It costs nothing to keep, and there may be a modest benefit on
      Google's own AI surfaces. Just don't invest new money or time in schema as
      an "AI visibility" tactic.
  - question: "What kind of content actually gets cited in AI answers?"
    answer: >-
      Content with specific, verifiable substance. Princeton's GEO research
      found that adding statistics, quotations, and source citations improved
      visibility in AI-generated responses by roughly 30–40%, far more than any
      formatting change. Answering a real question directly matters more than
      how the answer is packaged.
  - question: "Can you generate FAQs with AI without publishing nonsense?"
    answer: >-
      Yes, if a human stays in the loop. Ground the generation in the page's
      actual content, prompt from the reader's information need rather than the
      page's structure, and review every output for relevance and accuracy
      before publishing. AI moves the bottleneck from writing to editorial
      judgment; it doesn't remove it.

draft: false
---

FAQ sections are the content work that never gets done.

Writing questions and answers for one page is easy. Doing it for fifty or two hundred pages is not. The work doesn't scale, even though a good FAQ could answer a customer's questions before they ever contact you.

So I did what I keep doing this year: I built a tool for it.

Then, halfway through writing about the tool, I ran into a bigger question. Everyone in SEO seems to assume that FAQs help you show up in AI answers. Google just removed FAQ rich results from search entirely. So, do FAQs actually matter for AI search?

Here's my short answer, based on the evidence below: **FAQ content matters when it answers real questions with real substance. FAQPage schema markup, based on current controlled studies, barely matters at all.**

The long answer covers both the tool I built and what the data really says.

## What I built

The FAQ generator is part of my [SEO Linker project](https://github.com/iidaemilia/seo-links-and-faqs), a Python CLI for auditing internal links and FAQ opportunities on static websites.

The FAQ workflow is simple. The tool takes a page URL, fetches the visible content (title, H1, and up to 8,000 characters of page text) and sends it to the OpenAI API. It generates 3–5 question-and-answer pairs grounded in that content, validated with Structured Outputs.

From the same data, it produces two things at once:

- visible FAQ HTML you can add to the page
- matching FAQPage JSON-LD

That pairing is deliberate. If the visible content and the schema come from the same generation step, they can't drift apart. A mismatch between markup and visible text is one of the classic structured data mistakes, and this design makes it impossible.

The tool never modifies a website. Everything goes into reviewable JSON, Markdown, and HTML reports, because generated content should be reviewed before it's published. More on that below.

Cost per generated FAQ set: well under €0.01. The expensive part of FAQ work was never the API call. It was the human hours, and that's the part this actually reduces.

## Building was easy. Prompting was not.

The first version of the prompt technically worked. It read the page and produced questions with answers that could be found in the text.

The problem: the questions were derived from the page's subheadings. They were questions *about the page*, not questions *a reader would ask*. Nobody searches for "What does the section on implementation cover?"

The fix was one reframing instruction: **start from the reader's information need.**

What would someone want to know before reading this page, while reading it, or after? What problem, comparison, or decision brought them here in the first place?

That single shift changed the output more than any other prompt iteration. The questions became the kind people actually type into a search box or an AI assistant, and the answers started carrying real value instead of restating the obvious.

This matches a pattern I keep seeing in AI-assisted building: the model rarely fails at the mechanics. It fails at knowing *whose perspective* to take. That's the part you have to give it.

## The human step that doesn't go away

The tool produces a first draft. Before anything is published, I still check three things:

1. Are the questions actually relevant? Would a real reader ask them?
2. Are the answers grounded in the page content, or did the model fill gaps?
3. Do the visible FAQ and the JSON-LD match? By design they should, but trust and verify.

AI moved the bottleneck. It didn't remove it. The bottleneck used to be writing; now it's editorial judgment. That's a much better place for a human to spend time, but it's still a place a human has to be.

## Do FAQs matter for AI search? Here's what the evidence says

The direct answer: FAQ *content* can matter, because AI assistants answer question-shaped queries and prefer content that answers them clearly. FAQ *schema* has now been tested in controlled studies, and it seems that it does not move AI citations in any meaningful way.

That distinction is the part most GEO advice skips, so let's take it apart.

### Google closed the FAQ rich results chapter

First, some history. In [August 2023, Google restricted FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes) to well-known, authoritative government and health websites. For most sites, the visible SERP benefit of FAQPage markup died almost three years ago.

In May 2026, [Google finished the job](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/). FAQ rich results stopped appearing in search entirely on May 7, with Search Console reporting and API support following over the summer. FAQPage remains a valid schema type and won't hurt your pages. It just no longer buys any visible real estate in Google Search.

So the original, measurable reason for FAQ schema is gone. The question is whether a new reason, AI visibility, has replaced it.

### What controlled tests actually show

If you read GEO vendor content, FAQ schema is "critical for AI search" and boosts citations by multiples. When I looked for the sources behind claims like that, they mostly led back to correlation studies, or to each other.

The controlled tests tell a different story.

**Ahrefs** ran the cleanest test so far: [they tracked 1,885 pages that added JSON-LD schema](https://ahrefs.com/blog/schema-ai-citations/) between August 2025 and March 2026, matched them against 4,000 control pages, and measured citation changes with a difference-in-differences analysis. The result: no meaningful uplift on any platform. ChatGPT moved +2.2% and Google AI Mode +2.4%, both indistinguishable from noise, while Google AI Overviews actually declined 4.6%. Notably, their earlier analysis of 6 million URLs had shown that AI-cited pages carry schema at three times the rate of uncited pages. The controlled test is what revealed that correlation to be about overall site quality, not the markup itself.

**OtterlyAI** ran their own [before/after schema experiment](https://otterly.ai/blog/schema-markup-real-impact-ai-search/) across 319 tracked prompts. Only Google's own surfaces, AI Overviews and AI Mode, showed an increase. ChatGPT and Perplexity didn't move. Their conclusion is worth sitting with: a language model doesn't need a FAQPage annotation to recognize that a page contains questions and answers. It reads the content directly. Schema was a workaround for algorithmic limitations that LLM-based systems largely don't have. A searchVIU test cited in the Ahrefs study points the same way: when five AI systems fetched pages in real time, all of them extracted only the visible HTML and ignored JSON-LD entirely.

**A 2026 measurement study on arXiv**, [From Citation Selection to Citation Absorption](https://arxiv.org/abs/2604.25707), went a step further and measured not just whether pages get cited, but how much they actually influence the generated answer. One of its counter-intuitive findings: Q&A formatting alone is weak. Q&A pages showed slightly *lower* mean influence than non-Q&A pages (−5.7%). The authors' interpretation: question-answer packaging is insufficient without evidence density and semantic fit.

Even the most-quoted "official confirmation" deserves a second look. Microsoft's Fabrice Canel is widely cited as confirming that schema helps Microsoft's LLMs understand content. But as [Mark Williams-Cook has pointed out](https://markwilliamscook.substack.com/p/schema-llms-and-the-low-bar-for-evidence), the frequently shared quote is actually about IndexNow and content freshness, not about JSON-LD being parsed by generative systems. Google engineers have said structured data helps their systems, and Gary Illyes has also noted that in an ideal world they wouldn't need schema at all, because the systems would simply understand the page.

### So what *does* move AI visibility?

Content substance, mostly. The [Princeton GEO research](https://arxiv.org/abs/2311.09735) found that adding verifiable statistics, quotations, and source citations improved visibility in AI-generated responses by roughly 30–40% — far more than any formatting change. Other large-scale citation analyses point the same way: what gets absorbed into AI answers is content with specific, checkable claims that match the query's intent.

Which, if you think about it, is exactly what the prompt lesson from my tool was. "Start from the reader's information need" isn't just a prompting trick. It's the actual mechanism behind AI visibility. AI assistants are answering real questions, so the content that gets used is content that answers real questions — whether or not it's wrapped in an accordion and a JSON-LD block.

## My honest conclusion

Here's where I land, and it's less exciting than the GEO sales pitch but more useful:

**Good FAQ content is worth creating. FAQ schema is a free by-product. Neither is a shortcut to AI visibility.**

A well-made FAQ answers pre-purchase questions, reduces friction, serves customers before they contact you, and covers the question-shaped queries people increasingly ask AI assistants. That value exists regardless of what any ranking system does with it.

The FAQPage markup costs my tool nothing extra to generate, can't drift from the visible content, and per the current evidence at worst does nothing, with a plausible modest benefit on Google's AI surfaces specifically. That's a fine deal at zero marginal cost. It would be a terrible deal as a paid "GEO optimization" line item.

And if a vendor tells you FAQ schema will get you cited in ChatGPT, ask for their control group.

__Read more:__

[Can AI Read Your Website? Why Rendering Matters for AI Search](https://iidalehtonen.com/writing/can-ai-read-your-website/)

---

*The FAQ generator, the internal link audit, and the full prompt are open source: [seo-links-and-faqs on GitHub](https://github.com/iidaemilia/seo-links-and-faqs).*

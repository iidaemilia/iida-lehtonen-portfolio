---
title: "How to Build a GEO Strategy"
description: "Five principles I'd build a GEO strategy on, and why llms.txt isn't one of them. Most of it is good SEO. What's new is visibility without any clicks."
excerpt: "Five principles I'd build a GEO strategy on, and why llms.txt isn't one of them. Most of it is good SEO. What's new is visibility without any clicks."

publishDate: 2026-09-06

author: "Iida Lehtonen"
readingTime: 5

heroImage: "../../assets/images/geo-strategy-hero.png"
heroAlt: "Woman reviewing a GEO strategy map and performance chart on a laptop"

tags:
  - AI Search
  - GEO
  - SEO

faq:
  - question: "What is generative engine optimization (GEO)?"
    answer: "Generative engine optimization is the practice of making a brand's content likely to be retrieved, cited and represented accurately inside AI-generated answers — in tools like ChatGPT, Google's AI Overviews, Gemini, Claude and Perplexity — rather than only ranking in a list of blue links. In practice it combines technical crawlability, distinctive content, presence in third-party sources, and a measurement layer built around answers instead of clicks."
  - question: "How is GEO different from traditional SEO?"
    answer: "The foundation is the same and most of the work overlaps. Three things differ: the unit of success is a citation or mention rather than a click, the sources that win are often not your own website, and results vary between AI systems in ways that rankings never did. More detail in SEO, AEO and GEO."
  - question: "Do we need a separate GEO team or budget?"
    answer: "No — and setting one up is usually a mistake. A separate GEO project competes with SEO for the same engineering hours to fix the same technical problems. One discoverability roadmap, with AI-specific measurement added, works better."
  - question: "Does llms.txt improve AI search visibility?"
    answer: "There's no public confirmation from major AI search providers that they use it for retrieval or ranking. It costs almost nothing to add, so there's little reason not to — but treating it as a GEO strategy displaces work that actually matters."
  - question: "How do you measure AI search visibility?"
    answer: "With a fixed set of prompts, run on a schedule, across the AI tools your audience uses — tracking share of voice, mentions, citations and factual accuracy. The fixed prompt set is what makes the comparison valid over time. Here's the method I use, including how I handle the variance between runs."
  - question: "How long does a GEO strategy take to show results?"
    answer: "Longer than the technical fixes and shorter than classic link building — but honestly, nobody has enough longitudinal data to answer this credibly yet, including me. What I can say is that the technical foundation pays off in normal search whether or not the AI part works, which is a reasonable way to de-risk the first quarter."
---

If I had to build a generative engine optimization strategy for a company tomorrow, I wouldn't start with the tactics that dominate the conversation.

I'd start with five principles. None of them is a trick, and most of them will sound familiar to anyone who has done good SEO work. That's not a disappointment — it's the finding.

## What I would not start with

llms.txt, and things like it.

It's a proposed convention for pointing AI systems at your content, and it takes about twenty minutes to add. No major AI search provider has publicly confirmed using it as a retrieval or ranking input. That doesn't make it wrong. It's cheap and harmless, so add it if you want. It just isn't a strategy.

I'm blunt about this because cheap, visible tactics are seductive in exactly the way that's dangerous: they feel like progress. Something shipped, something to put in the status report. Every emerging channel produces a handful of these, and they reliably absorb the attention that the boring, load-bearing work deserves.

So here's what I'd actually work on.

## 1. Treat every GEO tactic as a hypothesis

AI search visibility is not a settled discipline. What works today may be irrelevant in a year, and a fair amount of what gets published as best practice is untested assertion.

That has a practical consequence: the strategy has to stay agile. Document what you learn, and scale only the things your own data confirms. Treat every GEO tactic as a hypothesis until you've seen it move something.

But agility is not the same as having no floor. Underneath the experiments there's work whose value doesn't depend on how AI search develops: [a site that can be crawled, rendered without JavaScript execution, and indexed](https://iidalehtonen.com/writing/can-ai-read-your-website/). An AI system cannot cite a page it cannot fetch or parse. That's true today, and it'll be true whatever the tools look like in 2028.

This is the only part of the plan that's safe in both directions. If generative search stalls, you've improved your SEO. If it accelerates, you've built the base it runs on. Everything else on this list is a bet to some degree.

## 2. Keep SEO, AEO and GEO on one roadmap

All three rest on the same base: content that's genuinely useful to a person, a technically healthy site, and content that can be crawled and indexed. The differences sit at the top of the stack, not at the bottom. I've written separately about [where they actually diverge](https://iidalehtonen.com/writing/seo-vs-aeo-vs-geo/).

Split them into three projects with three owners and three roadmaps, and you get three teams competing for the same engineering hours to fix the same underlying problems. I've watched organisations do a version of this before, with mobile and with "voice search," and the outcome is usually a lot of parallel documentation and not much shipped.

One discoverability roadmap, with AI-specific measurement added to it, works better than a GEO team with a separate budget.

Which brings the point back around, because it's the one worth repeating: a solid SEO foundation is still the most important thing you have.

## 3. Build the content only you can build

The question I keep seeing asked is "how do we optimize our pages for AI?" I think that's the wrong question.

The one that actually decides the outcome is: what is the message and the content that only we can produce?

Language models have already read the generic version of your topic ten thousand times. What they don't have is your data, your numbers, your customers' real objections, [the results of something you actually tried](https://iidalehtonen.com/writing/geo-case-study-html-table-google-ai-overviews/). That's the material with no substitute source — and it's the material that gets synthesised into an answer with your name attached.

This is also where the economics change. Content built on proprietary data and real expertise earns brand value even when the reader only ever encounters it inside an AI answer and never visits the site. The reader gets the substance, the model gets a source, the brand gets the association — and none of it appears as a session in anyone's analytics.

That's uncomfortable to act on, because it asks you to invest in work whose return you can only partly see. I don't think there's a way around it. The alternative is to produce only what you can attribute to a click, which means producing only the things that were already working before AI search existed.

## 4. Treat PR and social as sources from the start

Not at the end as amplification. From the start, as sources.

An AI answer will cite a YouTube video, a news article or a forum thread as readily as your own website. Increasingly, visibility gets decided in sources the SEO team doesn't control and can't edit.

I tested a narrow version of this: [20 prompts, three weeks, four tools](https://iidalehtonen.com/writing/youtube-ai-search-visibility/). In my own runs, only Google's AI search cited YouTube directly — and wider published data shows the spread between systems is enormous, with Perplexity citing YouTube in roughly 38.7% of answers and Gemini in 0.2%. The lesson isn't "make YouTube videos." It's that source preference varies wildly between systems, so where you're present matters as much as what you own.

Which makes this an organisational problem before it's a content problem. PR, social, community and SEO need one shared story and shared goals across team boundaries, because the AI answer is assembled from all of their output at once — and it doesn't care which team's budget produced which piece.

## 5. Measure visibility beyond traffic

Zero-click behaviour has made traffic an unreliable proxy for whether people are encountering your brand.

I'd start by defining the topics where the brand needs to appear: 20 to 50 real questions, in the words a buyer would actually use, not keyword strings. Then track, on those topics, across the AI tools your audience uses:

- share of voice
- brand mentions in answers
- citations and linked sources
- factual accuracy of what the models say about you

That last one gets forgotten, and it's the one that costs money. A model that recommends you enthusiastically while describing your pricing incorrectly is a live problem you'll only ever find by looking.

Traffic, conversions and AI crawler hits in the server logs still complete the picture. They're just no longer the whole of it, and treating them as the scoreboard will make a working GEO programme look like a failure.

Two things about reading any of this honestly. Keep the prompt set fixed — changing prompts between rounds means comparing two different things and calling it a trend. And expect variance: AI answers change between runs on the same prompt on the same day, so one prompt checked once is an anecdote, not a measurement. That's [the part of the method that matters more than the tool](https://iidalehtonen.com/writing/how-i-track-ai-search-visibility-method/).

## What's actually new

Reading this back, most of it is familiar from good SEO work. Sound technical base, clear topic focus, distinctive content, earned coverage, honest measurement. If your reaction is "this is just SEO with extra steps," that's roughly right, and it's the most useful thing I can tell you.

What is genuinely new is narrower than the hype and more awkward than it sounds: visibility and brand value now form, at scale, without a single click on your site. Every measurement habit built over the past twenty years assumes a visit as the unit of evidence. That assumption is what broke.

So the hard problem in GEO isn't optimization. It's proving that any of it worked. That's the part I'm still building tools for.

__Read more:__

[What Is SEO vs. AEO vs. GEO?](https://iidalehtonen.com/writing/seo-vs-aeo-vs-geo/)

[How I Track AI Search Visibility Without Paid Tools: A Repeatable Method](https://iidalehtonen.com/writing/how-i-track-ai-search-visibility-method/)

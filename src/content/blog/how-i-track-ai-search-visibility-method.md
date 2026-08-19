---
title: "How I Track AI Search Visibility Without Paid Tools: A Repeatable Method"
description: "A repeatable method for tracking your brand's AI search visibility with a spreadsheet and 20 prompts. How to design the queries, run consistent measurements and interpret the results without paid GEO tools.
"

excerpt: "How do you know whether ChatGPT cites you or recommends a competitor? This is the full method behind my weekly AI visibility tracking: query design, measurement conditions, logging and interpretation."

publishDate: 2026-08-13

author: "Iida Lehtonen"
readingTime: 5

heroImage: "../../assets/images/ai-search-measuring-hero.png"
heroAlt: "Person tracking AI search visibility data on a laptop"

tags:
  - SEO
  - GEO
  - AI Search

faq:
  - question: "How do you measure brand visibility in AI search without paid tools?"
    answer: >-
      Run a fixed set of around 20 realistic prompts regularly across the AI
      surfaces your audience uses, such as Google AI Overviews, ChatGPT and
      Claude. Use consistent measurement conditions and log whether your
      content is cited as a source, whether your brand is mentioned, which
      domains are cited and how accurately the brand is represented. The value
      comes from repeating the same experiment over time rather than relying on
      individual AI answers.
  - question: "How many prompts do you need to track AI visibility?"
    answer: >-
      There is no universal number. For a small brand, around 20 prompts can be
      enough to build a useful baseline if they cover several kinds of
      visibility: branded recognition, branded expertise, non-branded discovery
      and informational or commercial questions. The consistency and relevance
      of the prompt set matter more than simply having a large number of
      queries.
  - question: "How often should you measure AI search visibility?"
    answer: >-
      Weekly or biweekly is a practical starting point. Use identical prompts
      and comparable measurement conditions each round. AI-generated answers
      can vary significantly between sessions. In my early dataset, only about
      a third of cited domains persisted from one round to the next. That is why
      individual measurements should be treated as observations rather than
      trends.
  - question: "Why does an AI tool mention a brand but not cite its website?"
    answer: >-
      Recognition and sourcing are different signals. AI systems may understand
      that a brand is relevant based on third-party sources such as LinkedIn,
      media coverage, directories or institutional pages without using the
      brand's own website as a cited source. If the brand is repeatedly
      recognized but its own domain never appears, it can be useful to examine
      the site's entity signals, content structure and connections to the
      external sources AI systems are already retrieving.

draft: false
---
More and more people are turning to AI tools for answers, recommendations and research. Sometimes they click through to the original source. But often they don't.

That creates a new measurement problem for brands: how do you know whether ChatGPT, Claude or Google's AI results find your brand, cite your content or recommend a competitor instead?

There are already paid AI visibility tools that try to answer this question. Some are useful, especially at scale. But they can also be expensive, and the final visibility score often hides much of the methodology underneath it.

I wanted something simpler that I could inspect myself. So I built my own AI visibility tracker using a fixed set of prompts, four AI surfaces, a spreadsheet and a weekly measurement routine.

I've been running it for four weeks now. That's nowhere near enough data for big conclusions, but it is enough to document the method behind the experiment.

This article walks through the full setup: query design, measurement conditions, logging and interpretation. If you want to start measuring your own brand's AI search visibility without investing in a dedicated GEO platform, you can use the same structure.

One thing this article is not is a results report. I've written about some of my early observations elsewhere, including [what the tracking has shown so far about YouTube's role in AI search](https://iidalehtonen.com/writing/youtube-ai-search-visibility/).

This is the method behind those observations.

## Two kinds of AI visibility: recognition vs. recommendation

Before opening a spreadsheet, there is one distinction that shapes the entire setup. There are two very different kinds of AI visibility.

**Recognition:** When someone searches for your brand directly, do AI tools understand what it is, what it does and which sources belong to it?

**Recommendation:** When someone asks a broader category question, such as "best GEO experts to follow" or "companies offering AI search optimization", does your brand appear without being included in the prompt?

A brand can be easy for an AI system to recognize while still being almost invisible in non-branded recommendation queries. The two can also improve at very different speeds.

## Step 1: Design the query set

I track 20 prompts. My set covers four categories in two languages, English and Finnish, because the brand operates in both an international niche and a small local market.

### 1. Branded queries

These are the simplest recognition tests.

Examples:

- "What is [brand]?"
- "[brand]"
- "[brand] AI search"

The goal is to see whether the AI system can identify the correct brand and retrieve relevant information about it.

### 2. Branded expertise queries

These combine the brand with the topics or expertise you want associated with it.

For example:

- "[brand] SEO GEO"
- "[brand] AI search expert"
- "[brand] generative engine optimization"

These are more demanding than simple recognition queries, because finding a brand is one thing, understanding what that brand should be known for is another.

### 3. Non-branded discovery queries

These are category questions where the brand is not included in the prompt.

Examples:

- "Best GEO experts to follow"
- "Top LinkedIn voices on AI search and SEO"
- Finnish equivalents related to local SEO, GEO and AI marketing expertise

This is the recommendation layer. For many brands, it is also the commercially interesting part of AI visibility. Someone is not already looking for you, but the AI system has to decide that you belong in the answer.

### 4. Informational and commercial queries

The final group includes questions the target audience might realistically ask while researching a topic or looking for help.

Examples:

- "What is generative engine optimization and how does it differ from SEO?" (I've written my own answer to that one in [SEO vs. AEO vs. GEO](https://iidalehtonen.com/writing/seo-vs-aeo-vs-geo/))
- "Who should I hire for GEO or AI search optimization consulting?"

These prompts help reveal which sources AI systems rely on when answering questions around the topics the brand wants to be associated with.

### Three rules I would use when building a query set

**Write prompts the way people actually ask questions.**

AI queries are often conversational. Don't simply copy traditional SEO keywords into a spreadsheet and assume they represent AI search behavior.

**Include prompts you expect to fail.**

Some of my non-branded queries have returned zero brand hits for four straight weeks, and that's okay.

The goal of measurement is not to produce flattering numbers. It is to create a baseline that can show whether visibility changes later.

**Freeze the prompt set once measurement begins.**

Don't keep rewriting prompts between rounds. Every change makes historical comparison harder.

If you discover new queries that you want to track, add them as a new numbered batch and record the date when tracking started.

## Step 2: Standardize the measurement conditions

AI answers vary. The same prompt can produce different sources and recommendations depending on the session, surface and context. Personalization and previous conversation history can also influence what appears.

You can't remove all variation, but you can make your own measurement conditions more consistent.

My constants are:

- The same four surfaces every round: Google AI Overviews, Gemini, ChatGPT free tier and Claude
- Google searches in an incognito window
- ChatGPT without logging in
- The same language and market for each prompt
- English prompts stay in English and Finnish prompts stay in Finnish
- A fresh session for each prompt, so previous questions do not influence the next answer

Using logged-out or public versions is a deliberate choice. I'm not trying to reproduce every possible personalized AI experience. That would be impossible. But I'm creating a relatively consistent baseline that approximates what an unknown user might encounter.

The trade-off is important: logged-in, paid and personalized experiences may behave differently. That's fine, as long as the measurement setup stays consistent.

## Step 3: Pick a measurement cadence and stick to it

I run the full set weekly. Every prompt, every surface and the same conditions each time.

With 20 prompts across four AI surfaces, that's 80 measurements per round.

Weekly works well for me because it is frequent enough to notice changes without turning the experiment into a second job.

But the more important reason for using a fixed cadence is consistency.

A single AI answer tells you very little. The same prompt can cite your brand one week and return completely different sources the next. Only repeated measurements under similar conditions start separating meaningful patterns from normal answer variation.

I saw this very quickly in my own data.

The overlap between the domains cited in one round and the domains cited in the next was only around **37%**. In other words, nearly two thirds of the source set changed between two rounds using the same prompts.

That is a useful reminder whenever someone screenshots one ChatGPT answer and declares that they have discovered how AI search works. One answer is just an observation.

## Step 4: Log more than "was the brand mentioned?"

Every answer gets its own row in my spreadsheet. A simple yes/no visibility column isn't enough because how a brand appears can matter much more than whether it appears at all.

For each answer, I record:

**Own content cited as a source**

Did the AI system use the brand's own website, article or other owned content as a source? I record yes/no and the specific URL.

**Brand mention in the answer**

Was the brand mentioned in the generated answer even if its own content was not cited?

**All cited sources**

I collect every cited URL so I can later analyze which domains repeatedly appear across the dataset.

**Context and tone**

How was the brand described? Was the mention positive, neutral or negative? What expertise or category was associated with it?

**Identity accuracy**

Did the answer identify the correct brand and connect it to the right information? This matters especially for personal brands and smaller companies whose entity signals may still be weak.

**Surface availability**

For Google, I also record whether an AI Overview appeared at all. An absent AI Overview is very different from an AI Overview that appeared but did not mention the brand.

I also save the raw answers as text files. The spreadsheet is useful for trends and comparisons. The raw answers become valuable when a number looks strange and you want to understand what actually happened.

I use Claude to help extract sources, mentions and tone from the raw answers, followed by manual spot checks.

### The AI visibility metrics I track per round

| Metric | What it tells you |
| --- | --- |
| Own content cited as a source | Whether owned content is being retrieved and used by AI systems |
| Brand mentions in answers | Recognition that may happen without direct attribution |
| Non-branded visibility | Whether the brand appears in recommendation and discovery queries |
| Total valid citations and unique domains | The broader source landscape around the topic |
| Own website cited | Whether the brand's own domain works as an AI source at all |

## Step 5: Interpret the results with discipline

Collecting the data is the easy part. Interpreting it without convincing yourself that every fluctuation means something is harder.

These are the rules I currently use.

### Don't call something a trend too early

My own-content citation counts went from 4 to 3 to 5 across the first three weeks. Is that growth? A temporary dip followed by recovery? Normal variation? Three data points can't tell me.

For now, I treat roughly the first five rounds as baseline building rather than evidence of a trend.

Five rounds is not a magical statistical threshold either. It is simply the point where repeated patterns start becoming more interesting than individual answers.

### Separate surface availability from brand visibility

Google AI Overviews do not appear for every query every time. If a previous brand query produced an AI Overview and the next measurement doesn't, the brand has not necessarily lost visibility. The surface itself may simply not have triggered.

That's why I log AI Overview availability separately. Otherwise it would be very easy to interpret a missing surface as declining brand performance.

### Track what gets found, not only whether something gets found

One of the most useful observations from my first four weeks was the way AI systems surfaced correct but disconnected pieces of the brand's online footprint.

They could find things like a university thesis from 2019, a LinkedIn article and pieces of a marketing career history, but did not always connect them into one clear entity.

That points to a very different problem from simply "not enough content". It looks more like an entity and context problem.

And that suggests different actions: strengthening connections between profiles, owned content, expertise topics and external references.

### Don't mistake a polished answer for a reliable one

AI-generated answers can look extremely convincing while being poorly sourced.

In my measurements, one tool repeatedly produced polished lists of Finnish experts where some names appeared to be hallucinated.

On another occasion, it produced a long recommendation list without checkable sources. If I only measured whether a brand appeared in the answer, those responses would count as equally valid observations.

I don't think they should. So I flag low-confidence or poorly sourced answers separately in the dataset.

### Expect recognition and recommendation to move independently

This has been one of the most interesting patterns so far. After four weeks, branded queries are increasingly finding real pieces of the brand's online footprint.

At the same time, non-branded discovery queries have produced **0 brand hits out of 54 answers**. That gap is useful information.

My early hypothesis is that recognition may happen once an AI system finds one or two strong sources associated with a brand. Recommendation seems to require much more: something closer to agreement across several independent sources that the brand belongs in a particular category.

If non-branded visibility eventually starts appearing, I want to see what changed around the same time.

## What this method can't tell you

There are some important limitations to keep in mind before copying this setup.

### It's a sample, not a census

Twenty prompts across four AI surfaces represent a deliberately small experiment. They describe one brand's visibility landscape, not AI search as a whole.

The prompts should reflect the questions that matter to your specific brand, audience and market.

### The systems keep changing

Models, retrieval systems and AI search interfaces change constantly. A change in your numbers may come from something you did, but it may also come from the AI platform changing how it retrieves, ranks or presents information.

### It measures answers, not business outcomes

This tracker measures the **visibility layer**. You still need analytics, leads, conversions and business outcomes to understand whether that visibility creates value.

### Logged-out measurements don't represent every user's experience

Real users may be logged in, using paid plans or receiving personalized answers. My setup intentionally removes some of that variation to create a more consistent baseline.

It should be interpreted as exactly that: a baseline, not a universal view of AI search.

For me, a small controlled dataset I can inspect is much more useful than either guessing or relying entirely on a score whose underlying answers I never see. It's also the best way I've found to learn how AI tools actually answer the same prompts week after week, and that alone has made the experiment worth the effort so far.

## Copy the setup: AI visibility tracking checklist

1. Write around 20 prompts covering four categories:
   - branded queries
   - branded expertise queries
   - non-branded discovery queries
   - informational and commercial queries
2. Use the languages your audience actually uses.
3. Freeze the prompt list once tracking begins.
4. Choose two to four AI surfaces that matter to your audience.
5. Use consistent logged-out, incognito or otherwise standardized measurement conditions.
6. Run every prompt on every surface weekly or biweekly.
7. Log for every answer:
   - owned content citations
   - brand mentions
   - all source URLs
   - context and tone
   - identity accuracy
   - surface availability
8. Save the raw answers.
9. Roll the individual answers up into round-level metrics such as:
   - source citations
   - brand mentions
   - non-branded visibility
   - unique cited domains
   - own-domain citations
10. Give the experiment several rounds before calling anything a trend.
11. Read the answers as well as the numbers.

My whole setup costs a spreadsheet and roughly an hour a week.

I'll keep running it and publishing what the data shows, including the weeks when absolutely nothing exciting happens.

And if more people publish their methods alongside their AI visibility results, we'll have something much more useful to compare than screenshots and mysterious GEO scores.

__Read more:__

[Does YouTube Actually Help AI Search Visibility? I Checked Google, ChatGPT, Claude and Gemini.](https://iidalehtonen.com/writing/youtube-ai-search-visibility/)

[What Is SEO vs. AEO vs. GEO?](https://iidalehtonen.com/writing/seo-vs-aeo-vs-geo/)

[Do FAQs Matter for AI Search? I Built an FAQ Generator, Then Checked the Evidence](https://iidalehtonen.com/writing/do-faqs-matter-for-ai-search/)

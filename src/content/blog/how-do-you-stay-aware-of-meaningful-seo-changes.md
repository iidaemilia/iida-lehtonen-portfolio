---
title: "How Do You Stay Aware of Meaningful SEO Changes on a Website with 25,000 URLs?"
description: "How do you spot meaningful SEO changes on a 25,000-URL website? I built a Python tool that prioritises the data and leaves the judgment to a human."

excerpt: "Google Search Console already has the data. The hard part is knowing which changes actually matter once a site hits tens of thousands of pages. I built a tool that narrows 25,000 URLs down to fifteen worth a look."

publishDate: 2026-07-17

author: "Iida Lehtonen"
readingTime: 5

heroImage: "../../assets/images/gsc-python-tool-article-hero.jpg"
heroAlt: "Laptop displaying an AI-assisted website project"

tags:
  - SEO
  - Data analysis
  - AI

draft: false
---
Google Search Console already holds the data SEO professionals need. The problem starts once a website grows to tens of thousands of pages: knowing which changes actually matter becomes surprisingly difficult. I built a lightweight Python tool that processes a Search Console export, prioritises the URLs most relevant to my work, and outputs an Excel report with around fifteen pages worth a manual look.

The real lesson had nothing to do with Python. The most valuable workflow wasn't the one that automated SEO analysis — it was the one that automated prioritisation and left the judgement to a human.

## Project at a glance

| | |
|---|---|
| **Goal** | Stay aware of meaningful SEO changes on a large website without manually reviewing tens of thousands of URLs. |
| **Tech stack** | Python, ChatGPT Codex, Visual Studio Code, Google Search Console, Microsoft Excel |
| **Input** | Google Search Console CSV export containing approximately 25,000 URLs. |
| **Output** | An Excel report containing approximately 15 prioritised URLs for manual review. |
| **Development time** | Approximately two hours. |

## Collecting the data was never the hard part

Finding the right rows inside it was.

At my current employer, I work with a large website consisting of product pages, support articles, landing pages and multiple subdomains. A typical Search Console export contains roughly 25,000 URLs, each with impressions, clicks, CTR and average position. The information I needed already existed. The difficulty was that only a tiny fraction of those pages required my attention at any given moment.

I wasn't trying to monitor every fluctuation across the entire website. I wanted to know when something meaningful had happened on the pages I was responsible for, particularly those receiving high numbers of impressions. Somewhere inside those 25,000 rows might be fifteen URLs worth investigating — the challenge was finding them quickly enough that the process could realistically become part of my weekly workflow.

## Building a better starting point

Rather than creating another reporting dashboard, I focused on a much smaller problem. I built a Python script that accepts a Search Console CSV export, cleans the data, applies a weighted scoring algorithm and generates an Excel file with roughly fifteen prioritised URLs. The whole process takes a few seconds.

The scoring model looks at more than traffic loss alone. It combines changes in clicks, average position and CTR over the previous 28 days, then weights the result by impression volume, so pages that already get the most visibility surface first. The goal isn't to catch every fluctuation — it's to surface the changes that are both meaningful and likely to matter for the business.

The tool doesn't tell me what to optimise. It doesn't generate AI summaries or produce SEO recommendations. Its only job is to narrow a dataset of roughly 25,000 URLs into a shortlist I can review manually. That may sound modest, but in practice it turned an overwhelming amount of data into something I could actually work with.

The prototype itself came together in a couple of hours using Python, ChatGPT Codex and VS Code. AI handled most of the implementation, while I focused on defining the workflow and deciding what "important" should actually mean.

## My first idea was much more ambitious

Originally, I wanted to automate the entire workflow. Once the tool had identified the highest-priority URLs, I planned to send the top five to AI for further analysis — let it review the pages, identify likely causes behind the performance changes and suggest optimisation opportunities automatically.

On paper, it sounded like the logical next step — until I tested the prototype.

## AI couldn't see the context behind the numbers

One of the first URLs the prototype flagged showed a substantial drop in traffic — on paper, exactly the kind of page that deserved a closer look. Then I recognised it. The previous month's traffic hadn't grown because of good SEO work; it had spiked after the page was mentioned in a widely shared news story. Once the attention faded, traffic simply returned to normal.

There was nothing to fix.

Neither the scoring algorithm nor a language model could have inferred that from the CSV export alone. Both could see the numbers. Neither could see the story behind them. I could, because I already knew the website and remembered what had happened the month before.

## I stopped trying to automate expertise

After that experiment, I removed the automated AI analysis entirely. Today, the workflow ends once the tool has prioritised the data. From there, I review the pages myself before deciding whether any of them deserve deeper investigation.

At first, that felt like a step backwards. In practice, it made the workflow more useful. The repetitive work became automated, while the decisions that depend on experience and business context stayed with the person best equipped to make them — it doesn't replace my SEO judgement so much as tell me where to point it.

Looking back, my instinct was to build something far more sophisticated than I actually needed — an AI pipeline that could identify, analyse and fix issues automatically. The lightweight version turned out to be the more valuable one. I've seen the same pattern in other AI projects since: the tools that actually help are the ones that make judgement easier to apply, not the ones trying to replace it.

## Key takeaways

- Start with a real workflow problem instead of an interesting technology.
- Prioritisation can create more value than automation alone.
- AI can spot patterns in data, but business context still requires human judgement.
- Simple tools that remove repetitive work often deliver the biggest productivity gains.
- The goal isn't to replace expertise — it's to make expertise easier to apply.

## Final thoughts

The most valuable part of the project wasn't the code, but realising that AI became far more useful once I stopped asking it to replace my expertise, and started using it to focus that expertise instead.

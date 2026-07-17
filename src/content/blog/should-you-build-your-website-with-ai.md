---
title: "I Built a Website from Scratch with AI as a Non-Developer. Here’s What I Learned."
description: "What I learned by building my own portfolio website almost entirely with AI."

excerpt: "Building a website with AI is easier than ever, but does that mean you should?"

publishDate: 2026-07-16

author: "Iida Lehtonen"
readingTime: 5

heroImage: "../../assets/images/article-hero-astro-project.png"
heroAlt: "Laptop displaying an AI-assisted website project"

tags:
  - AI
  - Web Development
  - SEO

draft: false
---
After spending roughly two full working days building the first version of this portfolio with Astro and AI, my answer is yes, but with an important caveat.

AI dramatically accelerated the process, but only because I was willing to understand, question and sometimes reject what it produced. This article documents what actually happened during the project, including the decisions AI made well, the mistakes it made, and why I believe technical judgement matters more than ever.

## Project at a glance

### Goal

Build a fast, modern portfolio website while learning a completely new frontend framework.

### Tech stack

- Figma (AI-assisted design)
- Astro
- Node.js
- Visual Studio Code
- ChatGPT Codex
- Git & GitHub

### Development time

Approximately two full working days for the first static homepage.

For comparison, I previously built a complete WordPress portfolio website, including a blog, in a single evening. If publishing a website as quickly as possible had been my only goal, I would almost certainly have chosen WordPress or Squarespace again.

This project had a different purpose: to understand what AI-assisted website development actually feels like in practice.

## My starting point

I'm not a software developer. I work as a Website Content Manager, focusing on content strategy, SEO, accessibility and digital customer experience. I've spent nearly a decade working with websites, but mostly from the content side rather than writing production code.

That said, websites have been part of my life for much longer. I built my first personal websites as a child in the early 2000s, customised HTML layouts on MySpace as a teenager, blogged with WordPress and Squarespace throughout the 2010s, and eventually made web content my profession.

If you opened an empty VS Code project in front of me, I couldn't build a modern website from memory. However, I can read code, understand what it does, and usually recognise when something doesn't look right.

As this project progressed, that ability became far more valuable than remembering syntax.

## How I built the site

The project itself was AI-assisted from the very beginning.

I started by exploring design ideas in Figma with AI. The first concepts looked generic and didn't match what I wanted, so I iterated on the layout myself until I was happy with the overall direction.

Once the design was ready, I shared it with ChatGPT, which recommended building the site using Astro, Node.js and Visual Studio Code. Astro was completely new to me.

From there, I developed the project using ChatGPT Codex inside VS Code. Rather than searching documentation or copying snippets from Stack Overflow, I described what I wanted to build, reviewed the generated code, tested the result and iterated until it behaved as expected.

Without AI, I probably wouldn't have started this project at all. It lowered the barrier enough that learning a completely new framework became both realistic and genuinely enjoyable.

## AI accelerated the work, but it didn't replace judgement

The biggest surprise wasn't how much AI could build.

It was how often I needed to question its decisions.

Throughout the project I reviewed heading structures, checked semantic HTML, tested responsiveness across different screen sizes, validated links, and inspected CSS whenever something didn't behave as expected.

The code almost always looked convincing.

That didn't necessarily make it the right solution.

Rather than acting as a developer who writes every line of code, I found myself acting more like a reviewer. AI produced most of the implementation, while my job became deciding whether those implementations actually made sense from the perspectives of usability, accessibility, SEO and long-term maintainability.

## Small decisions often mattered the most

One surprisingly useful lesson came from something as simple as the site's header.

At one point, AI wrapped my name inside an `<h2>` element because it was visually styled like a heading.

Technically, the code worked.

But my reaction was immediate.

> "Why is this an H2? It's not a heading."

Years of working with SEO, accessibility and website structure have made semantic HTML almost instinctive. The moment I saw it, I knew the markup didn't reflect the purpose of the element.

After challenging the implementation, I replaced the heading with a simple anchor element inside the `<header>`, allowing the page's `<h1>` to remain reserved for the primary content.

It was a small change, but an important reminder that AI often optimises for visual appearance rather than semantic meaning. Understanding the intent behind the interface still required human judgement.

## AI doesn't always find the real problem

Another memorable moment came while adjusting the spacing above my contact section.

The bug itself turned out to be remarkably simple.

AI, however, completely missed it.

Instead of tracing the root cause, it started suggesting increasingly broad CSS changes, eventually proposing modifications to the global stylesheet that would have affected unrelated parts of the website. At that point it was no longer solving the original problem. It was creating new ones.

I stopped following the suggestions, opened the stylesheet myself and started reading through the CSS line by line.

The actual fix took a single manual change: replacing one spacing token with another.

The experience taught me an important lesson. AI is excellent at generating possible solutions, but when it loses the thread of the problem, it can become surprisingly confident while making things progressively worse. At that point, someone still needs to understand the code well enough to take control.

## Sometimes the hardest part was disagreeing with AI

Not every disagreement was about code.

At one point, AI suggested postponing mobile responsiveness until after the first MVP.

From a software development perspective, that might sound like a reasonable trade-off.

From the perspective of someone who has spent years building customer-facing websites, it wasn't.

A portfolio website is likely to receive a significant share of its traffic from mobile devices, especially through LinkedIn. Shipping an MVP that doesn't work well on mobile would have meant knowingly delivering a poor user experience.

So I ignored the recommendation and built responsive layouts from the beginning.

That moment reinforced something I kept seeing throughout the project: AI can help make technical decisions, but it doesn't understand your business goals unless you explicitly teach it the context. Knowing why you're building something remains just as important as knowing how to build it.

## Understanding matters more than ever

One of the biggest misconceptions surrounding AI-assisted development is that technical understanding is becoming less important.

My experience was almost the opposite.

AI allowed me to build something that would have been beyond my current coding skills, but every improvement in my own understanding made AI significantly more useful.

The better I understood HTML, CSS, Astro and the overall structure of the project, the better I became at spotting poor suggestions, asking more precise questions and guiding AI towards stronger solutions.

In other words, AI didn't replace expertise.

It amplified the expertise I already had while encouraging me to develop new technical skills.

## Should you build a website with AI?

For me, absolutely.

This has been one of the most enjoyable learning projects I've done in a long time, and I now understand modern frontend development far better than I did before starting.

That said, I wouldn't necessarily recommend this approach to everyone.

If your only goal is to publish a portfolio or company website as quickly as possible, WordPress, Squarespace or another mature website builder is still likely the faster and lower-risk option.

Building with AI becomes worthwhile when the project itself is part of the learning process, or when you already understand enough about websites to evaluate what AI produces.

## Key takeaways

If you're considering building your own website with AI, here's what I'd recommend.

- Learn enough HTML and CSS to recognise when AI is making poor technical decisions.
- Treat AI as a development partner rather than an autonomous developer.
- Test everything across different devices instead of assuming generated code works.
- Challenge AI's recommendations instead of accepting them by default.
- If your goal is simply to launch a website quickly, a mature CMS is probably still the better choice.

## Final thoughts

Before starting this project, I assumed AI's biggest contribution would be writing code faster.

Instead, it changed my role.

I spent less time thinking about syntax and more time evaluating architecture, semantics, accessibility and maintainability. In many ways, the project felt less like programming and more like continuously reviewing another developer's pull requests.

As a Website Content Manager, that shift felt surprisingly natural. My background in SEO, accessibility and customer experience often mattered more than my limited coding experience, because the hardest decisions weren't about syntax. They were about understanding what makes a good website in the first place.

I don't think AI removes the need to understand how websites are built.

If anything, it makes that understanding even more valuable.

Because AI can generate almost anything.

Knowing which version is worth shipping is still a human decision.

---
slug: '/blog/building-lil-chef'
title: 'Building Lil Chef: A Local-First Meal Planner'
date: '2026-09-29'
description: 'Why Lil Chef sits behind a five-provider AI abstraction, a raw pg Pool with no ORM, and a Raspberry Pi deploy target.'
tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Ollama', 'Docker', 'Tailwind', 'AI']
---

Lil Chef is a local-first web app that generates weekly meal plans. A rat chef does the planning. You are the prep cook. Set your preferences up once, then get weekly plans with leftovers, grocery lists, and step-by-step prep workflows.

The meal planning is the easy part. The four decisions underneath it are what I could not justify from habit alone.

## Why five AI providers

The model layer is an abstraction over Ollama, OpenAI, Anthropic, OpenRouter, and Google Gemini. Every one of them can generate a plan. Picking one would have been a smaller project.

I picked five because the deployment target decides which provider wins. Running fully local with Ollama gets GPU-accelerated inference with no egress. That is the mode I actually use, because a plan built from my own dietary restrictions has no reason to leave the machine. Ollama is not available everywhere, and it is not always the best answer for a batch job. Google Gemini works out to roughly $0.009 per plan, about $0.07 a month, which is cheap enough to be the production path and leaves the local path free to be local.

The abstraction earns its cost because the provider is a deployment detail, not a product feature. Swapping it should not touch the rest of the app.

## Why no ORM

PostgreSQL 17 runs in Docker and the app talks to it through a raw `pg` Pool. There is no ORM.

This was the decision I defended hardest, because every instinct says add one. The schema is small. Preferences in, plans out, plus a history table holding recipe-level feedback. A handful of tables with obvious relationships and no surprises. An ORM would add a second thing to learn, a second thing to version, and a layer between me and the SQL for a schema that fits in my head.

The feedback loop is what earns the raw pool. Feedback is captured per past plan, at the recipe level, as a thumbs up or down with notes. Those reads and writes share a request path with generation, and the queries are specific enough that a query builder would mostly be in the way.

## Why Ollama runs natively

Docker Compose runs the database and the app. Ollama runs outside the container, on the host, so it gets the GPU directly.

Putting a model runtime in a container means passing device access through, mapping drivers, and debugging a layer that exists only to be got out of the way. Running it natively removed that entire category of problem.

## Why a Raspberry Pi

The app deploys to a Raspberry Pi 4 or 5. That is not a hobby constraint, it is the sizing test. If plan generation, the database, and the UI all fit on hardware that costs less than a laptop, the design is not quietly leaning on a rented GPU somewhere. Cross-platform from Intel Mac to Apple Silicon to Linux to Pi was the goal, and the Pi is where it stops being free.

It also composes with the home lab: a Tailscale mesh for connectivity and Cloudflare tunnels to expose the service without opening ports. Lil Chef is one of the services that gets a tunnel.

## What real preferences changed

Dietary restrictions, cuisines, protein preferences, and goals get captured once, at setup. That is the part that turned out to matter most, because it moved the work out of every later request.

The thing nobody plans for is that a generated week is only useful if you can correct it. Hence the past plan history and the per-recipe thumbs up and down. A plan you rated badly is not just a bad plan, it is input. Without somewhere to record that, you end up re-typing the same preferences every time you want a change.

Feedback captured at the recipe level, rather than for the whole week, is what makes that useful. A week is usually mostly fine. The one dinner you did not want is the signal.

## What came out of it

The frontend is Next.js 16 App Router with Turbopack. Tailwind CSS v4 handles styling, with dark mode and responsive layout. PDF recipe import lets an existing recipe join a plan without being retyped. GitHub Actions handles CI/CD, and `/api/health` checks the database, the tables, and the AI provider, so a broken provider is visible before it looks like a broken app.

A full weekly plan is what comes out: three dinners with leftovers, breakfast ideas, a lunch strategy, fallback meals for the nights that go sideways, and a grocery list. The prep workflow steps carry their own timing.

## What I would change next

The provider abstraction is the piece I would revisit. Five providers is one more than the app needs day to day, and every extra branch is a place to get the response shapes wrong.

Feedback is the other one. It is captured but underused. Right now it records what I liked. It should shape what gets planned next, which means storing it somewhere the generator can re-read, rather than leaving it as a verdict on the last plan.

Both are follow-ups, not redesigns. They are follow-ups because the slice underneath them is real and in use.
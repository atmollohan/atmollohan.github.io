---
slug: '/projects/lil-chef'
title: 'Lil Chef'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Ollama', 'Docker', 'Tailwind', 'AI']
---

## Overview

A local-first web app that generates weekly meal plans using AI. The theme is a rat chef doing the planning — you are just the prep cook. One-time preference setup, then weekly plans with leftovers, grocery lists, and step-by-step prep workflows.

## The Build

**AI Integration:**
- Built abstraction layer supporting Ollama (local), OpenAI, Anthropic, OpenRouter, and Google Gemini
- Runs fully local with Ollama for GPU-accelerated inference
- Google Gemini as cheap production provider (~$0.009/plan, ~$0.07/month)

**Backend & Data:**
- PostgreSQL 17 via Docker with raw `pg` Pool (no ORM)
- One-time preference setup: dietary restrictions, cuisines, protein preferences, goals
- Past plans history with recipe-level feedback (thumbs up/down with notes)

**Frontend & UX:**
- Next.js 16 App Router with Turbopack for fast dev
- Tailwind CSS v4 for styling
- Dark mode, responsive design
- PDF recipe import

**Infrastructure:**
- Docker Compose for db + app, Ollama runs natively for GPU access
- Deployable to Raspberry Pi 4/5
- CI/CD via GitHub Actions
- Health dashboard (`/api/health`) checking DB, tables, and AI provider

## Impact

- Self-hosted meal planning with zero cloud dependencies
- Full weekly plans: 3 dinners with leftovers, breakfast ideas, lunch strategy, fallback meals, grocery list
- Step-by-step prep workflow with timing
- Cross-platform (Intel Mac, Apple Silicon, Linux, Raspberry Pi)

## Stack

Next.js, TypeScript, PostgreSQL, Ollama, Docker, Tailwind CSS, AI/ML

---
slug: '/projects/will-of-the-people'
title: 'The Will of the People'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
order: 1
tags: ['Node.js', 'Discord.js', 'Docker', 'Jest', 'GitHub Actions', 'Raspberry Pi']
description: 'A Discord bot that became the engine of a server economy, casino, and voice. Runs on a Raspberry Pi 5 after migrating from AWS EC2 when credits ran out.'
---

## Overview

A Discord bot that became the engine of a server's economy, casino, and voice. Started as a joke and turned into a shared system everyone pushed, tested, argued with, and added to. Originally hosted on an AWS EC2 instance, migrated to a Raspberry Pi 3B when credits ran out, then upgraded to a Pi 5.

## The Build

**Bot Architecture:**
- Dynamic command module loading from `commands/` directory
- Shared helper functions (`commands/Functions/`) for stats, achievements, embeds
- Bot state tracked in JSON files under `JSON/`
- `!version` command backed by baked-in `APP_VERSION`

**Testing & Quality:**
- 125+ tests across 45 suites (JSON consistency, command modules, shared helpers, error handling)
- Conventional Commits enforcement (local git hooks + CI)
- Auto-labeling and semver release management via PR labels

**Deployment:**
- Docker (multi-arch, published to GHCR)
- Deployed to Raspberry Pi and AWS EC2
- Release workflow with dry-run support, categorized release notes, and Discord webhook notifications
- GitHub Actions CI/CD pipeline

## Impact

- Built bot that powers a server's entire economy and social system
- 125+ tests ensuring reliability across all command modules
- Multi-arch Docker images for deployment anywhere
- Automated release pipeline with conventional commits

## Stack

Node.js, Discord.js, Docker, Jest, GitHub Actions

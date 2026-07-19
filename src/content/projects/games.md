---
slug: '/projects/games'
title: 'Games Arcade'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
order: 5
tags: ['HTML', 'JavaScript', 'Python', 'Docker', 'Cloudflare Tunnel', 'Tailscale']
description: '7 classic arcade games in a single HTML page, served by a lightweight Python HTTP server. Containerized for ARM64/AMD64 and ready for Raspberry Pi deployment.'
---

## Overview

7 classic arcade games in a single HTML page, served by a lightweight Python HTTP server. Containerized for ARM64/AMD64 and ready for Raspberry Pi deployment.

## The Build

**Games:**
- 2048, Tetris, Snake, Breakout, Memory Match, Tic-Tac-Toe, Pong
- Single HTML page with vanilla JS/HTML/CSS
- Health check endpoint (`/health`)

**Infrastructure:**
- Python HTTP server
- Docker (multi-arch: linux/amd64, linux/arm64, published to GHCR)
- Configurable port and host via environment variables
- Tailscale for private access, Cloudflare Tunnel for public hosting

**Deployment:**
- CI/CD via GitHub Actions (push to `main` or version tags)
- Docker Compose setup with Cloudflare Tunnel
- Deployed on Raspberry Pi

## Impact

- 7 games in a single container, lightweight and portable
- Multi-arch Docker images for ARM64/AMD64
- Public access via Cloudflare Tunnel, private via Tailscale
- One-command deployment on Raspberry Pi

## Stack

HTML, JavaScript, Python, Docker, Cloudflare Tunnel, Tailscale

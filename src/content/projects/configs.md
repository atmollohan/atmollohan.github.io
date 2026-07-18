---
slug: '/projects/configs'
title: 'Configs'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
tags: ['Shell', 'Docker', 'Kubernetes', 'DevOps', 'GitHub Actions']
---

## Overview

Cross-machine development environment configuration toolkit. Shell configs, modular aliases, a Docker dev container image, and an install script that detects OS, architecture, and hardware.

## The Build

**Shell Environment:**
- zsh (Oh My Zsh) with bash fallback
- Modular alias system in `aliases/` (base, docker, git, k8s, system)
- Works in both bash and zsh
- Machine-specific overrides via `~/.zshrc.local` or `.bashrc.local`

**Docker Toolkit:**
- Full Docker image (`ghcr.io/atmollohan/toolkit`) with all cloud CLIs pre-installed
- Slim Docker image (Alpine-based) for lightweight usage
- Dev Container support for VS Code

**CLI Tools Included:**
- Docker, kubectl, kind, helm, k9s, AWS CLI, GCP SDK, GitHub CLI, OpenTofu, Trivy, yq, fzf
- Optional: Go, NVM (Node), Pyenv (Python), Deno

**Install Script:**
- One-liner install (`./scripts/install.sh`) with hardware detection
- Detects OS, architecture (x86_64/arm64), and hardware type (Raspberry Pi, AWS EC2, GCP, Azure)

## Impact

- Consistent dev environment across all machines
- One-command setup for new machines
- Docker toolkit image with all CLIs pre-installed
- Hardware-aware installation for Pi, cloud, and local dev

## Stack

Shell, Docker, Kubernetes, DevOps, GitHub Actions

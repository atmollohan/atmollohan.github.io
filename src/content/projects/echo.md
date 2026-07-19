---
slug: '/projects/echo'
title: 'Echo Protocol'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
order: 4
tags: ['Python', 'Streamlit', 'Docker', 'Cloudflare Tunnel', 'Tailscale', 'Raspberry Pi']
description: 'A web tool for generating Beckman Echo liquid handler protocols. Runs locally as a standalone Python app or Docker container so users can connect their own data. Designed to run on a Raspberry Pi.'
---

## Overview

A web tool for generating Beckman Echo liquid handler protocols. Lets lab scientists create CSV transfer files for experiments without writing code. Runs locally as a standalone Python app or Docker container so users keep control of their own data. Designed for non-programmers: just fill out a web form and download the protocol. Built to run on a Raspberry Pi, migration planned.

## The Build

**Core Functionality:**
- Premade plate layouts or create new plates from scratch
- Define sample concentrations, volumes (nanoliters), experiment parameters
- Generate and download source plate CSV and transfer protocol CSV

**Infrastructure:**
- Docker (multi-arch: ARM64/AMD64, published to GHCR)
- Deployed on Raspberry Pi behind a Cloudflare Tunnel
- Tailscale for admin access
- Mount custom notebooks and data directories via Docker volume mounts

**Cross-Platform:**
- Works on Intel Mac, Apple Silicon, Linux, Raspberry Pi
- Single Streamlit app, no complex setup

## Impact

- Eliminates manual protocol writing for lab scientists
- Cross-platform deployment from Raspberry Pi to cloud
- Zero cloud dependencies, runs entirely local
- Cloudflare Tunnel for secure remote access

## Stack

Python, Streamlit, Docker, Cloudflare Tunnel, Tailscale

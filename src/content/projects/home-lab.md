---
slug: '/projects/home-lab'
title: 'Home Lab'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
order: 3
tags: ['Raspberry Pi', 'Linux', 'Docker', 'Tailscale', 'Cloudflare Tunnel', 'Networking', 'Box64', 'Box86', 'SteamCMD', 'Pi-hole', 'Self-Hosted']
description: 'Multi-device home lab built from scratch. Raspberry Pis and custom-built computers running a Tailscale mesh, Cloudflare tunnels, game servers, and network services.'
---

## Overview

A home lab built from the ground up with multiple Raspberry Pis and custom-built computers I sourced and assembled myself. Everything runs on a Tailscale mesh network with Cloudflare tunnels for remote access. Hosts game servers (Valheim, Factorio, Palworld, Minecraft) for playing with friends, network services like Pi-hole, and a lot of hands-on work with routers, modems, and local networking.

## The Build

**Infrastructure:**
- Multiple Raspberry Pis and custom-built PCs
- Tailscale mesh network connecting all devices
- Cloudflare tunnels for select services (Lil Chef, etc.)
- Docker containers across all nodes

**Game Servers:**
- Valheim, Factorio, Palworld, and Minecraft hosted locally
- Game servers installed via SteamCMD CLI since containerized versions didn't work on ARM
- ARM emulation using Box64 and Box86 to run x86 game servers on Raspberry Pis
- Required lots of research and planning to get working on non-x86 hardware

**Networking & Self-Hosting:**
- Pi-hole for network-wide ad blocking
- Local network configuration, router and modem setup and troubleshooting
- All services containerized and deployed across the lab
- Automated deployments via Tailscale for secure remote management
- Ongoing optimization for performance on resource-constrained hardware

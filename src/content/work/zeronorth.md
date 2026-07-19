---
slug: '/work/zeronorth'
title: 'ZeroNorth'
company: 'ZeroNorth'
role: 'Software Engineer II'
period: 'February 2021 - November 2021'
tags: ['AWS', 'Kubernetes', 'Docker', 'Python', 'TypeScript', 'React', 'Security', 'CI/CD', 'Terraform']
---

## Role

Software Engineer building the platform that orchestrates security testing across the software development lifecycle. Focused on infrastructure automation and security pipeline integration.

## The Work

### Security Orchestration Platform

**Scan Runners & Kubernetes Jobs:**
- Built the runners and K8s jobs that the platform orchestrated to execute scans
- Handled scan execution against multiple target types: containers, repos, infrastructure, AWS accounts, and live sites
- Designed job scheduling and resource allocation for concurrent scan workloads

**Pipeline Automation:**
- Built security scanning pipelines that integrate into customer CI/CD workflows
- Designed plugin architecture for adding new security tools without platform changes
- Implemented parallel execution engine that runs multiple security scans concurrently
- Created notification system that alerts teams to critical vulnerabilities

**Infrastructure Automation:**
- Managed AWS infrastructure supporting multi-tenant security platform
- Implemented auto-scaling policies for variable scanning workloads
- Designed backup and disaster recovery procedures for critical platform data

### Security Tool Integration

**Scanner Integration:**
- Integrated SAST, DAST, SCA, and container scanning tools into unified platform
- Built abstraction layer that normalizes output from different security scanners
- Implemented correlation engine that deduplicates findings across tools
- Created reporting dashboard that visualizes security posture across applications

## Impact

- Platform processed scans that found hundreds of thousands of vulnerabilities across customer codebases
- Integrated 15+ security tools into unified orchestration platform
- Designed infrastructure that scales to handle concurrent scans across multiple tenants

## Stack

AWS, Terraform, Kubernetes, Docker, Python, TypeScript, React, Security Scanning, CI/CD, PostgreSQL

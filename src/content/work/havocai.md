---
slug: '/work/havocai'
title: 'Havoc AI'
company: 'Havoc AI'
role: 'Senior Platform Engineer'
period: 'December 2025 - Present'
tags: ['AWS', 'Kubernetes', 'Docker', 'Helm', 'Pulumi', 'Flux', 'GitHub Actions', 'Python', 'Security', 'Compliance', 'CNCF', 'Self-Hosted', 'GCP']
---

## Role

Senior Platform Engineer building the infrastructure platform for an autonomous security testing platform. Primary person on cloud architecture, scaling, and compliance. Built end-to-end infrastructure for simulated adversarial environments at scale.

## The Work

Havoc AI's autonomous platform runs security agents against simulated environments at scale. I owned the cloud infrastructure that made this possible — from single-agent deployments to multi-agent Kubernetes clusters.

### Simulated Environment Architecture

The core challenge: scale simulated adversary networks from single agents to hundreds or thousands of devices. I built the infrastructure layer that enabled this scaling.

**Agent Scaling Pipeline:**
- Designed Helm charts that orchestrate multi-agent environments on Kubernetes
- Built containerized agent runtime with isolation between concurrent simulations
- Implemented auto-scaling policies that scale from 1 agent to 1000+ based on simulation load
- Tuned Kubernetes node groups for burst workloads with cost-optimized instance selection

**Simulation Environment Orchestration:**
- Built Python orchestration layer that coordinates multi-agent simulation campaigns
- Designed API contracts between simulation control plane and infrastructure
- Implemented environment provisioning with <5 minute cold-start for new simulations
- Created isolation boundaries between concurrent simulations (network, compute, storage)

### Infrastructure & Automation

**Cloud Infrastructure (AWS + Self-Hosted):**
- Designed Kubernetes cluster architecture for multi-tenant simulation workloads
- Built Pulumi modules for repeatable infrastructure provisioning
- Implemented self-hosted hybrid infrastructure for cost-sensitive workloads
- Created cross-account IAM patterns for secure agent execution

**CI/CD & Deployment:**
- Built GitHub Actions pipelines for infrastructure changes and application deployments
- Designed GitOps workflow for EKS with Flux and Helm chart versioning
- Implemented automated testing for infrastructure changes before production
- Created rollback procedures for zero-downtime deployments

### Security & Compliance

**Cloud Security Model:**
- Built end-to-end security scanning pipeline with Trivy for container vulnerabilities
- Implemented CIS benchmark compliance for Kubernetes clusters using automated scanning
- Generated POAM (Plan of Action and Milestones) for IATT (Interim Authorization to Test)
- Remediated security findings and established compensating controls for gaps
- Designed network policies for micro-segmentation between simulation environments

**Compliance Framework:**
- Implemented DISA STIG compliance for container workloads
- Ran Kubebench assessments against Kubernetes clusters
- Created automated compliance scanning that runs on every deployment
- Documented compensating controls for findings that couldn't be immediately remediated

## Impact

- Scaled simulated environments from single agent to 1000+ concurrent devices
- Reduced environment provisioning from hours to <5 minutes
- Achieved CIS/DISA STIG compliance for production EKS clusters
- Built security scanning pipeline that catches vulnerabilities before deployment
- Established compliance documentation (POAM) that enabled IATT authorization

## Stack

AWS, Pulumi, Kubernetes, Helm, Flux, GitHub Actions, Docker, Python, Trivy, CNCF Tooling, GitOps, CIS Benchmarks, DISA STIG, GCP, Self-Hosted Infrastructure

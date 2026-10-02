# Project State

## Project Reference

**Project**: Personal Portfolio Website  
**Core Value**: Showcase skills, work experience, and interests for Andrew Mollohan  
**Current Focus**: Phase 3 remainder - PF-15 case study format, PF-16 project filtering

---

## Current Position

- **Phase**: Longer-term Additions (Phase 3)
- **Status**: 3 of 5 requirements done (PF-12, PF-13, PF-14 shipped 2026-10-01)
- **Progress Bar**: 60%
- **Remaining**: PF-15 case study blog format, PF-16 projects filtering by category

---

## Portfolio Content Update (Complete ✓ - PR #71)

### What Was Done
- Fixed all work history across 6 roles (HavocAI, Harness, ZeroNorth, Optum, PCRI, We Roast Coffee)
- Removed em dashes from all content files (clear AI giveaway)
- Reordered job title separators from em dash to pipe (`Company | Title`)
- Split AI from ML in intro.md; removed CloudWatch/CloudTrail from Observability; removed AppSec from Security
- Updated Optum dates to 2017-2021, tags reordered (Python, TypeScript, Node.js, Next.js front), added MySQL
- Updated We Roast Coffee tags to correct stack (Shopify, Gatsby, Auth0, Contentful, Netlify)
- Fixed PCRI detail page (was describing wrong property management project, rewrote to event tech)
- Fixed ZeroNorth role title to "Software Engineer II", moved Terraform to end of stack
- Added scan runners/K8s jobs section to ZeroNorth detail page
- Updated Harness: full stack scope, scrum responsibilities, GCP/K8s SaaS+OnPrem, tags reordered (Python/Go/TypeScript front), added Redis/MongoDB
- Updated HavocAI: cloud platform owner (not just security), removed "multiple cloud providers", compliance "working towards"
- Created Home Lab project (order 3): Pis, Tailscale mesh, Cloudflare tunnels, game servers, Pi-hole, Box64/86
- Updated Echo Protocol: local standalone or Docker, Pi migration planned
- Updated Will of the People: Pi 3B→Pi 5 migration from AWS EC2
- Created simple "M" monogram favicon (amber square with dark M)
- Replaced GitHub API activity feed in Intro with local project cards using GraphQL
- Added `order` field to all project frontmatter for sort control
- Added `description` field to all project frontmatter
- Fixed `gatsby-config.js` title ("Mollo Tech") and description
- Removed em dash from `index.js` meta description
- Version bumped to 1.5.0
- Fixed test failures (Main.test.js, Intro.test.js) - added allMarkdownRemark mock data
- Committed all changes, pushed to `feat/portfolio-content-update`, PR #71 created and merged

### Work Timeline (Current)

| Period | Role |
|--------|------|
| Dec 2025 - Present | HavocAI - Senior Platform Engineer |
| Nov 2021 - Nov 2025 | Harness - Senior Software Engineer II |
| Feb 2021 - Nov 2021 | ZeroNorth - Software Engineer II |
| 2020-2021 | We Roast Coffee - Full Stack Engineer |
| 2020-2021 | PCRI - Event Technology Consultant |
| 2017-2021 | Optum - Software Engineer |

### Projects (Current)

| Project | Order | Tech Stack | Status |
|---------|-------|------------|--------|
| Lil Chef | 2 | Next.js, TypeScript, PostgreSQL, Ollama | Live |
| Home Lab | 3 | Raspberry Pi, Tailscale, Cloudflare, Docker | Live |
| Echo Protocol | 4 | Python, Streamlit, Docker | Live |
| Will of the People | 5 | Node.js, Discord.js, Docker | Live |
| Games Arcade | 6 | HTML, JavaScript, Python, Docker | Live |
| Configs | 7 | Shell, Docker, Kubernetes | Live |

### Decisions Made
- Pipe separator for job titles (`Company | Title`) instead of em dash
- Projects sorted by `order` frontmatter field (ASC)
- Home Lab placed at order 3 (between live apps and open source projects)
- Removed "See all projects" link entirely (SPA routing issue)
- Favicons: simple amber square with M letter for now
- `gatsby-plugin-manifest` accepts SVG and auto-generates PNG sizes
- GitHub Activity relabeled to "Projects" section
- AI and ML split into separate categories (AI = agentic coding, ML = data processing/model training)
- CloudWatch/CloudTrail implied with AWS - don't list separately
- Security is implied - don't list AppSec explicitly
- No em dashes in content (clear AI giveaway)

---

## Phase 3 Slice 1: Blog Vertical Slice (Complete - 2026-10-01)

Plan `03-PLAN-01.md`, 14 commits, branch `chore/docs-reconcile-and-canonical-domain` (not
pushed). Summary at `.planning/phases/03-longer-term-additions/03-01-SUMMARY.md`.

### What Shipped (PF-12, PF-13, PF-14)

| Requirement | Delivered |
|-------------|-----------|
| PF-12 blog section | Seed post, `blog-post.js` template, `/blog` listing, per-post SEO |
| PF-13 RSS feed | `gatsby-plugin-feed` at `/rss.xml`, blog-scoped, 1 item, `content:encoded` |
| PF-14 nav link | `All Work`, `All Projects`, `Blog` as real anchors beside the 4 SPA buttons |

Three requirements closed at once, plus an unrequested but necessary routing fix.

### New Files

- `src/templates/blog-post.js` + test
- `src/pages/blog.js` + test
- `src/content/blog/building-lil-chef.md` (918 words, 7 headings, user approved)
- `src/gatsby-node.test.js` (CommonJS, asserts the routing split)

### Blog Frontmatter Contract

```
slug         string   required, MUST start with /blog/ or the post routes to shared-detail
title        string   required
date         string   required, quoted YYYY-MM-DD. Anything else is inferred as String
                       and sorts lexicographically with no build error
description  string   required
tags         array    optional
```

Never add `company`, `role`, `period`, or `order` to a blog post. Those shape
`shared-detail.jsx` and the blog template never reads them.

### Two Bugs the Plan Did Not Predict

**1. `useLocation` from `gatsby` breaks SSR.** Gatsby resolves the `gatsby` module to its
**SSR entry** during `npm run build`, which does not export `useLocation`. Importing it at
module scope in any component that renders in the static pass kills every HTML render. The
browser entry has it, the SSR entry does not. If a later phase wants the current route, pass
`location` down as a prop the way `index.js` does.

**2. A `{model.field}` filename under `src/pages/` is a routing footgun.** Such a file is a
Gatsby File System Route API generator: it auto-creates a page per matching node and resolves
**after** `gatsby-node.js` `createPages`, silently overwriting programmatic routing. The repo
shipped `{markdownRemark.frontmatter__slug}.jsx` in `src/pages/` for months. When it collided
with blog routing, every `/blog/*` post rendered with the work/project template. The build
exited 0 and every unit test passed, because the tests assert on `createPage` **arguments**,
not on the component Gatsby finally resolves. **Both detail templates now live in
`src/templates/`. Do not move either back into `src/pages/`.** The only reliable guard is a
built-output assertion that the post page emits `og:type=article`.

### Verification Baseline (post-slice)

| Metric | Before | After |
|--------|--------|-------|
| Test suites | 10 | 13 |
| Tests | 41 | 64 |
| Lint | 0 errors, 0 warnings | 0 errors, 0 warnings |
| Sitemap URLs | 19 | 21 |
| RSS items | n/a | 1 |

Note: the plan targeted 14 suites; 13 is correct. It counted `Header.test.js` as new when that
file already existed.

---

## Remaining Phase 3 Work

### PF-15: Case Study Blog Format (Medium, not started)

Prerequisite met: the blog slice is merged-quality and the seed post survived real reading.
Open decision before it can be planned: is a case study a distinct frontmatter `type` with its
own sections, or a documented section convention inside the existing `blog-post.js` template?
A `type` branch would now be a second branch in a single-purpose file. The `description` and
`tags` fields are the natural substrate for a case study summary block. Still open from
`03-CONTEXT.md`: whether a case study needs a byline, a series, or a reading time.

### PF-16: Projects Filtering by Category (Medium, not started)

**Hard prerequisite, and it is a content task before it is a code task:** there is no
`category` frontmatter field today, so filtering has nothing to filter on. A `category` key must
be added to all six files under `src/content/projects/` (configs, echo, games, home-lab,
lil-chef, will-of-the-people) before any code can be written. Those are git-tracked files.

Open decision: whether `category` is a single value or a list, and what the initial vocabulary
is. That is a content decision to make with the user, not to infer.

Also: `src/pages/projects.js` carries `style={{ display: 'none' }}`. PF-16 will edit that file,
so decide explicitly at that point whether to keep, remove, or route around the inline style,
rather than letting it change as a side effect.

---

## Previous Phases (Complete)

### Phase 1: Quick Wins (Complete ✓)
- [x] Add pre-college jobs to Work section
- [x] Add sitemap
- [x] Add lazy loading to images
- [x] Fix console errors (keyboard handlers)
- [x] Add external link safety (target="_blank", rel="noopener noreferrer")
- [x] Verify favicon (working via gatsby-plugin-manifest)

### Phase 2: Medium-term (Complete ✓)
- [x] Convert index.js to functional component (already done)
- [x] Accessibility improvements (WCAG 2.1 AA) - aria labels, landmarks, skip-link, focus-visible
- [x] Add more Jest tests - 10 suites, 41 tests total (About 7, Work 5, Header 5, Contact 4, GitHubActivity 4, Intro 4, Footer 3, SocialLinks 3, Main 3, layout 3)
- [x] Add Open Graph/Twitter meta tags
- [x] GitHub Activity integration - **since replaced** by local project cards queried via GraphQL, now labelled "Projects"
- [x] Performance optimization - lazy loading, image optimization

---

## Phase 3 Scope (superseded by the slices above)

Scope: PF-12 through PF-16 (blog, RSS, nav link, case study format, project filtering).
Reconciled with ROADMAP.md on 2026-09-29. Dark mode and client-side search are **not**
in scope; they were listed in REQUIREMENTS.md but never built and are deferred.

### Goals
1. Create blog content directory (src/content/blog/)
2. Build a blog post template with Layout wrapper and Head API
3. Create blog listing page with dates
4. Add RSS feed
5. Add a Blog link that routes to /blog
6. Design case study format for technical posts
7. Add category filtering to the existing /projects page

### Build Context (verified 2026-09-29, now partly stale)

Superseded in four places by the slice-1 work. Kept because items 6 and 7 below are still the
live constraints on PF-15 and PF-16.

- `gatsby-node.js` loops all `allMarkdownRemark` nodes and calls `createPage` per
  `frontmatter.slug`. Blog posts get pages for free once they have a `slug`. **The template it
  points at moved from `src/pages/{markdownRemark.frontmatter__slug}.jsx` to
  `src/templates/shared-detail.jsx`; that old path was a File System Route API generator and
  was silently overriding programmatic routing.** `createPages` is now the only page creator.
- The shared template renders `company` / `role` / `period`, fields blog posts will not have.
  Resolved by a separate `blog-post.js` template, not a frontmatter `type` branch.
- Canonical domain is `https://mollo.tech` (via `static/CNAME`). `atmollohan.github.io`
  301-redirects to it. Use `mollo.tech` for any new feed or page metadata.
- Header nav (`src/components/Header.js`) is SPA button-driven over
  `['work', 'intro', 'about', 'contact']` via `onOpenArticle`. Resolved with a sibling group of
  three real Gatsby `Link`s labelled `All Work`, `All Projects`, `Blog`. Do not add routes to
  the SPA array.
- `gatsby-plugin-feed` is **now installed** at `^5.16.0`. The feed is scoped with
  `match: '^/blog'` and a `filter` on the `^/blog/` slug prefix. The filter is required, not
  defensive: without it all 17 slugged markdown files ship as feed items and the build exits 0.
- Projects have a free-form `tags` array and no `category` field, so filtering needs
  a new frontmatter field before it can filter on anything. **Still true, and it is the first
  task for PF-16.**
- `/projects` exists at `src/pages/projects.js` and renders all 6 cards with no filter state.
  It carries `style={{ display: 'none' }}`; see the PF-16 note above.

### Future Improvements (Beyond Phase 3)
- TypeScript migration
- Accessibility audit (contrast ratios, ARIA labels)
- Image optimization/lazy loading improvements
- Update Gatsby to latest version
- Better favicon/branding (current is simple amber M monogram)
- Dark mode toggle
- Client-side search
- Prettier drift in 14 `.scss` files, including `_mixins.scss`. Pre-existing at the Phase 3
  baseline. `format:check` only covers `**/*.js`, so it does not trip the gate.
- 79 audit vulnerabilities reported by `npm install`. Not triaged.

---

## Session Continuity

**Last Updated**: 2026-10-01
**Next Action**: Discuss and plan PF-15 (case study format) and PF-16 (project filtering).
  PF-16 starts with a content task: add a `category` key to all six project markdown files.
**Branch**: `chore/docs-reconcile-and-canonical-domain`, 14 unpushed commits, clean tree
**Version**: 1.5.0 (not bumped for Phase 3 slice 1)
**Tests**: 64/64 passing across 13 suites
**Build**: Successful, 23/23 pages, 21 sitemap URLs

## 2026-09-29 Doc Reconciliation

No open work PRs (only two stale dependabot PRs: #67 axios, #69 @babel/core). Reconciled
stale documentation against the actual codebase:

- REQUIREMENTS.md Phase 3 contradicted ROADMAP.md. Per user decision, ROADMAP's list wins.
  PF-13 through PF-16 rewritten to RSS, nav link, case study format, and project filtering.
  Dark mode and client-side search deferred.
- REQUIREMENTS.md traceability table listed all 16 requirements as "Pending" despite
  Phases 1, 2, and 2.5 being complete. Updated to Done / Not started.
- Test counts in ROADMAP.md and STATE.md said 39/39. Actual is 41/41 across 10 suites.
- ROADMAP.md "Current State" and Phase 1 progress row updated.
- Recorded verified build constraints for Phase 3 planning (shared slug template,
  SPA nav limits, no gatsby-plugin-feed, no `category` frontmatter on projects).

Closed stale dependabot PRs #67 (axios) and #69 (@babel/core). Both were lockfile-only
bumps within ranges already declared in `package.json` (`^1.13.4` and `^7.29.0`), so no
code change was needed.

## 2026-09-29 Low-Hanging Fruit

- **Canonical domain bug (fixed)**: `gatsby-config.js` `siteUrl` and the `og:url` /
  `og:image` tags in `src/pages/index.js` pointed at `https://atmollohan.github.io`, but
  the site is served at `https://mollo.tech` via `static/CNAME`. The old domain 301s to
  the new one, so the live sitemap was advertising the wrong canonical origin for all
  20 URLs. Verified against production before and after; sitemap now emits `mollo.tech`.
- **Lint warnings (fixed)**: cleared the last 4 `react/prop-types` warnings in the
  `Link` mocks inside `Intro.test.js` and `Main.test.js`. `npm run lint` is now 0 errors,
  0 warnings. Note: `jest.mock()` factories cannot reference out-of-scope variables, so
  `PropTypes` is `require`d inside the factory rather than imported.
- Verified as already correct, no change needed: external links have
  `target="_blank"` + `rel="noopener noreferrer"`, sitemap plugin is configured,
  manifest favicon works, and the shared slug template's `mollo.tech` canonical is right.

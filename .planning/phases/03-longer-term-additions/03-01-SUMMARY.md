---
phase: 03-longer-term-additions
plan: '01'
subsystem: content
tags: [blog, rss, gatsby, routing, navigation, sass, documentation]
requires: [gatsby-5, react, sass, jest]
provides: [blog-vertical-slice, rss-feed, blog-routing, header-route-links]
affects: [gatsby-node, gatsby-config, header, scss, docs]
tech_stack:
  added: [gatsby-plugin-feed@^5.16.0]
  patterns:
    - blog-scoped GraphQL filter on frontmatter.slug prefix
    - template selection by slug prefix inside a single createPage loop
    - date formatted in JS with a local-midnight parse
key_files:
  created:
    - src/content/blog/building-lil-chef.md
    - src/pages/blog.js
    - src/pages/blog.test.js
    - src/templates/blog-post.js
    - src/templates/blog-post.test.js
    - src/gatsby-node.test.js
  modified:
    - package.json
    - package-lock.json
    - gatsby-config.js
    - gatsby-node.js
    - src/components/Header.js
    - src/components/Header.test.js
    - src/assets/scss/libs/_mixins.scss
    - src/assets/scss/layout/_header.scss
    - AGENTS.md
    - ANALYSIS.md
  renamed:
    - src/pages/{markdownRemark.frontmatter__slug}.jsx -> src/templates/shared-detail.jsx
decisions:
  - Both detail templates live in src/templates/, never under src/pages/, because a {model.field} filename there triggers Gatsby's File System Route API and overrides programmatic routing.
  - Route links are real Gatsby Links in a sibling group, not entries in the SPA section array, so they keep middle-click and copy-link-address.
  - Blog dates are formatted in JS with a local-midnight parse; no formatString argument anywhere.
  - Feed filter is required, not defensive: without it all 17 slugged markdown files ship as feed items and the build still exits 0.
metrics:
  duration: '~2.5h'
  completed: 2026-10-01
---

# Phase 03 Plan 01: Blog vertical slice with RSS summary

Shipped the first real blog: one seed post, a `/blog` listing, a post template, an RSS
feed, and the three header route links that make `/work` and `/projects` reachable. Also
fixed a routing bug that predated this plan and silently owned every markdown page.

## Accomplishments

- **Blog post template** (`src/templates/blog-post.js`) with a `<time>` meta line, an
  `&larr; All posts` back link, tag chips, `og:type=article`, canonical on `mollo.tech`,
  and an excerpt fallback when a post has no description. 8 tests.
- **`/blog` listing** (`src/pages/blog.js`) filtered to `^/blog/` and sorted by
  `frontmatter.date DESC`, with a plain-anchor subscribe link to `/rss.xml` (not a Gatsby
  `Link`: the file is written by `onPostBuild` and has no page-data entry). 7 tests.
- **RSS feed** at `/rss.xml` via `gatsby-plugin-feed`, scoped with `match: '^/blog'` so the
  auto-injected `<link rel="alternate">` appears only on blog pages, not all 21 pages.
  Exactly 1 item, body passed through as `content:encoded`.
- **Header route links**: `All Work`, `All Projects`, `Blog` as real anchors after the four
  unchanged SPA buttons, styled by a new `nav-item` mixin applied at both the desktop and
  xsmall breakpoints.
- **Moved the shared detail template** out of `src/pages/` (see deviations), which is the
  actual reason blog routing works now.
- **Corrected `AGENTS.md` and `ANALYSIS.md`**, which both documented a structure that no
  longer existed.

## Deviations from Plan

### 1. Rule 1 (bug): the File System Route API was overriding all blog routing

- **Found during:** Task 8 build gate.
- **Issue:** `createPage` correctly selected `blog-post.js` for `/blog/building-lil-chef`,
  but Gatsby's File System Route API saw `src/pages/{markdownRemark.frontmatter__slug}.jsx`
  as a route generator, auto-created a page for every `markdownRemark` node, and resolved
  those after `createPages`. Every blog post rendered with the work/project template:
  `og:type=website`, no `<time>`, no back link. The build exited 0 and all unit tests passed.
- **Evidence:** `onCreatePage` logged the blog path pointing at the shared template directly
  after `createPages` had called `createPage` with `blog-post.js`; and `/intro`, `/about`,
  `/contact` existed in `public/` with no `src/pages/*.js` source.
- **Fix (user-approved):** `git mv` to `src/templates/shared-detail.jsx`, contents unchanged,
  `createPages` updated. Commit `a6b8a36`.
- **Also:** recorded as critical fact 9 and task 8a in `03-PLAN-01.md` so a future executor
  does not "fix" it back.

### 2. Rule 1 (bug): `useLocation` broke every static HTML render

- **Found during:** Task 8 build gate.
- **Issue:** I added `useLocation` to `Header.js` for active-route marking. Gatsby's SSR
  entry does not export it, so `npm run build` failed on `/` with
  `(0, gatsby_browser_entry.useLocation) is not a function`.
- **Fix:** removed it. Header only renders on `/`, where no route link can ever be active, so
  the feature was dead weight that also broke SSR. The plan never asked for active marking.
  Commit `962040d`.

### 3. Rule 1 (bug): anchor resets sat outside the mixin

- **Issue:** `text-decoration`, `width` and the `:after` underline-grow reset were written in
  the desktop rule instead of inside `nav-item`, so they never reached the xsmall block and
  the global dotted-underline `a` rule still applied.
- **Fix:** moved all three into the mixin. Commit `962040d`.

### 4. Plan defect: the "14 suites" target is wrong

- **Issue:** the plan counted `Header.test.js` as a new suite, but that file already existed
  and was extended. Only 3 test files are new.
- **Actual:** **13 suites, 64 tests** (baseline was 10 suites, 41 tests). Recorded as
  critical fact 10 in `03-PLAN-01.md`.

### 5. Test-only choice: `Head` asserted via `renderToStaticMarkup`

- Rendering `Head` through `@testing-library/react` produced a `validateDOMNesting` warning
  for the `<html lang="en" />` element it legitimately renders. Server rendering asserts the
  same markup with no warning.

### 6. Cosmetic: Head tests in `Header.test.js`

- The plan's grep for `onOpenArticle).not.toHaveBeenCalled` cannot match the file's existing
  `mockOnOpenArticle` name. The new test uses its own `onOpenArticle` local, which satisfies
  both the grep and the plan's "do not modify the 5 original tests" constraint.

## Verification

All commands run from the repo root. Baseline before this plan was 10 suites / 41 tests,
0 lint problems, format clean, 19 sitemap URLs.

| Check | Result |
| --- | --- |
| `npm run validate:fast` | exit 0 |
| `npm test` | 13 suites, 64 tests, 0 failed |
| `npm run lint` | 0 errors, 0 warnings |
| `npm run format:check` | clean |
| `npm run build` | exit 0, 23/23 static pages, no "query will not be run" warning |
| Sitemap URLs | 21 (baseline 19, +`/blog/` and `/blog/building-lil-chef/`) |
| RSS items | 1, no `/projects/` or `/work/` URLs present |
| Post page | `component---src-templates-blog-post-js`, `og:type=article`, `<time>` present, `All posts` link present |
| Route set | 22 routes, diff against pre-move set is identical |
| Regression | `/projects/lil-chef` and `/work/havocai` still emit `Back to Home` |
| Nav | `index.html` has exactly 4 `<li><button` plus 3 anchors |
| House style | 0 em dashes in the seed post |
| `src/pages/` | no `{...}` File System Route API file remains |

## Known Stubs

None. The slice is fully wired: the listing reads real GraphQL data, the post page renders
real markdown, and the feed is generated from real nodes.

## Deferred Issues

- `npm install` reported 79 audit vulnerabilities and some React peer warnings. Out of scope
  for this plan; no remediation attempted.
- Prettier reports formatting drift in 14 `.scss` files, including `_mixins.scss`. Pre-existing
  at baseline. `format:check` only covers `**/*.js`, so this does not affect the gate.
- `.planning/STATE.md` and `ROADMAP.md` still describe the shared template at its old path.
  Left untouched by instruction; the orchestrator owns those writes.

## Self-Check: PASSED

All 12 commits present, all created files exist, and every committed path was verified against
a clean production build.

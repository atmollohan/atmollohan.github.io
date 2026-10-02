# Portfolio Upgrade Roadmap

**Project**: Andrew Mollohan Personal Portfolio  
**Technology**: Gatsby v5.16.0, React 18, SCSS, Markdown content  
**Current State**: Phases 1, 2, and 2.5 complete. Phase 3 slice 1 shipped 2026-10-01: blog, RSS feed, and header route links are live. PF-15 (case study format) and PF-16 (project filtering) not started.

---

## Phases

- [x] **Phase 1: Quick Wins** - Low effort, high impact improvements
- [x] **Phase 2: Medium-term Enhancements** - Code quality and user experience
- [x] **Phase 2.5: Content Update** - Work history, projects, branding fixes (PR #71)
- [~] **Phase 3: Longer-term Additions** - Blog infrastructure and advanced features (3/5)

---

## Phase Details

### Phase 1: Quick Wins

**Goal**: Address immediate high-impact items with minimal effort

**Depends on**: Nothing (first phase)

**Requirements**: PF-01, PF-02, PF-03, PF-04, PF-05

**Success Criteria** (what must be TRUE):

1. All images are optimized and lazy-loaded with gatsby-plugin-image
2. Site loads with zero console errors
3. Lighthouse performance score > 90
4. All external links open in new tabs with proper rel="noopener"
5. favicon.png displays correctly in browser tab

**Plans**: Complete

---

### Phase 2: Medium-term Enhancements

**Goal**: Improve code quality, accessibility, and developer experience

**Depends on**: Phase 1

**Requirements**: PF-06, PF-07, PF-08, PF-09, PF-10, PF-11

**Success Criteria** (what must be TRUE):

1. ✅ Class component index.js converted to functional component with hooks
2. ✅ Accessibility audit passes with no critical issues (WCAG 2.1 AA)
3. ✅ Jest tests run successfully and cover key components
4. ✅ Sitemap.xml auto-generated for SEO
5. ✅ Open Graph and Twitter meta tags present on all pages
6. ✅ Site loads under 3 seconds on 3G

**Plans**: Complete

---

### Phase 2.5: Content Update

**Goal**: Fix work history, projects, and branding for accuracy

**Depends on**: Phase 2

**Success Criteria** (what must be TRUE):

1. ✅ All work roles have correct dates, titles, and descriptions
2. ✅ No em dashes in content (AI giveaway)
3. ✅ Projects ordered by deployment status (live apps first)
4. ✅ Tech stacks accurately reflect actual usage
5. ✅ All tests pass (41/41 across 10 suites)
6. ✅ PR #71 merged to main

**Plans**: Complete (PR #71 merged 2026-07-19)

---

### Phase 3: Longer-term Additions

**Goal**: Add blog infrastructure and advanced features

**Depends on**: Phase 2.5

**Requirements**: PF-12, PF-13, PF-14, PF-15, PF-16

**Success Criteria** (what must be TRUE):

1. ✅ Blog section with markdown posts and per-post SEO
2. ✅ RSS feed available at /rss.xml
3. ✅ Navigation updated with Blog link
4. ⬜ Case study format for blog posts
5. ⬜ Projects filterable by category on the existing `/projects` page

**Plans**: Slice 1 complete (`03-PLAN-01.md` → `03-01-SUMMARY.md`). Slice 2 not planned.

**Delivered in slice 1** (2026-10-01, 14 commits on `chore/docs-reconcile-and-canonical-domain`,
not pushed):

- `src/content/blog/` with a seed post at `/blog/building-lil-chef`
- `src/templates/blog-post.js` - blog-only template, `og:type=article`, `mollo.tech` canonical
- `src/pages/blog.js` - `/blog` listing, filtered to `^/blog/`, sorted by date descending
- `gatsby-plugin-feed` at `/rss.xml`, scoped with `match: '^/blog'`
- Header route links `All Work`, `All Projects`, `Blog` as real anchors beside the 4 SPA buttons
- `src/gatsby-node.test.js` unit test proving the blog/project/work routing split
- Shared detail template moved `src/pages/{markdownRemark.frontmatter__slug}.jsx` →
  `src/templates/shared-detail.jsx`

**Constraints that remain live for PF-15 and PF-16**:

- `createPages` in `gatsby-node.js` is now the only page creator. Both detail templates live in
  `src/templates/`. **No `{model.field}` filename may go back under `src/pages/`**: it is a File
  System Route API generator that resolves after `createPages` and silently overrides
  programmatic routing, and unit tests cannot catch it because they assert on `createPage`
  arguments rather than the component Gatsby finally resolves.
- Never import `useLocation` from `gatsby` at module scope in a component that renders in the
  static pass. Gatsby resolves the SSR entry during `npm run build` and it does not export it.
- `src/pages/projects.js` carries `style={{ display: 'none' }}`. PF-16 edits that file; decide
  explicitly whether to keep, remove, or route around it.
- PF-16 has a hard content prerequisite: there is no `category` frontmatter field today, so a
  `category` key must be added to all six files under `src/content/projects/` before any
  filtering code can be written. Whether `category` is a single value or a list, and what the
  initial vocabulary is, is a content decision to make with the user.
- PF-15 needs a decision on whether a case study is a distinct frontmatter `type` or a
  documented section convention inside `blog-post.js`.

---

## Requirements Summary

### Phase 1: Quick Wins (5 requirements)

| ID    | Requirement                              | Effort |
| ----- | ---------------------------------------- | ------ |
| PF-01 | Optimize images with gatsby-plugin-image | Low    |
| PF-02 | Fix console errors                       | Low    |
| PF-03 | Improve Lighthouse performance           | Low    |
| PF-04 | Add external link safety                 | Low    |
| PF-05 | Verify/fix favicon                       | Low    |

### Phase 2: Medium-term Enhancements (6 requirements)

| ID    | Requirement                              | Effort |
| ----- | ---------------------------------------- | ------ |
| PF-06 | Convert index.js to functional component | Medium |
| PF-07 | Accessibility improvements               | Medium |
| PF-08 | Add Jest tests                           | Medium |
| PF-09 | Add sitemap plugin                       | Low    |
| PF-10 | Add Open Graph/Twitter meta              | Low    |
| PF-11 | Performance optimization                 | Medium |

### Phase 2.5: Content Update (Completed)

- Fixed all work history across 6 roles
- Removed em dashes from all content
- Reordered projects by deployment status
- Created Home Lab project
- Fixed PCRI, ZeroNorth, Harness, Optum, We Roast Coffee details
- Added `order` and `description` fields to project frontmatter
- Fixed test failures (Main.test.js, Intro.test.js)
- Version bumped to 1.5.0

### Phase 3 (3 of 5 done)

| ID    | Requirement                       | Effort | Status |
| ----- | --------------------------------- | ------ | ------ |
| PF-12 | Add blog section                  | High   | Done   |
| PF-13 | Add RSS feed                      | Low    | Done   |
| PF-14 | Navigation updates (Blog link)    | Low    | Done   |
| PF-15 | Case study blog format            | Medium | Not started |
| PF-16 | Projects filtering by category    | Medium | Not started |

---

## Coverage

✓ All 16 requirements mapped  
✓ No orphaned requirements
✓ 13 of 16 done and verified in a production build

---

## Dependencies

```
Phase 1 (Quick Wins) ✓
    ↓
Phase 2 (Medium-term) ✓
    ↓
Phase 2.5 (Content Update) ✓ - PR #71
    ↓
Phase 3 (Longer-term) - 3/5 done
    ├── slice 1: blog slice, RSS, nav links ✓
    └── slice 2: PF-15 case study format, PF-16 project filtering
```

---

## Progress

| Phase                       | Plans Complete | Status      | Completed |
| --------------------------- | -------------- | ----------- | --------- |
| 1. Quick Wins               | 5/5            | ✓ Complete  | PF-01 through PF-05 |
| 2. Medium-term Enhancements | 6/6            | ✓ Complete  | PF-06, PF-07, PF-08, PF-09, PF-10, PF-11 |
| 2.5 Content Update          | Complete       | ✓ Complete  | PR #71 |
| 3. Longer-term Additions    | 3/5            | In progress | PF-12, PF-13, PF-14 (2026-10-01) |

---

## Future Improvements (Beyond Phase 3)
- TypeScript migration
- Accessibility audit (contrast ratios, ARIA labels)
- Image optimization/lazy loading improvements
- Update Gatsby to latest version
- Better favicon/branding (current is simple amber M monogram)
- Prettier drift in 14 `.scss` files (pre-existing; `format:check` only covers `**/*.js`)
- 79 audit vulnerabilities from `npm install`, untriaged

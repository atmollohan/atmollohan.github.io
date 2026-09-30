# Repository Analysis

Last verified against the codebase: 2026-09-29 (`main` at `fd9207b`).

## Overview

This is Andrew Mollohan's personal portfolio website - a Gatsby (React-based static site
generator) project. The site showcases skills, work experience, and interests. Content is
managed via Markdown files in `src/content/`, queried at build time with GraphQL.

The home page is a single-page app with four JS-toggled sections (Intro, Work, About,
Contact). Separate `/work` and `/projects` pages list detail items, each linking to a
per-item page generated from Markdown by the `createPage` loop in `gatsby-node.js`.

## Quick Stats

| Metric            | Value                                |
| ----------------- | ------------------------------------ |
| **Node.js**       | v24.8.0 (from `.nvmrc`)              |
| **Gatsby**        | 5.16.0                               |
| **React**         | 18.3.1                               |
| **Components**    | 13 (+ 10 test files)                 |
| **Pages**         | 6 (index, 404, work, projects, v2, slug template) |
| **Content Files** | 16 markdown (4 sections, 6 projects, 6 work roles) |
| **SCSS Files**    | 25                                   |
| **Tests**         | 10 suites, 41 tests, all passing     |
| **Version**       | 1.5.0                                |

## Directory Structure

```
/
├── .cache/                    # Gatsby build cache (gitignored)
├── .github/
│   └── workflows/
│       ├── build-deploy.yml   # Build + deploy to GitHub Pages (gh-pages branch)
│       └── pr-check.yml       # Lint + format check + test + build on PRs
├── .planning/                 # Local planning docs (ROADMAP, STATE, REQUIREMENTS)
├── node_modules/              # Dependencies (gitignored)
├── public/                    # Production build output (gitignored)
├── static/                    # Copied verbatim to / (CNAME, resume.1.8.0.pdf)
├── src/
│   ├── assets/
│   │   ├── css/               # font-awesome vendor CSS
│   │   ├── fonts/             # FontAwesome webfonts
│   │   └── scss/
│   │       ├── base/          # _page, _typography
│   │       ├── components/    # _box, _button, _form, _icon, _image, _list,
│   │       │                  #   _logo, _row, _table, _tags, _github
│   │       ├── layout/        # _bg, _footer, _header, _main, _wrapper
│   │       ├── libs/          # _vars, _functions, _mixins, _skel
│   │       ├── ie9.scss       # IE9 fallbacks
│   │       ├── noscript.scss  # No-JS styles
│   │       └── main.scss      # Entry point
│   ├── components/
│   │   ├── About.js           # About section
│   │   ├── Contact.js         # Contact section
│   │   ├── ContactForm.js     # GetForm.io form
│   │   ├── FluidImage.js      # Gatsby Image wrapper
│   │   ├── Footer.js          # Footer with version
│   │   ├── GitHubActivity.js  # Repo list
│   │   ├── Header.js          # Navigation header
│   │   ├── Intro.js           # Intro section
│   │   ├── layout.js          # Layout wrapper (skip link, external link safety)
│   │   ├── Main.js            # Main content container
│   │   ├── Projects.js        # Projects section on home page
│   │   ├── SocialLinks.js     # Social links
│   │   └── Work.js            # Work section
│   ├── content/
│   │   ├── about.md
│   │   ├── contact.md
│   │   ├── intro.md
│   │   ├── work.md            # SPA section source
│   │   ├── projects/          # configs, echo, games, home-lab, lil-chef, will-of-the-people
│   │   ├── work/              # harness, havocai, optum, pcri, we-roast-coffee, zeronorth
│   │   └── resume.1.8.0.txt   # Plain-text resume (PDF lives in static/)
│   ├── images/                # bg, portraits, gifs, favicon.svg
│   └── pages/
│       ├── 404.js
│       ├── index.js           # Main SPA page (functional, hooks)
│       ├── projects.js        # Standalone projects listing
│       ├── v2.js              # Placeholder
│       ├── work.js            # Standalone work listing
│       └── {markdownRemark.frontmatter__slug}.jsx  # Shared detail template
├── .nvmrc
├── .prettierrc                # trailingComma: es5, semi: false, singleQuote: true
├── AGENTS.md                  # Project conventions for AI agents
├── ANALYSIS.md
├── gatsby-config.js
├── gatsby-node.js             # createPage loop over allMarkdownRemark slugs
├── LICENSE
├── package.json
└── README.md
```

## Key Dependencies

### Production

- `gatsby` (5.16.0) - Static site generator
- `react` (18.3.1) + `react-dom` (18.3.1)
- `gatsby-plugin-image` (3.16.0) - Optimized images
- `gatsby-plugin-sharp` (5.16.0) - Image processing
- `gatsby-transformer-sharp` (5.16.0)
- `gatsby-source-filesystem` (5.16.0) - Filesystem source
- `gatsby-transformer-remark` (6.16.0) - Markdown processing
- `gatsby-plugin-manifest` (5.16.0) - PWA manifest
- `gatsby-plugin-sass` (6.16.0) - SCSS support (modern compiler API)
- `gatsby-plugin-sitemap` (6.16.0) - sitemap.xml
- `axios` (1.13.4) - HTTP client for the contact form
- `prop-types` (15.8.1) - Prop type checking
- `gh-pages` (6.3.0) - Manual GitHub Pages deployment

### Development

- `eslint` (8.57.0) + `eslint-config-prettier` + `eslint-plugin-react`
- `jest` (30.3.0) + `babel-jest` + `jest-environment-jsdom`
- `@testing-library/react` (16.3.2) + `@testing-library/jest-dom` (6.9.1)
- `identity-obj-proxy` (3.0.0) - CSS module mocking in tests
- `prettier` (3.8.1)

Note: `react-helmet`, `gatsby-plugin-react-helmet`, `react-confetti`, and `react-use` are
**not** installed. Page metadata uses the Gatsby Head API.

## npm Scripts

| Command                 | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| `npm run dev`           | Start Gatsby dev server (localhost:8000)              |
| `npm run build`         | Build production bundle to `/public`                  |
| `npm run clean`         | Clean cache + remove node_modules and package-lock    |
| `npm run format`        | Format all `.js` files with Prettier                  |
| `npm run format:check`  | Check formatting without fixing                       |
| `npm run lint`          | Run ESLint on all JS files                            |
| `npm test`              | Run Jest tests                                        |
| `npm run validate`      | format + lint + test + build                          |
| `npm run validate:fast` | format + lint + test                                  |
| `npm run deploy`        | Build with prefix paths, deploy to `gh-pages` branch  |

## CI/CD Pipeline

### build-deploy.yml

- **Trigger**: Push to `main` or manual dispatch
- **Node**: From `.nvmrc`
- **Steps**: `npm ci` -> `npm run build` -> deploy `/public` to `gh-pages`

### pr-check.yml

- **Trigger**: PR to `main` or manual dispatch
- **Node**: From `.nvmrc`
- **Steps**: `npm ci` -> `lint` -> `format --check` -> `test` -> `build`

## Content Architecture

### Pages (Single Page Application)

`src/pages/index.js` is a functional component (hooks: `useState`, `useEffect`,
`useCallback`, `useRef`). It renders four sections toggled via the `article` state and
`onOpenArticle` callback, with a click-outside listener to close:

1. **Intro** (`Intro.js`) - Personal introduction and toolkit
2. **Work** (`Work.js`) - Career history
3. **About** (`About.js`) - Personal background and education
4. **Contact** (`Contact.js`) - Contact form via GetForm.io

`Main.js` composes the four section components and owns the click-outside ref.

### Detail Pages

`gatsby-node.js` queries all `allMarkdownRemark` nodes and calls `createPage` for any
node with a `frontmatter.slug`, using `src/pages/{markdownRemark.frontmatter__slug}.jsx`
as the component. This covers both `/projects/*` and `/work/*` items.

The shared template renders `company` / `role` / `period` meta and a `tags` list from
frontmatter, then the markdown body via `dangerouslySetInnerHTML`. Its `Head` export uses
`https://mollo.tech` as the canonical site URL.

## Canonical Domain

The site is served at **`https://mollo.tech`**, configured through `static/CNAME`.
`https://atmollohan.github.io` 301-redirects to it, so `mollo.tech` is the canonical
origin. All sitemap, `og:url`, and `og:image` values should use `mollo.tech`.

Fixed on 2026-09-29: `gatsby-config.js` `siteUrl` and the `og:url` / `og:image` tags in
`src/pages/index.js` were still pointing at the redirecting `atmollohan.github.io`, which
made the live sitemap advertise the wrong canonical domain for all 20 URLs.

### Content Sync

Markdown in `src/content/` is the single source of truth. `Intro.js`, `About.js`,
`Work.js`, `Contact.js`, and `Projects.js` each use `StaticQuery` +
`dangerouslySetInnerHTML` to render markdown. Edit the markdown, not the components.

Caveat: `Work.js` and `Projects.js` build their own meta lines from frontmatter rather
than rendering the markdown body, so `company` / `role` / `period` / `tags` frontmatter
fields must be kept in sync for the listing pages.

## Known Issues & Considerations

### 1. Unused Components

- `FluidImage.js` - appears unused
- `v2.js` - placeholder page (still published, marked `noindex`)

### 2. Sitemap and manifest

- `gatsby-plugin-sitemap` is configured and emits `sitemap.xml`
- Manifest icon is `src/images/favicon.svg` with theme color `#c46a3c`

### 3. Contact Form

- Posts to external GetForm.io endpoint
- Submission handled with axios using `.then()/.catch()`

Lint is clean: `npm run lint` reports 0 errors and 0 warnings.

## Common npm Issues & Solutions

### Issue: Outdated Packages

```bash
npm outdated
npm install package@latest   # update specific package
```

### Issue: Node Version Mismatch

```bash
nvm use      # .nvmrc is v24.8.0
nvm install
```

### Issue: Cache Issues

```bash
npm run clean   # gatsby clean + remove node_modules
```

### Issue: Build Failures

```bash
npm run clean && npm install
```

## Styling Architecture

### Breakpoints (from `_skel.scss`)

| Name      | Width             |
| --------- | ----------------- |
| `xlarge`  | max-width: 1680px |
| `large`   | max-width: 1280px |
| `medium`  | max-width: 980px  |
| `small`   | max-width: 736px  |
| `xsmall`  | max-width: 480px  |
| `xxsmall` | max-width: 360px  |

### Color Palette (from `_vars.scss`)

| Token         | Value                                  |
| ------------- | -------------------------------------- |
| `bg`          | #1e1814                                |
| `bg-alt`      | #151210                                |
| `bg-card`     | #2a221c                                |
| `fg`          | #f5ede4                                |
| `fg-bold`     | #faf4ed                                |
| `fg-light`    | rgba(245, 237, 228, 0.6)               |
| `border`      | #f5ede4                                |
| `accent`      | #c46a3c (terracotta)                   |
| `accent-hover`| #d47a4c                                |

## Design Attribution

- Template: [gatsby-starter-dimension](https://github.com/codebushi/gatsby-starter-dimension)
- Base design: [HTML5 UP Dimension](https://html5up.net)

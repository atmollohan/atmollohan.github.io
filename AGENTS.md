# AGENTS.md - Andrew Mollohan's Portfolio

## Overview

This is Andrew Mollohan's personal portfolio website built with Gatsby (React-based static site generator). The site showcases his skills, work experience, and interests. Content is managed via Markdown files.

## Project Setup

### Prerequisites

- Node.js (version in `.nvmrc`: `v24.8.0`)
- npm

### Installation

```bash
npm install
```

## Build/Lint/Test Commands

| Command                 | Description                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| `npm run dev`           | Start Gatsby development server (localhost:8000)                 |
| `npm run build`         | Build production bundle to `/public`                             |
| `npm run clean`         | Clean Gatsby cache and remove `node_modules`/`package-lock.json` |
| `npm run format`        | Format all `.js` files with Prettier                             |
| `npm run format:check`  | Check formatting without fixing                                  |
| `npm run lint`          | Run ESLint on all JS files                                       |
| `npm run test`          | Run Jest tests                                                   |
| `npm run validate`      | Run full validation (format, lint, test, build)                  |
| `npm run validate:fast` | Run fast validation (format, lint, test)                         |
| `npm run deploy`        | Build with prefix paths and deploy to `gh-pages` branch          |

### Running Tests

```bash
npm test
```

### CI/CD

- **Build/Deploy** (`build-deploy.yml`): Runs on push to `main` branch - builds and deploys to GitHub Pages (`gh-pages` branch)
- **PR Check** (`pr-check.yml`): Runs on PRs to `main` - runs `lint`, `format --check`, `test`, and `build`

## Code Style Guidelines

### Formatting (Prettier)

Configuration in `.prettierrc`:

- **Trailing commas**: ES5 (objects/arrays)
- **Semicolons**: No
- **Quotes**: Single quotes

Always run `npm run format` before committing JavaScript changes.

### File Naming

- **Components**: PascalCase (e.g., `Header.js`, `ContactForm.js`)
- **Pages**: camelCase (e.g., `index.js`, `v2.js`, `404.js`)
- **Config files**: kebab-case (e.g., `gatsby-config.js`)

### JavaScript Conventions

#### Imports

```javascript
// External packages
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// Internal modules (relative paths, no .js extension)
import Header from '../components/Header'
import Layout from '../components/layout'
import '../assets/scss/main.scss'
```

#### Components

- Use **functional components** for all components with hooks for state
- Use React hooks (`useState`, `useEffect`, `useCallback`, `useRef`) for state management
- Always define `propTypes` at the bottom of the file
- Mark required props with `.isRequired`

```javascript
// Functional component example
const MyComponent = ({ title, onAction }) => {
  return <div>{title}</div>
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func,
}

export default MyComponent
```

#### State Management

- Use React hooks (`useState`, `useEffect`, `useCallback`, `useRef`) for all components
- Clean up timeouts/intervals in `useEffect` cleanup function or `useCallback`

#### Async/Await and Promises

- Prefer `.then()/.catch()` for consistency with existing code (see `ContactForm.js`)
- Handle errors gracefully with user-facing messages

### React/Gatsby Patterns

#### StaticQuery for Data

```javascript
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery query={graphql`...`} render={(data) => <div>{children}</div>} />
)
```

#### Gatsby Image Plugin

Use `gatsby-plugin-image` and `gatsby-plugin-sharp` for optimized images.

### SCSS/Sass Conventions

#### Modern Sass Syntax

Uses `@use` (not `@import`) for modern Sass API:

```scss
@use 'sass:meta';
@use 'libs/vars';
@use 'libs/functions';
@use 'libs/mixins';
```

#### File Structure

```
src/assets/scss/
├── main.scss           # Main entry point
├── base/               # Base styles (_page.scss, _typography.scss)
├── components/         # Reusable UI components (_button.scss, _form.scss)
├── layout/             # Layout components (_header.scss, _footer.scss)
├── libs/               # Utilities (_vars.scss, _functions.scss, _mixins.scss)
├── ie9.scss            # IE9 fallbacks
└── noscript.scss       # No-JS styles
```

#### Breakpoints

Predefined in `libs/_skel.scss`:

- `xlarge`: (max-width: 1680px)
- `large`: (max-width: 1280px)
- `medium`: (max-width: 980px)
- `small`: (max-width: 736px)
- `xsmall`: (max-width: 480px)
- `xxsmall`: (max-width: 360px)

### TypeScript

This project does **not** use TypeScript. All components use plain JavaScript with PropTypes for runtime type checking.

### Error Handling

- Use try/catch for async operations
- Display user-friendly error messages (not raw errors)
- Log errors appropriately for debugging

### Environment Variables

- Store secrets in `.env` (gitignored)
- Never commit API keys or tokens
- The contact form uses GetForm.io endpoint (external service)

## Git Workflow

### Branch Strategy

- `main`: Production-ready code
- Type prefixes: `feature/`, `chore/`, `fix/`, `refactor/`, `docs/`
- Use kebab-case: `feature/add-new-section`, `chore/upgrade-deps`
- Delete branches after merge

### Commit Messages

Follow conventional commit format (lowercase):

```
feat: add new portfolio section
fix: resolve mobile navigation bug
chore: update dependencies
```

### Pull Requests

- Always assign PRs to the repository owner (`atmollohan`)
- Run format, lint, test, and build before submitting PR
- Delete branch after merge

## Agent Preferences

### Always Do After Making Changes

1. Run `npm run format` - format code
2. Run `npm run lint` - check for errors
3. Run `npm test` - run tests
4. Run `npm run build` - verify build works

### Global Settings

- Use `.nvmrc` for Node.js version (currently `v24.8.0`)
- Global gitignore includes `.planning/` directory (local planning files)
- OpenCode watcher ignores `.planning/**` files

## Directory Structure

```
src/
├── assets/
│   └── scss/           # Sass stylesheets
├── components/         # Reusable React components (13 + 10 test files)
├── content/           # Markdown content files
│   ├── about.md
│   ├── contact.md
│   ├── intro.md
│   ├── work.md
│   ├── projects/       # Per-project detail content
│   └── work/           # Per-role detail content
├── images/             # Static images and gifs
├── pages/              # Gatsby pages
│   ├── index.js            # SPA landing page
│   ├── 404.js
│   ├── blog.js             # Blog listing
│   ├── work.js
│   ├── projects.js
│   └── v2.js
└── templates/          # Detail page templates
    ├── blog-post.js       # Blog post detail (/blog/*)
    └── shared-detail.jsx  # Work and project detail (/work/*, /projects/*)
static/                 # Copied verbatim to / (CNAME, resume.1.8.0.pdf)
```

Both detail templates live in `src/templates/` and are driven by the `createPage` loop in
`gatsby-node.js`, which creates a page for every markdown file that has a `frontmatter.slug`
and picks the template by slug prefix.

**No file under `src/pages/` may use the `{model.field}` naming pattern.** Gatsby's File
System Route API treats any file in `src/pages/` named `{...}` as a route generator and
auto-creates a page for every matching node. That runs after `gatsby-node.js` `createPages`,
so it silently overwrites programmatic routing. This repo was bitten by exactly that: the
shared template was originally named `{markdownRemark.frontmatter__slug}.jsx`, which
overrode the blog routing and made every `/blog/*` post render with the work/project
template. It now lives at `src/templates/shared-detail.jsx`.

## Content Management

Content is stored as Markdown in `src/content/`. Each file has YAML frontmatter:

```markdown
---
slug: '/intro'
title: 'Intro'
---
```

### Content Frontmatter by Type

SPA sections (`intro.md`, `about.md`, `work.md`, `contact.md`):

```yaml
slug: '/intro'
title: 'Intro'
```

Project and work detail pages (`src/content/projects/*.md`, `src/content/work/*.md`):

```yaml
slug: '/projects/lil-chef'
title: 'Lil Chef'
company: 'Side Project'
role: 'Creator'
period: 'Ongoing'
order: 2                    # projects only, ASC sort
description: 'One line.'
tags: ['Next.js', 'TypeScript']
```

**Editing rule**: change the markdown, not the components. `Intro.js`, `About.js`,
`Work.js`, `Contact.js`, and `Projects.js` all render markdown via `StaticQuery` +
`dangerouslySetInnerHTML`, so content is single-sourced from `src/content/`.

Note: `Work.js` and `Projects.js` hardcode their own meta lines
(`company | role | period`, tags) from frontmatter rather than rendering the markdown
body, so frontmatter fields must stay in sync for those listings.

## Useful Links

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Prettier Docs](https://prettier.io/docs/en/index.html)

## Project Status

### Completed

- Terracotta accent palette (`#c46a3c`) replacing the original amber
- Functional components with hooks (useState, useEffect, useCallback, useRef)
- 10 Jest test suites, 41 tests, all passing
- Click-outside-to-close article functionality
- Separate `/work` and `/projects` pages plus per-item detail pages
- Content lives in `src/content/` markdown, queried via GraphQL in components

### Current State (2026-09-29)

- `npm test` 41/41, `npm run lint` 0 errors 0 warnings, `npm run format:check` clean
- Site is served at `https://mollo.tech` (via `static/CNAME`); `atmollohan.github.io` 301s
  to it. Use `mollo.tech` as the canonical origin in metadata and sitemaps.
- Phase 3 (blog, RSS, nav link, case study format, project filtering) not started
- See `.planning/ROADMAP.md` and `.planning/STATE.md` for current phase status

### Future Improvements

- TypeScript migration
- Blog section (Phase 3)
- Project category filtering (Phase 3)
- Dark mode toggle
- Client-side search
- Update Gatsby to latest version

# Repository Analysis

## Overview

This is Andrew Mollohan's personal portfolio website - a Gatsby (React-based) static site generator project. The site showcases skills, work experience, and interests with content managed via Markdown files.

## Quick Stats

| Metric            | Value                                |
| ----------------- | ------------------------------------ |
| **Node.js**       | v24.8.0 (from `.nvmrc`)              |
| **Gatsby**        | 5.16.0                               |
| **React**         | 18.3.1                               |
| **Components**    | 12                                   |
| **Pages**         | 4 (index, v2, 404, dynamic template) |
| **Content Files** | 4 markdown files                     |
| **SCSS Files**    | 19                                   |

## Directory Structure

```
/
├── .cache/                    # Gatsby build cache (gitignored)
├── .github/
│   └── workflows/
│       ├── build-deploy.yml   # Deploys to GitHub Pages (master branch)
│       └── pr-check.yml       # Format + build check on PRs
├── .vscode/                   # Empty (for VS Code settings)
├── node_modules/              # Dependencies (gitignored)
├── public/                   # Production build output (gitignored)
├── scripts/                  # Empty (for custom scripts)
├── src/
│   ├── assets/scss/
│   │   ├── base/             # _page.scss, _typography.scss
│   │   ├── components/       # _box, _button, _form, _icon, _image, etc.
│   │   ├── layout/           # _bg, _footer, _header, _main, _wrapper
│   │   ├── libs/             # _vars, _functions, _mixins, _skel
│   │   ├── ie9.scss
│   │   ├── noscript.scss
│   │   └── main.scss         # Entry point
│   ├── components/
│   │   ├── About.js          # About section component
│   │   ├── Confetti.js      # Confetti effect on intro
│   │   ├── Contact.js        # Contact section component
│   │   ├── ContactForm.js   # Form with GetForm.io integration
│   │   ├── FluidImage.js    # Gatsby Image component (unused?)
│   │   ├── Footer.js        # Footer with credits
│   │   ├── Header.js        # Navigation header
│   │   ├── Intro.js         # Intro section component
│   │   ├── layout.js        # Main layout wrapper
│   │   ├── Main.js          # Main content container
│   │   ├── SocialLinks.js   # LinkedIn, GitHub, Instagram links
│   │   └── Work.js          # Work history component
│   ├── content/
│   │   ├── about.md          # About page content
│   │   ├── contact.md        # Contact page content
│   │   ├── intro.md          # Intro page content
│   │   ├── work.md           # Work history content
│   │   ├── post-1.md        # Test post (unused)
│   │   ├── resume.current.v1.8.pdf
│   │   └── resume.current.v1.8.txt
│   ├── images/
│   │   ├── bg.jpg
│   │   ├── buGrad.jpg
│   │   ├── fampiece-crop.jpg
│   │   ├── fiverings.jpg
│   │   ├── ikonStash.jpg
│   │   ├── overlay.png
│   │   ├── pioneers.jpg
│   │   ├── favicon.ico     # PWA icon
│   │   ├── wholefam.jpg
│   │   ├── wholeFamSki.jpg
│   │   └── gifs/             # cool.gif, cool2.gif, cool3.gif, cool4.gif, bw1.gif
│   └── pages/
│       ├── 404.js
│       ├── index.js          # Main SPA page (class component)
│       ├── v2.js             # Placeholder for future redesign
│       └── {markdownRemark.frontmatter__slug}.jsx  # Dynamic blog template
├── .gitignore
├── .nvmrc                    # Node v24.8.0
├── .prettierrc               # trailingComma: es5, semi: false, singleQuote: true
├── AGENTS.md                 # Project conventions for AI agents
├── gatsby-config.js
├── LICENSE
├── package.json
└── README.md
```

## Key Dependencies

### Production

- `gatsby` (5.16.0) - Static site generator
- `react` (18.3.1) + `react-dom` (18.3.1)
- `react-helmet` (6.1.0) - Document head management
- `gatsby-plugin-react-helmet` (6.16.0)
- `gatsby-plugin-image` (3.16.0) - Optimized images
- `gatsby-plugin-sharp` (5.16.0) - Image processing
- `gatsby-transformer-sharp` (5.16.0)
- `gatsby-source-filesystem` (5.16.0) - File sourcing
- `gatsby-transformer-remark` (6.16.0) - Markdown processing
- `gatsby-plugin-manifest` (5.16.0) - PWA manifest
- `gatsby-plugin-sass` (6.16.0) - SCSS support
- `react-use` (17.6.0) - React hooks library
- `react-confetti` (6.4.0) - Confetti effect
- `axios` (1.13.4) - HTTP client (for contact form)
- `prop-types` (15.8.1) - Prop type checking
- `gh-pages` (6.3.0) - GitHub Pages deployment

### Development

- `prettier` (3.8.1) - Code formatting

## npm Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev` | Start Gatsby dev server (localhost:8000)             |
| `npm run build`   | Build production bundle to `/public`                 |
| `npm run clean`   | Clean cache + remove node_modules                    |
| `npm run format`  | Format all `.js` files with Prettier                 |
| `npm run deploy`  | Build with prefix paths, deploy to `gh-pages` branch |
| `npm run test`    | Exit with error (no tests configured)                |

## CI/CD Pipeline

### build-deploy.yml

- **Trigger**: Push to `main` branch or manual dispatch
- **Node**: Uses `.nvmrc` file
- **Steps**: `npm ci` → `npm run build` → Deploy to `master` branch

### pr-check.yml

- **Trigger**: PR to `main` branch or manual dispatch
- **Node**: Uses `.nvmrc` file
- **Steps**: `npm ci` → `npm run format` → `npm run build`

## Content Architecture

### Pages (Single Page Application)

The main site is a single-page app with 4 sections toggled via JavaScript state:

1. **Intro** (`Intro.js`) - Personal introduction with technical interests
2. **Work** (`Work.js`) - Career history (Harness, ZeroNorth, Optum, We Roast Coffee)
3. **About** (`About.js`) - Personal background and education
4. **Contact** (`Contact.js`) - Contact form with GetForm.io

### Content Sync

Content exists in TWO places:

1. **Markdown files** (`src/content/*.md`) - Original source
2. **React components** (`src/components/*.js`) - Hardcoded content

**Note**: The markdown files appear to be legacy/backup content. The actual displayed content is hardcoded in the React components. Changes should be made in both places to keep them in sync.

## Known Issues & Considerations

### 1. Content Duplication

The same content appears in both:

- `src/content/*.md` files
- `src/components/*.js` files (hardcoded)

The markdown files are parsed by `gatsby-transformer-remark` but appear unused by the components. The `{slug}.jsx` template suggests blog posts could be generated, but is not actively used.

### 2. Unused Components

- `FluidImage.js` - Gatsby Image component that appears unused
- `post-1.md` - Test markdown file with no content
- `v2.js` - Placeholder page for potential redesign
- `scripts/` directory - Empty

### 3. Deprecated Patterns

- `react-helmet` - Being replaced by Gatsby Head API in newer versions
- Class component (`index.js`) - Modern Gatsby uses functional components with hooks
- `StaticQuery` - Replaced by `useStaticQuery` hook in modern Gatsby

### 4. Contact Form

- Uses external GetForm.io service (`https://getform.io/f/6e8ba933-607a-4319-98a6-d36450623767`)
- Form submission handled by axios
- Consider migrating to Gatsby Head API for form handling

### 5. PWA Configuration

- Manifest icon: `src/images/favicon.ico`
- Theme color: `#f59e0b` (purple)
- Background color: `#f59e0b` (purple)

## Common npm Issues & Solutions

### Issue: Outdated Packages

```bash
# Check outdated
npm outdated

# Update specific package
npm install package@latest

# Update all (careful!)
npm update
```

### Issue: Node Version Mismatch

```bash
# Use correct Node version
nvm use

# Or install if not present
nvm install
```

### Issue: Cache Issues

```bash
# Clean Gatsby cache
npm run clean
# or
gatsby clean
```

### Issue: Build Failures

```bash
# Full reset
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

| Token      | Value                 |
| ---------- | --------------------- |
| `bg`       | #1b1f22               |
| `bg-alt`   | #000000               |
| `fg`       | #ffffff               |
| `fg-bold`  | #ffffff               |
| `fg-light` | rgba(255,255,255,0.5) |

## Design Attribution

- Template: [gatsby-starter-dimension](https://github.com/codebushi/gatsby-starter-dimension)
- Base design: [HTML5 UP Dimension](https://html5up.net)

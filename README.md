# Andrew Mollohan Portfolio

Personal portfolio website built with Gatsby.

## Tech Stack

- **Framework**: Gatsby 5 (React 18)
- **Styling**: Sass/SCSS
- **Testing**: Jest with React Testing Library
- **Linting**: ESLint with Prettier
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version in `.nvmrc`: `v24.8.0`)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:8000/ to view the site.

### Commands

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start development server            |
| `npm run build`  | Build for production                |
| `npm run clean`  | Clean cache and remove node_modules |
| `npm run format` | Format code with Prettier           |
| `npm run lint`   | Run ESLint                          |
| `npm run test`   | Run Jest tests                      |
| `npm run deploy` | Build and deploy to GitHub Pages    |

## Project Structure

```
src/
├── assets/scss/       # Sass stylesheets
├── components/        # React components
├── content/           # Markdown content files
├── images/            # Static images
├── pages/             # Gatsby pages
└── templates/         # Page templates
```

## License

MIT License - See [LICENSE](LICENSE) for details.

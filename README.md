# Vlad Portfolio

A production-ready, single-page developer portfolio built with Next.js. Designed for recruiters and hiring managers — concise sections for profile, skills, experience, projects, and contact, with optional client-side PDF CV generation.

## Features

- **Single-page layout** — Hero, About, What I do, Tech Stack, Experience, Projects, Education, Key Strengths, and Contact
- **Centralized content** — all copy and structured data live in one typed TypeScript file
- **Plain-text sections** — multi-paragraph content stored as strings with `whitespace-pre-line` rendering
- **PDF CV export** — `DownloadCVButton` generates a PDF via jsPDF, aligned with on-page content
- **Static export** — fully static output suitable for edge hosting and CDN delivery
- **Dual deployment** — Vercel (root path) and GitHub Pages (subdirectory via `basePath`)

## Tech Stack

| Layer     | Technologies                      |
| --------- | --------------------------------- |
| Framework | Next.js 16 (App Router), React 19 |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS 4                    |
| PDF       | jsPDF                             |
| Tooling   | Bun, ESLint                       |
| Hosting   | Vercel, GitHub Pages              |

## Prerequisites

- [Bun](https://bun.sh) 1.x (package manager and runtime)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/VladKyriienko/vlad-portfolio.git
cd vlad-portfolio

# Install dependencies
bun install

# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `bun run dev`   | Start the development server               |
| `bun run build` | Create a static production build in `out/` |
| `bun run start` | Serve the production build locally         |
| `bun run lint`  | Run ESLint                                 |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout, fonts, and metadata
│   ├── page.tsx        # Portfolio page and section layout
│   ├── not-found.tsx   # 404 page
│   └── globals.css     # Global styles and design tokens
├── components/
│   └── DownloadCVButton.tsx  # Client-side PDF generation
└── lib/
    ├── content-data.ts # Portfolio content (single source of truth)
    └── base-path.ts    # Asset URL helper for GitHub Pages
```

## Customization

All portfolio content is defined in **`src/lib/content-data.ts`**. Update this file to change:

- Name, title, location, and contact links (email, LinkedIn, GitHub)
- About, What I do, Tech Stack, and Key Strengths (plain-text strings)
- Work experience entries
- Project entries grouped by section

### Project entry shape

Each project uses a consistent structure:

```ts
{
  name: 'Project Name',
  type: 'Full-Stack Web Application',
  role: 'Full-Stack Developer',
  stack: 'Next.js, TypeScript, ...',
  description: '...',
  built: `- Feature one\n- Feature two`,
  result: '...',
  github: 'https://github.com/...', // empty string if not available
  liveUrl: 'https://...',
}
```

The page layout in `src/app/page.tsx` reads from `contentData` — no need to edit section markup unless changing structure or design.

Add a profile photo at **`public/photo.jpg`** to include it in the generated PDF CV.

To enable PDF download on the page, import and render `<DownloadCVButton />` where needed.

## Deployment

### Vercel (recommended)

Connect the repository to Vercel. `vercel.json` configures Bun for install and build:

```json
{
  "installCommand": "bun install",
  "buildCommand": "bun run build"
}
```

No `NEXT_PUBLIC_BASE_PATH` is required — the site is served from the domain root.

### GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys on push to the `production` branch:

1. Sets `NEXT_PUBLIC_BASE_PATH=/vlad-portfolio`
2. Runs `bun run build`
3. Publishes the `out/` directory to GitHub Pages

Ensure GitHub Pages is enabled for the repository and the `production` branch workflow has Pages write permissions.

## License

Private project. All rights reserved.

# Vlad Portfolio

> Static developer portfolio built with Next.js — optimized for recruiters and hiring managers, with typed content, project case studies, and zero runtime server dependencies.

**Repository:** [github.com/VladKyriienko/vlad-portfolio](https://github.com/VladKyriienko/vlad-portfolio)  
**GitHub Pages:** [vladkyriienko.github.io/vlad-portfolio](https://vladkyriienko.github.io/vlad-portfolio/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Content Model](#content-model)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This is a personal portfolio for **Vladyslav Kyriienko**, a Full-Stack Developer. The site presents profile information, work experience, and selected projects in a fast, accessible, statically generated format.

The codebase is intentionally simple: no CMS, no database, no API routes. All content lives in TypeScript modules with strict types, which keeps the site easy to maintain, review in PRs, and deploy to any static host.

**Routes**

| Path                | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| `/`                 | Home — profile, experience, project summaries, contact     |
| `/projects/`        | Project index with cards grouped by category               |
| `/projects/[slug]/` | Individual project case study (pre-rendered at build time) |

---

## Features

- **Typed content-as-code** — profile and project data defined in TypeScript, not hardcoded in JSX
- **Reusable project model** — summary fields for the home page, extended `sections` for detail pages
- **Static Site Generation** — all pages exported to HTML at build time via `output: 'export'`
- **Dual-host support** — works on Vercel (root domain) and GitHub Pages (subdirectory via `basePath`)
- **Minimal dependencies** — Next.js, React, Tailwind CSS, and jsPDF only
- **Optional PDF CV** — client-side export component aligned with on-page content (`DownloadCVButton`)

---

## Architecture

### Static export first

`next.config.ts` sets `output: 'export'`, so `bun run build` produces a fully static site in `out/`. This means:

- No Node.js server required in production
- Fast CDN delivery and predictable hosting costs
- Project detail pages are generated via `generateStaticParams()` — no runtime data fetching

Trade-off: server-only Next.js features (API routes, dynamic SSR, ISR) are not used.

### Content separation

| Concern                        | Location                    | Used by                                 |
| ------------------------------ | --------------------------- | --------------------------------------- |
| Profile, experience, education | `src/lib/content-data.ts`   | Home page, PDF CV                       |
| Project definitions            | `src/app/projects/*.ts`     | Home, `/projects/`, `/projects/[slug]/` |
| Project registry & grouping    | `src/app/projects/index.ts` | All project views                       |
| Shared types                   | `src/lib/types.ts`          | Project modules and components          |

Projects are split into one file per case study. The registry (`index.ts`) controls display order and section grouping — adding a project is a data change, not a routing change.

### GitHub Pages compatibility

When `NEXT_PUBLIC_BASE_PATH` is set, Next.js serves assets from a subdirectory. A small helper (`src/lib/base-path.ts`) ensures plain `<img>` and `fetch()` URLs also respect `basePath`, which Next.js does not rewrite automatically.

---

## Tech Stack

| Layer           | Choice                                          |
| --------------- | ----------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org/) (App Router)  |
| UI              | [React 19](https://react.dev/)                  |
| Language        | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling         | [Tailwind CSS 4](https://tailwindcss.com/)      |
| PDF export      | [jsPDF](https://github.com/parallax/jsPDF)      |
| Package manager | [Bun](https://bun.sh/)                          |
| Linting         | ESLint + `eslint-config-next`                   |
| Hosting         | Vercel, GitHub Pages                            |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) 1.x

Node.js/npm can also run the project, but Bun is the documented and CI-tested package manager.

### Local development

```bash
git clone https://github.com/VladKyriienko/vlad-portfolio.git
cd vlad-portfolio
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build (local verification)

```bash
bun run build
```

Static output is written to `out/`. Serve it with any static file server to verify the export before deploying.

---

## Scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `bun run dev`   | Start the Next.js development server          |
| `bun run build` | Generate a static production build in `out/`  |
| `bun run start` | Start Next.js in production mode (post-build) |
| `bun run lint`  | Run ESLint                                    |

---

## Content Model

### Profile and sections

Edit **`src/lib/content-data.ts`** to update:

- Name, title, location, contact links
- About, What I do, Tech Stack, Key Strengths
- Work experience and education entries

Multi-line text uses plain strings rendered with `whitespace-pre-line` — no markdown parser required.

### Projects

Each project is a `ProjectDefinition` exported from its own file in `src/app/projects/`.

**Add a new project**

1. Create `src/app/projects/my-project.ts` and export a `ProjectDefinition` object.
2. Import it in `src/app/projects/index.ts` and append to `allProjects`.
3. Set `sectionTitle` to an existing section, or add a new title to `sectionOrder`.
4. Run `bun run build` — the `/projects/[slug]/` route is generated automatically.

**Schema** (`src/lib/types.ts`)

```ts
type ProjectDefinition = {
  slug: string; // URL segment, e.g. "my-project"
  sectionTitle: string; // Grouping label on home and /projects/
  name: string;
  type: string;
  role: string;
  stack: string;
  description: string; // Shown on home page and project cards
  built: string; // Bullet list; use \n for line breaks
  result: string;
  github: string; // Empty string if unavailable
  liveUrl: string;
  sections: Array<{
    heading: string;
    content: string;
    preLine?: boolean; // Preserve line breaks in detail view
  }>;
};
```

| Field set                                   | Rendered on                             |
| ------------------------------------------- | --------------------------------------- |
| `description`, `built`, `result`            | Home page project list                  |
| `sections`                                  | `/projects/[slug]/` via `ProjectDetail` |
| Card fields (`name`, `type`, `description`) | `/projects/` via `ProjectCard`          |

### PDF CV (optional)

`DownloadCVButton` is a client component that generates a PDF from `contentData` and `projectSections`. It is not mounted by default.

To enable it:

1. Import and render `<DownloadCVButton />` on the desired page.
2. Optionally add `public/photo.jpg` — included in the PDF header when present.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home page
│   ├── not-found.tsx
│   ├── globals.css          # Design tokens and base styles
│   └── projects/
│       ├── index.ts         # Registry, sections, slug helpers
│       ├── page.tsx         # /projects/
│       ├── [slug]/page.tsx  # Static project detail pages
│       └── *.ts             # One file per project
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDetail.tsx
│   ├── BackLink.tsx
│   └── DownloadCVButton.tsx
└── lib/
    ├── content-data.ts      # Profile content
    ├── types.ts             # Shared TypeScript types
    └── base-path.ts         # basePath helper for static assets
```

---

## Environment Variables

| Variable                | Required | Default | Purpose                                          |
| ----------------------- | -------- | ------- | ------------------------------------------------ |
| `NEXT_PUBLIC_BASE_PATH` | No       | `""`    | URL prefix for GitHub Pages subdirectory deploys |

Set to `/vlad-portfolio` when building for GitHub Pages. Leave unset (or empty) for Vercel and other root-domain hosts.

---

## Deployment

### Vercel (recommended)

1. Import the repository in Vercel.
2. Use the defaults from `vercel.json` — Bun install and `bun run build`.
3. Do **not** set `NEXT_PUBLIC_BASE_PATH`.

The site is served from the domain root with trailing slashes (`trailingSlash: true`).

### GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`:

| Trigger | `production` branch push, or manual `workflow_dispatch` |
| Build env | `NEXT_PUBLIC_BASE_PATH=/vlad-portfolio` |
| Output | `out/` uploaded to GitHub Pages |

**Setup checklist**

1. Enable GitHub Pages for the repository (source: GitHub Actions).
2. Ensure the workflow has `pages: write` and `id-token: write` permissions (already configured).
3. Push to `production` to deploy.

---

## License

Private project. All rights reserved.

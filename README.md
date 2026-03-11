# Portfolio for Recruiters

A simple one-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Suited for sharing with recruiters — Hero, About, Skills, Experience, Contact.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Bun** (package manager and runtime)

## Getting Started

```bash
# Install dependencies (if not already installed)
bun install

# Development mode
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Other Commands

```bash
# Production build (outputs static site to ./out)
bun run build

# Lint (ESLint)
bun run lint
```

The app uses **static export** (`output: 'export'`). After `bun run build`, deploy the **`out`** folder to any static host (Vercel, Cloudflare Pages, Netlify, etc.). On Vercel, the default build picks this up automatically; no extra config needed.

## Customization

1. **`src/app/page.tsx`** — replace placeholder content:
   - name and tagline in Hero;
   - About section text;
   - `skills` and `experience` arrays;
   - CV link (`/cv.pdf`), email, LinkedIn, Telegram.
2. Add **`public/cv.pdf`** for the “Download CV” button.

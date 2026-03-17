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
# Production build
bun run build

# Run production build locally
bun run start

# Lint (ESLint)
bun run lint
```

**Deploy on Vercel:** Connect the repo; `vercel.json` is set to use Bun for install and build. No extra settings needed.

## Customization

1. **`src/app/page.tsx`** — replace placeholder content:
   - name and tagline in Hero;
   - About section text;
   - `skills` and `experience` arrays;
   - CV link (`/cv.pdf`), email, LinkedIn, Telegram.
2. Add **`public/cv.pdf`** for the “Download CV” button.

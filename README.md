# MYHitch — Homepage

A premium, luxury-tech marketing homepage for **MYHitch**, a connected commerce
platform. Clean white/blue theme, a Three.js 3D hero, liquid-glass UI, and
GSAP scroll motion.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — design tokens + liquid-glass utilities in `src/app/globals.css`
- **Three.js** via `@react-three/fiber` + `@react-three/drei` — the hero scene
- **GSAP** + **ScrollTrigger** — scroll-reveal motion

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata, ambient background
    page.tsx          # all homepage sections
    globals.css       # theme tokens, .glass / .glass-soft / .glass-pill, buttons
  components/
    HeroScene.tsx     # Three.js scene: product boxes, category panels, connection lines
    HeroCanvas.tsx    # lazy (ssr:false) wrapper for the canvas
    Navbar.tsx        # frosted glass sticky nav
    Reveal.tsx        # GSAP ScrollTrigger reveal (supports stagger via [data-reveal])
    GlassCard.tsx     # reusable liquid-glass card
```

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build && npm start
```

## Deploy (free)

This is a standard static-friendly Next.js app — deploy free on **Vercel**:

1. Install the CLI (once): `npm i -g vercel`
2. From this folder: `vercel` (first run links/creates the project), then
   `vercel --prod` for a production URL.

Alternatively push to GitHub and import the repo at
[vercel.com/new](https://vercel.com/new) — every push gets a free preview URL.
Netlify and Cloudflare Pages also offer free Next.js hosting.

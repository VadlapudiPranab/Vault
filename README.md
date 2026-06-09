# Vault Productions Website

Premium React + TypeScript + Vite + Tailwind CSS homepage for Vault Productions.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Commands

```bash
npm install
npm run dev
npm run build
```

## Project Structure

```txt
src/
  App.tsx
  main.tsx
  index.css
  data.tsx
  components/
    Header.tsx
    HeaderNavItem.tsx
    Hero.tsx
    SayHelloAI.tsx
    WhatWeBuild.tsx
    AboutAccordionSection.tsx
    FeaturedGames.tsx
    FinalCTA.tsx
    Footer.tsx

public/
  logo/
  images/
  videos/
```

## Page Sections

- Header: sticky premium navigation with hover illumination
- Hero: scroll-scrubbed PLAY / FEEL / REMEMBER opener
- SayHelloAI: YouTube embeds, local video gallery, industry image marquee
- Services: image cards on desktop, compact toggles on mobile/tablet
- About: expandable accordion section
- Best of 2 Worlds: PC and mobile game showcase
- Final CTA: interactive wolf visual and project CTA
- Footer: compact links, email, and verified social URLs

## Media Notes

See `media-structure.json` for the image and video inventory, usage notes, and optimization guidance.

Heavy animated media is intentionally lazy-loaded or frame-reduced where possible:

- Hero WebP scrub samples up to 48 decoded frames.
- SayHelloAI local preview videos play only while visible.
- Large SayHelloAI motion WebP is lazy-loaded.

## Design System

- Background: `#030303`
- Text: white and white opacity scales
- Cyan accent: `#18C8FF`
- Orange accent: `#FF7A1A`
- Display font: Anton
- Body/UI font: Inter

## Contact

Default project email: `info@vaultgamesstudio.com`

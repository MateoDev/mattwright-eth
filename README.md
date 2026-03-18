# MATTWRIGHT.ETH

Personal blog for Matt Wright — founder, builder, and architect of agentic infrastructure.

**Live at:** [https://mattwright.eth.limo](https://mattwright.eth.limo)

## Overview

This is a statically-generated blog built with **Astro 6**, **Tailwind CSS**, and **TypeScript**. The design follows a custom aesthetic called **"Receipt Brutalism"** — sharp edges, no gradients, thermal receipt-style cards, and a monochromatic palette with amber accents.

## Tech Stack

- **Astro 6.x** — Static site generation
- **Tailwind CSS v4** — Styling with custom design tokens
- **TypeScript** — Type safety
- **MDX** — Rich content with React components
- **@tailwindcss/typography** — Beautiful prose styling

## Design System: Receipt Brutalism

### Colors
- `#F7F3E9` (cream) — Background
- `#0A0A0A` (dead black) — Text and borders
- `#D4A017` (amber) — Accent color
- `#FFFFFF` (white) — Card surfaces

### Fonts (Google Fonts)
- **Space Grotesk** — Headings and display text
- **Space Mono** — Metadata, labels, navigation
- **Inter** — Body text and article content

### Rules
- **NO border-radius** — Everything is sharp, 0px radius
- **NO gradients** — Flat colors only
- **NO box-shadows** — Use borders instead
- **Borders:** 1-2px solid black; key elements get 4px top borders
- **Cards:** Receipt-style with 2px borders and hover states

## Project Structure

```
src/
├── pages/
│   ├── index.astro          # Homepage: hero + post grid
│   ├── [slug].astro         # Dynamic article pages
│   └── about.astro          # About Matt
├── layouts/
│   ├── Base.astro           # HTML shell + meta tags
│   └── Post.astro           # Article layout with prose styling
├── components/
│   ├── Header.astro         # Navigation header
│   ├── Footer.astro         # Site footer
│   └── PostCard.astro       # Receipt-style blog card
├── content/
│   ├── config.ts            # Content collection schema
│   └── blog/                # Blog posts (MDX files)
│       ├── hello-world.mdx
│       ├── building-in-public.mdx
│       └── the-agentic-future.mdx
└── styles/
    └── global.css           # Tailwind + custom styles
```

## Development

### Prerequisites
- Node.js 18+ (or compatible runtime)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Adding New Blog Posts

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Article Title"
description: "A short description for SEO and previews"
date: 2026-03-18
category: "CATEGORY"
readingTime: 8
---

import Post from '../../layouts/Post.astro';
export const components = { wrapper: Post };

Your content here...
```

3. The post will automatically appear on the homepage and be accessible at `/{slug}`

### Frontmatter Fields

- **title** (string) — Article title
- **description** (string) — SEO description
- **date** (date) — Publication date (YYYY-MM-DD)
- **category** (string) — Category label (uppercase recommended)
- **readingTime** (number) — Estimated reading time in minutes

## Deployment

### Deploy to IPFS via Fleek

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to Fleek:
   - Go to [Fleek](https://fleek.co)
   - Connect your GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

3. Configure ENS:
   - Point `mattwright.eth` to your Fleek IPFS hash
   - Enable IPFS gateway: `mattwright.eth.limo`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Customization

### Update Personal Info

1. Edit `src/pages/about.astro` — Update bio, links, and credentials
2. Edit `src/components/Header.astro` — Change navigation links
3. Edit `src/components/Footer.astro` — Update social links

### Change Design Tokens

Edit `tailwind.config.mjs` to customize:
- Colors
- Fonts
- Border widths
- Typography settings

### Update Site Metadata

Edit `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://your-domain.com', // Update this
  // ...
});
```

## License

MIT License - Feel free to use this as a template for your own blog.

## Credits

Built by **Matt Wright** ([@mattwright_eth](https://twitter.com/mattwright_eth))

Design system: Receipt Brutalism
Stack: Astro + Tailwind + TypeScript
Deployed on: IPFS via Fleek

---

**Building the future of agentic infrastructure.**
Learn more: [EVM Systems](https://github.com/MateoDev) | [Gaia](https://github.com/MateoDev) | [AgentWork](https://github.com/MateoDev)

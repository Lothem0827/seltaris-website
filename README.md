# DataTools Seltaris Website

Next.js marketing site built from the official Figma design with **atomic components** and a **token-based Tailwind** design system.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Swiper.js (for `THIS IS A SLIDER` frames)

## Design tokens

Edit **`src/styles/tokens.css`** to change colors, typography, spacing, and border radius site-wide. Tokens are wired into Tailwind via `src/app/globals.css`.

## Project structure

```
src/
  components/
    atoms/       # Button, Badge, Heading, Text, Container, Eyebrow
    molecules/   # Logo, SplitIntro, ImageSlideCard, TabGroup, PricingCard, …
    organisms/   # SiteHeader, HeroSection, SliderSection, pricing, …
    templates/   # HomePage
  lib/
    assets.ts    # Image URLs (replace with /public assets for production)
    content/     # home.ts, sections.tsx (copy + slider data)
  styles/
    tokens.css   # Design system source of truth
```

## Homepage sections (in order)

1. Header, Hero, What is Seltaris, Services  
2. Feature slider (businesses → enterprise)  
3. Human Touch showcase + detail (tabs + cards)  
4. Altraservice showcase + performance slider  
5. Advanced Data Protection showcase + security slider  
6. Health Check workflow + detail slider  
7. Social proof (value props + testimonials sliders)  
8. Pricing cards, Footer  

## Sliders

Figma frames named **`THIS IS A SLIDER`** use Swiper with controls named:

- `THIS IS A SLIDER PREVIOUS BUTTON`
- `THIS IS A SLIDER NEXT BUTTON`

See `ContentSlider` and `SliderNavButtons`.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Assets

Figma MCP asset URLs expire after ~7 days. Download images from Figma into `public/` and update `src/lib/assets.ts` for production.

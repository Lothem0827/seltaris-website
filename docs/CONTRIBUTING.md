# Editing the Seltaris website

This project uses a **feature-first** structure. Most page copy, images, and layout live in one folder per route.

## Where to edit

| Route | Folder |
|-------|--------|
| `/` (homepage) | `src/features/home/` |
| `/seltaris-plus` | `src/features/seltaris-plus/` |
| `/human-touch` | `src/features/human-touch/` |
| `/altraservice` | `src/features/altraservice/` |
| `/advanced-data-protection` | `src/features/data-protection/` |
| `/design-made-simple` | `src/features/design-made-simple/` |
| `/health-check-report` | `src/features/health-check-report/` |
| `/services` | `src/features/services/` |
| `/address-validation`, `/address-quality-health-check-report` | `src/features/address-service/` |
| `/design-system` (dev reference) | `src/features/design-system/` |
| Global colors & spacing | `src/styles/tokens.css`, `src/app/globals.css` |
| Header & footer | `src/components/layout/` |
| Global nav icons & footer assets | `src/lib/site-assets.ts` |

Shared UI used across 3+ features lives in `src/components/shared/` (sliders, pricing cards, etc.).

Within a feature folder:

- **`sections/`** — page sections (headings, body copy, images, Tailwind classes)
- **`components/`** — UI used only on that page
- Image paths are written directly: `src="/images/home/hero-background.png"`

## Component rules

### 1. Three-strike rule

If a component is used in **fewer than 3 distinct features**, keep it in `src/features/[feature-name]/components/`. Move it to `src/components/` only on the third distinct use.

### 2. Multi-variant trap

Do not add more than 3 conditional props to change layout or styling. Duplicate into two simpler components instead.

### 3. Passthrough wrapper audit

Do not wrap third-party libraries without real app logic. Use `next/image`, Swiper, etc. directly in feature files.

### 4. Premature DRY

Do not abstract because syntax looks identical. If Feature A and Feature B can diverge independently, keep separate files even if they look similar today.

### 5. Single-use hooks

Keep `useState` / `useEffect` inside the component unless the hook is reused or contains substantial logic.

## Shared components (`src/components/`)

Only these stay global:

- **`ui/`** — Button, Text, Heading, Container, Badge, Eyebrow
- **`layout/`** — SiteHeader, FooterSection, navigation
- **`shared/`** — ContentSlider, SliderNavButtons, PricingCard, ServiceCard, CoreFeaturesSection, etc.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run build
```

Verify the build after structural changes.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design system

Living guide: `/design-system` (source in `src/lib/design-system/catalog.ts` and `src/components/organisms/design-system/`).

When adding or changing **tokens**, **sizing**, **atoms**, or **molecules**, update the design system in the same change:

1. `src/styles/tokens.css` / `component-tokens.css` and `globals.css` `@theme`
2. `src/lib/design-system/catalog.ts`
3. A live demo in `src/components/organisms/design-system/` when introducing a new component or variant

## Responsive design (desktop-first)

Tailwind breakpoints are configured **desktop-first** in `src/app/globals.css`:

- Unprefixed utilities target the **desktop** layout (design at 1200px+ first).
- `2xl` / `xl` / `lg` / `md` / `sm` are **max-width** overrides for progressively smaller viewports.
- Do not use removed min-width breakpoint semantics or `max-lg:` range variants.

Breakpoint thresholds (max-width):

| Prefix | Viewport |
|--------|----------|
| `2xl:` | ≤1535px |
| `xl:` | ≤1279px |
| `lg:` | ≤1023px |
| `md:` | ≤767px |
| `sm:` | ≤639px |

Reference: [Tailwind v4 desktop-first breakpoints](https://stackoverflow.com/questions/79607461/how-to-make-tailwindcss-v4-desktop-first-breakpoints).

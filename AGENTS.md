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

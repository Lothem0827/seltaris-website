import {
  COLOR_TOKENS,
  COMPONENT_INVENTORY,
  DESIGN_SYSTEM_SYNC_CHECKLIST,
  getComponentDemoId,
  LAYOUT_TOKENS,
  RADIUS_TOKENS,
  SPACING_TOKENS,
  TOKEN_SOURCE_FILES,
  TYPOGRAPHY_TOKENS,
  type ColorGroup,
  type ComponentLayer,
} from "@/lib/design-system/catalog";
import { cn } from "@/lib/utils";
import { DesignSystemAtomsShowroom } from "./DesignSystemAtomsShowroom";
import { DesignSystemComponentShowroom } from "./DesignSystemComponentShowroom";
import { DesignSystemMoleculesShowroom } from "./DesignSystemMoleculesShowroom";
import {
  DemoPanel,
  GuideSection,
  GuideSubheading,
  TokenCode,
} from "./DesignSystemPrimitives";

const COLOR_GROUPS: ColorGroup[] = [
  "Brand",
  "Text & Neutrals",
  "Surfaces",
  "Semantic",
];

function ColorSwatch({
  name,
  cssVar,
  tailwind,
  hex,
  description,
}: {
  name: string;
  cssVar: string;
  tailwind: string;
  hex: string;
  description?: string;
}) {
  const isLight =
    hex.toUpperCase() === "#FFFFFF" ||
    hex.toUpperCase() === "#F8F8FF" ||
    hex.toUpperCase() === "#F0F0FE" ||
    hex.toUpperCase() === "#E5E5FE" ||
    hex.toUpperCase() === "#F1F1F3" ||
    hex.toUpperCase() === "#EEF1FF";

  return (
    <article className="overflow-hidden rounded-radius-md border border-border bg-white">
      <div
        className="h-24 w-full border-b border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div className="space-y-2 p-4">
        <p className="font-body text-body-sm font-semibold text-text">{name}</p>
        <p
          className={cn(
            "font-label text-micro uppercase tracking-wider",
            isLight ? "text-paragraph" : "text-muted",
          )}
        >
          {hex}
        </p>
        <TokenCode className="block w-fit">{tailwind}</TokenCode>
        <TokenCode className="block w-fit text-body-sm">{cssVar}</TokenCode>
        {description ? (
          <p className="font-body text-body-sm text-paragraph">{description}</p>
        ) : null}
      </div>
    </article>
  );
}

export function DesignSystemOverviewSection() {
  return (
    <GuideSection
      id="overview"
      title="Overview & Identity"
      description="Living documentation for the Seltaris marketing site. Tokens are defined in CSS custom properties, exposed as Tailwind utilities via @theme in globals.css, and consumed by atoms and molecules across the app."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <DemoPanel label="Purpose">
          <ul className="space-y-3 font-body text-body text-paragraph leading-body">
            <li>
              Single source of truth for colors, type, spacing, and components
            </li>
            <li>
              Token-first styling — avoid arbitrary values in product code
            </li>
            <li>Composable primitives in src/components/atoms and molecules</li>
            <li>Tailwind v4 — no tailwind.config.js; theme lives in CSS</li>
          </ul>
        </DemoPanel>
        <DemoPanel label="Token source files">
          <ul className="space-y-2">
            {TOKEN_SOURCE_FILES.map((file) => (
              <li key={file}>
                <TokenCode>{file}</TokenCode>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-radius-sm bg-brand-light px-4 py-3">
              <p className="font-label text-label text-brand-dark">
                Mint Grotesk
              </p>
              <p className="font-display text-body-sm font-bold text-text">
                Display / headings
              </p>
            </div>
            <div className="rounded-radius-sm bg-surface-muted px-4 py-3">
              <p className="font-label text-label text-paragraph">DM Sans</p>
              <p className="font-body text-body-sm text-text">
                Body copy, labels & badges
              </p>
            </div>
          </div>
        </DemoPanel>
      </div>

      <DemoPanel label="Keeping this guide updated" className="mt-6">
        <p className="mb-4 font-body text-body-sm text-paragraph">
          When you add or change tokens, sizing, or UI primitives, update the
          design system in the same PR:
        </p>
        <ol className="list-decimal space-y-2 pl-5 font-body text-body-sm text-paragraph">
          {DESIGN_SYSTEM_SYNC_CHECKLIST.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </DemoPanel>
    </GuideSection>
  );
}

export function DesignSystemColorsSection() {
  return (
    <GuideSection
      id="colors"
      title="Color Palette"
      description="Core system colors mapped from CSS variables to Tailwind utilities. Edit values in tokens.css — the @theme block in globals.css propagates changes site-wide."
    >
      <div className="space-y-12">
        {COLOR_GROUPS.map((group) => {
          const tokens = COLOR_TOKENS.filter((token) => token.group === group);
          if (tokens.length === 0) return null;

          return (
            <div key={group}>
              <GuideSubheading>{group}</GuideSubheading>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {tokens.map((token) => (
                  <ColorSwatch key={token.cssVar} {...token} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </GuideSection>
  );
}

export function DesignSystemTypographySection() {
  return (
    <GuideSection
      id="typography"
      title="Typography"
      description="Two font families power the system. Use Heading and Text atoms for marketing pages; FeaturePageHeading (fp-*) for feature page layouts."
    >
      <GuideSubheading>Font families</GuideSubheading>
      <div className="mb-12 grid gap-4 md:grid-cols-2">
        {[
          {
            name: "Mint Grotesk",
            utility: "font-display",
            variable: "--font-mint-grotesk",
            sample: "Aa Bb Cc 123",
            sampleClass: "font-display",
          },
          {
            name: "DM Sans",
            utility: "font-body / font-label",
            variable: "--font-dm-sans",
            sample: "Aa Bb Cc 123",
            sampleClass: "font-body",
          },
        ].map((font) => (
          <DemoPanel key={font.variable}>
            <p className="mb-2 font-body text-body-sm font-semibold text-text">
              {font.name}
            </p>
            <p className={cn("mb-4 text-h1", font.sampleClass)}>
              {font.sample}
            </p>
            <TokenCode>{font.utility}</TokenCode>
            <TokenCode className="ml-2">{font.variable}</TokenCode>
          </DemoPanel>
        ))}
      </div>

      <GuideSubheading>Type scale</GuideSubheading>
      <div className="space-y-8">
        {TYPOGRAPHY_TOKENS.map((token) => (
          <div
            key={token.name}
            className="grid gap-4 border-b border-border pb-8 last:border-0 lg:grid-cols-[1fr_16rem]"
          >
            <div>
              <p className="mb-3 font-label text-label uppercase tracking-wider text-muted">
                {token.name} · {token.fontFamily}
              </p>
              <p className={token.classes}>{token.sample}</p>
            </div>
            <div className="space-y-2 lg:text-right">
              <TokenCode className="block lg:ml-auto lg:w-fit">
                {token.classes}
              </TokenCode>
              <p className="font-body text-body-sm text-paragraph">
                {token.cssSize}
              </p>
              <p className="font-body text-body-sm text-muted">{token.usage}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <GuideSubheading>Font weights in use</GuideSubheading>
        <div className="flex flex-wrap gap-6">
          {[
            { label: "Regular 400", className: "font-normal" },
            { label: "Medium 500", className: "font-medium" },
            { label: "Semibold 600", className: "font-semibold" },
            { label: "Bold 700", className: "font-bold" },
          ].map((weight) => (
            <p
              key={weight.label}
              className={cn("font-body text-body text-text", weight.className)}
            >
              {weight.label}
            </p>
          ))}
        </div>
      </div>
    </GuideSection>
  );
}

export function DesignSystemSpacingSection() {
  return (
    <GuideSection
      id="spacing"
      title="Spacing & Layout"
      description="Spacing tokens live in tokens.css. Container padding and section rhythm are mapped to Tailwind; other space-* values are available as CSS variables for custom layouts."
    >
      <GuideSubheading>Spacing scale</GuideSubheading>
      <div className="space-y-3">
        {SPACING_TOKENS.map((token) => (
          <div
            key={token.cssVar}
            className="grid items-center gap-4 rounded-radius-sm border border-border bg-white px-4 py-3 sm:grid-cols-[8rem_1fr_12rem]"
          >
            <TokenCode>{token.cssVar}</TokenCode>
            <div className="flex items-center gap-3">
              <div
                className="h-4 shrink-0 rounded-radius-xs bg-brand"
                style={{ width: `var(${token.cssVar})` }}
              />
              <span className="font-body text-body-sm text-muted">
                visual width
              </span>
            </div>
            <p className="font-body text-body-sm text-paragraph sm:text-right">
              {token.rem} · {token.px}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <GuideSubheading>Layout constraints</GuideSubheading>
        <div className="grid gap-4 md:grid-cols-2">
          {LAYOUT_TOKENS.map((token) => (
            <DemoPanel key={token.cssVar}>
              <p className="mb-2 font-body text-body-sm font-semibold text-text">
                {token.name}
              </p>
              <p className="mb-3 font-body text-body text-paragraph">
                {token.value}
              </p>
              <TokenCode>{token.cssVar}</TokenCode>
              {token.tailwind ? (
                <TokenCode className="ml-2">{token.tailwind}</TokenCode>
              ) : null}
            </DemoPanel>
          ))}
        </div>
        <DemoPanel label="Container demo" className="mt-6">
          <div className="rounded-radius-md border-2 border-dashed border-brand bg-brand-surface px-container-padding py-8 text-center">
            <p className="font-body text-body-sm text-paragraph">
              This panel uses{" "}
              <TokenCode>max-w-container px-container-padding</TokenCode>
            </p>
          </div>
        </DemoPanel>
      </div>

      <div className="mt-12">
        <GuideSubheading>Border radius</GuideSubheading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RADIUS_TOKENS.map((token) => (
            <div
              key={token.cssVar}
              className="flex flex-col items-center gap-3 rounded-radius-md border border-border bg-white p-4"
            >
              <div
                className={cn(
                  "size-20 border-2 border-brand bg-brand-light",
                  token.tailwind,
                )}
              />
              <p className="font-body text-body-sm font-semibold text-text">
                {token.name}
              </p>
              <TokenCode>{token.tailwind}</TokenCode>
              <p className="font-body text-body-sm text-muted">
                {token.rem} · {token.px}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GuideSection>
  );
}

export function DesignSystemComponentsSection() {
  const layers: ComponentLayer[] = ["atom", "molecule"];

  return (
    <GuideSection
      id="components"
      title="Component Showroom"
      description="Live-rendered atoms and molecules from src/components. Page-specific organisms (HeroSection, *PageSections, etc.) compose these primitives — they are not duplicated here."
    >
      <div className="space-y-12">
        <div>
          <GuideSubheading>Component inventory</GuideSubheading>
          <p className="mb-6 max-w-3xl font-body text-body-sm text-paragraph">
            {COMPONENT_INVENTORY.length} reusable components —{" "}
            {COMPONENT_INVENTORY.filter((c) => c.layer === "atom").length}{" "}
            atoms,{" "}
            {COMPONENT_INVENTORY.filter((c) => c.layer === "molecule").length}{" "}
            molecules. Click a component name to jump to its live demo below.
          </p>
          {layers.map((layer) => (
            <div key={layer} className="mb-8">
              <p className="mb-3 font-body text-body-sm font-semibold capitalize text-text">
                {layer}s
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left font-body text-body-sm">
                  <thead>
                    <tr className="border-b border-border text-label uppercase tracking-wider text-muted">
                      <th className="py-2 pr-4 font-label">Component</th>
                      <th className="py-2 pr-4 font-label">Path</th>
                      <th className="py-2 font-label">Used on</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPONENT_INVENTORY.filter(
                      (entry) => entry.layer === layer,
                    ).map((entry) => (
                      <tr
                        key={entry.path}
                        className="border-b border-border last:border-0"
                      >
                        <td className="py-2.5 pr-4 font-medium">
                          <a
                            href={`#${getComponentDemoId(entry.name)}`}
                            className="text-text underline-offset-2 hover:text-brand hover:underline"
                          >
                            {entry.name}
                          </a>
                        </td>
                        <td className="py-2.5 pr-4">
                          <TokenCode>{entry.path}</TokenCode>
                        </td>
                        <td className="py-2.5 text-paragraph">
                          {entry.usedOn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <DesignSystemAtomsShowroom />

        <div>
          <GuideSubheading>Form control patterns</GuideSubheading>
          <p className="mb-6 max-w-3xl font-body text-body-sm text-paragraph">
            No dedicated Input atom yet — these token classes match{" "}
            <TokenCode>AddressDemo</TokenCode> and Figma specs.
          </p>
          <DesignSystemComponentShowroom />
        </div>

        <DesignSystemMoleculesShowroom />
      </div>
    </GuideSection>
  );
}

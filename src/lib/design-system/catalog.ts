/**
 * Design system catalog — mirrors values in tokens.css & component-tokens.css.
 * Update here when tokens change so the guide stays accurate.
 */

export type ColorToken = {
  name: string;
  group: ColorGroup;
  cssVar: string;
  tailwind: string;
  hex: string;
  description?: string;
};

export type ColorGroup =
  | "Brand"
  | "Text & Neutrals"
  | "Surfaces"
  | "Semantic";

export type SpacingToken = {
  name: string;
  cssVar: string;
  rem: string;
  px: string;
};

export type RadiusToken = {
  name: string;
  cssVar: string;
  tailwind: string;
  rem: string;
  px: string;
};

export type LayoutToken = {
  name: string;
  cssVar: string;
  tailwind?: string;
  value: string;
};

export const DESIGN_SYSTEM_NAV = [
  { id: "overview", label: "Overview" },
  { id: "pages", label: "Site pages" },
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing & Layout" },
  { id: "svg-animations", label: "SVG animations" },
  { id: "components", label: "Components" },
] as const;

export const SVG_ANIMATION_INVENTORY = [
  {
    name: "AddressValidateAnimation",
    path: "svg-animations/AddressValidateAnimation.tsx",
    figmaNode: "4579:9069",
    usedOn: "Services section — address validation workflow demo",
  },
  {
    name: "HumanTouchAnimated",
    path: "svg-animations/HumanTouchAnimated.tsx",
    figmaNode: "4592:10201",
    usedOn: "Homepage Human Touch showcase",
  },
] as const;

export type DesignSystemSectionId =
  (typeof DESIGN_SYSTEM_NAV)[number]["id"];

/** Checklist — run whenever tokens, atoms, or molecules change. */
export const DESIGN_SYSTEM_SYNC_CHECKLIST = [
  "Add or update values in src/styles/tokens.css or component-tokens.css",
  "Map new tokens in src/app/globals.css @theme inline (if exposed as utilities)",
  "Mirror changes in src/lib/design-system/catalog.ts and typography-scale.ts",
  "Add a live demo in src/components/organisms/design-system/ if it's a new component or variant",
  "Verify at /design-system",
] as const;

export const COLOR_TOKENS: ColorToken[] = [
  {
    name: "Brand",
    group: "Brand",
    cssVar: "--color-brand",
    tailwind: "bg-brand / text-brand",
    hex: "#4D4DFF",
    description: "Primary brand — CTAs, links, accents",
  },
  {
    name: "Brand Dark",
    group: "Brand",
    cssVar: "--color-brand-dark",
    tailwind: "bg-brand-dark",
    hex: "#2828BD",
    description: "Primary hover / pressed",
  },
  {
    name: "Brand Light",
    group: "Brand",
    cssVar: "--color-brand-light",
    tailwind: "bg-brand-light",
    hex: "#E5E5FE",
    description: "Soft brand backgrounds",
  },
  {
    name: "Brand Muted",
    group: "Brand",
    cssVar: "--color-brand-muted",
    tailwind: "bg-brand-muted",
    hex: "#F0F0FE",
  },
  {
    name: "Brand Surface",
    group: "Brand",
    cssVar: "--color-brand-surface",
    tailwind: "bg-brand-surface",
    hex: "#F8F8FF",
  },
  {
    name: "Text",
    group: "Text & Neutrals",
    cssVar: "--color-text",
    tailwind: "text-text / bg-text",
    hex: "#0B0B0C",
    description: "All headings and primary UI text",
  },
  {
    name: "Paragraph",
    group: "Text & Neutrals",
    cssVar: "--color-paragraph",
    tailwind: "text-paragraph",
    hex: "#3A3943",
    description: "Body copy, captions, and labels",
  },
  {
    name: "Muted",
    group: "Text & Neutrals",
    cssVar: "--color-muted",
    tailwind: "border-muted",
    hex: "#ACACB7",
  },
  {
    name: "Border",
    group: "Text & Neutrals",
    cssVar: "--color-border",
    tailwind: "border-border",
    hex: "#E2E2E6",
  },
  {
    name: "White",
    group: "Text & Neutrals",
    cssVar: "--color-white",
    tailwind: "bg-white",
    hex: "#FFFFFF",
  },
  {
    name: "Surface Muted",
    group: "Surfaces",
    cssVar: "--color-surface-muted",
    tailwind: "bg-surface-muted",
    hex: "#F1F1F3",
  },
  {
    name: "Card Dark",
    group: "Surfaces",
    cssVar: "--color-card-dark",
    tailwind: "bg-card-dark",
    hex: "#0A0118",
    description: "Dark showcase panels",
  },
  {
    name: "Success",
    group: "Semantic",
    cssVar: "--color-success",
    tailwind: "text-success",
    hex: "#8DCD7C",
  },
  {
    name: "Pricing Success",
    group: "Semantic",
    cssVar: "--color-pricing-success",
    tailwind: "text-pricing-success",
    hex: "#10823E",
  },
  {
    name: "Error",
    group: "Semantic",
    cssVar: "--color-error",
    tailwind: "text-error",
    hex: "#DC2626",
  },
];

export { TYPOGRAPHY_STYLE_GROUPS } from "./typography-scale";

export const SPACING_TOKENS: SpacingToken[] = [
  { name: "space-1", cssVar: "--space-1", rem: "0.125rem", px: "2px" },
  { name: "space-2", cssVar: "--space-2", rem: "0.5rem", px: "8px" },
  { name: "space-3", cssVar: "--space-3", rem: "0.75rem", px: "12px" },
  { name: "space-4", cssVar: "--space-4", rem: "1rem", px: "16px" },
  { name: "space-5", cssVar: "--space-5", rem: "1.25rem", px: "20px" },
  { name: "space-6", cssVar: "--space-6", rem: "1.5rem", px: "24px" },
  { name: "space-8", cssVar: "--space-8", rem: "2rem", px: "32px" },
  { name: "space-10", cssVar: "--space-10", rem: "2.5rem", px: "40px" },
  { name: "space-12", cssVar: "--space-12", rem: "3rem", px: "48px" },
  { name: "space-16", cssVar: "--space-16", rem: "4rem", px: "64px" },
  { name: "space-20", cssVar: "--space-20", rem: "5rem", px: "80px" },
  { name: "space-24", cssVar: "--space-24", rem: "6rem", px: "96px" },
  {
    name: "section",
    cssVar: "--space-section",
    rem: "7.5rem",
    px: "120px",
  },
  {
    name: "section-sm",
    cssVar: "--space-section-sm",
    rem: "5rem",
    px: "80px",
  },
];

export const LAYOUT_TOKENS: LayoutToken[] = [
  {
    name: "Container max width",
    cssVar: "--container-max",
    tailwind: "max-w-container",
    value: "75rem (1200px)",
  },
  {
    name: "Container padding",
    cssVar: "--container-padding",
    tailwind: "px-container-padding",
    value: "1.5rem (24px)",
  },
  {
    name: "Content wide",
    cssVar: "--max-w-content-wide",
    tailwind: "max-w-content-wide",
    value: "76rem",
  },
  {
    name: "Section vertical rhythm",
    cssVar: "--space-section",
    tailwind: "py-section",
    value: "7.5rem (120px); 2.5rem (40px) at max-width 1023px",
  },
  {
    name: "Section vertical rhythm (sm)",
    cssVar: "--space-section-sm",
    tailwind: "py-section-sm",
    value: "5rem (80px); 2.5rem (40px) at max-width 1023px",
  },
  {
    name: "Section vertical rhythm (mobile)",
    cssVar: "--space-section-mobile",
    tailwind: "py-section / pt-section / pb-section",
    value: "2.5rem (40px) at max-width 1023px",
  },
];

export const RADIUS_TOKENS: RadiusToken[] = [
  {
    name: "XS",
    cssVar: "--radius-xs",
    tailwind: "rounded-radius-xs",
    rem: "0.25rem",
    px: "4px",
  },
  {
    name: "SM",
    cssVar: "--radius-sm",
    tailwind: "rounded-radius-sm",
    rem: "0.5rem",
    px: "8px",
  },
  {
    name: "MD",
    cssVar: "--radius-md",
    tailwind: "rounded-radius-md",
    rem: "0.75rem",
    px: "12px",
  },
  {
    name: "LG",
    cssVar: "--radius-lg",
    tailwind: "rounded-radius-lg",
    rem: "1rem",
    px: "16px",
  },
  {
    name: "Panel",
    cssVar: "--radius-panel",
    tailwind: "rounded-radius-panel",
    rem: "1.25rem",
    px: "20px",
  },
  {
    name: "Icon",
    cssVar: "--radius-icon",
    tailwind: "rounded-radius-icon",
    rem: "0.4375rem",
    px: "7px",
  },
  {
    name: "XL",
    cssVar: "--radius-xl",
    tailwind: "rounded-radius-xl",
    rem: "2rem",
    px: "32px",
  },
  {
    name: "Full",
    cssVar: "--radius-full",
    tailwind: "rounded-radius-full",
    rem: "9999px",
    px: "pill",
  },
];

export type ComponentLayer = "atom" | "molecule";

export type ComponentInventoryEntry = {
  name: string;
  layer: ComponentLayer;
  path: string;
  usedOn: string;
};

/** Anchor id for inventory table links → live demo scroll targets. */
export function getComponentDemoId(name: string): string {
  const kebab = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  return `component-${kebab}`;
}

/** Atoms and molecules shipped in src/components — mirrored in the component showroom. */
export const COMPONENT_INVENTORY: ComponentInventoryEntry[] = [
  { name: "Badge", layer: "atom", path: "atoms/Badge.tsx", usedOn: "Eyebrow, ServiceCard, ImageTextCard, Human Touch, Seltaris+" },
  { name: "Button", layer: "atom", path: "atoms/Button.tsx", usedOn: "Site-wide CTAs" },
  { name: "Container", layer: "atom", path: "atoms/Container.tsx", usedOn: "All page sections" },
  { name: "Eyebrow", layer: "atom", path: "atoms/Eyebrow.tsx", usedOn: "Homepage, feature pages, sliders" },
  { name: "FeatureIcon", layer: "atom", path: "atoms/FeatureIcon.tsx", usedOn: "Feature nav dropdown" },
  { name: "IconSurface", layer: "atom", path: "atoms/IconSurface.tsx", usedOn: "Address service pages" },
  { name: "FeaturePageHeading", layer: "atom", path: "atoms/FeaturePageHeading.tsx", usedOn: "All feature pages" },
  { name: "Heading", layer: "atom", path: "atoms/Heading.tsx", usedOn: "Marketing sections & cards" },
  { name: "Text", layer: "atom", path: "atoms/Text.tsx", usedOn: "Body copy across site" },
  { name: "AddressResultFilePanel", layer: "molecule", path: "features/address-service/components/AddressResultFilePanel.tsx", usedOn: "Address validation — What's included" },
  { name: "AddressSampleExamplesPanel", layer: "molecule", path: "features/address-service/components/AddressSampleExamplesPanel.tsx", usedOn: "Address service pages — What's included" },
  { name: "AddressDataAccuracyCodesPanel", layer: "molecule", path: "features/address-service/components/AddressDataAccuracyCodesPanel.tsx", usedOn: "Address service pages — What's included" },
  { name: "AddressRefinementCodesPanel", layer: "molecule", path: "features/address-service/components/AddressRefinementCodesPanel.tsx", usedOn: "Address service pages — What's included" },
  { name: "AddressDemo", layer: "molecule", path: "molecules/AddressDemo.tsx", usedOn: "Homepage hero" },
  { name: "CenteredShowcase", layer: "molecule", path: "molecules/CenteredShowcase.tsx", usedOn: "Feature page showcase sections" },
  { name: "CoreFeatureSlideCard", layer: "molecule", path: "molecules/CoreFeatureSlideCard.tsx", usedOn: "Homepage & Health Check core features" },
  { name: "RegionBadge", layer: "molecule", path: "shared/RegionBadge.tsx", usedOn: "Region pills — homepage, pricing cards, datasets bar, get-started" },
  { name: "FeatureAccordion", layer: "molecule", path: "shared/FeatureAccordion.tsx", usedOn: "/get-started tab panels" },
  { name: "GetStartedHeader", layer: "molecule", path: "layout/GetStartedHeader.tsx", usedOn: "/get-started" },
  { name: "GetStartedTabSwitch", layer: "molecule", path: "features/get-started/components/GetStartedTabSwitch.tsx", usedOn: "/get-started" },
  { name: "FeatureNavDropdown", layer: "molecule", path: "molecules/FeatureNavDropdown.tsx", usedOn: "Site header" },
  { name: "FeatureNavPanel", layer: "molecule", path: "molecules/FeatureNavPanel.tsx", usedOn: "Site header Features menu" },
  { name: "FeatureSlideCard", layer: "molecule", path: "molecules/FeatureSlideCard.tsx", usedOn: "Feature page sliders (wraps ImageSlideCard)" },
  { name: "FooterNavColumn", layer: "molecule", path: "molecules/FooterNavColumn.tsx", usedOn: "Footer" },
  { name: "HumanTouchTabPanels", layer: "molecule", path: "molecules/HumanTouchTabPanels.tsx", usedOn: "/human-touch" },
  { name: "ImageSlideCard", layer: "molecule", path: "molecules/ImageSlideCard.tsx", usedOn: "Content sliders" },
  { name: "ImageTextCard", layer: "molecule", path: "molecules/ImageTextCard.tsx", usedOn: "Human Touch tabs" },
  { name: "Logo", layer: "molecule", path: "molecules/Logo.tsx", usedOn: "Site header & footer" },
  { name: "LogoMarquee", layer: "molecule", path: "molecules/LogoMarquee.tsx", usedOn: "Social proof section" },
  { name: "MainNav", layer: "molecule", path: "molecules/MainNav.tsx", usedOn: "Site header" },
  { name: "MobileNavDrawer", layer: "molecule", path: "molecules/MobileNavDrawer.tsx", usedOn: "Site header (mobile)" },
  { name: "NavLink", layer: "molecule", path: "molecules/NavLink.tsx", usedOn: "Site header" },
  { name: "PricingCard", layer: "molecule", path: "molecules/PricingCard.tsx", usedOn: "Homepage pricing" },
  { name: "ServiceCard", layer: "molecule", path: "molecules/ServiceCard.tsx", usedOn: "Homepage services" },
  { name: "SeltarisPlusPlanCard", layer: "molecule", path: "features/seltaris-plus/components/SeltarisPlusPlanCard.tsx", usedOn: "/seltaris-plus" },
  { name: "SliderNavButtons", layer: "molecule", path: "molecules/SliderNavButtons.tsx", usedOn: "All carousels" },
  { name: "SplitIntro", layer: "molecule", path: "molecules/SplitIntro.tsx", usedOn: "Slider sections, Human Touch" },
  { name: "SupportedDatasetsBar", layer: "molecule", path: "molecules/SupportedDatasetsBar.tsx", usedOn: "Address service pages — hero & OptiSource panel" },
  { name: "SupportSpecialistCard", layer: "molecule", path: "molecules/SupportSpecialistCard.tsx", usedOn: "Address service pages" },
  { name: "TabGroup", layer: "molecule", path: "molecules/TabGroup.tsx", usedOn: "Human Touch tabs, Services filters" },
  { name: "TestimonialCard", layer: "molecule", path: "molecules/TestimonialCard.tsx", usedOn: "Social proof slider" },
  { name: "ValuePropCard", layer: "molecule", path: "molecules/ValuePropCard.tsx", usedOn: "Social proof slider" },
];

export const TOKEN_SOURCE_FILES = [
  "src/styles/tokens.css",
  "src/styles/component-tokens.css",
  "src/app/globals.css (@theme inline)",
] as const;

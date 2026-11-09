/** One canonical type-* class — font, size, weight, leading, tracking only. */
export type TypographyStyleGroup = {
  id: string;
  label: string;
  className: string;
  font: "Mint Grotesk" | "DM Sans";
  size: string;
  weight: string;
  cssVar: string;
  tracking?: string;
  modifiers?: string;
  sample: string;
  usages: string[];
};

/**
 * Canonical typography scale — one class per unique face+size+weight.
 * Source: globals.css `.type-*` + tokens.css / component-tokens.css.
 */
export const TYPOGRAPHY_STYLE_GROUPS: TypographyStyleGroup[] = [
  {
    id: "type-90",
    label: "Display",
    className: "type-90",
    font: "Mint Grotesk",
    size: "5.5rem / 90px",
    weight: "700 Bold",
    cssVar: "--text-display-size",
    tracking: "-0.009em",
    sample: "Bulk data, elevated.",
    usages: ["Home hero brand", "Footer display"],
  },
  {
    id: "type-48",
    label: "Section display",
    className: "type-48",
    font: "Mint Grotesk",
    size: "3rem / 48px → 36px mobile",
    weight: "700 Bold",
    cssVar: "--text-section-display-size",
    tracking: "-0.02em",
    sample: "Core features of Seltaris",
    usages: ["Feature heroes", "Banners", "Section titles lg/xl", "Teasers"],
  },
  {
    id: "type-40",
    label: "Display compact",
    className: "type-40",
    font: "Mint Grotesk",
    size: "2.5rem / 40px → 32px mobile",
    weight: "700 Bold",
    cssVar: "--text-type-40-size",
    tracking: "-0.02em",
    sample: "Enterprise grade security.",
    usages: ["Mid-size display headings"],
  },
  {
    id: "type-32",
    label: "Heading",
    className: "type-32",
    font: "Mint Grotesk",
    size: "2rem / 32px → 28px mobile",
    weight: "700 Bold",
    cssVar: "--text-h1-size",
    tracking: "-0.02em",
    sample: "Data quality at its finest detail.",
    usages: ["Section titles", "Card titles", "Stats", "Body lead"],
  },
  {
    id: "type-24",
    label: "Subheading",
    className: "type-24",
    font: "Mint Grotesk",
    size: "1.5rem / 24px → 20px mobile",
    weight: "700 Bold",
    cssVar: "--text-subheading-size",
    sample: "Built for everyone so anyone can use it.",
    usages: ["Slide titles", "Workflow titles", "Card headings"],
  },
  {
    id: "type-24-semi",
    label: "Page eyebrow",
    className: "type-24-semi",
    font: "DM Sans",
    size: "1.5rem / 24px → 20px mobile",
    weight: "600 Semibold",
    cssVar: "--text-subheading-size",
    modifiers: "Pair with text-brand",
    sample: "Human Touch™",
    usages: ["Feature page eyebrows"],
  },
  {
    id: "type-20",
    label: "Panel title",
    className: "type-20",
    font: "Mint Grotesk",
    size: "1.25rem / 20px",
    weight: "700 Bold",
    cssVar: "--text-nav-title-size",
    tracking: "-0.01em",
    sample: "Features",
    usages: ["Nav panels"],
  },
  {
    id: "type-18",
    label: "Subtitle",
    className: "type-18",
    font: "DM Sans",
    size: "1.125rem / 18px",
    weight: "500 Medium",
    cssVar: "--text-type-18-size",
    sample: "Built for everyone so anyone can use it.",
    usages: ["Hero / banner subtitles"],
  },
  {
    id: "type-16",
    label: "Body",
    className: "type-16",
    font: "DM Sans",
    size: "1rem / 16px",
    weight: "400 Regular",
    cssVar: "--text-body-size",
    sample: "Format, clean, repair and verify addresses.",
    usages: ["Body copy"],
  },
  {
    id: "type-16-medium",
    label: "Stat label",
    className: "type-16-medium",
    font: "DM Sans",
    size: "1rem / 16px",
    weight: "500 Medium",
    cssVar: "--text-body-size",
    modifiers: "Pair with text-paragraph",
    sample: "Records processed",
    usages: ["Stat labels"],
  },
  {
    id: "type-14",
    label: "Body small",
    className: "type-14",
    font: "DM Sans",
    size: "0.875rem / 14px",
    weight: "400 Regular",
    cssVar: "--text-body-sm-size",
    sample: "Learn more about this feature.",
    usages: ["Small body", "Feature card eyebrows (+ text-brand)"],
  },
  {
    id: "type-14-bold",
    label: "Compact heading",
    className: "type-14-bold",
    font: "DM Sans",
    size: "0.875rem / 14px",
    weight: "700 Bold",
    cssVar: "--text-h3-size",
    sample: "Bulk Address Data",
    usages: ["Compact card titles"],
  },
  {
    id: "type-12",
    label: "Label / utility",
    className: "type-12",
    font: "DM Sans",
    size: "0.75rem / 12px",
    weight: "400 Regular",
    cssVar: "--text-label-size",
    modifiers: "Add uppercase tracking-wider for label style",
    sample: "COMING SOON",
    usages: ["Labels", "Captions", "Utility text"],
  },
  {
    id: "type-10",
    label: "Micro",
    className: "type-10",
    font: "DM Sans",
    size: "0.625rem / 10px",
    weight: "600 Semibold",
    cssVar: "--text-micro-size",
    sample: "NEW",
    usages: ["Micro copy", "Badges"],
  },
];

/** Parse rem from size labels like "3rem / 48px" for sorting. */
export function parseTypographySizeRem(size: string): number {
  const match = size.match(/^([\d.]+)rem/);
  return match ? parseFloat(match[1]) : 0;
}

/** Type scale rows sorted largest → smallest (for review table). */
export function getTypographyStyleGroupsBySize() {
  return [...TYPOGRAPHY_STYLE_GROUPS].sort(
    (a, b) => parseTypographySizeRem(b.size) - parseTypographySizeRem(a.size),
  );
}

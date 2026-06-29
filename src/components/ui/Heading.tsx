import { cn } from "@/lib/utils";

type HeadingLevel =
  | "display"
  | "sectionDisplay"
  | "h1"
  | "h2"
  | "h3"
  | "subheading"
  | "panel";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "p";
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

const levelStyles: Record<HeadingLevel, string> = {
  display:
    "font-display text-display leading-display font-bold text-text tracking-display",
  sectionDisplay:
    "font-display text-section-display sm:text-section-display-mobile leading-h1 font-bold text-text tracking-h1",
  h1: "font-display text-h1 sm:text-h1-mobile leading-h1 font-bold text-text",
  h2: "font-display text-subheading sm:text-subheading-mobile leading-subheading font-bold text-text",
  h3: "font-body text-h3 leading-h3 font-bold text-text",
  subheading:
    "font-display text-subheading sm:text-subheading-mobile leading-subheading font-bold text-text",
  panel:
    "font-display text-nav-title leading-nav-title font-bold text-text tracking-nav-title",
};

const defaultTags: Record<HeadingLevel, "h1" | "h2" | "h3" | "p"> = {
  display: "h1",
  sectionDisplay: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subheading: "h3",
  panel: "p",
};

export function Heading({
  as,
  level = "h1",
  children,
  className,
  accent,
}: HeadingProps) {
  const Tag = as ?? defaultTags[level];

  return (
    <Tag className={cn(levelStyles[level], accent && "text-brand", className)}>
      {children}
    </Tag>
  );
}

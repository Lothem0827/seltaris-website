import { cn } from "@/lib/utils";

type HeadingLevel = "display" | "sectionDisplay" | "h1" | "h2" | "subheading" | "panel";

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
    "font-display text-section-display leading-h1 font-bold text-text tracking-h1",
  h1: "font-display text-h1 leading-h1 font-bold text-text tracking-h1",
  h2: "font-display text-h2 leading-h2 font-bold text-text tracking-h2",
  subheading:
    "font-body text-subheading leading-subheading font-semibold text-text",
  panel:
    "font-display text-nav-title leading-nav-title font-bold text-text tracking-nav-title",
};

const defaultTags: Record<HeadingLevel, "h1" | "h2" | "h3" | "p"> = {
  display: "h1",
  sectionDisplay: "h2",
  h1: "h1",
  h2: "h2",
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

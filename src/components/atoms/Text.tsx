import { cn } from "@/lib/utils";

type TextVariant = "body" | "body-sm" | "caption" | "tiny" | "micro" | "label" | "utility";

type TextProps = {
  as?: "p" | "span" | "div";
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
};

const variants: Record<TextVariant, string> = {
  body: "font-body text-body text-paragraph leading-body",
  "body-sm": "font-body text-body-sm text-paragraph leading-body-sm",
  caption: "font-body text-label text-paragraph leading-body-sm",
  tiny: "font-body text-tiny text-paragraph leading-body-sm",
  micro: "font-body text-micro text-paragraph leading-micro",
  label: "font-label text-label text-paragraph uppercase tracking-wider",
  utility: "font-label text-label text-paragraph",
};

export function Text({
  as: Tag = "p",
  variant = "body",
  children,
  className,
}: TextProps) {
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
}

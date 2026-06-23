import type { ElementType, ReactNode } from "react";
import {
  FeaturePageHeading,
  type FeaturePageHeadingVariant,
} from "@/components/atoms/FeaturePageHeading";
import { IconSurface } from "@/components/atoms/IconSurface";
import { cn } from "@/lib/utils";

type ContentSpacing = "default" | "compact";

type FeaturePageHeadingContainerProps = {
  logoSrc: string;
  logoAlt?: string;
  eyebrow: ReactNode;
  heading: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  contentSpacing?: ContentSpacing;
  titleAs?: ElementType;
  titleVariant?: FeaturePageHeadingVariant;
  subtitleVariant?: FeaturePageHeadingVariant;
};

const contentSpacingClasses: Record<ContentSpacing, string> = {
  default: "space-y-5",
  compact: "space-y-4",
};

export function FeaturePageHeadingContainer({
  logoSrc,
  logoAlt = "",
  eyebrow,
  heading,
  subtitle,
  children,
  className,
  contentClassName,
  contentSpacing = "default",
  titleAs = "h1",
  titleVariant = "heroTitle",
  subtitleVariant = "heroSubtitle",
}: FeaturePageHeadingContainerProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-8 text-center", className)}
    >
      <IconSurface src={logoSrc} alt={logoAlt} size="feature" />

      <div
        className={cn(
          "mx-auto max-w-3xl",
          contentSpacingClasses[contentSpacing],
          contentClassName,
        )}
      >
        <FeaturePageHeading as="p" variant="pageEyebrow">
          {eyebrow}
        </FeaturePageHeading>
        <FeaturePageHeading as={titleAs} variant={titleVariant}>
          {heading}
        </FeaturePageHeading>
        {subtitle ? (
          <FeaturePageHeading as="p" variant={subtitleVariant}>
            {subtitle}
          </FeaturePageHeading>
        ) : null}
        {children}
      </div>
    </div>
  );
}

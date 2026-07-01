import Link from "next/link";
import type { ReactNode } from "react";
import { CursorGlowCard } from "@/components/molecules/CursorGlowCard";
import { HoverArrowContent } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

type CoreFeatureSlideCardProps = {
  visualSrc: string;
  eyebrow: string;
  heading: ReactNode;
  body: string;
  href: string;
  cta: string;
  className?: string;
};

export function CoreFeatureSlideCard({
  eyebrow,
  heading,
  body,
  href,
  cta,
  className,
}: CoreFeatureSlideCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block h-core-feature-slide w-core-feature-slide shrink-0",
        className,
      )}
    >
      <CursorGlowCard
        className="h-full w-full rounded-radius-panel"
        innerClassName={cn(
          "core-feature-slide flex h-full flex-col overflow-hidden rounded-radius-panel transition-colors",
          "hover:border-brand/30 hover:bg-brand-light/30",
        )}
        glowRadius={400}
      >
        <div className="flex h-full shrink-0 flex-col justify-between gap-4 p-8">
          <div className="flex flex-col gap-3">
            <p className="core-feature-card-eyebrow">{eyebrow}</p>
            <Heading level="subheading">{heading}</Heading>
            <Text>{body}</Text>
          </div>

          <span className="inline-flex w-fit items-center font-body text-body-sm font-semibold text-brand">
            <HoverArrowContent>{cta}</HoverArrowContent>
          </span>
        </div>
      </CursorGlowCard>
    </Link>
  );
}

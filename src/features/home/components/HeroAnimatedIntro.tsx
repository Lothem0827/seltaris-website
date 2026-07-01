"use client";

import {
  HeroLoadIn,
  HeroLoadInItem,
} from "@/features/home/components/HeroLoadIn";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type HeroAnimatedIntroProps = {
  eyebrow: ReactNode;
  heading: ReactNode;
  subtext: ReactNode;
  cta: ReactNode;
  className?: string;
};

export function HeroAnimatedIntro({
  eyebrow,
  heading,
  subtext,
  cta,
  className,
}: HeroAnimatedIntroProps) {
  return (
    <HeroLoadIn className={cn("flex flex-col items-center gap-8", className)}>
      <div className="flex flex-col items-center gap-2.5">
        <HeroLoadInItem delayIndex={0}>{eyebrow}</HeroLoadInItem>
        <HeroLoadInItem delayIndex={1}>{heading}</HeroLoadInItem>
        <HeroLoadInItem delayIndex={2}>{subtext}</HeroLoadInItem>
      </div>

      <HeroLoadInItem delayIndex={3}>{cta}</HeroLoadInItem>
    </HeroLoadIn>
  );
}

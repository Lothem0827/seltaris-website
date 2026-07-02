"use client";

import { useRevealOnView } from "@/hooks/useRevealVisibility";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealOnViewProps = {
  children: ReactNode;
  className?: string;
  /** 0 = no delay; 1–6 map to 80ms step delays */
  staggerIndex?: number;
};

export function RevealOnView({
  children,
  className,
  staggerIndex = 0,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { visible, settled } = useRevealOnView(ref);

  const delayClass =
    !settled && visible && staggerIndex > 0
      ? `reveal-up-delay-${Math.min(staggerIndex, 6)}`
      : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-up",
        settled && "reveal-up-settled",
        !settled && visible && "reveal-up-visible",
        delayClass,
        className,
      )}
    >
      {children}
    </div>
  );
}

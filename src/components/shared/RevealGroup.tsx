"use client";

import { useRevealOnView } from "@/hooks/useRevealVisibility";
import { Children, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { visible, settled } = useRevealOnView(ref);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className={cn(
            "reveal-up",
            settled && "reveal-up-settled",
            !settled && visible && "reveal-up-visible",
            !settled &&
              visible &&
              index > 0 &&
              `reveal-up-delay-${Math.min(index, 6)}`,
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

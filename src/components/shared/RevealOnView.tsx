"use client";

import { useRevealOnView } from "@/hooks/useRevealVisibility";
import { useRef, useState, type ReactNode } from "react";
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
  const [visible, setVisible] = useState(false);

  useRevealOnView(ref, setVisible);

  const delayClass =
    visible && staggerIndex > 0
      ? `reveal-up-delay-${Math.min(staggerIndex, 6)}`
      : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-up",
        visible && "reveal-up-visible",
        delayClass,
        className,
      )}
    >
      {children}
    </div>
  );
}

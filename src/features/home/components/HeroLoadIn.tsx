"use client";

import {
  prefersReducedMotion,
  useRevealBackForwardRestore,
} from "@/hooks/useRevealVisibility";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroLoadInProps = {
  children: ReactNode;
  className?: string;
};

export function HeroLoadIn({ children, className }: HeroLoadInProps) {
  const [visible, setVisible] = useState(false);

  useRevealBackForwardRestore(setVisible);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const frameId = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className={cn("hero-load-in", visible && "hero-load-in-visible", className)}>
      {children}
    </div>
  );
}

type HeroLoadInItemProps = {
  children: ReactNode;
  className?: string;
  /** 0–4 maps to stagger delays */
  delayIndex?: number;
};

export function HeroLoadInItem({
  children,
  className,
  delayIndex = 0,
}: HeroLoadInItemProps) {
  const delayClass =
    delayIndex > 0
      ? `hero-load-in-item-delay-${Math.min(delayIndex, 4)}`
      : undefined;

  return (
    <div className={cn("hero-load-in-item", delayClass, className)}>
      {children}
    </div>
  );
}

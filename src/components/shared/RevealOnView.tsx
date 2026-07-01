"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

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

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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

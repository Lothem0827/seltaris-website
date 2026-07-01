"use client";

import {
  useRevealBackForwardRestore,
  prefersReducedMotion,
} from "@/hooks/useRevealVisibility";
import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
};

export function RevealGroup({ children, className }: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useRevealBackForwardRestore(setVisible);

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
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    const rect = element.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className={cn(
            "reveal-up",
            visible && "reveal-up-visible",
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

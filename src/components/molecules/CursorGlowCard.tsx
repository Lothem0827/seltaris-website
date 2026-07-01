"use client";

import {
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { cn } from "@/lib/utils";

type CursorGlowCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: ElementType;
  glowRadius?: number;
  disabled?: boolean;
};

export function CursorGlowCard({
  children,
  className,
  innerClassName,
  as: Component = "div",
  glowRadius = 120,
  disabled = false,
}: CursorGlowCardProps) {
  const ref = useRef<HTMLElement>(null);
  useCursorGlow(ref, disabled);

  const style = {
    "--glow-radius": `${glowRadius}px`,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={cn("cursor-glow-card", className)}
      style={style}
      data-glow-active={disabled ? undefined : "false"}
    >
      <div className="cursor-glow-card__border" aria-hidden />
      <div className={cn("cursor-glow-card__inner", innerClassName)}>
        {children}
      </div>
    </Component>
  );
}

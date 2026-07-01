"use client";

import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

const POSITION_LERP = 0.11;

function getRelativePointerPosition(
  event: { clientX: number; clientY: number },
  container: HTMLDivElement,
) {
  const rect = container.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

export function EngineGlowBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isFollowingRef = useRef(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const positionLerpRef = useRef(POSITION_LERP);

  const [isFollowing, setIsFollowing] = useState(false);

  const applyGlowPosition = useCallback((x: number, y: number) => {
    const glow = glowRef.current;
    if (!glow) {
      return;
    }

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    glow.style.transform = "translate(-50%, -50%)";
  }, []);

  const clearGlowInlineStyles = useCallback(() => {
    const glow = glowRef.current;
    if (!glow) {
      return;
    }

    glow.style.left = "";
    glow.style.top = "";
    glow.style.transform = "";
  }, []);

  useEffect(() => {
    positionLerpRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
      ? 1
      : POSITION_LERP;
  }, []);

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      if (isFollowingRef.current) {
        const target = targetRef.current;
        const current = currentRef.current;
        const lerp = positionLerpRef.current;

        current.x += (target.x - current.x) * lerp;
        current.y += (target.y - current.y) * lerp;
        applyGlowPosition(current.x, current.y);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [applyGlowPosition]);

  const handlePointerMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container || !isFollowingRef.current) {
        return;
      }

      targetRef.current = getRelativePointerPosition(event, container);
    },
    [],
  );

  const handlePointerEnter = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const next = getRelativePointerPosition(event, container);
      targetRef.current = next;
      currentRef.current = { ...next };
      isFollowingRef.current = true;
      setIsFollowing(true);
      applyGlowPosition(next.x, next.y);
    },
    [applyGlowPosition],
  );

  const handlePointerLeave = useCallback(() => {
    isFollowingRef.current = false;
    setIsFollowing(false);
    clearGlowInlineStyles();
  }, [clearGlowInlineStyles]);

  return (
    <div ref={containerRef} className="banner-media h-auto min-h-0">
      <Image
        src="/images/altraservice/engine.webp"
        alt=""
        width={1200}
        height={741}
        className="h-auto w-full"
        sizes="(max-width: 1279px) 100vw, 1200px"
      />
      <div
        ref={glowRef}
        data-following={isFollowing ? "true" : "false"}
        className={cn(
          "engine-glow pointer-events-none absolute z-10 h-[355.427px] w-[410.969px] rounded-[410.969px] bg-[#18A684] mix-blend-color-dodge blur-[75px]",
        )}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-20 cursor-default"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        aria-hidden
      />
    </div>
  );
}

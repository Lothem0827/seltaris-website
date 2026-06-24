"use client";

import Image from "next/image";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import { useRef, useState, type RefObject } from "react";

type SliderNavButtonsProps = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  className?: string;
  /** When false, hides the control group (e.g. slider content fits without scrolling). */
  visible?: boolean;
};

export function useSliderNav() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  return {
    prevRef,
    nextRef,
    navButtonProps: {
      prevRef,
      nextRef,
      visible: hasOverflow,
    },
    sliderProps: {
      prevRef,
      nextRef,
      onOverflowChange: setHasOverflow,
    },
  };
}

const navButtonClass =
  "relative flex size-11 shrink-0 items-center justify-center transition-opacity enabled:hover:opacity-80 disabled:pointer-events-none disabled:opacity-50 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-50";

/** Matches Figma frame names for slider navigation controls. */
export function SliderNavButtons({
  prevRef,
  nextRef,
  className,
  visible = true,
}: SliderNavButtonsProps) {
  return (
    <div
      className={cn("flex items-center gap-3", !visible && "hidden", className)}
      aria-hidden={!visible}
    >
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        data-name="THIS IS A SLIDER PREVIOUS BUTTON"
        className={navButtonClass}
      >
        <Image
          src={siteAssets.sliderButton}
          alt=""
          width={44}
          height={44}
          className="size-11 -scale-x-100"
          aria-hidden
        />
      </button>
      <button
        ref={nextRef}
        type="button"
        aria-label="Next slide"
        data-name="THIS IS A SLIDER NEXT BUTTON"
        className={navButtonClass}
      >
        <Image
          src={siteAssets.sliderButton}
          alt=""
          width={44}
          height={44}
          className="size-11"
          aria-hidden
        />
      </button>
    </div>
  );
}

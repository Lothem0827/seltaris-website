"use client";

import Image from "next/image";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";
import type { RefObject } from "react";

type SliderNavButtonsProps = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  className?: string;
};

const navButtonClass =
  "relative flex size-14 shrink-0 items-center justify-center transition-opacity enabled:hover:opacity-80 disabled:pointer-events-none disabled:opacity-50 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-50";

/** Matches Figma frame names for slider navigation controls. */
export function SliderNavButtons({
  prevRef,
  nextRef,
  className,
}: SliderNavButtonsProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <button
        ref={prevRef}
        type="button"
        aria-label="Previous slide"
        data-name="THIS IS A SLIDER PREVIOUS BUTTON"
        className={navButtonClass}
      >
        <Image
          src={assets.sliderButton}
          alt=""
          width={57}
          height={57}
          className="size-14 scale-x-[-1]"
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
          src={assets.sliderButton}
          alt=""
          width={57}
          height={57}
          className="size-14"
          aria-hidden
        />
      </button>
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { ImageSlideCard } from "@/components/shared/ImageSlideCard";
import type { SlideItem } from "@/lib/types/slider";
import { cn } from "@/lib/utils";
import {
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import "swiper/css";

export type SliderSlide =
  | { type: "image"; id: string; item: SlideItem }
  | { type: "custom"; id: string; content: ReactNode };

type ContentSliderProps = {
  prevRef: RefObject<HTMLButtonElement | null>;
  nextRef: RefObject<HTMLButtonElement | null>;
  slides: SliderSlide[];
  className?: string;
  /** Adds left padding so the track aligns with container content. */
  bleed?: boolean;
  onOverflowChange?: (hasOverflow: boolean) => void;
};

function resolveImageSrc(item: SlideItem): string {
  return item.imageSrc ?? "";
}

function assignNavigationElements(
  swiper: SwiperInstance,
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>,
) {
  if (!prevRef.current || !nextRef.current) return false;

  const navigationParams = swiper.params.navigation;
  if (!navigationParams || typeof navigationParams === "boolean") return false;

  navigationParams.prevEl = prevRef.current;
  navigationParams.nextEl = nextRef.current;
  return true;
}

function bindNavigation(
  swiper: SwiperInstance,
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>,
) {
  if (!assignNavigationElements(swiper, prevRef, nextRef) || !swiper.navigation) {
    return;
  }

  if (!swiper.navigation.prevEl || !swiper.navigation.nextEl) {
    swiper.navigation.init();
  }

  swiper.navigation.update();
}

function renderSlide(slide: SliderSlide) {
  switch (slide.type) {
    case "image":
      return (
        <ImageSlideCard
          imageSrc={resolveImageSrc(slide.item)}
          title={slide.item.title}
          description={slide.item.description}
          width={slide.item.width}
        />
      );
    case "custom":
      return slide.content;
  }
}

/** Horizontal slide track with optional arrow navigation. */
export function ContentSlider({
  prevRef,
  nextRef,
  slides,
  className,
  bleed = false,
  onOverflowChange,
}: ContentSliderProps) {
  const isCarousel = slides.length > 1;
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    onOverflowChange?.(isCarousel);
  }, [isCarousel, onOverflowChange]);

  useEffect(() => {
    if (!swiper) return;
    bindNavigation(swiper, prevRef, nextRef);
  }, [swiper, prevRef, nextRef]);

  if (!isCarousel) {
    const slide = slides[0];
    if (!slide) return null;

    return (
      <div className={cn(bleed && "slider-track-bleed", className)}>
        {renderSlide(slide)}
      </div>
    );
  }

  return (
    <div className={cn(bleed && "slider-track-bleed", className)}>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={24}
        watchOverflow
        navigation={{
          disabledClass: "swiper-button-disabled",
        }}
        onBeforeInit={(instance) => {
          assignNavigationElements(instance, prevRef, nextRef);
        }}
        onSwiper={setSwiper}
        onInit={(instance) => {
          bindNavigation(instance, prevRef, nextRef);
        }}
        onResize={(instance) => {
          instance.navigation?.update();
        }}
        onSlideChange={(instance) => {
          instance.navigation?.update();
        }}
        className="overflow-visible!"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-auto! shrink-0">
            {renderSlide(slide)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

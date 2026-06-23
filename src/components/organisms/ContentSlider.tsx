"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { ImageSlideCard } from "@/components/molecules/ImageSlideCard";
import { assets, getAsset } from "@/lib/assets";
import type { SlideItem } from "@/lib/types/slider";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
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
  onOverflowChange?: (hasOverflow: boolean) => void;
};

function resolveImageSrc(item: SlideItem): string {
  if (item.imageSrc) return item.imageSrc;
  if (item.imageSrcKey) return getAsset(item.imageSrcKey);
  return assets.heroBackground;
}

function bindNavigation(
  swiper: SwiperInstance,
  prevRef: RefObject<HTMLButtonElement | null>,
  nextRef: RefObject<HTMLButtonElement | null>,
) {
  if (!prevRef.current || !nextRef.current) return;

  const navigation = swiper.params.navigation;
  if (!navigation || typeof navigation === "boolean") return;

  navigation.prevEl = prevRef.current;
  navigation.nextEl = nextRef.current;
  swiper.navigation.init();
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

/** Horizontal track — Swiper only when slides overflow the container. */
export function ContentSlider({
  prevRef,
  nextRef,
  slides,
  className,
  onOverflowChange,
}: ContentSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isSlider, setIsSlider] = useState(false);

  const setOverflow = useCallback(
    (hasOverflow: boolean) => {
      setIsSlider(hasOverflow);
      onOverflowChange?.(hasOverflow);
    },
    [onOverflowChange],
  );

  const measureStaticOverflow = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    setOverflow(track.scrollWidth > container.clientWidth + 1);
  }, [setOverflow]);

  useLayoutEffect(() => {
    if (isSlider) return;
    measureStaticOverflow();
  }, [isSlider, slides, measureStaticOverflow]);

  useEffect(() => {
    if (isSlider) return;

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const observer = new ResizeObserver(measureStaticOverflow);
    observer.observe(container);
    observer.observe(track);

    return () => observer.disconnect();
  }, [isSlider, slides, measureStaticOverflow]);

  const handleSwiperOverflow = useCallback(
    (swiper: SwiperInstance) => {
      if (swiper.isLocked) {
        setOverflow(false);
      } else {
        setOverflow(true);
      }
    },
    [setOverflow],
  );

  return (
    <div
      ref={containerRef}
      className={cn("w-full", className)}
      data-name={isSlider ? "THIS IS A SLIDER" : "THIS IS A SLIDER TRACK"}
    >
      {isSlider ? (
        <Swiper
          modules={[Navigation]}
          navigation={{
            disabledClass: "swiper-button-disabled",
          }}
          watchOverflow
          onBeforeInit={(swiper) => {
            bindNavigation(swiper, prevRef, nextRef);
          }}
          onInit={(swiper) => {
            bindNavigation(swiper, prevRef, nextRef);
            handleSwiperOverflow(swiper);
          }}
          onResize={(swiper) => {
            swiper.navigation.update();
            handleSwiperOverflow(swiper);
          }}
          onSlideChange={(swiper) => {
            swiper.navigation.update();
          }}
          onUpdate={handleSwiperOverflow}
          onSlidesLengthChange={handleSwiperOverflow}
          spaceBetween={24}
          slidesPerView="auto"
          className="!overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="!w-auto">
              {renderSlide(slide)}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div ref={trackRef} className="flex gap-6">
          {slides.map((slide) => (
            <div key={slide.id} className="shrink-0">
              {renderSlide(slide)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

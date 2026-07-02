"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { ImageSlideCard } from "@/components/shared/ImageSlideCard";
import type { SlideItem } from "@/lib/types/slider";
import { cn } from "@/lib/utils";
import { useRevealOnView } from "@/hooks/useRevealVisibility";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

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
  /** Stagger reveal each slide when the slider enters the viewport. */
  staggerSlides?: boolean;
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

function renderSlide(slide: SliderSlide, index: number) {
  switch (slide.type) {
    case "image":
      return (
        <ImageSlideCard
          imageSrc={resolveImageSrc(slide.item)}
          title={slide.item.title}
          description={slide.item.description}
          width={slide.item.width}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
        />
      );
    case "custom":
      return slide.content;
  }
}

function useSlideStagger(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!enabled);

  useRevealOnView(ref, setVisible);

  useEffect(() => {
    if (!enabled) {
      setVisible(true);
    }
  }, [enabled]);

  return { ref, visible };
}

function SlideStaggerItem({
  index,
  visible,
  staggerSlides,
  children,
}: {
  index: number;
  visible: boolean;
  staggerSlides: boolean;
  children: ReactNode;
}) {
  if (!staggerSlides) {
    return <>{children}</>;
  }

  const delayClass =
    visible && index > 0
      ? `reveal-up-delay-${Math.min(index, 6)}`
      : undefined;

  return (
    <div
      className={cn(
        "reveal-up",
        visible && "reveal-up-visible",
        delayClass,
      )}
    >
      {children}
    </div>
  );
}

/** Horizontal slide track with optional arrow navigation. */
export function ContentSlider({
  prevRef,
  nextRef,
  slides,
  className,
  bleed = false,
  onOverflowChange,
  staggerSlides = true,
}: ContentSliderProps) {
  const isCarousel = slides.length > 1;
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: staggerRef, visible: staggerVisible } = useSlideStagger(staggerSlides);

  useEffect(() => {
    void import("swiper/css");
  }, []);

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
      <div
        ref={staggerRef}
        className={cn(bleed && "slider-track-bleed", className)}
      >
        <SlideStaggerItem
          index={0}
          visible={staggerVisible}
          staggerSlides={staggerSlides}
        >
          {renderSlide(slide, 0)}
        </SlideStaggerItem>
      </div>
    );
  }

  return (
    <div
      ref={staggerRef}
      className={cn(bleed && "slider-track-bleed", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Content slides"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {activeIndex + 1} of {slides.length}
      </p>
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
          setActiveIndex(instance.activeIndex);
          instance.navigation?.update();
        }}
        className="overflow-visible!"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="w-auto! shrink-0">
            <SlideStaggerItem
              index={index}
              visible={staggerVisible}
              staggerSlides={staggerSlides}
            >
              {renderSlide(slide, index)}
            </SlideStaggerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

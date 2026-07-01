"use client";

import Image from "@/components/ui/Image";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const ANIMATION_ASSETS = siteAssets.designMadeSimpleAnimation;

const DESIGN_WIDTH = 982;
const DESIGN_HEIGHT = 444;

const PROGRESS_DURATION_MS = 2000;
const CYCLE_HOLD_MS = 1800;

function SkeletonBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "design-made-simple-skeleton h-[7px] rounded-[1.5px] bg-border",
        className,
      )}
    />
  );
}

function ServiceSelectionCard() {
  return (
    <div className="design-made-simple-float design-made-simple-float-left absolute left-0 top-[65.55px] flex h-[271px] w-[190px] flex-col justify-between rounded-radius-lg border border-border bg-white p-4">
      <div className="flex flex-col gap-[11px]">
        <div className="inline-flex w-fit items-center gap-1 rounded-full border border-border px-2 py-1">
          <Image
            src={siteAssets.australiaFlag}
            alt=""
            width={10}
            height={10}
            className="size-[10px] shrink-0 rounded-full object-cover"
            aria-hidden
          />
          <span className="font-body text-[8px] font-medium text-text">
            Australia
          </span>
        </div>

        <div className="space-y-2">
          <p className="font-heading text-base font-bold leading-snug text-text">
            Address Validation and Repair
          </p>
          <div className="flex flex-col gap-[6px]" aria-hidden>
            <SkeletonBar className="w-full max-w-[157px]" />
            <SkeletonBar className="w-[146px]" />
            <SkeletonBar className="w-[134px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[6px]" aria-hidden>
          <div className="flex items-center gap-1.5">
            <div className="size-[13px] rounded-sm bg-border/80" />
            <SkeletonBar className="w-[121px]" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-[13px] rounded-sm bg-border/80" />
            <SkeletonBar className="w-[123px]" />
          </div>
        </div>

        <p className="font-body text-[9px] font-medium tracking-tight text-paragraph">
          A$10/credit
        </p>
      </div>

      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        className="w-full rounded bg-brand px-3 py-1 font-body text-[9px] text-white"
      >
        Select
      </button>
    </div>
  );
}

function InProgressBadge() {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1">
      <svg
        viewBox="0 0 12 12"
        className="size-3 shrink-0 text-paragraph"
        aria-hidden
      >
        <circle
          cx="6"
          cy="6"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M6 3.5V6.2L7.8 7.4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-body text-[10px] text-paragraph">In Progress</span>
    </div>
  );
}

function CompletedBadge() {
  return (
    <div className="inline-flex h-[23px] items-center gap-1 rounded-full bg-[#ecfbe7] px-2 py-1">
      <svg
        width="7"
        height="13"
        viewBox="0 0 7 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.87343 8.04559H0L4.0228 0V4.59748H6.89622L2.87343 12.6431V8.04559Z"
          fill="#284E1E"
        />
      </svg>

      <span className="font-body text-[10px] font-semibold text-[#284e1e]">
        Completed
      </span>
    </div>
  );
}

function StatusPanel({ progress }: { progress: number }) {
  const isComplete = progress >= 1;

  return (
    <div className="design-made-simple-float design-made-simple-float-right absolute left-[797.7px] top-[128.27px] flex w-[184px] flex-col gap-3">
      <div className="rounded-radius-lg border border-border bg-white/95 p-4 backdrop-blur-sm">
        <div className="relative mt-3 h-[23px]">
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isComplete ? "opacity-0" : "opacity-100",
            )}
          >
            <InProgressBadge />
          </div>
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              isComplete ? "opacity-100" : "opacity-0",
            )}
          >
            <CompletedBadge />
          </div>
        </div>

        <div className="mt-3 space-y-0.5">
          <p className="font-heading text-sm font-bold text-text">
            Job07_Stewart
          </p>
          <p className="font-body text-[12px] font-medium text-paragraph">
            AU Address Validation
          </p>
        </div>

        <div
          className="mt-3 h-[11px] w-full overflow-hidden rounded-full bg-[#f2e1ff]"
          role="progressbar"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Job progress"
        >
          <div
            className="design-made-simple-progress h-full rounded-full bg-gradient-to-r from-[#493afb] via-[#d03afb] to-[#ffa04b]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-radius-lg border border-border bg-white p-2.5">
        <div className="flex items-center gap-1.5">
          <Image
            src={ANIMATION_ASSETS.jobLogo}
            alt=""
            width={21}
            height={21}
            className="size-[21px] shrink-0 object-contain"
            aria-hidden
          />
          <p className="font-body text-[9px] font-semibold text-text">
            Job07_Stewart_AddressLists
          </p>
        </div>
      </div>
    </div>
  );
}

function WholeUiLayer() {
  return (
    <Image
      src={ANIMATION_ASSETS.wholeUi}
      alt=""
      width={789}
      height={444}
      className="absolute left-[100.615px] top-[0.29px] h-[444px] w-[789px] rounded-radius-lg object-contain"
      priority
      aria-hidden
    />
  );
}

function ForegroundFloatingLayer() {
  return (
    <Image
      src={ANIMATION_ASSETS.foregroundFloating}
      alt=""
      width={208}
      height={126}
      className="design-made-simple-float design-made-simple-float-center absolute left-[79px] top-[253.97px] h-[126px] w-[208px] object-contain"
      aria-hidden
    />
  );
}

export function DesignMadeSimpleAnimation({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [progress, setProgress] = useState(0);
  const [cycleId, setCycleId] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const updateScale = () => {
      setScale(Math.min(1, container.clientWidth / DESIGN_WIDTH));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setProgress(1);
      return;
    }

    setProgress(0);
    let progressFrame = 0;
    let holdTimer = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const nextProgress = Math.min(1, elapsed / PROGRESS_DURATION_MS);
      setProgress(nextProgress);

      if (nextProgress < 1) {
        progressFrame = requestAnimationFrame(tick);
        return;
      }

      holdTimer = window.setTimeout(() => {
        setCycleId((id) => id + 1);
      }, CYCLE_HOLD_MS);
    };

    progressFrame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(progressFrame);
      window.clearTimeout(holdTimer);
    };
  }, [cycleId]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "design-made-simple-animation w-full max-w-full overflow-x-clip",
        className,
      )}
      aria-label="Design made simple product workflow demonstration"
    >
      <div
        className="relative mx-auto"
        style={{
          width: DESIGN_WIDTH * scale,
          height: DESIGN_HEIGHT * scale,
        }}
      >
        <div
          className="absolute left-1/2 top-0 origin-top"
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          <div className="relative size-full">
            <WholeUiLayer />
            <ServiceSelectionCard />
            <ForegroundFloatingLayer />
            <StatusPanel progress={progress} />
          </div>
        </div>
      </div>
    </div>
  );
}

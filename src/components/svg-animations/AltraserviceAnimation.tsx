"use client";

import Image from "@/components/ui/Image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

const ANIMATION_ASSETS = siteAssets.altraserviceAnimation;

const DESIGN_WIDTH = 1200;
const DESIGN_HEIGHT = 458;

const HIGHLIGHT_DELAY_MS = 350;
const HIGHLIGHT_PAUSE_MS = 550;
const CORRECT_STEP_MS = 120;
const GREEN_PAUSE_MS = 450;
const CYCLE_PAUSE_MS = 1200;

const GAUGE_RECORDS_TOTAL = 100_000;
const GAUGE_SECONDS_START = 30;
const GAUGE_COUNT_DURATION_MS = 30_000;
const GAUGE_COUNT_HOLD_MS = 1_200;

type CyclePhase = "left" | "charlie" | "pause";

const CHARLIE_ADDRESS_CLASS =
  "whitespace-nowrap font-body text-[14.5px] font-medium leading-tight text-[#1a7a45]";

const LEFT_ADDRESS_CLASS =
  "flex flex-wrap items-center gap-0.5 font-body text-[15px] font-medium leading-snug text-[#484964]";

function addressDemoCorrectionClassName(
  phase: CorrectionPhase,
  options?: { finalized?: boolean; highlightBackground?: boolean },
) {
  const finalized = options?.finalized ?? false;
  const highlightBackground = options?.highlightBackground ?? true;
  const showHighlight = phase !== "initial" || finalized;
  const showRed =
    !finalized && (phase === "highlighted" || phase === "correcting");
  const showGreen = finalized || phase === "green";

  return cn(
    highlightBackground && showHighlight && "address-demo-highlight",
    showRed && "address-demo-red",
    showGreen &&
      (highlightBackground ? "address-demo-green" : "text-[#1a7a45]"),
  );
}

function AddressDemoHighlight({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "error" | "success";
}) {
  return (
    <span
      className={cn(
        "address-demo-highlight",
        variant === "error" ? "address-demo-red" : "address-demo-green",
      )}
    >
      {children}
    </span>
  );
}

type PlainSegment = { text: string; type: "plain"; reveal?: "afterCorrect" };
type CorrectionSegment = {
  initial: string;
  correct: string;
  type: "correction";
  id: string;
};
type SegmentDef = PlainSegment | CorrectionSegment;
type CorrectionPhase = "initial" | "highlighted" | "correcting" | "green";

function CharlieWilsonPreIdleAddress() {
  return (
    <p className={CHARLIE_ADDRESS_CLASS}>
      6 bal<span className="text-error">l</span>for st bri
      <span className="text-error">t</span>on{" "}
      <span className="text-error">east</span> vic
    </p>
  );
}

function CharlieWilsonPostIdleAddress() {
  return (
    <p className={CHARLIE_ADDRESS_CLASS}>
      {CHARLIE_SEGMENTS.map((segment, index) => (
        <span
          key={`charlie-done-${index}`}
          className={
            segment.type === "correction" ? "text-[#1a7a45]" : undefined
          }
        >
          {segment.type === "correction" ? segment.correct : segment.text}
        </span>
      ))}
    </p>
  );
}

function LeftAddressPostIdle() {
  return (
    <div className={LEFT_ADDRESS_CLASS}>
      <AddressDemoHighlight variant="success">Lot 5</AddressDemoHighlight>
      <span>Harold St, Silkwood</span>
    </div>
  );
}

const LEFT_CARD_SEGMENTS: SegmentDef[] = [
  { initial: "Lat5", correct: "Lot 5", type: "correction", id: "left-lot" },
  { text: " Harold St, Silkwood", type: "plain" },
];

const CHARLIE_SEGMENTS: SegmentDef[] = [
  { text: "6 ", type: "plain" },
  { initial: "ballfor", correct: "Balfour", type: "correction", id: "cw-c1" },
  { initial: " st bri", correct: " St ", type: "correction", id: "cw-c2" },
  {
    initial: "ton east",
    correct: "EAST BRIGHTON",
    type: "correction",
    id: "cw-c3",
  },
  { initial: " vic", correct: " VIC", type: "correction", id: "cw-c4" },
];

function getCorrectionCount(segments: SegmentDef[]) {
  return segments.filter((segment) => segment.type === "correction").length;
}

function getCorrectionIndices(segments: SegmentDef[]) {
  const indices: (number | null)[] = [];
  let counter = 0;
  for (const segment of segments) {
    if (segment.type === "correction") {
      indices.push(counter);
      counter += 1;
    } else {
      indices.push(null);
    }
  }
  return indices;
}

function getAddressTurnGreenMs(correctionCount: number) {
  return (
    HIGHLIGHT_DELAY_MS + HIGHLIGHT_PAUSE_MS + correctionCount * CORRECT_STEP_MS
  );
}

function StatusBadge({ variant }: { variant: "repairing" | "identified" }) {
  if (variant === "identified") {
    return (
      <span className="shrink-0 rounded-full border border-[#20a960] bg-[#e0ffee] px-2 py-1 font-body text-[7px] font-semibold uppercase leading-none text-[#20a960]">
        Identified
      </span>
    );
  }

  return (
    <span className="shrink-0 rounded-full border border-[#dc2626] bg-[#fce8e8] px-2 py-1 font-body text-[7px] font-semibold uppercase leading-none text-[#dc2626]">
      Repairing
    </span>
  );
}

function CorrectAddressAnimation({
  segments,
  active,
  onComplete,
  textClassName,
  highlightBackground = true,
}: {
  segments: SegmentDef[];
  active: boolean;
  onComplete: () => void;
  textClassName?: string;
  highlightBackground?: boolean;
}) {
  const correctionCount = getCorrectionCount(segments);
  const correctionIndices = useMemo(
    () => getCorrectionIndices(segments),
    [segments],
  );
  const [phase, setPhase] = useState<CorrectionPhase>("initial");
  const [correctedCount, setCorrectedCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];
    const schedule = (callback: () => void, delayMs: number) => {
      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) {
            callback();
          }
        }, delayMs),
      );
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      schedule(() => {
        setPhase("green");
        setCorrectedCount(correctionCount);
        onComplete();
      }, 100);
      return () => timeouts.forEach((id) => window.clearTimeout(id));
    }

    schedule(() => setPhase("highlighted"), HIGHLIGHT_DELAY_MS);
    const correctingStart = HIGHLIGHT_DELAY_MS + HIGHLIGHT_PAUSE_MS;
    schedule(() => setPhase("correcting"), correctingStart);

    for (let index = 0; index < correctionCount; index++) {
      schedule(
        () => setCorrectedCount(index + 1),
        correctingStart + (index + 1) * CORRECT_STEP_MS,
      );
    }

    const greenStart = getAddressTurnGreenMs(correctionCount);
    schedule(() => setPhase("green"), greenStart);
    schedule(() => onComplete(), greenStart + GREEN_PAUSE_MS);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [active, correctionCount, onComplete, segments]);

  if (!active) {
    return null;
  }

  return (
    <div className={cn("font-body leading-snug text-[#484964]", textClassName)}>
      {segments.map((segment, segmentIndex) => {
        if (segment.type === "plain") {
          if (
            segment.reveal === "afterCorrect" &&
            correctedCount < correctionCount
          ) {
            return null;
          }
          return <span key={`plain-${segmentIndex}`}>{segment.text}</span>;
        }

        const currentCorrectionIndex = correctionIndices[segmentIndex];
        if (currentCorrectionIndex === null) {
          return null;
        }

        const isCorrected = correctedCount > currentCorrectionIndex;
        const displayText = isCorrected ? segment.correct : segment.initial;

        return (
          <span
            key={segment.id}
            className={addressDemoCorrectionClassName(phase, {
              highlightBackground,
            })}
          >
            {displayText}
          </span>
        );
      })}
    </div>
  );
}

function BackgroundAddresses() {
  return (
    <div
      className="pointer-events-none absolute left-[70px] top-0 w-[1055px] opacity-80"
      aria-hidden
    >
      <Image
        src={ANIMATION_ASSETS.addresses}
        alt=""
        width={1055}
        height={209}
        className="h-[209px] w-full object-contain object-left-top"
      />
    </div>
  );
}

function WholeUiStatic() {
  return (
    <div
      className="pointer-events-none absolute left-[162px] top-[38px] w-[876px]"
      aria-hidden
    >
      <div className="relative overflow-hidden">
        <Image
          src={ANIMATION_ASSETS.wholeUi}
          alt=""
          width={876}
          height={420}
          className="h-[420px] w-full object-cover object-top"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-[420px] " />
      </div>
    </div>
  );
}

function RepairingCard({ scale = 1 }: { scale?: number }) {
  const fontSize = scale < 0.92 ? 12 : 13;

  return (
    <div
      className="rounded-radius-lg border border-border bg-white p-4"
      style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <p className="font-body text-[11px] font-medium text-muted">
            Complete Address
          </p>
          <div className="flex flex-wrap items-center gap-0.5">
            <AddressDemoHighlight variant="error">
              <span style={{ fontSize }}>Lat5</span>
            </AddressDemoHighlight>
            <span
              className="font-body font-medium text-[#484964]"
              style={{ fontSize }}
            >
              Harold St, Silkwood
            </span>
          </div>
        </div>
        <StatusBadge variant="repairing" />
      </div>
    </div>
  );
}

function LeftAddressCardStack({
  cycleId,
  phase,
  onComplete,
}: {
  cycleId: number;
  phase: CyclePhase;
  onComplete: () => void;
}) {
  return (
    <div className="absolute bottom-[15px] left-0 w-[320px]">
      <div className="altraservice-float altraservice-float-left">
        <div className="mb-3 flex justify-center">
          <Image
            src={ANIMATION_ASSETS.cubes}
            alt=""
            width={320}
            height={136}
            className="h-[136px] w-auto object-contain"
            aria-hidden
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="z-[1] mb-[-60px] w-[84%]">
            <RepairingCard scale={0.88} />
          </div>
          <div className="z-[2] mb-[-60px] w-[92%]">
            <RepairingCard scale={0.95} />
          </div>

          <div className="z-[3] w-full rounded-radius-lg border border-border bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 space-y-1">
                <p className="font-body text-[13px] font-medium text-muted">
                  Complete Address
                </p>
                {phase === "left" ? (
                  <CorrectAddressAnimation
                    key={cycleId}
                    segments={LEFT_CARD_SEGMENTS}
                    active
                    onComplete={onComplete}
                    textClassName={LEFT_ADDRESS_CLASS}
                  />
                ) : (
                  <LeftAddressPostIdle />
                )}
              </div>
              <StatusBadge
                variant={phase === "left" ? "repairing" : "identified"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatGaugeNumber(value: number) {
  return value.toLocaleString("en-US");
}

function useGaugeCountAnimation() {
  const [records, setRecords] = useState(0);
  const [seconds, setSeconds] = useState(GAUGE_SECONDS_START);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setRecords(GAUGE_RECORDS_TOTAL);
      setSeconds(0);
      return;
    }

    setRecords(0);
    setSeconds(GAUGE_SECONDS_START);

    let raf = 0;
    let holdTimer: number | undefined;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;

      if (elapsed >= GAUGE_COUNT_DURATION_MS) {
        setRecords(GAUGE_RECORDS_TOTAL);
        setSeconds(0);
        holdTimer = window.setTimeout(() => {
          setRunId((id) => id + 1);
        }, GAUGE_COUNT_HOLD_MS);
        return;
      }

      const progress = elapsed / GAUGE_COUNT_DURATION_MS;
      setRecords(
        Math.min(
          GAUGE_RECORDS_TOTAL,
          Math.round(progress * GAUGE_RECORDS_TOTAL),
        ),
      );
      setSeconds(Math.max(0, GAUGE_SECONDS_START - Math.floor(elapsed / 1000)));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (holdTimer !== undefined) {
        window.clearTimeout(holdTimer);
      }
    };
  }, [runId]);

  return { records, seconds };
}

function SpeedGaugeLabels() {
  const { records, seconds } = useGaugeCountAnimation();

  return (
    <div className="mt-3 flex flex-col items-center gap-0.5 text-center text-[14px] tracking-tight">
      <p className="w-full font-body font-bold tabular-nums text-brand">
        {formatGaugeNumber(records)} of 100,000 records
      </p>
      <p className="w-full font-body font-normal tabular-nums text-paragraph">
        {seconds} seconds remaining...
      </p>
    </div>
  );
}

function SpeedGaugeCard() {
  return (
    <div className="rounded-radius-lg border border-border bg-white px-7 py-6 text-center">
      <Image
        src={ANIMATION_ASSETS.gauge}
        alt=""
        width={206}
        height={108}
        className="mx-auto h-[108px] w-auto object-contain"
        aria-hidden
      />
      <SpeedGaugeLabels />
    </div>
  );
}

function CharlieWilsonCard({
  cycleId,
  phase,
  onComplete,
}: {
  cycleId: number;
  phase: CyclePhase;
  onComplete: () => void;
}) {
  return (
    <div className="rounded-radius-lg border border-border bg-white p-5">
      <div className="flex items-center gap-3">
        <Image
          src={ANIMATION_ASSETS.avatarCharlie}
          alt=""
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-radius-lg object-cover"
          aria-hidden
        />
        <div className="min-w-0 flex-1 overflow-hidden">
          <p className="font-body text-[15px] font-medium text-muted">
            Charlie Wilson
          </p>
          <div className="min-h-[18px]">
            {phase === "charlie" ? (
              <CorrectAddressAnimation
                key={`${cycleId}-charlie`}
                segments={CHARLIE_SEGMENTS}
                active
                onComplete={onComplete}
                textClassName={CHARLIE_ADDRESS_CLASS}
                highlightBackground={false}
              />
            ) : phase === "pause" ? (
              <CharlieWilsonPostIdleAddress />
            ) : (
              <CharlieWilsonPreIdleAddress />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingRocket() {
  return (
    <div className="pointer-events-none absolute -left-14 top-2 z-10 rotate-[5.37deg]">
      <div className="altraservice-float">
        <Image
          src={ANIMATION_ASSETS.rocket}
          alt=""
          width={113}
          height={113}
          className="size-[113px] object-contain"
          aria-hidden
        />
      </div>
    </div>
  );
}

function RightPanel({
  cycleId,
  phase,
  onCharlieComplete,
}: {
  cycleId: number;
  phase: CyclePhase;
  onCharlieComplete: () => void;
}) {
  return (
    <div className="absolute bottom-[15px] right-0 w-[321px]">
      <div className="relative">
        <FloatingRocket />
        <div className="altraservice-float altraservice-float-right flex flex-col gap-3">
          <SpeedGaugeCard />
          <CharlieWilsonCard
            cycleId={cycleId}
            phase={phase}
            onComplete={onCharlieComplete}
          />
        </div>
      </div>
    </div>
  );
}

export function AltraserviceAnimation({ className }: { className?: string }) {
  const [phase, setPhase] = useState<CyclePhase>("left");
  const [cycleId, setCycleId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const handleLeftComplete = useCallback(() => {
    setPhase("charlie");
  }, []);

  const handleCharlieComplete = useCallback(() => {
    setPhase("pause");
  }, []);

  useEffect(() => {
    if (phase !== "pause") {
      return;
    }

    const timer = window.setTimeout(() => {
      setCycleId((id) => id + 1);
      setPhase("left");
    }, CYCLE_PAUSE_MS);

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setPhase("pause");
    }
  }, [cycleId]);

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

  return (
    <div
      ref={containerRef}
      className={cn(
        "altraservice-animation w-full max-w-full overflow-x-clip",
        className,
      )}
      aria-label="Altraservice batch processing speed demonstration"
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
            <BackgroundAddresses />
            <WholeUiStatic />
            <LeftAddressCardStack
              cycleId={cycleId}
              phase={phase}
              onComplete={handleLeftComplete}
            />
            <RightPanel
              cycleId={cycleId}
              phase={phase}
              onCharlieComplete={handleCharlieComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

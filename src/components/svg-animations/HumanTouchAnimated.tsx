"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

const ANIMATION_ASSETS = siteAssets.humanTouchAnimation;

const DESIGN_WIDTH = 1200;
const DESIGN_HEIGHT = 492;
const TYPING_SPEED_MS = 70;

const HIGHLIGHT_DELAY_MS = 350;
const HIGHLIGHT_PAUSE_MS = 550;
const CORRECT_STEP_MS = 120;
const GREEN_PAUSE_MS = 450;

type TextPart = { text: string; highlight?: "error" | "success" };

type PlainSegment = { text: string; type: "plain"; reveal?: "afterCorrect" };
type CorrectionSegment = {
  initial: string;
  correct: string;
  type: "correction";
  id: string;
};
type SegmentDef = PlainSegment | CorrectionSegment;
type CorrectionPhase = "initial" | "highlighted" | "correcting" | "green";

type RepairRow = {
  inputChunks: TextPart[];
  suggestion: string;
  segments: SegmentDef[];
};

const TYPING_INPUT = {
  inputChunks: [
    { text: "5 " },
    { text: "sesil", highlight: "error" as const },
    { text: " " },
    { text: "st", highlight: "error" as const },
    { text: " " },
    { text: "marylands", highlight: "error" as const },
    { text: " " },
    { text: "nsw", highlight: "error" as const },
  ],
  suggestion: "5 cecil st merrylands NSW 2160",
};

const REPAIR_ROWS: RepairRow[] = [
  {
    inputChunks: TYPING_INPUT.inputChunks,
    suggestion: TYPING_INPUT.suggestion,
    segments: [
      { text: "5 ", type: "plain" },
      { initial: "sesil", correct: "Cecil", type: "correction", id: "r0-c1" },
      { initial: " st ", correct: " St ", type: "correction", id: "r0-c2" },
      {
        initial: "marylands",
        correct: "MERRYLANDS",
        type: "correction",
        id: "r0-c3",
      },
      { text: " ", type: "plain" },
      { initial: "nsw", correct: "NSW", type: "correction", id: "r0-c4" },
      { text: " 2160", type: "plain", reveal: "afterCorrect" },
    ],
  },
  {
    inputChunks: [
      { text: "6 " },
      { text: "ballfor", highlight: "error" },
      { text: " st bri" },
      { text: "ton ", highlight: "error" },
      { text: "east", highlight: "error" },
      { text: " vic", highlight: "error" },
    ],
    suggestion: "6 balfour st east brighton VIC 3187",
    segments: [
      { text: "6 ", type: "plain" },
      {
        initial: "ballfor",
        correct: "Balfour",
        type: "correction",
        id: "r1-c1",
      },
      { initial: " st ", correct: " St ", type: "correction", id: "r1-c2" },
      {
        initial: "briton east",
        correct: "EAST BRIGHTON",
        type: "correction",
        id: "r1-c3",
      },
      { initial: " vic", correct: " VIC ", type: "correction", id: "r1-c4" },
      { text: "3187", type: "plain", reveal: "afterCorrect" },
    ],
  },
];

const ANIMATED_ROW_COUNT = REPAIR_ROWS.length;

const ROW_ADVANCE_MS = 600;

type InputSegmentDef =
  | { text: string; type: "plain" }
  | { text: string; type: "error" };

type InputSegmentState = InputSegmentDef & {
  wrapper?: HTMLSpanElement | null;
  element?: HTMLSpanElement | null;
};

const HIGHLIGHT_AFTER_TYPING_MS = 800;
const SUGGESTION_FREEZE_MS = 1500;

function partsToInputSegments(parts: TextPart[]): InputSegmentDef[] {
  return parts.map((part) =>
    part.highlight === "error"
      ? { text: part.text, type: "error" as const }
      : { text: part.text, type: "plain" as const },
  );
}

function sleep(ms: number, timeouts: number[]) {
  return new Promise<void>((resolve) => {
    timeouts.push(window.setTimeout(resolve, ms));
  });
}

function ensureTypingCursor(display: HTMLElement): HTMLSpanElement {
  let cursor = display.querySelector<HTMLSpanElement>("[data-typing-cursor]");
  if (!cursor) {
    cursor = document.createElement("span");
    cursor.dataset.typingCursor = "";
    cursor.className = "address-demo-cursor";
    cursor.setAttribute("aria-hidden", "true");
    display.appendChild(cursor);
  }
  if (display.lastChild !== cursor) {
    display.appendChild(cursor);
  }
  return cursor;
}

function ensureSegmentWrapper(
  seg: InputSegmentState,
  display: HTMLElement,
  cursor: HTMLSpanElement,
) {
  if (seg.wrapper) {
    return seg.wrapper;
  }

  const wrapper = document.createElement("span");
  wrapper.className = "inline-block shrink-0";
  seg.wrapper = wrapper;

  if (seg.type === "error") {
    const element = document.createElement("span");
    element.className = "address-demo-red";
    seg.element = element;
    wrapper.appendChild(element);
  }

  display.insertBefore(wrapper, cursor);
  return wrapper;
}

function typeInputSegments(
  sequence: InputSegmentState[],
  display: HTMLElement,
  cursor: HTMLSpanElement,
  timeouts: number[],
): Promise<void> {
  display.replaceChildren();
  display.appendChild(cursor);
  cursor.style.display = "inline-block";

  return new Promise((resolve) => {
    let segIndex = 0;

    function nextSeg() {
      if (segIndex >= sequence.length) {
        resolve();
        return;
      }

      const seg = sequence[segIndex];
      let charIndex = 0;

      function typeChar() {
        if (charIndex >= seg.text.length) {
          segIndex += 1;
          nextSeg();
          return;
        }

        const ch = seg.text.charAt(charIndex);
        const wrapper = ensureSegmentWrapper(seg, display, cursor);

        if (seg.type === "error" && seg.element) {
          seg.element.textContent = (seg.element.textContent ?? "") + ch;
        } else {
          wrapper.textContent = (wrapper.textContent ?? "") + ch;
        }

        charIndex += 1;
        timeouts.push(window.setTimeout(typeChar, TYPING_SPEED_MS));
      }

      typeChar();
    }

    nextSeg();
  });
}

function highlightErrorsAndPause(timeouts: number[]) {
  return sleep(HIGHLIGHT_AFTER_TYPING_MS, timeouts);
}

function renderStaticInput(display: HTMLElement, segments: InputSegmentDef[]) {
  display.replaceChildren();
  for (const segment of segments) {
    const wrapper = document.createElement("span");
    wrapper.className = "inline-block shrink-0";

    if (segment.type === "error") {
      const span = document.createElement("span");
      span.className = "address-demo-red";
      span.textContent = segment.text;
      wrapper.appendChild(span);
    } else {
      wrapper.textContent = segment.text;
    }

    display.appendChild(wrapper);
  }
}

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

function ToastCloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      className={cn("size-2.5 shrink-0", className)}
      aria-hidden
    >
      <path
        d="M1 1L9 9M9 1L1 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Whole UI - no animation here */
function WholeUiStatic() {
  return (
    <div
      className="relative mx-auto h-[492px] w-[975px] shrink-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src={ANIMATION_ASSETS.wholeUi}
        alt=""
        width={975}
        height={492}
        className="size-full object-cover object-top"
        priority
      />
    </div>
  );
}

function TypingInputHighlight({
  parts,
  resetKey,
  onSuggestionShow,
  onComplete,
}: {
  parts: TextPart[];
  resetKey: string;
  onSuggestionShow: () => void;
  onComplete: () => void;
}) {
  const displayRef = useRef<HTMLDivElement>(null);
  const onSuggestionShowRef = useRef(onSuggestionShow);
  const onCompleteRef = useRef(onComplete);
  const segments = useMemo(() => partsToInputSegments(parts), [parts]);

  useEffect(() => {
    onSuggestionShowRef.current = onSuggestionShow;
  }, [onSuggestionShow]);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const display = displayRef.current;
    if (!display) {
      return;
    }

    const displayEl = display;
    const timeouts: number[] = [];
    let cancelled = false;
    const sequence: InputSegmentState[] = segments.map((segment) => ({
      ...segment,
    }));

    async function run() {
      const cursor = ensureTypingCursor(displayEl);
      await typeInputSegments(sequence, displayEl, cursor, timeouts);
      if (cancelled) {
        return;
      }

      await highlightErrorsAndPause(timeouts);
      if (cancelled) {
        return;
      }

      onSuggestionShowRef.current();
      await sleep(SUGGESTION_FREEZE_MS, timeouts);
      if (cancelled) {
        return;
      }

      onCompleteRef.current();
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      renderStaticInput(displayEl, segments);
      let timeoutId: number | undefined;
      const frame = window.requestAnimationFrame(() => {
        onSuggestionShowRef.current();
        timeoutId = window.setTimeout(() => {
          onCompleteRef.current();
        }, SUGGESTION_FREEZE_MS);
      });
      return () => {
        window.cancelAnimationFrame(frame);
        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }
      };
    }

    void run();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [segments, resetKey]);

  return (
    <div
      ref={displayRef}
      className="flex h-auto w-full flex-wrap items-center justify-start gap-0.5 overflow-hidden text-left font-body text-[16px] text-[#344051]"
    />
  );
}

function CorrectAddressAnimation({
  segments,
  active,
  onComplete,
}: {
  segments: SegmentDef[];
  active: boolean;
  onComplete: () => void;
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
    <p className="font-body text-[15px] leading-6 text-[#484964]">
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
        const showRed = phase === "highlighted" || phase === "correcting";
        const showGreen = phase === "green";

        return (
          <span
            key={segment.id}
            className={cn(
              showRed && "text-[#ed1c24]",
              showGreen && "text-[#27a963]",
            )}
          >
            {displayText}
          </span>
        );
      })}
    </p>
  );
}

/** animated forground */
function AnimatedForeground({
  cycleId,
  completedCards,
  showSuggestion,
  onSuggestionShow,
  onTypingComplete,
  onCorrectionComplete,
}: {
  cycleId: number;
  completedCards: boolean[];
  showSuggestion: boolean;
  onSuggestionShow: () => void;
  onTypingComplete: () => void;
  onCorrectionComplete: (index: number) => void;
}) {
  const showRepairedToast =
    completedCards.some(Boolean) || !completedCards.every(Boolean);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-1/2 flex w-full -translate-y-1/2 items-center justify-between">
      <div className="flex w-[265px] flex-col gap-3 pl-0">
        <div className="flex items-center justify-between gap-3 rounded-md border border-[#fec9c8] bg-[#ffe6e6] p-3">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={ANIMATION_ASSETS.toastError}
              alt=""
              width={16}
              height={16}
              style={{ width: 16, height: 16 }}
              aria-hidden
            />

            <p className="font-body text-[14px] font-medium leading-normal text-[#f03837]">
              Invalid address!
            </p>
          </div>
          <ToastCloseIcon className="text-[#f03837]" />
        </div>

        <div className="rounded-md border border-[#e2e2e6] bg-white h-fit p-4">
          <div className="relative">
            <div
              className={cn(
                "rounded-[6px] border border-[#ffbfbe] bg-white p-3",
                showSuggestion && "rounded-b-none border-b-0",
              )}
            >
              <TypingInputHighlight
                key={cycleId}
                parts={TYPING_INPUT.inputChunks}
                resetKey={String(cycleId)}
                onSuggestionShow={onSuggestionShow}
                onComplete={onTypingComplete}
              />
            </div>

            {/* show after typing — dropdown attached to textbox */}
            <div
              className={cn(
                "text-left absolute inset-x-0 top-full z-10 rounded-b-[6px] border border-[#ffbfbe] border-t-0 bg-[#f7f7f8] px-3 py-2",
                showSuggestion ? "block" : "hidden",
              )}
            >
              <p className="font-body text-[12px] font-medium text-[#344051] ">
                Did you mean?
              </p>
              <p className="mt-0.5 font-body text-[12px] capitalize text-[#344051]">
                {TYPING_INPUT.suggestion}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[247px] flex-col gap-3 pr-0">
        <div
          className={cn(
            "flex w-full items-center justify-between gap-3 rounded-md border border-[#a8d5fe] bg-[#def0ff] p-3",
            !showRepairedToast && "hidden",
          )}
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src={ANIMATION_ASSETS.toastSuccess}
              alt=""
              width={18}
              height={18}
              style={{ width: 18, height: 18 }}
              aria-hidden
            />

            <p className="font-body text-[14px] font-medium leading-normal text-[#2470de]">
              Repaired address!
            </p>
          </div>
          <ToastCloseIcon className="text-[#2470de]" />
        </div>

        <div className="flex flex-col gap-3">
          {REPAIR_ROWS.map((row, index) => {
            const isComplete = completedCards[index];

            return (
              <div
                key={`${cycleId}-${row.suggestion}`}
                className="rounded-md border border-[#e2e2e6] bg-white px-4 py-3.5 text-left"
              >
                {isComplete ? (
                  <p className="font-body text-[15px] leading-6 text-[#484964]">
                    {row.segments.map((segment, segmentIndex) => {
                      if (segment.type === "plain") {
                        return (
                          <span key={`done-${segmentIndex}`}>
                            {segment.text}
                          </span>
                        );
                      }
                      return (
                        <span key={segment.id} className="text-[#27a963]">
                          {segment.correct}
                        </span>
                      );
                    })}
                  </p>
                ) : (
                  <CorrectAddressAnimation
                    key={`${cycleId}-${index}`}
                    segments={row.segments}
                    active
                    onComplete={() => onCorrectionComplete(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function HumanTouchAnimated({ className }: { className?: string }) {
  const [completedCards, setCompletedCards] = useState(() =>
    Array.from({ length: ANIMATED_ROW_COUNT }, () => false),
  );
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [rowTypingDone, setRowTypingDone] = useState(false);
  const [cycleId, setCycleId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const handleSuggestionShow = useCallback(() => {
    setShowSuggestion(true);
  }, []);

  const handleTypingComplete = useCallback(() => {
    setRowTypingDone(true);
  }, []);

  const handleCorrectionComplete = useCallback((index: number) => {
    setCompletedCards((current) => {
      const next = [...current];
      next[index] = true;
      return next;
    });
  }, []);

  const allCorrectionsDone = completedCards.every(Boolean);

  useEffect(() => {
    if (!rowTypingDone || !allCorrectionsDone) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCompletedCards(
        Array.from({ length: ANIMATED_ROW_COUNT }, () => false),
      );
      setCycleId((id) => id + 1);
      setShowSuggestion(false);
      setRowTypingDone(false);
    }, ROW_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [rowTypingDone, allCorrectionsDone]);

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
        "human-touch-animated w-full max-w-full overflow-x-clip",
        className,
      )}
      aria-label="Human Touch address repair demonstration"
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
            <WholeUiStatic />
            <AnimatedForeground
              cycleId={cycleId}
              completedCards={completedCards}
              showSuggestion={showSuggestion}
              onSuggestionShow={handleSuggestionShow}
              onTypingComplete={handleTypingComplete}
              onCorrectionComplete={handleCorrectionComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

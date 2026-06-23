"use client";

import { AppImage as Image } from "@/components/atoms/AppImage";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

const ANIMATION_ASSETS = assets.addressValidateAnimation;

type TextPart = { text: string; highlight?: "error" | "success" };

type InputRow = {
  id: string;
  parts: TextPart[];
};

type OutputRow = {
  id: string;
};

type PlainSegment = { text: string; type: "plain"; reveal?: "afterCorrect" };
type CorrectionSegment = {
  initial: string;
  correct: string;
  type: "correction";
  id: string;
};
type SegmentDef = PlainSegment | CorrectionSegment;

const CORRECTION_SEQUENCES: SegmentDef[][] = [
  [
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
  [
    { text: "6 ", type: "plain" },
    { initial: "ballfor", correct: "Balfour", type: "correction", id: "r1-c1" },
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
  [
    { text: "9 ", type: "plain" },
    { initial: "halford", correct: "Alford", type: "correction", id: "r2-c1" },
    { initial: " st ", correct: " St ", type: "correction", id: "r2-c2" },
    {
      initial: "newfarm",
      correct: "NEW FARM",
      type: "correction",
      id: "r2-c3",
    },
    { initial: " qld", correct: " QLD ", type: "correction", id: "r2-c4" },
    { text: "4005", type: "plain", reveal: "afterCorrect" },
  ],
];

const OUTPUT_ROWS: OutputRow[] = [
  { id: "out-1" },
  { id: "out-2" },
  { id: "out-3" },
];

const ROW_CYCLE_MS = 3600;
const HIGHLIGHT_DELAY_MS = 350;
const HIGHLIGHT_PAUSE_MS = 550;
const CORRECT_STEP_MS = 120;
const GREEN_PAUSE_MS = 450;
const REPAIRED_BADGE_DELAY_MS = 400;
const TYPING_SPEED_MS = 70;

function getAddressTurnGreenMs(correctionCount: number) {
  return (
    HIGHLIGHT_DELAY_MS + HIGHLIGHT_PAUSE_MS + correctionCount * CORRECT_STEP_MS
  );
}

const INPUT_ROWS: InputRow[] = [
  {
    id: "au-1",
    parts: [
      { text: "5 " },
      { text: "s", highlight: "error" },
      { text: "e", highlight: "error" },
      { text: "s", highlight: "error" },
      { text: "il st " },
      { text: "mary", highlight: "error" },
      { text: "lands nsw" },
    ],
  },
  {
    id: "au-2",
    parts: [
      { text: "6 bal" },
      { text: "l", highlight: "error" },
      { text: "for st bri" },
      { text: "t", highlight: "error" },
      { text: "on " },
      { text: "east", highlight: "error" },
      { text: " vic" },
    ],
  },
  {
    id: "au-3",
    parts: [
      { text: "9 " },
      { text: "ha", highlight: "error" },
      { text: "lford st " },
      { text: "newfarm", highlight: "error" },
      { text: " qld" },
    ],
  },
];

type RowStatus = "pending" | "loading" | "validated";
type CorrectionPhase = "initial" | "highlighted" | "correcting" | "green";

function getLinkedRowStatus(
  index: number,
  activeRow: number,
  rowPhase: "loading" | "done",
  validatedRows: boolean[],
): RowStatus {
  if (validatedRows[index]) {
    return "validated";
  }

  if (activeRow === index) {
    return rowPhase === "loading" ? "loading" : "validated";
  }

  return "pending";
}

function HighlightedText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={`${part.text}-${index}`}
          className={cn(
            part.highlight === "error" && "text-error",
            part.highlight === "success" && "text-[#27a963]",
          )}
        >
          {part.text}
        </span>
      ))}
    </>
  );
}

type CharEntry = { char: string; highlight?: "error" | "success" };

function partsToCharMap(parts: TextPart[]): CharEntry[] {
  const result: CharEntry[] = [];

  for (const part of parts) {
    for (const char of part.text) {
      result.push({ char, highlight: part.highlight });
    }
  }

  return result;
}

function groupCharEntriesForRender(entries: CharEntry[]) {
  const groups: TextPart[] = [];

  for (const entry of entries) {
    const last = groups[groups.length - 1];

    if (last && last.highlight === entry.highlight) {
      last.text += entry.char;
    } else {
      groups.push({ text: entry.char, highlight: entry.highlight });
    }
  }

  return groups;
}

function TypingAddressText({ parts }: { parts: TextPart[] }) {
  const charMap = useMemo(() => partsToCharMap(parts), [parts]);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const frame = window.requestAnimationFrame(() => {
        setTypedCount(charMap.length);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    let count = 0;
    const timeouts: number[] = [];

    const tick = () => {
      count += 1;
      setTypedCount(count);

      if (count < charMap.length) {
        timeouts.push(window.setTimeout(tick, TYPING_SPEED_MS));
      }
    };

    timeouts.push(window.setTimeout(tick, TYPING_SPEED_MS));

    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [charMap]);

  const visibleGroups = groupCharEntriesForRender(charMap.slice(0, typedCount));

  return (
    <>
      <HighlightedText parts={visibleGroups} />
      <span className="address-demo-cursor" aria-hidden />
    </>
  );
}

function InputCard({
  parts,
  active,
  resetKey,
}: {
  parts: TextPart[];
  active: boolean;
  resetKey: number;
}) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-radius-lg border border-border bg-white px-5 py-4 transition-shadow duration-500 flex flex-col justify-center",
        active && "address-validate-card-active shadow-md",
      )}
    >
      <p className="font-body text-body-sm font-medium text-muted">
        Complete Address
      </p>
      <p className="mt-1 whitespace-nowrap font-body text-body font-normal text-text">
        {active ? (
          <TypingAddressText key={resetKey} parts={parts} />
        ) : (
          <HighlightedText parts={parts} />
        )}
      </p>
    </div>
  );
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

function AddressCorrectionText({
  segments,
  finalized = false,
  onComplete,
}: {
  segments: SegmentDef[];
  finalized?: boolean;
  onComplete?: () => void;
}) {
  const correctionCount = getCorrectionCount(segments);
  const correctionIndices = useMemo(
    () => getCorrectionIndices(segments),
    [segments],
  );
  const [phase, setPhase] = useState<CorrectionPhase>(
    finalized ? "green" : "initial",
  );
  const [correctedCount, setCorrectedCount] = useState(
    finalized ? correctionCount : 0,
  );

  useEffect(() => {
    if (finalized) {
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
        onComplete?.();
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
    schedule(() => onComplete?.(), greenStart + GREEN_PAUSE_MS);

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [correctionCount, finalized, onComplete, segments]);

  return (
    <span className="whitespace-nowrap">
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
        const showHighlight = phase !== "initial" || finalized;
        const showRed =
          !finalized && (phase === "highlighted" || phase === "correcting");
        const showGreen = finalized || phase === "green";

        return (
          <span
            key={segment.id}
            className={cn(
              showHighlight && "address-demo-highlight",
              showRed && "address-demo-red",
              showGreen && "address-demo-green",
            )}
          >
            {displayText}
          </span>
        );
      })}
    </span>
  );
}

function StatusLoader() {
  return (
    <span
      className="address-validate-loader inline-block size-5 rounded-full border-2 border-[#e2e2e6] border-t-brand"
      aria-hidden
    />
  );
}

function ValidBadge() {
  return (
    <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#27A963]">
      <Image
        src={ANIMATION_ASSETS.checkIcon}
        alt=""
        width={12}
        height={12}
        style={{ width: 12, height: 12 }}
        aria-hidden
      />
    </span>
  );
}

function StaggeredStatusCells({
  status,
  instant = false,
  isLastRow = false,
}: {
  status: RowStatus;
  instant?: boolean;
  isLastRow?: boolean;
}) {
  const [showRepaired, setShowRepaired] = useState(
    instant && status === "validated",
  );

  useEffect(() => {
    if (status !== "validated") {
      return;
    }

    if (instant) {
      const frame = window.requestAnimationFrame(() => {
        setShowRepaired(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      const frame = window.requestAnimationFrame(() => {
        setShowRepaired(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const timer = window.setTimeout(
      () => setShowRepaired(true),
      REPAIRED_BADGE_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [instant, status]);

  useEffect(() => {
    if (status === "validated") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setShowRepaired(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [status]);

  const validCellClassName = cn(
    "flex items-center justify-center border-l border-[#eeeef2] px-2 py-3",
    !isLastRow && "border-b",
  );
  const repairedCellClassName = cn(
    "flex items-center justify-center border-l border-[#eeeef2] px-2 py-3",
    !isLastRow && "border-b",
  );

  if (status === "pending") {
    return (
      <>
        <div className={validCellClassName} />
        <div className={repairedCellClassName} />
      </>
    );
  }

  if (status === "loading") {
    return (
      <>
        <div className={validCellClassName}>
          <StatusLoader />
        </div>
        <div className={repairedCellClassName}>
          <StatusLoader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={validCellClassName}>
        <ValidBadge />
      </div>
      <div className={repairedCellClassName}>
        {showRepaired ? <ValidBadge /> : <StatusLoader />}
      </div>
    </>
  );
}

const FLOW_TOP_PATH =
  "M7.86805e-08 0.9H130.672C150.229 0.9 166.083 16.754 166.083 36.311V93.447C166.083 101.859 172.902 108.678 181.314 108.678";
const FLOW_CENTER_PATH = "M0 108.678H229.652";
const FLOW_BOTTOM_PATH =
  "M7.49497e-06 216.456H130.672C150.229 216.456 166.083 200.602 166.083 181.045V123.909C166.083 115.497 172.902 108.678 181.314 108.678";
const FLOW_ARROW_PATH =
  "M236.652 109.314C237.003 108.963 237.003 108.393 236.652 108.041L230.924 102.314C230.573 101.962 230.003 101.962 229.652 102.314C229.3 102.665 229.3 103.235 229.652 103.587L234.743 108.678L229.652 113.769C229.3 114.12 229.3 114.69 229.652 115.042C230.003 115.393 230.573 115.393 230.924 115.042L236.652 109.314Z";

function FlowStrokePath({
  d,
  active,
  resetKey,
}: {
  d: string;
  active: boolean;
  resetKey: string;
}) {
  return (
    <>
      <path d={d} stroke="#FFDADA" strokeWidth="1.8" />
      {active ? (
        <path
          key={resetKey}
          d={d}
          pathLength={1}
          stroke="#DC2626"
          strokeWidth="1.8"
          className="address-validate-flow-stream address-validate-flow-stream-active"
        />
      ) : null}
    </>
  );
}

function FlowArrow({
  active,
  resetKey,
}: {
  active: boolean;
  resetKey: string;
}) {
  return (
    <>
      <path d={FLOW_ARROW_PATH} fill="#FFDADA" />
      {active ? (
        <path
          key={resetKey}
          d={FLOW_ARROW_PATH}
          fill="#DC2626"
          className="address-validate-flow-arrow-active"
        />
      ) : null}
    </>
  );
}

function FlowConnectorsGraphic({
  activeRow,
  cycleId,
}: {
  activeRow: number;
  cycleId: number;
}) {
  const fillDurationMs = getAddressTurnGreenMs(
    getCorrectionCount(CORRECTION_SEQUENCES[activeRow]),
  );

  return (
    <svg
      viewBox="0 0 236.916 217.356"
      fill="none"
      className="h-[216px] w-[236px] shrink-0"
      style={
        {
          "--flow-fill-duration": `${fillDurationMs}ms`,
        } as CSSProperties
      }
      aria-hidden
    >
      <FlowStrokePath
        d={FLOW_TOP_PATH}
        active={activeRow === 0}
        resetKey={`${cycleId}-0`}
      />
      <FlowStrokePath
        d={FLOW_CENTER_PATH}
        active={activeRow === 1}
        resetKey={`${cycleId}-1`}
      />
      <FlowArrow active={activeRow === 1} resetKey={`${cycleId}-arrow`} />
      <FlowStrokePath
        d={FLOW_BOTTOM_PATH}
        active={activeRow === 2}
        resetKey={`${cycleId}-2`}
      />
    </svg>
  );
}

function PulsingHub({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative size-[200px] shrink-0 overflow-visible",
        className,
      )}
    >
      <svg
        viewBox="-16 -16 231.622 231.622"
        fill="none"
        overflow="visible"
        className="size-full overflow-visible"
        aria-hidden
      >
        <circle
          cx="99.8112"
          cy="99.8112"
          r="99.8112"
          fill="#044CD0"
          fillOpacity="0.05"
          className="address-validate-hub-ring address-validate-hub-ring-outer"
        />
        <circle
          cx="99.8074"
          cy="99.814"
          r="69.8975"
          fill="#044CD0"
          fillOpacity="0.08"
          className="address-validate-hub-ring address-validate-hub-ring-inner"
        />
        <path
          d="M118.888 91.0259C123.562 92.018 135.372 94.3844 135.556 99.6609C135.174 103.725 128.082 105.849 119.55 106.922C119.675 106.591 119.785 106.26 119.888 105.915C124.327 104.937 132.763 102.799 133.351 99.6682C132.293 97.2357 127.038 95.7439 120.219 94.8694C119.454 94.7739 118.668 94.6783 117.86 94.5975C115.706 94.377 113.663 95.5381 112.73 97.493C112.701 97.5517 112.671 97.6105 112.642 97.6693C111.988 99.0362 111.988 100.624 112.642 101.99C113.399 103.585 114.119 105.202 114.802 106.833C114.883 107.017 114.964 107.208 115.038 107.392C115.611 108.773 116.155 110.162 116.676 111.566C116.728 111.706 116.787 111.86 116.853 112.029C118.572 116.762 123.481 132.9 114.7 130.725C112.355 129.857 110.555 128.138 108.842 126.462C106.976 124.559 105.256 122.545 103.632 120.451C103.867 120.414 104.102 120.37 104.338 120.311C107.38 123.721 113.546 130.1 116.698 128.917C118.712 126.565 116.015 119.282 114.251 115.013C113.906 114.16 113.59 113.433 113.362 112.882C112.899 111.728 112.047 109.913 110.9 107.679C110.856 107.576 110.797 107.473 110.746 107.363C110.261 106.415 109.724 105.393 109.144 104.313C108.497 105.452 107.821 106.584 107.116 107.693C107.093 107.745 107.064 107.796 107.027 107.84C105.197 110.787 103.213 113.638 101.111 116.402C101.031 116.512 100.95 116.615 100.869 116.718C99.9356 117.938 98.9803 119.135 98.0029 120.319C97.9073 120.436 97.7971 120.568 97.6795 120.715C94.4093 124.596 82.9156 136.876 80.4243 128.197C79.9981 125.735 80.5934 123.31 81.1813 120.995C81.8941 118.423 82.7833 115.917 83.7828 113.469C83.9298 113.653 84.0914 113.837 84.2605 114.021C83.4668 116.402 82.8054 118.812 82.3277 121.245C81.9529 123.398 81.6222 125.683 82.1513 127.77C83.5403 132.283 90.6466 124.059 93.8287 119.966C94.4828 119.128 94.9678 118.459 95.2103 118.114C95.9893 117.122 97.1504 115.446 98.532 113.308C98.5761 113.249 98.6128 113.19 98.6569 113.124C99.6343 111.603 100.729 109.854 101.883 107.95C102.956 106.172 104.073 104.261 105.205 102.27C106.094 100.704 106.087 98.7864 105.183 97.2284C105.006 96.9271 104.83 96.6184 104.646 96.3098C103.735 94.7592 102.074 93.8038 100.274 93.8038C97.9955 93.8038 95.7835 93.8332 93.7111 93.8846C93.8287 93.6789 93.9536 93.4731 94.0712 93.26C93.9389 93.4658 93.814 93.6715 93.6964 93.8846C91.4918 93.9434 89.4414 94.0243 87.6409 94.1272C87.5307 94.1345 87.4205 94.1419 87.3103 94.1492C84.7896 94.2962 82.7907 94.4726 81.5561 94.6563C80.9682 94.7371 80.1892 94.8327 79.2779 94.9576C74.7216 95.6043 67.0641 96.9491 66.0499 99.8887C66.6305 103.196 75.2066 105.29 79.7115 106.194C79.785 106.429 79.8585 106.664 79.9467 106.9C77.3231 106.554 74.7143 106.091 72.1274 105.445C69.8272 104.805 67.4242 104.122 65.4914 102.542C59.1934 96.082 75.4932 92.165 80.5199 91.2391C80.7036 91.2097 80.8726 91.1803 81.0269 91.1509C82.5041 90.8936 83.9886 90.6585 85.473 90.4601C85.6641 90.4233 85.8625 90.4013 86.0536 90.3719C89.4708 89.9162 92.9028 89.6149 96.342 89.4753C96.3935 89.468 96.4449 89.4606 96.5037 89.468C97.7971 89.4092 99.0905 89.3798 100.391 89.3798C99.7813 88.4171 99.164 87.4691 98.5467 86.5358C98.4806 86.4476 98.4144 86.352 98.3556 86.2565C96.783 83.9049 95.1883 81.6634 93.6303 79.6425C89.4267 74.197 85.4804 70.4196 82.8642 70.743H82.8568C80.4611 72.8227 82.8715 81.1931 84.2825 85.529C84.04 85.7862 83.8048 86.0507 83.5844 86.3153C80.1965 78.4079 78.4401 71.2133 81.7545 68.8323C86.421 66.3337 94.3946 75.2993 97.6281 78.8488C97.7457 78.9664 97.8486 79.084 97.9441 79.1869C98.9141 80.3113 99.8548 81.4577 100.766 82.6188C101.031 82.9642 101.295 83.3096 101.567 83.655C102.559 84.9264 103.448 86.2785 104.396 87.5867C105.264 88.7772 106.616 89.5268 108.093 89.6296H108.152C110.312 89.784 112.341 88.5494 113.215 86.5652C113.531 85.8376 113.84 85.1248 114.126 84.4266C116.743 78.0625 118.036 72.7492 116.456 70.6328C113.428 69.6039 107.424 75.8652 104.374 79.253C104.029 79.1722 103.676 79.106 103.323 79.0472C108.482 72.1613 113.832 67.0392 117.551 68.7147C122.048 71.4999 118.264 82.8907 116.816 87.4838C116.765 87.6381 116.721 87.7777 116.676 87.9174C116.375 88.7772 116.066 89.6296 115.728 90.4821C116.632 90.6144 117.529 90.7687 118.433 90.9304C118.572 90.9598 118.727 90.9892 118.881 91.0259H118.888Z"
          fill="#4D4DFF"
        />
      </svg>
    </div>
  );
}

function ResultsTable({
  activeRow,
  rowPhase,
  validatedRows,
  cycleId,
  onRowAnimationComplete,
}: {
  activeRow: number;
  rowPhase: "loading" | "done";
  validatedRows: boolean[];
  cycleId: number;
  onRowAnimationComplete: (index: number) => void;
}) {
  return (
    <div className="flex w-[472px] shrink-0 flex-col overflow-hidden rounded-radius-lg border border-border bg-white">
      <div className="grid shrink-0 grid-cols-[minmax(0,1fr)_5rem_5rem] text-body-sm">
        <div className="border-b border-[#eeeef2] px-6 py-3 font-body font-bold text-[#484964]">
          Address
        </div>
        <div className="border-b border-l border-[#eeeef2] px-2 py-3 text-center font-body font-bold text-[#484964]">
          Valid
        </div>
        <div className="border-b border-l border-[#eeeef2] px-2 py-3 text-center font-body font-bold text-[#484964]">
          Repaired
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_5rem_5rem] grid-rows-3 text-body-sm">
        {OUTPUT_ROWS.map((row, index) => {
          const status = getLinkedRowStatus(
            index,
            activeRow,
            rowPhase,
            validatedRows,
          );
          const instantBadges = status === "validated" && activeRow !== index;
          const isLastRow = index === OUTPUT_ROWS.length - 1;

          return (
            <div key={row.id} className="contents">
              <div
                className={cn(
                  "flex items-center border-[#eeeef2] px-6 py-3 font-body text-body-sm text-[#484964] transition-opacity duration-300",
                  !isLastRow && "border-b",
                  status !== "pending" ? "opacity-100" : "opacity-30",
                )}
              >
                {status === "pending" ? (
                  <span className="text-muted">—</span>
                ) : status === "loading" ? (
                  <AddressCorrectionText
                    key={`${index}-${cycleId}`}
                    segments={CORRECTION_SEQUENCES[index]}
                    onComplete={() => onRowAnimationComplete(index)}
                  />
                ) : (
                  <AddressCorrectionText
                    segments={CORRECTION_SEQUENCES[index]}
                    finalized
                  />
                )}
              </div>
              <StaggeredStatusCells
                status={status}
                instant={instantBadges}
                isLastRow={isLastRow}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AddressValidateAnimation({
  className,
}: {
  className?: string;
}) {
  const [activeRow, setActiveRow] = useState(0);
  const [rowPhase, setRowPhase] = useState<"loading" | "done">("loading");
  const [validatedRows, setValidatedRows] = useState([false, false, false]);
  const [cycleId, setCycleId] = useState(0);
  const activeRowRef = useRef(activeRow);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, width: 0, height: 0 });

  useEffect(() => {
    activeRowRef.current = activeRow;
  }, [activeRow]);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return;
    }

    const updateScale = () => {
      window.requestAnimationFrame(() => {
        const contentWidth = content.scrollWidth;
        const contentHeight = content.offsetHeight;

        if (contentWidth === 0) {
          return;
        }

        const nextScale = Math.min(1, container.clientWidth / contentWidth);

        setLayout({
          scale: nextScale,
          width: contentWidth * nextScale,
          height: contentHeight * nextScale,
        });
      });
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  const handleRowAnimationComplete = useCallback((index: number) => {
    if (index !== activeRowRef.current) {
      return;
    }

    setRowPhase("done");
    setValidatedRows((current) => {
      const next = [...current];
      next[index] = true;
      return next;
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRow((current) => {
        const next = (current + 1) % INPUT_ROWS.length;
        if (next === 0) {
          setValidatedRows([false, false, false]);
          setCycleId((currentCycleId) => currentCycleId + 1);
        }
        return next;
      });
      setRowPhase("loading");
    }, ROW_CYCLE_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "address-validate-animation w-full max-w-full overflow-x-clip py-4",
        className,
      )}
      aria-label="Address validation workflow animation"
    >
      <div
        className="relative mx-auto"
        style={{
          width: layout.width > 0 ? layout.width : undefined,
          height: layout.height > 0 ? layout.height : undefined,
        }}
      >
        <div
          ref={contentRef}
          className="absolute left-1/2 top-0 inline-flex items-stretch gap-6 px-1"
          style={{
            transform: `translateX(-50%) scale(${layout.scale})`,
            transformOrigin: "top center",
          }}
        >
          <div className="isolate flex shrink-0 items-center">
            <div className="z-[2] -mr-[93px] flex w-[329px] flex-col gap-3">
              {INPUT_ROWS.map((row, index) => (
                <InputCard
                  key={row.id}
                  parts={row.parts}
                  active={activeRow === index}
                  resetKey={cycleId}
                />
              ))}
            </div>
            <div className="z-[1]">
              <FlowConnectorsGraphic activeRow={activeRow} cycleId={cycleId} />
            </div>
          </div>

          <PulsingHub className="self-center" />

          <ResultsTable
            activeRow={activeRow}
            rowPhase={rowPhase}
            validatedRows={validatedRows}
            cycleId={cycleId}
            onRowAnimationComplete={handleRowAnimationComplete}
          />
        </div>
      </div>
    </div>
  );
}

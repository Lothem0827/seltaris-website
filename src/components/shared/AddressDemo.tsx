"use client";

import { useEffect, useRef } from "react";

const TYPING_SPEED_MS = 70;

type PlainSegment = { text: string; type: "plain" };
type CorrectionSegment = {
  initial: string;
  correct: string;
  type: "correction";
  id: string;
};
type SegmentDef = PlainSegment | CorrectionSegment;

type SegmentState = SegmentDef & { element: HTMLSpanElement | null };

const ANIMATION_SEQUENCES: SegmentDef[][] = [
  [
    { text: "5 ", type: "plain" },
    { initial: "secil", correct: "Cecil", type: "correction", id: "c1" },
    { text: " ", type: "plain" },
    { initial: "st,", correct: "St,", type: "correction", id: "c2" },
    { text: " ", type: "plain" },
    {
      initial: "marylands",
      correct: "MERRYLANDS",
      type: "correction",
      id: "c3",
    },
    { text: " ", type: "plain" },
    { initial: "nsw", correct: "NSW", type: "correction", id: "c4" },
    { text: " 2160", type: "plain" },
  ],
  [
    { text: "02", type: "plain" },
    { text: " ", type: "plain" },
    {
      initial: "9687 4665",
      correct: "9687 4666",
      type: "correction",
      id: "c5",
    },
  ],
  [
    {
      initial: "jane-ff1x",
      correct: "jane.ferry",
      type: "correction",
      id: "c6",
    },
    {
      initial: "@htmil.com",
      correct: "@hotmail.com",
      type: "correction",
      id: "c7",
    },
  ],
  [
    { text: "2 Prospect St, ", type: "plain" },
    { initial: "Bronte", correct: "WAVERLEY", type: "correction", id: "c10" },
    { text: " NSW 2024", type: "plain" },
  ],
  [
    { text: "+61 ", type: "plain" },
    {
      initial: "402 899 466",
      correct: "490 315 358",
      type: "correction",
      id: "c11",
    },
  ],
  [
    {
      initial: "johnmelon",
      correct: "john.smith",
      type: "correction",
      id: "c12",
    },
    {
      initial: "@icloud.co",
      correct: "@icloud.com",
      type: "correction",
      id: "c13",
    },
  ],
];

function sleep(ms: number, timeouts: number[]) {
  return new Promise<void>((resolve) => {
    const id = window.setTimeout(resolve, ms);
    timeouts.push(id);
  });
}

function cloneSequence(base: SegmentDef[]): SegmentState[] {
  return base.map((s) => ({ ...s, element: null }));
}

function ensureCursor(display: HTMLElement): HTMLSpanElement {
  let cursor = display.querySelector<HTMLSpanElement>("#typing-cursor");
  if (!cursor) {
    cursor = document.createElement("span");
    cursor.id = "typing-cursor";
    cursor.className = "address-demo-cursor";
    cursor.setAttribute("aria-hidden", "true");
    display.appendChild(cursor);
  }
  if (display.lastChild !== cursor) {
    display.appendChild(cursor);
  }
  return cursor;
}

function typeInitialText(
  sequence: SegmentState[],
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
      const text = seg.type === "plain" ? seg.text : seg.initial;
      let i = 0;

      function typeChar() {
        if (i >= text.length) {
          segIndex++;
          nextSeg();
          return;
        }

        const ch = text.charAt(i);

        if (seg.type === "correction") {
          if (!seg.element) {
            seg.element = document.createElement("span");
            seg.element.className = "address-demo-highlight";
            display.insertBefore(seg.element, cursor);
          }
          seg.element.textContent = (seg.element.textContent ?? "") + ch;
        } else {
          display.insertBefore(document.createTextNode(ch), cursor);
        }

        i++;
        const id = window.setTimeout(typeChar, TYPING_SPEED_MS);
        timeouts.push(id);
      }

      typeChar();
    }

    nextSeg();
  });
}

function highlightAndPause(sequence: SegmentState[], timeouts: number[]) {
  return sleep(50, timeouts).then(() => {
    sequence.forEach((s) => {
      if (s.type === "correction" && s.element) {
        s.element.classList.add("address-demo-red");
      }
    });
    return sleep(2000, timeouts);
  });
}

function correctText(
  sequence: SegmentState[],
  cursor: HTMLSpanElement,
  timeouts: number[],
) {
  cursor.style.display = "none";

  return new Promise<void>((resolve) => {
    const corrections = sequence.filter((s) => s.type === "correction");
    let idx = 0;

    function step() {
      if (idx >= corrections.length) {
        cursor.style.display = "inline-block";
        resolve();
        return;
      }

      const segment = corrections[idx];
      if (segment.element) {
        segment.element.textContent = segment.correct;
      }
      idx++;
      const id = window.setTimeout(step, 150);
      timeouts.push(id);
    }

    step();
  });
}

function transitionToGreen(sequence: SegmentState[], timeouts: number[]) {
  sequence.forEach((s) => {
    if (s.type === "correction" && s.element) {
      s.element.classList.remove("address-demo-red");
      s.element.classList.add("address-demo-green");
    }
  });
  return sleep(1500, timeouts);
}

async function runSequence(
  baseSequence: SegmentDef[],
  display: HTMLElement,
  timeouts: number[],
  cancelled: () => boolean,
) {
  if (cancelled()) return;

  const cursor = ensureCursor(display);
  const sequence = cloneSequence(baseSequence);

  await typeInitialText(sequence, display, cursor, timeouts);
  if (cancelled()) return;

  await highlightAndPause(sequence, timeouts);
  if (cancelled()) return;

  await correctText(sequence, cursor, timeouts);
  if (cancelled()) return;

  await transitionToGreen(sequence, timeouts);
}

export function AddressDemo() {
  const displayRef = useRef<HTMLDivElement>(null);
  const sequenceIndexRef = useRef(0);

  useEffect(() => {
    const displayEl = displayRef.current;
    if (!displayEl) return;

    const display: HTMLElement = displayEl;
    const timeouts: number[] = [];
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        const index = sequenceIndexRef.current;
        await runSequence(
          ANIMATION_SEQUENCES[index],
          display,
          timeouts,
          () => cancelled,
        );
        if (cancelled) break;

        sequenceIndexRef.current =
          (sequenceIndexRef.current + 1) % ANIMATION_SEQUENCES.length;
      }
    }

    loop();

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div
      className="w-address-demo max-w-full rounded-radius-md bg-brand p-0.5 text-left"
      aria-live="polite"
      aria-label="Data correction demonstration"
    >
      <div className="rounded-[calc(var(--radius-md)-2px)] bg-white px-4 py-3">
        <div
          ref={displayRef}
          id="address-display"
          className="flex h-address-input w-full items-center justify-start overflow-hidden whitespace-nowrap text-left font-label text-body font-semibold text-brand"
        />
      </div>
    </div>
  );
}

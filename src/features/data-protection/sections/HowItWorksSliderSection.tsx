"use client";

import dynamic from "next/dynamic";

const sectionPlaceholder = <div className="min-h-[480px] w-full" aria-hidden />;

export const LazyWorkflowSliderSection = dynamic(
  () =>
    import("./WorkflowSliderSection").then((m) => m.WorkflowSliderSection),
  { loading: () => sectionPlaceholder },
);

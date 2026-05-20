"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type TabGroupProps = {
  tabs: readonly string[];
  className?: string;
};

/** Figma frame: THIS IS A TAB */
export function TabGroup({ tabs, className }: TabGroupProps) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-center gap-1 rounded-radius-full border border-border bg-white p-1.5",
        className,
      )}
      data-name="THIS IS A TAB"
    >
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(index)}
          className={cn(
            "rounded-radius-full px-4 py-1.5 font-body text-body transition-colors",
            active === index
              ? "bg-brand-light text-brand"
              : "text-paragraph opacity-60 hover:opacity-100",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

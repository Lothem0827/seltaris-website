"use client";

import { cn } from "@/lib/utils";

type TabGroupProps = {
  tabs: readonly string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
  /** Desktop-first: stack tabs full-width at lg (≤1023px). */
  stackOnLg?: boolean;
};

/** Figma: THIS IS A TAB — pill container with dark active state */
export function TabGroup({
  tabs,
  activeIndex,
  onChange,
  className,
  stackOnLg = false,
}: TabGroupProps) {
  return (
    <div
      className={cn(
        "w-full rounded-radius-full border border-border bg-[#F7F7F8] p-1.5 sm:rounded-radius-lg",
        stackOnLg && "lg:rounded-radius-lg",
        className,
      )}
      data-name="THIS IS A TAB"
      role="tablist"
    >
      <div
        className={cn(
          "flex flex-wrap items-center sm:flex-col sm:gap-1",
          stackOnLg && "lg:flex-col lg:gap-1",
        )}
      >
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(index)}
              className={cn(
                "shrink-0 rounded-radius-full px-4 py-1.5 font-body text-body leading-body transition-colors sm:w-full sm:rounded-radius-md",
                stackOnLg && "lg:w-full lg:rounded-radius-md",
                isActive
                  ? "bg-text text-white"
                  : "text-paragraph opacity-60 hover:opacity-100",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}

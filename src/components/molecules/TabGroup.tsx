"use client";

import { cn } from "@/lib/utils";

type TabGroupProps = {
  tabs: readonly string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
};

/** Figma: THIS IS A TAB — pill container with dark active state */
export function TabGroup({
  tabs,
  activeIndex,
  onChange,
  className,
}: TabGroupProps) {
  return (
    <div
      className={cn(
        "w-full rounded-radius-full border border-border bg-white p-1.5",
        className,
      )}
      data-name="THIS IS A TAB"
      role="tablist"
    >
      <div className="flex flex-wrap items-center">
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
                "shrink-0 rounded-radius-full px-4 py-1.5 font-body text-body leading-body transition-colors",
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

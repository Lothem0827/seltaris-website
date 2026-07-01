"use client";

import { useId, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

type TabGroupProps = {
  tabs: readonly string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
  /** Desktop-first: stack tabs full-width at lg (≤1023px). */
  stackOnLg?: boolean;
  /** Base id for tab/panel association (`{idPrefix}-tab-0`, `{idPrefix}-panel-0`). */
  idPrefix?: string;
};

export function getTabId(idPrefix: string, index: number) {
  return `${idPrefix}-tab-${index}`;
}

export function getTabPanelId(idPrefix: string, index: number) {
  return `${idPrefix}-panel-${index}`;
}

/** Figma: THIS IS A TAB — pill container with dark active state */
export function TabGroup({
  tabs,
  activeIndex,
  onChange,
  className,
  stackOnLg = false,
  idPrefix: idPrefixProp,
}: TabGroupProps) {
  const autoId = useId().replace(/:/g, "");
  const idPrefix = idPrefixProp ?? autoId;

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
    let next = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = index === 0 ? last : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    onChange(next);
    document.getElementById(getTabId(idPrefix, next))?.focus();
  }

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
              id={getTabId(idPrefix, index)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={getTabPanelId(idPrefix, index)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "shrink-0 rounded-radius-full px-4 py-1.5 font-body text-body leading-body transition-colors sm:w-full sm:rounded-radius-md",
                stackOnLg && "lg:w-full lg:rounded-radius-md",
                isActive
                  ? "bg-text text-white"
                  : "text-tab-inactive hover:text-text",
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

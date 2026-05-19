"use client";

import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: string;
};

type TabGroupProps = {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function TabGroup({ tabs, activeId, onChange, className }: TabGroupProps) {
  return (
    <div
      role="tablist"
      aria-label="Feature categories"
      className={cn(
        "flex w-full items-center rounded-full border border-charcoal-200 bg-white p-1.5",
        className,
      )}
    >
      <div className="flex flex-wrap items-center">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => onChange(tab.id)}
              className={cn(
                "rounded-full px-4 py-1.5 text-base leading-[26px] transition-colors",
                isActive
                  ? "bg-gradient-to-r from-brand-100 to-transparent font-normal text-brand"
                  : "text-charcoal-500 opacity-60 hover:opacity-80",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

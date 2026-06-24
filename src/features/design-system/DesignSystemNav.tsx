"use client";

import { DESIGN_SYSTEM_NAV, type DesignSystemSectionId } from "@/lib/design-system/catalog";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DesignSystemNav() {
  const [activeId, setActiveId] = useState<DesignSystemSectionId>("overview");

  useEffect(() => {
    const sectionIds = DESIGN_SYSTEM_NAV.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id as DesignSystemSectionId);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Design system sections"
      className="block shrink-0 lg:hidden"
    >
      <p className="mb-4 font-label text-label uppercase tracking-wider text-muted">
        On this page
      </p>
      <ul className="space-y-1 border-l border-border pl-4">
        {DESIGN_SYSTEM_NAV.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "block py-1.5 font-body text-body-sm transition-colors",
                activeId === item.id
                  ? "font-semibold text-brand"
                  : "text-paragraph hover:text-text",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Mobile-friendly horizontal section jump links. */
export function DesignSystemNavMobile() {
  return (
    <nav
      aria-label="Design system sections"
      className="hidden gap-2 overflow-x-auto pb-2 lg:flex"
    >
      {DESIGN_SYSTEM_NAV.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="shrink-0 rounded-radius-full border border-border bg-white px-4 py-2 font-body text-body-sm text-paragraph hover:border-brand hover:text-brand"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

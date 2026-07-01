"use client";

import { SolutionsNavPanel } from "@/components/layout/SolutionsNavPanel";
import { NavMenuDropdown } from "@/components/layout/NavMenuDropdown";

export function SolutionsNavDropdown() {
  return (
    <NavMenuDropdown label="Solutions" panelId="solutions-nav-panel">
      <SolutionsNavPanel />
    </NavMenuDropdown>
  );
}

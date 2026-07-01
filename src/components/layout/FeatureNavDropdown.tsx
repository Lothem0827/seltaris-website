"use client";

import { FeatureNavPanel } from "@/components/layout/FeatureNavPanel";
import { NavMenuDropdown } from "@/components/layout/NavMenuDropdown";

export function FeatureNavDropdown() {
  return (
    <NavMenuDropdown label="Features" panelId="features-nav-panel">
      <FeatureNavPanel />
    </NavMenuDropdown>
  );
}

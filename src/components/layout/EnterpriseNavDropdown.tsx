"use client";

import { EnterpriseNavPanel } from "@/components/layout/EnterpriseNavPanel";
import { NavMenuDropdown } from "@/components/layout/NavMenuDropdown";

export function EnterpriseNavDropdown() {
  return (
    <NavMenuDropdown label="Enterprise" panelId="enterprise-nav-panel">
      <EnterpriseNavPanel />
    </NavMenuDropdown>
  );
}

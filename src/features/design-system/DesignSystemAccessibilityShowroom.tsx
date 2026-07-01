"use client";

import { FeatureAccordion } from "@/components/shared/FeatureAccordion";
import { TabGroup, getTabId, getTabPanelId } from "@/components/shared/TabGroup";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import {
  ComponentDemo,
  GuideSubheading,
  TokenCode,
} from "./DesignSystemPrimitives";

const DEMO_TABS_ID = "design-system-tabs-demo";

const demoTabs = ["Overview", "Details"] as const;
const demoAccordion = [
  {
    id: "security",
    title: "Enterprise security",
    body: "Encrypted processing with client-held keys.",
  },
  {
    id: "scale",
    title: "Built for scale",
    body: "Process millions of records with Altraservice.",
  },
];

export function DesignSystemAccessibilityShowroom() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-10">
      <GuideSubheading>Focus and skip link</GuideSubheading>
      <p className="max-w-3xl font-body text-body-sm text-paragraph">
        Interactive elements use a global{" "}
        <TokenCode>:focus-visible</TokenCode> ring via{" "}
        <TokenCode>--color-focus-ring</TokenCode>. The skip link appears on
        keyboard focus at the top of each page header.
      </p>
      <ComponentDemo
        name="Focus ring"
        path="src/app/globals.css @layer base"
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#focus-demo">Link button</Button>
          <button
            type="button"
            className="rounded-radius-sm border border-border px-4 py-2 font-body text-body"
          >
            Native button
          </button>
        </div>
      </ComponentDemo>

      <GuideSubheading>Tabs (WAI-ARIA)</GuideSubheading>
      <ComponentDemo name="TabGroup" path="src/components/shared/TabGroup.tsx">
        <TabGroup
          idPrefix={DEMO_TABS_ID}
          tabs={demoTabs}
          activeIndex={activeTab}
          onChange={setActiveTab}
        />
        <div
          role="tabpanel"
          id={getTabPanelId(DEMO_TABS_ID, activeTab)}
          aria-labelledby={getTabId(DEMO_TABS_ID, activeTab)}
          className="mt-4 rounded-radius-md border border-border p-4 font-body text-body text-paragraph"
        >
          {activeTab === 0
            ? "Tab panels are linked with aria-controls and support arrow-key navigation."
            : "Inactive tabs use the tab-inactive token for WCAG AA contrast."}
        </div>
      </ComponentDemo>

      <GuideSubheading>Accordion disclosure</GuideSubheading>
      <ComponentDemo
        name="FeatureAccordion"
        path="src/components/shared/FeatureAccordion.tsx"
      >
        <FeatureAccordion items={demoAccordion} />
      </ComponentDemo>

      <GuideSubheading>Accessible contrast pairs</GuideSubheading>
      <ul className="max-w-3xl list-disc space-y-2 pl-5 font-body text-body-sm text-paragraph">
        <li>
          <TokenCode>text-text</TokenCode> on white — primary body copy (AAA)
        </li>
        <li>
          <TokenCode>text-paragraph</TokenCode> on white — secondary copy (AA)
        </li>
        <li>
          <TokenCode>text-tab-inactive</TokenCode> on tab surface — inactive
          tabs (AA)
        </li>
        <li>
          <TokenCode>text-muted</TokenCode> — decorative labels only; avoid for
          essential text on white
        </li>
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { DemoPanel, GuideSubheading, TokenCode } from "./DesignSystemPrimitives";

/** Form controls styled with design tokens (no dedicated Input atom yet). */
export function DesignSystemComponentShowroom() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DemoPanel label="Text input — default">
        <label className="flex flex-col gap-2">
          <span className="font-body text-body-sm font-medium text-text">
            Suburb
          </span>
          <input
            type="text"
            defaultValue="Waverley NSW 2024"
            className="h-address-input w-full rounded-radius-sm border border-border bg-white px-3 font-body text-body text-text outline-none transition-colors placeholder:text-muted focus:border-brand"
          />
        </label>
      </DemoPanel>

      <DemoPanel label="Text input — error state">
        <label className="flex flex-col gap-2">
          <span className="font-body text-body-sm font-medium text-text">
            Suburb
          </span>
          <input
            type="text"
            defaultValue="Bronte NSW 2024"
            aria-invalid="true"
            className="h-address-input w-full rounded-radius-sm border border-error bg-white px-3 font-body text-body text-error outline-none"
          />
          <span className="font-body text-body-sm text-error">
            Unrecognised locality
          </span>
        </label>
      </DemoPanel>

      <DemoPanel label="Select">
        <label className="flex flex-col gap-2">
          <span className="font-body text-body-sm font-medium text-text">
            Country
          </span>
          <select
            defaultValue="au"
            className="h-address-input w-full appearance-none rounded-radius-sm border border-border bg-white px-3 font-body text-body text-text outline-none focus:border-brand"
          >
            <option value="au">Australia</option>
            <option value="nz">New Zealand</option>
            <option value="intl">International</option>
          </select>
        </label>
      </DemoPanel>

      <DemoPanel label="Checkbox">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            className="mt-1 size-4 shrink-0 rounded-radius-xs border border-border accent-brand"
          />
          <span className="font-body text-body text-paragraph leading-body">
            Include Health Check Report in my subscription
          </span>
        </label>
      </DemoPanel>

      <DemoPanel label="Disabled input">
        <input
          type="text"
          disabled
          placeholder="Disabled field"
          className="h-address-input w-full cursor-not-allowed rounded-radius-sm border border-border bg-surface-muted px-3 font-body text-body text-muted opacity-70"
        />
      </DemoPanel>
    </div>
  );
}

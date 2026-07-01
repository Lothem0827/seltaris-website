"use client";

import { TabGroup } from "@/components/shared/TabGroup";
import { cn } from "@/lib/utils";

const GET_STARTED_TABS_ID = "get-started-tabs";

type GetStartedTabSwitchProps = {
  tabs: readonly string[];
  activeIndex: number;
  onChange: (index: number) => void;
  className?: string;
};

export function GetStartedTabSwitch({
  tabs,
  activeIndex,
  onChange,
  className,
}: GetStartedTabSwitchProps) {
  return (
    <TabGroup
      idPrefix={GET_STARTED_TABS_ID}
      tabs={tabs}
      activeIndex={activeIndex}
      onChange={onChange}
      stackOnLg
      className={cn("max-w-fit lg:w-full lg:max-w-none", className)}
    />
  );
}

export { GET_STARTED_TABS_ID };

"use client";

import type { CSSProperties } from "react";

type ComplianceLordIconProps = {
  src: string;
};

type LordIconElementProps = {
  src?: string;
  trigger?: string;
  delay?: string | number;
  stroke?: string;
  colors?: string;
  style?: CSSProperties;
};

export function ComplianceLordIcon({ src }: ComplianceLordIconProps) {
  const LordIcon = "lord-icon" as unknown as React.ComponentType<LordIconElementProps>;

  return (
    <LordIcon
      src={src}
      trigger="loop"
      delay="2000"
      stroke="bold"
      colors="primary:#ffffff,secondary:#ffffff"
      style={{ width: "48px", height: "48px" }}
    />
  );
}

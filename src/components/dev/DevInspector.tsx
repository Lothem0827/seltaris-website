"use client";

import { Inspector } from "react-dev-inspector";

/**
 * Dev-only click-to-source inspector. Stripped from production builds automatically.
 * @see https://react-dev-inspector.zthxxx.me/docs/inspector-component
 */
export function DevInspector() {
  return <Inspector />;
}

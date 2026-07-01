import Image from "@/components/ui/Image";
import { Badge } from "@/components/ui/Badge";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

export type RegionKey = "australia" | "nz" | "international";

const regions = {
  australia: {
    label: "Australia",
    flag: siteAssets.australiaFlag,
  },
  nz: {
    label: "New Zealand",
    flag: siteAssets.nzFlag,
  },
  international: {
    label: "International",
    flag: siteAssets.internationalFlag,
  },
} as const;

type RegionBadgeProps = {
  region: RegionKey;
  comingSoon?: boolean;
  /** sm = 16px icon (PricingCard); md = 20px icon (default) */
  size?: "sm" | "md";
  className?: string;
};

export function RegionBadge({
  region,
  comingSoon = false,
  size = "md",
  className,
}: RegionBadgeProps) {
  const { label, flag } = regions[region];
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-radius-full border border-border bg-white font-body font-medium text-text",
        size === "sm"
          ? "gap-1.5 pl-2 pr-3 py-2 text-sm"
          : "gap-1.5 pl-2 pr-3 py-2 text-body-sm",
        comingSoon && "text-tab-inactive",
        className,
      )}
    >
      <Image
        src={flag}
        alt=""
        width={iconSize}
        height={iconSize}
        className="shrink-0"
        aria-hidden
      />
      {label}
      {comingSoon ? <Badge className="ml-0.5">Coming soon</Badge> : null}
    </span>
  );
}

import { AppImage as Image } from "@/components/atoms/AppImage";
import { assets } from "@/lib/assets";
import type { AddressServicePageDataset } from "@/lib/types/address-service-page";
import { cn } from "@/lib/utils";

const flagAssets = {
  australia: assets.australiaFlag,
  nz: assets.nzFlag,
  international: assets.internationalFlag,
} as const;

export function SupportedDatasetsBar({
  datasets,
  label = "Supported datasets:",
  className,
}: {
  datasets: ReadonlyArray<AddressServicePageDataset>;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-radius-lg sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <p className="font-body text-xs font-semibold uppercase tracking-widest text-text">
        {label}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {datasets.map((dataset) => (
          <span
            key={dataset.id}
            className="inline-flex items-center gap-1.5 rounded-radius-full border border-border bg-white px-3.5 py-1.5 font-body text-body-sm font-medium text-text"
          >
            <Image
              src={flagAssets[dataset.flagKey]}
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            {dataset.label}
          </span>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { siteAssets } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

const flagAssets = {
  australia: siteAssets.australiaFlag,
  nz: siteAssets.nzFlag,
  international: siteAssets.internationalFlag,
} as const;

type SupportedDataset = {
  id: string;
  label: string;
  flagKey: keyof typeof flagAssets;
};

export function SupportedDatasetsBar({
  datasets,
  label = "Supported datasets:",
  className,
}: {
  datasets: ReadonlyArray<SupportedDataset>;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-row flex-wrap items-center gap-4 rounded-radius-lg sm:flex-col",
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

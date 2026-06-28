import Image from "next/image";
import {
  RegionBadge,
  type RegionKey,
} from "@/components/shared/RegionBadge";
import { cn } from "@/lib/utils";

export type { RegionKey };

export type SupportedDataset = {
  id: string;
  region: RegionKey;
  comingSoon?: boolean;
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
          <RegionBadge
            key={dataset.id}
            region={dataset.region}
            comingSoon={dataset.comingSoon}
          />
        ))}
      </div>
    </div>
  );
}

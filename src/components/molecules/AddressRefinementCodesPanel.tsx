import { AppImage as Image } from "@/components/atoms/AppImage";
import { Text } from "@/components/atoms/Text";
import { getAddressQualityHealthCheckReportImage } from "@/lib/address-quality-health-check-report-images";
import type { AddressServicePageRefinementCodesPanel } from "@/lib/types/address-service-page";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ColumnTone = "verified" | "unverified";

const columnStyles: Record<
  ColumnTone,
  { surface: string; heading: string; title: string }
> = {
  verified: {
    surface: "bg-refinement-verified-surface",
    heading: "text-refinement-verified-heading",
    title: "Verified address codes",
  },
  unverified: {
    surface: "bg-refinement-unverified-surface",
    heading: "text-refinement-unverified-heading",
    title: "Unverified address codes",
  },
};

function RefinementColumn({
  tone,
  imageSrc,
  body,
}: {
  tone: ColumnTone;
  imageSrc: string;
  body: ReactNode;
}) {
  const styles = columnStyles[tone];

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div
        className={cn(
          "flex flex-col gap-[18px] rounded-radius-lg px-1.5 pb-1.5 pt-[18px]",
          styles.surface,
        )}
      >
        <p
          className={cn(
            "text-center font-body text-lg font-bold uppercase tracking-[0.06em]",
            styles.heading,
          )}
        >
          {styles.title}
        </p>
        <div className="overflow-hidden rounded-radius-lg bg-white">
          <Image
            src={imageSrc}
            alt=""
            width={579}
            height={420}
            className="h-auto w-full object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 579px"
          />
        </div>
      </div>
      <Text as="div" className="prose-strong px-6 py-6 sm:px-10">
        {body}
      </Text>
    </div>
  );
}

export function AddressRefinementCodesPanel({
  panel,
}: {
  panel: AddressServicePageRefinementCodesPanel;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
      <RefinementColumn
        tone="verified"
        imageSrc={getAddressQualityHealthCheckReportImage(
          panel.verifiedImageKey,
        )}
        body={panel.verifiedBody}
      />
      <RefinementColumn
        tone="unverified"
        imageSrc={getAddressQualityHealthCheckReportImage(
          panel.unverifiedImageKey,
        )}
        body={panel.unverifiedBody}
      />
    </div>
  );
}

import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { AddressServicePageRefinementCodesPanel } from "../types";

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
      <Text as="div" className="prose-strong px-10 py-6 sm:px-6">
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
    <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-1">
      <RefinementColumn
        tone="verified"
        imageSrc={panel.verifiedImageKey}
        body={panel.verifiedBody}
      />
      <RefinementColumn
        tone="unverified"
        imageSrc={panel.unverifiedImageKey}
        body={panel.unverifiedBody}
      />
    </div>
  );
}

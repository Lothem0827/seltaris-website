import Image from "@/components/ui/Image";import type { AddressServicePageSampleExamplesPanel } from "../types";

export function AddressSampleExamplesPanel({
  panel,
}: {
  panel: AddressServicePageSampleExamplesPanel;
}) {
  return (
    <div className="grid grid-cols-2 items-stretch gap-4 lg:grid-cols-1">
      <div className="type-16 text-paragraph prose-strong flex flex-col justify-center px-10 py-10 sm:px-6 lg:py-6">
        {panel.body}
      </div>
      <div className="overflow-hidden rounded-radius-lg bg-offering-protection">
        <Image src={panel.imageKey}
          alt=""
          width={590}
          height={726}
          className="h-auto w-full object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 590px" />
      </div>
    </div>
  );
}

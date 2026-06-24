import Image from "next/image";
import { Text } from "@/components/ui/Text";
import type { AddressServicePageResultFilePanel } from "../types";

export function AddressResultFilePanel({
  panel,
}: {
  panel: AddressServicePageResultFilePanel;
}) {
  return (
    <div className="flex flex-col items-center gap-8 px-10 py-8 sm:px-4 sm:py-6">
      <div className="relative w-full max-w-[962px]">
        <Image
          src={panel.imageKey}
          alt=""
          width={962}
          height={586}
          className="h-auto w-full object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 962px"
        />
      </div>
      <Text as="div" className="max-w-[715px] text-center">
        {panel.body}
      </Text>
    </div>
  );
}

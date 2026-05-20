import Image from "next/image";
import { Text } from "@/components/atoms/Text";
import type { ReactNode } from "react";

type ImageTextCardProps = {
  imageSrc: string;
  children: ReactNode;
};

export function ImageTextCard({ imageSrc, children }: ImageTextCardProps) {
  return (
    <article className="flex w-full max-w-[425px] flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-radius-xl bg-card-dark">
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="425px" />
      </div>
      <Text className="px-1.5 [&_strong]:font-semibold [&_strong]:text-text">
        {children}
      </Text>
    </article>
  );
}

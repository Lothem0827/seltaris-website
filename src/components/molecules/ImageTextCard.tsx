import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { Text } from "@/components/atoms/Text";
import type { ReactNode } from "react";

type ImageTextCardProps = {
  imageSrc: string;
  children: ReactNode;
  badge?: string;
};

export function ImageTextCard({ imageSrc, children, badge }: ImageTextCardProps) {
  return (
    <article className="flex w-full flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-radius-xl bg-card-dark">
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="425px" />
      </div>
      <div className="flex flex-col gap-3 px-1.5">
        {badge ? (
          <Badge className="w-fit px-1.5 py-0.5 text-sm tracking-wide">
            {badge}
          </Badge>
        ) : null}
        <Text className="prose-strong">
          {children}
        </Text>
      </div>
    </article>
  );
}

import Image from "@/components/ui/Image";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";
import type { ReactNode } from "react";

type ImageTextCardProps = {
  imageSrc: string;
  children: ReactNode;
  badge?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  imageAlt?: string;
};

export function ImageTextCard({
  imageSrc,
  children,
  badge,
  priority,
  loading,
  imageAlt = "",
}: ImageTextCardProps) {
  return (
    <article className="flex w-full flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-radius-lg ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          loading={loading}
          className="object-contain"
          sizes="(max-width: 1024px) 90vw, 360px"
        />
      </div>
      <div className="flex flex-col gap-3 px-1.5">
        {badge ? (
          <Badge className="w-fit px-1.5 py-0.5 text-sm tracking-wide">
            {badge}
          </Badge>
        ) : null}
        <Text className="prose-strong">{children}</Text>
      </div>
    </article>
  );
}

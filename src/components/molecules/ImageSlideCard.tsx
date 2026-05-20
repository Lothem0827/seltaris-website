import Image from "next/image";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const widthClasses = {
  default: "w-[min(572px,85vw)]",
  wide: "w-[min(604px,90vw)]",
  narrow: "w-[min(441px,80vw)]",
};

type ImageSlideCardProps = {
  imageSrc: string;
  title?: string;
  description: ReactNode;
  width?: keyof typeof widthClasses;
  imageVariant?: "dark" | "light";
};

export function ImageSlideCard({
  imageSrc,
  title,
  description,
  width = "default",
  imageVariant = "dark",
}: ImageSlideCardProps) {
  return (
    <article className={cn("flex shrink-0 flex-col gap-4", widthClasses[width])}>
      <div
        className={cn(
          "relative h-[363px] w-full overflow-hidden rounded-radius-xl",
          imageVariant === "dark" ? "bg-card-dark" : "border border-border bg-white",
        )}
      >
        <Image src={imageSrc} alt="" fill className="object-cover" sizes="604px" />
      </div>
      <div className="space-y-4 px-4 py-2">
        {title ? (
          <Heading as="h3" level="h2">
            {title}
          </Heading>
        ) : null}
        <Text className="[&_strong]:font-semibold [&_strong]:text-text">
          {description}
        </Text>
      </div>
    </article>
  );
}

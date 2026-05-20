import Image from "next/image";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { SplitIntroContent } from "@/lib/types/slider";
import { cn } from "@/lib/utils";

type SplitIntroProps = SplitIntroContent & {
  className?: string;
};

export function SplitIntro({
  eyebrow,
  heading,
  body,
  imageSrc,
  imageAlt = "",
  className,
}: SplitIntroProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center",
        className,
      )}
    >
      <div className="max-w-xl shrink-0 space-y-6">
        <Eyebrow label={eyebrow} />
        <Heading level="h1">{heading}</Heading>
        <Text>{body}</Text>
      </div>
      <div className="relative size-[315px] shrink-0 self-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="315px"
        />
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import { Text } from "@/components/ui/Text";
import { FeatureImage } from "../components/MediaBlocks";

export function SplitContentRow({
  imageSrc,
  imagePosition,
  children,
}: {
  imageSrc: string;
  imagePosition: "left" | "right";
  children: ReactNode;
}) {
  const image = <FeatureImage src={imageSrc} />;
  const text = (
    <div className="flex flex-col justify-center px-8 py-4 lg:px-6">
      <Text as="div" className="prose-list space-y-4">
        {children}
      </Text>
    </div>
  );

  return (
    <div className="grid grid-cols-2 items-center gap-0 lg:grid-cols-1 lg:gap-8">
      {imagePosition === "left" ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

import { ImageSlideCard } from "@/components/molecules/ImageSlideCard";

type FeatureSlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export function FeatureSlideCard({
  title,
  description,
  imageSrc,
}: FeatureSlideCardProps) {
  return (
    <ImageSlideCard
      imageSrc={imageSrc}
      title={title}
      description={description}
      width="default"
    />
  );
}

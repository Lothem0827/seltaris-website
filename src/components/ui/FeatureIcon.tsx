import Image from "next/image";

type FeatureIconProps = {
  src: string;
  alt?: string;
};

export function FeatureIcon({ src, alt = "" }: FeatureIconProps) {
  return (
    <div className="relative size-icon-nav shrink-0 overflow-hidden rounded-radius-icon bg-brand-light shadow-icon">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-2"
        sizes="48px"
      />
    </div>
  );
}

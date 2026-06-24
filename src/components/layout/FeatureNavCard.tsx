import Link from "next/link";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Text } from "@/components/ui/Text";

type FeatureNavCardProps = {
  title: string;
  description: string;
  href: string;
  iconSrc: string;
};

export function FeatureNavCard({
  title,
  description,
  href,
  iconSrc,
}: FeatureNavCardProps) {
  return (
    <Link
      href={href}
      className="flex min-w-0 flex-1 flex-col items-center gap-3 rounded-radius-lg border border-border px-6 py-8 transition-colors hover:border-brand/30 hover:bg-brand-light/30"
    >
      <FeatureIcon src={iconSrc} />
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-body text-body font-semibold text-text">{title}</p>
        <Text as="p" variant="caption">
          {description}
        </Text>
      </div>
    </Link>
  );
}

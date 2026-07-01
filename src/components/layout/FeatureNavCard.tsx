import Link from "next/link";
import { CursorGlowCard } from "@/components/molecules/CursorGlowCard";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

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
    <Link href={href} className="block min-w-0 flex-1">
      <CursorGlowCard
        className="h-full rounded-radius-lg"
        innerClassName={cn(
          "flex flex-col items-center gap-3 rounded-radius-lg px-6 py-8 transition-colors",
          "hover:border-brand/30 hover:bg-brand-light/30",
        )}
        glowRadius={230}
      >
        <FeatureIcon src={iconSrc} />
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-body text-body font-semibold text-text">{title}</p>
          <Text as="p" variant="caption">
            {description}
          </Text>
        </div>
      </CursorGlowCard>
    </Link>
  );
}

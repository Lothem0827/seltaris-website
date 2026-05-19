import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  label: string;
  badge?: string;
  className?: string;
};

export function Eyebrow({ label, badge, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3.5 rounded border border-charcoal-300 px-3 py-[9px]",
        className,
      )}
    >
      <span className="text-sm leading-normal text-charcoal-500">{label}</span>
      {badge ? <Badge>{badge}</Badge> : null}
    </div>
  );
}

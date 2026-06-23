import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type EyebrowProps = {
  label: string;
  badge?: string;
  className?: string;
};

export function Eyebrow({ label, badge, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3.5 rounded-radius-xs border border-border px-3 py-2",
        className,
      )}
    >
      <span className="font-body text-body-sm text-paragraph">{label}</span>
      {badge ? <Badge>{badge}</Badge> : null}
    </div>
  );
}

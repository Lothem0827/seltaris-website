import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-[1px] text-brand-500",
        "bg-brand-100",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "brand" | "muted";
  className?: string;
};

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-radius-xs px-1.5 py-0.5 font-label text-micro font-semibold uppercase tracking-widest w-fit",
        variant === "brand" && "bg-brand-light text-brand-dark",
        variant === "muted" && "bg-brand-light text-brand-dark opacity-80",
        className,
      )}
    >
      {children}
    </span>
  );
}

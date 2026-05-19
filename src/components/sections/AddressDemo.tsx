import { cn } from "@/lib/cn";

type AddressSegment = {
  text: string;
  variant: "valid" | "error";
};

const segments: AddressSegment[] = [
  { text: "5", variant: "valid" },
  { text: "secil", variant: "error" },
  { text: "st,", variant: "error" },
  { text: "marylands", variant: "error" },
  { text: "nsw", variant: "error" },
  { text: "2160", variant: "valid" },
];

type AddressDemoProps = {
  className?: string;
};

export function AddressDemo({ className }: AddressDemoProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "inline-flex items-center rounded-2xl border-2 border-brand bg-white px-5 py-4 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-[5.5px]">
        {segments.map((segment) => (
          <span
            key={segment.text}
            className={cn(
              "px-[5px] text-base font-semibold leading-[30px]",
              segment.variant === "valid"
                ? "text-brand"
                : "border-l border-[rgba(255,109,109,0.4)] bg-gradient-to-r from-[rgba(255,109,109,0.2)] to-[rgba(254,242,242,0.04)] text-error",
            )}
          >
            {segment.text}
          </span>
        ))}
      </div>
    </div>
  );
}

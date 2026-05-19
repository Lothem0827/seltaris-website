import Image from "next/image";
import { cn } from "@/lib/cn";

type SliderNavButtonProps = {
  direction: "prev" | "next";
  src: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export function SliderNavButton({
  direction,
  src,
  onClick,
  className,
  disabled = false,
}: SliderNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={cn(
        "relative flex size-14 shrink-0 items-center justify-center transition-opacity disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <Image
        src={src}
        alt=""
        width={56}
        height={56}
        className={cn(
          "size-14",
          direction === "prev" && "rotate-90",
          direction === "next" && "-rotate-90",
        )}
      />
    </button>
  );
}

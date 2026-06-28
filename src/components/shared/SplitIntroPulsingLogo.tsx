import Image from "next/image";
import { cn } from "@/lib/utils";

const FRAME_SIZE = 315.103;
const CENTER = FRAME_SIZE / 2;

type SplitIntroPulsingLogoProps = {
  logoSrc: string;
  logoAlt?: string;
  className?: string;
};

export function SplitIntroPulsingLogo({
  logoSrc,
  logoAlt = "",
  className,
}: SplitIntroPulsingLogoProps) {
  return (
    <div
      className={cn(
        "relative size-split-intro shrink-0 overflow-visible sm:hidden",
        className,
      )}
      aria-hidden={logoAlt ? undefined : true}
    >
      <svg
        viewBox={`0 0 ${FRAME_SIZE} ${FRAME_SIZE}`}
        fill="none"
        overflow="visible"
        className="size-full overflow-visible"
        aria-hidden
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={CENTER}
          fill="#044CD0"
          fillOpacity="0.03"
          className="split-intro-hub-ring split-intro-hub-ring-outer"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={99.811}
          fill="#044CD0"
          fillOpacity="0.05"
          className="split-intro-hub-ring split-intro-hub-ring-mid"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={69.898}
          fill="#044CD0"
          fillOpacity="0.08"
          className="split-intro-hub-ring split-intro-hub-ring-inner"
        />
        <circle cx={CENTER} cy={CENTER} r={44.425} fill="#000050" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-[24%]">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            className="object-contain p-2"
            sizes="64px"
          />
        </div>
      </div>
    </div>
  );
}

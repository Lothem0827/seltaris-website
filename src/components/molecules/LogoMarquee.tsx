import { AppImage as Image } from "@/components/atoms/AppImage";
import { cn } from "@/lib/utils";

const ROW_COUNT = 3;
const MIN_PER_ROW = 8;

function splitLogosIntoRows(logos: readonly string[]): string[][] {
  const perRow = Math.max(MIN_PER_ROW, Math.ceil(logos.length / ROW_COUNT));
  const rows: string[][] = Array.from({ length: ROW_COUNT }, () => []);
  let index = 0;

  for (let row = 0; row < ROW_COUNT; row++) {
    while (rows[row].length < perRow) {
      rows[row].push(logos[index % logos.length]);
      index++;
    }
  }

  return rows;
}

type LogoMarqueeRowProps = {
  logos: string[];
  reverse?: boolean;
  rowIndex: number;
};

function LogoMarqueeRow({ logos, reverse, rowIndex }: LogoMarqueeRowProps) {
  const track = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max items-center gap-12 md:gap-16",
          reverse ? "animate-logo-marquee-reverse" : "animate-logo-marquee",
        )}
      >
        {track.map((src, index) => (
          <div
            key={`${rowIndex}-${src}-${index}`}
            className="relative h-9 w-28 shrink-0 md:h-10 md:w-32"
            aria-hidden={index >= logos.length}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain invert opacity-35 transition-opacity duration-200 hover:opacity-60"
              sizes="128px"
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-20 md:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-20 md:w-28"
        aria-hidden
      />
    </div>
  );
}

type LogoMarqueeProps = {
  logos: readonly string[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const rows = splitLogosIntoRows(logos);

  return (
    <div
      className="flex w-full flex-col gap-12"
      aria-label="Trusted company logos"
    >
      {rows.map((rowLogos, rowIndex) => (
        <LogoMarqueeRow
          key={rowIndex}
          rowIndex={rowIndex}
          logos={rowLogos}
          reverse={rowIndex % 2 === 1}
        />
      ))}
    </div>
  );
}

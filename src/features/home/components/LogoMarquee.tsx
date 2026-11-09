import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";

const ROW_COUNT = 1;
const MIN_PER_ROW = 12;

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

type LogoMarqueeTone = "light" | "dark";

type LogoMarqueeRowProps = {
  logos: string[];
  reverse?: boolean;
  rowIndex: number;
  tone: LogoMarqueeTone;
};

function LogoMarqueeRow({ logos, reverse, rowIndex, tone }: LogoMarqueeRowProps) {
  const track = [...logos, ...logos];
  const isDark = tone === "dark";

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "flex w-max items-center gap-16 md:gap-12",
          reverse ? "animate-logo-marquee-reverse" : "animate-logo-marquee",
        )}
      >
        {track.map((src, index) => (
          <div
            key={`${rowIndex}-${src}-${index}`}
            className="relative h-10 w-32 shrink-0 md:h-9 md:w-28"
            aria-hidden={index >= logos.length}
          >
            <Image
              src={src}
              alt=""
              fill
              loading="lazy"
              className={cn(
                "object-contain transition-opacity duration-200",
                // Light bg: invert light assets → dark marks.
                // Dark bg: skip invert so logos stay light / visible.
                isDark
                  ? "opacity-50 hover:opacity-80"
                  : "invert opacity-35 hover:opacity-60",
              )}
              sizes="(max-width: 640px) 112px, 128px"
            />
          </div>
        ))}
      </div>

      {!isDark ? (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-20 md:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-20 md:w-12"
            aria-hidden
          />
        </>
      ) : null}
    </div>
  );
}

type LogoMarqueeProps = {
  logos: readonly string[];
  /** Edge fade color. Use `dark` on dark section backgrounds. */
  tone?: LogoMarqueeTone;
};

export function LogoMarquee({ logos, tone = "light" }: LogoMarqueeProps) {
  const rows = splitLogosIntoRows(logos);

  return (
    <section
      className="flex w-full flex-col gap-12"
      aria-label="Trusted company logos"
    >
      {rows.map((rowLogos, rowIndex) => (
        <LogoMarqueeRow
          key={rowIndex}
          rowIndex={rowIndex}
          logos={rowLogos}
          tone={tone}
          reverse={rowIndex % 2 === 1}
        />
      ))}
    </section>
  );
}

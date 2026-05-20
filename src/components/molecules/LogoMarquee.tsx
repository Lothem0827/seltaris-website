import Image from "next/image";

type LogoMarqueeProps = {
  logos: readonly string[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-label="Trusted company logos"
    >
      <div className="flex w-max animate-logo-marquee items-center gap-16 md:gap-20">
        {track.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-9 w-28 shrink-0 md:h-9 md:w-32"
            aria-hidden={index >= logos.length}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes="128px"
            />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white from-0% via-white/80 via-30% to-transparent to-100% sm:w-24 md:w-32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white from-0% via-white/80 via-30% to-transparent to-100% sm:w-24 md:w-32"
        aria-hidden
      />
    </div>
  );
}

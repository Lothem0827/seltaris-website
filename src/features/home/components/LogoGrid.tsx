import Image from "@/components/ui/Image";

type LogoGridProps = {
  rows: readonly (readonly string[])[];
};

export function LogoGrid({ rows }: LogoGridProps) {
  return (
    <section
      className="flex w-full max-w-5xl flex-col gap-12 md:gap-10"
      aria-label="Trusted company logos"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-6 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:gap-x-6"
        >
          {row.map((src) => (
            <div
              key={src}
              className="relative mx-auto h-9 w-full max-w-32 md:h-8 md:max-w-28"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain invert opacity-35"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

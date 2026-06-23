import { AppImage as Image } from "@/components/atoms/AppImage";

type LogoGridProps = {
  rows: readonly (readonly string[])[];
};

export function LogoGrid({ rows }: LogoGridProps) {
  return (
    <div
      className="flex w-full max-w-5xl flex-col gap-10 md:gap-12"
      aria-label="Trusted company logos"
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-3 items-center gap-x-6 gap-y-8 sm:grid-cols-6 md:gap-x-10"
        >
          {row.map((src) => (
            <div
              key={src}
              className="relative mx-auto h-8 w-full max-w-28 md:h-9 md:max-w-32"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain invert opacity-35"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

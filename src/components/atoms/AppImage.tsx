import NextImage, { type ImageProps } from "next/image";

export type AppImageProps = ImageProps;

export function AppImage({ style, fill, ...props }: AppImageProps) {
  if (fill) {
    return <NextImage fill style={style} {...props} />;
  }

  return (
    <NextImage
      {...props}
      style={{ width: "auto", height: "auto", ...style }}
    />
  );
}

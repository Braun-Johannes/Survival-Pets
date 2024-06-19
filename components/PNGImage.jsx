import images from "@/lib/images";
import Image from "next/image";

export default function PNGImage({ variant, size = 50, ariaLabel }) {
  const image = images[variant];

  if (!image) {
    console.error(`Image ${variant} not found`);
    return null;
  }

  return (
    <Image
      src={image.src}
      aria-label={ariaLabel}
      alt={ariaLabel}
      width={size}
      height={size}
    ></Image>
  );
}

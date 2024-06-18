import images from "@/lib/images";
import Image from "next/image";
import styled from "styled-components";

export default function PNGImage({ variant, size = 50, ariaLabel }) {
  const image = images[variant];

  if (!image) {
    console.error(`Image ${variant} not found`);
    return null;
  }

  return (
    <Image src={image.src} alt={ariaLabel} width={size} height={size}></Image>
  );
}

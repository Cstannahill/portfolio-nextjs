import Image from "next/image";
import { imageMap } from "@/lib/images";

type Props = {
  name: keyof typeof imageMap;
  alt?: string;
  className?: string;
};

export function ImageFromMap({ name, alt = "", className }: Props) {
  const img = imageMap[name];
  if (!img) {
    console.warn(`Image not found in map: ${name}`);
    return null;
  }

  return (
    <Image
      src={img}
      alt={alt}
      placeholder="blur"
      className={className}
      style={{ borderRadius: "12px", objectFit: "cover" }}
    />
  );
}

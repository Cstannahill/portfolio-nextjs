"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { useTranslations } from "next-intl";
// types/gallery.ts

export type GalleryImage = {
  src: string;
  alt: string;
  orientation: any;
};

type MasonryGridProps = {
  images: GalleryImage[];
};

export default function MasonryGrid({ images }: MasonryGridProps) {
  const t = useTranslations(); // optional if you plan to localize image labels, etc.

  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image, index) => (
        <SmartImage
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}

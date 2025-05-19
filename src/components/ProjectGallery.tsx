"use client";

import { useState } from "react";
import Image from "next/image";
import { Flex } from "@/once-ui/components";

interface ProjectGalleryProps {
  images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length <= 1) {
    return null;
  }

  return (
    <Flex direction="column" gap="m" fillWidth marginTop="xl" marginBottom="xl">
      <h3
        style={{
          fontSize: "var(--font-size-xl)",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Gallery
      </h3>

      {/* Main image */}
      <div
        className="gallery-image"
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          borderRadius: "var(--radius-m)",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={images[activeIndex]}
          alt={`Project image ${activeIndex + 1}`}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Thumbnails */}
      <Flex
        gap="8"
        wrap
        style={{
          justifyContent: "center",
        }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`thumbnail-button ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              position: "relative",
              width: "80px",
              height: "60px",
              border:
                index === activeIndex
                  ? "2px solid var(--brand-main)"
                  : "1px solid var(--neutral-alpha-weak)",
              borderRadius: "var(--radius-s)",
              overflow: "hidden",
              padding: 0,
              cursor: "pointer",
            }}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </button>
        ))}
      </Flex>
    </Flex>
  );
}

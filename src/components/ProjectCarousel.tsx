"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";
import { Flex, Heading, Text, Button } from "@/once-ui/components";
import { useTranslations } from "next-intl";

interface ProjectCarouselProps {
  projects: Project[];
  locale: string;
}

export function ProjectCarousel({ projects, locale }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = useTranslations();

  useEffect(() => {
    // Automatically transition slides
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);

    // Auto-advance every 6 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [activeIndex]);

  const handleNextSlide = () => {
    setIsTransitioning(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
      setIsTransitioning(true);
    }, 400);
  };

  const handlePreviousSlide = () => {
    setIsTransitioning(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(true);
    }, 400);
  };

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(false);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(true);
      }, 400);
    }
  };

  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[activeIndex];

  return (
    <Flex
      fillWidth
      direction="column"
      marginY="xl"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "var(--radius-m)",
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Main carousel slide */}
      <div
        style={{
          width: "100%",
          height: "520px",
          position: "relative",
          borderRadius: "var(--radius-m)",
          overflow: "hidden",
        }}
      >
        {currentProject?.images && currentProject?.images?.length > 0 && (
          <div
            className="gallery-image"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              transition: isTransitioning ? "opacity 600ms ease" : "none",
              opacity: isTransitioning ? 1 : 0,
            }}
          >
            <Image
              src={currentProject.images[0]}
              alt={currentProject.title}
              fill
              style={{
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)",
                zIndex: 1,
              }}
            />

            {/* Project details */}
            <Flex
              fillWidth
              direction="column"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                padding: "2rem",
                zIndex: 2,
                maxWidth: "800px",
              }}
            >
              <Heading
                as="h2"
                variant="display-strong-l"
                style={{
                  color: "var(--neutral-on-strong)",
                  marginBottom: "0.5rem",
                }}
              >
                {currentProject.title}
              </Heading>

              <Text
                variant="body-default-l"
                style={{
                  color: "var(--neutral-on-strong)",
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                }}
              >
                {currentProject.tagline || currentProject.summary || ""}
              </Text>

              <Flex gap="m">
                <Button
                  href={`/${locale}/work/${currentProject.slug}`}
                  label="View Project"
                  variant="primary"
                  size="l"
                />
              </Flex>
            </Flex>
          </div>
        )}
      </div>

      {/* Navigation controls */}
      <Flex
        style={{
          position: "absolute",
          right: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleControlClick(index)}
            className="carousel-control"
            style={{
              width: index === activeIndex ? "12px" : "10px",
              height: index === activeIndex ? "12px" : "10px",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                index === activeIndex
                  ? "var(--brand-main)"
                  : "rgba(255, 255, 255, 0.6)",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Flex>

      {/* Previous/Next buttons */}
      <button
        onClick={handlePreviousSlide}
        className="carousel-control"
        style={{
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={handleNextSlide}
        className="carousel-control"
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
        aria-label="Next slide"
      >
        ›
      </button>
    </Flex>
  );
}

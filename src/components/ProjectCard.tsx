"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  date?: string;
}
interface ProjectCardProps {
  project?: Project;
  slug?: string;
  title?: string;
  description?: string;
  technologies?: string[];
  images?: string[];
  date?: string;
  href?: string;
  content?: string;
  avatars?: Array<{ src: string }>;
}

export function ProjectCard({
  project,
  slug: propSlug,
  title: propTitle,
  description: propDescription,
  technologies: propTechnologies,
  images: propImages,
  date: propDate,
  href,
  content,
  avatars,
}: ProjectCardProps) {
  // Use project prop if provided, otherwise use individual props
  const slug = project?.slug || propSlug || "";
  const title = project?.title || propTitle || "";
  const description = project?.description || propDescription || "";
  const technologies = project?.technologies || propTechnologies || [];

  // Handle images properly, accounting for the different formats that might be passed
  let formattedImages: string[] = [];
  if (project?.images && project.images.length > 0) {
    formattedImages = project.images;
  } else if (propImages && propImages.length > 0) {
    // Simply assign the string array, avoiding any type issues
    formattedImages = propImages as string[];
  }

  const date = project?.date || propDate || new Date().toISOString();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    if (formattedImages.length > 1) {
      setIsTransitioning(false);
      const nextIndex = (activeIndex + 1) % formattedImages.length;
      handleControlClick(nextIndex);
    }
  };

  const handleControlClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(false);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(true);
      }, 300);
    }
  };

  // Determine the link URL
  const linkUrl = href || `/projects/${slug}`;

  return (
    <Link href={linkUrl} className="block group w-full">
      <Card className="h-full overflow-hidden transition-all hover:border-primary">
        {formattedImages.length > 0 && (
          <div
            className="relative aspect-video overflow-hidden"
            onClick={handleImageClick}
          >
            <Image
              src={formattedImages[activeIndex]}
              alt={title}
              fill
              className={`object-cover transition-transform ${
                isTransitioning ? "duration-300 ease-in-out" : "opacity-0"
              } ${
                formattedImages.length > 1 ? "cursor-pointer" : ""
              } group-hover:scale-105`}
            />
          </div>
        )}

        {formattedImages.length > 1 && (
          <div className="flex justify-center gap-1 py-2">
            {formattedImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleControlClick(index);
                }}
                className={`h-1 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-4 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}

        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {date && (
            <CardDescription>
              {new Date(date).toLocaleDateString()}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </CardContent>
        {technologies && technologies.length > 0 && (
          <CardFooter>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{technologies.length - 3}
                </Badge>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}

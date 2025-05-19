"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface MDXContentProps {
  code: string;
  images?: string[];
  className?: string;
}

export function MDXContent({ code, images = [], className }: MDXContentProps) {
  return (
    <div className={cn("mdx-content", className)}>
      {/* For now, we'll just render the code as HTML */}
      <div dangerouslySetInnerHTML={{ __html: code }} />
      {images.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        width={400}
                        height={300}
                        className="h-[300px] w-full object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      )}
    </div>
  );
}

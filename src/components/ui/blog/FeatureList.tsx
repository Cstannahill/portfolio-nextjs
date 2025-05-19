"use client";

import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface FeatureListProps {
  title?: string;
  items: string[];
  icon?: boolean;
  className?: string;
}

export function FeatureList({
  title,
  items,
  icon = true,
  className,
}: FeatureListProps) {
  return (
    <div className={cn("my-4", className)}>
      {title && <h3 className="text-lg font-medium mb-2">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            {icon && (
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            )}
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  title?: string;
  icon?: string;
  type?: "default" | "info" | "warning" | "success";
  children: ReactNode;
}

export function Callout({
  title,
  icon = "💡",
  type = "default",
  children,
}: CalloutProps) {
  const styles = {
    // Default style that matches the card background in both light and dark mode
    default: "bg-card border-border",
    // Updated color schemes to better match card style in dark mode
    info: "bg-blue-950/20 border-blue-900/60 text-blue-300",
    warning: "bg-amber-950/20 border-amber-900/60 text-amber-300",
    success: "bg-green-950/20 border-green-900/60 text-green-300",
  };

  return (
    <div className={cn("p-4 my-4 border rounded-lg", styles[type])}>
      {(title || icon) && (
        <div className="flex items-center gap-2 font-medium mb-2">
          {icon && <span>{icon}</span>}
          {title && <h4 className="font-medium">{title}</h4>}
        </div>
      )}
      <div className="text-sm text-foreground dark:text-foreground/90">
        {children}
      </div>
    </div>
  );
}

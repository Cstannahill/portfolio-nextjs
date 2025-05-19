"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProjectChallengeCardProps {
  title?: string;
  challenge: string;
  solution: string;
  impact?: string;
  difficulty?: "easy" | "medium" | "hard" | "complex";
  domain?: string;
  icon?: string;
  className?: string;
  children?: ReactNode;
}

export function ProjectChallengeCard({
  title = "Challenge & Solution",
  challenge,
  solution,
  impact,
  difficulty,
  domain,
  icon = "🧩",
  className,
  children,
}: ProjectChallengeCardProps) {
  const difficultyColors = {
    easy: "bg-green-950/30 text-green-300 border-green-800/40",
    medium: "bg-blue-950/30 text-blue-300 border-blue-800/40",
    hard: "bg-amber-950/30 text-amber-300 border-amber-800/40",
    complex: "bg-red-950/30 text-red-300 border-red-800/40",
  };

  return (
    <div className={cn("p-4 my-6 border rounded-lg bg-card/30", className)}>
      <div className="flex items-center gap-2 font-medium mb-3">
        <span>{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex-grow"></div>
        {difficulty && (
          <Badge
            variant="outline"
            className={cn("ml-2", difficultyColors[difficulty])}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        )}
        {domain && (
          <Badge
            variant="outline"
            className=" bg-slate-950/30 text-slate-300 border-slate-800/40"
          >
            {domain}
          </Badge>
        )}
      </div>

      <div>
        <h4 className="font-medium text-md mb-2">Challenge:</h4>
        <p className="text-sm text-muted-foreground mb-4">{challenge}</p>

        <h4 className="font-medium text-md mb-2">Solution:</h4>
        <p className="text-sm text-muted-foreground mb-4">{solution}</p>

        {impact && (
          <>
            <h4 className="font-medium text-md mb-2">Impact:</h4>
            <p className="text-sm text-muted-foreground">{impact}</p>
          </>
        )}

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
}

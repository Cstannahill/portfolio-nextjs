"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type RankType = "S" | "A+" | "A" | "B+" | "B" | "C+" | "C" | "D";

// Combined colors with emphasis on dark mode compatibility
const rankColors = {
  S: "bg-purple-100/80 text-purple-800 border-purple-300 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800/40",
  "A+": "bg-indigo-100/80 text-indigo-800 border-indigo-300 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/40",
  A: "bg-blue-100/80 text-blue-800 border-blue-300 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/40",
  "B+": "bg-teal-100/80 text-teal-800 border-teal-300 dark:bg-teal-950/30 dark:text-teal-300 dark:border-teal-800/40",
  B: "bg-green-100/80 text-green-800 border-green-300 dark:bg-green-950/30 dark:text-green-300 dark:border-green-800/40",
  "C+": "bg-yellow-100/80 text-yellow-800 border-yellow-300 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-800/40",
  C: "bg-orange-100/80 text-orange-800 border-orange-300 dark:bg-orange-950/30 dark:text-orange-300 dark:border-orange-800/40",
  D: "bg-red-100/80 text-red-800 border-red-300 dark:bg-red-950/30 dark:text-red-300 dark:border-red-800/40",
};

interface SkillCardProps {
  title: string;
  experience?: string;
  summary: string;
  aboveCurve?: string;
  rank: RankType;
  emoji?: string;
  className?: string;
}

export function SkillCard({
  title,
  experience,
  summary,
  aboveCurve,
  rank,
  emoji,
  className,
}: SkillCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">
            {emoji && <span className="mr-2">{emoji}</span>}
            {title}
          </CardTitle>
          <Badge
            variant="outline"
            className={cn("ml-2 font-bold", rankColors[rank])}
          >
            {rank}
          </Badge>
        </div>
        {experience && (
          <CardDescription className="text-sm">
            Experience: {experience}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{summary}</p>
        {aboveCurve && (
          <div className="mt-2">
            <span className="text-xs font-medium text-primary dark:text-primary/90">
              Above Curve:
            </span>{" "}
            <span className="text-xs text-muted-foreground">{aboveCurve}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

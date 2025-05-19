"use client";

import { Progress } from "@/components/ui/progress";

interface ProgressSectionProps {
  category: string;
  score: number;
  experience?: string;
  highlights: string;
}

export function ProgressSection({
  category,
  score,
  experience,
  highlights,
}: ProgressSectionProps) {
  const getProgressColor = (score: number) => {
    // Enhanced colors with better dark mode visibility
    if (score >= 90) return "bg-purple-500 dark:bg-purple-600";
    if (score >= 85) return "bg-indigo-500 dark:bg-indigo-600";
    if (score >= 80) return "bg-blue-500 dark:bg-blue-600";
    if (score >= 75) return "bg-teal-500 dark:bg-teal-600";
    if (score >= 70) return "bg-green-500 dark:bg-green-600";
    if (score >= 65) return "bg-yellow-500 dark:bg-yellow-600";
    return "bg-orange-500 dark:bg-orange-600";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="font-medium">{category}</div>
        <div className="text-sm font-bold">{score}/100</div>
      </div>

      <Progress
        value={score}
        className="h-2 mb-1 bg-muted/50 dark:bg-muted/30"
        indicatorClassName={getProgressColor(score)}
      />

      <div className="flex flex-col sm:flex-row text-sm text-muted-foreground">
        {experience && (
          <div className="mr-4">
            <span className="font-medium text-foreground">Experience:</span>{" "}
            {experience}
          </div>
        )}
        <div>
          <span className="font-medium text-foreground">Highlights:</span>{" "}
          {highlights}
        </div>
      </div>
    </div>
  );
}

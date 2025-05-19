"use client";

import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
  status?: "completed" | "in-progress" | "planned";
  className?: string;
}

export function TimelineItem({
  date,
  title,
  description,
  status = "completed",
  className,
}: TimelineItemProps) {
  const statusClasses = {
    completed: "bg-green-700 border-green-600",
    "in-progress": "bg-blue-500 border-blue-600",
    planned: "bg-slate-700 border-slate-600",
  };

  const statusBgClasses = {
    completed: "bg-green-900/20",
    "in-progress": "bg-blue-900/20",
    planned: "bg-slate-900/20",
  };

  return (
    <div className={cn("mb-4 ml-6 relative", className)}>
      {/* Dot */}
      <div
        className={cn(
          "absolute w-4 h-4 rounded-full -left-8 mt-1 z-10 border-2",
          statusClasses[status]
        )}
      ></div>

      {/* Line */}
      <div className="absolute w-0.5 h-full -left-6 top-6 z-0 bg-border/60"></div>

      {/* Content */}
      <div
        className={cn(
          "p-4 rounded-md border border-border",
          statusBgClasses[status]
        )}
      >
        <div className="text-sm text-muted-foreground mb-1">{date}</div>
        <h4 className="font-medium mb-1">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}

interface ProjectTimelineProps {
  title?: string;
  items: TimelineItemProps[];
  className?: string;
}

export function ProjectTimeline({
  title = "Project Timeline",
  items,
  className,
}: ProjectTimelineProps) {
  return (
    <div className={cn("my-6", className)}>
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2">📅</span>
        {title}
      </h3>
      <div className="relative pl-8 pt-1 pb-1">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

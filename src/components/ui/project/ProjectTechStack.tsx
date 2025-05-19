"use client";

import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechItemProps {
  name: string;
  icon?: string;
  role?: "primary" | "secondary" | "tertiary";
  className?: string;
}

export function TechItem({
  name,
  icon,
  role = "secondary",
  className,
}: TechItemProps) {
  const roleClasses = {
    primary: "bg-primary-950/30 text-primary-300 border-primary-800/40",
    secondary: "bg-blue-950/30 text-blue-300 border-blue-800/40",
    tertiary: "bg-slate-950/30 text-slate-300 border-slate-800/40",
  };

  return (
    <Badge
      variant="outline"
      className={cn("text-sm py-1 px-3", roleClasses[role], className)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </Badge>
  );
}

interface ProjectTechStackProps {
  title?: string;
  technologies: Array<{
    name: string;
    icon?: string;
    role?: "primary" | "secondary" | "tertiary";
  }>;
  className?: string;
  children?: ReactNode;
}

export function ProjectTechStack({
  title = "Technology Stack",
  technologies,
  className,
  children,
}: ProjectTechStackProps) {
  return (
    <div className={cn("my-6", className)}>
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2">🛠️</span>
        {title}
      </h3>
      <div className="p-4 border border-border rounded-lg bg-card/30">
        {children && <div className="mb-3">{children}</div>}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechItem
              key={index}
              name={tech.name}
              icon={tech.icon}
              role={tech.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

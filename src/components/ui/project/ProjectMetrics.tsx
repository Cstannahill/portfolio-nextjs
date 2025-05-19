"use client";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface MetricItemProps {
  label: string;
  value: string | number;
  icon?: string;
  progress?: number;
  className?: string;
}

export function MetricItem({
  label,
  value,
  icon,
  progress,
  className,
}: MetricItemProps) {
  return (
    <div
      className={cn(
        "p-4 border border-border rounded-md bg-card/30",
        className
      )}
    >
      {/* Restructured layout - place value on a new line */}
      <div className="flex items-center mb-1">
        <h4 className="text-sm font-medium flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </h4>
      </div>
      <div className="mb-2">
        <span className="text-lg font-bold block">{value}</span>
      </div>
      {progress !== undefined && <Progress value={progress} className="h-2" />}
    </div>
  );
}

interface ProjectMetricsProps {
  title?: string;
  metrics: MetricItemProps[];
  className?: string;
}

export function ProjectMetrics({
  title = "Project Metrics",
  metrics,
  className,
}: ProjectMetricsProps) {
  return (
    <div className={cn("my-6", className)}>
      <h3 className="text-xl font-bold mb-3 flex items-center">
        <span className="mr-2">📊</span>
        {title}
      </h3>
      <div className="grid-metrics">
        {metrics.map((metric, index) => (
          <MetricItem
            key={index}
            label={metric.label}
            value={metric.value}
            icon={metric.icon}
            progress={metric.progress}
          />
        ))}
      </div>
      <style jsx>{`
        .grid-metrics {
          display: flex;
          flex-wrap: wrap;
          margin: -0.5rem;
        }

        .grid-metrics > :global(*) {
          flex: 1 1 100%;
          min-width: 0;
          margin: 0.5rem;
        }

        @media (min-width: 640px) {
          .grid-metrics > :global(*) {
            flex: 1 1 calc(50% - 1rem);
          }
        }

        @media (min-width: 768px) {
          .grid-metrics > :global(*) {
            flex: 1 1 calc(33.333% - 1rem);
          }
        }

        @media (min-width: 1024px) {
          .grid-metrics > :global(*) {
            flex: 1 1 calc(25% - 1rem);
          }
        }

        /* Modern browsers - enhance with grid if supported */
        @supports (display: grid) {
          .grid-metrics {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 1rem;
            margin: 0;
          }

          .grid-metrics > :global(*) {
            margin: 0;
            flex: none;
            width: auto;
          }

          @media (min-width: 640px) {
            .grid-metrics {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 768px) {
            .grid-metrics {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .grid-metrics {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        }
      `}</style>
    </div>
  );
}

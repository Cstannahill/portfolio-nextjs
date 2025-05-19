"use client";

import { Project } from "@/lib/projects";
import { Button, Flex } from "@/once-ui/components";
import Link from "next/link";
import Image from "next/image";

interface FeaturedProjectsProps {
  projects: Project[];
  locale: string;
}

export function FeaturedProjects({ projects, locale }: FeaturedProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          marginBottom: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${locale}/work/${project.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Flex
              direction="column"
              className="project-card"
              style={{
                borderRadius: "var(--radius-m)",
                overflow: "hidden",
                height: "100%",
                border: "1px solid var(--neutral-alpha-weak)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {project.images && project.images.length > 0 && (
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                </div>
              )}
              <Flex
                direction="column"
                padding="l"
                fillWidth
                style={{ flex: 1 }}
              >
                <h3
                  style={{
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--neutral-on-weak)",
                    marginBottom: "1rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {project.tagline || project.summary || ""}
                </p>

                <Flex
                  fillWidth
                  justifyContent="flex-end"
                  style={{ marginTop: "auto" }}
                >
                  <span
                    style={{
                      color: "var(--brand-main)",
                      fontWeight: "bold",
                    }}
                  >
                    View Project →
                  </span>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          href={`/${locale}/work`}
          label="View All Projects"
          variant="secondary"
        />
      </div>
    </>
  );
}

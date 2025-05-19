import React from "react";
import { Flex, Heading, Text, SmartImage, Button } from "@/once-ui/components";
export interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaHref?: string;
}

/**
 * A hero header for project pages in MDX.
 * Renders an optional background image, title, subtitle, and call-to-action.
 */
const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  subtitle,
  imageSrc,
  ctaText,
  ctaHref,
}) => {
  console.log(imageSrc);
  return (
    <Flex
      as="section"
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ padding: "4rem 1rem", textAlign: "center" }}
      className="relative overflow-hidden"
    >
      {imageSrc && (
        <SmartImage
          src={"/public" + imageSrc}
          alt={title}
          radius="l"
          aspectRatio="16/9"
          className="absolute inset-0 z-0 object-cover"
        />
      )}

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ maxWidth: 800, zIndex: 1 }}
      >
        <Heading variant="display-strong-l" style={{ marginBottom: "1rem" }}>
          {title}
        </Heading>

        {subtitle && (
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            style={{ marginBottom: "2rem" }}
          >
            {subtitle}
          </Text>
        )}

        {ctaText && ctaHref && (
          <Button href={ctaHref} size="m">
            {ctaText}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default ProjectHero;

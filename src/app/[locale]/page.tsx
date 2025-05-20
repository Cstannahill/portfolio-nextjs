import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";

import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getFeaturedProjects } from "@/lib/projects";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { normalizedRoutes } from "@/app/resources";
import { baseURL } from "@/app/resources";
import {
  home,
  about,
  person,
  newsletter,
  social,
} from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Meta, Schema } from "@/once-ui/modules";
import { Experience, Institution, Skill } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") {
    return;
  }
  const prefix = `/${locale}`;
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: `${baseURL}`, // <- locale‑aware URL root
    path: home.path, // '/readme'
  });
}

export default async function Home() {
  // Get featured projects
  const featuredProjects = await getFeaturedProjects();
  const structure = [
    {
      title: home.intro.title,
      display: home.intro.display,
      items: [],
    },
    {
      title: "Featured Projects",
      display: featuredProjects.length > 0,
      items: featuredProjects.map((project) => project.title),
    },
    {
      title: home.work.title,
      display: home.work.display,
      items: home.work.experiences.map((experience: any) => experience.company),
    },
    {
      title: home.studies.title,
      display: home.studies.display,
      items: home.studies.institutions.map(
        (institution: any) => institution.name
      ),
    },
    {
      title: home.technical.title,
      display: home.technical.display,
      items: home.technical.skills.map((skill: any) => skill.title),
    },
  ];
  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`${baseURL}/og?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {home.tableOfContent.display && (
        <Flex
          style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={home} />
        </Flex>
      )}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {home.avatar.display && (
          <Flex
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language: any, index: number) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Flex>
        )}
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          <Flex
            id={home.intro.title}
            fillWidth
            minHeight="160"
            direction="column"
            justifyContent="center"
            marginBottom="32"
          >
            {home.calendar.display && (
              <Flex
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  border: "1px solid var(--brand-alpha-medium)",
                  width: "fit-content",
                }}
                alpha="brand-weak"
                radius="full"
                fillWidth
                padding="4"
                gap="8"
                marginBottom="m"
                alignItems="center"
              >
                <Flex paddingLeft="12">
                  <Icon name="calendar" onBackground="brand-weak" />
                </Flex>
                <Flex paddingX="8">Schedule a meeting</Flex>
                <IconButton
                  href={home.calendar.link}
                  data-border="rounded"
                  variant="tertiary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
              >
                {social.map(
                  (item: any) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="tertiary"
                      />
                    )
                )}
              </Flex>
            )}
          </Flex>
          {home.intro.display && (
            <Flex
              direction="column"
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {home.intro.description}
            </Flex>
          )}
          {/* Featured Projects Section with Carousel */}
          {featuredProjects.length > 0 && (
            <>
              <Heading
                as="h2"
                id="Featured Projects"
                variant="display-strong-s"
                marginBottom="m"
              >
                Featured Projects
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {/* Project Carousel for highlighted projects */}
                <ProjectCarousel
                  projects={featuredProjects.slice(0, 3)}
                  locale={"en"}
                />

                {/* Grid display of projects */}
                <FeaturedProjects projects={featuredProjects} locale={"en"} />
              </Flex>
            </>
          )}
          {home.work.display && (
            <>
              <Heading
                as="h2"
                id={home.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {home.work.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {home.work.experiences.map((experience: any) => (
                  <Flex
                    key={`${experience.company}`}
                    fillWidth
                    direction="column"
                  >
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Flex as="ul" direction="column" gap="16">
                      {experience.achievements.map((achievement: any) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={
                            achievement.key ||
                            `achievement-${achievement.description}`
                          }
                        >
                          {achievement.description || achievement}
                        </Text>
                      ))}
                    </Flex>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image: any) => (
                          <Flex
                            key={`${image.src}`}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              objectFit="contain"
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </>
          )}
          {home.studies.display && (
            <>
              <Heading
                as="h2"
                id={home.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {home.studies.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {home.studies.institutions.map((institution: any) => (
                  <Flex
                    key={`${institution.name}`}
                    fillWidth
                    gap="4"
                    direction="column"
                  >
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {institution.description}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </>
          )}
          {home.technical.display && (
            <>
              <Heading
                as="h2"
                id={home.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {home.technical.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l">
                {home.technical.skills.map((skill: any) => (
                  <Flex
                    key={`${skill.title}`}
                    fillWidth
                    gap="4"
                    direction="column"
                  >
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image: any) => (
                          <Flex
                            key={image.key ?? image.src}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

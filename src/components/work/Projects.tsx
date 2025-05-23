import { getPosts } from "@/app/utils/utils";
import { Flex } from "@/once-ui/components";
import { work, person } from "@/app/resources";
import { ProjectCard } from "@/components";
import { getProjectEntries } from "@/lib/content";

interface ProjectsProps {
  range?: [number, number?];
  locale: string;
}
const avatars = [
  {
    src: person.avatar,
  },
];
export async function Projects({ range, locale }: ProjectsProps) {
  const allProjects = await getProjectEntries(locale);
  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Flex fillWidth gap="xl" marginBottom="40" paddingX="l" direction="column">
      {displayedProjects.map((post) => (
        <ProjectCard
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          date={post.metadata.publishedAt}
          technologies={post.metadata.technologies}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member: any) => ({
              src: member.avatar,
            })) || []
          }
        />
      ))}
    </Flex>
  );
}

import { getPosts } from "@/app/utils/utils";
import { Flex } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Meta, Schema } from "@/once-ui/modules";
import { work, person, newsletter } from "@/app/resources";
import { getProjectEntries } from "@/lib/content";
export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const allProjects = await getProjectEntries(locale);
  const t = getTranslations("work");

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Schema
        as="collectionPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{ name: person.name }}
      />
      {allProjects.map((project) => (
        <Schema
          key={project.slug}
          as="creativeWork"
          baseURL={baseURL}
          path={`work/${project.slug}`}
          title={project.metadata.title}
          description={project.metadata.summary}
          image={project.metadata.image}
        />
      ))}

      <Projects locale={locale} />
    </Flex>
  );
}

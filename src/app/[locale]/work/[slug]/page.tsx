import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Flex,
  Heading,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { getProjectEntries, getProjectBySlug } from "@/lib/content";
import { formatDate } from "@/app/utils/formatDate";
import { person } from "@/app/resources";
import { ProjectGallery } from "@/components/ProjectGallery";
import fs from "fs";
import path from "path";
import { Schema } from "@/once-ui/modules";

// In Next.js 15, params is a Promise that resolves to this interface
interface WorkParams {
  slug: string;
  locale: string;
}
const avatars = [
  {
    src: person.avatar,
  },
];
export async function generateStaticParams() {
  const allParams = [];

  for (const locale of routing.locales) {
    const posts = await getProjectEntries(locale);
    allParams.push(...posts.map((p) => ({ slug: p.slug, locale })));
  }

  return allParams;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  // First, await the whole params object
  const resolvedParams = await params;

  // Then you can safely destructure it
  const { slug, locale } = resolvedParams;

  const project = await getProjectBySlug(slug, locale);
  if (!project) return {};

  const { title, summary, image, publishedAt } = project.metadata;
  const og = image
    ? `${baseURL}${image}`
    : `${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `${baseURL}/${locale}/work/${project.slug}`,
      images: [{ url: og }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [og],
    },
  };
}

// Function to get all images for a project
function getProjectImages(slug: string): string[] {
  // Try different possible folder names based on the slug
  const possibleFolderNames = [
    slug,
    slug.replace(/-/g, "_"),
    slug.split("-").join("-"),
  ];

  let allImages: string[] = [];

  for (const folderName of possibleFolderNames) {
    const projectImagesDir = path.join(
      process.cwd(),
      `${baseURL}/images/projects`,
      folderName
    );

    try {
      if (fs.existsSync(projectImagesDir)) {
        const imageFiles = fs.readdirSync(projectImagesDir);
        const images = imageFiles
          .filter((img) => /\.(jpg|jpeg|png|webp)$/.test(img))
          .map((img) => `${baseURL}/images/projects/${folderName}/${img}`);

        allImages = [...allImages, ...images];
      }
    } catch (error) {
      // Continue to the next folder name
    }
  }

  return allImages;
}

export default async function Project({
  params,
}: {
  params: Promise<WorkParams>;
}) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;
  const post = await getProjectBySlug(slug, locale);
  if (!post) notFound();

  // Get all project images from the file system
  const projectImages = getProjectImages(slug);

  // Merge images from metadata and file system, removing duplicates
  let allImages = [...(post.metadata.images || [])];
  if (projectImages.length > 0) {
    // Filter out duplicates
    projectImages.forEach((img) => {
      if (!allImages.includes(img)) {
        allImages.push(img);
      }
    });
  }

  return (
    <Flex
      as="section"
      fillWidth
      maxWidth="m"
      direction="column"
      alignItems="center"
      gap="l"
    >
      <Schema
        as="blogPosting"
        title={post.metadata.title}
        description={post.metadata.summary}
        baseURL={baseURL}
        path={`/${locale}/work/${post.slug}`}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        headline={post.metadata.title}
        image={post.metadata.image}
        author={{
          name: person.name,
          image: person.avatar,
        }}
      />
      <Flex fillWidth maxWidth="xs" gap="16" direction="column">
        <Button
          href={`/${locale}/work`}
          variant="tertiary"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Flex>

      <Flex
        style={{ margin: "auto" }}
        as="article"
        maxWidth="xs"
        fillWidth
        direction="column"
      >
        <Flex gap="12" marginBottom="24" alignItems="center">
          {post.metadata.team && (
            <AvatarGroup reverseOrder avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />

        {/* Add Project Gallery with remaining images */}
        {allImages.length > 1 && <ProjectGallery images={allImages} />}
      </Flex>
    </Flex>
  );
}

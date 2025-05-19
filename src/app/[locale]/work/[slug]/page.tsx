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
import { baseURL, renderContent } from "@/app/resources";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { formatDate } from "@/app/utils/formatDate";
import { ProjectGallery } from "@/components/ProjectGallery";
import fs from "fs";
import path from "path";

interface WorkParams {
  slug: string;
  locale: string;
}

export async function generateStaticParams() {
  const locales = routing.locales;

  // Create an array to store all posts from all locales
  const allPosts = [];

  // Fetch posts for each locale
  for (const locale of locales) {
    const posts = getPosts([
      "src",
      "app",
      "[locale]",
      "work",
      "projects",
      locale,
    ]);
    allPosts.push(
      ...posts.map((post) => ({
        slug: post.slug,
        locale: locale,
      }))
    );
  }

  return allPosts;
}

export async function generateMetadata({ params }: { params: WorkParams }) {
  const { slug, locale } = params;
  let post = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    locale,
  ]).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/${locale}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
      "public/images/projects",
      folderName
    );

    try {
      if (fs.existsSync(projectImagesDir)) {
        const imageFiles = fs.readdirSync(projectImagesDir);
        const images = imageFiles
          .filter((img) => /\.(jpg|jpeg|png|webp)$/.test(img))
          .map((img) => `/images/projects/${folderName}/${img}`);

        allImages = [...allImages, ...images];
      }
    } catch (error) {
      // Continue to the next folder name
    }
  }

  return allImages;
}

export default async function Project({ params }: { params: WorkParams }) {
  const { slug, locale } = params;
  unstable_setRequestLocale(locale);
  let post = getPosts([
    "src",
    "app",
    "[locale]",
    "work",
    "projects",
    locale,
  ]).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations("work");
  const { person } = renderContent(t);

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/${locale}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
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
      {allImages.length > 0 && (
        <SmartImage
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={allImages[0]}
        />
      )}
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

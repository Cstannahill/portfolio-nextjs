import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { Avatar, Button, Flex, Heading, Text } from "@/once-ui/components";

import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { formatDate } from "@/app/utils/formatDate";

interface BlogParams {
  slug: string;
  locale: string;
}

export async function generateStaticParams() {
  const locales = routing.locales;
  const allPosts: BlogParams[] = [];

  // Fetch posts for each locale
  for (const locale of locales) {
    const posts = getPosts(["src", "app", "[locale]", "blog", "posts", locale]);
    allPosts.push(...posts.map((post) => ({ slug: post.slug, locale })));
  }

  return allPosts;
}

export async function generateMetadata({
  params,
}: {
  params: BlogParams;
}) {
  const { slug, locale } = params;
  const post = getPosts([
    "src",
    "app",
    "[locale]",
    "blog",
    "posts",
    locale,
  ]).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/${locale}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: BlogParams;
}) {
  const { slug, locale } = params;
  unstable_setRequestLocale(locale);

  const posts = getPosts(["src", "app", "[locale]", "blog", "posts", locale]);
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations("blog");
  const { person } = renderContent(t);

  return (
    <Flex as="section" fillWidth maxWidth="xs" direction="column" gap="m">
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
            url: `https://${baseURL}/${locale}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Button
        href={`/${locale}/blog`}
        variant="tertiary"
        size="s"
        prefixIcon="chevronLeft"
      >
        Posts
      </Button>
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Flex gap="12" alignItems="center">
        {person.avatar && <Avatar size="s" src={person.avatar} />}
        <Text variant="body-default-s" onBackground="neutral-weak">
          {formatDate(post.metadata.publishedAt)}
        </Text>
      </Flex>
      <Flex as="article" direction="column" fillWidth>
        <CustomMDX source={post.content} />
      </Flex>
    </Flex>
  );
}
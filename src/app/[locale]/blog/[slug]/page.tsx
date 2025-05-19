import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  Avatar,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  Row,
  Text,
} from "@/once-ui/components";
import { about, blog, person, baseURL } from "@/app/resources";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";
import { HeadingNav } from "@/once-ui/components/HeavingNav";

export async function generateStaticParams({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return getAllPosts(locale).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image:
      post.metadata.image ??
      `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  return (
    <Flex as="section" fillWidth maxWidth="xs" direction="column" gap="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${blog.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Button
        data-border="rounded"
        href="/blog"
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

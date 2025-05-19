import { Flex, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Meta, Schema } from "@/once-ui/modules";
import { blog, person, newsletter } from "@/app/resources";
export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog() {
  const t = getTranslations("blog");

  return (
    <Flex fillWidth maxWidth="s" direction="column">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Flex fillWidth flex={1} direction="column">
        <Posts range={[1, 3]} thumbnail />
        <Posts range={[4]} columns="2" />
      </Flex>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Flex>
  );
}

import { getAllPosts } from "@/lib/posts";
import { Grid } from "@/once-ui/components";
import Post from "./Post";
import { useLocale } from "next-intl";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  locale?: string;
  thumbnail?: boolean;
}

export function Posts({
  range,
  columns = "1",
  locale = "en",
  thumbnail = false,
}: PostsProps) {
  console.log(locale);
  let allBlogs = getAllPosts(locale);
  console.log("Posts seen in component", allBlogs.length, allBlogs);
  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={`repeat(${columns}, 1fr)`}
          mobileColumns="1col"
          fillWidth
          marginBottom="40"
          gap="m"
        >
          {displayedBlogs.map((post) => (
            <Post key={post.slug} post={post} thumbnail={thumbnail} />
          ))}
        </Grid>
      )}
    </>
  );
}

// lib/posts.ts
import { cache } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    image?: string;
  };
  content: string;
};

const POSTS_DIR = (...parts: string[]) =>
  path.join(process.cwd(), "src", "app", ...parts); // keep locale param flexible

function loadAllPostsUncached(locale = "en"): Post[] {
  const dir = POSTS_DIR(locale, "blog", "posts");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = path.basename(file, ".mdx");

      return {
        slug,
        metadata: {
          title: data.title ?? "",
          summary: data.summary ?? "",
          publishedAt: data.publishedAt ?? "",
          image: data.image,
        },
        content,
      };
    });
}

// ⚡️ cached variants – run once per build / per serverless worker boot
export const getAllPosts = cache(loadAllPostsUncached);

export const getPostBySlug = cache(
  (slug: string, locale = "en") =>
    getAllPosts(locale).find((p) => p.slug === slug) ?? null
);

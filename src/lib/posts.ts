// lib/posts.ts (new file)
import fs from "fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

export type Post = {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    image?: string;
    // ...other front‑matter
  };
  content: string;
};

const CONTENT_DIR = (...parts: string[]) =>
  path.join(process.cwd(), "src", "content", ...parts);

console.log("Loading posts from:", CONTENT_DIR("blog"));
console.log("Loading posts from:", CONTENT_DIR("blog", "en"));
/* ---------------- core loader ---------------- */
function loadAllPostsUncached(locale = "en"): Post[] {
  const dir = CONTENT_DIR("blog", locale);
  console.log(fs.readdirSync(dir));
  if (!fs.existsSync(dir)) return [];
  console.log(fs.readdirSync(dir));
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const slug = (data.slug as string) ?? path.basename(file, ".mdx");

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
    })
    .sort((a, b) => (a.metadata.publishedAt < b.metadata.publishedAt ? 1 : -1)); // newest first
}

/* ---------------- cached exports -------------- */
export const getAllPosts = cache(loadAllPostsUncached);
export const getPostBySlug = cache(
  (slug: string, locale = "en") =>
    getAllPosts(locale).find((p) => p.slug === slug) ?? null
);

// lib/content.ts
import { promises as fs } from "fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";

export interface ContentEntry {
  slug: string;
  metadata: Record<string, any>;
  content: string;
}

const CONTENT_DIR = (...parts: string[]) =>
  path.join(process.cwd(), "src", "content", ...parts);

/* ---------- core loader --------- */
async function loadEntriesUncached(
  section: "blog" | "work" | "projects",
  locale = "en"
): Promise<ContentEntry[]> {
  const dir = CONTENT_DIR(section, locale); // e.g. content/work/projects/en

  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(dir, file), "utf8");
        const { data, content } = matter(raw);
        const slug = (data.slug as string) ?? path.basename(file, ".mdx");
        return { slug, metadata: data, content };
      })
  );

  return entries.sort((a, b) =>
    (a.metadata.publishedAt ?? "") < (b.metadata.publishedAt ?? "") ? 1 : -1
  );
}

/* ---------- cached wrappers ------ */
export const getBlogPosts = cache((l = "en") => loadEntriesUncached("blog", l));
export const getWorkEntries = cache((l = "en") =>
  loadEntriesUncached("work", l)
);
export const getProjectEntries = cache((l = "en") =>
  loadEntriesUncached("projects", l)
);

export const getPostBySlug = cache(
  async (slug: string, locale = "en") =>
    (await getBlogPosts(locale)).find((p) => p.slug === slug) ?? null
);

export const getWorkBySlug = cache(
  async (slug: string, locale = "en") =>
    (await getWorkEntries(locale)).find((p) => p.slug === slug) ?? null
);

export const getProjectBySlug = cache(
  async (slug: string, locale = "en") =>
    (await getProjectEntries(locale)).find((p) => p.slug === slug) ?? null
);

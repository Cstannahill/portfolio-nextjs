import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  featured?: boolean;
  date?: string;
  locale: string;
  content: string;
  images: string[];
  summary?: string;
};

// Exclude these projects (as mentioned)
const EXCLUDED_PROJECTS = ["project-01"];

// Projects that should be featured on the About page
// You can adjust this list based on which projects you want to highlight
const FEATURED_PROJECTS = [
  "ai-campfire-chat",
  "project-flow",
  "ecommerce",
  "carte",
  "hsk",
  "ororo-desktop-ai-integration",
];

/**
 * Get all projects for a specific locale
 */
export const getProjects = cache(async (locale = "en"): Promise<Project[]> => {
  const projectsDir = path.join(
    process.cwd(),
    `src/app/[locale]/work/projects/${locale}`
  );

  // Check if directory exists
  if (!fs.existsSync(projectsDir)) {
    console.error(`Directory not found: ${projectsDir}`);
    return [];
  }

  const projectFiles = fs.readdirSync(projectsDir);

  const projects = projectFiles
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");

      // Skip excluded projects
      if (EXCLUDED_PROJECTS.some((excluded) => slug.includes(excluded))) {
        return null;
      }

      // Read the file content
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Parse frontmatter
      const { data, content } = matter(fileContent);

      // Extract project name from slug for image directory matching
      const projectName = slug.split("-").join("-");

      // Find images in the corresponding folders
      let images: string[] = [];
      const possibleImageFolders = [
        path.join(process.cwd(), "public/images/projects", projectName),
        path.join(process.cwd(), "public/images/projects", slug),
        path.join(
          process.cwd(),
          "public/images/projects",
          data.title?.toLowerCase().replace(/\s+/g, "-") || ""
        ),
      ];

      // Try each possible folder location
      for (const folder of possibleImageFolders) {
        try {
          if (fs.existsSync(folder)) {
            const imageFiles = fs.readdirSync(folder);
            images = imageFiles
              .filter((img) => /\.(jpg|jpeg|png|webp)$/.test(img))
              .map((img) => `/images/projects/${path.basename(folder)}/${img}`);

            if (images.length > 0) break; // Stop if we found images
          }
        } catch (error) {
          // Continue to the next folder option
        }
      }

      // Check if this is a featured project
      const isFeatured = data.featured || FEATURED_PROJECTS.includes(slug);

      return {
        slug,
        title: data.title || "Untitled",
        tagline: data.tagline || "",
        featured: isFeatured,
        date: data.date || data.publishedAt || new Date().toISOString(),
        locale,
        content,
        images,
        summary: data.summary || "",
      } as Project;
    })
    .filter(Boolean) as Project[];

  // Sort projects - featured first, then by date if available
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.date && b.date)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    return a.title.localeCompare(b.title);
  });
});

/**
 * Get featured projects
 */
export const getFeaturedProjects = cache(
  async (locale = "en"): Promise<Project[]> => {
    const projects = await getProjects(locale);
    // Get either projects marked as featured or the top 3 if none are marked
    const featured = projects.filter((project) => project.featured);
    return featured.length > 0 ? featured : projects.slice(0, 3);
  }
);

/**
 * Get a single project by slug
 */
export const getProjectBySlug = cache(
  async (slug: string, locale = "en"): Promise<Project | null> => {
    const projects = await getProjects(locale);
    return projects.find((project) => project.slug === slug) || null;
  }
);

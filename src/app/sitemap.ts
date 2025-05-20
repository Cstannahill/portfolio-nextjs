import { getPosts } from "@/app/utils/utils";
import { baseURL } from "@/app/resources";
import { routing } from "@/i18n/routing";
import { devLog } from "@/lib/dev-log";
import { getBlogPosts, getProjectEntries } from "@/lib/content";

const getBlogs = async () => {
  const locales = routing.locales;
  let blogs = await getBlogPosts(locales[0]);
  return blogs.map((post) => ({
    url: `${baseURL}/${locales[0]}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));
};

const getProjects = async () => {
  const locales = routing.locales;
  let projects = await getProjectEntries(locales[0]);
  return projects.map((project) => ({
    url: `${baseURL}/${locales[0]}/work/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));
};

const getRoutes = async () => {
  const locales = routing.locales;
  let routes = locales.flatMap((locale) =>
    ["", "/blog", "/work"].map((route) => ({
      url: `${baseURL}/${locale}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );
  devLog("sitemap route", { total: routes.length });
  return routes;
};
export default async function sitemap() {
  const blogs = await getBlogs();
  const projects = await getProjects();
  const routes = await getRoutes();

  return [...routes, ...blogs, ...projects];
}

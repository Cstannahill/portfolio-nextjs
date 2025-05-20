// import a pre-defined template for config and content options
import { locales, routes as base } from "./config";
export const normalizedRoutes = Object.fromEntries(
  Object.entries(base).flatMap(([route, enabled]) => [
    [route, enabled], // '/readme'
    ...locales.map((l) => [`/${l}${route}`, enabled]), // '/en/readme'
  ])
);
export {
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
  font,
  locales,
} from "@/app/resources/config";
// export { person, social, newsletter, home, about, blog, work, gallery } from '@/app/resources/content-en'
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
} from "@/app/resources/content";

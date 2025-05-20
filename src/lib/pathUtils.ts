import { locales } from "@/app/resources";

export function stripLocale(path: string) {
  const [, first, ...rest] = path.split("/");
  return locales.includes(first) ? `/${rest.join("/")}` || "/" : path;
}

// app/page.tsx   – *only* runs for the bare “/” URL
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing"; // has defaultLocale = 'en'

export default function Index() {
  redirect(`/${routing.defaultLocale}`); // /en
}

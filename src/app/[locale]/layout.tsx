// app/[locale]/layout.tsx
import { Footer, Header, RouteGuard } from "@/components";
import {
  baseURL,
  effects, // <‑‑ still needed for SEO
  home,
} from "@/app/resources";
import { Background, Flex } from "@/once-ui/components";
import { Meta } from "@/once-ui/modules";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  /* ─────  nothing renders <html> or <body> here ───── */
  return (
    <NextIntlClientProvider locale={locale}>
      {/* top spacing that used to be before <Header /> */}
      <Flex fillWidth minHeight="16" />

      <Header />

      <Flex
        zIndex={0}
        fillWidth
        paddingY="l"
        paddingX="l"
        justifyContent="center"
        flex={1}
      >
        <Flex justifyContent="center" fillWidth minHeight="0">
          <RouteGuard>
            {children}
            <Analytics />
          </RouteGuard>
        </Flex>
      </Flex>

      <Footer />
    </NextIntlClientProvider>
  );
}

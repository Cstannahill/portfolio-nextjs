import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { getTranslations } from "next-intl/server";
import { Meta } from "@/once-ui/modules";
import { gallery, person } from "@/app/resources";
type PageParams = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;

  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `${baseURL}/og?title=${encodeURIComponent(title)}`;
  return Meta.generate({
    title,
    description,
    baseURL,
    path: "/gallery",
    type: "website",
    image: ogImage,
    author: {
      name: person.name,
      url: `${baseURL}/about`,
    },
  });
}

export default async function Gallery({ params }: PageParams) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "gallery" });

  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `${baseURL}/gallery`,
            image: gallery.images.map((image: any) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={gallery.images} />
    </Flex>
  );
}

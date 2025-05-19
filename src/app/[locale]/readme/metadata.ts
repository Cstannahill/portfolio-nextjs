import { Metadata } from "next";
import { baseURL } from "@/app/resources";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const title = "README";
  const description = "My GitHub profile README with technical skills and projects";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${params.locale}/readme`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
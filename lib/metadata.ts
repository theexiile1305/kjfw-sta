import type { Metadata } from "next";
import { BASE_URL, ORG_SHORT } from "./constants";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImagePath = "/og-default.jpg",
}: PageMetaOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${ORG_SHORT}`,
      description,
      url,
      images: [{ url: ogImagePath, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${ORG_SHORT}`,
      description,
    },
  };
}

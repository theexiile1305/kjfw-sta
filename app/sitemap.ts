import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" },
    { path: "/jugendfeuerwehren", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kinderfeuerwehren", priority: 0.8, changeFrequency: "monthly" },
    { path: "/jugendpokal", priority: 0.7, changeFrequency: "yearly" },
    { path: "/termine", priority: 0.9, changeFrequency: "weekly" },
    { path: "/kontakt", priority: 0.6, changeFrequency: "never" },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

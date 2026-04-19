import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { youthBrigades } from "@/lib/data/youthBrigades";
import { childrenBrigades } from "@/lib/data/childrenBrigades";

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticRoutes: SitemapEntry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/termine", priority: 0.9, changeFrequency: "weekly" },
  { path: "/ueber-uns", priority: 0.8, changeFrequency: "monthly" },
  { path: "/jugendfeuerwehren", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kinderfeuerwehren", priority: 0.8, changeFrequency: "monthly" },
  { path: "/informationen-fuer-die-eltern", priority: 0.7, changeFrequency: "monthly" },
  { path: "/jugendpokal", priority: 0.7, changeFrequency: "yearly" },
  { path: "/kontakt", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const youthRoutes: SitemapEntry[] = youthBrigades.map((b) => ({
    path: `/jugendfeuerwehr/${b.id}`,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  const childrenRoutes: SitemapEntry[] = childrenBrigades.map((b) => ({
    path: `/kinderfeuerwehr/${b.id}`,
    priority: 0.6,
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...youthRoutes, ...childrenRoutes].map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts,
  ];
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bl-results.pl",
      lastModified: new Date("2026-04-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

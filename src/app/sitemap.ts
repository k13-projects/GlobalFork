import type { MetadataRoute } from "next";
import { VENDORS } from "@/data/vendors";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const legalRoutes: MetadataRoute.Sitemap = [
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  const vendorRoutes: MetadataRoute.Sitemap = VENDORS.map((v) => ({
    url: absoluteUrl(`/vendors/${v.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...vendorRoutes, ...legalRoutes];
}

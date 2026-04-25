import type { MetadataRoute } from "next";
import { VENDORS } from "@/data/vendors";

const BASE = "https://globalfork.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/vendors",
    "/bookings",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const vendorRoutes: MetadataRoute.Sitemap = VENDORS.map((v) => ({
    url: `${BASE}/vendors/${v.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...vendorRoutes];
}

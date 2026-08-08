import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/refund-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/cookies-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

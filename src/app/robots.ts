import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const BLOCKED_CRAWLERS = [
  "AhrefsBot",
  "MJ12bot",
  "SemrushBot",
  "DotBot",
  "ZoominfoBot",
  "DataForSeoBot",
  "Datafeedwatch",
  "SiteAuditBot",
  "SiteExplorer",
  "Siteimprove",
  "Sitebulb",
  "Screaming Frog",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: BLOCKED_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

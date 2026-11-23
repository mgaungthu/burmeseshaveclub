import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pages).map((page) => ({
    url: new URL(page.path, site.url).href,
  }));
}

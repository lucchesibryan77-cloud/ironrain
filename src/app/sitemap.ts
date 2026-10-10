import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/work", "/industries", "/insights", "/about", "/contact", "/privacy", "/terms"].map(
    (p) => ({ url: `${site.url}${p}`, lastModified: new Date() })
  );
  const serviceRoutes = services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: new Date() }));
  const caseRoutes = cases.map((c) => ({ url: `${site.url}/work/${c.slug}`, lastModified: new Date() }));
  const postRoutes = posts.map((p) => ({ url: `${site.url}/insights/${p.slug}`, lastModified: new Date(p.date) }));
  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...postRoutes];
}

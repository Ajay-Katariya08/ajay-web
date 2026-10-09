import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const routes = ["", "/about", "/projects", "/services", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-09"),
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date("2026-10-09"),
  }));

  return [...routes, ...projectRoutes];
}

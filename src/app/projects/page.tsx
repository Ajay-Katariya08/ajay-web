import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore frontend projects, SaaS dashboards, e-commerce storefronts, and design systems built by Ajay Katariya.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Selected Projects
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          A showcase of recent frontend web applications, design systems, and client solutions. Filter by technology or project domain.
        </p>
      </div>

      <ProjectFilter projects={projectsData} />

      <ContactCTA />
    </div>
  );
}

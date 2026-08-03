import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            High-performance frontend web applications, SaaS dashboards, and digital experiences.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 self-start md:self-auto group transition-colors"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="group rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs overflow-hidden flex flex-col justify-between hover:border-indigo-400/80 dark:hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700">
                    {project.category}
                  </Badge>
                  {project.year && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {project.year}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 mt-4">
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-semibold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1 transition-colors"
              >
                Case Study
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    aria-label="Live Project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

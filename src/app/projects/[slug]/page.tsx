import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Calendar, User, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/sections/contact-cta";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <article className="py-12 space-y-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700">
            {project.category}
          </Badge>
          {project.year && (
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              {project.year}
            </span>
          )}
          {project.client && (
            <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-indigo-500" />
              {project.client}
            </span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Live Project Demo
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-800 dark:text-zinc-200 px-6 py-3 rounded-xl font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
            >
              <Github className="w-4 h-4 text-indigo-500" />
              View Source Code
            </a>
          )}
        </div>
      </div>

      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900/60 shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
        <div className="lg:col-span-2 space-y-8">
          {project.challenge && (
            <div className="p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                The Challenge
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div className="p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-3">
              <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
                The Solution & Approach
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {project.outcome && (
            <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/10 space-y-3">
              <h2 className="text-lg font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Key Outcome & Results
              </h2>
              <p className="text-sm sm:text-base text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-6 p-7 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md h-fit">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.client && (
            <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                Client / Context
              </h3>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {project.client}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-8 flex items-center justify-between">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            ← {prevProject.title}
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {nextProject.title} →
          </Link>
        ) : <div />}
      </div>

      <ContactCTA />
    </article>
  );
}

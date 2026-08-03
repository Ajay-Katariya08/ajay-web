import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Squares } from "@/components/ui/squares";

export function Hero() {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden">
      <Squares speed={0.3} squareSize={40} className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40" />

      <div className="relative max-w-4xl mx-auto w-full space-y-6 sm:space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {siteConfig.availabilityText}
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
            Crafting <span className="text-indigo-600 dark:text-indigo-400">Exceptional</span> Web Experiences
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300">
            Hi, I'm <span className="text-zinc-950 dark:text-white font-semibold">{siteConfig.name}</span> ({siteConfig.alias}) - {siteConfig.role}.
          </p>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I build fast, responsive, accessible, and polished digital experiences with modern React & Next.js architectures, sleek animations, and clean visual design.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-800 dark:text-zinc-200 px-6 py-3.5 rounded-xl font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            View Work
          </Link>
        </div>

        <div className="flex items-center gap-4 pt-4 text-zinc-600 dark:text-zinc-400">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 shadow-xs hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 shadow-xs hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {siteConfig.social.twitter && (
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 shadow-xs hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-105 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

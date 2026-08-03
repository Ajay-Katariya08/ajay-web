import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ajay Katariya, frontend specialization, philosophy, and background.",
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      <section className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          About Me
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          Frontend Developer focused on <span className="gradient-text">speed</span>, UX, & clean architecture.
        </h1>
        <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I'm {siteConfig.name}, a dedicated frontend engineer building high-performance web applications with Next.js, React, TypeScript, and modern styling libraries.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-zinc-200/80 dark:border-zinc-800/80 py-14">
        <div className="p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-4">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
            Development Philosophy
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I believe modern web applications excel when pixel precision, sub-second load times, and accessible architecture harmonize. User interfaces should feel seamless while keeping codebase structures scalable.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-4">
          <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
            Frontend Specialization
          </h2>
          <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Next.js App Router architecture & SSR/SSG optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Strictly typed React component design systems</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Tailwind CSS design token management & glassmorphism UI</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Core Web Vitals tuning & lighthouse auditing</span>
            </li>
          </ul>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />

      <ContactCTA />
    </div>
  );
}

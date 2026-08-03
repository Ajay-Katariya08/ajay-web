import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactCTA() {
  return (
    <section className="py-20">
      <div className="relative p-8 sm:p-14 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white shadow-2xl overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-4 max-w-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Let's build something fast, responsive, and memorable together. Send me a message with your project requirements or goals.
          </p>
        </div>

        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 font-semibold px-6 py-3.5 rounded-xl text-sm shadow-md hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-800/80 backdrop-blur-md text-zinc-200 font-medium px-6 py-3.5 rounded-xl text-sm hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}

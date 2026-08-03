import { Check } from "lucide-react";

const reasons = [
  {
    title: "Clean, Maintainable Codebase",
    description: "Modular React component architecture with strict TypeScript types and zero technical debt."
  },
  {
    title: "Pixel-Perfect Implementation",
    description: "Precise translation of Figma designs into exact, fluid responsive layouts."
  },
  {
    title: "Clear & Async Communication",
    description: "Regular updates, transparent progress tracking, and rapid response times."
  },
  {
    title: "Performance Awareness",
    description: "Built-in optimization for Core Web Vitals, dynamic asset loading, and bundle size control."
  },
  {
    title: "Production-Ready Delivery",
    description: "Thorough testing across viewports, browsers, keyboard accessibility, and light/dark modes."
  },
  {
    title: "Business Outcome Focus",
    description: "Focus on user conversion, client satisfaction, and clean code that scales after delivery."
  }
];

export function WhyWorkWithMe() {
  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-3xl mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          Value Proposition
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Why Work With Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
          Direct advantages of collaborating on your frontend engineering goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="group p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {reason.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-10">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

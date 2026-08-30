import { CheckCircle2, Cpu, ShieldCheck, Zap } from "lucide-react";

const trustPoints = [
  {
    icon: CheckCircle2,
    title: "3+ Years Experience",
    description: "Building production React & Next.js web applications.",
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Optimized Core Web Vitals, fast initial loads, and smooth render cycles.",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: Cpu,
    title: "Component Architecture",
    description: "Modular, typed, reusable code structures built to scale.",
    color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Responsive & Accessible",
    description:
      "Flawless viewports from mobile to 4K displays with WCAG standards.",
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
];

export function TrustOverview() {
  return (
    <section className="py-14 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className="group p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${point.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

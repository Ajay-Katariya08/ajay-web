import Link from "next/link";
import { ArrowRight, Code2, Figma, Layers, Palette, Smartphone, Zap } from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap = {
  Code2,
  Figma,
  Layers,
  Palette,
  Smartphone,
  Zap,
};

export function ServicesSection() {
  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Core Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Freelance Services
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Frontend engineering solutions built to elevate brands and deliver seamless user experiences.
          </p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 self-start md:self-auto group transition-colors"
        >
          Detailed Workflow & Pricing
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Code2;
          return (
            <div
              key={service.id}
              className="group p-6 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs flex flex-col justify-between hover:border-indigo-400/80 dark:hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-3xl mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          Career Path
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Experience
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
          Professional development timeline and impact across engineering teams.
        </p>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.company + exp.role}
            className="group p-6 sm:p-8 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {exp.company}
                </p>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 self-start sm:self-auto">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-2 pt-1">
              {exp.responsibilities.map((resp, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100/80 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

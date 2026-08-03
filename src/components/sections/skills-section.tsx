import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-3xl mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
          Technical Stack
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
          Curated frontend ecosystem and modern tools honed across production projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.name}
            className="group p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/80 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

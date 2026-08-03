import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore client frontend development services, design-to-code workflows, and 6-step collaboration process.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Review project goals, designs, technical specifications, and key deliverables."
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description: "Establish component scope, state management pattern, and design token integration."
  },
  {
    step: "03",
    title: "Development",
    description: "Write clean, type-safe Next.js / React code with regular async progress updates."
  },
  {
    step: "04",
    title: "Review & Testing",
    description: "Test responsiveness across device viewports, light/dark modes, and accessibility."
  },
  {
    step: "05",
    title: "Launch & Integration",
    description: "Deploy to production environment with complete documentation and seamless handover."
  },
  {
    step: "06",
    title: "Post-Launch Support",
    description: "Assistance with initial updates, performance monitoring, and bug fixes."
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          Freelance Frontend Services
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          Turn your designs into <span className="gradient-text">fast</span>, production-ready web products.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I partner with startups, agencies, and founders to build scalable frontend applications, design systems, and responsive marketing sites.
        </p>
      </div>

      <ServicesSection />

      <section className="py-16 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            Structured Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Development & Collaboration Process
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
            A simple, predictable 6-step workflow from discovery to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 inline-block">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <WhyWorkWithMe />
      <ContactCTA />
    </div>
  );
}

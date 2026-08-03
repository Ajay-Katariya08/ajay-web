import type { Metadata } from "next";
import { Mail, Github, Linkedin, Twitter, Clock, MapPin, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ajay Katariya for freelance projects, frontend consultation, or contract opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          Let's <span className="gradient-text">Work Together</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Have a project, freelance inquiry, or design-to-code request? Send me a message and I'll respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-5">
            <h3 className="font-bold text-base text-zinc-950 dark:text-white">
              Direct Contact Details
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-zinc-900 dark:text-zinc-100 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{siteConfig.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Response time: &lt; 24 hours</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                {siteConfig.availabilityText}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md space-y-4">
            <h3 className="font-bold text-base text-zinc-950 dark:text-white">
              Social Profiles
            </h3>

            <div className="space-y-2.5 text-xs font-medium">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-indigo-500/40 transition-all text-zinc-800 dark:text-zinc-200"
              >
                <span className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-indigo-500" />
                  GitHub
                </span>
                <span className="text-zinc-400">→</span>
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-indigo-500/40 transition-all text-zinc-800 dark:text-zinc-200"
              >
                <span className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-indigo-500" />
                  LinkedIn
                </span>
                <span className="text-zinc-400">→</span>
              </a>

              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-indigo-500/40 transition-all text-zinc-800 dark:text-zinc-200"
                >
                  <span className="flex items-center gap-2.5">
                    <Twitter className="w-4 h-4 text-indigo-500" />
                    Twitter / X
                  </span>
                  <span className="text-zinc-400">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 py-12 transition-colors">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="font-bold text-lg text-zinc-950 dark:text-white">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm">
              {siteConfig.bio}
            </p>
            <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 pt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {siteConfig.social.twitter && (
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-zinc-950 dark:text-white tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-zinc-950 dark:text-white tracking-wider uppercase mb-4">
              Contact
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Have a project in mind?
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-950 dark:text-white hover:underline"
            >
              {siteConfig.email}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Designed & Built by {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}

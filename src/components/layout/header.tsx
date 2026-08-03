"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/90 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/70 backdrop-blur-xl transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight text-zinc-950 dark:text-white flex items-center gap-2 group"
        >
          <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{siteConfig.name}</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 p-1 bg-zinc-200/50 dark:bg-zinc-900/60 rounded-full border border-zinc-200/80 dark:border-zinc-800/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs border border-zinc-200/60 dark:border-zinc-700/50"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 text-white dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50 dark:text-zinc-950 px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Let's Work Together
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

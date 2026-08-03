"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
        aria-label="Toggle navigation menu"
        type="button"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed left-0 right-0 top-16 bottom-0 z-999 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between border-t border-zinc-200/90 dark:border-zinc-800/90 shadow-2xl overflow-y-auto min-h-fit!">
          <nav className="flex flex-col space-y-3 pt-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold py-3.5 px-4 rounded-xl border transition-all ${isActive
                      ? "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400"
                      : "bg-white dark:bg-zinc-950 border-transparent text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 pb-6 border-t border-zinc-100 dark:border-zinc-900">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 px-5 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
            >
              Let's Work Together
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-center font-medium text-zinc-500 dark:text-zinc-400">
              {siteConfig.availabilityText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

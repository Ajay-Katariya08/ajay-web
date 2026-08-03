import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">
          404 Error
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          The requested route or project case study does not exist or has been moved.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        Return Home
      </Link>
    </div>
  );
}

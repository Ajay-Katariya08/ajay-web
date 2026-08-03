import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} (${siteConfig.alias})`,
  },
  description: siteConfig.bio,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.bio,
    siteName: `${siteConfig.name} (${siteConfig.alias})`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.bio,
    creator: "@Dev_With_Ajju",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      "name": siteConfig.name,
      "alternateName": ["dev with ajju", "devwithajju", "Dev_With_Ajju"],
      "url": siteConfig.url,
      "jobTitle": siteConfig.role,
      "sameAs": [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": siteConfig.url,
      "name": `${siteConfig.name} - dev with ajju`,
      "publisher": { "@id": `${siteConfig.url}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col antialiased bg-zinc-100/60 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd data={jsonLdData} />
          <div className="relative max-w-6xl w-full mx-auto min-h-screen flex flex-col border-x border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-zinc-950 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 -left-2 w-px bg-zinc-200 dark:bg-zinc-800/80 hidden sm:block" />
            <div className="pointer-events-none absolute inset-y-0 -left-2 w-px bg-gradient-to-b from-transparent via-indigo-500/30 dark:via-indigo-400/30 to-transparent hidden sm:block" />
            
            <div className="pointer-events-none absolute inset-y-0 -right-2 w-px bg-zinc-200 dark:bg-zinc-800/80 hidden sm:block" />
            <div className="pointer-events-none absolute inset-y-0 -right-2 w-px bg-gradient-to-b from-transparent via-indigo-500/30 dark:via-indigo-400/30 to-transparent hidden sm:block" />

            <div className="pointer-events-none absolute -top-1.5 -left-3 text-zinc-300 dark:text-zinc-700 font-mono text-[10px] select-none hidden sm:block">+</div>
            <div className="pointer-events-none absolute -top-1.5 -right-3 text-zinc-300 dark:text-zinc-700 font-mono text-[10px] select-none hidden sm:block">+</div>

            <Header />
            <main className="flex-1 w-full px-4 sm:px-8 lg:px-12">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

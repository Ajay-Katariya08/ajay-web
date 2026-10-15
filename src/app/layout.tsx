import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@vercel/analytics/next";

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
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Ajay Katariya",
      alternateName: [
        "ajaykatariya",
        "ajay katariya",
        "Ajay Katariya Developer",
        "dev with ajju",
        "devwithajju",
        "Dev_With_Ajju",
      ],
      url: siteConfig.url,
      jobTitle: "Senior Frontend Developer",
      description:
        "Senior Frontend Developer & React Specialist building high-performance Next.js web applications.",
      email: "ajaykatariya.dev@gmail.com",
      image: `${siteConfig.url}/opengraph-image`,
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Frontend Development",
        "Web Performance",
        "UI/UX Design",
      ],
      nationality: { "@type": "Country", name: "India" },
      sameAs: [
        siteConfig.social.github,
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: [
        siteConfig.alias ?? "ajaykatariya",
        `${siteConfig.name} - Portfolio`,
        "devwithajju",
        "Dev With Ajju",
      ],
      description: siteConfig.bio,
      publisher: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#homepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.bio,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#person` },
      inLanguage: "en",
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

            <div className="pointer-events-none absolute -top-1.5 -left-3 text-zinc-300 dark:text-zinc-700 font-mono text-[10px] select-none hidden sm:block">
              +
            </div>
            <div className="pointer-events-none absolute -top-1.5 -right-3 text-zinc-300 dark:text-zinc-700 font-mono text-[10px] select-none hidden sm:block">
              +
            </div>

            <Header />
            <main className="flex-1 w-full px-4 sm:px-8 lg:px-12">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "nexus-analytics-dashboard",
    title: "Nexus Analytics Dashboard",
    description: "Real-time SaaS analytics platform featuring dynamic data visualization, customizable widget layouts, and responsive data tables.",
    longDescription: "Nexus is a high-performance analytics dashboard designed for fast-growing SaaS startups. Built with Next.js 16 and TypeScript, it handles thousands of live metrics smoothly with virtualized data lists and lightweight chart integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    category: "Dashboard",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    featured: true,
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/ajaykatariya/nexus-dashboard",
    year: 2024,
    client: "Nexus Cloud Inc.",
    challenge: "The existing dashboard suffered from sluggish rendering, sluggish chart updates, and poor mobile responsiveness.",
    solution: "Architected a modular component system with React Server Components, server-side data prefetching, and custom CSS token-based dark mode.",
    outcome: "Improved Lighthouse performance score from 62 to 98 and reduced initial payload size by 45%."
  },
  {
    slug: "elevate-design-system",
    title: "Elevate Design System & UI Kit",
    description: "Comprehensive component library and design system built with Tailwind CSS, supporting dark/light mode and accessible ARIA primitives.",
    longDescription: "Elevate is an enterprise-grade UI component architecture providing 40+ accessible React components. Designed for developer productivity and seamless multi-brand token styling.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
    ],
    category: "UI System",
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Storybook"],
    featured: true,
    liveUrl: "https://example.com/elevate",
    githubUrl: "https://github.com/ajaykatariya/elevate-ui",
    year: 2024,
    client: "Internal Product",
    challenge: "Inconsistent UI patterns and redundant styling across multiple frontend repositories.",
    solution: "Created an isolated npm package with standardized design tokens, accessible keyboard interactions, and strict TypeScript prop schemas.",
    outcome: "Accelerated feature delivery by 35% across 4 client web applications."
  },
  {
    slug: "aura-ecommerce-storefront",
    title: "Aura E-Commerce Storefront",
    description: "Ultra-fast headless e-commerce store with instant client-side transitions, product filtering, and streamlined checkout UX.",
    longDescription: "Aura is a modern storefront engineered for conversion optimization. Featuring server-rendered product catalog pages, optimistic cart updates, and full mobile optimization.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80"
    ],
    category: "E-commerce",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    featured: true,
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/ajaykatariya/aura-storefront",
    year: 2023,
    client: "Aura Goods",
    challenge: "Low mobile conversion rates caused by slow product page loads and awkward filter navigation.",
    solution: "Built a headless Next.js frontend with route prefetching, responsive drawered filter menus, and lightweight state management.",
    outcome: "Boosted mobile conversion by 28% and cut dynamic page response time to <150ms."
  },
  {
    slug: "pulse-saas-landing-page",
    title: "Pulse SaaS Landing Page",
    description: "High-converting marketing landing page featuring clean typography, responsive layout sections, and subtle interaction micro-animations.",
    longDescription: "Pulse is a pixel-perfect SaaS landing page designed to communicate value clearly and convert visitors into active trial users.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    category: "Landing Page",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    liveUrl: "https://example.com/pulse",
    githubUrl: "https://github.com/ajaykatariya/pulse-landing",
    year: 2023,
    client: "Pulse AI",
    challenge: "Converting complex technical feature sets into an intuitive, visually clear narrative.",
    solution: "Designed a clean vertical visual flow with distinct feature cards, responsive comparison grids, and prominent CTAs.",
    outcome: "Achieved 100/100 Core Web Vitals score on mobile and desktop."
  }
];

import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Modern, responsive, production-ready web applications built using React, Next.js, TypeScript, and Tailwind CSS.",
    features: [
      "Clean component architecture",
      "Type-safe TypeScript codebase",
      "Cross-browser & mobile optimization",
      "SEO & Metadata foundation"
    ],
    iconName: "Code2"
  },
  {
    id: "design-to-code",
    title: "Design to Code",
    description: "Convert Figma, Adobe XD, or custom design specifications into pixel-perfect, interactive frontend code.",
    features: [
      "Pixel-perfect implementation",
      "Responsive layout adaptation",
      "Interactive hover & motion states",
      "Semantic HTML tags"
    ],
    iconName: "Figma"
  },
  {
    id: "nextjs-development",
    title: "Next.js Application Development",
    description: "Full-scale Next.js App Router applications with static rendering, server components, and dynamic routing.",
    features: [
      "App Router architecture",
      "Server Component defaults",
      "Fast route transitions",
      "Optimized assets and images"
    ],
    iconName: "Layers"
  },
  {
    id: "ui-component-systems",
    title: "UI Component Systems",
    description: "Custom, scalable, accessible component libraries tailored to your brand identity and product needs.",
    features: [
      "Tailwind CSS integration",
      "Light and dark mode tokens",
      "Accessible ARIA compliance",
      "Reusable design patterns"
    ],
    iconName: "Palette"
  },
  {
    id: "responsive-redesign",
    title: "Responsive Redesign",
    description: "Refactor or rebuild non-responsive layouts to look and perform flawlessly across mobile, tablet, and desktop.",
    features: [
      "Mobile-first architecture",
      "Fluid typography & spacing",
      "Touch-friendly touch targets",
      "No horizontal overflow"
    ],
    iconName: "Smartphone"
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description: "Audit and improve existing React/Next.js frontend performance, loading speed, and Core Web Vitals.",
    features: [
      "Core Web Vitals audit",
      "Bundle size reduction",
      "Image & asset tuning",
      "Render cycle optimization"
    ],
    iconName: "Zap"
  }
];

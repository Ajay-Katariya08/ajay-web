import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "globalsbid-tenders-portal",
    title: "GlobalsBid - Global Tenders & Procurement Platform",
    description:
      "High-traffic international government tender search and procurement portal facilitating discovery of global RFPs, bids, and business opportunities.",
    longDescription:
      "GlobalsBid is a comprehensive procurement notice and government tenders portal designed to connect global enterprises with public sector contracts and tender notices worldwide. Engineered with React, TypeScript, and Tailwind CSS, the platform delivers high-speed tender discovery, multi-faceted keyword and regional filtering, and integrated payment processing via Razorpay for premium subscription access.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Web Application",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay API",
      "REST APIs",
      "Google Tag Manager",
      "SEO / Schema.org",
    ],
    featured: true,
    liveUrl: "https://globalsbid.com",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2025,
    client: "GlobalsBid",
    challenge:
      "Building a high-throughput tender portal capable of indexing thousands of daily procurement notices with rapid multi-parameter filtering, fast load times, and structured SEO schema for organic reach.",
    solution:
      "Developed a responsive, accessible React architecture with custom filtering pipelines, Razorpay checkout integration, structured schema.org metadata for rich search indexing, and optimized bundle caching.",
    outcome:
      "Significantly boosted organic search impressions and streamlined subscription conversions for international tender bidders.",
  },
  {
    slug: "refundpulse-flight-tracker",
    title: "RefundPulse - Automated Flight Delay Compensation Tracker",
    description:
      "24/7 background flight radar tracking EU261, UK261, and US DOT statutory compensation with instant 1-click legal claim generation.",
    longDescription:
      "RefundPulse is an automated aviation claim and flight tracking SaaS platform that helps passengers recover statutory cash payouts when airlines delay or cancel flights. Powered by Next.js App Router, live aviation APIs, and Google Gemini AI, RefundPulse continuously monitors flight schedules in real-time, calculates legal entitlement based on international air passenger regulations, and drafts court-tested demand notices citing case laws like Sturgeon v Condor.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "SaaS Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini AI",
      "AeroDataBox API",
      "Lucide Icons",
    ],
    featured: true,
    liveUrl: "https://refundpulse.vercel.app",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "RefundPulse",
    challenge:
      "Traditional compensation agencies charge 30-50% commission cuts and require cumbersome paperwork, while travelers lack awareness of statutory rights under EU 261/2004, UK CAA, and US DOT 14 CFR.",
    solution:
      "Architected an automated Next.js SaaS solution with an instant statutory delay calculator, live flight radar sync, and automated AI legal notice generation allowing passengers to claim 100% of their compensation directly.",
    outcome:
      "Empowered airline passengers to reclaim statutory cash entitlements (up to €600/£520 per passenger) with zero commission fees and 1-click filing.",
  },
  {
    slug: "resumai-ai-resume-builder",
    title: "ResumAI - AI Resume & CV Builder SaaS",
    description:
      "Full-stack AI-driven resume builder featuring ATS optimization, smart bullet improver, dynamic templates, and format-locked A4 PDF export.",
    longDescription:
      "ResumAI is a modern resume workspace engineered to help job seekers create ATS-friendly, professionally structured CVs. Built using Next.js, React, and TypeScript with Google Gemini AI integration, it provides real-time job summary generation, AI bullet point enhancements, role-based skill suggestions, multiple template themes (Modern, Classic, Developer, Minimal, Creative), and high-precision print-to-PDF generation with zero layout shifts.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "AI SaaS",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini AI",
      "Lucide Icons",
      "PDF Export Engine",
    ],
    featured: true,
    liveUrl: "https://akresu-builder.vercel.app",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "ResumAI",
    challenge:
      "Job candidates frequently struggle with weak resume bullet points, unformatted layouts, and rejection by Automated Tracking Systems (ATS).",
    solution:
      "Created an intuitive multi-step builder with intelligent AI rewriting, dynamic typography/color controls, live previewing, and pixel-accurate format-locked A4 PDF rendering.",
    outcome:
      "Delivered an effortless resume creation flow that enhances CV quality and optimizes applications for ATS scanning.",
  },
];

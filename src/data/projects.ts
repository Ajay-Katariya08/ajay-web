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
    slug: "queuezero-queue-telemetry",
    title: "QueueZero - Crowdsourced Queue Intelligence & Telemetry",
    description:
      "Real-time crowdsourced queue intelligence and multi-step visit-duration simulation engine for hospitals, government offices, DMVs, and banks.",
    longDescription:
      "QueueZero is a crowdsourced queue intelligence and wait-time prediction platform engineered to eliminate unpredictable waiting bottlenecks. Built using Next.js App Router, React, and TypeScript with Clerk authentication, it combines verified telemetry feeds from facility operators with anonymous real-time visitor reporting. It features an interactive visit planner that simulates multi-stage operational journeys (token clearance, service counters, processing) against user time budgets to calculate precise departure recommendations.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "SaaS Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Lucide Icons",
      "Simulation Engine",
    ],
    featured: true,
    liveUrl: "https://queuezeero.vercel.app/",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "QueueZero",
    challenge:
      "Citizens and patients waste hours in unpredictable queues at healthcare facilities, DMVs, and service desks due to lack of transparent, real-time wait telemetry.",
    solution:
      "Engineered a zero-friction crowdsourced platform with 1-tap anonymous reporting, operator status feeds, and a journey simulation engine forecasting multi-step bottleneck delays.",
    outcome:
      "Delivered live queue visibility and predictive time budgeting across multiple public facility categories, preventing unexpected wait times.",
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
  {
    slug: "sharetools-community-rental-platform",
    title: "ShareTools - Hyper-Local Equipment Sharing Platform",
    description:
      "Hyper-local peer-to-peer equipment sharing marketplace connecting neighbors in Surat to borrow and lend household tools, power drills, and appliances.",
    longDescription:
      "ShareTools is a hyper-local peer-to-peer equipment rental and community sharing platform designed to reduce household consumption and unnecessary tool purchases. Built with Next.js App Router, TypeScript, and Tailwind CSS, the platform features interactive neighborhood map exploration across Surat micro-localities (Vesu, Adajan, Piplod, Pal), rental savings calculators, tool listing flows, and verified community trust ratings.",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Marketplace Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Interactive Maps",
      "Lucide Icons",
    ],
    featured: true,
    liveUrl: "https://shareyourtools.vercel.app",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "ShareTools",
    challenge:
      "Homeowners and DIY enthusiasts frequently purchase expensive power tools and appliances that sit idle for 99% of the year, leading to unnecessary spending and storage clutter.",
    solution:
      "Engineered an intuitive hyper-local sharing platform featuring geo-tagged neighborhood equipment maps, instant rental savings estimation, and verified peer-to-peer listing workflows.",
    outcome:
      "Created a collaborative circular economy hub enabling residents to save up to 80% on home DIY equipment costs while fostering neighborhood resource sharing.",
  },
  {
    slug: "auraflow-retainer-platform",
    title: "AuraFlow - Freelancer Direct Retainer Platform",
    description:
      "Recurring retainer subscriptions, dedicated client portals, billable task tracking, and projected MRR analytics for modern freelancers.",
    longDescription:
      "AuraFlow is a modern retainer management and client portal platform engineered to help freelancers and independent consultants convert one-off clients into predictable monthly recurring revenue. Built with Next.js, React, and TypeScript, it integrates Razorpay recurring subscriptions, dedicated task submission workflows, real-time MRR analytics with interactive charts, Vercel Blob deliverables hosting, and Resend transactional notifications.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "SaaS Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Razorpay Subscriptions",
      "Recharts",
      "Vercel Blob",
      "Resend",
      "Lucide Icons",
    ],
    featured: true,
    liveUrl: "https://auraaflow.vercel.app/",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "AuraFlow",
    challenge:
      "Freelancers struggle with inconsistent monthly cash flow, awkward manual invoice chasing, and disorganized client task requests scattered across emails and messaging apps.",
    solution:
      "Built an end-to-end recurring retainer SaaS enabling freelancers to define subscription tiers, automate Razorpay recurring billing, track hours against task deliverables, and provide clients with a self-serve portal.",
    outcome:
      "Streamlined predictable recurring cash flow for independent professionals while replacing messy email threads with transparent deliverables tracking.",
  },
  {
    slug: "uiexchange-component-marketplace",
    title: "UIExchange - Peer-to-Peer UI Component Marketplace",
    description:
      "Visual peer-to-peer marketplace to buy, sell, and trade single-file React and Tailwind CSS components with isolated sandbox previews.",
    longDescription:
      "UIExchange is a visual peer-to-peer marketplace engineered for frontend developers and designers to buy, sell, and trade single-file React and Tailwind CSS components. Featuring live isolated sandbox previews, creator monetization with 85% payouts via Stripe Connect, and 0% fee peer-to-peer component swaps, the platform eliminates bulky npm dependencies in favor of modular, copy-pasteable UI primitives.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    ],
    category: "Marketplace Platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Stripe Connect",
      "Clerk",
      "DaisyUI",
      "Lucide Icons",
    ],
    featured: true,
    liveUrl: "https://ui-trade.vercel.app/",
    githubUrl: "https://github.com/ajay-katariya08",
    year: 2026,
    client: "UIExchange",
    challenge:
      "Developers often install bulky monolithic component libraries or rebuild custom UI from scratch, while creators lack an accessible micro-transaction marketplace or 1:1 trading hub for modular components.",
    solution:
      "Architected a Next.js component marketplace featuring Clerk authentication, Stripe Connect creator payouts, live interactive sandboxes across multiple viewports, and a direct 1:1 P2P component exchange protocol.",
    outcome:
      "Enabled creators to monetize single-file UI components with 85% payouts and provided a frictionless ecosystem for zero-fee peer-to-peer component swaps.",
  },
];

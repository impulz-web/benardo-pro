import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "muramara-events-platform",
    name: "Murarama Events Platform",
    summary:
      "Built a full-stack platform combining a responsive marketing site, role-protected admin content portal, and CRM lead pipeline for an events company in Trans Nzoia County.",
    fullDescription: [
      "Murarama Events Platform is a full-stack web application built to power both the public brand experience and internal operations for an events business. On the public side, the app delivers a responsive, high-visual marketing site where visitors can explore services, gallery content, testimonials, and submit event inquiries. On the internal side, it provides a secure staff portal for authenticated users and a role-protected admin dashboard used to manage media assets, testimonials, marketing banners, and incoming leads in real time.",
      "The project is built with Next.js (React + TypeScript) and Tailwind CSS, with Supabase handling authentication, database, storage, and security policies. Public pages dynamically consume structured content (hero images, carousel media, testimonials, and marketing banners) from Supabase, allowing non-developer admins to keep the site current without code changes. The architecture separates presentation from data access through reusable service modules (for media, testimonials, marketing, CRM, and users), making the codebase maintainable and easy to extend.",
      "A key part of the implementation is robust data and API handling. The contact workflow uses a dedicated API route that validates payloads, sanitizes input, handles duplicate submissions, and gracefully supports schema evolution with fallbacks. Leads are persisted into a CRM table and surfaced in the admin dashboard with lifecycle status tracking, enabling a simple but effective sales pipeline. The admin experience includes media upload/reorder/toggle/delete flows, while access control is enforced at multiple layers: middleware guards, server-side role checks, and Supabase RLS/storage policies.",
      "From a frontend engineering perspective, this app demonstrates practical production skills: component modularization, dynamic rendering from JSON-driven data, async server data fetching with resilient error handling, responsive design polish, and secure integration between UI and backend services. It reflects a modern workflow where rapid prototyping can be accelerated with AI tooling, then refined into clean, reliable, and production-quality React architecture.",
    ],
    images: ["/projects/muramara events.png", "/projects/muramara events admin dash.png"],
    thumbnail: "/projects/muramara events.png",
    liveSiteUrl: "https://www.muramaraevents.co.ke",
    liveSiteLabel: "www.muramaraevents.co.ke",
    outcome: "Launched end-to-end digital operations for Muramara Events",
    problem:
      "Murarama Events needed a modern online presence and a centralized internal workflow to manage media, leads, and marketing updates without technical bottlenecks.",
    approach:
      "Built a dual-surface architecture: a conversion-focused public website and a secure admin portal backed by Supabase services, reusable data modules, and role-based controls.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    tags: ["Events", "CRM", "Admin Dashboard", "Full Stack"],
    results: [
      "Created a single platform for public brand experience and internal operations",
      "Enabled non-developer content management for media, testimonials, and banners",
      "Established a structured lead pipeline with status tracking for faster follow-up",
    ],
    nextImprovements: [
      "Add customer-facing event package calculator and quote automation",
      "Introduce analytics dashboards for campaign and inquiry conversion performance",
    ],
  },
  {
    slug: "hotcorebeatz-production",
    name: "Hotcorebeatz Production",
    summary:
      "Hotcorebeatz is a music-tech platform built to help independent artists create, release, and monetize music through a Next.js marketing site and a React + Supabase product app.",
    fullDescription: [
      "Hotcorebeatz is a full digital ecosystem for modern artists and creators, combining a high-performance web presence with a product application that supports real music business workflows from beat discovery to studio booking.",
      "The platform includes a Next.js + TypeScript + Tailwind CSS marketing website focused on SEO, conversion, and brand storytelling, and a React application connected to Supabase for backend-powered product features and user interactions.",
      "Core business flows include beat selling, studio session bookings, and service operations across recording, mixing, mastering, and distribution support. Artists can discover and purchase beats, request or book sessions, and access production services through a clean, mobile-friendly UX.",
      "From an engineering perspective, the system was designed for artist growth and business scalability, with structured SEO content, metadata-driven discovery, and Supabase-powered workflows for data, API integration, and real-time-ready backend architecture.",
    ],
    images: ["/projects/hotcorebeatz productions.png"],
    thumbnail: "/projects/hotcorebeatz productions.png",
    liveSiteUrl: "https://www.hotcorebeatz.com",
    liveSiteLabel: "www.hotcorebeatz.com",
    outcome: "Delivered a scalable music-tech platform that supports artist workflows and monetization",
    problem:
      "Independent artists needed one platform to discover beats, access production services, and manage studio bookings without fragmented tools.",
    approach:
      "Built a dual-app architecture: a conversion-optimized Next.js marketing website and a React product app connected to Supabase for backend-driven business workflows.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "ESLint",
      "PostCSS",
      "npm",
    ],
    tags: ["Music Tech", "Supabase", "React", "Next.js", "Artist Platform"],
    results: [
      "Created an end-to-end platform for beat catalog discovery, purchases, and music production service flows",
      "Enabled studio booking and artist interaction workflows with backend-powered data architecture",
      "Improved discoverability and conversion through structured SEO content and performance-focused UX",
    ],
    nextImprovements: [
      "Add artist analytics dashboards for bookings, sales, and service conversion tracking",
      "Introduce integrated payment and subscription tiers for expanded monetization options",
    ],
  },
  {
    slug: "impulz-digital-marketing-agency",
    name: "Impulz Digital Marketing Agency",
    summary:
      "Designed and launched a conversion-focused agency website with modern UX, service storytelling, and scalable content architecture built on Next.js.",
    fullDescription: [
      "Impulz Digital Marketing Agency is a modern, high-converting web platform created to showcase strategy, creative, and performance marketing services in a clear and premium way. The project was shaped around one goal: turn visitors into qualified leads through better messaging flow, stronger service positioning, and frictionless contact journeys.",
      "Built with Next.js and TypeScript, the site uses component-driven architecture, fast static rendering, and responsive design patterns to ensure smooth performance across desktop and mobile. The visual system was intentionally structured for campaign agility—new service blocks, landing sections, and case snippets can be published quickly without redesigning the whole experience.",
      "From an engineering and growth standpoint, the build includes SEO-aware page structure, clear CTA hierarchy, trust-driven service presentation, and reusable UI modules for rapid iteration. The final result is a brand-forward agency website that balances visual polish with practical lead-generation outcomes.",
    ],
    images: ["/projects/impulz digital marketing.png"],
    thumbnail: "/projects/impulz digital marketing.png",
    liveSiteUrl: "https://www.impulz.digital",
    liveSiteLabel: "www.impulz.digital",
    outcome: "Established a polished digital presence with stronger lead capture",
    problem:
      "The agency needed a clearer online positioning and a faster, more credible website experience to support paid campaigns and inbound discovery.",
    approach:
      "Crafted a Next.js marketing architecture with conversion-focused sections, reusable components, performance optimization, and scalable page structure for future campaigns.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Digital Marketing", "Next.js", "Brand Website", "Lead Generation"],
    results: [
      "Improved clarity of services and value proposition for prospective clients",
      "Created a fast-loading and mobile-optimized browsing experience",
      "Enabled quicker launch of new campaign pages through reusable components",
    ],
    nextImprovements: [
      "Add deep analytics dashboards for campaign source attribution",
      "Introduce A/B-tested hero and CTA variants for higher conversion rates",
    ],
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

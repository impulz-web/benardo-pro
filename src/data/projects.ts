import type { Project } from "@/types/project";

export const projects: Project[] = [
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
    slug: "bazuu-shop",
    name: "Bazuu Shop",
    summary:
      "A modern multi-store e-commerce platform built with React and Next.js that empowers independent retailers with unified storefront management and seamless customer experiences.",
    fullDescription: [
      "Bazuu Shop is a sophisticated e-commerce solution designed to revolutionize how independent retailers manage their online presence. The platform provides a unified dashboard where multiple store owners can manage their inventories, process orders, and track sales performance through a single, intuitive interface.",
      "Built with React and Next.js, the platform features dynamic storefront generation, allowing each retailer to have a customized online shop while benefiting from shared infrastructure and reduced operational costs. The system supports complex product catalogs with variants, real-time inventory tracking, and integrated payment processing.",
      "From a customer perspective, Bazuu Shop delivers a seamless shopping experience with fast page loads, intuitive navigation, and personalized recommendations. The platform includes advanced search functionality, wishlist management, and a streamlined checkout flow that minimizes cart abandonment.",
      "The technical architecture leverages modern React patterns with server-side rendering for optimal SEO performance, responsive design for mobile commerce, and robust state management for complex shopping cart operations. The platform is designed to scale from single-store operations to enterprise-level multi-tenant deployments.",
    ],
    images: ["/projects/bazuu-shop.png"],
    thumbnail: "/projects/bazuu-shop.png",
    liveSiteUrl: "https://bazuu-shop.netlify.app/#/",
    liveSiteLabel: "bazuu-shop.netlify.app",
    outcome: "Created a scalable e-commerce ecosystem for independent retailers",
    problem:
      "Independent retailers struggled with high costs of individual e-commerce solutions and lacked unified management tools for multi-store operations",
    approach:
      "Built a multi-tenant platform with shared infrastructure, customizable storefronts, and centralized admin dashboard for efficient retail management",
    techStack: [
      "React",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "Zod validation",
      "React Hook Form",
      "Lucide React icons",
      "Framer Motion",
      "Stripe integration",
    ],
    tags: ["E-commerce", "Multi-store", "React", "Next.js", "Supabase", "Retail Tech"],
    results: [
      "Enabled independent retailers to launch online stores with minimal setup and ongoing costs",
      "Provided unified dashboard for managing multiple storefronts from a single interface",
      "Implemented real-time inventory tracking and automated order processing workflows",
      "Created seamless customer experience with fast loading times and intuitive navigation",
      "Integrated secure payment processing with multiple payment method support",
    ],
    nextImprovements: [
      "Add AI-powered product recommendations and personalized shopping experiences",
      "Implement advanced analytics dashboard for sales forecasting and customer insights",
      "Develop mobile app for on-the-go store management and customer engagement",
      "Integrate with major shipping carriers for automated fulfillment and tracking",
      "Create marketplace functionality for cross-store product discovery and sales",
    ],
  },
  {
    slug: "talanta-fame-kenya-movement",
    name: "Talanta Fame Kenya Movement",
    summary:
      "A nationwide talent discovery and empowerment platform built with Next.js that connects and nurtures Kenyan creative talent across all 47 counties.",
    fullDescription: [
      "Talanta Fame Kenya Movement is a comprehensive digital platform designed to address the challenge of fragmented talent development in Kenya. The platform provides a centralized solution for talent discovery, registration, and management across all 47 counties, creating opportunities for thousands of Kenyan artists and entrepreneurs.",
      "Built with modern web technologies including Next.js 15.5.12, React 19.2.1, and TypeScript, the platform features a responsive design optimized for Kenyan mobile users. The system includes structured membership management with KES 1,000 registration fees, comprehensive talent submission portals, and real-time admin dashboards for data management.",
      "The platform supports multiple creative disciplines including music, dance, sports, business, and creative arts. It features secure payment integration (M-Pesa STK Push simulation), portfolio management systems, and county-based chapter organization for grassroots support and mentorship.",
      "From a technical architecture perspective, the platform demonstrates modern full-stack development practices with React Hook Form for validation, Zod for schema validation, Lucide React for UI consistency, and Motion for engaging animations. The system is designed to scale and support the growing needs of Kenya's creative economy.",
    ],
    images: ["/projects/Talanta fame.png"],
    thumbnail: "/projects/Talanta fame.png",
    liveSiteUrl: "https://talantafame.netlify.app/",
    liveSiteLabel: "talantafame.netlify.app",
    outcome: "Democratized access to talent development opportunities nationwide",
    problem:
      "Talanta Fame addresses the challenge of fragmented talent development in Kenya by providing a centralized platform for talent discovery across all 47 counties",
    approach:
      "Built a nationwide platform with structured membership system, talent submission portal, admin dashboard, and partner inquiry system for corporate sponsorships",
    techStack: [
      "Next.js 15.5.12",
      "React 19.2.1",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod validation",
      "Lucide React icons",
      "Motion animations",
      "ESLint",
      "PostCSS",
      "Node.js 20+",
    ],
    tags: ["Talent Platform", "Kenya", "Next.js", "Full Stack", "Admin Dashboard"],
    results: [
      "Created a centralized platform for talent discovery across all 47 Kenyan counties",
      "Implemented structured membership system with KES 1,000 registration fee",
      "Built talent submission forms with file uploads and portfolio management",
      "Developed admin dashboard with real-time statistics and data management",
      "Established partner inquiry system for corporate sponsorships and support",
    ],
    nextImprovements: [
      "Add advanced analytics dashboard for talent performance tracking",
      "Implement mentorship matching system between established and emerging artists",
      "Create mobile app for better accessibility in rural areas",
      "Integrate with additional payment providers beyond M-Pesa",
      "Develop talent marketplace for gig opportunities and collaborations",
    ],
  },
  {
    slug: "wakili-ndumia-foundation",
    name: "Wakili Ndumia Foundation",
    summary:
      "UI/UX case study for a non-profit foundation website focused on community development and social impact",
    fullDescription: [
      "The Wakili Ndumia Foundation website was designed as a comprehensive digital platform to showcase the foundation's mission of empowering marginalized communities through education, youth leadership, and economic development. The project focused on creating an intuitive user experience that effectively communicates the foundation's impact and encourages community engagement.",
      "Using modern UI/UX design principles, the website features a clean, accessible interface that guides visitors through the foundation's story, programs, and achievements. The design emphasizes visual storytelling with impact statistics (50,000+ lives, 120+ projects, 5,000+ volunteers) and clear calls-to-action for supporters and volunteers.",
      "The user experience was carefully crafted to ensure easy navigation between different sections: About the foundation, Programs and initiatives, Gallery showcasing their work, and Contact information. The responsive design ensures optimal viewing across all devices, making the foundation's work accessible to a wider audience.",
      "Key design decisions included using a warm, approachable color palette that reflects the foundation's community-focused mission, clear typography for readability, and strategic use of white space to create a professional yet welcoming atmosphere. The layout prioritizes content hierarchy to guide users through the foundation's story effectively.",
    ],
    images: ["/projects/wakili-ndumia-foundation.png"],
    thumbnail: "/projects/wakili-ndumia-foundation.png",
    liveSiteUrl: "https://wakilindumia.netlify.app/",
    liveSiteLabel: "wakilindumia.netlify.app",
    outcome: "Created a professional digital presence that effectively communicates the foundation's social impact",
    problem:
      "The foundation needed a modern, accessible website to showcase their community work and engage supporters effectively",
    approach:
      "Designed a user-centered website using UI/UX principles with focus on visual storytelling, accessibility, and clear information architecture",
    techStack: [
      "Figma",
      "Adobe XD",
      "UI/UX Design Principles",
      "Responsive Design",
      "Accessibility Standards",
      "Visual Design",
      "Information Architecture",
    ],
    tags: ["UI/UX", "Non-profit", "Community Development", "Visual Design"],
    results: [
      "Created an intuitive user experience that effectively communicates the foundation's mission and impact",
      "Improved accessibility and mobile responsiveness for wider community reach",
      "Professional visual identity that builds trust and encourages engagement",
      "Clear information architecture for complex social impact content",
    ],
    nextImprovements: [
      "Add donation integration for supporter contributions",
      "Implement volunteer management system",
      "Create impact tracking dashboard for real-time updates",
      "Add multilingual support for broader community access",
    ],
  },
  {
    slug: "eneza-it-solutions",
    name: "Eneza IT Solutions",
    summary:
      "Professional WordPress development using Elementor to create custom, responsive websites for diverse client needs",
    fullDescription: [
      "At Eneza IT Solutions, I specialized in designing and developing custom WordPress websites using Elementor page builder, delivering tailored digital solutions for a variety of clients across different industries.",
      "The work involved translating client requirements into visually appealing, functional websites with responsive designs that work seamlessly across all devices. Each project focused on creating intuitive user experiences, optimizing for performance, and ensuring easy content management for clients through WordPress's user-friendly CMS.",
      "Using Elementor's drag-and-drop interface combined with custom CSS and WordPress best practices, I built websites that balanced aesthetic appeal with technical excellence. The development process included theme customization, plugin integration, SEO optimization, and performance tuning to ensure fast loading times and smooth user interactions.",
      "Key deliverables included business websites, portfolio sites, and e-commerce solutions, all built with attention to detail, clean code practices, and a focus on client satisfaction and end-user experience.",
    ],
    images: ["/projects/ENEZA IT.png"],
    thumbnail: "/projects/ENEZA IT.png",
    liveSiteUrl: "https://enezait.com/",
    liveSiteLabel: "enezait.com",
    outcome: "Delivered multiple professional WordPress websites using Elementor for diverse client portfolios",
    problem:
      "Clients needed professional, responsive websites that were easy to manage and maintain without requiring technical expertise",
    approach:
      "Leveraged WordPress and Elementor to rapidly develop custom, responsive websites with intuitive content management capabilities and modern design patterns",
    techStack: [
      "WordPress",
      "Elementor Pro",
      "PHP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "WooCommerce",
      "SEO Optimization",
      "Responsive Design",
    ],
    tags: ["WordPress", "Elementor", "Web Development", "CMS", "Responsive Design"],
    results: [
      "Developed multiple custom WordPress websites for clients across various industries",
      "Implemented responsive designs ensuring optimal viewing experience on all devices",
      "Created easy-to-manage content systems allowing clients to update their sites independently",
      "Optimized websites for search engines and performance, improving visibility and user engagement",
    ],
    nextImprovements: [
      "Integrate advanced analytics and conversion tracking for better client insights",
      "Implement headless WordPress architecture for improved performance and scalability",
    ],
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

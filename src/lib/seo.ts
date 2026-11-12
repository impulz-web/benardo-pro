/**
 * JSON-LD schema builders (schema.org).
 *
 * These run on the server only and describe the practice to search engines:
 * who Benard M is, the services offered, the towns served across Kenya, and
 * the questions prospective clients ask. Nothing here is rendered as UI.
 */

import type { LiveProject } from "@/data/live-projects";
import type { Project } from "@/types/project";
import {
  CONTACT,
  KENYAN_TOWNS,
  LOCATION,
  SERVICES,
  SOCIAL_PROFILES,
  siteConfig,
} from "@/lib/site";

export const SITE_URL = siteConfig.url;

const PERSON_ID = `${SITE_URL}/#person`;
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const HERO_IMAGE = `${SITE_URL}/benardo-hero%20image.png`;

const AREA_SERVED = [
  { "@type": "Country", name: LOCATION.countryName },
  ...KENYAN_TOWNS.map((town) => ({
    "@type": "City",
    name: town,
    address: {
      "@type": "PostalAddress",
      addressCountry: LOCATION.country,
    },
  })),
];

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: LOCATION.city,
  addressRegion: LOCATION.region,
  postalCode: LOCATION.postalCode,
  addressCountry: LOCATION.country,
};

const KNOWS_ABOUT = [
  "Music business consulting",
  "Artist development and career strategy",
  "Music distribution and streaming",
  "Royalties, licensing and music monetization",
  "Full-stack web development",
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "E-commerce and M-Pesa payment integration",
  "SEO and website performance",
];

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: CONTACT.fullName,
    alternateName: CONTACT.displayName,
    url: SITE_URL,
    image: HERO_IMAGE,
    jobTitle: [
      "Music Business Consultant",
      "Full-Stack Web Developer",
    ],
    description: siteConfig.description,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    address: POSTAL_ADDRESS,
    knowsAbout: KNOWS_ABOUT,
    sameAs: [...SOCIAL_PROFILES],
    worksFor: { "@id": BUSINESS_ID },
    founder: { "@id": BUSINESS_ID },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: `${CONTACT.displayName} — Music Business Consultant & Full-Stack Developer`,
    alternateName: "Benard M Consulting",
    url: SITE_URL,
    image: HERO_IMAGE,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phone,
    priceRange: "$$",
    address: POSTAL_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCATION.latitude,
      longitude: LOCATION.longitude,
    },
    areaServed: AREA_SERVED,
    serviceArea: AREA_SERVED,
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs: [...SOCIAL_PROFILES],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    knowsAbout: KNOWS_ABOUT,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting & Development Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en-KE",
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}

export function buildServiceSchemas() {
  return SERVICES.map((service) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/#service-${service.id}`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    url: `${SITE_URL}/#${service.id}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.offerings.map((offering) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offering,
        },
      })),
    },
  }));
}

export function buildFaqSchema() {
  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: "Who is Benard M?",
      answer:
        "Benard M (Benard Mulindi) is a music business consultant and full-stack developer based in Nakuru, Kenya. He helps small and medium-sized businesses across Kenya build reliable digital systems and helps upcoming artists turn music into a sustainable career.",
    },
    {
      question: "What services does Benard M offer?",
      answer:
        "Two core services: music business consulting for upcoming artists (career strategy, distribution, branding, royalties and monetization) and full-stack web development for small and medium-sized businesses (websites, e-commerce with M-Pesa, booking and CRM systems, SEO and custom web applications).",
    },
    {
      question: "Does Benard M work with upcoming artists in Kenya?",
      answer:
        "Yes. Benard M works with upcoming and independent artists across Kenya on release planning, distribution, branding, beat selling, royalties and studio business setup so they can grow from a hobby into a real music business.",
    },
    {
      question: "Do you build websites for small and medium-sized businesses in Kenya?",
      answer:
        "Yes. Benard M builds fast, SEO-ready websites, online stores with M-Pesa payments, booking and CRM systems, and custom web applications for small and medium-sized businesses throughout Kenya.",
    },
    {
      question: "Which towns in Kenya do you serve?",
      answer:
        "Benard M serves clients in all towns in Kenya, including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, Nyeri, Machakos, Meru, Kakamega, Kitale, Garissa, Malindi, Naivasha and more. All services are available remotely countrywide.",
    },
    {
      question: "How do I get started?",
      answer:
        "Reach out by WhatsApp on +254 717 389 815 or by email at benardo@hotcorebeatz.com. Share what you need, and you will get a clear, honest plan and next steps.",
    },
  ];

  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1]?.path ?? "/"}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildProjectSchema(project: Project) {
  return {
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${project.slug}#project`,
    name: project.name,
    description: project.summary,
    url: `${SITE_URL}/projects/${project.slug}`,
    keywords: project.tags.join(", "),
    creator: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    about: project.outcome,
  };
}

export function buildLiveProjectsSchema(projects: readonly LiveProject[]) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#live-projects`,
    name: "Live Projects",
    description:
      "Products and platforms built by Benard M that are live and in use today.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        ...(project.url ? { url: project.url } : {}),
        ...(project.image ? { image: `${SITE_URL}${project.image}` } : {}),
        creator: { "@id": PERSON_ID },
      },
    })),
  };
}

/** Full site-level graph injected once in the root layout. */
export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildProfessionalServiceSchema(),
      buildWebSiteSchema(),
      ...buildServiceSchemas(),
      buildFaqSchema(),
    ],
  };
}

/** Per-page graphs (breadcrumbs and page-specific entities). */
export function buildPageGraph(
  items: ReadonlyArray<Record<string, unknown>>,
) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  };
}

/**
 * Single source of truth for site-wide configuration and SEO data.
 * All metadata, sitemap entries, robots rules and JSON-LD schemas derive from here.
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://benard.hws.co.ke";

export const CONTACT = {
  fullName: "Benard Mulindi",
  displayName: "Benard M",
  email: "benardo@hotcorebeatz.com",
  phone: "+254717389815",
  whatsappUrl: "https://wa.me/254717389815",
} as const;

export const LOCATION = {
  city: "Nakuru",
  region: "Rift Valley",
  postalCode: "20100",
  country: "KE",
  countryName: "Kenya",
  latitude: -0.3031,
  longitude: 36.08,
} as const;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/in/benard-mulindi-093390339/",
  "https://wa.me/254717389815",
  "https://hws.co.ke",
  "https://www.hotcorebeatz.com",
] as const;

/**
 * Towns and cities served across Kenya. Used for local-SEO `areaServed`
 * coverage so searches in any town can surface this practice.
 */
export const KENYAN_TOWNS = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Kericho",
  "Nyeri",
  "Machakos",
  "Meru",
  "Kakamega",
  "Kitale",
  "Bungoma",
  "Garissa",
  "Malindi",
  "Kilifi",
  "Naivasha",
  "Nanyuki",
  "Embu",
  "Kitui",
  "Isiolo",
  "Lodwar",
  "Voi",
  "Mumias",
  "Busia",
  "Homa Bay",
  "Kisii",
  "Migori",
  "Bomet",
  "Narok",
  "Kajiado",
  "Nyahururu",
  "Chuka",
  "Wote",
  "Marsabit",
  "Kapenguria",
  "Kabarnet",
  "Iten",
  "Ol Kalou",
  "Murang'a",
  "Karatina",
  "Ruiru",
  "Juja",
  "Athi River",
  "Limuru",
  "Kiambu",
  "Ongata Rongai",
  "Ngong",
  "Kiserian",
  "Kikuyu",
  "Wangige",
  "Githurai",
  "Nyamira",
  "Siaya",
  "Bondo",
  "Vihiga",
  "Webuye",
  "Oyugis",
  "Kehancha",
  "Taveta",
  "Ukunda",
  "Lamu",
  "Wajir",
  "Mandera",
  "Moyale",
  "Maralal",
  "Rumuruti",
  "Molo",
  "Njoro",
  "Gilgil",
  "Eldama Ravine",
  "Kapsabet",
  "Kapsowar",
  "Muhoroni",
  "Ahero",
  "Rongo",
  "Awendo",
  "Ogembo",
  "Keroka",
  "Suneka",
  "Mwingi",
  "Makueni",
  "Kilgoris",
  "Hola",
  "Mpeketoni",
] as const;

export type ServiceOffering = {
  id: string;
  name: string;
  serviceType: string;
  audience: string;
  description: string;
  offerings: readonly string[];
};

/** Core service lines that define the practice positioning. */
export const SERVICES: readonly ServiceOffering[] = [
  {
    id: "music-business-consulting",
    name: "Music Business Consulting for Upcoming Artists",
    serviceType: "Music Business Consulting",
    audience: "Upcoming artists, independent musicians and music entrepreneurs in Kenya",
    description:
      "Business and career consulting that helps upcoming artists in Kenya turn music into a sustainable career — from release strategy and distribution to branding, royalties, licensing and studio business setup.",
    offerings: [
      "Artist career strategy and release planning",
      "Music distribution and streaming platform setup",
      "Artist branding, positioning and audience growth",
      "Royalty, licensing and monetization guidance",
      "Beat selling, studio bookings and label operations setup",
    ],
  },
  {
    id: "full-stack-web-development",
    name: "Full-Stack Web Development for Small & Medium Businesses",
    serviceType: "Full-Stack Web Development",
    audience: "Small and medium-sized businesses across all towns in Kenya",
    description:
      "Full-stack web development for small and medium-sized businesses in Kenya — fast, SEO-ready websites, e-commerce with M-Pesa payments, booking and CRM systems, and custom web applications built with Next.js, React and Supabase.",
    offerings: [
      "Business websites, landing pages and web design",
      "E-commerce stores with M-Pesa payment integration",
      "Booking, CRM and workflow automation systems",
      "SEO, hosting, domains and performance optimisation",
      "Custom web applications with Next.js, React and Supabase",
    ],
  },
] as const;

export const siteConfig = {
  name: CONTACT.displayName,
  fullName: CONTACT.fullName,
  title:
    "Benard M | Music Business Consultant & Full-Stack Developer in Kenya",
  shortTitle: "Music Business Consultant & Full-Stack Developer",
  description:
    "Benard M is a trusted music business consultant and full-stack developer helping small and medium-sized businesses across all towns in Kenya, plus upcoming artists, build reliable digital systems.",
  tagline:
    "Music business consultant & full-stack developer for small and medium businesses and upcoming artists across Kenya.",
  url: siteUrl,
  email: CONTACT.email,
  phone: CONTACT.phone,
  whatsappUrl: CONTACT.whatsappUrl,
  keywords: [
    "Benard M",
    "Benard Mulindi",
    "music business consultant Kenya",
    "music consultant for upcoming artists",
    "artist development Kenya",
    "music distribution Kenya",
    "beat selling Kenya",
    "artist branding Kenya",
    "full stack developer Kenya",
    "web developer for small business Kenya",
    "web development for SMEs Kenya",
    "website designer Kenya",
    "Next.js developer Kenya",
    "React developer Kenya",
    "e-commerce website Kenya",
    "M-Pesa integration",
    "business website Nairobi",
    "web developer Nakuru",
    "web developer Mombasa",
    "web developer Kisumu",
    "web developer Eldoret",
    "website design Thika",
    "digital marketing Kenya",
    "media production Kenya",
    "freelance developer Kenya",
    "custom web development Kenya",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "https://hws.co.ke/", label: "Projects" },
    { href: "https://www.hotcorebeatz.com/consultant/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
    { href: "https://wa.me/254717389815", label: "WhatsApp 0717389815" },
  ],
} as const;

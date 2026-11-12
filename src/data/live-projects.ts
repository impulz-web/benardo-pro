export type LiveProject = {
  id: string;
  name: string;
  category: string;
  description: string;
  url?: string;
  urlLabel?: string;
  image?: string;
};

/** Live products and platforms currently shipped and in use. */
export const liveProjects: LiveProject[] = [
  {
    id: "hotcorebeatz",
    name: "Hotcorebeatz",
    category: "Music Commerce Platform",
    description:
      "Beat selling platform where producers list and sell beats while artists discover, license and buy instrumentals.",
    url: "https://hotcorebeatz.com/",
    urlLabel: "hotcorebeatz.com",
    image: "/projects/hotcorebeatz.jpg",
  },
  {
    id: "hws",
    name: "HWS",
    category: "Digital Marketing Agency",
    description:
      "Digital marketing agency delivering brand strategy, campaigns and growth-focused web experiences for businesses.",
    url: "https://www.hws.co.ke/",
    urlLabel: "hws.co.ke",
    image: "/projects/hws.jpg",
  },
  {
    id: "bizzflow",
    name: "BizzFlow",
    category: "Inventory Management System",
    description:
      "Inventory management system helping businesses track stock, sales and analytics in real time.",
    url: "https://bizzflow.hws.co.ke",
    urlLabel: "bizzflow.hws.co.ke",
    image: "/projects/bizzflow.jpg",
  },
  {
    id: "alicia-mitumba",
    name: "Alicia Mitumba",
    category: "Clothing & Retail",
    description:
      "Clothing company selling mitumba, with a curated online catalogue and customer ordering flow.",
    url: "https://www.aliciamitumba.co.ke/",
    urlLabel: "aliciamitumba.co.ke",
    image: "/projects/alicia-mitumba.jpg",
  },
  {
    id: "muramara-events",
    name: "Muramara Events",
    category: "Events Company",
    description:
      "Events organising company planning and delivering corporate and private events end to end.",
    url: "https://www.muramaraevents.co.ke/",
    urlLabel: "muramaraevents.co.ke",
    image: "/projects/muramara-events.jpg",
  },
];

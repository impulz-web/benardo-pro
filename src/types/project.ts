export type Project = {
  slug: string;
  name: string;
  summary: string;
  fullDescription?: string[];
  images?: string[];
  thumbnail?: string;
  liveSiteUrl?: string;
  liveSiteLabel?: string;
  outcome: string;
  problem: string;
  approach: string;
  techStack: string[];
  tags: string[];
  results: string[];
  nextImprovements: string[];
};

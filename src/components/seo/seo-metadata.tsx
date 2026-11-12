import { JsonLd } from "@/components/seo/json-ld";
import { buildSiteGraph } from "@/lib/seo";

/**
 * Site-wide structured data. Describes Benard M as a music business
 * consultant and full-stack developer serving small and medium businesses
 * and upcoming artists across all towns in Kenya.
 */
export function SEOMetadata() {
  return <JsonLd id="site-structured-data" data={buildSiteGraph()} />;
}

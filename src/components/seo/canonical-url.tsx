import { headers } from "next/headers";

export async function CanonicalURL({ path }: { path: string }) {
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
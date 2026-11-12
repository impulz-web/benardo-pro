type JsonLdProps = {
  id: string;
  data: unknown;
};

/**
 * Renders a JSON-LD script tag for search engines.
 * `<` is escaped to keep the payload safe inside an HTML script element.
 */
export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

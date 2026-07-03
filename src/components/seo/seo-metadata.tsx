export function SEOMetadata() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://benardo.hotcorebeatz.com",
            "name": "Benard Mulindi",
            "image": "https://benardo.hotcorebeatz.com/benardo-hero-image.png",
            "url": "https://benardo.hotcorebeatz.com",
            "telephone": "+254717389815",
            "email": "benardo@hotcorebeatz.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nakuru",
              "addressLocality": "Nakuru",
              "addressRegion": "Rift Valley",
              "postalCode": "20100",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -0.3031,
              "longitude": 36.0800
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "serviceArea": {
              "@type": "AdministrativeArea",
              "name": "Kenya"
            },
            "areaServed": [
              "Kenya",
              "Nakuru",
              "Nairobi",
              "Mombasa",
              "Kisumu",
              "Eldoret",
              "Thika",
              "Africa"
            ],
            "priceRange": "$$",
            "sameAs": [
              "https://wa.me/254717389815"
            ],
            "description": "Professional web development and media production services in Nakuru, Kenya. Expert full-stack development with Next.js, TypeScript, and AI workflows.",
            "keywords": "web development Nakuru, website developer Kenya, full-stack developer Africa, media production Kenya, e-commerce website Kenya, Next.js developer Nakuru, TypeScript developer Kenya",
            "founder": {
              "@type": "Person",
              "name": "Benard Mulindi"
            }
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Benard Mulindi",
            "description": "Professional web development and media production services in Nakuru, Kenya",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nakuru",
              "addressLocality": "Nakuru",
              "addressRegion": "Rift Valley",
              "postalCode": "20100",
              "addressCountry": "KE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -0.3031,
              "longitude": 36.0800
            },
            "telephone": "+254717389815",
            "email": "benardo@hotcorebeatz.com",
            "url": "https://benardo.hotcorebeatz.com",
            "priceRange": "$$",
            "openingHours": [
              "Mo-Fr 09:00-17:00"
            ],
            "serviceArea": ["Kenya", "Nakuru", "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Thika", "Africa"],
            "image": "https://benardo.hotcorebeatz.com/benardo-hero-image.png",
            "sameAs": [
              "https://wa.me/254717389815"
            ]
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://benardo.hotcorebeatz.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://hws.hotcorebeatz.com"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://benardo.hotcorebeatz.com/contact"
              }
            ]
          })
        }}
      />
    </>
  );
}
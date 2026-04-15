import Script from "next/script";

export function SEOMetadata() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="structured-data" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://benardo.hotcorebeatz.com",
            "name": "Benardo Pro",
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
            "description": "Professional web development and music business strategy services in Nakuru, Kenya. Expert full-stack development with Next.js, TypeScript, and AI workflows.",
            "keywords": "web development Nakuru, website developer Kenya, full-stack developer Africa, music business strategy Kenya, e-commerce website Kenya, Next.js developer Nakuru, TypeScript developer Kenya",
            "founder": {
              "@type": "Person",
              "name": "Benardo"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consultation",
                    "description": "1-on-1 expert guidance for music business & digital strategy"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "1000",
                    "priceCurrency": "KES",
                    "unitText": "hour"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Website Package",
                    "description": "Professional online presence for individuals and startups"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "15000",
                    "priceCurrency": "KES",
                    "unitText": "one-time"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website",
                    "description": "Powerful, scalable online presence for growing businesses"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "30000",
                    "priceCurrency": "KES",
                    "unitText": "one-time"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website",
                    "description": "Full online store with payment gateway integration"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "50000",
                    "priceCurrency": "KES",
                    "unitText": "one-time"
                  }
                }
              ]
            }
          }
        `}
      </Script>

      {/* Local Business Schema */}
      <Script id="local-business-schema" strategy="afterInteractive">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Benardo Pro",
            "description": "Professional web development and music business strategy services in Nakuru, Kenya",
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
          }
        `}
      </Script>

      {/* Breadcrumb Schema */}
      <Script id="breadcrumb-schema" strategy="afterInteractive">
        {`
          {
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
                "item": "https://benardo.hotcorebeatz.com/projects"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Contact",
                "item": "https://benardo.hotcorebeatz.com/contact"
              }
            ]
          }
        `}
      </Script>
    </>
  );
}
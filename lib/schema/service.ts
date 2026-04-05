interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  price?: string;
}

export function serviceSchema({ name, description, url, price }: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "CISEC Ciberseguridad",
      url: "https://cisec.es",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    ...(price && {
      offers: { "@type": "Offer", price, priceCurrency: "EUR" },
    }),
  };
}

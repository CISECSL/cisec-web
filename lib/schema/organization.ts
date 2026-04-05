export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CISEC - Consultoría de Inteligencia y Securización",
    url: "https://cisec.es",
    logo: "https://cisec.es/images/logo-cisec.png",
    description: "Pentesting manual por expertos certificados OSCP. Auditoría de seguridad para empresas en España.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Rozas",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
    sameAs: ["https://www.linkedin.com/in/alvaromoralesmoreno/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@cisec.es",
      contactType: "sales",
      availableLanguage: ["Spanish", "English"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CISEC Ciberseguridad",
    image: "https://cisec.es/images/logo-cisec.png",
    url: "https://cisec.es",
    telephone: "",
    email: "info@cisec.es",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Rozas",
      addressRegion: "Madrid",
      postalCode: "28232",
      addressCountry: "ES",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    priceRange: "€€€",
  };
}

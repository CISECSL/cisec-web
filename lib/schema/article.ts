interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}

export function articleSchema({ title, description, url, imageUrl, datePublished, dateModified, authorName }: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    ...(imageUrl && { image: imageUrl }),
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: "CISEC Ciberseguridad",
      url: "https://cisec.es",
      logo: { "@type": "ImageObject", url: "https://cisec.es/images/logo-cisec.png" },
    },
  };
}

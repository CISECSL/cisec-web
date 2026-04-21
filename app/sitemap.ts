import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { postSitemapQuery } from "@/sanity/lib/queries";

const BASE_URL = "https://cisec.es";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/servicios/pentesting-web`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/servicios/pentesting-infraestructura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/servicios/cumplimiento-ens`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/servicios/respuesta-incidentes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sobre-nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts: { slug: string; _updatedAt: string; publishedAt?: string }[] =
      await client.fetch(postSitemapQuery);
    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt || Date.now()),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // Sanity not configured — skip blog posts
  }

  return [...staticPages, ...blogPages];
}

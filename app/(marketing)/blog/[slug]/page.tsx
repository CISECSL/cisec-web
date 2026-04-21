import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { BlogPostContent, extractTOCItems } from "@/components/blog/BlogPost";
import { TOC } from "@/components/blog/TOC";
import { articleSchema } from "@/lib/schema";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs: string[] = await client.fetch(postSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

const DEFAULT_OG_IMAGE = "https://cisec.es/images/logo-cisec.png";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    if (!post) return {};

    const title = post.seo?.metaTitle || post.title;
    const description = post.seo?.metaDescription || post.excerpt || "";
    const canonicalUrl = `https://cisec.es/blog/${post.slug.current}`;
    const ogImageUrl = post.seo?.ogImage
      ? urlFor(post.seo.ogImage).width(1200).height(630).url()
      : post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : DEFAULT_OG_IMAGE;

    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      authors: post.author?.name ? [{ name: post.author.name }] : undefined,
      keywords: post.category?.title ? [post.category.title, "ciberseguridad", "CISEC"] : undefined,
      openGraph: {
        title,
        description,
        type: "article",
        url: canonicalUrl,
        locale: "es_ES",
        siteName: "CISEC Ciberseguridad",
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImageUrl],
      },
      ...(post.seo?.noIndex && { robots: { index: false } }),
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post: any = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch {
    notFound();
  }

  if (!post) notFound();

  const tocItems = post.body ? extractTOCItems(post.body) : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.excerpt || "",
              url: `https://cisec.es/blog/${post.slug.current}`,
              imageUrl: post.mainImage
                ? urlFor(post.mainImage).width(1200).height(630).url()
                : DEFAULT_OG_IMAGE,
              datePublished: post.publishedAt || new Date().toISOString(),
              dateModified: post._updatedAt || post.publishedAt || new Date().toISOString(),
              authorName: post.author?.name || "CISEC",
            })
          ),
        }}
      />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug.current}` },
            ]}
          />

          <header className="mx-auto max-w-3xl">
            {post.category && (
              <span className="text-sm font-medium text-primary">{post.category.title}</span>
            )}
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {post.author && <span>Por {post.author.name}</span>}
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              )}
              {post.readingTime && <span>{post.readingTime} min lectura</span>}
            </div>
          </header>

          {post.mainImage && (
            <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={urlFor(post.mainImage).width(1200).height(630).url()}
                alt={post.mainImage.alt || post.title}
                className="h-auto w-full object-cover"
                width={1200}
                height={630}
              />
            </div>
          )}

          <div className="mx-auto mt-12 grid max-w-7xl gap-12 lg:grid-cols-[1fr_250px]">
            <article className="mx-auto max-w-3xl">
              {post.body && <BlogPostContent body={post.body} />}
            </article>

            {tocItems.length > 0 && (
              <aside className="hidden lg:block">
                <TOC items={tocItems} />
              </aside>
            )}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-bold">¿Necesitas un pentest?</h2>
            <p className="mt-2 text-muted-foreground">
              Nuestro equipo de expertos puede evaluar la seguridad de tu infraestructura.
            </p>
            <Link
              href="/contacto"
              className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicita presupuesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

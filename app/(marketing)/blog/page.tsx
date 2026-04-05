import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, postCountQuery } from "@/sanity/lib/queries";
import { BlogCard } from "@/components/blog/BlogCard";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog Ciberseguridad España",
  description: "Artículos sobre pentesting, vulnerabilidades, normativa NIS2/ENS y ciberseguridad para empresas. Por los expertos de CISEC.",
  alternates: { canonical: "https://cisec.es/blog" },
};

const POSTS_PER_PAGE = 10;

export default async function BlogPage(props: { searchParams: Promise<{ page?: string }> }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  let posts: any[] = [];
  let totalPosts = 0;

  try {
    [posts, totalPosts] = await Promise.all([
      client.fetch(allPostsQuery, { start, end }),
      client.fetch(postCountQuery),
    ]);
  } catch {
    // Sanity not configured yet — show empty state
  }

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
        <h1 className="text-3xl font-bold sm:text-4xl">Blog de Ciberseguridad</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Artículos sobre pentesting, vulnerabilidades y normativa de seguridad para empresas españolas.
        </p>

        {posts.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => <BlogCard key={post._id} post={post} />)}
          </div>
        ) : (
          <p className="mt-12 text-muted-foreground">
            Próximamente publicaremos artículos sobre ciberseguridad. ¡Vuelve pronto!
          </p>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <a
                key={p}
                href={`/blog?page=${p}`}
                className={`rounded-md px-4 py-2 text-sm ${p === page ? "bg-primary text-primary-foreground" : "border border-border hover:bg-card"}`}
              >
                {p}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

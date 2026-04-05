import Link from "next/link";

interface BlogCardProps {
  post: {
    title: string;
    slug: { current: string };
    excerpt?: string;
    publishedAt?: string;
    readingTime?: number;
    category?: { title: string };
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="p-5">
        {post.category && (
          <span className="text-xs font-medium text-primary">{post.category.title}</span>
        )}
        <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
        )}
        <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          )}
          {post.readingTime && <span>{post.readingTime} min lectura</span>}
        </div>
      </div>
    </Link>
  );
}

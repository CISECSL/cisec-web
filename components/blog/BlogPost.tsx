import { PortableText, type PortableTextComponents } from "@portabletext/react";

function toPlainText(block: any): string {
  return block?.children?.map((c: any) => c.text).join("") || "";
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").trim();
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2 id={slugify(toPlainText(value))} className="mt-10 mb-4 text-2xl font-bold scroll-mt-24">{children}</h2>
    ),
    h3: ({ children, value }) => (
      <h3 id={slugify(toPlainText(value))} className="mt-8 mb-3 text-xl font-semibold scroll-mt-24">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-2 border-primary pl-4 text-muted-foreground italic">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-4 list-disc pl-6 space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="mb-4 list-decimal pl-6 space-y-1">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">{children}</a>
    ),
    code: ({ children }) => <code className="rounded bg-card px-1.5 py-0.5 font-mono text-sm">{children}</code>,
  },
};

interface BlogPostProps { body: any[]; }

export function BlogPostContent({ body }: BlogPostProps) {
  return <div className="max-w-none"><PortableText value={body} components={components} /></div>;
}

export function extractTOCItems(body: any[]): { id: string; text: string; level: number }[] {
  return body
    .filter((block) => block.style === "h2" || block.style === "h3")
    .map((block) => ({
      id: slugify(toPlainText(block)),
      text: toPlainText(block),
      level: block.style === "h2" ? 2 : 3,
    }));
}

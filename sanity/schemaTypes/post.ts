import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Extracto", type: "text", rows: 3, description: "Meta description para SEO (150-160 caracteres)", validation: (r) => r.max(160) }),
    defineField({
      name: "body", title: "Contenido", type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] },
      ],
    }),
    defineField({ name: "mainImage", title: "Imagen principal", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({ name: "category", title: "Categoría", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "author", title: "Autor", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "publishedAt", title: "Fecha publicación", type: "datetime" }),
    defineField({ name: "readingTime", title: "Tiempo de lectura (min)", type: "number" }),
    defineField({
      name: "seo", title: "SEO", type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string", title: "Meta Title" }),
        defineField({ name: "metaDescription", type: "text", title: "Meta Description", rows: 2 }),
        defineField({ name: "ogImage", type: "image", title: "OG Image" }),
        defineField({ name: "noIndex", type: "boolean", title: "No Index", initialValue: false }),
      ],
    }),
  ],
  orderings: [{ title: "Fecha", name: "publishedAt", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", media: "mainImage" } },
});

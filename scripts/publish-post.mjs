#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId) {
  console.error("Falta NEXT_PUBLIC_SANITY_PROJECT_ID (usa: npm run blog:publish -- ruta/al/post.md)");
  process.exit(1);
}
if (!token) {
  console.error("Falta SANITY_API_TOKEN con permisos de escritura en .env.local");
  process.exit(1);
}

const file = process.argv[2];
if (!file) {
  console.error("Uso: npm run blog:publish -- content/blog/mi-post.md");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", token, useCdn: false });

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

let keyCounter = 0;
const k = () => `k${++keyCounter}`;

function inlineToSpansAndMarks(tokens, markDefsOut) {
  const spans = [];
  function walk(toks, marks) {
    for (const t of toks) {
      if (t.type === "text" || t.type === "escape") {
        const text = t.text ?? "";
        if (t.tokens && t.tokens.length) {
          walk(t.tokens, marks);
        } else {
          spans.push({ _type: "span", _key: k(), text, marks: [...marks] });
        }
      } else if (t.type === "strong") {
        walk(t.tokens, [...marks, "strong"]);
      } else if (t.type === "em") {
        walk(t.tokens, [...marks, "em"]);
      } else if (t.type === "codespan") {
        spans.push({ _type: "span", _key: k(), text: t.text, marks: [...marks, "code"] });
      } else if (t.type === "link") {
        const key = k();
        markDefsOut.push({ _key: key, _type: "link", href: t.href });
        walk(t.tokens, [...marks, key]);
      } else if (t.type === "br") {
        spans.push({ _type: "span", _key: k(), text: "\n", marks: [...marks] });
      } else if (t.type === "html") {
        spans.push({ _type: "span", _key: k(), text: t.raw ?? "", marks: [...marks] });
      }
    }
  }
  walk(tokens, []);
  return spans;
}

function makeBlock(style, tokens) {
  const markDefs = [];
  const children = inlineToSpansAndMarks(tokens, markDefs);
  return { _type: "block", _key: k(), style, markDefs, children };
}

function makeListItemBlock(listType, level, tokens) {
  const markDefs = [];
  const children = inlineToSpansAndMarks(tokens, markDefs);
  return {
    _type: "block",
    _key: k(),
    style: "normal",
    listItem: listType,
    level,
    markDefs,
    children,
  };
}

function markdownToBlocks(md) {
  const tokens = marked.lexer(md);
  const blocks = [];
  const walk = (toks) => {
    for (const tok of toks) {
      if (tok.type === "heading") {
        const style = `h${Math.min(tok.depth, 6)}`;
        blocks.push(makeBlock(style, tok.tokens));
      } else if (tok.type === "paragraph") {
        blocks.push(makeBlock("normal", tok.tokens));
      } else if (tok.type === "blockquote") {
        // Flatten blockquote paragraphs
        for (const inner of tok.tokens || []) {
          if (inner.type === "paragraph") {
            blocks.push(makeBlock("blockquote", inner.tokens));
          }
        }
      } else if (tok.type === "list") {
        const listType = tok.ordered ? "number" : "bullet";
        for (const item of tok.items) {
          // Each item may contain paragraphs/text tokens
          const inlineTokens = [];
          for (const child of item.tokens || []) {
            if (child.type === "text" || child.type === "paragraph") {
              if (child.tokens) inlineTokens.push(...child.tokens);
            }
          }
          blocks.push(makeListItemBlock(listType, 1, inlineTokens));
        }
      } else if (tok.type === "code") {
        blocks.push({
          _type: "block",
          _key: k(),
          style: "normal",
          markDefs: [],
          children: [{ _type: "span", _key: k(), text: tok.text, marks: ["code"] }],
        });
      } else if (tok.type === "space") {
        // skip
      }
    }
  };
  walk(tokens);
  return blocks;
}

function computeReadingTime(blocks) {
  const words = blocks
    .flatMap((b) => (b.children || []).map((c) => c.text || ""))
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function extractExcerpt(blocks, maxLen = 155) {
  for (const b of blocks) {
    if (b.style === "normal" && !b.listItem) {
      const text = (b.children || []).map((c) => c.text || "").join("").trim();
      if (text.length >= 40) {
        if (text.length <= maxLen) return text;
        return text.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…";
      }
    }
  }
  return "";
}

async function upsertCategory(name) {
  if (!name) return null;
  const slug = slugify(name);
  const id = `category-${slug}`;
  await client.createIfNotExists({
    _id: id,
    _type: "category",
    title: name,
    slug: { _type: "slug", current: slug },
  });
  return { _type: "reference", _ref: id };
}

async function upsertAuthor(name) {
  if (!name) return null;
  const slug = slugify(name);
  const id = `author-${slug}`;
  await client.createIfNotExists({
    _id: id,
    _type: "author",
    name,
    slug: { _type: "slug", current: slug },
  });
  return { _type: "reference", _ref: id };
}

async function main() {
  const abs = path.resolve(file);
  const raw = fs.readFileSync(abs, "utf8");
  const { data: fm, content } = matter(raw);

  if (!fm.title) {
    console.error("El post necesita un campo 'title' en el frontmatter");
    process.exit(1);
  }

  const slug = fm.slug || slugify(fm.title);
  const body = markdownToBlocks(content);
  const readingTime = fm.readingTime ?? computeReadingTime(body);
  const excerpt = fm.excerpt || extractExcerpt(body);
  const publishedAt = fm.publishedAt
    ? new Date(fm.publishedAt).toISOString()
    : new Date().toISOString();

  const [categoryRef, authorRef] = await Promise.all([
    upsertCategory(fm.category),
    upsertAuthor(fm.author),
  ]);

  const doc = {
    _id: `post-${slug}`,
    _type: "post",
    title: fm.title,
    slug: { _type: "slug", current: slug },
    excerpt,
    readingTime,
    publishedAt,
    body,
    ...(categoryRef && { category: categoryRef }),
    ...(authorRef && { author: authorRef }),
    ...(fm.seo && { seo: fm.seo }),
  };

  await client.createOrReplace(doc);
  console.log(`Publicado: ${fm.title}`);
  console.log(`  id:     ${doc._id}`);
  console.log(`  slug:   /blog/${slug}`);
  console.log(`  words:  ${readingTime} min de lectura`);
  console.log(`  url:    https://cisec.es/blog/${slug}`);
}

main().catch((err) => {
  console.error("Error publicando post:", err.message || err);
  process.exit(1);
});

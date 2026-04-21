import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [($start)...($end)] {
    _id, title, slug, excerpt, mainImage, publishedAt, _updatedAt, readingTime,
    "category": category->{ title, slug },
    "author": author->{ name, slug }
  }
`;

export const postCountQuery = groq`count(*[_type == "post"])`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, body, mainImage, publishedAt, _updatedAt, readingTime, seo,
    "category": category->{ title, slug },
    "author": author->{ name, slug, image, bio, role, linkedin }
  }
`;

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;

export const postSitemapQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt,
    publishedAt
  }
`;

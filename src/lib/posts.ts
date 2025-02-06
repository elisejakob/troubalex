import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMetadata = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  draft?: boolean;
  toc?: boolean;
  images?: string[];
  tags?: string[];
  permalink?: string;
};

export type Post = PostMetadata & {
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .map((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      const serializedDate = data.date instanceof Date ? data.date.toISOString() : data.date;

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        description: data.description || null,
        date: serializedDate,
        draft: data.draft || false,
        toc: data.toc || false,
        images: data.images || [],
        tags: data.tags || [],
        permalink: data.permalink || null
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const permalink = data.permalink || `/${slug}`;

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  const serializedDate = data.date instanceof Date ? data.date.toISOString() : data.date;

  return {
    slug,
    title: data.title,
    description: data.description || "",
    date: serializedDate,
    draft: data.draft || false,
    toc: data.toc || false,
    images: data.images || [],
    tags: data.tags || [],
    contentHtml,
    permalink
  };
}

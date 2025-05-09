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
  relatedPosts?: RelatedPost[];
};

export type Post = PostMetadata & {
  contentHtml: string;
};

export type RelatedPost = {
  slug: string;
  title: string;
  description?: string;
  date: string;
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


// detect vimeo/twitter and create embeds
const vimeoRegex = /https:\/\/vimeo.com\/(\d+)/;
const youtubeRegex = /https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/;
const twitterRegex = /https:\/\/twitter.com\/[a-zA-Z0-9_]+\/status\/(\d+)/;

function processEmbeds(content: string) {
  // vimeo
  content = content.replace(vimeoRegex, (match, videoId) => {
    return `<div class="embed embed-vimeo"><iframe src="https://player.vimeo.com/video/${videoId}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>`;
  });
  // youtube
  content = content.replace(youtubeRegex, (match, videoId) => {
    return `<div class="embed embed-youtube"><iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  });
  // twitter
  content = content.replace(twitterRegex, (match, tweetId) => {
    return `<div class="embed embed-twitter"><blockquote class="twitter-tweet"><a href="https://twitter.com/twitter/statuses/${tweetId}"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>`;
  });

  return content;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const permalink = data.permalink || `/${slug}`;

  const processedContent = await remark().use(html, { sanitize: false }).process(content);
  let contentHtml = processedContent.toString();
  contentHtml = processEmbeds(contentHtml);

  const serializedDate = data.date instanceof Date ? data.date.toISOString() : data.date;

  const allPosts = getAllPosts().filter((p) => p.slug !== slug); // exclude self

  let relatedPosts: RelatedPost[] = [];

  if (Array.isArray(data.related)) {
    relatedPosts = data.related.map((relatedSlug) => {
      const relatedPath = path.join(postsDirectory, `${relatedSlug}.md`);
      if (fs.existsSync(relatedPath)) {
        const relatedContent = fs.readFileSync(relatedPath, "utf8");
        const { data: relatedData } = matter(relatedContent);

        return {
          slug: relatedSlug,
          title: relatedData.title,
          date: relatedData.date instanceof Date ? relatedData.date.toISOString() : relatedData.date,
          description: relatedData.description || ""
        };
      }
      return null;
    }).filter(Boolean) as RelatedPost[];
  }

  const remaining = 3 - relatedPosts.length;
  if (remaining > 0) {
    const existingSlugs = new Set(relatedPosts.map((p) => p.slug));
    const randomExtras = allPosts
      .filter((p) => !existingSlugs.has(p.slug))
      .sort(() => 0.5 - Math.random())
      .slice(0, remaining);
    relatedPosts = [...relatedPosts, ...randomExtras];
  }

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
    permalink,
    relatedPosts
  };
}

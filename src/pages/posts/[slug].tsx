import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { PostContent } from "@/components/post/PostContent";

type PostProps = {
  title: string;
  contentHtml: string;
  description?: string;
  date: string;
  tags: string[];
};

export default function PostPage({ title, contentHtml, description, date, tags }: PostProps) {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <main>
      <PostHeader title={title} lead={description} date={date} />
      {tags && tags.length > 0 && (
        <ul>
          {tags.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <PostContent content={contentHtml} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: post
  };
};

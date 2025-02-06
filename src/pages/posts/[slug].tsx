import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

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
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      {description && <p>{description}</p>}
      {tags && tags.length > 0 && (
        <ul>
          {tags.map((tag: string) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
    return { notFound: true }; // Return 404 if post is not found
  }
  return {
    props: post
  };
};

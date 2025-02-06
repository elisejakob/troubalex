import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

type ArchiveProps = {
  posts: { slug: string; title: string }[];
};

export default function Posts({ posts }: ArchiveProps) {
  return (
    <main>
      <h1>All posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  };
};

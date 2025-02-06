import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

type HomeProps = {
  posts: { slug: string; title: string }[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <h1>Home page</h1>
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

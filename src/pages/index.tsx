import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/page/PageHeader";

type HomeProps = {
  posts: { slug: string; title: string }[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <PageHeader title="Hello friend!" lead="I'm Alexandra. I am a woman of many talents but right now I am most useful at BRYTER where I shape product for lawyers. At lunch, I sit with the engineers, and I marvel at the designers but I don't get their jokes. This is my blog, a random collection of thoughts and contradictions." />
      <PostList posts={posts.slice(0, 6)} />
      <Link href="/posts">All posts &rarr;</Link>
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

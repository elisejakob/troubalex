import { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/page/PageHeader";

type ArchiveProps = {
  posts: { slug: string; title: string }[];
};

export default function Posts({ posts }: ArchiveProps) {
  return (
    <main>
      <PageHeader title="All posts" />
      <PostList posts={posts} />
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

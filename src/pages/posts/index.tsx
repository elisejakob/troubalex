import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@/lib/posts";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/page/PageHeader";

export default function Posts({ posts }: { posts: Post[] }) {
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

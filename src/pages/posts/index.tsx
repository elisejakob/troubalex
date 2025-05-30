import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@/lib/posts";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/general/PageHeader";
import { HouseSection } from "@/components/layout/HouseSection";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <main>
      <PageHeader title="Archive" />
      <PostList posts={posts} />
      <HouseSection />
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

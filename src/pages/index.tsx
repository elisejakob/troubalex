import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@/lib/posts";
import Link from "next/link";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/general/PageHeader";
import { HouseSection } from "@/components/layout/HouseSection";
import Icon from "@/components/general/Icon";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main>
      <PageHeader 
        title="In the hush of the hollow, my thoughts shall roam free."
        lead="Welcome, traveler, to The Whispering Hollow! You've wandered through the veil of mist that separates the ordinary from the extraordinary. Here, beneath canopies of pixel-leaves and beside crooked cottages, stories flow like a gentle stream. I tend to this peculiar garden, sharing thoughts on building things that matter as foxfire lanterns light our path. Rest your boots by the hearth and listen closely... the hollow has secrets for those who read with patience."
        page="index"
      />
      <PostList posts={posts.slice(0, 6)} />
      <div className="allPostsLink">
        <Link href="/posts">
          Enter the archive
          <Icon type="arrowRight" />
        </Link>
      </div>
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

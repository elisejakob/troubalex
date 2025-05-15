import { GetStaticProps } from "next";
import { getAllPosts, Post } from "@/lib/posts";
import Link from "next/link";
import { PostList } from "@/components/post/PostList";
import { PageHeader } from "@/components/page/PageHeader";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main>
      <PageHeader title="Hello friend!" lead="I'm Alexandra. I am a woman of many talents but right now I am most useful at BRYTER where I shape product for lawyers. At lunch, I sit with the engineers, and I marvel at the designers but I don't get their jokes. This is my blog, a random collection of thoughts and contradictions." />
      {/*<PageHeader title="In the hush of the hollow, my thoughts shall roam free." lead="Welcome, traveler, to The Whispering Hollow! You've wandered through the veil of mist that separates the ordinary from the extraordinary. Here, beneath canopies of pixel-leaves and beside crooked cottages, stories flow like a gentle stream. I tend to this peculiar garden, sharing thoughts on building things that matter as foxfire lanterns light our path. Rest your boots by the hearth and listen closely... the hollow has secrets for those who read with patience." />*/}
      <PostList posts={posts.slice(0, 6)} />
      <Link href="/posts" className="pagelink">All posts &rarr;</Link>
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

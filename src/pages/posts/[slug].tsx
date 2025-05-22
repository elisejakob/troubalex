import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug, RelatedPost } from "@/lib/posts";
import { PostHeader } from "@/components/post/PostHeader";
import { PostContent } from "@/components/post/PostContent";
import { RelatedPosts } from "@/components/post/RelatedPosts";
import { HouseSection } from "@/components/layout/HouseSection";

type PostProps = {
  title: string;
  contentHtml: string;
  description?: string;
  date: string;
  relatedPosts: RelatedPost[];
};

export default function PostPage({ title, contentHtml, description, date, relatedPosts }: PostProps) {
  return (
    <main>
      <PostHeader title={title} lead={description} date={date} />
      <PostContent content={contentHtml} />
      <HouseSection><RelatedPosts posts={relatedPosts} /></HouseSection>
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

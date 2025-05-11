import Link from "next/link";
import styles from "./relatedPosts.module.scss";
import { Post, RelatedPost } from "@/lib/posts";

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {
  return (
    <div className={styles.relatedWrapper}>
      <div className={styles.skyline}>
        <div className={styles.clouds}></div>
        <div className={styles.trees}></div>
      </div>
      <section className={styles.related}>
        <h2>Want to keep reading?</h2>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postItem}>
            <Link href={`/posts/${post.slug}`}>
              <div className={styles.meta}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.lead}>{post.description}</p>
            </Link>
          </article>
        ))}
        <div className={styles.house}>
        <img src="/assets/pixels/houses/big-house.png" />
        </div>
      </section>
    </div>
  );
};

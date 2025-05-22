import Link from "next/link";
import styles from "./relatedPosts.module.scss";
import { Post, RelatedPost } from "@/lib/posts";
import Icon from "../general/Icon";
import RandomPixels from "../general/RandomPixels";

export const RelatedPosts = ({ posts }: { posts: RelatedPost[] }) => {
  return (
    <div className={styles.relatedPosts}>
      <h2 className="iconHeading">
        <Icon type="archive" />
        <span>Want to keep reading?</span>
      </h2>
      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.postItem}>
            <Link href={`/posts/${post.slug}`}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.lead}>{post.minidescription ?? post.description}</p>
              <div className="date">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

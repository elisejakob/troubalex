import Link from "next/link";
import styles from "./postList.module.scss";
import { Post } from "@/lib/posts";

export const PostList = ({posts}: {posts: Post[]}) => {
  return (
    <ul className={styles.postList}>
      {posts.map((post: Post) => (
        <li key={post.slug} className={styles.postItem}>
          <Link href={`/posts/${post.slug}`}>
            <div className="date">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.lead}>{post.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

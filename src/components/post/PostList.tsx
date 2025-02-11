import Link from "next/link";
import styles from "./postList.module.scss";

export const PostList = ({posts}: {posts: any}) => {
  return (
    <ul className={styles.postList}>
      {posts.map((post: any) => (
        <li key={post.slug} className={styles.postItem}>
          <Link href={`/posts/${post.slug}`}>
            <div className={styles.meta}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.lead}>{post.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

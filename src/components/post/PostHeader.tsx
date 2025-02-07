import Link from "next/link";
import styles from "./postHeader.module.scss";

export const PostHeader = ({title, lead, date, tags}: {title: string, lead?: string, date: string, tags: any}) => {
  return (
    <div className={styles.postHeader}>
      <h1>{ title }</h1>
      {lead && <p className="lead">{ lead }</p>}
      <div className={styles.meta}>
        <div className={styles.date}>
          By Alexandra Leisse,{" "}
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        {tags && tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag: string) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

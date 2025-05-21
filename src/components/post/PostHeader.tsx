import Link from "next/link";
import styles from "./postHeader.module.scss";

export const PostHeader = ({title, lead, date}: {title: string, lead?: string, date: string}) => {
  return (
    <div className={styles.postHeader}>
      <div className={styles.text}>
        <h1 className={styles.title}>{ title }</h1>
        {lead && <p className="lead">{ lead }</p>}
      </div>
      <div className={styles.meta}>
        <div className={styles.date}>
          By Alexandra Leisse,{" "}
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

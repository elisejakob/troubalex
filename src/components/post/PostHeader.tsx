import Link from "next/link";
import styles from "./postHeader.module.scss";

export const PostHeader = ({title, lead, date}: {title: string, lead?: string, date: string}) => {
  return (
    <div className={styles.postHeader}>
      <h1>{ title }</h1>
      {lead && <p className="lead">{ lead }</p>}
      <div className={styles.meta}>
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

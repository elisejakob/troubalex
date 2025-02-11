import Link from "next/link";
import styles from "./pageHeader.module.scss";

export const PageHeader = ({title, lead}: {title: string, lead?: string}) => {
  return (
    <div className={styles.pageHeader}>
      <h1>{ title }</h1>
      {lead && <p className="lead">{ lead }</p>}
    </div>
  );
};

import styles from "./pageContent.module.scss";

export const PageContent = ({children}: {children: any}) => {
  return (
    <div className={styles.pageContent}>{children}</div>
  );
};

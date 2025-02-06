import styles from "./postContent.module.scss";

export const PostContent = ({content}: {content: any}) => {
  return (
    <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

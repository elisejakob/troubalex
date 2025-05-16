import styles from "./pageHeader.module.scss";
import Sprite from "../general/Sprite";

export const PageHeader = ({title, lead, page}: {title: string, lead?: string, page?: string}) => {
  return (
    <div className={`${styles.pageHeader} ${page && styles[page]}`}>
      {page === "index" && <div className={styles.branches}>
        <img className={styles.leftBranch} src="/assets/pixels/borders/shadow-forest/branch2.png" />
        <img className={styles.rightBranch} src="/assets/pixels/borders/shadow-forest/main.png" />
      </div>}
      <h1 className={styles.title}>{ title }</h1>
      {lead && <p className={`lead ${styles.lead}`}>{ lead }</p>}
      <div className={styles.friend}>
        <Sprite width="80px" height="64px" frames="7" speed=".8s" url="url('/assets/pixels/monsters/mushroom/Mushroom-Idle.png')" />
      </div>
    </div>
  );
};

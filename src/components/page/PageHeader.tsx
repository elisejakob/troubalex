import Link from "next/link";
import styles from "./pageHeader.module.scss";
import Sprite from "../general/Sprite";

export const PageHeader = ({title, lead}: {title: string, lead?: string}) => {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.title}>{ title }</h1>
      {lead && <p className="lead">{ lead }</p>}
      <div className={styles.friend}>
        <Sprite width="80px" height="64px" frames="7" speed=".8s" url="url('/assets/pixels/monsters/mushroom/Mushroom-Idle.png')" />
      </div>
    </div>
  );
};

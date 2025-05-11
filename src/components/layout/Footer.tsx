import Link from "next/link";
import styles from "./footer.module.scss";
import Sprite from "../general/Sprite";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section id="contact" className={styles.contact}>
        <h2>About Alexandra</h2>
        <div className={styles.monster}>
          <Sprite width="135px" height="96px" frames="8" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Idle.png')" />
          <Sprite width="135px" height="96px" frames="18" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Attack.png')" />
        </div>
      </section>
    </footer>
  );
};

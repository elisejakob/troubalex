import Link from "next/link";
import styles from "./footer.module.scss";
import Sprite from "../general/Sprite";
import Icon from "../general/Icon";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section id="contact" className={styles.contact}>
        <h1 className="iconHeading">
          <Icon type="about" />
          <span>About Alexandra</span>
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className={styles.monster}>
          <Sprite width="135px" height="96px" frames="8" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Idle.png')" />
          <Sprite width="135px" height="96px" frames="18" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Attack.png')" />
        </div>
      </section>
    </footer>
  );
};

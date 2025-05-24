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
        <p>I’m the CPO and co-founder of Alfred, longtime product thinker, and curious builder. I’ve shaped products at startups and scale-ups, always drawn to the messy middle where ideas turn into something real (and hopefully a little magical).</p>
        <h2 className="iconHeading">
          <Icon type="contact" />
          <span>Get in touch</span>
        </h2>
        <ul className={styles.contactItems}>
          <li className={styles.email}>
            <span>Email</span>
            <a href="mailto:hallo@troubalex.de" target="_blank">hallo@troubalex.de</a>
          </li>
          <li>
            <a href="https://linkedin.com/troubalex" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/troubalex" target="_blank">GitHub</a>
          </li>
        </ul>
      </section>
      <div className={styles.monster}>
        <Sprite width="135px" height="96px" frames="8" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Idle.png')" />
        <Sprite width="135px" height="96px" frames="18" speed="1s" url="url('/assets/pixels/monsters/forestmonster/Bush_Monster-Attack.png')" />
      </div>
    </footer>
  );
};

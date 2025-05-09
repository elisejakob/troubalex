import Link from "next/link";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section id="contact" className={styles.contact}>
        <h2>About Alexandra</h2>
        <div className={styles.monster}></div>
      </section>
    </footer>
  );
};

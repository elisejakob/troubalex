import Link from "next/link";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.skyline}>
        <div className={styles.clouds}></div>
        <div className={styles.trees}></div>
      </div>
      <section className={styles.related}>
        <h2>Want to keep reading?</h2>
        <div className={styles.house}>
        <img src="/assets/pixels/houses/big-house.png" />
        </div>
      </section>
      <section id="contact" className={styles.contact}>
        <h2>About Alexandra</h2>
        <div className={styles.monster}></div>
      </section>
    </footer>
  );
};

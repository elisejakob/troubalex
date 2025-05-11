import Link from "next/link";
import styles from "./header.module.scss";
import Icon from "../general/Icon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <Icon type="title" />
        <span>The Whispering Hollow</span>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/posts">
              <Icon type="archive" />
              <span>Archive</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Icon type="about" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <Icon type="contact" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

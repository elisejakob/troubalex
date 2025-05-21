import Link from "next/link";
import styles from "./header.module.scss";
import Icon from "../general/Icon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={`${styles.title} iconLink`}>
        <Icon type="title" />
        <span>The Whispering Hollow</span>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/posts" className="iconLink">
              <Icon type="archive" />
              <span>Archive</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="iconLink">
              <Icon type="about" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="iconLink">
              <Icon type="contact" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

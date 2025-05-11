import Link from "next/link";
import styles from "./header.module.scss";
import Sprite from "../general/Sprite";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <span>🏮</span>&nbsp;<strong>The Whispering Hollow</strong>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/posts">Archive</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Sprite width="80px" height="64px" frames="7" speed=".8s" url="url('/assets/pixels/monsters/mushroom/Mushroom-Idle.png')" />
    </header>
  );
};

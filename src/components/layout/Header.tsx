import Link from "next/link";
import styles from "./header.module.scss";
import Sprite from "../general/Sprite";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.border}>
        <img src="/assets/pixels/borders/shadow-forest/main.png" />
        <img src="/assets/pixels/borders/shadow-forest/branch1.png" />
        <img src="/assets/pixels/borders/shadow-forest/branch2.png" />
        <img src="/assets/pixels/borders/shadow-forest/leaves.png" />
      </div>
      <Link href="/">
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

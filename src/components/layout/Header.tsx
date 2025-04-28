import Link from "next/link";
import styles from "./header.module.scss";

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
        <img className="icon" src="/assets/pixels/icons/expression_chat.png" /><strong>Title</strong>
      </Link>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
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
    </header>
  );
};

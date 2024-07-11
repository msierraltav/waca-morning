import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

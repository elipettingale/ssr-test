import Link from "next/link";
import styles from "./index.module.css";

interface Props {}

export default function Menu({}: Props) {
  return (
    <nav className={styles.Menu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Home</h2>
      <Link href="/foobar">Foobar</Link>
    </main>
  );
}

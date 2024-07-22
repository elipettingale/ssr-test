import Link from "next/link";
import styles from "./index.module.css";
import { userIsAuthenticated } from "@/actions/session";

interface Props {}

export default async function Menu({}: Props) {
  const auth = await userIsAuthenticated();

  return (
    <nav className={styles.Menu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {!auth && <li>
          <Link href="/login">Login</Link>
        </li>}
        {auth && <li>
          <Link href="/logout">Logout</Link>
        </li>}
      </ul>
    </nav>
  );
}

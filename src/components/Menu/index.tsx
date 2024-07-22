import Link from "next/link";
import styles from "./index.module.css";
import { userIsAuthenticated } from "@/actions/session";

interface Props {}

export default async function Menu({}: Props) {
  const auth = await userIsAuthenticated();

  return (
    <nav className={styles.Menu}>
      <ul>
        {!auth && (<>
          <li>
            <Link href="/">Login</Link>
          </li>
        </>)}
        {auth && (<>
          <li>
            <Link href="/my-things">My Things</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </>)}
      </ul>
    </nav>
  );
}

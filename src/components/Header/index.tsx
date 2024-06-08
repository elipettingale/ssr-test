import Image from "next/image";
import styles from "./index.module.css";
import Menu from "../Menu";

interface Props {}

export default function Header({}: Props) {
  return (
    <header className={styles.Header}>
        <Image
            src="/logo.svg"
            alt="Logo"
            height={40}
            width={169}
        />
        <Menu />
    </header>
  );
}

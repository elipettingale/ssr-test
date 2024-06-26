import styles from "./index.module.css";

interface Props {
    children: any;
}

export default function Card({ children }: Props) {
  return <div className={styles.Card}>{children}</div>;
}

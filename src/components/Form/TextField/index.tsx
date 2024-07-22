import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export default function TextField({ label, name, ...rest }: Props) {
  return (
    <div className={styles.TextField}>
        <label className={styles.Label}>{label}</label>
        <input className={styles.Input} name={name} {...rest} />
    </div>
  );
}

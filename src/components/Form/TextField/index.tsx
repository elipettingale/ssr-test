import { InputHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export default function TextField({ label, name, ...rest }: Props) {
  return (
    <div className={styles.TextField}>
        <label>{label}</label>
        <input name={name} {...rest} />
    </div>
  );
}

import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const TextField = forwardRef(function ({ label, name, ...rest }: Props, ref: any) {
  return (
    <div className={styles.TextField}>
        <label className={styles.Label}>{label}</label>
        <input ref={ref} className={styles.Input} name={name} {...rest} />
    </div>
  );
});

export default TextField;


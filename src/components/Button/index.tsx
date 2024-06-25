import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...rest }: Props) {
  return <button className={`${styles.Button} ${className}`} {...rest}>{children}</button>;
}

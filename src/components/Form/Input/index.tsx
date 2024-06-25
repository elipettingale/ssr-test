import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./index.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export default function Input({ label, name, ...rest }: Props) {
  return (
    <div>
        <label>
            {label}
            <input name={name} {...rest} />
        </label>
    </div>
  );
}

import React from "react";
import { FiPlusCircle } from "react-icons/fi";

import styles from "./AddButton.module.css";

export function AddButton({
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...rest}>
      Criar <FiPlusCircle />
    </button>
  );
}

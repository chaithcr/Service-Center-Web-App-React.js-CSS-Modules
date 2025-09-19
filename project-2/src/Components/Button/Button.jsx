import React from "react";
import styles from "./Button.module.css";

function Button({ text, icon, type = "primary" }) {
  return (
    <button
      className={
        type === "primary"
          ? styles.primary_btn
          : type === "secondary"
          ? styles.secondary_btn
          : styles.terminary_btn
      }
    >
      {icon} {text}
    </button>
  );
}

export default Button;

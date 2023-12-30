import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import React from "react";
import { IconContext } from "react-icons";

export default function Button({ children, to, icon }) {
  return (
    <Link to={to} className={styles.btn}>
      <div className={styles.body}>
        <div className={styles.img}>
          <IconContext.Provider
            value={{ size: "1.5rem", className: "global-class-name" }}
          >
            <div>{icon}</div>
          </IconContext.Provider>
        </div>
        <p className={styles.title}>{children}</p>
      </div>
    </Link>
  );
}

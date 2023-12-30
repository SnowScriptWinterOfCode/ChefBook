import React, { memo } from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> About us</h1>
      <h5 className={styles.subt}>
        {" "}
        <em>There is no sincere love than the love of food </em>
      </h5>
      <div className={styles.content}>
        <p>
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
        </p>
        <p>
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
        </p>
        <p>
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
          For years serving people food made the bonds stronger, so for you to
          have a strong bond we are here to help you in that process. we have
          created this website in order to share the recipe that people love.
        </p>
      </div>
    </div>
  );
}

export default memo(About);

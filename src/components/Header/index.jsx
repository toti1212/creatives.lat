import React from "react";
import styles from "./Header.module.scss";

const Header = () => (
  <nav className={styles.header}>
    <span className={styles.title}>
      Creatives.lat{" "}
      <span role="img" aria-label="icon">
        🎨
      </span>
    </span>
  </nav>
);

export default Header;

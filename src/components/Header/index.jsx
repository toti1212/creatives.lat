import React from "react";
import logo from '../../assets/logo.svg';
import styles from "./Header.module.scss";

const Header = () => (
  <nav className={styles.header}>
      <img loading="lazy" src={logo} className={styles.logo} alt="logo"/>
  </nav>
);

export default Header;

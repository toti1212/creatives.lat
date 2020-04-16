import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    <p>
      Made with <FontAwesomeIcon icon={faCoffee} /> &{" "}
      <FontAwesomeIcon icon={faHeart} /> by{" "}
      <a
        href="https://www.instagram.com/_toti1212/"
        target="_blank"
        rel="noopener noreferrer"
      >
        toti1212
      </a>{" "}
      and{" "}
      <a
        href="https://www.instagram.com/paumenoni"
        target="_blank"
        rel="noopener noreferrer"
      >
        paumenoni
      </a>
    </p>
  </footer>
);

export default Footer;

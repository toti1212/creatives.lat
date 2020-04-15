import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    <p>
      Made with <FontAwesomeIcon icon={faCoffee} /> &{" "}
      <FontAwesomeIcon icon={faHeart} /> by{" "}
      <a href="https://www.instagram.com/_toti1212/">toti1212</a> and{" "}
      <a href="https://www.instagram.com/criaturaalegre">criaturaalegre</a>
    </p>
  </footer>
);

export default Footer;

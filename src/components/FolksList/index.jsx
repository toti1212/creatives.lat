import React from "react";
import styles from "./FolksList.module.scss";

const FolksList = () => (
  <div className={styles.container}>
    <div className={styles.join}>
      <a
        href="https://airtable.com/shrF82kEiWKYnDfAb"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.join_btn_primary}
      >
        + Unirme
      </a>
    </div>
    <div className={styles.list_wrapper}>
      <iframe
        title="airtable"
        className={styles.iframe}
        src="https://airtable.com/embed/shrop6uMqZdemJmDD?backgroundColor=yellow&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
      ></iframe>
    </div>
  </div>
);

export default FolksList;

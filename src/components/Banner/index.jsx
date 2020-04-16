import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => (
  <div className={styles.wrapper}>
    <h1>
      {" "}
      Creatives.lat <span role="img" aria-label="logo"></span>🎨
    </h1>
    <h3>
      Dada la difícil situación que estamos atravesando, creemos que es un
      buen momento para crear comunidad, así entre todos podemos ayudarnos{" "}
      <span role="img" aria-label="logo">
        💪
      </span>
      <br />
      Si sos una persona creativa, dedicada al área audiovisual, publicidad y/o
      comunicación te invitamos a que te sumes a esta iniciativa{" "}
      <span role="img" aria-label="emoji sonriente">
        🙂
      </span>
    </h3>
  </div>
);

export default Banner;

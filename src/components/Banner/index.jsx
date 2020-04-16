import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => (
  <div className={styles.wrapper}>
    <h1>
      {" "}
      Creatives.lat <span role="img" aria-label="logo"></span>🎨
    </h1>
    <h3>
      Dada la difícil situación que estamos atravesando, creemos que es un buen
      momento para crear una comunidad, tender redes, trabajar en conjunto y
      ayudarnos{" "}
      <span role="img" aria-label="logo">
        💪
      </span>
      <br />
      Desarrollamos esta página con el fin de visibilizar y reunir en un solo
      lugar a todas aquellas personas con perfil creativo{" "}
      <span role="img" aria-label="emoji creativo">
        📷🎨
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

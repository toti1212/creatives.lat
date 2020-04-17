import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => (
  <div className={styles.wrapper}>
    <h1>
      {" "}
      Creatives.lat <span role="img" aria-label="logo"></span>🎨
    </h1>
    <h3>
      ¡Hola! ¡Qué bueno que estés acá! Creemos que este es un buen
      momento para crear una comunidad y ayudarnos{" "}
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
      Si te desenvolvés en el área audiovisual, publicidad y/o comunicación te
      invitamos a que te sumes a esta iniciativa, para que otras personas te
      conozcan y así fomentar el trabajo a distancia{" "}
      <span role="img" aria-label="emoji sonriente">
        🙂
      </span>
    </h3>
  </div>
);

export default Banner;

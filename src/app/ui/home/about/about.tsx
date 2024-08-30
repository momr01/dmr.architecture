import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <h2>Nos ocupamos de todo para que <br /><span className={styles.titleSpan}>disfrutes de tu nuevo hogar</span></h2>

      <p className={styles.content}>
        Construimos casas llave en mano, ocupándonos de todas las etapas del
        proyecto, entregando casas listas para mudarse y diseñadas a medida de
        cada cliente.
      </p>
    </section>
  );
};

export default About;

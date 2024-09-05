import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <h2>
        Nos ocupamos de todo para que <br />
        <span className={styles.titleSpan}>disfrutes de tu nuevo hogar</span>
      </h2>

      {/* <p className={styles.content}>
        Construimos casas llave en mano, ocupándonos de todas las etapas del
        proyecto, entregando casas listas para mudarse y diseñadas a medida de
        cada cliente.
      </p> */}

      <div className="flex flex-col gap-10">
        <p className={styles.content}>
          La experiencia me ha permitido desarrollar diferentes puestos de
          responsabilidad, de los cuales puedo destacar la infoarquitectura,{" "}
          <span className={styles.contentSpan}>la visualización 3D</span> y el
          desarrollo de soluciones gráficas para promociones inmobiliarias.
        </p>

        <p className={styles.content}>
          Realizo de forma precisa y específica el armado de documentación
          técnica y gráfica para darle forma a un proyecto.
        </p>

        <p className={styles.content}>
          Planifico, diseño y construyo elementos, espacios que no sólo sean
          estéticamente agradables, sino también funcionales y seguros.
        </p>

        <p className={styles.content}>
          Mi diverso portafolio de proyectos abarca diseños residenciales de
          viviendas unifamiliares, condominios de casas, edificios de
          departamentos, oficinas, locales comerciales, showrooms, entre otros.{" "}
        </p>

        <p className={styles.content}>
          Abordando desafíos arquitectónicos con creatividad y precisión, cada
          proyecto es una oportunidad para materializar los sueños de mis
          clientes, gracias a una atención personalizada.
        </p>
      </div>
    </section>
  );
};

export default About;

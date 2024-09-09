import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about">
      <h2 className={styles.title}>
        En <span className={styles.titleSpan}>dmr</span> tus{" "}
        <span className={styles.titleSpan}>ideas</span> y{" "}
        <span className={styles.titleSpan}>sueños</span>
        <br />
        se convierten en{" "}
        <span className={styles.titleSpanColor}>proyectos reales</span>
      </h2>

      <div className={styles.contentContainer}>
      <div className={styles.content}>
        <p>
          La experiencia me ha permitido desarrollar diferentes puestos de
          responsabilidad, de los cuales puedo destacar la infoarquitectura, la{" "}
          <span className={styles.contentSpan}>visualización 3D</span> y el
          desarrollo de soluciones gráficas para promociones inmobiliarias.
        </p>
        <p>
          Realizo de forma precisa y específica el armado de documentación
          técnica y gráfica para darle forma a un{" "}
          <span className={styles.contentSpan}>proyecto</span>.
        </p>
        <p>
          Planifico, diseño y construyo elementos, espacios que no sólo sean
          estéticamente agradables, sino también funcionales y seguros.
        </p>
        <p>
          Mi diverso portafolio de proyectos abarca diseños residenciales de
          viviendas unifamiliares, condominios de casas, edificios de
          departamentos, oficinas, locales comerciales, showrooms, entre otros.
        </p>
        <p>
          Abordando{" "}
          <span className={styles.contentSpan}>desafíos arquitectónicos</span>{" "}
          con creatividad y precisión, cada proyecto es una oportunidad para
          materializar los sueños de mis clientes, gracias a una atención
          personalizada.
        </p>
      </div>
      </div>

    
    </section>
  );
};

export default About;

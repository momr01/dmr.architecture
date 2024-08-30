import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../assets/img/carousel/imgCarousel";
import CardProject from "./cardProject/cardProject";

const q = [1, 2, 3];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className={styles.cardsContainer}>
        {q.map((el) => (
          <CardProject key={el} el={el} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className={styles.btnMore}>Ver más</button>
      </div>
    </section>
  );
};

export default Projects;

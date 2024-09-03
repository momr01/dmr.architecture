import React from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import {
  imgCarousel1,
  imgCarousel2,
  imgCarousel3,
} from "../../../assets/img/carousel/imgCarousel";
import CardProject from "./cardProject/cardProject";
import {
  gargantini01,
  gargantini02,
  ofCc01,
  ofCc02,
  ofCc03,
  showroom01,
  showroom02,
  showroom03,
  showroom04,
} from "@/app/assets/img/projects/imgProjects";

const projects = [
  {
    id: 1,
    title: "Diseño Showroom - DJI Agriculture",
    isMain: true,
    images: [showroom01, showroom02, showroom03, showroom04],
  },
  {
    id: 2,
    title: "Proyecto Gargantini I",
    isMain: true,
    images: [gargantini01, gargantini02],
  },
  {
    id: 3,
    title: "Oficinas & Centro Comercial",
    isMain: true,
    images: [ofCc01, ofCc02, ofCc03],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className={styles.cardsContainer}>
        {projects
          .filter((project) => project.isMain)
          .map((el, index) => (
            <CardProject key={el.id} el={el} index={index} />
          ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className={styles.btnMore}>Ver más</button>
      </div>
    </section>
  );
};

export default Projects;

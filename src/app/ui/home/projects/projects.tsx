"use client";

import React from "react";
import styles from "./projects.module.css";
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
} from "@/assets/img/projects/imgProjects";
import { redirect, useRouter } from "next/navigation";
import ProjectsContainer from "../../projects/projectsContainer/projectsContainer";

// const projects = [
//   {
//     id: 1,
//     title: "Diseño Showroom - DJI Agriculture",
//     isMain: true,
//     images: [showroom01, showroom02, showroom03, showroom04],
//   },
//   {
//     id: 2,
//     title: "Proyecto Gargantini I",
//     isMain: true,
//     images: [gargantini01, gargantini02],
//   },
//   {
//     id: 3,
//     title: "Oficinas & Centro Comercial",
//     isMain: true,
//     images: [ofCc01, ofCc02, ofCc03],
//   },
// ];

const Projects = () => {
  const router = useRouter();

  const handleNewPage = () => {
    router.push("/proyectos");
    // redirect("/proyectos");
  };
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      {/* <div className={styles.cardsContainer}>
        {projects
          .filter((project) => project.isMain)
          .map((el, index) => (
            <CardProject key={el.id} el={el} index={index} />
          ))}
      </div> */}
      <ProjectsContainer />
      <div className="flex justify-center mt-10">
        <button className={styles.btnMore} onClick={handleNewPage}>
          Ver más
        </button>
      </div>
    </section>
  );
};

export default Projects;

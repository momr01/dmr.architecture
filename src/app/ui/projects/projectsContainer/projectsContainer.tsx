import React from "react";
import styles from "./projectsContainer.module.css";
import { projects } from "@/data/projectsItems";
import CardProject from "../cardProject/cardProject";

const ProjectsContainer = ({limit} : {limit: number}) => {
  return (
    <div className={styles.cardsContainer}>
      {projects
        //.filter((project) => project.isMain)
        .slice(0, limit)
        .map((el, index) => (
          <CardProject key={el.id} el={el} index={index} />
        ))}
    </div>
  );
};

export default ProjectsContainer;

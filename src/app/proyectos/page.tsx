import React from "react";
import ProjectsContainer from "../ui/projects/projectsContainer/projectsContainer";
import { projects } from "@/data/projectsItems";
import styles from "./projectsPage.module.css";

const ProjectsPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Proyectos</h2>
        <ProjectsContainer limit={projects.length} />
      </div>
    </section>
  );
};

export default ProjectsPage;

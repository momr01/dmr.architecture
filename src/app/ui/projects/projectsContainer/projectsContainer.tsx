"use client";

import React from "react";
import styles from "./projectsContainer.module.css";
import { projects } from "@/data/projectsItems";
import CardProject from "../cardProject/cardProject";
import { usePathname } from "next/navigation";
import { IProject } from "@/interfaces/iproject";

const ProjectsContainer = ({ limit }: { limit: number }) => {
  const pathname = usePathname();
  const isProjectsPage = pathname.includes("proyectos");

  return (
    <div
      className={`${styles.cardsContainer} ${
        !isProjectsPage && styles.borderUnderTitle
      }`}
    >
      {projects
        //.filter((project) => project.isMain)
        .sort(
          (a: IProject, b: IProject) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, limit)
        .map((el, index) => {
          const delay = (index % 3) * 500; // Se reinicia cada 3 elementos

          return <CardProject key={el.id} el={el} delay={delay} />;
        })}
    </div>
  );
};

export default ProjectsContainer;

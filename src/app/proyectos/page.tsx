import React from "react";
import ProjectsContainer from "../ui/projects/projectsContainer/projectsContainer";
import { projects } from "@/data/projectsItems";

const ProjectsPage = () => {
  return (
    <section>
      <div className="mt-20">
        <h2>Proyectos</h2>
        <ProjectsContainer limit={projects.length} />
      </div>
    </section>
  );
};

export default ProjectsPage;

import React from "react";
import ProjectsContainer from "../ui/projects/projectsContainer/projectsContainer";
import { projects } from "@/data/projectsItems";

const ProjectsPage = () => {
  return (
    <section className="bg-black pb-20 md:pb-0">
      <div className="mt-20">
        <h2 className="uppercase text-white">Proyectos</h2>
        <ProjectsContainer limit={projects.length} />
      </div>
    </section>
  );
};

export default ProjectsPage;

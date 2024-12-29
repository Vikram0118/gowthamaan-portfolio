"use client";

import { SectionWrapper } from "@/components/common";
import { projectsData } from "@/constants/projects";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
  return (
    <SectionWrapper>
      <div className="projects-container space-y-4">
        {projectsData.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>

      <style jsx global>{`
        .projects-container:hover > div {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .projects-container > div {
          transition: opacity 0.3s ease;
        }

        .projects-container > div:hover {
          opacity: 1 !important;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default ProjectsList;

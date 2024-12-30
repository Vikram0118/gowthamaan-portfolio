import { PageName, PageSubHeading } from "@/components/common";
import Layout from "@/components/Layout";
import ProjectsList from "./ProjectList";

const Projects = () => {
  return (
    <Layout>
      <div className="mt-5 mb-10">
        <PageName label="Projects" />
      </div>
      <ProjectsList />
    </Layout>
  );
};

export default Projects;

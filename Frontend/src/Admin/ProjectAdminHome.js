import React from "react";
import ProjectAdminCard from "./ProjectAdminCard";

const ProjectAdminHome = () => {
  return (
    <div className="proj-admin-home">
      <div className="title">Project Home Admin Page</div>
      <div className="proj-cards">
        <ProjectAdminCard addCard={true}/>
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
        <ProjectAdminCard />
      </div>
    </div>
  );
};
export default ProjectAdminHome;

import React, { useEffect, useState } from "react";
import { deleteProject, getAllProjectDetails } from "../util/action";
import Loader from "../util/Loader";
import ProjectAdminCard from "./ProjectAdminCard";

const ProjectAdminHome = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProjectDetails().then((resp) => {
      setProjectData(resp.data);
      setLoading(false)
    });
  }, []);

  const removeProj = (id) => {
    deleteProject(id).then((resp)=>{
      setProjectData(resp.data);
    })
  }
  if (loading) {
    return <Loader/>
  }
  return (
    <div className="proj-admin-home">
      <div className="title">Project Home Admin Page</div>
      <div className="proj-cards">
        <ProjectAdminCard addCard={true} />
        {projectData.map((proj)=>{
          return <ProjectAdminCard projectData={proj} removeProj={removeProj}/>
        })}
      </div>
    </div>
  );
};
export default ProjectAdminHome;

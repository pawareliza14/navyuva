import React, { useState, useEffect } from "react";
import { getResearchProjects } from "../services/researchService";

const Research = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getResearchProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Research Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Research;

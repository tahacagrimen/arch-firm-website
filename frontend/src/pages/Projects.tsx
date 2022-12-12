import React, { useContext, useState, useEffect } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import Project from "../components/Project";
import "../styles/Projects.scss";
import useGraphql from "../hooks/useGraphql";

const Projects = () => {
  const [data2, setData2] = useState<[]>([]);

  const { projects, setProjects } = useContext(ProjectsContext);

  const { data, loading, error } = useGraphql();

  useEffect(() => {
    if (data) {
      setProjects(data);
      setData2(data.projects.data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      {loading === false &&
        data2.map((proje: any) => <Project key={proje.id} proje={proje} />)}
    </div>
  );
};

export default Projects;

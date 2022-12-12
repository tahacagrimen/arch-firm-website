import React, { useContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import { ProjectsContext } from "../context/ProjectsContext";
import useGraphql from "../hooks/useGraphql";

const Home = () => {
  const { projects, setProjects } = useContext(ProjectsContext);

  const { data, loading, error } = useGraphql();

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data]);

  return <div>{projects ? <Slider proje={projects} /> : null}</div>;
};

export default Home;

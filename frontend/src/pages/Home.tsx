import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  const { id } = useParams();

  console.log(id);

  console.log(data);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          {data.projects.data.map((project: any) => (
            <div key={project.id}>
              <h2>{project.attributes.title}</h2>
              <p>{project.attributes.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

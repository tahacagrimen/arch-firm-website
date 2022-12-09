import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        attributes {
          title
          description
          img {
            data {
              id
              attributes {
                formats
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  console.log(data);

  return (
    <div>
      <Slider />
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

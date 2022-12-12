import React, { useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { ProjectsContext } from "../context/ProjectsContext";

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        id
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

const useGraphql = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  return { data, loading, error };
};

export default useGraphql;

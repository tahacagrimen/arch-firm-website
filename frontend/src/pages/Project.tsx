import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      data {
        attributes {
          title
          description
        }
      }
    }
  }
`;

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PROJECT, {
    variables: { id: id },
  });

  console.log(data);

  return <div>Project</div>;
};

export default Project;

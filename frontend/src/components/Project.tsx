import React from "react";
import "../styles/ProjectCard.scss";

type ProjectProps = {
  proje: any;
};

const Project = ({ proje }: ProjectProps) => {
  console.log(proje);

  return (
    <div className="project_card">
      <img
        src={proje.attributes.img.data[0].attributes.url}
        alt={proje.attributes.title}
      />
      <h1>{proje.attributes.title}</h1>
    </div>
  );
};

export default Project;

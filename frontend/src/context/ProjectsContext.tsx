import React, { createContext, useState } from "react";

type ProjectsContextType = {
  projects: any;
  setProjects: React.Dispatch<React.SetStateAction<[]>>;
};

type Props = {
  children: React.ReactNode;
};

export const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => {},
});

const ProjectsContextProvider: React.FC<Props> = ({ children }) => {
  const [projects, setProjects] = useState<[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;

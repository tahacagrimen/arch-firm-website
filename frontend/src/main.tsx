import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectsContextProvider from "./context/ProjectsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ProjectsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProjectsContextProvider>
);

// HomePage.tsx
import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/Landing";
import AboutComponent from "../components/AboutComponent";
import ProjectsComponent from "../components/ProjectsComponent";

const HomePage: React.FC = () => {
  return (
    <Header>
      <Landing />
      <AboutComponent />
      <ProjectsComponent />
    </Header>
  );
};

export default HomePage;

// HomePage.tsx
import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/Landing";
import AboutComponent from "../components/AboutComponent";
import { Helmet } from "react-helmet";
import ProjectsComponent from "../components/ProjectsComponent";

const HomePage: React.FC = () => {
  return (
    <Header>
      <Helmet>
        <title>Hope For Children</title>
      </Helmet>
      <Landing />
      <AboutComponent />
      <ProjectsComponent />
    </Header>
  );
};

export default HomePage;

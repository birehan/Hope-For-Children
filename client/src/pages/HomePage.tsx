// HomePage.tsx
import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/homepage_components/Landing";
import AboutComponent from "../components/homepage_components/AboutComponent";
import { Helmet } from "react-helmet";
import ProjectsComponent from "../components/homepage_components/ProjectsComponent";
import Statistics from "../components/homepage_components/Statistics";
import ThematicAreas from "../components/homepage_components/ThematicAreas";

const HomePage: React.FC = () => {
  return (
    <Header>
      <Helmet>
        <title>Hope For Children</title>
      </Helmet>
      <Landing />
      <div className="flex flex-col gap-16 my-16">
        <AboutComponent />
        <ProjectsComponent />
        <Statistics />
        <ThematicAreas />
      </div>
    </Header>
  );
};

export default HomePage;

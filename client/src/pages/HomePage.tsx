// HomePage.tsx
import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/homepage_components/Landing";
import AboutComponent from "../components/homepage_components/AboutComponent";
import { Helmet } from "react-helmet";
import ProjectsComponent from "../components/homepage_components/ProjectsComponent";
import Statistics from "../components/homepage_components/Statistics";
import ThematicAreas from "../components/homepage_components/ThematicAreas";
import Values from "../components/homepage_components/Values";
import Partners from "../components/homepage_components/Partners";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <Header>
      <Helmet>
        <title>Hope For Children</title>
      </Helmet>
      <div className="flex flex-col gap-16">
        <Landing />
        <AboutComponent />
        <ProjectsComponent />
        <Statistics />
        <ThematicAreas />
        <Values />
        <Partners />
        <Footer />
      </div>
    </Header>
  );
};

export default HomePage;

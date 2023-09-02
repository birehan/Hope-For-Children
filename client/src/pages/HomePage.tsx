import React from "react";
import Landing from "../components/homepage_components/Landing";
import AboutComponent from "../components/homepage_components/AboutComponent";
import ProjectsComponent from "../components/homepage_components/ProjectsComponent";
import Statistics from "../components/homepage_components/Statistics";
import ThematicAreas from "../components/homepage_components/ThematicAreas";
import Values from "../components/homepage_components/Values";
import Partners from "../components/homepage_components/Partners";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../actions/projectsAction";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  });

  return (
    <div className="flex flex-col gap-16">
      <Landing />
      {/* <AboutComponent /> */}
      <ProjectsComponent />
      <Statistics />
      <ThematicAreas />
      <Values />
      <Partners />
    </div>
  );
};

export default HomePage;

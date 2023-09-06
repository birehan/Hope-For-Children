import React from "react";
import Landing from "../components/homepage_components/Landing";
import ProjectsComponent from "../components/homepage_components/ProjectsComponent";
import Statistics from "../components/homepage_components/Statistics";
import ThematicAreas from "../components/homepage_components/ThematicAreas";
import Values from "../components/homepage_components/Values";
import Partners from "../components/homepage_components/Partners";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanUpProjects, getProjects } from "../actions/projectsAction";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
    return () => {
      dispatch(cleanUpProjects());
    };
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="flex flex-col gap-16">
        <Landing />
        {/* <AboutComponent /> */}
        <ProjectsComponent />
        <Statistics />
        <ThematicAreas />
        <Values />
        <Partners />
      </div>
    </Layout>
  );
};

export default HomePage;

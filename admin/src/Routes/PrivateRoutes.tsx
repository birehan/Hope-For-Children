import { lazy } from "react";
import Layout from "../components/Layout";
import CreateProjectForm from "../features/projects/CreateProjectForm";
// import ProjectsList from "../features/projects/ProjectsList";

const ProjectsList = lazy(() => import("../features/projects/ProjectsList"));

export default function PrivateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <ProjectsList /> },
      { path: "/projects/create", element: <CreateProjectForm /> },
    ],
  };
}

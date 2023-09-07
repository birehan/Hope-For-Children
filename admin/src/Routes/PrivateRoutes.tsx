import { lazy } from "react";
import Layout from "../components/Layout";

const Projects = lazy(() => import("../components/Projects"));

export default function PrivateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <Projects /> },

      //   { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}

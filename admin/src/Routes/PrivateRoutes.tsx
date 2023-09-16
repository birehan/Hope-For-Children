import { lazy } from "react";
import Layout from "../components/Layout";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import GalleryPage from "../pages/GalleryPage";
import AlumniPage from "../pages/AlumniPage";
import StaffsList from "../components/staffs/StaffList";
import CreateStaffForm from "../components/staffs/CreateStaffForm";
import UpdateStaffForm from "../components/staffs/UpdateStaffForm";

const ProjectsList = lazy(() => import("../features/projects/ProjectsList"));

export default function PrivateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <ProjectsList /> },
      { path: "/projects/create", element: <CreateProjectForm /> },
      { path: "/staff/:staffType?", element: <StaffsList /> },
      { path: "/staffs/create", element: <CreateStaffForm /> },
      { path: "/staffs/update/:id", element: <UpdateStaffForm /> },

      { path: "/gallery", element: <GalleryPage /> },
      { path: "/alumni", element: <AlumniPage /> },
    ],
  };
}

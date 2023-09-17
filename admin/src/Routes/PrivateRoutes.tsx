import { lazy } from "react";
import Layout from "../components/Layout";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import GalleryPage from "../pages/GalleryPage";
import StaffsList from "../components/staffs/StaffList";
import CreateStaffForm from "../components/staffs/CreateStaffForm";
import UpdateStaffForm from "../components/staffs/UpdateStaffForm";
import AlumniList from "../components/alumnis/AlumniList";
import CreateAlumniForm from "../components/alumnis/CreateAlumniForm";
import UpdateAlumniForm from "../components/alumnis/UpdateAlumniForm";

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
      { path: "/alumnis", element: <AlumniList /> },
      { path: "/alumnis/create", element: <CreateAlumniForm /> },
      { path: "/alumnis/update/:id", element: <UpdateAlumniForm /> },
    ],
  };
}

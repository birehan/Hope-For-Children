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
import GalleryFormInput from "../components/gallery/CreateGalleryForm";
import GalleryList from "../components/gallery/GalleryList";
import GalleryDetail from "../components/gallery/GalleryDetail";
import UpdateGalleryForm from "../components/gallery/UpdateGalleryForm";

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

      { path: "/galleries", element: <GalleryList /> },
      { path: "/galleries/:id", element: <GalleryDetail /> },
      { path: "/gallery/create", element: <GalleryFormInput /> },
      { path: "/gallery/update/:id", element: <UpdateGalleryForm /> },

      { path: "/alumnis", element: <AlumniList /> },
      { path: "/alumnis/create", element: <CreateAlumniForm /> },
      { path: "/alumnis/update/:id", element: <UpdateAlumniForm /> },
    ],
  };
}

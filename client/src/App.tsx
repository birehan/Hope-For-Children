import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurWorkPage from "./pages/OurWorkPage";
import Alumni from "./pages/AlumniPage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DontationPage from "./pages/DontationPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProgramsPage from "./pages/ProgramsPage";
import StaffsPage from "./pages/StaffsPage";
import Layout from "./components/Layout";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/acheivements"
          element={
            <Layout>
              <OurWorkPage />
            </Layout>
          }
        />
        <Route
          path="/alumni"
          element={
            <Layout>
              <Alumni />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              <ProjectsPage />
            </Layout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectDetailPage />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <GalleryPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/donate"
          element={
            <Layout>
              <DontationPage />
            </Layout>
          }
        />
        <Route
          path="/programs"
          element={
            <Layout>
              <ProgramsPage />
            </Layout>
          }
        />
        <Route
          path="/staffs/:staffType"
          element={
            <Layout>
              <StaffsPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

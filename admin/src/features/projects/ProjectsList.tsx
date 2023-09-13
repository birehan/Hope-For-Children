import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { FetchAllProjects } from "../redux/project/projectSlice";
import Pagination from "../../components/Pagination";
import ProjectCard from "./ProjectCard";
import { Project } from "../../types/types";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAllProjects());
    return () => {};
  }, [dispatch]);

  const { projects, loading, errors } = useSelector(
    (state: any) => state.projects
  );

  const [itemsPerPage, setItemsPerPage] = useState(6); // Initialize with 1 item per row

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    return <div>{errors}</div>;
  }

  return (
    <main className="p-6">
      <div className="flex flex-col gap-8">
        <div className="w-full flex items-end justify-end ">
          <Link to="/projects/create">
            <button
              type="button"
              className="xl:mr-12 inline-flex justify-center items-center  gap-x-1.5 rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColorHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorHover"
            >
              <BsPlus className=" h-6 w-6" aria-hidden="true" />
              Create Project
            </button>
          </Link>
        </div>

        <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-10   md:grid-cols-2 lg:grid-cols-3">
          {projects
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((project: Project, index: number) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
};

export default ProjectsList;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectDetail,
  cleanUpProjectDetail,
} from "../actions/projectsAction";
import CommonLanding from "../components/CommonLanding";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((state: any) => state.projects);

  useEffect(() => {
    dispatch(getProjectDetail(id));
    return () => {
      dispatch(cleanUpProjectDetail());
    };
  }, [id]);

  if (project == null) {
    return <div>Project Detail Error</div>;
  }

  return (
    <div>
      <CommonLanding title={project.title} icon={null} />

      <div className="flex flex-col gap-4 px-6 mt-8 xl:mt-16">
        <div
          className="mx-auto mt-4 grid w-full max-w-[80rem] gap-10  grid-cols-1 bg-white p-8 rounded-md"
          dangerouslySetInnerHTML={{
            __html: project.content,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetailPage;

import { PiStudentBold } from "react-icons/pi";
import { getAlumniStudents } from "../actions/projectsAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AlumniList from "../components/AlumniList";
import CommonLanding from "../components/CommonLanding";

const AlumniPage = () => {
  const dispatch = useDispatch();
  const { alumnis } = useSelector((state: any) => state.alumnis);

  useEffect(() => {
    dispatch(getAlumniStudents());
    return () => {};
  }, []);

  if (alumnis.length === 0 || alumnis === undefined || !alumnis) {
    return <div>Alumni Error</div>;
  }

  return (
    <div>
      <CommonLanding title="HFC Alumni Students" icon={PiStudentBold} />
      <AlumniList />
    </div>
  );
};

export default AlumniPage;

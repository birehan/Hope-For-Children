import { useDispatch, useSelector } from "react-redux";
import StaffsList from "../components/staffs/StaffList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading";
import { FetchAllstaffs } from "../features/redux/staffSlice";

const StaffPage = () => {
  const { loading, staffs } = useSelector((state: any) => state.staffs);

  const dispatch = useDispatch();
  const { staffType } = useParams();

  useEffect(() => {
    dispatch(FetchAllstaffs());

    return () => {
      // dispatch(cleanUpStaff());
    };
  }, [staffType, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <StaffsList />
    </div>
  );
};

export default StaffPage;

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { Staff } from "../../types/types";
import Notification from "../Notification";
import {
  FetchAllstaffs,
  GetStaffDetailAction,
} from "../../features/redux/staffSlice";
import Loading from "../Loading";
import { BsPlus } from "react-icons/bs";
import StaffCard from "./StaffCard";

export const staffMembers = {
  BoardMember: "Board Members",
  ManagementMember: "Management Members",
  StaffMember: "Staff Members",
  FormerMember: "Former Members",
};

const StaffsList = () => {
  const dispatch = useDispatch();
  const { staffType } = useParams();

  useEffect(() => {
    if (staffType !== undefined && staffMembers.hasOwnProperty(staffType)) {
      dispatch(GetStaffDetailAction(staffType));
    } else {
      dispatch(FetchAllstaffs());
    }
  }, [dispatch, staffType]);

  const { isLoading, staffs, isDeleteSuccess, error } = useSelector(
    (state: any) => state.staffs
  );

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(staffs.length / itemsPerPage);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="xl:pb-8 ">
      {isDeleteSuccess && (
        <Notification success={isDeleteSuccess} message="Delete succesffully" />
      )}

      {error && <Notification success={isDeleteSuccess} message={error} />}

      <div className="mx-auto max-w-[100rem] flex flex-col gap-6 ">
        <div className="flex flex-row justify-between items-center gap-4">
          <h3 className="text-primaryColor text-2xl font-bold">
            {staffType !== undefined &&
            staffMembers.hasOwnProperty(staffType as keyof typeof staffMembers)
              ? staffMembers[staffType as keyof typeof staffMembers]
              : "Staff Members"}
          </h3>

          <Link to="/staffs/create">
            <button
              type="button"
              className=" inline-flex justify-center items-center  gap-x-1.5 rounded-md bg-primaryColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryColorHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryColorHover"
            >
              <BsPlus className=" h-6 w-6" aria-hidden="true" />
              Create Staff
            </button>
          </Link>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-10  grid-cols-1">
          {staffs
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((staff: Staff, index: number) => (
              <StaffCard key={index} staff={staff} />
            ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

export default StaffsList;

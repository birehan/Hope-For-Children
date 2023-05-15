import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { values } from "../../common/data";

const Value = () => {

  const toggleValue = () => {
    
  }
  return (
    <div className="flex-1">
      {values.map((val) => (
        <div className="flex flex-col items-center justify-center bg-white p-[24px] mb-6">
          <div className="flex justify-between w-[100%]">
            <div className="flex justify-between items-center text-[24px]">
              <h1 className="text-[#00B1F473]">{val.id}</h1>
              <h1 className="ml-10 text-[#00B1F4]">{val.title}</h1>
            </div>
            <button className="h-[40px] w-[40px] bg-gradient-to-r from-[rgba(216,218,229,0.24)] via-[rgba(215,216,219,0.06)] to-transparent shadow-xl backdrop-blur-[50px] rounded-[50%]">
              <KeyboardArrowDown className="text-[#00B1F4]" />
            </button>
          </div>
          <div>
            {/* <p className='px-10 py-5'>{val.desc}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Value;

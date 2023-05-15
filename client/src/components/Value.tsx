import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { values } from "../../common/data";

const Value = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleValue = (valueId: any | null) => {
    setSelectedValue(prev => (prev === valueId ? null : valueId));
  };

  const getButtonRotation = (valueId: any | null) => {
    return selectedValue === valueId ? "rotate-180" : "rotate-0";
  };

  return (
    <div className="flex-1">
      {values.map((val) => (
        <div
          key={val.id}
          className="flex flex-col items-center justify-center bg-white p-[24px] mb-6"
        >
          <div className="flex justify-between w-[100%]">
            <div className="flex justify-between items-center text-[24px]">
              <h1 className="text-[#00B1F473]">{val.id}</h1>
              <h1 className="ml-10 text-[#00B1F4]">{val.title}</h1>
            </div>
            <button
              onClick={() => toggleValue(val.id)}
              className={`h-[40px] w-[40px] bg-gradient-to-r from-[rgba(216,218,229,0.24)] via-[rgba(215,216,219,0.06)] to-transparent shadow-xl backdrop-blur-[50px] rounded-[50%] transform ${getButtonRotation(
                val.id
              )}`}
            >
              <KeyboardArrowDown className="text-[#00B1F4]" />
            </button>
          </div>
          <div
            className={`transition-all duration-500 ${
              selectedValue === val.id ? "max-h-[100px]" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="px-10 py-5">{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Value;

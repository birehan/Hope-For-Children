import Image from "next/image";
import image from "../../../common/images/image.png";
import Value from "./Value";

const Values = () => {
  return (
    <div className="w-[100%] bg-[#F7F8FCA3]">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] flex flex-col m-auto">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-[#00B1F4] text-[50px] my-8">Our Values</h1>
        </div>
        <div className="flex gap-10">
          <div className="px-2 w-[100%] md:w-1/2">
            <Value />
          </div>
          <div className="hidden md:flex w-1/2 justify-center items-center flex-1">
            <Image className="h-[100%]" src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Values;

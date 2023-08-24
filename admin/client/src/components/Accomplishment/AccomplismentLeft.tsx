import { Home } from "@mui/icons-material";
import Image from "next/image";
import { acnavs, acprograms } from "../../../common/data";
import task from "../../../common/images/Group of Projects.png";
import program from "../../../common/images/Program.png"

const AccomplismentLeft = () => {
  return (
    <div className="px-5 sm:p-10 flex flex-1/4  flex-col gap-16">
      <div className="acard">
        <div className="flex items-center gap-3 mb-3">
          <Image src={task} className="object-cover w-15 h-15" alt="task" />
          <h1 className="text-2xl">Our Projects</h1>
        </div>
        {acnavs.map((nav,indx) => (
          <div key={indx} className="flex gap-3 items-center">
            {<nav.icon/>}
            <p>{nav.title}</p>
          </div> 
        ))}
      </div>
      <div className="acard">
        <div className="flex items-center gap-3 mb-3">
          <Image src={program} className="object-cover w-15 h-15" alt="program"/>
          <h1 className="text-2xl">Our Projects</h1>
        </div>
        {acprograms.map((nav,indx) => (
          <div key={indx} className="flex gap-3 items-center">
            {<nav.icon/>}
            <p>{nav.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomplismentLeft;

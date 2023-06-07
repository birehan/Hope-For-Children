import React from "react";
import { accomplishments } from "../../../common/data";

const AccomplishmentRight = () => {
  return (
    <div className="py-10 px-5 sm:mx-10">
      <div>
        {accomplishments.map((ac) => (
          <div>
            <h1 className="text-2xl text-[#00B1F4] mb-5">{ac.title}</h1>
            <div className="accomplishmentcard p-10 mb-10">
                <div className="flex flex-col gap-5">
                <p>{ac.desc1}</p>
                <p>{ac.desc2}</p>
                </div>
                <button className="text-white bg-[#00B1F4] px-[10px] py-[5px] rounded-[10px] mt-5">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomplishmentRight;

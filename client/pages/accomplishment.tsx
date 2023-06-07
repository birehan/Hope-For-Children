import React from "react";
import Hero from "../src/components/Accomplishment/Hero";
import AccomplismentLeft from "../src/components/Accomplishment/AccomplismentLeft";
import AccomplishmentRight from "../src/components/Accomplishment/AccomplishmentRight";
const accomplishment = () => {
  return (
    <div className="bg-[#F5F5F5] w-full">
      <Hero />
      <div className="flex flex-col lg:grid lg:grid-cols-12 mt-20 w-full">
        <div className="lg:sticky top-0 col-span-3">
          <AccomplismentLeft/>
        </div>
        <div className="col-span-9">
          <AccomplishmentRight />
        </div>
      </div>
    </div>
  );
};

export default accomplishment;

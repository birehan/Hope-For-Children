import React from "react";
import Support from "./Support";

const Donate = () => {
  return (
    <div className="w-full p-5">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[70px] text-[#00B1F4]">Donating is about making</h1>
        <h1 className="text-[70px] text-[#00B1F4]">a Difference.</h1>
      </div>
      <div className="md:ml-10">
        <div className=" my-5">
          <h1 className="text-2xl">Bank Account Detail</h1>
        </div>
        <div className="border rounded-md p-4 text-2xl w-[90%]">
          <div className="grid md:grid-cols-12 auto-cols-max gap-5 py-2 my-5">
            <h1 className="text-[#00B1F4]">01</h1>
            <h1 className="col-span-4">BANK OF ABYSSINIA</h1>
            <h1 className="col-span-3">62246871</h1>
            <h1 className="col-span-4">Hope for Children Organization</h1>
          </div>
          <hr/>
          <div className="grid md:grid-cols-12 gap-5 py-2 my-5">
            <h1 className="text-[#00B1F4]">02</h1>
            <h1 className="col-span-4">COMMERCIAL BANK OF ETHIOPIA</h1>
            <h1 className="col-span-3">1000010785069</h1>
            <h1 className="col-span-4">Hope for Children Organization</h1>
          </div>
        </div>
      </div>
      <div className="md:mx-10 my-3">
        <Support/>
      </div>
    </div>
  );
};

export default Donate;

import React from "react";

const DonateOnline = () => {
  return (
    <div className="flex-1 md:px-10 md:p-10">
      <div>
        <h1 className="text-center mb-10 text-4xl">Donate Online</h1>
      </div>
      <div className="donate flex flex-col items-center justify-center py-10 px-10">
        <div className="w-full">
        <h1 className="text-2xl text-black/50 my-2">Donate to HFC</h1>
        </div>
        <form className="flex flex-col items-center justify-center w-full first-letter:">
          <div className="sm:flex gap-5 w-full my-3">
            <input
              className="p-[10px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0"
              placeholder="Enter Your Full Name"
            />
            <input
              className="p-[10px]  w-full border border-[#00B1F4] rounded-md"
              placeholder="Amount"
            />
          </div>
          <button className="my-5 p-[10px] bg-[#00B1F4] w-full rounded-md text-white flex items-center justify-center gap-2">
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateOnline;

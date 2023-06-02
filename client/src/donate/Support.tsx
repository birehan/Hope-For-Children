import React from "react";

const Support = () => {
  return (
    <div className=" flex flex-col flex-1">
      <h1 className="text-center my-2 text-4xl">Support-Us</h1>
      <form className="w-full">
        <div className="">
          <div className="flex gap-10 my-5 w-full">
            <input
              className="p-[15px] border rounded-md w-full"
              placeholder="Enter your first name"
            />
            <input
              className="p-[15px] border rounded-md w-full"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex gap-10 w-full">
            <input className="p-[15px] border rounded-md w-full" placeholder="Email" />
            <input
              className="p-[15px] border rounded-md w-full"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-10 my-5 flex-1">
          <div className="border border-[#00B1F4] rounded-md p-5 w-full lg:w-[50%]">
            <h1 className="text-[12px] font-bold my-2">How would you like to support us</h1>
            <div className="flex flex-col gap-2">
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="w-5 h-5 bg-[#00B1F4]"/>
                  <span className="ml-2 text-[12px]">To Hope For Children</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" id="checkbox3" className="w-5 h-5 border border-[#00B1F4] text-[#00B1F4]" />
                  <span className="ml-2 text-[12px]">To one of our community programs</span>
                </label>
                <div className="ml-6 flex flex-col gap-2 my-3">
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="w-5 h-5 bg-[#00B1F4]" disabled />
                      <span className="ml-2 text-[12px]">Youth Enrichment Center</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox"className="w-5 h-5 bg-[#00B1F4]" disabled />
                      <span className="ml-2 text-[12px]">Youth Enrichment Center</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center">
                      <input type="checkbox" className="w-5 h-5 bg-[#00B1F4]" disabled />
                      <span className="ml-2 text-[12px]">Youth Enrichment Center</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="flex items-center text-[18px]">
                  <input type="checkbox" className="w-5 h-5 bg-[#00B1F4]" />
                  <span className="ml-2 text-[12px]">To Sponsor a child</span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 flex-1">
            <textarea className="border rounded-md p-5 " rows={4}  placeholder="your message" />
            <button className="bg-[#00B1F4] text-white px-4 py-2 rounded-md">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;

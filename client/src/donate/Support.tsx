import React from "react";

const Support = () => {
  return (
    <div>
      <h1>Support-Us</h1>
      <form>
        <div className="">
          <div className=" flex gap-10 my-5">
            <input
              className="p-[15px] border rounded-md"
              placeholder="Enter your first name"
            />
            <input
              className="p-[15px] border rounded-md"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex gap-10 ">
            <input className="p-[15px] border rounded-md" placeholder="Email" />
            <input
              className="p-[15px] border rounded-md"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="flex gap-10 my-5">
          <div className="border border-[#00B1F4] rounded-md p-5">
            <h1>How would you like to support us</h1>
            <div>
              <div>
                <label>
                  <input type="checkbox" />
                  To Hope For Children
                </label>
              </div>
              <div>
                <input type="checkbox" id="checkbox3" />
                <label htmlFor="checkbox3">   To one of our community program </label>
                <div className="ml-3">
                  <div>
                    <input type="checkbox" className="p-10" disabled />
                    <label>Youth Enrichment Center</label>
                  </div>
                  <div>
                    <input type="checkbox" disabled />
                    <label>Youth Enrichment Center</label>
                  </div>
                  <div>
                    <input type="checkbox" disabled />
                    <label>Youth Enrichment Center</label>
                  </div>
                </div>
              </div>
              <div>
                <label>
                  <input type="checkbox" />
                  To Sponsor a child
                </label>
              </div>
            </div>
          </div>

          <div>
            <textarea />
            <button>send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Support;

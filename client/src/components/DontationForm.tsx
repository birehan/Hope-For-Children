import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

const DonateForm = () => {
  const [value, setValue] = useState("");
  console.log("value: ", value);
  console.log("possible: ", isPossiblePhoneNumber(value) === true);
  console.log("valid: ", isValidPhoneNumber(value) === true);

  return (
    <div className="flex-1 ">
      <div>
        <h1 className="text-center mb-6 text-4xl">Donate Online</h1>
      </div>
      <div className="donate flex flex-col items-center justify-center  px-10">
        <form className="flex flex-col items-center justify-center w-full">
          <div className="sm:flex gap-5 w-full my-3">
            <input
              className="p-[10px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0"
              placeholder="Enter first name"
              required
            />
            <input
              className="p-[10px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0"
              placeholder="Enter second name"
              required
            />
          </div>
          <div className="sm:flex gap-5 w-full my-3">
            <input
              className="p-[10px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0 flex-1"
              placeholder="Enter email"
              required
            />
            <PhoneInput
              defaultCountry="ET"
              placeholder="Enter phone number"
              value={value}
              onChange={(event) => {
                if (event) {
                  setValue(event);
                }
              }}
              className="border border-[#00B1F4] rounded-md my-6 sm:my-0 flex-1 p-[10px] "
              error={
                value
                  ? isValidPhoneNumber(value)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
            />
          </div>
          <button
            type="submit"
            className="my-5 p-[10px] bg-[#00B1F4] w-full rounded-md text-white flex items-center justify-center gap-2"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

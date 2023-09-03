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
          <div className="sm:flex flex-col gap-5 w-full max-w-[50%] my-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <input
                className="p-[8px]  border w-full border-[#00B1F4] rounded-md mt-2 flex-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <PhoneInput
                defaultCountry="ET"
                value={value}
                onChange={(event) => {
                  if (event) {
                    setValue(event);
                  }
                }}
                className="border border-[#00B1F4] rounded-md mt-2 flex-1 p-[8px] "
                error={
                  value
                    ? isValidPhoneNumber(value)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>

            <div className="flex flex-row gap-5 w-full ">
              <select
                id="currency"
                // {...register("userRole", { required: true })}
                className="flex-[3] "
              >
                <option value="USD">USD</option>
                <option value="ETH">ETH</option>
              </select>
              {/* {errors.userRole?.type === "required" && (
                <p className="text-red-500" role="alert">
                  user role is required
                </p>
              )} */}
              <input
                className="p-[10px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0 flex-[6]"
                placeholder="Enter email"
                required
              />
            </div>

            <button
              type="submit"
              className="my-5 p-[10px] bg-[#00B1F4] w-full rounded-md text-white flex items-center justify-center gap-2"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

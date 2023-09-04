import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { BsChevronDown } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const DonateForm = () => {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [isCurrencyErrorCurrency, setIsCurrencyErrorCurrency] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const toggle = () => {
    setOpenCurrency(!openCurrency);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleCurrencyClick = (currency: string) => {
    setSelectedCurrency(currency);
    setIsCurrencyErrorCurrency(false);
    setOpenCurrency(false);
  };

  const onSubmit = async (data: any) => {
    if (selectedCurrency === "") {
      setIsCurrencyErrorCurrency(true);
      return;
    }

    const headers = {
      Authorization: "Bearer CHASECK_TEST-ZaAiop01mDqF0smCOoapYl5GAXprW0Im",
      "Content-Type": "application/json",
    };

    const dataToSend = {
      amount: "100",
      currency: "ETB",
      email: "abebech_bekele@gmail.com",
      first_name: "Bilen",
      last_name: "Gizachew",
      phone_number: "0912345678",
      tx_ref: "chewatatest-6669",
      callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: "https://www.google.com/",
      "customization[title]": "Payment for my favourite merchant",
      "customization[description]": "I love online payments",
    };

    try {
      const response = await axios.post(
        "https://api.chapa.co/v1/transaction/initialize",
        dataToSend,
        {
          headers,
          // mode: "no-cors", // Add 'no-cors' mode here
        }
      );

      console.log("response: ", response);
      // You won't have access to the response data due to 'no-cors' mode
    } catch (error) {
      console.error("error: ", error);
      // Handle errors here
    }
  };

  // dispatch(CreateUserAction(data));

  return (
    <div className="flex-1 ">
      <div>
        <h1 className="text-center mb-6 text-4xl">Donate Now</h1>
        <p></p>
      </div>
      <div className="donate flex flex-col items-center justify-center  px-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center w-full"
        >
          <div className="sm:flex flex-col gap-5 w-full md:w-[70%] lg:w-[50%] my-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <input
                className="p-[8px]  border w-full border-[#00B1F4] rounded-md mt-2 flex-1"
                {...register("email", {
                  required: true,
                  pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500" role="alert">
                  email is required
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500" role="alert">
                  please enter valid email
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>

              <Controller
                name="phone_number"
                control={control}
                rules={{
                  validate: (value) =>
                    value ? isValidPhoneNumber(value) : false,
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="ET"
                    id="phone_number"
                    className="border border-[#00B1F4] rounded-md mt-2 flex-1 p-[8px] "
                  />
                )}
              />
              {errors["phone_number"] && (
                <p className="error-message text-red-500">Invalid Phone</p>
              )}
            </div>

            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Donation Amount
              </label>
              <div className="mt-2 flex flex-row gap-4">
                <div className="relative flex-[4]">
                  <button
                    type="button"
                    onClick={() => toggle()}
                    className={`flex w-full items-center justify-between  rounded bg-white p-2 ring-1 ring-[#00B1F4] ${
                      openCurrency ? "#00B1F4" : ""
                    }`}
                  >
                    <span>
                      {selectedCurrency === ""
                        ? "Select currency"
                        : selectedCurrency}
                    </span>
                    <BsChevronDown className="fas fa-chevron-down text-md text-[#b9bec8] " />
                  </button>

                  {openCurrency && (
                    <ul className="z-2 absolute mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300">
                      <li
                        className="cursor-pointer select-none p-2 hover:bg-gray-200"
                        onClick={() => handleCurrencyClick("USD")}
                      >
                        USD
                      </li>
                      <li
                        className="cursor-pointer select-none p-2 hover:bg-gray-200"
                        onClick={() => handleCurrencyClick("ETH")}
                      >
                        ETH
                      </li>
                    </ul>
                  )}

                  {selectedCurrency === "" && (
                    <p className="text-red-500" role="alert">
                      currency is required
                    </p>
                  )}
                </div>

                <div>
                  <input
                    className="remove-arrow p-[8px] border w-full border-[#00B1F4] rounded-md my-6 sm:my-0 flex-[7]"
                    placeholder="Amount"
                    type="number"
                    {...register("amount", {
                      required: true,
                    })}
                  />
                  {errors.amount?.type === "required" && (
                    <p className="text-red-500" role="alert">
                      amount is required
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="my-5 p-[10px] bg-[#00B1F4] w-full rounded-md text-white flex items-center justify-center gap-2"
            >
              DONATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;

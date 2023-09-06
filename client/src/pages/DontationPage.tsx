import React from "react";
import CommonLanding from "../components/CommonLanding";
import DonateForm from "../components/DontationForm";

const DontationPage = () => {
  return (
    <div>
      <CommonLanding
        title="Donating is about making a Difference."
        icon={null}
      />

      <div className="px-6 mt-8 xl:mt-16">
        <div className="mx-auto  max-w-[70rem]">
          <div className=" my-3">
            <h1 className="text-2xl">Bank Account Details</h1>
          </div>
          <div className="border rounded-md px-4 text-base md:text-lg w-full">
            <div className="grid grid-cols-12 auto-cols-max gap-2 md:gap-4  py-4">
              <h1 className="text-[#00B1F4] col-span-1">01</h1>
              <h1 className="col-span-4">BANK OF ABYSSINIA</h1>
              <h1 className="col-span-3">62246871</h1>
              <h1 className="col-span-4">Hope for Children Organization</h1>
            </div>
            <hr />
            <div className="grid grid-cols-12 md:gap-4 gap-2  my-4">
              <h1 className="text-[#00B1F4]">02</h1>
              <h1 className="col-span-4">COMMERCIAL BANK OF ETHIOPIA</h1>
              <h1 className="col-span-3">1000010785069</h1>
              <h1 className="col-span-4">Hope for Children Organization</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[35rem]  shadow-md border-[#00B1F4] rounded-md mt-12 p-6 bg-white">
          <DonateForm />
        </div>
      </div>
    </div>
  );
};

export default DontationPage;

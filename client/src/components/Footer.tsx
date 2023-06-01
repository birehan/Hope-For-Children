import {
  Facebook,
  FacebookRounded,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F7F8FC80]">
      <div className="px-5 pt-14 pb-5 flex-wrap md:flex-nowrap flex justify-between max-w-[1300px] m-auto">
        <div>
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Hope For Children
          </h1>
          <p className="mt-2">Children Grow in a happy</p>
          <p className="mb-2">and healthy environment</p>
          <div className="flex items-center mt-3">
            <button className="w-10 h-10 border rounded-[50%] left-441 top-5904 bg-[#FFFFFF] shadow-md">
              <FacebookRounded />
            </button>
            <button className="w-12 h-12 border mx-3 rounded-[50%] left-441 top-5904 bg-blue-500 shadow-md">
              <Instagram className="text-white" />
            </button>
            <button className="w-10 h-10 border rounded-[50%] left-441 top-5904 bg-[#FFFFFF]  shadow-md">
            <Twitter />
            </button>
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Company
          </h1>
          <ul className="mt-2">
            <li>About</li>
            <li>Projects</li>
            <li>Program</li>
            <li>Donate</li>
          </ul>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="font-volkhov font-bold text-xl leading-6 tracking-wider text-primary-b">
            Contact
          </h1>
          <p className="mt-2">Phone : +2519857474748</p>
          <p>P O X Number : 250</p>
          <p>Email : hopeforchildren12@gmail.com</p>
        </div>
      </div>
      <div className="max-w-[1000px] px-5 m-auto">
      <hr className="border border-gray-400 border-opacity-50"/>
        <div className="flex justify-between my-4">
          <p>@ Hope For Children all rights reserved</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

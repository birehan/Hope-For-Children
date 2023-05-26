import React from "react";
import Image from "next/image";
import gallery from "../../../common/images/gallery.png";

const Hero = () => {
  return (
    <div className="max-h-[90vh]">
      <div className="w-full relative">
        <Image
          className="w-full max-h-[90vh] object-cover"
          src={gallery}
          alt="a child"
        />
      </div>
      <div className="w-full min-h-[90vh] bg-black/20 flex justify-center items-center absolute top-0  text-white text-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-[50px]">
              WELCOME TO OUR <span className="text-[#00B1F4]">GALLERY</span>
            </h1>
            <p>Check some of our achievements through our gallery</p>
          </div>
          <div className="flex justify-center items-center p-4 gap-10">
            <button className="w-44 h-14 bg-blue-500 rounded-full transition duration-300 ease-in-out hover:bg-blue-600">
              Donate Now
            </button>
            <button className="border border-white w-44 h-14 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

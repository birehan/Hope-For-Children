import React from "react";
import Image from "next/image";
import gallery from "../../../common/images/gallery.png";

const Hero = () => {
  return (
    <div className="min-h-[90vh] lg:max-h-[90vh]">
      <div className="w-full relative">
        <Image
          className="w-full min-h-[90vh]  lg:max-h-[90vh] object-cover"
          src={gallery}
          alt="a child"
        />
      </div>
      <div className="w-full min-h-[90vh] lg:max-h-[90vh] bg-black/60 flex self-auto justify-center items-center absolute top-0  text-white text-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              WELCOME TO OUR <span className="text-[#00B1F4]">GALLERY</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Check some of our achievements through our gallery</p>
          </div>
          <div className="flex justify-center items-center p-4 gap-10">
            <button className="w-32 sm:w-40 h-10 sm:h-12 bg-blue-500 rounded-full transition duration-300 ease-in-out hover:bg-blue-600">
              Donate Now
            </button>
            <button className="border border-white w-32 sm:w-40 h-10 sm:h-12 rounded-full transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
